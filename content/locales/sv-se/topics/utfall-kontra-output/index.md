# Utfall kontra output

Ett resultat är den direkta, räknebara produkten av en aktivitet — det existerar i det ögonblick leverans sker, oavsett vilken effekt det har. Ett utfall är den förändring som följer för de människor, den plats eller det system som berörs. "500 personer deltog i en jobbsökarworkshop" är ett resultat: det är sant även om ingen av dem hittar arbete. "500 personers anställningsutsikter förbättrades" är ett utfallspåstående, och det kräver bevis på förändring, inte bara bevis på deltagande — förväxlingen som producerar fler vilseledande bidragsrapporter än nästan något annat mätfel i sektorn.

## Varför det spelar roll

HM Treasurys Magenta Book och finansiärer som National Lottery Community Fund kräver båda utfallsrapportering specifikt eftersom resultat är vad program rapporterar som standard: de är billiga att räkna, alltid tillgängliga och ser alltid positiva ut. Ett resultatantal kan bokstavligen aldrig minska som resultat av att programmet misslyckas — fler levererade sessioner är alltid "mer", medan ett utfall kan avslöja att ett program inte fungerar. National Audit Office har upprepade gånger kritiserat statliga program för att rapportera aktivitetsnivåer som om de vore bevis på framgång; ett mjukvarusystem som bara gör resultat lätta att rapportera förstärker detta som standard, eftersom resultat inte kräver någon insamling av uppföljningsdata medan utfall gör det.

## Beräkningen

Det finns ingen formel, men det finns ett tillförlitligt test för att klassificera ett mått:

```
Resultattest:  är det räknebart vid leveranstillfället, sant
              även om mottagaren inte påverkas?
Utfallstest:   kräver det en före/efter- eller med/utan-
              jämförelse för att vara meningsfullt?

Om ett tal kan vara sant med noll nytta för någon, är det
ett resultat.
```

Detta sitter inom den bredare [logiska modell](../logisk-modell/)-kedjan och beror på de utfallslänkar som definieras i en [teori om förändring](../teori-om-förändring/); att omvandla ett utfall till pengar använder metoderna i [social avkastning på investering](../social-avkastning-på-investering/).

## Genomräknat exempel

**Kommun (sysselsättningsstöd)**: resultat — 500 personer deltog i jobbsökarworkshops. Utfall — vid 12-månadersuppföljning är 140 av de 500 (28%) i varaktig sysselsättning (6+ månader). En jämförelsegrupp med liknande karaktäristika men utan programtillgång har en baslinjesysselsättningsgrad på 15% under samma period. Nettoutfallsökning: 28% − 15% = 13 procentenheter, så uppskattningsvis 500 × 0,13 = 65 ytterligare personer är i arbete som annars inte skulle ha varit det — det tillskrivningsbara utfallet, distinkt från både de 500 deltagarna och det råa antalet på 140 sysselsatta.

**Ideell organisation (läskunnighetsorganisation)**: resultat — 1 200 läsessioner levererade till 300 barn. Utfall — genomsnittlig läsålder förbättrades med 8 månader över en 6-månadersperiod, mot en förväntad naturlig progressionsbaslinje på 6 månader. Nettoutfallsvinst: 8 − 6 = 2 månaders ytterligare läsåldersförbättring per barn tillskrivningsbar programmet, inte hela 8-månaderssiffran.

## Koppling till mjukvaruutveckling

Händelseloggar och transaktionssystem instrumenterar resultat nästan automatiskt — sidvisningar, sessioner, stängda ärenden, bokade möten — eftersom de genereras av att systemet gör sitt jobb. Utfall kräver en datamodell som fångar samma individ vid en senare tidpunkt mot en baslinje eller jämförelse, vilket måste designas medvetet in: uppföljningsenkäter, kopplade administrativa register, eller en jämförelsekohort. Ett rapporteringsverktyg som bara stödjer det förra kommer tyst att styra en organisation mot rapportering enbart av resultat oavsett vad finansiären begärde. Se [logisk modell](../logisk-modell/) för var utfall sitter i ansvarskedjan, [kostnad per utfall](../kostnad-per-utfall/) för att omvandla denna distinktion till ett enhetskostnadsmått, och [nyckeltal för offentlig sektor](../nyckeltal-för-offentlig-sektor/) för det bredare mönstret av måttval.

## Fallgropar

- **Att rapportera resultat som om de vore utfall.** "500 personer deltog" antyder nytta utan att visa den; märk deltagande explicit som ett resultat.
- **Ingen baslinje eller jämförelsegrupp.** En utfallssiffra utan en kontrafaktisk situation — se [kontrafaktisk analys](../kontrafaktisk-analys/) — kan inte skilja programeffekt från vad som skulle ha hänt ändå.
- **Att optimera för det finansierade måttet.** När finansiering är kopplad till resultatvolym maximerar leveransteam rationellt deltagande framför varaktig förändring, en Goodharts lag-felmod.
- **Utfallstvätt.** Att omdöpa ett resultatmått med utfallslikt språk ("engagemangsutfall: 500 deltagare") utan någon uppföljningsmätning bakom det.

## Källor

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance.
  <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
