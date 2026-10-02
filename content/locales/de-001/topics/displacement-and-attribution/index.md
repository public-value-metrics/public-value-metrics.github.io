# Verdrängung und Zurechnung

Verdrängung tritt auf, wenn der scheinbare Nutzen eines Programms dadurch erzielt wird, dass
Aktivität oder Nutzen von anderswo abgezogen wird, statt etwas Neues zu schaffen — Ihr Gewinn ist der
Verlust einer anderen Stelle. Zurechnung ist die verwandte Frage, wie viel eines beobachteten
Ergebnisses Ihre Intervention wirklich für sich beanspruchen kann, wenn auch andere Akteure und
Faktoren beigetragen haben. Beide sind Standardanpassungen in der britischen
Evaluationsleitlinie für den öffentlichen Sektor, neben Mitnahmeeffekt und Abfluss, und beide
werden bei Wirkungsbehauptungen, die weit stärker aussehen, als sie sind, routinemäßig
übersprungen.

## Warum das wichtig ist

Ein Unternehmensförderprogramm einer Kommunalverwaltung, das 50 Geschäften hilft, in eine
Sanierungszone umzuziehen, kann "50 geförderte Unternehmen, 200 geschaffene Stellen" berichten —
aber wenn diese Unternehmen einfach von einer benachbarten Einkaufsstraße umgezogen sind, statt zu
expandieren, wurden die Stellen verdrängt, nicht geschaffen, und der Nettoeffekt für den Bezirk (oder
die Region) könnte nahe null liegen. HM Treasurys Magenta Book und der langjährige Additionality
Guide behandeln Verdrängung als verpflichtenden Abzug, genau weil lokale Erfolgsgeschichten häufig
sind, selbst wenn sie keinen Nettonutzen auf nationaler oder regionaler Ebene erzeugen — der Wert hat
sich lediglich verlagert, oft zum Nachteil des Gebiets oder der Akteure, die ihn verloren haben.
Strukturfonds-Evaluationsleitlinien (verwendet für frühere Programme des EU-Regionalfonds und ihre
inländischen Nachfolger wie den UK Shared Prosperity Fund) formalisieren dies auf drei räumlichen
Ebenen: lokale Verdrängung (innerhalb einer Stadt), regionale Verdrängung (innerhalb einer Region)
und nationale Verdrängung (landesweit), weil eine Intervention auf einer Ebene additional sein kann,
während sie auf einer weiteren reine Verdrängung ist — ein Beschäftigungsprogramm, das Arbeitskräfte
aus einer Nachbarstadt anzieht, ist national neutral, auch wenn es lokal wie ein Erfolg aussieht.

Zurechnung ist das Schwesterproblem bei partnerschaftsintensiver Leistungserbringung, die inzwischen
im Sozialsektor und in behördenübergreifender öffentlicher Dienstleistung die Norm ist. Wenn drei
Organisationen gemeinsam einen Dienst zur Verhinderung von Obdachlosigkeit erbringen, kann der
Jahresbericht jeder Organisation unabhängig voneinander denselben Rückgang der Obdachlosigkeit auf
der Straße für sich beanspruchen — über die Berichte summiert, kann die behauptete Wirkung die
tatsächliche reale Veränderung übersteigen, manchmal um ein Mehrfaches. Die Leitlinie des Magenta
Book zur Beitragsanalyse existiert genau deshalb, weil eine randomisierte Zurechnung zu einem
einzelnen Akteur bei mehrbehördlicher Leistungserbringung oft unmöglich ist, und die ehrliche
Antwort lautet häufig "wir haben zu diesem Ergebnis beigetragen" statt "wir haben dieses Ergebnis
verursacht".

## Die Berechnung

Verdrängung als Teil der Standardsequenz der Nettowirkung (siehe
[Additionalität und Mitnahmeeffekte](../additionality-and-deadweight/) für die vollständige Kette):

```
Zusätzliche Nettowirkung = Bruttoergebnis − Mitnahmeeffekt − Verdrängung
                            − Abfluss, × Multiplikator

Verdrängungsrate = von anderswo abgezogener Nutzen/Aktivität
                    / gesamter beobachteter Bruttonutzen/-aktivität
```

Zurechnung, wenn mehrere Akteure zu einem Ergebnis beitragen, wird typischerweise als
Beitragsanteil statt als genauer Prozentsatz ausgedrückt, weil sie meist nicht mit derselben
Genauigkeit wie Verdrängung gemessen werden kann:

```
Zurechenbarer Anteil ≈ f(Stärke des kausalen Beitrags, Beiträge anderer
                          Akteure, externe/kontextuelle Faktoren)

Die behauptete Wirkung sollte niemals überschreiten:
  Σ (zurechenbarer Anteil jedes Partners) ≤ 100 % des gesamten beobachteten Ergebnisses
```

## Beispielrechnung

**Sanierungszuschuss**: Das Förderprogramm einer Kommune für eine Einkaufsstraße berichtet 200 neu
geschaffene Einzelhandelsstellen in der geförderten Zone. Eine Nacherhebung ergibt, dass 60 dieser
Stellen von Unternehmen stammen, die von einer benachbarten, nicht geförderten Einkaufsstraße
innerhalb desselben Bezirks umgezogen sind, und weitere 30 von nationalen Ketten, die Filialen
eröffneten, die ohnehin irgendwo in der Region eröffnet worden wären, unabhängig vom Zuschuss.

