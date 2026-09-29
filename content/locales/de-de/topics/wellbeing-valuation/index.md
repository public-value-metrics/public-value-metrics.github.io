# Wohlfahrtsbewertung (Wellbeing Valuation, WELLBY)

Wohlfahrtsbewertung bepreist die Wirkung einer Politik direkt in Begriffen der Lebenszufriedenheit,
mit dem WELLBY (wohlfahrtsbereinigtes Lebensjahr) als Einheit — ein WELLBY entspricht einer
Ein-Punkt-Veränderung auf einer Lebenszufriedenheitsskala von 0–10, aufrechterhalten über ein Jahr.
Es ist HM Treasurys offiziell gebilligte Alternative zur Monetarisierung jedes Nutzens über
Zahlungsbereitschaft.

## Warum das wichtig ist

HM Treasurys "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) brachte
subjektive Wohlfahrtsdaten formal in die Bewertung der Zentralregierung ein und gab Analysten einen
Weg, Ergebnisse zu bewerten — soziale Verbundenheit, psychische Gesundheit, Sicherheit,
zivilgesellschaftliche Teilhabe —, die [Präferenzangabe](../stated-preference-valuation/) und
[offenbarte Präferenz](../revealed-preference-valuation/) nur schwer überzeugend bepreisen können,
weil Menschen oft schlechte Prognostiker dafür sind, wie stark ein Gut ihre Lebenszufriedenheit
tatsächlich beeinflussen wird. Die Leitlinie, gemeinsam mit dem What Works Centre for Wellbeing
entwickelt, legt einen empfohlenen Geldwert pro WELLBY fest — 13.000 £ (Preise von 2021, periodisch
überarbeitet) —, abgeleitet aus dem in großen Wohlfahrtserhebungen beobachteten Zusammenhang
(hauptsächlich der Annual Population Survey des ONS, der seit 2011 die vier ONS4-Wohlfahrtsfragen
stellt) zwischen Einkommen und Lebenszufriedenheit, was Analysten einen Umrechnungssatz zurück in
Pfund liefert, wenn ein monetarisierter Vergleich mit anderen Green-Book-Bewertungen benötigt wird.

Die Methode ist wichtig, weil sie die übliche Bewertungslogik umkehrt: statt zu fragen, was
Menschen für ein Ergebnis zahlen würden (Präferenzangabe) oder Wert aus einer verwandten
Markttransaktion abzuleiten (offenbarte Präferenz), misst sie die Wirkung des Ergebnisses auf die
berichtete Lebenszufriedenheit direkt und umgeht so die Lücke zwischen dem, was Menschen sagen, was
sie wollen, und dem, was sie tatsächlich besserstellt. Dies ist auch ihre zentrale Einschränkung —
selbstberichtete Lebenszufriedenheit wird durch Anpassungs- und Framing-Effekte beeinflusst, für die
eine sorgfältige Praktikerin oder ein sorgfältiger Praktiker kontrollieren muss.

## Die Berechnung

```
WELLBY = 1 Lebenszufriedenheitspunkt (Skala 0–10), aufrechterhalten für
         1 Person über 1 Jahr

Gesamt-WELLBYs einer Politik =
  Σ (Veränderung der Lebenszufriedenheitsbewertung) × (Anzahl
    betroffener Personen) × (Dauer in Jahren, diskontiert mit dem
    sozialen Diskontsatz)

Monetarisierter Wert = Gesamt-WELLBYs × Wert pro WELLBY
  (von HM Treasury empfohlener Wert: 13.000 £ pro WELLBY, Preise von
   2021, unterliegt periodischer Überarbeitung — aktuelle Leitlinie vor
   Verwendung prüfen)
```

Dies unterscheidet sich vom gesundheitsökonomischen
[wohlfahrtsbereinigten Lebensjahr](../wellbeing-adjusted-life-years/), das typischerweise an
gesundheitsbezogenen Lebensqualitätsskalen (EQ-5D und ähnliche) verankert ist statt an allgemeiner
Lebenszufriedenheit; beide sind verwandt, aber nicht austauschbar, und Green-Book-Bewertungen
sollten ausdrücklich angeben, welche Skala und Erhebungsmethode einer berichteten WELLBY-Zahl
zugrunde liegt.

## Beispielrechnung

**Kommunalverwaltung**: Eine Kommune betreibt ein Programm zur Freundschaftsvermittlung für
isolierte ältere Anwohnende, das 400 Personen erreicht. Eine Vorher-Nachher-Wohlfahrtserhebung
mit der ONS4-Lebenszufriedenheitsfrage zeigt einen Anstieg der durchschnittlichen Bewertung der
Teilnehmenden von 5,8 auf 6,5 — ein Gewinn von 0,7 Punkten —, aufrechterhalten über die
2-jährige finanzierte Programmdauer.

