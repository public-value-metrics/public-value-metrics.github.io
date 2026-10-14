# Luottamus- ja legitimiteettimittarit

Legitimiteetti ja tuki on yksi kolmesta Mark Mooren "strategisen kolmion" kyljestä teoksessa *Creating Public Value* (1995) — julkisen arvon itsensä ja toiminnallisen kyvykkyyden rinnalla — ja se on kylki, jota useimmin jätetään mittaamatta, koska toisin kuin budjettiin tai suoritemäärään, legitimiteettiin ei liity ilmeistä yksittäistä lukua. Luottamus- ja legitimiteettimittarit ovat korvikemittareiden perhe, jolla hallitukset täyttävät tämän aukon: instituutioluottamuskyselyt, valvontaelinten luottamusarviot, valitus- ja muutoksenhakudata sekä poliittisen/lainsäädännöllisen tuen indikaattorit.

## Miksi tällä on merkitystä

Mooren argumentti on, että julkinen johtaja, joka tuottaa todellista arvoa mutta menettää poliittisen ja julkisen legitimiteetin, menettää lopulta valtuuttavan ympäristön, jota tarvitaan toimituksen jatkamiseen — rahoitusta leikataan, valtuuksia kavennetaan ja palvelu näivettyy riippumatta siitä, kuinka hyviä sen tulokset ovat. Legitimiteetti ei siis ole toimitustuloskorttiin liimattu suhdetoiminnan jälkiajatus; se on kantava syöte sille, voiko tehtävä ylipäätään jatkua, minkä vuoksi se on tasa-arvoinen näkökulma [julkisen arvon tuloskortissa](../julkisen-arvon-tuloskortti/) eikä alaviite. OECD:n "Trust in Government" -kyselyohjelma on johtava maiden välinen yritys kvantifioida tätä: se seuraa OECD:n jäsenmaiden kansalaisten osuutta, jotka sanovat luottavansa kansalliseen hallitukseensa, ja sen pitkän aikavälin data osoittaa luottamuksen olevan erittäin herkkä sokeille — sekä vuoden 2008 finanssikriisi että COVID-19-pandemia tuottivat jyrkkiä kansallisen tason heilahduksia, joita seurasi usein vain osittainen elpyminen, ja OECD:n analyysi havaitsee johdonmukaisesti, että koettu *pätevyys* (toimittaako hallitus sen, mitä lupaa) ja koettu *oikeudenmukaisuus/eheys* (nähdäänkö hallituksen toimivan ilman korruptiota tai suosimista) ovat kaksi vahvinta luottamusluvun ajuria, erillään tyytyväisyydestä mihinkään yksittäiseen transaktioon. Hallitukset yrittävät yhä useammin operationalisoida legitimiteettiä myös hienojakoisemmalla tasolla — Ison-Britannian riippumattomat sääntelijät ja tarkastuselimet (National Audit Office, Parliamentary and Health Service Ombudsman, sektorisääntelijät kuten Ofsted ja Care Quality Commission) toimivat institutionalisoituina legitimiteettitarkistuksina, muuntaen "luottaako yleisö yhä tähän palveluun" tarkastettaviksi arvioiksi.

## Matematiikka

Luottamus ja legitimiteetti on viitekehysluonteinen aihe, jonka käyttökelpoiset kvantitatiiviset korvikkeet ovat:

```
Instituutioluottamusindeksi (OECD-tyylinen)
  = % kyselyn vastaajista, jotka vastaavat "kyllä" luottamus-hallitukseen-kysymykseen,
    seurattuna ajan yli, eriteltynä demografisen ryhmän mukaan

Legitimiteettikorvikejoukko (mikään yksittäinen luku ei korvaa konstruktia):
  - Hyväksytyt valitukset 1 000 palvelun käyttäjää kohti (oikeusasiamiehen tai sisäinen valitusdata)
  - Oikeudellisen uudelleenarvioinnin / muutoksenhaun onnistumisaste elimen päätöksiä vastaan
  - Riippumattoman sääntelijän/tarkastuselimen arvio (esim. "erinomainen" – "riittämätön" -luokat)
  - Lainsäädäntö-/valvontavaliokunnan luottamusäänestykset tai kriittisten raporttien tiheys
  - Tietopyyntöjen (freedom of information) määrä sekä luovutus-/kieltäytymisaste, korvikkeena
    koetulle läpinäkyvyydelle

Legitimiteetti vahvistetaan, ei lasketa: puolustettava legitimiteettiarvio
triangulaatioi useita yllä olevista sen sijaan, että nojaisi mihinkään yksittäiseen korvikkeeseen.
```

## Työstetty esimerkki

**Kansallinen veroviranomainen**: legitimiteetin triangulaatio vuotuiselle julkisen arvon raportille.

