# Análisis contrafactual

Un contrafactual es una estimación de lo que habría ocurrido en ausencia de una intervención. Sin uno,
un cambio observado tras el lanzamiento de un programa no puede distinguirse de un cambio que habría
ocurrido de todos modos: sin contrafactual no hay evidencia de efecto, por convincentes que parezcan
las cifras de antes y después. El Magenta Book de HM Treasury trata la construcción de un
contrafactual creíble como la tarea metodológica central de la evaluación de impacto, más importante
que cualquier otra decisión de diseño individual.

## Por qué es importante

"La delincuencia cayó un 15% en el año posterior a la introducción del programa" no es evidencia de
que el programa funcionó a menos que se sepa qué habría pasado con la delincuencia sin él: podría haber
caído un 20% de todos modos por tendencias económicas o demográficas no relacionadas, lo que
significaría que el programa en realidad empeoró las cosas respecto al contrafactual, a pesar de que
la cifra bruta mejorara. Este es el error analítico más común en las afirmaciones de impacto del
sector público y social: confundir una comparación antes/después con evidencia de causalidad. El
Magenta Book es explícito en que la evaluación de impacto existe para responder a una pregunta
contrafactual —"¿qué diferencia marcó esta intervención?"— y que responderla exige estimar, no solo
describir, el mundo que no ocurrió.

Distintos métodos construyen el contrafactual con distintos grados de confianza, y la guía de
evaluación gubernamental los clasifica en consecuencia. Los ensayos controlados aleatorizados (RCT),
en los que personas o áreas se asignan aleatoriamente a recibir una intervención o no, producen el
contrafactual más sólido porque la aleatorización garantiza que los grupos de tratamiento y control
difieran, en promedio, solo en recibir la intervención. El Cabinet Office y la What Works Network han
promovido los RCT en toda la política pública del Reino Unido desde el informe "Test, Learn, Adapt" de
2012 del Behavioural Insights Team, precisamente porque los diseños más débiles son vulnerables a la
confusión: la diferencia observada puede reflejar quién eligió participar, no el efecto del programa.
Cuando la aleatorización es impracticable o no ética (como suele ocurrir con programas de derecho
estatutario, o con cambios de política para toda la población), el Magenta Book establece una
jerarquía explícita de alternativas más débiles pero aun así útiles: grupos de comparación
emparejados, diseños de diferencias en diferencias, discontinuidad de regresión en torno a umbrales de
elegibilidad y, como último recurso, la simple comparación antes/después, claramente señalada como la
forma más débil de evidencia, propensa a confundir el efecto del programa con el efecto de todo lo
demás que cambió al mismo tiempo.

## Las matemáticas

El planteamiento contrafactual, aplicable a todos los métodos:

```
Impacto estimado = Resultado(con intervención) − Resultado(contrafactual: sin intervención)

NO:
Impacto estimado ≠ Resultado(después) − Resultado(antes)   [confunde el tiempo con el tratamiento]
```

Las diferencias en diferencias, uno de los diseños cuasiexperimentales más comunes en la evaluación
gubernamental, aíslan el efecto del tratamiento restando el propio cambio antes/después del grupo de
comparación:

```
Estimación DiD = [Resultado(tratado, después) − Resultado(tratado, antes)]
             − [Resultado(comparación, después) − Resultado(comparación, antes)]
```

Esto elimina cualquier tendencia común a ambos grupos (p. ej., un cambio económico nacional que afecta
a todos), dejando solo el cambio diferencial atribuible a la intervención.

## Ejemplo práctico

**Programa de empleo, antes/después (diseño débil)**: un programa de apoyo al empleo informa que el
empleo entre los participantes subió del 40% al 55% a lo largo de un año, una conclusión ingenua de
"+15 puntos porcentuales debido al programa".

**Mismo programa, diferencias en diferencias (diseño más sólido)**: un grupo de comparación emparejado
de no participantes similares, extraído del mismo mercado laboral local, muestra que el empleo subió
del 38% al 47% durante el mismo año (había una recuperación económica nacional en marcha).

