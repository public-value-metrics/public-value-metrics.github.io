# Offentlig sektors cybersäkerhetsvärde

Offentlig sektors cybersäkerhetsvärde är disciplinen att prissätta riskminskning: vad är det värt att göra ett intrång i medborgardata mindre sannolikt, givet att säkerhetsutgifter inte producerar något synligt resultat när de fungerar och ett mycket synligt sådant när de misslyckas? För en tjänst som håller bidragsregister, hälsodata eller skattedata är den egenskapen "osynlig när den fungerar" precis varför den behöver ett explicit värdeargument, inte bara en efterlevnadskryssruta.

## Varför det spelar roll

Storbritanniens National Cyber Security Centres Cyber Assessment Framework (CAF) ger offentliga organisationer ett strukturerat sätt att göra säkerhet till en bedömbar, utfallsbaserad disciplin snarare än en checklista: det definierar fyra övergripande mål (hantera säkerhetsrisk, skydda mot cyberattack, upptäcka cybersäkerhetshändelser, och minimera påverkan av incidenter) uppdelade i bidragande utfall en systemägare kan bedömas mot, i samma anda som [digital tjänstestandard](../digital-tjänstestandard/) punkt 9 ("skapa en säker tjänst som skyddar användarnas integritet"). Vad CAF-bedömning skyddar mot har en dokumenterad prislapp: IBM:s Cost of a Data Breach Report spårar genomsnittlig intrångskostnad efter sektor, och har konsekvent funnit den offentliga sektorn mot den lägre änden av intervallet jämfört med finans eller hälso- och sjukvård — nyliga utgåvor sätter det offentliga sektorns genomsnitt till ungefär 2,6–2,9 miljoner dollar per intrång — men "lägre än finans" är inte "lågt," och statliga intrång bär kostnader rapportens siffror inte fullt ut fångar: förlust av medborgares förtroende för digitala kanaler, vilket dämpar den [digitala användning](../kanalskiftesbesparingar/) kanalskiftesaffärsärenden är beroende av, och den politiska och juridiska kostnaden av att exponera data staten tvingade medborgare att lämna ifrån sig i första hand.

## Beräkningen

Säkerhetsinvestering värderas på samma sätt som all riskminskningsutgift värderas: som en förväntad förlustminskning, med hjälp av den klassiska riskhanteringsidentiteten.

```
Årlig förlustförväntan （ALE） = Enskild förlustförväntan
                                （SLE） × Årlig
                                förekomstfrekvens （ARO）

Värde av en säkerhetskontroll =
  ALE_före_kontroll − ALE_efter_kontroll − kontrollens
  årliga kostnad

En kontroll är värd att finansiera när:
  （ALE_före − ALE_efter） > kontrollens årliga kostnad

CAF-bedömning ger inte direkt ut en sannolikhet, men en
tjänsts CAF-utfallsprofil （vilka bidragande utfall som är
"uppnådda," "delvis uppnådda," eller "ej uppnådda"） är en
rimlig proxyinmatning för att uppskatta ARO — ett system med
ohanterad privilegierad åtkomst eller ingen testad
incidenthanteringsplan har en väsentligt högre realistisk
ARO än ett med båda på plats.
```

## Genomräknat exempel

**Länsstyrelsens ärendehanteringssystem som håller socialtjänstregister för 40 000 invånare**:

```
Enskild förlustförväntan （intrångskostnad）, med ett
offentlig-sektor-genomsnitt från en nylig IBM Cost of a Data
Breach Report ≈ 2,1m£ （konverterad, storleksordningssiffra
— härled alltid från den aktuella rapportutgåvan istället
för att återanvända ett fast tal）

Nuvarande ARO （ohanterad privilegierad åtkomst, ingen
testad incidenthantering, enligt en intern CAF-
egenbedömning som visar flera "ej uppnådda" utfall）
≈ uppskattad 8% per år
  ALE_före = 2,1m£ × 0,08 = 168 000£/år

Föreslagen kontroll: privilegierad åtkomsthantering +
testad incidenthanteringsplan, som flyttar de relevanta
CAF-utfallen till "uppnådda," uppskattad att skära ARO till
3%/år
  ALE_efter = 2,1m£ × 0,03 = 63 000£/år

Kontrollens årliga kostnad （verktyg + process + testning）
= 45 000£

Kontrollens värde = (168 000 − 63 000) − 45 000 = 60 000£/år
  nettopositiv — finansiera den. Aritmetiken visar också att
  kontrollen fortfarande skulle vara värd att finansiera
  till nästan tre gånger kostnaden, vilket är den typ av
  känslighetskontroll som bör åtfölja alla ALE-siffror
  byggda på uppskattade sannolikheter.
```

## Koppling till mjukvaruutveckling

Ingenjörer äger de flesta av spakarna i ALE-ekvationen: design av åtkomstkontroll, hygien för beroenden och patchar, logg- och upptäcktstäckning, och incidenthanteringsverktyg flyttar alla direkt ARO-termen, vilket är varför CAF-bedömning läses lika mycket som en teknisk arkitekturgranskning som en policygranskning. Detta är [teknisk skuld som erosion av offentligt värde](../teknisk-skuld-som-erosion-av-offentligt-värde/) i sin mest akuta form — opatchade, oövervakade, dåligt åtkomstkontrollerade system är skuld vars ränta betalas i svanssrisk, inte ett stadigt drag — och det bör stämmas av mot [total ägandekostnad inom statlig IT](../total-ägandekostnad-inom-statlig-it/) så att säkerhetsutgifter inte behandlas som separata från systemets verkliga driftskostnad. Det är också en direkt inmatning till [valuta för pengarna](../valuta-för-pengarna/)-bedömningar under Green Book: riskjusterad kostnad är en del av "kostnads"-sidan av vilken alternativbedömning som helst, inte en efterhandstanke bultad på i slutet.

## Fallgropar

- **Att behandla CAF-egenbedömning som säkerhet i sig**: en slutförd bedömning beskriver en säkerhetsställning; den skapar inte en — värdet ligger i uppnådda utfall, inte i dokumentet.
- **Att använda globala genomsnittliga intrångskostnader som en lokal uppskattning utan justering**: IBM:s siffror är genomsnitt över stora, varierade urval; en liten kommuns realistiska enskilda förlustförväntan är sällan densamma som ett nationellt departements.
- **Att ignorera svanssriskpsykologi i investeringsbeslut**: en låg årlig sannolikhet gör säkerhetsutgifter lätta att skjuta upp på obestämd tid, ända fram till det år det inte gör det — att känslighetstesta ALE-beräkningen mot ett intervall av ARO, som i det genomräknade exemplet, motverkar detta.
- **Att bara räkna IBM-liknande intrångskostnad, inte förtroendekostnaden**: ett intrång som dämpar medborgares vilja att använda digitala kanaler urholkar [kanalskiftesbesparingar](../kanalskiftesbesparingar/)-ärendet i åratal efteråt, en kostnad sällan inkluderad i intrångskostnadsuppskattningar.

## Källor

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users'
  privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
