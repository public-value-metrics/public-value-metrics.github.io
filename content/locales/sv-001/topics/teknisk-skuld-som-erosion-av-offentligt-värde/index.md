# Teknisk skuld som erosion av offentligt värde

Teknisk skuld är Ward Cunninghams metafor från 1992 för den implicerade framtida kostnaden av bekväma tidigare kodningsbeslut: ett **kapitalbelopp** (den skuldsatta åtgärdsuppgiften) och en **ränta** (det löpande motstånd det utövar på leverans). I ett äldre statligt IT-bestånd betalas den räntan direkt ur offentligt värde — långsammare lagstadgad ändringsleverans, högre misslyckandefrekvens på medborgarvända tjänster, och en krympande pool av människor som säkert kan röra systemet alls.

## Varför det spelar roll

Äldre stordatorer och COBOL-eras system över brittiska statliga departement — HMRC och DWP bland de mest citerade — bär en väldokumenterad och eskalerande risk National Audit Office upprepade gånger flaggat, inklusive i sin rapport *Digital Transformation in Government* (<https://www.nao.org.uk/>): åldrande plattformar som är dyra att ändra, alltmer svåra att säkra, och beroende av en specialistarbetsstyrka som pensioneras snabbare än den ersätts. Till skillnad från en privat sektors eftersläpning sitter denna skuld direkt mellan medborgare och deras lagstadgade rättigheter — en bidragsberäkningsmotor som inte säkert kan ändras är ett policyleveransbegränsning, inte bara ett tekniskt besvär. Omstarten av Universal Credit IT-programmet 2013, när National Audit Office fann att den ursprungliga byggnationen inte skulle leverera valuta för pengarna och en betydande del av mjukvarutillgången var tvungen att skrivas av, är ett kanoniskt exempel på oprissatt teknisk skuld som kommer ikapp ett levande, ministeriellt synligt offentligt program.

## Beräkningen

```
SQALE-kapitalbelopp = Σ över överträdelser （åtgärdstid） ×
                      utvecklarkostnadstakt
Teknisk skuldkvot （TDR） = åtgärdskostnad / ombyggnadskostnad
                          × 100 （SonarQube-betyg: A ≤5%,
                          B ≤10%, C ≤20%, D ≤50%）

Ränta （talet som motiverar avbetalning）:
  ränta/år = Δ leveranshastighet × värde per hastighetsenhet
           + Δ medborgarvänd incidentfrekvens × kostnad per
             incident
           + specialistkompetenspremie × berörd personalstyrka
Avbetalningsärende = NV（undviken ränta över horisonten） −
                    åtgärdskostnad （diskonterad till Green
                    Books samhälleliga diskonteringsränta, se
                    social-discount-rate.md）
```

Kapitalbeloppet anger skulden; räntan är det som gör investeringsärendet för en offentlig räkenskapskommitté.

## Genomräknat exempel

En 250 000-radersanspråksbehandlingsmotor skriven i ett äldre fjärde generationens språk. Med hjälp av CAST Appmarq-benchmarken på ungefär 3,61 dollar av tekniskt skuldkapitalbelopp per kodrad (≈2,85 £ vid typisk konvertering):

```
Kapitalbelopp ≈ 250 000 × 2,85£ ≈ 712 500£
TDR ≈ 16% （betyg C）
```

Uppmätt ränta: departementet behåller tre specialistkonsulter till en dagstaxa-premie på 40% över standard senior ingenjörstaxa eftersom interna kompetenser sliktits — en extra 180 000 £/år på ett sexpersonsteam. Systemet orsakar också fyra större behandlingsavbrott/år, vardera upphäver beslut för runt 5 000 sökande och omdirigerar dem till kontaktcentret till ungefär 25 £/samtal:

```
Ränta ≈ 180 000£ （kompetenspremie）
      + 4 × 5 000 × 25£ = 500 000£ （omdirigerad
        kontaktkostnad）
      ≈ 680 000£/år
```

Riktad åtgärd av de sämst presterande modulerna kostar 1 200 000 £ och modelleras att skära räntan med 70%:

```
Räntereduktion = 0,70 × 680 000 = 476 000£/år
Återbetalning ≈ 1 200 000 / 476 000 ≈ 2,5 år
```

Riktningen spelar roll: att åtgärda sällan berörd kod köper ingenting, eftersom räntan koncentreras där ändringsfrekvens och skuldtäthet båda toppar.

## Koppling till mjukvaruutveckling

Den offentliga-värde-inramning som uppgraderar ett tekniskt skuldärende bortom "koden är gammal": uttryck det äldre beståndet som en inventering av var förlorad leveranskapacitet är koncentrerad, och koppla det explicit till [total ägandekostnad](../total-ägandekostnad-inom-statlig-it/), eftersom ränta är en driftskostnad som hör hemma i TCO-raden oavsett om finansavdelningen någonsin frågat efter den. Skuldtyngda system bär också oproportionerlig [cybersäkerhets](../offentlig-sektors-cybersäkerhetsvärde/)-exponering, eftersom patchtakt och skuldtäthet är korrelerade — ett opatchbart äldre system är teknisk skuld vars ränta betalas i incidentrisk snarare än pund. Och varje avvägning mellan åtgärd och funktion är i sig ett [kostnad för fördröjning](../kostnad-för-fördröjning-i-offentliga-program/)-beslut: att betala av skuld fördröjer nästa lagstadgade ändring, som har sin egen CoD som måste vägas mot den sparade räntan.

## Fallgropar

- **Endast rapportering av kapitalbelopp**: en stor, skrämmande åtgärdsuppskattning utan en räntesiffra motiverar ingenting för en utgiftsgodkännare.
- **Verktygsgenererade skuldsiffror tagna bokstavligt**: SQALE-liknande skannrar räknar regelöverträdelser; de missar den dyra sortens skuld — arkitektoniska beslut och odokumenterade äldre affärsregler — samtidigt som de flaggar trivialiteter.
- **"Omskrivningen undviker allt"**: ersättningsprogram måste klara samma disciplin som vilket annat affärsärende som helst — kontrafaktisk kostnad, framgångssannolikhet, och diskontering — inte ett undantag från det, som 2013 års omstart av Universal Credit visade.
- **Skuld-noll-utopism**: den optimala skuldnivån är inte noll; skuld är hävstång som köpte tidigare leverans. Den levande frågan är alltid räntan, inte om skuld existerar alls.

## Källor

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark).
  <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit.
  <https://www.nao.org.uk/>
