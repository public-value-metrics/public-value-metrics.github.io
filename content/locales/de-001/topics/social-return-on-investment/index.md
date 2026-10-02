# Soziale Kapitalrendite (Social Return on Investment, SROI)

Soziale Kapitalrendite ist ein Rahmenwerk zur Messung, Monetarisierung und Bilanzierung eines
breiten Wertbegriffs — sozial, ökologisch und wirtschaftlich — und dessen Ausdruck als Verhältnis
zu den eingesetzten Ressourcen, etwa "1,44 £ sozialer Wert für jedes investierte £". Es wurde
entworfen, um die Logik der Finanzbuchhaltung auf Ergebnisse auszuweiten, die Märkte nicht bepreisen,
ohne die Disziplin der Buchhaltung zu verlieren: Jede Zahl in einem SROI muss zu einem von
Stakeholdern definierten Ergebnis, einer Evidenzgrundlage und einer ausdrücklichen Anpassung für das,
was ohnehin passiert wäre, zurückverfolgbar sein.

## Warum das wichtig ist

SROI wird von Social Value UK und Social Value International gepflegt, den Nachfolgeorganisationen
des SROI Network, deren "A Guide to Social Return on Investment" (2012) weiterhin die
Referenzmethodik ist. Das Rahmenwerk beruht auf sieben Prinzipien — Stakeholder einbeziehen,
verstehen, was sich verändert, die Dinge bewerten, die zählen, nur Wesentliches einbeziehen, nicht
überzeichnen, transparent sein und das Ergebnis verifizieren —, und es ist Prinzip fünf, "nicht
überzeichnen", an dem die meisten SROI-Berichte in der Praxis scheitern. Ein Verhältnis, das durch
Auslassen von Mitnahmeeffekt- und Zurechnungsanpassungen entsteht, ist kein SROI; es ist eine
Marketingzahl im Gewand eines SROI. Ingenieurinnen und Ingenieure, die Berichtswerkzeuge für
Wohltätigkeitsorganisationen, Sozialunternehmen oder Auftraggeber bauen, müssen den Unterschied
kennen, denn das Werkzeug wird die Disziplin entweder erzwingen oder ihre Umgehung leicht machen.

## Die Berechnung

SROI hängt von einer [Theorie des Wandels](../theory-of-change/) ab, um zu bestimmen, welche
Ergebnisse im Geltungsbereich liegen, und drückt sie mittels derselben Rechenschaftskette wie ein
[Wirkungsmodell](../logic-model/) aus:

```
SROI-Verhältnis = Barwert der Ergebnisse / Wert der Inputs

Vorgehen:
 1. Geltungsbereich festlegen und Stakeholder identifizieren, deren
    Ergebnisse gemessen werden
 2. Ergebnisse abbilden (eine mit Stakeholdern belegte Theorie des
    Wandels, nicht angenommen)
 3. Ergebnisse belegen und ihnen einen Wert mittels finanzieller
    Stellvertreter geben
 4. Wirkung feststellen: Bruttowert − Mitnahmeeffekt − Zurechnung −
    Verdrängung, dann Abschwächung anwenden
 5. Den SROI berechnen: Kapitalnettowert der Wirkung ÷ Wert der Inputs
 6. Berichten, nutzen und verankern — das Verhältnis ist ein
    Kommunikationsmittel, nicht der Endpunkt
```

Mitnahmeeffekt, Zurechnung und Verdrängung werden in [Additionalität und Mitnahmeeffekte](../additionality-and-deadweight/)
und [Verdrängung und Zurechnung](../displacement-and-attribution/) behandelt; alle drei existieren,
um die echte [kontrafaktische](../counterfactual-analysis/) Wirkung vom Bruttoergebnis zu isolieren.

## Beispielrechnung

**Beschäftigungsprogramm einer Kommunalverwaltung**: jährliche Inputkosten 250.000 £. Sechzig
Teilnehmende gehen in dauerhafte Beschäftigung über; ein finanzieller Stellvertreter für dieses
Ergebnis (Wohlfahrtsgewinn, reduzierte Abhängigkeit von Sozialleistungen und Steuereinnahmen
kombiniert) beträgt 8.500 £ pro Person im ersten Jahr — siehe [Unit-Cost-Datenbanken](../unit-cost-databases/)
für die Herkunft solcher Stellvertreterwerte.

