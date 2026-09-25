# Valoración por preferencia declarada

Los métodos de preferencia declarada estiman el valor de un bien no de mercado preguntando
directamente a las personas cuánto estarían dispuestas a pagar por él, o dispuestas a aceptar como
compensación por renunciar a él, habitualmente a través de una encuesta estructurada que describe un
escenario hipotético. La valoración contingente es la técnica más conocida de esta familia.

## Por qué es importante

El Anexo 2 del Green Book (guía complementaria sobre la valoración de impactos no de mercado) respalda
los métodos de preferencia declarada para bienes que no tienen ninguna transacción de mercado
observable de la que inferir valor: calidad del aire, biodiversidad, protección contra inundaciones,
el valor de existencia de un paisaje que alguien puede que nunca visite
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra ha publicado su propia guía de preferencia declarada para la valoración ambiental
específicamente porque gran parte del valor ambiental (preservación de hábitats, calidad del agua) no
tiene ningún mercado indirecto en absoluto, a diferencia, por ejemplo, del ruido, que al menos se
correlaciona con precios de vivienda observables (véase [la valoración por preferencia
revelada](../revealed-preference-valuation/)).

El atractivo central de la preferencia declarada —puede valorar literalmente cualquier cosa, incluidos
bienes con los que nadie ha transaccionado jamás— es también la fuente de su problema de credibilidad.
Como quienes responden no están gastando dinero realmente, las encuestas de valoración contingente son
vulnerables al sesgo hipotético (la gente exagera la disposición a pagar cuando no hay una restricción
presupuestaria real), a los efectos de incrustación (el mismo bien se valora de forma distinta según
qué más haya en la encuesta) y al sesgo de punto de partida en los diseños de juego de pujas. El panel
de la NOAA de 1993 sobre valoración contingente, convocado tras el litigio del vertido de petróleo del
Exxon Valdez, estableció estándares de diseño —un formato de referéndum binario "¿pagaría X libras?
sí/no" en lugar de pujas abiertas, y recordatorios obligatorios de la restricción presupuestaria real
de quien responde— que siguen siendo el estándar de referencia para encuestas defendibles.

## Las matemáticas

```
Valoración contingente (formato de referéndum):
  Presentar una elección binaria: "¿pagaría X libras al año por el
  resultado Y? sí/no"
  Variar X aleatoriamente entre los encuestados.
  Ajustar la disposición a pagar como función de la tasa de respuesta
  sí/no en cada X.

DAP media = área bajo la curva de demanda estimada
Valor agregado = DAP media × población afectada

Variante del experimento de elección (modelización de elección discreta):
  Presentar a los encuestados elecciones repetidas entre paquetes de
  atributos (incluido un atributo de coste), estimar precios implícitos
  para cada atributo no de coste a partir de las compensaciones que
  revelan los encuestados.
```

La variante del experimento de elección generalmente se prefiere en la práctica actual del Reino Unido
frente a la valoración contingente de una sola pregunta, porque obligar a los encuestados a compensar
varios atributos frente al coste de forma repetida produce estimaciones más internamente consistentes
y más difíciles de manipular que una única pregunta de sí/no.

## Ejemplo práctico

**Gobierno nacional**: Defra encarga una encuesta de valoración contingente para valorar un programa de
mejora de la calidad del agua de un río. Una encuesta en formato de referéndum de 2000 hogares
encuentra que el 62% pagaría 40 £/año a través de un suplemento hipotético de la factura del agua, y la
curva de demanda estimada da una disposición a pagar media de 28 £/año por hogar.

```
DAP media = 28 £/hogar/año
Hogares en la cuenca = 340.000
Valor anual agregado = 28 £ × 340.000 = 9,52m £/año

A lo largo de un periodo de valoración de 20 años a una tasa de
descuento del 3,5% (factor de anualidad ≈ 14,2):
VA(beneficio) ≈ 9,52m £ × 14,2 ≈ 135m £
```

Esta cifra agregada se compara después con el lado de coste del [análisis social de
coste-beneficio](../social-cost-benefit-analysis/) del programa. El Green Book exige que este tipo de
evidencia de preferencia declarada se reporte junto a su intervalo de confianza y metodología de
encuesta, no como una simple estimación puntual, precisamente porque la cifra subyacente es más frágil
que un precio de mercado.

**Organización benéfica**: un fideicomiso patrimonial encuesta a visitantes y no visitantes sobre la
disposición a pagar para evitar el cierre de un edificio histórico que ninguno de los dos grupos
visita necesariamente (su valor de existencia). Como los no visitantes que nunca verán el edificio aun
así declaran una DAP positiva, la encuesta captura valor de existencia y de legado que un simple
recuento de ingresos por tarifa de visitante (un indicador de preferencia revelada) pasaría por alto
por completo, mostrando la ventaja genuina de la preferencia declarada donde no existe ninguna
transacción de mercado de ningún tipo que revele valor.

## Conexión con la ingeniería de software

Los métodos de preferencia declarada rara vez se aplican directamente al trabajo de ingeniería de
software, pero quienes construyen plataformas de consulta ciudadana, herramientas de participación
presupuestaria o infraestructura de encuestas públicas a menudo están construyendo el instrumento del
que depende la economía. Acertar con los detalles del diseño de la encuesta —importes de puja
aleatorizados, formato de referéndum binario en lugar de preguntas abiertas, recordatorios explícitos
de la restricción presupuestaria— no es un detalle de experiencia de usuario, es lo que hace que la
valoración resultante sea defendible bajo escrutinio; una encuesta dentro de la aplicación mal diseñada
puede invalidar meses de análisis económico posterior. Véanse [las métricas de satisfacción
ciudadana](../citizen-satisfaction-metrics/) para la disciplina más general de obtener datos de opinión
pública que soporten peso analítico.

## Errores habituales

- **Preguntas abiertas de "¿cuánto pagaría?".** Son mucho más propensas al sesgo estratégico y de
  anclaje que el formato de referéndum binario; la recomendación del panel de la NOAA de usar un
  formato de referéndum existe precisamente porque la obtención abierta funciona mal.
- **Sin recordatorio de la restricción presupuestaria real del encuestado.** Sin ella, la DAP declarada
  habitualmente supera lo que esas mismas personas pagarían cuando está en juego una compensación
  presupuestaria real: sesgo hipotético.
- **Efectos de incrustación ignorados.** El mismo bien valorado solo frente a valorado como parte de un
  paquete mayor produce estimaciones de DAP distintas; informe de qué más, si algo, había en el marco de
  la encuesta.
- **Tratar la estimación puntual de una única encuesta como definitiva.** La práctica del Green Book
  espera un rango y una discusión de los sesgos conocidos, no una cifra desnuda trasladada a la tabla de
  coste-beneficio como si fuera un precio de mercado.

## Fuentes

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
