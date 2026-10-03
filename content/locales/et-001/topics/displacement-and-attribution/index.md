# Nihutamine ja omistamine

Nihutamine toimub, kui programmi ilmne kasu saavutatakse tegevuse või kasu äraVõtmisega mujalt, mitte millegi uue loomisega — teie võit on kellegi teise kadu. Omistamine on seotud küsimus selle kohta, kui palju vaadeldud tulemust teie interventsioon saab tõepoolest endale omistada, kui ka teised osalejad ja faktorid aitasid kaasa. Mõlemad on standardKohandused Ühendkuningriigi avaliku sektori hindamisJuhendis, koos surnudKaalu ja lekkega, ja mõlemad jäetakse regulaarselt vahele mõjuVäidetes, mis näivad palju tugevamad kui need on.

## Miks see on oluline

Kohaliku omavalitsuse ettevõteToetuseSkeem, mis aitab 50 kauplusel regeneratsiooniTsooni ümber paikneda, võib raporteerida "50 ettevõtet toetatud, 200 töökohta loodud" — kuid kui need ettevõtted lihtsalt liikusid naaberTänaValt, mitte laienesid, olid töökohad nihutatud, mitte loodud, ja linnaosa-laiuSE (või regiooni-laiuSE) netoEfekt võib olla lähedal nullile. HM Treasury Magenta Book ja kaua-kestnud Additionality Guide käsitlevad nihutamist nõutud mahaArvamiseNa täpselt sellepärast, et kohalikud edulood on tavalised isegi kui need ei toota mingit netoRiiklikku või netoRegionaalset kasu — väärtus on lihtsalt liikunud, sageli kahjuks alale või osalejatele, kes selle kaotasid. StruktuurFondide hindamisJuhend (kasutusel endiste ELi Regional Development Fund programmide ja nende koduMaa järeltulijate, nagu UK Shared Prosperity Fund, jaoks) formaliseerib seda kolmel ruumilisel skaalal: lokaalne nihutamine (linna sees), regionaalne nihutamine (regiooni sees), ja riiklik nihutamine (üle Ühendkuningriigi), sest interventsioon võib olla täiendav ühel skaalal, olles samas puhas nihutamine laiemal — tööHõiveProgramm, mis tõmbab töötajaid naaberlinnaSt, on riiklikult neutraalne, isegi kui see näeb välja kui kohalik edu.

Omistamine on sõsarProbleem partnerluse-rohkeSE tarnes, mis on nüüd norm sotsiaalsektori ja ametiteVahelise avaliku teenuse töös. Kui kolm organisatsiooni ühiselt tarnivad kodutuseEnnetamiSE teenust, võib iga organisatsiooni aastaRaport sõltumatult väita krediiti samale langusele tänaValMagamiseS — raportite peale kokku liidetuna, võib väidetav mõju ületada vaadeldud reaalMaailma muutust, mõnikord mitme kordse. Magenta Booki juhend panuseAnalüüsi kohta eksisteerib täpselt sellepärast, et juhuslik omistamine ühele osalejale on sageli võimatu mitme-ameti tarnes, ja aus vastus on sageli "me aitasime kaasa sellele tulemusele", mitte "me põhjustasime selle tulemuse."

## Arvutus

Nihutamine osana standardsest netoMõju järjestusest (vaata [täiendavus ja surnud kaal](../additionality-and-deadweight/) täieliku ahela jaoks):

```
NetoTäiendav mõju = BrutoTulemus − SurnudKaal −
                    Nihutamine − Leke, × Multiplikaator

Nihutamise määr = mujalt ümberSuunatud kasu/tegevus /
                  vaadeldud koguBrutoKasu/tegevus
```

Omistamine, kus mitu osalejat panustab ühte tulemusse, väljendub tüüpiliselt panuseOsana, mitte täpse protsendina, sest seda ei saa tavaliselt mõõta samasuguse rangusega kui nihutamist:

```
OmistatAv osa ≈ f(põhjuslikE panuse tugevus, teiste
                osalejate panused, väliseD/kontekstuaalseD
                faktorid)

Väidetav mõju ei peaks kunagi ületama:
  Σ (iga partneri omistatav osa) ≤ 100% kogu vaadeldud
                                    tulemusest
```

## Läbitöötatud näide

**RegeneratsiooniGrAnt**: linnavalitsuse tänaVa-grAntSkeem raporteerib 200 uut jaeKaubanduseTöökohta loodud rahastatud tsoonis. JärelKontrolli-uuring leiab, et 60 neist töökohtadest tulid ettevõtetelt, mis liikusid naaberSt, rahastamataSt tänaVaSt sama linnaosa sees, ja veel 30 tulid rahvusvahelistelt kettidelt, mis avaksid harusid, mis oleksid avatud kuskil regioonis grAndist sõltumata.

