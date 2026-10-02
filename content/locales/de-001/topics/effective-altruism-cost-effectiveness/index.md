# Kosten-Wirksamkeit im Effektiven Altruismus

Das Kosten-Wirksamkeits-Denken des Effektiven Altruismus (EA) ordnet wohltätige Interventionen nach
der Menge an Gutem — meist ausgedrückt als gerettete Leben oder gewonnene Gesundheit pro
ausgegebenem Dollar — und lenkt Geld zu der Intervention, die am Rand das meiste Gute erkauft.
GiveWell ist die einflussreichste Praktikerorganisation des Feldes: Sie veröffentlicht ausdrückliche,
aktualisierte Schätzungen der Kosten pro gerettetem Leben und Kosten pro Ergebnis für eine kleine
Liste von "Top-Organisationen" und empfiehlt Spendenden, dorthin zu geben, wo derzeit zum besten
Satz noch Raum für weitere Finanzierung besteht.

## Warum das wichtig ist

GiveWell benennt Kosten-Wirksamkeit als führendes Kriterium in seiner veröffentlichten Methodik: Es
sucht nach evidenzgestützten Interventionen, schätzt deren Kosten-Wirksamkeit in einer gemeinsamen
Einheit und ordnet über völlig unverwandte Ursachen hinweg — Moskitonetze gegen Malaria,
Vitamin-A-Supplementierung, Bargeldtransfers, Impfanreizzahlungen — auf dieser einen Achse. Dies ist
eine direkte Übernahme des QALY/DALY-artigen Denkens der Gesundheitsökonomie in die Philanthropie:
Genau wie ein Gesundheitssystem fragt "wie viele QALYs pro Pfund am Rand", fragt GiveWell "wie viele
Leben oder Lebensjahre pro Dollar am Rand", und behandelt Ursachen als substituierbar, sobald sie in
diese gemeinsame Einheit umgerechnet sind. Siehe [Kosten-Wirksamkeits-Analyse im öffentlichen Sektor](../cost-effectiveness-analysis-in-government/)
für das Gegenstück dieses Denkrahmens im öffentlichen Sektor.

Die am häufigsten zitierte GiveWell-Zahl betrifft die Against Malaria Foundation (AMF), die
insektizidbehandelte Moskitonetze verteilt. In GiveWells veröffentlichtem Rechenbeispiel
(abgeleitet aus Finanzierungsdaten von 2020) finanzierten etwa 4.500 US-Dollar genug Netze, um einen
Tod abzuwenden, nach Berücksichtigung unvollkommener Netznutzung, Basis-Sterblichkeit ohne Netze
und einer Anpassung für "Funging" — die Möglichkeit, dass AMF einen Teil dieser Finanzierung ohnehin
von anderen Spendenden erhalten hätte. GiveWell stellt ausdrücklich klar, dass sich diese Zahl im
Zeitverlauf und über Regionen hinweg verändert, wenn sich Malaria-Prävalenz, Netzkosten und
Finanzierungslücken verändern, und dass die Kosten, ein Leben zu retten, im Allgemeinen im
Zeitverlauf steigen dürften, da die günstigsten Gelegenheiten zuerst genutzt werden; es ist eine
Rechenillustration der Methode, kein fester Preis.

## Die Berechnung

```
Kosten-Wirksamkeit = Kosten der Intervention / erzeugte Einheiten
                      Gutes (z. B. $ pro gerettetem Leben, $ pro
                      abgewendetem DALY, $ pro QALY)

GiveWells Kette für ein Moskitonetz-Programm, illustrativ:
  $ pro gekauftem und geliefertem Netz
    ÷ Anteil tatsächlich genutzter Netze
    ÷ pro Netz geschützte Personen
    × Basis-Jahressterblichkeit ohne Netze
    × Sterblichkeitsreduktion durch Netznutzung (aus RCT-Evidenz)
    × Schutzjahre pro Netz
    ÷ Anpassung für Funging (Geld, das die Finanzierung anderer
      Spendender verdrängt)
  = $ pro gerettetem Leben (nach Abzug kontrafaktischer
    Finanzierungseffekte)
```

Diese Kette ist wichtig, weil jeder Schritt eine Stelle ist, an der Kosten-Wirksamkeitsschätzungen
üblicherweise fehlgehen — siehe die Fallstricke unten — und weil sie ausdrücklich macht, dass
"Kosten pro gerettetem Leben" nie ein roher beobachteter Preis ist; es ist eine modellierte
Schätzung, aufgebaut aus mehreren separat unsicheren Eingabewerten.

