# Framleiðni gervigreindar í opinbera geiranum

Mælikvarðar á það sem gervigreindaraðstoð við forritun gerir í raun fyrir afköst verkfræðinga — samþykktarhlutfall tillagna, hraðaaukning í stýrðum rannsóknum, afköst pull-beiðna og varðveisla kóða — byggja á misvísandi sönnunargögnum jafnvel áður en skorður opinbera geirans bætast við: gagnaflokkun takmarkar hvaða hluta gamals kerfissafns gervigreindartól má yfirhöfuð snerta, innkaupaferli þýða að tólið sem er til mats er oft einni kynslóð líkana á eftir núverandi getu, og kröfur um öryggisvottun stýra því hver má nota það hvar.

## Hvers vegna það skiptir máli

Tvær mest vitnuðu stýrðu rannsóknirnar benda í gagnstæðar áttir. Slembirannsókn Peng o.fl. frá 2023 á GitHub Copilot sýndi að forritarar luku nýju HTTP-miðlaraverkefni 55,8% hraðar með Copilot (1 klst. 11 mín. á móti 2 klst. 41 mín., n=95). Slembirannsókn METR frá 2025 sýndi að reyndir opinn-hugbúnaðarforritarar sem unnu í *eigin þroskuðum hugbúnaðargeymslum* voru 19% hægari með gervigreindartól frá upphafi árs 2025, en töldu sig vera um 20% hraðari. Báðar rannsóknirnar eru traustar; mótsögnin er niðurstaðan — virkni á nýjum verkefnum yfirfærist ekki á virkni í þroskuðum kóðagrunni, og stór hluti ríkisverkfræði er vinna í þroskuðum kóðagrunni á kerfissöfnum sem eru eldri og sérkennilegri en miðgildi viðskiptageymslna. Generative AI Framework for HMG hjá Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) setur fram meginreglur um ábyrga innleiðingu einmitt vegna þess að ekki er hægt að flytja þessi sönnunargögn einfaldlega inn úr sýnikennslu seljenda; ætlast er til að ráðuneyti meti tól gagnvart eigin kröfum um meðferð gagna og öryggi áður en þau eru tekin í notkun.

## Stærðfræðin

```
Samþykktarhlutfall  = samþykktar tillögur / sýndar tillögur
Varðveisluhlutfall  = gervigreindarkóði sem kemst í sameiningu / samþykktur gervigreindarkóði
Hraðaaukning        = (t_viðmið − t_AI) / t_viðmið  (aðeins úr stýrðum samanburði)
Afkastamunur        = Δ sameinaðar pull-beiðnir/forritara/viku

Þekjustuðull opinbera geirans:
  hlutfall gjaldgengs kóðagrunns = kóðalínur í kerfum þar sem flokkunin
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) leyfir tólið yfirhöfuð

Verðmætalíkan = forritarar × gjaldgeng þekja × tími sem sparast × fullt tímagjald × nýtingarhlutfall
             — hvern lið þarf að mæla á staðnum, og þekjustuðullinn
             á sér ekkert samsvarandi í einkageiranum
```

## Dæmi útreiknað

Ráðuneyti reynir gervigreindaraðstoð við forritun hjá 300 forriturum, en aðeins kerfi flokkuð sem OFFICIAL eru gjaldgeng til notkunar tólsins — 70% kerfissafnsins miðað við úthlutun starfsmanna, en 30% sem eftir eru (kerfi með hærri flokkun) eru útilokuð með öllu.

```
Gjaldgengir forritarar = 300 × 0,70 = 210

Niðurstaða tilraunar: sjálftilkynntur sparnaður 40 mín./dag;
                      mældur sparnaður á verkefnastigi 12 mín./dag (0,2 klst.)
                      — METR-skynjunarbilið, endurtekið í reynd

Verðmetum MÆLDU töluna:
  210 × 0,2 klst. × 220 dagar × 55 £/klst. fullt gjald × 0,6 nýting
  = 210 × 44 klukkustundir × 55 £ × 0,6
  = 9.240 klukkustundir × 55 £ × 0,6 ≈ 304.920 £/ár afkastageta

Kostnaður: 210 leyfisbundin sæti × 22 £/mánuði × 12 ≈ 55.440 £/ár

Hlutfall nettó afkastagetu ≈ 304.920 / 55.440 ≈ 5,5:1
```

