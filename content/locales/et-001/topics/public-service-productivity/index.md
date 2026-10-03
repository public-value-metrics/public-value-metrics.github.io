# Avaliku teenuse tootlikkus

AvaLikU teenuSe tootlikkuS mõõdab, kui efektiivSelt avalik kulutuS konverteerib sisendid (personal, kapital, kaubad ja teenused) kvaliteedi-kohandatuD väljundiTeKs, teenuSteLe — tervishoid, haridus, politsEi, sotsiaalhoolDus — millel ei ole mingit turuHinda ja seetõttu mitte mingit tuluNäitajat, mille sisse kulud jagada. Ühendkuningriigi Office for National Statistics on avaldanud selle seeriA alates 2000nenDaTe keskElt ja see jääb kõige metodoloogiLiselt väljaarendatuMAKs riikliKuKs katsEKs vastata "kas valitsus läheb paremaKs või halvemaKs rahA konverteerimisel avalikuTeKs teenusteKs?"

## Miks see on oluline

TuruS on tootlikkuS (väljundi-väärtuS) / (sisendi-kulu), ja väljundi-väärtus on vaadeldAv, sest keegi maksab sellE eest. PuusALiiges-operatsioon, kooliKoHt, ja politsEi-patrull ei oma müügi-hinda, nii et naiivselt saad mõõta ainult *sisendeid* (mis kulutati) — mis kiusab kommentaatorid käsitlema tõuSvat avalikKu kulutuSt automaatSelt halbaKs, sest rohkem sisendit flat pealKirja-aktiivsuSeGa näeb välja nagu langeV tootlikkuS. ONS-metodoloogia, sätestatud selle "Sources and Methods"-publikatsioonides avaliku teenuse tootlikkuSeLe, lahendab sellE, konstrueeriDES *väljundi*-indeksi aktiivsuse-volümeDeST (sooritatuD operatsioonid, õpetatud õpilased, uuritud kuriteod) ja seejärel *kvaliteet-kohandaDes* sellE väljundi-indeksi — tervishoiuLe, inkorPoreeriDES ellujäämiSe-määrA ja ooteAegA; hariduSeLe, inkorPoreeriDES saavutust; politsEiLe, inkorPoreeriDES tulemusi nagu juhtumi-lahendamine — nii et teenus, mis teeb sama arvu operatsioone, kuid saavutab parema ellujäämiSe-määrA, registreerub tootlikumaKs, mitte lihtsalt kuluKaMaKs. PealKirja-fakt, mis korDuB üle ONS-väljaandeiD, on karm sektoriLe: Ühendkuningriigi avaliku teenuse tootlikkuS langeS järSult COVID-19-pandeemiA ajal ja ONS'i oma 2020ndaTe-keskElE-väljaandeiD poolT ei oli see veel taastuNud 2019. aasta tasemeTeNi mitmeS allaSektoris, sealhulgas tervishoid, kuigi kulutuS tõusiS — lünk, mis omaRAamib "rohkem rahastuSt" ja "rohkem tootlikkuSt" täiesti eraldi küsimuSteKs.

## Arvutus

```
VäljundiIndeks (volümen) = Σ (aktiivsus_i × suhteline
                           ühikuKulu-kaal_i), basisAasta-
                           kaalutuD üle kõigi teenuse-
                           aktiivsuSteST (nt puusAliigese-
                           operatsioonid, kAtarakti-
                           operatsioonid, perearsti-
                           konsultatsioonid), analoogne
                           Laspeyres-/Paasche-volümen-
                           indeksiLe

KvaliteediKohandus      = väljundiIndeks × kvaliteedi-
                          kohanDuSe-faktor (nt inkorPoreeriV
                          muutus ellujäämiSe-määraST,
                          ooteAegadeST, saavutuSest, või
                          retsidiivsuSest multiplikaatoriKs
                          rajA-volümeniL)

SisendiIndeks           = Σ (tööJõu-tunDid × tööJõu-kulu-kaal)
                          + (kaubad/teenused kulu,
                          deflateeritud) + (kapitaliKulumine)

KoguFaktorI tootlikkuSe-kasv = % muutus kvaliteediKohandatuD
                              väljundiIndeksiS − % muutus
                              sisendiIndeksiS
```

## Läbitöötatud näide

**Illustratiivne NHS-ägeda-sektori-tootlikkuSe-arvutus** (struktuur järgib ONS-metodoloogiat):

