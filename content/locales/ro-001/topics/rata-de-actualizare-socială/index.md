# Rata de actualizare socială

Rata de actualizare socială convertește costurile și beneficiile viitoare în valori de azi, astfel încât programele cu câștiguri răspândite pe decenii să poată fi comparate pe o bază comună. Green Book al HM Treasury impune un program descrescător ancorat la 3,5% pentru primii 30 de ani, bazat pe formula Ramsey — un număr specific, citabil, care a devenit un argument politic și etic viu ori de câte ori este aplicat unor angajamente pe orizonturi lungi, precum politica climatică sau infrastructura.

## De ce contează

O liră de beneficiu primită peste 30 de ani nu valorează cât o liră de beneficiu primită azi, din motive care țin parțial de preferința pură pentru timp (oamenii și societățile preferă lucrurile bune mai devreme) și parțial de creștere (se așteaptă ca o societate viitoare să fie mai bogată, deci o liră contează mai puțin pentru ea la margine). Anexa 6 a Green Book derivă rata standard de actualizare a Regatului Unit din formula Ramsey, combinând o rată a preferinței pure pentru timp cu rata așteptată de creștere a consumului și cu elasticitatea utilității marginale a consumului, rezultând rata publicată de 3,5% pe an pentru anii 0–30, descrescătoare într-un program publicat pentru anii 31 și următorii (până la 1% pentru anii 301+). Acest program există tocmai pentru că un 3,5% constant, capitalizat pe un secol, ar face aproape orice beneficiu pe orizont lung — o apărare împotriva inundațiilor care salvează vieți peste 80 de ani, o reducere de carbon care evită daune peste 100 de ani — să pară neglijabil în valoare actualizată, ceea ce Trezoreria a considerat o concluzie etică neverosimilă pentru decizii cu adevărat de lungă durată privind infrastructura și mediul.

Rata de actualizare este contestată tocmai pentru că alegerea nu este un parametru tehnic neutru: codifică o judecată despre cât ar trebui să sacrifice o societate astăzi pentru oameni încă nenăscuți. Raportul Stern despre economia schimbărilor climatice (Stern Review, 2006) a folosit o rată de actualizare apropiată de zero (o preferință pură pentru timp în jur de 0,1%), argumentând că actualizarea bunăstării generațiilor viitoare la ceva asemănător ratelor pieței este indefensabilă etic atunci când dauna (schimbarea climatică catastrofală) este ireversibilă. Criticii — în special William Nordhaus — au susținut că rata aproape nulă a lui Stern a exagerat argumentul pentru cheltuieli climatice imediate, făcând aproape orice cost prezent să pară justificat în raport cu un beneficiu viitor abia actualizat. Dezacordul nu a fost despre matematică; a fost despre al cui cadru etic ar trebui să stabilească rata și rămâne ilustrarea standard a motivului pentru care rata de actualizare este o alegere de politică, nu doar un input actuarial.

## Matematica

Formula Ramsey din spatele ratei Green Book:

```
r = ρ + η·g

unde:
  r = rata de actualizare socială
  ρ = rata preferinței pure pentru timp (nerăbdare + risc de catastrofă)
  η = elasticitatea utilității marginale a consumului
  g = rata anuală așteptată de creștere a consumului pe cap de locuitor
```

Programul descrescător al Green Book (Anexa 6, ilustrativ — verificați ediția curentă pentru tabelul exact publicat):

```
Anii 0–30:    3,5%
Anii 31–75:   3,0%
Anii 76–125:  2,5%
Anii 126–200: 2,0%
Anii 201–300: 1,5%
Anii 301+:    1,0%
```

Valoarea actualizată a unei sume viitoare:

```
PV = FV / (1 + r)^t
```

## Exemplu lucrat

**Schemă de apărare împotriva inundațiilor**: un proiect livrează 10 milioane £ de daune evitate din inundații în anul 40.

Cu o rată fixă de 3,5%: PV = 10.000.000 / (1,035)^40 ≈ 2,52 milioane £ — beneficiul pare mic.

