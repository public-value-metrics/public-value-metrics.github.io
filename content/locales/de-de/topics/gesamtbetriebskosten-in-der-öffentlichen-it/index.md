# Gesamtbetriebskosten (Total Cost of Ownership, TCO) in der öffentlichen IT

Gesamtbetriebskosten sind die vollständigen Lebenszykluskosten eines Systems — Anschaffung plus
jedes Jahr des Betriebs —, auf ein gemeinsames Datum diskontiert. In der öffentlichen IT ist der
verlässlichste einzelne Prognosefehler, Anbieter oder Optionen allein nach Anschaffungspreis zu
vergleichen, obwohl Betrieb und Wartung typischerweise irgendwo zwischen der Hälfte und
vier Fünfteln der Lebenszeitrechnung ausmachen.

## Warum das wichtig ist

HM Treasurys Green Book verlangt, dass der finanzielle Fall in jedem Business Case nach dem
Fünf-Fälle-Modell die gesamten Lebenszykluskosten abdeckt, nicht nur Investitionsausgaben — doch das
National Audit Office hat wiederholt festgestellt, dass Ministerien IT-Investitionen gegen eine
unvollständige oder optimistische Betriebskostenprognose genehmigten, nur um die wahren
Betriebskosten zu entdecken, sobald das System live ist und die Investitionsbudgetzeile
geschlossen wurde. Der Technology Code of Practice des Government Digital Service und des Central
Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) drängt
Ministerien teilweise in Richtung Cloud und Standard-Hosting, weil dies die laufenden Kosten
sichtbar und vergleichbar macht, statt sie in einer einzelnen Investitionsbeschaffungszahl zu
vergraben, die bei Genehmigung attraktiv niedrig aussieht und drei Jahre später kostspielig falsch
ist.

## Die Berechnung

```
TCO = Anschaffungskosten + Σ(t=1..N) jährliche Betriebskosten_t /
      (1+r)^t − Restwert (diskontiert)

r = sozialer Standard-Diskontsatz des HM-Treasury-Green-Book, 3,5 %/
    Jahr (fallender Zeitplan für Horizonte über 30 Jahre)

Betriebskostenkomponenten: Hosting/Lizenzierung, Support und Wartung,
Sicherheits-Patching und Compliance, Personalzeit, geplante
Erneuerung/Migration
```

Siehe [sozialer Diskontsatz](../sozialer-diskontsatz/) dazu, warum der Diskontfaktor über eine
typische 5–10-jährige Systemlebensdauer wichtig ist, und
[Eigenentwicklung vs. Zukauf im öffentlichen Sektor](../eigenentwicklung-vs-zukauf-im-öffentlichen-sektor/) dazu, wie TCO
in eine Eigenentwicklungs-/Zukauf-Entscheidung einfließt.

## Beispielrechnung

Ein Ministerium vergleicht zwei Fallmanagementsysteme über einen 5-Jahres-Horizont beim
Green-Book-Diskontsatz von 3,5 %.

```
System A: Investitionskosten 3.500.000 £, Betriebskosten
          250.000 £/Jahr
System B: Investitionskosten 1.800.000 £ (sieht billiger aus),
          Betriebskosten 650.000 £/Jahr (stärkere
          Anbieter-Support- und Integrationslast)

Naiver Vergleich allein nach Investitionskosten: B gewinnt,
1,8 Mio. £ < 3,5 Mio. £.

Summe der Diskontfaktoren, 5 Jahre bei 3,5 %: 0,966+0,934+0,902+0,871
+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750
      = 4.628.750 £
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750
      = 4.734.750 £
```

TCO kehrt die naive Entscheidung um: System B ist über fünf Jahre marginal teurer, sobald
Betriebskosten diskontiert und summiert werden, weil sein Betriebskostenanteil an den
Lebenszeitkosten 62 % beträgt (2.934.750 / 4.734.750) gegenüber 24 % bei System A — ein konkretes
Beispiel des Befunds "Wartung ist der Großteil der Rechnung", vollständig verborgen durch den
Vergleich von Etikettenpreisen.

## Bezug zur Softwareentwicklung

TCO ist die Zahl, die jede [Eigenentwicklung-vs.-Zukauf](../eigenentwicklung-vs-zukauf-im-öffentlichen-sektor/)-Entscheidung
und jeden [technische-Schulden](../technische-schulden-als-erosion-öffentlichen-werts/)-Abbaufall
disziplinieren sollte, weil sowohl Schuldzinsen als auch aufgeschobene Wartung Betriebskostenzeilen
sind, die in dieselbe diskontierte Summe gehören, unabhängig davon, ob sie jemand verfolgt hat.
Ingenieurinnen und Ingenieure, die eine Plattform- oder Anbieterwahl vorschlagen, sollten die
vollständige TCO-Tabelle präsentieren, nicht den Beschaffungspreis, weil der Beschaffungspreis
genau die Zahl ist, auf die sich Ministerien nach dem Design des finanziellen Falls im Green Book
nicht allein verlassen sollen. TCO ist auch der ehrliche Nenner für
[Wirtschaftlichkeits](../wirtschaftlichkeit/)-Urteile — VFM vergleicht Nutzen mit Kosten, und eine
untergezählte Kostenzeile bläht jedes VFM-Verhältnis im Business Case auf.

## Fallstricke

- **Nur-Investitionskosten-Vergleich**: der häufigste Beschaffungsfehler — Anbieterlistenpreise
  ohne passende Betriebskostenprognose für jede Option zu vergleichen.
- **Ausstiegs- und Migrationskosten ausschließen**: Datenextraktion am Vertragsende, Neuplattformierung
  und Anbieter-Lock-in-Strafen sind echte TCO-Zeilen, die selten im ursprünglichen Business Case
  auftauchen.
- **Sicherheits- und Compliance-Kosten ausschließen**: Patch-Kadenz, Akkreditierungserneuerung und
  Prüfkosten skalieren mit Systemalter und -komplexität — siehe
  [Cybersicherheitswert im öffentlichen Sektor](../cybersicherheitswert-im-öffentlichen-sektor/) — und werden
  routinemäßig aus der Betriebskostenprognose ausgelassen.
- **Undiskontierter Vergleich über Optionen mit unterschiedlichen Kostenprofilen**: eine
  investitionslastige Option mit einer betriebskostenlastigen ohne Diskontierung zu vergleichen,
  bevorzugt systematisch, welche Option auch immer mehr Kosten in spätere Jahre verschiebt.

## Quellen

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
