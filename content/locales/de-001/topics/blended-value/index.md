# Gemischter Wert

Gemischter Wert ist Jed Emersons These, dass jede organisatorische und Investitionstätigkeit
gleichzeitig Wert entlang dreier Linien schafft — wirtschaftlich, sozial und ökologisch — und dass
dies keine drei getrennten Renditen sind, die gegeneinander abgewogen werden, sondern ein
einziges, untrennbares Wertversprechen. In Emersons Rahmung gibt es weder eine rein finanzielle
noch eine rein soziale Rendite; jedes ausgegebene, investierte oder als Zuschuss vergebene Pfund
erzeugt eine Mischung aus allen drei.

## Warum das wichtig ist

Emerson legte die Idee in "The Blended Value Proposition: Integrating Social and Financial
Returns" (California Management Review, 2003) dar, geschrieben direkt gegen die Konvention des 20.
Jahrhunderts, Kapital in zwei Silos zu sortieren — Philanthropie, von der erwartet wurde, soziale
Rendite zu erzeugen und finanzielle Rendite vollständig zu erlassen, und Investition, von der
erwartet wurde, finanzielle Rendite zu erzeugen und soziale oder ökologische Effekte als
Externalität zu behandeln. Emersons Argument war, dass diese Sortierung immer eine Fiktion war: Ein
Zuschuss, der eine schlecht geführte Organisation finanziert, zerstört Wert entlang aller drei
Linien, und ein profitables Unternehmen, das einen Fluss verschmutzt, zerstört ebenfalls Wert
entlang aller drei Linien, egal wie die Rendite seiner Aktionäre auf dem Papier aussieht.

Die Idee läuft parallel zu John Elkingtons "Triple Bottom Line" (Menschen, Planet, Profit), 1994
geprägt und in seinem 1997er Buch "Cannibals with Forks" weiterentwickelt, das Unternehmen dazu
drängte, neben der finanziellen Leistung auch über soziale und ökologische Leistung zu berichten.
Gemischter Wert trieb dieselbe Logik weiter in die Kapitalallokation selbst hinein und ist der
intellektuelle Vorfahre des Impact-Investing-Felds: Das Global Impact Investing Network (GIIN),
2009 gegründet, existiert spezifisch, um die Infrastruktur zu bauen — einschließlich des
IRIS+-Kennzahlenkatalogs, siehe [Berichterstattung über Zuschussergebnisse](../grant-outcomes-reporting/)
—, die es einem Investor erlaubt, die Mischung tatsächlich zu messen, statt sie nur zu behaupten.

## Die Berechnung

Gemischter Wert ist ein Rahmenwerk, keine Formel, und Emerson warnte ausdrücklich davor, ihn auf
einfache Addition dreier Werte zu reduzieren. Die vorgeschlagene Struktur:

```
Jede eingesetzte Kapitaleinheit (Zuschuss, Investition, Vertrag,
Einkauf) erzeugt:
  - einen wirtschaftlichen Effekt      (finanzielle Rendite,
                                          eingesparte Kosten, erzeugter
                                          Umsatz)
  - einen sozialen Effekt              (Wohlfahrt, Fähigkeit,
                                          Gerechtigkeitsveränderung
                                          für Menschen)
  - einen ökologischen Effekt          (geschütztes, degradiertes oder
                                          wiederhergestelltes
                                          Naturkapital)

Diese werden nicht getrennt optimiert und dann summiert. Eine
Entscheidung, die die wirtschaftliche Linie maximiert, während sie die
soziale Linie zerstört, ist nicht "gemischter Wert plus eine Kosten" —
es ist eine wertvernichtende Entscheidung, Punkt.
```

In der Praxis nähern sich Organisationen der Mischung mit einer Scorecard: benannte Indikatoren für
jede Linie, gemeinsam berichtet, nicht zu einer Zahl verrechnet. Das ist derselbe Instinkt hinter
[sozialer Kapitalrendite](../social-return-on-investment/) (die tatsächlich monetarisierte
Verrechnung versucht) und [Naturkapitalbilanzierung](../natural-capital-accounting/) (die dasselbe
für die ökologische Linie tut) — beide sind partielle, einlinige Antworten auf die Frage, die
gemischter Wert vollständig stellt.

