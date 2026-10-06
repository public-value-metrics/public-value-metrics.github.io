# Generationengerechtigkeit und Nachhaltigkeitsdiskontierung

Zukünftige Kosten und Nutzen auf den Barwert zurückzudiskontieren ist Standardpraxis in der
öffentlichen Bewertung — siehe [sozialer Diskontsatz](../sozialer-diskontsatz/) —, aber jeder
positive Diskontsatz, über Jahrzehnte oder Jahrhunderte kumuliert, schrumpft die ferne Zukunft in
heutigen Begriffen gegen null. Für Entscheidungen mit Konsequenzen, die ein Jahrhundert oder mehr
entfernt liegen — Klimawandel, Atommüll, Biodiversitätsverlust, Rentennachhaltigkeit — wird diese
mathematische Tatsache zu einer ethischen: Standarddiskontierung kann katastrophalen Schaden für
zukünftige Generationen im Barwert kaum vermeidenswert erscheinen lassen.

## Warum das wichtig ist

Die von Frank Ramsey 1928 hergeleitete Ramsey-Gleichung zerlegt den Diskontsatz in zwei Komponenten:
reine Zeitpräferenz (δ, wie sehr wir Gegenwart gegenüber Zukunft bevorzugen, unabhängig vom
Wohlstand) und den Wohlstandswachstumseffekt (η×g, wie sehr wir diskontieren, weil zukünftige
Generationen voraussichtlich reicher sein werden, sodass ihnen ein zusätzliches Pfund weniger
bedeutet). Der britische Standard-Langfrist-Diskontsatz des Green Book baut auf dieser Gleichung auf
und folgt einem *fallenden* Zeitplan statt einem flachen Satz — ein Design, das in Martin
Weitzmans Arbeit zum "Gamma-Discounting" wurzelt, die zeigt, dass, wenn der zukünftige Diskontsatz
selbst unsicher ist, der anzuwendende Sicherheitsäquivalent-Satz mathematisch im Zeitverlauf fällt,
weil Niedrigsatz-Szenarien umso mehr dominieren, je weiter man in die Zukunft blickt. Der
Stern-Bericht zur Ökonomie des Klimawandels (2006), geleitet von Sir Nicholas Stern, trieb die
ethische Debatte weiter: Stern argumentierte, reine Zeitpräferenz solle nahe null gesetzt werden (er
verwendete δ ≈ 0,1 %, was nur die geringe Wahrscheinlichkeit einer zivilisationsbeendenden
Katastrophe widerspiegelt, keine echte Präferenz der Gegenwart gegenüber der Zukunft), was einen weit
niedrigeren effektiven Diskontsatz erzeugte als die konventionelle Green-Book-Praxis und
entsprechend einen weit größeren heutigen Fall für Klimaschutz. Kritiker (allen voran William
Nordhaus) argumentierten, Sterns nahezu null liegender Satz sei ethisch vertretbar, aber
inkonsistent mit tatsächlich beobachtetem Spar- und Investitionsverhalten. Die Uneinigkeit ist keine
technische Fußnote — sie ist der wichtigste einzelne Grund, warum zwei gleichermaßen rigorose
Ökonomen zu wild unterschiedlichen Schlussfolgerungen darüber gelangen können, wie viel die heutige
Generation für die Zukunft opfern sollte, und der Grund, warum Software, die langfristige öffentliche
Investitionsbewertung unterstützt, ihre Diskontierungsannahmen offenlegen muss, statt sie in einem
Tabellen-Standardwert zu vergraben.

## Die Berechnung

```
Ramsey-Gleichung:   r = δ + η × g

  r = sozialer Diskontsatz
  δ = reine Zeitpräferenz (Ungeduldsrate, unabhängig vom Wohlstand)
  η = Elastizität des Grenznutzens des Konsums (abnehmender Wert
      zusätzlichen Konsums, wenn Menschen reicher werden)
  g = erwartete Wachstumsrate des Pro-Kopf-Konsums

Fallender Langfrist-Zeitplan des Green Book (ungefähr, aktuell
veröffentlichte Bänder):
  Jahre 0–30:    3,5 %
  Jahre 31–75:   3,0 %
  Jahre 76–125:  2,5 %
  Jahre 126–200: 2,0 %
  Jahre 201–300: 1,5 %
  Jahre 301+:    1,0 %

Parameter des Stern-Berichts: δ ≈ 0,1 %, η = 1, g ≈ 1,3 % → r ≈ 1,4 %
```

## Beispielrechnung

**Heutiger Wert von 1 £ vermiedenen Schadens in 100 Jahren**, unter drei Diskontierungsregimen:

