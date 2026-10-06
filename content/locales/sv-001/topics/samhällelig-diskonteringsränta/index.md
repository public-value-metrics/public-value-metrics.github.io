# Samhällelig diskonteringsränta

Den samhälleliga diskonteringsräntan omvandlar framtida kostnader och nyttor till nuvärden så att program med utfall spridda över decennier kan jämföras på en gemensam grund. HM Treasurys Green Book föreskriver ett fallande schema förankrat vid 3,5% för de första 30 åren, baserat på Ramsey-formeln — ett specifikt, citerbart tal som har blivit ett levande politiskt och etiskt argument varje gång det tillämpas på långsiktiga åtaganden som klimatpolitik eller infrastruktur.

## Varför det spelar roll

En pund i nytta som mottas om 30 år är inte värd en pund i nytta som mottas idag, av skäl som delvis handlar om ren tidspreferens (människor och samhällen föredrar goda saker tidigare) och delvis om tillväxt (ett framtida samhälle förväntas vara rikare, så en pund betyder mindre för det marginellt). Green Books bilaga 6 härleder Storbritanniens standarddiskonteringsränta från Ramsey-formeln, genom att kombinera en ren tidspreferensränta med den förväntade tillväxttakten för konsumtion och elasticiteten hos marginalnyttan av konsumtion, vilket ger den publicerade räntan på 3,5% per år för år 0–30, fallande enligt ett publicerat schema för år 31 och framåt (ner till 1% för år 301+). Detta schema existerar just eftersom en konstant 3,5% ränta på ränta under ett sekel skulle göra praktiskt taget vilken långsiktig nytta som helst — ett översvämningsskydd som räddar liv om 80 år, en koldioxidminskning som förhindrar skada om 100 år — obetydlig i nuvärdestermer, vilket finansdepartementet bedömde vara en otrolig etisk slutsats för genuint långlivad infrastruktur och miljöbeslut.

Diskonteringsräntan är omtvistad just eftersom valet inte är en neutral teknisk parameter: den kodar ett omdöme om hur mycket ett samhälle bör offra idag för människor som ännu inte är födda. Stern Review om klimatförändringens ekonomi (2006) använde en diskonteringsränta nära noll (en ren tidspreferens nära 0,1%), och hävdade att diskontering av framtida generationers välfärd med marknadsräntor är etiskt oförsvarbart när skadan (katastrofal klimatförändring) är irreversibel. Kritiker — särskilt William Nordhaus — hävdade att Sterns nära-noll-ränta överdrev argumentet för omedelbara klimatutgifter genom att göra nästan alla nuvarande kostnader berättigade mot en knappt diskonterad framtida nytta. Meningsskiljaktigheten handlade inte om matematiken; den handlade om vems etiska ramverk som skulle sätta räntan, och den förblir standardillustrationen av varför diskonteringsräntan är ett policyval, inte bara en aktuariell inmatning.

## Beräkningen

Ramsey-formeln som ligger till grund för Green Books ränta:

```
r = ρ + η·g

där:
  r = samhällelig diskonteringsränta
  ρ = ren tidspreferensränta （otålighet ＋ katastrofrisk）
  η = elasticitet hos marginalnyttan av konsumtion
  g = förväntad årlig tillväxttakt för konsumtion per capita
```

Green Books fallande schema (bilaga 6, illustrativt — kontrollera aktuell upplaga för den exakta publicerade tabellen):

```
År 0–30:    3,5%
År 31–75:   3,0%
År 76–125:  2,5%
År 126–200: 2,0%
År 201–300: 1,5%
År 301+:    1,0%
```

Nuvärde av en framtida summa:

```
NV = FV / (1 + r)^t
```

## Genomräknat exempel

**Översvämningsskyddsprojekt**: ett projekt levererar 10 miljoner £ i undviken översvämningsskada år 40.

Med en konstant ränta på 3,5%: NV = 10 000 000 / (1,035)^40 ≈ 2,52 miljoner £ — nyttan ser liten ut.

Med Green Books fallande schema (3,5% för år 0–30, 3,0% därefter), sammansätts beräkningen med 3,5% för de första 30 åren och 3,0% för år 31–40:

```
NV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ 2,65 miljoner £
```

Det fallande schemat höjer måttligt nuvärdet av långsiktiga nyttor jämfört med en konstant hög ränta — schemats explicita syfte, eftersom en konstant 3,5% under ett sekel skulle diskontera en nytta på 100 miljoner £ år 100 till under 3,3 miljoner £.

**Digital infrastruktur**: en statlig molnmigrering som kostar 4 miljoner £ nu förväntas undvika 500 000 £/år i äldre underhållskostnader under 15 år. Vid 3,5% är nuvärdet av den annuiteten ungefär 500 000 £ × 11,52 (15-årsannuitetsfaktorn vid 3,5%) ≈ 5,76 miljoner £ — bekvämt över kostnaden på 4 miljoner £, ett positivt nettonuvärdesärende som skulle se markant svagare ut vid en naivt vald högre ränta (vid 7% sjunker samma annuitetsfaktor till ungefär 9,11, vilket ger 4,56 miljoner £, fortfarande positivt men med mycket tunnare marginal).

## Koppling till mjukvaruutveckling

De flesta affärsärenden för mjukvara löper över 3–5 år, gott och väl inom det konstanta 3,5%-bandet, så det fallande schemat gör sällan skillnad direkt — men den underliggande disciplinen spelar roll för alla statliga teknikinvesteringar med lång tillgångslivslängd (en nationell plattform, ett dataInfrastrukturprogram, ett flerdecenniekontrakt):

- Använd Green Books publicerade ränta snarare än en intern "gränsränta" lånad från privat finans; revisorer och finansdepartementets granskare kommer att förvänta sig standardschemat.
- För nyttor som realiseras många år framåt (en plattforms långsiktiga underhållsbesparingar, ett öppet datas ekosystems sammansatta värde — se [värdet av öppna data](../värdet-av-öppna-data/)), kan diskonteringsvalet vända ett affärsärende från positivt till negativt; gör räntan och tidshorisonten till explicita antaganden, inte dolda standardvärden.
- Detta kopplar direkt till [Green Book-bedömning](../green-book-bedömning/), femfallsmodellen som formellt kräver ett diskonterat kassaflöde, och till [välfärdsvärdering](../välfärdsvärdering/), där samma diskonteringsfråga uppstår för icke-monetära välfärdsnyttor.

## Fallgropar

- **Att använda en konstant ränta för mycket långa tidshorisonter.** Green Books fallande schema existerar specifikt eftersom en konstant ränta underskattar genuint långlivade nyttor; kontrollera vilket band som gäller istället för att som standard använda 3,5% genomgående.
- **Att behandla diskonteringsräntan som etiskt neutral.** Stern-Nordhaus-tvisten visar att räntan kodar ett värdeomdöme om framtida generationer; att ändra den ändrar vilka program som ser motiverade ut, så den bör anges och försvaras, inte döljas i ett kalkylblads standardvärde.
- **Att förväxla den samhälleliga diskonteringsräntan med en privat kapitalkostnad.** Statlig upplåningskostnad och privata sektorns gränsräntor är olika begrepp från den Ramsey-härledda samhälleliga räntan, och att ersätta den ena med den andra i en offentlig bedömning kommer typiskt att snedvrida resultatet i riktning mot att gynna kortsiktig avkastning.

## Källor

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