```
BrutoTöökohad väidetud = 200
Lokaalne nihutamine = 60 (liikus linnaosa sees)
Regionaalne nihutamine = 30 (oleks regionaalselt niikuinii
                         avatud)

NetoTäiendavad töökohad (linnaosa tasand) = 200 − 60 = 140
NetoTäiendavad töökohad (regionaalne tasand) = 200 − 60 − 30
                                              = 110
```

Aus pealKiri sõltub geograafilisest skaalaSt, mida rahastaja hoolib — Treasury äriJuhtum, mida hinnatakse riiklikul või regionaalsel tasandil, peaks kasutama 110, mitte linnaosa-tasandi 140, ja kindlasti mitte raw 200.

**Mitme-ameti kodutuseTeenus**: kolm partnerOrganisatsiooni (linnavalitsus, elamispinnaheategevusorganisatsioon, ja tervishoiuAmet) tarnivad ühiselt tänaValMagamiSE vähendamisE teenust. TänaValMagamiNe alas langes 30 inimese võrra üle aasta. Iga organisatsiooni individuaalne aastaRaport väidab "me vähendasime tänaValMagamist 30 võrra" — kokku liidetuna väidavad kolm raportit 90 abistatud inimest, kolm korda tegelikust vähenemisest. PanuseAnalüüs, mis annab igale partnerile osa (ütleme, 40% linnavalitsus, 35% heategevusorganisatsioon, 25% tervishoiuAmet, põhineNa dokumenteeritud rollil ja sõltumatul hinnangul), raporteeriks vastavalt 12, 10,5, ja 7,5, liitudes korrektselt vaadeldud 30-ni.

## Seos tarkvaraarendusega

Nihutamine ja omistamine kujundavad, kuidas mõjuJälgimise- ja tulemusteRaporteerimisSüsteemid peaksid olema disainitud mitme-asukoha või mitme-partneri tarne jaoks:

- GeograafiLine ja organisatsioonILine ulatus peaksid olema selgeSõnalised, esmaKlassi väljad igas mõjuDashboardis — näitaja, mis on raporteeritud "linnaosa jaoks" ja sama näitaja raporteeritud "regiooni jaoks" on erinevad numbrid, ja süsteem, mis need segab, toodab numbreid, mida ei saa portfelli-tasandil ühildada.
- Kus mitu partnerit tarnivad ühiselt, peaks tulemusteSüsteem registreerima panuseOsad (või vähemalt märgistama ühise omistamise), mitte lubama igal partneri raporteerimisMoodulil sõltumatult väita 100% jagatud tulemusest — muidu portfelli-tasandi koKkuVõtted ülehindavad koguMõju, mõnikord tõsiselt.
- See ühendub [sotsiaalse tulu investeeringult](../social-return-on-investment/) ja [grAndi tulemusteRaporteerimisega](../grant-outcomes-reporting/): SROI või IRIS+ arvutus, mis ignoreerib nihutamist või üleOmistab jagatud tulemusi, toodab inflatsioonitud suhtarve, mis ei läbi auditit või replikatsiooni.

## Lõksud

- **Kohaliku eduKa raporteerimine laiema nihutamise kontrollimata.** Programm võib näha väga edukas välja kõige väiksema raporteerimisSkaala juures, olles samas neutraalne või isegi negatiivne laiemal; ütle alati, millisele geograafilisele skaalale netoNäitaja kehtib.
- **Iga partneri laskmine ühises tarnes väita täielikku krediiti.** Kui panuseOsad ei ole kokkuLepitud ja dokumenteeritud, ülehindab koKkuVõtteRaporteerimine üle partnerite koguMõju — kontrolli, et partneri-tasandi väited liituksid mitte rohkem kui vaadeldud koguSummani.
- **Omistamise käsitlemine täpse protsendina, kui see on tegelikult hinnang.** PanuseAnalüüs, erinevalt juhuslikust kontrafaktuaalisest, toodab kaitstava hinnanguJ, mitte mõõdetud fakti; esita see sobiva ebaKindlusega, mitte vale täpsusega.
- **Nihutamise ignoreerimine turuLe-suunatud interventsioonides.** EttevõteToetus, tööHõiveSkeemid, ja koha-põhine regeneratsioon on klassikalised kõrge-nihutamise kategooriad; käsitle nihutamise-kontrolle nende puhul kohustuslikuKs, mitte valikuliseKs.

## Allikad

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
