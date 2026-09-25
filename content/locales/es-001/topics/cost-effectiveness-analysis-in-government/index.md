# Análisis de coste-efectividad en el gobierno

El análisis de coste-efectividad (ACE) compara los costes de formas alternativas de lograr el
*mismo* resultado, expresado en unidades naturales —coste por persona sin hogar realojada, coste por
alumno que alcanza el nivel esperado, coste por tonelada de CO2 reducida— sin convertir el propio
resultado en dinero.

## Por qué es importante

El Green Book trata el ACE como el método de reserva cuando el requisito de [el análisis social de
coste-beneficio](../social-cost-benefit-analysis/) de monetizar cada beneficio se vuelve no solo
difícil sino deshonesto: cuando poner un precio creíble al resultado exigiría supuestos que nadie
sostiene realmente
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
capítulo 5, sobre la valoración de opciones cuando los resultados no son fácilmente monetizables). El
ACE es el método tomado más directamente de la economía de la salud —es estructuralmente idéntico a
cómo el NICE compara tratamientos usando el coste por año de vida ajustado por calidad—, pero aplicado
a programas públicos no sanitarios: intervenciones educativas por punto de resultado del alumnado,
programas de vivienda por hogar evitado de quedarse sin techo, programas de empleo por resultado de
empleo sostenido.

La razón por la que el ACE se gana su lugar junto al ASCB en lugar de quedar subsumido por él es que
forzar un valor monetario sobre algunos resultados produce una cifra lo bastante precisa como para
parecer autorizada y lo bastante controvertida como para resultar inútil en un debate público: poner
precio a "un niño que lee al nivel esperado" invita exactamente al tipo de impugnación que descarrila
un análisis de viabilidad ante una comisión parlamentaria. El ACE esquiva ese debate negándose a
tenerlo: clasifica las opciones por coste por unidad del *resultado en sí*, dejando el juicio político
separado sobre si el resultado merece perseguirse en absoluto al caso estratégico.

## Las matemáticas

```
Ratio de coste-efectividad (media) = Coste total / Total de unidades de resultado logradas

Ratio incremental de coste-efectividad (ICER), comparando la opción A
con la opción B:
ICER = (Coste_A − Coste_B) / (Resultado_A − Resultado_B)

Procedimiento:
1. Fijar la unidad de resultado y el método de medición en todas las
   opciones comparadas.
2. Costear cada opción sobre la misma base (véase ../green-book-appraisal/,
   caso financiero) sobre el mismo horizonte temporal.
3. Descartar las opciones dominadas: cualquier opción que cueste más
   por unidad que una alternativa más barata que logre un resultado
   igual o mejor se elimina.
4. Clasificar las opciones restantes por ratio de coste-efectividad
   incremental, no medio.
```

El ACE no puede, por sí solo, decir si un programa merece financiarse en absoluto, solo cuál de
varios enfoques hacia el mismo objetivo es el más barato por unidad. Decidir si el propio objetivo
merece el gasto exige o bien volver al ASCB (si existe una valoración creíble) o bien un juicio
político/estratégico ajeno a las matemáticas. Cuando los resultados genuinamente no pueden reducirse
a una sola unidad —porque un programa produce varios resultados que importan de formas distintas—,
use en su lugar [el análisis de decisión multicriterio](../multi-criteria-decision-analysis/).

## Ejemplo práctico

**Ayuntamiento**: un ayuntamiento compara tres enfoques para reducir las personas sin hogar que
duermen a la intemperie, cada uno costeado a lo largo de un año frente al resultado "personas
realojadas en alojamiento estable durante 6 o más meses":

```
Opción                              Coste       Resultados logrados   RCE medio
Housing First (intensivo)           900.000 £   60                    15.000 £/resultado
Albergue + apoyo de transición       600.000 £   50                    12.000 £/resultado
Trabajo de calle + alquiler privado  350.000 £   20                    17.500 £/resultado

ICER, Albergue frente a Trabajo de calle:  (600k−350k)/(50−20) = 8.333 £ por resultado adicional
ICER, Housing First frente a Albergue: (900k−600k)/(60−50) = 30.000 £ por resultado adicional
```

El trabajo de calle está dominado en coste medio por el albergue, pero el paso *incremental* del
trabajo de calle al albergue cuesta solo 8333 £ por persona adicional realojada: barato en relación
con el paso a Housing First, que cuesta 30 000 £ por cada persona adicional más allá de lo que logra
el albergue. Un ayuntamiento con presupuesto limitado que quiera ampliar su actividad debería preferir
expandir el albergue antes que Housing First, aunque Housing First parezca mejor según su propio ratio
medio.

**Gobierno nacional**: un programa de refuerzo de lectoescritura se compara entre tres modelos de
entrega sobre "coste por alumno que alcanza el nivel de lectura esperado para su edad": tutoría
individual (1800 £/alumno), tutoría en grupo pequeño (700 £/alumno) e intervención solo digital
(150 £/alumno, pero solo con el 40% de la tasa de resultado de la tutoría en grupo pequeño por alumno
inscrito una vez ajustado por la caída de compromiso). Una vez ajustado por la finalización real, la
opción solo digital cuesta 375 £ por alumno que alcanza el nivel; sigue siendo la más barata, pero el
ACE no puede decir si el número absoluto menor de alumnos ayudados por la opción solo digital, si se
aplicara con el mismo presupuesto que la tutoría en grupo pequeño, es una compensación aceptable frente
a ayudar a menos alumnos con mayor profundidad; ese es un juicio distributivo que el ACE devuelve a
quienes toman las decisiones.

## Conexión con la ingeniería de software

El ACE es el marco adecuado siempre que los equipos de ingeniería evalúan enfoques de entrega para el
*mismo* resultado de servicio: coste por identidad verificada con éxito entre tres proveedores de
verificación de identidad, coste por caso correctamente clasificado entre dos diseños de automatización
de gestión de casos, coste por defecto de accesibilidad resuelto entre remediación interna frente a
contratada. La disciplina que importa directamente: defina la unidad de resultado antes de comparar
costes (no "tickets cerrados" —un producto—, sino "necesidad del usuario realmente resuelta"), y
calcule siempre el ratio incremental entre el sistema en producción y un reemplazo propuesto, no el
coste medio de cada sistema de forma aislada. Véanse [resultados frente a productos](../outcomes-vs-outputs/)
y [coste por resultado](../cost-per-outcome/).

## Errores habituales

- **Comparar ratios medios, no incrementales, al decidir una expansión.** Como muestra el ejemplo de
  las personas sin hogar, la opción con el mejor ratio medio no siempre es la unidad adicional de
  resultado más barata de comprar.
- **Elegir una unidad de resultado que en realidad es un producto.** "Derivaciones realizadas" o
  "sesiones impartidas" miden actividad, no el resultado que el programa existe para producir; el ACE
  sobre productos produce una cifra de aspecto confiable que responde a la pregunta equivocada.
- **Comparar entre resultados genuinamente distintos.** El ACE solo es válido cuando todas las
  opciones apuntan al mismo resultado medido de la misma manera; comparar "coste por persona sin hogar
  realojada" con "coste por joven exresidente de acogida en tenencia estable" necesita una medida de
  resultado genérica o [el análisis de decisión multicriterio](../multi-criteria-decision-analysis/),
  no el ACE.
- **Ignorar la durabilidad del resultado.** Una opción más barata que produce resultados que no
  perduran (un alumno que retrocede después de que termina la intervención) no es en realidad más
  coste-efectiva una vez medida sobre un horizonte comparable; iguale el periodo de seguimiento entre
  las opciones comparadas.

## Fuentes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
