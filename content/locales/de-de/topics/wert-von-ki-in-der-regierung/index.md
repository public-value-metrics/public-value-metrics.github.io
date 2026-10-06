# Wert von KI in der Regierung

Der Wert von KI in der Regierung ist die Anforderung, dass ein in einem öffentlichen Dienst
eingesetztes KI-System dieselbe Wirtschaftlichkeits- und Wertmesslatte erfüllt wie jede andere
Ausgabenentscheidung — keine niedrigere, weil sie neu ist, und keine höhere, weil sie gefürchtet
wird. Es ist die Frage, die ein Lieferteam beantworten können muss, bevor — nicht nachdem — ein
KI-Feature live geht: Erzeugt dies mehr Wert, als es kostet, sobald Absicherung, Aufsicht und
Risiko ehrlich eingepreist sind?

## Warum das wichtig ist

Das britische Central Digital and Data Office (CDDO) veröffentlichte 2024 sein Generative-AI-Framework
für die Regierung, aufbauend auf früherer Zwischenleitlinie vom Juni 2023, und strukturierte es um
zehn Prinzipien, die abdecken, was generative KI ist, ihre ethischen Implikationen,
Werkzeugsicherheit, Qualitätssicherungskontrollen, das Management des gesamten
generative-KI-Lebenszyklus, das Identifizieren echter Anwendungsfälle,
ressortübergreifende Zusammenarbeit, Transparenz, Kompetenzen und Governance. Das Beharren des
Rahmenwerks auf "bedeutsamer menschlicher Kontrolle" und vollständigem Lebenszyklusmanagement
existiert, weil Business Cases für KI-Projekte ein spezifisches Fehlermuster haben, das andere
IT-Ausgaben nicht haben: Die Schlagzeilen-Produktivitätszahl eines Pilotprojekts ist leicht zu
erzeugen und leicht zu überzeichnen, weil sie gemessen wird, bevor die Verifizierungs-,
Korrektur- und Aufsichtslast berücksichtigt wird, die das Werkzeug erzeugt. Neben dem Rahmenwerk
verlangt der Algorithmic Transparency Recording Standard (ATRS) von öffentlichen Stellen, einen
standardisierten Datensatz zu veröffentlichen — Zweck, verwendete Daten, Leistung,
Fairness-Tests, Vereinbarungen zur menschlichen Aufsicht — für algorithmische Werkzeuge, die
einen bedeutsamen Einfluss auf Entscheidungen über Einzelpersonen haben, was die
Absicherungskosten eines KI-Systems zu einer Sache öffentlicher Aufzeichnung macht, nicht zu einer
internen Schätzung, die ein Team still überspringen kann.

## Die Berechnung

KI-Übernahme wird als Ergänzung zu, nicht Ersatz für, die Standard-[Wirtschaftlichkeits](../wirtschaftlichkeit/)-Bewertung
bewertet, mit den KI-spezifischen Begriffen ausdrücklich benannt statt in eine einzige
"Produktivitätsgewinn"-Zahl gefaltet:

```
Nettowert eines KI-Systems =
    Produktivitätsgewinn (eingesparte Zeit × belastete
    Personalkosten)
  − Lizenz-/Rechenkosten
  − menschliche Verifizierungs- und Aufsichtskosten (KI-Output
    prüfen, bevor danach gehandelt wird — dies schrumpft auch bei
    ausgereiften Werkzeugen nicht auf null)
  − ATRS-Dokumentations- und laufende Überwachungskosten
  − risikoadjustierte Kosten des Schadens durch Fehler, Verzerrung
    oder Halluzination, gewichtet danach, wer diesen Schaden trägt
    (Verteilungsgewichtung)

Eine Pilot-Produktivitätszahl, die den Aufsichtsterm auslässt, ist
nicht mit einer Business-as-usual-Kostenbasislinie vergleichbar, die
bereits äquivalente menschliche Prüfung enthält — siehe
ai-productivity-in-the-public-sector für die vollständigere
Produktivitätsmessdisziplin, aus der dies entlehnt ist.
```

## Beispielrechnung

**Kommunalverwaltung nutzt ein generatives KI-Werkzeug, um erste Antworten auf routinemäßige
Anfragen zur Kommunalsteuer zu entwerfen**: 25.000 Anfragen/Jahr, zuvor vollständig von
Sachbearbeitenden bei durchschnittlich 14 Minuten/Anfrage bearbeitet, belastete Personalkosten
34 £/Stunde.

