# Digitale Inklusion

Digitale Inklusion ist die Disziplin sicherzustellen, dass "digital by default" nicht zu "nur
digital" wird — dass öffentliche Dienste, die um den billigsten Kanal herum gestaltet sind, immer
noch für die Bürgerinnen und Bürger funktionieren, die ihn nicht unbegleitet nutzen können oder
wollen. GDS prägte den konkreten Liefermechanismus, "unterstütztes Digital", als verpflichtende
Anforderung für jeden digitalen Regierungsdienst, kein optionales Extra.

## Warum das wichtig ist

Die Government Digital Strategy von 2012 formulierte den Anspruch klar: Digitale Dienste sollten
digital-by-default gebaut werden, aber die Strategie selbst räumte ein, dass etwa 10 % der
britischen Erwachsenen sie ohne Hilfe nicht nutzen könnten, und verpflichtete Ministerien,
unterstütztes Digital anzubieten — einen menschlich vermittelten Weg, telefonisch, persönlich oder
über eine Mittlerstelle — als Teil des Dienstes, nicht als separaten, später angeflanschten
Ausweichkanal. Diese Verpflichtung ist heute Punkt 5 des [Digitalen Servicestandards](../digitaler-servicestandard/),
"sicherstellen, dass jeder den Dienst nutzen kann". Das Ausmaß fortbestehenden Ausschlusses wird
vom jährlichen UK Consumer Digital Index der Lloyds Banking Group verfolgt: Die Ausgabe 2024 fand,
dass etwa 1,6 Millionen Menschen im Vereinigten Königreich offline bleiben, und dass diese Gruppe
stark zu Menschen im Alter von 70–79 Jahren tendiert, zu denen mit einem Einkommen unter 35.000 £
und zu Pensionierten oder Arbeitslosen — genau die Population, die am wahrscheinlichsten von den
neu gestalteten öffentlichen Diensten abhängig ist. Derselbe Bericht fand, dass nur 48 % der
britischen Erwerbsbevölkerung alle 20 Aufgaben des Essential-Digital-Skills-Rahmenwerks abschließen
konnten, was bedeutet, dass Ausschluss keine binäre Konnektivitätsfrage ist, sondern ein Spektrum
aus Fähigkeit, Zuversicht und Vertrauen, das eine einfache "hat Breitband"-Kennzahl völlig
verfehlt.

## Die Berechnung

Digitale Inklusion ist eher ein Rahmenwerk und eine Fairnessprüfung als eine einzelne Formel, aber
sie fügt sich über [Verteilungsgewichtung](../verteilungsgewichtung/) mit quantitativer
Wertbewertung zusammen:

```
Naiver Kanalverlagerungswert:
  Wert = verlagertes Volumen × (Kosten_alt − Kosten_digital) [siehe
         channel-shift-savings]

Inklusionsbereinigter Wert:
  Wert = (verlagertes Volumen × ungewichtete Einsparung)
       − (ausgeschlossene Nutzende × Kosten der unterstützten
          digitalen Bereitstellung)
       − (Verteilungsgewichtungs-Anpassung für Schaden bei
          ausgeschlossenen Gruppen, die Zugang verlieren oder
          minderwertige Servicequalität erfahren)

Unterstütztes Digital ist nicht die Restkosten des Scheiterns — es
ist ein gestalteter Kanal mit eigenen
[Kosten-pro-Transaktion](../kosten-pro-transaktion/), typischerweise
weit höher pro Transaktion als digitale Selbstbedienung, aber meist
immer noch günstiger als der Altkanal, den er teilweise ersetzt.
```

## Beispielrechnung

**Nationaler Leistungsdienst im Universal-Credit-Stil**: 2,5 Millionen Anträge/Jahr, geschätzt, dass
10 % der Antragstellenden unterstütztes Digital benötigen, gemäß der Planungsannahme der
Government Digital Strategy.

