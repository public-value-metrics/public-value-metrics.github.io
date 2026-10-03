# Digital inklusion

Digital inklusion er disciplinen at sikre, "digital-som-standard" ikke bliver "kun-digital" — at offentlige tjenester designet omkring den billigste kanal stadig fungerer for borgere, der ikke kan eller ikke vil bruge det uAssisteret. GDS opfandt den specifikke leveringsMekanisme, "assisteret digital," som et obligatorisk krav for hver statslig digital tjeneste, ikke en valgfri ekstra.

## Hvorfor det betyder noget

2012-Government Digital Strategy satte ambitionen klart: digitale tjenester bør bygges digital-som-standard, men strategien selv anerkendte, at omkring 10% af britiske voksne ikke ville være i stand til at bruge dem uden hjælp, og forpligtede departementer til at levere assisteret-digital-støtte — en menneske-medieret rute, via telefon, i person, eller gennem en mellemmand — som del af tjenesten, ikke en separat fallback boltet på senere. Den forpligtelse er nu [digital tjenesteStandard](../digital-service-standard/) punkt 5, "sikr, alle kan bruge tjenesten." Skalaen af fortsat udelukkelse spores af Lloyds Banking Groups årlige UK Consumer Digital Index: 2024-udgaven fandt, omkring 1,6 millioner mennesker i Storbritannien forbliver offline, og at denne gruppe skævVrider stærkt mod mennesker alder 70-79, de, der tjener under £35.000, og de, der er pensionerede eller arbejdsløse — netop den befolkning, mest sandsynligt at afhænge af de offentlige tjenester, der redesignes. Samme rapport fandt kun 48% af den britiske arbejdsStyrke kunne fuldføre alle 20 opgaver på Essential Digital Skills-rammen, hvilket betyder, udelukkelse er ikke binær forbindelse, det er et spektrum af færdighed, tillid, og tillid, en simpel "har bredbånd"-måling helt misser.

## Beregningen

Digital inklusion er en ramme og lighedsKontrol snarere end en enkelt formel, men den komponerer med kvantitativ værdiVurdering gennem [distributionsVægtning](../distributional-weighting/):

```
Naiv kanalSkift-værdi:
  værdi = flyttet volumen × (kostpris_gammel −
          kostpris_digital)     [se kanalSkift-besparelser]

InklusionsJusteret værdi:
  værdi = (flyttet volumen × uVægtet besparelse)
        − (udelukkede brugere × kostpris af assisteret-
           digital-levering)
        − (distributionsVægt-justering for skade til
           udelukkede grupper, der mister adgang eller møder
           nedGraderet tjenesteKvalitet)

Assisteret digital er ikke restKostprisen af fejl — det er en
designet kanal med sin egen [kostpris-pr.-transaktion](../cost
-per-transaction/), typisk langt højere pr.-transaktion end
selvBetjenings-digital men stadig normalt billigere end
legacy-kanalen, den delvist erstatter.
```

## Gennemregnet eksempel

**Universal-Credit-stil national ydelsesTjeneste**: 2,5 millioner krav/år, vurderet at behøve assisteret-digital-støtte for et estimeret 10% af krævere per Government Digital Strategy-planlægnings-antagelse.

```
Udelukket/assisteret-digital-kohorte = 2.500.000 × 10% =
                                       250.000 krav/år

Assisteret-digital-kanal-kostpris (telefon + ansigt-til-
ansigt-støtte, bemandet til at håndtere sårbarhed og
kompleksitet) ≈ £9,50/krav
  = 250.000 × £9,50 = £2.375.000/år

SelvBetjenings-digital-kostpris for de andre 90% ≈ £0,40/krav
  = 2.250.000 × £0,40 = £900.000/år

Blandet kostpris pr. transaktion = (2.375.000 + 900.000) /
  2.500.000 = £1,31/krav

Et design, der springer assisteret digital over for at ramme
en lavere overskrifts-kostpris-pr.-transaktion (f.eks. £0,40
blandet, ignorerende de 250.000 udelukkede krævere), elimi-
nerer ikke den £2.375m-kostpris — det omdanner den til uKrævede
berettigelser, appeller, og nedStrøms-krise-tjeneste-efter-
spørgsel, der lander på et helt andet budget.
```

## Forbindelse til softwareudvikling

Assisteret digital er en designet kanal, hvilket betyder, den har interfaces, SLA'er, og instrumentering som enhver anden: et telefon-baseret sagsBehandler-redskab, en mellemmand-portal for Citizens Advice eller en lokal myndighed, eller en i-person-kiosk-flow. At behandle det som en eftertanke — et telefonNummer i lille print snarere end en kanal overVejet fra discovery — er den enkelte mest almindelige måde, tjenester fejler [digital tjenesteStandard](../digital-service-standard/) punkt 5 ved vurdering. Digital inklusion er lighedsLinsen på hvert andet emne i dette kapitel: det begrænser, hvor aggressivt [kanalSkift-besparelser](../channel-shift-savings/) kan realiseres, det er en linjePost, der skal inkluderes ærligt i [kostpris-pr.-transaktion](../cost-per-transaction/), og det er den direkte anvendelse af [distributionsVægtning](../distributional-weighting/) til en digital-tjenester-kontekst — en besparelse, der lander disproportionalt på mennesker, der allerede er digitalt og økonomisk udelukkede, bør vægtes ned, ikke behandlet som ækvivalent til en besparelse spredt jævnt over befolkningen.

## Faldgruber

- **"Digital-som-standard" læst som "kun-digital".** At lukke telefonLinjen eller skranken, når digital optagelse krydser en tærskel, uden at verificere den tilbageVærende kohorte har et genuint brugbart alternativ.
- **At måle inklusion ved binær forbindelse.** "Har bredbånd" eller "ejer en smartTelefon" er en dårlig proxy for evne til at fuldføre en specifik transaktion — Essential Digital Skills-gabet (kun 48% af britisk arbejdsStyrke fuldfører alle 20 opgaver, per Lloyds 2024) viser, færdigheder og tillid betyder lige så meget som adgang.
- **At kostpris-sætte assisteret digital som en afRundingsFejl.** At budgettere det som en lille kontingens-linje snarere end en ordentlig kanal med sin egen [kostpris-pr.-transaktion](../cost-per-transaction/), og derefter blive overRasket, når det er underFinansieret og underBemandet ved lancering.
- **At undersøge kun succesfulde digitale fuldførere.** TilfredshedsOg brugbarheds-forskning kørt helt i-tjeneste misser menneskerne, der aldrig kom så langt, hvilket er netop den befolkning, digital-inklusions-arbejdet er tiltænkt at beskytte.

## Kilder

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
