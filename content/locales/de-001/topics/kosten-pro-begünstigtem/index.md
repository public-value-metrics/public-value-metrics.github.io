# Kosten pro Begünstigtem

Kosten pro Begünstigtem sind die gesamten Programmkosten geteilt durch die Anzahl eindeutiger
Menschen, die einen Dienst erhielten — jeder, der erreicht wurde, unabhängig davon, ob sich seine
Umstände tatsächlich veränderten. Es ist die am schnellsten produzierbare Effizienzzahl, die eine
Organisation erzeugen kann, weil "wen haben wir bedient" fast immer bereits im Fallmanagementsystem
steht, während "wem wurde geholfen" es meist nicht ist.

## Warum das wichtig ist

Geldgeber fragen ständig nach Kosten pro Begünstigtem, aus vertretbaren Gründen: Die Zahl ist sofort
verfügbar, sie ist über ein Portfolio sehr unterschiedlicher Programme hinweg vergleichbar, und sie
ist ehrlich über Reichweite auf eine Weise, wie es Ergebnisbehauptungen — die länger zur
Verifizierung brauchen und leichter zu überzeichnen sind — nicht sind. Der britische Charities SORP
(Statement of Recommended Practice), der regelt, wie Wohltätigkeitsorganisationen unter FRS 102
berichten, verlangt von Jahresberichten der Treuhänder, Leistungen gegen Ziele zu beschreiben, aber
die Managementabrechnungen der meisten kleineren Organisationen greifen weiterhin standardmäßig auf
reichweitenbasierte Stückkosten zurück, weil diese billig zu produzieren und prüfungsfreundlich
sind.

Die Gefahr besteht darin, Kosten pro Begünstigtem so zu behandeln, als beantworteten sie die Frage,
die sie nicht beantworten können: ob das Geld wirkte. Siehe [Kosten pro Ergebnis](../kosten-pro-ergebnis/)
für die Kennzahl, die das tatsächlich beantwortet, und [Ergebnisse vs. Leistungen](../ergebnisse-vs-leistungen/)
für die zugrunde liegende Unterscheidung. Kosten pro Begünstigtem ist eine legitime Triage- und
Reichweitenkennzahl — sie sagt einem Geldgeber, wie weit das Geld reicht —, aber niedrige Kosten pro
Begünstigtem können entweder echte Effizienz oder einen Dienst bedeuten, der so dünn ist, dass er
nichts verändert.

## Die Berechnung

```
Kosten pro Begünstigtem = Gesamtprogrammkosten / Anzahl eindeutig
                           bedienter Menschen

Im Kontrast:
Kosten pro Ergebnis      = Gesamtprogrammkosten / Anzahl der Menschen,
                           die das definierte Ergebnis erreichen

Kosten pro Begünstigtem sind immer ≤ Kosten pro Ergebnis, weil die
Ergebnispopulation eine (oft kleine) Teilmenge der Begünstigtenpopulation
ist.
```

## Beispielrechnung

**Tafel, dasselbe Jahr wie das Kosten-pro-Ergebnis-Beispiel**:

- Gesamtprogrammkosten: 450.000 £
- Eindeutig bediente Haushalte (drei oder mehr Pakete): 1.800

```
Kosten pro Begünstigtem = 450.000 £ / 1.800 = 250 £ pro bedientem
                           Haushalt
```

Vergleichen Sie beide Kennzahlen nebeneinander:

| Kennzahl | Nenner | Ergebnis |
|---|---|---|
| Kosten pro Begünstigtem | 1.800 bediente Haushalte | 250 £ |
| Kosten pro Ergebnis | 630 Haushalte mit Lebensmittelsicherheit | 714 £ |

Ein Geldgeber, der nur 250 £ sieht, könnte schließen, dies sei eine hocheffiziente Organisation. Ein
Geldgeber, der beide Zahlen sieht, kann die nützlichere Frage stellen: Ist die Lücke zwischen
Reichweite (1.800) und Ergebnis (630) eine Datenerhebungslücke, eine Designlücke, oder eine
ehrliche Widerspiegelung dessen, wie schwer Lebensmittelsicherheit allein mit Lebensmittelhilfe zu
erreichen ist?

**Berufsausbildungsorganisation, illustrativ**: Kosten pro Begünstigtem (eingeschrieben) = 2.000 £;
Kosten pro Ergebnis (dauerhafte Beschäftigung nach 6 Monaten) = 11.000 £, weil nur 18 % der
Eingeschriebenen das Programm abschließen und dauerhafte Arbeit finden. Dass die beiden Zahlen um
den Faktor fünf auseinanderklaffen, ist überall dort üblich, wo Abschluss- oder
Dauerhaftigkeitsraten niedrig sind — eine Ausbildungsorganisation und eine Tafel sind hier
strukturell identisch.

## Bezug zur Softwareentwicklung

Kosten pro Begünstigtem ist die Standardkennzahl in gemeinnütziger Software, weil sie die Kennzahl
ist, die ohne weitere Arbeit aus einem Begünstigtendatensatz herausfällt: einen Fall anlegen, einen
Dienst protokollieren, Zeilen zählen. Ein System zu bauen, das auch Kosten pro Ergebnis unterstützt,
bedeutet, bewusst eine zweite erstklassige Entität hinzuzufügen — ein Ergebnisereignis, datiert und
unabhängig von der Diensterbringung definiert — und der Versuchung zu widerstehen, "Fall
geschlossen" für "Ergebnis erreicht" stehen zu lassen. Bei der Konzeption einer
Zuschussverwaltungs- oder CRM-Plattform fragen Sie, welche der beiden Kennzahlen jedes Dashboard
tatsächlich zeigt, und kennzeichnen Sie es entsprechend; beides in einer einzigen
"Wirkungs"-Kachel zu vermischen, ist eine der häufigsten Software-Ursachen der unten genannten
Fallstricke. Siehe [Unit-Cost-Datenbanken](../unit-cost-datenbanken/) für das Benchmarking beider
Kennzahlen, sobald sie korrekt gekennzeichnet sind.

## Fallstricke

- **Kosten pro Begünstigtem als Wirkung darstellen.** Sie misst Reichweite, keine Veränderung.
  Kennzeichnen Sie Dashboards und Berichte als "Kosten pro bedienter Person", nicht "Kosten pro
  geholfener Person".
- **Doppelzählung über Programme hinweg.** Eine Person, die sowohl Lebensmittelpakete als auch
  Schuldnerberatung von derselben Organisation erhält, ist eine Begünstigte, nicht zwei, wenn der
  Nenner eindeutige Reichweite beschreiben soll; entscheiden und dokumentieren Sie, welche
  Konvention verwendet wird.
- **Eine niedrigere Zahl immer als besser behandeln.** Ein Suppenküchen-Treffpunkt wird bei Kosten
  pro Begünstigtem immer einen intensiven Fallmanagementdienst schlagen, weil es weniger kostet,
  jemanden leicht zu berühren. Das sagt nichts darüber aus, was pro Pfund dauerhaftere Veränderung
  erzeugt.
- **Nenner stillschweigend zwischen Berichten austauschen.** Eine in einem Jahresbericht gegen
  "eingeschrieben" und im nächsten gegen "abgeschlossen" zitierte Kosten-pro-Begünstigtem-Zahl ist
  jahresübergreifend nicht vergleichbar; geben Sie den Nenner jedes Mal an.

## Quellen

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
