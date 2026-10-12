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
    try:
        txt = lire(url)
    except urllib.error.URLError as e:
        # Le serveur Net-YParéo de l'école présente un certificat valide mais établi pour un autre nom :
        # on garde la vérification de la chaîne de confiance et on ne saute que la vérification du nom.
        if "HOSTNAME MISMATCH" not in str(e.reason).upper(): raise
        import ssl
        ctx = ssl.create_default_context(); ctx.check_hostname = False
        print("Certificat du serveur émis pour un autre nom : lecture avec la chaîne vérifiée, sans contrôle du nom.")
        txt = lire(url, ctx)
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
    return s.replace("Amphithéatre", "Amphithéâtre").replace("Salle Comédie - ", "Comédie · ")

ev = []
for e in evts:
    if texte(e, "STATUS").upper() == "CANCELLED": continue
    d1, d2 = quand(e, "DTSTART"), quand(e, "DTEND")
    if not d1: continue
    d2 = d2 or d1
    obj = texte(e, "SUMMARY")
    code, ue = ue_nom(texte(e, "DESCRIPTION"))
    org = e.get("ORGANIZER", ("", {}))[1].get("CN", "").strip('"')
    if obj.startswith("Demi-journée en entreprise"): t, titre = "entreprise", "En entreprise"
    elif "Travail en autonomie" in obj: t, titre = "autonomie", "Travail en autonomie"
    elif "Soutenance" in obj: t, titre = "soutenance", f"Soutenance : {ue}" if ue else "Soutenance orale"
    elif obj == "Demi-journée de cours": t, titre = "cours", "Cours"
    else:
        t = "cours"
        parts = [p.strip() for p in obj.split(" - ")]
        mid = [p for p in parts[1:] if p not in ("Cours",)]
        titre = " - ".join(mid) if mid else (ue or obj)
    titre = titre.replace("Evenementiel", "Événementiel"); titre = titre[:1].upper() + titre[1:]
    ue = ue.replace("Evenementiel", "Événementiel")
    ev.append({"d": d1.strftime("%Y-%m-%d"), "h1": d1.strftime("%H:%M"), "h2": d2.strftime("%H:%M"), "t": t, "titre": titre,
               "code": code, "ue": ue if t != "entreprise" else "", "salle": salle(texte(e, "LOCATION")), "prof": prof(org)})
ev.sort(key=lambda x: (x["d"], x["h1"]))
if not ev: sys.exit("Agenda vide : planning.js laissé tel quel.")

# On n'écrit que si les créneaux ont changé (évite un commit par jour pour rien)
avant = None
if sortie.exists():
    m = re.search(r"window\.PLANNING = (.*);\s*$", sortie.read_text(encoding="utf-8"), re.S)
    if m: avant = json.loads(m.group(1))
if avant and avant.get("evenements") == ev:
    print(len(ev), "créneaux, inchangé."); sys.exit(0)
out = {"maj": datetime.date.today().isoformat(), "lieu": (avant or {}).get("lieu", "Cnam Niort, 10 place de la Comédie, 79000 Niort"), "evenements": ev}
sortie.write_text("// Planning de la Licence (agenda iCal Net-YParéo), généré par notifs/planning-ics.py\nwindow.PLANNING = "
                  + json.dumps(out, ensure_ascii=False, indent=0) + ";\n", encoding="utf-8")
print(len(ev), "créneaux, planning.js mis à jour.")
