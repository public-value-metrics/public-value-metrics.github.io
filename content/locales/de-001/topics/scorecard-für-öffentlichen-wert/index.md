# Scorecard für öffentlichen Wert

Die Scorecard für öffentlichen Wert passt Robert Kaplans und David Nortons Balanced Scorecard von
1992 — entworfen für Firmen, die Gewinn über finanzielle, kundenbezogene, interne-Prozess- und
Lern-und-Wachstums-Perspektiven optimieren — an Organisationen an, deren Endergebnis eine Mission
ist, keine Marge. Sie zwingt eine öffentliche Stelle, Leistung über mehrere nicht reduzierbare
Dimensionen zugleich zu berichten, statt alles in eine Zahl zu verdichten, die Zielkonflikte
verbirgt.

## Warum das wichtig ist

Kaplans und Nortons ursprüngliches Argument in der Harvard Business Review war, dass eine einzelne
Finanzkennzahl ein Spätindikator ist, der Ihnen nichts darüber sagt, *warum* sich die Leistung im
nächsten Quartal verändern wird. Im privaten Sektor bestand die Lösung aus vier verknüpften
Perspektiven. In der Regierung liefert Mark Moores "strategisches Dreieck" (aus *Creating Public
Value*, 1995) die entsprechende Struktur: Ein Dienst muss gleichzeitig **öffentlichen Wert** liefern
(das Missionsergebnis), **Legitimität und Unterstützung** aufrechterhalten (politischer und
öffentlicher Rückhalt) und **operativ machbar** sein (mit den tatsächlich verfügbaren Ressourcen und
Fähigkeiten umsetzbar). Paul Nivens *Balanced Scorecard: Step-by-Step for Government and Nonprofit
Agencies* (2003) ist das Praktikerhandbuch zur Übersetzung von Kaplans und Nortons vier Feldern in
dieses Dreieck — typischerweise wird "finanziell" in "Ressourcenverwaltung" umbenannt, "Mission"
statt "Aktionärswert" an die Spitze gesetzt, und Kunden- und Stakeholder-Perspektiven werden als
gleichrangig statt dem Gewinn untergeordnet behandelt. Der Grund, warum das für ein Lieferteam
wichtig ist: Ein öffentlicher digitaler Dienst, der nur nach einer Finanz- oder
Effizienzkennzahl (etwa Kosten pro Transaktion) beurteilt wird, wird systematisch in die
Legitimitäts- und Ergebnisdimensionen unterinvestieren, die die Finanzkennzahl nicht sehen kann.

## Die Berechnung

Die Scorecard für öffentlichen Wert ist ein Rahmenwerk, keine Formel, aber ihre Struktur ist
festgelegt und es lohnt sich, sie exakt wiederzugeben:

```
Perspektive           Frage des öffentlichen Sektors            Beispielindikator
--------------------------------------------------------------------------------
Mission/Ergebnisse     Erreichen wir den öffentlichen Wert,     Bevölkerungs-
                        für den wir existieren?                 Ergebnismaß (siehe
                                                                  outcomes-vs-outputs)
Ressourcenverwaltung   Nutzen wir öffentliche Mittel             Kosten pro Ergebnis,
                        effizient und innerhalb                  Budgetabweichung
                        genehmigter Grenzen?
Kunde/Nutzer           Können Nutzende und Bürgerinnen und       Abschlussrate,
                        Bürger auf den Dienst zugreifen          Zufriedenheit
                        und von ihm profitieren?
Legitimität/           Stehen politische Auftraggeber,           Vertrauenskennzahlen,
  Unterstützung         Aufsichtsgremien und die                 Prüfungsergebnisse,
                        Öffentlichkeit noch hinter uns?           bestätigte Beschwerden
Interner Prozess/      Haben wir die Fähigkeit und den           Personalfluktuation,
  Lernen                Prozess, uns weiter zu verbessern?        Durchlaufzeit, Rückstandsalter

Eine vertretbare Scorecard berichtet 3–5 Indikatoren pro Perspektive,
so gewählt, dass keine einzelne Perspektive manipuliert werden kann,
ohne dass sich der Schaden in einer anderen zeigt.
```

## Beispielrechnung