```
Ausgeschlossene/unterstützte digitale Kohorte = 2.500.000 × 10 % =
250.000 Anträge/Jahr

Kosten des unterstützten digitalen Kanals (Telefon + persönliche
Unterstützung, personell für Schutzbedürftigkeit und Komplexität
ausgestattet) ≈ 9,50 £/Antrag
  = 250.000 × 9,50 £ = 2.375.000 £/Jahr

Selbstbedienungs-Digitalkosten für die übrigen 90 % ≈ 0,40 £/Antrag
  = 2.250.000 × 0,40 £ = 900.000 £/Jahr

Vermischte Kosten pro Transaktion = (2.375.000 + 900.000) / 2.500.000
  = 1,31 £/Antrag

Ein Design, das unterstütztes Digital überspringt, um eine niedrigere
Schlagzeilen-Kosten-pro-Transaktion zu erreichen (z. B. 0,40 £
vermischt, unter Ignorierung der 250.000 ausgeschlossenen
Antragstellenden), eliminiert diese 2,375-Mio.-£-Kosten nicht — es
verwandelt sie in nicht in Anspruch genommene Ansprüche, Widersprüche
und nachgelagerte Krisendienst-Nachfrage, die auf einem ganz anderen
Budget landet.
```

## Bezug zur Softwareentwicklung

Unterstütztes Digital ist ein gestalteter Kanal, was bedeutet, dass er Schnittstellen, SLAs und
Instrumentierung hat wie jeder andere: ein telefonbasiertes Sachbearbeiter-Werkzeug, ein
Mittler-Portal für Citizens Advice oder eine Kommunalverwaltung, oder ein persönlicher
Kiosk-Ablauf. Ihn als Nachgedanken zu behandeln — eine Telefonnummer im Kleingedruckten statt
eines von der Discovery an mitgedachten Kanals — ist die häufigste Art, wie Dienste bei der
Bewertung an Punkt 5 des [Digitalen Servicestandards](../digitaler-servicestandard/) scheitern.
Digitale Inklusion ist die Fairnesslinse für jedes andere Thema in diesem Kapitel: Sie begrenzt, wie
aggressiv [Kanalverlagerungs-Einsparungen](../kanalverlagerungs-einsparungen/) realisiert werden können, sie
ist ein Posten, der ehrlich in [Kosten pro Transaktion](../kosten-pro-transaktion/) einbezogen werden
muss, und sie ist die direkte Anwendung von [Verteilungsgewichtung](../verteilungsgewichtung/) auf
einen Kontext digitaler Dienste — eine Einsparung, die überproportional bei Menschen landet, die
bereits digital und wirtschaftlich ausgeschlossen sind, sollte abgewertet werden, nicht als
gleichwertig mit einer über die Bevölkerung gleichmäßig verteilten Einsparung behandelt werden.

## Fallstricke

- **"Digital by default" als "nur digital" gelesen**: die Telefonleitung oder den Schalter zu
  schließen, sobald die digitale Nutzungsrate eine Schwelle überschreitet, ohne zu prüfen, ob die
  verbleibende Kohorte eine wirklich nutzbare Alternative hat.
- **Inklusion an binärer Konnektivität messen**: "hat Breitband" oder "besitzt ein Smartphone" ist
  ein schlechter Stellvertreter für die Fähigkeit, eine bestimmte Transaktion abzuschließen — die
  Essential-Digital-Skills-Lücke (nur 48 % der britischen Erwerbsbevölkerung schließen alle 20
  Aufgaben ab, gemäß Lloyds 2024) zeigt, dass Fähigkeiten und Zuversicht ebenso wichtig sind wie
  Zugang.
- **Unterstütztes Digital als Rundungsfehler kalkulieren**: es als kleine Rückstellungszeile zu
  budgetieren statt als richtigen Kanal mit eigenen [Kosten pro Transaktion](../kosten-pro-transaktion/),
  und dann überrascht zu sein, wenn er beim Start unterfinanziert und unterbesetzt ist.
- **Nur erfolgreiche digitale Vollender befragen**: Zufriedenheits- und Nutzbarkeitsforschung, die
  vollständig dienstintern durchgeführt wird, verfehlt die Menschen, die nie so weit kamen — genau
  die Population, die digitale Inklusionsarbeit schützen soll.

## Quellen

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
