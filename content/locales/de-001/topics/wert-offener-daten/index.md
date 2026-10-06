# Wert offener Daten

Der Wert offener Daten ist das Problem, zu schätzen, was staatliche und öffentliche Daten wert
sind, wenn sie keinen Preis haben: Sie werden nicht verkauft, es gibt also keine Umsatzzeile, doch
ihre Veröffentlichung (Wetteraufzeichnungen, Fahrpläne, Postleitzahlgrenzen, Unternehmensregister)
erzeugt nachweislich nachgelagerte wirtschaftliche und soziale Aktivität. Sie gut zu bewerten ist
wichtig, weil sowohl "kostenlos zu veröffentlichen" als auch "wertlos" falsch sind, und eine
Softwareentwicklerin oder ein Softwareentwickler, die oder der entscheidet, ob eine API oder ein
Datensatz geöffnet werden soll, braucht ein besseres Argument als beides.

## Warum das wichtig ist

Die am häufigsten zitierte Top-down-Schätzung stammt aus dem Bericht "Open data: Unlocking
innovation and performance with liquid information" des McKinsey Global Institute von 2013, der den
potenziellen jährlichen Wert offener Daten über sieben Bereiche hinweg — Bildung, Verkehr,
Konsumgüter, Elektrizität, Öl und Gas, Gesundheitswesen und Verbraucherfinanzen — weltweit auf 3 bis
5 Billionen US-Dollar pro Jahr bezifferte, durch Mechanismen einschließlich erhöhter Transparenz,
effizienterem Abgleich von Angebot und Nachfrage und der Ermöglichung neuer, auf den Daten
aufbauender Produkte und Dienste. Diese Zahl ist eine Szenarioschätzung, kein gemessenes Ergebnis,
und wird routinemäßig falsch zitiert, als wäre sie Umsatz, den die Regierung direkt einnehmen
könnte, während der Wert größtenteils Dritten zufließt — Unternehmen, Forschenden, Bürgerinnen und
Bürgern —, die die Daten nutzen, was genau der Sinn ihrer Öffnung statt ihres Verkaufs ist. Das
britische Open Data Institute, 2012 mitgegründet von Sir Tim Berners-Lee und Sir Nigel Shadbolt, hat
seither eine Sammlung granularerer Bottom-up-Fallstudien aufgebaut — Sektor für Sektor, Datensatz
für Datensatz —, die für einen echten Business Case weit nützlicher sind als die McKinsey-Schlagzeilenzahl,
weil sie den Mechanismus der Wertschöpfung zeigen, nicht nur ihre aggregierte Größe.

## Die Berechnung

Offene Daten haben keinen Marktpreis, sodass Bewertungsmethoden einen ersetzen; drei Ansätze
kehren wieder, und keiner reicht allein aus:

```
1. Vermiedene-Kosten-/Ersatzkostenmethode:
   Wert ≈ was Nutzende bezahlt hätten, um die äquivalenten Daten
   selbst zu produzieren oder zu lizenzieren — eine Untergrenze,
   ignoriert Wert, der durch vom ursprünglichen Produzenten nie
   erwartete Nutzungen entsteht

2. Marktanalogon-/Nachgelagerte-Aktivitäts-Methode:
   Wert ≈ Umsatz oder Einsparungen, die von auf den Daten aufbauenden
   Unternehmen/Diensten erzeugt werden (z. B. Navigations-Apps, die
   auf offenen Karten- und Verkehrsdaten aufbauen) — erfasst echte
   wirtschaftliche Aktivität, ist aber schwer sauber der
   Datenveröffentlichung selbst zuzurechnen (siehe
   additionality-and-deadweight)

3. Kontingente/Präferenzangabe-Methode:
   Wert ≈ was Nutzende angeben, zahlen zu würden, oder die Zeit, die
   sie angeben, dadurch zu sparen — siehe stated-preference-valuation
   für die allgemeine Methode und ihre Verzerrungen

Keine dieser Methoden erzeugt eine so saubere Zahl wie ein Marktpreis;
glaubwürdige Business Cases für offene Daten triangulieren über zwei
oder mehr und machen ausdrücklich, welcher Mechanismus die Arbeit
leistet.
```

## Beispielrechnung

**Illustrative Veröffentlichung nationaler Karten-/Adressdaten** (Methodik nach ODI-artigen
Fallstudien, Zahlen illustrativ für die Größenordnung, die solche Studien typischerweise finden):

