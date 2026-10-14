# Áhrifamat og ferlamat

Áhrifamat spyr hvort áætlun hafi valdið tilætluðum útkomum. Ferlamat spyr hvort áætlunin hafi í raun verið afhent eins og hún var hönnuð — hverjum, í hve miklum skammti og með hvaða hindrunum eða greiðurum á leiðinni. Þetta eru ólíkar spurningar sem krefjast ólíkra aðferða, og Magenta Book hjá HM Treasury lítur á að panta hvort tveggja saman sem staðlaða venju, því veik eða engin áhrifaniðurstaða er óskiljanleg ein og sér: hún getur ekki sagt þér hvort undirliggjandi kenning áætlunarinnar var röng, eða hvort góð kenning var einfaldlega aldrei afhent almennilega.

## Hvers vegna það skiptir máli

Mat ríkisins hefur ítrekað fundið engin mælanleg áhrif af áætlun en haft ekkert ferlamat til að útskýra hvers vegna — sem skilur kaupendur mats eftir ófær um að greina „þessi hugmynd virkar ekki“ (kenningarbrestur) frá „þessi hugmynd var aldrei reynd almennilega“ (framkvæmdarbrestur). Leiðsögn Medical Research Council um ferlamat á flóknum inngripum, birt í BMJ 2015 og víða vitnað í samhliða Magenta Book, formgerði trúfesti (fidelity), skammt (dose) og umfang (reach) sem kjarnaatriði sem ferlamat verður að mæla. Að panta áhrifamat án ferlamats er hætta á að hafna raunverulega traustri áætlunarhönnun því hún var afhent helmingi ætlaðs þýðis með broti af ætlaðri ákefð — mistök sem kerfissmiður er vel í stakk búinn til að koma í veg fyrir, því afhendingartrúfesti er einmitt það sem rekstrargagnakerfi geta fangað nær rauntíma.

## Stærðfræðin

```
Ferlamat spyr:
 - Var afhent markhópnum, í fyrirhuguðum skammti/ákefð?
 - Passaði afhending við hönnun rökvirknilíkans / breytingakenningar?
 - Hvaða hindranir eða greiðarar höfðu áhrif á afhendingu?
 Aðferðir: trúfestiathuganir gegn fyrirfram tilgreindum þröskuldum, tilviksrannsóknir, viðtöl,
           stjórnsýslugögn um afhendingu.

Áhrifamat spyr:
 - Hvað breyttist, og hve mikið af þeirri breytingu má rekja til áætlunarinnar?
 Aðferðir: RCT, DiD, PSM, RDD — sjá impact-evaluation-methods — gagnvart mótstaðreynd.

Sameinuð greining:
 Engin áhrif + mikil trúfesti → kenningarbrestur: líkanið sjálft skilaði ekki útkomunni
 Engin áhrif + lítil trúfesti → framkvæmdarbrestur: líkanið var aldrei prófað almennilega
 Áhrif fundin + mikil trúfesti → endurtaktu með öryggi
 Áhrif fundin + lítil trúfesti → rannsakaðu frekar: áhrifin gætu verið brothætt eða bundin við stað
```

## Dæmi útreiknað

**Sveitarfélag (foreldraáætlun)**: áhrifamat með mismun-í-mismun finnur +2 prósentustiga breytingu á mælikvarða á velferð barna — ekki tölfræðilega marktæk. Ferlamatið, framkvæmt samhliða, leiðir í ljós að áætlunin náði aðeins til 210 af þeim 500 fjölskyldum sem miðað var á (42% umfang), og af þeim luku aðeins 95 fyrirfram tilgreindum trúfestiþröskuldi 75%+ af mætingum á fundi — 19% af upprunalega ætluðu umfangi. Niðurstaða: veika áhrifaniðurstaðan samræmist framkvæmdarbresti, ekki sönnun þess að áætlunarlíkanið virki ekki; viðeigandi viðbrögð eru að laga tilvísunarferlið sem olli 58% brottfalli, ekki að hafna áætlunarhönnuninni.

**Góðgerðarfélag (stafræn læsisáætlun)**: áhrifamat finnur sterk áhrif (+18 prósentustig á stafrænu sjálfsöryggiskvarða), og samhliða ferlamat staðfestir 92% trúfesti við fyrirhugaða námskrá á öllum 12 afhendingarstöðum. Sameinað getur fjármögnunaraðilinn stækkað áætlunina af öryggi, því sýnt er að áhrifin haldast samræmd frekar en að vera afurð eins óvenju góðs staðar.

## Tengsl við hugbúnaðarverkfræði

Ferlamatsgögn eru nákvæmlega það sem afhendingarkerfi eru vel í stakk búin til að fanga: mæting gegn áætlun, skammtur lota og brottfall á hverju stigi tilvísunar- eða skráningartrektar — sama trektargreining og verkfræðingar byggja nú þegar fyrir vörueiginleika, beitt á afhendingarleiðslu félagslegrar áætlunar í staðinn. Að fæða forstöðumenn áætlana með trúfesti- og umfangsmælikvörðum nær rauntíma, frekar en að bíða eftir mati í lok styrks, gerir kleift að laga bilaða tilvísunarleið á miðri áætlun í stað þess að uppgötva hana fyrst þegar fjármögnunartímabilinu er lokið. Sjá [aðferðir við áhrifamat](../aðferðir-við-áhrifamat/) fyrir orsakahönnunina sem ferlamat er parað við, [breytingakenning](../breytingakenning/) og [rökvirknilíkan](../rökvirknilíkan/) fyrir hönnunina sem ferlamatið athugar trúfesti gegn, og [ávinningsheimta](../ávinningsheimta/) fyrir að rekja afhendingu allt til útkomanna sem lofað var.

## Gildrur

- **Að panta áhrifamat eitt og sér.** Núll eða veik niðurstaða verður þá ekki túlkuð sem kenningarbrestur eða framkvæmdarbrestur, sem er einmitt greinarmunurinn sem skiptir máli þegar ákveða á næsta skref.
- **Að líta á ferlamat sem mjúkan viðbótarlið.** Það þarf sömu strangleika og fyrirfram tilgreind trúfestiviðmið og áhrifahönnunin, annars hrynur það í sögusagnir þegar niðurstöður koma.
- **Að rugla „á réttum tíma og innan fjárhagsáætlunar“ saman við „afhent eins og hannað“.** Ferlamat athugar trúfesti við líkanið — skammt, markhóp, innihald — ekki RAG-stöðu verkefnastjórnunar.
- **Að skrá ekki trúfestiþröskulda fyrirfram.** Að ákveða eftir á hvað teljist „nægur skammtur“ lætur hverja skýringu á vonbrigðum með áhrifaniðurstöðu líta út eins og afsökun eftir á.

## Heimildir

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., „Process evaluation of complex interventions: Medical Research Council
  guidance.“ BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
