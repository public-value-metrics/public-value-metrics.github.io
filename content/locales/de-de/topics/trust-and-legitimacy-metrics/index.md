# Vertrauens- und Legitimitätskennzahlen

Legitimität und Unterstützung ist eine der drei Seiten von Mark Moores "strategischem Dreieck" in
*Creating Public Value* (1995) — neben dem öffentlichen Wert selbst und der operativen Kapazität —,
und sie ist die Seite, die am häufigsten unmessen bleibt, weil Legitimität anders als ein Budget
oder eine Outputzahl keine offensichtliche einzelne Zahl hat. Vertrauens- und Legitimitätskennzahlen
sind die Familie von Stellvertretermaßen, die Regierungen nutzen, um diese Lücke zu füllen:
institutionelle Vertrauenserhebungen, Vertrauensbewertungen durch Aufsichtsgremien,
Beschwerde- und Widerspruchsdaten sowie politische/legislative Unterstützungsindikatoren.

## Warum das wichtig ist

Moores Argument ist, dass eine öffentliche Führungskraft, die echten Wert liefert, aber politische
und öffentliche Legitimität verliert, letztlich das legitimierende Umfeld verliert, das nötig ist,
um weiterhin zu liefern — Finanzierung wird gekürzt, Mandate werden verengt, und der Dienst wird
ausgehungert, unabhängig davon, wie gut seine Ergebnisse sind. Legitimität ist daher kein
PR-Nachgedanke, der an eine Lieferungs-Scorecard angeflanscht wird; sie ist ein tragender Input dafür,
ob die Mission überhaupt fortbestehen kann — weshalb sie in einer [Scorecard für öffentlichen Wert](../public-value-scorecard/)
als gleichrangige Perspektive steht, nicht als Fußnote. Das "Trust in Government"-Erhebungsprogramm
der OECD ist der führende länderübergreifende Versuch, dies zu quantifizieren: Es verfolgt den
Anteil der Bürgerinnen und Bürger über OECD-Mitgliedstaaten hinweg, die angeben, Vertrauen in ihre
nationale Regierung zu haben, und seine Langzeitdaten zeigen, dass Vertrauen hochgradig empfindlich
gegenüber Schocks ist — sowohl die Finanzkrise 2008 als auch die COVID-19-Pandemie erzeugten scharfe
Ausschläge auf nationaler Ebene, oft gefolgt von nur teilweiser Erholung, wobei die Analyse der OECD
durchgängig feststellt, dass wahrgenommene *Kompetenz* (liefert die Regierung, was sie
verspricht) und wahrgenommene *Fairness/Integrität* (wird die Regierung als frei von Korruption
oder Günstlingswirtschaft wahrgenommen) die zwei stärksten Treiber der Vertrauenszahl sind,
verschieden von der Zufriedenheit mit einer einzelnen Transaktion. Regierungen versuchen zunehmend
auch, Legitimität auf granularerer Ebene operationalisierbar zu machen — die unabhängigen
Regulierungs- und Aufsichtsbehörden des Vereinigten Königreichs (das National Audit Office, der
Parliamentary and Health Service Ombudsman, sektorspezifische Regulierer wie Ofsted und die Care
Quality Commission) fungieren als institutionalisierte Legitimitätsprüfungen und übersetzen "vertraut
die Öffentlichkeit diesem Dienst noch" in prüfbare Bewertungen.

## Die Berechnung

Vertrauen und Legitimität sind ein rahmenwerkförmiges Thema, dessen nutzbare quantitative
Stellvertreterwerte sind:

```
Institutioneller Vertrauensindex (OECD-Stil)
  = % der Befragten, die mit "ja" auf eine Frage zum Vertrauen in die
    Regierung antworten, im Zeitverlauf verfolgt, aufgeschlüsselt nach
    demografischer Gruppe

Legitimitäts-Stellvertreterset (keine einzelne Zahl ersetzt das
Konstrukt):
  - bestätigte Beschwerden pro 1.000 Dienstnutzende (Ombudsmann- oder
    interne Beschwerdedaten)
  - Erfolgsquote gerichtlicher Überprüfung/Widersprüche gegen
    Entscheidungen der Stelle
  - Bewertung durch unabhängige Regulierungs-/Aufsichtsbehörde (z. B.
    Bänder von "herausragend" bis "unzureichend")
  - Vertrauensvoten von Parlaments-/Aufsichtsausschüssen oder Häufigkeit
    kritischer Berichte
  - Volumen von Informationsfreiheitsanfragen und Offenlegungs-/
    Ablehnungsrate, als Stellvertreter für wahrgenommene Transparenz

Legitimität wird bestätigt, nicht berechnet: eine vertretbare
Legitimitätsbewertung trianguliert mehrere der obigen, statt sich auf
einen einzelnen Stellvertreterwert zu verlassen.
```

