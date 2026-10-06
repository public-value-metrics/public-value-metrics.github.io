# Hodnota otevřených dat

Hodnota otevřených dat je problém odhadu, čeho jsou vládní a veřejná data hodna, když nemají cenu: neprodávají se, takže neexistuje řádek příjmů, ale jejich zveřejnění (meteorologické záznamy, jízdní řády, poštovní hranice, rejstříky společností) prokazatelně generuje ekonomickou a sociální aktivitu dále v řetězci. Dobré ocenění je důležité, protože „zveřejnit zdarma“ i „nemá to žádnou hodnotu“ jsou nesprávná a softwarový inženýr rozhodující, zda otevřít API nebo datovou sadu, potřebuje lepší argument než jedno či druhé.

## Proč na tom záleží

Nejcitovanější shora dolů pojatý odhad pochází ze zprávy McKinsey Global Institute z roku 2013 „Open data: Unlocking innovation and performance with liquid information“, která určila potenciální roční hodnotu otevřených dat v sedmi oblastech — vzdělávání, doprava, spotřební zboží, elektřina, ropa a plyn, zdravotnictví a spotřebitelské finance — na **3 až 5 bilionů dolarů ročně** globálně, prostřednictvím mechanismů zahrnujících zvýšenou transparentnost, efektivnější párování nabídky s poptávkou a umožnění nových produktů a služeb postavených na datech. Toto číslo je scénářovým odhadem, nikoli naměřeným výsledkem, a je rutinně nesprávně citováno, jako by šlo o příjem, který by vláda mohla přímo získat, zatímco hodnota se většinou dostává třetím stranám — podnikům, výzkumníkům, občanům —, kteří data používají, což je právě smysl jejich otevření místo prodeje. Britský Open Data Institute, spoluzaložený sirem Timem Berners-Leem a sirem Nigelem Shadboltem v roce 2012, od té doby vybudoval korpus podrobnějších případových studií zdola nahoru — sektor po sektoru, datová sada po datové sadě —, které jsou pro skutečný byznys případ mnohem užitečnější než titulkové číslo McKinsey, protože ukazují mechanismus tvorby hodnoty, nejen její souhrnnou velikost.

## Matematika

Otevřená data nemají tržní cenu, takže ji nahrazují metody oceňování; opakují se tři přístupy a žádný sám o sobě nestačí:

```
1. Metoda ušetřených nákladů / náhradních nákladů:
   hodnota ≈ kolik by uživatelé zaplatili za vytvoření nebo licencování
   ekvivalentních dat sami — dolní mez, ignoruje hodnotu vytvořenou
   použitími, která původní výrobce nikdy nepředpokládal

2. Metoda tržního analogu / navazující aktivity:
   hodnota ≈ příjmy nebo úspory generované podniky/službami postavenými
   na datech (např. navigační aplikace postavené na otevřených mapových
   a dopravních datech) — zachycuje skutečnou ekonomickou aktivitu, ale je
   obtížné ji čistě přisoudit samotnému zveřejnění dat
   (viz additionality-and-deadweight)

3. Metoda podmíněná/deklarovaných preferencí:
   hodnota ≈ kolik uživatelé říkají, že by zaplatili, nebo čas, který jim
   podle jejich slov ušetří — viz stated-preference-valuation pro obecnou
   metodu a její zkreslení

Žádná z nich nevytváří číslo tak čisté jako tržní cena; věrohodné
byznys případy otevřených dat triangulují alespoň dva přístupy a jsou
výslovné o tom, který mechanismus odvádí práci.
```

## Praktický příklad

**Ilustrativní zveřejnění národních mapových/adresních dat** (metodika podle případových studií ve stylu ODI, čísla ilustrující měřítko, které takové studie typicky nacházejí):

```
Odhad ušetřených nákladů:
  Podniky, které by jinak komerčně licencovaly ekvivalentní data pro
  párování adres při odhadované průměrné ceně licence 4 000 £/rok,
  napříč odhadovaných 15 000 malých a středních podniků nyní používajících
  bezplatnou otevřenou datovou sadu
  = 15 000 × 4 000 £ = 60 000 000 £/rok jen ušetřených licenčních nákladů

Odhad navazující aktivity (spekulativnější, vyžaduje kontrafaktuál):
  Nové produkty směrování doručování a logistiky postavené na otevřených
  datech, které by neexistovaly nebo byly podstatně horší bez nich —
  vyžaduje srovnání s kontrafaktuálem, že data zůstanou uzavřená nebo
  komerčně licencovaná ([kontrafaktuální analýza](../kontrafaktuální-analýza/)),
  protože část této aktivity by se stala tak či tak na placených datech
  za vyšší cenu, což je mrtvá váha ve smyslu „hodnoty vytvořené otevřením“

Obhajitelný byznys případ uvádí číslo ušetřených nákladů jako pevnou
dolní mez a číslo navazující aktivity bere jako scénář horní meze,
nikoli fakt.
```

## Souvislost s softwarovým inženýrstvím

Pro inženýry je praktická otázka hodnoty otevřených dat obvykle užší než titulková národní čísla: zvyšuje otevření tohoto konkrétního API nebo datové sady (místo držení za dohodou s partnerem) opětovné použití natolik, aby ospravedlnilo průběžné náklady na dokumentování, verzování a podporu jako veřejného rozhraní? Tyto náklady na údržbu jsou skutečné a jsou protějškem ekonomiky „vybuduj jednou, použij mnohokrát“ [vlády jako platformy](../vláda-jako-platforma/) — obě témata jsou blízcí bratranci, jedno o sdíleném kódu a infrastruktuře, druhé o sdílených datech. Každé tvrzení o hodnotě otevřených dat by mělo být zkontrolováno vůči [dodatečnosti a mrtvé váze](../dodatečnost-a-mrtvá-váha/), než se dostane do byznys případu: aktivita, která by se stala tak či tak, na komerčně licencovaných datech, není hodnotou vytvořenou *otevřením*.

## Úskalí

- **Citování čísla McKinsey 3–5 bilionů $ jako specifického pro Spojené království nebo jako podílu této datové sady**: je to globální scénářový odhad pro sedm odvětví z roku 2013 — jeho použití jako přesného multiplikátoru pro jedinou národní datovou sadu zkresluje, čím číslo je.
- **Žádný kontrafaktuál**: připisování si zásluhy za veškerou navazující ekonomickou aktivitu postavenou na otevřených datech, aniž by se kladla otázka, kolik z ní by se stalo tak či tak na placených nebo licencovaných datech za vyšší cenu (viz [dodatečnost a mrtvá váha](../dodatečnost-a-mrtvá-váha/) a [kontrafaktuální analýza](../kontrafaktuální-analýza/)).
- **Záměna nákladů na výrobu s vytvořenou hodnotou**: datová sada, jejíž sběr byl drahý, není automaticky cenná k zveřejnění a levná není automaticky málo hodnotná — hodnota sleduje navazující použití, nikoli náklady na začátku.
- **Ignorování průběžných nákladů na údržbu „otevřenosti“**: zveřejnění jednorázového CSV exportu není stejný závazek jako provoz zdokumentovaného, verzovaného, podporovaného otevřeného API — podfinancování druhého po oznámení spuštění je běžný způsob selhání.

## Zdroje

- McKinsey Global Institute, „Open data: Unlocking innovation and performance with liquid information“ (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