```
Cambio del grupo tratado:      55% − 40% = +15 puntos porcentuales
Cambio del grupo de comparación: 47% − 38% = +9 puntos porcentuales

Estimación DiD (efecto real del programa) = 15 − 9 = +6 puntos porcentuales
```

El efecto atribuible honesto es de 6 puntos porcentuales, no 15: más de la mitad de la mejora aparente
antes/después habría ocurrido de todos modos, impulsada por la misma recuperación económica que
elevó al grupo de comparación.

**Discontinuidad de regresión, umbral de elegibilidad**: un programa de subvenciones está disponible
solo para empresas con menos de 50 empleados. Comparar los resultados de las empresas justo por debajo
del umbral (45-49 empleados, elegibles) con los de las empresas justo por encima (50-54 empleados, no
elegibles) proporciona un contrafactual creíble porque las empresas a ambos lados de un corte
administrativo arbitrario son, por lo demás, similares: el umbral, no ninguna característica
empresarial subyacente, determina la elegibilidad. Una diferencia de resultado media de 2000 £ entre
ambos grupos, observada solo en el umbral, es atribuible a la subvención con mucha más confianza que
una simple comparación de todas las empresas elegibles frente a todas las no elegibles (que difieren
sistemáticamente en tamaño).

## Conexión con la ingeniería de software

El pensamiento contrafactual debería dar forma a cómo se diseñan los sistemas de seguimiento de
impacto y los procesos de evaluación para el software del gobierno y del sector social:

- Incorpore la captura de un grupo de comparación en un sistema desde el principio —registrando quién
  era elegible pero no se inscribió, o una cohorte emparejada de no participantes— en lugar de
  incorporarla a posteriori después de que un programa ya se haya ejecutado y solo existan datos de
  antes/después.
- Cuando la aleatorización sea viable (una implantación por fases, un servicio digital habilitado para
  algunos usuarios antes que para otros), instrumente el sistema para conservar la asignación
  aleatoria como un campo consultable; una implantación por fases destruye accidentalmente su propio
  valor de evaluación si el orden de asignación no se registra.
- Este es el método fundacional detrás de [los métodos de evaluación de impacto](../impact-evaluation-methods/)
  y es lo que lo separa de [la evaluación de impacto frente a la evaluación de proceso](../impact-evaluation-vs-process-evaluation/),
  que pregunta si un programa se entregó según lo previsto en lugar de si causó un efecto.
- [La adicionalidad y el peso muerto](../additionality-and-deadweight/) y [el desplazamiento y la
  atribución](../displacement-and-attribution/) son, en el fondo, ambos preguntas contrafactuales: el
  peso muerto es "cuál habría sido este resultado específico sin la intervención", aplicado a nivel de
  ajuste en lugar de a un diseño de evaluación completo.

## Errores habituales

- **Tratar el antes/después como evidencia de causalidad.** Este es el error más común y de mayores
  consecuencias en los informes de impacto del sector público y social; un cambio antes/después
  confunde el efecto del programa con cualquier otra cosa que haya cambiado en el mismo periodo.
- **Usar un grupo de comparación que difiere sistemáticamente del grupo tratado.** Un grupo de
  comparación emparejado debe ser genuinamente similar en las características relevantes (véase la
  jerarquía de métodos del [análisis contrafactual](../counterfactual-analysis/) en el Magenta Book);
  comparar a los participantes del programa (que se apuntaron voluntariamente y a menudo están más
  motivados) con los no participantes (que no lo hicieron) arriesga que un sesgo de selección se haga
  pasar por efecto del programa.
- **Destruir las oportunidades de aleatorización por un diseño de entrega deficiente.** Una
  implantación por fases o aleatorizada solo conserva su valor de evaluación si la asignación es
  genuinamente aleatoria y se registra; dejar que los gestores locales elijan quién va primero anula el
  propósito.
- **Reclamar una precisión excesiva a partir de un diseño débil.** Una estimación antes/después debería
  presentarse como indicativa, no como un tamaño de efecto medido; la jerarquía de evidencia del
  Magenta Book existe para que la fuerza de una afirmación se corresponda con la fuerza del diseño que
  la produjo.

## Fuentes

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