```
Basislinienkosten (ohne KI):
  25.000 × (14/60) × 34 £ = 198.333 £/Jahr

Schlagzeilenbehauptung des Pilotprojekts: KI entwirft eine Antwort in
90 Sekunden, Sachbearbeitende "prüfen nur und senden" — behauptete
neue Zeit ist 3 Minuten
  25.000 × (3/60) × 34 £ = 42.500 £/Jahr
  → behauptete Einsparung 155.833 £/Jahr (sieht transformativ aus)

Vollständig zugeordnete Zahl, gemessen nach 3 Monaten Live-Betrieb
statt in den handverlesenen Testfällen des Pilotprojekts:
  Tatsächliche Prüf- + Korrekturzeit pro Antwort: 6 Minuten (Entwürfe
  brauchen echte Bearbeitung bei komplexen oder emotional sensiblen
  Anfragen)
  25.000 × (6/60) × 34 £ = 85.000 £/Jahr
  Lizenz-/Rechenkosten: 38.000 £/Jahr
  ATRS-Dokumentation und vierteljährliche Verzerrungs-/Qualitätsüberwachung:
  14.000 £/Jahr
  Gesamtkosten = 85.000 + 38.000 + 14.000 = 137.000 £/Jahr

Echte Einsparung = 198.333 − 137.000 = 61.333 £/Jahr — echt und es
wert, beibehalten zu werden, aber deutlich unter der Hälfte der
Schlagzeilenbehauptung des Pilotprojekts, und es brauchte eine
ehrliche Aufsichtszeit-Messung, nicht die Bestfall-Messung des
Piloten, um sie zu finden.
```

## Bezug zur Softwareentwicklung

Hier treffen sich [KI-Produktivität im öffentlichen Sektor](../ki-produktivität-im-öffentlichen-sektor/)
und dieses Thema: Technische Teams, die KI-Features in öffentliche Dienste einbauen, besitzen die
Instrumentierung, die die "echte" Zahl im Beispiel überhaupt möglich macht — tatsächliche Prüfzeit,
Bearbeitungsdistanz zwischen Entwurf und gesendeter Antwort und Eskalationsrate protokollieren, statt
den Demobedingungen des Pilotprojekts zu vertrauen. KI-Features sollten gegen Punkt 9 des
[Digitalen Servicestandards](../digitaler-servicestandard/) (sicherer Dienst, Privatsphäre der
Nutzenden) bewertet und mit [Cybersicherheitswert im öffentlichen Sektor](../cybersicherheitswert-im-öffentlichen-sektor/)
abgeglichen werden, wo das Werkzeug Bürgerdaten berührt, und jedes KI-System mit bedeutsamem
Einfluss auf Entscheidungen über Einzelpersonen braucht einen ATRS-Datensatz, bevor es als
bewertungsbereit gelten kann, genauso wie ein Dienst eine bestandene [Servicestandard](../digitaler-servicestandard/)-Bewertung
braucht, bevor er live geht.

## Fallstricke

- **KI-Washing**: bestehende regelbasierte Automatisierung als "KI" umzuetikettieren, um Zugang zu
  für KI-Übernahme vorgesehener Finanzierung oder Aufmerksamkeit zu erhalten, ohne die
  Genauigkeits- oder Verzerrungsrisiken, die die zusätzliche Prüfung des Rahmenwerks tatsächlich
  rechtfertigen.
- **Pilot-Produktivität statt Produktionsproduktivität messen**: Piloten laufen auf kuratierten
  Testfällen mit engagierten, aufmerksamen Prüfenden; die Produktion läuft auf dem vollen,
  unordentlichen Fallmix mit Prüfenden, die im Zeitverlauf Automatisierungsverzerrung entwickeln
  und Outputs zu wenig prüfen — beides verzerrt die ehrliche Aufsichtskosten-Zahl.
- **ATRS-Registrierung überspringen, weil das Werkzeug "keine wirkliche automatisierte
  Entscheidungsfindung ist"**: Die Schwelle des Standards ist bedeutsamer Einfluss auf eine
  Entscheidung über eine Einzelperson, die die meisten bürgerorientierten KI-Entwurfs- oder
  Triage-Werkzeuge erfüllen, selbst wenn eine Person technisch gegenzeichnet.
- **Verteilungswirkung von Fehlern ignorieren**: Die über alle Nutzenden gemittelte Fehlerrate eines
  KI-Systems kann eine weit höhere Fehler- oder Verzerrungsrate für bestimmte Gruppen verbergen;
  [Verteilungsgewichtung](../verteilungsgewichtung/) sollte auf den risikoadjustierten
  Schadensterm angewendet werden, nicht nur auf die aggregierte Genauigkeitszahl.

## Quellen

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
