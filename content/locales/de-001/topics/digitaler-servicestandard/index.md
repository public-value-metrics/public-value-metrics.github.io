# Digitaler Servicestandard

Der GOV.UK Service Standard ist das Tor, das jeder digitale Dienst der Zentralregierung passieren
muss, bevor er live gehen kann: 14 veröffentlichte Punkte, bewertet von einem unabhängigen Gremium
am Ende jeder Lieferphase. Er ist der Mechanismus, der "gute öffentliche Dienste bauen" von einem
Slogan in eine Bestehen/Durchfallen-Entscheidung mit Papierspur verwandelt — und der direkte
Nachfahre des "digital by default"-Mandats der Government Digital Strategy von 2012.

## Warum das wichtig ist

Bevor der Service Standard existierte, war staatliches IT-Versagen selten vor dem Start sichtbar
und selten auf eine Entscheidung zurückführbar, auf die jemand hätte zeigen können. Die Government
Digital Strategy von 2012 verpflichtete Ministerien, die 25 am stärksten frequentierten
bürgerorientierten Transaktionsdienste als "digital by default" neu zu gestalten, und untermauerte
diese Verpflichtung mit einem Compliance-Mechanismus: Dienste konnten nicht auf GOV.UK live gehen,
ohne eine Servicebewertung gegen einen damals 26-Punkte-Standard zu bestehen (2019 auf 18
konsolidiert, und heute der geltende 14-Punkte-Standard, der drei Gruppen abdeckt —
Nutzerbedürfnisse verstehen, einen guten Dienst bereitstellen und die richtige Technologie
verwenden). Eine Servicebewertung ist ein echtes Ereignis: Ein Gremium aus GDS- oder
ministeriumseigenen Prüfenden prüft Belege, befragt das Team und erteilt gegen jeden Punkt ein
Urteil von bestanden, nicht bestanden oder "nicht erfüllt", veröffentlicht auf der
Bewertungsseite des Dienstes. Eine nicht bestandene Bewertung blockiert den Übergang des Dienstes
von privater Beta zu öffentlicher Beta, oder von Beta zu live — es ist ein echtes Tor, keine
Durchsicht.

## Die Berechnung

Der Service Standard ist ein Rahmenwerk, keine Formel, aber er funktioniert als
stufenweise Entscheidungsstruktur:

```
Discovery  → Alpha-Bewertung  → Beta-Bewertung  → Live-Bewertung
              (nicht verpflichtend  (verpflichtend vor  (verpflichtend vor
               für alle Dienste,     öffentlichem Beta-  Entfernung des
               aber empfohlen)       Start)              "Beta"-Tags und
                                                          Schließung des
                                                          alten Kanals)

Jede Bewertung: Belege + Teaminterview → Gremiumsurteil pro Punkt
  Erfüllt / Teilweise erfüllt / Nicht erfüllt
Gesamtergebnis: Bestanden / Bestanden mit Auflagen / Nicht bestanden
  (Neubewertung erforderlich)

Kosten eines Nicht-Bestehens ≈ Kosten des nächsten Sprint-Zyklus zur
              Behebung + Verzögerung der
              [Kanalverlagerungs-Einsparungen](../kanalverlagerungs-einsparungen/),
              die der Dienst liefern sollte
```

Punkt 10 ("definieren, wie Erfolg aussieht, und Leistungsdaten veröffentlichen") ist das, was in
[Kosten pro Transaktion](../kosten-pro-transaktion/) und [Servicestandards und Transaktionskennzahlen](../servicestandards-und-transaktionskennzahlen/)
einfließt — der Standard verlangt die Messung, nicht nur den Dienst.

## Beispielrechnung

