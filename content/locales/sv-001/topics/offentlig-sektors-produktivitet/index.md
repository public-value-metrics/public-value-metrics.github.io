# Offentlig sektors produktivitet

Offentlig sektors produktivitet mäter hur effektivt offentliga utgifter omvandlar insatser (personal, kapital, varor och tjänster) till kvalitetsjusterade resultat, för tjänster — hälso- och sjukvård, utbildning, polisverksamhet, socialtjänst — som saknar marknadspris och därför ingen intäktssiffra att dividera kostnader med. Storbritanniens Office for National Statistics har publicerat denna serie sedan mitten av 2000-talet och den förblir det mest metodologiskt utvecklade nationella försöket att besvara "blir staten bättre eller sämre på att omvandla pengar till offentliga tjänster?"

## Varför det spelar roll

På en marknad är produktivitet (resultatvärde) / (insatskostnad), och resultatvärdet är observerbart eftersom någon betalar för det. En höftledsoperation, en skolplats och en polispatrull har inget försäljningspris, så naivt kan man bara mäta *insatser* (vad som spenderades) — vilket frestar kommentatorer att behandla ökande offentliga utgifter som automatiskt dåligt, eftersom mer insats med platt rubrikaktivitet ser ut som fallande produktivitet. ONS-metodiken, fastställd i dess "Sources and Methods"-publikationer för offentlig sektors produktivitet, löser detta genom att konstruera ett *resultat*index från aktivitetsvolymer (utförda operationer, undervisade elever, utredda brott) och sedan *kvalitetsjustera* det resultatindexet — för hälso- och sjukvård, genom att införliva överlevnadsgrad och väntetider; för utbildning, genom att införliva prestationer; för polisverksamhet, genom att införliva utfall som ärendelösning — så att en tjänst som utför samma antal operationer men uppnår bättre överlevnadsgrad registreras som mer produktiv, inte bara dyrare. Rubrikfyndet som återkommer över ONS-utgåvor är nedslående för sektorn: brittisk offentlig sektors produktivitet föll kraftigt under covid-19-pandemin och hade, enligt ONS egna utgåvor i mitten av 2020-talet, fortfarande inte återhämtat sig till 2019 års nivåer i flera undersektorer inklusive hälso- och sjukvård, även när utgifterna steg — ett gap som omramar "mer finansiering" och "mer produktivitet" som två helt separata frågor.

## Beräkningen

```
Resultatindex （volym） = Σ （aktivitet_i × relativ
                         enhetskostnadsvikt_i）, basårsviktad
                         över alla tjänsteaktiviteter （t.ex.
                         höftoperationer, starroperationer,
                         läkarkonsultationer）, analogt med
                         ett Laspeyres/Paasche-volymindex

Kvalitetsjustering    = resultatindex × kvalitetsjusterings-
                         faktor （t.ex. införliva en
                         förändring i överlevnadsgrad,
                         väntetider, prestationer, eller
                         återfall som en multiplikator på
                         rådata om volym）

Insatsindex           = Σ （arbetstimmar × arbetskostnadsvikt）
                         + （varu-/tjänstekostnad,
                         deflaterad） + （kapitalförbrukning）

Totalfaktorproduktivitetstillväxt = % förändring i
                         kvalitetsjusterat resultatindex
                         − % förändring i insatsindex
```

## Genomräknat exempel

**Illustrativ produktivitetsberäkning för NHS akutsektor** (struktur följer ONS-metodik):

```
År 1: resultatvolymindex = 100,0 （basår）, insatsindex = 100,0
      → produktivitetsindex = 100,0

År 2: aktivitetsvolymen stiger med 3,0% （fler operationer,
      fler besök） men genomsnittlig väntetid försämras, en
      kvalitetsjusteringsrabatt på −1,0% tillämpas
      Kvalitetsjusterat resultatindex = 100 × 1,030 × 0,990
                                       = 101,97

      Insatser stiger: personalantal +4,0%, andra kostnader
      （deflaterade） +1,5%, viktat insatsindex = 100 × 1,032
                                                = 103,2

Produktivitetstillväxt = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                       = 1,97% − 3,2% = −1,23 procentenheter

Tolkning: aktiviteten steg, men insatserna steg snabbare och
kvaliteten föll något, så produktiviteten — resultat per
insatsenhet — minskade även om "mer vård levererades."
```

Detta är exakt det mönster ONS-utgåvor upprepade gånger har rapporterat för delar av NHS efter pandemin: stigande utgifter och stigande rådata om aktivitet samexisterar med fallande uppmätt produktivitet när både kvalitetsjustering och insatstillväxt beaktas.

## Koppling till mjukvaruutveckling

Offentlig sektors produktivitet är befolkningsnivåmotsvarigheten till debatter om teknisk produktivitet (levererade story points kontra [DORA-mått](../dora-mått-för-offentligt-värde/) kontra [flödesmått](../flödesmått-i-statlig-leverans/)): rå genomströmning utan en kvalitetsjustering är precis lika vilseledande på ett sjukhus som "levererade kodrader" är i ett mjukvaruteam. Team som bygger prestationsdatapipelines för departement bör behandla kvalitetsjustering som ett förstklassigt, versionshanterat transformationssteg, inte en fotnot — eftersom ONS egen trovärdighet vilar på att den justeringen är transparent, reproducerbar och reviderad när bättre kvalitetsdata anländer (ONS reviderar tidigare års produktivitetsuppskattningar när underliggande kvalitetsdata — t.ex. överlevnadsgrad — fastställs slutgiltigt, så alla nedströms system som konsumerar denna statistik måste hantera retroaktiva revideringar, inte bara lägga till nya perioder). Det korsar också direkt [total ägandekostnad](../total-ägandekostnad-inom-statlig-it/) och [AI-produktivitet inom offentlig sektor](../ai-produktivitet-inom-offentlig-sektor/): ett system som ökar rå aktivitetsvolym utan att förbättra eller upprätthålla kvalitet är inte, enligt ONS egen definition, en produktivitetsförbättring.

## Fallgropar

- **Att behandla insatstillväxt som produktivitetstillväxt**: mer utgifter som finansierar mer personal producerar mer *aktivitet*, inte mer *produktivitet*, om inte resultat per insatsenhet också stiger — de två sammanblandas rutinmässigt i politisk kommentar.
- **Att helt ignorera kvalitetsjustering**: ett resultatindex byggt enbart från rådata om aktivitet kommer att visa "produktivitetsvinster" från att göra mer av något med lägre värde eller lägre kvalitet; ONS kvalitetsjustering existerar specifikt för att fånga detta.
- **Att jämföra produktivitetsindex mellan undersektorer utan att matcha metodologisk version**: hälso- och sjukvårds-, utbildnings- och polisproduktivitet är var och en byggd från olika aktivitets- och kvalitetsdatakällor på olika revideringscykler — en naiv sektorsövergripande jämförelse jämför oförenliga instrument.
- **Att läsa ett enda års produktivitetsnedgång som en permanent trend**: siffror från pandemi- och postpandemitiden har visat betydande år-till-år-volatilitet när kvalitetsdata (t.ex. väntelistor, återhämtning av planerad vård) själv skiftat; ONS varnar konsekvent för att övertolka enskilda årsrörelser.

## Källor

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
