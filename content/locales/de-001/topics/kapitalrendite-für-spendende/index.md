# Kapitalrendite für Spendende

Die Kapitalrendite für Spendende ist das, was das Pfund einer bestimmten spendenden Person
tatsächlich an Ergebnissen erkauft — nicht die Betriebskennzahlen der Organisation, und nicht die
eigene Rendite der Organisation auf ihr Gesamtbudget. Sie rahmt ROI von der Perspektive der
Organisation (wie effizient betreiben wir uns) auf die Perspektive der spendenden Person um (was
verändert mein marginaler Beitrag), und beide Zahlen werden routinemäßig — und fälschlich — als
dasselbe behandelt.

## Warum das wichtig ist

Der eigene "ROI" einer Organisation beschreibt, soweit der Ausdruck überhaupt verwendet wird,
üblicherweise etwas wie [Kosten pro Begünstigtem](../kosten-pro-begünstigtem/) oder
[Verwaltungskostenquote](../verwaltungskostenquote-von-wohltätigkeitsorganisationen/) — organisatorische Effizienzmaße. Der ROI einer
spendenden Person ist eine gänzlich andere Frage: Gegeben, dass diese Organisation bereits andere
Einnahmen hat, was fügt *dieses* Geld am Rand hinzu? Wenn eine Organisation dasselbe Programm mit
oder ohne eine bestimmte Spende von 10.000 £ liefern würde — weil sie über reichliche Rücklagen
verfügt, oder weil ein anderer Geldgeber die Lücke gefüllt hätte —, liegt der Spenden-ROI dieser
Spende nahe null, egal wie gut die Gesamtverwaltungskostenquote oder Kosten-pro-Ergebnis der
Organisation aussehen.

Dies ist dieselbe Additionalitätsfrage, die der [Wirtschaftlichkeit](../wirtschaftlichkeit/)-Bewertung
bei britischen öffentlichen Ausgaben und [Additionalität und Mitnahmeeffekten](../additionalität-und-mitnahmeeffekte/)
bei Programmevaluation zugrunde liegt: Geschaffener Wert ist einem Geldgeber nur insoweit
anzurechnen, wie er ohnehin nicht eingetreten wäre. Große Plattformen für beratene Fonds und
Organisationen für effektives Spenden (Giving What We Can, GiveWell) bauen ihre Empfehlungen
ausdrücklich um diese Unterscheidung herum auf und fragen nicht "ist das eine gute
Wohltätigkeitsorganisation", sondern "hat diese Organisation ungefüllten Raum für mehr
Finanzierung, sodass meine Spende zusätzlich ist."

## Die Berechnung

```
Spenden-ROI ≠ Betriebseffizienz der Organisation

Spenden-ROI  ≈  (mit der Spende erreichtes Ergebnis) − (Ergebnis, das
                 ohne sie eingetreten wäre, d. h. das Kontrafaktum)
              ─────────────────────────────────────────────────
                              Höhe der Spende

Zentrale Eingabewerte:
  - Raum für mehr Finanzierung (ist die Organisation am Rand
    finanzierungsbeschränkt?)
  - Funging (hätte ein anderer Spender die Lücke gefüllt?)
  - Marginale Kosten-Wirksamkeit auf dem spezifischen
    Finanzierungsniveau (Kosten steigen oft, wenn eine Intervention
    über ihre am leichtesten erreichbare Population hinaus skaliert)
```

Siehe [Kosten-Wirksamkeit im Effektiven Altruismus](../kosten-wirksamkeit-im-effektiven-altruismus/) dazu,
wie GiveWell die Frage "Raum für mehr Finanzierung" operationalisiert, und
[kontrafaktische Analyse](../kontrafaktische-analyse/) für die allgemeine Methode.

## Beispielrechnung

Eine spendende Person wählt zwischen zwei Spenden über je 5.000 £:

