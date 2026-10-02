# Subsidie-uitkomstenrapportage (IRIS+)

Subsidie-uitkomstenrapportage is de praktijk van subsidieontvangers die gestandaardiseerde, vergelijkbare uitkomstmaatstaven terugrapporteren aan financiers — in tegenstelling tot elke financier die zijn eigen op maat gemaakte rapportagesjabloon uitvindt. IRIS+, onderhouden door het Global Impact Investing Network (GIIN), is de meest breed aangenomen zodanige standaard: een catalogus van vooraf gedefinieerde sociale, milieutechnische, en financiële prestatiematen die impactinvesteerders en, steeds meer, subsidieverlenende stichtingen vereisen of aanbevelen dat subsidieontvangers gebruiken.

## Waarom het ertoe doet

Voor gestandaardiseerde rapportage vroeg elke stichting subsidieontvangers om een andere set indicatoren in een ander formaat, en een middelgroot goed doel met tien financiers kon tien parallelle rapportageprocessen draaien voor overlappend werk — een goed gedocumenteerde aandrijver van de rapportagelast die subsidie-uitkomstenstandaardisatie bestaat om te verminderen. IRIS+ pakt dit aan door financiers en subsidieontvangers een gedeelde woordenschat te geven: Core Metrics Sets gegroepeerd per thema (bijv. betaalbare huisvesting, toegang tot schone energie, financiële inclusie), elke maatstaf precies genoeg gedefinieerd zodat "gecreëerde banen" of "bediende huishoudens" hetzelfde betekent wie het ook rapporteert, en uitgelijnd met de duurzame-ontwikkelingsdoelen van de VN zodat een financier subsidieontvanger-niveau-gegevens kan opschalen naar een portfolio-niveau-SDG-verhaal. GIIN rapporteert dat IRIS-maatstaven worden gebruikt door ruwweg de helft van impactinvesteerders en de grote meerderheid van fondsmanagers, banken, en ontwikkelingsfinancieringsinstellingen actief in het veld.

De standaardisatie doet er het meest toe waar het interageert met [uitkomsten versus output](../outcomes-vs-outputs/): IRIS+ duwt rapportage naar gedefinieerde uitkomst- en impactmaatstaven in plaats van wat het bestaande casemanagementsysteem van een subsidieontvanger toevallig logt, wat precies de kloof is die [kosten per uitkomst](../cost-per-outcome/) versus [kosten per begunstigde](../cost-per-beneficiary/) beschrijft.

## De berekening

Subsidie-uitkomstenrapportage is een raamwerk en proces, geen formule:

```
1. Financier selecteert een Core Metrics Set relevant voor het
   thema van de subsidie (bijv. IRIS+ "Financial Inclusion" of
   "Sustainable Agriculture")
2. Elke maatstaf heeft een vaste definitie, eenheid, en
   berekeningsmethode gepubliceerd door GIIN — niet per
   financier uitgevonden
3. Subsidieontvanger rapporteert tegen dezelfde
   maatstafdefinities over al zijn financiers heen met behulp
   van die standaard, wat duplicaat-rapportage-inspanning
   afsnijdt
4. Financier aggregeert subsidieontvanger-niveau-maatstaven tot
   portfolio-niveau-rapportage, vergelijkbaar jaar op jaar en
   over subsidieontvangers heen met behulp van dezelfde maatstaf
```

De efficiëntiewinst is combinatorisch: het standaardiseren van N financiers × M subsidieontvangers op één gedeelde woordenschat verandert N×M op-maat-gemaakte rapportagerelaties in ruwweg N+M koppelingen tegen één standaard.

## Uitgewerkt voorbeeld

**Een subsidieontvanger met drie financiers, voor standaardisatie**: rapporteert "bediende mensen" aan Financier 1 met behulp van een hoofdtellingdefinitie, "bereikte begunstigden" aan Financier 2 met behulp van een huishoudendefinitie, en "getroffen individuen" aan Financier 3 met behulp van een dienstepisodedefinitie (zodat één persoon die tweemaal bezoekt, tweemaal telt). Drie rapporten, drie cijfers, geen vergelijkbaar, en geen vergelijkbaar met de cijfers van een andere subsidieontvanger zelfs binnen het portfolio van dezelfde financier.

**Dezelfde subsidieontvanger onder IRIS+**: rapporteert tegen een gedefinieerde IRIS+-bereikte-individuen-maatstaf naast een gedefinieerde uitkomstmaatstaf uit de relevante Core Metrics Set, met behulp van de gepubliceerde berekeningsmethodologie van GIIN voor beide. Alle drie financiers ontvangen nu hetzelfde cijfer, op dezelfde manier berekend, en kunnen de kosten per IRIS+-gedefinieerde-eenheid van deze subsidieontvanger vergelijken met andere subsidieontvangers in hun portfolio met behulp van de identieke maatstaf — het equivalent, op rapportage-infrastructuurschaal, van het hebben van een gedeelde [databank voor eenheidskosten](../unit-cost-databases/).

## Verband met softwareontwikkeling

Subsidiebeheerplatforms zouden IRIS+-maatstafidentificaties moeten behandelen als een vreemde sleutel, geen vrije tekst: het opslaan van de gepubliceerde maatstafcode naast een gerapporteerde waarde van een subsidieontvanger (in plaats van een lokaal uitgevonden veld genaamd "begunstigden") is wat cross-financier- en cross-portfolio-aggregatie later mogelijk maakt zonder een gegevensopschoningsproject. Waar een platform financiers moet ondersteunen die IRIS+ niet hebben aangenomen, is het pragmatische ontwerp een lokale maatstaf te koppelen aan de dichtstbijzijnde IRIS+-definitie in plaats van elke financier onmiddellijk naar de standaard te dwingen — vergelijkbaarheid verbetert incrementeel naarmate meer van de grafiek koppelt aan gedeelde identificaties. Zie het zusteronderwerp [kosten per uitkomst](../cost-per-outcome/) voor waarvoor de gerapporteerde cijfers moeten worden gebruikt om te berekenen zodra ze zijn verzameld.

## Valkuilen

- **IRIS+-adoptie behandelen als automatische vergelijkbaarheid.** Twee subsidieontvangers kunnen beide rapporteren tegen dezelfde IRIS+-maatstaf en toch niet vergelijkbaar zijn als hun onderliggende gegevenskwaliteit of contrafeitelijke aannames verschillen; de standaard fixeert definities, geen meetrigueur.
- **Door financiers uitgevonden "IRIS-uitgelijnde" maatstaven.** Een maatstaf die slechts geïnspireerd is door IRIS+-taal maar niet de daadwerkelijk gepubliceerde definitie, herintroduceert de fragmentatie die de standaard bestaat om op te lossen.
- **Rapportagemoeheid door oversalectie.** Een subsidieontvanger vereisen te rapporteren tegen een hele Core Metrics Set wanneer slechts twee of drie maatstaven besluitrelevant zijn, herschept het lastprobleem in een gestandaardiseerde verpakking.
- **Helemaal geen uitkomstmaatstaf.** IRIS+ omvat vele pure outputmaatstaven (bijv. tellingen van bediende mensen); alleen die selecteren, en geen van de uitkomstniveau-maatstaven, produceert [kosten-per-begunstigde](../cost-per-beneficiary/)-gevormde rapportage onder een uitkomstenrapportage-label.

## Bronnen

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
