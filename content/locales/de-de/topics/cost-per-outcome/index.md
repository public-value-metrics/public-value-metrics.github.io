# Kosten pro Ergebnis

Kosten pro Ergebnis sind die gesamten Programmausgaben geteilt durch die Anzahl der Menschen, die
eine definierte, bedeutsame Veränderung ihrer Umstände erreichen — nicht die Anzahl, die lediglich
einen Dienst erhalten hat. Es ist die schärfste Effizienzkennzahl, die ein Geldgeber oder ein
Lieferteam verwenden kann, weil sie eine vorgelagerte Frage erzwingt, die die meisten
Wohltätigkeitsorganisationen vermeiden: Was genau zählt als Erfolg?

## Warum das wichtig ist

Eine Tafel kann aus denselben Jahresabschlüssen zwei sehr unterschiedliche Zahlen berichten. Kosten
pro verteiltem Lebensmittelpaket könnten 15 £ betragen. Kosten pro Haushalt, der anschließend
Lebensmittelsicherheit erreicht — keine Notfall-Lebensmittelhilfe mehr benötigend, bei einer
Nachverfolgung verifiziert — könnten 340 £ betragen. Beides stimmt. Nur eine Zahl sagt einem
Geldgeber, ob das Geld wirkt. Die Lücke zwischen beiden ist die Lücke zwischen einer Leistung und
einem Ergebnis: ein übergebenes Paket ist eine Leistung; ein Haushalt, der nicht mehr in der Krise
ist, ist ein Ergebnis. Siehe [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/).

Der britische dritte Sektor hat zwei Jahrzehnte damit verbracht, Infrastruktur aufzubauen, um diese
Unterscheidung zu erzwingen. New Philanthropy Capitals "Vier-Säulen-Ansatz" zur Wirksamkeit von
Wohltätigkeitsorganisationen verlangt ausdrücklich von Organisationen, ihre Ergebnisse vor ihren
Leistungen anzugeben, und Inspiring Impact — der von Geldgebern getragene britische
Wirkungsmessungs-Verbund — veröffentlicht eine Ergebnismatrix, deren Ausfüllung viele Förderanträge
inzwischen von Wohltätigkeitsorganisationen verlangen. Das jährliche Forschungsprogramm "State of
Hunger" des Trussell Trust, durchgeführt mit der Heriot-Watt University, existiert genau deshalb,
weil Paketzahlen allein nichts darüber aussagen, ob Menschen der Lebensmittelunsicherheit entkommen.

Kosten pro Ergebnis bedeuten erst dann etwas, wenn Sie das Kontrafaktum festgelegt haben: ein
"ohnehin" erreichtes Ergebnis ist kein vom Programm erkauftes Ergebnis. Siehe
[kontrafaktische Analyse](../counterfactual-analysis/) und
[Verdrängung und Zurechnung](../displacement-and-attribution/).

## Die Berechnung

```
Kosten pro Ergebnis = Gesamtprogrammkosten / Anzahl der Begünstigten,
                       die das definierte Ergebnis erreichen

wobei:
  Gesamtprogrammkosten = direkte Lieferkosten + fairer Anteil an
                          Gemeinkosten
  Definiertes Ergebnis  = eine vorab festgelegte, messbare
                          Zustandsveränderung (z. B. "lebensmittelsicher
                          bei 6-Monats-Nachverfolgung", nicht "hat ein
                          Lebensmittelpaket erhalten")
```

Vergleichen Sie mit [Unit-Cost-Datenbanken](../unit-cost-databases/) (z. B. sektorspezifische
Stückkosten-Benchmarks), um zu beurteilen, ob gegebene Kosten pro Ergebnis gut, durchschnittlich
oder schlecht im Vergleich zu vergleichbaren Interventionen sind.

## Beispielrechnung

**Tafel, ein Jahr**:

- Gesamtprogrammkosten: 450.000 £
- Verteilte Pakete: 30.000
- Kosten pro Paket (eine Leistungskennzahl): 450.000 £ / 30.000 = **15 £**