```
Flacher kurzfristiger Green-Book-Satz (3,5 %, konstant über 100
Jahre gehalten):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 Pence)

Fallender Zeitplan des Green Book (3,5 % für Jahre 1–30, 3,0 % für
Jahre 31–75, 2,5 % für Jahre 76–100):
  Faktor(1–30)  = 1,035^30  ≈ 2,807
  Faktor(31–75) = 1,03^45   ≈ 3,782
  Faktor(76–100)= 1,025^25  ≈ 1,854
  Gesamtfaktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ 0,051 £   (5,1 Pence)

Stern-artige nahezu null liegende reine Zeitpräferenz (r ≈ 1,4 %
flach):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 Pence)
```

Derselbe vermiedene Schaden von 1 £, ein Jahrhundert in der Zukunft, ist heute je nach verwendeter
Diskontierungskonvention 3,2 P, 5,1 P oder 25 P wert — eine fast achtfache Spanne, die bestimmt, ob
ein Klimaschutzprojekt mit hohen Vorabkosten und Auszahlung ein Jahrhundert später überhaupt eine
positive-Kapitalwert-Hürde überspringt. Dies ist der Mechanismus hinter der zentralen Warnung
dieses Kapitels: Bei jedem bedeutsam positiven flachen Satz wird hinreichend ferner zukünftiger
Schaden arithmetisch aus der Bewertung gelöscht, unabhängig von seinem wahren Ausmaß.

## Bezug zur Softwareentwicklung

- Jedes langfristige Bewertungs- oder Business-Case-Werkzeug (Infrastruktur, Klimaanpassung,
  Rentenmodellierung) sollte den *fallenden* Zeitplan des Green Book umsetzen, nicht einen
  einzelnen flachen Satz — ein flacher Standardsatz verankert stillschweigend eine weit stärkere
  Zukunfts-Abwertung, als die aktuelle britische Regierungsleitlinie vorgibt.
- Diskontsatz und Zeithorizont sollten in Bewertungssoftware stets als sichtbare, prüfbare
  Parameter offengelegt werden, mit der Sensitivität der Berechnung gegenüber ihnen ausdrücklich
  gezeigt (wie im Beispiel oben) — den Satz in einer Konfigurationsdatei zu vergraben, lädt genau
  zu der "verborgenen ethischen Entscheidung" ein, vor der die Stern-Nordhaus-Debatte warnt; dies
  passt zum Transparenzpunkt in [Naturkapitalbilanzierung](../naturkapitalbilanzierung/) und
  liegt dem Thema [sozialer Diskontsatz](../sozialer-diskontsatz/) allgemein zugrunde.
- Wo der Nutzen eines Programms ausdrücklich generationenübergreifend ist (Hochwasserschutz,
  Naturkapitalwiederherstellung, langfristige digitale Infrastruktur), sollte eine
  [soziale Kosten-Nutzen-Analyse](../soziale-kosten-nutzen-analyse/) Ergebnisse unter mindestens
  zwei Diskontierungsannahmen berichten (Green-Book-Standard und ein
  Niedrigsatz-Sensitivitätsfall), statt einer einzelnen Punktschätzung, damit Entscheidungsträger
  sehen, wie allein die Wahl des Diskontsatzes die Antwort bewegt.

## Fallstricke

- **Einen einzelnen diskontierten Kapitalwert ohne Sensitivitätsspanne präsentieren** — angesichts
  dessen, wie stark allein der Diskontsatz die Antwort bei langfristigen Projekten verändert,
  überzeichnet ein Einzelsatz-Kapitalwert die Präzision wesentlich; berichten Sie stets eine
  Spanne, die mindestens den Green-Book-Standard und ein Niedrigsatz-Szenario umfasst.
- **Den kurzfristigen flachen Satz (3,5 %) auf eine mehrere Jahrhunderte umfassende Bewertung
  anwenden** — die eigene Leitlinie des Green Book legt den fallenden Zeitplan genau deshalb fest,
  weil der flache Satz über etwa 30 Jahre hinaus als unangemessen beurteilt wurde; ihn trotzdem zu
  verwenden, unterschätzt langfristige Kosten.
- **δ (reine Zeitpräferenz) als rein technischen Parameter behandeln** — Sterns nahezu null
  liegender Wert und der höhere implizite Wert des Green Book sind beide nur als ethische
  Positionen dazu vertretbar, wie viel Gewicht die Gegenwart der Zukunft schuldet, nicht als
  empirisch "richtige" oder "falsche" Zahlen; Software sollte die Annahme sichtbar machen, statt
  eine Zahl als objektiv richtig darzustellen.

## Quellen

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