## Beispielrechnung

**Nationale Steuerbehörde**: Legitimitätstriangulation für einen jährlichen Bericht zum
öffentlichen Wert.

```
OECD-artiger Vertrauens-Stellvertreterwert (behördenspezifische
Vertrauenserhebung):
  58 % der Befragten sagen, sie vertrauen der Behörde, "mich fair zu
  behandeln" (gegenüber 64 % zwei Jahre zuvor)

Beschwerdedaten:
  Bestätigte Beschwerden: 4,2 pro 1.000 Steuerzahlerinteraktionen
  (gegenüber 3,1 pro 1.000)

Ombudsmann-Überweisungen:
  Überweisungen an das unabhängige Adjudicator's Office: 1.850 im
  Jahr, davon 61 % ganz oder teilweise gegen die Behörde entschieden
  (gegenüber 48 % im Vorjahr)

Über alle drei gelesen: Vertrauen sinkt, bestätigte Beschwerden
steigen, und unabhängige Ombudsmann-Befunde entscheiden zunehmend
gegen die Behörde — drei unabhängige Signale, die in dieselbe Richtung
konvergieren, was dies zu einem glaubwürdigen Legitimitätsbefund macht,
nicht zu Rauschen in einer einzelnen Reihe.
```

Eine einzelne dieser Zahlen, die sich bewegt, wäre schwache Evidenz; drei unabhängige Maße, die sich
über denselben Zeitraum gemeinsam bewegen, sind das Muster, das eine Legitimitätsbehauptung
vertretbar macht.

## Bezug zur Softwareentwicklung

Legitimitätskennzahlen werden selten vom Dashboard eines einzelnen Teams produziert, was selbst die
Designlektion ist: Bauen Sie Berichtspipelines, die Daten aus unabhängigen externen Quellen
(Ombudsmann-Fallsystemen, Regulierer-Bewertungs-Feeds, Erhebungsanbietern) aufnehmen und abgleichen
können, statt Legitimitätsberichterstattung als rein interne Kennzahl zu architektieren, weil
intern stammende Legitimitätsbehauptungen ("wir bewerten uns selbst als vertrauenswürdig") wenig
Beweiskraft tragen — dasselbe Unabhängigkeitsproblem, das für die Legitimitätsperspektive in einer
[Scorecard für öffentlichen Wert](../public-value-scorecard/) festgestellt wurde. Beschwerde- und
Widerspruchsdaten-Pipelines verdienen dieselbe Datenqualitätsstrenge wie jede Ergebnispipeline, die
[Bezahlung-nach-Ergebnis](../payment-by-results-and-social-impact-bonds/)-Verträge speist, da ein
unter-berichteter oder schlecht kategorisierter Beschwerdedatensatz ein Legitimitätsproblem
stillschweigend unterschätzt, bevor es ein Jahr später in einer Vertrauenserhebung sichtbar wird.
Siehe [Metriken zur Bürgerzufriedenheit](../citizen-satisfaction-metrics/) für das Gegenstück auf
Transaktionsebene zu diesem institutionellen Maß, und [Öffentlicher Wert](../public-value/) für
Moores vollständiges strategisches-Dreieck-Rahmenwerk, zu dem diese Seite gehört.

## Fallstricke

- **Zufriedenheit als Stellvertreter für Legitimität behandeln**: Eine Bürgerin oder ein Bürger kann
  mit der Schnittstelle einer einzelnen Transaktion zufrieden sein, während sie oder er der
  Institution insgesamt misstraut (oder umgekehrt) — siehe [Metriken zur Bürgerzufriedenheit](../citizen-satisfaction-metrics/)
  dazu, warum beides getrennt berichtet werden muss.
- **Sich auf eine einzelne selbstberichtete Kennzahl verlassen**: Eine intern durchgeführte
  Vertrauenserhebung ohne unabhängige Bestätigung (Ombudsmann-Daten, Regulierer-Bewertungen) ist
  leicht als Selbstbeurteilung abzutun; triangulieren Sie.
- **Demografische Aufschlüsselung ignorieren**: Aggregierte nationale Vertrauenszahlen können stark
  divergierende Legitimität bei bestimmten Gruppen (nach Alter, Ethnizität, Einkommen oder Region)
  verbergen — die eigenen Trust-in-Government-Veröffentlichungen der OECD schlüsseln genau aus
  diesem Grund auf.
- **Einen einzelnen schockgetriebenen Einbruch als dauerhaften Trend lesen**: Vertrauenszahlen
  bewegen sich um Krisen (Finanzcrashs, Pandemien, aufsehenerregende Skandale) scharf und erholen
  sich teilweise; ein einzelner Datenpunkt nach einem Schock sollte nicht ohne weitere Daten zu
  einem langfristigen Rückgang extrapoliert werden.

## Quellen

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
