# DORA-Metriken für öffentlichen Wert

Die DORA-Metriken (DevOps Research and Assessment) — Bereitstellungshäufigkeit, Durchlaufzeit für
Änderungen, Änderungsfehlerrate und Zeit bis zur Wiederherstellung des Dienstes, plus
Zuverlässigkeit als fünfte — sind die am besten validierten Lieferleistungs-Benchmarks der
Softwarebranche. In die Rechenschaftssprache des öffentlichen Sektors übersetzt, ist jede ein
direkter Stellvertreter dafür, wie schnell und wie sicher öffentlicher Wert eine Bürgerin oder einen
Bürger erreicht.

## Warum das wichtig ist

Ein Jahrzehnt DORA-Forschung, jährlich veröffentlicht als *Accelerate State of DevOps Report*
(Methodik von Forsgren, Humble und Kim, inzwischen von Google Cloud betrieben), clustert Teams in
Elite-, hohe, mittlere und niedrige Performer. Elite-Teams stellen bei Bedarf bereit, brauchen
unter einem Tag vom Commit bis zur Produktion, lassen etwa 5 % der Änderungen fehlschlagen und
erholen sich in unter einer Stunde; Niedrig-Performer stellen monatlich oder seltener bereit,
brauchen Monate, lassen etwa 40 % der Änderungen fehlschlagen und erholen sich in Wochen. In der
Regierung sind dies keine technischen Eitelkeitskennzahlen: Der Service Standard des Government
Digital Service verlangt von Teams, "häufig zu iterieren und zu verbessern" und schnell auf
Nutzerbedürfnisse reagieren zu können, und Ministerien, die nicht sicher und häufig bereitstellen
können, sind strukturell unfähig, diesen Standard zu erfüllen, egal was ihre Nutzerforschung sagt.
Die eigene Arbeit des Cabinet Office zur digitalen Effizienz fand, dass es teuer ist, eine Bürgerin
oder einen Bürger von einer gescheiterten oder langsamen digitalen Transaktion in einen Telefon-
oder Papierkanal zu drängen — der Digital Efficiency Report von GDS aus dem Jahr 2012 schätzte,
dass manche digitalen Transaktionen nur 20 Pence kosten, gegenüber Telefon- oder persönlichen
Kontakten, die bis zu 8,62 £ kosten —, sodass ein Änderungsfehlschlag in einem bürgerorientierten
Dienst nicht nur Ingenieurzeit kostet, sondern echte Pfund in das Kontaktzentrumsbudget drückt
(siehe [Kanalverlagerungs-Einsparungen](../channel-shift-savings/)).

## Die Berechnung

```
Bereitstellungshäufigkeit  = Produktionsbereitstellungen / Zeit
Durchlaufzeit für Änderungen = t(Bereitstellung) − t(Commit), Median
Änderungsfehlerrate         = fehlgeschlagene Änderungen / Gesamtänderungen
                               × 100
Wiederherstellungszeit (MTTR) = t(wiederhergestellt) − t(Ausfall), Median
Zuverlässigkeit               = SLO-Erreichung (Verfügbarkeit, Latenz,
                               Korrektheit)
```

Übersetzungen in öffentlichen Wert:

```
Durchlaufzeit    → Wochen in der Pipeline × CoD, siehe
                    cost-of-delay-in-public-programmes
Fehlerrate       → bürgerorientierte Vorfallrate: CFR × Kosten pro
                    umgeleitetem Kontaktzentrumsanruf (oder pro
                    fehlgeschlagener gesetzlicher Transaktion)
Wiederherstellungszeit → Dienstausfallschaden: MTTR × (blockierte
                    Anträge/Anwendungen pro Stunde) × nachgelagerte
                    Kosten oder Wohlfahrtsverlust pro Einheit
Zuverlässigkeit  → Nutzenabschlag: ein Dienst mit 99 % Verfügbarkeit
                    liefert ≈ 0,99 seines modellierten Nutzens — das
                    Lieferungs-Gegenstück zu Nutzungs- oder
                    Compliance-Fehlbeträgen
```

## Beispielrechnung

Das Team des Leistungsantragsportals einer Kommunalverwaltung, vor und nach einer Investition in
Liefertechnik:

