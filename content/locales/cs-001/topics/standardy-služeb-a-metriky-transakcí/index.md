# Standardy služeb a metriky transakcí

GOV.UK Service Standard je 14bodový kontrolní seznam britské vlády pro budování a provoz veřejné digitální služby a je spárován s malým, povinným souborem kvantitativních metrik transakcí — náklady na transakci, míra dokončení, digitální využití a spokojenost uživatelů — které týmy musí zveřejňovat pro každou provozní službu centrální vlády. Standard a metriky dohromady jsou provozní, každodenní specializací širších rámců veřejné hodnoty a KPI v tomto repozitáři, zaměřenou přímo na týmy dodávky softwaru.

## Proč na tom záleží

Service Standard, udržovaný v příručce služeb GOV.UK, vyžaduje, aby každé hodnocení v daném časovém bodě (alfa, beta, ostrý provoz) vládní digitální služby prokázalo — mezi svými 14 body — že tým rozumí potřebám uživatelů, pracuje v multidisciplinárním týmu, často iteruje a zlepšuje a *vyhodnocuje nástroje, systémy a způsoby práce*. Historicky to stálo vedle veřejné Performance Platform, kde každá provozní služba otevřeně zveřejňovala svá transakční data; tato platforma byla od té doby zrušena, ale podkladová povinnost měřit a zveřejňovat tyto čtyři základní metriky přetrvává prostřednictvím pokynů příručky služeb „measuring success“. Důvod, proč se to liší od obecného dashboardu softwarových KPI, je, že tyto metriky byly výslovně navrženy jako jeden propojený ekonomický model, nikoli čtyři nezávislá skóre: celý argument úspor pro digitální vládu — Digital Efficiency Report Government Digital Service zjistil, že digitální transakce jsou zhruba 20krát levnější než telefonické a zhruba 50krát levnější než osobní u srovnatelných služeb místní správy — se materializuje jen tehdy, pokud míra dokončení zůstává vysoká a digitální využití skutečně roste, a nikoli jen přidáním levného kanálu vedle nezměněného drahého.

## Matematika

```
Náklady na transakci   = celkové provozní náklady služby / počet dokončených transakcí
Míra dokončení         = dokončené transakce / zahájené transakce × 100
Digitální využití      = transakce digitálního kanálu / transakce všech kanálů × 100
Spokojenost uživatelů  = % spokojených + velmi spokojených, 5bodový průzkum během služby

Úspora z přesunu kanálu = objem transakcí × posun využití × (náklady na transakci
                        ve starém kanálu − náklady na transakci digitálně)

Náklady poptávky ze selhání = (1 − míra dokončení) × transakce zkoušené digitálně ×
                        náklady záložního kanálu, který tito uživatelé pak použijí místo toho
```

## Praktický příklad

**Ilustrativní služba obnovy licence centrální vlády**, 2 miliony transakcí ročně, nyní 65 % telefonicky (3,00 £/transakce) a 35 % digitálně (0,30 £/transakce), míra dokončení 80 %. Přepracování podle 14bodového Service Standard zvedne digitální využití na 60 % a dokončení na 92 %:

```
Úspora z posunu využití = 2 000 000 × 0,25 × (3,00 − 0,30) = 1 350 000 £/rok

Náklady poptávky ze selhání, před:
  2 000 000 × 0,35 × (1 − 0,80) × 3,00 £ = 420 000 £/rok (opouštějící se vrací k telefonu)

Náklady poptávky ze selhání, po:
  2 000 000 × 0,60 × (1 − 0,92) × 3,00 £ = 288 000 £/rok

Čistá úspora poptávky ze selhání = 420 000 £ − 288 000 £ = 132 000 £/rok

Celková roční úspora ≈ 1 350 000 £ + 132 000 £ = 1 482 000 £/rok
```

Aritmetika výslovně ukazuje, proč míra dokončení není sekundární metrikou: bez zlepšení z 80 % na 92 % by byla úspora z posunu využití částečně odebrána poptávkou ze selhání, která frustrované digitální uživatele směruje zpět do drahého telefonního kanálu.

## Souvislost s softwarovým inženýrstvím

Tyto čtyři metriky jsou funkčním příkladem dashboardu nákladů a důsledků: jedna nákladová metrika držená odděleně od tří metrik výsledku/kvality, záměrně nikdy nesbalená do jediného skóre — táž disciplína, která je prosazována v [KPI veřejného sektoru](../kpi-veřejného-sektoru/). Pro inženýry se to rozpadá na konkrétní, vlastnitelnou práci: míra dokončení je problém instrumentace trychtýře a každý bod opuštění cesty je v zásadě lokalizovatelný a opravitelný; náklady na transakci vyžadují skutečné jednotkové nákladové účetnictví včetně nákladů na kanály obsluhované personálem a papírové, nejen výdajů na cloudový hosting (viz [náklady na transakci](../náklady-na-transakci/) a [celkové náklady vlastnictví ve vládním IT](../celkové-náklady-vlastnictví-ve-vládním-it/)); a digitální využití je metrika rovnosti v kostýmu efektivity — občané, kteří nemohou nebo nechtějí změnit kanál, jsou neúměrně často starší, zdravotně postižení nebo digitálně vyloučení, takže agresivní uzavírání kanálů mění „úsporu“ ve škodu na přístupu (viz [digitální inkluze](../digitální-inkluze/) a [úspory z přesunu kanálů](../úspory-z-přesunu-kanálů/)). Samotný 14bodový standard je procesní specifikací za těmito čísly — viz [standard digitální služby](../standard-digitální-služby/) pro standard v plném rozsahu a [metriky spokojenosti občanů](../metriky-spokojenosti-občanů/) pro to, jak se zde uvedené číslo spokojenosti vztahuje k širšímu měření důvěry.

## Úskalí

- **Využití získané uzavřením alternativního kanálu**: zavření telefonní linky aritmeticky zvedne procento digitálního využití a zároveň přenese poptávku ze selhání na jakýkoli zbývající kanál (často dražší cestu s digitální asistencí nebo osobní); vždy měřte náklady celého systému, nikoli samotný poměr.
- **Měření míry dokončení od druhého kroku trychtýře**: zahájení počítání „zahájených“ po prvním skutečném bodu odpadu zkrášluje míru dokončení a skrývá největší opravitelnou ztrátu.
- **Náklady na transakci bez podpory digitální asistence**: jednotkové náklady pouze digitálního kanálu, které ignorují čas personálu stráveného pomocí uživatelům, kteří se nemohou obsloužit sami, podhodnocují skutečné náklady kanálu.
- **Zveřejňování metrik bez sdílené definice napříč službami**: „transakce“ a „dokončená“ znamenají u různých týmů služeb různé věci, pokud nejsou definice standardizovány a verzovány, což činí srovnání napříč službami nespolehlivým.

## Zdroje

- GOV.UK Service Manual, „The Service Standard.“ <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, „Measuring Success — Data You Must Publish.“ <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, „Digital Efficiency Report.“ <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
