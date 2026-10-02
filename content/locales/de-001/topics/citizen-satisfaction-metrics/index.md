# Metriken zur Bürgerzufriedenheit

Metriken zur Bürgerzufriedenheit messen, wie Menschen ihre direkte Erfahrung mit einem öffentlichen
Dienst bewerten — verschieden vom Vertrauen in Institutionen im Allgemeinen und verschieden davon,
ob der Dienst tatsächlich ein gutes Ergebnis erzielt hat. Ein Dienst kann beliebt und unwirksam sein,
oder wirksam und unbeliebt; die Lücke zwischen beiden ist selbst eine diagnostische Information, die
ein Lieferteam beobachten sollte.

## Warum das wichtig ist

Zufriedenheit wird auf zwei unterschiedlichen Ebenen gemessen, die routinemäßig vermischt werden.
Auf Dienstebene verlangen die inzwischen eingestellte britische Performance Platform und das
heutige GOV.UK-Service-Manual eine Zufriedenheitserhebung pro Dienst (typischerweise eine
Fünf-Punkte-Skala von "sehr zufrieden" bis "sehr unzufrieden", am Transaktionspunkt durchgeführt)
als einen von vier verpflichtenden Dienst-KPIs — siehe [Servicestandards und Transaktionskennzahlen](../service-standards-and-transaction-metrics/).
Auf institutioneller Ebene misst die britische Civil Service People Survey jährlich
Mitarbeiterengagement und -erfahrung über jedes Ministerium der Zentralregierung hinweg, und separat
erhebt das "Trust in Government"-Programm der OECD öffentliches Vertrauen in die nationale
Regierung über Mitgliedstaaten hinweg und verfolgt ein langfristiges Muster aus Rückgang und
Erholung, das stark von Krisen geprägt ist (sowohl die Finanzkrise 2008 als auch die
COVID-19-Pandemie erzeugten scharfe, sichtbare Bewegungen in den OECD-Vertrauenszahlen). Der Grund,
warum Ingenieurinnen und Ingenieure, die bürgerorientierte Dienste bauen, Zufriedenheit und Ergebnis
auseinanderhalten müssen, ist ein bekanntes Fehlermuster im Servicedesign: Ein wunderschön gestaltetes,
leicht zu bedienendes digitales Formular für einen Leistungsantrag kann sehr hohe Zufriedenheit
erreichen, während die zugrunde liegende Politik — Anspruchsregeln, Bearbeitungsrückstände,
Leistungshöhen — den Antragstellenden nicht bessergestellt zurücklässt. Zufriedenheit misst die
Schnittstelle; sie misst nicht den dahinter gelieferten Wert.

## Die Berechnung

```
Nettozufriedenheit = % zufrieden (oder sehr zufrieden) − % unzufrieden
                      (oder sehr unzufrieden)
                      (neutrale/keine-Meinung-Antworten aus beiden
                      Termen ausgeschlossen, aber in der Antwortbasis
                      zur Berechnung jedes Prozentsatzes mitgezählt)

Zufriedenheit-Ergebnis-Lücke = Zufriedenheitswert − Ergebniserreichungswert
                      (beide normiert 0–100; eine große positive Lücke
                      signalisiert einen Dienst, der sich "gut anfühlt",
                      aber inhaltlich unterliefert)

Vertrauensindex (OECD-Stil) = % der Befragten, die mit "ja" auf
                      "haben Sie Vertrauen in [nationale Regierung]?"
                      antworten, als Zeitreihe verfolgt, typischerweise
                      aufgeschlüsselt nach Alter, Einkommen und Bildung
```

## Beispielrechnung

**E-Rechnungsdienst für Kommunalsteuer einer Kommunalverwaltung**: Eine Zufriedenheitserhebung am
Punkt der erfolgreichen Transaktion zeigt 2.400 Befragte: 1.650 zufrieden/sehr zufrieden, 250
unzufrieden/sehr unzufrieden, 500 neutral.

```
Nettozufriedenheit = (1.650/2.400 × 100) − (250/2.400 × 100)
                    = 68,75 % − 10,42 %
                    = +58,3 Nettozufriedenheit
```

