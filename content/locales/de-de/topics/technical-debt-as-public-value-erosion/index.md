# Technische Schulden als Erosion öffentlichen Werts

Technische Schulden sind Ward Cunninghams Metapher von 1992 für die implizierten zukünftigen Kosten
zweckmäßiger vergangener Programmierentscheidungen: eine **Hauptschuld** (die geschuldete
Behebungsarbeit) und **Zinsen** (die laufende Bremswirkung auf die Lieferung). In einem
Altsystem-Bestand der Regierung werden diese Zinsen direkt aus öffentlichem Wert bezahlt —
langsamere Lieferung gesetzlicher Änderungen, höhere Fehlerraten bei bürgerorientierten Diensten
und ein schrumpfender Pool von Menschen, die das System überhaupt noch sicher anfassen können.

## Warum das wichtig ist

Legacy-Mainframe- und COBOL-Ära-Systeme über britische Ministerien hinweg — HMRC und DWP unter den
am häufigsten genannten — tragen ein gut dokumentiertes und eskalierendes Risiko, auf das das
National Audit Office wiederholt hingewiesen hat, einschließlich in seinem Bericht *Digital
Transformation in Government* (<https://www.nao.org.uk/>): alternde Plattformen, die teuer zu
ändern, zunehmend schwer abzusichern und von einer Fachkräfteschaft abhängig sind, die schneller in
Rente geht, als sie ersetzt wird. Anders als ein Rückstand im privaten Sektor sitzen diese Schulden
direkt zwischen Bürgerinnen und Bürgern und ihren gesetzlichen Ansprüchen — eine
Leistungsberechnungs-Engine, die nicht sicher geändert werden kann, ist eine
Politikumsetzungsbeschränkung, keine bloße technische Unannehmlichkeit. Der Neustart des
Universal-Credit-IT-Programms 2013, als das National Audit Office feststellte, dass der
ursprüngliche Bau keine Wirtschaftlichkeit liefern würde und ein wesentlicher Teil des
Software-Vermögenswerts abgeschrieben werden musste, ist ein kanonisches Beispiel dafür, wie
unbepreiste technische Schulden ein lebendiges, ministeriell sichtbares öffentliches Programm
einholen.

## Die Berechnung

```
SQALE-Hauptschuld = Σ über Verstöße (Behebungszeit) × Entwicklerkostensatz
Verhältnis technischer Schulden (TDR) = Behebungskosten /
                    Neuentwicklungskosten × 100
                    (SonarQube-Noten: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Zinsen (die Zahl, die den Abbau rechtfertigt):
  Zinsen/Jahr = Δ Liefergeschwindigkeit × Wert pro
                Geschwindigkeitseinheit
              + Δ bürgerorientierte Vorfallrate × Kosten pro Vorfall
              + Fachkräfte-Prämie × betroffene Personalstärke
Abbaufall = PV(vermiedene Zinsen über den Zeithorizont) −
            Behebungskosten
            (diskontiert mit dem sozialen Diskontsatz des Green Book,
            siehe social-discount-rate.md)
```

Die Hauptschuld beziffert die Verbindlichkeit; die Zinsen sind das, was den Investitionsfall
gegenüber einem Haushaltsausschuss begründet.

## Beispielrechnung

Eine 250.000-Zeilen-Anspruchsbearbeitungs-Engine, geschrieben in einer Legacy-4GL. Unter Verwendung
des CAST-Appmarq-Benchmarks von etwa 3,61 US-Dollar Hauptschuld technischer Schulden pro
Codezeile (≈2,85 £ bei typischem Umrechnungskurs):

```
Hauptschuld ≈ 250.000 × 2,85 £ ≈ 712.500 £
TDR ≈ 16 % (Note C)
```

Gemessene Zinsen: Das Ministerium beschäftigt drei Fach-Vertragsentwickler zu einem
Tagessatz-Aufschlag von 40 % gegenüber Standard-Senior-Ingenieursätzen, weil interne Fähigkeiten
abgewandert sind — zusätzliche 180.000 £/Jahr bei einem sechsköpfigen Team. Das System verursacht
auch vier größere Verarbeitungsausfälle/Jahr, jeder setzt Entscheidungen für etwa 5.000
Antragstellende aus und leitet sie zum Kontaktzentrum um, zu etwa 25 £/Anruf:

```
Zinsen ≈ 180.000 £ (Fachkräfte-Prämie)
       + 4 × 5.000 × 25 £ = 500.000 £ (Kosten umgeleiteter Kontakte)
       ≈ 680.000 £/Jahr
```

Gezielte Behebung der am schlechtesten performenden Module kostet 1.200.000 £ und wird modelliert,
die Zinsen um 70 % zu senken:

```
Zinsreduktion = 0,70 × 680.000 = 476.000 £/Jahr
Amortisation ≈ 1.200.000 / 476.000 ≈ 2,5 Jahre
```

Die Zielgenauigkeit ist wichtig: Die Behebung selten berührten Codes bringt nichts, weil sich
Zinsen dort konzentrieren, wo Änderungshäufigkeit und Schuldendichte beide am höchsten sind.

## Bezug zur Softwareentwicklung

Die öffentliche-Wert-Rahmung, die einen Fall zu technischen Schulden über "der Code ist alt" hinaus
aufwertet: Stellen Sie den Legacy-Bestand als Inventar dar, wo verlorene Lieferkapazität
konzentriert ist, und verknüpfen Sie ihn ausdrücklich mit [Gesamtbetriebskosten](../total-cost-of-ownership-in-government-it/),
da Zinsen Betriebskosten sind, die in die TCO-Zeile gehören, unabhängig davon, ob das Finanzwesen je
danach gefragt hat. Schuldenbelastete Systeme tragen auch unverhältnismäßiges
[Cybersicherheits](../public-sector-cybersecurity-value/)-Risiko, weil Patch-Kadenz und
Schuldendichte korreliert sind — ein nicht patchbares Legacy-System sind technische Schulden, deren
Zinsen in Vorfallrisiko statt in Pfund bezahlt werden. Und jeder
Behebungs-gegen-Feature-Kompromiss ist selbst eine [Verzögerungskosten](../cost-of-delay-in-public-programmes/)-Entscheidung:
Schulden abzubauen verzögert die nächste gesetzliche Änderung, die ihre eigenen Verzögerungskosten
hat, die gegen die eingesparten Zinsen abgewogen werden müssen.

## Fallstricke

- **Nur-Hauptschuld-Berichterstattung**: Eine große, beängstigende Behebungsschätzung ohne
  Zinszahl rechtfertigt gegenüber einer ausgabengenehmigenden Person nichts.
- **Werkzeuggenerierte Schuldenzahlen wörtlich genommen**: SQALE-artige Scanner zählen
  Regelverstöße; sie übersehen die teure Art von Schulden — architektonische Entscheidungen und
  undokumentierte Legacy-Geschäftsregeln —, während sie Nebensächlichkeiten kennzeichnen.
- **"Die Neuentwicklung vermeidet alles davon"**: Ersatzprogramme müssen dieselbe Disziplin
  erfüllen wie jeder andere Business Case — kontrafaktische Kosten, Erfolgswahrscheinlichkeit und
  Diskontierung —, keine Ausnahme davon, wie der Neustart von Universal Credit 2013 zeigte.
- **Null-Schulden-Utopismus**: Das optimale Schuldenniveau ist nicht null; Schulden sind Hebelwirkung,
  die frühere Lieferung erkauft hat. Die lebendige Frage ist immer der Zinssatz, nicht ob überhaupt
  Schulden existieren.

## Quellen

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
