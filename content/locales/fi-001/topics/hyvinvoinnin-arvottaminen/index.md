# Hyvinvoinnin arvottaminen (WELLBY)

Hyvinvoinnin arvottaminen hinnoittelee politiikan vaikutuksen suoraan elämäntyytyväisyyden termein käyttäen yksikkönä WELLBY:tä (hyvinvoinnilla korjattu elinvuosi) — yksi WELLBY vastaa yhden pisteen muutosta 0–10 elämäntyytyväisyysasteikolla, joka säilyy vuoden ajan. Se on HM Treasuryn virallisesti hyväksymä vaihtoehto sille, että jokainen hyöty rahamääräistetään maksuhalukkuuden kautta.

## Miksi tällä on merkitystä

HM Treasuryn "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) toi muodollisesti subjektiivisen hyvinvointidatan keskushallinnon arviointiin, antaen analyytikoille tavan arvottaa tuloksia — sosiaalinen yhteys, mielenterveys, turvallisuus, kansalaisosallistuminen — joita [ilmaistujen preferenssien](../ilmaistujen-preferenssien-arvottaminen/) ja [paljastettujen preferenssien](../paljastettujen-preferenssien-arvottaminen/) menetelmät eivät pysty hinnoittelemaan vakuuttavasti, koska ihmiset ovat usein huonoja ennustamaan, kuinka paljon hyödyke todella vaikuttaa heidän elämäntyytyväisyyteensä. Ohje, joka kehitettiin yhdessä What Works Centre for Wellbeingin kanssa, asettaa suositellun rahallisen arvon WELLBY:tä kohti — £13 000 (2021 hinnat, tarkistetaan määräajoin) — joka on johdettu suurissa hyvinvointitutkimuksissa havaitusta tulon ja elämäntyytyväisyyden välisestä suhteesta (pääasiassa ONS:n Annual Population Survey, joka on esittänyt neljä ONS4-hyvinvointikysymystä vuodesta 2011), antaen analyytikoille vaihtokurssin takaisin puntiin, kun tarvitaan rahamääräistettyä vertailua muihin Green Book -arviointeihin.

Menetelmä on tärkeä, koska se kääntää tavanomaisen arvottamislogiikan: sen sijaan, että kysyttäisiin, mitä ihmiset maksaisivat tuloksesta (ilmaistu preferenssi), tai päätellään arvo liittyvästä markkinatapahtumasta (paljastettu preferenssi), se mittaa tuloksen vaikutuksen raportoituun elämäntyytyväisyyteen suoraan, ohittaen kuilun sen välillä, mitä ihmiset sanovat haluavansa, ja sen, mikä todella tekee heidän asemastaan paremman. Tämä on myös sen keskeinen rajoitus — raportoituun elämäntyytyväisyyteen vaikuttavat sopeutumis- ja kehystysvaikutukset, jotka huolellisen ammattilaisen on kontrolloitava.

## Matematiikka

```
WELLBY = 1 elämäntyytyväisyyspiste (0-10-asteikko), joka säilyy 1 henkilölle 1 vuoden

Politiikan WELLBY:t yhteensä =
  Σ (elämäntyytyväisyyspisteiden muutos) × (vaikutettujen ihmisten määrä)
    × (kesto vuosina, diskontattuna sosiaalisella diskonttokorolla)

Rahamääräistetty arvo = WELLBY:t yhteensä × arvo WELLBY:tä kohti
  (HM Treasuryn suositusarvo: £13 000 WELLBY:tä kohti, 2021 hinnat,
   alttiina määräaikaisille tarkistuksille — tarkista nykyinen ohje ennen käyttöä)
```

Tämä eroaa terveystaloustieteen [hyvinvoinnilla korjatusta elinvuodesta](../hyvinvoinnilla-korjatut-elinvuodet/), joka on tyypillisesti ankkuroitu terveyteen liittyviin elämänlaatuasteikoihin (EQ-5D ja vastaavat) eikä yleiseen elämäntyytyväisyyteen; nämä kaksi liittyvät toisiinsa mutta eivät ole vaihdettavissa, ja Green Book -arviointien tulisi olla nimenomaisia siitä, mikä asteikko ja esille saamismenetelmä on raportoidun WELLBY-luvun taustalla.

## Työstetty esimerkki

**Paikallisviranomainen**: kunta pyörittää yhteisöllistä ystävätoimintaa eristäytyneille iäkkäille asukkaille, palvellen 400 ihmistä. ONS4-elämäntyytyväisyyskysymystä käyttävä ennen–jälkeen-hyvinvointikysely osoittaa osallistujien keskipisteiden nousevan 5,8:sta 6,5:een — 0,7 pisteen kasvu — joka säilyy ohjelman 2 vuoden rahoitetun keston ajan.

