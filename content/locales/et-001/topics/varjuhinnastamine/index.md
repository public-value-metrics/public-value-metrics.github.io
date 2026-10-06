# Varjuhinnastamine

VarjuHind on hinnatud väärtus, mis määratakse kaubaLe, ressursiLe, või eksternaalsuSeLe, millel pole vaadeldAvat turuHinda, või kelle turuHind on moonutatud ja ei peegelda selle tõelist sotsiaalset väärtust. Valitsuse hindamine toetub väikeSeLe settiLe ametliKeSt varjuHindaDeSt — süsinik, mitte-töö-aeg, töötu tööJõud — avaldatuNa tsentraalSelt, nii et iga osakond kasutab sama numbrit.

## Miks see on oluline

VarjuHinnad eksisteerivad, sest [sotsiaalne kulu-kasu-analüüs](../sotsiaalse-kulu-kasu-analüüs/) ei saa funktsioneerida rahaLise väärtuSeTa igAle kuluLe ja kasuLe, ja mitmel kõige tagajärJEkaMal — süsinikuTonn, mis on emiteeritud, pendlajA tunD, mujal-töötu tööJõu tunD — ei ole mingit turuHinda üldse, või on turuHind, mis misRepreseteerib nende tõelist sotsiaalset kulu. HM Treasury ja Department for Energy Security and Net Zero avaldavad ühiselt süsiniku-varjuHinnA, mida kasutatakse üle kõigE Ühendkuningriigi valitsuse hindamiSe (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), tuletatud mitte mingiST süsinikuTuru-hinnaSt, vaid eesmärgi-konsistentse lähenemiSeSt: süsinikuVäärtus on seadud marginaalseLe vähendaMisKuluLe, mida vajatakse Ühendkuningriigi seadusKohustusLike süsinikuEelArvete tabamiSeKs, mis on fundamentaalselt erinev loogika kui vaadelda, mis eest süsinik tegelikult kaubeldakse EU-s või UK Emissions Trading Scheme'il.

VarjuPalgaMäär järgib sarnast loogikat tööJõu poolel. Kellegi tööLe võtmine, kes muidu oleks olnud töötu, ei maksa ühiskonnaLe nende täit palka — osa sellest palgast on ülekanDe loobutuD toetusMakseteSt ja kadunuD vaBaajA-/otsinguAjaSt, mitte netoUus-tõmme ühiskonna ressurssiDeLt — nii et Green Booki juhend seab varjuHinna allapoole turuPalka tööJõuLe, mis on tõmmatud töötuSeSt, kajastaDES selle tööJõu tõelist alternatiivKulu (vaata [alternatiivkulu avalikes kulutustes](../alternatiivkulu-avalikes-kulutustes/)), mitte selle turuHinda.

## Arvutus

```
Süsiniku varjuHind (illustratiivne struktuur, praegused
väärtused ametlikuSt BEIS/DESNZ süsinikuVäärtuste-riistaSt
— ei kasuta forFalenuD näitajaid):
  Kaubeldav sektori väärtus: informeeritud ETS-loaHinna-
    trajektoorideST
  Mitte-kaubeldav sektori (eesmärgi-konsistentne) väärtus:
    seadud marginaalseLe vähendaMisKuluLe, mida vajatakse
    seadusKohustusLike süsinikuEelArvete täitmiSeKs, tõuSvaNa
    aja jooksul, kui lihtsaMad vähendamisVariandiD ammenduvaD
  Rakendatud kui: £/tonn CO2e × tonnid emiteeritud või
    vähendatud variandi poolt, diskonteeritud sotsiaalsEl
    diskontomäärAl tuleviku aastateKs

VarjuPalgaMäär (SWR):
  SWR = TuruPalk − (säästetuD vaBaajA/otsinguAjA väärtus +
                     mitte-enam-makstuD toetusMaksete väärtus)
  Tüüpiliselt väljendatud turuPalga fraktsiooniNa (nt SWR
    = 0,6 × turuPalk kõrge-töötuSe alaL, Green Book Lisa A
    juhendi kohaselt tööTurudeST varu-kapatsiteediGa)
```

Mõlemad näitajad on tsentraalSelt seadud poliitikaKonventsioonid, mitte empiiRiliseD turuVaatlused — varjuHinna kogu mõte on substitueerida puuduVaT või moonutatuD turgu, nii et hindamine, mis kasutab üht, peab tsiteerima praegust ametlikKu allikat selle asemel, et tuletada oma näitajat, täpselt sellepärast, et iga osakonna hindamine oleks võrreldAv.

## Läbitöötatud näide

**Riiklik valitsus**: üleujutuSKaitse-skeemi hindamine hindab, et see väldib 400 tonni CO2e emissiooni aastaS (läbi vähendatuD kiireloomulisE-tehniKa-kasutuSe ja vähendatuD manustatuD-süsiniKu väldituDSt taasEhitusEst) üle 30-aastaSe hindamisEluIga, võrreldaDES "do minimum" baasJoonE vastu.

