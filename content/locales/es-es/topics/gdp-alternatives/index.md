# Alternativas al PIB

Las alternativas al PIB son métricas construidas para capturar lo que el Producto Interior Bruto
ignora estructuralmente: el trabajo de cuidados no remunerado, el agotamiento ambiental, la
distribución de la renta y si el crecimiento realmente mejora las vidas. Las más conocidas son el
Indicador de Progreso Genuino (GPI) y el Índice de Felicidad Nacional Bruta (GNH) de Bután; el
argumento para tomarlas en serio lo expuso de forma más influyente la Comisión Stiglitz-Sen-Fitoussi
de 2009. Para quienes construyen paneles gubernamentales o sistemas de KPI, "qué cifra cuenta como
progreso" es una decisión de diseño con consecuencias reales para lo que se financia.

## Por qué es importante

Simon Kuznets, que construyó las cuentas nacionales de EE. UU. en la década de 1930, advirtió al
Congreso en 1934 de que "el bienestar de una nación apenas puede inferirse de una medición de la renta
nacional", una advertencia que la cifra superó casi de inmediato. El PIB cuenta la limpieza de un
vertido de petróleo como crecimiento y el cuidado infantil no remunerado de un progenitor como nada;
no distingue el gasto que construye bienestar duradero del gasto que simplemente compensa un daño ya
hecho. La Comisión Stiglitz-Sen-Fitoussi, convocada por el presidente francés Nicolas Sarkozy y
presidida por Joseph Stiglitz, Amartya Sen y Jean-Paul Fitoussi, informó en 2009 de que los sistemas
estadísticos deberían desplazar el énfasis "de medir la producción económica a medir el bienestar de
las personas", y que la sostenibilidad debería seguirse por separado del bienestar actual en lugar de
integrarse en una sola cifra. Las alternativas al PIB operacionalizan esa recomendación. El GPI,
desarrollado por el think tank Redefining Progress en la década de 1990 y construido sobre la Medida
del Bienestar Económico de 1972 de William Nordhaus y James Tobin, parte del consumo personal (como
hace el PIB) y luego añade beneficios no de mercado que el PIB omite (trabajo doméstico, voluntariado)
mientras resta costes defensivos y de agotamiento (delincuencia, contaminación, desplazamientos,
consumo de recursos) que el PIB cuenta erróneamente como positivos. El Índice GNH de Bután,
administrado por el GNH Centre Bhutan (<https://www.gnhcentre.bt/>), va aún más lejos, sustituyendo al
crecimiento como objetivo constitucional declarado del país: agrega 33 indicadores en 9 ámbitos
—bienestar psicológico, salud, educación, uso del tiempo, diversidad cultural, gobernanza, vitalidad
comunitaria, diversidad ecológica y nivel de vida— en una única puntuación basada en la suficiencia,
usada directamente para filtrar las propuestas de política gubernamental.

## Las matemáticas

```
GPI = gasto de consumo personal
      + beneficios no de mercado (trabajo doméstico, voluntariado, educación superior)
      − costes defensivos y sociales (delincuencia, contaminación,
        desplazamientos, ruptura familiar)
      − agotamiento del capital natural y social (consumo de recursos,
        pérdida de tierras agrícolas)

Puntuación de suficiencia GNH, por ámbito:
  una persona es "suficiente" en un ámbito una vez que supera su umbral
  en cada indicador
  Índice de Felicidad = (% de población suficiente en ≥ 6 de 9 ámbitos)
                    + (déficit medio ponderado de la minoría "todavía no feliz")
```

## Ejemplo práctico

**Región, GPI**: el consumo personal es de 50 000 millones de dólares. Se añade un valor estimado del
trabajo doméstico y voluntario de 12 000 millones de dólares (tasas salariales de coste de reposición;
véase [el valor del tiempo voluntario](../volunteer-time-value/)). Se restan los costes anuales
estimados de la congestión por desplazamientos (3000 millones de dólares), la delincuencia (4000
millones de dólares) y el agotamiento de recursos a largo plazo (6000 millones de dólares):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (miles de millones de $)
```

Si el PIB creció de 50 000 a 55 000 millones de dólares ese año (+10%), pero los costes defensivos y de
agotamiento crecieron más rápido que el consumo, el GPI puede caer aunque el PIB suba: la "hipótesis
del umbral" que citan los investigadores del GPI para las economías de renta alta desde
aproximadamente la década de 1970, cuando el crecimiento siguió subiendo mientras el GPI se estancaba.

**Ciudadano, GNH**: un encuestado supera el umbral de suficiencia en 7 de los 9 ámbitos (salud,
educación, nivel de vida, vitalidad comunitaria, diversidad cultural, diversidad ecológica, uso del
tiempo) pero se queda corto en bienestar psicológico y gobernanza. Como 7 ≥ 6, se le cuenta como
"feliz" en el recuento total; el índice sigue por separado la profundidad de sus dos déficits, de modo
que un aprobado ajustado no sea indistinguible de uno holgado.

## Conexión con la ingeniería de software

- Un panel de KPI modelado solo sobre rendimiento o gasto (el patrón del PIB) pasará por alto
  sistemáticamente el daño causado al generar ese rendimiento; el volumen de tickets de soporte
  tratado como "compromiso" en lugar de "angustia del usuario" es la versión en entrega de software de
  contar un vertido de petróleo como crecimiento.
- La contabilidad al estilo GPI es un patrón de auditoría útil para cualquier conjunto de [KPI del
  sector público](../public-sector-kpis/): para cada métrica de producto destacada, pregunte qué coste
  defensivo está incurriendo silenciosamente (retrabajo, respuesta a incidencias, agotamiento) y
  réstelo, del mismo modo que el GPI resta el gasto defensivo del consumo.
- El método de suficiencia por ámbito del GNH —aprobado/suspenso por dimensión, luego agregado— es
  estructuralmente la misma técnica que [el análisis de decisión multicriterio](../multi-criteria-decision-analysis/)
  y merece reutilizarse siempre que una única puntuación escalar pudiera ocultar una dimensión crítica
  de fallo.

## Errores habituales

- **Tratar el GPI como una cuenta nacional precisa**: a diferencia del PIB, el GPI no tiene una única
  metodología estandarizada; distintos estudios ponderan de forma diferente los costes de
  desplazamiento, el tiempo de voluntariado o el agotamiento de recursos, por lo que las comparaciones
  del GPI entre estudios son mucho menos fiables que las del PIB entre países.
- **Importar el GNH en bloque a una cultura política distinta**: sus pesos por ámbito y umbrales de
  suficiencia se fijaron mediante consulta butanesa; copiar la cifra sin el proceso de consulta
  subyacente produce una métrica hueca en la que nadie confía.
- **Suponer que una alternativa al PIB sustituye a la valoración de coste-beneficio**: estas son
  indicadores diagnósticos de toda la economía, no herramientas de decisión para un único programa; use
  en su lugar [el análisis social de coste-beneficio](../social-cost-benefit-analysis/).

## Fuentes

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