```
Vermiedene-Kosten-Schätzung:
  Unternehmen, die sonst äquivalente Adressabgleichsdaten kommerziell
  lizenzieren würden, bei geschätzten durchschnittlichen
  Lizenzkosten von 4.000 £/Jahr, über geschätzte 15.000 KMU, die nun
  den kostenlosen offenen Datensatz nutzen
  = 15.000 × 4.000 £ = 60.000.000 £/Jahr allein an vermiedenen
  Lizenzkosten

Nachgelagerte-Aktivitäts-Schätzung (spekulativer, braucht ein
Kontrafaktum):
  Neue Liefer-Routing- und Logistikprodukte, aufgebaut auf den offenen
  Daten, die ohne sie nicht existieren oder wesentlich schlechter
  wären — erfordert einen Vergleich gegen das Kontrafaktum der
  geschlossenen oder kommerziell lizenzierten Daten
  (counterfactual-analysis), weil ein Teil dieser Aktivität ohnehin zu
  einem höheren Preis auf bezahlten Daten stattfinden würde, was im
  Sinne von "durch die Öffnung geschaffener Wert" Mitnahmeeffekt ist

Ein vertretbarer Business Case berichtet die
Vermiedene-Kosten-Zahl als solide Untergrenze und behandelt die
Nachgelagerte-Aktivitäts-Zahl als Obergrenzen-Szenario, nicht als
Tatsache.
```

## Bezug zur Softwareentwicklung

Für Ingenieurinnen und Ingenieure ist die praktische Frage nach dem Wert offener Daten meist enger
gefasst als die nationalen Schlagzeilenzahlen: Erhöht die Öffnung dieser spezifischen API oder
dieses Datensatzes (statt sie hinter einer Partnervereinbarung zu halten) die Wiederverwendung genug,
um die laufenden Kosten der Dokumentation, Versionierung und Unterstützung als öffentliche
Schnittstelle zu rechtfertigen? Diese Wartungskosten sind real und das Gegenstück zur
Einmal-bauen-oft-wiederverwenden-Ökonomie von [Government as a Platform](../regierung-als-plattform/)
— die beiden Themen sind enge Verwandte, eines über geteilten Code und Infrastruktur, das andere
über geteilte Daten. Jede Behauptung zum Wert offener Daten sollte gegen
[Additionalität und Mitnahmeeffekte](../additionalität-und-mitnahmeeffekte/) geprüft werden, bevor sie in
einen Business Case einfließt: Aktivität, die ohnehin auf kommerziell lizenzierten Daten
stattgefunden hätte, ist kein von der *Öffnung* geschaffener Wert.

## Fallstricke

- **Die McKinsey-Zahl von 3–5 Billionen US-Dollar als britisch-spezifisch oder als Anteil dieses
  Datensatzes zitieren**: Es ist eine globale, siebensektorale Szenarioschätzung von 2013 — sie als
  präzisen Multiplikator für einen einzelnen nationalen Datensatz zu verwenden, stellt die Zahl
  falsch dar.
- **Kein Kontrafaktum**: sich alle nachgelagerte wirtschaftliche Aktivität, die auf offenen Daten
  aufbaut, anzurechnen, ohne zu fragen, wie viel davon ohnehin zu einem höheren Preis auf bezahlten
  oder lizenzierten Daten stattgefunden hätte (siehe [Additionalität und Mitnahmeeffekte](../additionalität-und-mitnahmeeffekte/)
  und [kontrafaktische Analyse](../kontrafaktische-analyse/)).
- **Produktionskosten mit geschaffenem Wert verwechseln**: Ein Datensatz, der teuer zu erheben war,
  ist nicht automatisch wertvoll zu veröffentlichen, und ein billiger ist nicht automatisch
  geringwertig — Wert folgt nachgelagerter Nutzung, nicht vorgelagerten Kosten.
- **Die laufenden Wartungskosten von "offen" ignorieren**: Einen einmaligen CSV-Export zu
  veröffentlichen ist nicht dieselbe Verpflichtung wie eine dokumentierte, versionierte,
  unterstützte offene API zu betreiben — Letztere nach der Startankündigung zu unterfinanzieren
  ist ein häufiges Fehlermuster.

## Quellen

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
