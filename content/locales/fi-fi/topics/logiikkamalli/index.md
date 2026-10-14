# Logiikkamalli

Logiikkamalli (logic model) on lineaarinen kaavio, joka yhdistää ohjelman panokset, toiminnot, suoritteet, tulokset ja vaikutuksen, luettuna vasemmalta oikealle vastuuketjuna: resurssit menevät sisään, toimintoja tapahtuu, suoritteita tuotetaan, edunsaajien tilanne muuttuu ja vaikutus kertyy laajemmalla tai pidemmällä aikavälillä. Se on vakiorakenne, jota vastaan rahoittajat ja tarkastajat odottavat ohjelman olevan raportoitavissa, ja taaksepäin kartoitetun [muutosteorian](../muutosteoria/) eteenpäin suuntautuva vastine.

## Miksi tällä on merkitystä

HM Treasuryn Magenta Book määrittelee logiikkamallin ohjelman arviointisuunnittelun vaadituksi osaksi, ja rahoittajat kuten National Lottery Community Fund rakentavat hakemus- ja raportointipohjansa täsmälleen tämän viisisarakkeisen ketjun ympärille. Sen arvo on siinä, että se pakottaa ohjelman esittämään yhdessä kaaviossa, mitä se kuluttaa, mitä se sillä tekee, mitä se tuottaa ja — ratkaisevasti — minkä pitäisi muuttua seurauksena, sellaisella täsmällisyydellä, jonka proosakappale yleensä hämärtää. Logiikkamalli, jonka panos- ja toimintosarakkeet on täytetty mutta jonka tulossarake on tyhjä tai epämääräinen, on diagnosoitavissa yhdellä silmäyksellä, minkä vuoksi rahoittajat sitä pyytävät.

## Matematiikka

Logiikkamalli on rakenteellinen ketju, ei kaava:

```
Panokset         Toiminnot         Suoritteet           Tulokset              Vaikutus
(sidotut         (mitä niillä      (suorat, laskettavat  (muutos               (pitkän aikavälin,
 resurssit)       tehdään)          tuotteet)             edunsaajille)         väestötason tai
                                                                                 systeeminen muutos)
```

Jokaisen sarakkeen tulisi olla edellistä täsmällisempi: panokset ovat se, mitä käytät, toiminnot se, mitä teet, suoritteet se, mitä toimitetaan vaikutuksesta riippumatta, tulokset se, mikä muuttuu seurauksena — erottelu, joka on käsitelty kokonaisuudessaan aiheessa
[tulokset vs. suoritteet](../tulokset-vs-suoritteet/) — ja vaikutus on kestävä, usein vain osittain kohdistettavissa oleva pitkän aikavälin muutos.

## Työstetty esimerkki

**Paikallisviranomainen (digitaalinen velkaneuvontapalvelu)**:

- Panokset: £180 000 vuosibudjetti, 4,0 henkilötyövuotta neuvojia, asianhallintajärjestelmä.
- Toiminnot: tavoittamistilaisuudet, henkilökohtaiset velkaneuvontavastaanotot.
- Suoritteet: 900 toimitettua vastaanottoa; 750 myönnettyä velka- ja etuussuunnitelmaa.
- Tulokset: asiakkaista, jotka tavoitettiin 6 kuukauden seurannassa, 60 % (450 / 750) raportoi vähentyneitä rästejä, keskimäärin £1 200 vähennys asiakasta kohti — yhteensä £540 000 rästien vähennys.
- Vaikutus: mitattavissa oleva lasku asunnottomuushakemuksissa palvelun asiakaskunnasta kahden vuoden aikana, vain osittain kohdistettavissa tälle palvelulle muiden interventioiden rinnalla (ks.
  [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)).

**Hyväntekeväisyysjärjestö (ruokapankin ohjauskumppanuus)**:

- Panokset: £45 000, 1,5 henkilötyövuotta koordinaattoria, kumppanuussopimukset 12 ohjaavan viraston kanssa.
- Toiminnot: ohjausten triage, ruokakassien pakkaus ja jakelu.
- Suoritteet: 5 000 ruokakassia jaettu 1 100 kotitaloudelle.
- Tulokset: 68 % kyselyyn vastanneista kotitalouksista (748 / 1 100) raportoi parantuneesta ruokaturvasta 4 viikon seurantapuhelussa.
- Vaikutus: osuus paikallisen kriisipalvelukysynnän vähenemiseen, todennettavissa vain alueen yhteenvetotilastoista, ei kohdistettavissa tälle hyväntekeväisyysjärjestölle yksin.

## Yhteys ohjelmistotekniikkaan

Logiikkamalli on lähes kirjaimellinen datamalli tulosjärjestelmälle: panokset ja toiminnot ovat operatiivista dataa, joka sinulla jo on (menot, henkilöstö, istuntolokit); suoritteet on helppo instrumentoida, koska ne lasketaan toimituspisteessä; tulokset vaativat tarkoituksella suunniteltua seurantadatan keruuta (kyselyt, hallinnollisen datan linkitys), jota ei ole olemassa, ellei joku rakenna sitä; vaikutus vaatii yleensä linkitettyä, pitkittäistä tai väestötason dataa yli minkä tahansa yksittäisen ohjelman järjestelmien. Raportointityökaluja rakentavien insinöörien tulisi ohjata tilaajia määrittelemään tulos- ja vaikutusindikaattorit suunnitteluvaiheessa sen sijaan, että oletuksena päädytään pelkkään suoritekojelautaan, koska sitä transaktiodata jo tukee. Ks.
[yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) menetelmästä, joka arvottaa nimenomaan tulos- ja vaikutussarakkeet, ja
[hyötyjen toteutuminen](../hyötyjen-toteutuminen/) sen seuraamiseen, toimitettiinko vaikutussarake todella.

## Sudenkuopat

- **Pysähtyminen suoritteisiin.** Kojelauta, joka raportoi toimitetut vastaanotot tai jaetut kassit ja antaa ymmärtää hyödyn, raportoi toimintaa, ei tuloksia — ks.
  [tulokset vs. suoritteet](../tulokset-vs-suoritteet/).
- **Sarakkeiden välillä ei ole ilmaistua syy-yhteyttä.** Logiikkamalli esittää ketjun mutta ei sitä, miksi toimintojen pitäisi tuottaa suoritteita, joiden pitäisi tuottaa tuloksia; tämä päättely kuuluu
  [muutosteoriaan](../muutosteoria/), ja logiikkamalli ilman sitä taustalla on testaamaton.
- **Sen käsitteleminen kertaluonteisena hakemusdokumenttina.** Logiikkamallit, jotka tuotetaan vain rahoitushakemusta varten eikä niitä koskaan päivitetä, lakkaavat kuvaamasta sitä, mitä ohjelma todella tekee.
- **Kohdentamisen hiipiminen vaikutussarakkeessa.** Väestötason muutoksen väittäminen yhden ohjelman yksinään aiheuttamaksi ilman kontrafaktuaalia liioittelee sitä, mitä näyttö tukee.

## Lähteet

- HM Treasury, Magenta Book (2020), luku 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logiikkamallin ohjeistus. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
