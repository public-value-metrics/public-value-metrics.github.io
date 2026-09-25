# Adeiladu yn erbyn Prynu mewn Llywodraeth

Mae adeiladu-yn-erbyn-prynu yn gymhariaeth strwythuredig, wedi'i haddasu ar gyfer risg, o ddatblygiad pwrpasol yn erbyn caffael masnachol neu nwyddau, wedi'i chymharu ar sail [cyfanswm cost perchnogaeth](../total-cost-of-ownership-in-government-it/) wedi'i ddisgowntio, amser-i-werth, a risg. Mae'r llywodraeth yn strwythurol yn sector sy'n prynu — mae'r Cod Ymarfer Technoleg yn gosod tybiaeth tuag at atebion nwyddau a chwmwl — ac eto mae timau peirianneg y tu mewn i adrannau'n dal i ddiofynnu at adeiladu, am yr un rhesymau ag adeiladwyr ym mhobman.

## Pam mae hyn yn bwysig

Mae Cod Ymarfer Technoleg y Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) a'r canllawiau Llawlyfr Gwasanaeth cysylltiedig ar benderfynu p'un a ddylid adeiladu neu brynu yn gwthio adrannau i gyfiawnhau datblygiad pwrpasol yn erbyn tybiaeth y dylid prynu galluedd nwyddau, nid ei adeiladu, ac mai dim ond galluedd sy'n wirioneddol newydd, sy'n gwahaniaethu'r genhadaeth, sy'n cyfiawnhau cod pwrpasol. Mae canllawiau atodol gogwydd optimistiaeth Trysorlys EF i'r Llyfr Gwyrdd, wedi'u tynnu o adolygiad Mott MacDonald yn 2002 o gaffaeliadau cyhoeddus mawr, yn rhoi'r ystod codi ehangaf o unrhyw gategori a asesir i brosiectau TG — argymhellir codi amcangyfrifon cost gyfalaf o 10% ar y pen isaf a hyd at 200% ar y pen uchaf cyn eu defnyddio mewn gwerthusiad, gan adlewyrchu pa mor wael y mae adeiladau meddalwedd wedi cael eu tanamcangyfrif yn hanesyddol ar draws caffael cyhoeddus. Mae dadansoddiad adeiladu-yn-erbyn-prynu yn bodoli'n benodol i orfodi'r addasiad risg hwnnw ar y bwrdd cyn cymeradwyo, yn hytrach na gadael iddo ymddangos fel cais gorwario o fewn y flwyddyn.

## Y fathemateg

```
Cymharwch dros yr un gorwel o 3–5 mlynedd, wedi'i ddisgowntio ar gyfradd
ddisgowntio gymdeithasol y Llyfr Gwyrdd (gweler social-discount-rate.md):

GPN_opsiwn = GP(buddion, wedi'u symud yn ôl amser-i-werth) − GP(TCO)

Addasiadau risg (patrwm gogwydd optimistiaeth y Llyfr Gwyrdd):
  cost adeiladu × 1.1–3.0        (ystod codi prosiect TG, Mott MacDonald)
  amser-i-werth adeiladu + 40–60% (rhagdyb oedi defnyddio)
  prynu: ychwanegwch wiriad realiti integreiddio a chostau ymadael contract yn lle hynny

Ffactorau penderfynu, yn y drefn maent fel arfer yn penderfynu:
  1. gwahaniaethu — ai'r genhadaeth yw'r galluedd hwn, ynteu bibellwaith?
  2. amser-i-werth × cost oedi (gweler cost-of-delay-in-public-programmes.md)
  3. cyfanswm cost perchnogaeth wedi'i addasu ar gyfer risg
```

## Enghraifft waith

Mae angen system rheoli achosion ar gyfer gofal cymdeithasol i oedolion ar awdurdod lleol. Prynu: SaaS am £180,000/flwyddyn, yn fyw ymhen 4 mis. Adeiladu: amcangyfrif o £900,000 ynghyd â £150,000/flwyddyn o gynnal a chadw, yn fyw ymhen 14 mis.

```
Cost adeiladu wedi'i addasu ar gyfer risg = 900,000 × 1.4 = £1,260,000
TCO 5 mlynedd:
  prynu    = 180,000 × 5 = £900,000
  adeiladu = 1,260,000 + 150,000 × 5 = £2,010,000

Term oedi: mae'r system yn osgoi £40,000/mis mewn asesiadau dyblyg;
mae adeiladu'n cyrraedd 10 mis yn hwyrach na phrynu.
CoD = 10 × 40,000 = £400,000

Cymhariaeth effeithiol: £900,000 (prynu) yn erbyn £2,010,000 + £400,000 = £2,410,000 (adeiladu)
```

Mae prynu'n ennill o oddeutu £1.5 miliwn dros bum mlynedd, a'r llinell sengl fwyaf ar ôl amcangyfrif yr adeiladu ei hun yw cost yr oedi na fyddai cymhariaeth capex bur byth wedi'i datgelu.

## Cysylltiad peirianneg feddalwedd

Y disgyblaethau sy'n trosglwyddo'n uniongyrchol o'r dadansoddiad hwn i ymarfer cyflenwi: **addasiad risg sy'n seiliedig ar ragdybiaeth** — mae'r codiad Mott MacDonald yn gyfatebiaeth feddalwedd i ogwydd optimistiaeth y Llyfr Gwyrdd wedi'i chymhwyso'n fecanyddol, felly dylai timau ddadlau dros eithriadau iddo yn hytrach na thybio mai eu hamcangyfrif nhw yw'r eithriad; **gonestrwydd cymharydd** — y dewis arall i adeiladu yw'r opsiwn prynu gorau sydd ar gael, nid "dim byd", sy'n cysylltu'n uniongyrchol â [chost cyfle mewn gwariant cyhoeddus](../opportunity-cost-in-public-spending/); a **chymhariaeth TCO onest** — dylid cymharu pob cynnig adeiladu yn erbyn [cyfanswm cost perchnogaeth](../total-cost-of-ownership-in-government-it/) llawn opsiwn prynu, nid ei bris rhestr. Lle mae adeiladu wir yn ennill, dylid prisio [cost oedi](../cost-of-delay-in-public-programmes/) yr amser adeiladu ychwanegol yn benodol yn yr achos busnes, nid ei adael fel tybiaeth heb ei nodi nad yw amser yn bwysig.

## Peryglon

- **Cymharu pris rhestr gwerthwr ag amcangyfrif adeiladu heb ei addasu ar gyfer risg**: mae hyn yn gwneud i adeiladu edrych yn well ddwywaith drosodd, unwaith ar gost ac unwaith ar amserlen.
- **Llafur mewnol wedi'i brisio'n sero**: trinnir amser peirianneg y gwasanaeth sifil fel "am ddim" am ei fod eisoes ar gyllideb pennau adrannol, sy'n cuddio ei wir gost gyfle yn erbyn gwaith arall y gallai'r tîm hwnnw fod yn ei wneud.
- **Clymu heb ei brisio i'r ddau gyfeiriad**: mae costau ymadael gwerthwr a chludadwyedd data'n real, ond felly hefyd ffactor bws adeiladu pwrpasol a'i ddibyniaeth ar gadw tîm mewnol bach, anodd ei ddisodli, dros ei oes.
- **Honni gwahaniaethu cenhadaeth ar gyfer pibellwaith**: honni "mae hyn yn greiddiol i ni" am feddalwedd ganol integreiddio neu storfa ddogfennau — profwch hynny yn erbyn a fyddai dinesydd neu weithiwr achos byth yn sylwi pa un sy'n rhedeg oddi tano.

## Ffynonellau

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
