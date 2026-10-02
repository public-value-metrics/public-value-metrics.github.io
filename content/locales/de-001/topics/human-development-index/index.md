# Index der menschlichen Entwicklung (Human Development Index, HDI)

Der HDI ist die Schlagzeilen-Alternative der UN dazu, Länder allein nach Einkommen zu ranken: Er
kombiniert Lebenserwartung, Bildung und Einkommen zu einer einzigen Zahl zwischen 0 und 1, auf der
Prämisse — vorgebracht vom Ökonomen Amartya Sen und für die UN von Mahbub ul Haq entwickelt —, dass
Entwicklung darin besteht, zu erweitern, was Menschen tun und sein können, nicht nur, was sie
verdienen. Er wird seit 1990 jährlich im Human Development Report des Entwicklungsprogramms der
Vereinten Nationen (UNDP) veröffentlicht.

## Warum das wichtig ist

Vor dem HDI wurde "Entwicklung" fast ausschließlich am BSP pro Kopf gemessen, das nichts darüber
aussagt, ob Wachstum die Gesundheit oder Bildung gewöhnlicher Menschen erreicht. Sens
Fähigkeitsansatz rahmte Entwicklung als Erweiterung echter Freiheiten um, und ul Haq verwandelte
das in einen veröffentlichbaren Index, mit dem das UNDP jedes Land ranken konnte, was Regierungen,
die allein durch Einkommen reich wurden, aber Gesundheit oder Bildung vernachlässigten, dazu zwang,
sich einem schlechteren Rang zu stellen, als ihr BIP nahelegte (die Golf-Ölstaaten und manche
Rohstoffwirtschaften sind die Standardbeispiele). Die dreiteilige Struktur des HDI ist auch der
direkte methodische Vorfahre des [Multidimensionalen Armutsindex](../multidimensional-poverty-index/):
Beide lassen nicht zu, dass eine Dimension ein Defizit in einer anderen zurückkauft, indem sie ein
geometrisches statt arithmetisches Mittel verwenden. Das UNDP veröffentlicht vollständige
technische Hinweise und die zugrunde liegenden Daten für jede Ausgabe
(<https://hdr.undp.org/data-center/human-development-index>), die kanonische Quelle für alle, die
auf dem Index aufbauen, statt ihn neu abzuleiten.

## Die Berechnung

```
Lebenserwartungsindex (LEI)     = (LE − 20) / (85 − 20)

Index der durchschnittlichen Schuljahre  = durchschnittliche
                                             Schuljahre / 15
Index der erwarteten Schuljahre          = erwartete Schuljahre / 18
Bildungsindex (EI)                        = (Index durchschnittliche
                                             Schuljahre + Index
                                             erwartete Schuljahre) / 2

Einkommensindex (II)             = (ln(BNE pro Kopf) − ln(100)) /
                                    (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrisches Mittel der drei
                                    Teilindizes]
```

Das geometrische Mittel ist beabsichtigt: Weil es multipliziert statt mittelt, kann ein sehr hoher
Wert in einer Dimension einen sehr niedrigen Wert in einer anderen nicht vollständig ausgleichen —
ein Design, das das UNDP 2010 gezielt übernahm, um Ungleichgewicht zu bestrafen, als Ersatz für die
vorherige Formel mit arithmetischem Mittel.

## Beispielrechnung

**Land mit mittlerem Einkommen**: Lebenserwartung 72 Jahre, durchschnittliche Schuljahre 8,
erwartete Schuljahre 13, BNE pro Kopf 12.000 $.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
Index durchschn. Schuljahre = 8 / 15                 = 0,533
Index erwartete Schuljahre = 13 / 18                 = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Ein HDI von 0,713 fällt in das Band "hohe menschliche Entwicklung" des UNDP (0,700–0,799); "sehr
hoch" beginnt bei 0,800. Beachten Sie, wie empfindlich das Ergebnis auf den schwächsten Teilindex
reagiert: Wären die durchschnittlichen Schuljahre 4 statt 8 (Index = 0,267, EI = 0,494), fiele der
HDI auf (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — ein ganzes Band tiefer —, obwohl sich sonst nichts
änderte.

## Bezug zur Softwareentwicklung

- Das Muster des geometrischen Mittels ist direkt für jeden zusammengesetzten Dienst- oder
  Produktwert wiederverwendbar, bei dem Sie nicht wollen, dass eine starke Dimension eine kritisch
  schwache übertüncht — z. B. Barrierefreiheits-, Leistungs- und Zuverlässigkeitswerte für einen
  öffentlichen digitalen Dienst multiplikativ statt gewichtet-durchschnittlich zu kombinieren,
  sodass ein Dienst, der schnell, aber unzugänglich ist, nicht als "gut" bewertet werden kann.
- Die Log-Transformation des Einkommens im HDI (abnehmender Grenznutzen eines zusätzlichen Pfunds)
  ist dieselbe Logik hinter [Verteilungsgewichtung](../distributional-weighting/) in der Bewertung:
  1.000 $ zusätzlich bedeuten für einen armen Haushalt weit mehr als für einen reichen, und beide
  linear zu behandeln, bepreist die Wirkung falsch.
- Jedes Dashboard, das einen einzelnen vermischten "digitale Inklusion"- oder
  "Bürgerergebnis"-Wert berichtet, sollte seine Aggregationsformel so ausdrücklich dokumentieren
  wie die technischen Hinweise des UNDP — siehe [KPIs im öffentlichen Sektor](../public-sector-kpis/)
  und [Scorecard für öffentlichen Wert](../public-value-scorecard/).

## Fallstricke

- **Mitteln statt das geometrische Mittel verwenden** — ein arithmetisches Mittel lässt hohes
  Einkommen schlechte Gesundheit oder Bildung vollständig verdecken; der ganze Sinn der
  Methodikänderung von 2010 war, diese Substitution zu stoppen.
- **HDI jahresübergreifend vergleichen, als wäre es inflationsbereinigtes BIP** — das UNDP passt
  periodisch die Basis des Index an (neue Minimum-/Maximum-Grenzen, überarbeitete
  Schulbildungsobergrenzen), sodass eine Rangänderung eine Methodikaktualisierung widerspiegeln
  kann, keine echte Verschiebung; prüfen Sie stets, aus welcher HDR-Ausgabe eine Zahl stammt.
- **HDI als Armutsmaß behandeln** — es ist ein nationaler Durchschnitt und sagt nichts über die
  Verteilung innerhalb eines Landes aus; verwenden Sie dafür den [Multidimensionalen Armutsindex](../multidimensional-poverty-index/)
  oder den separaten ungleichheitsbereinigten HDI des UNDP.

## Quellen

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