Isoliert betrachtet sieht das stark aus. Aber die Erhebung wird nur Nutzenden gezeigt, die die
Transaktion *erfolgreich* abschließen — eine bekannte Messverzerrung (siehe Fallstricke unten). Sie
mit der Abschlussratenkennzahl aus [Servicestandards und Transaktionskennzahlen](../service-standards-and-transaction-metrics/)
zu paaren, zeigt, dass die Abschlussrate nur 71 % beträgt, was bedeutet:

```
Die wahre Bevölkerungszufriedenheit ist für die 29 %, die den Vorgang
abgebrochen haben, ungemessen — plausibel die unzufriedenste Kohorte,
da Abbruch selbst ein starkes negatives Signal ist, das die Erhebung
nie erfasst.
```

**Illustration auf nationaler Ebene (Struktur einer OECD-artigen Vertrauensreihe)**: Das Vertrauen
in die nationale Regierung wird in Jahr 1 mit 42 % berichtet, fällt auf 34 % in Jahr 2 (ein
Krisenjahr) und erholt sich auf 39 % in Jahr 3 — ein für das Muster aus Schock und teilweiser
Erholung typischer Verlauf, den die OECD über Mitgliedstaaten hinweg nach größeren Krisen
dokumentiert.

## Bezug zur Softwareentwicklung

Instrumentieren Sie Zufriedenheitserhebungen an jedem bedeutsamen Ausstiegspunkt einer
Nutzerreise, nicht nur beim erfolgreichen Abschluss — der häufigste technische Fehler in diesem
Bereich, der eine Zufriedenheitskennzahl stillschweigend in eine durch Selektionsverzerrung
verfälschte Vanity-Kennzahl verwandelt. Wo möglich, paaren Sie den Zufriedenheitswert mit einer
Abschluss- oder Ergebniskennzahl auf demselben Dashboard, damit ein Team nicht steigende
Zufriedenheit feiern kann, während die Abschlussrate still sinkt (siehe
[Kosten pro Transaktion](../cost-per-transaction/) und [digitale Inklusion](../digital-inclusion/)
dazu, wer von digitaler Zufriedenheitsstichprobe überhaupt ausgeschlossen wird — nicht-digitale und
digital unterstützte Nutzende sind in dienstinternen Erhebungen systematisch unterrepräsentiert).
Zufriedenheits- und Vertrauensdaten fließen auch direkt in die Legitimitätsseite von
[Moores strategischem Dreieck](../public-value/) ein und gehören auf die "Kunden"- und
"Legitimitäts"-Perspektiven einer [Scorecard für öffentlichen Wert](../public-value-scorecard/) —
siehe [Vertrauens- und Legitimitätskennzahlen](../trust-and-legitimacy-metrics/) für das
institutionelle Gegenstück zu dieser Kennzahl auf Dienstebene.

## Fallstricke

- **Selektionsverzerrung bei Erhebungen am Abschlusspunkt**: Nutzende, die eine Reise abbrechen,
  sehen die Erhebung nie, sodass ein hoher dienstinterner Zufriedenheitswert mit einer niedrigen
  Abschlussrate und einer großen unsichtbaren Population unzufriedener Nicht-Vollender koexistieren
  kann.
- **Zufriedenheit als Stellvertreter für Ergebnis behandeln**: Eine gut gestaltete Schnittstelle für
  eine schlecht gestaltete Politik erzielt gute Zufriedenheits- und schlechte Ergebniswerte;
  berichten Sie stets beides, nie eines als Ersatz für das andere.
- **Kleine, nicht repräsentative Stichproben mit falscher Präzision berichten**: Ein
  Zufriedenheitswert von wenigen Hundert selbstselektierten Befragten, auf eine Dezimalstelle
  berichtet, suggeriert eine Sicherheit, die die Stichprobengröße nicht stützen kann.
- **Demografische Aufschlüsselung ignorieren**: Nationale Vertrauens- und Zufriedenheitszahlen, die
  nicht nach Alter, Einkommen, Behinderung oder digitalem Zugang aufgeschlüsselt sind, können stark
  divergierende Erfahrungen über Gruppen hinweg verbergen — ein Muster, für das die eigenen
  Trust-in-Government-Veröffentlichungen der OECD ausdrücklich aufschlüsseln.

## Quellen

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
