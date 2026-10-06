# Kanalskiftesbesparingar

Kanalskiftesbesparingar är den förutspådda kostnadsminskningen från att flytta transaktionsvolym bort från dyra kanaler — telefon, ansikte-mot-ansikte-luckor, pappersbrev — till billig digital självbetjäning. Det är den finansiella motorn bakom "digital by default," och även den post i affärsärendet mest sannolik att vara felaktig, eftersom antagandet den vilar på — att offlinekanaler krymper när digital användning stiger — bara ibland är sant.

## Varför det spelar roll

Aritmetiken ser obestridlig ut med hjälp av [kostnad per transaktion](../kostnad-per-transaktion/)-siffrorna från Digital Efficiency Report: flytta en miljon transaktioner från ett ansikte-mot-ansikte-besök på 8,62 £ till ett digitalt på 0,15 £ och besparingen är över 8 miljoner £. Men en besparing blir bara kontanter frigjorda för omdisponering om den krympande kanalens *fasta kapacitet* faktiskt läggs ner — callcenterplatserna, luckpersonalen, telefonkontraktsminuterna — och kommunala digitala program har upprepade gånger funnit att den totala kontaktvolymen inte faller i linje med digital användning. Forskning från kommunala digitala transformationsprogram och organ som Socitm och Local Government Association har dokumenterat ett återkommande mönster: digitala kanaler drar till sig genuint ny kontakt (medborgare som inte skulle ha ringt eller besökt gör det nu, eftersom det är lättare), och en betydande andel av "digitala" transaktioner misslyckas halvvägs och genererar ett telefonsamtal ändå — så telefonvolymen faller med mycket mindre än vad procentsatsen för digital användning skulle antyda, ibland utan att falla alls i absoluta tal även när dess *andel* av total kontakt minskar.

## Beräkningen

```
Brutto kanalskiftesbesparing = flyttad volym × （kostnad_gammal
                              kanal − kostnad_digital）

Netto （realiserad） besparing = bruttobesparing
                                − ny/skugg-efterfrågan skapad
                                  av den lättare kanalen
                                − kostnad för misslyckad
                                  efterfrågan （digitala
                                  misslyckanden som ändå
                                  genererar ett telefonsamtal
                                  eller luckbesök）
                                − kostnad för oindragen fast
                                  kapacitet （ett callcenter
                                  kan bara dra ner personal i
                                  diskreta enheter; en
                                  15%-ig volymminskning låter
                                  sällan dig skära 15% av
                                  bemanningen）

Realiseringströskel: besparingar kan bara bankas när volymen
faller under den nivå där den gamla kanalen kan bemanna med
sitt nästa mindre diskreta kapacitetssteg （t.ex. att förlora
ett helt skift, en hel disk, ett kontrakterat
bemanningsband）
```

## Genomräknat exempel

**Länsstyrelsens förnyelsetjänst för parkeringstillstånd för funktionsnedsatta**: 60 000 förnyelser/år, tidigare 100% telefon/papper till 6,40 £ per transaktion. En ny digital tjänst lanseras och når 65% digital användning inom ett år, till 0,30 £ per digital transaktion.

```
Naiv （brutto） besparingsberäkning:
  39 000 flyttade × (6,40£ − 0,30£) = 237 900£/år

Vad som faktiskt hände, enligt kommunens
kontaktcenterdata:
  Telefonvolymen föll från 60 000/år till 46 000/år
  （−23%, inte −65%） eftersom: 9 000 digitala resor
  misslyckades och genererade ett uppföljningssamtal
  （läckage av misslyckad efterfrågan）, och 4 000 personer
  som tidigare inte förnyade alls gör det nu, efter att ha
  funnit det enkelt online （skugg-efterfrågan — en genuin
  tillgänglighetsförbättring, men inte en besparing）

  Telefonkontaktcentret bemannas i band om 8 000
  samtal/heltid; en minskning på 14 000 samtal
  （60 000 → 46 000） frigör 1,75 heltid, avrundat nedåt i
  praktiken till 1 heltid faktiskt omdisponerad = 34 000£/år

Realiserad besparing = 34 000£/år plus den undvikna digitala
  kanalbyggnads-/driftskostnaden på 39 000 transaktioner
  ≈ 34 000£ + (39 000 × 0,30£ digital kostnad redan räknad)
  — en bråkdel av rubriken på 237 900£, även om tjänsten
  fortfarande otvetydigt är bättre för användare.
```

## Koppling till mjukvaruutveckling

Den tekniska lärdomen är att kanalskiftesbesparingar realiseras genom *operativa* beslut (bemanningsplanering, nedläggning, kontraktsomförhandling), inte genom att mjukvaran levereras — ett team kan träffa varje punkt i [digital tjänstestandard](../digital-tjänstestandard/) och ändå leverera noll nettobesparing om ingen lägger ner den gamla kanalens fasta kapacitet. Att instrumentera misslyckad efterfrågan (var i den digitala resan användare överger och vad de gör härnäst) är ett lösbart trattanalysproblem och den enskilt högsta hävstångssak ett tekniskt team kan göra för att skydda besparingsärendet; det är också den direkta kopplingen till [kostnad per transaktion](../kostnad-per-transaktion/), som misslyckad efterfrågan tyst blåser upp. Se [nyttorealisering](../nyttorealisering/) för den bredare disciplinen att kontrollera att ett affärsärendes besparingar faktiskt landar, och [digital inkludering](../digital-inkludering/) för varför offlinekanalen vanligtvis inte kan, och inte bör, läggas ner helt.

## Fallgropar

- **Att anta 1:1-kanalsubstitution**: att modellera digital användning som en direkt subtraktion från telefon-/luckvolym, och ignorera skugg-efterfrågan och läckage av misslyckad efterfrågan dokumenterat i kommunal kanalskiftesforskning.
- **Att bokföra bruttobesparingar innan nedläggning**: att räkna besparingen i affärsärendet det år användningen stiger, inte det år (om någonsin) den gamla kanalens kapacitet faktiskt skärs ner.
- **Att ignorera bemanningskostnadernas stegfunktionsnatur**: en 20%-ig volymminskning omvandlas sällan till en 20%-ig kostnadsminskning, eftersom kontaktcenter och luckor bemannas i diskreta band, inte kontinuerligt.
- **Att behandla skugg-efterfrågan som slöseri**: ny kontakt från tidigare uteslutna eller tidigare avskräckta användare är en verklig ökning i [offentligt värde](../offentligt-värde/), inte ett modelleringsfel — den bör rapporteras som ett tillgänglighetsutfall, inte nettas bort som brus.

## Källor

- Cabinet Office, Digital Efficiency Report (2012).
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources.
  <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
