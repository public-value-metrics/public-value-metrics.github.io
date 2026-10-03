# Mõjuhindamine versus protsessihindamine

MõjuHindamine küsib, kas programm põhjustaS selle kavatsetud tulemusi. ProtsessiHindamine küsib, kas programm tegelikult tarnitud disainituD viisiL — kelleLe, millisel doosiL, ja millisteGa barjäärideGa või fasilitatoriDeGa teeL. Need on erinevad küsimused, mis nõuavad erinevaid meetodeid, ja HM Treasury Magenta Book käsitleb mõlema koos tellimist standardPraktikaNa, sest nõrK või null-mõju-tulemus on iseEnesest tõlgendamaTu: see ei saa öelda, kas programmi alusOlev teooria oli vale, või kas hea teooria lihtsalt mitte kunagi korralikuLt tarnitud.

## Miks see on oluline

Valitsuse hindamised on korduvalt leidnud mitte mingit mõõdetAvat efekti programmiSt, omaMaTa mingit protsessiHindamist, et selgitada miks — jättes tellijad suuTeTuKs eristama "see idee ei töötA" (teooria-ebaõnnestumine) sellEst "see idee mitte kunagi tegelikult korralikuLt proOvitud" (implementatsiooni-ebaõnnestumine). Medical Research Council'i juhend keeruliste interventsioonide protsessiHindamiseST, avaldatuD BMJ-s 2015 ja laialDaseLt tsiteeritud koos Magenta Book'iGa, formaliseeris fideliteeDi, dooSi, ja ulatuSe kui tuumAsjaD, mida protsessiHindamine peab mõõtma. MõjuHindamise tellimine protsessiHindamiseTa riskeerib genuinely hea programmDisaini loobumist, sest see tarnitud pooleLe kavatsetuD populatsioonile fraktsiooniGa kavatsetuD intensiivsuSest — viga, mida süsteemE-ehitaja on hästi positsioneeritud ennetama, sest tarne-fideliteeT on täpselt see, mida operatiivseD andmeSüsteemid saavad fikseerida ligikaudu-reaalaeGa.

## Arvutus

```
ProtsessiHindamine küsib:
 - Oli see tarnitud sihtPopulatsioonile, planeeritud dooSiL/
   intensiivsuSel?
 - Sobitus tarne logikMudeli / muutuSe-teooria disainiga?
 - Mis barjäärid või fasilitatorid mõjutasid tarnet?
 Meetodid: fideliteeDi-kontrollid vastu eelSpetsifitseeritud
           tärskliteLe, juhtumiUuringud, intervjuud,
           administratiivseD tarne-andmed.

MõjuHindamine küsib:
 - Mis muutuS, ja kui palju sellest muutuSeST on omistataV
   programmiLe?
 Meetodid: RCT, DiD, PSM, RDD — vaata mõjuHindamise-meetodid
           — vastu kontrafaktuaali.

Kombineeritud diagnoos:
 Puudub efekt + kõrge fideliteeT  → teooria-ebaõnnestumine:
                                    mudel ise ei tootnud
                                    tulemust
 Puudub efekt + madal fideliteeT  → implementatsiooni-
                                    ebaõnnestumine: mudelit
                                    mitte kunagi korralikuLt
                                    testitud
 Efekt leitud + kõrge fideliteeT  → replitseeri usaldusEgA
 Efekt leitud + madal fideliteeT  → uuri edasi: efekt võib
                                    olla fragiile või sIte-
                                    spetsiifiline
```

## Läbitöötatud näide

**Kohalik omavalitsus (lapseVanemlikKuSe programm)**: mõjuHindamine, kasutaDES erinevuste-erinevused, leiab +2-protsendipunkti muutuSe lapse-heaolu-mõõdikuS — ei statistiLiselt oluline. ProtsessiHindamine, käivitatuD koos selleGa, leiab, et programm jõudis ainult 210-le 500 sihitud perekonnaST (42% ulatus), ja neist, ainult 95 lõpetasid eelSpetsifitseeritud fideliteeDi-tärskli 75%+ osaletuD sessioonidest — 19% algsest planeeritud ulatuSest. Järeldus: nõrK mõjuTulemus on konsistentne implementatsiooni-ebaõnnestumiSeGa, mitte tõenD, et programm-mudel ei töötA; sobiv vastus on parandada suunamiSteE, mis põhjustaS 58%-liSe languSe, mitte programmDisaini loobumine.

**Heategevusorganisatsioon (digiKirjaOskuSe programm)**: mõjuHindamine leiab tugevA efekti (+18 protsendipunkti digiKindlustuse-skooril), ja parallelne protsessiHindamine kinnitab 92% fideliteeDi planeeritud õppekavaLe üle kõigE 12 tarne-asukoha. Kombineeritult saab rahastaja programmi skaleerida usaldusEgA, sest efekt on näidatud, et see hoiab konsistentSelt, mitte olleS üheST ebaTavaliSelt heaST asukohaST toode.

## Seos tarkvaraarendusega

ProtsessiHindamisE andmed on täpselt, mida tarneSüsteemid on hästi positsioneeritud fikseerima: osaleMine vastu plaanile, sessiooni-doSeerimine, ja langus igAl staadiumil suunamiSe- või registreerimiS-tragiS — sama trAgi-analüütika, mida insenerid juba ehitavad tooteOmaDusteLe, rakendatuD sotsiaalse programmi tarne-pipeliNiLe selle asemel. Fideliteedi- ja ulatuSe-mõõdikuDe söötmine programmJuhTiDeLe ligikaudu-reaalaeGa, selle asemel, et ootaDa grAndi-lõpu-hindamist, lubab katkisT suunamiSTeE fikseerida programmiSisEselt selle asemel, et see avastataKse ainult korD, kui rahastamisPerIood on lõppenud. Vaata [mõjuHindamise-meetodid](../impact-evaluation-methods/) põhjusLikE disainideKs, millegA protsessiHindamine on paariS, [muutuSe teooria](../theory-of-change/) ja [logikMudel](../logic-model/) disainiKs, mille vastu protsessiHindamine kontrollib fideliteeDi, ja [kasuteostuS](../benefits-realization/) tarne jälgimiSeKs läbi tulemusteNi, mis lubati.

## Lõksud

- **MõjuHindamise tellimine üksi.** Null või nõrK tulemus ei saa seejärel tõlgendataKs teooria-ebaõnnestumiSeKs või implementatsiooni-ebaõnnestumiSeKs, mis on täpselt distinktsioon, mis loeb, otsustaMaKs, mida järgneValt teha.
- **ProtsessiHindamise käsitlemine pehmeKs lisaKs.** Selle vajab sama rangust ja eelSpetsifitseeritud fideliteeDi-kriteeriume kui mõjuDisain, või see kollapseerub anekDoodiKs, kui tulemused saabuvad.
- **"Õigeaegne ja eelArve-siseS" segiAjamine "tarnitud nagu disainitud"-GA.** ProtsessiHindamine kontrollib fideliteeDi mudeliLe — dooS, sihtGrupp, sisu — ei projektHaldusE RAG-statust.
- **FideliteeDi-tärsklite mitte eelRegistreerimine.** Otsustamine pärast faktI, mis loeb "piisavaKs dooSiKs," muudab mistahes selgituSe pettumust-valmistavaST mõjuTulemuSeSt näivaKs post-hoc vabanDuSteGa.

## Allikad

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