Fjármagnanlegt miðað við um þriðjung af sjálftilkynntum ávinningi, og aðeins eftir að flokkunarþakið hefur verið sett á — að veita öllum 300 forriturunum leyfi á grundvelli sjálftilkynntu tölunnar hefði ofmetið bæði gjaldgengan hóp og raunverulegan sparnað.

## Tengsl við hugbúnaðarverkfræði

Agarnir sem yfirfærast beint: framkvæma **hagnýtar tilraunir** á eigin kóðagrunni ráðuneytisins og raunverulegum verkbeiðnum, ekki sýnikennsluverkefnum seljenda, því METR-niðurstaðan er sérstaklega niðurstaða um þroskaðan kóðagrunn; líta á **samþykktarhlutfall sem staðgengil, ekki útkomu** — hátt samþykktarhlutfall með lága varðveislu er hugbúnaðarígildi ofgreiningar; para hverja fullyrðingu um afköst við **stöðugleikaathugun**, því DORA-skýrslan 2025 leiddi í ljós að innleiðing gervigreindar eykur afköst en rýrir stöðugleika breytinga, sem er einmitt nettóávinningsgreiningin sem [DORA-mælikvarðar fyrir opinbert verðmæti](../dora-mælikvarðar-fyrir-opinbert-verðmæti/) eru smíðaðir til að framkvæma; og vera hreinskilinn um að gervigreindartól geta aukið, ekki minnkað, bilið í kerfissöfnum með mikla [tæknilega skuld](../tæknileg-skuld-sem-rýrnun-opinbers-verðmætis/), því þjálfunargögn endurspegla COBOL, 4GL og sérsmíðaðan stórtölvukóða, sem er algengur hjá hinu opinbera, of lítið, svo gæði tillagna í einmitt þeim kerfum sem þurfa mest á hjálp að halda eru oft veikust. Þetta stendur við hlið víðtækari spurningarinnar um [gervigreind og verðmæti hjá hinu opinbera](../gervigreind-og-verðmæti-hjá-hinu-opinbera/) og ætti að lúta sömu skorðum um [verðmæti netöryggis í opinbera geiranum](../verðmæti-netöryggis-í-opinbera-geiranum/) sem takmarka hvar tól þriðja aðila má yfirhöfuð sjá kóða eða gögn.

## Gildrur

- **Flutningur seljendarannsókna yfir á annað samhengi**: að beita hraðaaukningu úr slembirannsóknum á nýjum verkefnum á vinnu við samþættingu gamalla kerfa er nákvæmlega villan sem METR-rannsóknin afhjúpaði.
- **Sjálfsmat sem mæling**: 20 prósentustiga bil milli skynjunar og mælingar er stærsta þekkta skekkjan í þessum fræðum og blæs upp viðskiptarök sem byggja eingöngu á könnunum meðal forritara.
- **Að hunsa flokkunarþakið**: leyfis- og verðmætalíkön sem byggja á heildarfjölda starfsmanna frekar en gjaldgengum undirhópi með flokkunarheimild ofmeta kerfisbundið bæði hagkvæmni og framkvæmanlega þekju.
- **Töf vegna innkaupaferlis**: innkaup tóla á grundvelli rammasamninga geta þýtt að tilraunaverkefni meti kynslóð líkana sem er 12–18 mánuðum á eftir því sem er almennt fáanlegt þegar kemur að fullri útbreiðslu, sem gerir forsendu upprunalegu viðskiptaraka um hraðaaukningu úrelta áður en farið er í loftið.

## Heimildir

- Peng S, et al., „The Impact of AI on Developer Productivity: Evidence from GitHub Copilot“, 2023. <https://arxiv.org/abs/2302.06590>
- METR, „Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity“, 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