## Beispielrechnung

Ein Impact-Investor wählt zwischen zwei Darlehen über je 500.000 £:

- **Darlehen A**: an ein Sozialunternehmen, das ein Berufsausbildungscafé für ehemalige Häftlinge
  betreibt, zu 2 % Zins (unter dem Marktsatz von 6 % für Kredite gleichen Risikos), erwartet 40
  Personen/Jahr in dauerhafte Arbeit zu vermitteln.
- **Darlehen B**: ein Marktzins-Darlehen zu 6 % an ein konventionelles Einzelhandelsunternehmen ohne
  angegebenes soziales oder ökologisches Ziel.

Eine rein finanzielle Perspektive bevorzugt B (6 % > 2 %). Eine Perspektive gemischten Werts
verlangt vom Investor, alle drei Linien für beide anzugeben:

| | Wirtschaftlich (jährlich) | Sozial (jährlich) | Ökologisch |
|---|---|---|---|
| Darlehen A | 10.000 £ Zinsen | 40 in Arbeit vermittelte Personen; jedes Personenjahr trägt eine plausible vermiedene Rückfälligkeitskosten-Einsparung für den Staat, abgeleitet aus Rückfälligkeitskostenanalysen des Justizministeriums | Neutral |
| Darlehen B | 30.000 £ Zinsen | Keine angegeben | Neutral |

Die gemischte Rendite von Darlehen A dominiert eindeutig, sobald die soziale Linie bepreist wird,
obwohl seine finanzielle Linie allein gegen Darlehen B um 20.000 £ pro Jahr verliert. Gemischter
Wert sagt dem Investor nicht, die Lücke von 20.000 £ zu ignorieren — er sagt ihm, nicht so zu tun,
als sei sie die einzig existierende Zahl.

## Bezug zur Softwareentwicklung

Berichts- oder Portfoliomanagement-Software für Stiftungen, Impact-Fonds oder
Beschaffungsteams von Kommunalverwaltungen wird häufig mit einem Finanzbuch als primärem
Datenmodell gebaut, wobei soziale oder ökologische Felder als Freitextnotizen angeflanscht sind.
Gemischter Wert impliziert das Gegenteil-Design: drei erstklassige, gleich strukturierte
Wertströme, an jede Transaktion oder jeden Zuschussdatensatz angehängt, jeweils mit eigener
Einheit, Quelle und Vertrauensniveau, gemeinsam angezeigt, statt zu einem einzigen irreführend
präzisen Wert verrechnet. Siehe [soziale Kapitalrendite](../social-return-on-investment/) und
[Scorecard für öffentlichen Wert](../public-value-scorecard/) für zwei strukturierte Wege, diese
Anzeige zu bauen, ohne die Mischung zu verdichten.

## Fallstricke

- **Die drei Linien zu einer Zahl summieren.** Emersons eigene Schriften warnen davor; ein
  einzelner gemischter Wert verbirgt, welche Linie tatsächlich die Arbeit leistet, und lädt zu
  Rosinenpicken ein.
- **Blend-Washing.** Eine starke soziale oder ökologische Linie ohne benannten Indikator oder
  Messmethode zu behaupten, um eine unter dem Markt liegende finanzielle Rendite zu rechtfertigen,
  die sonst wie Unterperformance aussähe.
- **Negative Mischungen ignorieren.** Ein finanziell erfolgreiches Programm kann eine negative
  soziale oder ökologische Linie haben; gemischter Wert verlangt, schlechte Nachrichten auf jeder
  Linie zu berichten, nicht nur gute Nachrichten auf einer.

## Quellen

- Emerson J. "The Blended Value Proposition: Integrating Social and Financial Returns." California Management Review, 2003;45(4). <https://www.blendedvalue.org/>
- Elkington J. "Cannibals with Forks: The Triple Bottom Line of 21st Century Business." Capstone, 1997.
- Global Impact Investing Network (GIIN), About IRIS+. <https://iris.thegiin.org/about/>
