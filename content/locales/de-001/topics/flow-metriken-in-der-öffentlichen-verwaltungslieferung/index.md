# Flow-Metriken in der öffentlichen Verwaltungslieferung

Flow-Metriken — Littles Gesetz, Grenzen für Arbeit in Bearbeitung (WIP) und Flow-Effizienz —
beschreiben, wie schnell sich Arbeit durch ein System mit begrenzter Kapazität bewegt. Ein
Sprint-Board ist ein solches System; eine Leistungsantragswarteschlange, ein
Bauantragsregister oder ein Visa-Fallbearbeitungsrückstand ist genau dieselbe Mathematik in
anderer Uniform.

## Warum das wichtig ist

Staatliche Fallzahlen sind Warteschlangensysteme, und Warteschlangensysteme gehorchen
Warteschlangengesetzen, ob sie nun jemand misst oder nicht. Gesetzliche Bearbeitungsfristen machen
dies ausdrücklich: Unter dem Town-and-Country-Planning-Regime tragen die meisten kleineren
Bauanträge ein gesetzliches Bearbeitungsziel von 8 Wochen und größere Anträge von 13 Wochen — eine
Durchlaufzeit-Verpflichtung, direkt ins Gesetz gebacken. Der Rückstand bei der
Asylfallbearbeitung des Home Office, wiederholt vom National Audit Office und dem Home Affairs
Select Committee geprüft, ist ein gut dokumentierter Fall eines öffentlichen Systems, in dem
Arbeit in Bearbeitung über einen anhaltenden Zeitraum schneller wuchs als der Durchsatz, was
Durchlaufzeiten weit über jede gesetzliche oder Dienst-Erwartung hinaus trieb. Flow-Metriken geben
Ingenieurinnen und Ingenieuren wie Fallmanagement-Führungskräften gleichermaßen ein gemeinsames,
quantitatives Vokabular für genau dieses Fehlermuster, statt es als qualitatives
"Rückstandsproblem" zu belassen.

## Die Berechnung

```
Littles Gesetz:  WIP = Durchsatz × Durchlaufzeit
             →   Durchlaufzeit = WIP / Durchsatz

Flow-Effizienz = aktive (Bearbeitungs-)Zeit / gesamte Durchlaufzeit
                 (Vacanti)

WIP-Grenzeffekt: bei festem Durchsatz halbiert eine Halbierung der
WIP ungefähr die durchschnittliche Durchlaufzeit (Littles Gesetz
umgestellt) — der Hebel, der ohne zusätzliches Personal verfügbar
ist.
```

Siehe [DORA-Metriken für öffentlichen Wert](../dora-metriken-für-öffentlichen-wert/) für die äquivalente
Mathematik, angewandt auf Software-Bereitstellungs-Pipelines statt Fallbearbeitung.

## Beispielrechnung

**Bauamt einer Kommunalverwaltung**: 400 Anträge zu jedem Zeitpunkt offen (WIP), das Team löst
50 Anträge/Woche (Durchsatz).

```
Durchlaufzeit = WIP / Durchsatz = 400 / 50 = 8 Wochen
```

Das landet exakt beim gesetzlichen 8-Wochen-Ziel für kleinere Anträge — ohne jeden Puffer, was
bedeutet, dass jede Schwankung in der eingehenden Nachfrage oder der Antwortzeit von zu
konsultierenden Stellen Entscheidungen über die gesetzliche Frist hinaus drückt.

**Flow-Effizienz**: Von diesen 8 Wochen (56 Kalendertagen) hat ein Antrag typischerweise etwa 6
Stunden tatsächliche Sachbearbeitungszeit.

```
Flow-Effizienz = 6 Stunden / (56 Tage × 8 Arbeitsstunden/Tag)
                = 6 / 448 ≈ 1,3 %
```

Vacantis Benchmark für Software-Teams setzt typische Flow-Effizienz bei 15–20 %; staatliche
Fallbearbeitung, mit mehreren gesetzlichen Konsultationsübergaben und öffentlichen
Konsultationsfenstern, läuft oft eine Größenordnung niedriger. Die 98,7 % "Wartezeit" sind, wohin
die acht Wochen tatsächlich gehen — nicht in Sachbearbeitungskapazität.

**WIP-Grenz-Intervention**: Offene Anträge pro Sachbearbeitendem auf 15 statt unbegrenzt 25 zu
deckeln (bei konstantem Durchsatz) verschiebt WIP von 400 auf etwa 240 über ein 16-köpfiges Team:

```
Neue Durchlaufzeit = 240 / 50 = 4,8 Wochen
```

Eine nahezu Halbierung der Durchlaufzeit durch eine Politikänderung, nicht eine
Personalaufstockung — derselbe Hebel, den DORA-artige Lieferteams ziehen, wenn sie Sprint-WIP
deckeln.

## Bezug zur Softwareentwicklung

Flow-Metriken sind die gemeinsame Sprache zwischen dem Kanban-Board eines Lieferteams und dem
Fallbearbeitungsboden, für den es Software baut: Die Warteschlange eines Sachbearbeitenden und eine
Pull-Request-Warteschlange werden beide von Littles Gesetz regiert, und beide sprengen ihre
Durchlaufzeitziele auf dieselbe Weise — zu viel WIP relativ zum Durchsatz. Dies ist direkt relevant
für [Verzögerungskosten bei öffentlichen Programmen](../verzögerungskosten-bei-öffentlichen-programmen/):
Durchlaufzeit × CoD sind die Pfund, die zu jedem Zeitpunkt in der Warteschlange sitzen, und es ist
relevant für [Servicestandards und Transaktionskennzahlen](../servicestandards-und-transaktionskennzahlen/),
wo ein veröffentlichtes Bearbeitungsziel eine Durchlaufzeit-Verpflichtung ist, die nur
Flow-Metriken diagnostizieren können, wenn sie verfehlt wird. Die Software eines
Fallbearbeitungssystems sollte WIP und Durchlaufzeit als erstklassige Betriebskennzahlen
offenlegen, nicht in einem Fallmanagementsystem vergraben, das niemand abfragt.

## Fallstricke

- **WIP-Grenzen hinzufügen, ohne den echten Engpass zu beheben**: Wenn die Beschränkung die
  Antwortzeit einer externen gesetzlich zu konsultierenden Stelle ist, verschiebt das Deckeln der
  Sachbearbeitungs-WIP die Warteschlange nur vorgelagert, statt sie zu verkürzen.
- **Flow-Effizienz als manipulierbares Ziel behandeln**: Die 1,3 % aktive Zeit zu beschleunigen,
  bewegt die Durchlaufzeit kaum; der Hebel liegt fast immer in den Wartezuständen, was meist
  Prozessneugestaltung bedeutet, nicht Sachbearbeitungsgeschwindigkeit.
- **Variabilität ignorieren**: Littles Gesetz beschreibt Durchschnitte; eine Fallzahl mit hoher
  Nachfragevarianz braucht Pufferkapazität, nicht nur eine engere WIP-Grenze, sonst werden
  gesetzliche Fristen im volatilen Randbereich weiterhin verfehlt, selbst wenn sich der
  Durchschnitt verbessert.
- **WIP inkonsistent messen**: Ein im Aktenregister "offener" Fall, der tatsächlich auf einen
  Dritten wartend feststeckt, ist immer noch WIP; ihn auszuschließen, schönt die Zahlen, ohne die
  bürgerorientierte Realität zu ändern.

## Quellen

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
