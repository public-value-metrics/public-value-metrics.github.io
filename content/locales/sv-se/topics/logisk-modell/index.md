# Logisk modell

En logisk modell är ett linjärt diagram som kopplar samman insatser, aktiviteter, resultat, utfall och effekt för ett program, läst från vänster till höger som en ansvarskedja: resurser går in, aktiviteter sker, resultat produceras, utfall förändras för förmånstagare, och effekt tillfaller på en bredare eller längre tidsskala. Det är den standardstruktur finansiärer och revisorer förväntar sig att ett program ska kunna rapporteras mot, och den framåtriktade motsvarigheten till en bakåtkartlagd [teori om förändring](../teori-om-förändring/).

## Varför det spelar roll

HM Treasurys Magenta Book specificerar den logiska modellen som ett obligatoriskt inslag i utformningen av programutvärdering, och finansiärer som National Lottery Community Fund bygger sina ansöknings- och rapporteringsmallar kring just denna femkolumnskedja. Dess värde är att den tvingar ett program att i ett diagram ange vad det kommer att spendera, vad det kommer att göra med det, vad det kommer att producera och — avgörande — vad som bör förändras som resultat, på en detaljnivå som ett stycke prosa tenderar att dölja. En logisk modell med en fylld insats- och aktivitetskolumn men en tom eller vag utfallskolumn kan diagnostiseras vid en blick, vilket är precis varför finansiärer ber om en.

## Beräkningen

Den logiska modellen är en strukturell kedja snarare än en formel:

```
Insatser        Aktiviteter       Resultat            Utfall
（investerade   （vad som görs     （direkta,          （förändring
 resurser）       med dem）        räknebara            för
                                   produkter）          förmånstagare）

                                                        Effekt
                                                        （långsiktig,
                                                        förändring
                                                        på befolknings-
                                                        eller
                                                        systemnivå）
```

Varje kolumn bör vara mer specifik än den föregående: insatser är vad du spenderar, aktiviteter är vad du gör, resultat är vad som levereras oavsett effekt, utfall är vad som förändras som resultat — distinktionen täcks fullständigt i [utfall kontra output](../utfall-kontra-output/) — och effekt är den varaktiga, ofta endast delvis tillskrivningsbara, långsiktiga förändringen.

## Genomräknat exempel

**Kommun (digital skuldrådgivningstjänst)**:

- Insatser: 180 000 £ årlig budget, 4,0 heltidsanställda rådgivare, ett ärendehanteringssystem.
- Aktiviteter: uppsökande sessioner, en-till-en-rådgivningsmöten för skulder.
- Resultat: 900 möten levererade; 750 skuld- och bidragsplaner utfärdade.
- Utfall: av klienter som når en 6-månadersuppföljning rapporterar 60% (450 av 750) minskade skulder, i genomsnitt en minskning på 1 200 £ per klient — 540 000 £ i aggregerad skuldminskning.
- Effekt: en mätbar minskning av hemlöshetsansökningar från tjänstens klientbas över två år, endast delvis tillskrivningsbar denna tjänst tillsammans med andra insatser (se [kontrafaktisk analys](../kontrafaktisk-analys/)).

**Ideell organisation (matbankshänvisningspartnerskap)**:

- Insatser: 45 000 £, 1,5 heltidsanställd samordnare, partnerskapsavtal med 12 hänvisande organisationer.
- Aktiviteter: hänvisningstriage, paketering och distribution av paket.
- Resultat: 5 000 matpaket distribuerade till 1 100 hushåll.
- Utfall: 68% av undersökta hushåll (748 av 1 100) rapporterar förbättrad livsmedelstrygghet vid ett uppföljningssamtal efter 4 veckor.
- Effekt: bidrag till minskad lokal efterfrågan på krisstöd, endast styrkt i aggregerad områdesstatistik, inte tillskrivningsbar denna organisation ensam.

## Koppling till mjukvaruutveckling

Den logiska modellen är nära en bokstavlig datamodell för ett utfallssystem: insatser och aktiviteter är operativ data du redan har (utgifter, bemanning, sessionsloggar); resultat är lätta att instrumentera eftersom de räknas vid leveranstillfället; utfall kräver medvetet designad insamling av uppföljningsdata (enkäter, koppling av administrativ data) som inte kommer att existera om inte någon bygger den; effekt kräver vanligtvis kopplad, longitudinell eller befolkningsnivådata utöver något enskilt programs system. Ingenjörer som bygger rapporteringsverktyg bör driva uppdragsgivare att definiera utfalls- och effektindikatorer vid designtillfället, istället för att som standard bygga en instrumentpanel enbart för resultat eftersom det är vad transaktionsdatan redan stödjer. Se [social avkastning på investering](../social-avkastning-på-investering/) för en metod som specifikt värderar utfalls- och effektkolumnerna, och [nyttorealisering](../nyttorealisering/) för att spåra om effektkolumnen faktiskt levererades.

## Fallgropar

- **Att stanna vid resultat.** En instrumentpanel som rapporterar levererade möten eller distribuerade paket och antyder nytta rapporterar aktivitet, inte resultat — se [utfall kontra output](../utfall-kontra-output/).
- **Inget angivet kausalt samband mellan kolumner.** En logisk modell anger kedjan men inte varför aktiviteter bör producera resultat som bör producera utfall; det resonemanget hör hemma i en [teori om förändring](../teori-om-förändring/), och en logisk modell utan en bakom den är otestad.
- **Att behandla den som ett engångsansökningsdokument.** Logiska modeller producerade endast för att tillfredsställa en finansieringsansökan och aldrig uppdaterade slutar spegla vad programmet faktiskt gör.
- **Tillskrivningskryp i effektkolumnen.** Att påstå förändring på befolkningsnivå som orsakad enbart av ett program, utan en kontrafaktisk situation, överdriver vad evidensen stödjer.

## Källor

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004).
  <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
