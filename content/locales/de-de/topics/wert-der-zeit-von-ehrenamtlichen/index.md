# Wert der Zeit von Ehrenamtlichen

Der Wert der Zeit von Ehrenamtlichen ist der Geldwert, der unbezahlter Arbeit zugewiesen wird, meist
verwendet, um den wahren wirtschaftlichen Fußabdruck einer Organisation anzugeben — ihre Bücher
plus die Arbeit, die sie nicht bezahlen musste — oder um zu argumentieren, dass eine bestimmte
Intervention kosten-wirksamer ist, als ihr Barbudget allein nahelegt. Zwei nationale Methodiken
dominieren: die Independent-Sector-Schätzung der Vereinigten Staaten und der Ansatz des britischen
Office for National Statistics / NCVO, und sie bepreisen dieselbe Arbeitsstunde recht
unterschiedlich.

## Warum das wichtig ist

Jedes Jahr veröffentlicht Independent Sector, zusammen mit dem Do Good Institute der University of
Maryland, einen nationalen Stundenwert für Ehrenamtszeit, aufgebaut aus Lohndaten des Bureau of
Labor Statistics — spezifisch dem durchschnittlichen Stundenverdienst von Produktions- und
nicht-leitenden Beschäftigten in privaten nicht-landwirtschaftlichen Lohnlisten, plus einer
Anpassung für Nebenleistungen — und nach US-Bundesstaat aufgeschlüsselt. Die letzte
Veröffentlichung setzte den Wert auf **36,14 US-Dollar pro Stunde für 2025**, ein Anstieg von 3,9 %
gegenüber dem Vorjahr, mit Werten auf Bundesstaatsebene von über 50 US-Dollar in Washington, D.C.
bis unter 20 US-Dollar in Puerto Rico. Im Vereinigten Königreich hat das Office for National
Statistics separat die Ersatzkosten formellen Ehrenamts auf **14,43 £ pro Stunde** geschätzt
(Schätzung von 2017), und der UK Civil Society Almanac 2024 von NCVO nutzt Daten zur
Ehrenamtsbeteiligung — etwa 14,2 Millionen Menschen, die 2021–22 formell ehrenamtlich tätig waren —,
um den gesamten Ehrenamtsbeitrag des Sektors auf etwa **18 Milliarden £** zu schätzen, etwa 0,8 %
des britischen BIP.

Der Grund, warum dies über buchhalterische Kosmetik hinaus wichtig ist: Ein Programm, das stark auf
ehrenamtliche Arbeit setzt, kann auf reiner Barmittel-[Kosten-pro-Ergebnis](../kosten-pro-ergebnis/)-Basis
dramatisch günstiger aussehen als eines, das sich auf bezahltes Personal stützt, selbst wenn die
wahren Ressourcenkosten — was es kosten würde, diese Arbeit zu ersetzen — ähnlich oder höher sind.
Geldgeber und Evaluatoren, die den Wert der Zeit von Ehrenamtlichen ignorieren, unterschätzen
systematisch die wahren Kosten ehrenamtsintensiver Liefermodelle, was Effizienzvergleiche gegenüber
bezahlten Personalmodellen mit demselben Ergebnis verzerrt.

## Die Berechnung

```
Wert der Ehrenamtszeit = beigetragene Ehrenamtsstunden × Stundensatz

Die Wahl des Satzes ist wichtig und ändert die Antwort:
  - Ersatzkosten-Ansatz: der Lohn eines bezahlten Beschäftigten, der
    dieselbe Aufgabe übernehmen würde (z. B. ein Ersatzkostensatz für
    eine qualifizierte Jugendarbeiterin, nicht ein generischer
    Durchschnittslohn) — am vertretbarsten für aufgabenspezifische
    Bewertung
  - Opportunitätskosten-Ansatz: der eigene entgangene Lohn der
    ehrenamtlichen Person — am vertretbarsten zur Bewertung dessen,
    was die ehrenamtliche Person aufgegeben hat
  - Nationaler-Durchschnitt-Ansatz: der einzelne vermischte Satz von
    Independent Sector oder ONS — am vertretbarsten für
    Schlagzeilen-, sektorübergreifende Vergleichbarkeit
```

Die drei Ansätze können sich für dieselbe Stunde um ein Vielfaches unterscheiden (eine als
Vorstandsmitglied ehrenamtlich tätige Anwältin hat einen ganz anderen Opportunitätskostensatz als
einen nationalen Durchschnittssatz), sodass jede berichtete Zahl angeben muss, welche Methode sie
erzeugt hat.

