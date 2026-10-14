# Margþætt fátæktarvísitala (MPI)

MPI mælir fátækt sem skarast skerðingar sem einstaklingur upplifir samtímis — í heilsu, menntun og lífskjörum — frekar en sem tekjur einar sem falla undir mörk. Hún var þróuð af Oxford Poverty and Human Development Initiative (OPHI) með Sabinu Alkire og James Foster, og hefur verið birt sameiginlega með UNDP í hverri Human Development Report frá 2010, ásamt [mannþróunarvísitala (HDI)](../mannþróunarvísitala/).

## Hvers vegna það skiptir máli

Tekjufátæktarmörk missa af fólki sem hefur nægar reiðufjártekjur en skortir hreint vatn, skólagöngu, eða hefur misst barn — og þau missa af því að skerðingar safnast saman: heimili án rafmagns er óhóflega líklegt til að skorta líka hreinlætisaðstöðu og eiga vannært barn. Alkire-Foster aðferðin, sem MPI byggir á, telur skerðingar hvers einstaklings yfir tíu vísa flokkaða í þrjár jafnvigtaðar víddir — heilsu, menntun, lífskjör — og flokkar aðeins einhvern sem „MPI-fátækan“ ef vigtuð skerðingareinkunn hans fer yfir fastan þröskuld, sem fangar skörun sem safn aðskilinna eins-vísa tölfræði getur ekki. OPHI birtir alla aðferðafræði og landagögn á <https://ophi.org.uk/multidimensional-poverty-index/>; hnattræna MPI sem það heldur utan um sameiginlega með UNDP nær nú yfir 110 lönd. Fyrir hugbúnað sem smíðaður er fyrir fátæktarbaráttuáætlanir — beinar peningagreiðslur, flokkun félagslegrar umönnunar, markhópagreiningu aðstoðar — er vísasafn MPI oft það sem næst kemst stöðluðu skerðingarskema sem þegar er sannreynt hjá tugum landshagstofa.

## Stærðfræðin

```
10 vísar, 3 víddir, hver vídd vigtuð 1/3:

Heilsa (1/3):            næring (1/6), barnadauði (1/6)
Menntun (1/3):           ár skólagöngu (1/6), skólasókn (1/6)
Lífskjör (1/3):          eldunareldsneyti, hreinlætisaðstaða, drykkjarvatn,
                          rafmagn, húsnæði, eignir (1/18 hver)

skerðingareinkunn (c) = summa vigta þeirra vísa sem einstaklingur er skertur á

einstaklingur er „MPI-fátækur“ ef c ≥ 1/3 (fátæktarmörkin, k = 33%)

H (höfðatöluhlutfall) = fjöldi MPI-fátækra / heildaríbúafjöldi
A (ákefð)             = meðalskerðingareinkunn meðal MPI-fátækra eingöngu

MPI = H × A
```

Þar sem MPI margfaldar *hlutfall* þeirra sem eru fátækir með *hversu* fátækir þeir eru, geta tvö svæði með sama höfðatöluhlutfall haft mjög ólíkar MPI-einkunnir ef skerðingar eru alvarlegri á öðru — sama rökfræði um „enga skiptingu milli vídda“ og liggur að baki rúmfræðilegu meðaltali HDI.

## Dæmi útreiknað

**Landskönnun meðal 1.000 manna**: 350 eru greindir sem margþætt fátækir (skerðingareinkunn ≥ 33%). Meðal þessara 350 fátæku einstaklinga einna er meðalskerðingareinkunn 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Samanburður tveggja umdæma með jafnt höfðatöluhlutfall**: Umdæmi A hefur H = 0,30 og A = 0,40 (margir fátækir, í meðallagi skertir); Umdæmi B hefur H = 0,30 og A = 0,60 (jafnmargir fátækir, en alvarlegar skertir — skortir rafmagn *og* hreinlætisaðstöðu *og* skólasókn samtímis).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Sama höfðatöluhlutfall, 50% hærri MPI í Umdæmi B — markhópakerfi sem byggir á höfðatölufátækt einni saman myndi raða umdæmunum tveimur eins og missa af því að Umdæmi B þarfnast dýpra inngrips.

## Tengsl við hugbúnaðarverkfræði

- Málastjórnunar- og réttindakerfi fyrir félagslegar áætlanir geyma oft þegar nokkra af vísunum tíu (húsnæði, skólasókn, heilsumerki) í aðskildum kerfum (silóum); talningaraðferð Alkire-Foster er tilbúið skema til að sameina þá í eina skerðingareinkunn í stað þess að smíða sérsniðið einkunnalíkan frá grunni.
- Skiptingin í höfðatölu/ákefð (H × A) er almennt gagnlegt mynstur fyrir hvert mælaborð sem tilkynnir „hve margir verða fyrir áhrifum“ ásamt „hve illa“ — að þjappa hvoru tveggja í eina tölu, eins og hrá algengistölfræði gerir, felur einmitt tilvikið sem þarfnast mestra fjármuna.
- MPI-vísamælaborð parast eðlilega við skýrslugjöf um [kostnað á hvern þiggjanda](../kostnaður-á-hvern-þiggjanda/) fyrir fátæktarbaráttuáætlanir: kostnaður á hvert MPI-stig sem lækkar er réttlætanleg eining til að bera saman mjög ólík inngrip (beinar peningagreiðslur á móti hreinlætisinnviðum).

## Gildrur

- **Að líta á vísana tíu sem algilda** — hnattrænir MPI-vísar OPHI eru kvarðaðir fyrir samanburðarhæfni milli landa; landsbundin MPI (mörg lönd, þar á meðal nokkur í Suður-Asíu og Afríku, birta sín eigin) aðlaga vísa og vigtir að staðbundnu samhengi, og þau eru ekki beint sambærileg.
- **Að tilkynna H eitt og sér** — höfðatöluhlutfall hunsar ákefð alfarið; tilkynntu eða reiknaðu alltaf A samhliða því, eða MPI sjálfa.
- **Að gera ráð fyrir að MPI-fátækir og tekjufátækir séu sama þýðið** — landsyfirlit OPHI sýna venjulega aðeins hlutaskörun þar á milli; áætlun sem miðar aðeins á tekjufátæka mun kerfisbundið missa af umtalsverðum hluta margþætt fátækra.

## Heimildir

- Oxford Poverty and Human Development Initiative. „Multidimensional Poverty Index.“
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. „Counting and Multidimensional Poverty Measurement.“ Journal of Public
  Economics, 2011.
- UNDP & OPHI. „Global Multidimensional Poverty Index“ (annual report).