```
Aasta 1: väljundiVolümeni-indeks = 100,0 (basisAasta),
         sisendiIndeks = 100,0 → tootlikkuSe-indeks = 100,0

Aasta 2: aktiivsuSe-volümen tõuseb 3,0% (rohkem operatsioone,
         rohkem kohtumisi), kuid keskmine ooteAeg halveneb,
         rakendaDES kvaliteedi-kohandUSe-rabati −1,0%
         KvaliteediKohandatuD väljundiIndeks = 100 × 1,030 ×
         0,990 = 101,97

         Sisendid tõusevad: personali-arv +4,0%, muud kulud
         (deflateeritud) +1,5%, kaalutuD sisendiIndeks =
         100 × 1,032 = 103,2

TootlikkuSe-kasv = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                  = 1,97% − 3,2% = −1,23 protsendipunkti

Tõlgendus: aktiivsuS tõusiS, kuid sisendid tõusid kiireMini
ja kvaliteet langeS pisut, nii et tootlikkuS — väljund
ühikule sisendit — langeS, isegi kui "rohkem hoolDust
tarnitud."
```

See on täpselt mustriL, mida ONS-väljaanded on korDuvalt raporteerinud NHS-i osadeLe post-pandeemiAs: tõuSeV kulutuS ja tõuSeV toor-aktiivsus eksisteerides koos langeVA mõõdetuD tootlikkuSeGa, kord kui kvaliteedi-kohandus ja sisendi-kasv on mõlemad arvesse võetud.

## Seos tarkvaraarendusega

AvaLiku teenuse tootlikkuS on populatsiooni-tasandi analoog inseneri-tootlikkuSe-debattideLe (story-pointid laeVaTatuD versus [DORA-mõõdikud](../dora-metrics-for-public-value/) versus [flow-mõõdikud](../flow-metrics-in-government-delivery/)): toor-läbilaskvus kvaliteedi-kohanduseTa on täpselt sama misLeading haiglas, nagu "kood-reaD laeVaTatuD" on tarkvaraMeeskonnaL. Meeskonnad, mis ehitavad jõuDluSAndme-pipelineid osakondadeLe, peaksid käsitlema kvaliteedi-kohandust esmaKlassi, versioneeritud transformatSiooni-staadiuMiNa, mitte allMärkuseNa — sest ONS'i oma usutavus toetub sellE kohandusEle läbipaistvaNa, reproDutseeritavaNa, ja revideerituNa, kui parem kvaliteedi-andmeStik saabub (ONS revideerib minevikU-aastatE tootlikkuSe-hinnanguid, kui alusOlev kvaliteedi-andmeStik — nt ellujäämiSe-määrad — finaliseeritaKse, nii et mistahes allaVoolu-süsteem, mis tarbib neid statistikuid, peab käsitlema taga-dateerituD revisjone, mitte lihtsalt lisama uusi perioode). See risti-lõikuB ka otse [koGu-omandiKuluGa valitsuse IT-s](../total-cost-of-ownership-in-government-it/) ja [AI-tootlikkuSeGa avaLikuS sektoriS](../ai-productivity-in-the-public-sector/): süsteem, mis suurendab toor-aktiivsuse-volümeni paranemaTa või säilitaMaTa kvaliteeti, ei ole, ONS'i oma definitsiooniL, tootlikkuSe-paranemine.

## Lõksud

- **SisendiKasvu käsitlemine tootlikkuSe-kasvuNa.** Rohkem kulutuSt, mis rahastab rohkem personali, toodab rohkem *aktiivsuSt*, ei rohkem *tootlikkuSt*, vÄlja arvaTud juhul, kui väljund ühikuLe sisendit ka tõuseb — kahE segaMine on rutiinne poliitiLiseS kommentaariS.
- **KvaliteediKohandusE täielik ignoreerimine.** VäljundiIndeks ehitatud ainult toor-aktiivsuse-loenDideST näitab "tootlikkuSe-kasvu" rohkem madalaMA-väärtuSe või madalaMA-kvaliteediGa asja tegemiSeST; ONS'i kvaliteedi-kohandus eksisteerib spetsiifiliSelt sellE püüdmiSeKs.
- **TootlikkuSe-indeksite võrdlemine üle allaSektoriTe sobitamaTa metodoloogia-vintaazhIGa.** Tervise-, haridus-, ja politsEi-tootlikkuS on igaÜks ehitatud erinevateST aktiivsuSe- ja kvaliteedi-andmeAllikaTeST erinevaD revisjoni-tsüklidel — naiivne tvär-sektori-võrdlus võrdleb inkompatiibleid instrumenta.
- **Üheainsa aasta tootlikkuSe-languSe lugemine permanentSeKs trendiKs.** Pandeemia-ajastu ja post-pandeemiA tootlikkuSe-numbrid on näidanud olulist aasta-aastaselt-volatiilsust, kui kvaliteedi-andmeStik (nt ooteNimekirjad, elektiivNe taastumine) ise nihkuS; ONS konsistentSelt hoiatab üksiKU aasta liikumisTe üleTõlgendamiSe eest.

## Allikad

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
