# Kosten pro Transaktion

Kosten pro Transaktion sind die Schlagzeilen-Stückkostenkennzahl für einen digitalen Dienst der
Regierung: Gesamtkosten zur Lieferung eines Kanals, geteilt durch die Anzahl der darüber
abgeschlossenen Transaktionen. Es war die Vorzeigezahl der alten GOV.UK Performance Platform, und
es ist die Zahl, die ein Jahrzehnt "digital by default"-Investition finanzierte — genau deshalb ist
sie auch die am leichtesten manipulierbare Kennzahl.

## Warum das wichtig ist

Der Digital Efficiency Report des Cabinet Office von 2012 fasste den Kanalkostenvergleich in
Begriffen, die haften blieben: Digitale Transaktionen wurden als etwa 20-mal günstiger als
telefonisch und etwa 50-mal günstiger als persönlich befunden, mit illustrativen Zahlen kommunaler
Verwaltungen von etwa 0,15 £ pro Web-Transaktion gegenüber 2,83 £ telefonisch und 8,62 £ persönlich.
Dieser eine Vergleich wurde zur Rechtfertigung für die Neugestaltung der 25 Vorzeigedienste, die in
der Government Digital Strategy genannt wurden, und für jeden ministeriumsspezifischen Business
Case, der seitdem Kanalverlagerungs-Einsparungen zitiert hat. Die Zahl ist als
Größenordnungssignal wirklich nützlich, aber das Verhältnis hängt vollständig davon ab, was auf
jeder Seite gezählt wird: Eine faire Telefonkanal-Kostenrechnung umfasst das Personal des
Callcenters, den Telefonievertrag, Schulung und Standort; eine faire digitale Kostenrechnung
umfasst Hosting, laufende Gehälter des Produktteams, Support-Desk-Zeit für gescheiterte Vorgänge und
den unterstützten digitalen Kanal, den Punkt 5 des [Digitalen Servicestandards](../digital-service-standard/)
verlangt. Genug davon von der digitalen Seite entfernen, und jeder Dienst sieht billig aus.

## Die Berechnung

```
Kosten pro Transaktion = gesamte zugeordnete Kanalkosten /
                          abgeschlossene Transaktionen

Gesamte zugeordnete Kanalkosten sollten enthalten:
  + Hosting und Infrastruktur
  + Produkt-/Technik-/Support-Team-Kosten (amortisiert)
  + Inhalts- und Servicedesign-Kosten (amortisiert)
  + Kosten für unterstützte digitale/barrierefreie Hilfe
  + Fehlbedarfskosten (Nutzende, die digital scheitern und auf
    Telefon ausweichen)
  − einmalige Baukosten werden über die erwartete Dienstlebensdauer
    amortisiert, nicht vollständig im ersten Jahr verbucht

Die verbreitete Buchhaltungstrick:
  "Marginale Kosten pro Transaktion" (nur Hosting, sobald gebaut)
  werden zitiert, als wären sie "durchschnittliche Kosten pro
  Transaktion" (Gesamtkosten einschließlich des Teams, das weiterhin
  baut und betreibt). Beide können sich für einen Dienst mit großem,
  aktivem Lieferteam um das 10-Fache oder mehr unterscheiden.
```

## Beispielrechnung

**Dienst zur Verlängerung der Kfz-Steuer**: 4 Millionen Transaktionen/Jahr.

```
Nur-marginale Zahl (der Trick):
  Nur Hosting + Zahlungsabwicklung = 180.000 £/Jahr
  Kosten pro Transaktion = 180.000 / 4.000.000 = 0,045 £
  → Schlagzeilenzahl, zitiert in einem Business Case

Vollständig zugeordnete Zahl (die ehrliche):
  Hosting + Zahlung                     180.000 £
  Produkt-/Technikteam (8 VZÄ)          720.000 £
  Support-Desk (gescheiterte/angefragte
    Transaktionen)                       310.000 £
  Unterstützte digitale Telefonleitung   140.000 £
  Gesamt                               1.350.000 £
  Kosten pro Transaktion = 1.350.000 / 4.000.000 = 0,3375 £

Die vollständig zugeordnete Zahl ist immer noch etwa 8-mal günstiger
als der Telefonkanal-Vergleichswert von 2,83 £ aus dem Digital
Efficiency Report — eine echte und vertretbare Einsparung —, aber
7,5-mal höher als die in der abgekürzten Version zitierte
Nur-marginale Zahl. Beide Zahlen sind "wahr"; nur eine ist mit den
Telefonkanalkosten vergleichbar, denen sie gegenübergestellt wird.
```

## Bezug zur Softwareentwicklung

Kosten pro Transaktion ist der Punkt, an dem Architekturentscheidungen zu einer Finanzzahl werden:
Ein Dienst, der sauber automatisch skaliert und wenig manuelles Eingreifen braucht, senkt diese
Zahl im Zeitverlauf; einer, der durch verwirrende Fehlerzustände hohes Support-Ticket-Volumen
erzeugt, treibt sie hoch, unabhängig von der Hosting-Effizienz. Es ist die natürliche Begleitkennzahl
zu Punkt 10 des [Digitalen Servicestandards](../digital-service-standard/) ("definieren, wie Erfolg
aussieht, und Leistungsdaten veröffentlichen") und zu [Servicestandards und Transaktionskennzahlen](../service-standards-and-transaction-metrics/),
das das vollständigere KPI-Set darlegt, in das diese Zahl eingebettet ist. Sie fließt auch direkt in
Berechnungen der [Kanalverlagerungs-Einsparungen](../channel-shift-savings/) ein und sollte mit
[Gesamtbetriebskosten in der öffentlichen IT](../total-cost-of-ownership-in-government-it/)
abgeglichen werden, damit Plattform- und Shared-Service-Gemeinkosten nicht stillschweigend
fallengelassen werden.

## Fallstricke

- **Marginale Kosten als Durchschnittskosten verkleidet**: Nur die Hosting-Kosten zu zitieren,
  sobald ein Dienst gebaut ist, unter Auslassung des laufenden Teams, das ihn wartet, iteriert und
  unterstützt — siehe das Beispiel oben.
- **Kosten für unterstützte digitale Hilfe ausschließen**: Ein Kanal ist nicht "digital by
  default"-konform, und seine wahren Kosten sind nicht erfasst, wenn der von
  [digitaler Inklusion](../digital-inclusion/) verlangte Telefon-/Papier-Ausweichkanal separat
  kalkuliert oder ignoriert wird.
- **Fehlbedarf ignorieren**: Transaktionen, die digital beginnen und scheitern und ohnehin einen
  Telefonanruf oder ein Papierformular erzeugen, sind Kosten des digitalen Kanals, nicht des
  Kanals, der das Scheitern auffängt.
- **Transaktionen unterschiedlicher Komplexität über Kanäle hinweg vergleichen**: Telefonanrufe
  behandeln überproportional die schwierigen Fälle (mehrere Angehörige, Fehlerkorrektur,
  schutzbedürftige Antragstellende); durchschnittliche Telefonkosten mit durchschnittlichen
  digitalen Kosten zu vergleichen, überzeichnet das Verhältnis, sofern der Transaktionsmix nicht
  angepasst ist.

## Quellen

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
