# Pago por resultados y bonos de impacto social (PbR/SIB)

El pago por resultados (PbR, Payment by Results) paga a un proveedor en función de los resultados
verificados logrados, no de las actividades realizadas. Un bono de impacto social (SIB, Social Impact
Bond) es una estructura de financiación de PbR específica en la que inversores privados o filantrópicos
financian por adelantado la prestación del servicio y son reembolsados —con un retorno— por un
organismo comisionador gubernamental solo si los resultados medidos de forma independiente alcanzan
los umbrales acordados, trasladando el riesgo de entrega del contribuyente al inversor.

## Por qué es importante

El primer SIB del mundo se lanzó en la prisión de HMP Peterborough en septiembre de 2010: Social
Finance recaudó 5 millones de libras de 17 inversores para financiar el "One Service", que trabajaba
con presos de condenas cortas (menos de 12 meses) para reducir la reincidencia, con el Ministry of
Justice y el Big Lottery Fund acordando reembolsar a los inversores solo si los eventos de reincidencia
caían al menos un 7,5% frente a una cohorte de comparación nacional emparejada. La cohorte final del
piloto de Peterborough registró una reducción del 9,7% en reincidencias, cómodamente por encima del
umbral, y los inversores fueron reembolsados con un retorno. El mecanismo importó porque resolvió un
problema de contratación específico: el gobierno quería pagar por resultados en lugar de por insumos,
pero no podía absorber el riesgo financiero de una intervención que podría no funcionar, así que la
estructura del SIB trasladó ese riesgo a inversores dispuestos a asumirlo. El Government Outcomes Lab
(GO Lab) de la Blavatnik School of Government de Oxford mantiene ahora la base de evidencia pública
más completa sobre el desempeño de PbR y SIB a nivel mundial, siguiendo bastante más de 200 bonos de
impacto en todo el mundo y publicando la investigación sobre qué características de diseño se
correlacionan con el éxito o el fracaso. La lección a la que la base de evidencia regresa repetidamente
es que la *métrica de resultado elegida*, y quién asume el riesgo de no alcanzarla, determina casi
todo lo demás sobre cómo se comporta realmente un contrato de PbR en la práctica.

## Las matemáticas

```
Pago de PbR = pago base (si lo hay) + Σ (resultado logrado × precio
              unitario por resultado)

Retorno del inversor en un bono de impacto social:
  Desembolso del inversor = capital inicial que financia la prestación
                             del servicio
  Pago por resultado   = el comisionador paga solo si el resultado ≥
                          umbral, escalado según cuánto supere el
                          desempeño al umbral
  Retorno del inversor   = pagos por resultado recibidos − desembolso
                          del inversor (una tasa de retorno, a menudo
                          limitada, que refleja el riesgo asumido)

Parámetros de diseño clave que determinan el comportamiento de todo el
contrato:
  Métrica de resultado        — debe ser un resultado, no un producto
                                 (véase outcomes-vs-outputs)
  Comparación/contrafactual — habitualmente una cohorte emparejada
                                (véase counterfactual-analysis)
  Umbral de pago      — mejora mínima antes de que se active cualquier
                         pago
  Curva de pago           — lineal, escalonada o limitada por encima
                             del umbral
  Descuento de atribución/peso muerto — véase additionality-and-deadweight
```

## Ejemplo práctico

**Peterborough One Service** (cifras ilustrativas extraídas de evaluaciones publicadas):

```
Capital de inversores recaudado:  5.000.000 £
Cohorte:                          ~3.000 presos varones de condena
                                   corta en dos cohortes
Umbral:                           ≥7,5% de reducción en eventos de
                                   reincidencia frente a grupo de
                                   comparación nacional emparejado, o
                                   sin pago
Resultado de la cohorte 1:        8,4% de reducción — por debajo del
                                   listón contractual para esa cohorte
                                   sola bajo las reglas originales
Resultado de la cohorte combinada/final: 9,7% de reducción — por
                                   encima del umbral
Pago por resultado:                el gobierno (Ministry of Justice /
                                   Big Lottery Fund) paga por punto
                                   porcentual por encima del umbral,
                                   financiando el reembolso al
                                   inversor más un retorno
```

**Contrato de PbR de un ayuntamiento (ilustrativo)**: un servicio de intervención familiar se contrata
a 4000 £ por familia derivada (pago por actividad) más 6000 £ por familia sin más derivaciones de
protección infantil 12 meses después del cierre (pago por resultado). 200 familias derivadas, 150
casos cerrados, 96 permanecen sin nuevas derivaciones a los 12 meses:

```
Pago por actividad  = 200 × 4.000 £ = 800.000 £
Pago por resultado   = 96 × 6.000 £  = 576.000 £
Coste total del contrato = 1.376.000 £ por 96 resultados sostenidos
confirmados
Coste por resultado confirmado ≈ 14.333 £ (véase cost-per-outcome)
```

## Conexión con la ingeniería de software

El pago por resultados es un problema de alineación de incentivos antes de ser un problema de datos, y
el sistema de datos es donde esa alineación se mantiene o se rompe. La verificación independiente y a
prueba de manipulación de los resultados es todo el juego: el comisionador y el proveedor tienen
incentivos opuestos sobre cómo se codifica un caso ambiguo, así que el sistema que registra los
resultados necesita un rastro de auditoría, un acuerdo de intercambio de datos con el verificador
independiente (a menudo un organismo distinto del proveedor, a veces un organismo de estadísticas
oficiales que coteja con registros policiales o de prestaciones) y un versionado inmutable de la
definición del resultado: el equivalente en PbR del error de "redefinir la métrica" en [los KPI del
sector público](../public-sector-kpis/). Los cálculos de atribución dependen de los métodos de cohorte
emparejada de [análisis contrafactual](../counterfactual-analysis/), que necesitan código reproducible
y auditable, no una hoja de cálculo puntual. Y la propia métrica debe ser un resultado genuino, no una
actividad indirecta; véase [resultados frente a productos](../outcomes-vs-outputs/); porque un
contrato de PbR que paga por un producto simplemente reetiqueta la financiación habitual con un coste
de transacción adicional. Cuando el retorno social de un SIB se modela de forma prospectiva, esa
valoración habitualmente toma prestada directamente la metodología de [el retorno social de la
inversión](../social-return-on-investment/).

## Errores habituales

- **Pagar por un resultado indirecto fácil de manipular**: "asistencia a las sesiones" es una
  actividad disfrazada de resultado; insista en una medida que refleje el cambio real buscado
  (reincidencia, empleo, estabilidad de vivienda).
- **Sin contrafactual creíble**: sin un grupo de comparación emparejado, una mejora podría ser
  regresión a la media o una tendencia más amplia, no el efecto del programa; véanse [el análisis
  contrafactual](../counterfactual-analysis/) y [la adicionalidad y el peso
  muerto](../additionality-and-deadweight/).
- **Subestimar los costes de transacción y evaluación**: la verificación independiente, la vinculación
  de datos y la administración del contrato para los programas de PbR/SIB habitualmente alcanzan dos
  dígitos como porcentaje del valor del contrato; la base de evidencia del GO Lab documenta esto como
  un factor recurrente de la interrupción de los programas.
- **Selección interesada de casos o "aparcamiento"**: los proveedores pagados por resultado tienen un
  incentivo directo para priorizar a los clientes con más probabilidades de éxito de todos modos y
  despriorizar los casos más difíciles; diseñe niveles de pago o un ajuste por mezcla de casos para
  contrarrestarlo.

## Fuentes

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
