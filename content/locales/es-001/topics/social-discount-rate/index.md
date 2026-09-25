# Tasa de descuento social

La tasa de descuento social convierte los costes y beneficios futuros en valores actuales para que los
programas con retornos repartidos a lo largo de décadas puedan compararse sobre una base común. El
Green Book de HM Treasury exige un calendario decreciente anclado en el 3,5% para los primeros 30
años, basado en la fórmula de Ramsey: una cifra específica y citable que se ha convertido en un
argumento político y ético vivo cada vez que se aplica a compromisos de largo horizonte como la
política climática o la infraestructura.

## Por qué es importante

Una libra de beneficio recibida dentro de 30 años no vale lo mismo que una libra de beneficio recibida
hoy, por razones que son en parte sobre preferencia temporal pura (las personas y las sociedades
prefieren las cosas buenas antes) y en parte sobre crecimiento (se espera que una sociedad futura sea
más rica, así que una libra le importa menos en el margen). El Anexo 6 del Green Book deriva la tasa de
descuento estándar del Reino Unido de la fórmula de Ramsey, combinando una tasa de preferencia temporal
pura con la tasa de crecimiento esperada del consumo y la elasticidad de la utilidad marginal del
consumo, produciendo la tasa publicada del 3,5% anual para los años 0-30, decreciente en un calendario
publicado para los años 31 en adelante (hasta el 1% para los años 301 en adelante). Este calendario
existe precisamente porque un 3,5% constante compuesto durante un siglo haría que prácticamente
cualquier beneficio de largo horizonte —una defensa contra inundaciones que salva vidas dentro de 80
años, una reducción de carbono que evita daños dentro de 100 años— pareciera insignificante en términos
de valor actual, algo que el Tesoro juzgó una conclusión ética implausible para decisiones de
infraestructura y ambientales genuinamente de larga vida.

La tasa de descuento es controvertida precisamente porque la elección no es un parámetro técnico
neutral: codifica un juicio sobre cuánto debería sacrificar hoy una sociedad por personas que aún no
han nacido. El Stern Review sobre la economía del cambio climático (2006) usó una tasa de descuento
cercana a cero (una preferencia temporal pura cercana al 0,1%), argumentando que descontar el bienestar
de las generaciones futuras a algo parecido a las tasas de mercado es éticamente indefendible cuando el
daño (el cambio climático catastrófico) es irreversible. Los críticos —notablemente William Nordhaus—
argumentaron que la tasa casi cero de Stern exageraba el argumento a favor del gasto climático
inmediato al hacer que casi cualquier coste presente pareciera justificado frente a un beneficio futuro
apenas descontado. El desacuerdo no era sobre las matemáticas; era sobre qué marco ético debería fijar
la tasa, y sigue siendo la ilustración estándar de por qué la tasa de descuento es una elección de
política, no solo un insumo actuarial.

## Las matemáticas

La fórmula de Ramsey que subyace a la tasa del Green Book:

```
r = ρ + η·g

donde:
  r = tasa de descuento social
  ρ = tasa de preferencia temporal pura (impaciencia + riesgo de
      catástrofe)
  η = elasticidad de la utilidad marginal del consumo
  g = tasa de crecimiento anual esperada del consumo per cápita
```

El calendario decreciente del Green Book (Anexo 6, ilustrativo; consulte la edición actual para la
tabla exacta publicada):

```
Años 0-30:    3,5%
Años 31-75:   3,0%
Años 76-125:  2,5%
Años 126-200: 2,0%
Años 201-300: 1,5%
Años 301+:    1,0%
```

Valor actual de una suma futura:

```
VA = VF / (1 + r)^t
```

## Ejemplo práctico

**Proyecto de defensa contra inundaciones**: un proyecto entrega 10 millones de libras de daños por
inundación evitados en el año 40.

Usando una tasa plana del 3,5%: VA = 10.000.000 / (1,035)^40 ≈ 2,52 millones de libras: el beneficio
parece pequeño.

