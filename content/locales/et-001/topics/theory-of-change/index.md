# Muutuse teooria

MuutuSe teooria on selgeSõnaline, tagasi-kaardistatud põhjuslik tee pikaAjalisEst eesmärgiSt eelDusteNi ja tegevuSteNi, mis peavad eksisteerima, et seda saavutada, koos eeldusteGa, mis ühendavad igA lülI. See on ehitatud, alustaDES tulemuSeSt, mida tahad, ja küsiDES "mis peab olema tõsi vahetult enne sellE, et see juhtuks?", korduvalt, kuni jõuad tegevuSteNi, mida tegelikult saad tarnida — mis on vastupidine suund kui [logikMudel](../logic-model/), ja miks need kaks on komplementaarsed, mitte vahetatavaD.

## Miks see on oluline

Tagasi-kaardistamise meetodi formaliseeris Center for Theory of Change ja ActKnowledge, ehitaDES hindaja Carol Weiss'i tööLe, mis muudab programmi eeldused selgeSõnaliseKs, nii et neid saaks testida, mitte võtta usuGa. Ühendkuningriigi toetuseHindamine on seda otse absorbeerinud: HM Treasury Magenta Book käsitleb muutuSe teooriat alguSPunktiNa igaLe hindamisDisainiLe, ja rahastajad nagu National Lottery Community Fund nõuavad taotlejaTeLt sellE sõnastamist, enne kui nad ettepanekut rahastavad. Põhjus, miks see on oluline tarkvaraInseneriLe, on, et muutuSe teooria on dokument, mis peaks määrama, mida teie süsteem peab mõõtma — kui põhjuslik ahel ütleb, "toetuseKasutus sõltub sellest, et taotlejad saavad personaliseeritud arVutuSe," on see testitav väide, mida teie toote saab instrumenteeruda tõendaKs, või ümber lükkaKs.

## Arvutus

MuutuSe teooria on struktuuriLinE, mitte numbriLinE. Igal lüliL peaks olema nii eeldus kui indikaator, mis võiks näidata, et eeldus on vale:

```
PikaAjalinE tulemus (eesmärk)
  ↑ eelDus + eeldus + indikaator
VaheTulemus N
  ↑ eelDus + eeldus + indikaator
  ...
VaheTulemus 1
  ↑ eelDus + eeldus + indikaator
Tegevused / interventsioonid
  ↑ kohustatuD ressursid
Sisendid
```

See struktuur annab sisendi otse [mõjuHindamisMeetoditeSSE](../impact-evaluation-methods/), mis eksisteerivad, et testida, kas eeldused igaL lüliL tõepoolest kehtivad, ja [kontrafaktuaalseSSE analüüsiSSE](../counterfactual-analysis/), mis testib, kas pikaAjaline tulemus oleks juhtunud niikuinii.

## Läbitöötatud näide

**Kohalik omavalitsus (kodutuSe ennetamine)**: pikaAjalinE tulemus on püsivad üüriSuhteD 12 kuuGa leibkonnaDeLe, kelL on väljaTõstmisE-risk.

- EelDus: leibkonnaD omavad realistlikKu, taskukohaST tagasimaksePlaani võlGaDeLe.
  Eeldus: juhtumitöötaja-läbiRäägitud plaanid on vastupidavaMad kui kohtu-määratuD.
  Indikaator: % plaaniDeSt, mis on veel aktiivsed 6 kuuGa.
- EelDus: leibkonnaD taotlevad toetusi, mida nad on õigustatud saama.
  Eeldus: digitaalne toetusKalkulaator suurendab korrektseid taotlusi vastu paberFormulariDeLe.
  Indikaator: taotluSe-täpsuSe määr, võrreldaDES enne/pärast riista kasutuselevõttu.
- Tegevused: juhtumitöötaja-triaazh, digitaalne toetusKalkulaator, võlgA-läbiRääkimine.

Pilootkohordis 120 leibkonnaST pidaS toetusKalkulaatori eeldus 102 leibkonnaLe (85%), kes liikusid edasi korrektseLe taotlemiSeLe, tõendatuD järgneva protsessiHindamisEgA — andeS programmTeamiLe tõenduSt selle spetsiifilisE lüli kohta, mitte ühte otsa-otsaNi väidet kodutuSe ennetamisEst.

**Heategevusorganisatsioon (noorteMentorlus)**: pikaAjalinE tulemus on vähendatud kooliVäljaheitmine. TagasiKaardistatuD eelDusEd: parandatud emotsionaalne reguLatsioon → usaldusVäärne üks-ühele-suhE mentoriGa → konsistentne nädalaNe kontakt üle kahE trimestri. Teooria teeb selgeSõnaliseKs, et "konsistentse nädalaSe kontakti" eelDuSe misSimine (ütleme, mentoriTe voolavuSe pärast) prognoosib, et tulemus ei järgne, mis on testitav, falsifitseeritav väide, mitte lootus.

## Seos tarkvaraarendusega

MuutuSe teooria peaks kujundama toote andmeMudelit enne, kui üks dashboard on ehitatud: identifitseeri, millised lülid vajavad indikaatorit, ja instrumenteeri neid spetsiifiliSelt, selle asemel, et vaikimisi minna selle juurde, mis on lihtsaIm logida. Selle teeb ka tooteKaardi-vestlusi distsiplineeriTuKs — funktsioon, mis ei kaardistu mitte ühELe lüliLe ahelaS, ei ole ilmSelt ehitamist väärt. Vaata [logikMudel](../logic-model/) edasi-suunatuD vastutusAhelaKs, mis on ehitatud korD, kui teooria on kokkuLepitud, [sotsiaalne tulu investeeringult](../social-return-on-investment/) meetodiKs, mis sõltub muutuSe teooriaST, et skopeerida, milliseid tulemusi väärtustada, ja [tulemused versus väljundid](../outcomes-vs-outputs/) distinktSiooni jaoks, millest vaheTulemuse-lülid sõltuvad.

## Lõksud

- **Selle segiAjamine logikMudeliGa.** MuutuSe teooria on põhjusLik ja selgitav (miks me usume, et see töötab); logikMudel on järjeKorraLinE ja kirjelDav (mis juhtub millises järjeKorraS). Ainult ühe toomine jätab vahele kas "miks" või vastutusRaja.
- **Eelduste jätmine implitsiitseKs.** Tagasi-kaardistamise kogu väärtus on testitavate eeldusTe paljastamine; muutuSe teooria, mis lihtsalt loetleb kaste ja nooli, nimeta MaTa, mis võiks muuta igA lüli valeKs, on dekoratsioon.
- **Selle ehitamine üks korD ja riiuliLe panemine.** MuutuSe teooria, mis on kirjutatud rahastuS-pakkumiSeKs ja mitte kunagi uuesti külastatud, lõpetab kasuliK olemiSe hetKeL, mil tõendid alustavad lüli vastuOlemiSt.
- **SidusgruPide-sisendi vahele jätmine.** MuutuSe teooria, mis on ehitatud täielikult tellijaTe poolt, ilma eesLiini-personali või kasusaajaTe sisendiTa, kaldub kodeerima eeldusi, mida keegi, kes teenust tarnib, tegelikult mitte usub.

## Allikad

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
