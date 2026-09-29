# Index der Mehrfachbenachteiligung (Index of Multiple Deprivation, IMD)

Der IMD ist das offizielle Maß relativer Benachteiligung für kleine Gebiete in England und ordnet
jedes der 32.844 Lower-layer Super Output Areas (LSOAs, jeweils etwa 1.500 Einwohnende) des Landes
von 1 (am stärksten benachteiligt) bis 32.844 (am wenigsten benachteiligt). Er wird vom heutigen
Ministry of Housing, Communities and Local Government (MHCLG, früher MHCLG/DCLG) veröffentlicht,
zuletzt als English Indices of Deprivation 2019, und er lenkt direkt Finanzierung der
Zentralregierung, Priorisierung im öffentlichen Gesundheitswesen und Anspruchsberechtigung für
Dutzende lokaler Programme.

## Warum das wichtig ist

Benachteiligung ist nicht eine einzige Sache — eine Nachbarschaft kann einkommensarm, aber sicher
sein, oder einkommensmäßig ausreichend, aber unter schlechten Gesundheitsergebnissen und schlechtem
Wohnraum leiden. Die Vorgängerindizes des IMD (zurückreichend bis zu den
Benachteiligungsindikatoren des Department of the Environment der 1970er Jahre) entwickelten sich zu
dem heutigen Sieben-Bereiche-Modell, genau weil Einzelindikator-Zielsetzung (allein die
Arbeitslosenquote, etwa) routinemäßig Gebiete übersah, die auf andere Weise benachteiligt waren. Der
IMD 2019 kombiniert Einkommen, Beschäftigung, Bildung, Gesundheit, Kriminalität, Zugangshürden zu
Wohnraum und Diensten sowie Wohnumfeld zu einem einzigen zusammengesetzten Rang pro LSOA, jeder
Bereich aufgebaut aus seinem eigenen Korb von Indikatoren und gewichtet nach der Methodik des
MHCLG. Weil er auf kleinräumiger (LSOA-) statt Kommunalverwaltungsebene arbeitet, legt er
Benachteiligungsinseln offen, die innerhalb ansonsten wohlhabender Bezirke verborgen sind — der
Grund, warum der IMD, nicht das durchschnittliche kommunale Einkommen, das ist, woran NHS England,
die Pupil Premium des Bildungsministeriums und Dutzende kommunaler Finanzierungsformeln
tatsächlich anknüpfen. Software, die Anspruchsberechtigung bestimmt, aufsuchende Arbeit priorisiert
oder Wirkung nach Gebiet in England berichtet, sollte IMD-Dezil oder -Rang als erstklassigen
Eingabewert behandeln, nicht als Nachgedanke — und wo ein Programm gezielt die am stärksten
benachteiligten Gebiete anvisiert, sollte seine Bewertung [Verteilungsgewichtung](../distributional-weighting/)
konsistent mit dieser Zielsetzung anwenden, statt ein Pfund Nutzen unabhängig davon, wo es
landet, gleich zu bewerten.

## Die Berechnung

```
7 Bereiche, gewichtet:
  Einkommen                              22,5 %
  Beschäftigung                          22,5 %
  Bildung, Fähigkeiten und Ausbildung    13,5 %
  Gesundheitsbenachteiligung und
    Behinderung                          13,5 %
  Kriminalität                            9,3 %
  Zugangshürden zu Wohnraum und
    Diensten                              9,3 %
  Wohnumfeld                              9,3 %

Jeder Bereichswert: Indikatoren standardisiert (gerankt, dann in
Richtung einer Normalverteilung transformiert) und mittels
exponentieller Transformation kombiniert, sodass hohe Benachteiligung
bei einem Indikator nicht vollständig durch niedrige Benachteiligung
bei anderen innerhalb dieses Bereichs ausgeglichen werden kann.

IMD-Gesamtwert (LSOA) = Σ (Bereichswert × Bereichsgewicht)
LSOAs nach Gesamtwert ranken → 1 (am stärksten benachteiligt) bis
32.844 (am wenigsten benachteiligt)
Dezile: Rang ÷ 3.284 (etwa), Dezil 1 = am stärksten benachteiligte
10 % der LSOAs
```