```
Tuotetut WELLBY:t = 400 henkilöä × 0,7 pistettä × 2 vuotta = 560 WELLBY:tä
Rahamääräistetty arvo = 560 × £13 000 = £7,28 milj.
Ohjelman kustannus = £450 000 kahdelle vuodelle

Hyöty-kustannussuhde ≈ £7,28 milj. / £0,45 milj. ≈ 16:1
```

Näin korkean suhdeluvun tulisi herättää tarkastelua eikä juhlintaa — Green Bookin hyvinvointiohje varoittaa nimenomaisesti ottamasta pienen otoksen itseraportoituja hyötyjä nimellisarvolla tarkistamatta valintavaikutuksia (liittyivätkö ohjelmaan vain sosiaalisimmat, todennäköisimmin paranevat asukkaat?) ja ilman vertailuryhmää; hyvin suunniteltu arviointi vähentäisi ei-osallistujilla havaitun kontrafaktuaalisen muutoksen, ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/).

**Valtionhallinto**: kahden työllisyysohjelman vertailu WELLBY:illä pelkkien ansioiden sijaan tavoittaa sen, että työttömyys kantaa hyvinvointikustannuksen menetetyn tulon lisäksi — brittiläinen hyvinvointitutkimus havaitsee johdonmukaisesti, että työttömyys laskee elämäntyytyväisyyttä enemmän kuin pelkkä tulonmenetys ennustaisi, rakenteen, tarkoituksen ja sosiaalisen kontaktin menettämisen ei-rahallisten vaikutusten vuoksi. Pelkästään ansiohyödyllä arvioitu ohjelma aliarvioisi arvonsa verrattuna sellaiseen, jota arvioidaan lisäksi WELLBY:illä.

## Yhteys ohjelmistotekniikkaan

Hyvinvoinnin arvottaminen harvoin saavuttaa insinöörijoukkueita suoraan, mutta se muokkaa sitä, mikä määritellään "menestykseksi" yhteiskunnallisen sektorin ja julkisten palvelujen tuotteille — digitaalisen ystävätoiminnan alustan, mielenterveyden triage-työkalun tai eristäytyneiden asukkaiden yhteisöalustan tulisi odottaa, että sen vaikutus mitataan lopulta näin, mikä tarkoittaa, että tuoteanalytiikan on tallennettava, *kuka* tavoitetaan ja *kuinka pitkäksi aikaa*, ei vain käyttömääriä. Rakenna hyvinvointikyselyiden instrumentointi (ONS4 tai validoidut vastineet) palvelun arviointiin alusta alkaen sen sijaan, että kiinnittäisit sen jälkikäteen; hyvinvoinnin lähtötason jälkiasentaminen palvelun käynnistyttyä menettää ennen–jälkeen-vertailun kokonaan. Ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) ja [vaikuttavuuden arviointimenetelmät](../vaikuttavuuden-arviointimenetelmät/).

## Sudenkuopat

- **Ei kontrafaktuaalia tai vertailuryhmää.** Ennen–jälkeen-hyvinvointikasvu ilman kontrollia sille, mitä olisi tapahtunut joka tapauksessa, liioittelee ohjelman vaikutusta; ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) ja [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/).
- **Pienet, itsevalikoituneet otokset.** Hyvinvointikyselyt ohjelman osallistujista, jotka liittyivät omasta halustaan, ovat alttiita valintaharhalle — ne, jotka liittyivät ja pysyivät, olivat uskottavasti jo nousussa.
- **£-per-WELLBY-muunnoksen käsitteleminen tarkkana.** Rahamääräistetty arvo on politiikkakonventio, joka on johdettu tulo–hyvinvointi-regressioista, ei markkinahinta; käytä sitä Green Book -arviointien väliseen vertailukelpoisuuteen, ei väitteenä siitä, "mitä hyvinvointi on arvoltaan".
- **WELLBY:iden sekoittaminen terveyteen liittyviin QALY:ihin.** Nämä kaksi mittaavat eri konstruktioita eri asteikoilla; ks. [hyvinvoinnilla korjatut elinvuodet](../hyvinvoinnilla-korjatut-elinvuodet/) terveystaloustieteen variantista äläkä keskiarvoista niitä yhteen.

## Lähteet

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4-mittarit).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica -tutkimustiivistelmät.