Die Organisation führt auch eine sechsmonatige Nachverfolgungserhebung mit einer Stichprobe von
Haushalten durch und findet, dass 35 % der Haushalte, die drei oder mehr Pakete erhielten, angeben,
keine Notfall-Lebensmittelhilfe mehr zu benötigen, und über der Lebensmittelsicherheitsschwelle
eines standardisierten Erhebungsmoduls liegen. Von 1.800 Haushalten, die in diesem Jahr drei oder
mehr Pakete erhielten, erreichen 630 dieses Ergebnis.

```
Kosten pro Ergebnis = 450.000 £ / 630 = 714 £ pro Haushalt, der
                       Lebensmittelsicherheit erreicht
```

Diese Zahl von 714 £ ist die, die ein Geldgeber verwenden sollte, der diese Organisation mit einem
Bargeldtransfer-Pilotprojekt oder einem Schuldnerberatungsdienst vergleicht — nicht 15 £. Wenn ein
vergleichbares Bargeldtransferprogramm in derselben Region Lebensmittelsicherheit für 500 £ pro
Haushalt erreicht, ist die Tafel nicht offensichtlich der effizientere Weg zum selben Ergebnis,
obwohl ihre Kosten pro Paket günstig aussehen.

## Bezug zur Softwareentwicklung

Die meisten Fallmanagementsysteme sind gebaut, um Leistungen zu protokollieren, weil Leistungen das
sind, was innerhalb der Transaktion geschieht (ein Paket wird übergeben, ein Formular wird
eingereicht). Ergebnisse geschehen meist später, oft außerhalb des normalen Erfassungsfensters des
Systems, und erfordern eine bewusste Designentscheidung: Bauen Sie einen
Nachverfolgungsmechanismus (einen Erhebungsauslöser, einen Wiederkontakt-Workflow, eine
Datenverknüpfungsübung) als erstklassiges Feature, nicht als nachträglich für einen Jahresbericht
angeflanschten Zusatz. Ingenieurinnen und Ingenieure, die Zuschussverwaltungs- oder
Fallmanagementplattformen für den Sektor bauen, sollten "was ist das Ergebnisereignis, und wie
beobachten wir es" als Anforderungsfrage behandeln, die gestellt wird, bevor das Datenmodell
feststeht — es ist weit schwieriger, ein Ergebnisfeld nachträglich einzubauen als einen
Leistungszähler. Siehe [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/) und
[Wirkungsmodell](../logic-model/) dazu, wie dieses Anforderungsgespräch strukturiert wird, und
[Kosten pro Begünstigtem](../cost-per-beneficiary/) für die schnellere, gröbere Kennzahl, zu der
Teams greifen, wenn Ergebnisverfolgung noch nicht gebaut ist.

## Fallstricke

- **Leistungen als Ergebnisse verkleidet berichten.** "Erreichte Menschen" ist nicht "geholfene
  Menschen." Wenn die Kennzahl durch ein Systemprotokoll ohne Nachverfolgungskontakt erzeugt werden
  kann, ist sie fast sicher eine Leistung.
- **Nenner-Manipulation.** Die Ergebnispopulation auf "die das Programm abgeschlossen haben" zu
  verengen, lässt stillschweigend die Menschen fallen, die abgebrochen haben — oft die
  schwierigsten Fälle — und bläht die scheinbare Rate auf. Geben Sie den Nenner als alle an, die
  begonnen haben, nicht alle, die abgeschlossen haben.
- **Kein Kontrafaktum.** Jeden zu zählen, der das Ergebnis erreicht hat, einschließlich derer, die
  es ohnehin erreicht hätten, überzeichnet, was das Programm erkauft hat. Siehe
  [kontrafaktische Analyse](../counterfactual-analysis/).
- **Über inkompatible Ergebnisdefinitionen hinweg vergleichen.** "Lebensmittelsicher", gemessen
  durch ein validiertes Erhebungsmodul, ist nicht vergleichbar mit "lebensmittelsicher",
  selbstberichtet in einem Zufriedenheitsformular; eine Kosten-pro-Ergebnis-Rangliste ist nur
  ehrlich, wenn die Ergebnisdefinitionen übereinstimmen.

## Quellen

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