```
                    Vorher      Nachher
Bereitstellungen    monatlich   wöchentlich
Durchlaufzeit       8 Wochen    5 Tage
CFR                 30 %        10 %
MTTR                3 Tage      4 Stunden
```

Das Team liefert etwa 25 Verbesserungen/Jahr, durchschnittlicher Wert 8.000 £/Woche
([Verzögerungskosten](../cost-of-delay-in-public-programmes/)). Die Durchlaufzeit um etwa 7,3 Wochen
zu senken, zieht den Nutzenstrom jeder Verbesserung vor: 25 × 7,3 × 8.000 ≈ **1.460.000 £/Jahr** an
früher geliefertem Wert. Zur Fehlerrate: 25 × (0,30 − 0,10) = 5 weniger fehlgeschlagene
Änderungen/Jahr; jede fehlgeschlagene Änderung an einem öffentlichen Portal leitet typischerweise
geschätzte 2.000 Bürgerinnen und Bürger zum Telefonkanal um, zu 8,62 £ gegenüber 20 Pence, eine
Nettokosten von etwa 8,42 £ × 2.000 ≈ 16.840 £ pro Vorfall, sodass die Vermeidung von 5 Vorfällen
≈ **84.200 £/Jahr** einspart. Die Investition in Liefertechnik wird in derselben Währung bewertet
wie jeder andere Fall öffentlichen Werts.

## Beispielrechnung, Fortsetzung: Zuverlässigkeit

Wenn das Portal mit 97 % Verfügbarkeit statt einem Ziel von 99,5 % läuft, und jeder Prozentpunkt
Ausfallzeit als 2 % durch Abbruch verlorener Anträge modelliert wird, liefert der Dienst etwa 0,975
seines modellierten Jahresnutzens von 2 Mio. £ — ein Nutzenabschlag von 50.000 £/Jahr, den ein
reines Verfügbarkeits-Dashboard nie zutage fördert.

## Bezug zur Softwareentwicklung

DORA-Metriken sind die operativen Kennzahlen eines öffentlichen Dienstes im anderen Gewand:
Durchlaufzeit bildet auf [Servicestandards und Transaktionskennzahlen](../service-standards-and-transaction-metrics/)
ab; Änderungsfehlerrate bildet auf Nacharbeits- und Beschwerderaten ab; MTTR bildet darauf ab, wie
lange ein gesetzlicher Dienst für Antragstellende nicht verfügbar ist. Verbesserungstechniken
übertragen sich in beide Richtungen, weil beides Warteschlangensysteme unter
Rechenschaftsbeschränkungen sind — siehe [Flow-Metriken in der öffentlichen Verwaltungslieferung](../flow-metrics-in-government-delivery/)
für die zugrunde liegende Warteschlangenmathematik. Beachten Sie auch den DORA-Befund von 2025,
dass KI-Übernahme mit höherem Durchsatz, aber *schlechterer* Stabilität korreliert — eine
Intervention mit sowohl Wirksamkeit als auch Nebenwirkungen, genau die Nettonutzen-Analyse, die das
Thema [KI-Produktivität](../ai-productivity-in-the-public-sector/) dieses Kapitels durcharbeitet.

## Fallstricke

- **Kennzahlen-Manipulation**: Bereitstellungszahlen mit No-op-Releases aufblähen, oder Hotfixes
  aus der Änderungsfehlerzahl ausschließen. Definieren Sie Ereignisse so präzise, wie ein
  gesetzlicher Servicestandard eine "erfolgreiche Transaktion" definiert.
- **Ministeriumsübergreifende Ranglisten**: DORA-Cluster vergleichen Lieferpraktiken, nicht Dienste
  mit unterschiedlichen Risikoprofilen; ein als "hoch" bewertetes Steuerzahlungssystem mag angesichts
  von Absicherungsanforderungen die richtige Haltung sein, wo "Elite" leichtsinnig wäre.
- **Eine einzelne Kennzahl allein optimieren**: Geschwindigkeit ohne Änderungsfehlerrate ist der
  klassische Durchsatz-Instabilität-Kompromiss — berichten Sie alle vier gemeinsam, nicht als
  einen einzelnen Wert.

## Quellen

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