**Abteilung für Erwachsenenpflege einer Kommunalverwaltung**: Eine Scorecard für einen
Rehabilitationsdienst (kurzfristige Unterstützung, um Menschen zu helfen, nach einem
Krankenhausaufenthalt wieder Unabhängigkeit zu erlangen) berichtet:

```
Mission:       68 % der Dienstnutzenden benötigen nach 6 Wochen keine
               fortlaufende Pflege mehr (Ziel 65 %)
Ressourcen-
verwaltung:    Kosten pro abgeschlossener Rehabilitationsepisode =
               1.850 £ (Budgetannahme 2.000 £)
Kunde:         Nutzerzufriedenheit 82 %, durchschnittliche Wartezeit
               bis Dienstbeginn 4,1 Tage
Legitimität:   3 bestätigte Beschwerden pro 1.000 Episoden;
               Erwachsenenschutzgremium bewertet Dienst als "gut"
Prozess:       Personal-Vakanzquote 14 %, durchschnittliche Fallzahl 23
               (sichere Fallzahl-Obergrenze: 25)
```

Isoliert gelesen sehen Mission- und Ressourcenverwaltungszahlen wie eine einfache Erfolgsgeschichte
aus: unter Budget und über dem Ergebnisziel. Zusammen mit der Prozesszeile gelesen zeigt die
Vakanzquote von 14 % gegenüber einer Fallzahl-Obergrenze von 25, dass das gute Ergebnis durch nahezu
unsichere Personalausstattung erkauft wird — eine Warnung, die die Missionszahl allein nie zutage
gefördert hätte, und genau das Fehlermuster, zu dem ein Einzel-Perspektiven-KPI (siehe
[KPIs im öffentlichen Sektor](../kpis-im-öffentlichen-sektor/)) einlädt.

## Bezug zur Softwareentwicklung

Für ein Team, das ein internes oder öffentlich zugängliches Dashboard baut, ist die Scorecard ein
direktes Argument gegen ein einzelnes "Gesundheits-Score"-Widget: Bauen Sie ein Panel pro
Perspektive, und widerstehen Sie dem Produktdruck, sie zu einer Ampel zu synthetisieren, denn genau
im Synthetisierungsschritt gehen die Zielkonflikt-Informationen verloren. Sie passt auch sauber auf
OKR-Strukturen von Produktteams: Ein Mission-OKR ohne gepaartes Ressourcenverwaltungs- oder
Prozess-OKR reproduziert genau das Einzelkennzahl-Fehlermuster, gegen das Kaplan und Norton 1992
schrieben. Siehe [Öffentlicher Wert](../öffentlicher-wert/) für Moores zugrunde liegende Theorie dessen,
was das "Mission"-Feld tatsächlich enthalten sollte, und [Vertrauens- und Legitimitätskennzahlen](../vertrauens-und-legitimitätskennzahlen/)
dazu, wie die Legitimitätsperspektive mit echten, belegten Indikatoren befüllt wird, statt mit
einem Stellvertreterwert, den niemand verteidigen kann.

## Fallstricke

- **Die Scorecard zu einem Score verdichten**: Vier Perspektiven zu einer einzigen Zahl zu
  mitteln, führt genau das Problem wieder ein — ein schlechter Legitimitätswert, maskiert durch
  einen guten Ressourcenverwaltungswert —, das die Scorecard verhindern soll.
- **Die private "finanzielle" Perspektive unverändert kopieren**: Die Ressourcenverwaltungsperspektive
  einer öffentlichen Stelle betrifft das Einhalten genehmigter, oft zweckgebundener Budgets, nicht
  die Maximierung von Einnahmen — Nivens Umbenennung ist nicht kosmetisch.
- **Indikatoren wählen, die das die Scorecard besitzende Team einseitig bewegen kann**: Ein
  Legitimitätsindikator, der von demselben Team stammt, das er beurteilt (etwa selbstberichtete
  Beschwerdebearbeitung), ist keine unabhängige Evidenz.
- **Die Scorecard einmal bauen und Gewichte oder Indikatoren nie überprüfen**: Kaplan und Norton
  beabsichtigten eine jährliche Strategieüberprüfung; eine über Jahre eingefrorene Scorecard
  driftet von der Mission ab, die sie verfolgen sollte.

## Quellen

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
