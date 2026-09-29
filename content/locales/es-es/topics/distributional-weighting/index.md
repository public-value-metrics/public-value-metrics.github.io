# Ponderación distributiva

La ponderación distributiva ajusta el valor monetario de un coste o beneficio según quién lo recibe,
sobre el principio de que una libra adicional vale más para un hogar pobre que para uno rico. El Green
Book de HM Treasury proporciona un método explícito para aplicar esta ponderación, construido sobre la
utilidad marginal decreciente de la renta, de modo que las valoraciones no traten silenciosamente una
libra ganada por el decil más rico como equivalente en valor a una libra ganada por el más pobre.

## Por qué es importante

El análisis estándar de coste-beneficio suma libras sin preguntar de quién son esas libras, lo que
asume implícitamente que una libra vale lo mismo para todo el mundo, un supuesto que los economistas
saben desde hace tiempo que es falso. Un hogar que gana 15 000 £/año experimenta una ganancia de
1000 £ de forma muy distinta a un hogar que gana 150 000 £/año, porque la utilidad marginal de la
renta cae a medida que la renta aumenta. Sin ponderar, la valoración estándar favorece sistemáticamente
a las intervenciones que benefician a grupos más ricos y ya acomodados, porque su mayor poder
adquisitivo infla la valoración monetaria de los beneficios que reciben (una mejora de un parque cerca
de viviendas caras "muestra" un beneficio de valor inmobiliario mayor que la misma mejora cerca de
viviendas baratas, puramente porque los precios son más altos, no porque la ganancia de bienestar sea
mayor).

La guía complementaria del Green Book sobre análisis distributivo, reforzada tras la revisión de 2020
del Tesoro, que respondió a las críticas de que la metodología de valoración favorecía
sistemáticamente a Londres y el sureste, establece un enfoque de ponderación formal basado en una
elasticidad asumida de la utilidad marginal de la renta de aproximadamente 1,3, lo que significa que
duplicar la renta reduce aproximadamente a la mitad (concretamente, 2^-1,3 ≈ 0,41 veces) el valor
marginal de una libra adicional. Esto no es un ajuste de redondeo: aplicarlo puede cambiar cuál de dos
programas en competencia muestra el mayor valor actual neto, particularmente al comparar una
intervención concentrada en un área desfavorecida frente a otra repartida entre la población general.

## Las matemáticas

El peso distributivo del Green Book para una libra de beneficio que recae sobre un hogar con nivel de
renta y, en relación con una libra al nivel de renta media nacional ȳ:

```
Peso(y) = (ȳ / y)^e

donde:
  y  = renta del hogar (o renta del grupo afectado)
  ȳ  = renta media (de referencia) del hogar
  e  = elasticidad de la utilidad marginal de la renta (Green Book:
       aproximadamente 1,3)
```

Aplicando los pesos a los beneficios netos:

```
Beneficio ponderado = Σ [beneficio sin ponderar al grupo i × Peso(y_i)]
```

Un grupo que gana la mitad de la media nacional (y = 0,5ȳ) obtiene un peso de (1/0,5)^1,3 =
2^1,3 ≈ 2,46: cada libra de beneficio para ese grupo cuenta como si valiera aproximadamente 2,46 veces
una libra para un hogar de renta media.

## Ejemplo práctico

**Dos programas locales en competencia**, cada uno con un beneficio neto sin ponderar de 2 millones de
libras/año, compitiendo por el mismo fondo regional de crecimiento:

- *Programa A*: un plan de apoyo empresarial en una localidad próspera, renta media del hogar de
  45 000 £ (aproximadamente 1,3 veces la media nacional asumida de 35 000 £).
- *Programa B*: un programa de capacidades en un distrito desfavorecido, renta media del hogar de
  18 000 £ (aproximadamente 0,51 veces la media nacional).

```
Peso(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Peso(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Beneficio ponderado A = 2.000.000 £ × 0,72 = 1,44 millones £
Beneficio ponderado B = 2.000.000 £ × 2,53 = 5,06 millones £
```

Sin ponderar, ambos programas están empatados. Ponderados por impacto distributivo, el beneficio del
Programa B es más de tres veces mayor, un resultado que invierte la recomendación de financiación y
refleja el propósito explícito del Green Book al exigir que se muestre la ponderación, no solo el
ratio beneficio-coste sin ponderar.

**Asignación de subvención benéfica**: un financiador que compara una subvención de 500 000 £ que
llega a 1000 hogares de renta baja (peso ≈ 2,0, valor ponderado equivalente a 1 millón de libras)
frente a esas mismas 500 000 £ que llegan a 1000 hogares de renta media (peso ≈ 1,0, valor ponderado
equivalente a 500 000 £) debería mostrar el caso distributivo explícitamente en su documento de junta,
no dejarlo a la inferencia.

## Conexión con la ingeniería de software

La ponderación distributiva rara vez aparece directamente en las métricas de entrega de software, pero
debería dar forma a cómo los equipos de ingeniería y datos diseñan la medición y la segmentación:

- Al construir un panel de impacto o una calculadora de beneficios, exponga el perfil de renta o
  privación de quién se ve afectado, no solo un total de beneficio agregado; las cifras agregadas sin
  desglose distributivo ocultan precisamente la inversión mostrada arriba.
- Vincule la lógica de segmentación en el diseño de servicios con los mismos datos de privación que
  utiliza el Green Book; véase [índice de privación múltiple](../index-of-multiple-deprivation/), de
  modo que el alcance de un servicio digital pueda evaluarse por equidad, no solo por eficiencia (la
  controvertida cuarta E de [relación calidad-precio](../value-for-money/)).
- Cuando un algoritmo asigna un recurso escaso (citas, tiempo de personal técnico, un subsidio), una
  función objetivo sin ponderar de "maximizar el beneficio total" reproducirá, por construcción, el
  mismo sesgo que la ponderación del Green Book existe para corregir; señálelo explícitamente a los
  responsables de política antes de optimizar.

## Errores habituales

- **Aplicar los pesos distributivos de forma inconsistente en una cartera.** Ponderar los beneficios de
  un programa pero no los de su comparador produce una comparación sesgada, no más justa; el Green Book
  exige un tratamiento equivalente.
- **Usar valores de propiedad o de mercado como indicador indirecto del bienestar sin ajuste.** Los
  precios de mercado ya están distorsionados por la desigualdad de renta existente, que es
  precisamente lo que la ponderación distributiva pretende corregir; usar valores de mercado sin
  ajustar puede duplicar el sesgo.
- **Ignorar la variación dentro del grupo.** Ponderar por renta media del área (p. ej., un decil del
  índice de privación múltiple) puede representar mal a las personas que no coinciden con la media de
  su área; use los datos de renta más granulares razonablemente disponibles.
- **Tratar la elasticidad de 1,3 como una constante universal.** El propio Green Book señala que esto
  es una estimación con un rango plausible; pruebe la sensibilidad de las decisiones importantes frente
  a elasticidades alternativas en lugar de tratar el 1,3 como exacto.

## Fuentes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
