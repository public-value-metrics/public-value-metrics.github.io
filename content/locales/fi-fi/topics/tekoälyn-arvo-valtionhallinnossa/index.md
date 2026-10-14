# Tekoälyn arvo valtionhallinnossa

Tekoälyn arvo valtionhallinnossa on vaatimus, että julkisessa palvelussa käytettävän tekoälyjärjestelmän on ylitettävä sama rahalle vastine- ja julkisen arvon raja kuin mikä tahansa muu menopäätös — ei matalampaa sen vuoksi, että se on uutta, eikä korkeampaa sen vuoksi, että sitä pelätään. Se on kysymys, johon toimitustiimin on pystyttävä vastaamaan ennen, ei jälkeen, kun tekoälyominaisuus julkaistaan: tuottaako tämä enemmän arvoa kuin se maksaa, kun varmennus, valvonta ja riski on hinnoiteltu rehellisesti?

## Miksi tällä on merkitystä

Ison-Britannian Central Digital and Data Office (CDDO) julkaisi Generative AI Framework for Government -viitekehyksensä vuonna 2024, rakentaen aiemman kesäkuun 2023 väliaikaisen ohjeistuksen varaan, ja jäsensi sen kymmenen periaatteen ympärille, jotka kattavat, mitä generatiivinen tekoäly on, sen eettiset vaikutukset, työkalujen turvallisuuden, laadunvarmistuskontrollit, generatiivisen tekoälyn koko elinkaaren hallinnan, aitojen käyttötapausten tunnistamisen, hallinnonalojen välisen yhteistyön, läpinäkyvyyden, taidot ja hallinnon. Viitekehyksen painotus "merkitykselliselle ihmisen valvonnalle" ja koko elinkaaren hallinnalle on olemassa, koska tekoälyhankkeiden liiketoimintaperusteluilla on erityinen epäonnistumistapa, jota muulla IT-menolla ei ole: pilotin otsikkotuottavuusluku on helppo tuottaa ja helppo liioitella, koska se mitataan ennen kuin työkalun luoma varmennus-, korjaus- ja valvontataakka on otettu huomioon. Viitekehyksen rinnalla Algorithmic Transparency Recording Standard (ATRS) edellyttää julkisilta elimiltä standardoidun tietueen julkaisemista — tarkoitus, käytetty data, suorituskyky, oikeudenmukaisuustestaus, ihmisvalvontajärjestelyt — algoritmisille työkaluille, joilla on merkittävä vaikutus yksilöitä koskeviin päätöksiin, mikä tekee tekoälyjärjestelmän varmennuskustannuksesta julkisen tiedon, ei sisäisen arvion, jonka tiimi voi hiljaa ohittaa.

## Matematiikka

Tekoälyn käyttöönottoa arvioidaan lisänä, ei korvaajana, tavalliselle [rahalle vastine](../rahalle-vastine/) -arvioinnille, tekoälykohtaiset termit tehtynä nimenomaisiksi sen sijaan, että ne sulautettaisiin yhteen "tuottavuushyöty"-lukuun:

```
Tekoälyjärjestelmän nettoarvo =
    tuottavuushyöty (säästetty aika × kuormitettu henkilöstökustannus)
  − lisenssi-/laskentakustannus
  − ihmisen varmennus- ja valvontakustannus (tekoälyn tuotoksen tarkistaminen ennen
    kuin sen perusteella toimitaan — tämä ei kutistu nollaan edes kypsillä työkaluilla)
  − ATRS-dokumentaation ja jatkuvan seurannan kustannus
  − virheiden, vinoumien tai hallusinaation aiheuttaman haitan riskikorjattu kustannus,
    painotettuna sen mukaan, kuka haitan kantaa (distributional-weighting)

Pilotin tuottavuusluku, joka jättää valvontatermin pois, ei ole vertailukelpoinen
tavanomaisen toiminnan kustannuslähtötason kanssa, joka jo sisältää vastaavan
ihmistarkastuksen — ks. ai-productivity-in-the-public-sector tuottavuuden mittaamisen
täydemmästä kurista, jota tämä lainaa.
```

## Työstetty esimerkki

**Paikallisviranomainen, joka käyttää generatiivista tekoälytyökalua laatiakseen ensimmäisiä vastauksia rutiininomaisiin kunnallisveroa koskeviin kyselyihin**: 25 000 kyselyä/vuosi, aiemmin kokonaan sosiaalityöntekijöiden käsittelemiä keskimäärin 14 minuuttia/kysely, kuormitettu henkilöstökustannus £34/tunti.