```
Behauptete Bruttostellen = 200
Lokale Verdrängung = 60 (innerhalb des Bezirks verlagert)
Regionale Verdrängung = 30 (wäre ohnehin regional eröffnet worden)

Zusätzliche Nettostellen (Bezirksebene) = 200 − 60 = 140
Zusätzliche Nettostellen (regionale Ebene) = 200 − 60 − 30 = 110
```

Die ehrliche Schlagzeile hängt von der geografischen Ebene ab, die den Geldgeber interessiert — ein
auf nationaler oder regionaler Ebene bewerteter Treasury-Business-Case sollte 110 verwenden, nicht
die Bezirksebene von 140, und schon gar nicht die rohe Zahl 200.

**Mehrbehördlicher Obdachlosigkeitsdienst**: Drei Partnerorganisationen (eine Kommune, eine
Wohnungshilfsorganisation und ein Gesundheitsträger) erbringen gemeinsam einen Dienst zur
Reduzierung von Obdachlosigkeit auf der Straße. Obdachlosigkeit auf der Straße ging im Gebiet im
Jahresverlauf um 30 Personen zurück. Jede Organisation behauptet in ihrem eigenen Jahresbericht "wir
haben Obdachlosigkeit auf der Straße um 30 reduziert" — summiert behaupten die drei Berichte, 90
Personen geholfen zu haben, das Dreifache des tatsächlichen Rückgangs. Eine Beitragsanalyse, die
jedem Partner einen Anteil zuweist (etwa 40 % Kommune, 35 % Wohnungshilfsorganisation, 25 %
Gesundheitsträger, basierend auf dokumentierter Rolle und unabhängiger Bewertung), würde jeweils 12,
10,5 und 7,5 ausweisen, was sich korrekt zu den beobachteten 30 summiert.

## Bezug zur Softwareentwicklung

Verdrängung und Zurechnung prägen, wie Systeme zur Wirkungsverfolgung und
Ergebnisberichterstattung für standort- oder partnerübergreifende Leistungserbringung gestaltet
sein sollten:

- Geografischer und organisatorischer Geltungsbereich sollten explizite, erstklassige Felder in
  jedem Wirkungsdashboard sein — eine Zahl, die "für den Bezirk" berichtet wird, und dieselbe Zahl,
  die "für die Region" berichtet wird, sind unterschiedliche Werte, und ein System, das beides
  vermischt, erzeugt Zahlen, die auf Portfolioebene nicht abgeglichen werden können.
- Wo mehrere Partner gemeinsam liefern, sollte ein Ergebnissystem Beitragsanteile erfassen (oder
  zumindest gemeinsame Zurechnung kennzeichnen), statt jedem Berichtsmodul eines Partners zu
  erlauben, unabhängig 100 % eines gemeinsamen Ergebnisses zu beanspruchen — sonst überzeichnen
  Zusammenfassungen auf Portfolioebene die Gesamtwirkung, manchmal erheblich.
- Dies verknüpft sich mit [sozialer Kapitalrendite](../social-return-on-investment/) und
  [Berichterstattung über Zuschussergebnisse](../grant-outcomes-reporting/): Eine SROI- oder
  IRIS+-Berechnung, die Verdrängung ignoriert oder gemeinsame Ergebnisse überzurechnet, erzeugt ein
  aufgeblähtes Verhältnis, das einer Prüfung oder Replikation nicht standhält.

## Fallstricke

- **Lokalen Erfolg berichten, ohne weiter reichende Verdrängung zu prüfen.** Ein Programm kann auf
  der kleinsten Berichtsebene hocherfolgreich aussehen, während es auf einer weiteren Ebene neutral
  oder sogar negativ ist; geben Sie stets die geografische Ebene an, für die die Nettozahl gilt.
- **Jedem Partner bei gemeinsamer Leistungserbringung volle Anrechnung zugestehen.** Sofern
  Beitragsanteile nicht vereinbart und dokumentiert sind, überzeichnet die
  Zusammenfassung über Partner hinweg die Gesamtwirkung — prüfen Sie, dass sich die Behauptungen
  auf Partnerebene zu nicht mehr als der beobachteten Gesamtsumme addieren.
- **Zurechnung als genauen Prozentsatz behandeln, obwohl sie eigentlich ein Urteil ist.**
  Beitragsanalyse liefert, anders als ein randomisiertes Kontrafaktum, eine vertretbare Schätzung,
  keine gemessene Tatsache; stellen Sie sie mit angemessener Unsicherheit dar, nicht mit
  falscher Präzision.
- **Verdrängung bei marktnahen Interventionen ignorieren.** Unternehmensförderung,
  Beschäftigungsprogramme und ortsbezogene Sanierung sind die klassischen Kategorien mit hoher
  Verdrängung; behandeln Sie Verdrängungsprüfungen hier als verpflichtend, nicht als optional.

## Quellen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
