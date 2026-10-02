# Kanalverlagerungs-Einsparungen

Kanalverlagerungs-Einsparungen sind die prognostizierte Kostensenkung durch die Verlagerung von
Transaktionsvolumen aus teuren Kanälen — Telefon, persönliche Schalter, Papierpost — in billige
digitale Selbstbedienung. Sie sind der finanzielle Motor hinter "digital by default", und auch der
Posten im Business Case, der am wahrscheinlichsten falsch ist, weil die Annahme, auf der er beruht
— dass Offline-Kanäle schrumpfen, wenn die digitale Nutzungsrate steigt — nur manchmal zutrifft.

## Warum das wichtig ist

Die Rechnung sieht mit den [Kosten-pro-Transaktion](../cost-per-transaction/)-Zahlen aus dem Digital
Efficiency Report unwiderlegbar aus: Verlagern Sie eine Million Transaktionen von einem persönlichen
Besuch für 8,62 £ zu einer digitalen für 0,15 £, und die Einsparung liegt bei über 8 Millionen £.
Aber eine Einsparung wird nur zu freigesetztem, umverteilbarem Bargeld, wenn die *feste Kapazität*
des schrumpfenden Kanals tatsächlich abgebaut wird — die Callcenter-Plätze, das Schalterpersonal,
die Telefonvertragsminuten —, und Programme zur digitalen Transformation von Kommunalverwaltungen
haben wiederholt festgestellt, dass das Gesamtkontaktvolumen nicht im Gleichschritt mit der
digitalen Nutzungsrate fällt. Forschung von Programmen zur digitalen Transformation von
Kommunalverwaltungen und Institutionen wie Socitm und der Local Government Association hat ein
wiederkehrendes Muster dokumentiert: Digitale Kanäle ziehen echten neuen Kontakt an (Bürgerinnen
und Bürger, die sonst nicht angerufen oder besucht hätten, tun es jetzt, weil es einfacher ist), und
ein bedeutsamer Anteil "digitaler" Transaktionen scheitert auf halbem Weg und erzeugt ohnehin einen
Telefonanruf — sodass das Telefonvolumen weit weniger fällt, als der Prozentsatz der digitalen
Nutzungsrate nahelegen würde, manchmal absolut gesehen gar nicht fällt, selbst wenn sein *Anteil* am
Gesamtkontakt sinkt.

## Die Berechnung

```
Brutto-Kanalverlagerungs-Einsparung = verlagertes Volumen ×
                                       (Kosten_alter_Kanal −
                                       Kosten_digital)

Netto-(realisierte) Einsparung = Brutto-Einsparung
                       − durch den einfacheren Kanal erzeugte
                         neue/Schattennachfrage
                       − Fehlbedarfskosten (digitale Fehlversuche,
                         die trotzdem einen Telefonanruf oder
                         Schalterbesuch erzeugen)
                       − Kosten nicht abgebauter fester Kapazität (ein
                         Callcenter kann Personal nur in diskreten
                         Einheiten abbauen; ein Volumenrückgang von
                         15 % erlaubt selten, 15 % der Personalstärke
                         zu kürzen)

Realisierungsschwelle: Einsparungen sind erst verbuchbar, sobald das
Volumen unter das Niveau fällt, das der alte Kanal bei seiner nächst-
kleineren diskreten Kapazitätsstufe personell abdecken kann (z. B.
Wegfall einer ganzen Schicht, eines ganzen Schalters, einer
vertraglich gebundenen Personalstärke-Band)
```

## Beispielrechnung

**Dienst zur Verlängerung des Behindertenparkausweises einer Grafschaftsverwaltung**: 60.000
Verlängerungen/Jahr, zuvor 100 % Telefon/Papier zu 6,40 £ pro Transaktion. Ein neuer digitaler
Dienst startet und erreicht innerhalb eines Jahres 65 % digitale Nutzungsrate, zu 0,30 £ pro
digitaler Transaktion.

