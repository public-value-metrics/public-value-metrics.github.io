# Regierung als Plattform (Government as a Platform, GaaP)

Government as a Platform ist die Strategie, gemeinsam genutzte, wiederverwendbare Komponenten — einen
Benachrichtigungsdienst, einen Zahlungsdienst, einen Identitätsdienst — einmal, zentral zu bauen,
sodass Hunderte einzelner Regierungsdienste sie nutzen, statt jeder Dienst seine eigenen baut. Sie
rahmt öffentliche digitale Infrastruktur als Plattformökonomie-Problem um: Der Wert liegt nicht in
einer einzelnen Integration, sondern darin, dass sich die Grenzkosten des *nächsten* Teams, das sie
übernimmt, null annähern.

## Warum das wichtig ist

GDS legte die Strategie 2015 in seiner Veröffentlichung "Government as a Platform" formal dar und
argumentierte, dass die Regierung dieselben Fähigkeiten — Zahlungsannahme, Nutzerbenachrichtigung,
Identitätsprüfung, Adressabfrage — Dienst für Dienst getrennt gebaut hatte, jeder mit eigener
Beschaffung, Sicherheitsbewertung und laufender Supportlast. Die Alternative waren wenige gemeinsame
Plattformen, einmal auf hohem Standard gebaut und überall wiederverwendet: GOV.UK Notify zum
Versenden von E-Mails, SMS und Briefen, GOV.UK Pay zur Annahme von Online-Zahlungen und GOV.UK One
Login (Nachfolger des früheren Identitätsprogramms GOV.UK Verify) zur Identitätsprüfung. Der Umfang,
den diese Plattformen erreicht haben, ist der klarste Beleg dafür, dass die Strategie funktionierte:
GOV.UK Pay hat über 10 Milliarden £ an Transaktionen über etwa 1.800 einzelne Dienste hinweg
verarbeitet — und während es etwa vier Jahre brauchte, die ersten 1 Milliarde £ zu verarbeiten,
verarbeitet es diesen Betrag inzwischen in etwa fünf Monaten —, während GOV.UK Notify mehr als
9 Milliarden Nachrichten im Auftrag von über 1.500 Regierungsorganisationen versendet hat. Jeder
dieser übernehmenden Dienste vermied es, ein eigenes Zahlungsgateway oder eine eigene
Nachrichten-Pipeline zu bauen, abzusichern und zu warten.

## Die Berechnung

```
Baukosten pro Dienst (ohne Plattform) = N Dienste × Kosten, ein
  Zahlungs-/Benachrichtigungs-/Identitätssystem zu bauen,
  sicherheitszubewerten und zu betreiben

Plattformkosten = feste Plattform-Baukosten + Grenzkosten pro
  übernehmendem Dienst (Integration, Konfiguration, laufender
  Support durch das Plattformteam)

Wiederverwendung erreicht den Break-even, sobald:
  Plattform-Baukosten < N × (Baukosten pro Dienst − Grenzkosten der
  Integration)

Bei einer ausgereiften Plattform nähern sich die Grenzkosten pro
zusätzlichem Übernehmenden allein der Transaktions-/Nachrichtengebühr
an — die Fixkosten werden über den gesamten Regierungsbestand
amortisiert, nicht über das Budget eines Ministeriums, weshalb
GaaP-Komponenten meist zentral finanziert werden statt frühen
Übernehmenden zu Vollkostendeckung berechnet zu werden.
```

## Beispielrechnung

**Kommunalverwaltung übernimmt GOV.UK Pay statt ein Zahlungsgateway zu bauen**:

