# Responsabilidad basada en resultados (Outcomes-Based Accountability, OBA)

La Responsabilidad Basada en Resultados, también llamada Responsabilidad Basada en Resultados (RBA
por sus siglas en inglés, Results-Based Accountability), es el marco de Mark Friedman para separar dos
preguntas que los informes del sector público habitualmente confunden: "¿le va bien a la población?"
(responsabilidad poblacional) y "¿le va bien a este programa específico?" (responsabilidad de
desempeño). Confundir ambas es, en el relato de Friedman, la razón individual más común por la que
programas bien gestionados reciben la culpa de tendencias poblacionales que nunca tuvieron el poder de
mover.

## Por qué es importante

Friedman expuso el marco en *Trying Hard Is Not Good Enough* (2005), argumentando que la mayoría de
los informes públicos o bien ahogan a quienes toman decisiones en estadísticas a nivel poblacional que
ningún organismo individual controla (tasa de embarazo adolescente, tasa de desempleo, esperanza de
vida), o los ahogan en recuentos de actividad a nivel de programa (clientes atendidos, derivaciones
realizadas) que no dicen nada sobre si la vida de alguien mejoró. La contribución de la RBA es un
vocabulario pequeño y disciplinado que mantiene ambas cosas separadas: los resultados poblacionales
(condiciones de bienestar para toda una población, como "los niños nacen sanos") no pertenecen a
ningún organismo individual y requieren que muchos socios se muevan juntos; las medidas de desempeño
(cuán bien sirve un programa específico a sus clientes específicos) pertenecen a un organismo y
deberían juzgarse solo frente a lo que ese organismo realmente puede influir. Las "tres preguntas de
desempeño" de Friedman —cuánto hicimos, cuán bien lo hicimos, y ¿está alguien mejor?— están ahora
integradas en toda la contratación de servicios humanos de estados y condados de EE. UU. y, a través de
la consultora y el conjunto de herramientas alineados con la RBA, Clear Impact, ampliamente usadas en
la contratación de ayuntamientos del Reino Unido y la Mancomunidad de Naciones. Lo que está en juego en
la práctica es contractual: un programa de vivienda no debería desfinanciarse porque la tasa de
personas sin hogar de la ciudad subió por causas macroeconómicas fuera de su alcance, pero
absolutamente debería desfinanciarse si sus propios clientes no están siendo realojados.

## Las matemáticas

```
Responsabilidad poblacional (el "panorama general" que comparte una
comunidad, región o nación):
  Resultado    — una condición de bienestar (p. ej., "los residentes
                 son económicamente seguros")
  Indicador(es) — una medida de esa condición (p. ej., tasa de
                 desempleo, renta media del hogar)
  → ningún programa individual posee el indicador; el movimiento
    requiere muchos contribuyentes

Responsabilidad de desempeño (de lo que un programa es responsable):
  ¿Cuánto hicimos?      — volumen de actividad (clientes atendidos,
                           unidades entregadas)
  ¿Cuán bien lo hicimos? — calidad/eficiencia (% que completa el
                           programa, coste por cliente)
  ¿Está alguien mejor?  — el resultado que importa (% en empleo 6
                           meses después del programa, antes/después o
                           frente a un grupo de comparación)

Un programa se juzga por la tercera pregunta de desempeño, nunca
directamente por el indicador poblacional, a menos que su escala y
diseño pudieran plausiblemente moverlo por sí solo.
```

## Ejemplo práctico

**Programa de apoyo al empleo financiado por una ciudad**, 500 participantes/año, contratado por un
ayuntamiento bajo un marco de desempeño al estilo RBA:

```
Indicador poblacional (contexto, no el cuadro de mando del programa):
  Tasa de desempleo de la ciudad: 6,2% (subida desde el 5,8% del año
  anterior, impulsada por el cierre de una fábrica fuera del control
  del programa)

Medidas de desempeño (la responsabilidad real del programa):
  Cuánto:     500 participantes inscritos (objetivo 480) — cumplido
  Cuán bien:  78% de tasa de finalización; coste por persona que
              completa = 340.000 £ / 390 personas ≈ 872 £
  ¿Mejor?:    de 390 personas que completaron, 260 en empleo sostenido
              a los 6 meses = 66,7% frente al 41% de un grupo de
              comparación emparejado (véase counterfactual-analysis)
```

Bajo una lectura de responsabilidad poblacional, el programa parece estar fallando: la tasa de
desempleo de la ciudad subió bajo su vigilancia. Bajo la lectura de responsabilidad de desempeño de la
RBA, el programa está teniendo éxito: alcanzó su objetivo de volumen, mantuvo la calidad estable y
produjo un resultado de empleo 25,7 puntos porcentuales por encima de un grupo de comparación
emparejado, mientras el indicador poblacional se movía por razones (el cierre de una fábrica)
completamente fuera del control del programa.

## Conexión con la ingeniería de software

La RBA se corresponde directamente con una distinción familiar de SRE: los indicadores poblacionales
son como las métricas de estrella polar a nivel de negocio que ningún equipo de ingeniería individual
posee de principio a fin (ingresos de la empresa, cuota de mercado), mientras que las medidas de
desempeño son como los propios SLO de un equipo: las cosas que las decisiones de diseño de ese equipo
realmente mueven. Un panel que informa de ambas sin etiquetar cuál es cuál invita precisamente a la
mala atribución que la RBA fue construida para prevenir: una persona de guardia recibiendo la culpa de
una métrica que controla un equipo dependiente. Al encargar o construir herramientas de informes para
contratos de resultados, construya la tríada "cuánto / cuán bien / mejor" como campos de primera clase
y filtrables por separado en lugar de como un único KPI combinado; es la misma disciplina que separar
los indicadores adelantados y rezagados en [los KPI del sector público](../public-sector-kpis/). La
RBA es también la lógica de responsabilidad que subyace a [el pago por resultados y los bonos de
impacto social](../payment-by-results-and-social-impact-bonds/): un contrato de PbR solo puede pagar de
forma justa sobre la medida de desempeño "mejor", nunca sobre el indicador poblacional, a menos que la
intervención sea genuinamente el motor dominante de este.

## Errores habituales

- **Pagar o penalizar a un programa frente a un indicador poblacional que no puede controlar**: este
  es el error individual que la RBA existe para prevenir; rastree siempre si el programa es un
  contribuyente principal o menor al resultado poblacional antes de vincular consecuencias a él.
- **Informar de "cuánto" como si fuera "mejor"**: los recuentos de actividad (clientes atendidos) son
  los datos más fáciles de recopilar y los menos informativos; insista en que la pregunta "¿está
  alguien mejor?" se responda con datos de resultado reales, idealmente frente a un contrafactual
  (véase [análisis contrafactual](../counterfactual-analysis/)).
- **Tratar los indicadores de RBA como fijos para siempre**: el método de Friedman es explícitamente
  iterativo —un ciclo de "datos, historia, qué funciona, plan de acción"—, no un ejercicio puntual de
  diseño de cuadro de mando.
- **Ningún grupo de comparación para "mejor"**: un cambio antes/después sin contrafactual confunde el
  efecto del programa con la tendencia que la población habría mostrado de todos modos.

## Fuentes

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
