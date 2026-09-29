# Unit-Cost-Datenbanken

Eine Unit-Cost-Datenbank ist eine Bibliothek vorrecherchierter, evidenzbasierter finanzieller
Stellvertreterwerte für soziale Ergebnisse — der Wert des Übergangs von Arbeitslosigkeit in
Beschäftigung, reduzierter Einsamkeit, eines stabilen Mietverhältnisses —, die es Praktizierenden
erlauben, ein Ergebnis zu monetarisieren, ohne jedes Mal eine maßgeschneiderte Bewertungsstudie in
Auftrag zu geben. Sie existieren, damit eine kleine Wohltätigkeitsorganisation, die einen
Förderantrag schreibt, dieselbe Sorgfalt anwenden kann wie eine gut ausgestattete Beratungsfirma,
indem sie einen bereits von jemand anderem abgeleiteten und veröffentlichten Stellvertreterwert
wiederverwendet.

## Warum das wichtig ist

HACTs UK Social Value Bank, entwickelt mit dem Ökonomen Daniel Fujiwara unter Verwendung von
Methoden der Wohlfahrtsbewertung, und Global Value Exchange, eine offene, crowdgesourcte Datenbank
finanzieller Stellvertreterwerte, sind die zwei am weitesten verbreiteten im britischen dritten und
öffentlichen Sektor. Beide existieren, weil die zugrunde liegende Bewertungsarbeit —
[Wohlfahrtsbewertung](../wellbeing-valuation/) und [Präferenzangabe-Bewertung](../stated-preference-valuation/)
— teuer, methodisch anspruchsvoll und langsam ist, wenn sie für jedes Projekt von Grund auf
durchgeführt wird. Eine geteilte, veröffentlichte Stellvertreterwert-Bibliothek verwandelt eine sonst
mehrmonatige Forschungsübung in ein Nachschlagen — genau deshalb sind sie sowohl für Berechnungen der
[sozialen Kapitalrendite](../social-return-on-investment/) als auch für Angebotsbewertungen nach dem
[Gesetz über sozialen Wert](../social-value-act/) wichtig: Ohne sie wäre rigorose Monetarisierung nur
für Organisationen erschwinglich, die groß genug sind, um eigene Studien in Auftrag zu geben.

## Die Berechnung

Eine Unit-Cost-Datenbank berechnet selbst nichts; sie liefert einen Eingabewert für eine an anderer
Stelle durchgeführte Berechnung:

```
Finanzieller Stellvertreterwert = Marktpreis, ODER Schattenpreis, ODER
                                   Wohlfahrtsbewertung, ODER
                                   Präferenzangabe-Wert
                                   für eine definierte Einheit der
                                   Ergebnisveränderung (z. B. "pro Person,
                                   die von Arbeitslosigkeit in
                                   Beschäftigung übergeht, pro Jahr")

Angewendeter Wert = Anzahl erreichter Ergebnisse × Stellvertreterwert
                     pro Einheit
```

Siehe [Schattenpreisbildung](../shadow-pricing/) dazu, wie ein Stellvertreterwert konstruiert wird,
wenn kein Marktpreis existiert, und [soziale Kapitalrendite](../social-return-on-investment/) dazu,
wie der angewendete Wert dann nach Mitnahmeeffekt- und Zurechnungsanpassungen in ein Verhältnis
einfließt.

## Beispielrechnung

**Wohltätigkeitsorganisation (SROI eines Freundschaftsvermittlungsdiensts)**: Ein Eintrag in einer
Unit-Cost-Datenbank für "reduzierte Einsamkeit" gibt einen illustrativen Stellvertreterwert von
1.100 £ pro Person pro Jahr an. Angewendet auf 80 Begünstigte: 80 × 1.100 £ = 88.000 £ Bruttowert.
Wenn dieselbe Datenbank auch einen Stellvertreterwert für "verbessertes psychisches Wohlbefinden"
hat, der sich auf ein überlappendes Wohlfahrtserhebungselement stützt, würde das Stapeln beider
Stellvertreterwerte für dieselben 80 Personen einen Teil derselben zugrunde liegenden Veränderung
doppelt zählen — die Datenbank liefert die Zahl, aber diese Überlappung zu vermeiden, ist Aufgabe
der analysierenden Person.

**Kommunalverwaltung (SROI eines Job-Clubs)**: Ein Eintrag in einer Unit-Cost-Datenbank für "Übergang
von Arbeitslosigkeit in dauerhafte Beschäftigung" wird auf 45 Teilnehmende angewendet, mit einem
illustrativen Stellvertreterwert von 8.500 £ pro Person pro Jahr: 45 × 8.500 £ = 382.500 £
Bruttowert, vor den in [sozialer Kapitalrendite](../social-return-on-investment/) gezeigten
Mitnahmeeffekt- und Zurechnungsanpassungen.

## Bezug zur Softwareentwicklung

Teams, die Berichtswerkzeuge für Wohltätigkeitsorganisationen oder Auftraggeber bauen, profitieren
von einem internen "Ergebniskatalog" — einer Tabelle, die jedes Ergebnis, das ein Produkt oder ein
Dienst plausibel beanspruchen kann, auf einen benannten Stellvertreterwert, seine Quelldatenbank,
sein Veröffentlichungsdatum und eine Versionskennung abbildet —, damit verschiedene Teams innerhalb
einer Organisation nicht jeweils leicht unterschiedliche Werte für dasselbe Ergebnis wählen. Die
offenen Daten von Global Value Exchange hinter einem Nachschlagedienst zu kapseln, wobei Quelle und
Datum stets neben der Zahl angezeigt werden, hält den Stellvertreterwert prüfbar, statt eine
magische Zahl in einer Tabelle zu vergraben. Siehe [soziale Kapitalrendite](../social-return-on-investment/)
und [Gesetz über sozialen Wert](../social-value-act/) für die beiden Hauptorte, an denen diese
Stellvertreterwerte verwendet werden.

## Fallstricke

- **Stellvertreterwerte als präzise behandeln.** Die meisten veröffentlichten Stellvertreterwerte
  sind modellierte Durchschnitte aus Wohlfahrtsbewertungsstudien mit breiten Konfidenzintervallen;
  einen auf das Pfund genau zu zitieren, überzeichnet die Präzision, die die zugrunde liegende
  Forschung stützt.
- **Überlappende Stellvertreterwerte doppelt zählen.** Stellvertreterwerte zu kombinieren (z. B.
  "reduzierte Einsamkeit" und "verbessertes psychisches Wohlbefinden"), die aus überlappenden
  Erhebungskonstrukten abgeleitet sind, bewertet dieselbe zugrunde liegende Veränderung zweimal.
- **Einen aus dem Kontext gerissenen Stellvertreterwert unangepasst verwenden.** Ein
  Stellvertreterwert, kalibriert für eine nationale Population und ein Jahr, anderswo ohne
  Inflations- oder Kontextanpassung angewendet, stellt den Wert stillschweigend falsch dar.
- **Herkunft nicht prüfen.** Global Value Exchange ist offen und crowdgesourct, sodass die
  Eintragsqualität je nach Beitragender variiert; prüfen Sie die zugrunde liegende Quelle, bevor Sie
  eine Zahl in einem Förderantrag oder einer Beschaffungseinreichung zitieren.

## Quellen

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