## Beispielrechnung

**Britische Organisation, Nationaler-Durchschnitt-Ansatz**: 5.000 Ehrenamtsstunden in einem Jahr,
bewertet mit 14,43 £/Stunde (ONS-Ersatzkostenschätzung):

```
Wert = 5.000 × 14,43 £ = 72.150 £
```

Wenn die Barausgaben der Organisation in diesem Jahr 300.000 £ betrugen, betragen ihre wahren
Ressourcenkosten — Bargeld plus Ehrenamtsarbeit — 372.150 £, etwa 24 % höher als die reine Barzahl
nahelegt. Eine Kosten-pro-Ergebnis-Berechnung, die nur die Barzahl von 300.000 £ verwendet,
unterschätzt die wahren Kosten um dieselbe Marge.

**US-amerikanische Organisation, Nationaler-Durchschnitt-Ansatz**: 2.000 Ehrenamtsstunden bewertet
mit 36,14 US-Dollar/Stunde (Independent Sector, Veröffentlichung 2025):

```
Wert = 2.000 × 36,14 $ = 72.280 $
```

**Dieselbe US-amerikanische Organisation, Opportunitätskosten-Ansatz**: Wenn die Ehrenamtlichen
überproportional pensionierte Fachkräfte sind, deren frühere Verdienste im Schnitt 60 $/Stunde
betrugen, würde die Opportunitätskosten-Bewertung 120.000 $ betragen — zwei Drittel höher als die
nationale Durchschnittszahl, was verdeutlicht, warum die Methode angegeben werden muss.

## Bezug zur Softwareentwicklung

Systeme, die Ehrenamtsstunden protokollieren (Schichtplanungswerkzeuge, Plattformen für
Ehrenamtsmanagement), sollten Stunden auf Aufgaben- oder Rollenebene erfassen, nicht nur als Summe,
damit ein Ersatzkostensatz pro Rolle angewendet werden kann statt eines einzigen pauschalen
nationalen Durchschnittssatzes über eine gemischte ehrenamtliche Belegschaft hinweg (die Stunde
eines Vorstandsmitglieds und eine Ordnungsdienststunde sind wirtschaftlich nicht gleichwertig). Den
verwendeten Satz und die Methodik zusammen mit dem berechneten Wert zu speichern — nicht nur die
finale Währungszahl — erlaubt es nachgelagerter Berichterstattung (Jahresabschlüsse, Berechnungen
der [sozialen Kapitalrendite](../soziale-kapitalrendite/), Geldgeberberichte), die Zahl später
zu reproduzieren oder anzufechten, statt sie als undurchsichtige Konstante zu behandeln. Siehe
[Kosten pro Ergebnis](../kosten-pro-ergebnis/) dazu, warum das Weglassen des Werts der Ehrenamtszeit
die wahren Lieferkosten systematisch unterschätzt.

## Fallstricke

- **Einen einzigen pauschalen Satz für strukturell unterschiedliche Rollen verwenden.** Ein
  nationaler Durchschnittslohnsatz, angewendet auf eine professionelle Pro-bono-Stunde
  (juristisch, finanziell, klinisch), unterbewertet sie drastisch; passen Sie den Satz an die
  ersetzte Rolle an, wo immer die Aufgabe qualifiziert ist.
- **Doppelzählung gegen bezahlte Personalkosten.** Wenn Ehrenamtliche Arbeit ersetzen, die sonst
  bezahlt würde, stellen Sie sicher, dass die Bewertung zu den Barausgaben addiert wird, nicht auf
  eine bereits aufgeblähte Personalschätzung geschichtet wird.
- **Einen veralteten Satz ohne Datum zitieren.** Die Sätze von Independent Sector und ONS ändern
  sich jährlich (oder werden im Fall von ONS nur periodisch neu geschätzt); eine undatierte
  Ehrenamtszeit-Zahl in einem Bericht ist für Vergleiche nahezu bedeutungslos.
- **Den Wert der Ehrenamtszeit als Fundraising-Vermögenswert behandeln.** Es ist eine
  Kostenrechnungsanpassung zum Verständnis der wahren Ressourcenkosten, kein neues Geld, das eine
  Organisation ausgeben kann; beides zu vermischen führt einen die Bücher lesenden Vorstand in die
  Irre.

## Quellen

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