```
Naive (Brutto-)Einsparungsberechnung:
  39.000 verlagert × (6,40 £ − 0,30 £) = 237.900 £/Jahr

Was tatsächlich geschah, gemäß den Daten des kommunalen
Kontaktzentrums:
  Telefonvolumen fiel von 60.000/Jahr auf 46.000/Jahr (−23 %, nicht
  −65 %), weil: 9.000 digitale Vorgänge scheiterten und einen
  Folgeanruf erzeugten (Fehlbedarf-Abfluss), und 4.000 Menschen, die
  zuvor überhaupt nicht verlängerten, tun es jetzt, nachdem sie es
  online einfach fanden (Schattennachfrage — eine echte
  Zugangsverbesserung, aber keine Einsparung)

  Das Telefonkontaktzentrum ist in Bändern von 8.000 Anrufen/VZÄ
  personell ausgestattet; ein Rückgang um 14.000 Anrufe (60.000 →
  46.000) setzt 1,75 VZÄ frei, in der Praxis abgerundet auf 1 VZÄ
  tatsächlich umverteilt = 34.000 £/Jahr

Realisierte Einsparung = 34.000 £/Jahr plus vermiedene Bau-/
  Betriebskosten des digitalen Kanals für 39.000 Transaktionen ≈
  34.000 £ + (39.000 × bereits gezählte digitale Kosten von 0,30 £)
  — ein Bruchteil der Schlagzeilenzahl von 237.900 £, obwohl der
  Dienst für Nutzende immer noch eindeutig besser ist.
```

## Bezug zur Softwareentwicklung

Die technische Lektion ist, dass Kanalverlagerungs-Einsparungen durch *operative* Entscheidungen
realisiert werden (Personaleinsatzplanung, Abbau, Vertragsneuverhandlung), nicht durch die
Software-Lieferung — ein Team kann jeden Punkt des [Digitalen Servicestandards](../digital-service-standard/)
erfüllen und trotzdem null Nettoeinsparung liefern, wenn niemand die feste Kapazität des alten
Kanals abbaut. Fehlbedarf zu instrumentieren (wo in der digitalen Reise Nutzende abbrechen und was
sie als Nächstes tun) ist ein lösbares Trichteranalytik-Problem und die Sache mit dem größten Hebel,
die ein technisches Team tun kann, um den Einsparungsfall zu schützen; es ist auch die direkte
Verbindung zu [Kosten pro Transaktion](../cost-per-transaction/), die Fehlbedarf still aufbläht.
Siehe [Nutzenrealisierung](../benefits-realization/) für die breitere Disziplin zu prüfen, ob die
Einsparungen eines Business Case tatsächlich ankommen, und [digitale Inklusion](../digital-inclusion/)
dazu, warum der Offline-Kanal meist nicht vollständig abgebaut werden kann und sollte.

## Fallstricke

- **1:1-Kanalsubstitution annehmen**: digitale Nutzungsrate als direkten Abzug vom Telefon-/
  Schaltervolumen modellieren, unter Ignorierung von Schattennachfrage und Fehlbedarf-Abfluss, die
  in der Kanalverlagerungsforschung von Kommunalverwaltungen dokumentiert sind.
- **Brutto-Einsparungen vor Abbau verbuchen**: die Einsparung im Business Case in dem Jahr zählen,
  in dem die Nutzungsrate steigt, nicht in dem Jahr (falls überhaupt), in dem die Kapazität des
  alten Kanals tatsächlich gekürzt wird.
- **Die Stufenfunktions-Natur von Personalkosten ignorieren**: Ein Volumenrückgang um 20 % wandelt
  sich selten in einen Kostenrückgang um 20 %, weil Kontaktzentren und Schalter in diskreten
  Bändern personell ausgestattet sind, nicht kontinuierlich.
- **Schattennachfrage als Verschwendung behandeln**: neuer Kontakt von zuvor ausgeschlossenen oder
  zuvor abgeschreckten Nutzenden ist ein echter Zuwachs an [öffentlichem Wert](../public-value/),
  kein Modellierungsfehler — er sollte als Zugangsergebnis berichtet werden, nicht als Rauschen
  weggerechnet.

## Quellen

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
