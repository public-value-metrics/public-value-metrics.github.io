# Lykilárangursmælikvarðar opinbera geirans

Lykilárangursmælikvarði (KPI) er valinn, rakinn mælikvarði sem stendur fyrir það hvort opinber þjónusta sinni hlutverki sínu vel. Hjá hinu opinbera er val á KPI aldrei hlutlaust: þar sem KPI tengjast fjárlögum, röðunartöflum og starfsferlum mótar sú athöfn að velja einn hegðun allra sem eru neðar í keðjunni, oft meira en stefnan sem skapaði þjónustuna.

## Hvers vegna það skiptir máli

Athugun Charles Goodhart frá 1975 um peningastefnu — síðar gerð vinsæl af Marilyn Strathern sem „þegar mælikvarði verður að markmiði hættir hann að vera góður mælikvarði“ — er mikilvægasti einstaki viðvörunarmiðinn í árangursstjórnun hjá hinu opinbera. KPI sem valinn er til að *lýsa* kerfi byrjar að *skekkja* það kerfi um leið og fjármunir, laun eða pólitískt líf er bundið við hann. Klassíska dæmið er viðbragðstími sjúkrabíla hjá NHS: þegar átta mínútna markmiðið fyrir flokk A varð bindandi sýndu sumar stofnanir sig hafa „staflað“ sjúkrabílum rétt fyrir utan viðbragðstímaklukkuna, eða endurflokkað útköll, til að ná tölunni án þess að breyta útkomu sjúklinga. Leiðsögn National Audit Office í Bretlandi um val og notkun árangursvísa — sett fram í skýrslum þess um hagkvæmni útgjalda og í ramma þess „Performance Measurement by Regulators“ og „Choosing the Right FABRIC“ (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — er til einmitt vegna þess að ráðuneyti völdu sífellt vísa sem voru auðveldir í skýrslugjöf fremur en vísa sem voru erfiðir að hagræða. Hugbúnaðarverkfræðingur sem afhendir mælaborðið sem ráðherra eða forstjóri verður dæmdur gegn er, hvort sem hann ætlar sér það eða ekki, að hanna hvatakerfi opinberrar stofnunar.

## Stærðfræðin

Hönnun KPI er viðfangsefni í formi ramma, en *mat* á frambjóðanda-KPI er endurtakanlegur gátlisti, ekki formúla:

```
Fyrir hvern frambjóðanda-KPI, gefðu einkunn gagnvart:
  Hentar tilgangi   — mælir hann útkomuna, eða staðgengil nokkrum skrefum frá henni?
  Viðeigandi        — tilheyrir hann þeim sem geta í raun haft áhrif á hann?
  Jafnvægi          — er hann paraður við mótmælikvarða sem grípur hagræðingu?
  Traustur          — þolir hann endurskoðun, eða er hann sjálftilkynntur og ósannprófanlegur?
  Samþættur         — passar hann inn í heildarsafnið, eða ýtir gegn öðrum KPI?
  Hagkvæmur         — kostar söfnun hans meira en ákvörðunin sem hann upplýsir?

Skipting í leiðandi og eftirbátandi:
  Leiðandi vísir     → spáir fyrir um framtíðarútkomu, en oft hægt að hagræða (t.d. símtöl svöruð <60 sek.)
  Eftirbátandi vísir → staðfestir að útkoman varð, en berst of seint til að stýra (t.d. árleg
                        ánægjukönnun)
  Réttlætanlegt KPI-safn parar að minnsta kosti einn af hvorum fyrir hvert markmið.
```

## Dæmi útreiknað

**Sjúkrabílastofnun**: stofnun tilkynnir KPI um viðbragðstíma í flokki A (lífshættulegt): „75% útkalla svarað innan 8 mínútna“. Á einum ársfjórðungi berast 6.000 útköll í flokki A; 4.500 eru innan 8 mínútna, sem gefur 75,0% — greinilega á markmiði.

```
Fyrirsagnar-KPI = 4.500 / 6.000 × 100 = 75,0%  (uppfyllir 75% mörkin)
```

En Goodhart-úttekt bætir við mótmælikvarða: meðalviðbragðstími hægustu 10% útkalla.

```
Meðalviðbragðstími hægasta tíundarhluta = 34 mínútur (upp úr 19 mínútum tveimur árum áður)
```

Stofnunin nær markmiðinu á meðan halinn — útköllin sem eru líklegust til að vera raunverulega lífshættuleg þegar flokkun er ófullkomin — hefur versnað mikið, því áhafnir eru forgangsraðaðar í átt að útköllum nálægt 8 mínútna klettabrúninni fremur en eftir klínískum bráða. Eitt KPI sagði ranga sögu; parað KPI sagði þá sönnu.

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar sem smíða árangursmælaborð fyrir hið opinbera eru, í reynd, að hanna hvata-API stofnunarinnar. Hagnýtar afleiðingar: mældu *nefnarann* jafn nákvæmlega og teljarann (KPI tilkynnt sem ber prósenta býður upp á hagræðingu nefnara — sjá [kostnaður á hverja færslu](../kostnaður-á-hverja-færslu/) fyrir sömu gildru í stafrænni þjónustu); byggðu mótmælikvarða inn á sama mælaborð frekar en í sérstaka skýrslu sem enginn les, svo hagræðing sé sýnileg við ákvörðunarpunkt; og útgáfustýrðu KPI-skilgreiningunni, því hljóðlát endurskilgreining (breyting á því hvað telst „símtal“, „mál“ eða „lokun“) jafngildir í reynd því að breyta markmiðinu án þess að tilkynna það. [Stigakort opinbers verðmætis](../stigakort-opinbers-verðmætis/) er ein skipulögð leið til að koma í veg fyrir að stakt KPI sé lesið eitt og sér, og [ábyrgð byggð á útkomu (OBA)](../ábyrgð-byggð-á-útkomu/) er sá agi að velja KPI á þýðisstigi sem eitt teymi getur ekki einhliða skekkt.

## Gildrur

- **Að velja mælikvarðann sem er auðveldur í söfnun fram yfir þann sem skiptir máli**: svartími símtals er léttvægur í skráningu; hvort símtalið leysti vanda borgarans er það ekki — en aðeins hið síðara er útkoman. Standast að nota sjálfgefið það sem kerfið gefur nú þegar frá sér.
- **Enginn mótmælikvarði**: hvert KPI sem tengt er peningum eða orðspori verður hagrætt á jaðrinum; sendu það út með pöruðum mælikvarða sem grípur líklega hagræðingarleið áður en það er birt.
- **Að endurskilgreina mælikvarðann án breytingaskrár**: að skipta „móttekin símtöl“ út fyrir „svöruð símtöl“ til að fegra þróun eyðileggur trúverðugleika tímaraðarinnar um leið og það uppgötvast — birtu alltaf breytingaskrá skilgreininga með tölunum.
- **Að rugla starfsemi saman við árangur**: að telja lokaðar skoðanir er afurð; að telja húsnæði sem fært hefur verið í samræmi er nær útkomunni (sjá [útkoma og afurðir](../útkoma-og-afurðir/)).

## Heimildir

- National Audit Office, „Choosing the Right FABRIC: A Framework for Performance Information.“
  <https://www.nao.org.uk/>
- Marilyn Strathern, „‚Improving Ratings‘: Audit in the British University System,“ *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