Usando el calendario decreciente del Green Book (3,5% para los años 0-30, 3,0% después), el cálculo se
compone al 3,5% durante los primeros 30 años y al 3,0% para los años 31-40:

```
VA = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ 2,65 millones £
```

El calendario decreciente eleva modestamente el valor actual de los beneficios de largo horizonte en
relación con una tasa alta plana: el propósito explícito del calendario, ya que un 3,5% plano durante
un siglo descontaría un beneficio de 100 millones de libras en el año 100 a menos de 3,3 millones de
libras.

**Infraestructura digital**: se espera que una migración a la nube del gobierno que cuesta 4 millones
de libras ahora evite 500 000 £/año en costes de mantenimiento heredado durante 15 años. Al 3,5%, el
valor actual de esa anualidad es aproximadamente 500 000 £ × 11,52 (el factor de anualidad a 15 años al
3,5%) ≈ 5,76 millones de libras: superando cómodamente el coste de 4 millones de libras, un caso de
valor actual neto positivo que se vería marcadamente más débil con una tasa más alta elegida
ingenuamente (al 7%, el mismo factor de anualidad cae a aproximadamente 9,11, dando 4,56 millones de
libras, aún positivo pero con un margen mucho más estrecho).

## Conexión con la ingeniería de software

La mayoría de los análisis de viabilidad de software se ejecutan a lo largo de 3-5 años, bien dentro de
la banda plana del 3,5%, así que el calendario decreciente rara vez entra en juego directamente, pero
la disciplina subyacente importa para cualquier inversión tecnológica gubernamental con una vida de
activo larga (una plataforma nacional, un programa de infraestructura de datos, un contrato de varias
décadas):

- Use la tasa publicada del Green Book en lugar de una "tasa mínima" interna tomada prestada de las
  finanzas privadas; los auditores y revisores del Tesoro esperarán el calendario estándar.
- Para beneficios que se realizan muchos años después (los ahorros de mantenimiento a largo plazo de
  una plataforma, el valor compuesto de un ecosistema de datos abiertos; véase [el valor de los datos
  abiertos](../open-data-value/)), la elección de descuento puede convertir un análisis de viabilidad
  de positivo a negativo; haga explícitos la tasa y el horizonte como supuestos, no como valores
  predeterminados enterrados.
- Esto alimenta directamente [la valoración del Green Book](../green-book-appraisal/), el modelo de
  cinco casos que exige formalmente un flujo de caja descontado, y [la valoración del
  bienestar](../wellbeing-valuation/), donde surge la misma cuestión de descuento para los beneficios
  de bienestar no monetarios.
- Véase también [la equidad intergeneracional y el descuento por sostenibilidad](../intergenerational-equity-and-sustainability-discounting/)
  para el debate Stern frente a Nordhaus aplicado específicamente a la inversión en tecnología
  ambiental y climática.

## Errores habituales

- **Usar una tasa plana para horizontes muy largos.** El calendario decreciente del Green Book existe
  específicamente porque una tasa constante subestima los beneficios genuinamente de larga vida;
  compruebe qué banda se aplica en lugar de recurrir por defecto al 3,5% en todo el periodo.
- **Tratar la tasa de descuento como éticamente neutral.** El debate Stern-Nordhaus muestra que la tasa
  codifica un juicio de valor sobre las generaciones futuras; cambiarla cambia qué programas parecen
  justificados, así que debería declararse y defenderse, no ocultarse en un valor predeterminado de
  hoja de cálculo.
- **Confundir la tasa de descuento social con un coste de capital privado.** Los costes de
  endeudamiento del gobierno y las tasas mínimas del sector privado son conceptos distintos de la tasa
  social derivada de Ramsey, y sustituir una por otra en una valoración pública típicamente distorsiona
  el resultado en la dirección de favorecer los retornos a corto plazo.
- **Descontar flujos de caja reales y nominales de forma inconsistente.** La tasa del Green Book es una
  tasa real (ajustada por inflación); descontar flujos de caja nominales con ella subestima
  materialmente los valores actuales.

## Fuentes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