```
Lähtötason (ei tekoälyä) kustannus:
  25 000 × (14/60) × £34 = £198 333/vuosi

Pilotin otsikkoväite: tekoäly laatii vastauksen 90 sekunnissa,
käsittelijä "vain tarkistaa ja lähettää" — väitetty uusi aika on 3 minuuttia
  25 000 × (3/60) × £34 = £42 500/vuosi
  → väitetty säästö £155 833/vuosi (näyttää mullistavalta)

Täysin kuormitettu luku, mitattuna 3 kuukautta tuotannossa pilotin
käsin poimittujen testitapausten sijaan:
  Todellinen tarkistus- ja korjausaika vastausta kohti: 6 minuuttia (luonnokset
  tarvitsevat todellista muokkausta monimutkaisissa tai tunnepitoisissa kyselyissä)
  25 000 × (6/60) × £34 = £85 000/vuosi
  Lisenssi-/laskentakustannus: £38 000/vuosi
  ATRS-dokumentaatio ja neljännesvuosittainen vinouma-/laatuseuranta: £14 000/vuosi
  Kokonaiskustannus = 85 000 + 38 000 + 14 000 = £137 000/vuosi

Todellinen säästö = 198 333 − 137 000 = £61 333/vuosi — aito ja säilyttämisen
arvoinen, mutta selvästi alle puolet pilotin otsikkoväitteestä, ja sen löytäminen
vaati rehellisen valvonta-ajan mittauksen, ei pilotin parhaan tapauksen mittausta.
```

## Yhteys ohjelmistotekniikkaan

Tässä [tekoälyn tuottavuus julkisella sektorilla](../tekoälyn-tuottavuus-julkisella-sektorilla/) ja tämä aihe kohtaavat: julkisiin palveluihin tekoälyominaisuuksia rakentavat insinööritiimit omistavat instrumentoinnin, joka tekee työstetyn esimerkin "todellisen" luvun mahdolliseksi — todellisen tarkistusajan, luonnoksen ja lähetetyn vastauksen välisen muokkausetäisyyden ja eskalointiasteen kirjaamisen sen sijaan, että luotettaisiin pilotin demo-olosuhteisiin. Tekoälyominaisuudet tulisi arvioida [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohtaa 9 (turvallinen palvelu, käyttäjien yksityisyys) vasten ja ristiviitata aiheeseen [julkisen sektorin kyberturvallisuuden arvo](../julkisen-sektorin-kyberturvallisuuden-arvo/), kun työkalu koskettaa kansalaisdataa, ja mikä tahansa tekoälyjärjestelmä, jolla on merkittävä vaikutus yksilöitä koskeviin päätöksiin, tarvitsee ATRS-tietueen ennen kuin sitä voidaan pitää arviointivalmiina, samalla tavalla kuin palvelu tarvitsee läpäistyn [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) arvioinnin ennen tuotantoon siirtymistä.

## Sudenkuopat

- **Tekoälypesu**: olemassa olevan sääntöpohjaisen automaation uudelleenleimaaminen "tekoälyksi" tekoälyn käyttöönotolle varatun rahoituksen tai huomion saamiseksi, ilman tarkkuus- tai vinoumariskejä, jotka todella oikeuttavat viitekehyksen lisätarkastelun.
- **Pilottituottavuuden mittaaminen tuotantotuottavuuden sijaan**: pilotit ajetaan kuratoiduilla testitapauksilla sitoutuneiden, tarkkaavaisten tarkastajien kanssa; tuotanto ajetaan koko sotkuisella tapausmixillä tarkastajien kanssa, jotka ajan myötä kehittävät automaatiovinoumaa ja tarkistavat tuotoksia liian vähän — molemmat vääristävät rehellistä valvontakustannusta.
- **ATRS-rekisteröinnin ohittaminen, koska työkalu "ei oikeastaan ole automatisoitua päätöksentekoa"**: standardin kynnys on merkittävä vaikutus yksilöä koskevaan päätökseen, jonka useimmat kansalaisille suunnatut tekoälyluonnos- tai triage-työkalut täyttävät, vaikka ihminen teknisesti hyväksyisi lopputuloksen.
- **Virheiden jakaumavaikutusten sivuuttaminen**: tekoälyjärjestelmän kaikkien käyttäjien yli keskiarvoistettu virheaste voi kätkeä paljon korkeamman virhe- tai vinoumaasteen tietyille ryhmille; [jakaumapainotusta](../jakaumapainotus/) tulisi soveltaa riskikorjattuun haittatermiin, ei vain koostettuun tarkkuuslukuun.

## Lähteet

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
