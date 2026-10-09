# Smíða eða kaupa hjá hinu opinbera

Að smíða eða kaupa er skipulagður, áhættuleiðréttur samanburður á sérsmíði annars vegar og kaupum á hugbúnaði á markaði eða staðlaðri vöru hins vegar, borinn saman á núvirtum [heildareignarkostnaði](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/), tíma til verðmætasköpunar og áhættu. Hið opinbera er í eðli sínu kaupandi — Technology Code of Practice gerir ráð fyrir að staðlaðar lausnir og skýjalausnir séu valdar — en verkfræðiteymi innan ráðuneyta velja engu að síður sjálfgefið að smíða, af sömu ástæðum og smiðir alls staðar.

## Hvers vegna það skiptir máli

Technology Code of Practice hjá Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) og tilheyrandi leiðbeiningar í Service Manual um hvort smíða skuli eða kaupa knýja ráðuneyti til að rökstyðja sérsmíði gegn þeirri forsendu að staðlaða getu eigi að kaupa, ekki smíða, og að aðeins raunverulega nýstárleg getu sem greinir verkefnið frá öðrum réttlæti sérsmíðaðan kóða. Viðbótarleiðbeiningar HM Treasury við Green Book um bjartsýnisskekkju, byggðar á úttekt Mott MacDonald frá 2002 á stórum opinberum innkaupum, gefa upplýsingatækniverkefnum víðasta álagsbil allra flokka sem metnir voru — kostnaðaráætlanir fjárfestinga eru ráðlagðar hækkaðar um 10% í lægri enda og um allt að 200% í efri enda áður en þær eru notaðar í mati, sem endurspeglar hve illa hugbúnaðarsmíði hefur sögulega verið vanmetin í opinberum innkaupum. Greining á því að smíða eða kaupa er til einmitt til að knýja þessa áhættuleiðréttingu fram á borðið fyrir samþykki, í stað þess að leyfa henni að koma upp sem beiðni um umframfjárveitingu á miðju ári.

## Stærðfræðin

```
Berðu saman yfir sama 3–5 ára tímabil, núvirt með samfélagslega
afsláttarstuðlinum í Green Book (sjá social-discount-rate.md):

NPV_valkostur = PV(ávinningur, færður um tíma til verðmætasköpunar) − PV(TCO)

Áhættuleiðréttingar (mynstur bjartsýnisskekkju í Green Book):
  kostnaður við smíði × 1,1–3,0       (álagsbil fyrir upplýsingatækniverkefni, Mott MacDonald)
  tími til verðmætasköpunar við smíði + 40–60% (fyrri vænting um töf við gangsetningu)
  kaup: bættu í staðinn við raunsæisathugun á samþættingu og kostnaði við útgöngu úr samningi

Ákvörðunarþættir, í þeirri röð sem þeir ráða venjulega:
  1. aðgreining — er þessi geta sjálft verkefnið, eða lagnir?
  2. tími til verðmætasköpunar × kostnaður við tafir (sjá cost-of-delay-in-public-programmes.md)
  3. áhættuleiðréttur heildareignarkostnaður
```

## Dæmi útreiknað

Sveitarfélag þarf málastjórnunarkerfi fyrir félagslega umönnun fullorðinna. Kaupa: SaaS á 180.000 £/ár, tilbúið eftir 4 mánuði. Smíða: áætlað 900.000 £ auk 150.000 £/ár í viðhald, tilbúið eftir 14 mánuði.

```
Áhættuleiðréttur kostnaður við smíði = 900.000 × 1,4 = 1.260.000 £
TCO á 5 árum:
  kaup  = 180.000 × 5 = 900.000 £
  smíði = 1.260.000 + 150.000 × 5 = 2.010.000 £

Töfarliður: kerfið afstýrir 40.000 £/mánuði í tvíteknum mötum;
smíðin kemur 10 mánuðum síðar en kaupin.
CoD = 10 × 40.000 = 400.000 £

Virkur samanburður: 900.000 £ (kaup) á móti 2.010.000 £ + 400.000 £ = 2.410.000 £ (smíði)
```

Kaup vinna með um það bil 1,5 milljónum punda á fimm árum, og stærsti einstaki liðurinn næst á eftir kostnaðaráætluninni við smíðina sjálfa er töfarkostnaðurinn sem hrein fjárfestingarsamanburður hefði aldrei dregið fram.

## Tengsl við hugbúnaðarverkfræði

Agarnir sem yfirfærast beint úr þessari greiningu í afhendingarstarf: **áhættuleiðrétting byggð á fyrri reynslu** — álag Mott MacDonald er hugbúnaðarígildi bjartsýnisskekkju Green Book beitt vélrænt, svo teymi ættu að færa rök fyrir undantekningum frá því frekar en gera ráð fyrir að þeirra áætlun sé undantekningin; **heiðarleiki í samanburðarvalkosti** — valkosturinn við að smíða er besti fáanlegi kaupvalkosturinn, ekki „ekkert“, sem tengist beint [fórnarkostnaður í opinberum útgjöldum](../fórnarkostnaður-í-opinberum-útgjöldum/); og **heiðarlegur TCO-samanburður** — hverja tillögu um smíði ætti að bera saman við fullan [heildareignarkostnað](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/) kaupvalkosts, ekki listaverð hans. Þar sem smíði vinnur í raun ætti að verðleggja [kostnað við tafir](../kostnaður-við-tafir-í-opinberum-áætlunum/) vegna viðbótartíma smíðinnar skýrt í viðskiptarökunum, ekki skilja hann eftir sem ósagða forsendu um að tími skipti ekki máli.

## Gildrur

- **Að bera listaverð seljanda saman við óleiðrétta kostnaðaráætlun fyrir smíði**: þetta smjaðrar tvöfalt fyrir smíðinni, bæði í kostnaði og tímaáætlun.
- **Innanhússvinnuafl verðlagt á núll**: tími verkfræðinga í opinberri þjónustu er meðhöndlaður sem „ókeypis“ því hann er þegar á starfsmannafjárveitingu ráðuneytisins, sem felur raunverulegan fórnarkostnað hans gagnvart öðrum verkefnum sem teymið gæti unnið að.
- **Óverðlögð innilokun í báðar áttir**: kostnaður við útgöngu frá seljanda og gagnaflutning er raunverulegur, en það er líka rútuþáttur (bus factor) sérsmíðaðs kerfis og háð þess að halda litlu, erfiðu í endurnýjun innanhússteymi allan líftíma þess.
- **Aðgreining verkefnisins fullyrt um lagnir**: „þetta er kjarni okkar“ fullyrt um samþættingarmiðlara eða skjalageymslu — prófaðu það gegn því hvort borgari eða málsmeðhöndlari myndi nokkurn tíma taka eftir því hvort er í gangi undir niðri.

## Heimildir

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