```
OECD-tyylinen luottamuskorvike (ministeriökohtainen luottamuskysely):
  58 % vastaajista sanoo luottavansa viranomaiseen "kohtelee minua oikeudenmukaisesti"
  (alas 64 %:sta kaksi vuotta aiemmin)

Valitusdata:
  Hyväksytyt valitukset: 4,2 per 1 000 veronmaksajakontaktia (ylös 3,1:stä per 1 000)

Oikeusasiamiehen ohjaukset:
  Ohjaukset riippumattomalle Adjudicator's Officelle: 1 850 vuoden aikana, joista
  61 % hyväksytty kokonaan tai osittain viranomaista vastaan (ylös 48 %:sta edellisenä vuonna)

Kaikkien kolmen yli luettuna: luottamus laskee, hyväksytyt valitukset lisääntyvät ja
riippumattomat oikeusasiamiehen havainnot asettuvat yhä useammin viranomaista vastaan —
kolme riippumatonta signaalia konvergoi samaan suuntaan, mikä tekee tästä uskottavan
legitimiteettihavainnon eikä kohinaa yhdessä sarjassa.
```

Yhden näistä luvuista liikkuminen olisi heikkoa näyttöä; kolme riippumatonta mittaria, jotka liikkuvat yhdessä saman jakson aikana, on kaava, joka tekee legitimiteettiväitteestä puolustettavan.

## Yhteys ohjelmistotekniikkaan

Legitimiteettimittareita tuottaa harvoin yhden tiimin kojelauta, mikä on itsessään suunnitteluopetus: rakenna raportointiputkia, jotka voivat vastaanottaa ja täsmäyttää dataa riippumattomista ulkoisista lähteistä (oikeusasiamiehen tapausjärjestelmät, sääntelijöiden arviosyötteet, kyselytoimittajat), sen sijaan että legitimiteettiraportointi arkkitehtuuroitaisiin vain sisäiseksi mittariksi, koska sisäisesti hankitut legitimiteettiväitteet ("arvioimme itsemme luotettaviksi") kantavat vain vähän todistusvoimaa — sama riippumattomuusongelma, joka on todettu legitimiteettinäkökulmalle [julkisen arvon tuloskortissa](../julkisen-arvon-tuloskortti/). Valitus- ja muutoksenhakudataputket ansaitsevat saman datalaadun tarkkuuden kuin mikä tahansa tulosputki, joka syöttää [tulosperusteisia maksu](../tulosperusteinen-maksu-ja-yhteiskunnalliset-vaikuttavuusobligaatiot/) -sopimuksia, koska alle raportoitu tai huonosti luokiteltu valitusaineisto aliarvioi hiljaa legitimiteettiongelman ennen kuin se tulee näkyviin luottamuskyselyssä vuotta myöhemmin. Ks. [kansalaistyytyväisyysmittarit](../kansalaistyytyväisyysmittarit/) tämän instituutiotason mittarin transaktiotason vastineesta ja [julkinen arvo](../julkinen-arvo/) Mooren koko strategisen kolmion viitekehyksestä, johon tämä kylki kuuluu.

## Sudenkuopat

- **Tyytyväisyyden käsitteleminen legitimiteetin korvikkeena**: kansalainen voi olla tyytyväinen yhden transaktion käyttöliittymään epäluottaen samalla instituutioon kokonaisuutena (tai päinvastoin) — ks. [kansalaistyytyväisyysmittarit](../kansalaistyytyväisyysmittarit/) siitä, miksi nämä kaksi on raportoitava erikseen.
- **Yhteen itseraportoituun mittariin nojaaminen**: sisäisesti ajettu luottamuskysely ilman riippumatonta vahvistusta (oikeusasiamiehen data, sääntelijöiden arviot) on helppo ohittaa itse arvosteluna; triangulaatio.
- **Demografisen erittelyn sivuuttaminen**: koostetut kansalliset luottamusluvut voivat peittää jyrkästi eriytyvän legitimiteetin tietyissä ryhmissä (iän, etnisyyden, tulojen tai alueen mukaan) — OECD:n omat Trust in Government -julkaisut erittelevät juuri tästä syystä.
- **Yhden sokin ajaman notkahduksen lukeminen pysyvänä trendinä**: luottamusluvut liikkuvat jyrkästi kriisien (finanssiromahdukset, pandemiat, korkean profiilin skandaalit) ympärillä ja elpyvät osittain; yksittäistä sokin jälkeistä datapistettä ei tulisi ekstrapoloida pitkän aikavälin laskuksi ilman lisädataa.

## Lähteet

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, vuotuiset tapaustilastot.
  <https://www.ombudsman.org.uk/>
