# Análisis de decisión multicriterio (MCDA)

El MCDA puntúa y pondera opciones frente a varios criterios distintos y ponderados a la vez,
produciendo una comparación clasificada sin forzar cada criterio a una única escala monetaria o de
unidad natural. Es el método de valoración para decisiones en las que los resultados que importan
genuinamente no pueden reducirse a una sola cifra.

## Por qué es importante

El Green Book sanciona explícitamente el MCDA (tanto su apéndice de estudio de caso del Recuadro 2
como el Anexo A lo tratan directamente) para valoraciones en las que los beneficios son "genuinamente
inconmensurables", donde convertirlo todo a dinero mediante [el análisis social de
coste-beneficio](../social-cost-benefit-analysis/), o a un único resultado mediante [el análisis de
coste-efectividad](../cost-effectiveness-analysis-in-government/), tergiversaría la decisión en lugar
de clarificarla
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
La selección de un emplazamiento para una nueva prisión, por ejemplo, compensa el coste de capital
frente al impacto comunitario, la conectividad de transporte, el efecto ambiental y la capacidad de
contratar personal: criterios que no comparten una unidad común y donde forzar una unidad compartida
(habitualmente el dinero) introduciría de contrabando un juicio de valor sobre la importancia relativa
de, digamos, el impacto ambiental frente al coste, disfrazado de aritmética objetiva.

La honestidad del MCDA es también su principal vulnerabilidad: como los pesos los asigna quien dirige
la valoración (o un panel), el método solo es tan legítimo como el proceso de ponderación. La guía del
Green Book es explícita en que los criterios y los pesos deben acordarse y publicarse *antes* de
puntuar cualquier opción, precisamente para evitar que un revisor trabaje hacia atrás desde una opción
preferida hasta los pesos que la justifican.

## Las matemáticas

```
Para cada opción i y criterio j:
  Puntuación_ij   = el desempeño de la opción frente a ese criterio (a
                     menudo de 0 a 100 o de 1 a 10, a partir de
                     evidencia, juicio experto o puntuación de las
                     partes interesadas)
  Peso_j   = importancia relativa del criterio j, los pesos suman 1 (o
             100)

Puntuación ponderada de la opción i = Σ_j (Puntuación_ij × Peso_j)

Procedimiento:
1. Acordar el conjunto de criterios y los pesos ANTES de puntuar
   cualquier opción (la ponderación de oscilación o la comparación por
   pares, p. ej., AHP, son métodos de obtención habituales).
2. Puntuar cada opción frente a cada criterio en una escala común, a
   partir de evidencia cuando sea posible.
3. Calcular los totales ponderados; clasificar las opciones.
4. Probar la sensibilidad de los pesos: ¿sobrevive la clasificación a
   un desacuerdo plausible sobre cuánto debería importar cada criterio?
```

El MCDA no produce un valor absoluto defendible como lo hace el valor actual neto del ASCB; solo
produce una clasificación condicionada a los pesos acordados. Esto es una virtud cuando la decisión
trata genuinamente de compensar bienes inconmensurables, y un pasivo si se usa para eludir el trabajo
más difícil de la monetización cuando la monetización era realmente posible.

## Ejemplo práctico

**Ayuntamiento**: un ayuntamiento que selecciona una ubicación para un nuevo centro de reciclaje de
residuos domésticos puntúa tres emplazamientos frente a cuatro criterios, ponderados por un panel
interdepartamental antes de cualquier visita al emplazamiento:

```
Criterios (peso):        Coste de capital (30%)  Acceso de transporte (25%)
                           Impacto comunitario (25%)  Impacto ambiental (20%)

Puntuaciones de emplazamiento (0-100, más alto = mejor):
Emplazamiento A: coste 80, acceso 60, comunidad 40, ambiente 70
Emplazamiento B: coste 60, acceso 90, comunidad 70, ambiente 50
Emplazamiento C: coste 90, acceso 50, comunidad 80, ambiente 60

Totales ponderados:
Emplazamiento A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
Emplazamiento B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
Emplazamiento C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

El Emplazamiento C queda primero en la clasificación. Una prueba de sensibilidad que desplaza el peso
del impacto comunitario del 25% al 35% (quitando 10 puntos al coste de capital) cambia el total del
Emplazamiento C a 71,5 − 3 + 8 = 76,5 y el del Emplazamiento B a 68 − 6 + 7 = 69; el Emplazamiento C
sigue liderando, por lo que la clasificación es robusta ante ese desacuerdo plausible sobre la
ponderación, que es exactamente la comprobación que el Green Book espera ver reportada.

**Organización benéfica**: una fundación que otorga subvenciones y elige entre financiar un servicio
de asesoramiento sobre deudas, una red de bancos de alimentos y un programa de alfabetización
financiera usa el MCDA en lugar del SROI (véase [el retorno social de la inversión](../social-return-on-investment/))
precisamente porque los administradores (trustees) discrepan, de buena fe, sobre si el alivio de
crisis o la prevención deberían pesar más; el MCDA les permite acordar la *forma* del desacuerdo (un
rango de peso) en lugar de fingir que un único ratio SROI lo resuelve.

## Conexión con la ingeniería de software

El MCDA es la herramienta natural para la selección de proveedores y arquitectura cuando los criterios
entran genuinamente en conflicto: elegir entre un sistema de gestión de casos alojado en la nube y uno
local compensa el coste, el riesgo de soberanía de datos, la accesibilidad y la velocidad de entrega
de formas que no se reducen a una sola cifra. Los responsables de ingeniería deberían insistir en que
la ponderación ocurra antes de puntuar las opciones, exactamente como exige el Green Book, porque un
ejercicio de ponderación realizado después de ver la lista corta deriva de forma fiable hacia la opción
que la sala ya favorecía. Véanse [construir frente a comprar en el gobierno](../build-vs-buy-in-government/)
para una aplicación habitual del MCDA, y [el cuadro de mando de valor público](../public-value-scorecard/)
para una herramienta de puntuación estructurada relacionada, usada después de la decisión en lugar de
antes.

## Errores habituales

- **Fijar los pesos después de ver las opciones.** Esta es la forma más común de manipular el MCDA,
  intencionadamente o no; publique los pesos antes de puntuar, y registre quién los fijó.
- **Tratar el total ponderado como una cifra dura.** Una puntuación de 71,5 frente a 68 no es una
  brecha estadísticamente significativa a menos que el análisis de sensibilidad confirme que la
  clasificación es estable; informe de rangos, no de falsa precisión.
- **Usar el MCDA para evitar una monetización que en realidad era factible.** Si la mayoría de los
  criterios pudieran fijarse con precio de forma creíble, recurrir por defecto al MCDA en lugar del
  [ASCB](../social-cost-benefit-analysis/) descarta información que la valoración podría haber usado.
- **Dejar que una única parte interesada dominante fije todos los pesos sola.** La buena práctica del
  Green Book espera que los pesos se obtengan de un panel representativo, no del director patrocinador,
  para evitar que la valoración simplemente reproduzca lo que esa persona ya quería.

## Fuentes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
