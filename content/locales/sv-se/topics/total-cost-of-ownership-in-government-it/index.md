# Total ägandekostnad (TCO) inom statlig IT

Total ägandekostnad är den fulla livscykelkostnaden för ett system — anskaffning plus varje år av att driva det — diskonterad till ett gemensamt datum. Inom statlig IT är det enskilt mest tillförlitliga prognosfelet att jämföra leverantörer eller alternativ enbart på anskaffningspris, när drift och underhåll typiskt står för någonstans mellan hälften och fyra femtedelar av livstidsräkningen.

## Varför det spelar roll

HM Treasurys Green Book kräver att det finansiella fallet i alla femfallsmodell-affärsärenden täcker helhetskostnader, inte bara kapitalutgifter — ändå har National Audit Office upprepade gånger funnit departement godkänna IT-investeringar mot en ofullständig eller optimistisk driftskostnadsprognos, bara för att upptäcka den sanna driftskostnaden när systemet är live och kapitalbudgetraden har stängts. Government Digital Service och Central Digital and Data Offices Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) driver departement mot moln och standardhosting delvis eftersom det gör den löpande kostnaden synlig och jämförbar, snarare än begravd inuti en enda kapitalupphandlingssiffra som ser attraktivt låg ut vid godkännande och kostsamt fel ut tre år senare.

## Beräkningen

```
TCO = Anskaffningskostnad + Σ(t=1..N) Årlig driftskostnad_t
      / (1+r)^t − restvärde （diskonterat）

r = HM Treasury Green Books standard samhälleliga
    diskonteringsränta, 3,5%/år （fallande räntesschema för
    horisonter bortom 30 år）

Driftskostnadskomponenter: hosting/licensiering, support och
underhåll, säkerhetspatchning och efterlevnad, personaltid,
planerad förnyelse/migrering
```

Se [samhällelig diskonteringsränta](../social-discount-rate/) för varför diskonteringsfaktorn spelar roll över en typisk 5–10-årig systemlivslängd, och [bygga eller köpa inom staten](../build-vs-buy-in-government/) för hur TCO matar ett bygg-/köpbeslut.

## Genomräknat exempel

Ett departement jämför två ärendehanteringssystem över en 5-årig horisont till Green Books 3,5% diskonteringsränta.

```
System A: kapex 3 500 000£, opex 250 000£/år
System B: kapex 1 800 000£ （ser billigare ut）, opex
          650 000£/år （tyngre leverantörssupport och
          integrationsbörda）

Naiv jämförelse på enbart kapex: B vinner, 1,8M£ < 3,5M£.

Diskonteringsfaktorsumma, 5 år vid 3,5%: 0,966+0,934+0,902
+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750
      = 4 628 750£
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750
      = 4 734 750£
```

TCO vänder på det naiva beslutet: System B är marginellt dyrare över fem år när driftskostnaden diskonteras och summeras, eftersom dess opex-andel av livstidskostnaden är 62% (2 934 750 / 4 734 750) mot System A:s 24% — ett konkret exempel på fyndet "underhåll är majoriteten av räkningen," helt dolt genom att jämföra prislappar.

## Koppling till mjukvaruutveckling

TCO är talet som bör disciplinera varje [bygga eller köpa](../build-vs-buy-in-government/)-beslut och varje [teknisk skuld](../technical-debt-as-public-value-erosion/)-avbetalningsärende, eftersom skuldränta och uppskjutet underhåll båda är driftskostnadsrader som hör hemma i samma diskonterade total, oavsett om någon spårat dem eller inte. Ingenjörer som föreslår ett plattforms- eller leverantörsval bör presentera den fullständiga TCO-tabellen, inte upphandlingspriset, eftersom upphandlingspriset är precis det tal Green Books finansiella fall designades för att stoppa departement från att enbart förlita sig på. TCO är också den ärliga nämnaren för [valuta-för-pengarna](../value-for-money/)-bedömningar — VFM jämför nytta med kostnad, och en underräknad kostnadsrad blåser upp varje VFM-förhållande i affärsärendet.

## Fallgropar

- **Endast kapex-jämförelse**: det enskilt vanligaste upphandlingsfelet — att jämföra leverantörernas listpriser utan en matchad driftskostnadsprognos för varje alternativ.
- **Att exkludera exit- och migreringskostnader**: dataextraktion vid kontraktsslut, ombyggnad av plattform, och leverantörsinlåsningsstraff är verkliga TCO-rader som sällan förekommer i det ursprungliga affärsärendet.
- **Att exkludera säkerhets- och efterlevnadskostnad**: patchtakt, förnyelse av ackreditering, och revisionskostnad skalar med systemets ålder och komplexitet — se [offentlig sektors cybersäkerhetsvärde](../public-sector-cybersecurity-value/) — och de utelämnas rutinmässigt från opex-prognosen.
- **Odiskonterad jämförelse över alternativ med olika kostnadsprofiler**: att jämföra ett kapexungt alternativ med ett opexungt utan diskontering gynnar systematiskt vilket alternativ som råkar skjuta upp mer kostnad till senare år.

## Källor

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice.
  <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
