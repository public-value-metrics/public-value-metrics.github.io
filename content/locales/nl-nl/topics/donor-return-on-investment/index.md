# Donorrendement op investering

Donorrendement op investering is wat het pond van een specifieke donor daadwerkelijk koopt in uitkomsten — niet de bedrijfsratio's van het goede doel, en niet het eigen rendement van het goede doel op zijn totale budget. Het herkadert ROI vanuit het perspectief van de organisatie (hoe efficiënt draaien we) naar het perspectief van de donor (wat verandert mijn marginale bijdrage), en de twee cijfers worden routinematig, en verkeerd, behandeld als hetzelfde ding.

## Waarom het ertoe doet

De eigen "ROI" van een goed doel, in de mate dat de uitdrukking überhaupt wordt gebruikt, beschrijft meestal iets zoals [kosten per begunstigde](../cost-per-beneficiary/) of [overheadratio goed doel](../charity-overhead-ratio/) — organisatorische efficiëntiematen. De ROI van een donor is een volledig andere vraag: gegeven dat dit goede doel al ander inkomen heeft, wat voegt *dit* geld van de donor toe aan de marge? Als een goed doel hetzelfde programma zou leveren met of zonder een bepaalde gift van £10.000 — omdat het ruime reserves heeft, of omdat een andere financier de kloof zou hebben gevuld — is de donor-ROI van die gift bijna nul, hoe goed de algemene overheadratio of kosten-per-uitkomst van het goede doel er ook uitziet.

Dit is dezelfde additionaliteitsvraag die ten grondslag ligt aan [value for money](../value-for-money/)-beoordeling in Britse publieke uitgaven en [additionaliteit en deadweight](../additionality-and-deadweight/) in programma-evaluatie: gecreëerde waarde is alleen toe te schrijven aan een financier in de mate dat het toch niet zou zijn gebeurd. Grote donor-geadviseerde platforms en effectieve-gevenorganisaties (Giving What We Can, GiveWell) bouwen hun aanbevelingen expliciet rond dit onderscheid, vragend niet "is dit een goed goed doel" maar "heeft dit goede doel ongevulde ruimte voor meer financiering zodanig dat mijn gift additioneel is."

## De berekening

```
Donor-ROI ≠ Operationele efficiëntie van het goede doel

Donor-ROI  ≈  (Behaalde uitkomst met de gift) − (Uitkomst die
              zou zijn opgetreden zonder, d.w.z. de
              contrafeitelijke situatie)
             ─────────────────────────────────────────────
                          Omvang van de gift

Belangrijke invoeren:
  - Ruimte voor meer financiering (is het goede doel
    financieringsbeperkt aan de marge?)
  - Funging (zou een andere donor de kloof hebben gevuld?)
  - Marginale kosteneffectiviteit op het specifieke
    financieringsniveau (kosten stijgen vaak zodra een
    interventie opschaalt voorbij zijn gemakkelijkst-te-
    bereiken populatie)
```

Zie [kosteneffectiviteit effectief altruïsme](../effective-altruism-cost-effectiveness/) voor hoe GiveWell de vraag "ruimte voor meer financiering" operationaliseert, en [contrafeitelijke analyse](../counterfactual-analysis/) voor de algemene methode.

## Uitgewerkt voorbeeld

Een donor kiest tussen twee giften van £5.000:

- **Goed doel C**: heeft een volledig gefinancierd kernprogramma met £2 miljoen aan reserves en een wachtlijst van financiers; de marginale £5.000 wordt waarschijnlijk toegevoegd aan reserves of een activiteit met lagere prioriteit. Geschatte donor-additionele uitkomst: minimaal — het geld verandert duidelijk niet wat gebeurt.
- **Goed doel D**: een klein, bewijsondersteund programma dat publiekelijk heeft verklaard dat het volgend kwartaal 200 mensen zal moeten afwijzen zonder een extra £50.000, en heeft £42.000 daarvan opgehaald. De marginale £5.000 zal zeer waarschijnlijk echte extra levering financieren — zeg, 20 extra bediende mensen, tegen de eigen vermelde kosten per begunstigde van het goede doel van £250.

Dezelfde giftomvang, dezelfde donor, radicaal verschillende donor-ROI — niet omdat Goed doel C een slechtere organisatie is (het kan een beter algeheel kosten-per-uitkomst-cijfer hebben) maar omdat zijn marginale financieringskloof al gesloten is.

## Verband met softwareontwikkeling

Donorplatforms en geeaanbevelingstools tonen te vaak alleen organisatieniveau-efficiëntiematen (overheadratio, kosten per begunstigde) omdat dat is wat goede doelen publiceren in jaarverslagen en wat het gemakkelijkst is te trekken in een vergelijkingstabel. Donor-ROI correct weergeven vereist een ander, moeilijker te bronnen gegevenspunt: de vermelde huidige financieringskloof van een goed doel of "ruimte voor meer financiering", die doorheen het jaar verandert en zelden gestructureerde gegevens is. Platforms die echte donor-ROI-redenering willen ondersteunen, hebben ofwel een directe feed van financieringskloofbekendmakingen nodig (zoals GiveWell handmatig onderhoudt voor zijn aanbevolen goede doelen) ofwel een expliciete disclaimer dat een vergelijkingstabel organisatorische efficiëntie toont, geen donoradditionaliteit. Zie [overheadratio goed doel](../charity-overhead-ratio/) voor de maatstaf waarmee donor-ROI het vaakst, en verkeerd, wordt samengevoegd.

## Valkuilen

- **Efficiëntie van het goede doel samenvoegen met donoradditionaliteit.** Een goed geleid, laag-overhead goed doel kan nog steeds een bijna-nul marginale donor-ROI hebben als het niet financieringsbeperkt is.
- **Funging negeren.** Als een grote institutionele financier de kloof toch zou hebben gedekt, verdringt de gift van een individuele donor het geld van die financier in plaats van nieuwe levering toe te voegen.
- **Lineaire kosteneffectiviteit op schaal aannemen.** De goedkoopst-te-bereiken begunstigden worden vaak eerst bediend; marginale kosten per uitkomst stijgen vaak zodra een programma uitbreidt, dus de ROI op het volgende pond is niet hetzelfde als de ROI op het gemiddelde pond al besteed.
- **Geen vermelde financieringskloof.** Een goed doel of platform dat niet kan zeggen wat de volgende £X zou financieren, kan geen echte donor-ROI-bewering ondersteunen, alleen een gemiddelde-kosten-bewering.

## Bronnen

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
