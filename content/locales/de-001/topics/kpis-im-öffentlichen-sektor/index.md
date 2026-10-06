# KPIs im öffentlichen Sektor

Ein Key Performance Indicator (KPI) ist eine gewählte, verfolgte Kennzahl, die dafür steht, ob ein
öffentlicher Dienst seine Aufgabe gut erfüllt. In der Regierung ist die Wahl eines KPI nie neutral:
Weil KPIs an Budgets, Ranglisten und Karrieren gekoppelt sind, prägt der Akt, einen auszuwählen, das
Verhalten aller nachgelagerten Akteure, oft stärker als die Politik, die den Dienst geschaffen hat.

## Warum das wichtig ist

Charles Goodharts Beobachtung von 1975 zur Geldpolitik — später von Marilyn Strathern populär
gemacht als "wenn ein Maß zum Ziel wird, hört es auf, ein gutes Maß zu sein" — ist der wichtigste
Warnhinweis im Leistungsmanagement des öffentlichen Sektors. Ein KPI, gewählt, um ein System zu
*beschreiben*, beginnt, dieses System zu *verzerren*, sobald Ressourcenzuteilung, Bezahlung oder
politisches Überleben daran geknüpft sind. Das klassische Beispiel sind die
Krankenwagen-Reaktionszeiten des NHS: Als das verpflichtende Achtminutenziel für
Kategorie-A-Reaktionen bindend wurde, zeigte sich, dass manche Trusts Krankenwagen knapp außerhalb
der Reaktionszeit-Uhr "stapelten" oder Anrufe umklassifizierten, um die Zahl zu erreichen, ohne die
Patientenergebnisse zu verändern. Die Leitlinie des britischen National Audit Office zur Wahl und
Nutzung von Leistungsindikatoren — dargelegt in seinen Wirtschaftlichkeitsberichten und dem
Rahmenwerk "Performance Measurement by Regulators" sowie "Choosing the Right FABRIC" (geeignet für
den Zweck, angemessen, ausgewogen, robust, integriert, kosteneffektiv) — existiert genau deshalb,
weil Behörden immer wieder Indikatoren wählten, die leicht zu berichten waren, statt solcher, die
schwer zu manipulieren waren. Eine Softwareentwicklerin oder ein Softwareentwickler, die oder der
das Dashboard liefert, an dem ein Ministerium oder eine Direktion gemessen wird, gestaltet, ob
beabsichtigt oder nicht, die Anreizstruktur einer öffentlichen Institution.

## Die Berechnung

KPI-Design ist ein rahmenwerkförmiges Thema, aber die *Bewertung* eines Kandidaten-KPI ist eine
wiederholbare Checkliste, keine Formel:

```
Jeden Kandidaten-KPI bewerten gegen:
  Geeignet für den Zweck — misst er das Ergebnis, oder einen mehrere
                           Schritte entfernten Stellvertreter?
  Angemessen              — gehört er den Menschen, die ihn tatsächlich
                           beeinflussen können?
  Ausgewogen               — ist er mit einer Gegenkennzahl gepaart, die
                           Manipulation erfasst?
  Robust                   — übersteht er eine Prüfung, oder ist er
                           selbstberichtet und nicht verifizierbar?
  Integriert                — passt er zum breiteren Set, oder wirkt er
                           gegen einen anderen KPI?
  Kosteneffektiv            — kostet die Erhebung mehr als die
                           Entscheidung, die er informiert?

Früh- vs. Spätindikator:
  Frühindikator  → sagt zukünftiges Ergebnis voraus, aber oft
                    manipulierbar (z. B. Anrufe beantwortet <60 s)
  Spätindikator  → bestätigt, dass das Ergebnis eingetreten ist, kommt
                    aber zu spät, um zu steuern (z. B. jährliche
                    Zufriedenheitserhebung)
  Ein vertretbares KPI-Set paart pro Ziel mindestens einen von jedem.
```

## Beispielrechnung