```
Eigenbau-Schätzung:
  PCI-DSS-Compliance-Arbeit + Integration + laufende Wartung
  ≈ 85.000 £ Bau + 22.000 £/Jahr Wartung

GOV.UK-Pay-Übernahme:
  Integrationsaufwand ≈ 12.000 £ (Entwicklungszeit)
  Transaktionsgebühren: Regierung-zu-Bürger-Kartenzahlungen
  typischerweise mit einem kleinen Prozentsatz + fester Gebühr pro
  Transaktion berechnet, keine separate PCI-DSS-Last für die Kommune
  ≈ 12.000 £ einmalig, laufende Kosten variabel mit dem Volumen,
  nicht fest

Einsparung im ersten Jahr ≈ 85.000 £ − 12.000 £ = 73.000 £, noch vor
Berücksichtigung der vermiedenen 22.000 £/Jahr Wartung und des
vermiedenen Compliance-Risikos, Kartendaten überhaupt in einem
kommunal betriebenen System zu halten — diese zweite Kategorie ist
der in public-sector-cybersecurity-value behandelte Sicherheitswert.
```

Skalieren Sie diese 73.000 £ über die etwa 1.800 Dienste, die inzwischen GOV.UK Pay nutzen, und die
aggregierten vermiedenen Baukosten über die gesamte Regierung liegen im hohen zweistelligen bis
niedrigen dreistelligen Millionenbereich — die Plattformökonomie, nicht eine einzelne Integration,
ist der Ort, an dem der Wert der Strategie tatsächlich liegt.

## Bezug zur Softwareentwicklung

Government as a Platform ist ein direktes Argument für [Eigenentwicklung vs. Zukauf im öffentlichen Sektor](../eigenentwicklung-vs-zukauf-im-öffentlichen-sektor/):
Wenn eine gemeinsame, bewertete, gut betriebene Komponente existiert, ist der Bau eines
maßgeschneiderten Äquivalents sehr selten die bessere [Wirtschaftlichkeits](../wirtschaftlichkeit/)-Wahl,
und er scheitert fast per Definition an Punkt 13 des [Digitalen Servicestandards](../digitaler-servicestandard/)
("offene Standards, gemeinsame Komponenten und Muster nutzen und dazu beitragen"). Es verändert
auch die Form von [Gesamtbetriebskosten in der öffentlichen IT](../gesamtbetriebskosten-in-der-öffentlichen-it/):
Plattformübernahme tauscht eine große Investitions- und Wartungszeile gegen eine kleinere,
nutzungsgebundene Betriebskostenzeile, die leichter zu prognostizieren und leichter zu
definanzieren ist, wenn ein Dienst eingestellt wird. Offene Wiederverwendung von Komponenten hat
eine Verwandte in [Wert offener Daten](../wert-offener-daten/) — beide sind Strategien, etwas, das die
Regierung einmal produziert, als gemeinsame Infrastruktur zu behandeln statt als
Ministeriumsvermögenswert.

## Fallstricke

- **Schatten-Eigenbau**: Teams bauen still ihre eigene Zahlungs- oder Benachrichtigungsintegration,
  weil der Onboarding-Prozess der Plattform langsamer ist, als es selbst zu tun — ein
  Governance-Reibungsproblem, kein technisches, und es untergräbt still die
  Wiederverwendungsökonomie, auf der die gesamte Strategie beruht.
- **Das Plattformteam relativ zum von ihm geschaffenen Wert unterfinanzieren**: Wert fällt
  konsumierenden Ministerien zu, während Kosten beim Plattformteam liegen, was ein chronisches
  Unterinvestitionsrisiko schafft, sofern die Finanzierung nicht zentralisiert und geschützt ist —
  eine Variante der Tragödie der Allmende.
- **Plattformerfolg allein an Nutzung messen**: Übernahmezahlen (angebundene Dienste, versendete
  Nachrichten) sind ein Frühindikator, kein Wertnachweis; der eigentliche Test ist die oben
  gezeigte Rechnung aus vermiedenen Baukosten und vermiedenem Risiko.
- **"Plattform" mit "Monolith" gleichsetzen**: GaaP-Komponenten sind erfolgreich, weil jede eine
  Sache gut macht mit einer schmalen, stabilen Schnittstelle — unverwandte Fähigkeiten in eine
  "Plattform" zu bündeln, reproduziert das Eigenbau-Problem auf anderer Ebene.

## Quellen

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
