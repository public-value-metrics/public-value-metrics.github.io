# Öffentlicher Wert

Öffentlicher Wert ist der Nutzen, den eine staatliche oder soziale Organisation für die Bürgerinnen
und Bürger insgesamt schafft — nicht nur die Leistungen, die sie erbringt, oder das Geld, das sie
ausgibt, sondern ob die Gesellschaft dadurch besser dasteht, dass die Organisation existiert und so
gehandelt hat, wie sie gehandelt hat. Mark Moores "strategisches Dreieck" von 1995 ist der
Standardtest: Eine öffentliche Initiative ist nur dann gerechtfertigt, wenn sie *legitim und
unterstützt*, *inhaltlich wertvoll* und *operativ umsetzbar* ist — alle drei zugleich.

## Warum das wichtig ist

Wert im privaten Sektor lässt sich relativ leicht beziffern: Umsatz minus Kosten, beurteilt von
Kunden, die abwandern können. Öffentlicher Wert hat kein vergleichbares Marktsignal. Ein
Strafvollzugsdienst, eine Steuerbehörde und ein Jugendamt erbringen allesamt Leistungen, die
Bürgerinnen und Bürger nicht einfach ablehnen können, und der "Kunde" (der Steuerzahler, der
Straftäter, das Kind) ist oft nicht dieselbe Person wie der politische Auftraggeber, der das Budget
bewilligt. Moores *Creating Public Value: Strategic Management in Government* (Harvard University
Press, 1995) liefert die fehlende Disziplin: Eine Führungskraft sollte in der Lage sein zu benennen,
(1) welchen öffentlichen Wert ihre Initiative schafft, (2) woher ihre Legitimität und Finanzierung
dafür stammen — ein Ministerium, ein Rat, ein Mandat, ein Zuschuss — und (3) ob ihre Organisation
dies mit den vorhandenen Mitarbeitenden, Technologien und Prozessen tatsächlich umsetzen kann. Ein
Programm, das nur bei einem oder zwei der drei Dreiecksseiten gut abschneidet, ist noch nicht
gerechtfertigt, wie gut gemeint es auch sein mag.

Das ist praktisch von Bedeutung, weil die meisten Fehlschläge öffentlicher Software keine
Technologiefehlschläge sind. Ein System kann technisch exzellent und operativ umsetzbar sein und
trotzdem scheitern, weil im legitimierenden Umfeld — Ministerien, Aufsichtsgremien, die
Öffentlichkeit — niemand tatsächlich das wollte, worauf es optimiert ist. Der digitale
Universal-Credit-Dienst und das NHS National Programme for IT werden in der britischen
Verwaltungsliteratur beide als Fälle angeführt, in denen die operative und die
Legitimitätsseite des Dreiecks nicht im Einklang mit der Wertseite standen.

## Die Berechnung

Öffentlicher Wert ist ein Rahmenwerk, keine Formel, aber er strukturiert ansonsten vage
Investitionsfälle in drei prüfbare Fragen:

```
Test des strategischen Dreiecks — nur fortfahren, wenn alle drei zutreffen:

1. Legitimität und Unterstützung: Wer hat dies autorisiert, und steht das
   legitimierende Umfeld (Parlament, Ministerium, Rat, Vorstand, öffentliche
   Meinung) noch dahinter, während Ressourcen gebunden werden?

2. Öffentlicher Wert: Welches konkrete, beschreibbare Gut entsteht dadurch
   für Bürgerinnen und Bürger oder die Gesellschaft — Sicherheit, Gesundheit,
   Chancen, Vertrauen, Fairness — und für wen?

3. Operative Kapazität: Kann die Organisation dies mit vorhandenem Personal,
   Technologie, Partnern und rechtlicher Befugnis tatsächlich umsetzen —
   oder mit einem glaubwürdigen Plan, diese zu erwerben?
```

Eine schwache Initiative scheitert typischerweise an mindestens einer Seite: technisch umsetzbar,
aber ohne Mandat (ein Datenaustausch-Pilotprojekt, das niemand abgesegnet hat); populär, aber nicht
umsetzbar (ein versprochener digitaler Dienst ohne technische Kapazität); oder autorisiert und
umsetzbar, aber wertlos (ein Dashboard, das niemand nutzt).

## Beispielrechnung

**Kommunalverwaltung**: Ein digitales Team einer Kommune schlägt ein KI-Triage-Werkzeug für
Anträge auf Wohngeld vor.

- *Legitimität*: Das Kabinett der Kommune hat eine Digital-First-Strategie genehmigt, aber die für
  Sozialleistungen zuständigen gewählten Vertreter haben automatisierte Entscheidungsfindung nicht
  spezifisch abgesegnet — eine Lücke, kein grünes Licht.
