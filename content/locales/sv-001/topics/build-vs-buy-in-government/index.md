# Bygga eller köpa inom staten

Bygga-eller-köpa är en strukturerad, riskjusterad jämförelse av skräddarsydd utveckling mot kommersiellt eller standardanskaffat, jämförd på diskonterad [total ägandekostnad](../total-cost-of-ownership-in-government-it/), tid till värde, och risk. Staten är strukturellt en köpande sektor — Technology Code of Practice fastställer en presumtion mot standard- och molnlösningar — ändå faller tekniska team inom departement fortfarande tillbaka på att bygga, av samma skäl byggare överallt gör det.

## Varför det spelar roll

Government Digital Services Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) och den medföljande Service Manual-vägledningen om att besluta huruvida man ska bygga eller köpa driver departement att motivera skräddarsydd utveckling mot en presumtion att standardkapacitet bör köpas, inte byggas, och att endast genuint ny, uppdragsdifferentierande kapacitet motiverar skräddarsydd kod. HM Treasurys kompletterande vägledning om optimismbias till Green Book, hämtad från 2002 års Mott MacDonald-granskning av stora offentliga upphandlingar, ger IT-projekt det bredaste uppräkningsintervallet av alla bedömda kategorier — kapitalkostnadsuppskattningar rekommenderas att räknas upp med 10% i det lägre intervallet och upp till 200% i det högre innan de används i bedömning, vilket speglar hur illa mjukvarubyggen historiskt underskattats över offentlig upphandling. Bygga-eller-köpa-analys existerar just för att tvinga den riskjusteringen till bordet innan godkännande, snarare än att låta den yta sig som en begäran om överutgift under året.

## Beräkningen

```
Jämför över samma 3–5-årshorisont, diskonterad till Green
Books samhälleliga diskonteringsränta （se
social-discount-rate.md）:

NNV_alternativ = NV（nyttor, förskjutna av tid till värde） −
                NV（TCO）

Riskjusteringar （Green Books optimismbias-mönster）:
  byggkostnad × 1,1–3,0 （IT-projektuppräkningsintervall,
                        Mott MacDonald）
  byggtid till värde + 40–60% （distributionsfördröjningsprior）
  köp: lägg till en integrationsverklighetskontroll och
    kontraktsutträdeskostnader istället

Beslutsdrivare, i ordningen de vanligtvis avgör:
  1. differentiering — är denna kapacitet uppdraget, eller
     rörledningsarbete?
  2. tid till värde × kostnad för fördröjning （se
     cost-of-delay-in-public-programmes.md）
  3. riskjusterad total ägandekostnad
```

## Genomräknat exempel

En kommun behöver ett ärendehanteringssystem för äldreomsorg. Köp: SaaS till 180 000 £/år, live inom 4 månader. Bygg: uppskattat 900 000 £ plus 150 000 £/år underhåll, live inom 14 månader.

```
Riskjusterad byggkostnad = 900 000 × 1,4 = 1 260 000£
5-årig TCO:
  köp  = 180 000 × 5 = 900 000£
  bygg = 1 260 000 + 150 000 × 5 = 2 010 000£

Fördröjningsterm: systemet undviker 40 000£/månad i
dubblerade bedömningar; bygg anländer 10 månader senare
än köp.
CoD = 10 × 40 000 = 400 000£

Effektiv jämförelse: 900 000£ （köp） mot 2 010 000£ +
400 000£ = 2 410 000£ （bygg）
```

Köp vinner med ungefär 1,5 miljoner £ över fem år, och den största enskilda raden efter själva byggnationsuppskattningen är fördröjningskostnaden en ren kapexjämförelse aldrig skulle ha ytat.

## Koppling till mjukvaruutveckling

Disciplinerna som överförs direkt från denna analys till leveranspraxis: **priorbaserad riskjustering** — Mott MacDonald-uppräkningen är den mekaniskt tillämpade mjukvarumotsvarigheten till Green Books optimismbias, så team bör argumentera för undantag från den snarare än att anta att deras uppskattning är undantaget; **jämförelseobjektets ärlighet** — alternativet till att bygga är det bästa tillgängliga köpalternativet, inte "ingenting," vilket knyter direkt till [alternativkostnad i offentliga utgifter](../opportunity-cost-in-public-spending/); och **ärlig TCO-jämförelse** — varje byggförslag bör jämföras mot ett köpalternativs fullständiga [total ägandekostnad](../total-cost-of-ownership-in-government-it/), inte dess listpris. Där bygga genuint vinner bör [kostnaden för fördröjning](../cost-of-delay-in-public-programmes/) av den extra byggtiden prissättas explicit i affärsärendet, inte lämnas som ett outtalat antagande att tid inte spelar roll.

## Fallgropar

- **Att jämföra leverantörens listpris mot en icke-riskjusterad byggnadsuppskattning**: detta ger bygga dubbel fördel, en gång på kostnad och en gång på tidsplan.
- **Nollprissatt internt arbete**: statstjänstemannens tekniktid behandlas som "gratis" eftersom den redan är i departementets personalbudget, vilket döljer dess sanna alternativkostnad mot annat arbete det teamet kunde göra.
- **Oprissatt inlåsning i båda riktningarna**: leverantörsutträde och dataportabilitetskostnader är verkliga, men det är också en skräddarsydd byggnations bussfaktor och dess beroende av att behålla ett litet, svårersatt internt team över dess livslängd.
- **Uppdragsdifferentiering hävdad för rörledningsarbete**: "detta är kärnan för oss" hävdat om integrationsmellanvara eller ett dokumentlager — testa det mot huruvida en medborgare eller handläggare någonsin skulle märka vilket som körs under ytan.

## Källor

- Central Digital and Data Office, Technology Code of Practice.
  <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
