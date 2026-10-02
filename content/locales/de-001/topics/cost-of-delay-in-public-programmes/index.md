# Verzögerungskosten bei öffentlichen Programmen (Cost of Delay, CoD)

Verzögerungskosten sind der öffentliche Wert, der pro Zeiteinheit verloren geht, solange ein
Programm, Dienst oder eine Systemänderung *noch nicht* geliefert ist. Es ist die
Haupt-Brückenkennzahl dieses Kapitels: Sie rechnet "der Livegang hat sich um sechs Monate
verschoben" in Pfund pro Woche oder in WELLBYs pro Woche um, sodass über Verzögerung in derselben
Währung wie der Business Case selbst gestritten werden kann.

## Warum das wichtig ist

Reinertsens Regel — "wenn Sie nur eine Sache quantifizieren, quantifizieren Sie die
Verzögerungskosten" — überträgt sich fast unverändert in die Regierung, weil öffentliche Programme
ihr ungewöhnlich stark ausgesetzt sind: Business Cases werden gegen einen prognostizierten
Nutzenstrom genehmigt, aber der Strom beginnt erst mit dem Livegang zu fließen, und jede Woche
Verzögerung ist eine Woche entgangenen Werts, den niemand im Risikoregister bepreist. Die
wiederholte Prüfung des Universal-Credit-Rollouts durch das National Audit Office (siehe seine
Berichte "Rolling Out Universal Credit", <https://www.nao.org.uk/>) illustriert das Muster:
Zeitplanverzögerung wurde verfolgt und berichtet, aber die Pfund-pro-Woche-Kosten des *noch nicht*
Lieferns des reformierten Systems an die nächste Tranche von Antragstellenden wurden selten als
Schlagzeilenzahl angegeben, obwohl es die Zahl ist, die Priorisierung und Eskalation hätte antreiben
sollen. Ohne eine CoD-Zahl sieht ein verzögertes Programm wie ein Zeitplanproblem für das
Lieferungsgremium aus; mit einer wird es zu einem Wertvernichtungsproblem für die Rechnungsführerin
oder den Rechnungsführer.

## Die Berechnung

```
CoD = Nutzen pro Zeiteinheit, entgangen, solange nicht geliefert
      (£/Woche oder WELLBYs/Woche)

Gesamtverzögerungsverlust = CoD × Verzögerungsdauer

Zu summierende Nutzenströme für öffentliche Programme:
  kassenwirksame Einsparungen   (Betrugs-/Fehlerreduktion, vermiedene
                                  vorübergehende Kosten)
+ freigesetzte Nicht-Bar-Kapazität (Sachbearbeiter-/Beamtenstunden ×
                                  belastete Kosten)
+ Wohlfahrtsnutzen             (WELLBYs × 13.000 £/WELLBY, ergänzende
                                  Wellbeing-Leitlinie des HMT-Green-Book,
                                  Preise 2019)
```

Für bürgerorientierte Dienste denominieren Sie auch in Wohlfahrt, nicht nur in Geld — siehe
[wohlfahrtsbereinigte Lebensjahre](../wellbeing-adjusted-life-years/) für die zugrunde liegende
Einheit, und [Opportunitätskosten bei öffentlichen Ausgaben](../opportunity-cost-in-public-spending/)
dafür, was das verzögerte Pfund sonst hätte finanzieren können.

## Beispielrechnung

**Kommunalverwaltung**: Eine Aktualisierung des Wohngeldsystems senkt Überzahlungsfehler um
150 £/Antrag/Jahr über 20.000 laufende Anträge.

```
Jahresnutzen = 150 × 20.000 = 3.000.000 £/Jahr
CoD = 3.000.000 / 52 ≈ 57.700 £/Woche
Eine Umsetzungsverzögerung von 12 Monaten kostet 52 × 57.700 ≈
3.000.000 £ an vermeidbarem Fehler.
```

**Zentralregierungsbehörde**: Ein Bewertungsdienst für Behindertenleistungen, sechs Monate (26
Wochen) später als geplant geliefert, bedeutet, dass 200.000 Antragstellende/Jahr im Schnitt drei
Wochen länger auf eine Entscheidung warten. Jede zusätzliche Woche finanzieller Unsicherheit wird
als Effekt von −0,0018 WELLBY (Lebenszufriedenheitspunkt) modelliert:

```
WELLBY-Verlust pro Antragstellendem = 3 × 0,0018 = 0,0054
Jährlicher WELLBY-Verlust = 200.000 × 0,0054 = 1.080 WELLBYs/Jahr
CoD_Wohlfahrt = 1.080 / 52 ≈ 20,8 WELLBYs/Woche
CoD_Geld = 20,8 × 13.000 £ ≈ 270.000 £/Woche Wohlfahrtswert
```

Eine Verzögerung von 26 Wochen "kostet" daher etwa 540 WELLBYs — wert etwa 7 Millionen £ nach der
Wohlfahrtsbewertung des Green Book — was einen verpassten Livegang-Termin von einer
Projektmanagement-Fußnote zu einem Ereignis des Bürgerwohlergehens macht.

## Bezug zur Softwareentwicklung

CoD ist das, was [DORA-Metriken](../dora-metrics-for-public-value/) und
[Flow-Metriken](../flow-metrics-in-government-delivery/) finanziell lesbar macht: Durchlaufzeit in
der Pipeline × CoD ist Geld (oder Wohlfahrt), das in Warteschlangen verbrannt wird, bevor es je eine
Bürgerin oder einen Bürger erreicht. Konkret:

- **Priorisierung**: Ordnen Sie ein Backlog nach CoD ÷ Dauer statt nach Stakeholder-Seniorität —
  das softwareentwicklungsseitige Gegenstück zur Anforderung des Green Book, Optionen nach Wert zu
  bewerten, nicht danach, wer fragt.
- **Beschaffung**: Ein 12–18-monatiger Rahmenbeschaffungszyklus hat CoD; ihn zu bepreisen, verändert
  den Dringlichkeitsfall für beschleunigte Wege und fließt direkt in
  [Eigenentwicklung-vs.-Zukauf](../build-vs-buy-in-government/)-Entscheidungen ein, bei denen
  Time-to-Value ein Entscheidungstreiber ist.
- **Nutzenfall**: Jede bei Genehmigung zitierte CoD-Zahl sollte bei der
  [Nutzenrealisierung](../benefits-realization/) wieder auftauchen — waren die Verzögerungskosten
  real, sollte der beschleunigte Nutzen nach dem Livegang messbar sein.

## Fallstricke

- **Lineare CoD annehmen**: Manche öffentlichen Dienste haben terminförmigen Wert (ein gesetzliches
  Compliance-Datum — CoD springt nach dem Datum auf Durchsetzungsrisiko-Niveau, nahe null davor)
  statt einer gleichmäßigen Wochenrate. Klassifizieren Sie das Dringlichkeitsprofil, bevor Sie
  multiplizieren.
- **CoD auf Outputs, die niemand braucht**: Verzögerung hat nur dann Kosten, wenn das nicht
  gelieferte Ding Wert hat; ein System, das niemand nutzen wird, hat CoD null, egal wie spät es ist.
- **Verzögerung und Diskontierung doppelt zählen**: Der [soziale Diskontsatz](../social-discount-rate/)
  bepreist Zeit bereits über mehrjährige Bewertungshorizonte; CoD ist die
  horizontinterne, operative Version für Wochen und Monate. Verwenden Sie CoD für
  Zeitplanverzögerung, Kapitalwertverschiebung für mehrjährige Neuphasung.

## Quellen

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
