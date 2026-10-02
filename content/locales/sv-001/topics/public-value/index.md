# Offentligt värde

Offentligt värde är det värde som en statlig eller ideell organisation skapar för medborgarna kollektivt — inte bara de resultat den producerar eller pengarna den spenderar, utan huruvida samhället är bättre av att organisationen existerar och agerade som den gjorde. Mark Moores "strategiska triangel" från 1995 är standardtestet: ett offentligt initiativ är endast berättigat när det är *legitimt och har stöd*, *substantiellt värdefullt* och *operativt genomförbart*, alla tre samtidigt.

## Varför det spelar roll

Värde inom den privata sektorn är relativt lätt att prissätta: intäkter minus kostnad, avgjort av kunder som kan välja bort. Offentligt värde har ingen motsvarande marknadssignal. En kriminalvård, en skattemyndighet och ett barnskyddsteam producerar alla saker som medborgare inte helt enkelt kan välja bort att köpa, och "kunden" (skattebetalaren, den dömde, barnet) är ofta inte samma person som den politiska huvudmannen som godkänner budgeten. Moores *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) tillhandahåller den saknade disciplinen: en chef bör kunna redogöra för (1) vilket offentligt värde deras initiativ skapar, (2) varifrån deras legitimitet och finansiering att bedriva det kommer — en minister, ett kommunfullmäktige, ett mandat, ett bidrag — och (3) huruvida deras organisation faktiskt kan leverera det med de människor, den teknik och de processer som finns tillgängliga. Ett program som bara presterar väl på ett eller två ben av triangeln är ännu inte berättigat, hur välmenande det än är.

Detta har praktisk betydelse eftersom de flesta misslyckanden inom offentlig sektors mjukvara inte är tekniska misslyckanden. Ett system kan vara tekniskt utmärkt och operativt genomförbart men ändå misslyckas eftersom ingen i den legitimerande miljön — ministrar, tillsynsorgan, allmänheten — faktiskt ville ha det systemet optimerar för. Universal Credit-tjänsten och NHS National Programme for IT citeras båda i brittisk förvaltningslitteratur som fall där triangelns operativa och legitimitetsben var ur fas med uppdragsbenet.

## Beräkningen

Offentligt värde är ett ramverk, inte en formel, men det strukturerar annars vaga investeringsärenden till tre testbara frågor:

```
Test av den strategiska triangeln — gå vidare endast om alla tre håller:

1. Legitimitet och stöd: Vem har auktoriserat detta, och stödjer den
   auktoriserande miljön (lagstiftare, minister, fullmäktige, styrelse,
   opinion) fortfarande det när resurser binds?

2. Offentligt värde: Vilket specifikt, beskrivbart gott producerar
   detta för medborgare eller samhälle — säkerhet, hälsa, möjlighet,
   tillit, rättvisa — och för vem?

3. Operativ kapacitet: Kan organisationen faktiskt leverera det med
   nuvarande personal, teknik, partners och juridisk befogenhet —
   eller en trovärdig plan för att skaffa dem?
```

Ett svagt initiativ misslyckas vanligtvis på minst ett ben: tekniskt genomförbart men utan mandat (en datadelningspilot som ingen godkände); populärt men ogenomförbart (en utlovad digital tjänst utan teknisk kapacitet); eller auktoriserat och genomförbart men värdetomt (en instrumentpanel som ingen använder).

## Genomräknat exempel

**Kommun**: ett kommunalt digitalt team föreslår ett AI-triageverktyg för bostadsbidragsansökningar.

- *Legitimitet*: kommunstyrelsen har godkänt en digital-först-strategi, men de förtroendevalda som ansvarar för socialförsäkring har inte specifikt godkänt automatiserat beslutsfattande — ett gap, inte grönt ljus.
- *Offentligt värde*: snabbare handläggning (påstått värde: 10 dagar till 2 dagar) är endast verkligt värde om sökande inte felaktigt nekas; värdepåståendet måste inkludera noggrannhet, inte bara hastighet.
- *Operativ kapacitet*: kommunen har en dataforskare och ingen modellövervakningsprocess, så den påstådda handläggningstiden på 2 dagar är för närvarande inte genomförbar med den angivna felmarginalen.

Två av tre ben misslyckas. Moores ramverk säger: gå inte vidare som avgränsat — säkra först explicit auktorisation för automatiserade beslut och bygg övervakningskapacitet, annars är det "offentliga värde" som påstås i affärsärendet fiktivt.

**Statlig myndighet**: en skattemyndighets tjänst för digital deklaration har stark legitimitet (lagstadgat mandat) och stark operativ kapacitet (ett befintligt team levererar tillförlitligt) men svagt offentligt värde om användningen är låg eftersom de digitalt exkluderade — se [digital inkludering](../digital-inclusion/) — trycks in i en kanal de inte kan använda. Triangeln avslöjar det som en enbart leveransfokuserad instrumentpanel skulle dölja.

## Koppling till mjukvaruutveckling

Offentligt värde är paraplybegreppet som hela detta arkiv sitter under: [valuta för pengarna](../value-for-money/) ger testet av ekonomi/effektivitet/ändamålsenlighet för om resurser användes väl; [alternativkostnad i offentliga utgifter](../opportunity-cost-in-public-spending/) prissätter vad pengarna annars kunde ha gjort; och [additionalitet och dödviktsförlust](../additionality-and-deadweight/), [förskjutning och tillskrivning](../displacement-and-attribution/) samt [kontrafaktisk analys](../counterfactual-analysis/) testar tillsammans om det påstådda värdet är verkligt snarare än antaget. För ingenjörer är den strategiska triangeln en användbar förhandsanalys för alla beslut om offentlig sektors produkter:

- Innan man avgränsar en funktion, fråga vem som auktoriserade den och om den auktorisationen fortfarande gäller — en funktion byggd för en minister som sedan har flyttat vidare kan tyst ha förlorat sitt legitimitetsben.
- Behandla "kan vi bygga det" och "bör vi bygga det" som genuint separata frågor; teknisk kapacitet svarar bara på triangelns tredje ben.
- Produktkravsdokument för offentliga tjänster bör ange det offentliga värdepåståendet explicit, inte bara användarberättelsen, eftersom användarvärde och offentligt värde inte alltid är samma sak (se [utfall kontra output](../outcomes-vs-outputs/)).

## Fallgropar

- **Att behandla operativ kapacitet som tillräcklig motivering.** "Vi kan bygga det" svarar bara på ett ben av triangeln; team med stark leveransförmåga levererar rutinmässigt saker som ingen auktoriserade att man ville ha och som inte skapar något beskrivbart allmänt gott.
- **Att sammanblanda legitimitet med laglighet.** Ett program kan vara lagligt och ändå sakna det politiska och allmänna stöd som behövs för att hålla ut genom en svår leveransfas; juridiskt skydd är inte detsamma som ett mandat.
- **Att anta att offentligt värde är vad som helst uppdragsgivande avdelning säger att det är.** Moores modell kräver att värdepåståendet är testbart mot medborgarnas faktiska intressen, inte bara hävdat av finansiären — annars kollapsar ramverket till självcertifiering.

## Källor

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
