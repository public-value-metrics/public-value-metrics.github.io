# Berichterstattung über Zuschussergebnisse (IRIS+)

Berichterstattung über Zuschussergebnisse ist die Praxis, bei der Zuschussempfangende standardisierte,
vergleichbare Ergebniskennzahlen an Geldgeber zurückmelden — im Gegensatz dazu, dass jeder Geldgeber
seine eigene maßgeschneiderte Berichtsvorlage erfindet. IRIS+, gepflegt vom Global Impact Investing
Network (GIIN), ist der am weitesten verbreitete solche Standard: ein Katalog vordefinierter
sozialer, ökologischer und finanzieller Leistungskennzahlen, deren Verwendung Impact-Investoren und
zunehmend auch zuschussvergebende Stiftungen von Zuschussempfangenden verlangen oder empfehlen.

## Warum das wichtig ist

Vor standardisierter Berichterstattung fragte jede Stiftung Zuschussempfangende nach einem anderen
Satz von Indikatoren in einem anderen Format, und eine mittelgroße Organisation mit zehn Geldgebern
konnte zehn parallele Berichtsprozesse für sich überschneidende Arbeit betreiben — ein gut
dokumentierter Treiber der Berichtslast, den die Standardisierung von Zuschussergebnissen reduzieren
soll. IRIS+ adressiert dies, indem es Geldgebern und Zuschussempfangenden ein gemeinsames Vokabular
gibt: nach Thema gruppierte Kernkennzahlensätze (z. B. bezahlbarer Wohnraum, Zugang zu sauberer
Energie, finanzielle Inklusion), jede Kennzahl präzise genug definiert, dass "geschaffene
Arbeitsplätze" oder "bediente Haushalte" dasselbe bedeutet, unabhängig davon, wer sie berichtet, und
ausgerichtet an den UN-Zielen für nachhaltige Entwicklung, sodass ein Geldgeber Daten auf
Zuschussempfängerebene zu einer Portfolio-SDG-Erzählung zusammenführen kann. GIIN berichtet, dass
IRIS-Kennzahlen von etwa der Hälfte der Impact-Investoren und der großen Mehrheit der Fondsmanager,
Banken und Entwicklungsfinanzierungsinstitutionen genutzt werden, die im Feld aktiv sind.

Die Standardisierung ist am wichtigsten, wo sie mit [Ergebnisse vs. Leistungen](../ergebnisse-vs-leistungen/)
zusammenwirkt: IRIS+ lenkt Berichterstattung zu definierten Ergebnis- und Impact-Kennzahlen statt zu
dem, was das bestehende Fallmanagementsystem eines Zuschussempfangenden zufällig protokolliert —
genau die Lücke, die [Kosten pro Ergebnis](../kosten-pro-ergebnis/) gegenüber
[Kosten pro Begünstigtem](../kosten-pro-begünstigtem/) beschreibt.

## Die Berechnung

Berichterstattung über Zuschussergebnisse ist ein Rahmenwerk und Prozess, keine Formel:

```
1. Geldgeber wählt einen für das Thema des Zuschusses relevanten
   Kernkennzahlensatz (z. B. IRIS+ "Financial Inclusion" oder
   "Sustainable Agriculture")
2. Jede Kennzahl hat eine feste, von GIIN veröffentlichte Definition,
   Einheit und Berechnungsmethode — nicht pro Geldgeber erfunden
3. Zuschussempfangende berichten gegen dieselben Kennzahlendefinitionen
   bei allen ihren Geldgebern, die diesen Standard nutzen, was den
   doppelten Berichtsaufwand senkt
4. Geldgeber aggregieren Kennzahlen auf Zuschussempfängerebene zu
   Portfolioberichterstattung, jahresübergreifend und über
   Zuschussempfangende hinweg vergleichbar mittels derselben Kennzahl
```

Der Effizienzgewinn ist kombinatorisch: Die Standardisierung von N Geldgebern × M
Zuschussempfangenden auf ein gemeinsames Vokabular verwandelt N×M maßgeschneiderte
Berichtsbeziehungen in etwa N+M Zuordnungen zu einem Standard.

## Beispielrechnung

