# Effektiv altruism kostnadseffektivitet

Effektiv altruism (EA) kostnadseffektivitetsresonemang rangordnar välgörenhetsinsatser efter mängden gott — oftast uttryckt som räddade liv, eller vunnen hälsa, per spenderad dollar — och riktar pengar mot vilken insats som helst som köper mest gott vid marginalen. GiveWell är fältets mest inflytelserika utövare: det publicerar explicita, uppdaterade uppskattningar av kostnad per räddat liv och kostnad per utfall för en kort lista över "toppvälgörenhetsorganisationer," och rekommenderar givare att skänka till vilken som för närvarande har utrymme för mer finansiering till bästa kurs.

## Varför det spelar roll

GiveWell anger kostnadseffektivitet som det ledande kriteriet i sin publicerade metodik: det söker evidensbaserade insatser, uppskattar deras kostnadseffektivitet i en gemensam enhet, och rangordnar över helt orelaterade orsaker — myggnät mot malaria, vitamin A-tillskott, kontantöverföringar, incitamentsbetalningar för vaccination — på den enda axeln. Detta är en direkt import av QALY/DALY-liknande resonemang från hälsoekonomi till filantropi: precis som ett hälsosystem frågar "hur många QALY:er per pund vid marginalen," frågar GiveWell "hur många liv, eller levnadsår, per dollar vid marginalen," och behandlar orsaker som utbytbara när de väl omvandlats till den gemensamma enheten. Se [kostnadseffektivitetsanalys inom staten](../kostnadseffektivitetsanalys-inom-staten/) för den offentliga sektorns kusin till detta resonemangsramverk.

Den mest citerade GiveWell-siffran gäller Against Malaria Foundation (AMF), som distribuerar insekticidbehandlade myggnät. I GiveWells publicerade genomräknade exempel (hämtat från 2020 års finansieringsdata) finansierade ungefär 4 500 dollar tillräckligt många nät för att förhindra ett dödsfall, efter att ha tagit hänsyn till ofullständig nätanvändning, baslinjedödlighet utan nät, och justering för fondersättning — möjligheten att AMF ändå skulle ha fått en del av den finansieringen från andra givare oavsett. GiveWell är explicit med att denna siffra rör sig över tid och geografi när malariaprevalens, nätkostnader och finansieringsgap förändras, och att kostnaden för att rädda ett liv i allmänhet förväntas stiga över tid när de billigaste möjligheterna tas upp först; det är en genomräknad illustration av metoden, inte ett fast pris.

## Beräkningen

```
Kostnadseffektivitet = Insatskostnad / Enheter av producerat
                       gott （t.ex. $ per räddat liv, $ per
                       undviken DALY, $ per QALY）

GiveWells kedja för ett myggnätsprogram, illustrativt:
  $ per köpt och levererat nät
    ÷ andel nät faktiskt använda
    ÷ personer skyddade per nät
    × baslinjedödlighet per år utan nät
    × minskning i dödlighet tillskrivbar nätanvändning （från
      RCT-evidens）
    × antal skyddsår per nät
    ÷ justering för fondersättning （pengar som ersätter andra
      givares finansiering）
  = $ per räddat liv （netto för kontrafaktiska
    finansieringseffekter）
```

Denna kedja spelar roll eftersom varje steg är en plats där kostnadseffektivitetsuppskattningar vanligtvis går fel — se fallgroparna nedan — och eftersom den gör explicit att "kostnad per räddat liv" aldrig är ett rått observerat pris; det är en modellerad uppskattning byggd från flera separat osäkra inmatningar.

## Genomräknat exempel

Två hypotetiska insatser, båda evidensbaserade, som konkurrerar om samma marginella 100 000 £:

- **Myggnät (AMF-stil)**: ungefär 4 500 dollar per räddat liv enligt GiveWells publicerade genomräknade exempel från 2020 års data, dvs. mycket grovt 20 räddade liv per 100 000 £ beroende på växelkurs och år som används.
- **Avmaskningsprogram**: ingen trolig dödlighetsvinst alls, men stark evidens för långsiktiga inkomstvinster från barndomsavmaskning; GiveWell värderar det i inkomstvinsttermer, inte räddade liv, vilket gör det svårt att jämföra direkt med myggnät utan en delad enhet. GiveWell använder ett explicit ramverk med "moraliska vikter" för att omvandla båda till en intern enhet för rangordning.

EA-metodens disciplin tvingar fram denna jämförelse i öppen dager istället för att finansiera båda eftersom båda "låter bra." Se [social avkastning på investering](../social-avkastning-på-investering/) för den motsvarande tvingande funktion som används av brittiska sociala företag och kommunala uppdragsgivare, som ställer samma fråga — vad är bästa avkastningen per pund — i ett monetariserat värdeidiom snarare än ett liv/DALY-idiom.

## Koppling till mjukvaruutveckling

Ingenjörer som bygger givarplattformar, bidragsmatchningsverktyg eller effektinstrumentpaneler för EA-anpassade finansiärer (Open Philanthropy, GiveWell själv, effektiva givarplattformar som Giving What We Can) behöver representera kostnadseffektivitetsuppskattningar som intervall med angivna antaganden, inte enskilda tal — den underliggande modellen har flera multiplikativa osäkra inmatningar, och att slå ihop det till en siffra på en instrumentpanel felrepresenterar den konfidensnivå GiveWell själv anger. Versionshantera varje uppskattning efter publiceringsdatum; GiveWell reviderar sina siffror, ibland avsevärt, när nya RCT-bevis eller finansieringsgapsdata anländer, och en plattform som cachar en gammal siffra blir tyst felaktig.

## Fallgropar

- **Att behandla en kostnadseffektivitetsuppskattning som ett fast pris.** Det är en modellutdata med flera osäkra multiplikativa inmatningar (användningsgrad, baslinjedödlighet, fondersättningsjustering); ange datum och version.
- **Att ignorera fondersättning/förskjutning.** Att finansiera en organisation som ändå skulle ha fått pengarna från en annan givare köper mindre kontrafaktiskt gott än rubriken antyder — se [additionalitet och dödviktsförlust](../additionalitet-och-dödviktsförlust/) och [förskjutning och tillskrivning](../förskjutning-och-tillskrivning/).
- **Att jämföra över oförenliga enheter utan omvandling.** "Räddade liv" och "vunnen inkomst" är inte direkt jämförbara utan ett explicit ramverk med moraliska vikter; att presentera dem sida vid sida som om de vore det är ett kategorifel.
- **Tunnelseende för orsaksområde.** Att rangordna endast inom ett orsaksområde (t.ex. bara globala hälsoorganisationer) och kalla vinnaren "den mest kostnadseffektiva välgörenhetsorganisationen" överdriver påståendet; GiveWells orsaksövergripande rangordning är medvetet smal (global hälsa och välbefinnande), inte universell.

## Källor

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version).
  <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