## Beispielrechnung

Zwei hypothetische Interventionen, beide evidenzgestützt, konkurrieren um dieselben marginalen
100.000 £:

- **Moskitonetze (im AMF-Stil)**: etwa 4.500 US-Dollar pro gerettetem Leben nach GiveWells
  veröffentlichtem Rechenbeispiel aus Daten von 2020, d. h. sehr grob 20 gerettete Leben pro
  100.000 £, abhängig von Wechselkurs und verwendetem Jahr.
- **Entwurmungsprogramm**: überhaupt kein plausibler Sterblichkeitsnutzen, aber starke Evidenz für
  langfristige Einkommensgewinne durch Entwurmung im Kindesalter; GiveWell bewertet es in
  Einkommensgewinn-Begriffen, nicht in geretteten Leben, was den direkten Vergleich mit
  Moskitonetzen ohne gemeinsame Einheit erschwert. GiveWell nutzt ein ausdrückliches
  "moralische Gewichte"-Rahmenwerk, um beides in eine interne Einheit für die Rangfolge
  umzurechnen.

Die Disziplin der EA-Methode besteht darin, diesen Vergleich offenzulegen, statt beides zu
finanzieren, weil beides "gut klingt". Siehe [soziale Kapitalrendite](../social-return-on-investment/)
für die entsprechende erzwingende Funktion, die britische Sozialunternehmen und lokale Auftraggeber
verwenden, die dieselbe Frage — was ist die beste Rendite pro Pfund — in einer monetarisierten
Sprache statt einer Leben/DALYs-Sprache stellt.

## Bezug zur Softwareentwicklung

Ingenieurinnen und Ingenieure, die Spenderplattformen, Zuschuss-Matching-Werkzeuge oder
Wirkungsdashboards für EA-ausgerichtete Geldgeber (Open Philanthropy, GiveWell selbst, Plattformen
für effektives Spenden wie Giving What We Can) bauen, müssen Kosten-Wirksamkeitsschätzungen als
Spannen mit angegebenen Annahmen darstellen, nicht als einzelne Zahlen — das zugrunde liegende
Modell hat mehrere multiplikative unsichere Eingabewerte, und dies auf eine Zahl in einem Dashboard
zu verdichten, stellt die von GiveWell selbst angegebene Sicherheit falsch dar. Versionieren Sie
jede Schätzung nach Veröffentlichungsdatum; GiveWell überarbeitet seine Zahlen, manchmal erheblich,
sobald neue RCT-Evidenz oder Finanzierungslückendaten eintreffen, und eine Plattform, die eine alte
Zahl zwischenspeichert, wird stillschweigend falsch.

## Fallstricke

- **Eine Kosten-Wirksamkeitsschätzung als festen Preis behandeln.** Sie ist ein Modellergebnis mit
  mehreren unsicheren multiplikativen Eingabewerten (Nutzungsraten, Basis-Sterblichkeit,
  Funging-Anpassung); geben Sie Datum und Version an.
- **Funging/Verdrängung ignorieren.** Eine Organisation zu finanzieren, die das Geld ohnehin von
  einer anderen Spenderin oder einem anderen Spender erhalten hätte, erkauft weniger kontrafaktisches
  Gutes, als die Schlagzeile suggeriert — siehe [Additionalität und Mitnahmeeffekte](../additionality-and-deadweight/)
  und [Verdrängung und Zurechnung](../displacement-and-attribution/).
- **Über inkompatible Einheiten hinweg ohne Umrechnung vergleichen.** "Gerettete Leben" und
  "gewonnenes Einkommen" sind ohne ausdrückliches Rahmenwerk moralischer Gewichte nicht direkt
  vergleichbar; beides nebeneinander zu präsentieren, als wären sie es, ist ein Kategorienfehler.
- **Tunnelblick auf einen Ursachenbereich.** Nur innerhalb eines Ursachenbereichs zu ordnen (z. B.
  nur globale Gesundheitsorganisationen) und den Sieger "die kosten-wirksamste
  Wohltätigkeitsorganisation" zu nennen, überzeichnet die Behauptung; GiveWells ursachenübergreifende
  Rangfolge ist absichtlich eng gefasst (globale Gesundheit und Wohlergehen), nicht universell.

## Quellen

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
