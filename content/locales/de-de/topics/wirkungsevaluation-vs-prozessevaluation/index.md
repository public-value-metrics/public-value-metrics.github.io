# Wirkungsevaluation vs. Prozessevaluation

Wirkungsevaluation fragt, ob ein Programm seine beabsichtigten Ergebnisse verursacht hat.
Prozessevaluation fragt, ob das Programm tatsächlich wie konzipiert geliefert wurde — an wen, in
welcher Dosis und mit welchen Hindernissen oder Erleichterungen auf dem Weg. Dies sind
unterschiedliche Fragen, die unterschiedliche Methoden erfordern, und HM Treasurys Magenta Book
behandelt die Beauftragung beider zusammen als Standardpraxis, weil ein schwaches oder null Ergebnis
der Wirkung allein nicht interpretierbar ist: Es kann Ihnen nicht sagen, ob die zugrunde liegende
Theorie des Programms falsch war oder ob eine gute Theorie einfach nie richtig umgesetzt wurde.

## Warum das wichtig ist

Staatliche Evaluationen haben wiederholt keine messbare Wirkung eines Programms gefunden, ohne eine
Prozessevaluation zu haben, die erklären könnte, warum — was Auftraggeber unfähig macht, "diese Idee
funktioniert nicht" (Theorieversagen) von "diese Idee wurde nie tatsächlich richtig ausprobiert"
(Umsetzungsversagen) zu unterscheiden. Die Leitlinie des Medical Research Council zur
Prozessevaluation komplexer Interventionen, 2015 im BMJ veröffentlicht und häufig neben dem Magenta
Book zitiert, formalisierte Treue, Dosis und Reichweite als die Kerndinge, die eine Prozessevaluation
messen muss. Eine Wirkungsevaluation ohne Prozessevaluation zu beauftragen, birgt das Risiko, ein
wirklich fundiertes Programmdesign aufzugeben, weil es nur an die Hälfte der beabsichtigten
Population mit einem Bruchteil der beabsichtigten Intensität geliefert wurde — ein Fehler, den eine
Systembauerin oder ein Systembauer gut verhindern kann, weil Liefertreue genau das ist, was
operative Datensysteme nahezu in Echtzeit erfassen können.

## Die Berechnung

```
Prozessevaluation fragt:
 - Wurde es an die Zielpopulation geliefert, in der geplanten
   Dosis/Intensität?
 - Entsprach die Lieferung dem Design des Wirkungsmodells/der Theorie
   des Wandels?
 - Welche Hindernisse oder Erleichterungen beeinflussten die Lieferung?
 Methoden: Treueprüfungen gegen vorab festgelegte Schwellenwerte,
           Fallstudien, Interviews, administrative Liefer daten.

Wirkungsevaluation fragt:
 - Was hat sich verändert, und wie viel dieser Veränderung ist dem
   Programm zurechenbar?
 Methoden: RCT, DiD, PSM, RDD — siehe Methoden der Wirkungsevaluation —
           gegen ein Kontrafaktum.

Kombinierte Diagnose:
 Keine Wirkung + hohe Treue    → Theorieversagen: das Modell selbst hat
                                  das Ergebnis nicht erzeugt
 Keine Wirkung + niedrige Treue → Umsetzungsversagen: das Modell wurde
                                  nie richtig getestet
 Wirkung gefunden + hohe Treue → mit Zuversicht replizieren
 Wirkung gefunden + niedrige Treue → weiter untersuchen: die Wirkung
                                  könnte fragil oder standortspezifisch
                                  sein
```

## Beispielrechnung

**Kommunalverwaltung (Elternschaftsprogramm)**: Eine Wirkungsevaluation mittels
Differenz-von-Differenzen findet eine Veränderung von +2 Prozentpunkten bei einem Maß für das
kindliche Wohlergehen — nicht statistisch signifikant. Die parallel durchgeführte
Prozessevaluation findet, dass das Programm nur 210 der 500 anvisierten Familien erreichte (42 %
Reichweite), und von diesen erfüllten nur 95 die vorab festgelegte Treueschwelle von 75 %+
besuchten Sitzungen — 19 % der ursprünglich geplanten Reichweite. Schlussfolgerung: Das schwache
Wirkungsergebnis ist konsistent mit einem Umsetzungsversagen, nicht ein Beleg dafür, dass das
Programmmodell nicht funktioniert; die angemessene Reaktion ist, den Überweisungsweg zu reparieren,
der den Rückgang um 58 % verursachte, nicht das Programmdesign aufzugeben.

**Wohltätigkeitsorganisation (Digitalkompetenz-Programm)**: Eine Wirkungsevaluation findet eine
starke Wirkung (+18 Prozentpunkte auf einem Digitalkompetenz-Vertrauens-Score), und eine parallele
Prozessevaluation bestätigt 92 % Treue zum geplanten Curriculum über alle 12 Lieferstandorte hinweg.
Kombiniert kann der Geldgeber das Programm mit Zuversicht skalieren, weil gezeigt wird, dass die
Wirkung konsistent Bestand hat, statt das Produkt eines ungewöhnlich guten Standorts zu sein.

## Bezug zur Softwareentwicklung

Daten der Prozessevaluation sind genau das, was Liefersysteme gut erfassen können: Teilnahme gegen
Plan, Sitzungsdosis und Abbruch an jeder Stufe eines Überweisungs- oder Anmeldungstrichters —
dieselbe Trichteranalytik, die Ingenieurinnen und Ingenieure bereits für Produktfeatures bauen,
angewendet auf die Lieferpipeline eines sozialen Programms statt dessen. Treue- und
Reichweitenkennzahlen nahezu in Echtzeit an Programmverantwortliche zu liefern, statt auf eine
Evaluation am Ende der Förderung zu warten, erlaubt es, einen defekten Überweisungsweg
mitten im Programm zu reparieren, statt erst nach Ablauf des Förderzeitraums entdeckt zu werden.
Siehe [Methoden der Wirkungsevaluation](../methoden-der-wirkungsevaluation/) für die kausalen Designs, mit
denen Prozessevaluation gepaart wird, [Theorie des Wandels](../theorie-des-wandels/) und
[Wirkungsmodell](../wirkungsmodell/) für das Design, gegen das die Prozessevaluation die Treue prüft,
und [Nutzenrealisierung](../nutzenrealisierung/) für die Nachverfolgung der Lieferung bis zu den
versprochenen Ergebnissen.

## Fallstricke

- **Nur Wirkungsevaluation beauftragen.** Ein null oder schwaches Ergebnis kann dann nicht als
  Theorieversagen oder Umsetzungsversagen interpretiert werden — genau die Unterscheidung, die für
  die Entscheidung über das weitere Vorgehen wichtig ist.
- **Prozessevaluation als weiches Extra behandeln.** Sie braucht dieselbe Sorgfalt und vorab
  festgelegte Treuekriterien wie das Wirkungsdesign, sonst kollabiert sie zu Anekdoten, wenn die
  Ergebnisse eintreffen.
- **"Pünktlich und im Budget" mit "wie konzipiert geliefert" verwechseln.** Prozessevaluation prüft
  Treue zum Modell — Dosis, Zielgruppe, Inhalt —, nicht den RAG-Status des Projektmanagements.
- **Treueschwellen nicht vorab registrieren.** Erst nachträglich zu entscheiden, was als
  "ausreichende Dosis" zählt, lässt jede Erklärung eines enttäuschenden Wirkungsergebnisses wie eine
  nachträgliche Ausrede aussehen.

## Quellen

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
