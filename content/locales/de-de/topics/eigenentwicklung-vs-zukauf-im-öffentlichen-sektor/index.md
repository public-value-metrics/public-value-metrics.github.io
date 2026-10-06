# Eigenentwicklung vs. Zukauf im öffentlichen Sektor

Eigenentwicklung-vs.-Zukauf ist ein strukturierter, risikoadjustierter Vergleich maßgeschneiderter
Entwicklung gegen kommerzielle oder Standardbeschaffung, verglichen anhand diskontierter
[Gesamtbetriebskosten](../gesamtbetriebskosten-in-der-öffentlichen-it/), Time-to-Value und Risiko. Der
öffentliche Sektor ist strukturell ein kaufender Sektor — der Technology Code of Practice legt eine
Vermutung zugunsten von Standard- und Cloud-Lösungen fest —, doch technische Teams innerhalb von
Ministerien greifen weiterhin standardmäßig zur Eigenentwicklung, aus denselben Gründen wie
Entwicklerteams überall.

## Warum das wichtig ist

Der Technology Code of Practice des Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>)
und die begleitende Leitlinie des Service Manual zur Entscheidung, ob gebaut oder gekauft werden
soll, drängen Ministerien, maßgeschneiderte Entwicklung gegen eine Vermutung zu rechtfertigen, dass
Standardfähigkeit gekauft, nicht gebaut werden sollte, und dass nur wirklich neuartige,
missionsdifferenzierende Fähigkeit maßgeschneiderten Code rechtfertigt. Die ergänzende
Optimismus-Bias-Leitlinie von HM Treasury zum Green Book, abgeleitet aus der Mott-MacDonald-Überprüfung
großer öffentlicher Beschaffungen von 2002, gibt IT-Projekten die weiteste Aufschlagsspanne jeder
bewerteten Kategorie — Investitionskostenschätzungen wird empfohlen, sie vor Verwendung in der
Bewertung am unteren Ende um 10 % und am oberen Ende um bis zu 200 % aufzuschlagen, was
widerspiegelt, wie stark Softwarebauten historisch über öffentliche Beschaffung hinweg unterschätzt
wurden. Die Build-vs.-Buy-Analyse existiert genau, um diese Risikoanpassung vor Genehmigung auf den
Tisch zu zwingen, statt sie als unterjährige Mehrausgabenanfrage auftauchen zu lassen.

## Die Berechnung

```
Vergleich über denselben 3–5-Jahres-Horizont, diskontiert mit dem
sozialen Diskontsatz des Green Book (siehe social-discount-rate.md):

Kapitalwert_Option = PV(Nutzen, verschoben um Time-to-Value) −
                      PV(TCO)

Risikoanpassungen (Optimismus-Bias-Muster des Green Book):
  Baukosten × 1,1–3,0        (IT-Projekt-Aufschlagsspanne, Mott
                              MacDonald)
  Bau-Time-to-Value + 40–60 % (Bereitstellungsverzögerungs-Prior)
  Kauf: stattdessen Integrations-Realitätscheck und Vertragsausstiegskosten
  hinzufügen

Entscheidungstreiber, in der Reihenfolge, in der sie meist
entscheiden:
  1. Differenzierung — ist diese Fähigkeit die Mission, oder
     Verrohrung?
  2. Time-to-Value × Verzögerungskosten (siehe
     cost-of-delay-in-public-programmes.md)
  3. risikoadjustierte Gesamtbetriebskosten
```

## Beispielrechnung

Eine Kommunalverwaltung braucht ein Fallmanagementsystem für Erwachsenenpflege. Kauf: SaaS zu
180.000 £/Jahr, live in 4 Monaten. Eigenentwicklung: geschätzt 900.000 £ plus 150.000 £/Jahr
Wartung, live in 14 Monaten.

```
Risikoadjustierte Baukosten = 900.000 × 1,4 = 1.260.000 £
TCO über 5 Jahre:
  Kauf  = 180.000 × 5 = 900.000 £
  Eigenentwicklung = 1.260.000 + 150.000 × 5 = 2.010.000 £

Verzögerungsterm: Das System vermeidet 40.000 £/Monat an doppelten
Begutachtungen; die Eigenentwicklung kommt 10 Monate später als der
Kauf.
CoD = 10 × 40.000 = 400.000 £

Effektiver Vergleich: 900.000 £ (Kauf) vs. 2.010.000 + 400.000 =
2.410.000 £ (Eigenentwicklung)
```

Kauf gewinnt um etwa 1,5 Millionen £ über fünf Jahre, und die größte einzelne Zeile nach der
Bauschätzung selbst sind die Verzögerungskosten, die ein reiner Investitionskostenvergleich nie
zutage gefördert hätte.

## Bezug zur Softwareentwicklung

Die Disziplinen, die sich direkt aus dieser Analyse in die Lieferpraxis übertragen:
**Prior-basierte Risikoanpassung** — der Mott-MacDonald-Aufschlag ist das
Software-Äquivalent zum mechanisch angewendeten Optimismus-Bias des Green Book, sodass Teams für
Ausnahmen davon argumentieren sollten, statt anzunehmen, ihre Schätzung sei die Ausnahme;
**Vergleichsehrlichkeit** — die Alternative zur Eigenentwicklung ist die beste verfügbare
Kaufoption, nicht "nichts", was direkt mit [Opportunitätskosten bei öffentlichen Ausgaben](../opportunitätskosten-bei-öffentlichen-ausgaben/)
verknüpft ist; und **ehrlicher TCO-Vergleich** — jeder Eigenentwicklungsvorschlag sollte gegen die
vollständigen [Gesamtbetriebskosten](../gesamtbetriebskosten-in-der-öffentlichen-it/) einer Kaufoption
verglichen werden, nicht gegen ihren Listenpreis. Wo Eigenentwicklung wirklich gewinnt, sollten die
[Verzögerungskosten](../verzögerungskosten-bei-öffentlichen-programmen/) der zusätzlichen Bauzeit ausdrücklich
im Business Case bepreist werden, nicht als unausgesprochene Annahme belassen werden, dass Zeit
keine Rolle spielt.

## Fallstricke

- **Anbieterlistenpreis mit einer nicht risikoadjustierten Bauschätzung vergleichen**: Dies schönt
  die Eigenentwicklung doppelt, einmal bei den Kosten und einmal beim Zeitplan.
- **Nullbewertete interne Arbeitskraft**: Technische Zeit im öffentlichen Dienst wird als
  "kostenlos" behandelt, weil sie bereits im Ministeriumspersonalbudget steht, was ihre wahren
  Opportunitätskosten gegenüber anderer Arbeit, die das Team tun könnte, verbirgt.
- **Unbepreister Lock-in in beide Richtungen**: Anbieterausstiegs- und Datenportabilitätskosten sind
  real, aber ebenso der Bus-Faktor einer maßgeschneiderten Eigenentwicklung und ihre Abhängigkeit
  davon, über ihre Lebensdauer ein kleines, schwer zu ersetzendes internes Team zu halten.
- **Missionsdifferenzierung für Verrohrung beansprucht**: "das ist für uns essenziell", behauptet
  über Integrations-Middleware oder einen Dokumentenspeicher — testen Sie es daran, ob eine
  Bürgerin, ein Bürger oder eine Sachbearbeitende je bemerken würde, welches darunter läuft.

## Quellen

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
