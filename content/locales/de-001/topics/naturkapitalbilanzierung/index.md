# Naturkapitalbilanzierung

Naturkapitalbilanzierung stellt die Umwelt auf dieselbe Stufe wie jeden anderen nationalen oder
organisatorischen Vermögenswert: Sie misst den Bestand natürlicher Ressourcen (Wälder, Böden,
Flüsse, Feuchtgebiete, die Atmosphäre) und den Strom der von ihnen erzeugten Leistungen
(CO2-Bindung, Hochwasserschutz, Erholung, Nahrung), sowohl in physischen als auch in monetären
Begriffen, sodass Umweltabbau in Entscheidungsprozessen sichtbar wird, wie es der Abbau
finanziellen Kapitals wäre. Das Vereinigte Königreich ist eine der am weitesten fortgeschrittenen
Regierungen dabei, dies systematisch zu tun, getrieben vom 25-Jahres-Umweltplan (2018) und
umgesetzt durch die UK-Naturkapital-Konten des ONS und die ergänzende Leitlinie des Green Book von
HM Treasury.

## Warum das wichtig ist

Konventionelle Buchführung — unternehmerisch wie staatlich — behandelt einen Wald als wertlos, bis
er gefällt und als Bauholz verkauft wird, in welchem Moment er zum BIP wird. Naturkapitalbilanzierung
existiert, um diese Lücke zu schließen: Der 25-Jahres-Umweltplan des Vereinigten Königreichs
verpflichtete die Regierung, Naturkapitaldenken über die gesamte Politik hinweg zu verankern, und
formulierte ausdrücklich den Anspruch, "die erste Generation zu sein, die die Umwelt in einem
besseren Zustand hinterlässt, als sie sie vorgefunden hat." Das ONS hat seither jährliche
UK-Naturkapital-Konten veröffentlicht
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>),
die den Geldwert von Ökosystemleistungen schätzen — von Walderholung über die Gesundheitsvorteile
städtischer Grünflächen bis zur CO2-Speicherung von Moorland —, unter Verwendung desselben
Volkswirtschaftliche-Gesamtrechnung-Rahmenwerks, das für produziertes Kapital verwendet wird,
sodass Naturkapital letztlich auf derselben Bilanz stehen kann wie Straßen, Gebäude und
Ausrüstung. Die ergänzend zum Green Book stehende Leitlinie "Enabling a Natural Capital Approach"
(ENCA) von HM Treasury
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>)
legt fest, wie Bewertende Umweltkosten und -nutzen in Business Cases bewerten sollten, sodass ein
Straßenprogramm, das alten Wald zerstört, und ein Hochwasserschutzprogramm, das Feuchtgebiet
wiederherstellt, auf konsistenter Geldgrundlage verglichen werden können, statt dass eines eine Zahl
und das andere einen Absatz Vorbehalte hat.

## Die Berechnung

```
Ökosystemleistungs-Vermögenswert = Kapitalwert des Stroms von
                                    Leistungen, die der Vermögenswert
                                    liefert

Vermögenswert = Σ (t = 1 bis T) [jährlicher Leistungsstromwert_t /
                (1 + r)^t]

wobei:
  Leistungsstromwert_t = Menge der Leistung in Jahr t × Einheitswert
                          (z. B. Erholungsbesuche × Wert pro Besuch;
                           gebundene Tonnen CO2 × CO2-Preis)
  r = Diskontsatz (sozialer Diskontsatz des Green Book — siehe
      [sozialer Diskontsatz](../sozialer-diskontsatz/))
  T = Zeithorizont, über den der Vermögenswert die Leistung
      voraussichtlich erbringt
```

Dies ist dieselbe Kapitalwert-Struktur, die zur Bewertung produzierten Kapitals oder zur Bewertung
jeder öffentlichen Investition unter [Green-Book-Bewertung](../green-book-bewertung/) verwendet
wird — der Beitrag der Naturkapitalbilanzierung besteht darin, glaubwürdige physische Mengen und
Einheitswerte für Leistungen zu liefern, die zuvor mit null bepreist wurden.

## Beispielrechnung

**Städtischer Wald, Erholungswert**: Ein 50-Hektar-Wald erhält geschätzte 80.000 Erholungsbesuche
pro Jahr, jeder bewertet (über die Reisekosten- oder Präferenzangabe-Methode — siehe
[Bewertung durch offenbarte Präferenz](../bewertung-durch-offenbarte-präferenz/) und
[Präferenzangabe-Bewertung](../präferenzangabe-bewertung/)) mit 3 £ pro Besuch. Der Wald wird
voraussichtlich diese Leistung für 50 Jahre weiter erbringen, bewertet bei einem Diskontsatz von
3,5 %.