- **Organisation C**: hat ein vollständig finanziertes Kernprogramm mit 2 Millionen £ Rücklagen und
  einer Warteliste von Geldgebern; die marginalen 5.000 £ werden wahrscheinlich zu den Rücklagen
  oder einer niedrigerprioren Aktivität hinzugefügt. Geschätztes spenden-zusätzliches Ergebnis:
  minimal — das Geld verändert offensichtlich nicht, was geschieht.
- **Organisation D**: ein kleines, evidenzgestütztes Programm, das öffentlich erklärt hat, im
  nächsten Quartal 200 Menschen ohne zusätzliche 50.000 £ abweisen zu müssen, und davon bereits
  42.000 £ eingeworben hat. Die marginalen 5.000 £ finanzieren sehr wahrscheinlich echte
  zusätzliche Lieferung — sagen wir, 20 zusätzlich bediente Menschen, bei den von der Organisation
  selbst angegebenen Kosten pro Begünstigtem von 250 £.

Gleiche Spendenhöhe, gleiche spendende Person, radikal unterschiedlicher Spenden-ROI — nicht weil
Organisation C eine schlechtere Organisation ist (sie mag insgesamt eine bessere
Kosten-pro-Ergebnis-Zahl haben), sondern weil ihre marginale Finanzierungslücke bereits geschlossen
ist.

## Bezug zur Softwareentwicklung

Spenderplattformen und Spendenempfehlungswerkzeuge zeigen zu oft nur Effizienzkennzahlen auf
Organisationsebene (Verwaltungskostenquote, Kosten pro Begünstigtem), weil das ist, was
Organisationen in Jahresberichten veröffentlichen und was am leichtesten in eine
Vergleichstabelle zu ziehen ist. Den Spenden-ROI richtig darzustellen, erfordert einen anderen,
schwerer zu beschaffenden Datenpunkt: die von einer Organisation angegebene aktuelle
Finanzierungslücke oder ihren "Raum für mehr Finanzierung", der sich über das Jahr hinweg verändert
und selten strukturierte Daten sind. Plattformen, die echtes Spenden-ROI-Denken unterstützen wollen,
brauchen entweder einen direkten Feed aus Finanzierungslücken-Offenlegungen (wie GiveWell ihn für
seine empfohlenen Organisationen manuell pflegt) oder einen ausdrücklichen Hinweis, dass eine
Vergleichstabelle Organisationseffizienz zeigt, nicht Spenden-Additionalität. Siehe
[Verwaltungskostenquote](../verwaltungskostenquote-von-wohltätigkeitsorganisationen/) für die Kennzahl, mit der Spenden-ROI am
häufigsten — und fälschlich — vermischt wird.

## Fallstricke

- **Organisationseffizienz mit Spenden-Additionalität verwechseln.** Eine gut geführte Organisation
  mit niedrigen Verwaltungskosten kann dennoch einen nahezu null liegenden marginalen Spenden-ROI
  haben, wenn sie nicht finanzierungsbeschränkt ist.
- **Funging ignorieren.** Wenn ein großer institutioneller Geldgeber die Lücke ohnehin gedeckt
  hätte, verdrängt die Spende einer einzelnen Person das Geld dieses Geldgebers, statt neue
  Lieferung hinzuzufügen.
- **Lineare Kosten-Wirksamkeit bei Skalierung annehmen.** Die am leichtesten erreichbaren
  Begünstigten werden oft zuerst bedient; die marginalen Kosten pro Ergebnis steigen häufig, wenn
  ein Programm expandiert, sodass der ROI auf das nächste Pfund nicht derselbe ist wie der ROI auf
  das durchschnittlich bereits ausgegebene Pfund.
- **Keine angegebene Finanzierungslücke.** Eine Organisation oder Plattform, die nicht sagen kann,
  was die nächsten X £ finanzieren würden, kann keine echte Spenden-ROI-Behauptung stützen, nur
  eine Durchschnittskosten-Behauptung.

## Quellen

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
