# Met à jour planning.js à partir d'un lien d'agenda iCal (Net-YParéo ou Outlook publié).
# Le lien est secret : il est lu dans la variable d'environnement PLANNING_ICS (secret GitHub),
# jamais écrit dans le dépôt. Les participants (élèves) ne sont PAS repris : le site est public.
# Usage : PLANNING_ICS=https://… python3 notifs/planning-ics.py [planning.js]   (ou un fichier .ics en 2e argument)
import datetime, json, os, pathlib, re, sys, urllib.error, urllib.request
from zoneinfo import ZoneInfo

PARIS = ZoneInfo("Europe/Paris")
sortie = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "planning.js")

if len(sys.argv) > 2:
    txt = pathlib.Path(sys.argv[2]).read_bytes()
else:
    url = os.environ.get("PLANNING_ICS", "").strip()
    if not url:
        print("PLANNING_ICS absent : rien à faire."); sys.exit(0)
    url = re.sub(r"^webcals?://", "https://", url)
    lire = lambda u, ctx=None: urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0 (planning Licence CAIE)"}), timeout=60, context=ctx).read()
    import ssl, time
    ctx = None
    for essai in range(1, 4):
        try:
            txt = lire(url, ctx); break
        except urllib.error.HTTPError:
            raise
        except urllib.error.URLError as e:
            # Le serveur Net-YParéo de l'école présente un certificat valide mais établi pour un autre nom :
            # on garde la vérification de la chaîne de confiance et on ne saute que la vérification du nom.
            if ctx is None and "HOSTNAME MISMATCH" in str(e.reason).upper():
                ctx = ssl.create_default_context(); ctx.check_hostname = False
                print("Certificat du serveur émis pour un autre nom : lecture avec la chaîne vérifiée, sans contrôle du nom.")
                try: txt = lire(url, ctx); break
                except urllib.error.URLError as e2: e = e2
            if essai < 3:
                print(f"Serveur de l'agenda injoignable ({e.reason}), nouvel essai dans 30 s…"); time.sleep(30)
                continue
            # Serveur de l'école en panne ou injoignable : ce n'est pas une erreur du dépôt. On garde le
            # planning actuel et on signale seulement un avertissement (pas d'échec ni de mail d'alerte).
            print(f"::warning::Serveur de l'agenda injoignable après 3 essais ({e.reason}) : planning inchangé.")
            sys.exit(0)
try: txt = txt.decode("utf-8")
except UnicodeDecodeError: txt = txt.decode("cp1252")
if "BEGIN:VCALENDAR" not in txt:
    sys.exit("Le lien ne renvoie pas un agenda iCal (VCALENDAR). Vérifie le secret PLANNING_ICS.")

# Dépliage des lignes (RFC 5545) puis découpage en VEVENT
lignes = re.sub(r"\r?\n[ \t]", "", txt).splitlines()
evts, cur = [], None
for l in lignes:
    if l == "BEGIN:VEVENT": cur = {}
    elif l == "END:VEVENT":
        if cur is not None: evts.append(cur)
        cur = None
    elif cur is not None and ":" in l:
        k, v = l.split(":", 1)
        nom, *params = k.split(";")
        if nom == "ATTENDEE": continue  # élèves : jamais publiés
        cur[nom] = (v, dict(p.split("=", 1) for p in params if "=" in p))

def texte(e, k):
    v = e.get(k, ("", {}))[0]
    return v.replace("\\n", "\n").replace("\\N", "\n").replace("\\,", ",").replace("\\;", ";").replace("\\\\", "\\").strip()

def quand(e, k):
    v, p = e.get(k, ("", {}))
    if not v: return None
    if re.fullmatch(r"\d{8}", v):
        return datetime.datetime.strptime(v, "%Y%m%d").replace(tzinfo=PARIS)
    dt = datetime.datetime.strptime(v.rstrip("Z")[:15], "%Y%m%dT%H%M%S")
    if v.endswith("Z"): dt = dt.replace(tzinfo=datetime.timezone.utc)
    else:
        try: dt = dt.replace(tzinfo=ZoneInfo(p.get("TZID", "Europe/Paris").strip('"')))
        except Exception: dt = dt.replace(tzinfo=PARIS)
    return dt.astimezone(PARIS)

if os.environ.get("DIAG"):
    # Diagnostic : structure de quelques événements (sans participants ni adresses e-mail)
    for e in [x for x in evts if x.get("DTSTART", ("",))[0][:8] in ("20261005", "20261013", "20261008")][:4]:
        for k, (v, p) in e.items():
            if k in ("ORGANIZER",): v = p.get("CN", "")
            print(k, "=", re.sub(r"\S+@\S+", "<mail>", v)[:160])
        print("---")
    print(len(evts), "événements"); sys.exit(0)