```
Jährlicher Erholungswert = 80.000 × 3 £ = 240.000 £/Jahr

Kapitalwert über 50 Jahre bei 3,5 % ≈ 240.000 £ ×
Annuitätsfaktor(3,5 %, 50 Jahre)
Annuitätsfaktor(3,5 %, 50) ≈ 21,4

Vermögenswert ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**CO2-Speicherung hinzufügen**: Derselbe Wald bindet geschätzte 400 Tonnen CO2 pro Jahr, bewertet
mit dem staatlichen Preis für nicht dem Emissionshandel unterliegendes CO2 von etwa 75 £/Tonne
(illustrativ — für eine echte Bewertung die aktuellen veröffentlichten CO2-Werte von BEIS/DESNZ
verwenden).

```
Jährlicher CO2-Wert = 400 × 75 £ = 30.000 £/Jahr
Kapitalwert über 50 Jahre bei 3,5 % ≈ 30.000 £ × 21,4 ≈ 642.000 £

Gesamter Waldvermögenswert (Erholung + CO2) ≈ 5.136.000 £ + 642.000 £
                                              ≈ 5.778.000 £
```

Dies ist noch vor der Addition von Hochwasserrückhalt, Biodiversität oder
Luftqualitätsleistungen, die die ENCA-Leitlinie Bewertende ebenfalls zu berücksichtigen bittet —
die Gesamtsumme ist absichtlich ein Boden, keine Decke.

## Bezug zur Softwareentwicklung

- Umwelt- und Vermögensverwaltungssysteme für Kommunalverwaltungen und Behörden (Parks,
  Straßen, Gewässer) können ein Naturkapitalregister neben ihrem physischen Vermögensregister
  führen, unter Verwendung desselben Leistungsstrom-mal-Einheitswert-Musters wie jede andere
  [Unit-Cost-Datenbank](../unit-cost-datenbanken/), die die Organisation pflegt.
- Weil der Naturkapital-Kapitalwert empfindlich auf den Diskontsatz reagiert (siehe den
  Annuitätsfaktor im Beispiel), sollte jedes Werkzeug, das ihn berechnet, Satz und Zeithorizont als
  sichtbare Eingabewerte offenlegen, nicht verbergen — dasselbe Transparenzprinzip, das unter
  [Generationengerechtigkeit und Nachhaltigkeitsdiskontierung](../generationengerechtigkeit-und-nachhaltigkeitsdiskontierung/)
  behandelt wird.
- Naturkapitalkonten werden zunehmend zu einem verpflichtenden Eingabewert für Umweltwirkungsabschnitte
  eines [Green-Book-Bewertung](../green-book-bewertung/)-Business-Case; ein Lieferteam, das
  Business-Case-Werkzeuge baut, sollte die ONS-Konten und ENCA-Einheitswerte als zu integrierende
  Referenzdaten behandeln, nicht als etwas, das Bewertende jedes Mal von Grund auf neu berechnen.

## Fallstricke

- **Überlappende Ökosystemleistungen doppelt zählen** — Erholungswert und Biodiversitätswert für
  denselben Standort können dieselben zugrunde liegenden Zahlungsbereitschaftsdaten teilen; die
  ENCA-Leitlinie warnt ausdrücklich davor, aus überlappenden Erhebungsinstrumenten abgeleitete
  Bewertungen zu summieren.
- **Einen Naturkapital-Vermögenswert als statisch behandeln** — Leistungsströme verändern sich mit
  Klima, Bewirtschaftung und Landnutzungsdruck; der CO2- und Hochwasserrückhaltwert eines Waldes
  in diesem Jahrzehnt ist keine dauerhafte Eigenschaft des Standorts.
- **Nationale Durchschnitts-Einheitswerte für eine stark lokale Entscheidung verwenden** — ein
  Hektar zugänglicher städtischer Wald und ein Hektar abgelegenes Hochland haben sehr
  unterschiedlichen Erholungswert; die ENCA-Leitlinie empfiehlt lokale oder standortspezifische
  Werte, wo verfügbar, statt standardmäßig nationale Durchschnitte zu verwenden.

## Quellen

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