## Beispielrechnung

**LSOA-Gesamtwert**, unter Verwendung illustrativer standardisierter Bereichswerte (0 = kein
Benachteiligungssignal, höher = stärker benachteiligt):

```
Einkommen             0,35 × 0,225 = 0,07875
Beschäftigung         0,30 × 0,225 = 0,06750
Bildung               0,20 × 0,135 = 0,02700
Gesundheit            0,15 × 0,135 = 0,02025
Kriminalität          0,10 × 0,093 = 0,00930
Zugangshürden Wohnraum 0,05 × 0,093 = 0,00465
Wohnumfeld            0,08 × 0,093 = 0,00744

Gesamtwert = 0,07875 + 0,06750 + 0,02700 + 0,02025
           + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Dieser Gesamtwert wird dann gegen die Werte aller 32.844 LSOAs gerankt. Platziert er das LSOA auf
Rang 2.950, fällt es in Dezil 1 (2.950 ÷ 3.284 ≈ 0,9, d. h. innerhalb der am stärksten
benachteiligten 10 % der Nachbarschaften Englands) — was für viele Finanzierungsformeln die
Schwelle ist, die Anspruchsberechtigung freischaltet, unabhängig davon, wie die umgebende
Kommunalverwaltung im Durchschnitt abschneidet.

## Bezug zur Softwareentwicklung

- Jeder Dienst, der Nutzende nach Postleitzahl oder LSOA geokodiert, kann die veröffentlichte
  IMD-Nachschlagetabelle (eine kostenlose, versionierte CSV-Datei vom MHCLG) verknüpfen, um
  Benachteiligungsdezil als Kovariate hinzuzufügen — für aufsuchende Arbeit, Priorisierung der
  Fallauslastung oder Berichterstattung von Ergebnissen nach Benachteiligungsband, ohne neue
  personenbezogene Daten zu erheben.
- IMD-Dezil ist eine Standard-Fairnessprüfung für öffentliche digitale Dienste: Nutzung,
  Abbruchrate oder Zufriedenheit nach IMD-Dezil kreuztabelliert, legt Zugangslücken offen, die
  eine aggregierte Kennzahl verbirgt — siehe [digitale Inklusion](../digital-inclusion/) und
  [Metriken zur Bürgerzufriedenheit](../citizen-satisfaction-metrics/).
- Weil der IMD-Rang relativ ist (er summiert sich stets zu einem festen Rangset über England),
  kann er nicht zeigen, ob Benachteiligung national im Zeitverlauf steigt oder fällt — nur, welche
  Gebiete relativ zueinander in dieser Ausgabe wo ranken; bauen Sie keine
  Absolut-Trend-Dashboards allein auf rohem IMD-Rang.

## Fallstricke

- **IMD-Ränge über Ausgaben hinweg (2015 vs. 2019) als Zeittrend vergleichen** — die zugrunde
  liegenden Indikatoren, Geografien und Methodik ändern sich alle zwischen Ausgaben; das MHCLG rät
  ausdrücklich davon ab, Rangänderungen als Beleg dafür zu verwenden, dass ein Gebiet stärker oder
  weniger benachteiligt wurde.
- **LSOA-Ebenen-IMD auf Einzelpersonen anwenden** — ein LSOA in Dezil 1 enthält immer noch nicht
  benachteiligte Haushalte, und ein LSOA in Dezil 10 enthält immer noch benachteiligte; der IMD
  beschreibt Gebiete, nicht Menschen, und ihn als individuellen
  Anspruchsberechtigungs-Stellvertreter zu verwenden, fehlklassifiziert in beide Richtungen.
- **Bereichsebenen-Detail zugunsten des Gesamtrangs ignorieren** — zwei LSOAs mit identischen
  Gesamtwerten können völlig unterschiedliche Bereichsprofile haben (eines
  gesundheitsbenachteiligt, eines kriminalitätsbenachteiligt); ein auf ein Problem gerichtetes
  Zielprogramm sollte den relevanten Bereichswert verwenden, nicht den vermischten Gesamtwert.

## Quellen

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