- *Öffentlicher Wert*: Schnellere Bearbeitung (behaupteter Nutzen: von 10 Tagen auf 2 Tage) ist nur
  dann ein echter Wert, wenn Antragstellende nicht zu Unrecht abgelehnt werden; der Wertanspruch
  muss Genauigkeit einschließen, nicht nur Geschwindigkeit.
- *Operative Kapazität*: Die Kommune hat eine Data Scientistin und keinen Prozess zur
  Modellüberwachung, sodass die behauptete Bearbeitungszeit von 2 Tagen bei der angegebenen
  Fehlerquote derzeit nicht umsetzbar ist.

Zwei von drei Seiten scheitern. Moores Rahmenwerk sagt: nicht wie geplant fortfahren — zuerst eine
ausdrückliche Autorisierung für automatisierte Entscheidungen einholen und Überwachungskapazität
aufbauen, sonst ist der im Business Case behauptete "öffentliche Wert" fiktiv.

**Zentralregierung**: Der Online-Steuererklärungsdienst einer Steuerbehörde hat starke Legitimität
(gesetzlicher Auftrag) und starke operative Kapazität (ein bestehendes Team liefert zuverlässig),
aber schwachen öffentlichen Wert, wenn die Nutzung gering ist, weil digital Ausgeschlossene — siehe
[digitale Inklusion](../digitale-inklusion/) — in einen Kanal gedrängt werden, den sie nicht nutzen
können. Das Dreieck legt offen, was ein rein leistungsorientiertes Dashboard verbergen würde.

## Bezug zur Softwareentwicklung

Öffentlicher Wert ist der übergeordnete Begriff, unter dem dieses gesamte Repository steht:
[Wirtschaftlichkeit](../wirtschaftlichkeit/) liefert den Test aus Sparsamkeit, Effizienz und
Wirksamkeit dafür, ob Ressourcen gut eingesetzt wurden; [Opportunitätskosten bei öffentlichen
Ausgaben](../opportunitätskosten-bei-öffentlichen-ausgaben/) beziffern, was das Geld sonst hätte leisten
können; und [Additionalität und Mitnahmeeffekte](../additionalität-und-mitnahmeeffekte/),
[Verdrängung und Zurechnung](../verdrängung-und-zurechnung/) sowie
[kontrafaktische Analyse](../kontrafaktische-analyse/) prüfen gemeinsam, ob der behauptete Wert real
ist und nicht nur angenommen wird. Für Ingenieurinnen und Ingenieure ist das strategische Dreieck
ein nützliches Vorab-Audit für jede Produktentscheidung im öffentlichen Sektor:

- Bevor Sie ein Feature abgrenzen, fragen Sie, wer es autorisiert hat und ob diese Autorisierung
  noch besteht — ein Feature, das für ein inzwischen ausgeschiedenes Regierungsmitglied gebaut
  wurde, hat seine Legitimitätsseite womöglich stillschweigend verloren.
- Behandeln Sie "können wir es bauen" und "sollten wir es bauen" als wirklich getrennte Fragen;
  technische Kapazität beantwortet nur die dritte Seite des Dreiecks.
- Anforderungsdokumente für öffentliche Dienste sollten den Anspruch auf öffentlichen Wert
  ausdrücklich benennen, nicht nur die User Story, denn Nutzerwert und öffentlicher Wert sind nicht
  immer dasselbe (siehe [Ergebnisse vs. Leistungen](../ergebnisse-vs-leistungen/)).

## Fallstricke

- **Operative Kapazität als ausreichende Rechtfertigung behandeln.** "Wir können es bauen"
  beantwortet nur eine Seite des Dreiecks; Teams mit starker Umsetzungsfähigkeit liefern regelmäßig
  Dinge, die niemand autorisiert hat haben wollen und die kein beschreibbares öffentliches Gut
  schaffen.
- **Legitimität mit Rechtmäßigkeit verwechseln.** Ein Programm kann rechtmäßig sein und dennoch die
  politische und öffentliche Unterstützung vermissen, die es braucht, um eine schwierige
  Umsetzungsphase zu überstehen; rechtliche Deckung ist kein Mandat.
- **Annehmen, öffentlicher Wert sei das, was die beauftragende Behörde behauptet.** Moores Modell
  verlangt, dass der Wertanspruch gegen die tatsächlichen Interessen der Bürgerinnen und Bürger
  prüfbar ist, nicht bloß vom Geldgeber behauptet wird — sonst kollabiert das Rahmenwerk zur
  Selbstzertifizierung.

## Quellen

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
