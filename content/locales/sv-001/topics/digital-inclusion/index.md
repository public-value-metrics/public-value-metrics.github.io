# Digital inkludering

Digital inkludering är disciplinen att säkerställa att "digital by default" inte blir "endast digital" — att offentliga tjänster designade kring den billigaste kanalen fortfarande fungerar för de medborgare som inte kan eller inte vill använda den utan hjälp. GDS myntade den specifika leveransmekanismen, "assisterad digital," som ett obligatoriskt krav för varje statlig digital tjänst, inte ett valfritt extra.

## Varför det spelar roll

2012 års Government Digital Strategy satte ambitionen tydligt: digitala tjänster bör byggas digital by default, men strategin själv erkände att ungefär 10% av brittiska vuxna inte skulle kunna använda dem utan hjälp, och förband departement att tillhandahålla assisterat digitalt stöd — en människomedierad väg, via telefon, personligen, eller genom en mellanhand — som en del av tjänsten, inte en separat reservlösning bultad på senare. Det åtagandet är nu [digital tjänstestandard](../digital-service-standard/) punkt 5, "se till att alla kan använda tjänsten." Omfattningen av fortsatt exkludering spåras av Lloyds Banking Groups årliga UK Consumer Digital Index: 2024 års utgåva fann att ungefär 1,6 miljoner personer i Storbritannien förblir offline, och att denna grupp starkt lutar mot personer i åldern 70–79, de som tjänar under 35 000 £, och de som är pensionerade eller arbetslösa — precis den population mest sannolik att vara beroende av de offentliga tjänster som omdesignas. Samma rapport fann att endast 48% av den brittiska arbetskraften kunde slutföra alla 20 uppgifter i ramverket Essential Digital Skills, vilket betyder att exkludering inte är binär konnektivitet, det är ett spektrum av kompetens, förtroende och tillit som ett enkelt "har bredband"-mått helt missar.

## Beräkningen

Digital inkludering är ett ramverk och en rättvisekontroll snarare än en enda formel, men den samverkar med kvantitativ värdebedömning genom [fördelningsviktning](../distributional-weighting/):

```
Naivt kanalskiftesvärde:
  värde = flyttad volym × （kostnad_gammal − kostnad_digital）
        ［se channel-shift-savings］

Inkluderingsjusterat värde:
  värde = （flyttad volym × oviktad besparing）
        − （exkluderade användare × kostnad för assisterad
           digital tillhandahållande）
        − （fördelningsviktjustering för skada mot
           exkluderade grupper som förlorar åtkomst eller
           möter försämrad tjänstekvalitet）

Assisterad digital är inte restkostnaden för misslyckande —
det är en designad kanal med sin egen [kostnad per
transaktion](../cost-per-transaction/), typiskt långt högre
per transaktion än självbetjäningsdigital men fortfarande
vanligtvis billigare än den äldre kanal den delvis ersätter.
```

## Genomräknat exempel

**Universal Credit-liknande nationell bidragstjänst**: 2,5 miljoner ansökningar/år, bedömd behöva assisterat digitalt stöd för uppskattningsvis 10% av sökande enligt Government Digital Strategys planeringsantagande.

```
Exkluderad/assisterad-digital-kohort = 2 500 000 × 10%
                                      = 250 000 ansökningar/år

Assisterad digital kanalkostnad （telefon + ansikte-mot-
ansikte-stöd, bemannad för att hantera utsatthet och
komplexitet） ≈ 9,50£/ansökan
  = 250 000 × 9,50£ = 2 375 000£/år

Självbetjäningsdigital kostnad för de andra 90% ≈ 0,40£/
ansökan
  = 2 250 000 × 0,40£ = 900 000£/år

Blandad kostnad per transaktion = (2 375 000 + 900 000)
                                 / 2 500 000 = 1,31£/ansökan

En design som hoppar över assisterad digital för att träffa
en lägre rubrikkostnad per transaktion （t.ex. 0,40£ blandat,
och ignorerar de 250 000 exkluderade sökande） eliminerar inte
den kostnaden på 2,375 miljoner £ — den omvandlar den till
outnyttjade rättigheter, överklaganden, och nedströms
krisservicebehov som landar i en helt annan budget.
```

## Koppling till mjukvaruutveckling

Assisterad digital är en designad kanal, vilket betyder att den har gränssnitt, SLA:er och instrumentering som vilken annan kanal som helst: ett telefonbaserat handläggarverktyg, en mellanhandsportal för Citizens Advice eller en kommun, eller ett personligt kioskflöde. Att behandla den som en efterhandstanke — ett telefonnummer i finstil snarare än en kanal övervägd från upptäckt — är det enskilt vanligaste sättet tjänster misslyckas med [digital tjänstestandard](../digital-service-standard/) punkt 5 vid bedömning. Digital inkludering är rättvisilinsen på varje annat ämne i detta kapitel: den sätter ett tak för hur aggressivt [kanalskiftesbesparingar](../channel-shift-savings/) kan realiseras, den är en post som ärligt måste inkluderas i [kostnad per transaktion](../cost-per-transaction/), och den är den direkta tillämpningen av [fördelningsviktning](../distributional-weighting/) på ett digitalt tjänstesammanhang — en besparing som landar oproportionerligt på människor som redan är digitalt och ekonomiskt exkluderade bör viktas ner, inte behandlas som likvärdig med en besparing spridd jämnt över befolkningen.

## Fallgropar

- **"Digital by default" läst som "endast digital"**: att stänga telefonlinjen eller luckan när digital användning passerar en tröskel, utan att verifiera att den återstående kohorten har ett genuint användbart alternativ.
- **Att mäta inkludering genom binär konnektivitet**: "har bredband" eller "äger en smartphone" är en dålig proxy för förmågan att slutföra en specifik transaktion — Essential Digital Skills-klyftan (endast 48% av den brittiska arbetskraften slutför alla 20 uppgifter, enligt Lloyds 2024) visar att kompetens och förtroende spelar lika stor roll som tillgång.
- **Att kostnadsberäkna assisterad digital som ett avrundningsfel**: att budgetera den som en liten oförutsedd post snarare än en riktig kanal med sin egen [kostnad per transaktion](../cost-per-transaction/), för att sedan bli förvånad när den är underfinansierad och underbemannad vid lansering.
- **Att bara undersöka lyckade digitala slutförare**: nöjdhets- och användbarhetsforskning körd helt i tjänsten missar de människor som aldrig kom så långt, vilket är precis den population digitalt inkluderingsarbete är menat att skydda.

## Källor

- Cabinet Office, Government Digital Strategy (2012).
  <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service.
  <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index.
  <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