**Ein Zuschussempfangender mit drei Geldgebern, vor Standardisierung**: berichtet "bediente
Menschen" an Geldgeber 1 mittels einer Kopfzahl-Definition, "erreichte Begünstigte" an Geldgeber 2
mittels einer Haushalts-Definition, und "beeinflusste Personen" an Geldgeber 3 mittels einer
Dienstepisoden-Definition (sodass eine Person, die zweimal besucht, zweimal zählt). Drei Berichte,
drei Zahlen, keine vergleichbar, und keine vergleichbar mit den Zahlen eines anderen
Zuschussempfangenden selbst innerhalb desselben Geldgeber-Portfolios.

**Derselbe Zuschussempfangende unter IRIS+**: berichtet gegen eine definierte
IRIS+-Personen-erreicht-Kennzahl zusammen mit einer definierten Ergebniskennzahl aus dem relevanten
Kernkennzahlensatz, mittels GIIN's veröffentlichter Berechnungsmethodik für beide. Alle drei
Geldgeber erhalten nun dieselbe Zahl, auf dieselbe Weise berechnet, und können die Kosten dieses
Zuschussempfangenden pro IRIS+-definierter Einheit mit anderen Zuschussempfangenden in ihrem
Portfolio anhand derselben Kennzahl vergleichen — das Äquivalent, auf Berichtsinfrastrukturebene, zu
einer geteilten [Unit-Cost-Datenbank](../unit-cost-datenbanken/).

## Bezug zur Softwareentwicklung

Zuschussverwaltungsplattformen sollten IRIS+-Kennzahlenkennungen als Fremdschlüssel behandeln, nicht
als Freitext: den veröffentlichten Kennzahlencode zusammen mit dem berichteten Wert eines
Zuschussempfangenden zu speichern (statt eines lokal erfundenen Felds namens "Begünstigte") ist,
was geldgeber- und portfolioübergreifende Aggregation später ohne ein Datenbereinigungsprojekt
möglich macht. Wo eine Plattform Geldgeber unterstützen muss, die IRIS+ nicht übernommen haben, ist
das pragmatische Design, eine lokale Kennzahl der nächstliegenden IRIS+-Definition zuzuordnen, statt
jeden Geldgeber sofort auf den Standard zu zwingen — Vergleichbarkeit verbessert sich inkrementell,
je mehr des Graphen auf gemeinsame Kennungen abgebildet wird. Siehe das Schwesterthema
[Kosten pro Ergebnis](../kosten-pro-ergebnis/) dazu, wofür die berichteten Zahlen genutzt werden
sollten, sobald sie erfasst sind.

## Fallstricke

- **IRIS+-Übernahme als automatische Vergleichbarkeit behandeln.** Zwei Zuschussempfangende können
  beide gegen dieselbe IRIS+-Kennzahl berichten und trotzdem nicht vergleichbar sein, wenn sich ihre
  zugrunde liegende Datenqualität oder kontrafaktischen Annahmen unterscheiden; der Standard legt
  Definitionen fest, nicht Messstrenge.
- **Von Geldgebern erfundene "IRIS-ausgerichtete" Kennzahlen.** Eine Kennzahl, die nur von
  IRIS+-Sprache inspiriert ist, aber nicht die tatsächlich veröffentlichte Definition, führt die
  Fragmentierung wieder ein, die der Standard lösen soll.
- **Berichtsermüdung durch Überauswahl.** Von einem Zuschussempfangenden zu verlangen, gegen einen
  gesamten Kernkennzahlensatz zu berichten, obwohl nur zwei oder drei Kennzahlen
  entscheidungsrelevant sind, reproduziert das Lastproblem in einer standardisierten Verpackung.
- **Überhaupt keine Ergebniskennzahl.** IRIS+ enthält viele reine Output-Kennzahlen (z. B. Zählungen
  bedienter Menschen); nur diese auszuwählen, und keine der Ergebnisebenen-Kennzahlen, erzeugt
  [Kosten-pro-Begünstigtem](../kosten-pro-begünstigtem/)-förmige Berichterstattung unter einem
  Ergebnisberichterstattungs-Label.

## Quellen

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
