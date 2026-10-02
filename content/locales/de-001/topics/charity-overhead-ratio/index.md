# Verwaltungskostenquote von Wohltätigkeitsorganisationen

Die Verwaltungskostenquote ist Verwaltungs- und Fundraising-Ausgaben, ausgedrückt als Prozentsatz
der Gesamtausgaben. Sie ist die am häufigsten nachgefragte Zahl beim wohltätigen Spenden — genutzt
von Spendenden, Aufsichtsorganisationen und sogar manchen Geldgebern als Stellvertreter für
Effizienz — und sie ist auch eine der gründlichst diskreditierten Effizienzkennzahlen im Sektor,
wobei die Organisationen, die sie populär machten, sie 2013 öffentlich verwarfen.

## Warum das wichtig ist

Am 17. Juni 2013 veröffentlichten GuideStar, die BBB Wise Giving Alliance und Charity Navigator —
die drei größten US-Bewertungs- und Informationsstellen für gemeinnützige Organisationen, deren
eigene historische Bewertungen dazu beigetragen hatten, die Verwaltungskostenquote als Kurzformel
für Organisationsqualität zu verfestigen — einen gemeinsamen offenen Brief an amerikanische
Spendende, "The Overhead Myth", der ausdrücklich feststellte, dass die Verwaltungskostenquote ein
schlechtes Maß für die Leistung einer Organisation ist, und Spendende drängte, stattdessen auf
Transparenz, Governance und Ergebnisse zu achten. Dies war eine direkte Kehrtwende genau der
Institutionen, die die Spendenkultur ein Jahrzehnt lang um diese Quote herum aufgebaut hatten.

Das zugrunde liegende Problem ist strukturell, nicht nur eine Frage der Außenwirkung: Eine niedrige
Verwaltungskostenquote kann erreicht werden, indem genau in die Dinge unterinvestiert wird, die eine
Organisation wirksam machen — ein anständiges Fallmanagementsystem, geschultes Personal,
Monitoring und Evaluation —, weil diese oft als "Verwaltung" statt als "Programm"-Kosten verbucht
werden. Eine Organisation, die ihr Backoffice aushungert, um 5 % Verwaltungskosten zu berichten,
kann weniger fähig sein, Ergebnisse zu liefern, als eine, die 20 % für einen ordentlich
ausgestatteten Betrieb ausgibt. In England und Wales lenkt die Leitlinie der Charity Commission für
Treuhänder von einem einzelnen Verwaltungskostenprozentsatz als Effizienztest weg und verlangt
stattdessen von Treuhändern, über das zu berichten, was die Organisation gegen ihre Ziele erreicht
hat — siehe die SORP-Berichtsanforderungen, diskutiert in [Kosten pro Begünstigtem](../cost-per-beneficiary/).

## Die Berechnung

```
Verwaltungskostenquote = (Verwaltungskosten + Fundraising-Kosten) /
                          Gesamtausgaben

Gängige Varianten:
  Programmquote           = Programmausgaben (direkt gemeinnützig) /
                             Gesamtausgaben = 1 − Verwaltungskostenquote
  Fundraising-Effizienz    = Fundraising-Kosten / eingeworbene Mittel
```

Keine dieser Formeln enthält Information über erreichte Ergebnisse. Eine Organisation kann jede von
ihnen minimieren und trotzdem bei jedem Begünstigten scheitern; siehe [Kosten pro Ergebnis](../cost-per-outcome/)
für die Kennzahl, die tatsächlich damit befasst, ob das Geld wirkte.

## Beispielrechnung

Zwei Organisationen, gleiche Gesamtausgaben:

- **Organisation A**: 1.000.000 £ Gesamtausgaben, 80.000 £ Verwaltung + Fundraising →
  Verwaltungskostenquote 8 %. Sie hat keine Monitoring- und Evaluationsfunktion, eine
  überarbeitete Finanzsachbearbeiterin und kein Fallmanagementsystem; die Personalfluktuation ist
  hoch und Ergebnisdaten werden nicht erhoben.
- **Organisation B**: 1.000.000 £ Gesamtausgaben, 220.000 £ Verwaltung + Fundraising →
  Verwaltungskostenquote 22 %. Sie finanziert ein kleines Evaluationsteam, ein
  Fallmanagementsystem, das Ergebnisnachverfolgung erfasst, und ordentliche Schulungen zum
  Schutz vor Missbrauch.

Ein Spender, der rein nach Verwaltungskostenquote filtert, wählt A und lehnt B ab — das Gegenteil
dessen, was Evidenz aus [Kosten pro Ergebnis](../cost-per-outcome/) wahrscheinlich zeigen würde,
weil B von beiden die einzige ist, die in der Lage ist, ihre tatsächlichen Ergebnisse zu belegen
oder zu verbessern.

## Bezug zur Softwareentwicklung

Finanz- und Zuschussberichtssoftware für den Sektor kodiert die Trennung
Verwaltung/Programm oft fest als kategoriales Feld auf jeder Kostenzeile, weil das ist, was
Regulierer und manche Geldgeber weiterhin in gesetzlichen Rückmeldungen verlangen. Ingenieurinnen
und Ingenieure, die diese Systeme bauen, sollten diese Anforderung als Compliance-Pflicht behandeln,
nicht als Designsignal, dass die Verwaltungskostenquote die Kennzahl ist, die prominent auf einem
Dashboard angezeigt werden sollte; paaren Sie sie, wo immer sie gezeigt wird, mit einer
ergebnisbasierten Kennzahl, damit Betrachtende die Verwaltungskostenquote nicht isoliert lesen
können. Siehe [Kapitalrendite für Spendende](../donor-return-on-investment/) für die Kennzahl, die
daneben stehen sollte, und [Wirtschaftlichkeit](../value-for-money/) für das äquivalente Argument im
öffentlichen Sektor gegen Effizienz-Stellvertreterwerte aus einer einzigen Quote.

## Fallstricke

- **Die Verwaltungskostenquote als Filter-Schwellenwert verwenden.** Jede Organisation oberhalb
  eines willkürlichen Schwellenwerts abzulehnen (z. B. "nicht mehr als 15 % Verwaltungskosten")
  bestraft systematisch ordentlich ausgestattete, gut evaluierte Organisationen und belohnt
  Unterinvestition.
- **Direkte Lieferkosten falsch als Verwaltung kategorisieren**, oder umgekehrt — Buchführungskonventionen
  dafür, was als "Programm" versus "Verwaltung" zählt, variieren zwischen Organisationen genug,
  dass Quoten oft nicht einmal auf den ersten Blick vergleichbar sind.
- **Annehmen, niedrige Verwaltungskosten implizierten hohe Wirkung.** Beides ist bestenfalls
  unkorreliert; siehe die Kernbehauptung des Overhead-Myth-Briefs von 2013.
- **Ignorieren, dass manche legitimen Strategien höhere kurzfristige Verwaltungskosten
  erfordern.** Eine Kapazitätsaufbau- oder Organisationsentwicklungsphase erhöht absichtlich die
  Verwaltungsausgaben, um spätere Lieferung zu verbessern.

## Quellen

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
