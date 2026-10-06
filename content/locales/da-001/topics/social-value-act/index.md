# Social Value Act

Public Services (Social Value) Act 2012 er en britisk lovfæstet pligt, der kræver, at offentlige myndigheder i England og Wales overvejer, hvordan det, der indkøbes, kan forbedre det økonomiske, sociale, og miljømæssige velvære i det relevante område, og overvejer at konsultere om dette, før de starter en indkøbsProces for offentlige tjenesteKontrakter. Den trådte i kraft i januar 2013 som en relativt let-tilgang "tag hensyn til"-pligt, og blev substantielt styrket af Procurement Policy Note (PPN) 06/20 i januar 2021, som kræver, at centralstatslige kontrakter explicit evaluerer — ikke blot overvejer — social værdi, med en minimumVægtning i tildelingsKriterierne.

## Hvorfor det betyder noget

Før PPN 06/20 kunne "overveje" social værdi tilfredsstilles af en ordregiver, der bemærkede, de havde tænkt over det, uden krav om, det påvirkede tildelingsBeslutningen — en pligt let at udføre på papir og ignorere i praksis. PPN 06/20 lukkede det hul for centralstatslig indkøb: den pålægger, at social værdi scores som del af udbudsEvalueringen, organiseret omkring fem nationale prioritetsTemaer — COVID-19-genopretning, bekæmpelse af økonomisk ulighed, bekæmpelse af klimaforandring, lige muligheder, og velvære — og almindeligvis målt ved brug af National TOMs (Themes, Outcomes, Measures)-rammen vedligeholdt af Social Value Portal. For en softwareIngeniør, der bygger indkøbs-, kontraktstyrings-, eller udbudsStøtteRedskaber for den offentlige sektor, er dette det juridiske grundlag, din klient er krævet at bygge mod, ikke en valgfri nice-to-have.

## Beregningen

Social værdi er et rammeFormet emne; dens "beregning" er scoringsStrukturen, de fleste myndigheder bruger:

```
Samlet udbudsscore = Pris/kostpris-vægtning + Kvalitets-
                     vægtning + Social-værdi-vægtning

PPN 06/20 (centralregering): social-værdi-vægtning ≥ 10% af
                             samlet score

Social-værdi-temaer (PPN 06/20):
 1. COVID-19-genopretning
 2. Bekæmpelse af økonomisk ulighed
 3. Bekæmpelse af klimaforandring
 4. Lige muligheder
 5. Velvære
```

Udbudsgivere pengegør typisk deres forpligtelser mod disse temaer ved brug af [enhedsKostprisdatabaser](../enhedskostprisdatabaser/), og den samme pengegørelsesLogik brugt i [socialt afkast på investering](../socialt-afkast-på-investering/) gælder: en forpligtelse bør dokumenteres, være tilskrivbar kontrakten, og ikke dobbelttælles mod anden finansiering.

## Gennemregnet eksempel

**Lokal myndigheds IT-kontrakt**: en £2 millioner, 3-årig kontrakt scores 60% kvalitet, 30% pris, 10% social værdi. Udbudsgiver A forpligter sig til 2 lærlingePladser, £150.000 lokal underleverandørUdgift, og 200 timer pro bono digital-kompetence-træning for en lokal skole, pengegjort ved brug af proxyer fra en enhedsKostprisdatabase til kombineret £90.000 yderligere social værdi. Udbudsgiver B forpligter sig til en mindre pakke pengegjort til £40.000. Hvis myndigheden scorer social værdi proportionalt mod det stærkeste bud, modtager Udbudsgiver A de fulde 10 point; Udbudsgiver B modtager 10 × (£40.000 ÷ £90.000) = 4,4 point — en 5,6-point-kløft, der kan afgøre kontrakten, selv hvor kvalitet og pris er tætte.

**Frivillig sektor-udbudsgiver**: en lille VCSE (frivillig, fællesskabs-, og social virksomhed), der byder på en grundPlejekontrakt mod en kommerciel konkurrent, kan ikke konkurrere på enhedsPris alene, men bruger Global Value Exchange-proxyer til at pengegøre sine eksisterende fællesskabsBeskæftigelses- og frivilligforpligtelser, hvilket skaber en dokumenteret social-værdi-sag værd at score sammen med pris og kvalitet.

## Forbindelse til softwareudvikling

At vinde et udbud med pengegjorte social-værdi-forpligtelser skaber en pligt til at dokumentere levering mod dem gennem kontraktStyring — redskaber, der logger lærlingeStarter, lokal udgift, og træningsTimer mod de specifikke forpligtelser scoret ved udbud, der fødrer ind i kontraktGennemgangsMøder snarere end at blive glemt, når kontrakten er underskrevet. G-Cloud- og Digital Marketplace-lister kræver i stigende grad social-værdi-erklæringer ved listnings-punktet. Se [socialt afkast på investering](../socialt-afkast-på-investering/) for vurderingsMetoden bag forpligtelserne, [enhedsKostprisdatabaser](../enhedskostprisdatabaser/) for proxyerne udbudsgivere trækker på, og [resultater versus output](../resultater-versus-output/) for at sikre, leverede forpligtelser er resultater, ikke blot aktivitetsTællinger.

## Faldgruber

- **Socialt-hvidvaskende udbud.** Vage forpligtelser ("vi støtter det lokale fællesskab"), der ikke kan måles eller holdes til under kontraktStyring, scorer godt men leverer intet verificerbart.
- **At behandle social værdi som en tiebreaker.** PPN 06/20 kræver, social værdi explicit evalueres inden i tildelingsKriterierne, ikke bruges informelt til at bryde en lighed mellem ellers lige udbud.
- **Ingen kontraktStyring-opfølgning.** Forpligtelser scoret ved udbud spores ofte aldrig under levering — se [fordelsRealisering](../fordelsrealisering/).
- **Inkonsekvente målingsRammer over kontrakter.** At bruge forskellige proxyKilder for lignende forpligtelser på forskellige kontrakter gør porteføljeNiveau-sammenligning meningsløs, hvilket er hvorfor fælles rammer som National TOMs og delte enhedsKostprisdatabaser eksisterer.

## Kilder

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
