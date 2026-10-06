# Theorie des Wandels

Eine Theorie des Wandels ist ein ausdrücklicher, rückwärts abgebildeter Kausalpfad von einem
langfristigen Ziel zu den Voraussetzungen und Aktivitäten, die existieren müssen, damit es erreicht
wird, zusammen mit den Annahmen, die jedes Glied verbinden. Sie wird konstruiert, indem man beim
gewünschten Ergebnis beginnt und wiederholt fragt "was muss unmittelbar davor wahr sein, damit dies
geschieht?", bis man zu Aktivitäten gelangt, die man tatsächlich liefern kann — was die
entgegengesetzte Richtung eines [Wirkungsmodells](../wirkungsmodell/) ist, und weshalb die beiden
sich ergänzen statt austauschbar zu sein.

## Warum das wichtig ist

Die Methode der Rückwärtsabbildung wurde vom Center for Theory of Change und ActKnowledge
formalisiert, aufbauend auf der Arbeit der Evaluatorin Carol Weiss, Programmannahmen ausdrücklich zu
machen, damit sie geprüft statt für bare Münze genommen werden können. Die britische
Zuschussevaluation hat dies direkt übernommen: HM Treasurys Magenta Book behandelt eine Theorie des
Wandels als Ausgangspunkt für jedes Evaluationsdesign, und Geldgeber wie der National Lottery
Community Fund verlangen von Antragstellenden, eine solche zu formulieren, bevor sie einen Vorschlag
fördern. Der Grund, warum das für eine Softwareentwicklerin oder einen Softwareentwickler wichtig
ist: Eine Theorie des Wandels ist das Dokument, das bestimmen sollte, was Ihr System messen muss —
wenn die Kausalkette besagt "die Inanspruchnahme von Leistungen hängt davon ab, dass Antragstellende
eine personalisierte Berechnung erhalten", ist das eine prüfbare Behauptung, für die Ihr Produkt
instrumentiert werden kann, um sie zu belegen oder zu widerlegen.

## Die Berechnung

Eine Theorie des Wandels ist strukturell, nicht numerisch. Jedes Glied sollte sowohl eine Annahme
als auch einen Indikator tragen, der zeigen könnte, dass die Annahme falsch ist:

```
Langfristiges Ergebnis (das Ziel)
  ↑ Voraussetzung + Annahme + Indikator
Zwischenergebnis N
  ↑ Voraussetzung + Annahme + Indikator
  ...
Zwischenergebnis 1
  ↑ Voraussetzung + Annahme + Indikator
Aktivitäten / Interventionen
  ↑ eingesetzte Ressourcen
Inputs
```

Diese Struktur fließt unmittelbar in [Methoden der Wirkungsevaluation](../methoden-der-wirkungsevaluation/)
ein, die existieren, um zu prüfen, ob die Annahmen an jedem Glied tatsächlich zutreffen, und in
[kontrafaktische Analyse](../kontrafaktische-analyse/), die prüft, ob das langfristige Ergebnis
ohnehin eingetreten wäre.

## Beispielrechnung

**Kommunalverwaltung (Verhinderung von Obdachlosigkeit)**: Das langfristige Ergebnis sind
dauerhafte Mietverhältnisse nach 12 Monaten für Haushalte mit Räumungsrisiko.

- Voraussetzung: Haushalte haben einen realistischen, tragbaren Rückzahlungsplan für Rückstände.
  Annahme: von Sachbearbeitenden ausgehandelte Pläne sind nachhaltiger als gerichtlich angeordnete.
  Indikator: % der nach 6 Monaten noch aktiven Pläne.
- Voraussetzung: Haushalte beanspruchen die Leistungen, auf die sie Anspruch haben.
  Annahme: ein digitaler Leistungsrechner erhöht korrekte Anträge gegenüber Papierformularen.
  Indikator: Antragsgenauigkeitsrate, verglichen vor/nach Einführung des Werkzeugs.
- Aktivitäten: Sachbearbeiter-Triage, digitaler Leistungsrechner, Rückstandsverhandlung.

In einer Pilotkohorte von 120 Haushalten traf die Annahme zum Leistungsrechner für 102 Haushalte
(85 %) zu, die daraufhin korrekt beantragten, belegt durch eine nachfolgende Prozessevaluation — was
dem Programmteam Evidenz für dieses spezifische Glied gibt, statt einer einzigen
Ende-zu-Ende-Behauptung über verhinderte Obdachlosigkeit.

**Wohltätigkeitsorganisation (Jugendmentoring)**: Das langfristige Ergebnis ist reduzierter
Schulausschluss. Rückwärts abgebildete Voraussetzungen: verbesserte emotionale Regulation →
vertrauensvolle Eins-zu-eins-Beziehung mit einer Mentorin oder einem Mentor → beständiger
wöchentlicher Kontakt über zwei Trimester. Die Theorie macht ausdrücklich, dass das Verfehlen der
Voraussetzung "beständiger wöchentlicher Kontakt" (etwa durch Mentor-Fluktuation) vorhersagt, dass
das Ergebnis nicht folgen wird — eine prüfbare, falsifizierbare Behauptung statt einer Hoffnung.

## Bezug zur Softwareentwicklung

Eine Theorie des Wandels sollte das Datenmodell eines Produkts prägen, bevor auch nur ein Dashboard
gebaut wird: identifizieren Sie, welche Glieder einen Indikator brauchen, und instrumentieren Sie
gezielt dafür, statt standardmäßig das zu protokollieren, was am einfachsten ist. Sie diszipliniert
auch Roadmap-Gespräche — ein Feature, das keinem Glied in der Kette zugeordnet werden kann, ist
nicht offensichtlich bauwürdig. Siehe [Wirkungsmodell](../wirkungsmodell/) für die vorwärtsgerichtete
Rechenschaftskette, die gebaut wird, sobald die Theorie vereinbart ist, [soziale Kapitalrendite](../soziale-kapitalrendite/)
für eine Methode, die von einer Theorie des Wandels abhängt, um festzulegen, welche Ergebnisse
bewertet werden, und [Ergebnisse vs. Leistungen](../ergebnisse-vs-leistungen/) für die Unterscheidung,
von der die Zwischenergebnis-Glieder abhängen.

## Fallstricke

- **Sie mit einem Wirkungsmodell verwechseln.** Eine Theorie des Wandels ist kausal und erklärend
  (warum wir glauben, dass dies wirkt); ein Wirkungsmodell ist sequenziell und beschreibend (was in
  welcher Reihenfolge geschieht). Nur eines von beiden zu erstellen, lässt entweder das "Warum" oder
  die Rechenschaftsspur fehlen.
- **Annahmen implizit lassen.** Der gesamte Wert der Rückwärtsabbildung besteht darin, prüfbare
  Annahmen offenzulegen; eine Theorie des Wandels, die nur Kästen und Pfeile auflistet, ohne zu
  benennen, was jedes Glied falsch machen könnte, ist Dekoration.
- **Sie einmal erstellen und dann ablegen.** Eine für einen Förderantrag geschriebene und nie wieder
  aufgegriffene Theorie des Wandels hört auf, nützlich zu sein, sobald Evidenz einem Glied
  widerspricht.
- **Stakeholder-Beteiligung auslassen.** Eine vollständig von Auftraggebern ohne Beitrag von
  Frontline-Personal oder Begünstigten erstellte Theorie des Wandels neigt dazu, Annahmen zu
  kodieren, die niemand, der den Dienst tatsächlich erbringt, glaubt.

## Quellen

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