**Rettungsdienst-Trust**: Ein Trust berichtet einen Kategorie-A-Reaktionszeit-KPI (lebensbedrohlich)
von "75 % der Anrufe innerhalb von 8 Minuten beantwortet". In einem Quartal gehen 6.000
Kategorie-A-Anrufe ein; 4.500 werden innerhalb von 8 Minuten erreicht, was 75,0 % ergibt — scheinbar
im Ziel.

```
Schlagzeilen-KPI = 4.500 / 6.000 × 100 = 75,0 %  (erfüllt die
75-%-Schwelle)
```

Aber eine Goodhart-Prüfung fügt eine Gegenkennzahl hinzu: die mittlere Reaktionszeit der
langsamsten 10 % der Anrufe.

```
Mittlere Reaktionszeit des langsamsten Dezils = 34 Minuten (gegenüber
19 Minuten zwei Jahre zuvor)
```

Der Trust erreicht das Ziel, während sich der Rand — die Anrufe, die bei unvollkommener Triage am
ehesten wirklich lebensbedrohlich sind — deutlich verschlechtert hat, weil Einsatzkräfte auf Anrufe
nahe der Acht-Minuten-Grenze priorisiert werden statt auf klinische Dringlichkeit. Der einzelne KPI
erzählte eine falsche Geschichte; der gepaarte KPI erzählte die wahre.

## Bezug zur Softwareentwicklung

Ingenieurinnen und Ingenieure, die Leistungsdashboards für die Regierung bauen, gestalten
funktional die Anreiz-API der Organisation. Praktische Implikationen: instrumentieren Sie den
*Nenner* ebenso rigoros wie den Zähler (ein als bloßer Prozentsatz berichteter KPI lädt zu
Nenner-Manipulation ein — siehe [Kosten pro Transaktion](../kosten-pro-transaktion/) für dieselbe
Falle bei digitalen Diensten); bauen Sie Gegenkennzahlen in dasselbe Dashboard ein, statt in einen
separaten Bericht, den niemand liest, damit Manipulation am Entscheidungspunkt sichtbar ist; und
versionieren Sie die KPI-Definition, denn eine stillschweigende Neudefinition (Ändern dessen, was
als "Anruf", "Fall" oder "Abschluss" zählt) entspricht funktional einer Änderung des Ziels ohne
Ankündigung. Eine [Scorecard für öffentlichen Wert](../scorecard-für-öffentlichen-wert/) ist eine strukturierte
Möglichkeit, zu verhindern, dass ein einzelner KPI isoliert gelesen wird, und
[Ergebnisorientierte Rechenschaftspflicht](../ergebnisorientierte-rechenschaftspflicht/) ist die Disziplin,
bevölkerungsweite KPIs zu wählen, die ein einzelnes Team nicht einseitig verzerren kann.

## Fallstricke

- **Die leicht zu erhebende Kennzahl statt der bedeutsamen wählen**: Anrufannahmezeit ist trivial
  zu protokollieren; ob der Anruf das Problem der Bürgerin oder des Bürgers gelöst hat, ist es
  nicht — aber nur Letzteres ist das Ergebnis. Widerstehen Sie dem Standardgriff zu dem, was das
  System ohnehin ausgibt.
- **Keine Gegenkennzahl**: Jeder an Geld oder Ruf gekoppelte KPI wird am Rand manipuliert; liefern
  Sie ihn mit einer gepaarten Kennzahl, die den wahrscheinlichen Manipulationsvektor erfasst, bevor
  Sie ihn veröffentlichen.
- **Die Kennzahl ohne Änderungsprotokoll neu definieren**: "eingegangene Anrufe" gegen "beantwortete
  Anrufe" auszutauschen, um einen Trend zu schönen, zerstört die Glaubwürdigkeit der Zeitreihe in
  dem Moment, in dem es entdeckt wird — veröffentlichen Sie stets ein Änderungsprotokoll der
  Definitionen neben den Zahlen.
- **Aktivität mit Ergebnis verwechseln**: abgeschlossene Inspektionen zu zählen ist ein Output; in
  Compliance gebrachte Betriebsstätten zu zählen kommt dem Ergebnis näher (siehe
  [Ergebnisse vs. Leistungen](../ergebnisse-vs-leistungen/)).

## Quellen

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