# Mêmes règles que outils/planning-csv.py (export CSV)
def ue_nom(desc):
    m = re.search(r"(?m)^\s*([A-Z]{3,}[A-Z0-9]*)\s*:\s*(.*)$", desc or "")
    if not m: return "", ""
    nom = re.sub(r"\s+(CO|CT)$", "", m.group(2).strip())
    nom = re.sub(r"\s*\(\d+ ECTS\)\s*$", "", nom)
    nom = re.sub(r"\s+Licence Charg.*$", "", nom)
    return m.group(1), nom.strip()

def prof(org):
    m = re.match(r"\s*(M|Mme)\.?\s+([A-ZÀ-Ÿ' -]+?)\s+[A-ZÀ-Ÿ][a-zà-ÿ]", org or "")
    if not m or m.group(2) in ("SANS", "Enseignant"): return ""
    return ("M." if m.group(1) == "M" else "Mme") + " " + m.group(2).title()

def salle(loc):
    if not loc: return ""
    s = loc.split(" - ", 1)[1] if " - " in loc else loc
    if s.strip().lower() == "salle en extérieur": return "CNAM centre-ville"
    return s.replace("Amphithéatre", "Amphithéâtre").replace("Salle Comédie - ", "Comédie · ")

# Format de l'agenda Net-YParéo : SUMMARY = « Matière - M. NOM », LOCATION = salle, pas de code UE
# ni de demi-journées en entreprise. On fusionne donc avec le planning existant (issu de l'export CSV,
# plus détaillé) : un créneau déjà connu garde son titre, son UE et sa salle tant que la matière de
# l'agenda ne change pas ; les créneaux nouveaux viennent de l'agenda ; les créneaux de cours absents
# de l'agenda sont retirés (annulés ou déplacés). Les jours en entreprise / autonomie sont conservés.
avant = None
if sortie.exists():
    m = re.search(r"window\.PLANNING = (.*);\s*$", sortie.read_text(encoding="utf-8"), re.S)
    if m: avant = json.loads(m.group(1))
anciens = {(x["d"], x["h1"], x["h2"]): x for x in (avant or {}).get("evenements", [])}

def prof_ics(nom):
    m = re.match(r"\s*(M\.?|Mme)\s+(.+)$", nom or "")
    if not m: return ""
    return ("M." if m.group(1).startswith("M") and m.group(1) != "Mme" else "Mme") + " " + m.group(2).strip().title()

ev, pris = [], set()
for e in evts:
    if texte(e, "STATUS").upper() == "CANCELLED": continue
    d1, d2 = quand(e, "DTSTART"), quand(e, "DTEND")
    if not d1: continue
    d2 = d2 or d1
    obj = texte(e, "SUMMARY")
    parts = [p.strip() for p in obj.split(" - ")]
    profs = [p for p in parts if re.match(r"(M\.?|Mme)\s", p)]
    matiere = " - ".join(p for p in parts if p not in profs) or obj
    matiere = matiere.replace("Evenementiel", "Événementiel"); matiere = matiere[:1].upper() + matiere[1:]
    cle = (d1.strftime("%Y-%m-%d"), d1.strftime("%H:%M"), d2.strftime("%H:%M"))
    if "entreprise" in obj.lower(): t = "entreprise"
    elif "autonomie" in obj.lower(): t = "autonomie"
    elif "soutenance" in obj.lower(): t = "soutenance"
    else: t = "cours"
    x = dict(anciens.get(cle) or {})
    if not x or x.get("s", matiere) != matiere or (x.get("t") != t and t == "cours"):
        x.update({"t": t, "titre": matiere if t == "cours" else {"entreprise": "En entreprise", "autonomie": "Travail en autonomie"}.get(t, matiere),
                  "code": "", "ue": "", "salle": salle(texte(e, "LOCATION"))})
    x.update({"d": cle[0], "h1": cle[1], "h2": cle[2], "s": matiere})
    if profs: x["prof"] = ", ".join(prof_ics(p) for p in profs)
    x.setdefault("prof", "")
    pris.add(cle); ev.append(x)
if not ev: sys.exit("Agenda vide : planning.js laissé tel quel.")
debut, fin = min(x["d"] for x in ev), max(x["d"] for x in ev)
for cle, x in anciens.items():
    if cle in pris: continue
    if x.get("t") != "cours" or not (debut <= x["d"] <= fin):
        if not any(c[0] == cle[0] and c[1] < cle[2] and cle[1] < c[2] for c in pris): ev.append(x)
ev.sort(key=lambda x: (x["d"], x["h1"]))

# On n'écrit que si les créneaux ont changé (évite un commit par jour pour rien)
if avant and avant.get("evenements") == ev:
    print(len(ev), "créneaux, inchangé."); sys.exit(0)
out = {"maj": datetime.date.today().isoformat(), "lieu": (avant or {}).get("lieu", "Cnam Niort, 10 place de la Comédie, 79000 Niort"), "evenements": ev}
sortie.write_text("// Planning de la Licence (agenda iCal Net-YParéo), généré par notifs/planning-ics.py\nwindow.PLANNING = "
                  + json.dumps(out, ensure_ascii=False, indent=0) + ";\n", encoding="utf-8")
print(len(ev), "créneaux, planning.js mis à jour.")
