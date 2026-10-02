# Wirkungsmodell

Ein Wirkungsmodell ist ein lineares Diagramm, das Inputs, Aktivitäten, Outputs, Ergebnisse und
Impact eines Programms verbindet, von links nach rechts als Rechenschaftskette gelesen: Ressourcen
fließen hinein, Aktivitäten geschehen, Outputs werden produziert, Ergebnisse verändern sich für
Begünstigte, und Impact fällt auf breiterer oder längerer Zeitskala an. Es ist die
Standardstruktur, gegen die Geldgeber und Prüfer erwarten, dass ein Programm berichtsfähig ist, und
das vorwärtsgerichtete Gegenstück zu einer rückwärts abgebildeten [Theorie des Wandels](../theory-of-change/).

## Warum das wichtig ist

HM Treasurys Magenta Book legt das Wirkungsmodell als verpflichtendes Element des
Evaluationsdesigns von Programmen fest, und Geldgeber wie der National Lottery Community Fund bauen
ihre Antrags- und Berichtsvorlagen genau um diese Fünf-Spalten-Kette herum auf. Ihr Wert liegt
darin, dass sie ein Programm zwingt, in einem Diagramm anzugeben, was es ausgeben wird, was es
damit tun wird, was es produzieren wird und — entscheidend — was sich dadurch verändern soll, auf
einem Konkretisierungsgrad, den ein Absatz Fließtext eher verschleiert. Ein Wirkungsmodell mit
befüllten Input- und Aktivitätsspalten, aber leerer oder vager Ergebnisspalte, ist auf einen Blick
diagnostizierbar — genau deshalb fragen Geldgeber danach.

## Die Berechnung

Das Wirkungsmodell ist eine strukturelle Kette, keine Formel:

```
Inputs           Aktivitäten       Outputs              Ergebnisse            Impact
(eingesetzte      (was damit        (direkte, zählbare   (Veränderung für      (langfristige,
 Ressourcen)       getan wird)       Produkte)            Begünstigte)          bevölkerungsweite
                                                                                 oder systemische
                                                                                 Veränderung)
```

Jede Spalte sollte konkreter sein als die vorherige: Inputs sind, was Sie ausgeben, Aktivitäten
sind, was Sie tun, Outputs sind, was geliefert wird, unabhängig von der Wirkung, Ergebnisse sind,
was sich infolgedessen verändert — die Unterscheidung, die vollständig in [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/)
behandelt wird — und Impact ist die dauerhafte, oft nur teilweise zurechenbare, langfristige
Veränderung.

## Beispielrechnung

**Kommunalverwaltung (digitaler Schuldnerberatungsdienst)**:

- Inputs: 180.000 £ Jahresbudget, 4,0 Vollzeitäquivalente Beratende, ein Fallmanagementsystem.
- Aktivitäten: Aufsuchende Sprechstunden, Eins-zu-eins-Schuldnerberatungstermine.
- Outputs: 900 durchgeführte Termine; 750 ausgestellte Schulden- und Leistungspläne.
- Ergebnisse: Von den Klientinnen und Klienten, die eine 6-monatige Nachverfolgung erreichen,
  berichten 60 % (450 von 750) reduzierte Rückstände, im Schnitt eine Reduktion von 1.200 £ pro
  Klient — 540.000 £ aggregierte Rückstandsreduktion.
- Impact: ein messbarer Rückgang der Obdachlosigkeitsanträge aus dem Klientenkreis des Dienstes über
  zwei Jahre, nur teilweise diesem Dienst neben anderen Interventionen zurechenbar (siehe
  [kontrafaktische Analyse](../counterfactual-analysis/)).

**Wohltätigkeitsorganisation (Tafel-Vermittlungspartnerschaft)**:

- Inputs: 45.000 £, 1,5 Vollzeitäquivalente Koordinatorin, Partnerschaftsvereinbarungen mit 12
  Vermittlungsstellen.
- Aktivitäten: Vermittlungs-Triage, Paketpackung und -verteilung.
- Outputs: 5.000 Lebensmittelpakete an 1.100 Haushalte verteilt.
- Ergebnisse: 68 % der befragten Haushalte (748 von 1.100) berichten verbesserte
  Lebensmittelsicherheit bei einem Nachfassanruf nach 4 Wochen.
- Impact: Beitrag zu reduzierter lokaler Nachfrage nach Krisendiensten, nur in aggregierten
  Gebietsstatistiken belegt, nicht allein dieser Organisation zurechenbar.

## Bezug zur Softwareentwicklung

Das Wirkungsmodell kommt einem wörtlichen Datenmodell für ein Ergebnissystem nahe: Inputs und
Aktivitäten sind operative Daten, die Sie bereits haben (Ausgaben, Personal, Sitzungsprotokolle);
Outputs sind leicht zu instrumentieren, weil sie am Lieferpunkt gezählt werden; Ergebnisse
erfordern bewusst gestaltete Nachverfolgungs-Datenerhebung (Erhebungen, Verknüpfung von
Verwaltungsdaten), die nicht existieren wird, sofern niemand sie baut; Impact erfordert meist
verknüpfte, längsschnittliche oder bevölkerungsweite Daten jenseits der Systeme eines einzelnen
Programms. Ingenieurinnen und Ingenieure, die Berichtswerkzeuge bauen, sollten Auftraggeber drängen,
Ergebnis- und Impact-Indikatoren bereits beim Design festzulegen, statt standardmäßig ein
reines Output-Dashboard zu bauen, nur weil das die vorhandenen Transaktionsdaten bereits
unterstützen. Siehe [soziale Kapitalrendite](../social-return-on-investment/) für eine Methode, die
speziell die Ergebnis- und Impact-Spalten bewertet, und [Nutzenrealisierung](../benefits-realization/)
für die Nachverfolgung, ob die Impact-Spalte tatsächlich geliefert wurde.

## Fallstricke

- **Bei Outputs stehenbleiben.** Ein Dashboard, das durchgeführte Termine oder verteilte Pakete
  berichtet und Nutzen suggeriert, berichtet Aktivität, keine Ergebnisse — siehe
  [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/).
- **Kein angegebener kausaler Zusammenhang zwischen den Spalten.** Ein Wirkungsmodell gibt die Kette
  an, aber nicht, warum Aktivitäten Outputs erzeugen sollten, die Ergebnisse erzeugen sollten; diese
  Begründung gehört in eine [Theorie des Wandels](../theory-of-change/), und ein Wirkungsmodell ohne
  eine solche dahinter ist ungeprüft.
- **Es als einmaliges Antragsdokument behandeln.** Wirkungsmodelle, die nur zur Erfüllung eines
  Förderantrags erstellt und nie aktualisiert werden, hören auf widerzuspiegeln, was das Programm
  tatsächlich tut.
- **Zurechnungs-Ausweitung bei der Impact-Spalte.** Bevölkerungsweite Veränderung als allein durch
  ein Programm verursacht zu behaupten, ohne Kontrafaktum, überzeichnet, was die Evidenz stützt.

## Quellen

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
