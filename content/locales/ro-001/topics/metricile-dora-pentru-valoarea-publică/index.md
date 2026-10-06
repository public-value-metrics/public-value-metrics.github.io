# Metricile DORA pentru valoarea publică

Metricile DORA (DevOps Research and Assessment) — frecvența implementărilor, timpul de livrare al modificărilor, rata de eșec a modificărilor și timpul de restabilire a serviciului, plus fiabilitatea ca a cincea — sunt cele mai validate repere de performanță a livrării din industria software. Traduse în termeni de responsabilitate din sectorul public, fiecare este un proxy direct pentru cât de repede și cât de sigur ajunge valoarea publică la un cetățean.

## De ce contează

Un deceniu de cercetare DORA, publicat anual ca *Accelerate State of DevOps Report* (metodologia lui Forsgren, Humble și Kim, acum condusă de Google Cloud), grupează echipele în performante de elită, ridicate, medii și scăzute. Echipele de elită implementează la cerere, durează sub o zi de la commit la producție, eșuează la circa 5% dintre modificări și își revin în sub o oră; cele cu performanță scăzută implementează lunar sau mai rar, durează luni, eșuează la circa 40% dintre modificări și își revin în săptămâni. În guvern acestea nu sunt metrici de vanitate de inginerie: Service Standard al Government Digital Service cere echipelor să „itereze și să se îmbunătățească frecvent” și să poată răspunde rapid nevoii utilizatorilor, iar departamentele care nu pot implementa sigur și des sunt structural incapabile să îndeplinească acel standard, indiferent ce spun cercetările lor despre utilizatori. Propria muncă a Cabinet Office privind eficiența digitală a constatat că împingerea unui cetățean dintr-o tranzacție digitală eșuată sau lentă către un canal telefonic sau pe hârtie este costisitoare — Digital Efficiency Report al GDS din 2012 a estimat că unele tranzacții digitale costă doar 20 de pence față de contacte telefonice sau față în față de până la 8,62 £ — deci un eșec de modificare într-un serviciu orientat spre public nu costă doar timp de inginerie, ci mută lire reale pe bugetul centrului de contact (vezi [economiile din mutarea canalelor](../economii-din-mutarea-canalelor/)).

## Matematica

```
Frecvența implementărilor = implementări în producție / timp
Timp de livrare al modificărilor = t(implementare) − t(commit), mediană
Rata de eșec a modificărilor = modificări eșuate / total modificări × 100
Timp de restabilire (MTTR) = t(restabilit) − t(eșec), mediană
Fiabilitate = atingerea SLO (disponibilitate, latență, corectitudine)
```

Traduceri în valoare publică:

```
Timp de livrare → săptămâni în conductă × CoD, vezi cost-of-delay-in-public-programmes
Rata de eșec    → rata incidentelor vizibile cetățenilor: CFR × cost per apel redirecționat
                  către centrul de contact (sau per tranzacție legală eșuată)
Timp de restabilire → prejudiciul unei întreruperi de serviciu: MTTR × (cereri/depuneri
                  blocate pe oră) × cost din aval sau pierdere de bunăstare per unitate
Fiabilitate     → reducere de beneficiu: un serviciu cu disponibilitate de 99% livrează
                  ≈ 0,99 din beneficiul său modelat — analogul livrării
                  deficitului de adoptare sau de conformitate
```

## Exemplu lucrat

Echipa unui portal de cereri de beneficii al unei autorități locale, înainte și după o investiție în ingineria livrării:

```
                    Înainte     După
Implementări        lunar       săptămânal
Timp de livrare     8 săptămâni 5 zile
CFR                 30%         10%
MTTR                3 zile      4 ore
```

Echipa livrează circa 25 de îmbunătățiri/an, valoare medie 8.000 £/săptămână ([costul întârzierii](../costul-întârzierii-în-programele-publice/)). Reducerea timpului de livrare cu aproximativ 7,3 săptămâni aduce înainte fluxul de beneficii al fiecărei îmbunătățiri: 25 × 7,3 × 8.000 ≈ **1.460.000 £/an** de valoare livrată mai devreme. La rata de eșec: 25 × (0,30 − 0,10) = 5 modificări eșuate mai puțin/an; fiecare modificare eșuată pe un portal public redirecționează de obicei circa 2.000 de cetățeni către canalul telefonic la 8,62 £ față de 20 p, un cost net de aproximativ 8,42 £ × 2.000 ≈ 16.840 £ per incident, deci evitarea a 5 incidente economisește ≈ **84.200 £/an**. Investiția în ingineria livrării este evaluată în aceeași monedă ca orice alt caz de valoare publică.

## Exemplu lucrat continuat: fiabilitate

Dacă portalul rulează la 97% disponibilitate în loc de țintă de 99,5%, iar fiecare punct procentual de întrerupere este modelat ca 2% din cereri pierdute prin abandon, serviciul livrează aproximativ 0,975 din beneficiul său modelat de 2 mil. £/an — o reducere de beneficiu de 50.000 £/an pe care un tablou de bord pur de uptime nu o scoate niciodată la iveală.

## Legătura cu ingineria software

Metricile DORA sunt metricile operaționale ale unui serviciu public în haine diferite: timpul de livrare se mapează pe [standardele de servicii și metricile de tranzacții](../standarde-de-servicii-și-metrici-de-tranzacții/); rata de eșec a modificărilor pe ratele de refacere și plângeri; MTTR pe cât timp este un serviciu legal indisponibil solicitanților. Tehnicile de îmbunătățire se transferă în ambele direcții deoarece ambele sunt sisteme de cozi sub constrângeri de responsabilitate — vezi [metricile de flux în livrarea guvernamentală](../metrici-de-flux-în-livrarea-guvernamentală/) pentru matematica cozilor de bază. Notați și constatarea DORA din 2025 că adoptarea IA se corelează cu un debit mai mare, dar o stabilitate *mai slabă* — o intervenție cu atât eficacitate, cât și efecte secundare, exact analiza beneficiului net pe care o parcurge subiectul [productivității IA](../productivitatea-ia-în-sectorul-public/) din acest grup.

## Capcane

- **Manipularea metricilor**: umflarea numărului de implementări cu lansări fără efect sau excluderea corecțiilor urgente din numărătoarea eșecurilor de modificare. Definiți evenimentele la fel de precis cum un standard legal de serviciu definește o „tranzacție reușită”.
- **Clasamente între departamente**: clusterele DORA compară practicile de livrare, nu servicii cu profiluri de risc diferite; un sistem de plată a impozitelor evaluat „ridicat” poate fi postura corectă acolo unde „de elită” ar fi imprudent date fiind cerințele de asigurare.
- **Optimizarea unei singure metrici**: viteza fără rata de eșec a modificărilor este compromisul clasic debit-instabilitate — raportați toate patru împreună, nu ca un singur scor.

## Surse

- Cercetarea DORA și *Accelerate State of DevOps Report* anual. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, raportul 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