```
IllustratiivnE süsiniku varjuHind: 280 £/tonn CO2e (aasta 1,
  tõuSVA üle hindamisPerIoodi ametlikuSt mitte-kaubeldava-
  süsiniku-väärtuste-skeemiSt)
Aasta 1 süsiniku kasu = 400 × 280 £ = 112 000 £
```

Sest ametlik skeem omab süsinikuVäärtust *tõuSvaNa* üle hindamisPerIoodi (kajastaDES tihendaVaid süsinikuEelArveid), peab analüütik rakendama korrektse aasta-spetsiifiliSe väärtuse igaLe aastaLe 30-aastaseS vooGaS, mitte flat määrA — aasta 1 väärtuse kasutamine läbivalt alaHindaks hilisemate-aastate kasusid ja moonutaks rangjastust alternatiivsete üleujutuSKaitse-disainide vastu erinevaTeGa süsiniku-profiiliGa.

**Kohalik omavalitsus**: linnavalitsuse tööHõiveToetuSe programm pikaAjaliseLe töötuTeLe elanikuTeLe paigutab 150 inimest töökohtadeSSE, mis maksavad 11 £/tund. Selle väärtustamine täieliku turuPalgaGa krediteeriks programmi 11 £ × töötatud tundiDeGa sotsiaalse kasu nagu, kuid varjuPalgaMäärA-lähenemine tunnistab, et need ei olnud töötajad tõmmatuD muudeSt töökohtaDeSt — nende tööJõu tõeline alternatiivKulu enne programmi oli madal.

```
TuruPalk: 11,00 £/tund
VarjuPalgaMäär (illustratiivne, kõrge kohalik töötus): 0,6 ×
turuPalk = 6,60 £/tund
NetoSotsiaalnE kasu omistatav tunni töötatuD kohta ≈ 11,00 £
  − 6,60 £ = 4,40 £/tund (lisa-väärtus, mis on loodud,
  liigutaDES tõepoolest jõuDeTu tööJõud tootmiSeSSE, erinevalt
  palgaST ise, mis on largely ülekanne)
```

See on, miks tööHõiveProgrammide hindamine kõrge-töötuSe alaDeL saab näidata positiivset neto-sotsiaalset väärtust, isegi kui sama programm, kasutatud täis-tööHõiveGa alaL, kus nihutatud tööJõud oleks lihtsalt tõmmatud muudeSt töökohtadeSt, ei näitaks.

## Seos tarkvaraarendusega

VarjuHinnastamine puutub harva otse tarkvaraTarneGa kokku, kuid see on oluline, kui äriJuhtum väidab süsinikuList või sotsiaalset kasu IT-muutuSeSt — andmeKeskuSe konsolideerimine, mis väidab süsinikuSäästu, või paberiVaba-teenus, mis väidab välditud printimise- ja postage-süsinikku, peab kasutama praegust ametlikKu süsiniku-varjuHinda, mitte väljaMõeldud näitajat, ja peab rakendama korrektse aasta-aastaSe skeemi flat-määrA asemel, täpselt nagu iga muu Green Book hindamisE sisend. Vaata [omandiKulu valitsuse IT-s](../koguomandikulu-statslikus-it-s/) ja [statslik cybersikkerheds-väärtus](../statsliku-sektori-küberturvalisuse-väärtus/), mis mõlemad vajavad sageli varjuHinda raske-monetiseerida sisendiLe (murdeRisk, seisaK) koos otse-kuluArVutatuD elementidega.

## Lõksud

- **ForFalenuD süsiniku- või palga-näitajA kasutamine.** Mõlemad väärtused on perioDiLiselt revideeritud tsentraalseST juhendiST; forFalenuD näitajaLe ehitatud hindamine ei läbi Treasury granskumist.
- **Flat varju-süsiniku-hinna rakendamine üle mitme-dekaadi-liseL hindamiseL.** AmetlikKu skeem tõuseb aja jooksul; aasta-1 väärtuse kasutamine läbivalt mis-ütleb vale kasude või kulude profiiLi.
- **VarjuPalga segiAjamine töötaja tegelikuD palga allahindlusEgA.** VarjuPalgaMäär kohandab *hindamiSe* tööJõu-sisendi väärtustamist, mitte palka, mida töötaja tegelikult saab — nende kahe segiAjamine inviteerib (ebaKorrektselt) õigustama alla-turu-palka.
- **Skräddersyd varjuHinna tuletamine ametliku asemel.** VarjuHinnad on poliitikaKonventsioonid täpselt sellepärast, et hindamised oleksid võrreldAvad üle osakondade; lokaalselt väljaMõeldud näitaja, ükskõik kui hästi arutletud, murdab seda võrreldAvust.

## Allikad

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
