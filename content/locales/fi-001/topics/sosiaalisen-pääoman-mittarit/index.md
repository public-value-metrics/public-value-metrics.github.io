# Sosiaalisen pääoman mittarit

Sosiaalisen pääoman mittarit kvantifioivat verkostot, luottamuksen ja kansalaisosallistumisen, jotka antavat yhteisöjen ja instituutioiden toimia tehokkaasti — "sidekudoksen", jolla ei ole riviä missään taseessa mutta joka näkyvästi vähentää kustannuksia ja kitkaa, kun se on läsnä, ja näkyvästi lisää niitä, kun se puuttuu. Nykyaikainen kehystys tulee Robert Putnamin teoksesta "Bowling Alone" (2000), joka erotti sitovan pääoman (siteet samankaltaisen ryhmän sisällä) siltaavasta pääomasta (siteet eri ryhmien välillä); Ison-Britannian Office for National Statistics on sittemmin rakentanut vakiintuneen indikaattorijoukon sen seuraamiseksi kansallisesti.

## Miksi tällä on merkitystä

Putnamin keskeinen empiirinen väite — dokumentoitu Yhdysvaltain kansalaisjärjestöjen jäsenyyden, kirkossakäynnin ja ammattiliittoosallistumisen laskulla 1900-luvun lopulla — oli, että sosiaalinen pääoma ennustaa tuloksia, joita perinteinen taloustiede kamppailee selittääkseen: matalampi rikollisuus, parempi lasten hyvinvointi, tehokkaampi paikallishallinto, nopeampi taloudellinen toipuminen sokkien jälkeen. Sitova pääoma (vahvat siteet tiiviin ryhmän sisällä) on hyvä keskinäiselle tuelle mutta voi jähmettyä eristäytyneisyydeksi; siltaava pääoma (heikommat siteet eri ryhmien välillä) on se, joka tyypillisesti korreloi mahdollisuuksien saavutettavuuden, tiedon kulun ja instituutioluottamuksen kanssa. ONS otti tämän riittävän vakavasti rakentaakseen kansallisen indikaattoriviitekehyksen — sen "Social Capital in the UK" -sarja (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) seuraa neljää pilaria: henkilökohtaiset suhteet, sosiaalisen verkoston tuki, kansalaisosallistuminen sekä luottamus ja yhteistyönormit, kukin rakennettu vakiintuneista kyselykysymyksistä (Community Life Survey, Understanding Society). Julkisen sektorin digitaalisille palveluille sosiaalinen pääoma on kaksinkertaisesti relevanttia: se on sekä tulos, jota jotkin ohjelmat yrittävät rakentaa (yhteisön resilienssirahoitus, sosiaalinen reseptointi), että syöte, joka määrittää, kuinka hyvin palvelu todella omaksutaan — korkean luottamuksen, hyvin verkottuneeseen yhteisöön viety palvelu leviää suusanallisesti tavalla, jota identtinen palvelu matalan luottamuksen alueella ei leviä.

## Matematiikka

```
ONS:n nelipilarinen viitekehys (indikaattorit, havainnollistavia):

Henkilökohtaiset suhteet:      % joilla on joku, johon voi luottaa kriisissä
Sosiaalisen verkoston tuki:    % jotka voisivat lainata rahaa ystäviltä/perheeltä tarvittaessa
Kansalaisosallistuminen:       % jotka toimivat vapaaehtoisina tai kansalaistoiminnassa
                               viimeisten 12 kuukauden aikana
Luottamus ja yhteistyönormit:  % jotka ovat samaa mieltä "useimpiin ihmisiin voi luottaa"

ONS ei julkaise yhtä yhdistelmäpistemäärää — pilarit raportoidaan erikseen,
tarkoituksella, koska niiden aggregoiminen yhdeksi indeksiksi kätkisi,
mikä yksittäinen pilari on heikko.

Putnamin sitova/siltaava jako (viitekehys, ei kaava):
  sitova pääoma ≈ siteiden tiheys homogeenisen ryhmän sisällä
  siltaava pääoma ≈ siteiden tiheys/vahvuus erillisten ryhmien välillä
```

## Työstetty esimerkki

