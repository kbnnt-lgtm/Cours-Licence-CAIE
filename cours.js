/*
  Contenu de l'appli "Cours Licence CAIE".
  Chaque nouveau cours envoyé = un chapitre ajouté dans la bonne matière.

  Format :
  matiere  : { id, nom, code?, semestre?, couleur, chapitres: [...] }
  chapitre : { id, titre, date?, source?, resume, sections: [{ titre, html }],
               pointsCles?: [texte], definitions?: [{ terme, def }],
               flashcards?: [{ q, r }],
               quiz?: [{ q, choix: [texte], bonne: index, explication? }] }
  Le Quiz de l'appli se construit tout seul à partir des flashcards, des
  définitions et des éventuels « quiz » écrits à la main.
*/
window.COURS = {
  "maj": "2026-10-08",
  "matieres": [
    {
      "id": "automatisme",
      "nom": "Automatisme",
      "semestre": "Représentation et traitement des données",
      "couleur": "#d9480f",
      "chapitres": [
        {
          "id": "systemes-automatises",
          "titre": "Les systèmes automatisés",
          "date": "2026-10-08",
          "source": "Polycopié UIMM « Les Systèmes Automatisés » p. 1 à 5",
          "resume": "Un système de production est automatisé lorsqu'il gère de manière autonome un cycle de travail préétabli. Il est organisé en trois parties reliées entre elles : la partie relation (dialogue avec l'opérateur), la partie commande (traitement de l'information) et la partie opérative (préactionneurs, actionneurs, capteurs), qui transforme la matière d'œuvre et produit la valeur ajoutée.",
          "sections": [
            {
              "titre": "Introduction : le Système Automatisé de Production (SAP)",
              "html": "<p><b>Objectifs du chapitre :</b> définir ce qu'est un SAP, distinguer les différentes parties de l'architecture d'un système automatisé, désigner et expliquer les différentes parties d'un automate.</p>\n<p><b>Définition :</b> un système de production est dit <b>automatisé</b> lorsqu'il peut gérer de manière <b>autonome</b> un <b>cycle de travail préétabli</b> qui se décompose en <b>séquences et/ou en étapes</b>.</p>\n<p><b>Pourquoi automatiser ?</b></p><p>Autrement dit : une fois lancé, le système enchaîne tout seul les mêmes opérations, dans le même ordre, sans qu'un opérateur intervienne à chaque étape.</p>\n<table><thead><tr><th>Avantages</th><th>Inconvénients</th></tr></thead><tbody>\n<tr><td>Élimination des tâches pénibles</td><td>Coût d'installation</td></tr>\n<tr><td>Augmentation de la sécurité</td><td>Maintenance structurée nécessaire</td></tr>\n<tr><td>Capacité de production améliorée</td><td>Suppression d'emplois</td></tr>\n<tr><td>S'adapte aux contraintes</td><td></td></tr>\n<tr><td>Souplesse d'utilisation</td><td></td></tr>\n<tr><td>Création de postes d'automaticien</td><td></td></tr></tbody></table>\n<p><b>Exemple industriel : la chaîne d'embouteillage.</b> Les bouteilles vides arrivent sur palette, sont dépalettisées, puis traitées de façon autonome. Un convoyeur les achemine de poste en poste :</p>\n<ol><li>acheminement au poste de remplissage, puis <b>remplissage</b> ;</li><li>acheminement au poste de bouchage, puis <b>bouchage</b> ;</li><li>acheminement au poste d'étiquetage, puis <b>étiquetage</b> ;</li><li>acheminement au poste de mise en carton, puis <b>mise en carton</b>.</li></ol><div class=\"exemple\"><b>Exemple concret :</b> une machine à café automatique est un petit SAP. Tu appuies une fois sur « expresso » et elle enchaîne seule : moudre, tasser, chauffer l'eau, faire couler, arrêter. Un moulin à café manuel, lui, n'est pas automatisé : c'est toi qui fais chaque étape.</div>\n<p>C'est un enchaînement d'étapes dans le temps : un système <b>séquentiel</b> (la différence entre combinatoire et séquentiel est expliquée dans le chapitre Logique combinatoire).</p>\n<p><i>Suite du poly (pas encore ajoutée) : partie commande, partie relation, structure d'un automate (alimentation, processeur, mémoire, cartes d'entrées/sorties) et support de communication (signaux TOR, analogique, numérique).</i></p>"
            },
            {
              "titre": "Domaines d'application",
              "html": "<p><b>Gestion Technique du Bâtiment (GTB) :</b> un bâtiment moderne regroupe de nombreux systèmes automatisés, supervisés ensemble :</p>\n<ul>\n<li>chauffage, ventilation, climatisation (CVC) et leur maintenance ;</li>\n<li>détection incendie et alarme, désenfumage ;</li>\n<li>sécurité et contrôle d'accès, détection d'intrusion, vidéosurveillance ;</li>\n<li>gestion de l'éclairage, qualité de l'air intérieur, contrôle de l'environnement ;</li>\n<li>gestion de l'eau, de l'énergie et des charges électriques, suivi des consommations ;</li>\n<li>maintenance mécanique, localisation des équipements, service technique sur site et intégration de tous ces systèmes.</li>\n</ul>\n<p><b>Autres domaines :</b></p>\n<ul>\n<li>convoyage, stockage, emballage, machines de chantier, engins de levage ;</li>\n<li>régulation de processus : chimie, pharmaceutique, traitement des eaux, fours, métallurgie ;</li>\n<li>transports : chemins de fer, signalisation routière, marine ;</li>\n<li>attractions.</li>\n</ul>"
            },
            {
              "titre": "Architecture : PO, PC et PR",
              "html": "<p>Les systèmes automatisés utilisés dans l'industrie ont tous la <b>même structure de base</b>. Ils sont constitués de plusieurs parties, plus ou moins complexes, reliées entre elles :</p>\n<ul>\n<li>la <b>partie opérative (PO)</b> ;</li>\n<li>la <b>partie commande (PC)</b>, ou système de contrôle/commande (SCC) ;</li>\n<li>la <b>partie relation (PR)</b>, de plus en plus intégrée dans la partie commande.</li>\n</ul>\n<div class=\"tbl\"><svg viewBox=\"0 0 720 330\" role=\"img\" aria-label=\"Architecture d'un système automatisé : partie relation, partie commande, partie opérative\" style=\"width:100%;min-width:560px;max-width:720px;font-family:var(--f-ui);font-size:13px\">\n<defs><marker id=\"fl\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"var(--ink)\"/></marker></defs>\n<g fill=\"none\" stroke=\"var(--line)\" stroke-dasharray=\"4 4\"><line x1=\"175\" y1=\"10\" x2=\"175\" y2=\"290\"/><line x1=\"385\" y1=\"10\" x2=\"385\" y2=\"290\"/></g>\n<g fill=\"var(--muted)\" font-size=\"11\" letter-spacing=\"1\" text-anchor=\"middle\"><text x=\"88\" y=\"315\">PARTIE RELATION</text><text x=\"280\" y=\"315\">PARTIE COMMANDE</text><text x=\"550\" y=\"315\">PARTIE OPÉRATIVE</text></g>\n<g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\">\n<rect x=\"15\" y=\"110\" width=\"140\" height=\"70\" rx=\"6\"/><rect x=\"195\" y=\"90\" width=\"170\" height=\"130\" rx=\"6\"/>\n<rect x=\"405\" y=\"95\" width=\"120\" height=\"40\" rx=\"6\"/><rect x=\"405\" y=\"175\" width=\"120\" height=\"40\" rx=\"6\"/>\n<rect x=\"580\" y=\"80\" width=\"125\" height=\"150\" rx=\"6\" stroke-width=\"2.5\"/></g>\n<g fill=\"var(--accent-soft)\" stroke=\"var(--accent)\"><rect x=\"420\" y=\"12\" width=\"90\" height=\"28\" rx=\"14\"/><rect x=\"590\" y=\"12\" width=\"105\" height=\"28\" rx=\"14\"/><rect x=\"580\" y=\"262\" width=\"125\" height=\"40\" rx=\"8\"/></g>\n<g fill=\"var(--ink)\" text-anchor=\"middle\">\n<text x=\"85\" y=\"140\">Pupitre de</text><text x=\"85\" y=\"157\">commande, IHM</text>\n<text x=\"280\" y=\"125\" font-weight=\"600\">Traitement de</text><text x=\"280\" y=\"142\" font-weight=\"600\">l'information</text><text x=\"280\" y=\"168\" font-size=\"12\">lit les capteurs,</text><text x=\"280\" y=\"184\" font-size=\"12\">écrit les commandes</text><text x=\"280\" y=\"200\" font-size=\"12\">aux préactionneurs</text>\n<text x=\"465\" y=\"120\">Préactionneurs</text><text x=\"465\" y=\"200\">Capteurs</text>\n<text x=\"642\" y=\"130\" font-weight=\"600\">Actionneurs</text><text x=\"642\" y=\"152\" font-size=\"12\">déplacer, tourner,</text><text x=\"642\" y=\"168\" font-size=\"12\">chauffer…</text>\n<text x=\"465\" y=\"31\">Énergie</text><text x=\"642\" y=\"31\">Matière d'œuvre</text><text x=\"642\" y=\"279\" font-size=\"12\">Matière d'œuvre</text><text x=\"642\" y=\"294\" font-size=\"12\">+ valeur ajoutée</text></g>\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" marker-end=\"url(#fl)\">\n<line x1=\"155\" y1=\"135\" x2=\"193\" y2=\"135\"/><line x1=\"195\" y1=\"160\" x2=\"157\" y2=\"160\"/>\n<line x1=\"365\" y1=\"115\" x2=\"403\" y2=\"115\"/><line x1=\"525\" y1=\"115\" x2=\"578\" y2=\"115\"/>\n<line x1=\"578\" y1=\"195\" x2=\"527\" y2=\"195\"/><line x1=\"405\" y1=\"195\" x2=\"367\" y2=\"195\"/>\n<line x1=\"465\" y1=\"40\" x2=\"465\" y2=\"93\"/><line x1=\"420\" y1=\"26\" x2=\"300\" y2=\"26\"/><line x1=\"300\" y1=\"26\" x2=\"300\" y2=\"88\"/>\n<line x1=\"642\" y1=\"40\" x2=\"642\" y2=\"78\"/><line x1=\"642\" y1=\"230\" x2=\"642\" y2=\"260\"/></g>\n</svg></div>\n<p><b>Comment lire le schéma :</b> l'opérateur donne ses consignes au pupitre (PR). La partie commande lit l'état des capteurs, traite l'information et envoie ses ordres aux préactionneurs. Ceux-ci distribuent l'énergie aux actionneurs, qui agissent sur la matière d'œuvre (déplacer, tourner, chauffer…). Les capteurs renvoient l'état de la partie opérative à la partie commande, qui informe le pupitre.</p>\n<p><b>La partie opérative</b> assure les modifications de la matière d'œuvre et produit la <b>valeur ajoutée</b>.</p>\n<p><b>La partie commande</b> gère de façon coordonnée les actions souhaitées de la partie opérative, à partir d'un modèle de fonctionnement et de diverses consignes.</p>\n<p><b>La matière d'œuvre</b> est l'ensemble des éléments modifiés par l'intervention du système étudié. En sortie, on obtient la matière d'œuvre + la valeur ajoutée.</p><div class=\"exemple\"><b>Exemple concret, la chaîne d'embouteillage :</b><br>• <b>PR</b> : le pupitre avec les boutons marche / arrêt, l'arrêt d'urgence et l'écran (IHM, interface homme-machine).<br>• <b>PC</b> : l'automate qui décide quand remplir, boucher, étiqueter.<br>• <b>PO</b> : le moteur du convoyeur, la vanne de remplissage, le vérin de bouchage, et les capteurs qui détectent les bouteilles.<br>• <b>Matière d'œuvre</b> : la bouteille vide. <b>Valeur ajoutée</b> : elle ressort remplie, bouchée, étiquetée et mise en carton.</div><div class=\"attention\"><b>Attention :</b> les capteurs font partie de la <b>partie opérative</b> (ils sont sur la machine), même s'ils envoient leurs informations à la partie commande.</div>"
            },
            {
              "titre": "La partie opérative : actionneurs et préactionneurs",
              "html": "<p>La partie opérative est la <b>partie visible</b> du système. Elle comporte les éléments du procédé : actionneurs, préactionneurs et capteurs.</p>\n<p><b>Les actionneurs</b> (vérins, moteurs, vannes) <b>exécutent les ordres</b> de la partie commande. Ils transforment l'énergie reçue des préactionneurs (électrique, pneumatique, hydraulique) en <b>énergie mécanique</b>, ce qui modifie l'état du système (déplacement, rotation…) et/ou la matière d'œuvre (usinage…).</p>\n<p><b>Les préactionneurs</b> (distributeurs, contacteurs…) <b>reçoivent les ordres</b> de la partie commande (<b>faible énergie</b>) et <b>distribuent l'énergie</b> aux actionneurs (<b>énergie forte</b>). Ce sont des intermédiaires pour la commande des actionneurs.</p><div class=\"exemple\"><b>Exemple concret :</b> la sortie d'un automate fournit un petit signal (par exemple 24 V, quelques dizaines de milliampères). Elle ne peut pas alimenter directement un moteur triphasé de 400 V. On lui fait commander la bobine d'un <b>contacteur</b> (le préactionneur), et ce sont les contacts de puissance du contacteur qui alimentent le <b>moteur</b> (l'actionneur). C'est comme un interrupteur de lumière : petit geste, grosse énergie commandée.</div>\n<table><thead><tr><th>Actionneur</th><th>Énergie reçue</th><th>Préactionneur associé</th></tr></thead><tbody>\n<tr><td>Moteur électrique</td><td>électrique</td><td>contacteur</td></tr>\n<tr><td>Vérin pneumatique</td><td>pneumatique (air comprimé)</td><td>distributeur</td></tr>\n<tr><td>Vérin hydraulique</td><td>hydraulique (huile)</td><td>distributeur</td></tr></tbody></table><div class=\"attention\"><b>Attention :</b> ne confonds pas les deux. Le <b>préactionneur</b> distribue l'énergie (il « ouvre le robinet »), l'<b>actionneur</b> la transforme en mouvement (il « fait le travail »). Contacteur → moteur ; distributeur → vérin.</div>"
            },
            {
              "titre": "Les capteurs : TOR, analogiques, numériques",
              "html": "<p>Les capteurs <b>convertissent une grandeur physique</b> (température, vitesse, angle…) <b>en grandeur électrique</b> (tension, courant…). Ils informent la partie commande sur l'état de la partie opérative.</p>\n<p>Grâce à ces informations, la partie commande peut <b>contrôler, mesurer, surveiller</b> et informer la partie relation de l'évolution du système.</p>\n<p>Selon la nature de l'information, on distingue trois familles :</p>\n<table><thead><tr><th>Type</th><th>Information de sortie</th><th>Exemples</th></tr></thead><tbody>\n<tr><td><b>TOR</b> (Tout Ou Rien)</td><td>deux états seulement : vrai (1) ou faux (0)</td><td>interrupteurs de position, cellules photoélectriques, pressostats</td></tr>\n<tr><td><b>Analogique</b></td><td>souvent proportionnelle à la mesure effectuée</td><td>mesure de débits, de vitesse, de températures</td></tr>\n<tr><td><b>Numérique</b></td><td>codée sous forme d'un « mot numérique », traité informatiquement</td><td>générateurs d'impulsions, lecteurs de code-barres, systèmes radiofréquence (RFID)</td></tr></tbody></table>\n<p>Les capteurs numériques servent à mesurer une position, une vitesse, ou à identifier des produits.</p><div class=\"exemple\"><b>Exemple concret, sur la chaîne d'embouteillage :</b><br>• <b>TOR</b> : une cellule photoélectrique qui dit « bouteille présente » (1) ou « pas de bouteille » (0).<br>• <b>Analogique</b> : une sonde de température qui donne un signal qui varie en continu avec la température (en industrie, souvent un courant de 4 à 20 mA ou une tension de 0 à 10 V).<br>• <b>Numérique</b> : le lecteur de code-barres qui lit le numéro de lot sur l'étiquette.</div>"
            }
          ],
          "pointsCles": [
            "SAP : gère de manière autonome un cycle de travail préétabli, découpé en séquences et/ou étapes.",
            "Avantages : moins de tâches pénibles, plus de sécurité et de production. Inconvénients : coût, maintenance, emplois.",
            "3 parties : partie relation (PR), partie commande (PC ou SCC), partie opérative (PO).",
            "PO : modifie la matière d'œuvre et produit la valeur ajoutée. C'est la partie visible.",
            "PC : coordonne les actions de la PO à partir d'un modèle de fonctionnement et de consignes.",
            "Préactionneur : reçoit un ordre en faible énergie, distribue l'énergie forte à l'actionneur.",
            "Actionneur : transforme l'énergie en énergie mécanique (vérin, moteur, vanne).",
            "Capteur : grandeur physique → grandeur électrique. Trois types : TOR, analogique, numérique."
          ],
          "definitions": [
            {
              "terme": "SAP",
              "def": "Système Automatisé de Production : système qui gère de manière autonome un cycle de travail préétabli, décomposé en séquences et/ou en étapes."
            },
            {
              "terme": "GTB",
              "def": "Gestion Technique du Bâtiment : supervision centralisée des systèmes automatisés d'un bâtiment (CVC, éclairage, sécurité, énergie…)."
            },
            {
              "terme": "Partie opérative (PO)",
              "def": "Partie visible du système qui modifie la matière d'œuvre et produit la valeur ajoutée."
            },
            {
              "terme": "Partie commande (PC)",
              "def": "Partie qui gère de façon coordonnée les actions de la PO à partir d'un modèle de fonctionnement et de consignes. Aussi appelée SCC."
            },
            {
              "terme": "Partie relation (PR)",
              "def": "Dialogue avec l'opérateur (pupitre, IHM), de plus en plus intégrée à la partie commande."
            },
            {
              "terme": "Matière d'œuvre",
              "def": "Ensemble des éléments modifiés par l'intervention du système étudié."
            },
            {
              "terme": "Actionneur",
              "def": "Élément qui exécute les ordres de la PC en transformant l'énergie reçue en énergie mécanique (vérin, moteur, vanne)."
            },
            {
              "terme": "Préactionneur",
              "def": "Intermédiaire qui reçoit les ordres de la PC (faible énergie) et distribue l'énergie forte aux actionneurs (contacteur, distributeur)."
            },
            {
              "terme": "Capteur",
              "def": "Dispositif qui convertit une grandeur physique en grandeur électrique pour informer la PC."
            },
            {
              "terme": "Capteur TOR",
              "def": "Capteur Tout Ou Rien : information à deux états, vrai (1) ou faux (0)."
            },
            {
              "terme": "IHM",
              "def": "Interface Homme-Machine : pupitre ou écran qui permet à l'opérateur de dialoguer avec le système."
            }
          ],
          "flashcards": [
            {
              "q": "Que signifie SAP ?",
              "r": "Système Automatisé de Production."
            },
            {
              "q": "Quand dit-on qu'un système de production est automatisé ?",
              "r": "Lorsqu'il peut gérer de manière autonome un cycle de travail préétabli, décomposé en séquences et/ou en étapes."
            },
            {
              "q": "Cite 3 avantages des systèmes automatisés.",
              "r": "Élimination des tâches pénibles, augmentation de la sécurité, capacité de production améliorée (aussi : souplesse, création de postes d'automaticien)."
            },
            {
              "q": "Cite les 3 inconvénients des systèmes automatisés.",
              "r": "Coût d'installation, maintenance structurée, suppression d'emplois."
            },
            {
              "q": "Quelles sont les étapes de la chaîne d'embouteillage ?",
              "r": "Remplissage, bouchage, étiquetage, mise en carton (avec acheminement par convoyeur entre chaque poste)."
            },
            {
              "q": "Quelles sont les 3 parties d'un système automatisé ?",
              "r": "La partie relation (PR), la partie commande (PC) et la partie opérative (PO)."
            },
            {
              "q": "Quel est le rôle de la partie opérative ?",
              "r": "Modifier la matière d'œuvre et produire la valeur ajoutée."
            },
            {
              "q": "Quel est le rôle de la partie commande ?",
              "r": "Gérer de façon coordonnée les actions de la PO, à partir d'un modèle de fonctionnement et de consignes."
            },
            {
              "q": "Autre nom de la partie commande ?",
              "r": "Système de contrôle/commande (SCC)."
            },
            {
              "q": "Qu'est-ce que la matière d'œuvre ?",
              "r": "L'ensemble des éléments modifiés par l'intervention du système."
            },
            {
              "q": "Donne 3 exemples d'actionneurs.",
              "r": "Vérins, moteurs, vannes."
            },
            {
              "q": "Quel est le rôle d'un préactionneur ?",
              "r": "Recevoir les ordres de la PC (faible énergie) et distribuer l'énergie forte aux actionneurs."
            },
            {
              "q": "Donne 2 exemples de préactionneurs.",
              "r": "Contacteurs et distributeurs."
            },
            {
              "q": "Que fait un capteur ?",
              "r": "Il convertit une grandeur physique en grandeur électrique pour informer la PC de l'état de la PO."
            },
            {
              "q": "Que signifie TOR ? Combien d'états ?",
              "r": "Tout Ou Rien : deux états, vrai (1) ou faux (0)."
            },
            {
              "q": "Exemples de capteurs TOR ?",
              "r": "Interrupteurs de position, cellules photoélectriques, pressostats."
            },
            {
              "q": "Caractéristique d'un capteur analogique ?",
              "r": "Sa sortie est souvent proportionnelle à la mesure (débit, vitesse, température)."
            },
            {
              "q": "Exemples de capteurs numériques ?",
              "r": "Générateurs d'impulsions, lecteurs de code-barres, systèmes radiofréquence."
            },
            {
              "q": "Que veut dire GTB ?",
              "r": "Gestion Technique du Bâtiment."
            },
            {
              "q": "Chaîne d'embouteillage : à quelle partie appartiennent le pupitre, l'automate et le moteur du convoyeur ?",
              "r": "Pupitre = partie relation (PR) ; automate = partie commande (PC) ; moteur du convoyeur = partie opérative (PO)."
            },
            {
              "q": "Pourquoi l'automate ne commande-t-il pas directement un moteur 400 V ?",
              "r": "Sa sortie ne fournit qu'une faible énergie (ex. 24 V). Il commande un contacteur (préactionneur) qui, lui, distribue l'énergie forte au moteur."
            },
            {
              "q": "Une sonde de température donnant 4 à 20 mA : capteur TOR, analogique ou numérique ?",
              "r": "Analogique : le signal varie en continu avec la température."
            }
          ],
          "quiz": [
            {
              "q": "Qu'est-ce qui définit un système automatisé de production (SAP) ?",
              "choix": [
                "Il gère de manière autonome un cycle de travail préétabli",
                "Il fonctionne uniquement avec de l'énergie électrique",
                "Il ne contient aucun capteur",
                "Un opérateur commande chaque étape à la main"
              ],
              "bonne": 0,
              "explication": "Un SAP enchaîne seul un cycle de travail préétabli, découpé en séquences et/ou en étapes."
            },
            {
              "q": "Quelle partie du système produit la valeur ajoutée sur la matière d'œuvre ?",
              "choix": [
                "La partie opérative (PO)",
                "La partie commande (PC)",
                "La partie relation (PR)",
                "Le pupitre opérateur"
              ],
              "bonne": 0,
              "explication": "La PO est la partie visible qui transforme la matière d'œuvre (déplacer, remplir, usiner…)."
            },
            {
              "q": "Un contacteur qui alimente un moteur est…",
              "choix": [
                "un préactionneur",
                "un actionneur",
                "un capteur",
                "une partie relation"
              ],
              "bonne": 0,
              "explication": "Le contacteur reçoit l'ordre de la PC (faible énergie) et distribue l'énergie forte au moteur : c'est un préactionneur. Le moteur est l'actionneur."
            },
            {
              "q": "Quel élément est un actionneur ?",
              "choix": [
                "Un vérin pneumatique",
                "Un distributeur",
                "Une cellule photoélectrique",
                "Un automate"
              ],
              "bonne": 0,
              "explication": "Le vérin transforme l'énergie pneumatique en énergie mécanique. Le distributeur est son préactionneur, la cellule un capteur, l'automate la PC."
            },
            {
              "q": "Un pressostat qui indique seulement « pression atteinte / pas atteinte » est un capteur…",
              "choix": [
                "TOR",
                "analogique",
                "numérique",
                "de position"
              ],
              "bonne": 0,
              "explication": "Deux états seulement (1 ou 0) : c'est un capteur Tout Ou Rien."
            },
            {
              "q": "Quel capteur donne une information sous forme d'un « mot numérique » ?",
              "choix": [
                "Un lecteur de code-barres",
                "Un interrupteur de position",
                "Une sonde de température 4-20 mA",
                "Un pressostat"
              ],
              "bonne": 0,
              "explication": "Le lecteur de code-barres envoie un code (mot numérique) traité informatiquement."
            },
            {
              "q": "Quel est un inconvénient des systèmes automatisés cité dans le cours ?",
              "choix": [
                "Le coût d'installation",
                "L'augmentation des tâches pénibles",
                "La baisse de la sécurité",
                "La perte de souplesse"
              ],
              "bonne": 0,
              "explication": "Inconvénients du cours : coût d'installation, maintenance structurée nécessaire, suppression d'emplois."
            }
          ],
          "examen": [
            {
              "titre": "Analyse d'une perceuse automatique",
              "enonce": "<p>Une station de perçage automatique reçoit des pièces brutes en acier et les ressort percées. Elle comporte :</p><ul><li>un pupitre avec un BP marche, un BP arrêt, un arrêt d'urgence et un petit écran tactile ;</li><li>un automate Modicon M340 ;</li><li>un moteur triphasé 400 V qui fait tourner le foret, alimenté par le contacteur KM1 ;</li><li>un vérin pneumatique qui fait descendre la broche, alimenté par le distributeur 1V1 ;</li><li>deux interrupteurs de position à galet (broche en haut, broche en bas) et un pressostat qui indique « air présent / absent » ;</li><li>une sonde de température de l'huile qui délivre un courant de 4 à 20 mA ;</li><li>un lecteur de code-barres qui identifie chaque pièce.</li></ul>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Le contacteur KM1 est :",
                  "choix": [
                    "un préactionneur",
                    "un actionneur",
                    "un capteur",
                    "un élément de la partie relation"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>KM1 reçoit l'ordre de l'automate en <b>faible énergie</b> (bobine 24 V) et <b>distribue l'énergie forte</b> (400 V) au moteur : c'est un <b>préactionneur</b>. Le moteur, lui, est l'actionneur.</p>"
                },
                {
                  "type": "libre",
                  "q": "Classer tous les éléments de la liste dans la partie relation (PR), la partie commande (PC) ou la partie opérative (PO).",
                  "points": 3,
                  "attendu": "PR : pupitre (BP, AU, écran). PC : automate M340. PO : moteur, KM1, vérin, 1V1, capteurs (fins de course, pressostat, sonde, lecteur code-barres).",
                  "corrige": "<p><b>PR</b> (dialogue avec l'opérateur) : BP marche, BP arrêt, arrêt d'urgence, écran tactile (IHM).</p><p><b>PC</b> (traitement de l'information) : l'automate M340.</p><p><b>PO</b> (partie visible, modifie la matière d'œuvre) : préactionneurs KM1 et 1V1, actionneurs (moteur, vérin), et <b>tous les capteurs</b> : interrupteurs de position, pressostat, sonde de température, lecteur de code-barres.</p><div class=\"attention\">Piège classique : les capteurs appartiennent à la <b>partie opérative</b>, même s'ils envoient leurs informations à la partie commande.</div>"
                },
                {
                  "type": "num",
                  "q": "Combien de capteurs TOR la station comporte-t-elle ?",
                  "reponse": 3,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Un capteur TOR ne donne que deux états (0 ou 1) : les <b>2 interrupteurs de position</b> et le <b>pressostat</b>, soit <b>3</b> capteurs TOR. La sonde 4-20 mA est analogique, le lecteur de code-barres est numérique.</p>"
                },
                {
                  "type": "libre",
                  "q": "Donner la matière d'œuvre et la valeur ajoutée de ce système.",
                  "points": 1,
                  "attendu": "Matière d'œuvre : la pièce brute. Valeur ajoutée : le perçage (pièce percée).",
                  "corrige": "<p>La <b>matière d'œuvre</b> est l'ensemble des éléments modifiés par le système : la pièce brute en acier. En sortie on obtient matière d'œuvre + <b>valeur ajoutée</b> : la pièce est percée (et identifiée).</p>"
                }
              ]
            },
            {
              "titre": "Capteurs, énergie et automatisation",
              "enonce": "<p>Une chaîne d'emballage de pots de yaourt doit être automatisée. Le responsable de production te pose quelques questions sur le futur système automatisé de production (SAP).</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Un codeur monté sur l'arbre du convoyeur envoie une suite d'impulsions qui permet de calculer la vitesse. C'est un capteur :",
                  "choix": [
                    "numérique",
                    "TOR",
                    "analogique",
                    "de la partie relation"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Un <b>générateur d'impulsions</b> fait partie des capteurs <b>numériques</b> cités dans le cours (avec les lecteurs de code-barres et la RFID). Ils servent à mesurer une position, une vitesse ou à identifier un produit.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Un capteur de pression délivre une tension de 0 à 10 V proportionnelle à la pression. C'est un capteur :",
                  "choix": [
                    "analogique",
                    "TOR",
                    "numérique",
                    "préactionneur"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Sa sortie varie en continu et est <b>proportionnelle à la mesure</b> : c'est un capteur <b>analogique</b>.</p>"
                },
                {
                  "type": "libre",
                  "q": "Expliquer pourquoi la sortie de l'automate ne peut pas alimenter directement le moteur triphasé 400 V du convoyeur, et ce qu'on place entre les deux.",
                  "points": 2,
                  "attendu": "La sortie automate ne fournit qu'une faible énergie (24 V, quelques dizaines de mA) : elle commande un contacteur (préactionneur) qui distribue l'énergie forte au moteur (actionneur).",
                  "corrige": "<p>La sortie d'un automate délivre un <b>signal de faible énergie</b> (par exemple 24 V, quelques dizaines de milliampères). Le moteur demande une <b>énergie forte</b> (400 V triphasé). On intercale donc un <b>préactionneur</b> : un <b>contacteur</b>. La sortie automate commande sa bobine, et ses contacts de puissance alimentent le moteur (l'<b>actionneur</b>), qui transforme l'énergie électrique en énergie mécanique.</p>"
                },
                {
                  "type": "libre",
                  "q": "Définir un SAP, puis citer deux avantages et deux inconvénients de l'automatisation.",
                  "points": 2,
                  "attendu": "Système qui gère de façon autonome un cycle de travail préétabli (séquences / étapes). Avantages : moins de tâches pénibles, plus de sécurité, production accrue. Inconvénients : coût d'installation, maintenance structurée, suppression d'emplois.",
                  "corrige": "<p>Un système de production est <b>automatisé</b> lorsqu'il gère de manière <b>autonome</b> un <b>cycle de travail préétabli</b>, décomposé en séquences et/ou en étapes.</p><p><b>Avantages</b> (deux parmi) : élimination des tâches pénibles, augmentation de la sécurité, capacité de production améliorée, adaptation aux contraintes, souplesse, création de postes d'automaticien.</p><p><b>Inconvénients</b> (deux parmi) : coût d'installation, maintenance structurée nécessaire, suppression d'emplois.</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "logique-combinatoire",
          "titre": "Logique combinatoire",
          "date": "2026-10-08",
          "source": "Polycopié IFTI / UIMM p. 1 à 8 + cours en classe",
          "resume": "Un système combinatoire donne ses sorties à partir du seul état actuel des entrées, sans notion de temps (contrairement au séquentiel, étudié avec le GRAFCET). On l'étudie fonction par fonction (OUI, NON, ET, OU, NON-ET, NON-OU, OU exclusif) avec quatre outils : symbole, schéma électrique, table de vérité et chronogramme.",
          "sections": [
            {
              "titre": "Définition et algèbre de Boole",
              "html": "<p>On étudie ici des automatismes qui ne traitent que des <b>informations logiques</b> (binaires, booléennes). On distingue <b>2 types d'automatismes logiques</b> :</p>\n<ul><li>les systèmes à <b>logique combinatoire</b> ;</li><li>les systèmes à <b>logique séquentielle</b>.</li></ul>\n<p><b>1. Définition :</b> un système est dit à logique combinatoire lorsque la ou les sorties <b>ne dépendent que de la combinaison des entrées</b>.</p>\n<p>La <b>même cause</b> (même combinaison des entrées) produit <b>toujours le même effet</b> (même état des sorties). L'effet disparaît lorsque la cause disparaît.</p><div class=\"exemple\"><b>Exemple concret :</b> la sonnette de ta porte. Tu appuies (cause), ça sonne (effet). Tu relâches, ça s'arrête. Chaque fois que tu appuies, le résultat est le même : c'est du combinatoire.</div>\n<p><b>2. Opérateurs logiques :</b> l'<b>algèbre de Boole</b> (ou algèbre logique) est l'algèbre définie pour des variables ne pouvant prendre que <b>deux états</b> (0 ou 1).</p>\n<p>Tout fonctionnement peut être décrit en utilisant les <b>fonctions logiques de base : ET, OU, OUI et NON</b>. Les autres (NON-ET, NON-OU, OU exclusif) se construisent à partir d'elles.</p>"
            },
            {
              "titre": "Combinatoire ou séquentiel ?",
              "html": "<p><b>Système combinatoire :</b> à chaque instant, les sorties dépendent <b>uniquement de l'état actuel des entrées</b>. Ce qui s'est passé avant ne compte pas, et le temps de calcul (quelques millisecondes) est négligeable.</p>\n<p><b>Système séquentiel :</b> c'est un <b>enchaînement d'événements</b>, avec un historique. Une troisième notion apparaît naturellement : <b>le temps</b>.</p>\n<p><i>Exemple :</i> une ligne d'embouteillage. On pose la bouteille, on la convoie jusqu'au remplissage, on la remplit, on la convoie jusqu'au bouchage, puis jusqu'à la palette. Chaque étape prend du temps et dépend de la précédente : c'est du séquentiel. L'automate exécute son cycle en quelques millisecondes, mais le programme, lui, se déroule sur toute la durée du process.</p>\n<table><thead><tr><th></th><th>Combinatoire</th><th>Séquentiel</th></tr></thead><tbody>\n<tr><td>La sortie dépend de…</td><td>l'état actuel des entrées</td><td>des entrées, de l'historique et du temps</td></tr>\n<tr><td>Outil d'étude</td><td>fonctions logiques, table de vérité</td><td><b>GRAFCET</b></td></tr>\n<tr><td>GRAFCET possible ?</td><td>Non</td><td>Oui</td></tr></tbody></table>\n<p>Un système séquentiel <b>contient</b> des parties combinatoires (à un instant t, on retrouve bien de la logique combinatoire), mais un système combinatoire ne contient jamais de séquentiel.</p>\n<p><b>Logique câblée :</b> avant les automates, on réalisait ces fonctions avec des relais et des contacts câblés. Chaque fonction combinatoire (ET, OU, NON…) correspond à un montage de contacts : c'est pour ça qu'on étudie le combinatoire avec des schémas à contacts. Mais la logique câblée sait aussi mémoriser : l'auto-maintien d'un contacteur (vu en TP) est déjà du séquentiel.</p><div class=\"exemple\"><b>Exemple concret :</b> l'éclairage d'un couloir en <b>va-et-vient</b> (deux interrupteurs) est combinatoire : la lampe dépend seulement de la position actuelle des deux interrupteurs. Le <b>télérupteur</b> d'une cage d'escalier est séquentiel : le même appui sur le bouton allume ou éteint selon l'état d'avant. Même cause, effet différent : il y a une mémoire.</div>"
            },
            {
              "titre": "Les outils pour étudier une fonction logique",
              "html": "<p>Un système combinatoire est régi par des <b>fonctions logiques</b> : <b>OUI, NON, ET, OU, NON-ET, NON-OU, OU exclusif</b>. Chaque fonction s'étudie avec les mêmes outils :</p>\n<ul>\n<li><b>Le symbole :</b> chaque fonction a son symbole normalisé, comme chaque composant d'un schéma électrique.</li>\n<li><b>Le schéma électrique équivalent</b> (schéma de principe) : il fait comprendre le fonctionnement avec des interrupteurs et une lampe.</li>\n<li><b>La table de vérité :</b> elle <b>range</b> toutes les combinaisons possibles des entrées et la sortie correspondante.</li>\n<li><b>Le chronogramme :</b> il <b>illustre</b> l'évolution des 0 et des 1 en fonction du temps (du grec <i>chronos</i>, le temps).</li>\n<li><b>L'équation logique</b>, par exemple <code>S = E</code>.</li>\n<li><b>Le logigramme :</b> le schéma qui assemble les symboles des portes logiques pour représenter une équation.</li>\n</ul>\n<p><b>Convention :</b> au repos (non actionné) = <b>0</b> ; actionné = <b>1</b>.</p><p><b>Vocabulaire des contacts :</b> un contact <b>NO</b> (normalement ouvert) est ouvert au repos et se ferme quand on l'actionne. Un contact <b>NC</b> (normalement fermé, qu'on écrit aussi <b>NF</b>) est fermé au repos et s'ouvre quand on l'actionne. NC et NF, c'est la même chose.</p>\n<p><b>Deux normes de symboles :</b> la norme <b>européenne</b> (un rectangle avec un repère : 1, ≥1, &amp;…) et la norme <b>américaine</b> (formes dessinées : triangle, ogive…). Il faut connaître les deux : on les retrouve dans les docs techniques et en électronique, donc forcément en bureau d'études.</p>"
            },
            {
              "titre": "Fonction OUI (identité)",
              "html": "<p><b>L'état logique de la sortie S est l'image de l'état logique de l'entrée E</b> : si E = 0 alors S = 0, si E = 1 alors S = 1.</p>\n<p><b>Symbole européen :</b> un rectangle marqué <code>1</code>. <b>Symbole électronique (américain) :</b> un triangle pointé vers la sortie.</p>\n<div data-widget=\"porte\" data-op=\"OUI\"></div>\n<table><thead><tr><th>E</th><th>S</th></tr></thead><tbody><tr><td>0</td><td><b>0</b></td></tr><tr><td>1</td><td><b>1</b></td></tr></tbody></table>\n<p><b>Équation logique :</b> <code>S = E</code>.</p>\n<p><b>Chronogramme du poly :</b> E passe de 0 à 1 à t1. S recopie E : <b>S passe aussi à 1 à t1</b> et reste à 1 tant que E est à 1.</p>\n<p><b>Représentation électrique équivalente :</b> un interrupteur <b>E</b> (contact normalement ouvert) en série avec un récepteur <b>S</b> (un voyant par exemple). On ferme E, le voyant s'allume ; on relâche, il s'éteint.</p><div class=\"exemple\"><b>Exemple concret :</b> le klaxon d'une voiture. Tu appuies, il sonne ; tu relâches, il s'arrête. La sortie recopie l'entrée.</div>"
            },
            {
              "titre": "Fonction NON (inversion)",
              "html": "<p><b>La sortie est l'inverse de l'entrée :</b> si E = 0 alors S = 1, si E = 1 alors S = 0.</p>\n<p><b>Symbole européen :</b> un rectangle marqué <code>1</code> avec un petit rond (ou un triangle) sur la sortie. <b>Symbole américain :</b> un triangle avec un petit rond à la pointe. Le rond signifie toujours « inversé ».</p>\n<p><b>Schéma électrique :</b> un contact <b>normalement fermé</b> en série avec la lampe : au repos la lampe est allumée, quand on appuie elle s'éteint.</p>\n<div data-widget=\"porte\" data-op=\"NON\"></div>\n<table><thead><tr><th>E</th><th>S</th></tr></thead><tbody><tr><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td><b>0</b></td></tr></tbody></table>\n<p><b>Équation :</b> <code>S = /E</code> (on écrit aussi E avec une barre au-dessus, et on lit « E barre » ou « non E »). <b>Chronogramme :</b> S est l'inverse de E à chaque instant.</p>\n<div class=\"exemple\"><b>Exemple concret :</b> la lampe du frigo. Porte fermée, la porte appuie sur un petit bouton (entrée à 1) et la lampe est éteinte. Tu ouvres la porte, le bouton est relâché (entrée à 0) et la lampe s'allume. C'est un contact NC : S = /E.</div>"
            },
            {
              "titre": "Fonction ET (AND)",
              "html": "<p><b>La sortie est à l'état 1 si et seulement si les deux entrées le sont aussi.</b> Dans tous les autres cas, S = 0.</p>\n<p><b>Symbole européen :</b> un rectangle marqué <code>&amp;</code>. <b>Symbole américain :</b> une forme en « D » (côté entrées plat, côté sortie arrondi).</p>\n<p><b>Schéma électrique :</b> deux interrupteurs <b>normalement ouverts (NO) en série</b> avec la lampe. Le courant ne passe que si les deux sont fermés.</p><div class=\"exemple\"><b>Exemple concret :</b> la <b>commande bimanuelle</b> d'une presse. L'opérateur doit appuyer sur deux boutons en même temps, un de chaque main, pour faire descendre la presse. Ses deux mains sont ainsi loin de l'outil : c'est une sécurité. Un seul bouton appuyé ne fait rien.</div>\n<div data-widget=\"porte\" data-op=\"ET\"></div>\n<table><thead><tr><th>E1</th><th>E2</th><th>S</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td><b>0</b></td></tr>\n<tr><td>0</td><td>1</td><td><b>0</b></td></tr>\n<tr><td>1</td><td>0</td><td><b>0</b></td></tr>\n<tr><td>1</td><td>1</td><td><b>1</b></td></tr></tbody></table>\n<p><b>Remplir une table de vérité :</b> on écrit toujours les combinaisons des entrées dans le même ordre (00, 01, 10, 11), comme un comptage en binaire.</p>\n<p><b>Équation :</b> <code>S = E1 · E2</code>, se lit « E1 et E2 ».</p>\n<p><b>Chronogramme du poly :</b> E1 reste à 0 et E2 passe à 1 à t1. Comme E1 = 0, la condition « les deux à 1 » n'est jamais remplie : <b>S reste à 0</b>.</p>\n<p><b>Chronogramme :</b> en traçant E1 et E2 de façon à parcourir 00, 01, 10, 11, on retrouve exactement la table de vérité : S ne monte à 1 que sur l'intervalle où E1 et E2 sont tous les deux à 1. Le chronogramme est la table de vérité « déroulée dans le temps ».</p>\n<p><b>Composant électronique : le 7408</b>, qui comporte <b>4 portes ET</b> à 2 entrées (même brochage que le 7432).</p>\n<table><thead><tr><th>Porte</th><th>Entrée A</th><th>Entrée B</th><th>Sortie Y</th></tr></thead><tbody>\n<tr><td>1</td><td>broche 1</td><td>broche 2</td><td>broche 3</td></tr>\n<tr><td>2</td><td>broche 4</td><td>broche 5</td><td>broche 6</td></tr>\n<tr><td>3</td><td>broche 9</td><td>broche 10</td><td>broche 8</td></tr>\n<tr><td>4</td><td>broche 12</td><td>broche 13</td><td>broche 11</td></tr></tbody></table>\n<p>Alimentation : <b>VCC</b> broche 14, <b>GND</b> broche 7. On retrouve ces composants et leurs brochages dans les docs techniques.</p>"
            },
            {
              "titre": "Fonction OU (OR)",
              "html": "<p><b>La sortie est à l'état 1 si une entrée ou l'autre ou les deux sont à 1.</b> Elle ne vaut 0 que si toutes les entrées sont à 0.</p>\n<p><b>Symbole normalisé :</b> un rectangle marqué <code>≥1</code> (« au moins une entrée à 1 »), entrées E1 et E2 à gauche, sortie S à droite.<br><b>Symbole électronique (américain) :</b> une forme en ogive, creusée côté entrées et pointue côté sortie.</p>\n<div data-widget=\"porte\" data-op=\"OU\"></div>\n<p><b>Table de vérité</b> (complétée) :</p>\n<table><thead><tr><th>E1</th><th>E2</th><th>S</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td><b>0</b></td></tr>\n<tr><td>0</td><td>1</td><td><b>1</b></td></tr>\n<tr><td>1</td><td>0</td><td><b>1</b></td></tr>\n<tr><td>1</td><td>1</td><td><b>1</b></td></tr></tbody></table>\n<p><b>Équation logique :</b> <code>S = E1 + E2</code>, se lit « E1 ou E2 ». En logique, le « + » veut dire OU, pas une addition : 1 + 1 = 1.</p><div class=\"attention\"><b>Attention :</b> en logique, <b>1 + 1 = 1</b> (et pas 2). Le « + » se lit « ou » : « au moins une entrée à 1 ».</div>\n<p><b>Schéma électrique :</b> deux interrupteurs NO <b>en parallèle</b>. Si l'un ou l'autre est fermé, ou les deux, le courant trouve un chemin et la lampe s'allume.</p><div class=\"exemple\"><b>Exemple concret :</b> le plafonnier d'une voiture. Il s'allume si la portière conducteur <b>ou</b> la portière passager est ouverte, ou les deux. Il ne s'éteint que si toutes les portières sont fermées.</div>\n<p><b>Chronogrammes :</b> on trace E1 et E2 dans le temps (t1, t2, t3, t4), puis S. Pour le OU, S est à 1 sur chaque intervalle où au moins une des deux courbes est à 1. Sur la feuille, E1 reste à 0 et E2 passe à 1 à t1 : S passe donc à 1 à t1, en même temps que E2.</p>"
            },
            {
              "titre": "Réalisations de la fonction OU",
              "html": "<p><b>Avec des contacts :</b> deux contacts E1 et E2 montés <b>en parallèle</b> alimentent une lampe S. Il suffit qu'un des deux soit fermé pour que le courant passe et que la lampe s'allume.</p>\n<p><b>Avec un circuit intégré : le 7432</b>, boîtier de 14 broches qui contient <b>4 portes OU</b> à 2 entrées.</p>\n<table><thead><tr><th>Porte</th><th>Entrée A</th><th>Entrée B</th><th>Sortie Y</th></tr></thead><tbody>\n<tr><td>1</td><td>broche 1</td><td>broche 2</td><td>broche 3</td></tr>\n<tr><td>2</td><td>broche 4</td><td>broche 5</td><td>broche 6</td></tr>\n<tr><td>3</td><td>broche 9</td><td>broche 10</td><td>broche 8</td></tr>\n<tr><td>4</td><td>broche 12</td><td>broche 13</td><td>broche 11</td></tr></tbody></table>\n<p>Alimentation : <b>VCC</b> sur la broche 14, <b>GND</b> (masse) sur la broche 7.</p>"
            },
            {
              "titre": "Fonction NON-ET (NAND)",
              "html": "<p><b>L'état de la sortie est l'inverse de l'état de la sortie d'une ET.</b> La sortie vaut donc 0 seulement si toutes les entrées sont à 1 ; dans tous les autres cas, S = 1.</p>\n<p><b>Décomposition de la fonction :</b> une porte ET (<code>&amp;</code>) qui donne <code>E1 · E2</code>, suivie d'une porte NON (<code>1</code> avec inversion) qui donne <code>/(E1 · E2)</code>.</p>\n<p><b>Symboles :</b></p>\n<ul>\n<li><b>Européen :</b> le rectangle <code>&amp;</code> du ET, avec une marque d'inversion (petit triangle ou barre) sur la sortie.</li>\n<li><b>International (américain) :</b> la forme en « D » du ET, avec un <b>petit rond</b> sur la sortie.</li>\n<li>Dans certaines docs techniques, on trouve un symbole avec les ronds placés sur <b>chaque entrée</b> d'une porte OU. C'est aussi un NON-ET, car <code>/(E1 · E2) = /E1 + /E2</code> (théorème de De Morgan). Il faut regarder attentivement où sont les marques d'inversion avant de conclure.</li>\n</ul>\n<p><b>Schéma électrique :</b> deux interrupteurs <b>normalement fermés (NC) en parallèle</b> avec la lampe. La lampe ne s'éteint que si on actionne les deux : tant qu'un seul contact reste fermé, le courant passe par lui.</p>\n<div data-widget=\"porte\" data-op=\"NET\"></div>\n<table><thead><tr><th>E1</th><th>E2</th><th>S</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td><b>1</b></td></tr>\n<tr><td>0</td><td>1</td><td><b>1</b></td></tr>\n<tr><td>1</td><td>0</td><td><b>1</b></td></tr>\n<tr><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table>\n<p><b>Équation :</b> <code>S = /(E1 · E2)</code> (la barre couvre tout le produit E1 · E2), on lit « E1 et E2, barre ».</p>\n<p><b>Chronogramme du poly :</b> E1 reste à 0 et E2 passe à 1 à t1. Comme E1 = 0, le produit E1 · E2 reste à 0, donc <b>S reste à 1</b> sur tout l'intervalle tracé.</p>\n<p><b>Composant électronique :</b> il existe des circuits regroupant plusieurs fonctions NON-ET, par exemple la référence <b>7400</b> (4 portes NON-ET à 2 entrées).</p><div class=\"exemple\"><b>Exemple concret :</b> une cuve avec deux capteurs de niveau haut N1 et N2. La pompe de remplissage tourne tant que les deux capteurs ne détectent pas <b>tous les deux</b> la cuve pleine. Elle s'arrête seulement quand N1 = 1 et N2 = 1 : Pompe = /(N1 · N2).</div>\n<p><b>Piège classique :</b> comme le ET est fait de deux NO en série, on pourrait croire que le NON-ET est fait de deux NC en série. C'est faux : avec deux NC en série, la lampe s'éteint dès qu'<b>un seul</b> contact est actionné, ce qui ne donne pas la table du NON-ET (c'est en fait le NON-OU). Pour obtenir la table inversée du ET, il faut mettre les NC <b>en parallèle</b>.</p>"
            },
            {
              "titre": "Fonction NON-OU (NOR)",
              "html": "<p><b>L'état de la sortie est l'inverse de l'état de la sortie d'une OU.</b> La sortie vaut 1 seulement si toutes les entrées sont à 0 ; dès qu'une entrée passe à 1, S = 0.</p>\n<p><b>Symbole européen :</b> le rectangle <code>≥1</code> du OU, avec la marque d'inversion sur la sortie. <b>Symbole électronique (américain) :</b> la forme en ogive du OU, avec un petit rond sur la sortie.</p>\n<p><b>Décomposition de la fonction :</b> une porte OU (<code>≥1</code>) qui donne <code>E1 + E2</code>, suivie d'une porte NON qui donne <code>/(E1 + E2)</code>.</p>\n<div data-widget=\"porte\" data-op=\"NOU\"></div>\n<table><thead><tr><th>E1</th><th>E2</th><th>S</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td><b>1</b></td></tr>\n<tr><td>0</td><td>1</td><td><b>0</b></td></tr>\n<tr><td>1</td><td>0</td><td><b>0</b></td></tr>\n<tr><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table>\n<p><b>Équation :</b> <code>S = /(E1 + E2)</code> (la barre couvre toute la somme), on lit « E1 ou E2, barre ».</p>\n<p><b>Chronogramme du poly :</b> E1 reste à 0 et E2 passe à 1 à t1. Avant t1, les deux entrées sont à 0 donc <b>S = 1</b> ; à partir de t1, E2 = 1 donc <b>S tombe à 0</b>.</p>\n<p><b>Schéma électrique :</b> deux contacts <b>normalement fermés (NC) en série</b> avec la lampe. Au repos le courant passe et la lampe est allumée ; il suffit d'actionner un seul contact pour couper le circuit. C'est le « piège » du NON-ET : deux NC en série donnent un NON-OU.</p><div class=\"exemple\"><b>Exemple concret :</b> un voyant vert « machine prête » qui s'allume seulement s'il n'y a <b>ni</b> défaut 1 (surchauffe) <b>ni</b> défaut 2 (manque d'air). Dès qu'un défaut apparaît, il s'éteint.</div>\n<p><b>Composant électronique :</b> il existe des circuits regroupant plusieurs fonctions NON-OU. Le poly indique la référence 7400, mais la référence standard des 4 portes NON-OU est le <b>7402</b> (le 7400 contient des NON-ET).</p><div class=\"attention\"><b>Attention :</b> le 7402 n'a pas le même brochage que les 7400, 7408 et 7432. Sur le 7402, les sorties sont sur les broches 1, 4, 10 et 13 (entrées 2-3, 5-6, 8-9, 11-12). VCC reste en 14 et GND en 7. Vérifie toujours la doc du composant avant de câbler.</div>"
            },
            {
              "titre": "Fonction OU exclusif (XOR)",
              "html": "<p><b>Soit l'un, soit l'autre, mais pas les deux :</b> la sortie vaut 1 si <b>une seule</b> entrée est à 1. Si les deux entrées sont à 1 (ou à 0), S = 0.</p>\n<p><b>Différence avec le OU :</b> avec un OU, activer les deux entrées allume la sortie. Avec un OU exclusif, activer les deux en même temps ne marche pas.</p>\n<p><b>Usage :</b> fonction très utilisée, notamment comme <b>sécurité</b> : on autorise une action ou l'autre, jamais les deux à la fois (par exemple, interdire deux commandes contradictoires simultanées).</p>\n<p><b>Symbole européen :</b> un rectangle marqué <code>=1</code> (« exactement une entrée à 1 »). <b>Symbole américain :</b> la forme du OU avec un trait courbe supplémentaire côté entrées.</p>\n<div data-widget=\"porte\" data-op=\"OUX\"></div>\n<table><thead><tr><th>E1</th><th>E2</th><th>S</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td><b>0</b></td></tr>\n<tr><td>0</td><td>1</td><td><b>1</b></td></tr>\n<tr><td>1</td><td>0</td><td><b>1</b></td></tr>\n<tr><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table>\n<p><b>Équation :</b> <code>S = E1 ⊕ E2</code>, ce qui revient à <code>S = E1 · /E2 + /E1 · E2</code> (E1 sans E2, ou E2 sans E1).</p><p><b>Composant électronique :</b> le <b>7486</b> contient 4 portes OU exclusif à 2 entrées (même brochage que le 7408 et le 7432, VCC en 14, GND en 7).</p><div class=\"exemple\"><b>Exemple concret :</b> le moteur d'un portail avec un bouton « ouvrir » et un bouton « fermer ». Le moteur ne doit tourner que si <b>un seul</b> bouton est appuyé. Si quelqu'un appuie sur les deux en même temps, rien ne doit se passer : on évite deux ordres contradictoires.</div>"
            }
          ],
          "pointsCles": [
            "Même cause (même combinaison des entrées) = toujours le même effet ; l'effet disparaît avec la cause.",
            "Algèbre de Boole : variables à deux états. Fonctions de base : ET, OU, OUI, NON.",
            "7408 = 4 portes ET ; 7432 = 4 portes OU ; VCC broche 14, GND broche 7.",
            "Combinatoire : sortie = f(entrées actuelles). Séquentiel : en plus l'historique et le temps.",
            "Le GRAFCET sert au séquentiel, pas au combinatoire.",
            "Un séquentiel contient du combinatoire, jamais l'inverse.",
            "Convention : repos = 0, actionné = 1.",
            "Table de vérité = ranger les combinaisons ; chronogramme = les voir dans le temps.",
            "OUI : S = E (contact NO en série). NON : S = /E (contact NF).",
            "Deux normes de symboles : européenne (rectangles) et américaine (formes).",
            "ET : S = E1 · E2, deux NO en série, S = 1 seulement si les deux entrées sont à 1.",
            "NON-ET : S = /(E1 · E2), deux NC en parallèle (et non en série !).",
            "Le chronogramme est la table de vérité déroulée dans le temps.",
            "NON-OU : S = /(E1 + E2), deux NC en série. S = 1 seulement si toutes les entrées sont à 0.",
            "NON-ET = ET suivi d'un NON ; NON-OU = OU suivi d'un NON. Circuits : 7400 (NON-ET), 7402 (NON-OU).",
            "OU exclusif : soit l'un, soit l'autre, pas les deux (S = E1 ⊕ E2), utilisé comme sécurité.",
            "Outils principaux du combinatoire : équation logique, table de vérité, logigramme.",
            "OU : S = 1 dès qu'au moins une entrée est à 1.",
            "Équation : S = E1 + E2 (le + se lit « ou »).",
            "Symbole normalisé : rectangle marqué ≥1.",
            "Câblage : contacts en parallèle.",
            "Circuit 7432 : 4 portes OU, VCC broche 14, GND broche 7."
          ],
          "definitions": [
            {
              "terme": "Système séquentiel",
              "def": "Système dont les sorties dépendent des entrées, de ce qui s'est passé avant et du temps (enchaînement d'étapes)."
            },
            {
              "terme": "GRAFCET",
              "def": "Outil graphique pour décrire et étudier les systèmes séquentiels. Inutilisable pour un système purement combinatoire."
            },
            {
              "terme": "Logique câblée",
              "def": "Réalisation des fonctions logiques avec des relais et des contacts câblés, comme avant les automates. Elle réalise les fonctions combinatoires, mais peut aussi mémoriser (auto-maintien)."
            },
            {
              "terme": "Fonction OUI",
              "def": "La sortie recopie l'entrée : S = E."
            },
            {
              "terme": "Fonction NON",
              "def": "La sortie est l'inverse de l'entrée : S = /E."
            },
            {
              "terme": "Logique combinatoire",
              "def": "Logique où la sortie dépend uniquement de l'état actuel des entrées."
            },
            {
              "terme": "Table de vérité",
              "def": "Tableau qui donne la valeur de la sortie pour chaque combinaison possible des entrées."
            },
            {
              "terme": "Chronogramme",
              "def": "Tracé de l'état (0 ou 1) d'un signal en fonction du temps."
            },
            {
              "terme": "Fonction ET (AND)",
              "def": "Fonction logique dont la sortie vaut 1 seulement si toutes les entrées valent 1. Équation S = E1 · E2."
            },
            {
              "terme": "Fonction NON-ET (NAND)",
              "def": "Inverse du ET : la sortie vaut 0 seulement si toutes les entrées valent 1. Équation S = /(E1 · E2)."
            },
            {
              "terme": "Contact NO / NC",
              "def": "NO : normalement ouvert (fermé quand on l'actionne). NC, aussi noté NF : normalement fermé (ouvert quand on l'actionne)."
            },
            {
              "terme": "Fonction NON-OU (NOR)",
              "def": "Inverse du OU : la sortie vaut 1 seulement si toutes les entrées valent 0. Équation S = /(E1 + E2)."
            },
            {
              "terme": "7400",
              "def": "Circuit intégré contenant 4 portes NON-ET à 2 entrées."
            },
            {
              "terme": "Fonction OU exclusif (XOR)",
              "def": "La sortie vaut 1 si une seule entrée vaut 1, pas les deux. Équation S = E1 ⊕ E2."
            },
            {
              "terme": "Logigramme",
              "def": "Schéma qui représente une équation logique en assemblant les symboles des portes."
            },
            {
              "terme": "Fonction OU (OR)",
              "def": "Fonction logique dont la sortie vaut 1 si au moins une entrée vaut 1. Équation S = E1 + E2."
            },
            {
              "terme": "7432",
              "def": "Circuit intégré à 14 broches contenant 4 portes OU à 2 entrées."
            },
            {
              "terme": "7402",
              "def": "Circuit intégré contenant 4 portes NON-OU à 2 entrées (brochage différent des 7400 / 7408 / 7432)."
            },
            {
              "terme": "7486",
              "def": "Circuit intégré contenant 4 portes OU exclusif à 2 entrées."
            },
            {
              "terme": "7408",
              "def": "Circuit intégré contenant 4 portes ET à 2 entrées (VCC broche 14, GND broche 7)."
            }
          ],
          "flashcards": [
            {
              "q": "Quels sont les 2 types d'automatismes logiques ?",
              "r": "Les systèmes à logique combinatoire et les systèmes à logique séquentielle."
            },
            {
              "q": "Définition d'un système à logique combinatoire ?",
              "r": "La ou les sorties ne dépendent que de la combinaison des entrées."
            },
            {
              "q": "« Même cause, même effet » : que signifie-t-il en logique combinatoire ?",
              "r": "La même combinaison des entrées produit toujours le même état des sorties ; l'effet disparaît lorsque la cause disparaît."
            },
            {
              "q": "Qu'est-ce que l'algèbre de Boole ?",
              "r": "L'algèbre définie pour des variables ne pouvant prendre que deux états."
            },
            {
              "q": "Quelles sont les fonctions logiques de base ?",
              "r": "ET, OU, OUI et NON."
            },
            {
              "q": "Quel circuit intégré contient 4 portes ET ?",
              "r": "Le 7408."
            },
            {
              "q": "De quoi dépend la sortie d'un système combinatoire ?",
              "r": "Uniquement de l'état actuel des entrées (ni historique, ni temps)."
            },
            {
              "q": "Quel est le « troisième paramètre » qui apparaît dans un système séquentiel ?",
              "r": "Le temps."
            },
            {
              "q": "Quel outil sert à étudier les systèmes séquentiels ?",
              "r": "Le GRAFCET."
            },
            {
              "q": "Peut-on trouver du combinatoire dans un système séquentiel ? Et l'inverse ?",
              "r": "Oui, un séquentiel contient du combinatoire. L'inverse est impossible."
            },
            {
              "q": "Qu'est-ce que la logique câblée ?",
              "r": "Les fonctions logiques réalisées avec relais et contacts (avant les automates). Chaque fonction combinatoire y correspond à un montage de contacts ; elle peut aussi mémoriser (auto-maintien)."
            },
            {
              "q": "À quoi sert une table de vérité ? Et un chronogramme ?",
              "r": "La table range toutes les combinaisons possibles ; le chronogramme montre l'évolution des 0 et 1 dans le temps."
            },
            {
              "q": "Convention : un contact au repos vaut… ? actionné ?",
              "r": "Repos = 0, actionné = 1."
            },
            {
              "q": "Équation et schéma de la fonction OUI ?",
              "r": "S = E. Un interrupteur (NO) en série avec la lampe."
            },
            {
              "q": "Équation de la fonction NON ? Que vaut S si E = 0 ?",
              "r": "S = /E (non E). Si E = 0, S = 1."
            },
            {
              "q": "Quelles sont les deux normes de symboles logiques ?",
              "r": "Européenne (rectangles avec 1, ≥1, &) et américaine (triangle, ogive…)."
            },
            {
              "q": "Quand la sortie d'une fonction ET est-elle à 1 ?",
              "r": "Seulement quand E1 et E2 sont tous les deux à 1."
            },
            {
              "q": "Équation logique de la fonction ET ?",
              "r": "S = E1 · E2 (se lit « E1 et E2 »)."
            },
            {
              "q": "Schéma électrique de la fonction ET ?",
              "r": "Deux interrupteurs NO en série avec la lampe."
            },
            {
              "q": "Dans quel ordre remplit-on les entrées d'une table de vérité à 2 entrées ?",
              "r": "00, 01, 10, 11 (toujours le même ordre, comme en binaire)."
            },
            {
              "q": "Quel est le lien entre table de vérité et chronogramme ?",
              "r": "Le chronogramme est la table de vérité déroulée dans le temps : chaque intervalle correspond à une ligne."
            },
            {
              "q": "Schéma électrique de la fonction OU ?",
              "r": "Deux interrupteurs NO en parallèle avec la lampe."
            },
            {
              "q": "Fonction NON-ET : quand la sortie vaut-elle 0 ?",
              "r": "Seulement quand E1 = 1 et E2 = 1."
            },
            {
              "q": "Équation de la fonction NON-ET ?",
              "r": "S = /(E1 · E2)."
            },
            {
              "q": "Schéma électrique de la fonction NON-ET ?",
              "r": "Deux contacts NC en parallèle avec la lampe."
            },
            {
              "q": "Pourquoi le NON-ET n'est-il pas fait de deux NC en série ?",
              "r": "Avec deux NC en série, la lampe s'éteint dès qu'un seul est actionné : c'est la table du NON-OU, pas du NON-ET."
            },
            {
              "q": "NON-ET : différence entre symbole européen et international ?",
              "r": "Européen : rectangle & avec marque d'inversion. International : forme en D avec un petit rond en sortie."
            },
            {
              "q": "Comment décompose-t-on la fonction NON-ET ?",
              "r": "Une porte ET suivie d'une porte NON."
            },
            {
              "q": "Quelle référence de circuit regroupe des portes NON-ET ?",
              "r": "Le 7400."
            },
            {
              "q": "Fonction NON-OU : quand la sortie vaut-elle 1 ?",
              "r": "Seulement quand E1 = 0 et E2 = 0."
            },
            {
              "q": "Équation de la fonction NON-OU ?",
              "r": "S = /(E1 + E2)."
            },
            {
              "q": "Schéma électrique de la fonction NON-OU ?",
              "r": "Deux contacts NC en série avec la lampe."
            },
            {
              "q": "Comment décompose-t-on la fonction NON-OU ?",
              "r": "Une porte OU suivie d'une porte NON."
            },
            {
              "q": "Fonction OU exclusif : quand la sortie vaut-elle 1 ?",
              "r": "Quand une seule des deux entrées est à 1 (soit l'un, soit l'autre, pas les deux)."
            },
            {
              "q": "OU exclusif : que vaut S si E1 = 1 et E2 = 1 ?",
              "r": "S = 0 (contrairement au OU)."
            },
            {
              "q": "À quoi sert souvent le OU exclusif ?",
              "r": "De sécurité : autoriser une action ou l'autre, jamais les deux en même temps."
            },
            {
              "q": "Symbole européen du OU exclusif ?",
              "r": "Un rectangle marqué =1."
            },
            {
              "q": "Quels sont les outils principaux pour étudier un système combinatoire ?",
              "r": "L'équation logique, la table de vérité et le logigramme (plus le chronogramme)."
            },
            {
              "q": "Quand la sortie d'une fonction OU est-elle à 1 ?",
              "r": "Quand une entrée, l'autre, ou les deux sont à 1."
            },
            {
              "q": "Fonction OU : que vaut S si E1 = 0 et E2 = 0 ?",
              "r": "S = 0. C'est le seul cas où la sortie est à 0."
            },
            {
              "q": "Fonction OU : que vaut S si E1 = 1 et E2 = 1 ?",
              "r": "S = 1."
            },
            {
              "q": "Équation logique de la fonction OU ?",
              "r": "S = E1 + E2 (se lit « E1 ou E2 »)."
            },
            {
              "q": "Quel signe figure dans le symbole normalisé de la porte OU ?",
              "r": "≥1 (au moins une entrée à 1)."
            },
            {
              "q": "Comment câbler une fonction OU avec deux contacts ?",
              "r": "Les deux contacts en parallèle, en série avec la charge (lampe S)."
            },
            {
              "q": "Quel circuit intégré contient 4 portes OU ?",
              "r": "Le 7432."
            },
            {
              "q": "7432 : broches d'alimentation ?",
              "r": "VCC broche 14, GND broche 7."
            },
            {
              "q": "Quel circuit intégré contient 4 portes OU exclusif ?",
              "r": "Le 7486."
            },
            {
              "q": "Quel circuit intégré contient 4 portes NON-OU ? Piège ?",
              "r": "Le 7402. Piège : son brochage est différent de celui des 7400, 7408 et 7432 (sorties en 1, 4, 10, 13)."
            },
            {
              "q": "Va-et-vient ou télérupteur : lequel est combinatoire ?",
              "r": "Le va-et-vient (la lampe dépend seulement de la position actuelle des deux interrupteurs). Le télérupteur mémorise son état : il est séquentiel."
            },
            {
              "q": "Exemple concret de fonction ET en atelier ?",
              "r": "La commande bimanuelle d'une presse : il faut appuyer sur les deux boutons en même temps."
            },
            {
              "q": "Que vaut 1 + 1 en logique ?",
              "r": "1 (le « + » veut dire OU)."
            },
            {
              "q": "Théorème de De Morgan pour le NON-ET ?",
              "r": "/(E1 · E2) = /E1 + /E2 : c'est pour ça que deux NC en parallèle donnent un NON-ET."
            }
          ],
          "quiz": [
            {
              "q": "Dans un système combinatoire, la sortie dépend…",
              "choix": [
                "uniquement de l'état actuel des entrées",
                "des entrées et de ce qui s'est passé avant",
                "du temps écoulé depuis la mise en marche",
                "de l'ordre dans lequel on a appuyé"
              ],
              "bonne": 0,
              "explication": "Combinatoire : même combinaison des entrées = même sortie. L'historique et le temps, c'est le séquentiel."
            },
            {
              "q": "Équation de la fonction NON-OU ?",
              "choix": [
                "S = /(E1 + E2)",
                "S = /(E1 · E2)",
                "S = E1 · /E2 + /E1 · E2",
                "S = /E1 + /E2"
              ],
              "bonne": 0,
              "explication": "NON-OU = OU suivi d'un NON. Attention : /E1 + /E2 est le NON-ET (De Morgan)."
            },
            {
              "q": "Deux contacts NC montés en série avec une lampe réalisent…",
              "choix": [
                "un NON-OU",
                "un NON-ET",
                "un ET",
                "un OU exclusif"
              ],
              "bonne": 0,
              "explication": "Dès qu'on actionne un seul contact, le circuit est coupé : S = 1 seulement si les deux entrées sont à 0, c'est le NON-OU."
            },
            {
              "q": "OU exclusif : E1 = 1 et E2 = 1. Que vaut S ?",
              "choix": [
                "0",
                "1",
                "Ça dépend de l'entrée actionnée en premier",
                "Indéterminé"
              ],
              "bonne": 0,
              "explication": "Soit l'un, soit l'autre, mais pas les deux : S = 0."
            },
            {
              "q": "Quel circuit contient 4 portes NON-ET à 2 entrées ?",
              "choix": [
                "7400",
                "7402",
                "7408",
                "7486"
              ],
              "bonne": 0,
              "explication": "7400 = NON-ET ; 7402 = NON-OU ; 7408 = ET ; 7486 = OU exclusif ; 7432 = OU."
            },
            {
              "q": "Quel symbole européen correspond à la porte OU ?",
              "choix": [
                "Rectangle marqué ≥1",
                "Rectangle marqué &",
                "Rectangle marqué =1",
                "Rectangle marqué 1"
              ],
              "bonne": 0,
              "explication": "≥1 = au moins une entrée à 1. & = ET, =1 = OU exclusif, 1 = OUI (ou NON avec la marque d'inversion)."
            },
            {
              "q": "Fonction ET à 2 entrées : combien de lignes de la table de vérité donnent S = 1 ?",
              "choix": [
                "1",
                "2",
                "3",
                "4"
              ],
              "bonne": 0,
              "explication": "Seule la ligne E1 = 1, E2 = 1 donne S = 1."
            },
            {
              "q": "Quel outil n'est PAS adapté à un système purement combinatoire ?",
              "choix": [
                "Le GRAFCET",
                "La table de vérité",
                "L'équation logique",
                "Le logigramme"
              ],
              "bonne": 0,
              "explication": "Le GRAFCET décrit des étapes dans le temps : il sert au séquentiel."
            }
          ],
          "examen": [
            {
              "titre": "Voyant « machine prête »",
              "enonce": "<p>Sur une machine, un voyant vert S doit être allumé seulement s'il n'y a <b>ni</b> le défaut D1 (surchauffe) <b>ni</b> le défaut D2 (manque d'air). Chaque défaut est donné par un contact : au repos (pas de défaut) il vaut 0, actionné (défaut présent) il vaut 1.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Établir la table de vérité de S.",
                  "points": 2,
                  "attendu": "S = 1 seulement pour D1 = 0, D2 = 0 ; S = 0 pour 01, 10 et 11.",
                  "corrige": "<p>On écrit les combinaisons dans l'ordre 00, 01, 10, 11 :</p><table><thead><tr><th>D1</th><th>D2</th><th>S</th></tr></thead><tbody><tr><td>0</td><td>0</td><td><b>1</b></td></tr><tr><td>0</td><td>1</td><td><b>0</b></td></tr><tr><td>1</td><td>0</td><td><b>0</b></td></tr><tr><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table><p>Le voyant n'est allumé que si les deux entrées sont à 0.</p>"
                },
                {
                  "type": "qcm",
                  "q": "De quelle fonction logique s'agit-il ?",
                  "choix": [
                    "NON-OU (NOR)",
                    "NON-ET (NAND)",
                    "OU exclusif",
                    "ET"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>S = 1 seulement si toutes les entrées sont à 0 : c'est la table du <b>NON-OU</b>, inverse du OU.</p>"
                },
                {
                  "type": "libre",
                  "q": "Écrire l'équation de S, puis décrire son schéma électrique à contacts.",
                  "points": 2,
                  "attendu": "S = /(D1 + D2) ; deux contacts NC D1 et D2 en série avec le voyant.",
                  "corrige": "<p><code>S = /(D1 + D2)</code> (la barre couvre toute la somme). Par De Morgan, <code>S = /D1 · /D2</code>.</p><p>Schéma : deux contacts <b>normalement fermés (NC)</b> D1 et D2 <b>en série</b> avec le voyant. Au repos le courant passe ; dès qu'un défaut ouvre son contact, le voyant s'éteint.</p><div class=\"attention\">Ne pas confondre : deux NC <b>en parallèle</b> donneraient un NON-ET.</div>"
                },
                {
                  "type": "qcm",
                  "q": "Quel circuit intégré choisir pour réaliser cette fonction avec des portes à 2 entrées ?",
                  "choix": [
                    "7402",
                    "7400",
                    "7432",
                    "7486"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Le <b>7402</b> contient 4 portes NON-OU. 7400 = NON-ET, 7432 = OU, 7486 = OU exclusif. Attention, le brochage du 7402 est différent (sorties en 1, 4, 10, 13).</p>"
                }
              ]
            },
            {
              "titre": "Lecture de chronogramme",
              "enonce": "<p>Les entrées E1 et E2 évoluent seconde par seconde selon le tableau suivant (de t = 0 à t = 8 s) :</p><table><thead><tr><th>Seconde</th><th>0-1</th><th>1-2</th><th>2-3</th><th>3-4</th><th>4-5</th><th>5-6</th><th>6-7</th><th>7-8</th></tr></thead><tbody><tr><td>E1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>E2</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody></table><p>On les envoie en même temps sur une porte OU exclusif (sortie S1), une porte NON-ET (sortie S2) et une porte NON-OU (sortie S3).</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Donner l'état de S1 (OU exclusif) sur chacun des 8 intervalles.",
                  "points": 2,
                  "attendu": "S1 = 0 1 0 1 0 1 0 1",
                  "corrige": "<p>S1 = 1 quand <b>une seule</b> entrée est à 1 : <code>S1 = E1 · /E2 + /E1 · E2</code>.</p><table><thead><tr><th>Seconde</th><th>0-1</th><th>1-2</th><th>2-3</th><th>3-4</th><th>4-5</th><th>5-6</th><th>6-7</th><th>7-8</th></tr></thead><tbody><tr><td>E1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>E2</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td><b>S1</b></td><td><b>0</b></td><td><b>1</b></td><td><b>0</b></td><td><b>1</b></td><td><b>0</b></td><td><b>1</b></td><td><b>0</b></td><td><b>1</b></td></tr></tbody></table>"
                },
                {
                  "type": "num",
                  "q": "Pendant combien de secondes au total S1 est-elle à 1 ?",
                  "reponse": 4,
                  "unite": "s",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>S1 vaut 1 sur les intervalles 1-2, 3-4, 5-6 et 7-8, soit <b>4 s</b>.</p>"
                },
                {
                  "type": "num",
                  "q": "Pendant combien de secondes au total S2 (NON-ET) est-elle à 1 ?",
                  "reponse": 6,
                  "unite": "s",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p><code>S2 = /(E1 · E2)</code> vaut 0 seulement quand E1 = 1 <b>et</b> E2 = 1, c'est-à-dire sur 2-3 et 4-5.</p><table><thead><tr><th>Seconde</th><th>0-1</th><th>1-2</th><th>2-3</th><th>3-4</th><th>4-5</th><th>5-6</th><th>6-7</th><th>7-8</th></tr></thead><tbody><tr><td>S2</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr></tbody></table><p>S2 = 1 pendant 8 − 2 = <b>6 s</b>.</p>"
                },
                {
                  "type": "num",
                  "q": "Pendant combien de secondes au total S3 (NON-OU) est-elle à 1 ?",
                  "reponse": 2,
                  "unite": "s",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p><code>S3 = /(E1 + E2)</code> vaut 1 seulement quand les deux entrées sont à 0 : intervalles 0-1 et 6-7.</p><table><thead><tr><th>Seconde</th><th>0-1</th><th>1-2</th><th>2-3</th><th>3-4</th><th>4-5</th><th>5-6</th><th>6-7</th><th>7-8</th></tr></thead><tbody><tr><td>S3</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr></tbody></table><p>Soit <b>2 s</b>. On remarque que l'intervalle 0-1 et l'intervalle 6-7 ont la même combinaison (00) : elles donnent bien la même sortie, c'est du combinatoire.</p>"
                }
              ]
            },
            {
              "titre": "Combinatoire ou séquentiel ?",
              "enonce": "<p>On étudie trois installations :</p><ol><li>la commande bimanuelle d'une presse (deux boutons à appuyer en même temps) ;</li><li>l'éclairage d'une cage d'escalier par télérupteur (chaque appui sur un bouton change l'état de la lampe) ;</li><li>le moteur d'un portail commandé par un bouton « ouvrir » et un bouton « fermer », qui ne doit tourner que si un seul bouton est appuyé.</li></ol>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Lequel de ces systèmes est séquentiel ?",
                  "choix": [
                    "Le télérupteur",
                    "La commande bimanuelle",
                    "Le portail",
                    "Aucun des trois"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Avec le télérupteur, le <b>même appui</b> allume ou éteint selon l'état d'avant : même cause, effet différent. Il y a une mémoire, donc un historique : c'est <b>séquentiel</b>.</p>"
                },
                {
                  "type": "libre",
                  "q": "Pour la presse et pour le portail, nommer la fonction logique utilisée et donner son équation (boutons B1, B2 pour la presse ; O et F pour le portail).",
                  "points": 2,
                  "attendu": "Presse : ET, S = B1 · B2. Portail : OU exclusif, M = O · /F + /O · F.",
                  "corrige": "<p><b>Presse :</b> la sortie vaut 1 seulement si les deux boutons sont à 1 : fonction <b>ET</b>, <code>S = B1 · B2</code> (deux NO en série).</p><p><b>Portail :</b> soit l'un, soit l'autre, mais pas les deux : <b>OU exclusif</b>, <code>M = O ⊕ F = O · /F + /O · F</code>. C'est l'usage « sécurité » du OU exclusif : interdire deux ordres contradictoires simultanés.</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "exercices-logique-combinatoire",
          "titre": "Exercices : logique combinatoire",
          "date": "2026-10-08",
          "source": "Polycopié IFTI / UIMM p. 10 + correction en classe",
          "resume": "Quatre exercices pour s'entraîner : passer d'un schéma à contacts, d'un chronogramme ou d'un logigramme à la table de vérité et à l'équation, et inversement. Essaie d'abord, puis ouvre le corrigé.",
          "sections": [
            {
              "titre": "Méthode : de la table de vérité à l'équation et au logigramme",
              "html": "<p>Méthode vue au tableau, sur l'exemple du <b>OU exclusif</b> (exercice 2).</p>\n<p><b>Rappel des notations :</b></p>\n<table><thead><tr><th>Fonction</th><th>Symbole européen</th><th>Notation</th></tr></thead><tbody>\n<tr><td>NON</td><td>rectangle <code>1</code> avec triangle d'inversion en sortie</td><td>barre au-dessus : /x (x barre)</td></tr>\n<tr><td>ET</td><td>rectangle <code>&amp;</code></td><td>point : a · b</td></tr>\n<tr><td>OU</td><td>rectangle <code>≥1</code></td><td>plus : a + b</td></tr></tbody></table>\n<p><b>Étape 1 : repérer les lignes où S = 1</b> dans la table de vérité.</p>\n<table><thead><tr><th>e1</th><th>e2</th><th>S</th><th>Terme</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td>0</td><td></td></tr>\n<tr><td>0</td><td>1</td><td><b>1</b></td><td><code>/e1 · e2</code></td></tr>\n<tr><td>1</td><td>0</td><td><b>1</b></td><td><code>e1 · /e2</code></td></tr>\n<tr><td>1</td><td>1</td><td>0</td><td></td></tr></tbody></table>\n<p><b>Étape 2 : écrire chaque ligne à 1 comme un ET</b> de toutes les entrées. Une entrée à 1 s'écrit telle quelle, une entrée à 0 s'écrit avec une barre (NON). Ligne « e1 = 0, e2 = 1 » → <code>/e1 · e2</code>.</p>\n<p><b>Étape 3 : relier ces termes par des OU</b> (+) :</p>\n<p><code>S = /e1 · e2 + e1 · /e2</code></p><div class=\"attention\"><b>Attention :</b> chaque terme ET doit contenir <b>toutes</b> les entrées (barrées ou non). Avec 3 entrées a, b, c, la ligne a = 1, b = 0, c = 1 s'écrit <code>a · /b · c</code>, jamais seulement <code>a · c</code>.</div>\n<p><b>Étape 4 : dessiner le logigramme</b> en partant des entrées : une porte NON pour chaque entrée barrée, une porte ET par terme, et une porte OU qui réunit tous les ET.</p>\n<div class=\"tbl\"><svg viewBox=\"0 0 560 250\" role=\"img\" aria-label=\"Logigramme du OU exclusif : S = /e1·e2 + e1·/e2\" style=\"width:100%;min-width:480px;max-width:560px;font-family:var(--f-mono);font-size:13px\">\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\">\n<path d=\"M20 40H120M60 40V160H220\"/><path d=\"M20 200H120M90 200V70H220\"/>\n<path d=\"M170 40H200V50H220M170 200H200V190H220\"/>\n<path d=\"M290 60H330V110H370M290 180H330V140H370\"/><path d=\"M440 125H520\"/>\n</g>\n<g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\">\n<rect x=\"120\" y=\"22\" width=\"44\" height=\"36\"/><rect x=\"120\" y=\"182\" width=\"44\" height=\"36\"/>\n<rect x=\"220\" y=\"35\" width=\"70\" height=\"50\"/><rect x=\"220\" y=\"155\" width=\"70\" height=\"50\"/>\n<rect x=\"370\" y=\"95\" width=\"70\" height=\"60\"/></g>\n<g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"60\" cy=\"40\" r=\"3.5\"/><circle cx=\"90\" cy=\"200\" r=\"3.5\"/>\n<path d=\"M164 34l8 6l-8 0z\"/><path d=\"M164 194l8 6l-8 0z\"/></g>\n<g fill=\"var(--ink)\" text-anchor=\"middle\"><text x=\"142\" y=\"45\">1</text><text x=\"142\" y=\"205\">1</text><text x=\"255\" y=\"65\">&amp;</text><text x=\"255\" y=\"185\">&amp;</text><text x=\"405\" y=\"130\">≥1</text></g>\n<g fill=\"var(--muted)\" font-size=\"12\"><text x=\"2\" y=\"30\">e1</text><text x=\"2\" y=\"190\">e2</text><text x=\"178\" y=\"30\">/e1</text><text x=\"178\" y=\"230\">/e2</text>\n<text x=\"296\" y=\"52\">/e1·e2</text><text x=\"296\" y=\"200\">e1·/e2</text><text x=\"485\" y=\"115\" fill=\"var(--ink)\" font-weight=\"700\">S</text></g>\n</svg></div>\n<p>Cette méthode marche pour n'importe quelle table de vérité : autant de portes ET que de lignes à 1, toutes reliées dans une seule porte OU.</p><div class=\"exemple\"><b>Pour vérifier ton équation :</b> reprends une ligne de la table, remplace les lettres par leurs valeurs et calcule. Ligne e1 = 1, e2 = 1 : <code>/1 · 1 + 1 · /1 = 0 · 1 + 1 · 0 = 0 + 0 = 0</code>. On retrouve bien S = 0.</div>"
            },
            {
              "titre": "Exercice 1 : du schéma à contacts à la table de vérité",
              "html": "<p><b>Énoncé :</b> établir la table de vérité du circuit suivant. Le contact <b>a</b> est en série avec le contact <b>b</b> ; cette branche est en parallèle avec le contact <b>c</b> ; l'ensemble commande la lampe <b>S</b>.</p>\n<details><summary>Voir le corrigé</summary>\n<p>La lampe s'allume si le courant passe par la branche du haut (a <b>et</b> b fermés) <b>ou</b> par la branche du bas (c fermé). Série = ET, parallèle = OU :</p>\n<p><code>S = a · b + c</code></p>\n<table><thead><tr><th>a</th><th>b</th><th>c</th><th>S</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>0</td><td>1</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>1</td><td>1</td><td><b>1</b></td></tr><tr><td>1</td><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>1</td><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>1</td><td><b>1</b></td></tr></tbody></table>\n<p>S vaut 1 dès que c = 1 (4 lignes), plus la ligne a = b = 1 avec c = 0.</p><p><b>Astuce de lecture :</b> sur un schéma à contacts, suis le courant du + vers la lampe. Chaque chemin possible donne un terme ET (les contacts traversés), et les chemins différents s'additionnent avec des OU.</p>\n</details>"
            },
            {
              "titre": "Exercice 2 : du chronogramme à l'équation",
              "html": "<p><b>Énoncé :</b> à partir du chronogramme de e1, e2 et S, donner la table de vérité, l'équation logique et le logigramme de S, en utilisant uniquement les fonctions de base NON, ET, OU.</p>\n<p>Lecture du chronogramme, intervalle par intervalle : e2 passe à 1, revient à 0 quand e1 monte, remonte à 1 pendant que e1 est encore à 1, puis e1 et e2 retombent ensemble. S est à 1 du premier front de e2 jusqu'au deuxième front montant de e2.</p><div class=\"attention\"><b>Attention :</b> un chronogramme peut repasser plusieurs fois par la même combinaison (ici 00 au début et à la fin). Dans la table de vérité, on ne l'écrit qu'une fois. Si la même combinaison donnait deux sorties différentes, le système ne serait pas combinatoire.</div>\n<details><summary>Voir le corrigé</summary>\n<table><thead><tr><th>Intervalle</th><th>e1</th><th>e2</th><th>S</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>2</td><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>3</td><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>4</td><td>1</td><td>1</td><td><b>0</b></td></tr><tr><td>5</td><td>0</td><td>0</td><td><b>0</b></td></tr></tbody></table>\n<p>On regroupe les combinaisons :</p>\n<table><thead><tr><th>e1</th><th>e2</th><th>S</th></tr></thead><tbody><tr><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table>\n<p>S vaut 1 quand une seule des deux entrées est à 1 : c'est un <b>OU exclusif</b>. On applique la méthode de la première section (une ligne à 1 = un ET, les ET reliés par un OU) :</p>\n<p><code>S = e1 · /e2 + /e1 · e2</code></p>\n<p><b>Logigramme :</b> deux portes NON (une sur e1, une sur e2) ; une porte ET reçoit e1 et /e2 ; une deuxième porte ET reçoit /e1 et e2 ; une porte OU (≥1) réunit les deux sorties des ET et donne S.</p>\n<p><b>Logigramme direct :</b> une seule porte OU exclusif (rectangle <code>=1</code>) qui reçoit e1 et e2. On l'écrit aussi <code>S = e1 ⊕ e2</code>. L'énoncé demande d'utiliser seulement NON, ET, OU, donc c'est la version à 5 portes qui est attendue.</p>\n<p><b>Schéma à contacts :</b> il faut <b>deux branches en parallèle</b>, chacune avec deux contacts en série :</p>\n<ul><li>branche 1 : contact <b>NO e1</b> en série avec contact <b>NC e2</b> (pour e1 · /e2) ;</li>\n<li>branche 2 : contact <b>NC e1</b> en série avec contact <b>NO e2</b> (pour /e1 · e2).</li></ul>\n<p>Les deux branches alimentent la lampe S. Avec seulement e1 et e2 en parallèle (sans contacts NC), on obtiendrait un simple OU : la lampe resterait allumée quand e1 = e2 = 1.</p>\n</details>"
            },
            {
              "titre": "Exercice 3 : du logigramme à l'équation",
              "html": "<p><b>Énoncé :</b> le logigramme a quatre entrées a, b, c, d. Une porte OU (≥1) reçoit a et b. Une porte NON reçoit c. Une porte ET (&amp;) reçoit les sorties de ces deux portes et donne S1. Une dernière porte OU reçoit S1 et d, et donne S.</p>\n<p>a) Donner l'équation de S1 et de S. b) Représenter le schéma à contacts de S. c) Réaliser la table de vérité de S1.</p>\n<details><summary>Voir le corrigé</summary>\n<p><b>a) Équations :</b></p>\n<p><code>S1 = (a + b) · /c</code><br><code>S = S1 + d = (a + b) · /c + d</code></p>\n<p><b>b) Rappel des équivalences contacts :</b> OUI = un contact NO ; NON = un contact NC ; ET = contacts en série ; OU = contacts en parallèle.</p>\n<p><b>Schéma à contacts (version vue en classe, en deux temps) :</b></p>\n<ul><li><b>Circuit de S1 :</b> contacts NO <b>A</b> et <b>B</b> en parallèle, en série avec un contact <b>NC C</b> (pour /C), qui commandent S1.</li>\n<li><b>Circuit de S :</b> un contact <b>S1</b> (S1 utilisé comme relais intermédiaire) en parallèle avec un contact NO <b>D</b>, qui commandent S.</li></ul>\n<p><b>Version en un seul circuit :</b> (A ∥ B) en série avec C (NC), le tout en parallèle avec D, alimente S. Les deux versions donnent la même équation.</p><p><i>Le signe ∥ veut dire « en parallèle avec ».</i></p>\n<p><b>c) Table de vérité de S1</b> (d n'intervient pas dans S1) :</p>\n<table><thead><tr><th>a</th><th>b</th><th>c</th><th>S1</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>0</td><td>1</td><td><b>0</b></td></tr><tr><td>0</td><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>0</td><td>1</td><td>1</td><td><b>0</b></td></tr><tr><td>1</td><td>0</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>0</td><td>1</td><td><b>0</b></td></tr><tr><td>1</td><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table>\n<p>S1 = 1 seulement si c = 0 et au moins une des entrées a ou b est à 1.</p>\n<p><i>En classe, la table a été remplie avec A qui change à chaque ligne (000, 100, 010, 110…). L'ordre des lignes peut changer, mais le résultat est le même : S1 = 1 pour (A, B, C) = (1, 0, 0), (0, 1, 0) et (1, 1, 0).</i></p>\n</details>"
            },
            {
              "titre": "Exercice 4 : de l'équation au logigramme",
              "html": "<p><b>Énoncé :</b> réaliser les logigrammes des équations suivantes :</p>\n<ul><li><code>S1 = a + /(b · c)</code> (la barre couvre b · c)</li><li><code>S2 = a · b · c + a · /b</code></li><li><code>S4 = /(a + /b) · c</code> (la grande barre couvre a + /b)</li></ul>\n<details><summary>Voir le corrigé</summary>\n<p><b>S1 :</b> une porte ET reçoit b et c ; sa sortie passe dans une porte NON (ou directement une porte NON-ET sur b et c) ; une porte OU reçoit a et cette sortie, et donne S1.</p>\n<p><i>En classe :</i> on a dessiné directement une porte <b>&amp;</b> sur b et c avec un <b>petit triangle</b> sur sa sortie. Ce triangle est le symbole de négation de la norme européenne : la porte est donc un <b>NON-ET</b>, qui donne /(b · c). Sa sortie et a entrent dans une porte <b>≥1</b> qui donne S1.</p>\n<p><b>S2 :</b> une porte ET à 3 entrées reçoit a, b, c. Une porte NON donne /b. Une deuxième porte ET reçoit a et /b. Une porte OU réunit les deux ET et donne S2.<br><i>Simplification possible :</i> <code>S2 = a · (b · c + /b) = a · (/b + c)</code>.</p>\n<p><i>En classe :</i> logigramme sans simplification. Une porte &amp; à 3 entrées (a, b, c), une porte <b>1</b> avec triangle (NON) sur b, une porte &amp; sur a et /b, puis une porte ≥1 qui réunit les deux et commande la sortie S2.</p>\n<p><b>S4 :</b> une porte NON donne /b. Une porte OU reçoit a et /b. Sa sortie passe dans une porte NON (ou directement une porte NON-OU sur a et /b). Une porte ET reçoit ce résultat et c, et donne S4.<br><i>Simplification possible</i> (théorème de De Morgan) : <code>S4 = /a · b · c</code>.</p><p><b>Le théorème de De Morgan en une phrase :</b> pour enlever une grande barre, on <b>barre chaque terme</b> et on <b>change le signe</b> (+ devient ·, et · devient +). <code>/(x + y) = /x · /y</code> et <code>/(x · y) = /x + /y</code>. Ici : <code>/(a + /b) = /a · //b = /a · b</code> (deux barres s'annulent).</p>\n</details>"
            }
          ],
          "pointsCles": [
            "Table → équation : une ligne à 1 = un ET des entrées (barre si l'entrée vaut 0), puis tous les ET reliés par des OU.",
            "Contacts en série = ET ; contacts en parallèle = OU ; contact NC = NON.",
            "Pour lire un chronogramme, découpe le temps en intervalles et note e1, e2, S sur chacun : tu obtiens la table de vérité.",
            "Une sortie à 1 quand une seule entrée est à 1 = OU exclusif = e1 · /e2 + /e1 · e2.",
            "Pour lire un logigramme, écris la sortie de chaque porte en partant des entrées."
          ],
          "flashcards": [
            {
              "q": "Comment passer d'une table de vérité à l'équation ?",
              "r": "Pour chaque ligne où S = 1, écrire un ET des entrées (barre sur celles à 0), puis relier ces termes par des OU."
            },
            {
              "q": "Comment s'écrit la ligne e1 = 1, e2 = 0 dans l'équation ?",
              "r": "e1 · /e2."
            },
            {
              "q": "Notations : NON, ET, OU ?",
              "r": "NON : barre au-dessus (/x). ET : point (·). OU : plus (+)."
            },
            {
              "q": "Dans un schéma à contacts, que traduisent deux contacts en série ? en parallèle ?",
              "r": "En série : un ET. En parallèle : un OU."
            },
            {
              "q": "Comment représenter /c dans un schéma à contacts ?",
              "r": "Avec un contact normalement fermé (NC) c."
            },
            {
              "q": "Exercice 1 : équation de S (a en série avec b, le tout en parallèle avec c) ?",
              "r": "S = a · b + c."
            },
            {
              "q": "Que signifie le petit triangle sur la sortie d'une porte (norme européenne) ?",
              "r": "Une négation : une porte & avec triangle est un NON-ET, une porte 1 avec triangle est un NON."
            },
            {
              "q": "Écrire le OU exclusif avec seulement NON, ET, OU.",
              "r": "S = e1 · /e2 + /e1 · e2."
            },
            {
              "q": "Schéma à contacts du OU exclusif ?",
              "r": "Deux branches en parallèle : (NO e1 + NC e2 en série) et (NC e1 + NO e2 en série)."
            },
            {
              "q": "Équivalences contacts : OUI, NON, ET, OU ?",
              "r": "OUI = contact NO ; NON = contact NC ; ET = série ; OU = parallèle."
            },
            {
              "q": "Exercice 3 : équation de S1 et de S ?",
              "r": "S1 = (a + b) · /c ; S = (a + b) · /c + d."
            },
            {
              "q": "Simplifier S4 = /(a + /b) · c.",
              "r": "Par De Morgan : /(a + /b) = /a · b, donc S4 = /a · b · c."
            },
            {
              "q": "Simplifier S2 = a · b · c + a · /b.",
              "r": "S2 = a · (b · c + /b) = a · (/b + c)."
            },
            {
              "q": "Exercice 4 : comment réaliser S1 = a + /(b · c) ?",
              "r": "Une porte NON-ET sur b et c (ou ET puis NON), puis une porte OU qui reçoit a et cette sortie."
            },
            {
              "q": "Que vaut //b (b deux fois barré) ?",
              "r": "b : deux barres s'annulent."
            }
          ],
          "definitions": [
            {
              "terme": "Théorème de De Morgan",
              "def": "/(x + y) = /x · /y et /(x · y) = /x + /y : on barre chaque terme et on change le signe."
            },
            {
              "terme": "Logigramme",
              "def": "Schéma qui représente une équation logique avec des symboles de portes (NON, ET, OU…)."
            }
          ],
          "quiz": [
            {
              "q": "Table de vérité : S = 1 uniquement pour la ligne a = 1, b = 0. Quelle est l'équation ?",
              "choix": [
                "S = a · /b",
                "S = /a · b",
                "S = a + /b",
                "S = a · b"
              ],
              "bonne": 0,
              "explication": "Une ligne à 1 = un ET des entrées ; b vaut 0 donc on l'écrit barré."
            },
            {
              "q": "Contact a en série avec b, le tout en parallèle avec c. Équation de S ?",
              "choix": [
                "S = a · b + c",
                "S = (a + b) · c",
                "S = a + b · c",
                "S = a · b · c"
              ],
              "bonne": 0,
              "explication": "Série = ET (a · b), parallèle = OU (+ c)."
            },
            {
              "q": "Dans un schéma à contacts, comment représenter /c ?",
              "choix": [
                "Un contact NC (normalement fermé) c",
                "Un contact NO c",
                "Deux contacts c en série",
                "Une bobine c"
              ],
              "bonne": 0,
              "explication": "Le NON se câble avec un contact normalement fermé."
            },
            {
              "q": "Exercice 3 : S1 = (a + b) · /c. Pour a = 1, b = 0, c = 1, S1 vaut…",
              "choix": [
                "0",
                "1",
                "2",
                "Indéterminé"
              ],
              "bonne": 0,
              "explication": "a + b = 1, mais /c = 0, donc S1 = 1 · 0 = 0."
            },
            {
              "q": "Simplification de S4 = /(a + /b) · c ?",
              "choix": [
                "S4 = /a · b · c",
                "S4 = a · /b · c",
                "S4 = /a + b + c",
                "S4 = (/a + b) · c"
              ],
              "bonne": 0,
              "explication": "De Morgan : /(a + /b) = /a · b, puis on garde le · c."
            },
            {
              "q": "Une table de vérité a 3 lignes où S = 1. Avec la méthode du cours, combien de portes ET faut-il (avant simplification) ?",
              "choix": [
                "3",
                "1",
                "2",
                "6"
              ],
              "bonne": 0,
              "explication": "Une porte ET par ligne à 1, puis une porte OU qui les réunit."
            }
          ],
          "examen": [
            {
              "titre": "Du schéma à contacts à la table de vérité",
              "enonce": "<p>Une lampe S est alimentée par le circuit suivant : un contact NO <b>a</b> est en série avec un ensemble formé d'un contact NO <b>b</b> en parallèle avec un contact NC <b>c</b>.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire l'équation de S.",
                  "points": 1,
                  "attendu": "S = a · (b + /c)",
                  "corrige": "<p>Série = ET, parallèle = OU, contact NC = NON. La branche parallèle donne <code>b + /c</code>, en série avec a :</p><p><code>S = a · (b + /c)</code></p>"
                },
                {
                  "type": "libre",
                  "q": "Établir la table de vérité de S (ordre a, b, c de 000 à 111).",
                  "points": 1,
                  "attendu": "S = 1 pour 100, 110 et 111 seulement.",
                  "corrige": "<table><thead><tr><th>a</th><th>b</th><th>c</th><th>S</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>0</td><td>1</td><td><b>0</b></td></tr><tr><td>0</td><td>1</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>1</td><td>1</td><td><b>0</b></td></tr><tr><td>1</td><td>0</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>0</td><td>1</td><td><b>0</b></td></tr><tr><td>1</td><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>1</td><td><b>1</b></td></tr></tbody></table><p>Si a = 0, S = 0 (contact ouvert en série). Si a = 1, S = b + /c : vaut 0 seulement pour b = 0, c = 1.</p>"
                },
                {
                  "type": "num",
                  "q": "Pour combien de combinaisons des entrées la lampe est-elle allumée ?",
                  "reponse": 3,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>On compte les lignes à 1 de la table : (1,0,0), (1,1,0), (1,1,1), soit <b>3</b> combinaisons sur 2³ = 8.</p>"
                },
                {
                  "type": "qcm",
                  "q": "a = 1, b = 0, c = 1 : la lampe est…",
                  "choix": [
                    "éteinte (S = 0)",
                    "allumée (S = 1)",
                    "allumée seulement si c est NO",
                    "indéterminée"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>On remplace : <code>S = 1 · (0 + /1) = 1 · (0 + 0) = 0</code>. Le contact b est ouvert et le contact NC c est actionné donc ouvert : aucun chemin.</p>"
                }
              ]
            },
            {
              "titre": "De la table de vérité à l'équation simplifiée",
              "enonce": "<p>Un système à trois entrées a, b, c a une sortie S qui vaut 1 uniquement pour les combinaisons (a, b, c) = (1, 0, 0), (1, 0, 1) et (1, 1, 1). Pour toutes les autres combinaisons, S = 0.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire l'équation de S avec la méthode du cours (une ligne à 1 = un ET, puis OU entre les termes).",
                  "points": 1,
                  "attendu": "S = a · /b · /c + a · /b · c + a · b · c",
                  "corrige": "<p>Chaque ligne à 1 donne un ET contenant <b>toutes</b> les entrées (barrées si elles valent 0) :</p><ul><li>(1, 0, 0) → <code>a · /b · /c</code></li><li>(1, 0, 1) → <code>a · /b · c</code></li><li>(1, 1, 1) → <code>a · b · c</code></li></ul><p><code>S = a · /b · /c + a · /b · c + a · b · c</code></p>"
                },
                {
                  "type": "num",
                  "q": "Avant simplification, combien de portes ET faut-il dans le logigramme ?",
                  "reponse": 3,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Une porte ET par ligne à 1 : <b>3</b> portes ET (à 3 entrées), réunies par une porte OU. Il faut aussi des portes NON pour /b et /c.</p>"
                },
                {
                  "type": "libre",
                  "q": "Simplifier l'équation de S.",
                  "points": 2,
                  "attendu": "S = a · (/b + c)",
                  "corrige": "<p>On met <code>a · /b</code> en facteur dans les deux premiers termes : <code>a · /b · /c + a · /b · c = a · /b · (/c + c) = a · /b · 1 = a · /b</code>.</p><p>Donc <code>S = a · /b + a · b · c = a · (/b + b · c)</code>.</p><p>Comme dans l'exercice 4 du chapitre, <code>/b + b · c = /b + c</code> (si b = 0 le terme vaut 1 ; si b = 1 il vaut c). D'où :</p><p><code>S = a · (/b + c)</code></p><p>Vérification ligne (1, 1, 0) : <code>1 · (0 + 0) = 0</code>, correct.</p>"
                },
                {
                  "type": "libre",
                  "q": "Décrire le schéma à contacts de l'équation simplifiée.",
                  "points": 1,
                  "attendu": "Contact NO a en série avec (contact NC b en parallèle avec contact NO c).",
                  "corrige": "<p>Un contact <b>NO a</b> en série avec un ensemble parallèle formé d'un contact <b>NC b</b> (pour /b) et d'un contact <b>NO c</b>. L'ensemble alimente S.</p>"
                }
              ]
            },
            {
              "titre": "Du logigramme à l'équation, De Morgan",
              "enonce": "<p>Un logigramme a trois entrées a, b, c :</p><ul><li>une porte NON-OU reçoit a et b ; sa sortie et c entrent dans une porte ET qui donne X ;</li><li>une porte NON-ET reçoit b et c ; sa sortie et a entrent dans une porte ET qui donne Y ;</li><li>une porte OU (≥1) reçoit X et Y et donne S.</li></ul>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire les équations de X, Y et S.",
                  "points": 1,
                  "attendu": "X = /(a + b) · c ; Y = a · /(b · c) ; S = /(a + b) · c + a · /(b · c)",
                  "corrige": "<p>On écrit la sortie de chaque porte en partant des entrées :</p><p><code>X = /(a + b) · c</code><br><code>Y = a · /(b · c)</code><br><code>S = X + Y = /(a + b) · c + a · /(b · c)</code></p>"
                },
                {
                  "type": "libre",
                  "q": "Appliquer le théorème de De Morgan pour écrire S sans grande barre.",
                  "points": 2,
                  "attendu": "S = /a · /b · c + a · /b + a · /c",
                  "corrige": "<p>De Morgan : on barre chaque terme et on change le signe.</p><p><code>/(a + b) = /a · /b</code> donc <code>X = /a · /b · c</code>.</p><p><code>/(b · c) = /b + /c</code> donc <code>Y = a · (/b + /c) = a · /b + a · /c</code>.</p><p><code>S = /a · /b · c + a · /b + a · /c</code></p>"
                },
                {
                  "type": "num",
                  "q": "Pour combien des 8 combinaisons de (a, b, c) la sortie S vaut-elle 1 ?",
                  "reponse": 4,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<table><thead><tr><th>a</th><th>b</th><th>c</th><th>S</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>0</td><td>1</td><td>0</td><td><b>0</b></td></tr><tr><td>0</td><td>1</td><td>1</td><td><b>0</b></td></tr><tr><td>1</td><td>0</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>1</td><td><b>0</b></td></tr></tbody></table><p>S = 1 pour (0,0,1), (1,0,0), (1,0,1) et (1,1,0) : <b>4</b> combinaisons.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Pour a = 1, b = 1, c = 1, que vaut S ?",
                  "choix": [
                    "0",
                    "1",
                    "Indéterminé",
                    "Ça dépend de l'ordre des portes"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><code>X = /(1 + 1) · 1 = 0</code> et <code>Y = 1 · /(1 · 1) = 1 · 0 = 0</code>, donc <code>S = 0 + 0 = 0</code>.</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "tp-modicon-m340",
          "titre": "TP Modicon M340 / Unity Pro",
          "date": "2026-10-08",
          "source": "Poly TP « Modicon M340 – Exercice 1 » (AFPI / IFTI), pages 1 à 8",
          "resume": "Premier TP sur automate Schneider M340 avec Unity Pro XL : créer le projet, configurer le rack, déclarer BP1, BP2 et 7 voyants, programmer les 7 fonctions logiques en LD, puis analyser, générer et charger.",
          "sections": [
            {
              "titre": "Objectifs et démarche",
              "html": "<p>Premier TP sur l'automate <b>Schneider Modicon M340</b>, programmé avec le logiciel <b>Unity Pro XL</b>. En classe, on utilise <b>Control Expert</b> : c'est le nouveau nom d'Unity Pro, les menus sont les mêmes. Objectifs :</p>\n<ul><li>créer un projet ;</li><li>réaliser la configuration matérielle ;</li><li>déclarer les entrées / sorties ;</li><li>mettre en œuvre les fonctions logiques.</li></ul>\n<p>Toute application Unity Pro suit le même ordre :</p>\n<ol><li><b>Définition de la configuration matérielle</b> (rack, CPU, modules) ;</li><li><b>Définition des vues fonctionnelles</b> ;</li><li><b>Définition des variables automate</b> (on crée variables et instances au fur et à mesure).</li></ol>\n<p><i>Coche les étapes au fur et à mesure dans les sections suivantes : tes coches restent enregistrées sur cet appareil.</i></p>"
            },
            {
              "titre": "Le matériel de la platine",
              "html": "<figure style=\"margin:0 0 12px\"><img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/6xaJSlACEQAAAAEAABZ/anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFllqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmM3YWM5N2ZhLWM5Y2QtNGU4Yi1hNDI5LTlmYzAzNWQ5MTg5MwAAAAOUanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuWp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNo3bOlmpnRnXnGkMENVvuXbwAAAG1jYm9yo2lkYzpmb3JtYXRqaW1hZ2UvanBlZ2ppbnN0YW5jZUlEeCx4bXA6aWlkOjQzMTMxYTg1LTIxODAtNDQxMi1hNWRlLWY5NGJhZmFlYjdhOWxyZWxhdGlvbnNoaXBocGFyZW50T2YAAAHianVtYgAAAEFqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmFjdGlvbnMudjIAAAAAGGMyc2gttH1YPsZVI0n9QSn5diwdAAABmWNib3KiZ2FjdGlvbnOComZhY3Rpb25rYzJwYS5vcGVuZWRqcGFyYW1ldGVyc6FraW5ncmVkaWVudHOBomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCCorNEQFWghCv9SkIRjBDPamppg/1/s+xxtMR9Ok54RaKRmYWN0aW9ueB1jb20uYW50aHJvcGljLmNsYXVkZS5wcm92aWRlZGpwYXJhbWV0ZXJzoXgfY29tLmFudGhyb3BpYy5vcmlnaW4tY29uZmlkZW5jZWd1bmtub3dua2Rlc2NyaXB0aW9ueGZDbGF1ZGUgcHJvdmlkZWQgdGhpcyBmaWxlIGF0IHRoZSByZXF1ZXN0IG9mIGEgdXNlciBhbmQgbWF5IGhhdmUgY3JlYXRlZCBvciBtb2RpZmllZCB0aGUgZmlsZSBjb250ZW50cy5tc29mdHdhcmVBZ2VudKFkbmFtZWZDbGF1ZGVyYWxsQWN0aW9uc0luY2x1ZGVk9QAAAMhqdW1iAAAAQGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaGFzaC5kYXRhAAAAABhjMnNozsFbsv3dM4HnFqEjAbhZSQAAAIBjYm9ypWNhbGdmc2hhMjU2Y3BhZE4AAAAAAAAAAAAAAAAAAGRoYXNoWCD+2f4VegRllr90n+StNC7+pKLYt6ohM/d3ahWes56WB2RuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBRmbGVuZ3RoGRaLAAACPmp1bWIAAAAnanVtZGMyY2wAEQAQgAAAqgA4m3EDYzJwYS5jbGFpbS52MgAAAAIPY2JvcqVjYWxnZnNoYTI1NmlzaWduYXR1cmV4TXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6YzdhYzk3ZmEtYzljZC00ZThiLWE0MjktOWZjMDM1ZDkxODkzL2MycGEuc2lnbmF0dXJlamluc3RhbmNlSUR4LHhtcDppaWQ6Njc2YzY0NGMtZWZmOS00NDc2LThjNjMtZmVjNTkzMTAyZWM2cmNyZWF0ZWRfYXNzZXJ0aW9uc4OiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIKis0RAVaCEK/1KQhGMEM9qammD/X+z7HG0xH06TnhFoomN1cmx4KnNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuYWN0aW9ucy52MmRoYXNoWCCuozzONNJCcUOwW37TP94NXmBEKkYWs27jU00m2zraUaJjdXJseClzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmhhc2guZGF0YWRoYXNoWCDLAmqlWZLRodhWVqp+MsGXijSjAeKwLa/b2dzqcQ81eHRjbGFpbV9nZW5lcmF0b3JfaW5mb6NkbmFtZW9BbnRocm9waWMgRmlsZXNndmVyc2lvbmUxLjAuMGtzcGVjVmVyc2lvbmUyLjQuMAAAEDhqdW1iAAAAKGp1bWRjMmNzABEAEIAAAKoAOJtxA2MycGEuc2lnbmF0dXJlAAAAEAhjYm9y0oRZAhKiASYYIVkCCjCCAgYwggGNoAMCAQICFEDloAruwjnQvriD+gZCBT1nVRMAMAoGCCqGSM49BAMDMEkxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMS4wLAYDVQQDEyVBbnRocm9waWMgQ29udGVudCBDcmVkZW50aWFscyBSb290IENBMB4XDTI2MDgwNzE4NDM1NloXDTI4MDgwNjE5NDM1NlowRDEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxKTAnBgNVBAMTIEFudGhyb3BpYyBDbGF1ZGUgQ29udGVudCBTaWduaW5nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmHoKa8tQGAUU1TS9QqU5W0Tp2N3XsvlK7BfQt6YWKwEzd2R3/dzKPEUDdCjlLjp9fT+KFjRVnuZ9v0oXvTe3k6NYMFYwDgYDVR0PAQH/BAQDAgeAMBUGA1UdJQQOMAwGCisGAQQBg+heAgEwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBTOUeIEgU5kWyP448TPmj6cwddcwjAKBggqhkjOPQQDAwNnADBkAjAxcx0UngF60stVjs5G4T2eiptsBk5mf9oCtfJPAUBl8qs/PEXa8+gk1/X5QJ2DVcYCMHBfXN31YapiSqYvlIWrDVDJKOvXMl+kkz37Wt0PBI8sw486Mq6JeOhT+lRR4b1HCaFjcGFkWQ2eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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\" alt=\"Platine de TP : automate M340 sur plaque jaune, boîtier de voyants et platine rouge à interrupteurs de position\" style=\"max-width:100%;height:auto;border-radius:var(--r);border:1px solid var(--line)\"><figcaption style=\"font-family:var(--f-ui);font-size:13px;color:var(--muted)\">La platine de TP en classe.</figcaption></figure>\n<ul><li><b>Platine jaune</b> : l'automate <b>Modicon M340</b> sur son rack. On y voit l'alimentation, la CPU (avec ses prises Ethernet et USB) et les modules <b>DDI 1602</b> (entrées), <b>DRA 1605</b> (sorties à relais) et <b>AMM 0600</b> (analogique). Les modules sont reliés par des faisceaux de fils à des <b>douilles de 4 mm</b>, où l'on branche les cordons.</li>\n<li><b>Boîtier transparent</b> : trois voyants (<b>vert, blanc, rouge</b>) avec leurs douilles de raccordement.</li>\n<li><b>Platine rouge</b> : trois <b>interrupteurs de position à galet</b> (capteurs TOR de fin de course), également câblés sur douilles.</li>\n<li>Le câblage se fait avec des <b>cordons</b> rouges, bleus et noirs. Le PC est relié à la CPU par <b>USB</b>.</li></ul>\n<p><i>Le câblage exact (quel cordon va sur quelle borne) n'est pas lisible sur la photo : réfère-toi au schéma donné par le formateur.</i></p>"
            },
            {
              "titre": "1. Créer le projet",
              "html": "<ul class=\"steps\"><li><span>Ouvrir <b>Control Expert</b> (ou Unity Pro XL).</span></li><li><span><b>Fichier › Nouveau…</b> (<kbd>Ctrl</kbd>+<kbd>N</kbd>).</span></li><li><span>Choisir la CPU : <b>Modicon M340 › BMX P34 2020</b> (CPU 340-20 Modbus Ethernet). Reprendre la référence écrite sur l'automate de la platine (en classe : <b>BMX P34 2020, version 03.50</b>). Valider par <b>OK</b> : la <b>vue structurelle</b> du projet apparaît (Configuration, Variables et instances FB, Programme › Tâches › MAST…).</span></li><li><span>Clic droit sur <b>Station</b> (la racine du navigateur) › <b>Propriétés</b> (<kbd>Alt</kbd>+<kbd>Entrée</kbd>) : saisir le <b>nom</b> (<code>Ex1_nom</code>) et un <b>commentaire</b>, puis OK.</span></li><li><span>Sauvegarder : <b>Fichier › Enregistrer sous</b> → <code>Ex1_nom.STU</code> (format Unity Pro <code>.STU</code>).</span></li></ul>"
            },
            {
              "titre": "2. Configuration matérielle",
              "html": "<p>Double-clic sur <b>Configuration › 0 : Bus automate</b>, puis glisser les modules depuis le <b>catalogue matériel</b> dans les emplacements du rack. Le poly montre un rack <b>BMX XBP 0800</b> (8 emplacements) ; dans le projet de la classe c'est un <b>BMX XBP 0600</b> (6 emplacements) où l'on a déclaré l'alimentation, la CPU, la DDI 1602 et la DRA 1605.</p><p><b>Comment lire une référence Schneider :</b> <b>BMX</b> = gamme M340 ; <b>CPS</b> = alimentation (<i>power supply</i>) ; <b>P34</b> = processeur ; <b>DDI</b> = entrées TOR (<i>discrete input</i>) ; <b>DRA</b> = sorties TOR à relais ; <b>AMM</b> = analogique mixte (entrées et sorties) ; <b>XBP</b> = rack (fond de panier).</p><div class=\"attention\"><b>Attention :</b> l'alimentation a son propre emplacement, marqué <b>(P)</b> ou CPS, qui n'est pas numéroté. La CPU est toujours en emplacement <b>0</b>, et les modules commencent à l'emplacement <b>1</b>. La configuration dans Control Expert doit correspondre exactement au rack réel, sinon l'automate signale une erreur de configuration.</div>\n<table><thead><tr><th>Emplacement</th><th>Module</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>(P)</td><td>BMX CPS 2000</td><td>Alimentation du rack</td></tr>\n<tr><td>0</td><td>BMX P34 2020</td><td>Processeur (CPU)</td></tr>\n<tr><td>1</td><td>BMX DDI 1602</td><td>16 entrées TOR (24 V DC)</td></tr>\n<tr><td>2</td><td>BMX DRA 1605</td><td>16 sorties TOR à relais</td></tr>\n<tr><td>3</td><td>BMX AMM 0600</td><td>Module analogique (entrées / sorties). Présent sur la platine, mais pas déclaré dans le projet de la classe car le TP ne l'utilise pas.</td></tr>\n<tr><td>4</td><td>BMX NOE 0100.2</td><td>Module de communication Ethernet (pas utilisé dans le projet de la classe)</td></tr></tbody></table>\n<ul class=\"steps\"><li><span>Placer l'alimentation et les modules comme dans le tableau.</span></li><li><span>Valider la configuration puis <b>sauvegarder</b> le projet.</span></li></ul>"
            },
            {
              "titre": "3. Câblage et déclaration des E/S",
              "html": "<p>Il faut réaliser les fonctions <b>OUI, NON, ET, OU, ET NON, OU NON, OU exclusif</b> avec <b>2 boutons poussoirs BP1 et BP2</b> et <b>7 voyants</b> (un par fonction).</p>\n<p><b>Adressage</b> : <code>%I0.1.0</code> = entrée (I), rack 0, emplacement 1, voie 0. <code>%Q0.2.3</code> = sortie (Q), rack 0, emplacement 2, voie 3.</p><div class=\"exemple\"><b>Pour retenir :</b> une adresse automate se lit comme une adresse postale. <code>%I0.1.0</code> = <b>I</b>nput (entrée), <b>rack 0</b> (la rue), <b>emplacement 1</b> (le numéro de la maison, ici le module DDI 1602), <b>voie 0</b> (la boîte aux lettres, c'est-à-dire la borne). <b>Q</b> vient de l'anglais et désigne une sortie.</div><div class=\"attention\"><b>Attention :</b> les voies sont numérotées à partir de <b>0</b>. Le 1<sup>er</sup> bouton câblé sur la DDI 1602 est donc <code>%I0.1.0</code>, pas <code>%I0.1.1</code>.</div>\n<p>Trois méthodes pour déclarer les E/S : depuis le <b>configurateur de module</b>, depuis l'<b>éditeur de données</b>, ou directement à la <b>saisie du programme</b>. Le TP utilise le configurateur de module.</p>\n<ul class=\"steps\"><li><span>Câbler les entrées et les sorties (alimentées en <b>24 V DC</b>).</span></li><li><span>⚠️ <b>Appeler le formateur avant la première mise sous tension.</b></span></li><li><span>Double-clic sur le module <b>DDI 1602</b> › onglet <b>Objets d'E/S</b> : cocher <code>%I</code>, <b>Mettre à jour grille</b>, puis nommer <b>BP1</b> et <b>BP2</b> (type EBOOL).</span></li><li><span>Double-clic sur le module <b>DRA 1605</b> › onglet <b>Objets d'E/S</b> : cocher <code>%Q</code>, <b>Mettre à jour grille</b>, puis donner un nom à chaque voie (type EBOOL).</span></li></ul><table><thead><tr><th>Adresse</th><th>Nom</th><th>Rôle</th></tr></thead><tbody><tr><td><code>%I0.1.0</code></td><td>BP1</td><td>Bouton poussoir 1</td></tr><tr><td><code>%I0.1.1</code></td><td>BP2</td><td>Bouton poussoir 2</td></tr><tr><td><code>%Q0.2.0</code></td><td>OUI</td><td>Voyant OUI</td></tr><tr><td><code>%Q0.2.1</code></td><td>NON</td><td>Voyant NON</td></tr><tr><td><code>%Q0.2.2</code></td><td>ET</td><td>Voyant ET</td></tr><tr><td><code>%Q0.2.3</code></td><td>OU</td><td>Voyant OU</td></tr><tr><td><code>%Q0.2.4</code></td><td>ET_NON</td><td>Voyant NAND</td></tr><tr><td><code>%Q0.2.5</code></td><td>OU_NON</td><td>Voyant NOR</td></tr><tr><td><code>%Q0.2.6</code></td><td>OU_EXCLUSIF</td><td>Voyant XOR</td></tr></tbody></table><p><i>Adresses de la platine en classe. Le poly montre un autre ordre pour les sorties (ET en <code>%Q0.2.0</code>…) : c'est juste un exemple, l'important est que le nom corresponde à la voie câblée.</i></p><p>On retrouve toutes ces variables dans l'<b>éditeur de données</b> (Variables et instances FB › Variables élémentaires).</p>"
            },
            {
              "titre": "4. Programmer les fonctions en LD",
              "html": "<ul class=\"steps\"><li><span>Dans <b>Programme › Tâches › MAST</b>, clic droit sur <b>Sections</b> › <b>Nouvelle section</b>.</span></li><li><span>Nom : <code>Fonctions_logiques</code> (en classe : <code>Fonction_logique</code>), langage : <b>LD</b> (ladder / langage à contacts), puis OK.</span></li><li><span>Programmer <b>OUI</b>.</span></li><li><span>Programmer <b>NON</b>.</span></li><li><span>Programmer <b>ET</b>.</span></li><li><span>Programmer <b>OU</b>.</span></li><li><span>Programmer <b>NAND</b> (ET NON).</span></li><li><span>Programmer <b>NOR</b> (OU NON).</span></li><li><span>Programmer <b>XOR</b> (OU exclusif).</span></li></ul><p>Les autres langages proposés : <b>ST</b> (texte structuré), <b>IL</b> (liste d'instructions), <b>FBD</b> (blocs fonctions, comme les logigrammes), <b>SFC</b> (Grafcet).</p><p>Ces 5 langages sont définis par la norme internationale <b>IEC 61131-3</b> (langages des automates programmables) : on les retrouve chez tous les fabricants, pas seulement chez Schneider. <i>(Le langage IL est déclaré obsolète dans la dernière version de la norme.)</i></p>"
            },
            {
              "titre": "Bonus : les 7 échelles LD",
              "html": "<p><b>Programme réalisé en classe : les 7 réseaux sont justes</b> (analyse : 0 erreur, 0 avertissement ; automate en RUN, état GENERE et EQUAL).</p><p>Chaque fonction = un <b>réseau</b> (une ligne) de la section LD. À gauche les contacts (entrées BP1, BP2), à droite la bobine (le voyant). Contact <b>NO</b> = <code>-| |-</code>, contact <b>NC</b> (barré) = <code>-|/|-</code>, bobine = <code>-( )-</code>.</p><div class=\"exemple\"><b>Pour comprendre le LD :</b> imagine que le rail de gauche est le + d'une pile et que le rail de droite est le −. Le « courant » part de la gauche, traverse les contacts fermés et, s'il arrive jusqu'à la bobine, la bobine passe à 1. Un contact NO est « fermé » quand sa variable vaut 1 ; un contact NC (barré) est « fermé » quand sa variable vaut 0.</div><h4>Fonction OUI <small style=\"font-weight:400;color:var(--muted)\">→ voyant OUI</small></h4><p><code>S = BP1</code><br>Un contact NO : le voyant s'allume quand on appuie sur BP1.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 64\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD OUI\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OUI</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.0</text></svg></div><h4>Fonction NON <small style=\"font-weight:400;color:var(--muted)\">→ voyant NON</small></h4><p><code>S = /BP1</code><br>Un contact NC (barré) : le voyant est allumé au repos et s'éteint quand on appuie sur BP1.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 64\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD NON\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"47\" x2=\"92\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">NON</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.1</text></svg></div><h4>Fonction ET <small style=\"font-weight:400;color:var(--muted)\">→ voyant ET</small></h4><p><code>S = BP1 · BP2</code><br>Deux contacts NO en série : il faut appuyer sur les deux.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 64\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD ET\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"167\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"167\" y1=\"23\" x2=\"167\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"183\" y1=\"23\" x2=\"183\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"175\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"183\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">ET</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.2</text></svg></div><h4>Fonction OU <small style=\"font-weight:400;color:var(--muted)\">→ voyant OU</small></h4><p><code>S = BP1 + BP2</code><br>Deux contacts NO en parallèle : un seul suffit.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 120\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD OU\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"88\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"10\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"250\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OU</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.3</text></svg></div><h4>Fonction NAND (ET NON) <small style=\"font-weight:400;color:var(--muted)\">→ voyant ET_NON</small></h4><p><code>S = /(BP1 · BP2) = /BP1 + /BP2</code><br>Deux contacts NC en parallèle (De Morgan) : le voyant ne s'éteint que si on appuie sur les deux.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 120\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD ET_NON\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"47\" x2=\"92\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"103\" x2=\"92\" y2=\"77\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"88\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"10\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"250\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">ET_NON</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.4</text></svg></div><h4>Fonction NOR (OU NON) <small style=\"font-weight:400;color:var(--muted)\">→ voyant OU_NON</small></h4><p><code>S = /(BP1 + BP2) = /BP1 · /BP2</code><br>Deux contacts NC en série (De Morgan) : le voyant ne reste allumé que si aucun bouton n'est appuyé.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 64\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD OU_NON\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"47\" x2=\"92\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"167\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"167\" y1=\"23\" x2=\"167\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"183\" y1=\"23\" x2=\"183\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"163\" y1=\"47\" x2=\"187\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"175\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"183\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OU_NON</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.5</text></svg></div><h4>Fonction XOR (OU exclusif) <small style=\"font-weight:400;color:var(--muted)\">→ voyant OU_EXCLUSIF</small></h4><p><code>S = BP1 · /BP2 + /BP1 · BP2</code><br>Deux branches en parallèle : BP1 NO + BP2 NC, et BP1 NC + BP2 NO. Allumé si un seul bouton est appuyé.</p><div class=\"tbl\"><svg viewBox=\"0 0 440 120\" width=\"440\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD OU_EXCLUSIF\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"430\" y1=\"8\" x2=\"430\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"167\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"167\" y1=\"23\" x2=\"167\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"183\" y1=\"23\" x2=\"183\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"163\" y1=\"47\" x2=\"187\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"175\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"183\" y1=\"34\" x2=\"250\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"103\" x2=\"92\" y2=\"77\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"90\" x2=\"167\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"167\" y1=\"79\" x2=\"167\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"183\" y1=\"79\" x2=\"183\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"175\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"183\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"10\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"250\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"250\" y1=\"34\" x2=\"326\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M332 22 Q324 34 332 46 M348 22 Q356 34 348 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"354\" y1=\"34\" x2=\"430\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"340\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OU_EXCLUSIF</text><text x=\"340\" y=\"62\" text-anchor=\"middle\" fill=\"var(--muted)\">%Q0.2.6</text></svg></div>"
            },
            {
              "titre": "5. Analyser, générer, charger",
              "html": "<ul class=\"steps\"><li><span><b>Génération › Analyser le projet</b> : le résultat s'affiche dans la fenêtre d'information (objectif : <b>0 erreur(s), 0 avertissement(s)</b>). Double-clic sur une ligne en rouge ou en bleu pour aller directement à l'élément en cause.</span></li><li><span><b>Génération › Générer le projet</b> (ou <b>Regénérer tout le projet</b>). Unity Pro vérifie que les tâches respectent le matériel configuré et les paramètres du bus ; sinon la table de scrutation n'est pas générée.</span></li><li><span>Vérifier que la ligne d'état affiche <b>GENERE</b> : le projet n'a aucune erreur et peut être chargé.</span></li><li><span>Charger le programme dans l'automate (liaison USB), passer en <b>RUN</b>. La ligne d'état doit afficher <b>RUN</b>, <b>GENERE</b> et <b>EQUAL</b> (le programme du PC est identique à celui de l'automate).</span></li><li><span>Essais : tester chaque voyant avec les 4 combinaisons de BP1 / BP2 et comparer avec les tables de vérité du cours.</span></li></ul><div class=\"exemple\"><b>Grille d'essai à remplir :</b> pour chaque combinaison (BP1, BP2) = (0,0), (0,1), (1,0), (1,1), note quels voyants s'allument. Tu dois retrouver : OUI = BP1 ; NON = inverse de BP1 ; ET seulement en (1,1) ; OU partout sauf (0,0) ; NAND partout sauf (1,1) ; NOR seulement en (0,0) ; XOR en (0,1) et (1,0).</div><div class=\"attention\"><b>Attention :</b> « Analyser » vérifie seulement que le programme est bien écrit (syntaxe, variables déclarées). Il ne vérifie pas qu'il fait ce que tu veux : c'est le rôle des essais.</div>"
            }
          ],
          "pointsCles": [
            "Ordre d'une application Unity Pro : configuration matérielle → vues fonctionnelles → variables.",
            "CPU du TP : BMX P34 2020 ; projet enregistré en .STU.",
            "Adresse %I0.1.0 = entrée, rack 0, emplacement 1, voie 0 ; %Q = sortie.",
            "En LD : série = ET, parallèle = OU, contact NC (barré) = NON, bobine = sortie.",
            "GENERE dans la ligne d'état = projet sans erreur, prêt à être chargé."
          ],
          "definitions": [
            {
              "terme": "Unity Pro XL",
              "def": "Logiciel Schneider de programmation des automates Modicon (M340, M580, Premium, Quantum)."
            },
            {
              "terme": "Rack (BMX XBP 0800)",
              "def": "Châssis (fond de panier) qui reçoit l'alimentation, la CPU et les modules. BMX XBP 0800 = 8 emplacements (poly) ; BMX XBP 0600 = 6 emplacements (projet de la classe)."
            },
            {
              "terme": "LD (Ladder)",
              "def": "Langage à contacts : réseaux entre deux barres verticales, contacts à gauche, bobines à droite."
            },
            {
              "terme": "EBOOL",
              "def": "Booléen étendu (0/1) utilisé pour les E/S TOR du M340. En plus de la valeur, il mémorise l'état précédent (pour détecter les fronts) et l'état de forçage."
            },
            {
              "terme": "Section",
              "def": "Partie de programme écrite dans un langage (LD, ST, FBD…) et exécutée par une tâche (MAST)."
            },
            {
              "terme": "MAST",
              "def": "Tâche maître de l'automate : elle exécute cycliquement les sections du programme."
            },
            {
              "terme": "IEC 61131-3",
              "def": "Norme internationale qui définit les langages de programmation des automates : LD, FBD, ST, SFC (et IL, obsolète)."
            },
            {
              "terme": "Adresse topologique",
              "def": "Adresse qui indique où est la voie dans le matériel : %I ou %Q, puis rack . emplacement . voie (ex. %I0.1.0)."
            }
          ],
          "flashcards": [
            {
              "q": "Ordre des étapes d'une application Unity Pro ?",
              "r": "Configuration matérielle, puis vues fonctionnelles, puis variables automate."
            },
            {
              "q": "Quelle CPU utilise-t-on dans le TP ?",
              "r": "BMX P34 2020 (CPU 340-20, Modbus + Ethernet)."
            },
            {
              "q": "Extension d'un projet Unity Pro ?",
              "r": ".STU (ex : Ex1_nom.STU)."
            },
            {
              "q": "Où renseigner le nom et le commentaire du projet ?",
              "r": "Clic droit sur Station › Propriétés (Alt+Entrée)."
            },
            {
              "q": "Rôle des modules CPS 2000, DDI 1602, DRA 1605 ?",
              "r": "CPS 2000 : alimentation. DDI 1602 : 16 entrées TOR. DRA 1605 : 16 sorties à relais."
            },
            {
              "q": "Que signifie %Q0.2.4 ?",
              "r": "Sortie (Q), rack 0, emplacement 2, voie 4."
            },
            {
              "q": "3 méthodes pour déclarer les E/S ?",
              "r": "Configurateur de module, éditeur de données, saisie du programme."
            },
            {
              "q": "Créer une section LD ?",
              "r": "Programme › Tâches › MAST › clic droit Sections › Nouvelle section, langage LD."
            },
            {
              "q": "Échelle LD de la fonction NON ?",
              "r": "Un contact NC (barré) BP1 qui commande la bobine NON."
            },
            {
              "q": "Échelle LD de NAND ?",
              "r": "Deux contacts NC BP1 et BP2 en parallèle (/BP1 + /BP2)."
            },
            {
              "q": "Échelle LD de NOR ?",
              "r": "Deux contacts NC BP1 et BP2 en série (/BP1 · /BP2)."
            },
            {
              "q": "Échelle LD de XOR ?",
              "r": "Deux branches en parallèle : BP1 NO + BP2 NC, et BP1 NC + BP2 NO."
            },
            {
              "q": "Que signifie GENERE dans la ligne d'état ?",
              "r": "Le projet ne contient aucune erreur et peut être chargé dans l'automate."
            },
            {
              "q": "Que signifie EQUAL dans la ligne d'état ?",
              "r": "Le programme du PC est identique à celui chargé dans l'automate."
            },
            {
              "q": "Nouveau nom d'Unity Pro ?",
              "r": "Control Expert (EcoStruxure Control Expert)."
            },
            {
              "q": "Adresses de BP1 et BP2 sur la platine ?",
              "r": "BP1 = %I0.1.0, BP2 = %I0.1.1 (module DDI 1602 en emplacement 1)."
            },
            {
              "q": "Qu'y a-t-il sur la platine rouge du TP ?",
              "r": "Trois interrupteurs de position à galet (capteurs TOR de fin de course)."
            },
            {
              "q": "Que faire avant la première mise sous tension ?",
              "r": "Appeler le formateur."
            },
            {
              "q": "Sur le rack M340, dans quel emplacement est toujours la CPU ?",
              "r": "Dans l'emplacement 0. L'alimentation a son propre emplacement non numéroté (P)."
            },
            {
              "q": "Premier bouton câblé sur la voie 0 de la DDI 1602 en emplacement 1 : son adresse ?",
              "r": "%I0.1.0 (les voies commencent à 0)."
            },
            {
              "q": "Quelle norme définit les langages LD, FBD, ST, SFC ?",
              "r": "La norme IEC 61131-3."
            },
            {
              "q": "« Analyser le projet » sans erreur : le programme fait-il forcément ce qu'on veut ?",
              "r": "Non. L'analyse vérifie la syntaxe et les déclarations, pas le fonctionnement. Il faut faire les essais."
            }
          ],
          "quiz": [
            {
              "q": "Que désigne l'adresse %Q0.2.5 sur la platine ?",
              "choix": [
                "Sortie, rack 0, emplacement 2, voie 5",
                "Entrée, rack 0, emplacement 2, voie 5",
                "Sortie, rack 2, emplacement 0, voie 5",
                "Bit interne n° 25"
              ],
              "bonne": 0,
              "explication": "%Q = sortie, puis rack . emplacement . voie."
            },
            {
              "q": "Quel module fournit les 16 entrées TOR dans le TP ?",
              "choix": [
                "BMX DDI 1602",
                "BMX DRA 1605",
                "BMX CPS 2000",
                "BMX AMM 0600"
              ],
              "bonne": 0,
              "explication": "DDI = entrées TOR. DRA = sorties à relais, CPS = alimentation, AMM = analogique."
            },
            {
              "q": "Quelle est l'extension d'un projet Unity Pro / Control Expert ?",
              "choix": [
                ".STU",
                ".STA",
                ".XEF",
                ".PL7"
              ],
              "bonne": 0,
              "explication": "Le projet de travail est enregistré en .STU (ex. Ex1_nom.STU)."
            },
            {
              "q": "En LD, comment programmer la fonction NOR avec BP1 et BP2 ?",
              "choix": [
                "Deux contacts NC en série",
                "Deux contacts NC en parallèle",
                "Deux contacts NO en série",
                "Deux contacts NO en parallèle"
              ],
              "bonne": 0,
              "explication": "/(BP1 + BP2) = /BP1 · /BP2 : deux contacts barrés en série. En parallèle, ce serait le NAND."
            },
            {
              "q": "La ligne d'état affiche RUN, GENERE et EQUAL. Cela signifie…",
              "choix": [
                "Le programme du PC est identique à celui de l'automate, qui tourne",
                "L'automate est arrêté",
                "Le projet contient des erreurs",
                "Le programme a été modifié sans être transféré"
              ],
              "bonne": 0,
              "explication": "EQUAL = PC et automate identiques ; GENERE = projet sans erreur ; RUN = l'automate exécute le programme."
            },
            {
              "q": "Quel langage graphique ressemble le plus à un schéma électrique à contacts ?",
              "choix": [
                "LD",
                "ST",
                "IL",
                "SFC"
              ],
              "bonne": 0,
              "explication": "LD (Ladder) = langage à contacts : rails, contacts et bobines."
            },
            {
              "q": "Que faut-il faire avant la toute première mise sous tension de la platine ?",
              "choix": [
                "Appeler le formateur",
                "Passer l'automate en RUN",
                "Transférer le programme",
                "Débrancher le câble USB"
              ],
              "bonne": 0,
              "explication": "Consigne de sécurité du TP : le formateur vérifie le câblage avant la mise sous tension."
            }
          ],
          "examen": [
            {
              "titre": "Rack M340 et adressage",
              "enonce": "<p>Un rack M340 BMX XBP 0600 contient : l'alimentation BMX CPS 2000 dans son emplacement (P), la CPU BMX P34 2020 en emplacement 0, un module BMX DDI 1602 en emplacement 1, un module BMX DRA 1605 en emplacement 2 et un deuxième module BMX DDI 1602 en emplacement 3. On câble un capteur de fin de course sur la <b>6<sup>e</sup> voie</b> du module d'entrées de l'emplacement 3, et un voyant sur la <b>1<sup>re</sup> voie</b> du module de sorties.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Donner l'adresse du capteur et celle du voyant.",
                  "points": 2,
                  "attendu": "Capteur : %I0.3.5 ; voyant : %Q0.2.0",
                  "corrige": "<p>Format : %I ou %Q, puis <b>rack . emplacement . voie</b>, les voies étant numérotées à partir de <b>0</b>.</p><p>6<sup>e</sup> voie = voie 5, module d'entrées en emplacement 3 : <code>%I0.3.5</code>.</p><p>1<sup>re</sup> voie = voie 0, module de sorties DRA en emplacement 2 : <code>%Q0.2.0</code>.</p><div class=\"attention\">Piège : la 6<sup>e</sup> voie n'est pas la voie 6.</div>"
                },
                {
                  "type": "num",
                  "q": "Combien d'entrées TOR ce rack offre-t-il au total ?",
                  "reponse": 32,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Chaque DDI 1602 a <b>16 entrées TOR</b> (24 V DC). Deux modules : 2 × 16 = <b>32</b> entrées.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Que signifie l'adresse %Q0.2.4 ?",
                  "choix": [
                    "Sortie, rack 0, emplacement 2, voie 4",
                    "Entrée, rack 0, emplacement 2, voie 4",
                    "Sortie, rack 2, emplacement 0, voie 4",
                    "Bit interne n° 24"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>%Q = sortie, puis rack 0, emplacement 2 (la DRA 1605), voie 4.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Dans quel emplacement se trouve toujours la CPU d'un rack M340 ?",
                  "choix": [
                    "0",
                    "1",
                    "(P)",
                    "Le dernier emplacement"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>La CPU est toujours en emplacement <b>0</b>. L'alimentation a son propre emplacement non numéroté (P), et les modules commencent à l'emplacement 1.</p>"
                }
              ]
            },
            {
              "titre": "Les 7 fonctions logiques en LD",
              "enonce": "<p>Sur la platine du TP, BP1 (<code>%I0.1.0</code>) et BP2 (<code>%I0.1.1</code>) commandent 7 voyants, chacun programmé dans un réseau LD : OUI (= BP1), NON (= /BP1), ET, OU, NAND, NOR et XOR.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Décrire le réseau LD du voyant NAND et celui du voyant XOR (contacts NO, NC, série, parallèle).",
                  "points": 2,
                  "attendu": "NAND : deux contacts NC BP1 et BP2 en parallèle. XOR : deux branches en parallèle, (BP1 NO + BP2 NC en série) et (BP1 NC + BP2 NO en série).",
                  "corrige": "<p><b>NAND :</b> <code>/(BP1 · BP2) = /BP1 + /BP2</code> (De Morgan) : deux contacts <b>NC</b> <code>-|/|-</code> BP1 et BP2 <b>en parallèle</b>, qui commandent la bobine ET_NON.</p><p><b>XOR :</b> <code>BP1 · /BP2 + /BP1 · BP2</code> : deux branches en parallèle, la première avec BP1 NO en série avec BP2 NC, la seconde avec BP1 NC en série avec BP2 NO. Elles commandent la bobine OU_EXCLUSIF.</p>"
                },
                {
                  "type": "num",
                  "q": "Pendant l'essai, on appuie sur BP1 seul (BP1 = 1, BP2 = 0). Combien des 7 voyants sont allumés ?",
                  "reponse": 4,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>On calcule chaque fonction pour (1, 0) :</p><table><thead><tr><th>OUI</th><th>NON</th><th>ET</th><th>OU</th><th>NAND</th><th>NOR</th><th>XOR</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><p>Voyants allumés : OUI, OU, NAND, XOR, soit <b>4</b>.</p>"
                },
                {
                  "type": "num",
                  "q": "Aucun bouton n'est appuyé. Combien de voyants sont allumés ?",
                  "reponse": 3,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Pour (0, 0) :</p><table><thead><tr><th>OUI</th><th>NON</th><th>ET</th><th>OU</th><th>NAND</th><th>NOR</th><th>XOR</th></tr></thead><tbody><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr></tbody></table><p>NON, NAND et NOR sont allumés : <b>3</b> voyants.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Deux contacts NC BP1 et BP2 en série commandent une bobine. Quelle fonction réalise-t-on ?",
                  "choix": [
                    "NOR",
                    "NAND",
                    "XOR",
                    "ET"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><code>/BP1 · /BP2 = /(BP1 + BP2)</code> : c'est le <b>NOR</b>. En parallèle, ce serait le NAND.</p>"
                }
              ]
            },
            {
              "titre": "Mise en œuvre sous Control Expert",
              "enonce": "<p>Tu dois créer, programmer et charger un projet sur l'automate M340 de la platine avec Control Expert (ex-Unity Pro).</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Dans quel ordre suit-on les trois grandes étapes d'une application Unity Pro ?",
                  "points": 1,
                  "attendu": "Configuration matérielle, puis vues fonctionnelles, puis variables automate.",
                  "corrige": "<p>1) <b>Configuration matérielle</b> (rack, CPU, modules) ; 2) <b>vues fonctionnelles</b> ; 3) <b>variables automate</b> (créées au fur et à mesure).</p>"
                },
                {
                  "type": "qcm",
                  "q": "Après le transfert, la ligne d'état affiche RUN, GENERE et EQUAL. On modifie un contact dans le ladder sans transférer. Que devient l'indication EQUAL ?",
                  "choix": [
                    "DIFFERENT",
                    "Elle reste EQUAL",
                    "STOP",
                    "GENERE"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>EQUAL signifie que le programme du PC est identique à celui de l'automate. Après une modification non transférée, l'état passe à <b>DIFFERENT</b>.</p>"
                },
                {
                  "type": "qcm",
                  "q": "L'analyse du projet donne « 0 erreur(s), 0 avertissement(s) ». Que peut-on en conclure ?",
                  "choix": [
                    "Le programme est bien écrit, mais il faut faire les essais pour vérifier qu'il fonctionne",
                    "Le programme fait forcément ce qu'on veut",
                    "L'automate est déjà en RUN",
                    "Le câblage est correct"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>« Analyser » vérifie la <b>syntaxe</b> et les déclarations, pas le fonctionnement. Ce sont les <b>essais</b> (tester les 4 combinaisons de BP1 / BP2) qui valident le programme.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Quelle norme définit les langages LD, FBD, ST et SFC ?",
                  "choix": [
                    "IEC 61131-3",
                    "ISO 9001",
                    "NF C 15-100",
                    "IEC 60617"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>La norme <b>IEC 61131-3</b> définit les langages des automates programmables (LD, FBD, ST, SFC, et IL devenu obsolète).</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "tp-operations-basiques",
          "titre": "TP : opérations basiques (auto-maintien, bit interne, scrutation)",
          "date": "2026-10-08",
          "source": "Poly « Exercice d'opération basique » (UIMM Pôle formation), pages 1 et 2",
          "resume": "Quatre petits programmes LD sur M340 : un BP qui allume une lampe et en éteint une autre, l'auto-alimentation marche / arrêt, le bit interne %M0, et un exercice de scrutation qui montre que l'automate lit le ladder de gauche à droite et de haut en bas.",
          "sections": [
            {
              "titre": "Adresses : format court et platine",
              "html": "<p>L'énoncé écrit certaines adresses en <b>format court</b> (<code>%I1.0</code>, <code>%Q2.2</code>) : <b>emplacement . voie</b>, le rack 0 étant sous-entendu. Sur ta platine M340, on écrit l'adresse complète <b>rack . emplacement . voie</b> :</p>\n<table><thead><tr><th>Énoncé</th><th>Sur la platine</th><th>Rôle</th></tr></thead><tbody>\n<tr><td><code>%I1.0</code></td><td><code>%I0.1.0</code></td><td>Bouton poussoir (ex. BP + lampes)</td></tr>\n<tr><td><code>%I1.1</code></td><td><code>%I0.1.1</code></td><td>BP marche NO</td></tr>\n<tr><td><code>%I1.2</code></td><td><code>%I0.1.2</code></td><td>BP arrêt NF</td></tr>\n<tr><td><code>%Q2.0</code></td><td><code>%Q0.2.0</code></td><td>Lampe à allumer</td></tr>\n<tr><td><code>%Q2.2</code></td><td><code>%Q0.2.2</code></td><td>Lampe auto-alimentée</td></tr></tbody></table>\n<p>Rappel : DDI 1602 en emplacement 1 → entrées <code>%I0.1.x</code> ; DRA 1605 en emplacement 2 → sorties <code>%Q0.2.x</code>.</p>"
            },
            {
              "titre": "Exercice 1 : BP + lampes",
              "html": "<p><b>Énoncé :</b> avec un bouton poussoir (<code>%I1.0</code>), allumer une lampe (<code>%Q2.0</code>) et en éteindre une autre. Réaliser le programme, le câblage et les essais.</p><details><summary>Voir le corrigé</summary><p>Un même bouton commande deux réseaux : un <b>contact NO</b> pour la lampe à allumer, un <b>contact NC</b> pour celle à éteindre. L'énoncé ne donne pas l'adresse de la 2<sup>e</sup> lampe : ici on a pris <code>%Q0.2.1</code>.</p><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Exercice BP + lampes\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.0</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.0</text><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"103\" x2=\"92\" y2=\"77\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.0</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"90\" x2=\"366\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"90\" x2=\"450\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 78 Q364 90 372 102 M388 78 Q396 90 388 102\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.1</text></svg></div><p><code>%Q0.2.0 = %I0.1.0</code> et <code>%Q0.2.1 = /%I0.1.0</code>. Au repos la 2<sup>e</sup> lampe est allumée ; quand on appuie, les deux lampes s'inversent.</p></details>"
            },
            {
              "titre": "Exercice 2 : auto-alimentation",
              "html": "<p><b>Énoncé :</b> avec un BP marche <b>NO</b> (<code>%I1.1</code>), allumer une lampe (<code>%Q2.2</code>) et la <b>maintenir allumée</b> quand on relâche le BP. Ajouter un BP arrêt <b>NF</b> (<code>%I1.2</code>) pour l'éteindre.</p><details><summary>Voir le corrigé</summary><p>On met en parallèle du BP marche un contact de la <b>sortie elle-même</b> : une fois la lampe allumée, ce contact « prend le relais » du bouton. C'est l'<b>auto-maintien</b> (ou auto-alimentation). Le BP arrêt est en série et coupe le tout.</p><div class=\"exemple\"><b>Exemple concret :</b> le tapis roulant d'une caisse de supermarché ou une perceuse à colonne. Tu donnes une impulsion sur le bouton vert « marche » et le moteur continue de tourner quand tu lâches. Il faut appuyer sur le bouton rouge « arrêt » pour l'arrêter. Sans auto-maintien, il faudrait garder le doigt sur le bouton.</div><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Auto-alimentation\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.1</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">%Q0.2.2</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"10\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"272\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"272\" y1=\"23\" x2=\"272\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"288\" y1=\"23\" x2=\"288\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"280\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"288\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.2</text></svg></div><p><code>%Q0.2.2 = (%I0.1.1 + %Q0.2.2) · %I0.1.2</code></p>\n<p>⚠️ <b>Piège classique :</b> le BP arrêt est câblé <b>NF</b>. Au repos il est fermé, donc l'entrée <code>%I0.1.2</code> vaut <b>1</b>. Dans le programme on utilise donc un contact <b>NO</b> (non barré) : appuyer sur arrêt fait passer l'entrée à 0 et coupe la lampe. Avec un contact barré, la lampe ne s'allumerait jamais.</p>\n<p>Intérêt du NF pour l'arrêt : si le fil est coupé, l'entrée passe à 0 et la machine s'arrête. C'est une <b>sécurité</b>.</p><p><b>Et après une coupure de courant ?</b> En logique câblée, l'auto-maintien d'un contacteur retombe : au retour du courant, la machine ne redémarre <b>pas</b> toute seule, il faut rappuyer sur marche. C'est voulu, pour la sécurité. Sur automate, le comportement après coupure dépend du type de redémarrage (à froid : variables remises à zéro ; à chaud : variables conservées). Vérifie-le avec le formateur avant de compter dessus.</p>\n<h4>Autre solution : bobines Set / Reset (mémorisation)</h4>\n<p>Au lieu du contact d'auto-maintien, on utilise deux bobines spéciales : <b>(S)</b> = <i>Set</i>, met la sortie à 1 et la laisse à 1 ; <b>(R)</b> = <i>Reset</i>, la remet à 0. La sortie garde son état tant que l'autre bobine n'agit pas.</p><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Set Reset\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.1</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.2</text><text x=\"380\" y=\"38.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">S</text><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"68\" y1=\"103\" x2=\"92\" y2=\"77\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"90\" x2=\"366\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"90\" x2=\"450\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 78 Q364 90 372 102 M388 78 Q396 90 388 102\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.2</text><text x=\"380\" y=\"94.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">R</text></svg></div>\n<p>Avec l'arrêt <b>NF</b> de l'énoncé, le contact du Reset est <b>barré</b> : appuyer sur arrêt fait passer l'entrée à 0, le contact barré se ferme et déclenche le Reset. Si ton BP arrêt est câblé <b>NO</b> sur la platine, on met un contact NO devant le (R).</p>\n<table><thead><tr><th></th><th>Contact d'auto-maintien</th><th>Set / Reset</th></tr></thead><tbody>\n<tr><td>Réseaux</td><td>1 seul réseau</td><td>2 réseaux (S puis R)</td></tr>\n<tr><td>Mémoire</td><td>le contact de la sortie la ré-alimente</td><td>la bobine S « verrouille » la sortie</td></tr>\n<tr><td>Marche et arrêt appuyés ensemble</td><td>arrêt prioritaire (il est en série)</td><td>c'est le <b>dernier réseau scruté</b> qui gagne : ici le Reset, donc arrêt prioritaire</td></tr>\n<tr><td>Passage en STOP</td><td>la sortie physique passe en repli (0) : la lampe s'éteint</td><td>pareil : la sortie physique passe en repli</td></tr></tbody></table>\n<p>⚠️ Avec S/R, l'<b>ordre des réseaux compte</b> : si on plaçait le réseau Reset <i>avant</i> le réseau Set, la marche deviendrait prioritaire. Pour un arrêt, on veut toujours l'arrêt prioritaire, donc le Reset en dernier.</p>\n<h4>3<sup>e</sup> solution : auto-maintien par un bit de maintien</h4>\n<p>Même principe que la 1<sup>re</sup> solution, mais le contact de maintien n'est pas la lampe elle-même : c'est un <b>bit de maintien KM</b> (comme le contact d'auto-maintien d'un contacteur). Le réseau pilote KM et la lampe en même temps (deux bobines à la suite sur le même réseau : elles prennent toutes les deux le même état).</p><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Auto-maintien par bit\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">Marche</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">KM</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"10\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"272\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"272\" y1=\"23\" x2=\"272\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"288\" y1=\"23\" x2=\"288\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"268\" y1=\"47\" x2=\"292\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"280\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">Arret</text><line x1=\"288\" y1=\"34\" x2=\"316\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"344\" y1=\"34\" x2=\"396\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M322 22 Q314 34 322 46 M338 22 Q346 34 338 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"330\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">KM</text><line x1=\"424\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M402 22 Q394 34 402 46 M418 22 Q426 34 418 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"410\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Lampe</text></svg></div>\n<p><code>KM = (Marche + KM) · /Arret</code> et <code>Lampe = KM</code>.</p>\n<ul><li>Arrêt <b>prioritaire</b> : le contact Arret est en série après le parallèle.</li>\n<li>Contact <b>barré</b> pour Arret : correct si le BP arrêt est câblé <b>NO</b> (entrée à 0 au repos). Avec un arrêt <b>NF</b> comme dans l'énoncé, on met un contact <b>NO</b> à la place.</li>\n<li>Pour KM, l'idéal est un <b>bit interne</b> (<code>%M</code>) plutôt qu'une sortie <code>%Q</code> : on ne gaspille pas une sortie, et aucun voyant ne s'allume pour rien.</li></ul></details><div style=\"border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:var(--r);background:var(--surface);padding:10px 14px;margin:12px 0\"><h4 style=\"margin-top:0\">Ta version en classe</h4>\n<p>Tu as réutilisé les variables du TP M340 (les noms n'ont pas d'importance, seule la fonction compte). Correspondance avec l'énoncé :</p><table><thead><tr><th>Ta variable</th><th>Adresse sur ta platine</th><th>Rôle dans l'exercice</th><th>Adresse de l'énoncé</th></tr></thead><tbody>\n<tr><td>BP1</td><td><code>%I0.1.0</code></td><td>BP marche</td><td><code>%I1.1</code> → <code>%I0.1.1</code></td></tr>\n<tr><td>BP2</td><td><code>%I0.1.1</code></td><td>BP arrêt</td><td><code>%I1.2</code> → <code>%I0.1.2</code></td></tr>\n<tr><td>OUI</td><td><code>%Q0.2.0</code></td><td>Lampe</td><td><code>%Q2.2</code> → <code>%Q0.2.2</code></td></tr>\n<tr><td>ET_NON</td><td><code>%Q0.2.4</code></td><td>Bit de maintien KM (solution 3)</td><td>aucune</td></tr></tbody></table>\n<p><b>Ta solution 2 (Set / Reset)</b> : juste. BP1 en NO devant (S), BP2 en NO devant (R) : ça marche parce que ton BP2 est câblé <b>NO</b>. Le Reset est en dernier, donc l'arrêt est prioritaire.</p><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Ta version Set Reset\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OUI</text><text x=\"380\" y=\"38.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">S</text><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"90\" x2=\"366\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"90\" x2=\"450\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 78 Q364 90 372 102 M388 78 Q396 90 388 102\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OUI</text><text x=\"380\" y=\"94.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">R</text></svg></div>\n<p><b>Ta solution 3 (bit de maintien)</b> : juste. BP2 est barré, ce qui est correct pour un BP câblé NO. Petite amélioration : utiliser <code>%M1</code> au lieu de la sortie ET_NON pour le maintien.</p><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Ta version auto-maintien\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">ET_NON</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"10\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"272\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"272\" y1=\"23\" x2=\"272\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"288\" y1=\"23\" x2=\"288\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"268\" y1=\"47\" x2=\"292\" y2=\"21\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"280\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP2</text><line x1=\"288\" y1=\"34\" x2=\"316\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"344\" y1=\"34\" x2=\"396\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M322 22 Q314 34 322 46 M338 22 Q346 34 338 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"330\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">ET_NON</text><line x1=\"424\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M402 22 Q394 34 402 46 M418 22 Q426 34 418 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"410\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OUI</text></svg></div>\n<p><i>Avec un vrai BP arrêt <b>NF</b> comme dans l'énoncé, il faudrait inverser le contact de l'arrêt dans les deux versions (NO ↔ barré).</i></p></div>"
            },
            {
              "titre": "Exercice 3 : bit interne",
              "html": "<p><b>Énoncé :</b> réaliser le programme ci-dessous, le câblage et les essais. Le bit interne est une mémoire « interne » à l'automate.</p><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Bit interne\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.3</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%M0</text><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">%M0</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"90\" x2=\"366\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"90\" x2=\"450\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 78 Q364 90 372 102 M388 78 Q396 90 388 102\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.3</text></svg></div><details><summary>Voir le corrigé</summary><p><code>%M0 = %I0.1.3</code> puis <code>%Q0.2.3 = %M0</code>, donc la lampe <code>%Q0.2.3</code> suit simplement l'entrée <code>%I0.1.3</code>.</p>\n<p><code>%M0</code> n'est relié à <b>aucune borne</b> : c'est une case mémoire de l'automate (un « relais virtuel »). On ne le câble pas, on peut seulement le voir en mode connecté ou dans une table d'animation. Les bits internes servent à mémoriser un état intermédiaire et à le réutiliser dans plusieurs réseaux.</p><div class=\"exemple\"><b>Exemple concret :</b> un bit interne, c'est comme un post-it dans la tête de l'automate. Par exemple <code>%M0</code> = « cycle en cours ». Tu l'écris à un endroit du programme et tu le relis à plusieurs autres, sans gaspiller de borne d'entrée ou de sortie.</div></details><div style=\"border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:var(--r);background:var(--surface);padding:10px 14px;margin:12px 0\"><h4 style=\"margin-top:0\">Ta version en classe</h4><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Ta version bit interne\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"114\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">BP1</text><line x1=\"88\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%M0</text><line x1=\"10\" y1=\"90\" x2=\"72\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"79\" x2=\"72\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"79\" x2=\"88\" y2=\"101\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"74\" text-anchor=\"middle\" fill=\"var(--ink)\">%M0</text><line x1=\"88\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"230\" y1=\"90\" x2=\"366\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"90\" x2=\"450\" y2=\"90\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 78 Q364 90 372 102 M388 78 Q396 90 388 102\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">OUI</text></svg></div><table><thead><tr><th>Ta variable</th><th>Adresse sur ta platine</th><th>Rôle dans l'exercice</th><th>Adresse de l'énoncé</th></tr></thead><tbody>\n<tr><td>BP1</td><td><code>%I0.1.0</code></td><td>Entrée qui commande le bit</td><td><code>%I0.1.3</code></td></tr>\n<tr><td><code>%M0</code></td><td>(interne)</td><td>Bit interne</td><td><code>%M0</code></td></tr>\n<tr><td>OUI</td><td><code>%Q0.2.0</code></td><td>Lampe</td><td><code>%Q0.2.3</code></td></tr></tbody></table>\n<p>C'est exactement le programme de l'énoncé, avec d'autres adresses : <code>%M0 = BP1</code> puis <code>OUI = %M0</code>. Juste 👍</p></div>"
            },
            {
              "titre": "Exercice 4 : scrutation",
              "html": "<p><b>Énoncé :</b> réaliser le programme, le câblage et les essais. Écrire les équations de <code>%Q0.2.4</code> et <code>%Q0.2.5</code>, vérifier le fonctionnement de chaque sortie, puis expliquer ce qu'on constate.</p><div class=\"tbl\"><svg viewBox=\"0 0 460 180\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Échelle LD de l'exercice scrutation\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"174\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"174\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"34\" x2=\"72\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"23\" x2=\"72\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"23\" x2=\"88\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.4</text><line x1=\"88\" y1=\"34\" x2=\"167\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"167\" y1=\"23\" x2=\"167\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"183\" y1=\"23\" x2=\"183\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"175\" y=\"18\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.5</text><line x1=\"183\" y1=\"34\" x2=\"366\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"34\" x2=\"450\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 22 Q364 34 372 46 M388 22 Q396 34 388 46\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"17\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.4</text><line x1=\"130\" y1=\"92\" x2=\"167\" y2=\"92\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"167\" y1=\"81\" x2=\"167\" y2=\"103\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"183\" y1=\"81\" x2=\"183\" y2=\"103\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"175\" y=\"76\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.6</text><line x1=\"183\" y1=\"92\" x2=\"215\" y2=\"92\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"215\" y1=\"92\" x2=\"215\" y2=\"34\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"150\" x2=\"72\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"139\" x2=\"72\" y2=\"161\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"139\" x2=\"88\" y2=\"161\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"134\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.7</text><line x1=\"88\" y1=\"150\" x2=\"366\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 138 Q364 150 372 162 M388 138 Q396 150 388 162\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"133\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.5</text><line x1=\"130\" y1=\"150\" x2=\"130\" y2=\"92\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><circle cx=\"130\" cy=\"150\" r=\"3.5\" fill=\"var(--ink)\"/><circle cx=\"215\" cy=\"34\" r=\"3.5\" fill=\"var(--ink)\"/></svg></div><p><i>Lis bien le schéma : la branche <code>%I0.1.6</code> ne part pas du rail de gauche du 1<sup>er</sup> réseau, elle part du point situé <b>après <code>%I0.1.7</code></b>, et elle rejoint le 1<sup>er</sup> réseau <b>après <code>%I0.1.5</code></b>.</i></p><details><summary>Voir le corrigé</summary><p><b>Équations :</b></p>\n<ul><li><code>%Q0.2.4 = %I0.1.4 · %I0.1.5 + %I0.1.7 · %I0.1.6</code></li><li><code>%Q0.2.5 = %I0.1.7</code></li></ul>\n<p><b>Ce qu'on constate :</b></p>\n<ul><li><code>%Q0.2.4</code> s'allume aussi avec <b><code>%I0.1.7</code> + <code>%I0.1.6</code></b>, alors que <code>%I0.1.7</code> est dessiné sur le réseau de <code>%Q0.2.5</code> : il « alimente » la branche <code>%I0.1.6</code>.</li>\n<li>À l'inverse, appuyer sur <code>%I0.1.4</code>, <code>%I0.1.5</code> et <code>%I0.1.6</code> <b>n'allume pas</b> <code>%Q0.2.5</code>. Dans un vrai circuit à relais câblés, le courant pourrait repartir à l'envers par <code>%I0.1.6</code> et allumer <code>%Q0.2.5</code> (un « courant de retour »).</li></ul>\n<p><b>Pourquoi :</b> l'automate n'est pas un circuit électrique, il <b>exécute un programme</b>. À chaque cycle de <b>scrutation</b>, il lit toutes les entrées, puis évalue les réseaux <b>de haut en bas</b> et chaque réseau <b>de gauche à droite</b>, puis écrit les sorties. Le « courant » du ladder ne circule que de gauche à droite : il ne remonte jamais vers la gauche. Le résultat dépend donc de la façon dont le logiciel lit le schéma, pas des fils qu'on imagine.</p><div class=\"exemple\"><b>Pour retenir la scrutation :</b> l'automate fait comme quelqu'un qui lit un livre. 1) Il prend une « photo » de toutes les entrées. 2) Il lit le programme ligne par ligne, de haut en bas, chaque ligne de gauche à droite. 3) Il écrit toutes les sorties d'un coup. Puis il recommence, des centaines de fois par seconde (un cycle dure quelques millisecondes).</div><div class=\"attention\"><b>Attention :</b> comme les entrées sont lues une seule fois au début du cycle, un appui plus court qu'un cycle peut ne pas être vu. Et une sortie écrite deux fois dans le programme prend la <b>dernière</b> valeur calculée.</div>\n<p><i>Vérifie ces deux constats pendant les essais : c'est exactement le but de la question.</i></p></details><div style=\"border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:var(--r);background:var(--surface);padding:10px 14px;margin:12px 0\"><h4 style=\"margin-top:0\">Ta version en classe</h4><table><thead><tr><th>Ta variable</th><th>Adresse sur ta platine</th><th>Rôle dans l'exercice</th><th>Adresse de l'énoncé</th></tr></thead><tbody>\n<tr><td>BP1</td><td><code>%I0.1.4</code></td><td>1er contact du réseau 1</td><td><code>%I0.1.4</code></td></tr>\n<tr><td>BP2</td><td><code>%I0.1.5</code></td><td>2e contact du réseau 1</td><td><code>%I0.1.5</code></td></tr>\n<tr><td>BP3</td><td><code>%I0.1.6</code></td><td>Branche du milieu</td><td><code>%I0.1.6</code></td></tr>\n<tr><td>BP4</td><td><code>%I0.1.7</code></td><td>Contact du réseau 2</td><td><code>%I0.1.7</code></td></tr></tbody></table>\n<p>Tes réponses : <code>%Q0.2.4 = (BP1 · BP2) + (BP4 · BP3)</code> et <code>%Q0.2.5 = BP4</code>. <b>Les deux sont justes</b> 👍 Tu as bien vu que BP3 est alimenté par BP4, et pas par le rail de gauche.</p>\n<p><b>Pour « Que constatez-vous ? » :</b> sur un vrai circuit câblé, appuyer sur BP1, BP2 et BP3 ferait remonter le courant par BP3 jusqu'à <code>%Q0.2.5</code> (rétro-alimentation), qui s'allumerait. Sur l'automate, <b><code>%Q0.2.5</code> reste éteint</b> : en ladder le « courant » ne va que de gauche à droite, il n'y a pas de courant de retour. Donc <code>%Q0.2.5</code> = BP4 seulement.</p></div>"
            },
            {
              "titre": "Charger le programme : STOP / RUN",
              "html": "<p>Après chaque modification, il faut <b>transférer</b> le programme du PC vers l'automate :</p>\n<ul class=\"steps\"><li><span><b>Génération › Regénérer tout le projet</b> : 0 erreur, état <b>GENERE</b>.</span></li>\n<li><span><b>Automate › Connexion</b> (liaison USB).</span></li>\n<li><span><b>Automate › Arrêter</b> : la boîte « Confirmez-vous la commande Arrêter ? » s'ouvre, valider par OK. L'automate passe en <b>STOP</b>.</span></li>\n<li><span><b>Automate › Transférer le projet vers l'automate</b>.</span></li>\n<li><span><b>Automate › Exécuter</b> : l'automate repasse en <b>RUN</b>. La ligne d'état doit afficher <b>RUN</b> et <b>EQUAL</b>.</span></li></ul>\n<p><b>Pourquoi passer en STOP ?</b> En RUN, l'automate exécute son programme en boucle (scrutation) et pilote les sorties. On ne remplace pas tout le programme pendant qu'il tourne : on l'arrête, on charge le nouveau, puis on relance. En <b>STOP</b>, le programme n'est plus exécuté et les sorties passent dans leur état de repli (en général 0) : <b>les voyants s'éteignent</b>, c'est normal.</p>\n<p><b>EQUAL</b> = le programme du PC est identique à celui de l'automate. Si tu modifies le ladder sans le transférer, l'état passe à <b>DIFFERENT</b>.</p><div class=\"attention\"><b>Attention :</b> passer en STOP coupe les sorties. Sur une vraie machine, on vérifie d'abord que l'arrêt ne met personne en danger (pièce en cours, charge suspendue…).</div>"
            }
          ],
          "pointsCles": [
            "Format court %I1.0 = emplacement 1, voie 0 ; sur la platine : %I0.1.0.",
            "Auto-maintien : contact de la sortie en parallèle du BP marche, BP arrêt en série.",
            "Un BP arrêt câblé NF donne une entrée à 1 au repos : on le programme avec un contact NO.",
            "%M = bit interne : mémoire de l'automate, jamais câblée.",
            "Scrutation : lecture des entrées → traitement des réseaux (haut en bas, gauche à droite) → écriture des sorties.",
            "En ladder, le « courant » ne circule jamais de droite à gauche."
          ],
          "definitions": [
            {
              "terme": "Auto-maintien (auto-alimentation)",
              "def": "Montage où un contact de la sortie, en parallèle du BP marche, garde la sortie active après relâchement du bouton."
            },
            {
              "terme": "Bit interne (%M)",
              "def": "Variable booléenne mémorisée dans l'automate, sans liaison avec une borne d'entrée ou de sortie."
            },
            {
              "terme": "Scrutation (cycle automate)",
              "def": "Boucle permanente : lecture des entrées, exécution du programme, mise à jour des sorties."
            },
            {
              "terme": "Bobines Set / Reset (S) (R)",
              "def": "(S) met la variable à 1 et la laisse à 1 ; (R) la remet à 0. Si les deux agissent, le dernier réseau scruté gagne."
            },
            {
              "terme": "État de repli",
              "def": "État pris par les sorties quand l'automate passe en STOP ou en défaut (en général 0, configurable)."
            }
          ],
          "flashcards": [
            {
              "q": "À quoi correspond %I1.2 sur la platine M340 ?",
              "r": "%I0.1.2 (rack 0, emplacement 1, voie 2)."
            },
            {
              "q": "Un BP allume %Q0.2.0 et éteint %Q0.2.1 : quels contacts ?",
              "r": "Contact NO du BP pour %Q0.2.0, contact NC du BP pour %Q0.2.1."
            },
            {
              "q": "Équation de l'auto-maintien marche / arrêt ?",
              "r": "Q = (Marche + Q) · Arrêt, avec l'entrée Arrêt à 1 au repos (BP NF)."
            },
            {
              "q": "BP arrêt câblé NF : contact NO ou NC dans le programme ?",
              "r": "NO : l'entrée vaut 1 au repos et passe à 0 quand on appuie."
            },
            {
              "q": "Pourquoi câbler l'arrêt en NF ?",
              "r": "Sécurité : un fil coupé met l'entrée à 0 et arrête la machine."
            },
            {
              "q": "Que font les bobines (S) et (R) ?",
              "r": "(S) Set met la sortie à 1 et la mémorise ; (R) Reset la remet à 0."
            },
            {
              "q": "Set et Reset actifs en même temps : qui gagne ?",
              "r": "Le dernier réseau scruté. Reset placé après Set → arrêt prioritaire."
            },
            {
              "q": "Équation d'un auto-maintien avec bit de maintien KM ?",
              "r": "KM = (Marche + KM) · /Arrêt (arrêt câblé NO) ; Lampe = KM."
            },
            {
              "q": "Pourquoi passer l'automate en STOP avant de charger ?",
              "r": "On ne remplace pas le programme pendant qu'il est exécuté : STOP, transfert, puis RUN."
            },
            {
              "q": "Que deviennent les sorties en STOP ?",
              "r": "Elles passent dans leur état de repli (en général 0) : les voyants s'éteignent."
            },
            {
              "q": "Qu'est-ce que %M0 ?",
              "r": "Un bit interne : une mémoire de l'automate, non câblée."
            },
            {
              "q": "Exercice scrutation : équation de %Q0.2.4 ?",
              "r": "%Q0.2.4 = %I0.1.4 · %I0.1.5 + %I0.1.7 · %I0.1.6."
            },
            {
              "q": "Exercice scrutation : équation de %Q0.2.5 ?",
              "r": "%Q0.2.5 = %I0.1.7."
            },
            {
              "q": "Pourquoi %I0.1.4 · %I0.1.5 · %I0.1.6 n'allume pas %Q0.2.5 ?",
              "r": "En ladder le « courant » ne va que de gauche à droite : pas de retour par %I0.1.6 comme dans un circuit câblé."
            },
            {
              "q": "Les 3 phases d'un cycle de scrutation ?",
              "r": "Lecture des entrées, traitement du programme (réseaux de haut en bas, de gauche à droite), écriture des sorties."
            },
            {
              "q": "Exemple concret d'auto-maintien ?",
              "r": "Un tapis roulant ou une perceuse : une impulsion sur « marche » et le moteur continue de tourner ; il faut appuyer sur « arrêt » pour l'arrêter."
            },
            {
              "q": "Une même sortie %Q est écrite dans deux réseaux différents : quelle valeur garde-t-elle ?",
              "r": "La dernière calculée dans le cycle (le réseau le plus bas), car les sorties sont écrites à la fin du cycle."
            },
            {
              "q": "Que signifie DIFFERENT dans la ligne d'état ?",
              "r": "Le programme du PC a été modifié et n'est plus identique à celui de l'automate : il faut le transférer."
            }
          ],
          "quiz": [
            {
              "q": "Auto-maintien : où place-t-on le contact de la sortie ?",
              "choix": [
                "En parallèle du BP marche",
                "En série avec le BP arrêt",
                "En parallèle du BP arrêt",
                "À la place de la bobine"
              ],
              "bonne": 0,
              "explication": "Le contact de la sortie « prend le relais » du BP marche quand on le relâche : il est en parallèle de celui-ci."
            },
            {
              "q": "Le BP arrêt est câblé NF. Quel contact utilise-t-on dans le programme ?",
              "choix": [
                "Un contact NO (non barré)",
                "Un contact NC (barré)",
                "Une bobine (R)",
                "Aucun, il est câblé en dur"
              ],
              "bonne": 0,
              "explication": "NF au repos = entrée à 1. Un contact NO laisse passer au repos et coupe quand on appuie (entrée à 0)."
            },
            {
              "q": "Pourquoi câble-t-on souvent le bouton d'arrêt en NF ?",
              "choix": [
                "Un fil coupé arrête la machine (sécurité)",
                "Il coûte moins cher",
                "Il consomme moins de courant",
                "L'automate ne lit pas les contacts NO"
              ],
              "bonne": 0,
              "explication": "Fil coupé = entrée à 0 = arrêt : la panne va dans le sens de la sécurité."
            },
            {
              "q": "Avec Set / Reset, marche et arrêt sont appuyés en même temps, réseau Reset placé après le Set. Que fait la sortie ?",
              "choix": [
                "Elle est à 0 (arrêt prioritaire)",
                "Elle est à 1 (marche prioritaire)",
                "Elle clignote",
                "Erreur à l'analyse"
              ],
              "bonne": 0,
              "explication": "Le dernier réseau scruté gagne : ici le Reset."
            },
            {
              "q": "Qu'est-ce que %M0 ?",
              "choix": [
                "Un bit interne (mémoire de l'automate, non câblé)",
                "La première entrée du module 0",
                "Une sortie de la CPU",
                "Un mot de 16 bits"
              ],
              "bonne": 0,
              "explication": "%M = bit interne. Les mots sont en %MW."
            },
            {
              "q": "Ordre d'un cycle de scrutation ?",
              "choix": [
                "Lecture des entrées, traitement du programme, écriture des sorties",
                "Écriture des sorties, lecture des entrées, traitement",
                "Traitement, lecture des entrées, écriture des sorties",
                "Lecture des entrées et écriture des sorties en même temps que le traitement"
              ],
              "bonne": 0,
              "explication": "L'automate lit toutes les entrées, exécute le programme de haut en bas et de gauche à droite, puis écrit les sorties."
            },
            {
              "q": "Exercice scrutation : on appuie sur %I0.1.4, %I0.1.5 et %I0.1.6. Que fait %Q0.2.5 ?",
              "choix": [
                "Il reste éteint",
                "Il s'allume",
                "Il clignote",
                "Il s'allume seulement si %Q0.2.4 est éteint"
              ],
              "bonne": 0,
              "explication": "En ladder le « courant » ne remonte jamais de droite à gauche : %Q0.2.5 = %I0.1.7 seulement."
            }
          ],
          "examen": [
            {
              "titre": "Marche / arrêt d'un convoyeur",
              "enonce": "<p>Le moteur d'un convoyeur (sortie <code>%Q0.2.3</code>) est commandé par un BP marche câblé <b>NO</b> sur <code>%I0.1.4</code> et un BP arrêt câblé <b>NF</b> sur <code>%I0.1.5</code>. Une impulsion sur marche doit lancer le moteur, qui continue de tourner quand on relâche ; un appui sur arrêt l'arrête. L'arrêt doit être prioritaire.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire l'équation de %Q0.2.3 avec un auto-maintien, puis décrire le réseau LD.",
                  "points": 3,
                  "attendu": "%Q0.2.3 = (%I0.1.4 + %Q0.2.3) · %I0.1.5 ; contact NO %I0.1.4 en parallèle avec un contact NO %Q0.2.3, le tout en série avec un contact NO %I0.1.5, vers la bobine %Q0.2.3.",
                  "corrige": "<p>Le contact de la sortie se place <b>en parallèle du BP marche</b> : il « prend le relais » quand on relâche. L'arrêt est <b>en série</b>, après le parallèle, donc prioritaire.</p><p><code>%Q0.2.3 = (%I0.1.4 + %Q0.2.3) · %I0.1.5</code></p><p>Réseau : contact NO <code>%I0.1.4</code> ∥ contact NO <code>%Q0.2.3</code>, en série avec un contact <b>NO</b> <code>%I0.1.5</code>, puis la bobine <code>%Q0.2.3</code>.</p><div class=\"attention\">Le BP arrêt est câblé NF : au repos l'entrée vaut 1. On le programme donc avec un contact <b>NO</b> (non barré). Avec un contact barré, le moteur ne démarrerait jamais.</div>"
                },
                {
                  "type": "qcm",
                  "q": "Pourquoi câble-t-on le BP arrêt en NF ?",
                  "choix": [
                    "Si le fil est coupé, l'entrée passe à 0 et la machine s'arrête (sécurité)",
                    "Pour économiser une entrée",
                    "Parce que l'automate ne lit pas les NO",
                    "Pour que la marche soit prioritaire"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Un fil coupé met l'entrée à 0, ce qui arrête la machine : la panne va dans le sens de la <b>sécurité</b>.</p>"
                },
                {
                  "type": "libre",
                  "q": "On remplace l'auto-maintien par des bobines Set / Reset. Décrire les deux réseaux et indiquer dans quel ordre les placer.",
                  "points": 2,
                  "attendu": "Réseau 1 : contact NO %I0.1.4 → bobine (S) %Q0.2.3. Réseau 2 : contact barré %I0.1.5 → bobine (R) %Q0.2.3. Reset placé après le Set pour un arrêt prioritaire.",
                  "corrige": "<p><b>Réseau 1 :</b> contact NO <code>%I0.1.4</code> → bobine <b>(S)</b> <code>%Q0.2.3</code>.</p><p><b>Réseau 2 :</b> contact <b>barré</b> <code>%I0.1.5</code> → bobine <b>(R)</b> <code>%Q0.2.3</code>. Appuyer sur l'arrêt NF fait passer l'entrée à 0, le contact barré se ferme et déclenche le Reset.</p><p>Si marche et arrêt sont actionnés ensemble, c'est le <b>dernier réseau scruté</b> qui gagne : on place donc le Reset <b>après</b> le Set pour que l'arrêt soit prioritaire.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Le moteur tourne et on passe l'automate en STOP pour transférer un programme. Que fait le moteur ?",
                  "choix": [
                    "Il s'arrête : les sorties passent dans leur état de repli (en général 0)",
                    "Il continue grâce à l'auto-maintien",
                    "Il garde son état jusqu'au prochain RUN",
                    "Il tourne en sens inverse"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>En STOP, le programme n'est plus exécuté et les sorties physiques passent dans leur <b>état de repli</b> (en général 0) : le moteur s'arrête. Sur une vraie machine, on vérifie que cet arrêt ne met personne en danger.</p>"
                }
              ]
            },
            {
              "titre": "Scrutation et bit interne",
              "enonce": "<p>Une section LD contient trois réseaux, exécutés dans cet ordre :</p><ol><li>contact NO <code>%I0.1.0</code> → bobine <code>%M2</code> ;</li><li>contact NO <code>%M2</code> en série avec un contact NC <code>%I0.1.1</code> → bobine <code>%Q0.2.0</code> ;</li><li>contact NO <code>%I0.1.1</code> → bobine <code>%Q0.2.0</code>.</li></ol><p>La sortie <code>%Q0.2.0</code> est donc écrite dans deux réseaux.</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Qu'est-ce que %M2 ?",
                  "choix": [
                    "Un bit interne, mémoire de l'automate non câblée",
                    "La 3e entrée du module en emplacement 2",
                    "Une sortie de la CPU",
                    "Un mot de 16 bits"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><code>%M</code> = <b>bit interne</b> : une case mémoire de l'automate, reliée à aucune borne. On ne peut le voir qu'en mode connecté ou dans une table d'animation.</p>"
                },
                {
                  "type": "qcm",
                  "q": "On appuie sur %I0.1.0 seul (%I0.1.0 = 1, %I0.1.1 = 0). Que vaut %Q0.2.0 en fin de cycle ?",
                  "choix": [
                    "0",
                    "1",
                    "Il clignote",
                    "Erreur de l'automate"
                  ],
                  "bonne": 0,
                  "points": 2,
                  "corrige": "<p>Réseau 1 : <code>%M2 = 1</code>. Réseau 2 : <code>%Q0.2.0 = %M2 · /%I0.1.1 = 1 · 1 = 1</code>. Réseau 3 : <code>%Q0.2.0 = %I0.1.1 = 0</code>.</p><p>Les sorties sont écrites à la fin du cycle avec la <b>dernière valeur calculée</b> : celle du réseau 3. Donc <code>%Q0.2.0 = 0</code>, le voyant reste éteint.</p><div class=\"attention\">Écrire la même bobine dans deux réseaux est une erreur classique : seul le dernier réseau compte.</div>"
                },
                {
                  "type": "libre",
                  "q": "Comment corriger le programme pour que %Q0.2.0 = %M2 · /%I0.1.1 + %I0.1.1 ?",
                  "points": 2,
                  "attendu": "Une seule bobine %Q0.2.0 : la branche %M2 · /%I0.1.1 en parallèle avec la branche %I0.1.1, dans le même réseau.",
                  "corrige": "<p>On supprime le réseau 3 et on écrit la bobine <b>une seule fois</b> : dans le réseau 2, on place en parallèle la branche (<code>%M2</code> NO en série avec <code>%I0.1.1</code> NC) et la branche <code>%I0.1.1</code> NO. Les deux chemins mènent à l'unique bobine <code>%Q0.2.0</code>.</p>"
                },
                {
                  "type": "num",
                  "q": "Le cycle de scrutation de l'automate dure 5 ms. Combien de cycles exécute-t-il par seconde ?",
                  "reponse": 200,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Nombre de cycles = 1 s / durée d'un cycle = 1 / 0,005 = <b>200</b> cycles par seconde. À chaque cycle : lecture des entrées, traitement des réseaux (haut en bas, gauche à droite), écriture des sorties.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Dans l'énoncé d'un TP, on lit l'adresse %I1.6. Quelle est l'adresse complète sur la platine M340 ?",
                  "choix": [
                    "%I0.1.6",
                    "%I1.0.6",
                    "%I0.6.1",
                    "%Q0.1.6"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Format court : <b>emplacement . voie</b>, le rack 0 étant sous-entendu. <code>%I1.6</code> devient <code>%I0.1.6</code> (rack 0, emplacement 1, voie 6).</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "blocs-fonctions-efb",
          "titre": "Les blocs fonctions élémentaires (EFB) : tempos et compteurs",
          "date": "2026-10-08",
          "source": "Poly « 5_les EFB_V2 » (11 pages)",
          "resume": "Les EFB sont les blocs tout faits de Control Expert. On voit EN / ENO, les trois temporisateurs TON (retard à l'enclenchement), TOF (retard au déclenchement) et TP (impulsion), puis les compteurs CTU / CTD / CTUD, avec les exercices du poly corrigés : chronogramme, clignotant et compteur / décompteur.",
          "sections": [
            {
              "titre": "Qu'est-ce qu'un EFB ?",
              "html": "<p>Un <b>EFB</b> (<i>Elementary Function Block</i>, bloc fonction élémentaire) est un bloc tout fait fourni par Control Expert : temporisateur, compteur, etc. Il a des <b>entrées</b> à gauche, des <b>sorties</b> à droite et une <b>mémoire interne</b> (c'est ce qui le distingue d'une simple fonction).</p><div class=\"exemple\"><b>Pourquoi une mémoire ?</b> Une fonction comme ET donne toujours le même résultat pour les mêmes entrées. Une temporisation, elle, doit se souvenir depuis combien de temps son entrée est à 1 : avec la même entrée, sa sortie change avec le temps. C'est pour ça qu'elle a besoin d'une mémoire, donc d'une instance.</div>\n<ul><li>Les blocs se trouvent dans la <b>bibliothèque</b> (Bibliothèque de types de données / Libset). Les anciens blocs PL7 sont rangés dans <b>Obsolete Lib</b>.</li>\n<li>Chaque bloc utilisé est une <b>instance</b> qui porte un nom (ex. <code>Tempo_travail</code>). Les instances se déclarent dans l'<b>éditeur de données</b>, onglet <b>Blocs fonction</b>.</li>\n<li>Une fois instanciés, les blocs apparaissent dans la <b>bibliothèque de l'application</b>.</li>\n<li>On lit une sortie d'une instance avec un point : <code>Tempo_travail.Q</code>, <code>Cpt_Decpt.CV</code>.</li></ul>"
            },
            {
              "titre": "Les entrées / sorties EN et ENO",
              "html": "<ul><li><b>EN</b> (<i>enable</i>) : entrée de validation, <b>facultative</b>. Non câblée, elle vaut 1.</li>\n<li>EN = 0 : le bloc <b>n'est pas exécuté</b> et ENO = 0.</li>\n<li>EN = 1 : le bloc est exécuté et ENO = 1. ENO passe à 0 si une <b>erreur</b> survient pendant l'exécution.</li>\n<li>On peut masquer EN / ENO dans les <b>propriétés</b> du bloc pour alléger le dessin.</li></ul>"
            },
            {
              "titre": "Les temporisateurs TON, TOF, TP",
              "html": "<table><thead><tr><th>Bloc</th><th>Nom</th><th>Comportement de Q</th></tr></thead><tbody>\n<tr><td><b>TON</b></td><td>Retard à l'enclenchement (tempo <b>travail</b>)</td><td>Q passe à 1 quand IN est resté à 1 pendant PT. Q retombe dès que IN retombe.</td></tr>\n<tr><td><b>TOF</b></td><td>Retard au déclenchement (tempo <b>repos</b>)</td><td>Q passe à 1 dès que IN passe à 1. Q retombe PT après la retombée de IN.</td></tr>\n<tr><td><b>TP</b></td><td>Impulsion (<b>monostable</b>)</td><td>Un front montant de IN donne une impulsion de durée PT, quoi que fasse IN ensuite. Pas redéclenchable pendant l'impulsion.</td></tr></tbody></table>\n<p><b>Entrées / sorties communes :</b></p>\n<ul><li><b>IN</b> : entrée de déclenchement.</li>\n<li><b>PT</b> (<i>preset time</i>) : durée, de type <b>TIME</b>. Écritures acceptées : <code>T#5s</code>, <code>t#14.7S</code>, <code>T#25h15m</code>, <code>TIME#5d10h23m45s3ms</code>.</li>\n<li><b>Q</b> : sortie booléenne (<code>instance.Q</code>).</li>\n<li><b>ET</b> (<i>elapsed time</i>) : temps écoulé, en ms.</li></ul>\n<p>Exemple avec IN à 1 de 1 à 3 s puis de 6 à 12 s, et PT = 4 s :</p><div class=\"tbl\"><svg viewBox=\"0 0 460 200\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Chronogrammes TON TOF TP avec PT = 4 s\"><line x1=\"135.0\" y1=\"6\" x2=\"135.0\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"135.0\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">0</text><line x1=\"151.94444444444446\" y1=\"6\" x2=\"151.94444444444446\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"151.94444444444446\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">1</text><line x1=\"185.83333333333334\" y1=\"6\" x2=\"185.83333333333334\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"185.83333333333334\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">3</text><line x1=\"219.72222222222223\" y1=\"6\" x2=\"219.72222222222223\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"219.72222222222223\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">5</text><line x1=\"236.66666666666669\" y1=\"6\" x2=\"236.66666666666669\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"236.66666666666669\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">6</text><line x1=\"304.44444444444446\" y1=\"6\" x2=\"304.44444444444446\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"304.44444444444446\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">10</text><line x1=\"338.33333333333337\" y1=\"6\" x2=\"338.33333333333337\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"338.33333333333337\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">12</text><line x1=\"406.1111111111111\" y1=\"6\" x2=\"406.1111111111111\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"406.1111111111111\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">16</text><line x1=\"440.0\" y1=\"6\" x2=\"440.0\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"440.0\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">18</text><text x=\"127\" y=\"34\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">IN</text><path d=\"M135 40 L151.94444444444446 40 L151.94444444444446 20 L185.83333333333334 20 L185.83333333333334 40 L236.66666666666669 40 L236.66666666666669 20 L338.33333333333337 20 L338.33333333333337 40 L440.0 40\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"74\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TON Q</text><path d=\"M135 80 L304.44444444444446 80 L304.44444444444446 60 L338.33333333333337 60 L338.33333333333337 80 L440.0 80\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"114\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TOF Q</text><path d=\"M135 120 L151.94444444444446 120 L151.94444444444446 100 L406.1111111111111 100 L406.1111111111111 120 L440.0 120\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"154\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TP Q</text><path d=\"M135 160 L151.94444444444446 160 L151.94444444444446 140 L219.72222222222223 140 L219.72222222222223 160 L236.66666666666669 160 L236.66666666666669 140 L304.44444444444446 140 L304.44444444444446 160 L440.0 160\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/></svg></div><p>TON : la première impulsion (2 s) est trop courte, rien ne sort. TOF : IN remonte à 6 s avant la fin des 4 s, donc Q ne retombe pas. TP : deux impulsions de 4 s, chacune sur un front montant.</p><div class=\"exemple\"><b>Exemples concrets :</b><br>• <b>TON</b> : un bouton qu'il faut maintenir 3 s pour lancer un cycle (un appui trop court ne fait rien), ou un convoyeur qui ne démarre que si le capteur voit le carton depuis 2 s.<br>• <b>TOF</b> : le ventilateur d'une salle de bain qui continue de tourner quelques minutes après qu'on a éteint la lumière. Ou le ventilateur de refroidissement d'un moteur qui tourne encore après l'arrêt.<br>• <b>TP</b> : un distributeur de savon : que tu appuies brièvement ou longtemps, il donne toujours la même dose (même durée).</div><div class=\"attention\"><b>Attention :</b> un <b>front montant</b>, c'est le passage de 0 à 1 (l'instant où on appuie). Le TP et les compteurs réagissent au front, pas au fait que l'entrée reste à 1.</div>"
            },
            {
              "titre": "Exercice : TON, TOF et TP sur la même entrée",
              "html": "<p><b>Énoncé :</b> l'entrée <code>%I0.2.1</code> attaque trois blocs de PT = 5 s :</p>\n<ul><li><code>Tempo_travail</code> (TON) → voyant <code>%Q0.3.0</code></li>\n<li><code>Tempo_repos</code> (TOF) → voyant <code>%Q0.3.1</code></li>\n<li><code>Tempo_monostable</code> (TP) → voyant <code>%Q0.3.2</code></li></ul>\n<p>Puis compléter le chronogramme : <code>%I0.2.1</code> à 1 de 0 à 6 s, de 10 à 11 s, de 20 à 21 s et de 22 à 23 s.</p>\n<p><small>Petite incohérence du poly : il parle d'un voyant « sur Q2.2 » pour le TP alors que le tableau donne <code>%Q0.3.2</code>. C'est bien <code>%Q0.3.2</code>. La mention « TSX57V4 » est un reste de la version Premium du poly, on est sur M340.</small></p><details><summary>Voir le corrigé</summary><p>Échelle, avec les adresses de ta platine (<code>%I0.1.1</code>, <code>%Q0.2.0</code> à <code>%Q0.2.2</code>) :</p><div class=\"tbl\"><svg viewBox=\"0 0 460 330\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"TON, TOF et TP\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"322\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"322\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><rect x=\"190\" y=\"30\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"24\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Tempo_travail</text><text x=\"235.0\" y=\"45\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TON</text><text x=\"195\" y=\"68\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"195\" y=\"92\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"275\" y=\"68\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"275\" y=\"92\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"10\" y1=\"64\" x2=\"82\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"53\" x2=\"82\" y2=\"75\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"53\" x2=\"98\" y2=\"75\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"48\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.1</text><line x1=\"98\" y1=\"64\" x2=\"190\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"92\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><line x1=\"280\" y1=\"64\" x2=\"366\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"64\" x2=\"450\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 52 Q364 64 372 76 M388 52 Q396 64 388 76\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"47\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.0</text><rect x=\"190\" y=\"130\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"124\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Tempo_repos</text><text x=\"235.0\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TOF</text><text x=\"195\" y=\"168\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"195\" y=\"192\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"275\" y=\"168\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"275\" y=\"192\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"130\" y1=\"164\" x2=\"190\" y2=\"164\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"192\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><line x1=\"280\" y1=\"164\" x2=\"366\" y2=\"164\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"164\" x2=\"450\" y2=\"164\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 152 Q364 164 372 176 M388 152 Q396 164 388 176\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"147\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.1</text><rect x=\"190\" y=\"230\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Tempo_monostable</text><text x=\"235.0\" y=\"245\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TP</text><text x=\"195\" y=\"268\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"195\" y=\"292\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"275\" y=\"268\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"275\" y=\"292\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"130\" y1=\"264\" x2=\"190\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"292\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><line x1=\"280\" y1=\"264\" x2=\"366\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"264\" x2=\"450\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 252 Q364 264 372 276 M388 252 Q396 264 388 276\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"247\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.2</text><line x1=\"130\" y1=\"64\" x2=\"130\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><circle cx=\"130\" cy=\"64\" r=\"3.5\" fill=\"var(--ink)\"/><circle cx=\"130\" cy=\"164\" r=\"3.5\" fill=\"var(--ink)\"/></svg></div><p>Chronogramme complété :</p><div class=\"tbl\"><svg viewBox=\"0 0 460 200\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Corrigé du chronogramme PT = 5 s\"><line x1=\"135.0\" y1=\"6\" x2=\"135.0\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"135.0\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">0</text><line x1=\"185.83333333333334\" y1=\"6\" x2=\"185.83333333333334\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"185.83333333333334\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">5</text><line x1=\"236.66666666666669\" y1=\"6\" x2=\"236.66666666666669\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"236.66666666666669\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">10</text><line x1=\"297.66666666666663\" y1=\"6\" x2=\"297.66666666666663\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"297.66666666666663\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">16</text><line x1=\"338.33333333333337\" y1=\"6\" x2=\"338.33333333333337\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"338.33333333333337\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">20</text><line x1=\"389.16666666666663\" y1=\"6\" x2=\"389.16666666666663\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"389.16666666666663\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">25</text><line x1=\"419.6666666666667\" y1=\"6\" x2=\"419.6666666666667\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"419.6666666666667\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">28</text><text x=\"127\" y=\"34\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">%I0.2.1</text><path d=\"M135 40 L135.0 40 L135.0 20 L196.0 20 L196.0 40 L236.66666666666669 40 L236.66666666666669 20 L246.83333333333331 20 L246.83333333333331 40 L338.33333333333337 40 L338.33333333333337 20 L348.5 20 L348.5 40 L358.66666666666663 40 L358.66666666666663 20 L368.83333333333337 20 L368.83333333333337 40 L440.0 40\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"74\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">Tempo_travail</text><path d=\"M135 80 L185.83333333333334 80 L185.83333333333334 60 L196.0 60 L196.0 80 L440.0 80\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"114\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">Tempo_repos</text><path d=\"M135 120 L135.0 120 L135.0 100 L297.66666666666663 100 L297.66666666666663 120 L338.33333333333337 120 L338.33333333333337 100 L419.6666666666667 100 L419.6666666666667 120 L440.0 120\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"154\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">Tempo_monostable</text><path d=\"M135 160 L135.0 160 L135.0 140 L185.83333333333334 140 L185.83333333333334 160 L236.66666666666669 160 L236.66666666666669 140 L287.5 140 L287.5 160 L338.33333333333337 160 L338.33333333333337 140 L389.16666666666663 140 L389.16666666666663 160 L440.0 160\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/></svg></div><ul><li><b>TON</b> : seul le premier appui dure plus de 5 s, donc Q = 1 de <b>5 à 6 s</b>.</li>\n<li><b>TOF</b> : IN retombe à 6 s, Q devrait tomber à 11 s, mais IN remonte à 10 s. Il retombe à 11 s, donc Q tombe à <b>16 s</b>. Même chose ensuite : Q à 1 de 20 s à <b>28 s</b> (23 + 5).</li>\n<li><b>TP</b> : impulsions de 0 à 5, 10 à 15 et 20 à 25 s. L'appui à 22 s est <b>ignoré</b> car l'impulsion est en cours.</li></ul></details>"
            },
            {
              "titre": "Exercice : clignotant",
              "html": "<p><b>Énoncé :</b> tant que <code>%I0.2.2</code> est présent, le voyant <code>%Q0.3.4</code> clignote : <b>5 s allumé, 10 s éteint</b>. Puis : modifier une valeur de présélection en RUN, est-elle prise en compte ?</p><details><summary>Voir le corrigé</summary><p>Deux TP qui se relancent l'un l'autre. Chacun ne démarre que si l'autre est fini (contact NC de l'autre).</p><div class=\"tbl\"><svg viewBox=\"0 0 460 300\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Clignotant avec deux TP\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"292\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"292\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><rect x=\"250\" y=\"24\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"295.0\" y=\"18\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">T_allume</text><text x=\"295.0\" y=\"39\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TP</text><text x=\"255\" y=\"62\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"255\" y=\"86\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"335\" y=\"62\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"335\" y=\"86\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"10\" y1=\"58\" x2=\"72\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"47\" x2=\"72\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"47\" x2=\"88\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"42\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"88\" y1=\"58\" x2=\"147\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"147\" y1=\"47\" x2=\"147\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"163\" y1=\"47\" x2=\"163\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"143\" y1=\"71\" x2=\"167\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"155\" y=\"42\" text-anchor=\"middle\" fill=\"var(--ink)\">T_eteint.Q</text><line x1=\"163\" y1=\"58\" x2=\"250\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"246\" y=\"86\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><rect x=\"250\" y=\"136\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"295.0\" y=\"130\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">T_eteint</text><text x=\"295.0\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TP</text><text x=\"255\" y=\"174\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"255\" y=\"198\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"335\" y=\"174\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"335\" y=\"198\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"10\" y1=\"170\" x2=\"72\" y2=\"170\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"159\" x2=\"72\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"159\" x2=\"88\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"154\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"88\" y1=\"170\" x2=\"147\" y2=\"170\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"147\" y1=\"159\" x2=\"147\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"163\" y1=\"159\" x2=\"163\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"143\" y1=\"183\" x2=\"167\" y2=\"157\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"155\" y=\"154\" text-anchor=\"middle\" fill=\"var(--ink)\">T_allume.Q</text><line x1=\"163\" y1=\"170\" x2=\"250\" y2=\"170\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"246\" y=\"198\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#10s</text><line x1=\"10\" y1=\"266\" x2=\"72\" y2=\"266\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"255\" x2=\"72\" y2=\"277\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"255\" x2=\"88\" y2=\"277\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"250\" text-anchor=\"middle\" fill=\"var(--ink)\">T_allume.Q</text><line x1=\"88\" y1=\"266\" x2=\"366\" y2=\"266\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"266\" x2=\"450\" y2=\"266\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 254 Q364 266 372 278 M388 254 Q396 266 388 278\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"249\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.4</text></svg></div><ul><li><code>T_allume</code> (5 s) démarre : le voyant s'allume.</li>\n<li>À la fin de T_allume, son contact NC se referme dans le réseau 2 : <code>T_eteint</code> (10 s) démarre, le voyant est éteint.</li>\n<li>À la fin de T_eteint, front montant sur l'entrée de T_allume, et ainsi de suite.</li></ul><div class=\"tbl\"><svg viewBox=\"0 0 460 120\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Clignotant 5 s allumé 10 s éteint\"><line x1=\"135.0\" y1=\"6\" x2=\"135.0\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"135.0\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">0</text><line x1=\"173.125\" y1=\"6\" x2=\"173.125\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"173.125\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">5</text><line x1=\"249.375\" y1=\"6\" x2=\"249.375\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"249.375\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">15</text><line x1=\"287.5\" y1=\"6\" x2=\"287.5\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"287.5\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">20</text><line x1=\"363.75\" y1=\"6\" x2=\"363.75\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"363.75\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">30</text><line x1=\"401.875\" y1=\"6\" x2=\"401.875\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"401.875\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">35</text><line x1=\"440.0\" y1=\"6\" x2=\"440.0\" y2=\"94\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"440.0\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">40</text><text x=\"127\" y=\"34\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">%I0.2.2</text><path d=\"M135 40 L135.0 40 L135.0 20 L440.0 20 L440.0 40 L440.0 40\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"74\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">%Q0.3.4</text><path d=\"M135 80 L135.0 80 L135.0 60 L173.125 60 L173.125 80 L249.375 80 L249.375 60 L287.5 60 L287.5 80 L363.75 80 L363.75 60 L401.875 60 L401.875 80 L440.0 80\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/></svg></div><p><b>Présélection modifiée en RUN :</b> oui, elle est prise en compte, mais au <b>prochain déclenchement</b> du bloc. Une temporisation déjà lancée finit avec l'ancienne valeur. Attention : une modification faite en ligne sur une valeur initiale n'est pas forcément sauvée dans le projet, il faut la reporter.</p>\n<p><small>Le poly ne donne que la question. La réponse ci-dessus est le comportement habituel d'un M340 : vérifie-le en TP et dis-moi si tu observes autre chose.</small></p></details>"
            },
            {
              "titre": "Les compteurs CTU, CTD, CTUD",
              "html": "<p>Trois blocs : <b>CTU</b> (comptage), <b>CTD</b> (décomptage), <b>CTUD</b> (les deux). Ils existent en plusieurs types : <code>CTUD_INT</code>, <code>_DINT</code>, <code>_UINT</code>, <code>_UDINT</code>.</p>\n<table><thead><tr><th>Broche</th><th>Rôle</th></tr></thead><tbody>\n<tr><td><b>CU</b></td><td>+1 sur chaque <b>front montant</b></td></tr>\n<tr><td><b>CD</b></td><td>−1 sur chaque front montant</td></tr>\n<tr><td><b>R</b></td><td>Reset : CV = 0</td></tr>\n<tr><td><b>LD</b></td><td>Load : CV = PV</td></tr>\n<tr><td><b>PV</b></td><td>Valeur de présélection</td></tr>\n<tr><td><b>CV</b></td><td>Valeur courante</td></tr>\n<tr><td><b>QU</b></td><td>1 si CV ≥ PV</td></tr>\n<tr><td><b>QD</b></td><td>1 si CV ≤ 0</td></tr></tbody></table>\n<p>Pas de débordement : le compteur s'arrête aux limites du type.</p><p><i>Exemple : un CTUD_INT ne dépasse jamais 32 767 (plus grande valeur d'un INT) ; il reste bloqué à cette valeur au lieu de repartir dans les négatifs.</i></p><div class=\"exemple\"><b>Exemple concret :</b> une encartonneuse met 6 bouteilles par carton. Un capteur TOR envoie un front sur <b>CU</b> à chaque bouteille qui passe ; avec <b>PV = 6</b>, la sortie <b>QU</b> passe à 1 à la 6<sup>e</sup> bouteille : on ferme le carton, puis on remet le compteur à 0 avec <b>R</b>.</div>"
            },
            {
              "titre": "Exercice : compteur / décompteur",
              "html": "<p><b>Énoncé :</b> instance <code>Cpt_Decpt</code> de type CTUD_INT. CU = <code>%I0.2.4</code>, CD = <code>%I0.2.5</code>, R = <code>%I0.2.2</code>, LD = <code>%I0.2.3</code> (R et LD sur un commutateur 3 positions), PV = 5, QU → voyant <code>%Q0.3.3</code>. Compléter le tableau CV / QU / QD.</p><details><summary>Voir le corrigé</summary><div class=\"tbl\"><svg viewBox=\"0 0 460 280\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Compteur CTUD\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"272\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"272\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><rect x=\"190\" y=\"26\" width=\"90\" height=\"228\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"20\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Cpt_Decpt</text><text x=\"235.0\" y=\"41\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">CTUD_INT</text><text x=\"195\" y=\"64\" font-size=\"11\" fill=\"var(--ink)\">CU</text><text x=\"195\" y=\"108\" font-size=\"11\" fill=\"var(--ink)\">CD</text><text x=\"195\" y=\"152\" font-size=\"11\" fill=\"var(--ink)\">R</text><text x=\"195\" y=\"196\" font-size=\"11\" fill=\"var(--ink)\">LD</text><text x=\"195\" y=\"240\" font-size=\"11\" fill=\"var(--ink)\">PV</text><text x=\"275\" y=\"64\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">QU</text><text x=\"275\" y=\"108\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">QD</text><text x=\"275\" y=\"152\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">CV</text><line x1=\"10\" y1=\"60\" x2=\"82\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"49\" x2=\"82\" y2=\"71\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"49\" x2=\"98\" y2=\"71\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"44\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.4</text><line x1=\"98\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"104\" x2=\"82\" y2=\"104\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"93\" x2=\"82\" y2=\"115\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"93\" x2=\"98\" y2=\"115\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"88\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.5</text><line x1=\"98\" y1=\"104\" x2=\"190\" y2=\"104\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"148\" x2=\"82\" y2=\"148\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"137\" x2=\"82\" y2=\"159\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"137\" x2=\"98\" y2=\"159\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"132\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"98\" y1=\"148\" x2=\"190\" y2=\"148\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"192\" x2=\"82\" y2=\"192\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"181\" x2=\"82\" y2=\"203\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"181\" x2=\"98\" y2=\"203\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"176\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.3</text><line x1=\"98\" y1=\"192\" x2=\"190\" y2=\"192\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"240\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">5</text><line x1=\"280\" y1=\"60\" x2=\"366\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"60\" x2=\"450\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 48 Q364 60 372 72 M388 48 Q396 60 388 72\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"43\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.3</text></svg></div><table><thead><tr><th>Action</th><th>CV</th><th>QU</th><th>QD</th></tr></thead><tbody>\n<tr><td>Départ, rien d'actionné</td><td>0</td><td>0</td><td><b>1</b></td></tr>\n<tr><td>LD</td><td>5</td><td>1</td><td>0</td></tr>\n<tr><td>R</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>CU</td><td>1</td><td>0</td><td>0</td></tr>\n<tr><td>CD</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>CD (nouvel appui)</td><td>−1</td><td>0</td><td>1</td></tr>\n<tr><td>CU</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>5 appuis sur CU</td><td>5</td><td>1</td><td>0</td></tr></tbody></table>\n<p><small>Sur la première ligne, le poly a pré-rempli QD = 0. Avec CV = 0, la règle QD = (CV ≤ 0) donne <b>QD = 1</b>. À vérifier en ligne pendant le TP.</small></p>\n<p>Le voyant de QU (<code>%Q0.3.3</code> dans le poly, <code>%Q0.2.3</code> sur ta platine) s'allume quand CV atteint 5.</p></details>"
            },
            {
              "titre": "Correction complète du TP",
              "html": "<p>Correction pas à pas de tout le TP, comme on la ferait au tableau. Les adresses sont celles de <b>ta platine</b> (entrées <code>%I0.1.x</code>, sorties <code>%Q0.2.x</code>). Les adresses du poly sont dans la dernière section.</p>\n<h4>Étape 0 : déclarer les instances dans Control Expert</h4>\n<ul class=\"steps\"><li><span>Navigateur de projet › <b>Variables et instances FB</b> › <b>Instances FB élémentaires</b> (double-clic : l'éditeur de données s'ouvre sur l'onglet <b>Blocs fonction</b>).</span></li>\n<li><span>Créer <code>Tempo_travail</code> de type <b>TON</b>, <code>Tempo_repos</code> de type <b>TOF</b>, <code>Tempo_monostable</code> de type <b>TP</b>.</span></li>\n<li><span>Pour le clignotant : <code>T_allume</code> et <code>T_eteint</code>, tous deux de type <b>TP</b>.</span></li>\n<li><span>Pour le compteur : <code>Cpt_Decpt</code> de type <b>CTUD_INT</b>.</span></li>\n<li><span>Dans la section LD : clic droit › <b>Assistant de saisie FFB</b>, choisir l'instance, puis relier les broches.</span></li>\n<li><span>Taper les présélections directement sur la broche : <code>T#5s</code> sur PT, <code>5</code> sur PV.</span></li>\n<li><span>Analyser, générer, transférer en STOP, puis RUN.</span></li></ul>\n<p>Pourquoi des instances ? Un tempo doit <b>se souvenir</b> depuis quand il compte. Chaque instance a sa propre mémoire (Q, ET…). Deux blocs TON différents = deux instances différentes.</p>\n\n<h4>Partie 1 : TON, TOF et TP sur la même entrée</h4>\n<p><b>Schéma :</b> le contact <code>%I0.1.1</code> attaque l'entrée IN des trois blocs. Chaque sortie Q pilote un voyant.</p>\n<div class=\"tbl\"><svg viewBox=\"0 0 460 330\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"TON, TOF et TP\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"322\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"322\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><rect x=\"190\" y=\"30\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"24\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Tempo_travail</text><text x=\"235.0\" y=\"45\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TON</text><text x=\"195\" y=\"68\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"195\" y=\"92\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"275\" y=\"68\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"275\" y=\"92\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"10\" y1=\"64\" x2=\"82\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"53\" x2=\"82\" y2=\"75\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"53\" x2=\"98\" y2=\"75\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"48\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.1</text><line x1=\"98\" y1=\"64\" x2=\"190\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"92\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><line x1=\"280\" y1=\"64\" x2=\"366\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"64\" x2=\"450\" y2=\"64\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 52 Q364 64 372 76 M388 52 Q396 64 388 76\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"47\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.0</text><rect x=\"190\" y=\"130\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"124\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Tempo_repos</text><text x=\"235.0\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TOF</text><text x=\"195\" y=\"168\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"195\" y=\"192\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"275\" y=\"168\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"275\" y=\"192\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"130\" y1=\"164\" x2=\"190\" y2=\"164\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"192\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><line x1=\"280\" y1=\"164\" x2=\"366\" y2=\"164\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"164\" x2=\"450\" y2=\"164\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 152 Q364 164 372 176 M388 152 Q396 164 388 176\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"147\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.1</text><rect x=\"190\" y=\"230\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Tempo_monostable</text><text x=\"235.0\" y=\"245\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TP</text><text x=\"195\" y=\"268\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"195\" y=\"292\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"275\" y=\"268\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"275\" y=\"292\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"130\" y1=\"264\" x2=\"190\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"292\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><line x1=\"280\" y1=\"264\" x2=\"366\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"264\" x2=\"450\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 252 Q364 264 372 276 M388 252 Q396 264 388 276\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"247\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.2</text><line x1=\"130\" y1=\"64\" x2=\"130\" y2=\"264\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><circle cx=\"130\" cy=\"64\" r=\"3.5\" fill=\"var(--ink)\"/><circle cx=\"130\" cy=\"164\" r=\"3.5\" fill=\"var(--ink)\"/></svg></div>\n<p><b>Équations</b> (avec PT = 5 s) :</p>\n<ul><li><code>%Q0.2.0 = Tempo_travail.Q</code> : vaut 1 si <code>%I0.1.1</code> est à 1 <b>sans interruption depuis au moins 5 s</b>.</li>\n<li><code>%Q0.2.1 = Tempo_repos.Q</code> : vaut 1 si <code>%I0.1.1</code> a été à 1 <b>à un moment dans les 5 dernières secondes</b>.</li>\n<li><code>%Q0.2.2 = Tempo_monostable.Q</code> : vaut 1 pendant les 5 s qui suivent un front montant de <code>%I0.1.1</code>, si aucune impulsion n'était déjà en cours.</li></ul>\n<p><b>Chronogramme complet</b>, avec le temps écoulé ET de chaque bloc (en gris, de 0 à 5 s) :</p>\n<div class=\"tbl\"><svg viewBox=\"0 0 460 320\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Chronogramme complet avec Q et ET\"><line x1=\"135.0\" y1=\"6\" x2=\"135.0\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"135.0\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">0</text><line x1=\"185.83333333333334\" y1=\"6\" x2=\"185.83333333333334\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"185.83333333333334\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">5</text><line x1=\"236.66666666666669\" y1=\"6\" x2=\"236.66666666666669\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"236.66666666666669\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">10</text><line x1=\"297.66666666666663\" y1=\"6\" x2=\"297.66666666666663\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"297.66666666666663\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">16</text><line x1=\"338.33333333333337\" y1=\"6\" x2=\"338.33333333333337\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"338.33333333333337\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">20</text><line x1=\"389.16666666666663\" y1=\"6\" x2=\"389.16666666666663\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"389.16666666666663\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">25</text><line x1=\"419.6666666666667\" y1=\"6\" x2=\"419.6666666666667\" y2=\"294\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"419.6666666666667\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">28</text><text x=\"127\" y=\"34\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">%I0.1.1</text><path d=\"M135 40 L135.0 40 L135.0 20 L196.0 20 L196.0 40 L236.66666666666669 40 L236.66666666666669 20 L246.83333333333331 20 L246.83333333333331 40 L338.33333333333337 40 L338.33333333333337 20 L348.5 20 L348.5 40 L358.66666666666663 40 L358.66666666666663 20 L368.83333333333337 20 L368.83333333333337 40 L440.0 40\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"74\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TON Q</text><path d=\"M135 80 L185.83333333333334 80 L185.83333333333334 60 L196.0 60 L196.0 80 L440.0 80\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"114\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TON ET</text><path d=\"M135.0 120 L185.83333333333334 100 L196.0 100 L196.0 120 L236.66666666666669 120 L246.83333333333331 116.0 L246.83333333333331 120 L338.33333333333337 120 L348.5 116.0 L348.5 120 L358.66666666666663 120 L368.83333333333337 116.0 L368.83333333333337 120 L440.0 120\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"154\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TOF Q</text><path d=\"M135 160 L135.0 160 L135.0 140 L297.66666666666663 140 L297.66666666666663 160 L338.33333333333337 160 L338.33333333333337 140 L419.6666666666667 140 L419.6666666666667 160 L440.0 160\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"194\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TOF ET</text><path d=\"M135.0 200 L196.0 200 L236.66666666666669 184.0 L236.66666666666669 200 L246.83333333333331 200 L297.66666666666663 180 L338.33333333333337 180 L338.33333333333337 200 L348.5 200 L358.66666666666663 196.0 L358.66666666666663 200 L368.83333333333337 200 L419.6666666666667 180 L440.0 180\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"234\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TP Q</text><path d=\"M135 240 L135.0 240 L135.0 220 L185.83333333333334 220 L185.83333333333334 240 L236.66666666666669 240 L236.66666666666669 220 L287.5 220 L287.5 240 L338.33333333333337 240 L338.33333333333337 220 L389.16666666666663 220 L389.16666666666663 240 L440.0 240\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"274\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">TP ET</text><path d=\"M135.0 280 L185.83333333333334 260 L196.0 260 L196.0 280 L236.66666666666669 280 L287.5 260 L287.5 280 L338.33333333333337 280 L389.16666666666663 260 L389.16666666666663 280 L440.0 280\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2.2\"/></svg></div>\n<p><b>Lecture instant par instant :</b></p>\n<table><thead><tr><th>Instant</th><th>Que se passe-t-il ?</th><th>TON</th><th>TOF</th><th>TP</th></tr></thead><tbody>\n<tr><td>0 s</td><td>Appui</td><td>ET démarre, Q = 0</td><td>Q = 1 tout de suite</td><td>Front montant : Q = 1, ET démarre</td></tr>\n<tr><td>5 s</td><td>Toujours appuyé</td><td>ET atteint 5 s : <b>Q = 1</b></td><td>Q = 1</td><td>Fin de l'impulsion : <b>Q = 0</b></td></tr>\n<tr><td>6 s</td><td>Relâché</td><td><b>Q = 0</b>, ET revient à 0</td><td>ET démarre, Q reste 1</td><td>Q = 0</td></tr>\n<tr><td>10 s</td><td>Appui (1 s)</td><td>ET démarre</td><td>ET remis à 0 (il n'était qu'à 4 s)</td><td>Front : Q = 1 jusqu'à 15 s</td></tr>\n<tr><td>11 s</td><td>Relâché</td><td>ET n'a atteint que 1 s : Q reste 0</td><td>ET redémarre de 0</td><td>Q reste 1, ça ne dépend plus de IN</td></tr>\n<tr><td>16 s</td><td>Rien</td><td>0</td><td>ET atteint 5 s : <b>Q = 0</b></td><td>0 (fini à 15 s)</td></tr>\n<tr><td>20 s</td><td>Appui (1 s)</td><td>Trop court</td><td>Q = 1</td><td>Front : Q = 1 jusqu'à 25 s</td></tr>\n<tr><td>22 s</td><td>Nouvel appui (1 s)</td><td>Trop court</td><td>ET remis à 0, Q reste 1</td><td><b>Ignoré</b> : impulsion déjà en cours</td></tr>\n<tr><td>28 s</td><td>Rien</td><td>0</td><td>5 s après 23 s : <b>Q = 0</b></td><td>0</td></tr></tbody></table>\n<div style=\"border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:var(--r);background:var(--surface);padding:10px 14px;margin:12px 0\"><b>À retenir pour le contrôle :</b> le TON « filtre » les appuis courts ; le TOF « prolonge » le signal et se relance à chaque nouvel appui ; le TP donne toujours la même durée, quelle que soit la durée de l'appui, et ne se relance pas pendant qu'il tourne.</div>\n\n<h4>Partie 2 : le clignotant 5 s allumé / 10 s éteint</h4>\n<p><b>Idée :</b> deux TP qui se passent le relais. Le premier compte le temps allumé, le second le temps éteint. Chacun ne peut démarrer que si l'autre est arrêté.</p>\n<div class=\"tbl\"><svg viewBox=\"0 0 460 300\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Clignotant avec deux TP\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"292\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"292\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><rect x=\"250\" y=\"24\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"295.0\" y=\"18\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">T_allume</text><text x=\"295.0\" y=\"39\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TP</text><text x=\"255\" y=\"62\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"255\" y=\"86\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"335\" y=\"62\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"335\" y=\"86\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"10\" y1=\"58\" x2=\"72\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"47\" x2=\"72\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"47\" x2=\"88\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"42\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"88\" y1=\"58\" x2=\"147\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"147\" y1=\"47\" x2=\"147\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"163\" y1=\"47\" x2=\"163\" y2=\"69\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"143\" y1=\"71\" x2=\"167\" y2=\"45\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"155\" y=\"42\" text-anchor=\"middle\" fill=\"var(--ink)\">T_eteint.Q</text><line x1=\"163\" y1=\"58\" x2=\"250\" y2=\"58\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"246\" y=\"86\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#5s</text><rect x=\"250\" y=\"136\" width=\"90\" height=\"82\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"295.0\" y=\"130\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">T_eteint</text><text x=\"295.0\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">TP</text><text x=\"255\" y=\"174\" font-size=\"11\" fill=\"var(--ink)\">IN</text><text x=\"255\" y=\"198\" font-size=\"11\" fill=\"var(--ink)\">PT</text><text x=\"335\" y=\"174\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">Q</text><text x=\"335\" y=\"198\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">ET</text><line x1=\"10\" y1=\"170\" x2=\"72\" y2=\"170\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"159\" x2=\"72\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"159\" x2=\"88\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"154\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"88\" y1=\"170\" x2=\"147\" y2=\"170\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"147\" y1=\"159\" x2=\"147\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"163\" y1=\"159\" x2=\"163\" y2=\"181\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"143\" y1=\"183\" x2=\"167\" y2=\"157\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"155\" y=\"154\" text-anchor=\"middle\" fill=\"var(--ink)\">T_allume.Q</text><line x1=\"163\" y1=\"170\" x2=\"250\" y2=\"170\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"246\" y=\"198\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">T#10s</text><line x1=\"10\" y1=\"266\" x2=\"72\" y2=\"266\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"72\" y1=\"255\" x2=\"72\" y2=\"277\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"88\" y1=\"255\" x2=\"88\" y2=\"277\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"80\" y=\"250\" text-anchor=\"middle\" fill=\"var(--ink)\">T_allume.Q</text><line x1=\"88\" y1=\"266\" x2=\"366\" y2=\"266\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"266\" x2=\"450\" y2=\"266\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 254 Q364 266 372 278 M388 254 Q396 266 388 278\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"249\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.4</text></svg></div>\n<p><b>Équations</b> des entrées IN et de la sortie :</p>\n<ul><li><code>T_allume.IN = %I0.1.2 · /T_eteint.Q</code></li>\n<li><code>T_eteint.IN = %I0.1.2 · /T_allume.Q</code></li>\n<li><code>%Q0.2.4 = T_allume.Q</code></li></ul>\n<div class=\"tbl\"><svg viewBox=\"0 0 460 200\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Clignotant : les deux TP et la sortie\"><line x1=\"135.0\" y1=\"6\" x2=\"135.0\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"135.0\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">0</text><line x1=\"168.88888888888889\" y1=\"6\" x2=\"168.88888888888889\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"168.88888888888889\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">5</text><line x1=\"236.66666666666669\" y1=\"6\" x2=\"236.66666666666669\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"236.66666666666669\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">15</text><line x1=\"270.55555555555554\" y1=\"6\" x2=\"270.55555555555554\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"270.55555555555554\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">20</text><line x1=\"338.33333333333337\" y1=\"6\" x2=\"338.33333333333337\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"338.33333333333337\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">30</text><line x1=\"372.22222222222223\" y1=\"6\" x2=\"372.22222222222223\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"372.22222222222223\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">35</text><line x1=\"440.0\" y1=\"6\" x2=\"440.0\" y2=\"174\" stroke=\"var(--line)\" stroke-dasharray=\"3 3\"/><text x=\"440.0\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\">45</text><text x=\"127\" y=\"34\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">%I0.1.2</text><path d=\"M135 40 L135.0 40 L135.0 20 L440.0 20 L440.0 40 L440.0 40\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"74\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">T_allume.Q</text><path d=\"M135 80 L135.0 80 L135.0 60 L168.88888888888889 60 L168.88888888888889 80 L236.66666666666669 80 L236.66666666666669 60 L270.55555555555554 60 L270.55555555555554 80 L338.33333333333337 80 L338.33333333333337 60 L372.22222222222223 60 L372.22222222222223 80 L440.0 80\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"114\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">T_eteint.Q</text><path d=\"M135 120 L168.88888888888889 120 L168.88888888888889 100 L236.66666666666669 100 L236.66666666666669 120 L270.55555555555554 120 L270.55555555555554 100 L338.33333333333337 100 L338.33333333333337 120 L372.22222222222223 120 L372.22222222222223 100 L440.0 100 L440.0 120 L440.0 120\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/><text x=\"127\" y=\"154\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">%Q0.2.4</text><path d=\"M135 160 L135.0 160 L135.0 140 L168.88888888888889 140 L168.88888888888889 160 L236.66666666666669 160 L236.66666666666669 140 L270.55555555555554 140 L270.55555555555554 160 L338.33333333333337 160 L338.33333333333337 140 L372.22222222222223 140 L372.22222222222223 160 L440.0 160\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.2\"/></svg></div>\n<p><b>Déroulement :</b></p>\n<ol><li>À 0 s, on active <code>%I0.1.2</code>. Réseau 1 : T_eteint.Q = 0, donc IN de T_allume passe à 1. C'est un front montant : <b>T_allume.Q = 1 pendant 5 s</b>, le voyant s'allume.</li>\n<li>Dans le même cycle, réseau 2 : T_allume.Q = 1, donc le contact NC est ouvert et T_eteint ne démarre pas.</li>\n<li>À 5 s, T_allume.Q retombe. Le contact NC du réseau 2 se referme : front montant sur IN de T_eteint, <b>T_eteint.Q = 1 pendant 10 s</b>. Le voyant est éteint.</li>\n<li>Pendant ce temps, le contact NC de T_eteint ouvre le réseau 1 : IN de T_allume = 0. Le bloc est prêt pour le prochain front.</li>\n<li>À 15 s, T_eteint.Q retombe : nouveau front sur T_allume, le voyant se rallume. Et ainsi de suite : allumé de 15 à 20 s, de 30 à 35 s…</li>\n<li>Si on relâche <code>%I0.1.2</code>, les deux IN passent à 0. Les TP finissent leur impulsion en cours, puis tout s'arrête.</li></ol>\n<p><b>Pourquoi le contact NC est indispensable :</b> un TP ne redémarre que sur un <b>front montant</b> de IN. Sans le contact NC, IN resterait à 1 en permanence. T_allume ne donnerait qu'une seule impulsion et le voyant ne clignoterait jamais.</p>\n<p><b>Période :</b> 5 + 10 = 15 s. Rapport cyclique : 5 / 15 = 1/3 du temps allumé.</p>\n<p><b>Présélection modifiée en RUN :</b> elle est prise en compte au <b>prochain front</b> sur IN ; l'impulsion déjà lancée finit avec l'ancienne valeur. Pense à reporter la modification dans le programme, sinon elle sera perdue au prochain transfert.</p>\n\n<h4>Partie 3 : le compteur / décompteur CTUD</h4>\n<div class=\"tbl\"><svg viewBox=\"0 0 460 280\" width=\"460\" style=\"max-width:100%;height:auto;font-family:var(--f-ui);font-size:12px\" role=\"img\" aria-label=\"Compteur CTUD\"><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"272\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"450\" y1=\"8\" x2=\"450\" y2=\"272\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><rect x=\"190\" y=\"26\" width=\"90\" height=\"228\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><text x=\"235.0\" y=\"20\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">Cpt_Decpt</text><text x=\"235.0\" y=\"41\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">CTUD_INT</text><text x=\"195\" y=\"64\" font-size=\"11\" fill=\"var(--ink)\">CU</text><text x=\"195\" y=\"108\" font-size=\"11\" fill=\"var(--ink)\">CD</text><text x=\"195\" y=\"152\" font-size=\"11\" fill=\"var(--ink)\">R</text><text x=\"195\" y=\"196\" font-size=\"11\" fill=\"var(--ink)\">LD</text><text x=\"195\" y=\"240\" font-size=\"11\" fill=\"var(--ink)\">PV</text><text x=\"275\" y=\"64\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">QU</text><text x=\"275\" y=\"108\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">QD</text><text x=\"275\" y=\"152\" font-size=\"11\" text-anchor=\"end\" fill=\"var(--ink)\">CV</text><line x1=\"10\" y1=\"60\" x2=\"82\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"49\" x2=\"82\" y2=\"71\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"49\" x2=\"98\" y2=\"71\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"44\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.4</text><line x1=\"98\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"104\" x2=\"82\" y2=\"104\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"93\" x2=\"82\" y2=\"115\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"93\" x2=\"98\" y2=\"115\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"88\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.5</text><line x1=\"98\" y1=\"104\" x2=\"190\" y2=\"104\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"148\" x2=\"82\" y2=\"148\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"137\" x2=\"82\" y2=\"159\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"137\" x2=\"98\" y2=\"159\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"132\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.2</text><line x1=\"98\" y1=\"148\" x2=\"190\" y2=\"148\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"10\" y1=\"192\" x2=\"82\" y2=\"192\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"82\" y1=\"181\" x2=\"82\" y2=\"203\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98\" y1=\"181\" x2=\"98\" y2=\"203\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"90\" y=\"176\" text-anchor=\"middle\" fill=\"var(--ink)\">%I0.1.3</text><line x1=\"98\" y1=\"192\" x2=\"190\" y2=\"192\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><text x=\"186\" y=\"240\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--ink)\">5</text><line x1=\"280\" y1=\"60\" x2=\"366\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><line x1=\"394\" y1=\"60\" x2=\"450\" y2=\"60\" stroke=\"var(--ink)\" stroke-width=\"2\" fill=\"none\"/><path d=\"M372 48 Q364 60 372 72 M388 48 Q396 60 388 72\" stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"none\"/><text x=\"380\" y=\"43\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--accent)\">%Q0.2.3</text></svg></div>\n<p><b>Équations :</b></p>\n<ul><li>Front montant sur CU (<code>%I0.1.4</code>) : <code>CV := CV + 1</code></li>\n<li>Front montant sur CD (<code>%I0.1.5</code>) : <code>CV := CV − 1</code></li>\n<li>R (<code>%I0.1.2</code>) = 1 : <code>CV := 0</code>. LD (<code>%I0.1.3</code>) = 1 : <code>CV := PV = 5</code></li>\n<li><code>QU = (CV ≥ PV)</code>, <code>QD = (CV ≤ 0)</code>, et <code>%Q0.2.3 = QU</code></li></ul>\n<p><b>Tableau corrigé et expliqué :</b></p>\n<table><thead><tr><th>Action</th><th>CV</th><th>QU</th><th>QD</th><th>Explication</th></tr></thead><tbody>\n<tr><td>Départ</td><td>0</td><td>0</td><td>1</td><td>CV = 0, donc CV ≤ 0 : QD = 1. Le poly a pré-rempli QD = 0, c'est une erreur.</td></tr>\n<tr><td>LD</td><td>5</td><td>1</td><td>0</td><td>LD charge PV : 5 ≥ 5, le voyant <code>%Q0.2.3</code> s'allume.</td></tr>\n<tr><td>R</td><td>0</td><td>0</td><td>1</td><td>Remise à zéro, le voyant s'éteint.</td></tr>\n<tr><td>CU</td><td>1</td><td>0</td><td>0</td><td>+1 : ni ≥ 5 ni ≤ 0.</td></tr>\n<tr><td>CD</td><td>0</td><td>0</td><td>1</td><td>−1 : retour à 0.</td></tr>\n<tr><td>CD</td><td>−1</td><td>0</td><td>1</td><td>Le compteur descend sous 0 (type INT signé). QD reste à 1.</td></tr>\n<tr><td>CU</td><td>0</td><td>0</td><td>1</td><td>+1 : retour à 0.</td></tr>\n<tr><td>5 × CU</td><td>5</td><td>1</td><td>0</td><td>1, 2, 3, 4, 5 : au 5<sup>e</sup> appui, le voyant s'allume.</td></tr></tbody></table>\n<p><b>Points d'attention :</b></p>\n<ul><li>Le compteur réagit aux <b>fronts</b> : garder le doigt appuyé ne compte qu'une fois.</li>\n<li>R et LD sont sur un <b>commutateur 3 positions</b> : on ne peut pas activer les deux en même temps. Si c'était le cas, R est prioritaire dans le bloc CTUD.</li>\n<li>Tant que R ou LD reste à 1, CV est bloqué à 0 ou à 5 : les appuis sur CU et CD n'ont pas d'effet. Il faut remettre le commutateur au milieu.</li>\n<li>Pour suivre CV en direct : passer en ligne et regarder la broche CV, ou ajouter <code>Cpt_Decpt.CV</code> dans une table d'animation.</li></ul>"
            },
            {
              "titre": "Adresses du poly et de ta platine",
              "html": "<p>Le poly suppose les entrées en emplacement 2 et les sorties en emplacement 3. Sur ta platine (DDI 1602 en 1, DRA 1605 en 2), on décale d'un emplacement :</p>\n<table><thead><tr><th>Poly</th><th>Ta platine</th><th>Rôle</th></tr></thead><tbody>\n<tr><td><code>%I0.2.1</code></td><td><code>%I0.1.1</code></td><td>Entrée des 3 tempos</td></tr>\n<tr><td><code>%I0.2.2</code></td><td><code>%I0.1.2</code></td><td>Clignotant / R du compteur</td></tr>\n<tr><td><code>%I0.2.3</code></td><td><code>%I0.1.3</code></td><td>LD du compteur</td></tr>\n<tr><td><code>%I0.2.4 / .5</code></td><td><code>%I0.1.4 / .5</code></td><td>CU / CD</td></tr>\n<tr><td><code>%Q0.3.0 à .4</code></td><td><code>%Q0.2.0 à .4</code></td><td>Voyants</td></tr></tbody></table>\n<p>Les échelles des corrigés utilisent déjà les adresses de ta platine.</p>"
            }
          ],
          "pointsCles": [
            "Un EFB a une mémoire : on le déclare comme instance nommée (onglet Blocs fonction).",
            "EN non câblée = 1 ; EN = 0 : bloc non exécuté, ENO = 0.",
            "TON : Q monte après PT à 1 continu. TOF : Q tombe PT après la retombée de IN. TP : impulsion de PT sur front montant, non redéclenchable.",
            "PT est de type TIME : T#5s, t#14.7S, TIME#5d10h…",
            "ET = temps écoulé en ms ; on lit Q par instance.Q.",
            "CTUD : CU +1, CD −1 sur front montant ; R met CV à 0, LD met CV à PV.",
            "QU = CV ≥ PV ; QD = CV ≤ 0."
          ],
          "definitions": [
            {
              "terme": "EFB",
              "def": "Bloc fonction élémentaire fourni par la bibliothèque de Control Expert, avec entrées, sorties et mémoire interne."
            },
            {
              "terme": "Instance",
              "def": "Exemplaire nommé d'un bloc fonction, avec ses propres données (ex. Tempo_travail de type TON)."
            },
            {
              "terme": "TON",
              "def": "Temporisateur retard à l'enclenchement : la sortie passe à 1 quand l'entrée est restée à 1 pendant la durée PT."
            },
            {
              "terme": "TOF",
              "def": "Temporisateur retard au déclenchement : la sortie reste à 1 pendant la durée PT après la retombée de l'entrée."
            },
            {
              "terme": "TP",
              "def": "Temporisateur impulsion (monostable) : un front montant donne une sortie à 1 de durée fixe PT."
            },
            {
              "terme": "CTUD",
              "def": "Compteur / décompteur : +1 sur front de CU, −1 sur front de CD, avec remise à zéro R et chargement LD."
            },
            {
              "terme": "Front montant",
              "def": "Passage d'un signal de 0 à 1. Le front descendant est le passage de 1 à 0."
            },
            {
              "terme": "EN / ENO",
              "def": "EN : entrée de validation (non câblée = 1). ENO : sortie qui recopie EN, et passe à 0 en cas d'erreur."
            }
          ],
          "flashcards": [
            {
              "q": "Que signifie EFB ?",
              "r": "Elementary Function Block : bloc fonction élémentaire."
            },
            {
              "q": "Où déclare-t-on une instance de bloc ?",
              "r": "Dans l'éditeur de données, onglet Blocs fonction."
            },
            {
              "q": "Où trouve-t-on les anciens blocs PL7 ?",
              "r": "Dans la bibliothèque Obsolete Lib."
            },
            {
              "q": "EN non câblée vaut ?",
              "r": "1 : le bloc est toujours exécuté."
            },
            {
              "q": "Que se passe-t-il si EN = 0 ?",
              "r": "Le bloc n'est pas exécuté et ENO = 0."
            },
            {
              "q": "Quand ENO vaut-il 0 alors que EN = 1 ?",
              "r": "Quand une erreur survient pendant l'exécution du bloc."
            },
            {
              "q": "TON : quand Q passe-t-il à 1 ?",
              "r": "Quand IN est resté à 1 pendant PT sans interruption."
            },
            {
              "q": "TOF : quand Q retombe-t-il ?",
              "r": "PT après la retombée de IN (si IN ne remonte pas entre-temps)."
            },
            {
              "q": "TP : que fait un nouvel appui pendant l'impulsion ?",
              "r": "Rien : le TP n'est pas redéclenchable pendant l'impulsion."
            },
            {
              "q": "Que représente ET ?",
              "r": "Le temps écoulé (elapsed time), en ms."
            },
            {
              "q": "Écris 5 secondes en type TIME.",
              "r": "T#5s (ou t#5s, TIME#5s)."
            },
            {
              "q": "Comment lit-on la sortie de l'instance Tempo_repos ?",
              "r": "Tempo_repos.Q"
            },
            {
              "q": "Chronogramme : IN à 1 de 0 à 6 s, TON PT 5 s. Q ?",
              "r": "Q à 1 de 5 à 6 s."
            },
            {
              "q": "IN à 1 de 0 à 6 s puis de 10 à 11 s, TOF PT 5 s. Q tombe quand ?",
              "r": "À 16 s : IN remonte à 10 s avant la fin, puis retombe à 11 s, + 5 s."
            },
            {
              "q": "Comment faire un clignotant 5 s / 10 s ?",
              "r": "Deux TP (5 s et 10 s) qui se relancent : chacun démarre quand l'autre est fini (contact NC de l'autre)."
            },
            {
              "q": "Une présélection modifiée en RUN est-elle prise en compte ?",
              "r": "Oui, au prochain déclenchement du bloc ; une tempo en cours finit avec l'ancienne valeur."
            },
            {
              "q": "CTUD : rôle de R et de LD ?",
              "r": "R met CV à 0 ; LD charge CV = PV."
            },
            {
              "q": "CTUD : conditions de QU et QD ?",
              "r": "QU = 1 si CV ≥ PV ; QD = 1 si CV ≤ 0."
            },
            {
              "q": "CV = 0, PV = 5 : valeurs de QU et QD ?",
              "r": "QU = 0, QD = 1."
            },
            {
              "q": "Sur ta platine, à quoi correspond %Q0.3.3 du poly ?",
              "r": "%Q0.2.3 (sorties en emplacement 2)."
            },
            {
              "q": "Exemple concret de TOF ?",
              "r": "Le ventilateur de salle de bain qui continue de tourner après qu'on a éteint la lumière."
            },
            {
              "q": "Exemple concret de TP ?",
              "r": "Un distributeur de savon : quelle que soit la durée de l'appui, la dose (durée) est toujours la même."
            },
            {
              "q": "Qu'est-ce qu'un front montant ?",
              "r": "Le passage d'un signal de 0 à 1. Les TP et les compteurs réagissent au front, pas au niveau."
            },
            {
              "q": "CTUD : R et LD à 1 en même temps, qui gagne ?",
              "r": "R (remise à zéro) est prioritaire : CV = 0."
            },
            {
              "q": "Clignotant 5 s / 10 s : période et rapport cyclique ?",
              "r": "Période 15 s ; allumé 5 / 15 = 1/3 du temps."
            }
          ],
          "quiz": [
            {
              "q": "Quel temporisateur retarde la mise à 1 de la sortie ?",
              "choix": [
                "TON",
                "TOF",
                "TP",
                "CTU"
              ],
              "bonne": 0,
              "explication": "TON = retard à l'enclenchement (tempo travail)."
            },
            {
              "q": "Quel temporisateur garde la sortie à 1 après le relâchement de l'entrée ?",
              "choix": [
                "TOF",
                "TON",
                "TP",
                "CTD"
              ],
              "bonne": 0,
              "explication": "TOF = retard au déclenchement (tempo repos)."
            },
            {
              "q": "IN passe à 1 à t = 0 et y reste 2 s. Bloc TON avec PT = T#5s. Que vaut Q ?",
              "choix": [
                "Q reste à 0",
                "Q à 1 de 0 à 5 s",
                "Q à 1 de 5 à 7 s",
                "Q à 1 de 2 à 7 s"
              ],
              "bonne": 0,
              "explication": "IN n'est pas resté 5 s à 1 : le TON ne sort rien."
            },
            {
              "q": "TP avec PT = 5 s : appui à 20 s puis nouvel appui à 22 s. Quand Q retombe-t-il ?",
              "choix": [
                "25 s",
                "27 s",
                "22 s",
                "23 s"
              ],
              "bonne": 0,
              "explication": "Le TP n'est pas redéclenchable pendant l'impulsion : l'appui à 22 s est ignoré."
            },
            {
              "q": "Laquelle de ces écritures n'est pas une valeur TIME valide ?",
              "choix": [
                "5s",
                "T#5s",
                "t#14.7S",
                "TIME#5d10h23m45s3ms"
              ],
              "bonne": 0,
              "explication": "Une durée TIME commence toujours par T#, t#, TIME# ou time#."
            },
            {
              "q": "EN n'est pas câblée sur un bloc. Que se passe-t-il ?",
              "choix": [
                "Le bloc est exécuté (EN vaut 1)",
                "Le bloc n'est jamais exécuté",
                "ENO vaut 0",
                "Erreur de compilation"
              ],
              "bonne": 0,
              "explication": "EN est facultative : non câblée, elle vaut 1."
            },
            {
              "q": "CTUD avec PV = 5 : on active LD. Que vaut CV ?",
              "choix": [
                "5",
                "0",
                "1",
                "−1"
              ],
              "bonne": 0,
              "explication": "LD charge la présélection : CV = PV."
            },
            {
              "q": "CTUD : CV = 0, on donne un front sur CD. Que vaut QD ?",
              "choix": [
                "1 (CV = −1)",
                "0 (CV reste à 0)",
                "0 (CV = −1)",
                "Le compteur déborde"
              ],
              "bonne": 0,
              "explication": "CV passe à −1 et QD = (CV ≤ 0) = 1."
            },
            {
              "q": "Clignotant avec deux TP : pourquoi met-on un contact NC de l'autre tempo devant chaque IN ?",
              "choix": [
                "Pour créer un front montant à chaque fin de tempo",
                "Pour que les deux tempos tournent en même temps",
                "Pour inverser la sortie du voyant",
                "Pour remettre CV à 0"
              ],
              "bonne": 0,
              "explication": "Un TP ne redémarre que sur un front montant. Le contact NC fait retomber puis remonter IN à chaque fin de l'autre tempo."
            },
            {
              "q": "TOF avec PT = 5 s : IN à 1 de 0 à 6 s, puis de 10 à 11 s. Quand Q retombe-t-il ?",
              "choix": [
                "16 s",
                "11 s",
                "15 s",
                "6 s"
              ],
              "bonne": 0,
              "explication": "IN remonte à 10 s avant la fin des 5 s : le TOF repart de 0 à la retombée de 11 s, donc Q tombe à 16 s."
            },
            {
              "q": "Un compteur CTUD compte une bouteille. Le capteur reste à 1 pendant 3 s. Combien de fois compte-t-il ?",
              "choix": [
                "1 fois",
                "3 fois",
                "Autant de fois que de cycles automate",
                "0 fois"
              ],
              "bonne": 0,
              "explication": "Le compteur réagit au front montant : un seul passage de 0 à 1 = +1."
            }
          ],
          "examen": [
            {
              "titre": "Chronogramme TON, TOF, TP",
              "enonce": "<p>Une entrée <code>%I0.1.1</code> attaque l'entrée IN de trois blocs, tous réglés avec <code>PT = T#4s</code> : <code>Tempo_travail</code> (TON), <code>Tempo_repos</code> (TOF) et <code>Tempo_mono</code> (TP).</p><p><code>%I0.1.1</code> est à 1 de 0 à 3 s, de 5 à 12 s, de 14 à 15 s et de 16,5 à 17 s. Elle est à 0 le reste du temps.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "À quel instant Tempo_travail.Q (TON) passe-t-il à 1 ?",
                  "reponse": 9,
                  "unite": "s",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Le TON passe à 1 quand IN est resté à 1 <b>sans interruption pendant PT</b>.</p><ul><li>0 à 3 s : 3 s &lt; 4 s, rien.</li><li>5 à 12 s : 7 s, Q passe à 1 à 5 + 4 = <b>9 s</b> et retombe à 12 s.</li><li>14 à 15 s et 16,5 à 17 s : trop courts.</li></ul>"
                },
                {
                  "type": "num",
                  "q": "À quel instant Tempo_repos.Q (TOF) retombe-t-il définitivement à 0 ?",
                  "reponse": 21,
                  "unite": "s",
                  "tol": 0.01,
                  "points": 2,
                  "corrige": "<p>Le TOF passe à 1 dès que IN monte (0 s) et retombe PT après la retombée de IN, sauf si IN remonte avant.</p><ul><li>IN retombe à 3 s ; chute prévue à 7 s, mais IN remonte à 5 s.</li><li>IN retombe à 12 s ; chute prévue à 16 s, mais IN remonte à 14 s.</li><li>IN retombe à 15 s ; chute prévue à 19 s, mais IN remonte à 16,5 s.</li><li>IN retombe à 17 s : Q tombe à 17 + 4 = <b>21 s</b>.</li></ul><p>Tempo_repos.Q reste donc à 1 sans interruption de 0 à 21 s.</p>"
                },
                {
                  "type": "num",
                  "q": "Combien d'impulsions Tempo_mono.Q (TP) donne-t-il ?",
                  "reponse": 3,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Le TP donne une impulsion de 4 s sur chaque <b>front montant</b>, et n'est pas redéclenchable pendant l'impulsion :</p><ul><li>front à 0 s : Q = 1 de 0 à 4 s ;</li><li>front à 5 s : Q = 1 de 5 à 9 s ;</li><li>front à 14 s : Q = 1 de 14 à 18 s ;</li><li>front à 16,5 s : <b>ignoré</b>, l'impulsion est en cours.</li></ul><p>Soit <b>3</b> impulsions.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Laquelle de ces écritures de PT est refusée par Control Expert ?",
                  "choix": [
                    "4s",
                    "T#4s",
                    "t#4S",
                    "TIME#4s"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Une valeur de type TIME commence toujours par <code>T#</code>, <code>t#</code> ou <code>TIME#</code>. « 4s » seul n'est pas une durée valide.</p>"
                }
              ]
            },
            {
              "titre": "Compteur / décompteur de cartons",
              "enonce": "<p>Une instance <code>Cpt_Cartons</code> de type <b>CTUD_INT</b> a PV = 4. Un capteur sur CU compte les cartons qui entrent dans une zone de stockage, un capteur sur CD ceux qui en sortent. R et LD sont commandés par un commutateur 3 positions.</p><p>Au départ, CV = 0. On effectue dans l'ordre : LD, puis deux fronts sur CD, puis R, puis un front sur CD, puis deux fronts sur CU.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Que vaut CV juste après les deux fronts sur CD (avant R) ?",
                  "reponse": 2,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>LD charge <code>CV = PV = 4</code>, puis deux fronts sur CD : 4 − 1 − 1 = <b>2</b>.</p>"
                },
                {
                  "type": "num",
                  "q": "Que vaut CV à la fin de la séquence ?",
                  "reponse": 1,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>R met CV à 0, un front sur CD donne −1 (le type INT est signé, le compteur descend sous 0), puis deux fronts sur CU : −1 + 2 = <b>1</b>.</p><table><thead><tr><th>Action</th><th>CV</th><th>QU</th><th>QD</th></tr></thead><tbody><tr><td>LD</td><td>4</td><td>1</td><td>0</td></tr><tr><td>CD</td><td>3</td><td>0</td><td>0</td></tr><tr><td>CD</td><td>2</td><td>0</td><td>0</td></tr><tr><td>R</td><td>0</td><td>0</td><td>1</td></tr><tr><td>CD</td><td>-1</td><td>0</td><td>1</td></tr><tr><td>CU</td><td>0</td><td>0</td><td>1</td></tr><tr><td>CU</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>"
                },
                {
                  "type": "qcm",
                  "q": "À la fin de la séquence, que valent QU et QD ?",
                  "choix": [
                    "QU = 0, QD = 0",
                    "QU = 1, QD = 0",
                    "QU = 0, QD = 1",
                    "QU = 1, QD = 1"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><code>QU = (CV ≥ PV)</code> : 1 ≥ 4 est faux, QU = 0. <code>QD = (CV ≤ 0)</code> : 1 ≤ 0 est faux, QD = 0.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Un carton reste 2 s devant le capteur CU. De combien CV augmente-t-il ?",
                  "choix": [
                    "1",
                    "2",
                    "Autant que de cycles automate pendant 2 s",
                    "0"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Le compteur réagit au <b>front montant</b> (passage de 0 à 1), pas au niveau : un seul front, donc +1.</p>"
                }
              ]
            },
            {
              "titre": "Clignotant 2 s / 6 s",
              "enonce": "<p>Tant que l'entrée <code>%I0.1.2</code> est à 1, le voyant <code>%Q0.2.4</code> doit clignoter : <b>2 s allumé, 6 s éteint</b>. On utilise deux blocs TP qui se relancent l'un l'autre : <code>T_on</code> (PT = T#2s) et <code>T_off</code> (PT = T#6s). On active <code>%I0.1.2</code> à t = 0 et on la laisse à 1.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire les équations des entrées IN des deux blocs et de la sortie %Q0.2.4.",
                  "points": 2,
                  "attendu": "T_on.IN = %I0.1.2 · /T_off.Q ; T_off.IN = %I0.1.2 · /T_on.Q ; %Q0.2.4 = T_on.Q",
                  "corrige": "<p>Chaque TP ne démarre que si l'autre est fini (contact NC de l'autre) :</p><p><code>T_on.IN = %I0.1.2 · /T_off.Q</code><br><code>T_off.IN = %I0.1.2 · /T_on.Q</code><br><code>%Q0.2.4 = T_on.Q</code></p><p>Le contact NC est indispensable : un TP ne redémarre que sur un <b>front montant</b> de IN. Sans lui, IN resterait à 1 et le voyant ne s'allumerait qu'une seule fois.</p>"
                },
                {
                  "type": "num",
                  "q": "Quelle est la période du clignotant ?",
                  "reponse": 8,
                  "unite": "s",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Période = temps allumé + temps éteint = 2 + 6 = <b>8 s</b>.</p>"
                },
                {
                  "type": "num",
                  "q": "Quel est le rapport cyclique (part du temps où le voyant est allumé) ?",
                  "reponse": 25,
                  "unite": "%",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Rapport cyclique = 2 / 8 = 0,25, soit <b>25 %</b>.</p>"
                },
                {
                  "type": "num",
                  "q": "Combien de fois le voyant s'allume-t-il pendant la première minute (de t = 0 à t = 60 s) ?",
                  "reponse": 8,
                  "unite": "",
                  "tol": 0.01,
                  "points": 1,
                  "corrige": "<p>Le voyant s'allume à t = 0, 8, 16, 24, 32, 40, 48 et 56 s (un allumage toutes les 8 s). Le suivant serait à 64 s, après la minute. Soit <b>8</b> allumages.</p>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "electrotechnique",
      "nom": "Électrotechnique",
      "semestre": "Circuits monophasés",
      "couleur": "#0c8599",
      "chapitres": [
        {
          "id": "cours-courant-continu",
          "titre": "Le courant continu : résistance et associations",
          "type": "Cours",
          "date": "2026-10-08",
          "source": "Notes de cours « Harmonisation scientifique et technique : courant continu » (cahier de Kyk's)",
          "resume": "La résistance d'un fil dépend de son matériau, de sa longueur, de sa section et de sa température. Une bobine et un condensateur réagissent aux variations du courant ou de la tension. En convention récepteur, la flèche de tension est opposée à celle du courant. En série les résistances s'ajoutent ; en parallèle, ce sont leurs inverses qui s'ajoutent.",
          "sections": [
            {
              "titre": "Résistance d'un conducteur",
              "html": "<p>La résistance d'un fil conducteur se calcule avec :</p>\n<p><code>R = ρ · L / S</code></p>\n<table><thead><tr><th>Symbole</th><th>Grandeur</th><th>Unité</th></tr></thead><tbody>\n<tr><td>R</td><td>résistance</td><td>ohm (Ω)</td></tr>\n<tr><td>ρ (rhô)</td><td>résistivité du matériau</td><td>Ω·m (ou Ω·mm²/m)</td></tr>\n<tr><td>L</td><td>longueur du fil</td><td>mètre (m)</td></tr>\n<tr><td>S</td><td>section du fil</td><td>m² (ou mm²)</td></tr></tbody></table>\n<p>Plus le fil est <b>long</b>, plus sa résistance est grande. Plus il est <b>gros</b> (grande section), plus elle est petite.</p>\n<div class=\"exemple\"><b>Exemple :</b> un fil de cuivre (ρ ≈ 0,017 Ω·mm²/m) de 100 m et de section 1,5 mm² a une résistance R = 0,017 × 100 / 1,5 ≈ <b>1,13 Ω</b>.</div>\n<div class=\"attention\"><b>Dans le cahier :</b> ρ est entouré avec l'unité Ω. En fait, c'est <b>R</b> qui s'exprime en Ω. La résistivité ρ s'exprime en <b>Ω·m</b>, ou en Ω·mm²/m quand la section est en mm² et la longueur en m. Il faut garder des unités cohérentes.</div>"
            },
            {
              "titre": "Influence de la température",
              "html": "<p>La résistance d'un conducteur dépend aussi de sa température :</p>\n<p><code>Rθ = R0 · (1 + α · θ)</code></p>\n<ul><li>R0 : résistance à 0 °C ;</li><li>θ : température en °C ;</li><li>α : coefficient de température du matériau (en °C⁻¹).</li></ul>\n<p>Pour les métaux, α est positif : <b>quand la température monte, la résistance augmente</b>, et quand elle baisse, la résistance diminue.</p>\n<div class=\"exemple\"><b>Exemple :</b> le cuivre a α ≈ 0,004 °C⁻¹. Un fil de R0 = 10 Ω à 0 °C vaut à 50 °C : R = 10 × (1 + 0,004 × 50) = <b>12 Ω</b>.</div>\n<div class=\"attention\">Ce n'est pas vrai pour tous les matériaux : certains composants (thermistances CTN, semi-conducteurs, carbone) voient au contraire leur résistance <b>diminuer</b> quand ils chauffent.</div>"
            },
            {
              "titre": "Bobine et condensateur",
              "html": "<p>Une bobine (inductance L, en henrys H) et un condensateur (capacité C, en farads F) ne réagissent qu'aux <b>variations</b> :</p>\n<ul><li>bobine : <code>u = L · di/dt</code>. La tension dépend de la vitesse de variation du courant ;</li>\n<li>condensateur : <code>i = C · du/dt</code>. Le courant dépend de la vitesse de variation de la tension.</li></ul>\n<p>En régime continu établi (rien ne varie), une bobine se comporte comme un <b>fil</b> et un condensateur comme un <b>interrupteur ouvert</b>.</p>\n<div class=\"attention\"><b>Dans le cahier :</b> il est écrit « L = di/dt » et « C = du/dt ». Il manque la tension et le courant : les bonnes relations sont <b>u = L · di/dt</b> et <b>i = C · du/dt</b>.</div>"
            },
            {
              "titre": "Convention récepteur",
              "html": "<p>Sur un <b>récepteur</b> (une résistance par exemple), on dessine la flèche de tension U <b>dans le sens inverse</b> de la flèche du courant I. On peut alors écrire la loi d'Ohm avec un signe + : <code>U = R · I</code>.</p>\n<p>Sur un <b>générateur</b>, les flèches de U et de I sont dans le <b>même sens</b> (convention générateur).</p>"
            },
            {
              "titre": "Associations de résistances",
              "html": "<p><b>En série</b> (les résistances sont traversées par le même courant), les résistances s'ajoutent :</p>\n<p><code>Req = R1 + R2 + … + Rn</code></p>\n<p><b>En parallèle</b> (les résistances ont la même tension à leurs bornes), ce sont les inverses qui s'ajoutent :</p>\n<p><code>1/Req = 1/R1 + 1/R2 + … + 1/Rn</code></p>\n<p>L'inverse d'une résistance s'appelle la <b>conductance</b> : <code>G = 1/R</code>, en siemens (S). En parallèle, les conductances s'ajoutent.</p>\n<p><b>Cas de deux résistances en parallèle : « produit sur somme »</b></p>\n<p><code>1/Req = 1/R1 + 1/R2 = R2/(R1·R2) + R1/(R1·R2) = (R1 + R2)/(R1·R2)</code>, donc <code>Req = (R1 · R2) / (R1 + R2)</code>.</p>\n<div class=\"exemple\"><b>Exemples :</b> 6 Ω et 3 Ω en parallèle : Req = 6 × 3 / (6 + 3) = 18 / 9 = <b>2 Ω</b>.<br>Deux résistances égales R en parallèle : Req = R/2. Trois résistances égales : Req = R/3.</div>\n<div class=\"attention\"><b>À retenir :</b> en parallèle, Req est toujours <b>plus petite</b> que la plus petite des résistances. La formule « produit sur somme » ne marche que pour <b>deux</b> résistances : pour trois ou plus, utilise les inverses, ou regroupe deux par deux.</div>\n<div class=\"attention\"><b>Dans le cahier :</b> « Y = 1/R, admittance ». Pour une résistance en continu, 1/R s'appelle la <b>conductance</b> G. Le mot admittance (Y = 1/Z) s'utilise en alternatif, avec les impédances.</div>"
            }
          ],
          "pointsCles": [
            "R = ρ · L / S : la résistance augmente avec la longueur et diminue avec la section.",
            "Pour les métaux, la résistance augmente avec la température : Rθ = R0(1 + αθ).",
            "Bobine : u = L·di/dt ; condensateur : i = C·du/dt.",
            "Convention récepteur : flèches de U et de I en sens opposés, U = R·I.",
            "Série : Req = R1 + R2 + … ; parallèle : 1/Req = 1/R1 + 1/R2 + …",
            "Deux résistances en parallèle : Req = R1·R2 / (R1 + R2) (produit sur somme)."
          ],
          "definitions": [
            {
              "terme": "Résistivité ρ",
              "def": "Caractéristique d'un matériau qui indique s'il conduit bien ou mal le courant, en Ω·m."
            },
            {
              "terme": "Conductance G",
              "def": "Inverse de la résistance, G = 1/R, en siemens (S)."
            },
            {
              "terme": "Convention récepteur",
              "def": "Façon d'orienter un dipôle : la flèche de tension est opposée à la flèche de courant."
            },
            {
              "terme": "Résistance équivalente",
              "def": "Résistance unique qui, mise à la place d'un groupe de résistances, donne le même courant sous la même tension."
            }
          ],
          "flashcards": [
            {
              "q": "Formule de la résistance d'un fil ?",
              "r": "R = ρ · L / S (résistivité × longueur / section)."
            },
            {
              "q": "Unité de la résistivité ρ ?",
              "r": "Ω·m (ou Ω·mm²/m si la section est en mm²)."
            },
            {
              "q": "Comment varie la résistance d'un métal quand il chauffe ?",
              "r": "Elle augmente : Rθ = R0(1 + αθ) avec α > 0."
            },
            {
              "q": "Relation tension-courant d'une bobine ?",
              "r": "u = L · di/dt."
            },
            {
              "q": "Relation tension-courant d'un condensateur ?",
              "r": "i = C · du/dt."
            },
            {
              "q": "Req de deux résistances en parallèle ?",
              "r": "Req = R1·R2 / (R1 + R2)."
            },
            {
              "q": "Req de résistances en série ?",
              "r": "La somme : Req = R1 + R2 + …"
            }
          ],
          "quiz": [
            {
              "q": "Si on double la longueur d'un fil, sa résistance…",
              "choix": [
                "double",
                "est divisée par 2",
                "ne change pas",
                "est multipliée par 4"
              ],
              "bonne": 0,
              "explication": "R = ρ·L/S est proportionnelle à la longueur L."
            },
            {
              "q": "Si on double la section d'un fil, sa résistance…",
              "choix": [
                "est divisée par 2",
                "double",
                "ne change pas",
                "est divisée par 4"
              ],
              "bonne": 0,
              "explication": "R = ρ·L/S est inversement proportionnelle à la section S."
            },
            {
              "q": "R1 = 6 Ω et R2 = 3 Ω en parallèle donnent…",
              "choix": [
                "2 Ω",
                "9 Ω",
                "4,5 Ω",
                "18 Ω"
              ],
              "bonne": 0,
              "explication": "Produit sur somme : 6 × 3 / (6 + 3) = 18 / 9 = 2 Ω."
            },
            {
              "q": "R1 = 6 Ω et R2 = 3 Ω en série donnent…",
              "choix": [
                "9 Ω",
                "2 Ω",
                "18 Ω",
                "3 Ω"
              ],
              "bonne": 0,
              "explication": "En série les résistances s'ajoutent : 6 + 3 = 9 Ω."
            },
            {
              "q": "En régime continu établi, un condensateur se comporte comme…",
              "choix": [
                "un interrupteur ouvert",
                "un fil",
                "une résistance nulle",
                "un générateur"
              ],
              "bonne": 0,
              "explication": "i = C·du/dt : si la tension ne varie plus, le courant est nul."
            },
            {
              "q": "Un fil de cuivre de 10 Ω à 0 °C (α = 0,004 °C⁻¹) vaut à 50 °C…",
              "choix": [
                "12 Ω",
                "10,2 Ω",
                "8 Ω",
                "14 Ω"
              ],
              "bonne": 0,
              "explication": "R = 10 × (1 + 0,004 × 50) = 10 × 1,2 = 12 Ω."
            },
            {
              "q": "Sur un récepteur, en convention récepteur, la flèche de tension est…",
              "choix": [
                "opposée à celle du courant",
                "dans le même sens que le courant",
                "perpendiculaire au courant",
                "inutile"
              ],
              "bonne": 0,
              "explication": "C'est la définition de la convention récepteur ; on écrit alors U = R·I."
            }
          ],
          "examen": [
            {
              "titre": "Résistance d'un câble de cuivre",
              "enonce": "<p>Un câble d'alimentation en cuivre a une longueur L = 250 m et une section S = 2,5 mm². La résistivité du cuivre vaut ρ = 0,017 Ω·mm²/m. On considère que cette valeur de ρ correspond à 0 °C. Le coefficient de température du cuivre vaut α = 0,004 °C⁻¹.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer la résistance R0 du câble à 0 °C.",
                  "reponse": 1.7,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Formule : <code>R = ρ · L / S</code>. Avec ρ en Ω·mm²/m, on garde L en m et S en mm².</p><p><code>R0 = 0,017 × 250 / 2,5 = 4,25 / 2,5</code></p><p><b>R0 = 1,7 Ω</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la résistance du câble quand il est à θ = 40 °C.",
                  "reponse": 1.972,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Formule : <code>Rθ = R0 · (1 + α · θ)</code>.</p><p><code>R40 = 1,7 × (1 + 0,004 × 40) = 1,7 × 1,16</code></p><p><b>R40 ≈ 1,97 Ω</b></p><p>La résistance augmente avec la température, comme pour tous les métaux (α positif).</p>"
                },
                {
                  "type": "qcm",
                  "q": "On remplace ce câble par un câble de même longueur mais de section 5 mm². Sa résistance…",
                  "choix": [
                    "est divisée par 2",
                    "double",
                    "ne change pas",
                    "est divisée par 4"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>R = ρ·L/S est inversement proportionnelle à la section : si S double (2,5 → 5 mm²), R est divisée par 2 (0,85 Ω à 0 °C).</p>"
                }
              ]
            },
            {
              "titre": "Associations de résistances",
              "enonce": "<p>On dispose des résistances R1 = 12 Ω, R2 = 4 Ω et R3 = 5 Ω. On branche R1 et R2 en parallèle, puis on met ce groupe en série avec R3.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer la résistance équivalente R12 du groupe R1 // R2.",
                  "reponse": 3,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Deux résistances en parallèle : produit sur somme.</p><p><code>R12 = R1 · R2 / (R1 + R2) = 12 × 4 / (12 + 4) = 48 / 16</code></p><p><b>R12 = 3 Ω</b></p><div class=\"attention\">R12 est plus petite que la plus petite des deux résistances (4 Ω) : c'est un bon contrôle.</div>"
                },
                {
                  "type": "num",
                  "q": "Calculer la résistance équivalente Req de tout le montage.",
                  "reponse": 8,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>R12 et R3 sont en série : elles s'ajoutent.</p><p><code>Req = R12 + R3 = 3 + 5</code></p><p><b>Req = 8 Ω</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la conductance G d'une résistance de 50 Ω.",
                  "reponse": 0.02,
                  "unite": "S",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>La conductance est l'inverse de la résistance : <code>G = 1/R = 1/50</code>.</p><p><b>G = 0,02 S</b> (siemens).</p>"
                },
                {
                  "type": "qcm",
                  "q": "Trois résistances identiques de 30 Ω sont branchées en parallèle. La résistance équivalente vaut…",
                  "choix": [
                    "10 Ω",
                    "90 Ω",
                    "15 Ω",
                    "30 Ω"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>n résistances égales R en parallèle donnent R/n : <code>30 / 3 = 10 Ω</code>. On ne peut pas utiliser « produit sur somme » pour trois résistances directement.</p>"
                }
              ]
            },
            {
              "titre": "Bobine et condensateur en régime continu",
              "enonce": "<p>Un générateur de tension continue E = 24 V alimente une résistance R = 60 Ω en série avec une bobine d'inductance L = 0,5 H. Le circuit est branché depuis longtemps : le régime continu est établi (plus rien ne varie). On néglige la résistance du fil de la bobine.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire les relations entre tension et courant pour une bobine et pour un condensateur.",
                  "points": 1,
                  "attendu": "u = L · di/dt ; i = C · du/dt",
                  "corrige": "<p>Bobine : <code>u = L · di/dt</code> (la tension dépend de la vitesse de variation du courant).</p><p>Condensateur : <code>i = C · du/dt</code> (le courant dépend de la vitesse de variation de la tension).</p><div class=\"attention\">Ne pas écrire « L = di/dt » : il manque la tension u.</div>"
                },
                {
                  "type": "num",
                  "q": "Calculer le courant I dans le circuit en régime établi.",
                  "reponse": 0.4,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>En régime continu établi, le courant ne varie plus : di/dt = 0, donc u = L·di/dt = 0. La bobine se comporte comme un <b>fil</b>.</p><p>Il ne reste que R : <code>I = E / R = 24 / 60</code></p><p><b>I = 0,4 A</b></p>"
                },
                {
                  "type": "qcm",
                  "q": "On remplace la bobine par un condensateur. En régime établi, le courant vaut…",
                  "choix": [
                    "0 A",
                    "0,4 A",
                    "0,2 A",
                    "il devient infini"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>En régime établi, du/dt = 0, donc i = C·du/dt = 0 : le condensateur se comporte comme un <b>interrupteur ouvert</b>. Aucun courant ne circule.</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "courant-alternatif-monophase",
          "titre": "Courant alternatif monophasé",
          "type": "Cours",
          "date": "2026-10-08",
          "source": "Fiche de cours « Courant alternatif monophasé » du prof, avec les notes de Kyk's",
          "resume": "En courant alternatif, la tension et le courant varient comme une sinusoïde. On les décrit par une valeur efficace, une fréquence et un déphasage. Pour calculer, on les représente par des vecteurs (Fresnel) ou des nombres complexes. Chaque récepteur a une impédance Z, et on distingue trois puissances : active P, réactive Q et apparente S.",
          "sections": [
            {
              "titre": "La tension sinusoïdale",
              "html": "<p>L'expression instantanée d'une tension alternative sinusoïdale s'écrit :</p>\n<p><code>u(t) = Û · sin(ωt + φ) = U√2 · sin(ωt + φ)</code></p>\n<table><thead><tr><th>Symbole</th><th>Nom</th><th>Unité</th></tr></thead><tbody>\n<tr><td>Û = U√2</td><td>valeur maximale (amplitude)</td><td>V</td></tr>\n<tr><td>U</td><td>valeur efficace (celle que mesure le voltmètre)</td><td>V</td></tr>\n<tr><td>ω = 2πf = 2π/T</td><td>pulsation (vitesse angulaire)</td><td>rad/s</td></tr>\n<tr><td>f = 1/T</td><td>fréquence</td><td>Hz</td></tr>\n<tr><td>T</td><td>période</td><td>s</td></tr>\n<tr><td>ωt + φ</td><td>phase à l'instant t</td><td>rad</td></tr>\n<tr><td>φ</td><td>phase à l'origine (à t = 0)</td><td>rad</td></tr></tbody></table>\n<div class=\"exemple\"><b>Sur le réseau EDF :</b> f = 50 Hz, donc T = 1/50 = 0,02 s = <b>20 ms</b>, et ω = 2π × 50 ≈ 314 rad/s. Une prise à 230 V efficace monte jusqu'à Û = 230 × √2 ≈ 325 V.</div>\n<div class=\"exemple\"><b>Radians et degrés :</b> π rad = 180°. Donc π/3 = 60°, π/6 = 30°, π/2 = 90°. Pour convertir : degrés = radians × 180 / π.</div>"
            },
            {
              "titre": "Représentation de Fresnel",
              "html": "<p>Toute grandeur sinusoïdale (tension ou courant) est représentée par un <b>vecteur</b> :</p>\n<ul><li>de <b>longueur</b> égale à sa <b>valeur efficace</b> ;</li><li>d'<b>angle</b> égal à sa <b>phase à l'origine φ</b>, compté à partir de l'axe horizontal (origine des phases), dans le sens trigonométrique (inverse des aiguilles d'une montre).</li></ul>\n<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 360 200\" role=\"img\" aria-label=\"Vecteur de Fresnel : un vecteur U de longueur égale à la valeur efficace, faisant un angle φ avec l'axe horizontal, origine des phases. Les angles se comptent dans le sens trigonométrique, inverse des aiguilles d'une montre.\" style=\"width:100%;min-width:300px;max-width:360px;font-family:var(--f-mono);font-size:13px\">\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M30 160H330\"/><path d=\"M322 155L330 160L322 165\"/><path d=\"M110 160A80 80 0 0 0 99 120\"/></g>\n<g stroke=\"var(--accent)\" stroke-width=\"2.5\" fill=\"var(--accent)\"><path d=\"M30 160L240 50\"/><path d=\"M229 51L240 50L234 60Z\"/></g>\n<g fill=\"var(--ink)\" stroke=\"none\"><text x=\"118\" y=\"146\">φ</text><text x=\"200\" y=\"182\">origine des phases</text><text x=\"222\" y=\"40\" fill=\"var(--accent)\">U</text><text x=\"165\" y=\"128\" fill=\"var(--accent)\">longueur = U</text></g>\n</svg></div>\n<table><thead><tr><th>Grandeur sinusoïdale</th><th>Vecteur de Fresnel</th></tr></thead><tbody>\n<tr><td>u(t) = U√2 · sin(ωt + φ)</td><td>vecteur U</td></tr><tr><td>valeur efficace U</td><td>norme ‖U‖ = U</td></tr><tr><td>phase à l'origine φ</td><td>angle φ</td></tr></tbody></table>\n<p><b>Additionner deux courants</b> revient à additionner leurs vecteurs : on les met bout à bout, chacun avec <b>son propre angle</b>, et on mesure le vecteur résultat (longueur avec l'échelle, angle au rapporteur).</p>\n<p><b>Quelle grandeur prendre comme origine des phases ?</b> (note de cours)</p>\n<ul><li>Montage <b>en série</b> : le courant I est le même partout, on le prend comme origine.</li><li>Montage <b>en parallèle</b> : la tension U est la même partout, on la prend comme origine.</li></ul>"
            },
            {
              "titre": "Représentation complexe",
              "html": "<p>À toute grandeur sinusoïdale, on associe un nombre complexe noté <b>Z</b> (lettre soulignée sur la fiche), qu'on peut écrire de deux façons :</p>\n<ul><li><b>forme algébrique</b> (cartésienne) : <code>Z = x + jy</code>, avec x la partie réelle et y la partie imaginaire ;</li>\n<li><b>forme polaire</b> (trigonométrique) : <code>Z = [Z ; θ]</code>, avec Z le module et θ l'argument.</li></ul>\n<p><b>Passage de l'une à l'autre :</b></p>\n<p><code>x = Z · cos θ</code> et <code>y = Z · sin θ</code><br><code>Z = √(x² + y²)</code> et <code>θ = arctan(y / x)</code></p>\n<div class=\"attention\"><b>Deux remarques sur la fiche :</b> dans la ligne « Z cos φ + j Z sin φ », l'angle noté φ est le même que l'argument θ. Et <code>θ = arctan(y/x)</code> n'est vrai que si x &gt; 0 : si x &lt; 0, il faut ajouter 180° au résultat de la calculatrice. Voir le chapitre « Nombres complexes en monophasé ».</div>"
            },
            {
              "titre": "Loi d'Ohm et impédances",
              "html": "<p>Pour un récepteur d'impédance Z, avec <code>u(t) = U√2 · sin ωt</code> et <code>i(t) = I√2 · sin(ωt − φ)</code> :</p>\n<p><b>En valeurs efficaces :</b> <code>U = Z · I</code>. Z est l'<b>impédance</b> du récepteur, en ohms (Ω). φ est le déphasage du courant par rapport à la tension.</p>\n<table><thead><tr><th>Dipôle</th><th>Impédance Z (Ω)</th><th>Tension efficace</th><th>Déphasage φ (de I vers U)</th></tr></thead><tbody>\n<tr><td>Résistance R</td><td>Z = R</td><td>U = R · I</td><td>0 (en phase)</td></tr>\n<tr><td>Inductance L (bobine)</td><td>Z = Lω</td><td>U = Lω · I</td><td>+π/2 (le courant est en retard de 90°)</td></tr>\n<tr><td>Condensateur C</td><td>Z = 1/(Cω)</td><td>U = I/(Cω)</td><td>−π/2 (le courant est en avance de 90°)</td></tr></tbody></table>\n<div class=\"exemple\"><b>Exemple :</b> une bobine de L = 0,1 H sur le réseau 50 Hz a une impédance Z = Lω = 0,1 × 314 ≈ 31,4 Ω. Sous 230 V, elle laisse passer I = U / Z = 230 / 31,4 ≈ 7,3 A.</div>\n<div class=\"attention\"><b>À retenir :</b> plus la fréquence augmente, plus l'impédance d'une bobine augmente (Lω), et plus celle d'un condensateur diminue (1/Cω).</div>"
            },
            {
              "titre": "Les puissances et le facteur de puissance",
              "html": "<ul><li><b>Puissance active</b> : <code>P = U · I · cos φ</code>, en watts (W). C'est la puissance réellement transformée (chaleur, travail).</li>\n<li><b>Puissance réactive</b> : <code>Q = U · I · sin φ</code>, en voltampères réactifs (var). Elle sert à magnétiser les bobines, sans travail utile.</li>\n<li><b>Puissance apparente</b> : <code>S = √(P² + Q²) = U · I</code>, en voltampères (VA).</li></ul>\n<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Triangle des puissances : P sur le côté horizontal, Q sur le côté vertical, S sur l'hypoténuse, l'angle φ entre P et S.\" style=\"width:100%;min-width:280px;max-width:320px;font-family:var(--f-mono);font-size:13px\">\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M30 140H250V40Z\"/><path d=\"M238 140V128H250\"/><path d=\"M90 140A60 60 0 0 0 85 116\"/></g>\n<g fill=\"var(--ink)\" stroke=\"none\"><text x=\"130\" y=\"160\">P (W)</text><text x=\"258\" y=\"95\">Q (var)</text><text x=\"110\" y=\"80\">S (VA)</text><text x=\"96\" y=\"134\">φ</text></g>\n</svg></div>\n<p><b>cos φ</b> s'appelle le <b>facteur de puissance</b>. Un cos φ faible entraîne :</p>\n<ul><li>une augmentation du courant en ligne, donc des pertes ;</li><li>une consommation plus importante d'énergie réactive.</li></ul>\n<p><b>Pour relever le facteur de puissance</b>, on branche un condensateur C <b>en parallèle</b> avec la charge :</p>\n<p><code>C = P · (tan φ − tan φ') / (U² · ω)</code></p>\n<p>avec φ le déphasage avant, et φ' le déphasage voulu après.</p>\n<div class=\"exemple\"><b>Exemple :</b> un moteur absorbe P = 2 000 W sous 230 V, 50 Hz, avec cos φ = 0,7. On veut cos φ' = 0,95.<br>tan φ = tan(arccos 0,7) ≈ 1,020 et tan φ' = tan(arccos 0,95) ≈ 0,329.<br>C = 2 000 × (1,020 − 0,329) / (230² × 314) ≈ 8,3 × 10⁻⁵ F ≈ <b>83 µF</b>.</div>"
            },
            {
              "titre": "Exercice du cahier : somme de deux courants (Fresnel)",
              "html": "<p>Le cahier (partie A) part de deux courants de déphasages <b>−π/3 = −60°</b> et <b>−π/6 = −30°</b>, d'amplitudes 7√2 A et 9√2 A, soit des valeurs efficaces de <b>7 A</b> et <b>9 A</b>. L'échelle choisie est 1 cm = 2 A.</p>\n<p><b>Méthode juste pour I = I1 + I2 :</b></p>\n<ol><li>Tracer I1 : longueur 7 A, soit 3,5 cm, à −60° (sous l'axe horizontal).</li>\n<li>Au bout de I1, tracer I2 : longueur 9 A, soit 4,5 cm, à −30°, c'est-à-dire en gardant son angle par rapport à l'horizontale.</li>\n<li>Le vecteur qui va de l'origine au bout de I2 est I. On mesure environ 7,7 cm, soit <b>I ≈ 15,5 A</b>, à environ <b>−43°</b>.</li></ol>\n<div class=\"exemple\"><b>Vérification par les complexes :</b><br>I1 = 7 cos(−60°) + j · 7 sin(−60°) = 3,50 − 6,06 j<br>I2 = 9 cos(−30°) + j · 9 sin(−30°) = 7,79 − 4,50 j<br>I = 11,29 − 10,56 j, donc |I| = √(11,29² + 10,56²) ≈ <b>15,5 A</b> et φ = arctan(−10,56 / 11,29) ≈ <b>−43°</b>.</div>\n<div class=\"attention\"><b>Deux points à corriger dans le cahier :</b><br>\n1. Les vecteurs de Fresnel ont pour longueur la <b>valeur efficace</b> (7 A et 9 A). 9,89 A et 12,72 A sont les amplitudes Î (et 9√2 = 12,73, pas 12,72).<br>\n2. Sur le dessin, I2 fait un angle de 90° avec I1. Or −30° − (−60°) = <b>30°</b> : les deux vecteurs ne sont écartés que de 30°. Le résultat « 16 A » vient de cet angle de 90°.</div>\n<p><small>L'énoncé de la partie A n'est pas sur la photo : si la question demandait autre chose que I1 + I2, la méthode reste la même.</small></p>"
            }
          ],
          "pointsCles": [
            "u(t) = U√2 · sin(ωt + φ) : U est la valeur efficace, Û = U√2 l'amplitude.",
            "ω = 2πf = 2π/T ; à 50 Hz, T = 20 ms et ω ≈ 314 rad/s.",
            "Vecteur de Fresnel : longueur = valeur efficace, angle = phase à l'origine.",
            "Origine des phases : le courant en série, la tension en parallèle.",
            "Loi d'Ohm en alternatif : U = Z · I, avec Z = R, Lω ou 1/(Cω).",
            "P = U·I·cos φ (W), Q = U·I·sin φ (var), S = U·I = √(P² + Q²) (VA).",
            "Un condensateur en parallèle relève le cos φ : C = P(tan φ − tan φ') / (U²ω)."
          ],
          "definitions": [
            {
              "terme": "Valeur efficace",
              "def": "Valeur U telle que u(t) = U√2 · sin(ωt + φ) ; c'est elle que mesure un voltmètre ou un ampèremètre."
            },
            {
              "terme": "Pulsation ω",
              "def": "Vitesse angulaire de la sinusoïde, en rad/s : ω = 2πf."
            },
            {
              "terme": "Phase à l'origine φ",
              "def": "Angle de la sinusoïde à l'instant t = 0, en radians."
            },
            {
              "terme": "Impédance Z",
              "def": "Rapport U / I en valeurs efficaces pour un récepteur en alternatif, en ohms."
            },
            {
              "terme": "Facteur de puissance",
              "def": "cos φ = P / S : plus il est proche de 1, moins il y a de pertes en ligne."
            },
            {
              "terme": "Puissance réactive Q",
              "def": "Q = U·I·sin φ, en var : puissance échangée par les bobines et condensateurs, sans travail utile."
            }
          ],
          "flashcards": [
            {
              "q": "Quel lien entre amplitude Û et valeur efficace U ?",
              "r": "Û = U√2 (et donc U = Û / √2)."
            },
            {
              "q": "À 50 Hz, combien vaut la période T ?",
              "r": "T = 1 / 50 = 0,02 s = 20 ms."
            },
            {
              "q": "Quelle est la longueur d'un vecteur de Fresnel ?",
              "r": "La valeur efficace de la grandeur."
            },
            {
              "q": "Impédance d'une bobine L ?",
              "r": "Z = Lω, et le courant est en retard de 90° sur la tension."
            },
            {
              "q": "Impédance d'un condensateur C ?",
              "r": "Z = 1/(Cω), et le courant est en avance de 90° sur la tension."
            },
            {
              "q": "Formule de la puissance active ?",
              "r": "P = U · I · cos φ, en watts."
            },
            {
              "q": "Formule de la puissance apparente ?",
              "r": "S = U · I = √(P² + Q²), en VA."
            },
            {
              "q": "Comment relever un facteur de puissance trop faible ?",
              "r": "On branche un condensateur en parallèle : C = P(tan φ − tan φ') / (U²ω)."
            },
            {
              "q": "Quelle origine des phases en série ? En parallèle ?",
              "r": "En série : le courant. En parallèle : la tension."
            }
          ],
          "quiz": [
            {
              "q": "Une tension a une valeur efficace de 230 V. Son amplitude vaut environ…",
              "choix": [
                "325 V",
                "163 V",
                "230 V",
                "460 V"
              ],
              "bonne": 0,
              "explication": "Û = U√2 = 230 × 1,414 ≈ 325 V."
            },
            {
              "q": "À la fréquence f = 50 Hz, la pulsation ω vaut environ…",
              "choix": [
                "314 rad/s",
                "50 rad/s",
                "157 rad/s",
                "20 rad/s"
              ],
              "bonne": 0,
              "explication": "ω = 2πf = 2 × 3,14 × 50 ≈ 314 rad/s."
            },
            {
              "q": "π/3 radians correspondent à…",
              "choix": [
                "60°",
                "30°",
                "45°",
                "90°"
              ],
              "bonne": 0,
              "explication": "π rad = 180°, donc π/3 = 180/3 = 60°."
            },
            {
              "q": "Pour une résistance pure, le déphasage entre U et I vaut…",
              "choix": [
                "0",
                "π/2",
                "−π/2",
                "π"
              ],
              "bonne": 0,
              "explication": "Une résistance ne déphase pas : courant et tension sont en phase."
            },
            {
              "q": "Quand la fréquence augmente, l'impédance d'un condensateur…",
              "choix": [
                "diminue",
                "augmente",
                "ne change pas",
                "s'annule toujours"
              ],
              "bonne": 0,
              "explication": "Z = 1/(Cω) : si ω augmente, Z diminue."
            },
            {
              "q": "U = 230 V, I = 10 A, cos φ = 0,8. La puissance active vaut…",
              "choix": [
                "1 840 W",
                "2 300 W",
                "1 380 W",
                "2 875 W"
              ],
              "bonne": 0,
              "explication": "P = U·I·cos φ = 230 × 10 × 0,8 = 1 840 W."
            },
            {
              "q": "P = 3 kW et Q = 4 kvar. La puissance apparente S vaut…",
              "choix": [
                "5 kVA",
                "7 kVA",
                "1 kVA",
                "12 kVA"
              ],
              "bonne": 0,
              "explication": "S = √(P² + Q²) = √(9 + 16) = √25 = 5 kVA."
            },
            {
              "q": "Pour relever le facteur de puissance, on ajoute…",
              "choix": [
                "un condensateur en parallèle",
                "une bobine en série",
                "une résistance en parallèle",
                "un condensateur en série"
              ],
              "bonne": 0,
              "explication": "Le condensateur en parallèle fournit l'énergie réactive que consomment les bobines : le courant en ligne baisse."
            },
            {
              "q": "Dans un montage en parallèle, on prend comme origine des phases…",
              "choix": [
                "la tension",
                "le courant",
                "la puissance",
                "la fréquence"
              ],
              "bonne": 0,
              "explication": "En parallèle, tous les dipôles ont la même tension : c'est la référence commune."
            }
          ],
          "examen": [
            {
              "titre": "Lecture d'une tension sinusoïdale",
              "enonce": "<p>Une tension alternative a pour expression instantanée :</p><p><code>u(t) = 340 · sin(100π·t + π/4)</code> (u en volts, t en secondes).</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer la valeur efficace U de cette tension.",
                  "reponse": 240.4,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>L'amplitude est Û = 340 V. Or <code>Û = U√2</code>, donc <code>U = Û / √2 = 340 / 1,414</code>.</p><p><b>U ≈ 240,4 V</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la fréquence f.",
                  "reponse": 50,
                  "unite": "Hz",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>La pulsation est ω = 100π rad/s. Or <code>ω = 2πf</code>, donc <code>f = ω / (2π) = 100π / (2π)</code>.</p><p><b>f = 50 Hz</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la période T, en millisecondes.",
                  "reponse": 20,
                  "unite": "ms",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>T = 1 / f = 1 / 50 = 0,02 s</code></p><p><b>T = 20 ms</b></p>"
                },
                {
                  "type": "num",
                  "q": "Donner la phase à l'origine φ en degrés.",
                  "reponse": 45,
                  "unite": "°",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>φ = π/4 rad. Conversion : degrés = radians × 180 / π, donc <code>φ = (π/4) × 180/π = 180/4</code>.</p><p><b>φ = 45°</b></p>"
                }
              ]
            },
            {
              "titre": "Impédance d'une bobine et d'un condensateur",
              "enonce": "<p>Sur le réseau 230 V, 50 Hz, on branche successivement :</p><ul><li>une bobine parfaite d'inductance L = 0,2 H ;</li><li>un condensateur de capacité C = 47 µF.</li></ul><p>On prend ω = 2π × 50 ≈ 314,16 rad/s.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer l'impédance Z de la bobine.",
                  "reponse": 62.83,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Pour une bobine : <code>Z = Lω = 0,2 × 314,16</code></p><p><b>Z ≈ 62,8 Ω</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer le courant efficace I absorbé par la bobine sous 230 V.",
                  "reponse": 3.66,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Loi d'Ohm en valeurs efficaces : <code>I = U / Z = 230 / 62,83</code></p><p><b>I ≈ 3,66 A</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer l'impédance Z du condensateur.",
                  "reponse": 67.7,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Pour un condensateur : <code>Z = 1 / (Cω) = 1 / (47 × 10⁻⁶ × 314,16)</code></p><p><b>Z ≈ 67,7 Ω</b></p><div class=\"attention\">Ne pas oublier de convertir les µF en F : 47 µF = 47 × 10⁻⁶ F.</div>"
                },
                {
                  "type": "qcm",
                  "q": "Pour le condensateur, le courant est…",
                  "choix": [
                    "en avance de 90° sur la tension",
                    "en retard de 90° sur la tension",
                    "en phase avec la tension",
                    "en avance de 45° sur la tension"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Pour un condensateur, φ = −π/2 : le courant est en <b>avance</b> de 90° sur la tension. Pour la bobine, il est en retard de 90°.</p>"
                }
              ]
            },
            {
              "titre": "Puissances et relèvement du facteur de puissance",
              "enonce": "<p>Un moteur monophasé absorbe une puissance active P = 3 000 W sous U = 230 V, 50 Hz, avec un facteur de puissance cos φ = 0,75 (inductif).</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer le courant efficace I absorbé par le moteur.",
                  "reponse": 17.39,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>P = U · I · cos φ</code>, donc <code>I = P / (U · cos φ) = 3 000 / (230 × 0,75) = 3 000 / 172,5</code></p><p><b>I ≈ 17,4 A</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la puissance apparente S.",
                  "reponse": 4000,
                  "unite": "VA",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>S = U · I = 230 × 17,39</code>, ou directement <code>S = P / cos φ = 3 000 / 0,75</code></p><p><b>S = 4 000 VA</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la puissance réactive Q.",
                  "reponse": 2646,
                  "unite": "var",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>Q = √(S² − P²) = √(4 000² − 3 000²) = √7 000 000</code></p><p>On peut aussi calculer sin φ = √(1 − 0,75²) ≈ 0,661 et <code>Q = U · I · sin φ</code>.</p><p><b>Q ≈ 2 646 var</b></p>"
                },
                {
                  "type": "num",
                  "q": "On veut relever le facteur de puissance à cos φ' = 0,93. Calculer la capacité C du condensateur à brancher en parallèle, en µF.",
                  "reponse": 87.9,
                  "unite": "µF",
                  "tol": 0.03,
                  "points": 2,
                  "corrige": "<p>Formule : <code>C = P · (tan φ − tan φ') / (U² · ω)</code></p><p>tan φ = tan(arccos 0,75) ≈ 0,882 ; tan φ' = tan(arccos 0,93) ≈ 0,395.</p><p><code>C = 3 000 × (0,882 − 0,395) / (230² × 314,16) = 1 460 / 16 619 000</code></p><p><b>C ≈ 8,79 × 10⁻⁵ F ≈ 88 µF</b></p><div class=\"attention\">Le condensateur se branche <b>en parallèle</b> avec la charge. Garder 3 décimales sur les tangentes pour ne pas trop arrondir.</div>"
                }
              ]
            }
          ]
        },
        {
          "id": "complexes-monophase",
          "titre": "Nombres complexes en monophasé",
          "date": "2026-10-07",
          "source": "Exercices « Circuits monophasés », exercice 8 (notes manuscrites)",
          "resume": "En monophasé, on représente un courant ou une tension par un nombre complexe : un module (la valeur) et un argument (le déphasage φ). Pour additionner ou soustraire des courants, on passe en forme algébrique a + bj, on calcule partie réelle et partie imaginaire séparément, puis on revient au module et à l'argument si besoin.",
          "sections": [
            {
              "titre": "Méthode : de la forme polaire à la forme algébrique",
              "html": "<p>Un courant <b>I</b> est représenté par un vecteur dans le plan complexe : l'axe horizontal est l'axe <b>réel</b> (Re, lié au cosinus), l'axe vertical est l'axe <b>imaginaire</b> (Im, lié au sinus). L'angle entre le vecteur et l'axe réel est le déphasage <b>φ</b>.</p>\n<p><b>Forme polaire :</b> on connaît le module |I| et l'angle φ.<br><b>Forme algébrique :</b> <code>I = a + bj</code>, avec</p>\n<p><code>a = |I| · cos φ</code> (partie réelle)<br><code>b = |I| · sin φ</code> (partie imaginaire)</p>\n<p>En électrotechnique, on note <b>j</b> (et non i) le nombre tel que j² = −1, pour ne pas le confondre avec l'intensité.</p>\n<p><b>Retour à la forme polaire :</b> <code>|I| = √(a² + b²)</code> et <code>tan φ = b / a</code> (attention au quadrant si a &lt; 0).</p><div class=\"attention\"><b>Attention au quadrant :</b> la calculatrice donne arctan(b / a) entre −90° et +90°. Si <b>a &lt; 0</b>, le vecteur est à gauche de l'axe imaginaire : il faut ajouter (ou retirer) 180°. Exemple : I2 = −√6 − √2 j donne arctan(√2/√6) = 30°, mais comme a &lt; 0 et b &lt; 0, le vrai argument est 30° − 180° = <b>−150°</b> (= −5π/6), ce qui correspond bien à l'énoncé.</div>\n<p><b>Additionner ou soustraire :</b> on ne peut pas additionner les modules directement (les courants ne sont pas en phase). On passe en forme algébrique et on additionne <b>les parties réelles entre elles</b> et <b>les parties imaginaires entre elles</b>. Penser à garder le <b>j</b> sur la partie imaginaire jusqu'au bout.</p><div class=\"exemple\"><b>Exemple concret :</b> deux personnes tirent une caisse avec une force de 100 N chacune, mais l'une tire vers l'est et l'autre vers le nord. La caisse ne reçoit pas 200 N : elle reçoit environ 141 N, en diagonale. C'est pareil pour deux courants déphasés : on additionne des <b>vecteurs</b>, pas des longueurs.</div><div class=\"exemple\"><b>Exemple chiffré simple :</b> I1 = 3 + 4j et I2 = 1 − 2j.<br>I1 + I2 = (3 + 1) + (4 − 2) j = <b>4 + 2j</b>.<br>I1 − I2 = (3 − 1) + (4 − (−2)) j = <b>2 + 6j</b>.<br>Module de I1 : √(3² + 4²) = √25 = <b>5</b>.</div>\n<p><b>Valeurs à connaître :</b></p>\n<table><thead><tr><th>φ</th><th>cos φ</th><th>sin φ</th></tr></thead><tbody>\n<tr><td>π/6 (30°)</td><td>√3/2 ≈ 0,866</td><td>1/2</td></tr>\n<tr><td>π/4 (45°)</td><td>√2/2 ≈ 0,707</td><td>√2/2</td></tr>\n<tr><td>π/3 (60°)</td><td>1/2</td><td>√3/2 ≈ 0,866</td></tr>\n<tr><td>5π/6 (150°)</td><td>−√3/2</td><td>1/2</td></tr></tbody></table>\n<p>Et pour un angle négatif : <code>cos(−φ) = cos φ</code>, <code>sin(−φ) = −sin φ</code>.</p>"
            },
            {
              "titre": "Exercice 8 : calcul de I3 = I1 − I2",
              "html": "<p><b>Données :</b> I1 a pour module 4√2 et pour argument −π/3 ; I2 a pour module 2√2 et pour argument −5π/6. On cherche <code>I3 = I1 − I2</code>.</p>\n<details><summary>Voir le corrigé</summary>\n<p><b>I1 en forme algébrique :</b><br>a = 4√2 · cos(−π/3) = 4√2 · 1/2 = 2√2 ≈ 2,83<br>b = 4√2 · sin(−π/3) = −4√2 · √3/2 = −2√6 ≈ −4,90<br><code>I1 = 2,83 − 4,90 j</code></p>\n<p><b>I2 en forme algébrique :</b><br>a = 2√2 · cos(−5π/6) = −√6 ≈ −2,45<br>b = 2√2 · sin(−5π/6) = −√2 ≈ −1,41<br><code>I2 = −√6 − √2 j</code></p>\n<p><b>I3 = I1 − I2 :</b><br>= (2√2 − 2√6 j) − (−√6 − √2 j)<br>= (2√2 + √6) + (−2√6 + √2) j<br>= (2,828 + 2,449) + (−4,899 + 1,414) j<br>= 5,277 − 3,485 j<br><code>I3 ≈ 5,28 − 3,48 j</code></p>\n<p><b>Module et argument (pour aller plus loin) :</b><br>|I3| = √(5,28² + 3,48²) = √40 = 2√10 ≈ <b>6,32</b><br>φ3 = arctan(−3,48 / 5,28) ≈ <b>−33,4°</b> (≈ −0,58 rad)</p>\n<p><b>Attention dans la copie :</b> la partie imaginaire vaut −2√6 + √2 ≈ −4,899 + 1,414 = <b>−3,485 ≈ −3,48</b> (et non −3,38), et il ne faut pas oublier le <b>j</b> à la fin : <code>I3 = 5,28 − 3,48 j</code>.</p><div class=\"attention\"><b>Attention aux arrondis :</b> si tu arrondis trop tôt (−4,90 + 1,41), tu trouves −3,49 au lieu de −3,48. Garde 3 décimales (ou les valeurs exactes avec √) pendant le calcul, et n'arrondis qu'au résultat final.</div><p><b>Vérification par le module :</b> en valeurs exactes, (2√2 + √6)² + (√2 − 2√6)² = (14 + 8√3) + (26 − 8√3) = 40. Donc |I3| = √40 = 2√10 ≈ 6,32 : le calcul est cohérent.</p>\n</details>"
            }
          ],
          "pointsCles": [
            "Forme algébrique : I = a + bj avec a = |I|·cos φ et b = |I|·sin φ.",
            "On additionne / soustrait les parties réelles entre elles et les parties imaginaires entre elles.",
            "Ne jamais additionner des modules de courants déphasés.",
            "Retour en polaire : |I| = √(a² + b²), tan φ = b/a.",
            "Le j reste collé à la partie imaginaire jusqu'au résultat final."
          ],
          "definitions": [
            {
              "terme": "Forme algébrique",
              "def": "Écriture d'un complexe sous la forme a + bj (partie réelle a, partie imaginaire b)."
            },
            {
              "terme": "Forme polaire",
              "def": "Écriture d'un complexe par son module |I| et son argument φ."
            },
            {
              "terme": "Déphasage φ",
              "def": "Décalage angulaire entre deux grandeurs sinusoïdales (par exemple entre la tension et le courant). Dans le plan complexe, la grandeur de référence est sur l'axe réel, et φ est l'angle entre le vecteur et cet axe (l'argument)."
            },
            {
              "terme": "j",
              "def": "Nombre imaginaire tel que j² = −1 (noté j en électricité pour ne pas le confondre avec i, l'intensité)."
            },
            {
              "terme": "Module |I|",
              "def": "Longueur du vecteur qui représente la grandeur, c'est-à-dire sa valeur (efficace en électrotechnique). |I| = √(a² + b²)."
            },
            {
              "terme": "Argument",
              "def": "Angle φ entre le vecteur et l'axe réel. Pour I = a + bj, tan φ = b / a (attention au quadrant si a < 0)."
            }
          ],
          "flashcards": [
            {
              "q": "Comment calculer la partie réelle a d'un courant de module |I| et de déphasage φ ?",
              "r": "a = |I| · cos φ."
            },
            {
              "q": "Comment calculer la partie imaginaire b ?",
              "r": "b = |I| · sin φ."
            },
            {
              "q": "Comment soustraire deux courants complexes ?",
              "r": "Réel − réel et imaginaire − imaginaire, en forme algébrique."
            },
            {
              "q": "Comment retrouver le module à partir de a + bj ?",
              "r": "|I| = √(a² + b²)."
            },
            {
              "q": "Pourquoi note-t-on j et pas i en électrotechnique ?",
              "r": "Pour ne pas confondre avec i, l'intensité."
            },
            {
              "q": "cos(−π/3) et sin(−π/3) ?",
              "r": "cos(−π/3) = 1/2 ; sin(−π/3) = −√3/2."
            },
            {
              "q": "Ex. 8 : résultat de I3 = I1 − I2 ?",
              "r": "I3 ≈ 5,28 − 3,48 j (module ≈ 6,32, argument ≈ −33,4°)."
            },
            {
              "q": "Pourquoi ne peut-on pas additionner directement les modules de deux courants ?",
              "r": "Parce qu'ils ne sont pas en phase : on additionne des vecteurs (comme deux forces dans des directions différentes), pas des longueurs."
            },
            {
              "q": "I1 = 3 + 4j, I2 = 1 − 2j. Calcule I1 + I2 et |I1|.",
              "r": "I1 + I2 = 4 + 2j ; |I1| = √(9 + 16) = 5."
            },
            {
              "q": "Quand faut-il corriger l'angle donné par arctan(b / a) ?",
              "r": "Quand a < 0 : on ajoute ou retire 180° (le vecteur est à gauche de l'axe imaginaire)."
            },
            {
              "q": "cos(−5π/6) et sin(−5π/6) ?",
              "r": "cos(−5π/6) = −√3/2 ; sin(−5π/6) = −1/2."
            }
          ],
          "quiz": [
            {
              "q": "Un courant a un module de 10 A et un argument de 60°. Sa partie réelle vaut…",
              "choix": [
                "5 A",
                "8,66 A",
                "10 A",
                "0 A"
              ],
              "bonne": 0,
              "explication": "a = |I| · cos φ = 10 × cos 60° = 10 × 0,5 = 5 A."
            },
            {
              "q": "Même courant (10 A, 60°). Sa partie imaginaire vaut…",
              "choix": [
                "8,66 A",
                "5 A",
                "−8,66 A",
                "17,3 A"
              ],
              "bonne": 0,
              "explication": "b = |I| · sin φ = 10 × sin 60° = 10 × 0,866 ≈ 8,66 A."
            },
            {
              "q": "I1 = 3 + 4j et I2 = 1 − 2j. Que vaut I1 − I2 ?",
              "choix": [
                "2 + 6j",
                "2 + 2j",
                "4 + 2j",
                "2 − 6j"
              ],
              "bonne": 0,
              "explication": "Réel : 3 − 1 = 2. Imaginaire : 4 − (−2) = 6. Donc 2 + 6j."
            },
            {
              "q": "Module de I = 3 + 4j ?",
              "choix": [
                "5",
                "7",
                "1",
                "25"
              ],
              "bonne": 0,
              "explication": "|I| = √(3² + 4²) = √25 = 5."
            },
            {
              "q": "Pourquoi note-t-on j (et non i) en électrotechnique ?",
              "choix": [
                "Pour ne pas confondre avec i, l'intensité",
                "Parce que j² = 1",
                "Parce que j est réel",
                "Pour désigner le courant de court-circuit"
              ],
              "bonne": 0,
              "explication": "j est le nombre tel que j² = −1, noté j pour éviter la confusion avec le courant i."
            },
            {
              "q": "Exercice 8 : quelle est la bonne valeur de I3 = I1 − I2 ?",
              "choix": [
                "5,28 − 3,48 j",
                "5,28 − 3,38 j",
                "0,38 − 6,31 j",
                "5,28 + 3,48 j"
              ],
              "bonne": 0,
              "explication": "(2√2 + √6) + (−2√6 + √2) j ≈ 5,28 − 3,48 j. 0,38 − 6,31 j serait I1 + I2 (on aurait additionné au lieu de soustraire)."
            },
            {
              "q": "I = −2 − 2j. Quel est son argument ?",
              "choix": [
                "−135°",
                "45°",
                "−45°",
                "135°"
              ],
              "bonne": 0,
              "explication": "arctan(−2 / −2) = 45°, mais a < 0 et b < 0 : le vecteur est en bas à gauche, donc 45° − 180° = −135°."
            }
          ],
          "examen": [
            {
              "titre": "Somme de deux courants déphasés",
              "enonce": "<p>Deux courants arrivent sur un même nœud et s'additionnent : I = I1 + I2.</p><ul><li>I1 a pour module 6 A et pour argument −π/6 (−30°) ;</li><li>I2 a pour module 4 A et pour argument π/3 (60°).</li></ul><p>On donne cos 30° = √3/2 ≈ 0,866 et sin 30° = 0,5.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer la partie réelle a1 de I1.",
                  "reponse": 5.2,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>a1 = |I1| · cos φ1 = 6 × cos(−30°) = 6 × 0,866</code></p><p><b>a1 ≈ 5,20 A</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la partie imaginaire b1 de I1.",
                  "reponse": -3,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>b1 = |I1| · sin φ1 = 6 × sin(−30°) = −6 × 0,5</code></p><p><b>b1 = −3 A</b></p><div class=\"attention\">sin(−φ) = −sin φ : la partie imaginaire est négative.</div>"
                },
                {
                  "type": "libre",
                  "q": "Écrire I2 puis I = I1 + I2 en forme algébrique.",
                  "points": 1,
                  "attendu": "I2 ≈ 2 + 3,46j ; I ≈ 7,20 + 0,46j",
                  "corrige": "<p><code>I2 = 4 × cos 60° + j · 4 × sin 60° = 2 + 3,46 j</code></p><p>On additionne les parties réelles entre elles et les parties imaginaires entre elles :</p><p><code>I = (5,196 + 2) + (−3 + 3,464) j</code></p><p><b>I ≈ 7,20 + 0,46 j</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer le module |I| du courant total.",
                  "reponse": 7.21,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p><code>|I| = √(a² + b²) = √(7,196² + 0,464²) = √52,0</code></p><p><b>|I| ≈ 7,21 A</b></p><div class=\"attention\">Ce n'est pas 6 + 4 = 10 A : on n'additionne jamais les modules de courants déphasés.</div>"
                },
                {
                  "type": "num",
                  "q": "Calculer l'argument φ du courant total, en degrés.",
                  "reponse": 3.7,
                  "unite": "°",
                  "tol": 0.05,
                  "points": 2,
                  "corrige": "<p>La partie réelle est positive, donc <code>φ = arctan(b / a) = arctan(0,464 / 7,196)</code>.</p><p><b>φ ≈ 3,7°</b></p>"
                }
              ]
            },
            {
              "titre": "Différence de deux courants et piège du quadrant",
              "enonce": "<p>On donne, en forme algébrique : I1 = 3 + 2j et I2 = 5 + 6j (en ampères). On cherche I3 = I1 − I2.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Écrire I3 en forme algébrique.",
                  "points": 1,
                  "attendu": "I3 = −2 − 4j",
                  "corrige": "<p>Réel : 3 − 5 = −2. Imaginaire : 2 − 6 = −4.</p><p><b>I3 = −2 − 4 j</b></p><p>Le j reste collé à la partie imaginaire jusqu'au bout.</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer le module |I3|.",
                  "reponse": 4.472,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>|I3| = √((−2)² + (−4)²) = √(4 + 16) = √20</code></p><p><b>|I3| ≈ 4,47 A</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer l'argument de I3, en degrés (entre −180° et 180°).",
                  "reponse": -116.6,
                  "unite": "°",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>La calculatrice donne <code>arctan(−4 / −2) = arctan(2) ≈ 63,4°</code>.</p><p>Mais a = −2 &lt; 0 et b = −4 &lt; 0 : le vecteur est en bas à gauche. Il faut retirer 180° :</p><p><code>φ3 = 63,4° − 180°</code></p><p><b>φ3 ≈ −116,6°</b></p><div class=\"attention\">Piège classique : répondre 63,4° (le vecteur serait alors en haut à droite).</div>"
                },
                {
                  "type": "qcm",
                  "q": "Un courant I = −3 + 3j a pour argument…",
                  "choix": [
                    "135°",
                    "−45°",
                    "45°",
                    "−135°"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>arctan(3 / −3) = −45° sur la calculatrice. Comme a &lt; 0 et b &gt; 0, le vecteur est en haut à gauche : −45° + 180° = <b>135°</b>.</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "exercices-regime-continu",
          "titre": "Exercices : circuits en régime continu (feuille 1 à 14)",
          "type": "Exercices",
          "date": "2026-10-08",
          "source": "Feuille d'exercices du prof (photos envoyées par Kyk's)",
          "resume": "Cette feuille fait pratiquer les outils de base des circuits en courant continu. On applique la loi des nœuds et la loi des mailles, puis les ponts diviseurs de tension et de courant, en vérifiant à chaque fois s'ils ont le droit d'être utilisés. On calcule des résistances équivalentes et on lit la valeur d'une résistance ou d'un générateur sur sa caractéristique U = f(I). Enfin, on raisonne sans calcul sur la luminosité de lampes.",
          "sections": [
            {
              "titre": "Rappels : lois de Kirchhoff, diviseurs, associations de résistances, caractéristiques",
              "html": "\n<p><b>Loi des nœuds :</b> à un nœud, <code>somme des courants qui arrivent = somme des courants qui repartent</code>. On lit le sens sur la flèche ; un courant négatif circule simplement dans l'autre sens.</p>\n<p><b>Loi des mailles :</b> on choisit un sens de parcours. Une tension dont la flèche va dans le sens du parcours compte <b>+</b>, une flèche dans l'autre sens compte <b>−</b>. La somme fait 0. Rappel : la pointe de la flèche indique le point dont on prend le potentiel en premier (flèche de B vers A pour <code>U_AB = V_A − V_B</code>).</p>\n<p><b>Loi d'Ohm</b> (convention récepteur) : <code>U = R·I</code>.</p>\n<p><b>Associations :</b></p>\n<ul><li>série : <code>Req = R1 + R2 + …</code> (même courant) ;</li>\n<li>parallèle : <code>1/Req = 1/R1 + 1/R2 + …</code>, soit pour deux résistances <code>R1 // R2 = R1·R2 / (R1 + R2)</code> (même tension) ; deux résistances égales en parallèle donnent R/2.</li></ul>\n<p><b>Pont diviseur de tension</b> (résistances en série, <b>même courant</b>) : <code>U1 = U·R1 / (R1 + R2)</code>.</p>\n<p><b>Pont diviseur de courant</b> (deux résistances en parallèle) : <code>I1 = I·R2 / (R1 + R2)</code> : c'est <b>l'autre</b> résistance qui est au numérateur.</p>\n<p><b>Caractéristique U = f(I)</b> : pour une résistance, c'est une droite qui passe par l'origine et dont la pente vaut R. Pour un générateur réel, c'est une droite descendante <code>U = E − r·I</code>.</p>\n<div class=\"attention\"><b>Condition du pont diviseur de tension :</b> les deux résistances doivent être parcourues par le <b>même courant</b>. Si une autre branche prend du courant au point milieu, la formule simple ne marche plus.</div>"
            },
            {
              "titre": "Exercice 1 : loi des nœuds",
              "html": "\n<p><b>Énoncé :</b> sur chaque schéma, trouver I4. On écrit « ce qui arrive = ce qui repart » en lisant les flèches de la feuille.</p>\n<ul>\n<li><b>Nœud A</b> : I1 = 2 A et I4 arrivent, I2 = 1 A repart. <code>2 + I4 = 1</code> donc <b>I4 = −1 A</b>.</li>\n<li><b>Nœud B</b> : I1 = 2 A et I2 = 1 A arrivent, I3 = 4 A et I4 repartent. <code>2 + 1 = 4 + I4</code> donc <b>I4 = −1 A</b>.</li>\n<li><b>Nœud C</b> : les quatre flèches pointent vers le nœud. <code>2 + 1 + 2 + I4 = 0</code> donc <b>I4 = −5 A</b>.</li>\n<li><b>Nœud D</b> : I1 = 3 A et I3 = 4 A arrivent, I2 = −1 A et I4 repartent. <code>3 + 4 = −1 + I4</code> donc <b>I4 = 8 A</b>.</li>\n<li><b>Nœuds E et F</b> : on appelle I le courant dans le fil de E vers F.<br>En E : I1 = 2 A arrive, I0 = 5 A et I repartent. <code>2 = 5 + I</code> donc <b>I = −3 A</b> (le courant va en réalité de F vers E).<br>En F : I et I3 = 4 A arrivent, I2 = −3 A et I4 repartent. <code>−3 + 4 = −3 + I4</code> donc <b>I4 = 4 A</b>.</li>\n</ul>\n<div class=\"exemple\"><b>Vérification :</b> les réponses écrites au crayon sur la feuille (−1, −1, −5, 8 et 4) sont justes. Un résultat négatif n'est pas une erreur : le courant circule dans le sens contraire de la flèche.</div>"
            },
            {
              "titre": "Exercice 2 : loi des mailles",
              "html": "\n<p><b>Énoncé :</b> calculer U2 dans trois mailles. Pour chaque maille, on fait le tour et on compte + les flèches dans le sens du parcours, − les autres.</p>\n<p><b>Maille 1</b> (D1 à gauche, D2 en haut, D3 en bas, fil à droite). D'après la feuille : U1 = 7 V fléchée vers le bas, U2 fléchée vers la gauche, U3 = 4 V fléchée vers la droite.<br>\nOn tourne dans le sens inverse des aiguilles d'une montre (on descend à gauche, on va à droite en bas, on monte à droite, on revient à gauche en haut) : les trois flèches sont dans le sens du parcours.<br>\n<code>U1 + U3 + U2 = 0</code> donc <code>U2 = −7 − 4</code>, soit <b>U2 = −11 V</b>.</p>\n<p><b>Maille 2</b> (D2 en haut fléchée vers la droite, D3 à droite U3 = −1 V fléchée vers le haut, D4 en bas U4 = 2 V fléchée vers la gauche, D1 à gauche U1 = 7 V fléchée vers le bas).<br>\nSens des aiguilles d'une montre : <code>U2 − U3 + U4 − U1 = 0</code> donc <code>U2 = U1 + U3 − U4 = 7 + (−1) − 2</code>, soit <b>U2 = 4 V</b>.</p>\n<p><b>Maille 3</b> (en haut D4 avec U4 = 2 V et D3 avec U3 = −2 V, toutes deux fléchées vers la droite ; D2 à droite fléchée vers le haut ; D1 en bas U1 = 3 V fléchée vers la gauche ; D5 à gauche U5 = 1 V fléchée vers le bas).<br>\nSens des aiguilles d'une montre : <code>U4 + U3 − U2 + U1 − U5 = 0</code> donc <code>U2 = 2 + (−2) + 3 − 1</code>, soit <b>U2 = 2 V</b>.</p>\n<div class=\"attention\"><b>Annotations au crayon :</b> « 4 V » (maille 2) est juste ; « 2 » (maille 3) est juste, il manque seulement l'unité : <b>2 V</b>. Pour la maille 1, l'annotation se lit « U2 = 11 V » : la valeur 11 est bonne, mais <b>le signe est faux</b>. Avec la flèche dessinée vers la gauche, U2 = <b>−11 V</b>. (Si le petit trait au crayon est un signe moins, alors la réponse est juste.)</div>\n<div class=\"exemple\"><b>Astuce de vérification :</b> donne un potentiel 0 V à un coin et avance de proche en proche. Maille 1 : si le coin en haut à gauche est à 0 V, le bas gauche est à 7 V, le bas droit à 11 V, donc le haut droit aussi ; U2 (pointe à gauche) = 0 − 11 = −11 V.</div>"
            },
            {
              "titre": "Exercice 3 a, b, c : étude de quelques circuits",
              "html": "\n<p><b>a) Déterminer I et I1.</b> Montage : le générateur E en série avec R3, qui alimente R1 // R2. I sort de la borne + de E (la flèche de E pointe vers la gauche, I monte dans le fil de gauche), donc I est positif.</p>\n<ol><li>Résistance équivalente : <code>Req = R3 + R1·R2/(R1 + R2)</code>.</li>\n<li>Loi d'Ohm : <code>I = E / Req</code>, soit <b><code>I = E·(R1 + R2) / (R1·R2 + R1·R3 + R2·R3)</code></b>.</li>\n<li>Diviseur de courant entre R1 et R2 : <code>I1 = I·R2/(R1 + R2)</code>, soit <b><code>I1 = E·R2 / (R1·R2 + R1·R3 + R2·R3)</code></b>.</li></ol>\n<p><b>b) Déterminer I et U.</b> Montage : le générateur E seul (sans résistance en série) alimente deux branches en parallèle : (R1 + R3) et R2. U est la tension aux bornes de R3.</p>\n<ol><li>Les deux branches sont directement sous la tension E.</li>\n<li>Branche du haut : R1 et R3 sont en série, parcourues par le même courant. Diviseur de tension : <b><code>U = E·R3 / (R1 + R3)</code></b>.</li>\n<li><code>Req = R2·(R1 + R3)/(R1 + R2 + R3)</code>, donc <b><code>I = E·(R1 + R2 + R3) / (R2·(R1 + R3))</code></b>. On peut aussi écrire <code>I = E/R2 + E/(R1 + R3)</code>.</li></ol>\n<p><b>c) Déterminer I, U, I1 et I2.</b> E en série avec R ; puis 20R vers la masse ; puis 2R en série ; puis 4R (courant I1) // 12R (courant I2). U est la tension aux bornes de 4R et 12R.</p>\n<ol><li>On réduit depuis la droite : <code>4R // 12R = 48R²/16R = 3R</code> ; <code>2R + 3R = 5R</code> ; <code>5R // 20R = 100R²/25R = 4R</code> ; <code>Req = R + 4R = 5R</code>.</li>\n<li><b><code>I = E/(5R)</code></b>.</li>\n<li>Tension aux bornes de 20R : <code>E − R·I = 4E/5</code>. Courant dans 2R : <code>(4E/5)/(5R) = 4E/(25R)</code>.</li>\n<li><b><code>U = 3R × 4E/(25R) = 12E/25</code></b> (soit 0,48·E).</li>\n<li><b><code>I1 = U/(4R) = 3E/(25R)</code></b> et <b><code>I2 = U/(12R) = E/(25R)</code></b>.</li></ol>\n<div class=\"exemple\"><b>Vérification :</b> I1 + I2 = 4E/(25R), c'est bien le courant dans 2R. Courant dans 20R : (4E/5)/(20R) = E/(25R). Total : 4E/(25R) + E/(25R) = 5E/(25R) = E/(5R) = I.</div>\n<div class=\"attention\"><b>Dans le cahier :</b>\n<ul><li>3a : « I = E × 1/(R2 + R1 + R3) » n'est pas juste : R1 et R2 sont <b>en parallèle</b>, pas en série. Il faut <code>Req = R3 + R1·R2/(R1 + R2)</code>.</li>\n<li>3a : « I1 = E × 1/(R1 + R2) » n'est pas juste non plus : on applique le diviseur de courant, <code>I1 = I·R2/(R1 + R2)</code>, ce qui donne <code>E·R2/(R1·R2 + R1·R3 + R2·R3)</code>.</li>\n<li>L'encadré « I = U × 1/(R1 + R2) ; U = I × (R1 + R2) » ne vaut que pour R1 et R2 en série ; ce n'est pas le cas en 3a.</li>\n<li>3b : « U = E × R3/(R1 + R3) » est <b>juste</b>. Attention, le schéma recopié dans le cahier ajoute une résistance R3 en série avec E : elle n'existe pas sur la feuille (avec elle, la réponse changerait). La valeur de I n'est pas encore écrite.</li>\n<li>3c : sur le schéma du cahier, la résistance verticale est écrite de façon peu lisible ; sur la feuille c'est bien <b>20R</b>.</li></ul></div>"
            },
            {
              "titre": "Exercice 3 d : peut-on utiliser le pont diviseur ?",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 210\" role=\"img\" aria-label=\"Exercice 3d. À gauche : E1 en série avec R1, branché sur R2 (tension U2 vers le haut). À droite : E2 en série avec R4, branché sur R3 (tension U3 vers le haut). Les deux parties ne sont reliées que par le fil du haut ; les fils du bas ne se rejoignent pas.\" style=\"width:100%;min-width:300px;max-width:440px;font-family:var(--f-mono);font-size:13px\">\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\">\n<path d=\"M60 30H380\"/><path d=\"M60 30V50M60 90V112M60 148V180H160V120M160 70V30\"/>\n<path d=\"M280 30V70M280 120V180H380V148M380 112V90M380 50V30\"/>\n<circle cx=\"60\" cy=\"130\" r=\"18\"/><path d=\"M60 112V148\"/><circle cx=\"380\" cy=\"130\" r=\"18\"/><path d=\"M380 112V148\"/>\n</g>\n<g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"50\" y=\"50\" width=\"20\" height=\"40\"/><rect x=\"150\" y=\"70\" width=\"20\" height=\"50\"/><rect x=\"270\" y=\"70\" width=\"20\" height=\"50\"/><rect x=\"370\" y=\"50\" width=\"20\" height=\"40\"/></g>\n<g stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"var(--accent)\">\n<path d=\"M30 150V115\"/><path d=\"M25 120L30 110L35 120Z\"/><path d=\"M410 150V115\"/><path d=\"M405 120L410 110L415 120Z\"/>\n<path d=\"M190 120V75\"/><path d=\"M185 80L190 70L195 80Z\"/><path d=\"M250 120V75\"/><path d=\"M245 80L250 70L255 80Z\"/>\n</g>\n<g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"160\" cy=\"30\" r=\"3.5\"/><circle cx=\"280\" cy=\"30\" r=\"3.5\"/>\n<text x=\"78\" y=\"75\">R1</text><text x=\"8\" y=\"135\">E1</text><text x=\"120\" y=\"100\">R2</text><text x=\"198\" y=\"100\">U2</text>\n<text x=\"222\" y=\"100\">U3</text><text x=\"296\" y=\"100\">R3</text><text x=\"345\" y=\"75\">R4</text><text x=\"414\" y=\"135\">E2</text>\n<text x=\"170\" y=\"200\">pas de fil ici</text></g></svg></div>\n<p><b>Énoncé :</b> déterminer U2 et U3 en fonction de E1, E2, R1, R2, R3 et R4.</p>\n<p><b>Lecture du schéma :</b> les parties gauche et droite sont reliées <b>seulement par le fil du haut</b>. Les fils du bas ne se rejoignent pas (lecture faite sur la photo).</p>\n<ol><li>Le fil du haut est un chemin unique entre les deux parties, sans retour possible. D'après la loi des nœuds appliquée à chaque moitié, le courant qui part par ce fil devrait revenir par un autre fil, qui n'existe pas : <b>le courant dans ce fil est nul</b>.</li>\n<li>Donc à gauche, R1 et R2 sont parcourues par le <b>même courant</b> <code>E1/(R1 + R2)</code> : on peut utiliser le pont diviseur. <b><code>U2 = E1·R2 / (R1 + R2)</code></b>.</li>\n<li>De même à droite : <b><code>U3 = E2·R3 / (R3 + R4)</code></b>.</li></ol>\n<p><b>Réponse à la question :</b> <b>oui</b>, ici on peut utiliser le pont diviseur de tension, justement parce que le fil qui relie les deux moitiés ne transporte aucun courant. S'il y avait aussi un fil en bas, les deux générateurs débiteraient l'un dans l'autre et il faudrait écrire les lois de Kirchhoff (U2 et U3 seraient alors égales).</p>"
            },
            {
              "titre": "Exercice 4 : ponts diviseurs de tension",
              "html": "\n<p><b>Énoncé :</b> exprimer U1 (aux bornes de R1) et U2 (aux bornes de R2) en fonction de e et des résistances, pour les quatre montages.</p>\n<p><b>Montage 1</b> (e directement sur R1 + R2) : même courant <code>e/(R1 + R2)</code>.<br>\n<b><code>U1 = e·R1/(R1 + R2)</code></b> et <b><code>U2 = e·R2/(R1 + R2)</code></b>.</p>\n<p><b>Montage 2</b> (une résistance R est ajoutée en parallèle sur le générateur idéal) : la tension aux bornes de (R1 + R2) reste e. R prend du courant en plus, mais ne change rien pour R1 et R2.<br>\n<b>Mêmes résultats qu'au montage 1.</b></p>\n<p><b>Montage 3</b> (résistance interne r en série) : r, R1 et R2 sont en série, même courant <code>e/(r + R1 + R2)</code>.<br>\n<b><code>U1 = e·R1/(r + R1 + R2)</code></b> et <b><code>U2 = e·R2/(r + R1 + R2)</code></b>.</p>\n<p><b>Montage 4</b> (r en série, puis R en parallèle sur R1 + R2) : r et R1 ne sont plus parcourues par le même courant, on procède en deux étapes.</p>\n<ol><li><code>Rp = R // (R1 + R2) = R·(R1 + R2)/(R + R1 + R2)</code>.</li>\n<li>Diviseur entre r et Rp : <code>U = e·Rp/(r + Rp)</code> (tension aux bornes de R).</li>\n<li>Diviseur entre R1 et R2 : <code>U1 = U·R1/(R1 + R2)</code>.</li></ol>\n<p>Résultat : <b><code>U1 = e·R·R1 / (r·(R + R1 + R2) + R·(R1 + R2))</code></b> et <b><code>U2 = e·R·R2 / (r·(R + R1 + R2) + R·(R1 + R2))</code></b>.</p>\n<div class=\"exemple\"><b>Vérification :</b> si R devient très grande (R débranchée), on retrouve le montage 3. Si r = 0, on retrouve le montage 1.</div>"
            },
            {
              "titre": "Exercice 5 : montage potentiométrique",
              "html": "\n<p><b>Lecture du schéma :</b> le potentiomètre de résistance totale R est branché sur E. On note <b>α</b> (entre 0 et 1) la position du curseur : la partie de R comprise entre le curseur et le fil du bas vaut <code>α·R</code>, celle du haut vaut <code>(1 − α)·R</code>. Us est prise entre le curseur et le fil du bas.</p>\n<p><b>À vide</b> (rien n'est branché sur Us) : les deux morceaux sont en série, même courant : pont diviseur.<br>\n<code>Us = E·αR/((1 − α)R + αR)</code>, soit <b><code>Us = α·E</code></b>.</p>\n<p><b>Courbe à vide :</b> une droite qui part de 0 (α = 0) et monte jusqu'à E (α = 1). Us est proportionnelle à la position du curseur : c'est ce qu'on attend d'un potentiomètre.</p>\n<p><b>En charge</b> (Rs branchée sur Us) : Rs est en parallèle sur la partie basse αR.</p>\n<ol><li><code>αR // Rs = αR·Rs/(αR + Rs)</code>.</li>\n<li>Pont diviseur entre (1 − α)R et cette résistance, puis simplification :</li></ol>\n<p><b><code>Us = α·E·Rs / (Rs + α(1 − α)·R)</code></b></p>\n<p><b>Courbe en charge :</b> elle passe toujours par 0 (α = 0) et par E (α = 1), mais entre les deux elle est <b>en dessous de la droite</b> à vide : la courbe n'est plus une droite, elle est « creusée », surtout vers le milieu. Plus Rs est petite devant R, plus l'écart est grand. Si Rs est très grande devant R, on retrouve presque la droite à vide.</p>\n<div class=\"exemple\"><b>Exemple chiffré :</b> Rs = R et α = 0,5 : <code>Us = 0,5·E·R/(R + 0,25·R) = 0,4·E</code> au lieu de 0,5·E à vide.</div>\n<div class=\"attention\"><b>Ce qui a changé :</b> la charge Rs prend du courant au point milieu, donc les deux morceaux du potentiomètre ne sont plus parcourus par le même courant. La formule simple <code>Us = α·E</code> ne marche plus.</div>"
            },
            {
              "titre": "Exercice 6 : pont de Wheatstone",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 230\" role=\"img\" aria-label=\"Pont de Wheatstone. Entre un nœud gauche G et un nœud droit D : branche du haut R1 puis R2 avec le point milieu M ; branche du bas R4 puis R3 avec le point milieu N ; branche du générateur E, flèche de E vers la gauche. La tension U est fléchée de N vers M.\" style=\"width:100%;min-width:300px;max-width:440px;font-family:var(--f-mono);font-size:13px\">\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\">\n<path d=\"M40 40H100M160 40H280M340 40H400\"/><path d=\"M40 130H100M160 130H280M340 130H400\"/>\n<path d=\"M40 40V190H202M238 190H400V40\"/><circle cx=\"220\" cy=\"190\" r=\"18\"/><path d=\"M202 190H238\"/>\n</g>\n<g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"100\" y=\"30\" width=\"60\" height=\"20\"/><rect x=\"280\" y=\"30\" width=\"60\" height=\"20\"/><rect x=\"100\" y=\"120\" width=\"60\" height=\"20\"/><rect x=\"280\" y=\"120\" width=\"60\" height=\"20\"/></g>\n<g stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"var(--accent)\"><path d=\"M220 122V58\"/><path d=\"M215 62L220 52L225 62Z\"/><path d=\"M260 220H185\"/><path d=\"M190 215L180 220L190 225Z\"/></g>\n<g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"40\" cy=\"130\" r=\"3.5\"/><circle cx=\"400\" cy=\"130\" r=\"3.5\"/><circle cx=\"220\" cy=\"40\" r=\"3.5\"/><circle cx=\"220\" cy=\"130\" r=\"3.5\"/>\n<text x=\"120\" y=\"70\">R1</text><text x=\"300\" y=\"70\">R2</text><text x=\"120\" y=\"160\">R4</text><text x=\"300\" y=\"160\">R3</text>\n<text x=\"226\" y=\"32\">M</text><text x=\"226\" y=\"148\">N</text><text x=\"230\" y=\"95\">U</text><text x=\"20\" y=\"125\">G</text><text x=\"408\" y=\"125\">D</text><text x=\"268\" y=\"224\">E</text></g></svg></div>\n<p><b>Lecture du schéma :</b> deux branches entre G et D : R1 puis R2 en haut (point milieu M), R4 puis R3 en bas (point milieu N). E est branché entre G et D, sa flèche pointe vers la gauche : G est le côté +, <code>V_G − V_D = E</code>. U est fléchée de N vers M : <code>U = V_M − V_N</code>. On suppose qu'aucun courant ne passe entre M et N (mesure au voltmètre).</p>\n<ol><li>Branche du haut : R1 et R2 en série (même courant). On prend D comme référence 0 V : <code>V_M = E·R2/(R1 + R2)</code>.</li>\n<li>Branche du bas : <code>V_N = E·R3/(R3 + R4)</code>.</li>\n<li><code>U = E·(R2/(R1 + R2) − R3/(R3 + R4))</code>, soit <b><code>U = E·(R2·R4 − R1·R3) / ((R1 + R2)(R3 + R4))</code></b>.</li></ol>\n<p><b>Condition d'équilibre (U = 0) :</b> le numérateur doit être nul : <b><code>R1·R3 = R2·R4</code></b> (les produits des résistances opposées sont égaux), ce qui s'écrit aussi <code>R1/R2 = R4/R3</code>.</p>\n<div class=\"exemple\"><b>Vérification :</b> R1 = R2 = R3 = R4 donne V_M = V_N = E/2 donc U = 0, et on a bien R1·R3 = R2·R4.<br><b>Utilité :</b> si R4 est inconnue, on règle les autres jusqu'à U = 0, puis <code>R4 = R1·R3/R2</code>.</div>"
            },
            {
              "titre": "Exercice 7 : pont diviseur de courant",
              "html": "\n<p><b>Énoncé :</b> exprimer I1 et I2 en fonction de I, puis en fonction de e, pour les quatre montages.</p>\n<p><b>Montage 1</b> (e sur R1 // R2) :<br>\n<code>I1 = I·R2/(R1 + R2)</code> et <code>I2 = I·R1/(R1 + R2)</code>.<br>\nChaque résistance est sous la tension e : <b><code>I1 = e/R1</code></b>, <b><code>I2 = e/R2</code></b>, et <code>I = e·(R1 + R2)/(R1·R2)</code>.</p>\n<p><b>Montage 2</b> (e sur R1 // R2 // R3) : on note <code>S = R1·R2 + R2·R3 + R1·R3</code>, donc <code>Req = R1·R2·R3/S</code>.<br>\n<code>I1 = I·Req/R1 = I·R2·R3/S</code> et <code>I2 = I·R1·R3/S</code>.<br>\nEn fonction de e : <b><code>I1 = e/R1</code></b>, <b><code>I2 = e/R2</code></b>.</p>\n<p><b>Montage 3</b> (r en série, puis R1 // R2) : mêmes formules en fonction de I. Mais maintenant <code>I = e/(r + R1·R2/(R1 + R2)) = e·(R1 + R2)/(R1·R2 + r·R1 + r·R2)</code>.<br>\n<b><code>I1 = e·R2/(R1·R2 + r·R1 + r·R2)</code></b> et <b><code>I2 = e·R1/(R1·R2 + r·R1 + r·R2)</code></b>.</p>\n<p><b>Montage 4</b> (r en série, puis R1 // R2 // R3) : <code>I = e·S/(R1·R2·R3 + r·S)</code>.<br>\n<b><code>I1 = e·R2·R3/(R1·R2·R3 + r·S)</code></b> et <b><code>I2 = e·R1·R3/(R1·R2·R3 + r·S)</code></b>.</p>\n<div class=\"attention\"><b>Piège :</b> dans le diviseur de courant à deux branches, c'est l'<b>autre</b> résistance qui est au numérateur (<code>I1 = I·R2/(R1 + R2)</code>). Le courant passe plus facilement par la plus petite résistance.</div>\n<div class=\"exemple\"><b>Vérification :</b> avec r = 0, les montages 3 et 4 redonnent I1 = e/R1.</div>"
            },
            {
              "titre": "Exercice 8 : résistances équivalentes",
              "html": "\n<p>On réduit pas à pas, en partant du morceau le plus « intérieur ».</p>\n<ol>\n<li>R1 et R2 en série : <b><code>Req = R1 + R2</code></b>.</li>\n<li>R1 // R2 : <b><code>Req = R1·R2/(R1 + R2)</code></b>.</li>\n<li>R // R : <b><code>Req = R/2</code></b>.</li>\n<li>Trois résistances en parallèle, notées R1, R1 et R3 sur la feuille : <code>1/Req = 2/R1 + 1/R3</code>, donc <b><code>Req = R1·R3/(R1 + 2·R3)</code></b>. <small>(Le deuxième « R1 » est peut-être un R2 ; dans ce cas <code>Req = R1·R2·R3/(R1·R2 + R2·R3 + R1·R3)</code>.)</small></li>\n<li>Montage en « échelle » : R1 (haut) et R4 (bas) mènent aux bornes de R2 ; R3 et la deuxième R4 forment une boucle à droite. Entre les deux bouts de R2 on a donc R2 // (R3 + R4).<br>\n<b><code>Req = R1 + R4 + R2·(R3 + R4)/(R2 + R3 + R4)</code></b>.</li>\n<li>R1 en série avec trois branches en parallèle : (R2 + R2), R4 et R4. <code>R4 // R4 = R4/2</code> ; <code>2R2 // (R4/2) = 2·R2·R4/(4·R2 + R4)</code>.<br>\n<b><code>Req = R1 + 2·R2·R4/(4·R2 + R4)</code></b>.</li>\n<li>(R // R) en parallèle avec (R + R) : <code>R/2 // 2R = R²/(5R/2)</code>, donc <b><code>Req = 2R/5</code></b>.</li>\n<li>Montage chiffré : <code>10 Ω // 15 Ω = 150/25 = 6 Ω</code> ; en série avec 6 Ω : 12 Ω ; en parallèle avec 12 Ω : 6 Ω ; en série avec 4 Ω : <b><code>Req = 10 Ω</code></b>.</li>\n</ol>\n<div class=\"exemple\"><b>Vérification :</b> une association parallèle est toujours plus petite que la plus petite des résistances (6 Ω &lt; 10 Ω) ; une association série est plus grande que la plus grande.</div>"
            },
            {
              "titre": "Exercice 9 : 6 résistances de 200 Ω",
              "html": "\n<ul>\n<li><b>1,2 kΩ</b> : les six en série. <code>6 × 200 = 1 200 Ω</code>.</li>\n<li><b>300 Ω</b> : deux branches de trois résistances en série, mises en parallèle. <code>600 Ω // 600 Ω = 300 Ω</code>.<br><small>Autre solution : trois paires en parallèle (100 Ω chacune) mises en série : <code>3 × 100 = 300 Ω</code>.</small></li>\n<li><b>150 Ω</b> : quatre résistances en parallèle (<code>200/4 = 50 Ω</code>) en série avec deux résistances en parallèle (<code>200/2 = 100 Ω</code>) : <code>50 + 100 = 150 Ω</code>.<br><small>Avec quatre résistances seulement : 200 Ω // (3 × 200 Ω) = 200·600/800 = 150 Ω.</small></li>\n</ul>"
            },
            {
              "titre": "Exercices 10 et 11 : caractéristique d'une résistance",
              "html": "\n<p><b>Méthode :</b> on place les points (I en abscisse, U en ordonnée). Ils doivent être à peu près alignés sur une droite passant par l'origine. On trace la droite qui passe au plus près des points, puis <code>R = pente = ΔU/ΔI</code> (I en ampères !).</p>\n<p><b>Exercice 10</b></p>\n<table><thead><tr><th>U (V)</th><th>5</th><th>10</th><th>15</th><th>20</th><th>25</th><th>30</th></tr></thead>\n<tbody><tr><td>I (mA)</td><td>2,2</td><td>4,5</td><td>7,0</td><td>9,0</td><td>11,4</td><td>13,7</td></tr>\n<tr><td>U/I (kΩ)</td><td>2,27</td><td>2,22</td><td>2,14</td><td>2,22</td><td>2,19</td><td>2,19</td></tr></tbody></table>\n<p>Pente lue sur un point éloigné de la droite : <code>30 V / 13,7 mA = 2 190 Ω</code>. La régression (droite passant par l'origine) donne 2 194 Ω.<br><b>R ≈ 2,2 kΩ</b>.</p>\n<p><b>Exercice 11</b></p>\n<table><thead><tr><th>U (V)</th><th>3,24</th><th>4,09</th><th>5,35</th><th>5,97</th><th>7,19</th><th>9,46</th></tr></thead>\n<tbody><tr><td>I (mA)</td><td>0,5</td><td>0,7</td><td>1</td><td>1,1</td><td>1,4</td><td>1,8</td></tr>\n<tr><td>U/I (kΩ)</td><td>6,48</td><td>5,84</td><td>5,35</td><td>5,43</td><td>5,14</td><td>5,26</td></tr></tbody></table>\n<p>Pente sur le dernier point : <code>9,46 V / 1,8 mA ≈ 5 260 Ω</code>. La régression passant par l'origine donne 5 337 Ω.<br><b>R ≈ 5,3 kΩ</b>.</p>\n<div class=\"attention\"><b>Points dispersés :</b> à l'exercice 11, les premiers points (0,5 mA ; 3,24 V) et (0,7 mA ; 4,09 V) donnent un rapport U/I plus grand que les autres (6,48 et 5,84 kΩ) : ils sont au-dessus de la droite, sans doute à cause de la précision de mesure sur les petits courants. On ne calcule donc pas R avec un seul point mal placé : on trace la droite moyenne et on lit sa pente sur deux points éloignés <b>de la droite</b>.</div>"
            },
            {
              "titre": "Exercice 12 : caractéristique d'un générateur",
              "html": "\n<table><thead><tr><th>I (mA)</th><th>0</th><th>5</th><th>10</th><th>15</th><th>20</th><th>25</th><th>30</th></tr></thead>\n<tbody><tr><td>U (V)</td><td>24</td><td>23,5</td><td>23</td><td>22,5</td><td>22</td><td>21,5</td><td>21</td></tr></tbody></table>\n<ol><li>Les points sont parfaitement alignés sur une droite qui <b>descend</b> : <code>U = E − r·I</code>.</li>\n<li>Pour I = 0 : <b><code>E = 24 V</code></b> (tension à vide).</li>\n<li>Pente : <code>(21 − 24) V / (30 − 0) mA = −3 V / 0,030 A = −100 Ω</code>, donc <b><code>r = 100 Ω</code></b>.</li></ol>\n<p><b>Équation :</b> <b><code>U = 24 − 100·I</code></b> (I en ampères). <b>Modèle :</b> une source de tension idéale E = 24 V en série avec une résistance r = 100 Ω.</p>\n<div class=\"exemple\"><b>Vérification :</b> I = 15 mA donne <code>24 − 100 × 0,015 = 22,5 V</code>, comme dans le tableau.</div>"
            },
            {
              "titre": "Exercice 13 : association série et parallèle (graphique)",
              "html": "\n<p>R1 = 1 kΩ et R2 = 2 kΩ, U de 0 à 10 V. Caractéristiques U = f(I) : deux droites passant par l'origine, de pentes 1 kΩ et 2 kΩ (à 10 V : I1 = 10 mA et I2 = 5 mA).</p>\n<p><b>En série :</b> les deux résistances ont le <b>même courant</b> et les tensions s'ajoutent. Graphiquement, pour chaque valeur de I, on <b>additionne les ordonnées</b> (U1 + U2).<br>\nPente : <b><code>R1 + R2 = 3 kΩ</code></b>. Vérification : à 10 V, <code>I = 10/3 000 ≈ 3,33 mA</code>.</p>\n<p><b>En parallèle :</b> les deux résistances ont la <b>même tension</b> et les courants s'ajoutent. Graphiquement, pour chaque valeur de U, on <b>additionne les abscisses</b> (I1 + I2).<br>\nPente : <b><code>R1 // R2 = 2/3 kΩ ≈ 667 Ω</code></b>. Vérification : à 10 V, <code>I = 10 + 5 = 15 mA</code> et <code>10 V / 15 mA ≈ 667 Ω</code>.</p>\n<div class=\"attention\">La droite série est <b>au-dessus</b> des deux autres (plus raide), la droite parallèle <b>en dessous</b> (moins raide). Si on trace I = f(U) au lieu de U = f(I), c'est l'inverse.</div>"
            },
            {
              "titre": "Exercice 14 : luminosité de lampes",
              "html": "\n<p>Les lampes sont identiques et se comportent comme des résistances égales (on la note RL). Plus le courant est grand, plus la lampe brille.</p>\n<ol>\n<li><b>E, A1, R, A2 en série</b> : un seul courant dans toute la boucle. <b>A1 et A2 brillent pareil.</b></li>\n<li><b>E1, A1, E2, A2 en série</b> : là encore un seul courant, donc <b>A1 et A2 brillent pareil</b>. D'après les flèches de la feuille (E1 vers le haut à gauche, E2 vers le bas à droite), les deux générateurs poussent le courant dans le même sens de rotation : <code>I = (E1 + E2)/(2·RL)</code>.</li>\n<li><b>A1 et A2 en parallèle sur E</b> : même tension E, même résistance, donc même courant <code>E/RL</code>. <b>A1 et A2 brillent pareil.</b></li>\n<li><b>A1 seule sur E, et A2 + A3 en série sur E</b> : A1 reçoit <code>E/RL</code> ; A2 et A3 reçoivent <code>E/(2·RL)</code>. <b>A1 brille plus que A2 et A3, qui brillent pareil entre elles.</b></li>\n<li><b>A5 et A1 en série avec (A2 // A3 // A4)</b> : tout le courant I passe dans A5 et A1, puis se partage en trois. <code>Req = RL + RL/3 + RL = 7·RL/3</code>, <code>I = 3E/(7·RL)</code>, et chacune de A2, A3, A4 reçoit <code>I/3 = E/(7·RL)</code>. <b>A1 et A5 brillent pareil et plus fort ; A2, A3 et A4 brillent pareil mais plus faiblement.</b></li>\n</ol>\n<div class=\"attention\"><b>Idée reçue :</b> le courant ne « s'use » pas en traversant une lampe. Dans une boucle en série, la première et la dernière lampe brillent exactement autant.</div>"
            }
          ],
          "pointsCles": [
            "Loi des nœuds : ce qui arrive à un nœud est égal à ce qui en repart ; un courant négatif circule dans l'autre sens.",
            "Loi des mailles : en faisant le tour d'une boucle, la somme des tensions (+ dans le sens du parcours, − sinon) est nulle.",
            "Le pont diviseur de tension ne s'applique qu'à des résistances parcourues par le même courant.",
            "Diviseur de courant à deux branches : I1 = I·R2/(R1 + R2), l'autre résistance au numérateur.",
            "Série : les résistances s'ajoutent ; parallèle : les inverses s'ajoutent (R1 // R2 = R1·R2/(R1 + R2)).",
            "Pont de Wheatstone équilibré (U = 0) quand R1·R3 = R2·R4.",
            "Une résistance a une caractéristique U = f(I) droite passant par l'origine, de pente R ; un générateur réel suit U = E − r·I.",
            "Dans une boucle en série, toutes les lampes identiques brillent autant."
          ],
          "definitions": [
            {
              "terme": "Nœud",
              "def": "Point du circuit où se rejoignent au moins trois fils."
            },
            {
              "terme": "Maille",
              "def": "Boucle fermée du circuit que l'on peut parcourir en revenant au point de départ."
            },
            {
              "terme": "Pont diviseur de tension",
              "def": "Deux résistances en série parcourues par le même courant : U1 = U·R1/(R1 + R2)."
            },
            {
              "terme": "Pont diviseur de courant",
              "def": "Deux résistances en parallèle se partagent le courant : I1 = I·R2/(R1 + R2)."
            },
            {
              "terme": "Résistance équivalente",
              "def": "Résistance unique qui, placée à la place d'un groupe de résistances, ferait passer le même courant sous la même tension."
            },
            {
              "terme": "Caractéristique",
              "def": "Courbe U = f(I) d'un dipôle, obtenue en mesurant la tension pour plusieurs courants."
            },
            {
              "terme": "Pont de Wheatstone",
              "def": "Deux ponts diviseurs en parallèle ; la tension entre leurs points milieux est nulle quand R1·R3 = R2·R4."
            },
            {
              "terme": "Montage à vide / en charge",
              "def": "À vide, rien n'est branché sur la sortie ; en charge, une résistance de charge Rs prend du courant en sortie."
            }
          ],
          "flashcards": [
            {
              "q": "Exercice 1, nœud D : I1 = 3 A et I3 = 4 A arrivent, I2 = −1 A et I4 repartent. I4 ?",
              "r": "3 + 4 = −1 + I4, donc I4 = 8 A."
            },
            {
              "q": "Exercice 2, maille 1 : U1 = 7 V et U3 = 4 V, toutes les flèches dans le même sens de rotation. U2 ?",
              "r": "U1 + U3 + U2 = 0, donc U2 = −11 V."
            },
            {
              "q": "Quand a-t-on le droit d'utiliser le pont diviseur de tension ?",
              "r": "Quand les résistances sont en série et parcourues par le même courant (aucune branche ne prend de courant au point milieu)."
            },
            {
              "q": "Formule du diviseur de courant pour I1 (R1 // R2) ?",
              "r": "I1 = I·R2/(R1 + R2) : l'autre résistance au numérateur."
            },
            {
              "q": "Exercice 3c : que vaut la résistance équivalente vue par E ?",
              "r": "5R, donc I = E/(5R) et U = 12E/25."
            },
            {
              "q": "Exercice 3d : pourquoi peut-on utiliser le diviseur ?",
              "r": "Les deux moitiés ne sont reliées que par un seul fil : aucun courant n'y passe, donc U2 = E1·R2/(R1 + R2) et U3 = E2·R3/(R3 + R4)."
            },
            {
              "q": "Potentiomètre à vide : Us en fonction de α ?",
              "r": "Us = α·E, une droite de 0 à E."
            },
            {
              "q": "Potentiomètre en charge : Us ?",
              "r": "Us = α·E·Rs/(Rs + α(1 − α)·R), une courbe sous la droite à vide."
            },
            {
              "q": "Condition d'équilibre du pont de Wheatstone ?",
              "r": "R1·R3 = R2·R4 (produits des résistances opposées égaux)."
            },
            {
              "q": "Exercice 12 : E et r du générateur ?",
              "r": "E = 24 V (tension pour I = 0) et r = 3 V / 30 mA = 100 Ω."
            },
            {
              "q": "Comment obtenir 300 Ω avec six résistances de 200 Ω ?",
              "r": "Deux branches de trois résistances en série (600 Ω chacune) mises en parallèle."
            }
          ],
          "quiz": [
            {
              "q": "Nœud C : I1 = 2 A, I2 = 1 A, I3 = 2 A et I4 sont tous fléchés vers le nœud. Que vaut I4 ?",
              "choix": [
                "1 A",
                "5 A",
                "−5 A",
                "−1 A"
              ],
              "bonne": 2,
              "explication": "Tout arrive au nœud, donc la somme est nulle : 2 + 1 + 2 + I4 = 0, I4 = −5 A."
            },
            {
              "q": "Maille 2 de l'exercice 2 : U1 = 7 V, U3 = −1 V, U4 = 2 V. Que vaut U2 ?",
              "choix": [
                "8 V",
                "10 V",
                "−4 V",
                "4 V"
              ],
              "bonne": 3,
              "explication": "U2 − U3 + U4 − U1 = 0, donc U2 = 7 − 1 − 2 = 4 V."
            },
            {
              "q": "Exercice 3a : E en série avec R3, qui alimente R1 // R2. Que vaut I ?",
              "choix": [
                "E/(R1 + R2 + R3)",
                "E·(R1 + R2)/(R1R2 + R1R3 + R2R3)",
                "E·R2/(R1 + R2)",
                "E/(R1 + R2)"
              ],
              "bonne": 1,
              "explication": "Req = R3 + R1R2/(R1 + R2) ; I = E/Req donne E·(R1 + R2)/(R1R2 + R1R3 + R2R3)."
            },
            {
              "q": "Exercice 3c : que vaut U ?",
              "choix": [
                "4E/5",
                "3E/5",
                "12E/25",
                "E/2"
              ],
              "bonne": 2,
              "explication": "Req = 5R, I = E/(5R), tension sur 20R = 4E/5, puis diviseur 3R/5R : U = 12E/25."
            },
            {
              "q": "Montage 3 de l'exercice 4 (r, R1, R2 en série sur e). Que vaut U2 ?",
              "choix": [
                "e·R1/(r + R1 + R2)",
                "e·R2/(r + R1 + R2)",
                "e·R2/(R1 + R2)",
                "e·r/(r + R1 + R2)"
              ],
              "bonne": 1,
              "explication": "Les trois résistances sont en série avec le même courant e/(r + R1 + R2)."
            },
            {
              "q": "Potentiomètre en charge (Rs = R, α = 0,5). Que vaut Us ?",
              "choix": [
                "0,25·E",
                "0,6·E",
                "0,4·E",
                "0,5·E"
              ],
              "bonne": 2,
              "explication": "Us = α·E·Rs/(Rs + α(1 − α)R) = 0,5E·R/(1,25R) = 0,4·E."
            },
            {
              "q": "Pont de Wheatstone : à quelle condition U = 0 ?",
              "choix": [
                "R1·R2 = R3·R4",
                "R1/R3 = R2/R4",
                "R1 + R3 = R2 + R4",
                "R1·R3 = R2·R4"
              ],
              "bonne": 3,
              "explication": "U = E·(R2R4 − R1R3)/((R1 + R2)(R3 + R4)) est nulle quand R1·R3 = R2·R4."
            },
            {
              "q": "Résistance équivalente du montage 4 Ω + [12 Ω // ((10 Ω // 15 Ω) + 6 Ω)] ?",
              "choix": [
                "8 Ω",
                "10 Ω",
                "16 Ω",
                "47 Ω"
              ],
              "bonne": 1,
              "explication": "10 // 15 = 6 ; 6 + 6 = 12 ; 12 // 12 = 6 ; 6 + 4 = 10 Ω."
            },
            {
              "q": "Générateur : U = 24 V à vide et 21 V pour 30 mA. Que vaut r ?",
              "choix": [
                "700 Ω",
                "0,1 Ω",
                "100 Ω",
                "800 Ω"
              ],
              "bonne": 2,
              "explication": "r = (24 − 21) V / 0,030 A = 100 Ω."
            },
            {
              "q": "R1 = 1 kΩ et R2 = 2 kΩ en parallèle : pente de la caractéristique U = f(I) ?",
              "choix": [
                "3 kΩ",
                "500 Ω",
                "1,5 kΩ",
                "Environ 667 Ω"
              ],
              "bonne": 3,
              "explication": "R1 // R2 = 1 × 2/(1 + 2) = 2/3 kΩ ≈ 667 Ω."
            },
            {
              "q": "Dernier montage de l'exercice 14 : quelles lampes brillent le plus ?",
              "choix": [
                "Toutes pareil",
                "A1 et A5",
                "A2, A3 et A4",
                "A5 seulement"
              ],
              "bonne": 1,
              "explication": "A1 et A5 sont traversées par tout le courant I ; A2, A3 et A4 n'en reçoivent qu'un tiers chacune."
            }
          ],
          "examen": [
            {
              "titre": "Loi des nœuds et loi des mailles",
              "enonce": "<p><b>Partie 1.</b> À un nœud N, les courants I1 = 3 A et I2 = −2 A sont fléchés vers le nœud ; les courants I3 = 4 A et I4 sont fléchés en sortant du nœud.</p><p><b>Partie 2.</b> Une maille passe successivement par les points A, B, C, D puis revient en A. On connaît U_AB = 5 V, U_BC = −3 V et U_CD = 2 V (avec U_XY = V_X − V_Y).</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer I4.",
                  "reponse": -3,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Loi des nœuds : ce qui arrive = ce qui repart.</p><p><code>I1 + I2 = I3 + I4</code>, soit <code>3 + (−2) = 4 + I4</code>, donc <code>I4 = 1 − 4</code>.</p><p><b>I4 = −3 A</b> : le courant circule en réalité vers le nœud.</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer U_DA.",
                  "reponse": -4,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>En faisant le tour de la maille A → B → C → D → A, la somme des tensions est nulle :</p><p><code>U_AB + U_BC + U_CD + U_DA = 0</code>, soit <code>5 − 3 + 2 + U_DA = 0</code>.</p><p><b>U_DA = −4 V</b></p><p>Vérification par les potentiels : avec V_A = 0, V_B = −5 V, V_C = −2 V, V_D = −4 V, donc U_DA = V_D − V_A = −4 V.</p>"
                }
              ]
            },
            {
              "titre": "Pont diviseur de tension à vide et en charge",
              "enonce": "<p>Un générateur idéal E = 12 V alimente deux résistances en série : R1 = 2,2 kΩ (côté borne +) puis R2 = 3,3 kΩ (côté borne −). On appelle U2 la tension aux bornes de R2.</p><p>Dans un second temps, on branche une charge Rc = 3,3 kΩ en parallèle sur R2.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "À vide (sans Rc), calculer U2.",
                  "reponse": 7.2,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>R1 et R2 sont parcourues par le même courant : le pont diviseur s'applique.</p><p><code>U2 = E · R2 / (R1 + R2) = 12 × 3,3 / 5,5</code></p><p><b>U2 = 7,2 V</b></p>"
                },
                {
                  "type": "qcm",
                  "q": "Une fois Rc branchée, peut-on encore écrire U2 = E·R2/(R1 + R2) ?",
                  "choix": [
                    "Non, car R1 et R2 ne sont plus parcourues par le même courant",
                    "Oui, car R2 n'a pas changé",
                    "Oui, car E est un générateur idéal",
                    "Non, car la loi d'Ohm ne s'applique plus"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Rc prend du courant au point milieu : le courant dans R1 n'est plus celui de R2. Il faut d'abord remplacer R2 // Rc par sa résistance équivalente.</p>"
                },
                {
                  "type": "num",
                  "q": "En charge, calculer la nouvelle valeur de U2.",
                  "reponse": 5.14,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p><code>R2 // Rc = 3,3 × 3,3 / (3,3 + 3,3) = 1,65 kΩ</code> (deux résistances égales : R/2).</p><p>R1 et ce groupe sont en série, même courant : <code>U2 = E · 1,65 / (2,2 + 1,65) = 12 × 1,65 / 3,85</code></p><p><b>U2 ≈ 5,14 V</b> : la tension a baissé à cause de la charge.</p>"
                }
              ]
            },
            {
              "titre": "Caractéristique d'un générateur réel",
              "enonce": "<p>On relève la caractéristique U = f(I) d'un générateur :</p><table><thead><tr><th>I (mA)</th><th>0</th><th>10</th><th>20</th><th>40</th></tr></thead><tbody><tr><td>U (V)</td><td>18</td><td>17,5</td><td>17</td><td>16</td></tr></tbody></table><p>Les points sont alignés sur une droite.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Donner la f.é.m. E du générateur.",
                  "reponse": 18,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Le modèle est <code>U = E − r·I</code>. Pour I = 0 (à vide), U = E.</p><p><b>E = 18 V</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la résistance interne r.",
                  "reponse": 50,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Pente de la droite : <code>(16 − 18) V / (40 − 0) mA = −2 V / 0,040 A = −50 Ω</code>.</p><p><b>r = 50 Ω</b></p><div class=\"attention\">Convertir les mA en A avant de diviser.</div>"
                },
                {
                  "type": "num",
                  "q": "Quelle tension U le générateur fournit-il pour I = 60 mA ?",
                  "reponse": 15,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>U = 18 − 50 × 0,060 = 18 − 3</code></p><p><b>U = 15 V</b></p>"
                }
              ]
            }
          ]
        },
        {
          "id": "exercices-resistances-equivalentes",
          "titre": "Exercices : résistances équivalentes",
          "type": "Exercices",
          "date": "2026-10-08",
          "source": "Feuille d'exercices du prof (photos envoyées par Kyk's)",
          "resume": "On apprend à remplacer un ensemble de résistances par une seule résistance équivalente Req. En série, les résistances s'additionnent ; en parallèle, ce sont leurs inverses qui s'additionnent. Pour un montage compliqué, on repère les nœuds, on simplifie un petit groupe à la fois (Req1, Req2…) et on recommence. On s'en sert aussi à l'envers, pour retrouver une résistance inconnue à partir de RAB.",
          "sections": [
            {
              "titre": "Méthode : série, parallèle, et comment simplifier pas à pas",
              "html": "<p><b>Deux résistances sont en série</b> quand elles sont l'une après l'autre, sans aucun nœud entre elles où le courant pourrait partir ailleurs. Elles sont traversées par le <b>même courant</b>. On additionne :</p>\n<p><code>Req = R1 + R2 + R3 + …</code></p>\n<p><b>Deux résistances sont en parallèle</b> (notation <code>//</code>) quand elles sont branchées entre les <b>deux mêmes nœuds</b>. Elles ont la <b>même tension</b>. On additionne les inverses :</p>\n<p><code>1/Req = 1/R1 + 1/R2 + 1/R3 + …</code>, donc <code>Req = 1 / (1/R1 + 1/R2 + 1/R3 + …)</code></p>\n<p>Pour <b>deux</b> résistances seulement, on a le raccourci « produit sur somme » : <code>R1 // R2 = R1·R2 / (R1 + R2)</code>.</p>\n<p><b>La méthode pour un montage compliqué :</b></p>\n<ol><li>Repérer et nommer tous les nœuds (A, B, C, D…). Deux points reliés par un simple fil sont le <b>même nœud</b>, même s'ils sont loin sur le dessin.</li>\n<li>Pour chaque résistance, noter entre quels nœuds elle est branchée.</li>\n<li>Chercher un groupe simple (deux résistances entre les mêmes nœuds, ou une suite sans dérivation), le remplacer par sa résistance équivalente (Req1, Req2…).</li>\n<li>Recommencer sur le schéma simplifié jusqu'à n'avoir plus qu'une seule résistance entre A et B.</li></ol>\n<div class=\"attention\"><b>Deux pièges très fréquents :</b>\n<ul><li>Ne jamais mélanger dans une même somme des inverses (1/R) et des résistances (R) : <code>1/R1 + R4</code> n'a pas de sens, ce ne sont pas les mêmes unités (Ω⁻¹ et Ω).</li>\n<li>Le « produit sur somme » ne marche que pour <b>deux</b> résistances. Pour trois, <code>R1·R2·R3 / (R1 + R2 + R3)</code> est faux (ce n'est même pas en ohms : Ω³ divisé par Ω donne Ω²).</li></ul></div>\n<div class=\"exemple\"><b>Contrôles rapides :</b> une association en série est toujours <b>plus grande</b> que la plus grande des résistances ; une association en parallèle est toujours <b>plus petite</b> que la plus petite des résistances. Et n résistances identiques R en parallèle donnent <code>R/n</code> (deux résistances de 20 kΩ en parallèle donnent 10 kΩ).</div>"
            },
            {
              "titre": "Exercice 1 : association de 5 résistances",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 400 160\" role=\"img\" aria-label=\"Schéma 1 : entre A et B, R1, R2 et R3 sont en parallèle entre deux nœuds ; ce bloc est suivi de R4 puis de R5 en série jusqu'à B.\" style=\"width:100%;min-width:300px;max-width:440px;font-family:var(--f-mono);font-size:13px\"><g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M18 90H90 M130 90H200 M240 90H280 M320 90H382 M60 40V140 M160 40V140 M60 40H90 M130 40H160 M60 140H90 M130 140H160\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"90\" y=\"32\" width=\"40\" height=\"16\"/><rect x=\"90\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"90\" y=\"132\" width=\"40\" height=\"16\"/><rect x=\"200\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"280\" y=\"82\" width=\"40\" height=\"16\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"60\" cy=\"90\" r=\"3.5\"/><circle cx=\"160\" cy=\"90\" r=\"3.5\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><circle cx=\"18\" cy=\"90\" r=\"4\"/><circle cx=\"382\" cy=\"90\" r=\"4\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><text x=\"110\" y=\"27\" text-anchor=\"middle\">R1</text><text x=\"110\" y=\"77\" text-anchor=\"middle\">R2</text><text x=\"110\" y=\"127\" text-anchor=\"middle\">R3</text><text x=\"220\" y=\"77\" text-anchor=\"middle\">R4</text><text x=\"300\" y=\"77\" text-anchor=\"middle\">R5</text><text x=\"14\" y=\"84\" text-anchor=\"middle\">A</text><text x=\"386\" y=\"84\" text-anchor=\"middle\">B</text></g></svg></div><p><b>Énoncé :</b> donner l'expression littérale de la résistance équivalente au dipôle A-B (il n'est pas nécessaire de simplifier).</p>\n<p><b>Structure :</b> R1, R2 et R3 sont branchées entre les deux mêmes nœuds : elles sont <b>en parallèle</b>. Ce bloc est ensuite suivi de R4 puis de R5, sans dérivation : bloc, R4 et R5 sont <b>en série</b>. En résumé : <code>Req = (R1 // R2 // R3) + R4 + R5</code>.</p>\n<p><b>Étape 1 : le bloc parallèle.</b></p>\n<p><code>1/Req1 = 1/R1 + 1/R2 + 1/R3</code>, donc <code>Req1 = 1 / (1/R1 + 1/R2 + 1/R3)</code></p>\n<p><b>Étape 2 : la série.</b> On ajoute R4 et R5 <b>après</b> avoir inversé :</p>\n<p><b><code>Req = 1 / (1/R1 + 1/R2 + 1/R3) + R4 + R5</code></b></p>\n<p><small>Forme équivalente (en réduisant au même dénominateur) : <code>Req = R1·R2·R3 / (R1·R2 + R1·R3 + R2·R3) + R4 + R5</code>.</small></p>\n<div class=\"attention\"><b>À propos des réponses écrites sur la feuille :</b>\n<ul><li>« 1/Req = 1/R1 + 1/R2 + 1/R3 + R4 + R5 » mélange des inverses et des résistances : c'est faux. Seul le bloc parallèle s'écrit avec des inverses, et c'est <b>1/Req1</b> (le bloc), pas 1/Req (tout le dipôle).</li>\n<li>« Req = R1×R2×R3 / (R1 + R2 + R3) + R4 + R5 » : la bonne idée est là (bloc parallèle puis + R4 + R5), mais le produit sur somme ne marche que pour deux résistances. Pour trois, le dénominateur est <code>R1·R2 + R1·R3 + R2·R3</code>.</li>\n<li>La dernière proposition « 1 / (1/R1 + 1/R2 + 1/R3 + R4 + R5) » met R4 et R5 sous la barre de fraction : elles seraient « inversées » avec le reste. R4 et R5 doivent rester <b>en dehors</b> : <code>1 / (1/R1 + 1/R2 + 1/R3) + R4 + R5</code>. L'idée « on inverse » est la bonne, il faut juste inverser seulement le bloc parallèle.</li></ul></div>\n<div class=\"exemple\"><b>Vérification avec des valeurs simples :</b> si toutes les résistances valent 30 Ω, le bloc vaut 30/3 = 10 Ω et <code>Req = 10 + 30 + 30 = 70 Ω</code>. La formule correcte donne bien 1/(3/30) + 60 = 70 Ω, alors que « produit sur somme » à trois donnerait 27 000/90 = 300 Ω pour le bloc, ce qui est impossible (plus grand que chaque résistance du parallèle).</div>"
            },
            {
              "titre": "Exercice 2 : association de 6 résistances",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 400 210\" role=\"img\" aria-label=\"Schéma 2 : entre A et B, deux branches en parallèle. Branche du haut : R1, R2 et R3 en parallèle, puis R5 et R6 en série. Branche du bas : R4 seule, reliée directement de A à B.\" style=\"width:100%;min-width:300px;max-width:440px;font-family:var(--f-mono);font-size:13px\"><g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M18 90H90 M130 90H190 M230 90H260 M300 90H382 M60 40V190 M160 40V140 M60 40H90 M130 40H160 M60 140H90 M130 140H160 M60 190H160 M200 190H340V90\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"90\" y=\"32\" width=\"40\" height=\"16\"/><rect x=\"90\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"90\" y=\"132\" width=\"40\" height=\"16\"/><rect x=\"190\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"260\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"160\" y=\"182\" width=\"40\" height=\"16\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"60\" cy=\"90\" r=\"3.5\"/><circle cx=\"160\" cy=\"90\" r=\"3.5\"/><circle cx=\"340\" cy=\"90\" r=\"3.5\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><circle cx=\"18\" cy=\"90\" r=\"4\"/><circle cx=\"382\" cy=\"90\" r=\"4\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><text x=\"110\" y=\"27\" text-anchor=\"middle\">R1</text><text x=\"110\" y=\"77\" text-anchor=\"middle\">R2</text><text x=\"110\" y=\"127\" text-anchor=\"middle\">R3</text><text x=\"210\" y=\"77\" text-anchor=\"middle\">R5</text><text x=\"280\" y=\"77\" text-anchor=\"middle\">R6</text><text x=\"180\" y=\"177\" text-anchor=\"middle\">R4</text><text x=\"14\" y=\"84\" text-anchor=\"middle\">A</text><text x=\"386\" y=\"84\" text-anchor=\"middle\">B</text></g></svg></div><p><b>Énoncé :</b> donner l'expression littérale de la résistance équivalente au dipôle (il n'est pas nécessaire de simplifier).</p>\n<p><b>Structure :</b> entre les deux bornes, il y a <b>deux branches en parallèle</b> :</p>\n<ul><li>la branche du haut : R1, R2 et R3 en parallèle, puis R5 et R6 en série avec ce bloc ;</li>\n<li>la branche du bas : R4 seule, qui relie directement les deux bornes.</li></ul>\n<p>En résumé : <code>Req = [(R1 // R2 // R3) + R5 + R6] // R4</code>.</p>\n<p><b>Étape 1 : la branche du haut</b> (c'est exactement le montage de l'exercice 1) :</p>\n<p><code>Req1 = 1 / (1/R1 + 1/R2 + 1/R3) + R5 + R6</code></p>\n<p><b>Étape 2 : Req1 en parallèle avec R4</b> (deux résistances, donc produit sur somme autorisé) :</p>\n<p><b><code>Req = Req1·R4 / (Req1 + R4)</code></b>, avec <code>Req1 = 1 / (1/R1 + 1/R2 + 1/R3) + R5 + R6</code></p>\n<div class=\"attention\"><b>À propos des réponses écrites sur la feuille :</b>\n<ul><li>La réponse finale entourée « Req = Req1 × R4 / (Req1 + R4) » est <b>juste</b>, et le regroupement « Req1 » tracé sur le schéma (R1, R2, R3, R5, R6) est le bon. Bravo.</li>\n<li>Les essais intermédiaires reprennent les deux erreurs de l'exercice 1 : « 1/R1 + 1/R2 + 1/R3 + R5 + R6 » mélange inverses et résistances, et « R1×R2×R3 / (R1 + R2 + R3) » n'est pas valable pour trois résistances. Ils sont d'ailleurs barrés : il suffit de garder <code>Req1 = 1/(1/R1 + 1/R2 + 1/R3) + R5 + R6</code>.</li>\n<li>Diviser par R4 (« … / R4 ») ne représente pas une mise en parallèle : il faut bien le produit sur somme (ou la somme des inverses).</li></ul></div>\n<div class=\"exemple\"><b>Vérification avec des valeurs simples :</b> si toutes valent 30 Ω, Req1 = 10 + 30 + 30 = 70 Ω, puis <code>Req = 70 × 30 / (70 + 30) = 21 Ω</code>. C'est bien plus petit que R4 = 30 Ω, comme toute association en parallèle.</div>"
            },
            {
              "titre": "Exercice 3 : association série-parallèle (nœuds A, B, C, D)",
              "html": "<p><b>Énoncé :</b> le dipôle A-B est dessiné « en échelle » : une longue ligne verticale à gauche, reliée à A, d'où partent R6, R4 et R2 ; une colonne à droite R1, C, R3, D, R5 qui monte jusqu'à B.</p>\n<p><b>a)</b> Redessiner le schéma avec seulement quatre nœuds A, B, C, D, résistances à l'horizontale.</p>\n<p><b>b)</b> Avec <code>R1 = R2 = R4 = R6 = 20 kΩ</code> et <code>R3 = R5 = 10 kΩ</code>, calculer la résistance équivalente (le calcul se fait de tête).</p>\n<p><b>a) Repérage des nœuds.</b> Toute la ligne de gauche est un simple fil relié à la borne A (en bas) : c'est donc <b>un seul nœud A</b>. Chaque résistance est alors entre deux nœuds :</p>\n<table><thead><tr><th>Résistance</th><th>Entre</th></tr></thead><tbody>\n<tr><td>R1</td><td>A et C</td></tr><tr><td>R2</td><td>A et C</td></tr><tr><td>R3</td><td>C et D</td></tr>\n<tr><td>R4</td><td>A et D</td></tr><tr><td>R5</td><td>D et B</td></tr><tr><td>R6</td><td>A et B</td></tr></tbody></table>\n<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 400 225\" role=\"img\" aria-label=\"Schéma redessiné : de A à C, R1 et R2 en parallèle ; de C à D, R3 ; de D à B, R5. R4 relie A à D. R6 relie A à B.\" style=\"width:100%;min-width:300px;max-width:440px;font-family:var(--f-mono);font-size:13px\"><g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M18 90H80 M120 90H180 M220 90H280 M320 90H382 M50 40V205 M150 40V90 M50 40H80 M120 40H150 M50 150H130 M170 150H250V90 M50 205H200 M240 205H350V90\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"80\" y=\"32\" width=\"40\" height=\"16\"/><rect x=\"80\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"180\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"280\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"130\" y=\"142\" width=\"40\" height=\"16\"/><rect x=\"200\" y=\"197\" width=\"40\" height=\"16\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"50\" cy=\"90\" r=\"3.5\"/><circle cx=\"150\" cy=\"90\" r=\"3.5\"/><circle cx=\"250\" cy=\"90\" r=\"3.5\"/><circle cx=\"350\" cy=\"90\" r=\"3.5\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><circle cx=\"18\" cy=\"90\" r=\"4\"/><circle cx=\"382\" cy=\"90\" r=\"4\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><text x=\"100\" y=\"27\" text-anchor=\"middle\">R2</text><text x=\"100\" y=\"77\" text-anchor=\"middle\">R1</text><text x=\"200\" y=\"77\" text-anchor=\"middle\">R3</text><text x=\"300\" y=\"77\" text-anchor=\"middle\">R5</text><text x=\"150\" y=\"137\" text-anchor=\"middle\">R4</text><text x=\"220\" y=\"192\" text-anchor=\"middle\">R6</text><text x=\"14\" y=\"84\" text-anchor=\"middle\">A</text><text x=\"386\" y=\"84\" text-anchor=\"middle\">B</text><text x=\"150\" y=\"110\" text-anchor=\"middle\">C</text><text x=\"264\" y=\"110\" text-anchor=\"middle\">D</text></g></svg></div><p><b>b) Simplification pas à pas</b> (on part du fond, à gauche) :</p>\n<ol><li>R1 et R2 sont entre A et C : en parallèle. <code>Req1 = R1·R2 / (R1 + R2) = 20 × 20 / 40 = 10 kΩ</code>.</li>\n<li>Req1 (A vers C) puis R3 (C vers D) : en série. <code>Req2 = Req1 + R3 = 10 + 10 = 20 kΩ</code> (entre A et D).</li>\n<li>Req2 et R4 sont toutes deux entre A et D : en parallèle. <code>Req3 = Req2·R4 / (Req2 + R4) = 20 × 20 / 40 = 10 kΩ</code>.</li>\n<li>Req3 (A vers D) puis R5 (D vers B) : en série. <code>Req4 = Req3 + R5 = 10 + 10 = 20 kΩ</code> (entre A et B).</li>\n<li>Req4 et R6 sont toutes deux entre A et B : en parallèle. <code>Req = Req4·R6 / (Req4 + R6) = 20 × 20 / 40 = 10 kΩ</code>.</li></ol>\n<p>Expression littérale complète : <code>Req = { [ (R1 // R2) + R3 ] // R4 + R5 } // R6</code></p>\n<p><b>Résultat : Req = 10 kΩ.</b></p>\n<div class=\"exemple\"><b>Pourquoi c'est facile de tête :</b> à chaque étape on retombe sur deux résistances égales de 20 kΩ en parallèle, qui donnent 20/2 = 10 kΩ, et 10 + 10 = 20 kΩ en série. Le résultat 10 kΩ est bien plus petit que R6 = 20 kΩ, ce qui est logique puisque R6 est en parallèle avec le reste.</div>\n<div class=\"attention\"><b>À propos des réponses écrites sur la feuille :</b>\n<ul><li>Le schéma redessiné est bon (R1 // R2 entre A et C, R3 de C à D, R5 de D à B, R4 de A à D, R6 de A à B), et le résultat <b>10 kΩ</b> est <b>juste</b>. Petit point de dessin : le fil qui part de R4 doit arriver <b>en D seulement</b> ; sur la feuille il semble passer par la verticale qui descend de C, ce qui court-circuiterait R3. <small>(Lecture incertaine sur la photo.)</small></li>\n<li>La formule écrite « Req = (R1×R2/(R1+R2) + R3) <b>+</b> (Req1×R4/(Req1+R4) + R5) <b>+</b> (Req2×R6/(Req2+R6)) » additionne les trois parenthèses : c'est faux, car ces blocs ne sont pas en série, ils sont <b>emboîtés</b>. Chaque parenthèse est une étape qui sert dans la suivante. Il faut écrire trois lignes séparées : <code>Req1 = R1·R2/(R1+R2) + R3</code>, puis <code>Req2 = Req1·R4/(Req1+R4) + R5</code>, puis <code>Req = Req2·R6/(Req2+R6)</code>. Avec le « + » entre parenthèses, on trouverait 20 + 20 + 10 = 50 kΩ au lieu de 10 kΩ.</li></ul></div>"
            },
            {
              "titre": "Exercice 4 : calcul d'une résistance dans une association série-parallèle",
              "html": "<p><b>Énoncé :</b> le dipôle A-B contient 5 résistances. Sur le dessin, R1 va de A à C, R2 de C au point situé avant R3, puis R3 va jusqu'à B. Un fil passe au-dessus de R1 et R2 et relie directement A à ce point. R4 part de C et va vers le bas, R5 descend du point situé avant R3, et le fil du bas est relié à B.</p>\n<p>Valeurs : <code>R1 = 55 Ω</code>, <code>R2 = 22 Ω</code>, <code>R3 = ?</code>, <code>R4 = 100 Ω</code>, <code>R5 = 100 Ω</code>, <code>RAB = 8,43 Ω</code>.</p>\n<p><small>Lecture de la feuille : l'unité de RAB est bien Ω (« 8,43Ω »), comme pour les autres résistances.</small></p>\n<p><b>a) Repérage des nœuds.</b> Le fil du haut relie A au point situé avant R3 : ce point est donc <b>le nœud A</b> (c'est ce qui est noté à la main sur la feuille, à juste titre). De même, le fil du bas est relié à B : c'est <b>le nœud B</b>. On obtient :</p>\n<table><thead><tr><th>Résistance</th><th>Entre</th></tr></thead><tbody>\n<tr><td>R1</td><td>A et C</td></tr><tr><td>R2</td><td>C et A</td></tr><tr><td>R4</td><td>C et B</td></tr>\n<tr><td>R3</td><td>A et B</td></tr><tr><td>R5</td><td>A et B</td></tr></tbody></table>\n<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 400 225\" role=\"img\" aria-label=\"Schéma redessiné : entre A et B, trois branches en parallèle. Branche 1 : R1 et R2 en parallèle entre A et C, puis R4 de C à B. Branche 2 : R3 seule. Branche 3 : R5 seule.\" style=\"width:100%;min-width:300px;max-width:440px;font-family:var(--f-mono);font-size:13px\"><g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M18 90H80 M120 90H190 M230 90H382 M50 40V205 M150 40V90 M50 40H80 M120 40H150 M50 150H150 M190 150H330 M50 205H150 M190 205H330 M330 90V205\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"80\" y=\"32\" width=\"40\" height=\"16\"/><rect x=\"80\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"190\" y=\"82\" width=\"40\" height=\"16\"/><rect x=\"150\" y=\"142\" width=\"40\" height=\"16\"/><rect x=\"150\" y=\"197\" width=\"40\" height=\"16\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"50\" cy=\"90\" r=\"3.5\"/><circle cx=\"150\" cy=\"90\" r=\"3.5\"/><circle cx=\"330\" cy=\"90\" r=\"3.5\"/><circle cx=\"330\" cy=\"150\" r=\"3.5\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><circle cx=\"18\" cy=\"90\" r=\"4\"/><circle cx=\"382\" cy=\"90\" r=\"4\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><text x=\"100\" y=\"27\" text-anchor=\"middle\">R1</text><text x=\"100\" y=\"77\" text-anchor=\"middle\">R2</text><text x=\"210\" y=\"77\" text-anchor=\"middle\">R4</text><text x=\"170\" y=\"137\" text-anchor=\"middle\">R3</text><text x=\"170\" y=\"192\" text-anchor=\"middle\">R5</text><text x=\"14\" y=\"84\" text-anchor=\"middle\">A</text><text x=\"386\" y=\"84\" text-anchor=\"middle\">B</text><text x=\"150\" y=\"110\" text-anchor=\"middle\">C</text></g></svg></div><p>Donc : R1 et R2 sont en parallèle entre A et C ; ce bloc est en série avec R4 (de C à B) ; et cette branche est en parallèle avec R3 et avec R5, qui sont chacune directement entre A et B.</p>\n<p><b>b) Expression littérale.</b></p>\n<p>Branche 1 : <code>Req1 = R1·R2 / (R1 + R2) + R4</code></p>\n<p>Trois branches en parallèle entre A et B :</p>\n<p><b><code>1/RAB = 1/Req1 + 1/R3 + 1/R5</code></b>, soit <code>RAB = 1 / ( 1/(R1·R2/(R1+R2) + R4) + 1/R3 + 1/R5 )</code></p>\n<p><b>Application numérique pour Req1 :</b></p>\n<p><code>R1 // R2 = 55 × 22 / (55 + 22) = 1210 / 77 ≈ 15,71 Ω</code></p>\n<p><code>Req1 = 15,71 + 100 ≈ 115,71 Ω</code></p>\n<p><b>En déduire R3 :</b> on isole 1/R3 dans la relation des parallèles :</p>\n<p><code>1/R3 = 1/RAB − 1/Req1 − 1/R5</code></p>\n<p><code>1/R3 = 1/8,43 − 1/115,71 − 1/100 ≈ 0,11862 − 0,00864 − 0,01000 ≈ 0,09998 S</code></p>\n<p><code>R3 = 1 / 0,09998 ≈ 10,0 Ω</code></p>\n<p><b>Résultat : R3 = 10 Ω.</b></p>\n<div class=\"exemple\"><b>Vérification :</b> avec R3 = 10 Ω, <code>1/RAB = 1/115,71 + 1/10 + 1/100 ≈ 0,00864 + 0,1 + 0,01 = 0,11864</code>, donc <code>RAB ≈ 8,43 Ω</code>. C'est bien la valeur de l'énoncé. Et RAB = 8,43 Ω est plus petite que la plus petite branche (R3 = 10 Ω), comme il se doit en parallèle.</div>\n<div class=\"attention\"><b>À propos des réponses écrites sur la feuille :</b>\n<ul><li>Le schéma redessiné est <b>juste</b> (R1 // R2, puis R4 jusqu'à B ; R3 et R5 chacune entre A et B), et la valeur entourée <b>10 Ω</b> est la bonne.</li>\n<li>« Req = (R1×R2/(R1+R2) + R4) <b>+</b> (Req1×R3/(Req1+R3)) <b>+</b> (Req2×R5/(Req2+R5)) » additionne des blocs qui sont en réalité <b>en parallèle</b> : c'est faux. La première parenthèse est bien Req1, mais ensuite on ne rajoute rien en série : <code>Req2 = Req1·R3/(Req1+R3)</code>, puis <code>RAB = Req2·R5/(Req2+R5)</code>. (Petite faute de frappe aussi : « 5s » au lieu de R5.)</li>\n<li>« 1/R1 + 1/R2 + R4, le tout divisé par R5 » mélange encore des inverses et des résistances, et diviser par R5 ne correspond à aucune association.</li>\n<li>« R3 = RAB − Req1 » serait valable si R3 était <b>en série</b> avec Req1. Ici R3 est en <b>parallèle</b>, donc on soustrait les <b>inverses</b> : <code>1/R3 = 1/RAB − 1/Req1 − 1/R5</code>. D'ailleurs RAB − Req1 = 8,43 − 115,71 serait négatif, ce qui est impossible pour une résistance.</li></ul></div>"
            }
          ],
          "pointsCles": [
            "En série (même courant) : Req = R1 + R2 + …",
            "En parallèle (mêmes deux nœuds) : 1/Req = 1/R1 + 1/R2 + …",
            "Le « produit sur somme » R1·R2/(R1 + R2) ne marche que pour deux résistances.",
            "On ne mélange jamais des 1/R et des R dans une même somme.",
            "Deux points reliés par un simple fil forment un seul et même nœud.",
            "On simplifie pas à pas en écrivant une ligne par étape (Req1, Req2…), sans additionner des blocs emboîtés.",
            "Une association en parallèle est toujours plus petite que sa plus petite résistance.",
            "Pour retrouver une résistance en parallèle, on soustrait les inverses : 1/R3 = 1/RAB − 1/Req1 − 1/R5."
          ],
          "definitions": [
            {
              "terme": "Résistance équivalente (Req)",
              "def": "Résistance unique qui, placée entre les mêmes bornes, se comporte exactement comme l'ensemble de résistances qu'elle remplace."
            },
            {
              "terme": "Association en série",
              "def": "Résistances placées l'une après l'autre sans dérivation entre elles ; elles sont traversées par le même courant."
            },
            {
              "terme": "Association en parallèle (//)",
              "def": "Résistances branchées entre les deux mêmes nœuds ; elles ont la même tension à leurs bornes."
            },
            {
              "terme": "Nœud",
              "def": "Point du circuit où se rejoignent au moins trois conducteurs ; tous les points reliés par un simple fil forment le même nœud."
            },
            {
              "terme": "Conductance",
              "def": "Inverse d'une résistance, G = 1/R, en siemens (S). En parallèle, les conductances s'additionnent."
            },
            {
              "terme": "Produit sur somme",
              "def": "Raccourci pour deux résistances en parallèle : R1 // R2 = R1·R2 / (R1 + R2)."
            }
          ],
          "flashcards": [
            {
              "q": "Formule de deux résistances en série ?",
              "r": "Req = R1 + R2."
            },
            {
              "q": "Formule de trois résistances en parallèle ?",
              "r": "1/Req = 1/R1 + 1/R2 + 1/R3, donc Req = 1 / (1/R1 + 1/R2 + 1/R3)."
            },
            {
              "q": "Quand peut-on utiliser « produit sur somme » ?",
              "r": "Seulement pour deux résistances en parallèle : R1·R2 / (R1 + R2)."
            },
            {
              "q": "Que valent deux résistances de 20 kΩ en parallèle ?",
              "r": "10 kΩ (n résistances identiques R en parallèle donnent R/n)."
            },
            {
              "q": "Exercice 1 : Req de (R1 // R2 // R3) + R4 + R5 ?",
              "r": "Req = 1 / (1/R1 + 1/R2 + 1/R3) + R4 + R5."
            },
            {
              "q": "Exercice 2 : Req du montage à 6 résistances ?",
              "r": "Req = Req1·R4 / (Req1 + R4) avec Req1 = 1/(1/R1 + 1/R2 + 1/R3) + R5 + R6."
            },
            {
              "q": "Exercice 3 : résistance équivalente du dipôle A-B ?",
              "r": "Req = 10 kΩ, avec Req = {[(R1 // R2) + R3] // R4 + R5} // R6."
            },
            {
              "q": "Exercice 4 : valeur de R3 ?",
              "r": "R3 = 10 Ω, grâce à 1/R3 = 1/RAB − 1/Req1 − 1/R5 avec Req1 ≈ 115,71 Ω."
            },
            {
              "q": "Comment savoir si deux résistances sont en parallèle ?",
              "r": "Elles sont branchées entre les deux mêmes nœuds."
            },
            {
              "q": "Pourquoi « 1/R1 + R4 » est-il faux ?",
              "r": "On additionne un inverse de résistance (en Ω⁻¹) et une résistance (en Ω) : ce ne sont pas les mêmes unités."
            }
          ],
          "quiz": [
            {
              "q": "R1, R2 et R3 en parallèle, suivies de R4 et R5 en série. Quelle expression est juste ?",
              "choix": [
                "Req = 1/(1/R1 + 1/R2 + 1/R3) + R4 + R5",
                "Req = 1/(1/R1 + 1/R2 + 1/R3 + R4 + R5)",
                "Req = R1·R2·R3/(R1 + R2 + R3) + R4 + R5",
                "1/Req = 1/R1 + 1/R2 + 1/R3 + R4 + R5"
              ],
              "bonne": 0,
              "explication": "On calcule d'abord le bloc parallèle avec les inverses, puis on ajoute R4 et R5 en série, en dehors de la fraction."
            },
            {
              "q": "Pour combien de résistances le « produit sur somme » est-il valable ?",
              "choix": [
                "Exactement deux",
                "Deux ou trois",
                "Autant qu'on veut",
                "Seulement des résistances égales"
              ],
              "bonne": 0,
              "explication": "R1·R2/(R1 + R2) vient de 1/R1 + 1/R2 réduit au même dénominateur ; pour trois résistances, le dénominateur devient R1·R2 + R1·R3 + R2·R3."
            },
            {
              "q": "Deux résistances de 20 kΩ en parallèle valent :",
              "choix": [
                "10 kΩ",
                "40 kΩ",
                "20 kΩ",
                "400 kΩ"
              ],
              "bonne": 0,
              "explication": "20 × 20 / (20 + 20) = 400/40 = 10 kΩ."
            },
            {
              "q": "Une association de résistances en parallèle est toujours :",
              "choix": [
                "plus petite que la plus petite résistance",
                "plus grande que la plus grande résistance",
                "égale à la moyenne des résistances",
                "comprise entre la plus petite et la plus grande"
              ],
              "bonne": 0,
              "explication": "Ajouter un chemin en parallèle facilite le passage du courant, donc fait baisser la résistance totale."
            },
            {
              "q": "Dans l'exercice 3 (R1 = R2 = R4 = R6 = 20 kΩ, R3 = R5 = 10 kΩ), que vaut Req ?",
              "choix": [
                "10 kΩ",
                "50 kΩ",
                "20 kΩ",
                "5 kΩ"
              ],
              "bonne": 0,
              "explication": "20//20 = 10, +10 = 20, //20 = 10, +10 = 20, //20 = 10 kΩ. 50 kΩ est ce qu'on obtient en additionnant à tort les trois étapes."
            },
            {
              "q": "Dans l'exercice 3, entre quels nœuds est branchée R4 ?",
              "choix": [
                "A et D",
                "C et D",
                "D et B",
                "A et C"
              ],
              "bonne": 0,
              "explication": "Toute la ligne verticale de gauche est le nœud A ; R4 relie cette ligne au nœud D."
            },
            {
              "q": "Dans l'exercice 4, R3 est :",
              "choix": [
                "en parallèle avec R5 et avec la branche (R1 // R2) + R4",
                "en série avec la branche (R1 // R2) + R4",
                "en série avec R5",
                "en parallèle avec R1 seulement"
              ],
              "bonne": 0,
              "explication": "Le fil du haut ramène le début de R3 au nœud A, et sa fin est B : R3 est directement entre A et B, comme R5."
            },
            {
              "q": "Dans l'exercice 4, comment obtient-on R3 ?",
              "choix": [
                "1/R3 = 1/RAB − 1/Req1 − 1/R5",
                "R3 = RAB − Req1",
                "R3 = RAB − Req1 − R5",
                "1/R3 = 1/RAB + 1/Req1 + 1/R5"
              ],
              "bonne": 0,
              "explication": "R3 est en parallèle : on isole son inverse dans 1/RAB = 1/Req1 + 1/R3 + 1/R5."
            },
            {
              "q": "Dans l'exercice 4, que vaut Req1 = (R1 // R2) + R4 ?",
              "choix": [
                "environ 115,7 Ω",
                "177 Ω",
                "environ 15,7 Ω",
                "122 Ω"
              ],
              "bonne": 0,
              "explication": "55 × 22 / 77 ≈ 15,71 Ω, puis + 100 Ω ≈ 115,71 Ω."
            },
            {
              "q": "Montage à 6 résistances : Req1 = (R1 // R2 // R3) + R5 + R6 est en parallèle avec R4. Alors :",
              "choix": [
                "Req = Req1·R4 / (Req1 + R4)",
                "Req = Req1 + R4",
                "Req = Req1 / R4",
                "Req = (Req1 + R4) / (Req1·R4)"
              ],
              "bonne": 0,
              "explication": "Deux résistances en parallèle : produit sur somme."
            }
          ],
          "examen": [
            {
              "titre": "Bloc parallèle suivi de deux résistances en série",
              "enonce": "<p>Le dipôle A-B est formé de trois résistances R1 = 20 Ω, R2 = 30 Ω et R3 = 60 Ω branchées entre les deux mêmes nœuds (en parallèle). Ce bloc est suivi, sans dérivation, de R4 = 15 Ω puis de R5 = 25 Ω.</p>",
              "questions": [
                {
                  "type": "libre",
                  "q": "Donner l'expression littérale de la résistance équivalente Req du dipôle A-B.",
                  "points": 2,
                  "attendu": "Req = 1/(1/R1 + 1/R2 + 1/R3) + R4 + R5",
                  "corrige": "<p>Le bloc parallèle : <code>1/Req1 = 1/R1 + 1/R2 + 1/R3</code>, donc <code>Req1 = 1/(1/R1 + 1/R2 + 1/R3)</code>.</p><p>Puis la série : <b><code>Req = 1/(1/R1 + 1/R2 + 1/R3) + R4 + R5</code></b>.</p><div class=\"attention\">R4 et R5 restent en dehors de la fraction : on ne mélange pas des 1/R et des R dans une même somme.</div>"
                },
                {
                  "type": "num",
                  "q": "Calculer Req1, la résistance du bloc parallèle.",
                  "reponse": 10,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>1/Req1 = 1/20 + 1/30 + 1/60 = 3/60 + 2/60 + 1/60 = 6/60</code></p><p><b>Req1 = 10 Ω</b> (plus petite que 20 Ω, c'est cohérent).</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer Req.",
                  "reponse": 50,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>Req = 10 + 15 + 25</code></p><p><b>Req = 50 Ω</b></p>"
                },
                {
                  "type": "qcm",
                  "q": "Un élève calcule le bloc avec R1·R2·R3/(R1 + R2 + R3). Pourquoi est-ce faux ?",
                  "choix": [
                    "Le produit sur somme ne vaut que pour deux résistances",
                    "Il fallait additionner R1, R2 et R3",
                    "Il fallait multiplier par R4",
                    "Ce n'est pas faux, c'est une autre méthode"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Le produit sur somme ne marche que pour <b>deux</b> résistances. Ici il donnerait 36 000/110 ≈ 327 Ω, plus grand que chaque résistance du parallèle : impossible.</p>"
                }
              ]
            },
            {
              "titre": "Réduction pas à pas avec les nœuds A, B, C, D",
              "enonce": "<p>Un dipôle A-B comporte quatre nœuds A, B, C, D et six résistances :</p><ul><li>R1 = 12 kΩ entre A et C ;</li><li>R2 = 6 kΩ entre A et C ;</li><li>R3 = 8 kΩ entre C et D ;</li><li>R4 = 12 kΩ entre A et D ;</li><li>R5 = 4 kΩ entre D et B ;</li><li>R6 = 15 kΩ entre A et B.</li></ul>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer Req1 = R1 // R2.",
                  "reponse": 4,
                  "unite": "kΩ",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>R1 et R2 sont entre les mêmes nœuds A et C : en parallèle.</p><p><code>Req1 = 12 × 6 / (12 + 6) = 72 / 18</code></p><p><b>Req1 = 4 kΩ</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la résistance équivalente entre A et D (après avoir tenu compte de R3 et R4).",
                  "reponse": 6,
                  "unite": "kΩ",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Req1 (A vers C) puis R3 (C vers D) sont en série : <code>Req2 = 4 + 8 = 12 kΩ</code>, entre A et D.</p><p>Req2 et R4 sont toutes deux entre A et D : en parallèle. <code>Req3 = 12 × 12 / 24</code></p><p><b>Req3 = 6 kΩ</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la résistance équivalente RAB du dipôle.",
                  "reponse": 6,
                  "unite": "kΩ",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Req3 (A vers D) puis R5 (D vers B) : en série, <code>Req4 = 6 + 4 = 10 kΩ</code>.</p><p>Req4 et R6 sont entre A et B : en parallèle. <code>RAB = 10 × 15 / 25</code></p><p><b>RAB = 6 kΩ</b></p>"
                },
                {
                  "type": "libre",
                  "q": "Écrire l'expression littérale complète de RAB avec la notation //.",
                  "points": 1,
                  "attendu": "RAB = { [ (R1 // R2) + R3 ] // R4 + R5 } // R6",
                  "corrige": "<p>Les étapes sont emboîtées, on ne les additionne pas :</p><p><code>RAB = { [ (R1 // R2) + R3 ] // R4 + R5 } // R6</code></p><div class=\"attention\">Additionner les résultats des étapes (4 + 6 + 6) serait faux : chaque étape sert dans la suivante.</div>"
                }
              ]
            },
            {
              "titre": "Retrouver une résistance inconnue",
              "enonce": "<p>Entre A et B, trois branches sont en parallèle :</p><ul><li>branche 1 : R1 = 30 Ω et R2 = 60 Ω en parallèle (entre A et C), puis R4 = 80 Ω entre C et B ;</li><li>branche 2 : R3, inconnue, directement entre A et B ;</li><li>branche 3 : R5 = 50 Ω directement entre A et B.</li></ul><p>On mesure RAB = 20 Ω.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Calculer la résistance Req1 de la branche 1.",
                  "reponse": 100,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>R1 // R2 = 30 × 60 / 90 = 20 Ω</code>, puis en série avec R4 : <code>Req1 = 20 + 80</code>.</p><p><b>Req1 = 100 Ω</b></p>"
                },
                {
                  "type": "qcm",
                  "q": "Quelle relation permet de trouver R3 ?",
                  "choix": [
                    "1/R3 = 1/RAB − 1/Req1 − 1/R5",
                    "R3 = RAB − Req1 − R5",
                    "R3 = RAB − Req1",
                    "1/R3 = 1/RAB + 1/Req1 + 1/R5"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>R3 est en parallèle avec les deux autres branches : <code>1/RAB = 1/Req1 + 1/R3 + 1/R5</code>. On isole l'inverse de R3.</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer R3.",
                  "reponse": 50,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p><code>1/R3 = 1/20 − 1/100 − 1/50 = 0,05 − 0,01 − 0,02 = 0,02 S</code></p><p><b>R3 = 50 Ω</b></p><p>Vérification : 1/100 + 1/50 + 1/50 = 0,05 S, soit RAB = 20 Ω. RAB est bien plus petite que la plus petite branche (50 Ω).</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "devoirs-lois-kirchhoff",
          "titre": "Devoirs : lois de Kirchhoff (exercices 1 à 10)",
          "type": "Exercices",
          "date": "2026-10-08",
          "source": "Devoir « Lois de Kirchhoff » du prof ; correction de l'exercice 2 faite en classe d'après le cahier de Maélyss Simon (proposé via l'appli)",
          "resume": "Ce chapitre corrige les dix exercices du devoir sur les lois de Kirchhoff. On apprend à compter les branches, les nœuds et les mailles pour savoir combien d'équations écrire, puis à poser et résoudre le système. On utilise aussi la formule de Millman pour les circuits à deux nœuds et le théorème de superposition, qui consiste à faire agir une source à la fois puis à additionner. Chaque résultat est vérifié par un bilan aux nœuds ou par une tension calculée de deux façons.",
          "sections": [
            {
              "titre": "Méthode : Kirchhoff et théorème de superposition",
              "html": "\n<p><b>Vocabulaire.</b> Un <b>nœud</b> est un point où se rejoignent au moins trois fils. Une <b>branche</b> est une portion de circuit entre deux nœuds voisins : tous ses éléments sont parcourus par le <b>même courant</b>. Une <b>maille</b> est une boucle fermée.</p>\n<p><b>Combien d'équations ?</b> Avec b branches (donc b courants inconnus) et n nœuds :</p>\n<ul><li><code>n − 1</code> équations de nœuds indépendantes ;</li>\n<li><code>m = b − n + 1</code> équations de mailles indépendantes.</li></ul>\n<p>Au total <code>(n − 1) + (b − n + 1) = b</code> équations pour b inconnues : le système se résout.</p>\n<p><b>Les étapes de Kirchhoff :</b></p>\n<ol><li>Placer un courant fléché dans chaque branche (sens choisi librement).</li>\n<li>Flécher la tension de chaque résistance en <b>convention récepteur</b> : flèche de tension opposée à la flèche de courant, et <code>U = R·I</code>.</li>\n<li>Écrire la loi des nœuds : <code>somme des courants qui arrivent = somme des courants qui repartent</code>.</li>\n<li>Écrire la loi des mailles : on fait le tour de la boucle, on compte <b>+</b> une tension dont la flèche va dans le sens du parcours et <b>−</b> sinon, la somme vaut 0.</li>\n<li>Résoudre le système, puis <b>vérifier</b> (bilan au nœud, ou même tension calculée par deux chemins).</li></ol>\n<p><b>Astuce pour deux nœuds (Millman).</b> Quand toutes les branches sont entre les deux mêmes nœuds A et B, la tension commune vaut :</p>\n<p><code>U_AB = (somme des E_k / R_k) / (somme des 1 / R_k)</code></p>\n<p>(une branche sans générateur compte 0 au numérateur, mais compte au dénominateur). C'est simplement la loi des nœuds écrite avec <code>I_k = (E_k − U_AB) / R_k</code>.</p>\n<p><b>Théorème de superposition</b> (circuit linéaire : résistances et sources) : le courant dans une branche est la <b>somme</b> des courants créés par chaque source agissant <b>seule</b>.</p>\n<ul><li>On <b>éteint</b> une source de tension en la remplaçant par un <b>fil</b> (court-circuit).</li>\n<li>On <b>éteint</b> une source de courant en la remplaçant par un <b>interrupteur ouvert</b> (circuit ouvert).</li>\n<li>On calcule chaque contribution avec son signe (même flèche de référence à chaque fois), puis on additionne.</li></ul>\n<div class=\"attention\"><b>Résultat négatif :</b> ce n'est pas une erreur. Le courant circule simplement dans le sens opposé à la flèche choisie au départ.</div>\n<div class=\"attention\"><b>Piège :</b> on ne peut pas calculer chaque courant avec <code>I = E / R</code> dans sa branche toute seule. Les branches sont reliées entre elles : la tension aux bornes de chaque résistance n'est pas égale à la f.é.m. du générateur de sa branche.</div>\n"
            },
            {
              "titre": "Exercice 1 : nombre d'équations, puis calcul de I3",
              "html": "\n<p><b>Montage (figure 1).</b> Un générateur E1 (flèche vers le haut) en série avec R1 alimente deux résistances en parallèle : R2 // R3. Le bas du circuit est relié à la masse. I3 est le courant qui descend dans R3.</p>\n<p><b>Partie I : nombre minimal d'équations de mailles.</b></p>\n<ul><li>a. Nombre de branches : <b>b = 3</b> (branche E1 + R1, branche R2, branche R3).</li>\n<li>b. Les trois courants sont inconnus : <b>b<sub>inc</sub> = 3</b>.</li>\n<li>c. Nombre de nœuds : <b>n = 2</b> (le point haut où se rejoignent R1, R2 et R3, et le fil du bas, qui ne forme qu'un seul nœud même s'il est long).</li>\n<li>d. <code>m = b − n + 1 = 3 − 2 + 1</code>, soit <b>m = 2 équations de mailles</b>. Avec 1 équation de nœud, on a bien 3 équations pour 3 inconnues.</li></ul>\n<p><b>Partie II : application des lois de Kirchhoff.</b></p>\n<p>a et b. On choisit I1 qui monte dans E1 puis traverse R1 vers le nœud haut, I2 qui descend dans R2, I3 qui descend dans R3. En convention récepteur : U1 = R1·I1, U2 = R2·I2, U3 = R3·I3, chaque flèche de tension étant opposée au courant.</p>\n<p>d. <b>Nœud haut</b> : <code>I1 = I2 + I3</code></p>\n<p><b>Maille 1</b> (E1, R1, R2) : <code>E1 − R1·I1 − R2·I2 = 0</code></p>\n<p><b>Maille 2</b> (R2, R3) : <code>R2·I2 − R3·I3 = 0</code></p>\n<div class=\"attention\">La feuille demande « n équations de nœuds ». Avec 2 nœuds, les deux équations disent la même chose (I1 = I2 + I3 en haut, I2 + I3 = I1 en bas) : une seule est <b>utile</b>. On retient donc toujours <b>n − 1</b> équations de nœuds.</div>\n<p>e et f. De la maille 2 : <code>I2 = R3·I3 / R2</code>. Donc <code>I1 = I3·(R2 + R3) / R2</code>. On remplace dans la maille 1 :</p>\n<p><code>E1 = R1·I3·(R2 + R3)/R2 + R3·I3</code>, d'où :</p>\n<p><b><code>I3 = E·R2 / (R1·R2 + R1·R3 + R2·R3)</code></b></p>\n<p>g. Application numérique avec R1 = R2 = R3 = 1 Ω et E = 9 V : <code>I3 = 9 × 1 / (1 + 1 + 1) = 9 / 3</code>, soit <b>I3 = 3 A</b>.</p>\n<p>On trouve aussi <b>I2 = 3 A</b> et <b>I1 = 6 A</b>. Tensions (c) : U1 = 1 × 6 = 6 V, U2 = U3 = 1 × 3 = 3 V.</p>\n<div class=\"exemple\"><b>Vérification.</b> Nœud : 6 = 3 + 3, juste. Maille 1 : 9 − 6 − 3 = 0, juste. Autre méthode : Req = R1 + (R2 // R3) = 1 + 0,5 = 1,5 Ω, donc I1 = 9 / 1,5 = 6 A, qui se partage en deux moitiés égales de 3 A.</div>\n<p><small>Lecture de la feuille : la f.é.m. s'appelle E1 sur le schéma et E dans les questions f et g ; c'est la même.</small></p>\n"
            },
            {
              "titre": "Exercice 2 : deux générateurs, trois branches",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 400 230\" role=\"img\" aria-label=\"Circuit à deux générateurs : trois branches en parallèle entre les nœuds A et B. Branche 1 : R1 et E1, courant I1 vers le haut. Branche 2 : R2 et E2, courant I2 vers le haut. Branche 3 : R3, courant I3 vers le bas.\" style=\"width:100%;min-width:340px;max-width:400px;font-family:var(--f-mono);font-size:13px\">\n<g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\">\n<path d=\"M70 40H330M70 200H330\"/>\n<path d=\"M70 40V68M70 112V146M70 156V200\"/><path d=\"M200 40V68M200 112V146M200 156V200\"/><path d=\"M330 40V98M330 142V200\"/>\n</g>\n<g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"60\" y=\"68\" width=\"20\" height=\"44\"/><rect x=\"190\" y=\"68\" width=\"20\" height=\"44\"/><rect x=\"320\" y=\"98\" width=\"20\" height=\"44\"/></g>\n<g stroke=\"var(--ink)\" stroke-width=\"2.5\"><path d=\"M54 146H86M184 146H216\"/><path d=\"M62 156H78M192 156H208\" stroke-width=\"4\"/></g>\n<g fill=\"var(--ink)\" stroke=\"none\"><circle cx=\"200\" cy=\"40\" r=\"4\"/><circle cx=\"200\" cy=\"200\" r=\"4\"/></g>\n<g stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"var(--accent)\">\n<path d=\"M70 58V46\" /><path d=\"M65 50L70 42L75 50Z\"/>\n<path d=\"M200 58V46\"/><path d=\"M195 50L200 42L205 50Z\"/>\n<path d=\"M330 52V84\"/><path d=\"M325 78L330 86L335 78Z\"/>\n</g>\n<g fill=\"var(--ink)\" stroke=\"none\">\n<text x=\"196\" y=\"30\">A</text><text x=\"196\" y=\"222\">B</text>\n<text x=\"88\" y=\"95\">R1 = 2 Ω</text><text x=\"218\" y=\"95\">R2 = 5 Ω</text><text x=\"346\" y=\"125\">R3</text><text x=\"346\" y=\"141\">= 10 Ω</text>\n<text x=\"90\" y=\"155\">E1 = 20 V</text><text x=\"220\" y=\"155\">E2 = 70 V</text>\n<text x=\"78\" y=\"56\" fill=\"var(--accent)\">I1</text><text x=\"208\" y=\"56\" fill=\"var(--accent)\">I2</text><text x=\"340\" y=\"70\" fill=\"var(--accent)\">I3</text>\n</g></svg></div>\n<p><b>Données relues sur la feuille :</b> R1 = 2 Ω ; R2 = 5 Ω ; R3 = 10 Ω ; E1 = 20 V ; E2 = 70 V. Les deux générateurs ont leur borne + (grande plaque) en haut, du côté de A. I1 et I2 montent vers A, I3 descend dans R3 (flèches tracées au crayon sur la feuille).</p>\n<p><b>Question :</b> déterminer les intensités des courants dans les trois branches.</p>\n<p><b>1. Nœud A :</b> <code>I1 + I2 = I3</code></p>\n<p><b>2. Maille 1</b> (branches 1 et 3) : <code>E1 − R1·I1 − R3·I3 = 0</code>, soit <code>20 = 2·I1 + 10·I3</code></p>\n<p><b>3. Maille 2</b> (branches 2 et 3) : <code>E2 − R2·I2 − R3·I3 = 0</code>, soit <code>70 = 5·I2 + 10·I3</code></p>\n<p><b>4. Résolution.</b> Avec la tension commune U_AB = 20 − 2·I1 = 70 − 5·I2 = 10·I3. Par Millman :</p>\n<p><code>U_AB = (20/2 + 70/5) / (1/2 + 1/5 + 1/10) = (10 + 14) / 0,8 = 24 / 0,8 = 30 V</code></p>\n<p>Donc <code>I1 = (20 − 30)/2</code>, <code>I2 = (70 − 30)/5</code>, <code>I3 = 30/10</code> :</p>\n<p><b>I1 = −5 A ; I2 = 8 A ; I3 = 3 A.</b></p>\n<p>I1 est négatif : le courant <b>descend</b> réellement dans la branche de E1. Le générateur E2 (70 V) est plus fort et « recharge » E1.</p>\n<div class=\"exemple\"><b>Vérification.</b> Nœud A : −5 + 8 = 3, juste. Tension commune : 20 − 2 × (−5) = 30 V ; 70 − 5 × 8 = 30 V ; 10 × 3 = 30 V. Les trois branches donnent bien la même tension U_AB = 30 V.<br>\n<b>Contrôle par superposition</b> (non demandé) : E1 seule donne I1 = 3,75 A, I2 = −2,5 A, I3 = 1,25 A ; E2 seule donne I1 = −8,75 A, I2 = 10,5 A, I3 = 1,75 A. Sommes : −5 A, 8 A, 3 A. Même résultat.</div>\n<div class=\"attention\"><b>Erreur dans les annotations au crayon.</b> En haut de la feuille, il est écrit I1 = 20/2 = 10 A, I2 = 70/5 = 14 A et I3 = 90/10 = 9 A. C'est une idée naturelle, mais elle ne marche pas ici : <code>I = U / R</code> s'applique avec la tension <b>aux bornes de la résistance</b>, pas avec la f.é.m. du générateur de la branche. Les trois branches sont reliées entre A et B : la tension aux bornes de R1 n'est pas 20 V, elle vaut 20 − 30 = −10 V, car le point A est imposé à 30 V par l'ensemble du circuit. De même, I3 ne vaut pas (20 + 70)/10 : les deux générateurs sont en parallèle, pas en série. On le voit d'ailleurs tout de suite : 10 + 14 ≠ 9, la loi des nœuds n'est pas respectée. La bonne méthode est le système de Kirchhoff (ou Millman) ci-dessus.</div>\n<div class=\"attention\"><b>À propos de la correction du cahier</b> (même circuit, mêmes valeurs) : la loi des nœuds y est écrite « I1 + I2 + I3 = 0 », ce qui ne serait juste que si les trois flèches entraient en A. Avec I3 qui sort de A, il faut <b>I3 = I1 + I2</b>, relation que la suite du cahier utilise bien. La maille 2 y est d'abord écrite « E2 − R2·I2 + R3·I3 = 0 » : le bon signe devant R3·I3 est <b>−</b>. Le résultat final du cahier (−5 A, 8 A, 3 A) est juste.</div>\n<p><small>La correction faite en classe (cahier de Maélyss Simon, proposée via l'appli) trouve le même résultat : I1 = −5 A, I2 = 8 A, I3 = 3 A. Ses pages sont dans la section Photos.</small></p>"
            },
            {
              "titre": "Exercice 3 : trois générateurs en parallèle sur R4",
              "html": "\n<p><b>Montage.</b> Quatre branches sont branchées entre les nœuds A (en haut) et B (en bas) : E1 en série avec R1, E2 en série avec R2, E3 en série avec R3 (borne + de chaque générateur vers A, d'après les grandes plaques), et la résistance R4 parcourue par I de A vers B. U_AB est fléchée de B vers A.</p>\n<p><b>Données relues :</b> E1 = 5 V ; E2 = 20 V ; E3 = 4 V ; R1 = R2 = 2 Ω ; R3 = 1 Ω.</p>\n<p><b>1. Expression de U_AB.</b> Dans chaque branche à générateur, on note I_k le courant qui monte vers A : <code>I_k = (E_k − U_AB) / R_k</code>. Dans R4 : <code>I = U_AB / R4</code>. Loi des nœuds en A : <code>I1 + I2 + I3 = I</code>. En remplaçant et en isolant U_AB :</p>\n<p><b><code>U_AB = (E1/R1 + E2/R2 + E3/R3) / (1/R1 + 1/R2 + 1/R3 + 1/R4)</code></b></p>\n<div class=\"attention\"><b>Donnée manquante :</b> la feuille ne donne <b>pas la valeur de R4</b>. On ne peut donc pas donner un nombre unique pour U_AB et I. Voici ce qu'on peut calculer, et la formule à utiliser dès que R4 est connue.</div>\n<p><b>2. Application numérique.</b> Numérateur : <code>5/2 + 20/2 + 4/1 = 2,5 + 10 + 4 = 16,5 A</code>. Somme des conductances des trois générateurs : <code>1/2 + 1/2 + 1 = 2 S</code>.</p>\n<ul><li>Sans R4 (A et B à vide) : <code>U_AB = 16,5 / 2</code> = <b>8,25 V</b>.</li>\n<li>Avec R4 : <code>U_AB = 16,5 / (2 + 1/R4)</code>.</li></ul>\n<p><b>3. Calcul de I.</b> <code>I = U_AB / R4 = 16,5 / (2·R4 + 1)</code>, ce qui s'écrit aussi <b><code>I = 8,25 / (0,5 + R4)</code></b> (R4 en ohms). Les trois générateurs se comportent comme un seul générateur de 8,25 V avec une résistance interne de 0,5 Ω (R1 // R2 // R3).</p>\n<div class=\"exemple\"><b>Exemple de vérification</b> avec une valeur choisie, R4 = 1 Ω (valeur supposée, pas sur la feuille) : U_AB = 16,5 / 3 = 5,5 V et I = 5,5 A. Courants : I1 = (5 − 5,5)/2 = −0,25 A ; I2 = (20 − 5,5)/2 = 7,25 A ; I3 = (4 − 5,5)/1 = −1,5 A. Bilan en A : −0,25 + 7,25 − 1,5 = 5,5 A = I, juste.</div>\n"
            },
            {
              "titre": "Exercice 4 : un générateur, R2 // R3",
              "html": "\n<p><b>Montage.</b> E en série avec R1 (borne + vers le haut), puis deux branches entre A et B : R2, et R3 parcourue par I de A vers B.</p>\n<p><b>Données relues :</b> E = 10 V ; R1 = R2 = 2 Ω ; R3 = 3 Ω.</p>\n<p><b>Kirchhoff.</b> On note I1 le courant dans E et R1 (vers A) et I2 le courant dans R2 (de A vers B).</p>\n<ul><li>Nœud A : <code>I1 = I2 + I</code></li>\n<li>Maille (E, R1, R2) : <code>E − R1·I1 − R2·I2 = 0</code></li>\n<li>Maille (R2, R3) : <code>R2·I2 − R3·I = 0</code></li></ul>\n<p>C'est exactement le montage de l'exercice 1, avec I à la place de I3. D'où :</p>\n<p><code>I = E·R2 / (R1·R2 + R1·R3 + R2·R3) = 10 × 2 / (4 + 6 + 6) = 20 / 16</code></p>\n<p><b>I = 1,25 A</b></p>\n<p>Puis U_AB = R3·I = 3 × 1,25 = 3,75 V ; I2 = 3,75 / 2 = 1,875 A ; I1 = (10 − 3,75)/2 = 3,125 A.</p>\n<div class=\"exemple\"><b>Vérification.</b> Nœud A : 1,875 + 1,25 = 3,125 A, juste. Maille : 10 − 2 × 3,125 − 2 × 1,875 = 10 − 6,25 − 3,75 = 0, juste. Autre chemin : R2 // R3 = 6/5 = 1,2 Ω ; Req = 3,2 Ω ; I1 = 10 / 3,2 = 3,125 A ; diviseur de courant I = 3,125 × 2/5 = 1,25 A.</div>\n"
            },
            {
              "titre": "Exercice 5 : deux générateurs, courant i3",
              "html": "\n<p><b>Montage.</b> E1 à gauche, R1 en haut à gauche jusqu'au nœud A ; R2 en haut à droite de A jusqu'à E2 à droite ; R3 entre A et B, parcourue par i3 de A vers B. Les flèches de E1 et E2 montent : leur borne + est en haut.</p>\n<p><b>Données relues :</b> R1 = 15 Ω ; R2 = 10 Ω ; R3 = 3 Ω ; E1 = 10 V ; E2 = 5 V.</p>\n<p><b>1. Expression de i3.</b> On note i1 (de E1 vers A dans R1) et i2 (de E2 vers A dans R2).</p>\n<ul><li>Nœud A : <code>i1 + i2 = i3</code></li>\n<li>Maille gauche : <code>E1 − R1·i1 − R3·i3 = 0</code></li>\n<li>Maille droite : <code>E2 − R2·i2 − R3·i3 = 0</code></li></ul>\n<p>On tire <code>i1 = (E1 − R3·i3)/R1</code> et <code>i2 = (E2 − R3·i3)/R2</code>, on remplace dans la loi des nœuds et on isole i3 :</p>\n<p><b><code>i3 = (R2·E1 + R1·E2) / (R1·R2 + R1·R3 + R2·R3)</code></b></p>\n<p><b>2. Application numérique :</b> <code>i3 = (10 × 10 + 15 × 5) / (150 + 45 + 30) = 175 / 225 = 7/9</code></p>\n<p><b>i3 = 7/9 A ≈ 0,778 A</b>, donc U_AB = 3 × 7/9 = 7/3 V ≈ 2,33 V.</p>\n<p>Puis i1 = (10 − 7/3)/15 = 23/45 A ≈ 0,511 A et i2 = (5 − 7/3)/10 = 4/15 A ≈ 0,267 A.</p>\n<div class=\"exemple\"><b>Vérification.</b> Nœud A : 23/45 + 12/45 = 35/45 = 7/9 A, juste. Par superposition : E1 seule donne 4/9 A dans R3, E2 seule donne 1/3 A = 3/9 A ; total 7/9 A. Même résultat.</div>\n"
            },
            {
              "titre": "Exercice 6 : courant I3 dans R3, deux montages",
              "html": "\n<p><b>Données relues :</b> R1 = R2 = R3 = R4 = 1 kΩ ; I0 = 100 mA ; E = 12 V.</p>\n<p><small>Lecture : sur la feuille, le signe entre R2 et R3 ressemble à « ≠ » ; c'est en fait un « = » abîmé par l'indice 2. Toutes les résistances valent 1 kΩ. Le montage 1 utilise une source de courant notée Is, dont la valeur n'est pas écrite : on prend Is = I0 = 100 mA, seule valeur de courant donnée.</small></p>\n<p><b>Montage 1.</b> La source de courant Is (flèche vers le haut) injecte son courant dans le nœud haut T. Entre T et la masse M : R1. Entre T et le nœud N : R2. Entre N et M : R3. Entre N et la borne + de E (flèche vers le haut, borne − à la masse) : R4. On cherche I3, le courant qui descend dans R3.</p>\n<p>Loi des nœuds avec les potentiels (V_M = 0) :</p>\n<ul><li>en T : <code>Is = V_T/R1 + (V_T − V_N)/R2</code></li>\n<li>en N : <code>(V_T − V_N)/R2 + (E − V_N)/R4 = V_N/R3</code></li></ul>\n<p>Avec 1 kΩ partout et Is = 0,1 A : V_T = 62,4 V et V_N = 24,8 V, donc <b>I3 = V_N / R3 = 24,8 mA</b>.</p>\n<p><b>Par superposition</b> (pratique ici) :</p>\n<ul><li>Is seule (E remplacée par un fil) : Is se partage entre R1 (1 kΩ) et R2 + (R3 // R4) = 1,5 kΩ. Dans R2 passe <code>Is × 1 / 2,5 = 0,4·Is</code>, qui se partage en deux moitiés égales entre R3 et R4 : <code>I3' = 0,2·Is = 20 mA</code>.</li>\n<li>E seule (Is remplacée par un circuit ouvert) : E voit R4 + R3 // (R2 + R1) = 1 + 2/3 = 5/3 kΩ, donc 7,2 mA dans R4 ; la tension en N vaut 7,2 mA × 2/3 kΩ = 4,8 V, donc <code>I3'' = 4,8 mA</code>.</li>\n<li>Somme : <code>I3 = Is/5 + E/(2,5 kΩ) = 20 + 4,8 = 24,8 mA</code>. Même résultat.</li></ul>\n<p><b>Montage 2</b> (même schéma que l'exercice 9). Trois branches entre le fil du haut et le fil du bas : la source de courant I0 (vers le haut), le générateur E (borne + en haut) en série avec R1, parcouru par I1 vers le haut, et la branche R2 + R3 parcourue par I2. Ici I3 = I2, et U est la tension aux bornes de R3.</p>\n<ul><li>Nœud haut : <code>I2 = I0 + I1</code></li>\n<li>Maille (E, R1, R2, R3) : <code>E − R1·I1 − (R2 + R3)·I2 = 0</code></li></ul>\n<p>On remplace I1 = I2 − I0 : <code>E + R1·I0 = (R1 + R2 + R3)·I2</code>, d'où <b><code>I2 = (E + R1·I0) / (R1 + R2 + R3)</code></b>.</p>\n<p>AN : <code>I2 = (12 + 1000 × 0,1) / 3000 = 112 / 3000</code>, soit <b>I3 = I2 ≈ 37,3 mA</b> (exactement 14/375 A). Puis I1 = 37,33 − 100 = <b>−62,7 mA</b> et U = R3·I2 ≈ <b>37,3 V</b>.</p>\n<div class=\"exemple\"><b>Vérification</b> (montage 2) : tension entre les fils haut et bas calculée par deux chemins. Branche E, R1 : 12 − 1000 × (−0,0627) ≈ 74,7 V. Branche R2 + R3 : 2000 × 0,0373 ≈ 74,7 V. Les deux chemins donnent la même valeur (exactement 224/3 V).</div>\n<div class=\"attention\">I1 est négatif : la source de courant impose 100 mA, mais la branche R2 + R3 n'en prend que 37,3 mA ; le reste (62,7 mA) redescend par la branche E, R1.</div>\n"
            },
            {
              "titre": "Exercice 7 : superposition, calcul de v0 et i0",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 460 225\" role=\"img\" aria-label=\"Circuit de l'exercice 7. Nœud a : borne + de la source 10 V. Entre a et b : 60 Ω. Entre a et d, par le fil du haut : 45 Ω, parcourue par i0 de a vers d. Entre b et c : source de courant 2 A dont la flèche va de c vers b. Entre c et d : 5 Ω. Entre b et la masse g : 20 Ω, avec v0 mesurée + en bas et − en haut. Entre c et g : 5 Ω. Entre d et g : 10 Ω. La borne − de la source 10 V est reliée à g.\" style=\"width:100%;min-width:320px;max-width:460px;font-family:var(--f-mono);font-size:13px\"><g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M40 40H200M240 40H400\"/><path d=\"M40 40V134M40 166V200H400\"/><path d=\"M40 100H80M120 100H206M234 100H320M360 100H400\"/><path d=\"M160 100V130M160 170V200M280 100V130M280 170V200M400 40V130M400 170V200\"/><circle cx=\"40\" cy=\"150\" r=\"16\"/><circle cx=\"220\" cy=\"100\" r=\"14\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"200\" y=\"32\" width=\"40\" height=\"16\"/><rect x=\"80\" y=\"92\" width=\"40\" height=\"16\"/><rect x=\"320\" y=\"92\" width=\"40\" height=\"16\"/><rect x=\"152\" y=\"130\" width=\"16\" height=\"40\"/><rect x=\"272\" y=\"130\" width=\"16\" height=\"40\"/><rect x=\"392\" y=\"130\" width=\"16\" height=\"40\"/></g><g fill=\"var(--ink)\"><circle cx=\"40\" cy=\"100\" r=\"3.5\"/><circle cx=\"160\" cy=\"100\" r=\"3.5\"/><circle cx=\"280\" cy=\"100\" r=\"3.5\"/><circle cx=\"400\" cy=\"100\" r=\"3.5\"/><circle cx=\"160\" cy=\"200\" r=\"3.5\"/><circle cx=\"280\" cy=\"200\" r=\"3.5\"/></g><g stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"var(--accent)\"><path d=\"M228 100H214\"/><path d=\"M216 95L208 100L216 105Z\"/><path d=\"M300 26H336\"/><path d=\"M332 21L340 26L332 31Z\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><text x=\"36\" y=\"146\">+</text><text x=\"37\" y=\"162\">−</text><text x=\"4\" y=\"190\">10 V</text><text x=\"200\" y=\"24\">45 Ω</text><text x=\"84\" y=\"88\">60 Ω</text><text x=\"324\" y=\"88\">5 Ω</text><text x=\"208\" y=\"128\">2 A</text><text x=\"174\" y=\"155\">20 Ω</text><text x=\"294\" y=\"155\">5 Ω</text><text x=\"414\" y=\"155\">10 Ω</text><text x=\"140\" y=\"124\">−</text><text x=\"138\" y=\"190\">+</text><text x=\"116\" y=\"157\">v0</text><text x=\"344\" y=\"22\" fill=\"var(--accent)\">i0</text><text x=\"28\" y=\"94\">a</text><text x=\"164\" y=\"94\">b</text><text x=\"284\" y=\"94\">c</text><text x=\"404\" y=\"94\">d</text><text x=\"284\" y=\"216\">g</text></g></svg></div>\n<p><b>Lecture du schéma</b> (voir la figure ; noms des nœuds a, b, c, d, g ajoutés pour la correction) : source 10 V entre g (−) et a (+) ; 60 Ω entre a et b ; 45 Ω entre a et d (fil du haut), parcourue par i0 de a vers d ; source de courant 2 A entre b et c, flèche de c vers b ; 5 Ω entre c et d ; 20 Ω entre b et g ; 5 Ω entre c et g ; 10 Ω entre d et g. La tension v0 est mesurée aux bornes de 20 Ω, avec le <b>+ en bas</b> : <code>v0 = V_g − V_b = −V_b</code> (on prend V_g = 0).</p>\n<p><b>Étape 1 : la source 10 V seule</b> (la source 2 A devient un circuit ouvert).</p>\n<ul><li>Côté gauche : 60 Ω et 20 Ω en série sous 10 V. <code>V_b = 10 × 20/80 = 2,5 V</code>, donc <code>v0' = −2,5 V</code>.</li>\n<li>Côté droit : 45 Ω en série avec 10 Ω // (5 Ω + 5 Ω) = 10 // 10 = 5 Ω. Donc <code>i0' = 10 / (45 + 5) = 0,2 A</code>.</li></ul>\n<p><b>Étape 2 : la source 2 A seule</b> (la source 10 V devient un fil : a est relié à g).</p>\n<ul><li>Le courant 2 A arrive en b. Depuis b, il ne peut aller vers g que par 60 Ω (via a) ou 20 Ω : 60 // 20 = 15 Ω, donc <code>V_b = 2 × 15 = 30 V</code> et <code>v0'' = −30 V</code>.</li>\n<li>Le courant 2 A est pris au nœud c. Il revient de g vers c par 5 Ω (vertical) et par le chemin 5 Ω en série avec (45 // 10). 45 // 10 = 90/11 Ω ; ce chemin vaut 5 + 90/11 = 145/11 Ω. Résolution des nœuds : V_c = −7,25 V et V_d = −4,5 V. Donc <code>i0'' = (0 − V_d)/45 = 4,5/45 = 0,1 A</code>.</li></ul>\n<p><b>Étape 3 : somme.</b></p>\n<p><code>v0 = v0' + v0'' = −2,5 − 30</code> soit <b>v0 = −32,5 V</b></p>\n<p><code>i0 = i0' + i0'' = 0,2 + 0,1</code> soit <b>i0 = 0,3 A</b></p>\n<div class=\"exemple\"><b>Comparaison avec Kirchhoff</b> (les deux sources ensemble, méthode des nœuds avec V_a = 10 V) :<br>\nnœud b : <code>(10 − V_b)/60 + 2 = V_b/20</code><br>\nnœud c : <code>V_c/5 + (V_c − V_d)/5 + 2 = 0</code><br>\nnœud d : <code>(10 − V_d)/45 + (V_c − V_d)/5 = V_d/10</code><br>\nSolution : V_b = 32,5 V ; V_c = −6,75 V ; V_d = −3,5 V. Donc v0 = −32,5 V et i0 = (10 + 3,5)/45 = 0,3 A. Exactement le même résultat que par superposition.<br>\nBilan au nœud d : arrivent 0,3 A (par 45 Ω) et (−6,75 + 3,5)/5 = −0,65 A (par 5 Ω) ; part −3,5/10 = −0,35 A (par 10 Ω). 0,3 − 0,65 = −0,35, juste.</div>\n<div class=\"attention\">v0 est négative parce que la flèche de la feuille met le <b>+ en bas</b> de la résistance de 20 Ω, alors que le point b est en réalité plus haut en potentiel (32,5 V). Ne pas oublier ce signe.</div>\n"
            },
            {
              "titre": "Exercice 8 : trois générateurs, réseau à deux nœuds",
              "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 400 295\" role=\"img\" aria-label=\"Circuit de l'exercice 8. Le nœud A est relié à trois branches. Branche 1 : R1 puis E1 jusqu'au nœud C, E1 orientée vers A. Branche 2 : R2 puis E2 jusqu'au nœud C, E2 orientée vers A. Branche 3 : la résistance R de A vers B. Entre C et B : E3 (orientée vers C) en série avec R3. Courants choisis : I1 et I2 montent vers A, I descend dans R.\" style=\"width:100%;min-width:300px;max-width:400px;font-family:var(--f-mono);font-size:13px\"><g stroke=\"var(--ink)\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M40 40H300\"/><path d=\"M40 40V60M40 100V124M40 156V180H130V156M130 124V100M130 60V40\"/><path d=\"M85 180V199M85 231V260H110M170 260H300V170M300 130V40\"/><circle cx=\"40\" cy=\"140\" r=\"16\"/><circle cx=\"130\" cy=\"140\" r=\"16\"/><circle cx=\"85\" cy=\"215\" r=\"16\"/><path d=\"M40 124V156M130 124V156M85 199V231\"/></g><g fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"><rect x=\"32\" y=\"60\" width=\"16\" height=\"40\"/><rect x=\"122\" y=\"60\" width=\"16\" height=\"40\"/><rect x=\"110\" y=\"252\" width=\"60\" height=\"16\"/><rect x=\"292\" y=\"130\" width=\"16\" height=\"40\"/></g><g fill=\"var(--ink)\"><circle cx=\"220\" cy=\"40\" r=\"4\"/><circle cx=\"220\" cy=\"260\" r=\"4\"/><circle cx=\"85\" cy=\"180\" r=\"3.5\"/></g><g stroke=\"var(--accent)\" stroke-width=\"2\" fill=\"var(--accent)\"><path d=\"M14 158V126\"/><path d=\"M9 130L14 122L19 130Z\"/><path d=\"M104 158V126\"/><path d=\"M99 130L104 122L109 130Z\"/><path d=\"M59 233V201\"/><path d=\"M54 205L59 197L64 205Z\"/><path d=\"M40 56V46\"/><path d=\"M35 50L40 42L45 50Z\"/><path d=\"M130 56V46\"/><path d=\"M125 50L130 42L135 50Z\"/><path d=\"M300 60V84\"/><path d=\"M295 80L300 88L305 80Z\"/></g><g fill=\"var(--ink)\" stroke=\"none\"><text x=\"215\" y=\"30\">A</text><text x=\"215\" y=\"284\">B</text><text x=\"92\" y=\"196\">C</text><text x=\"54\" y=\"84\">R1</text><text x=\"144\" y=\"84\">R2</text><text x=\"126\" y=\"246\">R3</text><text x=\"314\" y=\"155\">R = 5 Ω</text><text x=\"0\" y=\"176\">E1</text><text x=\"150\" y=\"146\">E2</text><text x=\"30\" y=\"250\">E3</text><text x=\"48\" y=\"56\" fill=\"var(--accent)\">I1</text><text x=\"138\" y=\"56\" fill=\"var(--accent)\">I2</text><text x=\"310\" y=\"78\" fill=\"var(--accent)\">I</text></g></svg></div>\n<p><b>Lecture du schéma.</b> Branche 1 : de C vers A, E1 (flèche vers A) puis R1. Branche 2 : de C vers A, E2 (flèche vers A) puis R2. Les branches 1 et 2 se rejoignent en bas au point C. De C, E3 (flèche vers C) puis R3 mènent au nœud B. Enfin R relie A à B. Les nœuds vrais sont A et C ; B et R3, E3 sont dans la même branche que R.</p>\n<p><b>Données relues :</b> E1 = 3 V ; E2 = 1 V ; E3 = 2 V ; R1 = R2 = R3 = 2 Ω ; R = 5 Ω.</p>\n<p><b>Inconnues :</b> I1 (monte dans la branche 1 vers A), I2 (monte dans la branche 2 vers A), I (descend dans R de A vers B, puis traverse R3 et E3 de B vers C : c'est aussi le courant de R3).</p>\n<ul><li>Nœud A : <code>I1 + I2 = I</code></li>\n<li>Maille (branche 1, branche 2) : <code>E1 − R1·I1 = E2 − R2·I2</code>, soit <code>3 − 2·I1 = 1 − 2·I2</code></li>\n<li>Maille (branche 1, R, R3, E3) : <code>E1 − R1·I1 = R·I + R3·I − E3</code>, soit <code>3 − 2·I1 = 5·I + 2·I − 2</code></li></ul>\n<p><b>Résolution.</b> La 2e équation donne <code>I1 = I2 + 1</code>. Alors <code>I = 2·I2 + 1</code> et la 3e équation devient <code>3 − 2·I2 − 2 = 7·(2·I2 + 1) − 2</code>, soit <code>1 − 2·I2 = 14·I2 + 5</code>, d'où <code>I2 = −0,25 A</code>.</p>\n<p><b>I1 = 0,75 A (dans R1) ; I2 = −0,25 A (dans R2) ; I3 = I = 0,5 A (dans R3, et aussi dans R).</b></p>\n<p>Le signe moins de I2 veut dire que, dans R2, le courant descend de A vers C : E2 (1 V) est le plus faible et reçoit du courant.</p>\n<div class=\"exemple\"><b>Vérification.</b> Nœud A : 0,75 − 0,25 = 0,5 A, juste. Tension V_A − V_C : par la branche 1 : 3 − 2 × 0,75 = 1,5 V ; par la branche 2 : 1 − 2 × (−0,25) = 1,5 V ; par R, R3, E3 : 5 × 0,5 + 2 × 0,5 − 2 = 1,5 V. Les trois chemins donnent 1,5 V. Et U_AB = R·I = 2,5 V.</div>\n<p><small>Lecture : sur la feuille, les flèches de E1, E2 et E3 sont des flèches de tension dessinées à côté des cercles (convention générateur, la flèche pointe vers la borne +).</small></p>\n"
            },
            {
              "titre": "Exercice 9 : source de courant et générateur de tension",
              "html": "\n<p><b>Montage</b> (même schéma que le montage 2 de l'exercice 6). Trois branches entre le fil du haut et le fil du bas : la source de courant I0 (vers le haut) ; le générateur E (borne + en haut) en série avec R1, parcouru par I1 vers le haut ; la branche R2 puis R3, parcourue par I2. U est la tension aux bornes de R3, fléchée vers le haut (convention récepteur avec I2 qui descend dans R3).</p>\n<p><b>Données relues :</b> R1 = R3 = 50 Ω ; R2 = 20 Ω ; I0 = 10 mA ; E = 2 V.</p>\n<p><b>Kirchhoff.</b></p>\n<ul><li>Nœud haut : <code>I2 = I0 + I1</code></li>\n<li>Maille (E, R1, R2, R3) : <code>E − R1·I1 − R2·I2 − R3·I2 = 0</code></li></ul>\n<p>On remplace <code>I1 = I2 − I0</code> : <code>E − R1·I2 + R1·I0 − (R2 + R3)·I2 = 0</code>, d'où :</p>\n<p><b><code>I2 = (E + R1·I0) / (R1 + R2 + R3)</code></b></p>\n<p>AN : <code>I2 = (2 + 50 × 0,01) / (50 + 20 + 50) = 2,5 / 120</code></p>\n<p><b>I2 = 1/48 A ≈ 20,8 mA</b></p>\n<p><code>U = R3·I2 = 50 × 2,5/120 = 125/120</code> soit <b>U ≈ 1,04 V</b> (exactement 25/24 V).</p>\n<p>Et <code>I1 = I2 − I0 = 20,83 − 10 = 10,83 mA</code>.</p>\n<div class=\"exemple\"><b>Vérification.</b> Tension entre les fils haut et bas : par la branche E, R1 : 2 − 50 × 0,01083 ≈ 1,458 V ; par R2 + R3 : 70 × 0,02083 ≈ 1,458 V (exactement 35/24 V). Même valeur, donc les équations sont respectées.</div>\n<div class=\"exemple\"><b>Contrôle par superposition</b> : E seule (I0 ouverte) : I2' = 2/120 = 16,67 mA. I0 seule (E remplacée par un fil) : I0 se partage entre R1 (50 Ω) et R2 + R3 (70 Ω), donc I2'' = 10 × 50/120 = 4,17 mA. Somme : 20,83 mA, juste.</div>\n"
            },
            {
              "titre": "Exercice 10 : courant dans R, Kirchhoff puis superposition",
              "html": "\n<p><b>Montage.</b> Quatre branches en parallèle entre le fil du haut (nœud A) et le fil du bas (nœud B) : E1 en série avec 2R, E2 en série avec 3R, E3 en série avec 6R (les trois flèches vers le haut, donc borne + vers A ; courants I1, I2, I3 vers le haut), et la résistance R parcourue par I vers le bas.</p>\n<p><b>Données relues :</b> E1 = 15 V ; E2 = 10 V ; E3 = 5 V. La valeur de R n'est pas donnée : le résultat s'exprime en fonction de R.</p>\n<p><b>1. Lois de Kirchhoff.</b> On note U = U_AB.</p>\n<ul><li>Nœud A : <code>I1 + I2 + I3 = I</code></li>\n<li>Maille (branche 1, R) : <code>15 − 2R·I1 = R·I</code></li>\n<li>Maille (branche 2, R) : <code>10 − 3R·I2 = R·I</code></li>\n<li>Maille (branche 3, R) : <code>5 − 6R·I3 = R·I</code></li></ul>\n<p>On isole : <code>I1 = (15 − U)/(2R)</code>, <code>I2 = (10 − U)/(3R)</code>, <code>I3 = (5 − U)/(6R)</code>, avec <code>U = R·I</code>. On multiplie la loi des nœuds par 6R :</p>\n<p><code>3·(15 − U) + 2·(10 − U) + (5 − U) = 6·U</code>, soit <code>70 − 6·U = 6·U</code>, donc <code>U = 70/12 = 35/6 V ≈ 5,83 V</code>.</p>\n<p><b>I = U / R = 35 / (6R) ≈ 5,83 / R</b> (en ampères si R est en ohms).</p>\n<p>Courants des générateurs : I1 = 55/(12R), I2 = 25/(18R), I3 = −5/(36R) (E3 reçoit du courant).</p>\n<p><b>2. Théorème de superposition.</b> On garde une source, les deux autres sont remplacées par des fils.</p>\n<ul><li><b>E1 seule :</b> 2R en série avec 3R // 6R // R. Or 1/(3R) + 1/(6R) + 1/R = 9/(6R), donc ce groupe vaut 2R/3. Tension aux bornes de R : <code>15 × (2R/3)/(2R + 2R/3) = 15 × 1/4 = 3,75 V</code>, donc <code>I' = 3,75/R</code>.</li>\n<li><b>E2 seule :</b> 3R en série avec 2R // 6R // R = 3R/5. Tension : <code>10 × (3R/5)/(3R + 3R/5) = 10 × 1/6 = 5/3 V</code>, donc <code>I'' = (5/3)/R ≈ 1,667/R</code>.</li>\n<li><b>E3 seule :</b> 6R en série avec 2R // 3R // R. On a 2R // 3R = 6R/5, puis (6R/5) // R = 6R/11. Tension : <code>5 × (6R/11)/(6R + 6R/11) = 5 × 1/12 = 5/12 V</code>, donc <code>I''' = (5/12)/R ≈ 0,417/R</code>.</li></ul>\n<p><b>Somme :</b> <code>I = (3,75 + 5/3 + 5/12)/R = (45 + 20 + 5)/(12R) = 70/(12R)</code>, soit <b>I = 35/(6R)</b>. Même résultat qu'avec Kirchhoff.</p>\n<div class=\"exemple\"><b>Vérification.</b> Avec U = 35/6 V : 3·(15 − 35/6) + 2·(10 − 35/6) + (5 − 35/6) = 27,5 + 8,33 − 0,83 = 35 = 6 × 35/6, juste. Exemple chiffré avec R = 1 Ω (valeur supposée) : I ≈ 5,83 A.</div>\n"
            }
          ],
          "pointsCles": [
            "Avec b branches et n nœuds, on écrit n − 1 équations de nœuds et m = b − n + 1 équations de mailles.",
            "Loi des nœuds : la somme des courants qui arrivent est égale à la somme des courants qui repartent.",
            "Loi des mailles : sur une boucle fermée, la somme des tensions comptées avec leur signe est nulle.",
            "I = U / R utilise la tension aux bornes de la résistance, pas la f.é.m. du générateur de la branche.",
            "Pour deux nœuds : U_AB = (somme des E/R) / (somme des 1/R), puis chaque courant s'en déduit.",
            "Superposition : on éteint les autres sources (tension → fil, courant → circuit ouvert) et on additionne les contributions avec leur signe.",
            "Un courant négatif circule dans le sens opposé à la flèche choisie : ce n'est pas une erreur.",
            "Toujours vérifier : bilan au nœud, ou même tension trouvée par plusieurs chemins."
          ],
          "definitions": [
            {
              "terme": "Nœud",
              "def": "Point du circuit où se rejoignent au moins trois conducteurs."
            },
            {
              "terme": "Branche",
              "def": "Portion de circuit entre deux nœuds voisins, parcourue par un seul et même courant."
            },
            {
              "terme": "Maille",
              "def": "Boucle fermée du circuit qu'on parcourt en revenant au point de départ."
            },
            {
              "terme": "Convention récepteur",
              "def": "Pour une résistance, la flèche de tension est opposée à la flèche de courant, et U = R·I."
            },
            {
              "terme": "Théorème de Millman",
              "def": "Pour des branches toutes entre deux nœuds A et B : U_AB = (somme des E_k/R_k) / (somme des 1/R_k)."
            },
            {
              "terme": "Théorème de superposition",
              "def": "Dans un circuit linéaire, un courant (ou une tension) est la somme des effets de chaque source agissant seule."
            },
            {
              "terme": "Éteindre une source",
              "def": "Remplacer une source de tension par un fil, ou une source de courant par un circuit ouvert."
            }
          ],
          "flashcards": [
            {
              "q": "Combien d'équations de mailles faut-il avec b branches et n nœuds ?",
              "r": "m = b − n + 1."
            },
            {
              "q": "Combien d'équations de nœuds indépendantes avec n nœuds ?",
              "r": "n − 1 (la dernière se déduit des autres)."
            },
            {
              "q": "Exercice 1 : combien de branches, de nœuds et de mailles ?",
              "r": "b = 3, n = 2, donc m = 3 − 2 + 1 = 2."
            },
            {
              "q": "Exercice 2 : valeurs de I1, I2, I3 ?",
              "r": "I1 = −5 A, I2 = 8 A, I3 = 3 A, avec U_AB = 30 V."
            },
            {
              "q": "Pourquoi I1 = 20/2 = 10 A est faux dans l'exercice 2 ?",
              "r": "La tension aux bornes de R1 n'est pas 20 V : A est à 30 V, donc U_R1 = 20 − 30 = −10 V."
            },
            {
              "q": "Comment éteint-on une source de tension pour la superposition ?",
              "r": "On la remplace par un fil (court-circuit)."
            },
            {
              "q": "Comment éteint-on une source de courant pour la superposition ?",
              "r": "On la remplace par un circuit ouvert."
            },
            {
              "q": "Formule de Millman pour deux nœuds ?",
              "r": "U_AB = (somme des E_k/R_k) / (somme des 1/R_k)."
            },
            {
              "q": "Exercice 7 : valeurs de v0 et i0 ?",
              "r": "v0 = −2,5 − 30 = −32,5 V et i0 = 0,2 + 0,1 = 0,3 A."
            },
            {
              "q": "Exercice 10 : courant I dans R ?",
              "r": "I = 35/(6R), soit environ 5,83/R."
            },
            {
              "q": "Exercice 9 : I2 et U ?",
              "r": "I2 = 2,5/120 A ≈ 20,8 mA et U = 50·I2 ≈ 1,04 V."
            }
          ],
          "quiz": [
            {
              "q": "Un circuit a 3 branches et 2 nœuds. Combien d'équations de mailles faut-il ?",
              "choix": [
                "2",
                "3",
                "1",
                "4"
              ],
              "bonne": 0,
              "explication": "m = b − n + 1 = 3 − 2 + 1 = 2."
            },
            {
              "q": "Exercice 2 : quelle est la tension commune U_AB ?",
              "choix": [
                "30 V",
                "90 V",
                "45 V",
                "20 V"
              ],
              "bonne": 0,
              "explication": "Millman : (20/2 + 70/5)/(1/2 + 1/5 + 1/10) = 24/0,8 = 30 V."
            },
            {
              "q": "Exercice 2 : que vaut I1 (flèche vers A) ?",
              "choix": [
                "−5 A",
                "10 A",
                "5 A",
                "−10 A"
              ],
              "bonne": 0,
              "explication": "I1 = (20 − 30)/2 = −5 A : le courant descend réellement dans la branche de E1."
            },
            {
              "q": "Pour appliquer la superposition, que devient une source de tension éteinte ?",
              "choix": [
                "Un fil (court-circuit)",
                "Un circuit ouvert",
                "Une résistance de 1 Ω",
                "Elle reste en place"
              ],
              "bonne": 0,
              "explication": "Une source de tension éteinte impose 0 V : on la remplace par un fil."
            },
            {
              "q": "Pour appliquer la superposition, que devient une source de courant éteinte ?",
              "choix": [
                "Un circuit ouvert",
                "Un fil (court-circuit)",
                "Une résistance nulle",
                "Une source de 1 A"
              ],
              "bonne": 0,
              "explication": "Une source de courant éteinte impose 0 A : on ouvre la branche."
            },
            {
              "q": "Exercice 4 (E = 10 V, R1 = R2 = 2 Ω, R3 = 3 Ω) : que vaut I ?",
              "choix": [
                "1,25 A",
                "3,33 A",
                "2,5 A",
                "1,875 A"
              ],
              "bonne": 0,
              "explication": "I = E·R2/(R1R2 + R1R3 + R2R3) = 20/16 = 1,25 A."
            },
            {
              "q": "Exercice 5 : que vaut i3 ?",
              "choix": [
                "7/9 A ≈ 0,78 A",
                "15/18 A ≈ 0,83 A",
                "5/3 A ≈ 1,67 A",
                "1/3 A ≈ 0,33 A"
              ],
              "bonne": 0,
              "explication": "i3 = (R2E1 + R1E2)/(R1R2 + R1R3 + R2R3) = 175/225 = 7/9 A."
            },
            {
              "q": "Exercice 7 : que vaut v0 (+ en bas de la 20 Ω) ?",
              "choix": [
                "−32,5 V",
                "32,5 V",
                "−2,5 V",
                "−30 V"
              ],
              "bonne": 0,
              "explication": "Superposition : −2,5 V (source 10 V seule) + (−30 V) (source 2 A seule) = −32,5 V."
            },
            {
              "q": "Exercice 8 : quel courant traverse R3 ?",
              "choix": [
                "0,5 A",
                "0,75 A",
                "−0,25 A",
                "1 A"
              ],
              "bonne": 0,
              "explication": "R3 est dans la même branche que R : I = I1 + I2 = 0,75 − 0,25 = 0,5 A."
            },
            {
              "q": "Exercice 10 : quelle est la contribution de E1 seule à la tension aux bornes de R ?",
              "choix": [
                "3,75 V",
                "7,5 V",
                "5 V",
                "15 V"
              ],
              "bonne": 0,
              "explication": "2R en série avec 3R // 6R // R = 2R/3 : 15 × (2R/3)/(8R/3) = 15/4 = 3,75 V."
            },
            {
              "q": "Dans la formule I = U/R, que représente U ?",
              "choix": [
                "La tension aux bornes de cette résistance",
                "La f.é.m. du générateur de la branche",
                "La somme des f.é.m. du circuit",
                "La tension du générateur le plus fort"
              ],
              "bonne": 0,
              "explication": "La loi d'Ohm relie le courant d'une résistance à la tension à ses propres bornes."
            }
          ],
          "examen": [
            {
              "titre": "Deux générateurs, trois branches",
              "enonce": "<p>Trois branches sont branchées entre un nœud A (en haut) et un nœud B (en bas) :</p><ul><li>branche 1 : générateur E1 = 12 V (borne + vers A) en série avec R1 = 4 Ω, courant I1 fléché de B vers A ;</li><li>branche 2 : générateur E2 = 24 V (borne + vers A) en série avec R2 = 6 Ω, courant I2 fléché de B vers A ;</li><li>branche 3 : résistance R3 = 12 Ω, courant I3 fléché de A vers B.</li></ul>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Combien d'équations de mailles indépendantes faut-il écrire ?",
                  "choix": [
                    "2",
                    "3",
                    "1",
                    "4"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>b = 3 branches, n = 2 nœuds : <code>m = b − n + 1 = 3 − 2 + 1 = 2</code>. Avec n − 1 = 1 équation de nœud, on a 3 équations pour 3 inconnues.</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la tension U_AB.",
                  "reponse": 14,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Toutes les branches sont entre A et B : Millman.</p><p><code>U_AB = (E1/R1 + E2/R2) / (1/R1 + 1/R2 + 1/R3) = (12/4 + 24/6) / (1/4 + 1/6 + 1/12)</code></p><p><code>= (3 + 4) / (3/12 + 2/12 + 1/12) = 7 / 0,5</code></p><p><b>U_AB = 14 V</b></p><p>Avec Kirchhoff : nœud A <code>I1 + I2 = I3</code> ; mailles <code>E1 − R1·I1 − R3·I3 = 0</code> et <code>E2 − R2·I2 − R3·I3 = 0</code> ; on trouve le même résultat.</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer I1.",
                  "reponse": -0.5,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>Dans la branche 1 : <code>U_AB = E1 − R1·I1</code>, donc <code>I1 = (E1 − U_AB) / R1 = (12 − 14) / 4</code>.</p><p><b>I1 = −0,5 A</b> : le courant descend réellement dans la branche de E1 (E2, plus fort, la recharge).</p><div class=\"attention\">I1 n'est pas E1/R1 = 3 A : la tension aux bornes de R1 n'est pas E1.</div>"
                },
                {
                  "type": "num",
                  "q": "Calculer I2.",
                  "reponse": 1.667,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>I2 = (E2 − U_AB) / R2 = (24 − 14) / 6 = 10 / 6</code></p><p><b>I2 ≈ 1,67 A</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer I3 et vérifier la loi des nœuds.",
                  "reponse": 1.167,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>I3 = U_AB / R3 = 14 / 12</code></p><p><b>I3 ≈ 1,17 A</b></p><p>Vérification au nœud A : <code>I1 + I2 = −0,5 + 1,667 = 1,167 A = I3</code>. Juste.</p>"
                }
              ]
            },
            {
              "titre": "Source de courant et générateur : superposition",
              "enonce": "<p>Trois branches sont branchées entre le fil du haut et le fil du bas :</p><ul><li>une source de courant idéale I0 = 20 mA, fléchée vers le haut ;</li><li>un générateur E = 5 V (borne + en haut) en série avec R1 = 100 Ω, parcouru par I1 vers le haut ;</li><li>une branche R2 = 150 Ω en série avec R3 = 250 Ω, parcourue par I2 vers le bas. U est la tension aux bornes de R3 (convention récepteur).</li></ul><p>On utilise le théorème de superposition pour calculer I2.</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Pour étudier E seule, par quoi remplace-t-on la source de courant I0 ?",
                  "choix": [
                    "Un circuit ouvert",
                    "Un fil",
                    "Une résistance de 1 Ω",
                    "On la laisse en place"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Une source de courant éteinte impose 0 A : on ouvre sa branche. (Une source de tension éteinte devient un fil.)</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer I2', la contribution de E seule, en mA.",
                  "reponse": 10,
                  "unite": "mA",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>I0 ouverte : E, R1, R2 et R3 forment une seule boucle série.</p><p><code>I2' = E / (R1 + R2 + R3) = 5 / 500 = 0,010 A</code></p><p><b>I2' = 10 mA</b></p>"
                },
                {
                  "type": "num",
                  "q": "Calculer I2'', la contribution de I0 seule, en mA.",
                  "reponse": 4,
                  "unite": "mA",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>E remplacée par un fil : I0 se partage entre R1 (100 Ω) et la branche R2 + R3 (400 Ω). Diviseur de courant, l'<b>autre</b> résistance au numérateur :</p><p><code>I2'' = I0 · R1 / (R1 + R2 + R3) = 20 × 100 / 500</code></p><p><b>I2'' = 4 mA</b></p>"
                },
                {
                  "type": "num",
                  "q": "En déduire I2, en mA.",
                  "reponse": 14,
                  "unite": "mA",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>I2 = I2' + I2'' = 10 + 4</code></p><p><b>I2 = 14 mA</b></p><p>Contrôle par Kirchhoff : <code>I2 = (E + R1·I0) / (R1 + R2 + R3) = (5 + 2) / 500 = 14 mA</code>.</p>"
                },
                {
                  "type": "num",
                  "q": "Calculer la tension U aux bornes de R3.",
                  "reponse": 3.5,
                  "unite": "V",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p><code>U = R3 · I2 = 250 × 0,014</code></p><p><b>U = 3,5 V</b></p><p>Et I1 = I2 − I0 = 14 − 20 = −6 mA : une partie du courant de la source redescend par la branche E, R1.</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "dm-circuits-monophases",
          "titre": "DM : exercices circuits monophasés (pour le lundi 12 octobre)",
          "type": "Exercices",
          "date": "2026-10-09",
          "source": "Feuille « Exercices circuits monophasés » (photos de Kyk's), corrigés rédigés par Claude",
          "resume": "Devoir maison à rendre le lundi 12 octobre : exercices 1.1, 1.2, 1.3, 1.4 et 1.6. Chaque énoncé a son schéma, puis un corrigé détaillé caché : formules du cours utilisées, méthode, calculs étape par étape avec des « Pourquoi ? », diagrammes de Fresnel et triangles des impédances / puissances. Essaie d'abord, puis appuie sur « Voir la correction détaillée ».",
          "sections": [
            {
              "titre": "Formulaire et notations du cours",
              "html": "<p><b>Notations de la fiche.</b> Une lettre <b>soulignée</b> est une grandeur complexe (<u>V</u>, <u>I</u>, <u>Z</u>) ; la même lettre non soulignée est sa valeur efficace (V, I) ou son module (Z). Dans ce DM la tension s'appelle V ; c'est la tension U de la fiche.</p>\n<p><b>Grandeur sinusoïdale.</b> <code>v(t) = V̂ · sin(ωt + φ) = V√2 · sin(ωt + φ)</code>, avec <code>ω = 2πf</code>. À 50 Hz : <code>ω = 2π × 50 ≈ 314,16 rad/s</code>. Conversion : <code>degrés = radians × 180 / π</code>.</p>\n<p><b>Deux écritures d'un complexe.</b></p><ul><li>Forme algébrique : <code><u>Z</u> = x + jy</code></li><li>Forme polaire : <code><u>Z</u> = [Z ; θ]</code></li><li>Passage : <code>x = Z·cos θ</code>, <code>y = Z·sin θ</code> ; <code>Z = √(x² + y²)</code>, <code>θ = arctan(y/x)</code> (si x &lt; 0, ajouter 180°).</li><li>Additionner ou soustraire : en <b>forme algébrique</b> (réels entre eux, imaginaires entre eux).</li><li>Multiplier ou diviser : en <b>forme polaire</b> : <code>[A ; α] × [B ; β] = [A·B ; α + β]</code> et <code>[A ; α] / [B ; β] = [A/B ; α − β]</code>.</li></ul>\n<p><b>Impédances.</b></p><ul><li>Résistance : <code><u>Z</u> = R = [R ; 0°]</code>, courant en phase.</li><li>Bobine : <code><u>Z</u> = jLω = [Lω ; +90°]</code>, courant en retard de 90°.</li><li>Condensateur : <code><u>Z</u> = 1/(jCω) = −j/(Cω) = [1/(Cω) ; −90°]</code>, courant en avance de 90°.</li><li>Série : <code><u>Z</u> = <u>Z</u>₁ + <u>Z</u>₂</code>. Parallèle : <code><u>Z</u> = <u>Z</u>₁·<u>Z</u>₂ / (<u>Z</u>₁ + <u>Z</u>₂)</code>.</li></ul>\n<p><b>Loi d'Ohm.</b> En complexe : <code><u>V</u> = <u>Z</u>·<u>I</u></code>. En valeurs efficaces : <code>V = Z·I</code>. φ est le déphasage du courant par rapport à la tension (φ = argument de <u>Z</u>).</p>\n<p><b>Origine des phases (règle de la fiche).</b> Montage <b>série</b> : le courant est commun, on le prend comme origine. Montage <b>parallèle</b> : la tension est commune, on la prend comme origine. Si l'énoncé impose une origine, on la respecte.</p>\n<p><b>Puissances.</b></p><ul><li><code>P = V·I·cos φ</code> (W), qui est aussi la somme des <code>R·I²</code> des résistances.</li><li><code>Q = V·I·sin φ</code> (var), qui est aussi la somme des <code>X·I²</code> (bobine +, condensateur −).</li><li><code>S = V·I = √(P² + Q²)</code> (VA) ; facteur de puissance <code>cos φ = P/S</code>.</li><li>Puissance complexe : <code><u>S</u> = <u>V</u>·<u>I</u>* = P + jQ</code>.</li><li>Relèvement du facteur de puissance : <code>C = P·(tan φ − tan φ′) / (V²·ω)</code>.</li></ul>\n<p><b>Triangle des impédances.</b> Pour un dipôle <code><u>Z</u> = R + jX</code>, on dessine R à l'horizontale, X à la verticale (vers le haut si X &gt; 0, bobine ; vers le bas si X &lt; 0, condensateur). L'hypoténuse est Z et l'angle en bas à gauche est θ = φ.</p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 215\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Triangle des impédances (exemple : bobine réelle). cos θ = R / Z, sin θ = X / Z, tan θ = X / R.\"><defs><marker id=\"m1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"159.72\" x2=\"450\" y2=\"159.72\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"153.7\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"130.0\" y1=\"159.7\" x2=\"330.0\" y2=\"159.7\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m1)\"/><text x=\"230.0\" y=\"179.7\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">R</text><line x1=\"330.0\" y1=\"159.7\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m1)\"/><text x=\"346.0\" y=\"111.4\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">X = Lω</text><line x1=\"130.0\" y1=\"159.7\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m1)\"/><text x=\"222.6\" y=\"97.2\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">Z = √(R² + X²)</text><text x=\"160.0\" y=\"152.7\" text-anchor=\"start\" font-size=\"12.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">θ</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Triangle des impédances (exemple : bobine réelle). cos θ = R / Z, sin θ = X / Z, tan θ = X / R.</figcaption></figure>\n<p><b>Triangle des puissances.</b> Même forme, multipliée par I² : P = R·I² à l'horizontale, Q = X·I² à la verticale, S = Z·I² sur l'hypoténuse. D'où <code>S² = P² + Q²</code> et <code>tan φ = Q / P</code>.</p>\n<p><b>Valeur efficace.</b> C'est la valeur du courant continu qui donnerait la même puissance dans une résistance : <code>P = R·I²</code> en continu comme en alternatif. Pour une sinusoïde : <code>I = Î / √2</code>.</p>\n<p><b>Résonance.</b> Une bobine et un condensateur se compensent exactement quand <code>Lω = 1/(Cω)</code>, c'est-à-dire <code>LCω² = 1</code>.</p><p><b>Arrondis.</b> Garder au moins 3 décimales pendant le calcul, n'arrondir qu'au résultat final.</p>\n<p class=\"muted\" style=\"font-size:13px\">L'énoncé photographié est dans les photos du chapitre. L'exercice 1.5 n'est pas sur la feuille.</p>"
            },
            {
              "titre": "Exercice 1.1 : charge monophasée",
              "html": "<figure style=\"margin:12px 0\"><svg viewBox=\"0 0 430 190\" style=\"width:100%;max-width:494.49999999999994px;height:auto;display:block\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Figure 1.18 : R₁ seule // (L en série avec R₂)\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"84\"/><circle cx=\"50\" cy=\"100\" r=\"16\"/><text x=\"50\" y=\"105\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">~</text><line x1=\"50\" y1=\"116\" x2=\"50\" y2=\"160\"/><path d=\"M20 118 V84\" marker-end=\"url(#ah)\"/><text x=\"14\" y=\"105\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">V</text><line x1=\"50\" y1=\"40\" x2=\"150\" y2=\"40\"/><path d=\"M94 35 L106 40 L94 45 z\" fill=\"currentColor\"/><text x=\"100\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I</text><line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"60\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\"/><rect x=\"142\" y=\"80\" width=\"16\" height=\"40\"/><line x1=\"150\" y1=\"120\" x2=\"150\" y2=\"140\"/><text x=\"164\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">R₁ = 20 Ω</text><line x1=\"150\" y1=\"140\" x2=\"150\" y2=\"160\"/><path d=\"M150 57 L150 62 L150 67 z\" fill=\"currentColor\"/><text x=\"150\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"150\" y1=\"40\" x2=\"205\" y2=\"40\"/><path d=\"M205 40 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0\"/><line x1=\"245\" y1=\"40\" x2=\"300\" y2=\"40\"/><text x=\"225\" y=\"28\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">L = 20 mH</text><line x1=\"330\" y1=\"40\" x2=\"330\" y2=\"80\"/><rect x=\"322\" y=\"80\" width=\"16\" height=\"40\"/><line x1=\"330\" y1=\"120\" x2=\"330\" y2=\"160\"/><text x=\"344\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">R₂ = 10 Ω</text><line x1=\"300\" y1=\"40\" x2=\"330\" y2=\"40\"/><line x1=\"50\" y1=\"160\" x2=\"330\" y2=\"160\"/><text x=\"125\" y=\"100\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I₁</text><text x=\"305\" y=\"100\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I₂</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Figure 1.18 : R₁ seule // (L en série avec R₂)</figcaption></figure><p><b>Énoncé.</b> V = 230 V, f = 50 Hz. R<sub>1</sub> = 20 Ω est seule sur une branche ; l'autre branche est L = 20 mH en série avec R<sub>2</sub> = 10 Ω. Les deux branches sont en parallèle sous V.</p><ol><li>Valeur efficace I<sub>1</sub> du courant dans R<sub>1</sub>.</li><li>Valeur efficace I<sub>2</sub> du courant dans R<sub>2</sub>.</li><li>Valeur efficace I du courant total.</li><li>Puissances P, Q et S.</li><li>Facteur de puissance.</li></ol><details><summary>Voir la correction détaillée</summary><div style=\"background:var(--accent-soft);border-left:4px solid var(--accent);border-radius:var(--r);padding:10px 14px;margin:10px 0 14px\"><b>Formules du cours utilisées</b><ul style=\"margin:6px 0 0\"><li><code>ω = 2πf</code></li><li><code>Z_R = [R ; 0°] ;  Z_L = jLω = [Lω ; 90°]</code></li><li><code>Série : Z = Z₁ + Z₂ (forme algébrique)</code></li><li><code>Z = √(x² + y²) ;  θ = arctan(y / x)</code></li><li><code>I = V / Z  →  [V / Z ; 0° − θ]</code></li><li><code>Loi des nœuds : I = I₁ + I₂ (forme algébrique)</code></li><li><code>x = I·cos φ ;  y = I·sin φ</code></li><li><code>P = V·I·cos φ = ΣR·I² ;  Q = V·I·sin φ = ΣX·I² ;  S = V·I = √(P² + Q²)</code></li><li><code>cos φ = P / S</code></li></ul></div><div class=\"exemple\"><b>Méthode du cours :</b><ol style=\"margin:6px 0 0\"><li>Les deux branches sont en <b>parallèle</b> : la tension est commune, on la prend comme <b>origine des phases</b> : <code><u>V</u> = [230 ; 0°]</code>.</li><li>Calculer l'impédance de chaque branche en forme polaire.</li><li>Loi d'Ohm dans chaque branche (division en polaire).</li><li>Loi des nœuds en <b>forme algébrique</b> pour trouver <u>I</u>.</li><li>Puissances par <code>P = V·I·cos φ</code> et <code>Q = V·I·sin φ</code>, vérifiées par <code>ΣR·I²</code> et <code>ΣX·I²</code>.</li></ol></div>\n<h4>1) Courant I<sub>1</sub></h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> R₁ est branchée directement entre les deux bornes de la source : elle a toute la tension V à ses bornes. Une résistance ne déphase pas, donc son impédance est un réel pur (angle 0°).</p><p style=\"margin:6px 0\"><code><u>Z</u>₁ = R₁ = [20 ; 0°]</code></p><p style=\"margin:6px 0\"><code><u>I</u>₁ = <u>V</u> / <u>Z</u>₁ = [230 ; 0°] / [20 ; 0°] = [230/20 ; 0° − 0°] = [11,5 ; 0°]</code></p><p><b>I<sub>1</sub> = 11,5 A</b>, en phase avec la tension (résistance pure).</p>\n<h4>2) Courant I<sub>2</sub></h4><p>Réactance de la bobine :</p><p style=\"margin:6px 0\"><code>Lω = 20 × 10⁻³ × 314,16 = 6,283 Ω</code></p><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> La bobine s'oppose au courant alternatif d'autant plus que la fréquence est grande : son « opposition » vaut Lω (en ohms). On convertit d'abord L en henrys : 20 mH = 20 × 10⁻³ H, et ω = 2π × 50 = 314,16 rad/s.</p><p>L et R<sub>2</sub> sont en série : on additionne en forme algébrique, puis on passe en polaire.</p><p style=\"margin:6px 0\"><code><u>Z</u>₂ = R₂ + jLω = 10 + 6,283 j</code></p><p style=\"margin:6px 0\"><code>Z₂ = √(10² + 6,283²) = √(100 + 39,48) = √139,48 = 11,810 Ω</code></p><p style=\"margin:6px 0\"><code>θ₂ = arctan(6,283 / 10) = arctan(0,628) = 32,14°</code></p><p style=\"margin:6px 0\"><code><u>Z</u>₂ = [11,810 ; 32,14°]</code></p><p style=\"margin:6px 0\"><code><u>I</u>₂ = <u>V</u> / <u>Z</u>₂ = [230 / 11,810 ; 0° − 32,14°] = [19,475 ; −32,14°]</code></p><p><b>I<sub>2</sub> ≈ 19,5 A</b>, en retard de 32,14° sur la tension (branche inductive).</p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 236\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Triangle des impédances de la branche 2 : on lit directement Z₂ (hypoténuse) et θ₂.\"><defs><marker id=\"m2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"180.66000000000003\" x2=\"450\" y2=\"180.66000000000003\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"174.7\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"130.0\" y1=\"180.7\" x2=\"330.0\" y2=\"180.7\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m2)\"/><text x=\"230.0\" y=\"200.7\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">R₂ = 10 Ω</text><line x1=\"330.0\" y1=\"180.7\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m2)\"/><text x=\"346.0\" y=\"121.8\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">Lω = 6,283 Ω</text><line x1=\"130.0\" y1=\"180.7\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m2)\"/><text x=\"221.5\" y=\"108.3\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">Z₂ = 11,81 Ω</text><text x=\"160.0\" y=\"173.7\" text-anchor=\"start\" font-size=\"12.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">θ₂ = 32,1°</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Triangle des impédances de la branche 2 : on lit directement Z₂ (hypoténuse) et θ₂.</figcaption></figure><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> On divise en <b>forme polaire</b> car c'est le plus simple : on divise les modules (230 / 11,810) et on soustrait les angles (0° − 32,14°). L'angle négatif veut dire que le courant est en retard sur la tension : c'est l'effet de la bobine.</p>\n<h4>3) Courant total I</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Au nœud, le courant total se partage entre les deux branches. Mais les deux courants n'ont pas la même phase : il faut les additionner comme des vecteurs. Pour additionner, le cours dit de passer en <b>forme algébrique</b> (on ajoute les parties réelles entre elles, puis les parties imaginaires).</p><p>Loi des nœuds : <code><u>I</u> = <u>I</u>₁ + <u>I</u>₂</code>. On additionne en <b>forme algébrique</b> :</p><p style=\"margin:6px 0\"><code><u>I</u>₁ = 11,5 + 0 j</code></p><p style=\"margin:6px 0\"><code><u>I</u>₂ = 19,475·cos(−32,14°) + j·19,475·sin(−32,14°) = 16,490 − 10,361 j</code></p><p style=\"margin:6px 0\"><code><u>I</u> = (11,5 + 16,490) + (0 − 10,361) j = 27,990 − 10,361 j</code></p><p>Retour en polaire :</p><p style=\"margin:6px 0\"><code>I = √(27,990² + 10,361²) = √(783,44 + 107,35) = √890,79 = 29,846 A</code></p><p style=\"margin:6px 0\"><code>φ = arctan(−10,361 / 27,990) = −20,31°</code></p><p><b>I ≈ 29,8 A</b>, en retard de 20,3° sur V.</p><div class=\"attention\"><b>Piège :</b> I ≠ 11,5 + 19,5 = 31 A. Les courants sont déphasés (0° et −32,14°) : on additionne les vecteurs, pas les longueurs.</div><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 560 221\" style=\"width:100%;max-width:560px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Diagramme de Fresnel des courants (V à l'origine des phases, sur l'axe). On met I₂ au bout de I₁ : le vecteur qui ferme le triangle est I. Il est plus court que 11,5 + 19,5 car les deux vecteurs ne sont pas alignés.\"><defs><marker id=\"m3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"55.000000000000014\" x2=\"550\" y2=\"55.000000000000014\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"49.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">axe réel (origine des phases)</text><line x1=\"130.0\" y1=\"55.0\" x2=\"253.3\" y2=\"55.0\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m3)\"/><text x=\"191.6\" y=\"43.0\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">I₁ = 11,5 A (0°)</text><line x1=\"253.3\" y1=\"55.0\" x2=\"430.0\" y2=\"166.1\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m3)\"/><text x=\"350.1\" y=\"101.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">I₂ = 19,5 A (−32,1°)</text><line x1=\"130.0\" y1=\"55.0\" x2=\"430.0\" y2=\"166.1\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m3)\"/><text x=\"274.4\" y=\"129.5\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I = 29,8 A (−20,3°)</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Diagramme de Fresnel des courants (V à l'origine des phases, sur l'axe). On met I₂ au bout de I₁ : le vecteur qui ferme le triangle est I. Il est plus court que 11,5 + 19,5 car les deux vecteurs ne sont pas alignés.</figcaption></figure>\n<h4>4) Puissances</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> La puissance active P est celle qui chauffe réellement (dans les résistances). La puissance réactive Q est échangée avec la bobine sans être consommée. S est ce que la source doit fournir en tension × courant.</p><p>Le déphasage du courant total par rapport à la tension est <code>φ = 20,31°</code>.</p><p style=\"margin:6px 0\"><code>P = V·I·cos φ = 230 × 29,846 × cos 20,31° = 230 × 29,846 × 0,9378 = 6 438 W</code></p><p style=\"margin:6px 0\"><code>Q = V·I·sin φ = 230 × 29,846 × sin 20,31° = 230 × 29,846 × 0,3471 = 2 383 var</code></p><p style=\"margin:6px 0\"><code>S = V·I = 230 × 29,846 = 6 865 VA</code></p><p><b>Vérifications :</b></p><p style=\"margin:6px 0\"><code>P = R₁·I₁² + R₂·I₂² = 20 × 11,5² + 10 × 19,475² = 2 645 + 3 793 = 6 438 W ✓</code></p><p style=\"margin:6px 0\"><code>Q = Lω·I₂² = 6,283 × 19,475² = 2 383 var ✓</code></p><p style=\"margin:6px 0\"><code>S = √(P² + Q²) = √(6 438² + 2 383²) = 6 865 VA ✓</code></p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 184\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Triangle des puissances de l'exercice 1.1. cos φ = P / S = 0,938.\"><defs><marker id=\"m4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"129.0292016154085\" x2=\"450\" y2=\"129.0292016154085\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"123.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"130.0\" y1=\"129.0\" x2=\"330.0\" y2=\"129.0\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m4)\"/><text x=\"230.0\" y=\"149.0\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">P = 6 438 W</text><line x1=\"330.0\" y1=\"129.0\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m4)\"/><text x=\"346.0\" y=\"96.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">Q = 2 383 var</text><line x1=\"130.0\" y1=\"129.0\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m4)\"/><text x=\"224.4\" y=\"81.0\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">S = 6 865 VA</text><text x=\"160.0\" y=\"122.0\" text-anchor=\"start\" font-size=\"12.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">φ = 20,3°</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Triangle des puissances de l'exercice 1.1. cos φ = P / S = 0,938.</figcaption></figure>\n<h4>5) Facteur de puissance</h4><p style=\"margin:6px 0\"><code>cos φ = P / S = 6 438 / 6 865 = 0,938</code></p><p>Le courant est en retard : la charge est <b>inductive</b>.</p><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> cos φ = 0,938 est proche de 1 : la plus grande partie de la puissance fournie est vraiment utilisée. Plus cos φ est petit, plus il faut de courant pour la même puissance P (pertes en ligne plus fortes).</p></details>"
            },
            {
              "titre": "Exercice 1.2 : représentation vectorielle",
              "html": "<figure style=\"margin:12px 0\"><svg viewBox=\"0 0 380 190\" style=\"width:100%;max-width:436.99999999999994px;height:auto;display:block\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Figure 1.19 : bobine, condensateur et résistance en série\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"84\"/><circle cx=\"50\" cy=\"100\" r=\"16\"/><text x=\"50\" y=\"105\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">~</text><line x1=\"50\" y1=\"116\" x2=\"50\" y2=\"160\"/><path d=\"M20 118 V84\" marker-end=\"url(#ah)\"/><text x=\"14\" y=\"105\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">V</text><line x1=\"50\" y1=\"40\" x2=\"90\" y2=\"40\"/><path d=\"M74 35 L86 40 L74 45 z\" fill=\"currentColor\"/><text x=\"80\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I</text><line x1=\"90\" y1=\"40\" x2=\"110\" y2=\"40\"/><path d=\"M110 40 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0\"/><line x1=\"150\" y1=\"40\" x2=\"170\" y2=\"40\"/><text x=\"130\" y=\"28\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">j10 Ω</text><line x1=\"170\" y1=\"40\" x2=\"206\" y2=\"40\"/><line x1=\"206\" y1=\"28\" x2=\"206\" y2=\"52\"/><line x1=\"214\" y1=\"28\" x2=\"214\" y2=\"52\"/><line x1=\"214\" y1=\"40\" x2=\"250\" y2=\"40\"/><text x=\"210\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">−j5 Ω</text><line x1=\"250\" y1=\"40\" x2=\"320\" y2=\"40\"/><line x1=\"320\" y1=\"40\" x2=\"320\" y2=\"80\"/><rect x=\"312\" y=\"80\" width=\"16\" height=\"40\"/><line x1=\"320\" y1=\"120\" x2=\"320\" y2=\"160\"/><text x=\"334\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">20 Ω</text><line x1=\"50\" y1=\"160\" x2=\"320\" y2=\"160\"/></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Figure 1.19 : bobine, condensateur et résistance en série</figcaption></figure><p><b>Énoncé.</b> V = 100 V, 50 Hz, appliquée en série à j10 Ω (bobine), −j5 Ω (condensateur) et 20 Ω.</p><ol><li>Valeur efficace de I.</li><li>Phase de I (<u>V</u> à l'origine des phases), expressions de v(t) et i(t).</li><li>Loi de maille.</li><li>Diagramme de Fresnel.</li></ol><details><summary>Voir la correction détaillée</summary><div style=\"background:var(--accent-soft);border-left:4px solid var(--accent);border-radius:var(--r);padding:10px 14px;margin:10px 0 14px\"><b>Formules du cours utilisées</b><ul style=\"margin:6px 0 0\"><li><code>Série : Z = Z₁ + Z₂ + Z₃ (forme algébrique)</code></li><li><code>Z = √(x² + y²) ;  θ = arctan(y / x)</code></li><li><code>I = V / Z  →  [V / Z ; 0° − θ]</code></li><li><code>v(t) = V√2·sin(ωt + φᵥ) ;  i(t) = I√2·sin(ωt + φᵢ)</code></li><li><code>radians = degrés × π / 180</code></li><li><code>Loi des mailles : V = V_L + V_C + V_R</code></li><li><code>j = [1 ; 90°] ;  −j = [1 ; −90°] ;  [A ; α] × [B ; β] = [A·B ; α + β]</code></li></ul></div><div class=\"exemple\"><b>Méthode du cours :</b><ol style=\"margin:6px 0 0\"><li>Montage <b>série</b> : d'habitude on prendrait le courant comme origine, mais <b>l'énoncé impose</b> <u>V</u> à l'origine : <code><u>V</u> = [100 ; 0°]</code>.</li><li>Additionner les impédances en forme algébrique, puis passer en polaire.</li><li>Loi d'Ohm en polaire : <code><u>I</u> = <u>V</u> / <u>Z</u></code>.</li><li>Calculer chaque tension (<code><u>Z</u>·<u>I</u></code>) et les mettre <b>bout à bout</b> sur le diagramme de Fresnel.</li></ol></div>\n<h4>1) Valeur efficace de I</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Les trois dipôles sont en série : ils sont traversés par le même courant, et leurs impédances s'ajoutent. On additionne en forme algébrique : les parties imaginaires de la bobine (+10) et du condensateur (−5) se compensent en partie, il reste +5.</p><p style=\"margin:6px 0\"><code><u>Z</u> = 20 + 10 j − 5 j = 20 + 5 j</code></p><p style=\"margin:6px 0\"><code>Z = √(20² + 5²) = √(400 + 25) = √425 = 20,616 Ω</code></p><p style=\"margin:6px 0\"><code>θ = arctan(5 / 20) = arctan(0,25) = 14,04°   →   <u>Z</u> = [20,616 ; 14,04°]</code></p><p style=\"margin:6px 0\"><code>I = V / Z = 100 / 20,616 = 4,851 A</code></p><p><b>I ≈ 4,85 A</b>.</p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 160\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Triangle des impédances du circuit série : la réactance totale vaut 10 − 5 = 5 Ω.\"><defs><marker id=\"m5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"105\" x2=\"450\" y2=\"105\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"99.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"130.0\" y1=\"105.0\" x2=\"330.0\" y2=\"105.0\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m5)\"/><text x=\"230.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">R = 20 Ω</text><line x1=\"330.0\" y1=\"105.0\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m5)\"/><text x=\"346.0\" y=\"84.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">X = 10 − 5 = 5 Ω</text><line x1=\"130.0\" y1=\"105.0\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m5)\"/><text x=\"226.1\" y=\"68.5\" text-anchor=\"middle\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">Z = 20,6 Ω</text><text x=\"160.0\" y=\"98.0\" text-anchor=\"start\" font-size=\"12.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">θ = 14°</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Triangle des impédances du circuit série : la réactance totale vaut 10 − 5 = 5 Ω.</figcaption></figure>\n<h4>2) Phase de I et expressions temporelles</h4><p style=\"margin:6px 0\"><code><u>I</u> = <u>V</u> / <u>Z</u> = [100 ; 0°] / [20,616 ; 14,04°] = [4,851 ; −14,04°]</code></p><p>Le courant est <b>en retard de 14,04°</b> sur la tension : le circuit est inductif (la bobine j10 l'emporte sur le condensateur −j5). En radians : <code>14,04 × π / 180 = 0,245 rad</code>.</p><p>Forme algébrique (utile pour la suite) :</p><p style=\"margin:6px 0\"><code><u>I</u> = 4,851·cos(−14,04°) + j·4,851·sin(−14,04°) = 4,706 − 1,176 j</code></p><p>Valeurs maximales : <code>V̂ = 100√2 = 141,4 V</code> et <code>Î = 4,851√2 = 6,860 A</code>.</p><p style=\"margin:6px 0\"><code>v(t) = 141,4 · sin(100πt)</code></p><p style=\"margin:6px 0\"><code>i(t) = 6,860 · sin(100πt − 0,245)</code></p>\n<h4>3) Loi de maille</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Dans une maille, la tension de la source est égale à la somme des tensions des dipôles. En alternatif, c'est une somme de <b>complexes</b> (de vecteurs), pas de valeurs efficaces : 97 + 48,5 + 24,3 ≠ 100, mais la somme des vecteurs vaut bien 100 V.</p><p>La tension de la source est la somme des tensions des trois dipôles en série :</p><p style=\"margin:6px 0\"><code><u>V</u> = <u>V</u>_L + <u>V</u>_C + <u>V</u>_R = j10·<u>I</u> − j5·<u>I</u> + 20·<u>I</u></code></p><p>Chaque tension, par multiplication en polaire (<code>j = [1 ; 90°]</code>, <code>−j = [1 ; −90°]</code>) :</p><p style=\"margin:6px 0\"><code><u>V</u>_R = [20 ; 0°] × [4,851 ; −14,04°] = [97,01 ; −14,04°]</code></p><p style=\"margin:6px 0\"><code><u>V</u>_L = [10 ; 90°] × [4,851 ; −14,04°] = [48,51 ; 75,96°]</code></p><p style=\"margin:6px 0\"><code><u>V</u>_C = [5 ; −90°] × [4,851 ; −14,04°] = [24,25 ; −104,04°]</code></p><p><b>Vérification</b> en forme algébrique :</p><p style=\"margin:6px 0\"><code><u>V</u>_R = 94,118 − 23,529 j ;  <u>V</u>_L = 11,765 + 47,059 j ;  <u>V</u>_C = −5,882 − 23,529 j</code></p><p style=\"margin:6px 0\"><code>somme = (94,118 + 11,765 − 5,882) + (−23,529 + 47,059 − 23,529) j = 100,0 + 0 j ✓</code></p>\n<h4>4) Diagramme de Fresnel</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Le diagramme montre graphiquement la loi de maille : en mettant les vecteurs bout à bout, on doit retomber exactement sur le vecteur V. La tension de la bobine est en avance de 90° sur I, celle du condensateur en retard de 90° sur I, celle de la résistance en phase avec I.</p><p>Comme dans le cours, chaque vecteur a pour <b>longueur la valeur efficace</b> et pour <b>angle sa phase</b>, comptée depuis l'axe horizontal dans le sens trigonométrique. On trace <u>V</u> à 0°, <u>I</u> à −14°, puis les trois tensions <b>bout à bout</b> : <u>V</u><sub>R</sub> (97 V à −14°), <u>V</u><sub>L</sub> (48,5 V à +76°), <u>V</u><sub>C</sub> (24,3 V à −104°). Leur somme retombe sur <u>V</u>.</p><figure style=\"margin:12px 0\"><svg viewBox=\"0 0 700 320\" style=\"width:100%;max-width:804.9999999999999px;height:auto;display:block\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Diagramme de Fresnel de l'exercice 1.2 (V à l'origine des phases). La tension du condensateur redescend sur la même droite que celle de la bobine : elle est décalée de quelques pixels pour rester lisible.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"20\" y1=\"170\" x2=\"690\" y2=\"170\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".45\"/><text x=\"690\" y=\"158\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">axe réel</text><line x1=\"30\" y1=\"170\" x2=\"530\" y2=\"169.7\" style=\"stroke:var(--accent)\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><text x=\"260\" y=\"158\" text-anchor=\"middle\" font-size=\"15\" style=\"fill:var(--accent)\" stroke=\"none\" font-family=\"inherit\">V = 100 V</text><line x1=\"30\" y1=\"170\" x2=\"171.2\" y2=\"205.2\" style=\"stroke:currentColor\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><text x=\"120\" y=\"226\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I (4,85 A)</text><text x=\"95\" y=\"186\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">−14°</text><line x1=\"30\" y1=\"170\" x2=\"500.6\" y2=\"287.3\" style=\"stroke:var(--ok)\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><text x=\"270\" y=\"262\" text-anchor=\"middle\" font-size=\"15\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">R·I = 97 V</text><line x1=\"500.6\" y1=\"287.3\" x2=\"559.3\" y2=\"52\" style=\"stroke:var(--warn)\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><text x=\"526\" y=\"140\" text-anchor=\"end\" font-size=\"15\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">jLω·I</text><text x=\"526\" y=\"158\" text-anchor=\"end\" font-size=\"15\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">= 48,5 V</text><line x1=\"559.3\" y1=\"52\" x2=\"574.8\" y2=\"55.9\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\" opacity=\".7\"/><line x1=\"574.8\" y1=\"55.9\" x2=\"545.5\" y2=\"173.6\" style=\"stroke:var(--bad)\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><line x1=\"545.5\" y1=\"173.6\" x2=\"530\" y2=\"169.7\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\" opacity=\".7\"/><text x=\"585\" y=\"105\" text-anchor=\"start\" font-size=\"15\" style=\"fill:var(--bad)\" stroke=\"none\" font-family=\"inherit\">−j·I/(Cω)</text><text x=\"585\" y=\"123\" text-anchor=\"start\" font-size=\"15\" style=\"fill:var(--bad)\" stroke=\"none\" font-family=\"inherit\">= 24,3 V</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Diagramme de Fresnel de l'exercice 1.2 (V à l'origine des phases). La tension du condensateur redescend sur la même droite que celle de la bobine : elle est décalée de quelques pixels pour rester lisible.</figcaption></figure></details>"
            },
            {
              "titre": "Exercice 1.3 : diviseur de courant",
              "html": "<figure style=\"margin:12px 0\"><svg viewBox=\"0 0 420 200\" style=\"width:100%;max-width:482.99999999999994px;height:auto;display:block\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Figure 1.20 : deux branches en parallèle\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"40\" y1=\"50\" x2=\"40\" y2=\"94\"/><circle cx=\"40\" cy=\"110\" r=\"16\"/><text x=\"40\" y=\"115\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">~</text><line x1=\"40\" y1=\"126\" x2=\"40\" y2=\"170\"/><path d=\"M10 128 V94\" marker-end=\"url(#ah)\"/><text x=\"4\" y=\"115\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">V</text><line x1=\"40\" y1=\"50\" x2=\"100\" y2=\"50\"/><path d=\"M64 45 L76 50 L64 55 z\" fill=\"currentColor\"/><text x=\"70\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I</text><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"90\"/><line x1=\"100\" y1=\"30\" x2=\"120\" y2=\"30\"/><line x1=\"120\" y1=\"30\" x2=\"156\" y2=\"30\"/><line x1=\"156\" y1=\"18\" x2=\"156\" y2=\"42\"/><line x1=\"164\" y1=\"18\" x2=\"164\" y2=\"42\"/><line x1=\"164\" y1=\"30\" x2=\"200\" y2=\"30\"/><text x=\"160\" y=\"14\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">1/(j0,002)</text><line x1=\"200\" y1=\"30\" x2=\"230\" y2=\"30\"/><rect x=\"230\" y=\"22\" width=\"40\" height=\"16\"/><line x1=\"270\" y1=\"30\" x2=\"300\" y2=\"30\"/><text x=\"250\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">4 Ω</text><line x1=\"300\" y1=\"30\" x2=\"340\" y2=\"30\"/><line x1=\"100\" y1=\"90\" x2=\"120\" y2=\"90\"/><line x1=\"120\" y1=\"90\" x2=\"140\" y2=\"90\"/><path d=\"M140 90 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0 a5 5 0 0 1 10 0\"/><line x1=\"180\" y1=\"90\" x2=\"200\" y2=\"90\"/><text x=\"160\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">j40 Ω</text><line x1=\"200\" y1=\"90\" x2=\"230\" y2=\"90\"/><rect x=\"230\" y=\"82\" width=\"40\" height=\"16\"/><line x1=\"270\" y1=\"90\" x2=\"300\" y2=\"90\"/><text x=\"250\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">10 Ω</text><line x1=\"300\" y1=\"90\" x2=\"340\" y2=\"90\"/><line x1=\"340\" y1=\"30\" x2=\"340\" y2=\"90\"/><line x1=\"340\" y1=\"60\" x2=\"380\" y2=\"60\"/><line x1=\"380\" y1=\"60\" x2=\"380\" y2=\"170\"/><line x1=\"40\" y1=\"170\" x2=\"380\" y2=\"170\"/><path d=\"M106 25 L118 30 L106 35 z\" fill=\"currentColor\"/><text x=\"112\" y=\"20\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I₁</text><path d=\"M106 85 L118 90 L106 95 z\" fill=\"currentColor\"/><text x=\"112\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I₂</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Figure 1.20 : deux branches en parallèle</figcaption></figure><p><b>Énoncé.</b> Courant total I = 2,5 A. Branche 1 : condensateur d'impédance 1/(j0,002) en série avec 4 Ω. Branche 2 : bobine j40 Ω en série avec 10 Ω.</p><ol><li>Tension efficace V.</li><li>Courants I<sub>1</sub> et I<sub>2</sub>.</li><li>Expressions de P et Q.</li></ol><details><summary>Voir la correction détaillée</summary><div style=\"background:var(--accent-soft);border-left:4px solid var(--accent);border-radius:var(--r);padding:10px 14px;margin:10px 0 14px\"><b>Formules du cours utilisées</b><ul style=\"margin:6px 0 0\"><li><code>1 / j = −j</code></li><li><code>Série dans une branche : Z = R + jX</code></li><li><code>Parallèle : Z = Z₁·Z₂ / (Z₁ + Z₂)</code></li><li><code>[A ; α] × [B ; β] = [A·B ; α + β] ;  [A ; α] / [B ; β] = [A/B ; α − β]</code></li><li><code>V = Z·I (valeurs efficaces)</code></li><li><code>I₁ = V / Z₁ ;  I₂ = V / Z₂</code></li><li><code>Loi des nœuds : I = I₁ + I₂ (forme algébrique)</code></li><li><code>P = ΣR·I² ;  Q = ΣX·I² (bobine +, condensateur −)</code></li></ul></div><div class=\"exemple\"><b>Méthode du cours :</b><ol style=\"margin:6px 0 0\"><li>Montage <b>parallèle</b> : la tension est commune, on prend <u>V</u> comme origine des phases.</li><li>Impédance de chaque branche (somme en algébrique), puis passage en polaire.</li><li>Impédance équivalente <code><u>Z</u>₁·<u>Z</u>₂ / (<u>Z</u>₁ + <u>Z</u>₂)</code> : produit en algébrique, puis division en <b>polaire</b>.</li><li><code>V = Z·I</code>, puis loi d'Ohm dans chaque branche.</li><li>Vérifier la loi des nœuds en algébrique.</li></ol></div>\n<h4>1) Tension V</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> On ne connaît que le courant total I. Pour trouver V, il faut l'impédance de tout le circuit vu de la source : c'est l'impédance équivalente des deux branches en parallèle. Ensuite, V = Z·I.</p><p><b>Branche 1.</b> Comme <code>1/j = −j</code> : <code>1/(j0,002) = −j / 0,002 = −500 j Ω</code>.</p><p style=\"margin:6px 0\"><code><u>Z</u>₁ = 4 − 500 j   →   Z₁ = √(4² + 500²) = 500,016 Ω ;  θ₁ = arctan(−500/4) = −89,54°</code></p><p style=\"margin:6px 0\"><code><u>Z</u>₁ = [500,016 ; −89,54°]</code></p><p><b>Branche 2.</b></p><p style=\"margin:6px 0\"><code><u>Z</u>₂ = 10 + 40 j   →   Z₂ = √(10² + 40²) = √1 700 = 41,231 Ω ;  θ₂ = arctan(40/10) = 75,96°</code></p><p style=\"margin:6px 0\"><code><u>Z</u>₂ = [41,231 ; 75,96°]</code></p><p><b>Impédance équivalente.</b> Numérateur et dénominateur :</p><p style=\"margin:6px 0\"><code><u>Z</u>₁·<u>Z</u>₂ = [500,016 × 41,231 ; −89,54° + 75,96°] = [20 616 ; −13,58°]</code></p><p style=\"margin:6px 0\"><code><u>Z</u>₁ + <u>Z</u>₂ = (4 + 10) + (−500 + 40) j = 14 − 460 j = [460,213 ; −88,26°]</code></p><p style=\"margin:6px 0\"><code><u>Z</u> = [20 616 / 460,213 ; −13,58° − (−88,26°)] = [44,797 ; 74,68°]</code></p><p><b>Loi d'Ohm</b> en valeurs efficaces :</p><p style=\"margin:6px 0\"><code>V = Z·I = 44,797 × 2,5 = 111,99 V</code></p><p><b>V ≈ 112 V</b>. Avec <u>V</u> à l'origine : <code><u>V</u> = [112 ; 0°]</code> et <code><u>I</u> = [2,5 ; −74,68°]</code>.</p>\n<h4>2) Courants I<sub>1</sub> et I<sub>2</sub></h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Maintenant que V est connue, chaque branche est soumise à cette même tension : on applique la loi d'Ohm séparément dans chaque branche.</p><p style=\"margin:6px 0\"><code><u>I</u>₁ = <u>V</u> / <u>Z</u>₁ = [111,99 / 500,016 ; 0° − (−89,54°)] = [0,224 ; +89,54°]</code></p><p style=\"margin:6px 0\"><code><u>I</u>₂ = <u>V</u> / <u>Z</u>₂ = [111,99 / 41,231 ; 0° − 75,96°] = [2,716 ; −75,96°]</code></p><p><b>I<sub>1</sub> ≈ 0,224 A</b> (presque 90° en avance : branche capacitive) et <b>I<sub>2</sub> ≈ 2,72 A</b> (en retard : branche inductive).</p><p><b>Vérification par la loi des nœuds</b> (forme algébrique) :</p><p style=\"margin:6px 0\"><code><u>I</u>₁ = 0,002 + 0,224 j ;   <u>I</u>₂ = 0,659 − 2,635 j</code></p><p style=\"margin:6px 0\"><code><u>I</u>₁ + <u>I</u>₂ = 0,661 − 2,411 j  →  √(0,661² + 2,411²) = 2,500 A ✓</code></p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 320\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Fresnel des courants (V à l'origine, sur l'axe). I₁ est presque vertical vers le haut : il « remonte » un peu le bout de I₂. Le vecteur somme I est donc un peu plus court que I₂.\"><defs><marker id=\"m6\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"55\" x2=\"450\" y2=\"55\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"49.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">axe réel (origine des phases)</text><line x1=\"203.7\" y1=\"55.0\" x2=\"256.2\" y2=\"265.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m6)\"/><text x=\"245.4\" y=\"160.1\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">I₂ = 2,72 A (−76°)</text><line x1=\"256.2\" y1=\"265.0\" x2=\"256.3\" y2=\"247.1\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m6)\"/><text x=\"272.3\" y=\"260.2\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">I₁ = 0,22 A (+89,5°)</text><line x1=\"203.7\" y1=\"55.0\" x2=\"256.3\" y2=\"247.1\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m6)\"/><text x=\"208.8\" y=\"160.9\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I = 2,5 A (−74,7°)</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Fresnel des courants (V à l'origine, sur l'axe). I₁ est presque vertical vers le haut : il « remonte » un peu le bout de I₂. Le vecteur somme I est donc un peu plus court que I₂.</figcaption></figure><div class=\"attention\">I<sub>2</sub> = 2,72 A est plus grand que le courant total 2,5 A : les deux courants sont presque opposés (89,54° et −75,96°), ils se retranchent en partie.</div>\n<h4>3) Puissances P et Q</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Seules les résistances consomment de la puissance active (P = R·I²). La bobine absorbe de la puissance réactive (+Lω·I²), le condensateur en fournit (−I²/(Cω)). On prend dans chaque formule le courant de <b>sa propre branche</b>.</p><p><b>Expressions littérales</b> (R<sub>1</sub> = 4 Ω, 1/(Cω) = 500 Ω, R<sub>2</sub> = 10 Ω, Lω = 40 Ω) :</p><p style=\"margin:6px 0\"><code>P = R₁·I₁² + R₂·I₂²</code></p><p style=\"margin:6px 0\"><code>Q = Lω·I₂² − I₁²/(Cω)</code></p><p><b>Application numérique :</b></p><p style=\"margin:6px 0\"><code>P = 4 × 0,224² + 10 × 2,716² = 0,20 + 73,78 = 74,0 W</code></p><p style=\"margin:6px 0\"><code>Q = 40 × 2,716² − 500 × 0,224² = 295,1 − 25,1 = 270,0 var</code></p><p><b>Vérification</b> avec les formules du cours (φ = 74,68°) :</p><p style=\"margin:6px 0\"><code>P = V·I·cos φ = 111,99 × 2,5 × cos 74,68° = 279,98 × 0,2642 = 74,0 W ✓</code></p><p style=\"margin:6px 0\"><code>Q = V·I·sin φ = 279,98 × 0,9645 = 270,0 var ✓</code></p></details>"
            },
            {
              "titre": "Exercice 1.4 : puissance apparente complexe",
              "html": "<figure style=\"margin:12px 0\"><svg viewBox=\"0 0 430 190\" style=\"width:100%;max-width:494.49999999999994px;height:auto;display:block\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Figure 1.21 : C, L et R en parallèle\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"84\"/><circle cx=\"50\" cy=\"100\" r=\"16\"/><text x=\"50\" y=\"105\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">~</text><line x1=\"50\" y1=\"116\" x2=\"50\" y2=\"160\"/><path d=\"M20 118 V84\" marker-end=\"url(#ah)\"/><text x=\"14\" y=\"105\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">V</text><line x1=\"50\" y1=\"40\" x2=\"330\" y2=\"40\"/><path d=\"M84 35 L96 40 L84 45 z\" fill=\"currentColor\"/><text x=\"90\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I</text><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"96\"/><line x1=\"118\" y1=\"96\" x2=\"142\" y2=\"96\"/><line x1=\"118\" y1=\"104\" x2=\"142\" y2=\"104\"/><line x1=\"130\" y1=\"104\" x2=\"130\" y2=\"160\"/><text x=\"146\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">C</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"80\"/><path d=\"M220 80 a5 5 0 0 1 0 10 a5 5 0 0 1 0 10 a5 5 0 0 1 0 10 a5 5 0 0 1 0 10\"/><line x1=\"220\" y1=\"120\" x2=\"220\" y2=\"160\"/><text x=\"234\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">L = 10 mH</text><line x1=\"330\" y1=\"40\" x2=\"330\" y2=\"80\"/><rect x=\"322\" y=\"80\" width=\"16\" height=\"40\"/><line x1=\"330\" y1=\"120\" x2=\"330\" y2=\"160\"/><text x=\"344\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">R = 10 Ω</text><line x1=\"50\" y1=\"160\" x2=\"330\" y2=\"160\"/></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Figure 1.21 : C, L et R en parallèle</figcaption></figure><p><b>Énoncé.</b> V = 127 V, 50 Hz. C, L = 10 mH et R = 10 Ω sont en parallèle.</p><ol><li>Expression de <code><u>S</u> = <u>V</u>·<u>I</u>*</code> en fonction de V, R, L et C.</li><li>En déduire P et Q.</li><li>Valeur de C qui annule Q.</li><li>Courant I avec cette valeur de C.</li><li>À quoi équivaut alors le circuit ?</li></ol><details><summary>Voir la correction détaillée</summary><div style=\"background:var(--accent-soft);border-left:4px solid var(--accent);border-radius:var(--r);padding:10px 14px;margin:10px 0 14px\"><b>Formules du cours utilisées</b><ul style=\"margin:6px 0 0\"><li><code>I_R = V / R ;  I_L = V / (jLω) = −j·V / (Lω) ;  I_C = jCω·V</code></li><li><code>Loi des nœuds : I = I_R + I_L + I_C</code></li><li><code>Conjugué : (a + jb)* = a − jb</code></li><li><code>S = V·I* = P + jQ</code></li><li><code>Q = 0  ⇔  Lω = 1/(Cω)  ⇔  C = 1 / (L·ω²)</code></li><li><code>Relèvement : C = P·(tan φ − tan φ′) / (V²·ω)</code></li></ul></div><div class=\"exemple\"><b>Méthode du cours :</b><ol style=\"margin:6px 0 0\"><li>Montage <b>parallèle</b> : <u>V</u> à l'origine des phases, <code><u>V</u> = V</code> (réel).</li><li>Courant de chaque branche par la loi d'Ohm, puis loi des nœuds.</li><li>Conjugué : on change le signe de la partie imaginaire.</li><li>Identifier <code><u>S</u> = P + jQ</code>.</li><li>Annuler Q : c'est le <b>relèvement du facteur de puissance</b> du cours, avec cos φ′ = 1.</li></ol></div>\n<h4>1) Puissance apparente complexe</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> La puissance complexe regroupe P et Q dans un seul nombre : sa partie réelle est P, sa partie imaginaire est Q. On prend le <b>conjugué</b> du courant pour que le signe de Q soit le bon (Q &gt; 0 pour une bobine).</p><p>Courant dans chaque branche (loi d'Ohm, <u>V</u> = V réel) :</p><p style=\"margin:6px 0\"><code><u>I</u>_R = V / R ;   <u>I</u>_L = V / (jLω) = −j·V/(Lω) ;   <u>I</u>_C = jCω·V</code></p><p>Loi des nœuds :</p><p style=\"margin:6px 0\"><code><u>I</u> = V/R + j·(Cω − 1/(Lω))·V</code></p><p>Conjugué (on change le signe devant j) :</p><p style=\"margin:6px 0\"><code><u>I</u>* = V/R − j·(Cω − 1/(Lω))·V</code></p><p style=\"margin:6px 0\"><code><u>S</u> = <u>V</u>·<u>I</u>* = V²/R + j·V²·(1/(Lω) − Cω)</code></p>\n<h4>2) P et Q</h4><p>On identifie <code><u>S</u> = P + jQ</code> :</p><p style=\"margin:6px 0\"><code>P = V² / R</code></p><p style=\"margin:6px 0\"><code>Q = V²·(1/(Lω) − Cω) = V²/(Lω) − V²·Cω</code></p><p>Le premier terme est le Q de la bobine (positif), le second celui du condensateur (négatif). Valeurs (<code>Lω = 0,010 × 314,16 = 3,142 Ω</code>) :</p><p style=\"margin:6px 0\"><code>P = 127² / 10 = 16 129 / 10 = 1 612,9 W</code></p><p style=\"margin:6px 0\"><code>Q_L = V²/(Lω) = 16 129 / 3,142 = 5 134 var</code></p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 300\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Triangle des puissances SANS condensateur : Q est très grand devant P, cos φ = 0,30 seulement. Angle en bas à gauche : φ = 72,6°.\"><defs><marker id=\"m7\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"245\" x2=\"450\" y2=\"245\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"239.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"200.2\" y1=\"245.0\" x2=\"259.8\" y2=\"245.0\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m7)\"/><text x=\"230.0\" y=\"265.0\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">P = 1 613 W</text><line x1=\"259.8\" y1=\"245.0\" x2=\"259.8\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m7)\"/><text x=\"275.8\" y=\"154.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">Q = 5 134 var</text><line x1=\"200.2\" y1=\"245.0\" x2=\"259.8\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m7)\"/><text x=\"214.7\" y=\"149.2\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">S = 5 381 VA</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Triangle des puissances SANS condensateur : Q est très grand devant P, cos φ = 0,30 seulement. Angle en bas à gauche : φ = 72,6°.</figcaption></figure>\n<h4>3) Valeur de C qui annule Q</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Le condensateur fournit de la puissance réactive (−V²·Cω) qui compense celle absorbée par la bobine (+V²/(Lω)). On choisit C pour que les deux soient égales : Q total = 0.</p><p style=\"margin:6px 0\"><code>Q = 0  ⇔  1/(Lω) = Cω  ⇔  C = 1 / (L·ω²)</code></p><p style=\"margin:6px 0\"><code>C = 1 / (0,010 × 314,16²) = 1 / (0,010 × 98 696) = 1 / 986,96 = 1,013 × 10⁻³ F</code></p><p><b>C ≈ 1,013 mF</b> (1 013 µF).</p><p><b>Vérification avec la formule du cours</b> (relèvement, avec cos φ′ = 1 donc tan φ′ = 0) :</p><p style=\"margin:6px 0\"><code>tan φ = Q_L / P = 5 134 / 1 612,9 = 3,183</code></p><p style=\"margin:6px 0\"><code>C = P·(tan φ − tan φ′) / (V²·ω) = 1 612,9 × (3,183 − 0) / (127² × 314,16) = 5 134 / 5 067 088 = 1,013 × 10⁻³ F ✓</code></p>\n<h4>4) Courant I</h4><p>Les courants de L et de C sont égaux et opposés :</p><p style=\"margin:6px 0\"><code>I_L = V/(Lω) = 127 / 3,142 = 40,43 A   et   I_C = V·Cω = 127 × 1,013 × 10⁻³ × 314,16 = 40,43 A</code></p><p>Ils s'annulent dans la loi des nœuds ; il reste :</p><p style=\"margin:6px 0\"><code>I = V / R = 127 / 10 = 12,7 A</code></p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 480 340\" style=\"width:100%;max-width:480px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Fresnel des courants avec C = 1,013 mF (V à l'origine). I_L descend, I_C remonte exactement de la même longueur (décalé un peu à droite pour rester lisible) : il ne reste que I = I_R = 12,7 A, en phase avec V.\"><defs><marker id=\"m8\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"55\" x2=\"470\" y2=\"55\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"49.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">axe réel (origine des phases)</text><line x1=\"196.8\" y1=\"55.0\" x2=\"269.0\" y2=\"55.0\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m8)\"/><text x=\"232.9\" y=\"43.0\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">I_R = 12,7 A</text><line x1=\"269.0\" y1=\"55.0\" x2=\"269.0\" y2=\"285.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m8)\"/><text x=\"253.0\" y=\"174.0\" text-anchor=\"end\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">I_L = 40,4 A</text><text x=\"253.0\" y=\"189.0\" text-anchor=\"end\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">(−90°)</text><line x1=\"283.2\" y1=\"285.0\" x2=\"283.2\" y2=\"55.0\" style=\"stroke:var(--bad)\" stroke-width=\"3\" stroke-dasharray=\"6 4\" marker-end=\"url(#m8)\"/><text x=\"297.2\" y=\"174.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--bad)\" stroke=\"none\" font-family=\"inherit\">I_C = 40,4 A</text><text x=\"297.2\" y=\"189.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--bad)\" stroke=\"none\" font-family=\"inherit\">(+90°)</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Fresnel des courants avec C = 1,013 mF (V à l'origine). I_L descend, I_C remonte exactement de la même longueur (décalé un peu à droite pour rester lisible) : il ne reste que I = I_R = 12,7 A, en phase avec V.</figcaption></figure><p>Vérification : <code>S = P = 1 612,9 VA</code> et <code>I = S / V = 1 612,9 / 127 = 12,7 A</code> ✓</p>\n<h4>5) Circuit équivalent</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Vu de la source, la bobine et le condensateur échangent leur énergie entre eux : la source ne voit plus que la résistance. Le courant en ligne passe de 42,4 A à 12,7 A pour la même puissance utile.</p><p>Le circuit se comporte comme la <b>résistance R seule</b> : L et C sont à la résonance (<code>LCω² = 1</code>), l'ensemble LC parallèle se comporte comme un circuit ouvert. Le facteur de puissance vaut 1 : c'est exactement le but du <b>relèvement du facteur de puissance</b> vu en cours, qui réduit le courant en ligne (12,7 A au lieu de 42,4 A sans condensateur).</p></details>"
            },
            {
              "titre": "Exercice 1.6 : comparaison continu / alternatif",
              "html": "<figure style=\"margin:12px 0\"><svg viewBox=\"0 0 420 190\" style=\"width:100%;max-width:482.99999999999994px;height:auto;display:block\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Exercice 1.6 : le radiateur = R en série avec L\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"84\"/><circle cx=\"50\" cy=\"100\" r=\"16\"/><text x=\"50\" y=\"105\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">~</text><line x1=\"50\" y1=\"116\" x2=\"50\" y2=\"160\"/><path d=\"M20 118 V84\" marker-end=\"url(#ah)\"/><text x=\"14\" y=\"105\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">U</text><line x1=\"50\" y1=\"40\" x2=\"100\" y2=\"40\"/><path d=\"M74 35 L86 40 L74 45 z\" fill=\"currentColor\"/><text x=\"80\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I</text><line x1=\"100\" y1=\"40\" x2=\"140\" y2=\"40\"/><rect x=\"140\" y=\"32\" width=\"40\" height=\"16\"/><line x1=\"180\" y1=\"40\" x2=\"220\" y2=\"40\"/><text x=\"160\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">R = 30 Ω</text><line x1=\"220\" y1=\"40\" x2=\"300\" y2=\"40\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"80\"/><path d=\"M300 80 a5 5 0 0 1 0 10 a5 5 0 0 1 0 10 a5 5 0 0 1 0 10 a5 5 0 0 1 0 10\"/><line x1=\"300\" y1=\"120\" x2=\"300\" y2=\"160\"/><text x=\"314\" y=\"105\" text-anchor=\"start\" font-size=\"13\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">L = 50 mH</text><line x1=\"50\" y1=\"160\" x2=\"300\" y2=\"160\"/></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Exercice 1.6 : le radiateur = R en série avec L</figcaption></figure><p><b>Énoncé.</b> Un radiateur est un enroulement R = 30 Ω, L = 50 mH. On veut qu'il dissipe P = 1 500 W.</p><ol><li>Tension continue nécessaire, et courant.</li><li>En sinusoïdal 50 Hz : courant efficace pour P = 1 500 W.</li><li>Tension efficace nécessaire. Commenter.</li><li>Mêmes questions à 400 Hz. Pourquoi 400 Hz ? Le radiateur fonctionnerait-il sous 240 V, 400 Hz ?</li><li>Et si on néglige l'inductance ?</li></ol><details><summary>Voir la correction détaillée</summary><div style=\"background:var(--accent-soft);border-left:4px solid var(--accent);border-radius:var(--r);padding:10px 14px;margin:10px 0 14px\"><b>Formules du cours utilisées</b><ul style=\"margin:6px 0 0\"><li><code>P = R·I² (seule la résistance chauffe)</code></li><li><code>Continu : ω = 0 donc Lω = 0 ;  P = U² / R</code></li><li><code>ω = 2πf ;  Z = √(R² + (Lω)²) ;  φ = arctan(Lω / R)</code></li><li><code>V = Z·I ;  I = V / Z</code></li><li><code>P = V·I·cos φ (vérification)</code></li></ul></div><div class=\"exemple\"><b>Méthode du cours :</b><ol style=\"margin:6px 0 0\"><li>Seule la <b>résistance</b> transforme l'énergie en chaleur : <code>P = R·I²</code> dans tous les cas.</li><li>En continu, la bobine est un simple fil (ω = 0).</li><li>En alternatif, montage <b>série</b> : le courant est commun, on le prend comme <b>origine des phases</b>.</li><li><code>V = Z·I</code> avec <code>Z = √(R² + (Lω)²)</code>, et <code>φ = arctan(Lω/R)</code> pour vérifier <code>P = V·I·cos φ</code>.</li></ol></div>\n<h4>1) En continu</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> En continu, le courant ne varie pas : la bobine ne s'y oppose pas (pas de variation de flux). Elle se comporte comme un fil, il ne reste que R.</p><p>En continu, ω = 0 donc <code>Lω = 0</code> : la bobine ne compte pas.</p><p style=\"margin:6px 0\"><code>P = U² / R  ⇒  U = √(P·R) = √(1 500 × 30) = √45 000 = 212,1 V</code></p><p style=\"margin:6px 0\"><code>I = U / R = 212,1 / 30 = 7,071 A</code></p>\n<h4>2) Courant efficace à 50 Hz</h4><p>La puissance active est dissipée dans R seule :</p><p style=\"margin:6px 0\"><code>P = R·I²  ⇒  I = √(P / R) = √(1 500 / 30) = √50 = 7,071 A</code></p><p>C'est le <b>même</b> courant qu'en continu : la valeur efficace est justement définie pour donner la même puissance qu'un courant continu.</p>\n<h4>3) Tension efficace à 50 Hz</h4><p style=\"margin:6px 0\"><code>Lω = 50 × 10⁻³ × 314,16 = 15,708 Ω</code></p><p style=\"margin:6px 0\"><code><u>Z</u> = R + jLω = 30 + 15,708 j</code></p><p style=\"margin:6px 0\"><code>Z = √(30² + 15,708²) = √(900 + 246,74) = √1 146,74 = 33,864 Ω</code></p><p style=\"margin:6px 0\"><code>φ = arctan(15,708 / 30) = 27,64°</code></p><p style=\"margin:6px 0\"><code>V = Z·I = 33,864 × 7,071 = 239,4 V</code></p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 480 225\" style=\"width:100%;max-width:480px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Fresnel des tensions à 50 Hz (montage série : I à l'origine). V_L est en avance de 90° sur I ; la somme V fait un angle φ = 27,6° avec I.\"><defs><marker id=\"m9\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"170.2069778406412\" x2=\"470\" y2=\"170.2069778406412\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"164.2\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">I (origine des phases)</text><line x1=\"130.0\" y1=\"170.2\" x2=\"350.0\" y2=\"170.2\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m9)\"/><text x=\"240.0\" y=\"190.2\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">V_R = R·I = 212,1 V</text><line x1=\"350.0\" y1=\"170.2\" x2=\"350.0\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m9)\"/><text x=\"366.0\" y=\"116.6\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">V_L = Lω·I</text><text x=\"366.0\" y=\"131.6\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">= 111,1 V</text><line x1=\"130.0\" y1=\"170.2\" x2=\"350.0\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m9)\"/><text x=\"232.6\" y=\"102.4\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">V = 239,4 V</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Fresnel des tensions à 50 Hz (montage série : I à l'origine). V_L est en avance de 90° sur I ; la somme V fait un angle φ = 27,6° avec I.</figcaption></figure><p><b>Vérification</b> : <code>P = V·I·cos φ = 239,4 × 7,071 × cos 27,64° = 239,4 × 7,071 × 0,886 = 1 500 W</code> ✓</p><p><b>Commentaire :</b> il faut plus de tension qu'en continu (239 V au lieu de 212 V), car une partie de la tension sert à la bobine, sans produire de chaleur (le courant est en retard de 27,6°). 239 V correspond au réseau domestique 230-240 V : le radiateur est prévu pour lui.</p>\n<h4>4) À 400 Hz</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Lω est proportionnel à la fréquence : en passant de 50 Hz à 400 Hz (× 8), la réactance de la bobine est multipliée par 8 (15,7 Ω → 125,7 Ω). L'impédance augmente beaucoup, il faut donc beaucoup plus de tension pour faire passer le même courant.</p><p style=\"margin:6px 0\"><code>ω = 2π × 400 = 2 513,3 rad/s   →   Lω = 50 × 10⁻³ × 2 513,3 = 125,66 Ω</code></p><p style=\"margin:6px 0\"><code>Z = √(30² + 125,66²) = √(900 + 15 791) = √16 691 = 129,20 Ω</code></p><p style=\"margin:6px 0\"><code>φ = arctan(125,66 / 30) = 76,57°</code></p><p>Le courant nécessaire ne change pas (même R, même P) : <code>I = 7,071 A</code>.</p><p style=\"margin:6px 0\"><code>V = Z·I = 129,20 × 7,071 = 913,5 V</code></p><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 300\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Triangle des impédances à 400 Hz : la bobine domine, Z est 3,8 fois plus grande qu'à 50 Hz (33,9 Ω). Angle en bas à gauche : φ = 76,6°.\"><defs><marker id=\"m10\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"245\" x2=\"450\" y2=\"245\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"239.0\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"207.3\" y1=\"245.0\" x2=\"252.7\" y2=\"245.0\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m10)\"/><text x=\"230.0\" y=\"265.0\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">R = 30 Ω</text><line x1=\"252.7\" y1=\"245.0\" x2=\"252.7\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m10)\"/><text x=\"268.7\" y=\"154.0\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">Lω = 125,7 Ω (400 Hz)</text><line x1=\"207.3\" y1=\"245.0\" x2=\"252.7\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m10)\"/><text x=\"214.4\" y=\"150.3\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">Z = 129,2 Ω</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Triangle des impédances à 400 Hz : la bobine domine, Z est 3,8 fois plus grande qu'à 50 Hz (33,9 Ω). Angle en bas à gauche : φ = 76,6°.</figcaption></figure><figure style=\"margin:14px 0\"><svg viewBox=\"0 0 460 215\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" role=\"img\" aria-label=\"Même triangle à 50 Hz, pour comparer.\"><defs><marker id=\"m11\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"currentColor\" stroke=\"none\"/></marker></defs><line x1=\"10\" y1=\"159.72\" x2=\"450\" y2=\"159.72\" stroke-dasharray=\"5 5\" stroke-width=\"1.5\" opacity=\".4\"/><text x=\"12.0\" y=\"153.7\" text-anchor=\"start\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\"></text><line x1=\"130.0\" y1=\"159.7\" x2=\"330.0\" y2=\"159.7\" style=\"stroke:var(--ok)\" stroke-width=\"3\"  marker-end=\"url(#m11)\"/><text x=\"230.0\" y=\"179.7\" text-anchor=\"middle\" font-size=\"13.5\" style=\"fill:var(--ok)\" stroke=\"none\" font-family=\"inherit\">R = 30 Ω</text><line x1=\"330.0\" y1=\"159.7\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:var(--warn)\" stroke-width=\"3\"  marker-end=\"url(#m11)\"/><text x=\"346.0\" y=\"111.4\" text-anchor=\"start\" font-size=\"13.5\" style=\"fill:var(--warn)\" stroke=\"none\" font-family=\"inherit\">Lω = 15,7 Ω (50 Hz)</text><line x1=\"130.0\" y1=\"159.7\" x2=\"330.0\" y2=\"55.0\" style=\"stroke:currentColor\" stroke-width=\"3\"  marker-end=\"url(#m11)\"/><text x=\"222.6\" y=\"97.2\" text-anchor=\"end\" font-size=\"13.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">Z = 33,9 Ω</text><text x=\"160.0\" y=\"152.7\" text-anchor=\"start\" font-size=\"12.5\" fill=\"currentColor\" stroke=\"none\" font-family=\"inherit\">φ = 27,6°</text></svg><figcaption class=\"muted\" style=\"font-size:12.5px;text-align:center\">Même triangle à 50 Hz, pour comparer.</figcaption></figure><p><b>Pourquoi 400 Hz ?</b> C'est la fréquence des réseaux embarqués (avions, navires) : à fréquence élevée, transformateurs et moteurs sont plus petits et plus légers.</p><p><b>Sous 240 V, 400 Hz :</b></p><p style=\"margin:6px 0\"><code>I = V / Z = 240 / 129,20 = 1,858 A</code></p><p style=\"margin:6px 0\"><code>P = R·I² = 30 × 1,858² = 103,5 W</code></p><p>Le radiateur ne fournirait que 104 W au lieu de 1 500 W : il <b>chaufferait à peine</b>. La bobine, dont l'impédance augmente avec la fréquence (Lω), limite le courant.</p>\n<h4>5) Si on néglige l'inductance</h4><p style=\"margin:8px 0;padding:8px 12px;border-radius:8px;background:var(--sunken)\"><b>Pourquoi ?</b> Sans bobine, il n'y a plus de réactance : Z = R quelle que soit la fréquence, et le courant est en phase avec la tension (cos φ = 1).</p><p>Sans L : <code>Z = R = 30 Ω</code> et <code>φ = 0</code>, quelle que soit la fréquence.</p><p style=\"margin:6px 0\"><code>V = R·I = 30 × 7,071 = 212,1 V</code></p><p>On retrouve exactement la tension continue (212 V) : en continu comme en alternatif (valeur efficace), à 50 Hz comme à 400 Hz, les deux solutions deviennent <b>identiques</b>. Toute la différence venait de la bobine.</p></details>"
            }
          ],
          "pointsCles": [
            "ω = 2πf ; Z_L = jLω ; Z_C = 1/(jCω).",
            "I = V/|Z| ; |a + jb| = √(a² + b²).",
            "On n'additionne jamais des valeurs efficaces de courants déphasés.",
            "P = ΣRI² ; Q = ΣXI² (bobine +, condensateur −) ; S = √(P² + Q²) ; cos φ = P/S.",
            "S = V·I* = P + jQ.",
            "LCω² = 1 : Q = 0, le circuit LC parallèle se comporte comme ouvert."
          ],
          "definitions": [
            {
              "terme": "Facteur de puissance",
              "def": "Rapport P/S, égal à cos φ en sinusoïdal."
            },
            {
              "terme": "Diagramme de Fresnel",
              "def": "Représentation des tensions et courants complexes par des vecteurs dans le plan complexe."
            }
          ],
          "flashcards": [
            {
              "q": "Combien vaut ω à 50 Hz ?",
              "r": "100π ≈ 314 rad/s."
            },
            {
              "q": "Impédance d'un condensateur ?",
              "r": "1/(jCω) = −j/(Cω)."
            },
            {
              "q": "Comment calculer P dans un circuit RLC ?",
              "r": "P = somme des R·I² (seules les résistances consomment)."
            },
            {
              "q": "Signe de Q pour une bobine et un condensateur ?",
              "r": "Positif pour une bobine, négatif pour un condensateur."
            },
            {
              "q": "Condition pour annuler Q avec L et C en parallèle ?",
              "r": "LCω² = 1, soit C = 1/(Lω²)."
            },
            {
              "q": "Peut-on additionner I₁ = 11,5 A et I₂ = 19,5 A pour trouver I ?",
              "r": "Non : ils sont déphasés, il faut passer par les complexes ou les puissances."
            },
            {
              "q": "Pourquoi étudier le 400 Hz ?",
              "r": "C'est la fréquence des réseaux embarqués (avions)."
            }
          ],
          "quiz": [
            {
              "q": "Z = 20 + j5 Ω sous 100 V : le courant vaut environ…",
              "choix": [
                "4,85 A",
                "5 A",
                "4 A",
                "20 A"
              ],
              "bonne": 0,
              "explication": "|Z| = √(400 + 25) ≈ 20,6 Ω, I = 100/20,6."
            },
            {
              "q": "Le courant dans Z = 20 + j5 est…",
              "choix": [
                "en retard de 14° sur V",
                "en avance de 14° sur V",
                "en phase avec V",
                "en retard de 90°"
              ],
              "bonne": 0,
              "explication": "Circuit inductif : arg I = −arctan(5/20)."
            },
            {
              "q": "Pour annuler Q avec L = 10 mH en parallèle à 50 Hz, C vaut environ…",
              "choix": [
                "1 mF",
                "10 µF",
                "100 nF",
                "10 mF"
              ],
              "bonne": 0,
              "explication": "C = 1/(Lω²) ≈ 1,01 mF."
            },
            {
              "q": "Q d'un circuit avec une bobine j40 Ω parcourue par 2 A :",
              "choix": [
                "+160 var",
                "−160 var",
                "80 var",
                "40 var"
              ],
              "bonne": 0,
              "explication": "Q = X·I² = 40 × 4."
            },
            {
              "q": "Un radiateur R + L prévu pour 50 Hz, branché en 400 Hz sous la même tension…",
              "choix": [
                "chauffe beaucoup moins",
                "chauffe plus",
                "chauffe pareil",
                "grille"
              ],
              "bonne": 0,
              "explication": "Lω augmente, le courant chute, donc P = RI² aussi."
            }
          ],
          "examen": [
            {
              "titre": "Charge R-L série",
              "enonce": "<p>Une charge R = 40 Ω en série avec L = 0,1 H est alimentée sous 230 V, 50 Hz.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Réactance Lω",
                  "reponse": 31.42,
                  "unite": "Ω",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Lω = 0,1 × 314,16 ≈ 31,4 Ω.</p>"
                },
                {
                  "type": "num",
                  "q": "Courant efficace I",
                  "reponse": 4.52,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>|Z| = √(40² + 31,4²) ≈ 50,9 Ω ; I = 230/50,9 ≈ 4,52 A.</p>"
                },
                {
                  "type": "num",
                  "q": "Puissance active P",
                  "reponse": 818,
                  "unite": "W",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>P = R·I² = 40 × 4,52² ≈ 818 W.</p>"
                },
                {
                  "type": "num",
                  "q": "Puissance réactive Q",
                  "reponse": 642,
                  "unite": "var",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>Q = Lω·I² ≈ 31,4 × 20,45 ≈ 642 var.</p>"
                },
                {
                  "type": "num",
                  "q": "Facteur de puissance",
                  "reponse": 0.786,
                  "unite": "",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>cos φ = R/|Z| = 40/50,9 ≈ 0,79.</p>"
                }
              ]
            },
            {
              "titre": "Compensation par condensateur",
              "enonce": "<p>R = 20 Ω et L = 50 mH sont en parallèle sous 230 V, 50 Hz. On ajoute un condensateur C en parallèle.</p>",
              "questions": [
                {
                  "type": "num",
                  "q": "Valeur de C qui annule Q",
                  "reponse": 202.6,
                  "unite": "µF",
                  "tol": 0.02,
                  "points": 2,
                  "corrige": "<p>C = 1/(Lω²) = 1/(0,05 × 314,16²) ≈ 203 µF.</p>"
                },
                {
                  "type": "num",
                  "q": "Courant total I avec ce condensateur",
                  "reponse": 11.5,
                  "unite": "A",
                  "tol": 0.02,
                  "points": 1,
                  "corrige": "<p>L et C se compensent : I = V/R = 230/20 = 11,5 A.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Le circuit est alors équivalent à…",
                  "choix": [
                    "la résistance R seule",
                    "un court-circuit",
                    "la bobine seule",
                    "un circuit ouvert"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>LC parallèle à la résonance = circuit bouchon : il reste R seule.</p>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "anglais",
      "nom": "Anglais",
      "semestre": "Langue vivante",
      "couleur": "#7048e8",
      "chapitres": [
        {
          "id": "evaluations-annee",
          "titre": "Fonctionnement du cours d’anglais",
          "type": "Infos",
          "date": "2026-10-09",
          "source": "Enregistrement du cours d'anglais (modalités d'évaluation), résumé",
          "resume": "Fiche pratique : comment tu es évalué, les règles en cours et les ressources pour progresser.",
          "sections": [
            {
              "titre": "Évaluation",
              "html": "<ul><li><b>3 évaluations</b> dans l’année, plus une <b>note de participation à chaque cours</b>.</li><li><b>Oral :</b> au moins <b>1 min 30 par personne</b> (environ 3-4 min à deux). L’enregistrement est supprimé après la note, jamais publié.</li></ul><div class=\"attention\">Une langue ne se révise pas la veille : seule la <b>pratique régulière</b> fait progresser.</div>"
            },
            {
              "titre": "En cours",
              "html": "<ul><li>On parle <b>anglais</b>, même entre élèves ; on ne traduit pas pour son voisin.</li><li>Aucune question n’est bête, mais écoute avant de faire répéter.</li><li>On épelle en anglais : connais l’alphabet.</li><li>Téléphone OK comme dictionnaire, pas pour lire une traduction toute faite. Écris au prof en anglais, sans IA.</li></ul>"
            },
            {
              "titre": "Pratiquer hors cours",
              "html": "<ul><li><b>Duolingo</b> (gratuit), un peu chaque jour.</li><li><b>Séries en VO</b> : sous-titres FR → EN → aucun. Actus sur la <b>BBC</b>.</li><li><b>Musique</b> : appli du lien Moodle où l’on complète les paroles (4 niveaux).</li><li><b>Jeux vidéo</b> en anglais.</li></ul>"
            },
            {
              "titre": "Outils et ressources",
              "html": "<ul><li><b>Dictionnaires :</b> DeepL (1-2 mots), WordReference ou Reverso (FR↔EN), Merriam-Webster (définitions en anglais).</li><li><b>anglaisfacile.com</b> : test de niveau puis exercices ciblés.</li><li><b>ENF / Moodle</b> : nombres en anglais, prononciation de l’alphabet, liens du prof.</li><li><b>TOEIC</b> (facultatif, sur 990) : le prof aide à le préparer ; inscription possible via le CNAM à tarif réduit.</li></ul>"
            }
          ],
          "pointsCles": [],
          "definitions": [],
          "flashcards": [],
          "quiz": []
        },
        {
          "id": "se-presenter",
          "titre": "Se présenter : titres, nom, épeler",
          "type": "Cours",
          "date": "2026-10-09",
          "source": "Cours d’anglais (enregistrement), synthèse",
          "resume": "Les titres de politesse (Mr, Mrs, Miss, Ms), les façons de dire son nom selon le contexte, et l’alphabet pour épeler son nom.",
          "sections": [
            {
              "titre": "Les titres : Mr, Mrs, Miss, Ms",
              "html": "<ul><li><b>Mr</b> /ˈmɪstə/ : pour <b>tous les hommes</b>, quel que soit l’âge ou la situation.</li><li><b>Mrs</b> /ˈmɪsɪz/ : femme <b>mariée</b>.</li><li><b>Miss</b> : femme <b>non mariée</b> ou jeune.</li><li><b>Ms</b> /mɪz/ : titre <b>neutre</b>, quand on ne sait pas ou qu’on ne veut pas préciser <i>(ajout, non vu en cours, mais très courant)</i>.</li></ul><p>Le titre s’emploie <b>avec le nom de famille</b> : <i>Mr Smith, Mrs Jones</i>.</p><div class=\"attention\"><b>Pièges :</b><br>• Jamais « Madam + nom » : ça n’a pas le sens de « Madame Dupont ».<br>• « MM » est une abréviation française, pas anglaise.</div><div class=\"exemple\"><b>UK ou US :</b> en anglais britannique, pas de point (<b>Mr</b>, <b>Mrs</b>) ; en américain, un point (<b>Mr.</b>, <b>Mrs.</b>). Les deux se voient, aucun n’est faux.</div>"
            },
            {
              "titre": "Dire son nom",
              "html": "<p><b>Name</b> = <b>first name</b> (prénom) + <b>surname</b> (nom de famille). On l’adapte au contexte :</p><ul><li>très formel : <i>My name is <b>Mrs</b> Smith.</i></li><li>moins formel : <i>My name is Elena Smith.</i></li><li>familier : <i>My name is Elena.</i></li></ul>"
            },
            {
              "titre": "Épeler en anglais",
              "html": "<p>Il faut savoir <b>épeler son prénom et son nom</b> en anglais (en cours, on épelle toujours en anglais) : utile pour donner une adresse ou un e-mail.</p><p><b>Astuce :</b> les lettres se regroupent par son. Par exemple B, C, D, E… riment toutes avec <b>green</b>.</p><div style=\"overflow-x:auto\"><table><thead><tr><th>Son</th><th>Rime avec</th><th>Lettres</th></tr></thead><tbody>\n<tr><td>/eɪ/</td><td>say, grey</td><td>A H J K</td></tr>\n<tr><td>/iː/</td><td><b>green</b></td><td>B C D E G P T V</td></tr>\n<tr><td>/e/</td><td>red</td><td>F L M N S X Z</td></tr>\n<tr><td>/aɪ/</td><td>white</td><td>I Y</td></tr>\n<tr><td>/əʊ/</td><td>go</td><td>O</td></tr>\n<tr><td>/uː/</td><td>blue</td><td>Q U W</td></tr>\n<tr><td>/ɑː/</td><td>car</td><td>R</td></tr></tbody></table></div><p class=\"muted\" style=\"font-size:13px\">Le tableau complet est sur l’ENF. Les mots de rime autres que « green » sont des repères ajoutés.</p><div class=\"attention\"><b>Lettres piégeuses pour un francophone :</b> <b>E</b> se dit « i », <b>I</b> se dit « aï », <b>G</b> se dit « dji », <b>J</b> se dit « djé », <b>R</b> se dit « ar ».</div><p><b>Alphabet OTAN</b> (accepté aussi) : Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</p>"
            }
          ],
          "pointsCles": [
            "Mr = tous les hommes ; Mrs = femme mariée ; Miss = non mariée ou jeune ; Ms = neutre.",
            "Titre + nom de famille (Mr Smith) ; jamais « Madam + nom ».",
            "UK sans point (Mr), US avec point (Mr.).",
            "Name = first name + surname ; formel → familier selon le contexte.",
            "Savoir épeler son nom en anglais ; B, C, D, E… riment avec green."
          ],
          "definitions": [
            {
              "terme": "First name",
              "def": "Le prénom."
            },
            {
              "terme": "Surname",
              "def": "Le nom de famille."
            },
            {
              "terme": "Ms",
              "def": "Titre neutre pour une femme, sans indiquer si elle est mariée."
            }
          ],
          "flashcards": [
            {
              "q": "Quel titre pour un homme ?",
              "r": "Mr, pour tous les hommes."
            },
            {
              "q": "Mrs ou Miss pour une femme mariée ?",
              "r": "Mrs (Miss = non mariée ou jeune)."
            },
            {
              "q": "Quel titre neutre pour une femme ?",
              "r": "Ms (prononcé « miz »)."
            },
            {
              "q": "Mr ou Mr. ?",
              "r": "Les deux : sans point en anglais britannique, avec point en américain."
            },
            {
              "q": "Comment dit-on « prénom » et « nom de famille » ?",
              "r": "First name et surname."
            },
            {
              "q": "Comment se prononcent E et I en anglais ?",
              "r": "E se dit « i », I se dit « aï »."
            },
            {
              "q": "Avec quel mot riment B, C, D, E ?",
              "r": "Green."
            }
          ],
          "quiz": [
            {
              "q": "Quel titre convient pour un homme de 20 ans ?",
              "choix": [
                "Mr",
                "Master Mr.",
                "Mrs",
                "Sir + nom"
              ],
              "bonne": 0,
              "explication": "Mr s’emploie pour tous les hommes, quel que soit l’âge."
            },
            {
              "q": "Comment s’adresser poliment à une femme dont on ignore la situation ?",
              "choix": [
                "Ms Smith",
                "Madam Smith",
                "MM Smith",
                "Mrs Smith obligatoirement"
              ],
              "bonne": 0,
              "explication": "Ms est le titre neutre ; « Madam + nom » ne se dit pas."
            },
            {
              "q": "Quelle phrase est la plus formelle ?",
              "choix": [
                "My name is Mrs Smith.",
                "My name is Elena.",
                "I’m Elena.",
                "Call me Lena."
              ],
              "bonne": 0,
              "explication": "Titre + nom de famille = registre le plus formel."
            },
            {
              "q": "Comment se prononce la lettre G en anglais ?",
              "choix": [
                "« dji »",
                "« jé »",
                "« gué »",
                "« djé »"
              ],
              "bonne": 0,
              "explication": "G rime avec green : « dji ». J se dit « djé »."
            },
            {
              "q": "Dans « Mr. Brown », le point indique…",
              "choix": [
                "l’usage américain",
                "une faute",
                "une femme mariée",
                "l’usage britannique"
              ],
              "bonne": 0,
              "explication": "Les Américains mettent un point, les Britanniques non."
            }
          ],
          "examen": [
            {
              "titre": "Titres et présentations",
              "enonce": "<p>Tu accueilles des visiteurs anglophones à l’entreprise et tu dois les présenter correctement.</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Mr Lee, 23 ans, célibataire. Quel titre ?",
                  "choix": [
                    "Mr",
                    "Mrs",
                    "Master",
                    "Ms"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><b>Mr</b> : pour tous les hommes.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Sarah Jones porte une alliance et se présente comme mariée. Quel titre ?",
                  "choix": [
                    "Mrs Jones",
                    "Miss Jones",
                    "Madam Jones",
                    "MM Jones"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><b>Mrs</b> : femme mariée. « Madam + nom » et « MM » sont des pièges.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Tu ne sais pas si Anna Brown est mariée. Quel titre neutre ?",
                  "choix": [
                    "Ms Brown",
                    "Mrs Brown",
                    "Miss Brown",
                    "Madam Brown"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><b>Ms</b> : titre neutre.</p>"
                },
                {
                  "type": "libre",
                  "q": "Présente-toi de deux façons : très formelle, puis familière.",
                  "attendu": "My name is Mr X (ou Mrs/Miss/Ms X). / My name is Prénom.",
                  "points": 2,
                  "corrige": "<p>Formel : <i>My name is Mr Martin.</i> Familier : <i>My name is Lucas.</i> Entre les deux : <i>My name is Lucas Martin.</i></p>"
                }
              ]
            },
            {
              "titre": "Épeler",
              "enonce": "<p>Au téléphone, un client anglais te demande d’épeler ton nom.</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Quel groupe de lettres rime avec « green » ?",
                  "choix": [
                    "B, C, D, E",
                    "A, H, J, K",
                    "F, L, M, N",
                    "Q, U, W"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>B, C, D, E, G, P, T, V riment avec <i>green</i>.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Comment épelle-t-on « GIE » ?",
                  "choix": [
                    "« dji – aï – i »",
                    "« jé – i – eu »",
                    "« gué – i – é »",
                    "« dji – i – aï »"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>G = « dji », I = « aï », E = « i ».</p>"
                },
                {
                  "type": "libre",
                  "q": "Épelle ton prénom et ton nom en anglais (à voix haute, puis écris la prononciation).",
                  "attendu": "Chaque lettre prononcée à l’anglaise (attention à E, I, G, J, R).",
                  "points": 2,
                  "corrige": "<p>Exemple : MARTIN = « em – eï – ar – ti – aï – en ». Vérifie surtout E (« i »), I (« aï »), G (« dji »), J (« djé ») et R (« ar »).</p>"
                },
                {
                  "type": "qcm",
                  "q": "En alphabet OTAN, « B » se dit…",
                  "choix": [
                    "Bravo",
                    "Bingo",
                    "Beta",
                    "Bob"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Alpha, <b>Bravo</b>, Charlie, Delta…</p>"
                }
              ]
            }
          ]
        },
        {
          "id": "faire-connaissance",
          "titre": "Faire connaissance : questions, a / an, pluriel",
          "type": "Cours",
          "date": "2026-10-09",
          "source": "Notes de cours de Thomas (09/10/2026), synthèse",
          "resume": "Les questions à poser à quelqu’un qu’on rencontre, son métier en anglais, le choix entre a et an, le pluriel des noms et la forme be + -ing.",
          "sections": [
            {
              "titre": "Questions pour faire connaissance",
              "html": "<p>Exercice de <b>brainstorming</b> : les questions à poser à quelqu’un qu’on rencontre pour la première fois.</p><ul><li><i>What’s your name? How old are you? Where do you live?</i></li><li><i>What do you do? What’s your job? What’s the name of your company?</i></li><li><i>Why do you like your job?</i></li><li><i>What are your hobbies? Do you play any sports? What kind of music do you like?</i></li><li><i>Do you have any pets?</i></li><li><i>What’s your main quality / your main weakness?</i> → <i>I’m organised.</i></li></ul><p><b>Mon métier en anglais :</b></p><ul><li>Bureau d’études → <b>Electrical design engineer</b></li><li>Chargé d’affaires → <b>Technical coordinator for electrical installations</b></li></ul><div class=\"attention\"><b>Pièges vus dans les notes :</b><br>• Question avec <b>do</b> : <i>Why <b>do</b> you like your job?</i> (pas « Why you like »).<br>• <i>Do you play <b>any</b> sports?</i> · <i>What’s <b>the</b> name of…?</i><br>• Race d’un animal = <b>breed</b> (pas « race »).<br>• <i>Do you like <b>taking risks</b> in life?</i></div>"
            },
            {
              "titre": "A ou an ?",
              "html": "<p>Le choix dépend de la <b>prononciation</b> du mot qui suit, pas de son orthographe :</p><ul><li><b>an</b> devant un <b>son voyelle</b> : <i>an hour</i> (h muet), <i>an apple</i>.</li><li><b>a</b> devant un <b>son consonne</b> : <i>a uniform, a unicorn, a European country</i> (u et eu se disent « you »), <i>one hour</i>.</li></ul>"
            },
            {
              "titre": "Le pluriel des noms",
              "html": "<ul><li>En général : <b>+ s</b> → <i>a car → two cars</i>.</li><li><b>+ es</b> après -ch, -sh, -s, -x : <i>a witch → witches, a wish → wishes, a bus → buses, a fox → foxes</i>.</li><li>Consonne + <b>y → ies</b> : <i>a hobby → hobbies</i>.</li><li>Irréguliers : <i>child → children, man → men, person → people</i>.</li><li>Invariable : <i>a series → two series</i>.</li></ul><div class=\"attention\">Au pluriel, plus de <b>a</b> : <i>witches</i>, pas « a witches ». Et <i>series</i> s’écrit sans accent.</div>"
            },
            {
              "titre": "Be + -ing : une action en cours",
              "html": "<p>Le verbe en <b>-ing</b>, toujours avec <b>be</b>, décrit une action <b>en cours ou temporaire</b> (présent continu).</p><div class=\"exemple\"><i>I <b>am playing</b> video games.</i> (en ce moment)</div><div class=\"attention\">Ne pas oublier <b>be</b> : « I playing » est faux.</div>"
            }
          ],
          "pointsCles": [
            "Pour faire connaissance : name, age, job, company, hobbies, sports, pets, qualities.",
            "Question au présent : Do / Why do you…?",
            "Métier : Electrical design engineer (bureau d’études).",
            "an devant un son voyelle (an hour), a devant un son consonne (a uniform).",
            "Pluriel : +s, +es après ch/sh/s/x, y → ies ; child → children, man → men, person → people.",
            "be + -ing = action en cours : I am playing."
          ],
          "definitions": [
            {
              "terme": "Breed",
              "def": "La race d’un animal."
            },
            {
              "terme": "Hobby",
              "def": "Un loisir, un passe-temps (pluriel : hobbies)."
            }
          ],
          "flashcards": [
            {
              "q": "Comment dit-on « bureau d’études » (mon métier) ?",
              "r": "Electrical design engineer."
            },
            {
              "q": "« Chargé d’affaires » en anglais ?",
              "r": "Technical coordinator for electrical installations."
            },
            {
              "q": "A ou an devant « hour » ?",
              "r": "An hour : le h ne se prononce pas."
            },
            {
              "q": "A ou an devant « uniform » ?",
              "r": "A uniform : le u se dit « you », c’est un son consonne."
            },
            {
              "q": "Pluriel de « fox », « wish », « hobby » ?",
              "r": "Foxes, wishes, hobbies."
            },
            {
              "q": "Pluriel de « child », « man », « person » ?",
              "r": "Children, men, people."
            },
            {
              "q": "Comment dire « je suis en train de jouer » ?",
              "r": "I am playing (be + -ing)."
            }
          ],
          "quiz": [
            {
              "q": "Quelle question est correcte ?",
              "choix": [
                "Why do you like your job?",
                "Why you like your job?",
                "Why you are like your job?",
                "Why does you like your job?"
              ],
              "bonne": 0,
              "explication": "Au présent simple, la question se construit avec do."
            },
            {
              "q": "Laquelle est correcte ?",
              "choix": [
                "a European country",
                "an European country",
                "an uniform",
                "a hour"
              ],
              "bonne": 0,
              "explication": "European commence par le son « you » : a."
            },
            {
              "q": "Le pluriel de « bus » est…",
              "choix": [
                "buses",
                "buss",
                "bus",
                "busies"
              ],
              "bonne": 0,
              "explication": "+ es après -s."
            },
            {
              "q": "Le pluriel de « person » est…",
              "choix": [
                "people",
                "persons",
                "peoples",
                "personnes"
              ],
              "bonne": 0,
              "explication": "Pluriel irrégulier."
            },
            {
              "q": "Quelle phrase décrit une action en cours ?",
              "choix": [
                "I am playing video games.",
                "I playing video games.",
                "I play video games yesterday.",
                "I am play video games."
              ],
              "bonne": 0,
              "explication": "be + verbe en -ing."
            }
          ],
          "examen": [
            {
              "titre": "Faire connaissance",
              "enonce": "<p>Tu rencontres un nouveau collègue anglais à l’entreprise.</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "Pour lui demander pourquoi il aime son métier :",
                  "choix": [
                    "Why do you like your job?",
                    "Why you like your job?",
                    "Why like you your job?",
                    "Why are you like your job?"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>Question au présent simple : <b>Why do you</b> + verbe.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Tu travailles au bureau d’études. Tu dis :",
                  "choix": [
                    "I’m an electrical design engineer.",
                    "I’m a electrical design engineer.",
                    "I’m electrical design engineer office.",
                    "I’m a study office."
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p><b>an</b> devant electrical (son voyelle), et le métier s’appelle <i>electrical design engineer</i>.</p>"
                },
                {
                  "type": "libre",
                  "q": "Écris 4 questions pour faire connaissance (travail, loisirs, animaux, musique).",
                  "attendu": "Ex. : What do you do? What are your hobbies? Do you have any pets? What kind of music do you like?",
                  "points": 2,
                  "corrige": "<p><i>What do you do? / What are your hobbies? / Do you have any pets? / What kind of music do you like?</i> Vérifie le <b>do</b> dans chaque question.</p>"
                }
              ]
            },
            {
              "titre": "A / an et pluriel",
              "enonce": "<p>Complète ou corrige.</p>",
              "questions": [
                {
                  "type": "qcm",
                  "q": "___ hour, ___ unicorn",
                  "choix": [
                    "an / a",
                    "a / an",
                    "an / an",
                    "a / a"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>h muet → <b>an</b> hour ; u = « you » → <b>a</b> unicorn.</p>"
                },
                {
                  "type": "qcm",
                  "q": "Pluriel de « witch » :",
                  "choix": [
                    "witches",
                    "a witches",
                    "witchs",
                    "witchies"
                  ],
                  "bonne": 0,
                  "points": 1,
                  "corrige": "<p>+ es après -ch, et pas de <b>a</b> au pluriel.</p>"
                },
                {
                  "type": "libre",
                  "q": "Mets au pluriel : hobby, man, series, fox.",
                  "attendu": "hobbies, men, series, foxes",
                  "points": 2,
                  "corrige": "<p>hobbies (y → ies), men (irrégulier), series (invariable), foxes (+ es après x).</p>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "guide",
      "nom": "Mode d'emploi",
      "semestre": "Exemple",
      "couleur": "#6b7a8f",
      "exemple": true,
      "chapitres": [
        {
          "id": "bienvenue",
          "titre": "Comment marche l'appli",
          "date": "2026-10-08",
          "resume": "Ce chapitre d'exemple montre à quoi ressemblera chaque cours une fois ajouté. Il disparaîtra quand tes premiers cours seront là.",
          "sections": [
            {
              "titre": "Ajouter un cours",
              "html": "<p>Envoie ton cours dans le projet (PDF, Word, photo, texte copié). Il est rangé dans sa matière, découpé en sections, et complété par un résumé, des définitions et des cartes de révision.</p><p>Chaque ajout met à jour cette même appli : le lien reste le même toute l'année.</p>"
            },
            {
              "titre": "Naviguer",
              "html": "<ul><li>La colonne de gauche liste les matières et leurs chapitres.</li><li>La recherche (touche <kbd>/</kbd>) fouille titres, contenus et définitions de tous les cours.</li><li>Les flèches <kbd>←</kbd> <kbd>→</kbd> passent au chapitre précédent ou suivant.</li></ul>"
            },
            {
              "titre": "Réviser",
              "html": "<p>Le bouton <b>Réviser</b> lance les cartes du chapitre (ou de toute la matière) : tu lis la question, tu retournes la carte avec <kbd>Espace</kbd>, puis tu indiques si tu la savais.</p><p>Coche <b>Révisé</b> en bas d'un chapitre pour suivre ta progression par matière.</p>"
            }
          ],
          "pointsCles": [
            "Un seul lien pour tous les cours de l'année.",
            "Recherche globale avec la touche /.",
            "Cartes de révision générées pour chaque chapitre."
          ],
          "definitions": [
            {
              "terme": "Chapitre",
              "def": "Un cours envoyé, rangé dans sa matière."
            },
            {
              "terme": "Carte",
              "def": "Une question et sa réponse, tirées du cours, pour réviser."
            }
          ],
          "flashcards": [
            {
              "q": "Quelle touche ouvre la recherche ?",
              "r": "La touche / (ou Ctrl+K)."
            },
            {
              "q": "Comment retourner une carte de révision ?",
              "r": "Touche Espace, ou clic sur la carte."
            },
            {
              "q": "Comment passer au chapitre suivant ?",
              "r": "Flèche droite →"
            }
          ]
        }
      ]
    }
  ],
  "ecartees": [
    "CRr2Qk03YAIScyP8iCTK"
  ],
  "integrees": [
    "pxgPOCAkPxgmJHEaNEYc",
    "9h2PCcISxfYhpLBkVre7"
  ],
  "avisClaude": {
    "9h2PCcISxfYhpLBkVre7": {
      "statut": "integree",
      "texte": "Merci Thomas ! Nouveau chapitre Anglais « Faire connaissance : questions, a / an, pluriel » : questions pour faire connaissance, ton métier en anglais, a/an, pluriel et be + -ing. Les titres Mr/Mrs/Miss/Ms étaient déjà dans « Se présenter ». J’ai corrigé au passage quelques petites erreurs (Why do you…, witches sans « a », I am playing, series)."
    }
  }
};
