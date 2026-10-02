# Cybersicherheitswert im öffentlichen Sektor

Cybersicherheitswert im öffentlichen Sektor ist die Disziplin, Risikoreduktion zu bepreisen: Was ist
es wert, einen Verstoß gegen Bürgerdaten weniger wahrscheinlich zu machen, wenn Sicherheitsausgaben
keinen sichtbaren Output erzeugen, solange sie funktionieren, und einen sehr sichtbaren, wenn sie
scheitern? Für einen Dienst, der Leistungsakten, Gesundheitsdaten oder Steuerunterlagen hält, ist
genau diese Eigenschaft "unsichtbar, solange es funktioniert" der Grund, warum er ein ausdrückliches
Wertargument braucht, nicht nur ein Compliance-Häkchen.

## Warum das wichtig ist

Das Cyber Assessment Framework (CAF) des britischen National Cyber Security Centre gibt
Organisationen des öffentlichen Sektors einen strukturierten Weg, Sicherheit zu einer bewertbaren,
ergebnisbasierten Disziplin statt einer Checkliste zu machen: Es definiert vier übergeordnete Ziele
(Sicherheitsrisiko managen, vor Cyberangriffen schützen, Cybersicherheitsereignisse erkennen und
Auswirkungen von Vorfällen minimieren), aufgeteilt in beitragende Ergebnisse, gegen die eine
Systembesitzerin oder ein Systembesitzer bewertet werden kann, im selben Geist wie Punkt 9 des
[Digitalen Servicestandards](../digital-service-standard/) ("einen sicheren Dienst schaffen, der die
Privatsphäre der Nutzenden schützt"). Wovor die CAF-Bewertung schützt, hat einen dokumentierten
Preis: Der Cost of a Data Breach Report von IBM verfolgt durchschnittliche Verstoßkosten nach
Sektor und hat den öffentlichen Sektor durchgängig am unteren Ende der Spanne im Vergleich zu Finanz-
oder Gesundheitswesen gefunden — jüngste Ausgaben setzen den Durchschnitt des öffentlichen Sektors
bei etwa 2,6–2,9 Millionen US-Dollar pro Verstoß —, aber "niedriger als Finanzwesen" ist nicht
"niedrig", und staatliche Verstöße tragen Kosten, die die Zahlen des Berichts nicht vollständig
erfassen: Verlust des Bürgervertrauens in digitale Kanäle, was die [digitale Nutzungsrate](../channel-shift-savings/)
drückt, auf der Kanalverlagerungs-Business-Cases beruhen, und die politischen und rechtlichen Kosten
der Offenlegung von Daten, zu deren Übergabe der Staat die Bürgerinnen und Bürger überhaupt erst
verpflichtet hat.

## Die Berechnung

Sicherheitsinvestitionen werden bewertet, wie jede Risikoreduktionsausgabe bewertet wird: als
erwartete Verlustreduktion, mittels der klassischen Risikomanagement-Identität.

```
Annualisierte Verlusterwartung (ALE) = Einzelverlusterwartung (SLE)
                                       × annualisierte
                                       Eintrittshäufigkeit (ARO)

Wert einer Sicherheitsmaßnahme =
  ALE_vor_Maßnahme − ALE_nach_Maßnahme − jährliche Kosten der
  Maßnahme

Eine Maßnahme lohnt sich zu finanzieren, wenn:
  (ALE_vorher − ALE_nachher) > jährliche Kosten der Maßnahme

Die CAF-Bewertung gibt keine Wahrscheinlichkeit direkt aus, aber das
CAF-Ergebnisprofil eines Dienstes (welche beitragenden Ergebnisse
"erreicht", "teilweise erreicht" oder "nicht erreicht" sind) ist ein
vertretbarer Stellvertreter-Eingabewert zur Schätzung der ARO — ein
System mit unverwaltetem privilegiertem Zugriff oder ohne getesteten
Vorfallreaktionsplan hat eine wesentlich höhere realistische ARO als
eines mit beidem vorhanden.
```

## Beispielrechnung

**Fallmanagementsystem einer Grafschaftsverwaltung, das Sozialpflegeakten für 40.000 Einwohnende
hält**:

```
Einzelverlusterwartung (Verstoßkosten), unter Verwendung eines
öffentlichen-Sektor-Durchschnitts aus einem aktuellen
IBM-Cost-of-a-Data-Breach-Report ≈ 2,1 Mio. £ (umgerechnete,
größenordnungsmäßige Zahl — stets aus der aktuellen
Berichtsausgabe neu ableiten, statt eine feste Zahl
wiederzuverwenden)

Aktuelle ARO (unverwalteter privilegierter Zugriff, kein getesteter
Vorfallreaktionsplan, gemäß einer internen CAF-Selbstbewertung mit
mehreren "nicht erreicht"-Ergebnissen) ≈ geschätzte 8 % pro Jahr
  ALE_vorher = 2,1 Mio. £ × 0,08 = 168.000 £/Jahr

Vorgeschlagene Maßnahme: Verwaltung privilegierter Zugriffe +
getesteter Vorfallreaktionsplan, die relevanten CAF-Ergebnisse auf
"erreicht" bringend, geschätzt die ARO auf 3 %/Jahr zu senken
  ALE_nachher = 2,1 Mio. £ × 0,03 = 63.000 £/Jahr

Jährliche Kosten der Maßnahme (Werkzeuge + Prozess + Tests) =
45.000 £

Wert der Maßnahme = (168.000 − 63.000) − 45.000 = 60.000 £/Jahr
  netto positiv — finanzieren. Die Rechnung zeigt auch, dass sich die
  Maßnahme noch bei fast dem Dreifachen der Kosten lohnen würde — die
  Art von Sensitivitätsprüfung, die jede auf geschätzten
  Wahrscheinlichkeiten aufgebaute ALE-Zahl begleiten sollte.
```

## Bezug zur Softwareentwicklung

Ingenieurinnen und Ingenieure besitzen die meisten Hebel in der ALE-Gleichung: Design der
Zugriffskontrolle, Abhängigkeits- und Patch-Hygiene, Protokollierungs- und Erkennungsabdeckung sowie
Vorfallreaktionswerkzeuge bewegen alle direkt den ARO-Term, weshalb sich die CAF-Bewertung ebenso
wie eine technische Architekturprüfung liest wie ein Politik-Audit. Dies ist
[technische Schulden als Erosion öffentlichen Werts](../technical-debt-as-public-value-erosion/) in
ihrer akutesten Form — ungepatchte, unüberwachte, schlecht zugriffskontrollierte Systeme sind
Schulden, deren Zinszahlung ein Tail-Risiko ist, keine stetige Belastung — und sollte mit
[Gesamtbetriebskosten in der öffentlichen IT](../total-cost-of-ownership-in-government-it/)
abgeglichen werden, damit Sicherheitsausgaben nicht getrennt von den wahren Betriebskosten des
Systems behandelt werden. Es ist auch ein direkter Eingabewert für
[Wirtschaftlichkeits](../value-for-money/)-Bewertungen unter dem Green Book: risikoadjustierte
Kosten sind Teil der "Kosten"-Seite jeder Optionsbewertung, kein am Ende angeflanschter
Nachgedanke.

## Fallstricke

- **CAF-Selbstbewertung als Sicherheit selbst behandeln**: Eine abgeschlossene Bewertung beschreibt
  eine Sicherheitslage; sie schafft keine — der Wert liegt in den erreichten Ergebnissen, nicht im
  Dokument.
- **Globale durchschnittliche Verstoßkosten unangepasst als lokale Schätzung verwenden**: Die Zahlen
  von IBM sind Durchschnitte über große, vielfältige Stichproben; die realistische
  Einzelverlusterwartung einer kleinen Kommunalverwaltung ist selten dieselbe wie die eines
  nationalen Ministeriums.
- **Tail-Risiko-Psychologie bei Investitionsentscheidungen ignorieren**: Eine niedrige
  Jahreswahrscheinlichkeit macht es leicht, Sicherheitsausgaben unbegrenzt aufzuschieben, bis genau
  zu dem Jahr, in dem es nicht mehr geht — die ALE-Berechnung gegen eine Bandbreite von AROs
  sensitivitätszuprüfen, wie im Beispiel, wirkt dem entgegen.
- **Nur die IBM-artigen Verstoßkosten zählen, nicht die Vertrauenskosten**: Ein Verstoß, der die
  Bereitschaft der Bürgerinnen und Bürger drückt, digitale Kanäle zu nutzen, untergräbt den
  [Kanalverlagerungs-Einsparungen](../channel-shift-savings/)-Fall noch jahrelang danach — Kosten,
  die in Schätzungen der Verstoßkosten selten enthalten sind.

## Quellen

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