**Wohnungsantragsdienst einer Kommunalverwaltung**: Ein Kommunalteam erreicht seine Beta-Bewertung
mit einem Dienst, der 11 von 14 Punkten erfüllt, aber Punkt 5 nicht besteht ("sicherstellen, dass
jeder den Dienst nutzen kann"), weil kein unterstützter digitaler Weg für Antragstellende ohne
Internetzugang existiert, und Punkt 9 nicht besteht, weil personenbezogene Daten in
Klartext-Anwendungsfehlerprotokollen erfasst werden.

```
Direkte Kosten des Nicht-Bestehens:
  Neubewertungstermin: 6–8 Wochen Wartezeit für das nächste verfügbare
  Gremium
  Behebungssprint: 2 Entwickler × 3 Wochen × 550 £/Tag ≈ 34.650 £
  Design des unterstützten digitalen Kanals: 1 Researcherin × 2
  Wochen ≈ 5.000 £

Verzögerungskosten: der Dienst sollte 40 % von 18.000/Jahr
Wohnungsanfragen von 8,50-£-Telefonanrufen zu 0,20-£-digitalen
Transaktionen verlagern
  = 7.200 × (8,50 £ − 0,20 £) = 59.760 £/Jahr entgangen, anteilig für
    die ~2-monatige Verzögerung ≈ 9.960 £

Gesamtkosten der nicht bestandenen Bewertung ≈ 49.610 £
```

Der Sinn der Rechnung liegt nicht in der Präzision — er liegt darin, dass eine nicht bestandene
Bewertung einen echten, berechenbaren Preis hat, genau weshalb das Tor Zähne hat.

## Bezug zur Softwareentwicklung

Für Ingenieurinnen und Ingenieure liest sich der Standard ebenso als Architektur- und
Lieferungs-Checkliste wie als Politikdokument: Punkt 11 ("die richtigen Werkzeuge und
Technologien wählen") und Punkt 12 ("neuen Quellcode offen machen") sind direkte technische
Entscheidungen, und Punkt 14 ("einen zuverlässigen Dienst betreiben") verlangt dieselben SLOs und
Vorfallprozesse, die jedes Produktivsystem braucht. Er ist das übergeordnete Rahmenwerk für dieses
Kapitel — [Kosten pro Transaktion](../kosten-pro-transaktion/) und
[Kanalverlagerungs-Einsparungen](../kanalverlagerungs-einsparungen/) sind das, was der Standard finanziell
zu schützen versucht, [digitale Inklusion](../digitale-inklusion/) ist das, wofür Punkt 5 existiert,
zu garantieren, und Komponenten von [Government as a Platform](../regierung-als-plattform/)
(GOV.UK Notify, Pay, One Login) erfüllen Punkt 13 ("offene Standards, gemeinsame Komponenten und
Muster nutzen und dazu beitragen") größtenteils standardmäßig. Siehe auch
[Eigenentwicklung vs. Zukauf im öffentlichen Sektor](../eigenentwicklung-vs-zukauf-im-öffentlichen-sektor/) dazu, wie sich
der "richtige Werkzeuge"-Punkt in Beschaffungsentscheidungen auswirkt.

## Fallstricke

- **Bewertung als Compliance-Häkchen am Starttag behandeln**: Teams, die die 14 Punkte erst eine
  Woche vor ihrer Beta-Bewertung zum ersten Mal lesen, scheitern vorhersehbar; der Standard soll
  Entscheidungen ab der Discovery prägen, nicht sie nachträglich prüfen.
- **Den Prototyp bewerten, nicht den Dienst**: Eine glatte Demo kann eine Durchsicht bestehen, die
  die live, unterstützt-digital-inklusive, vorfallgemanagte Version des Dienstes nicht bestehen
  würde — Prüfende sollen genau diese Lücke untersuchen, aber selbstzertifizierte kleinere Dienste
  überspringen dies oft.
- **Keine Neubewertung vor der Skalierung**: Ein bei 5 % Rollout bewerteter Dienst bleibt nicht
  automatisch bei 100 % konform — Last, Fehlbedarf und Randfall-Nutzende verändern sich alle.
- **Den Service Standard mit einem Designsystem verwechseln**: Komponenten des GOV.UK Design
  System erfüllen manche Punkte (Konsistenz, Barrierefreiheit), aber der Standard deckt auch
  Teamstruktur, agile Praxis und Datenethik ab — ein gut gestalteter Dienst kann trotzdem bei
  Punkt 2, 6 oder 9 scheitern.

## Quellen

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