```
Erzeugte WELLBYs = 400 Personen × 0,7 Punkte × 2 Jahre = 560 WELLBYs
Monetarisierter Wert = 560 × 13.000 £ = 7,28 Mio. £
Programmkosten = 450.000 £ über 2 Jahre

Nutzen-Kosten-Verhältnis ≈ 7,28 Mio. £ / 0,45 Mio. £ ≈ 16:1
```

Ein derart hohes Verhältnis sollte eher Prüfung als Jubel auslösen — die Wellbeing-Leitlinie des
Green Book warnt ausdrücklich davor, selbstberichtete Gewinne aus kleinen Stichproben ohne
Prüfung auf Selektionseffekte (sind nur die geselligsten, am ehesten profitierenden Anwohnenden dem
Programm beigetreten?) und ohne Vergleichsgruppe für bare Münze zu nehmen; eine gut konzipierte
Evaluation würde eine bei Nicht-Teilnehmenden beobachtete kontrafaktische Veränderung
gegenrechnen, siehe [kontrafaktische Analyse](../counterfactual-analysis/).

**Nationale Regierung**: Der Vergleich zweier Beschäftigungsprogramme mittels WELLBYs statt nur
Einkommen erfasst, dass Arbeitslosigkeit über den Einkommensverlust hinaus wohlfahrtskostet —
britische Wohlfahrtsforschung findet durchgängig, dass Arbeitslosigkeit die Lebenszufriedenheit
stärker senkt, als der Einkommensverlust allein vorhersagen würde, wegen der nicht-monetären Effekte
des Verlusts von Struktur, Sinn und sozialem Kontakt. Ein Programm, das nur nach Einkommensgewinn
bewertet wird, würde seinen Wert im Vergleich zu einem zusätzlich nach WELLBYs bewerteten
unterschätzen.

## Bezug zur Softwareentwicklung

Wohlfahrtsbewertung erreicht technische Teams selten direkt, aber sie prägt, was als "Erfolg" für
Produkte des sozialen Sektors und öffentlicher Dienste definiert wird — eine digitale
Freundschaftsplattform, ein Triage-Werkzeug für psychische Gesundheit oder eine
Gemeinschaftsplattform für isolierte Anwohnende sollte erwarten, dass ihre Wirkung letztlich so
gemessen wird, was bedeutet, dass Produktanalytik erfassen muss, *wer* erreicht wird und für *wie
lange*, nicht nur Nutzungszahlen. Bauen Sie Wohlfahrtserhebungs-Instrumentierung (ONS4 oder
validierte Äquivalente) von Anfang an in die Serviceevaluation ein, statt sie nachträglich
anzuflanschen; eine Wohlfahrts-Basislinie nachträglich einzubauen, nachdem ein Dienst gestartet ist,
verliert den Vorher-Nachher-Vergleich vollständig. Siehe [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/)
und [Methoden der Wirkungsevaluation](../impact-evaluation-methods/).

## Fallstricke

- **Kein Kontrafaktum oder keine Vergleichsgruppe.** Ein Vorher-Nachher-Wohlfahrtsgewinn ohne
  Kontrolle dafür, was ohnehin passiert wäre, überzeichnet die Wirkung des Programms; siehe
  [kontrafaktische Analyse](../counterfactual-analysis/) und
  [Additionalität und Mitnahmeeffekte](../additionality-and-deadweight/).
- **Kleine, selbstselektierte Stichproben.** Wohlfahrtserhebungen bei Programmteilnehmenden, die
  sich freiwillig angemeldet haben, sind anfällig für Selektionsverzerrung — die Menschen, die
  beitraten und blieben, waren vermutlich ohnehin schon auf einem Aufwärtstrend.
- **Die £-pro-WELLBY-Umrechnung als präzise behandeln.** Der monetarisierte Wert ist eine
  politische Konvention, abgeleitet aus Einkommen-Wohlfahrt-Regressionen, kein Marktpreis; nutzen
  Sie ihn für Vergleichbarkeit über Green-Book-Bewertungen hinweg, nicht als Aussage darüber, was
  Wohlfahrt "wert ist".
- **WELLBYs mit gesundheitsbezogenen QALYs vermischen.** Beide messen unterschiedliche Konstrukte
  auf unterschiedlichen Skalen; siehe [wohlfahrtsbereinigte Lebensjahre](../wellbeing-adjusted-life-years/)
  für die gesundheitsökonomische Variante, und mitteln Sie beide nicht zusammen.

## Quellen

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