**Naapuruston sosiaalisen pääoman tilannekuva**: Community Life Survey -tyylinen kysely paikallisalueella havaitsee, että 78 %:lla on joku, johon voi luottaa kriisissä (henkilökohtaiset suhteet), 61 % voisi lainata rahaa tarvittaessa (verkostotuki), 24 % toimi vapaaehtoisena viime vuonna (kansalaisosallistuminen) ja 41 % on samaa mieltä "useimpiin ihmisiin voi luottaa" (luottamus ja normit) — verrattuna kansallisiin keskiarvoihin, jotka ovat suunnilleen 85 %, 70 %, 30 % ja 45 % vastaavasti (havainnollistavia, kalibroi nykyistä ONS-tiedotetta vasten). Alue jää jälkeen jokaisessa pilarissa mutta jyrkimmin luottamuksessa (41 % vs. 45 % kansallisesti, 4 pisteen kuilu) ja kansalaisosallistumisessa (24 % vs. 30 %, 6 pisteen kuilu) — nostaen kansalaisosallistumisen, ei luottamuksen, suurimmaksi suhteelliseksi vajeeksi, joka ansaitsee kohdennetun investoinnin (esimerkiksi yhteisöavustusohjelma) yleisen "rakenna luottamusta" -aloitteen sijaan.

**Sitova vs. siltaava, palvelumuotoilu**: työllisyysohjelma tiiviissä yhteisössä havaitsee, että ohjaukset kulkevat nopeasti yhteisön sisällä (korkea sitova pääoma: sana leviää päivissä), mutta ohjelma kamppailee tavoittaakseen asukkaita kyseisen verkoston ulkopuolella (matala siltaava pääoma: käyttö ydinyhteisön ulkopuolella on lähellä nollaa kuukausien jälkeen). Implikoitu korjaus ei ole "enemmän markkinointia" vaan siltaavien siteiden tietoinen rakentaminen — kumppanuus organisaatioiden kanssa, jotka sijaitsevat olemassa olevan verkoston *ulkopuolella*, koska sitova pääoma yksin ei voi ratkaista siltaavan pääoman ongelmaa.

## Yhteys ohjelmistotekniikkaan

- Digitaaliset alustat, jotka ohjaavat keskinäistä apua, vapaaehtoistyötä tai yhteisöavustuksia ("paikallinen yhdistäjä" -palvelu esimerkiksi), rakentavat kirjaimellisesti siltaavan pääoman infrastruktuuria; niiden menestysmittarin tulisi olla muodostettujen yhteyksien verkostomonimuotoisuus, ei vain transaktiomäärä — ks. [valtio alustana](../valtio-alustana/) laajemmasta mallista infrastruktuurille, jonka päälle muut rakentavat arvoa.
- Missä ohjelman muutosteoria kohdistuu nimenomaisesti sosiaaliseen pääomaan tuloksena (yhteisön resilienssirahasto, sosiaalisen reseptoinnin palvelu), sen [muutosteorian](../muutosteoria/) ja [logiikkamallin](../logiikkamalli/) tulisi nimetä tietty pilari (luottamus, kansalaisosallistuminen, verkostotuki), jonka sen odotetaan liikuttavan, sen sijaan että käytettäisiin eriyttämätöntä "rakenna yhteisöä" -tulosta, jota ei voi mitata ONS:n lähtötasoa vasten.
- Sosiaalisen pääoman indikaattorit ovat hyödyllinen oikeudenmukaisuuslinssi [moniulotteisen puutteellisuuden indeksin](../moniulotteisen-puutteellisuuden-indeksi/) rinnalla: alue voi olla tulopuutteellinen mutta sosiaalisesti rikas tai päinvastoin, ja nämä kaksi osoittavat hyvin erilaisiin interventioihin.

## Sudenkuopat

- **ONS:n neljän pilarin romahduttaminen yhdeksi yhdistelmäpistemääräksi** — ONS ei tarkoituksella tee tätä; yksittäinen luku kätkee, mikä yksittäinen pilari ajaa matalaa lukemaa, ja keskiarvoistaminen peittää yhteisön, joka on korkean luottamuksen mutta kansalaisesti sitoutumaton, verrattuna päinvastaiseen.
- **Oletus, että sosiaalinen pääoma on aina hyvää** — tiheä sitova pääoma eristäytyneessä ryhmässä voi aktiivisesti vastustaa ulkopuolisia instituutioita (mukaan lukien valtion palvelut); Putnamin oma analyysi käsittelee sitovaa ja siltaavaa eri hyvinä, joilla on erilaisia, joskus ristiriitaisia vaikutuksia.
- **Kyselypohjaisten sosiaalisen pääoman mittareiden käyttö reaaliaikaisena operatiivisena mittarina** — taustalla olevat kyselyt (Community Life Survey, Understanding Society) ajetaan vuosittain tai harvemmin; käsittele sosiaalisen pääoman dataa hitaasti liikkuvana kontekstuaalisena indikaattorina, ei jonakin, mitä palvelun kojelauta voi päivittää viikoittain.

## Lähteet

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (vuosittain).