- Bruttoergebniswert: 60 × 8.500 £ = 510.000 £
- Abzüglich Mitnahmeeffekt (40 % hätten vermutlich auch ohne das Programm Arbeit gefunden):
  510.000 £ × 0,60 = 306.000 £
- Abzüglich Zurechnung (30 % der verbleibenden Veränderung ist auf die Unterstützung anderer
  Stellen zurückzuführen): 306.000 £ × 0,70 = 214.200 £
- Ergebnis in Jahr 2 bei 30 % Abschwächung: 214.200 £ × 0,70 = 149.940 £, diskontiert mit 3,5 %/Jahr
  (siehe [sozialer Diskontsatz](../social-discount-rate/)): 149.940 £ ÷ 1,035 = 144.870 £
- Gesamtbarwert der Wirkung: 214.200 £ + 144.870 £ = 359.070 £
- **SROI-Verhältnis: 359.070 £ ÷ 250.000 £ = 1,44**, berichtet als "1,44 £ sozialer Wert für jedes
  investierte £"

**Wohltätigkeitsorganisation**: Ein Freundschaftsvermittlungsdienst für 60.000 £ reduziert
Einsamkeit bei 80 älteren Menschen, bewertet mit einem Stellvertreterwert von 1.100 £/Person/Jahr.
Bruttowert 88.000 £; nach 35 % Mitnahmeeffekt und 15 % Zurechnung beträgt die Nettowirkung
88.000 £ × 0,65 × 0,85 = 48.620 £, ein SROI-Verhältnis von 0,81 — unterhalb der Gewinnschwelle, was
ein legitimes und nützliches Ergebnis ist, kein Grund, den Bericht nicht zu veröffentlichen.

## Bezug zur Softwareentwicklung

Ein SROI-Rechner, der es Nutzenden erlaubt, Ergebniszahlen und Stellvertreterwerte einzugeben, aber
kein Pflichtfeld für Mitnahmeeffekt, Zurechnung oder eine verknüpfte Theorie des Wandels hat, wird
standardmäßig aufgeblähte Verhältnisse erzeugen, weil das Auslassen von Anpassungen der Weg des
geringsten Widerstands ist. Bauen Sie die Disziplin in das Schema ein: Jede Ergebniszeile sollte auf
eine Stakeholder-Gruppe, eine belegte Menge, einen finanziellen Stellvertreter mit Quelle sowie
nicht optionale Mitnahmeeffekt-/Zurechnungsfelder verweisen. Siehe [Ergebnisse vs. Leistungen](../outcomes-vs-outputs/)
für die Unterscheidung, von der die SROI-Ergebniszuordnung abhängt, und [Wirkungsmodell](../logic-model/)
für die Kette, die das Werkzeug in seinem Datenmodell widerspiegeln sollte.

## Fallstricke

- **Mitnahmeeffekt und Zurechnung auslassen.** Das Schlagzeilenverhältnis ohne diese Anpassungen ist
  eine Brutto-, keine Nettowirkungszahl, und die Prinzipien von Social Value UK verlangen beides
  ausdrücklich.
- **Verhältnisse über Organisationen hinweg vergleichen.** Ein SROI-Verhältnis hängt von im
  Einzelfall getroffenen Entscheidungen zu Geltungsbereich und Stellvertreterwerten ab; ein
  4:1-Verhältnis aus einem Bericht als "besser" als ein 2:1-Verhältnis aus einem anderen zu
  behandeln, ignoriert, dass die Annahmen nicht standardisiert sind wie eine Finanzbuchhaltungskennzahl.
- **Überlappende Stellvertreterwerte doppelt zählen.** Einen Stellvertreterwert für "reduzierte
  Einsamkeit" auf einen für "verbessertes psychisches Wohlbefinden" bei denselben Begünstigten zu
  stapeln, kann eine zugrunde liegende Veränderung doppelt bewerten.
- **Stakeholder-Einbindung auslassen.** Prinzip eins verlangt, dass Ergebnisse mit den betroffenen
  Menschen definiert werden, nicht von der modellbauenden Person angenommen werden.

## Quellen

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
