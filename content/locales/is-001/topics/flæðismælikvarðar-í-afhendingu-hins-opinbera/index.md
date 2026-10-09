# Flæðismælikvarðar í afhendingu hins opinbera

Flæðismælikvarðar — lögmál Little, mörk á vinnu í vinnslu (WIP) og flæðisskilvirkni — lýsa því hve hratt vinna færist í gegnum kerfi með takmarkaða afkastagetu. Sprettborð er eitt slíkt kerfi; biðröð bótaumsókna, skrá yfir byggingarleyfisumsóknir eða uppsafnað vegabréfsáritunarmál er nákvæmlega sama stærðfræðin í öðrum einkennisbúningi.

## Hvers vegna það skiptir máli

Málafjöldi hjá hinu opinbera eru biðraðakerfi, og biðraðakerfi lúta biðröðalögmálum hvort sem einhver mælir þau eða ekki. Lögbundnir afgreiðslufrestir gera þetta skýrt: samkvæmt skipulagslöggjöf Bretlands (Town and Country Planning) hafa flestar minni byggingarleyfisumsóknir 8 vikna lögbundið afgreiðslumarkmið og stærri umsóknir 13 vikur — skuldbinding um hringrásartíma sem er skrifuð beint inn í lög. Uppsafnaður fjöldi hælismála hjá Home Office, sem National Audit Office og Home Affairs Select Committee hafa ítrekað rýnt í, er vel skjalfest dæmi um opinbert kerfi þar sem vinna í vinnslu óx hraðar en afköst í langan tíma, sem knúði hringrásartíma langt umfram lögbundnar eða þjónustuvæntingar. Flæðismælikvarðar gefa bæði verkfræðingum og stjórnendum málsmeðferðar sameiginlegt, megindlegt tungumál um einmitt þennan bilunarhátt, í stað þess að skilja hann eftir sem eigindlegt „uppsöfnunarvandamál“.

## Stærðfræðin

```
Lögmál Little:  WIP = Afköst × Hringrásartími
            →   Hringrásartími = WIP / Afköst

Flæðisskilvirkni = virkur (snertitími) / heildarhringrásartími   (Vacanti)

Áhrif WIP-marka: við föst afköst helmingar það hringrásartíma að meðaltali
að helminga WIP (lögmál Little umritað) — handfangið sem er tiltækt
án þess að bæta við starfsfólki.
```

Sjá [DORA-mælikvarðar fyrir opinbert verðmæti](../dora-mælikvarðar-fyrir-opinbert-verðmæti/) fyrir samsvarandi stærðfræði beitta á hugbúnaðarútgáfuferla frekar en málsmeðferð.

## Dæmi útreiknað

**Skipulagsdeild sveitarfélags**: 400 umsóknir opnar á hverjum tíma (WIP), teymið afgreiðir 50 umsóknir á viku (afköst).

```
Hringrásartími = WIP / Afköst = 400 / 50 = 8 vikur
```

Það lendir nákvæmlega á 8 vikna lögbundnu markmiði fyrir minni umsóknir — án nokkurs svigrúms, sem þýðir að öll sveifla í innkomandi eftirspurn eða svartíma umsagnaraðila ýtir afgreiðslum yfir lögbundinn frest.

**Flæðisskilvirkni**: af þessum 8 vikum (56 almanaksdagar) hefur umsókn venjulega um 6 klukkustundir af raunverulegri vinnslu málsmeðhöndlara.

```
Flæðisskilvirkni = 6 klukkustundir / (56 dagar × 8 vinnustundir/dag)
                 = 6 / 448 ≈ 1,3%
```

Viðmið Vacanti fyrir hugbúnaðarteymi setur dæmigerða flæðisskilvirkni við 15–20%; málsmeðferð hjá hinu opinbera, með mörgum lögbundnum umsagnaraðilum sem taka við og opinbera samráðsglugga, er oft stærðargráðu lægri. 98,7% „biðtímans“ er þar sem átta vikurnar fara í raun — ekki í afkastagetu málsmeðhöndlara.

**Inngrip með WIP-mörkum**: að setja þak á opnar umsóknir á hvern málsmeðhöndlara við 15 í stað ótakmarkaðra 25 (með föstum afköstum) færir WIP úr 400 niður í um 240 yfir 16 manna teymi:

```
Nýr hringrásartími = 240 / 50 = 4,8 vikur
```

Nærri helmings lækkun hringrásartíma vegna stefnubreytingar, ekki fjölgunar starfsfólks — sama handfang og afhendingarteymi í anda DORA toga í þegar þau takmarka WIP í sprettum.

## Tengsl við hugbúnaðarverkfræði

Flæðismælikvarðar eru sameiginlega tungumálið milli Kanban-borðs afhendingarteymis og málsmeðferðarvinnustaðarins sem það smíðar hugbúnað fyrir: biðröð málsmeðhöndlara og biðröð samrunabeiðna lúta báðar lögmáli Little, og báðar sprengja hringrásartímamarkmið sín á sama hátt — of mikil vinna í vinnslu miðað við afköst. Þetta skiptir beint máli fyrir [kostnaður við tafir í opinberum áætlunum](../kostnaður-við-tafir-í-opinberum-áætlunum/): hringrásartími × CoD eru pundin sem sitja í biðröðinni á hverjum tíma, og fyrir [þjónustustaðlar og færslumælikvarðar](../þjónustustaðlar-og-færslumælikvarðar/), þar sem birt afgreiðslumarkmið er skuldbinding um hringrásartíma sem aðeins flæðismælikvarðar geta greint þegar hún bregst. Hugbúnaður fyrir málsmeðferðarkerfi ætti að birta WIP og hringrásartíma sem fyrsta flokks rekstrarmælikvarða, ekki grafa þá inni í málastjórnunarkerfi sem enginn spyr.

## Gildrur

- **Að bæta við WIP-mörkum án þess að laga raunverulega flöskuhálsinn**: ef takmörkunin er svartími ytri lögbundins umsagnaraðila, færir takmörkun á WIP málsmeðhöndlara biðröðina aðeins upp á við í stað þess að stytta hana.
- **Að líta á flæðisskilvirkni sem markmið til að hagræða**: að flýta þeim 1,3% sem eru virkur tími hreyfir hringrásartíma varla; ávinningurinn liggur næstum alltaf í biðstöðunum, sem þýðir yfirleitt endurhönnun ferla, ekki hraða málsmeðhöndlara.
- **Að hunsa breytileika**: lögmál Little lýsir meðaltölum; málafjöldi með mikinn breytileika í eftirspurn þarfnast varageymslu afkastagetu, ekki aðeins strangari WIP-marka, annars glatast lögbundnir frestir samt í sveiflukennda halanum þótt meðaltalið batni.
- **Að mæla WIP ósamræmt**: mál „opið“ í skráarkerfinu en í raun stöðvað og bíður þriðja aðila er enn WIP; að sleppa því smjaðrar fyrir tölunum án þess að breyta veruleikanum sem borgarinn sér.

## Heimildir

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