Cu programul descrescător al Green Book (3,5% pentru anii 0–30, apoi 3,0%), calculul capitalizează la 3,5% în primii 30 de ani și la 3,0% pentru anii 31–40:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ 2,65 milioane £
```

Programul descrescător ridică modest valoarea actualizată a beneficiilor pe orizont lung față de o rată fixă ridicată — scopul explicit al programului, deoarece un 3,5% fix pe un secol ar actualiza un beneficiu de 100 de milioane £ din anul 100 la sub 3,3 milioane £.

**Infrastructură digitală**: o migrare guvernamentală în cloud care costă 4 milioane £ acum este așteptată să evite 500.000 £/an în costuri de întreținere a sistemelor vechi timp de 15 ani. La 3,5%, valoarea actualizată a acestei anuități este aproximativ 500.000 £ × 11,52 (factorul de anuitate pe 15 ani la 3,5%) ≈ 5,76 milioane £ — depășind confortabil costul de 4 milioane £, un caz cu valoare actualizată netă pozitivă care ar arăta sensibil mai slab la o rată mai mare aleasă naiv (la 7%, același factor de anuitate scade la circa 9,11, dând 4,56 milioane £, încă pozitiv, dar cu o marjă mult mai subțire).

## Legătura cu ingineria software

Majoritatea cazurilor de afaceri software rulează pe 3–5 ani, bine în interiorul benzii fixe de 3,5%, deci programul descrescător rareori are efect direct — dar disciplina de fond contează pentru orice investiție tehnologică guvernamentală cu durată lungă de viață a activului (o platformă națională, un program de infrastructură de date, un contract pe mai multe decenii):

- Folosiți rata publicată de Green Book, nu o „rată de prag” internă împrumutată din finanțele private; auditorii și recenzenții Trezoreriei vor aștepta programul standard.
- Pentru beneficiile realizate la mulți ani distanță (economiile de întreținere pe termen lung ale unei platforme, valoarea compusă a unui ecosistem de date deschise — vezi [valoarea datelor deschise](../valoarea-datelor-deschise/)), alegerea actualizării poate transforma un caz de afaceri din pozitiv în negativ; faceți rata și orizontul ipoteze explicite, nu valori implicite îngropate.
- Aceasta alimentează direct [evaluarea Green Book](../evaluarea-green-book/), modelul celor cinci cazuri care cere formal un flux de numerar actualizat, și [evaluarea bunăstării](../evaluarea-bunăstării/), unde aceeași întrebare de actualizare apare pentru beneficiile nemonetare de bunăstare.
- Vezi și [echitatea intergenerațională și actualizarea pentru sustenabilitate](../echitatea-intergenerațională-și-actualizarea-pentru-sustenabilitate/) pentru dezbaterea Stern versus Nordhaus aplicată specific investițiilor în tehnologie de mediu și climă.

## Capcane

- **Folosirea unei rate fixe pentru orizonturi foarte lungi.** Programul descrescător al Green Book există specific pentru că o rată constantă subestimează beneficiile cu adevărat de lungă durată; verificați ce bandă se aplică în loc să folosiți implicit 3,5% peste tot.
- **Tratarea ratei de actualizare ca neutră etic.** Disputa Stern–Nordhaus arată că rata codifică o judecată de valoare despre generațiile viitoare; schimbarea ei schimbă ce programe par justificate, deci ar trebui declarată și apărată, nu ascunsă într-o valoare implicită de foaie de calcul.
- **Confundarea ratei de actualizare sociale cu un cost privat al capitalului.** Costurile de împrumut guvernamentale și ratele de prag ale sectorului privat sunt concepte diferite de rata socială derivată din Ramsey, iar substituirea unuia cu celălalt într-o evaluare publică va denatura de regulă rezultatul în direcția favorizării randamentelor pe termen scurt.
- **Actualizarea inconsistentă a fluxurilor reale și nominale.** Rata Green Book este o rată reală (ajustată la inflație); actualizarea fluxurilor de numerar nominale cu ea subestimează semnificativ valorile actualizate.

## Surse

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation”, Anexa 6 (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. „The Economics of Climate Change: The Stern Review.” HM Treasury, 2006.
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.” Journal of Economic Literature, 2007;45(3):686–702.
- Ramsey FP. „A Mathematical Theory of Saving.” Economic Journal, 1928;38(152):543–559.
