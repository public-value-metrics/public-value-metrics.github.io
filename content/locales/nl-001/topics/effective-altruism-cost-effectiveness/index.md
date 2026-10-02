# Kosteneffectiviteit effectief altruïsme

De kosteneffectiviteitsredenering van effectief altruïsme (EA) rangschikt charitatieve interventies naar de hoeveelheid goed — meestal uitgedrukt als geredde levens, of gezondheidswinst, per bestede dollar — en stuurt geld naar welke interventie dan ook die aan de marge het meeste goed koopt. GiveWell is de meest invloedrijke beoefenaar van het veld: het publiceert expliciete, bijgewerkte kosten-per-gered-leven- en kosten-per-uitkomst-schattingen voor een korte lijst "topgoede doelen", en beveelt donors aan te geven aan welk goed doel dan ook momenteel ruimte voor meer financiering heeft tegen het beste tarief.

## Waarom het ertoe doet

GiveWell stelt kosteneffectiviteit als het leidende criterium in zijn gepubliceerde methodologie: het zoekt naar bewijsondersteunde interventies, schat hun kosteneffectiviteit in een gemeenschappelijke eenheid, en rangschikt over volledig ongerelateerde oorzaken — klamboes tegen malaria, vitamine-A-supplementatie, cash-transfers, vaccinstimuleringsbetalingen — op die enkele as. Dit is een directe import van QALY/DALY-achtige redenering uit gezondheidseconomie in filantropie: net zoals een gezondheidssysteem vraagt "hoeveel QALY's per pond aan de marge," vraagt GiveWell "hoeveel levens, of levensjaren, per dollar aan de marge," en behandelt oorzaken als vervangbaar zodra ze zijn omgezet in die gemeenschappelijke eenheid. Zie [kosteneffectiviteitsanalyse in de overheid](../cost-effectiveness-analysis-in-government/) voor de publieke-sectorneef van dit redeneerraamwerk.

Het meest geciteerde GiveWell-cijfer betreft de Against Malaria Foundation (AMF), die met insecticide behandelde klamboes distribueert. In het gepubliceerde uitgewerkte voorbeeld van GiveWell (ontleend aan financieringsgegevens van 2020) financierde ruwweg $4.500 genoeg netten om één dood af te wenden, na rekening te houden met imperfect nettengebruik, basislijnmortaliteit zonder netten, en aanpassing voor funging — de mogelijkheid dat AMF een deel van die financiering toch van andere donors zou hebben ontvangen. GiveWell is expliciet dat dit cijfer verschuift in de tijd en over geografieën als malariaprevalentie, netkosten, en financieringskloven veranderen, en dat de kosten om een leven te redden algemeen worden verwacht te stijgen in de tijd naarmate de goedkoopste kansen eerst worden benut; het is een uitgewerkte illustratie van de methode, geen vaste prijs.

## De berekening

```
Kosteneffectiviteit = Kosten van interventie / Eenheden goed
                      geproduceerd (bijv. $ per gered leven, $
                      per vermeden DALY, $ per QALY)

Keten van GiveWell voor een klamboeprogramma, illustratief:
  $ per aangekochte en geleverde net
    ÷ aandeel netten daadwerkelijk gebruikt
    ÷ beschermde mensen per net
    × basislijn jaarlijkse mortaliteit zonder netten
    × vermindering in mortaliteit toeschrijfbaar aan
      nettengebruik (uit RCT-bewijs)
    × jaren bescherming per net
    ÷ aanpassing voor funging (geld dat financiering van
      andere donors verplaatst)
  = $ per gered leven (netto van contrafeitelijke
    financieringseffecten)
```

Deze keten is belangrijk omdat elke stap een plaats is waar kosteneffectiviteitsschattingen gewoonlijk fout gaan — zie de valkuilen hieronder — en omdat het expliciet maakt dat "kosten per gered leven" nooit een ruwe geobserveerde prijs is; het is een gemodelleerde schatting opgebouwd uit verschillende afzonderlijk onzekere invoeren.

## Uitgewerkt voorbeeld

Twee hypothetische interventies, beide bewijsondersteund, die concurreren voor dezelfde marginale £100.000:

- **Klamboes (AMF-stijl)**: ruwweg $4.500 per gered leven op het gepubliceerde uitgewerkte voorbeeld van GiveWell ontleend aan gegevens van 2020, d.w.z. zeer ruwweg 20 geredde levens per £100.000 afhankelijk van de gebruikte wisselkoers en jaar.
- **Ontwormingsprogramma**: helemaal geen plausibel mortaliteitsvoordeel, maar sterk bewijs van langetermijninkomenswinsten uit ontworming bij kinderen; GiveWell waardeert het in termen van inkomenswinst, niet geredde levens, wat het moeilijk maakt direct te vergelijken met klamboes zonder een gedeelde eenheid. GiveWell gebruikt een expliciet "morele gewichten"-raamwerk om beide om te zetten in één interne eenheid voor rangschikking.

De discipline van de EA-methode is deze vergelijking openlijk afdwingen in plaats van beide te financieren omdat beide "goed klinken." Zie [sociaal rendement op investering](../social-return-on-investment/) voor de equivalente afdwingfunctie gebruikt door Britse sociale ondernemingen en lokale opdrachtgevers, die dezelfde vraag stelt — wat is het beste rendement per pond — in een gemonetariseerde-waarde-idioom in plaats van een levens/DALY's-idioom.

## Verband met softwareontwikkeling

Ingenieurs die donorplatforms, subsidiematchingtools, of impactdashboards bouwen voor EA-uitgelijnde financiers (Open Philanthropy, GiveWell zelf, effectieve-gevenplatforms zoals Giving What We Can) moeten kosteneffectiviteitsschattingen weergeven als bereiken met vermelde aannames, geen enkele cijfers — het onderliggende model heeft verschillende multiplicatieve onzekere invoeren, en het samenpersen daarvan tot één cijfer op een dashboard geeft een verkeerde weergave van het vertrouwen dat GiveWell zelf vermeldt. Versioneer elke schatting op publicatiedatum; GiveWell herziet zijn cijfers, soms substantieel, zodra nieuw RCT-bewijs of financieringskloofgegevens binnenkomen, en een platform dat een oud cijfer cachet wordt stilzwijgend verkeerd.

## Valkuilen

- **Een kosteneffectiviteitsschatting behandelen als een vaste prijs.** Het is een modeluitvoer met verschillende onzekere multiplicatieve invoeren (gebruikspercentages, basislijnmortaliteit, funging-aanpassing); vermeld de datum en versie.
- **Funging/verdringing negeren.** Een organisatie financieren die het geld toch van een andere donor zou hebben ontvangen, koopt minder contrafeitelijk goed dan de koptekst suggereert — zie [additionaliteit en deadweight](../additionality-and-deadweight/) en [verdringing en toeschrijving](../displacement-and-attribution/).
- **Vergelijken tussen incompatibele eenheden zonder omrekening.** "Geredde levens" en "gewonnen inkomen" zijn niet direct vergelijkbaar zonder een expliciet morele-gewichten-raamwerk; ze naast elkaar presenteren alsof ze het waren is een categoriefout.
- **Oorzaaksgebiedstunnelvisie.** Alleen rangschikken binnen een oorzaaksgebied (bijv. alleen mondiale-gezondheidsgoede-doelen) en de winnaar "het meest kosteneffectieve goede doel" noemen, overdrijft de bewering; de cross-oorzaak-rangschikking van GiveWell is bewust nauw (mondiale gezondheid en welzijn), niet universeel.

## Bronnen

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
