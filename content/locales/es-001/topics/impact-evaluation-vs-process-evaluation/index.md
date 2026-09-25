# Evaluación de impacto frente a evaluación de proceso

La evaluación de impacto pregunta si un programa causó los resultados previstos. La evaluación de
proceso pregunta si el programa se entregó realmente tal como se diseñó: a quién, con qué intensidad y
con qué barreras o facilitadores en el camino. Son preguntas distintas que requieren métodos
distintos, y el Magenta Book de HM Treasury trata encargar ambas juntas como práctica estándar, porque
un resultado de impacto débil o nulo es ininterpretable por sí solo: no puede decir si la teoría
subyacente del programa era incorrecta, o si una buena teoría simplemente nunca se entregó
adecuadamente.

## Por qué es importante

Las evaluaciones gubernamentales han encontrado repetidamente ningún efecto medible de un programa
sin tener una evaluación de proceso que explique por qué, dejando a quienes encargan la evaluación
incapaces de distinguir "esta idea no funciona" (fallo de teoría) de "esta idea nunca se intentó
realmente de forma adecuada" (fallo de implementación). La guía del Medical Research Council sobre la
evaluación de proceso de intervenciones complejas, publicada en el BMJ en 2015 y ampliamente citada
junto al Magenta Book, formalizó la fidelidad, la dosis y el alcance como las cosas centrales que una
evaluación de proceso debe medir. Encargar una evaluación de impacto sin una evaluación de proceso
arriesga abandonar un diseño de programa genuinamente sólido porque se entregó a la mitad de la
población prevista con una fracción de la intensidad prevista; un error que quien construye sistemas
está bien situado para prevenir, porque la fidelidad de entrega es exactamente lo que los sistemas de
datos operativos pueden capturar casi en tiempo real.

## Las matemáticas

```
La evaluación de proceso pregunta:
 - ¿Se entregó a la población objetivo, con la dosis/intensidad
   planificada?
 - ¿Coincidió la entrega con el diseño del modelo lógico / teoría del
   cambio?
 - ¿Qué barreras o facilitadores afectaron a la entrega?
 Métodos: comprobaciones de fidelidad frente a umbrales predefinidos,
          estudios de caso, entrevistas, datos administrativos de
          entrega.

La evaluación de impacto pregunta:
 - ¿Qué cambió, y cuánto de ese cambio es atribuible al programa?
 Métodos: RCT, DiD, PSM, RDD — véase impact-evaluation-methods —
          frente a un contrafactual.

Diagnóstico combinado:
 Sin efecto  + fidelidad alta  → fallo de teoría: el propio modelo no
   produjo el resultado
 Sin efecto  + fidelidad baja  → fallo de implementación: el modelo
   nunca se probó adecuadamente
 Efecto encontrado + fidelidad alta → replicar con confianza
 Efecto encontrado + fidelidad baja → investigar más: el efecto puede
   ser frágil o específico del emplazamiento
```

## Ejemplo práctico

**Ayuntamiento (programa de crianza)**: una evaluación de impacto que usa diferencias en diferencias
encuentra un cambio de +2 puntos porcentuales en una medida de bienestar infantil, no estadísticamente
significativo. La evaluación de proceso, realizada en paralelo, encuentra que el programa alcanzó solo
a 210 de las 500 familias objetivo (42% de alcance), y de esas, solo 95 completaron el umbral de
fidelidad predefinido del 75% o más de sesiones asistidas: el 19% del alcance previsto originalmente.
Conclusión: el resultado de impacto débil es coherente con un fallo de implementación, no evidencia de
que el modelo del programa no funcione; la respuesta apropiada es corregir la vía de derivación que
causó la caída del 58%, no abandonar el diseño del programa.

**Organización benéfica (programa de alfabetización digital)**: una evaluación de impacto encuentra un
efecto fuerte (+18 puntos porcentuales en una puntuación de confianza digital), y una evaluación de
proceso paralela confirma una fidelidad del 92% al currículo planificado en los 12 emplazamientos de
entrega. Combinados, el financiador puede escalar el programa con confianza, porque se demuestra que
el efecto se mantiene de forma consistente en lugar de ser el producto de un único emplazamiento
inusualmente bueno.

## Conexión con la ingeniería de software

Los datos de evaluación de proceso son exactamente lo que los sistemas de entrega están bien situados
para capturar: asistencia frente al plan, dosis de sesión y caída en cada etapa de un embudo de
derivación o inscripción; el mismo análisis de embudo que quienes hacen ingeniería ya construyen para
funcionalidades de producto, aplicado en cambio al proceso de entrega de un programa social. Alimentar
las métricas de fidelidad y alcance a los gestores del programa casi en tiempo real, en lugar de
esperar a una evaluación de fin de subvención, permite corregir una vía de derivación rota a mitad del
programa en lugar de descubrirla solo una vez terminado el periodo de financiación. Véanse [los
métodos de evaluación de impacto](../impact-evaluation-methods/) para los diseños causales con los que
se empareja la evaluación de proceso, [la teoría del cambio](../theory-of-change/) y [el modelo
lógico](../logic-model/) para el diseño frente al que la evaluación de proceso comprueba la fidelidad,
y [la realización de beneficios](../benefits-realization/) para seguir la entrega hasta los resultados
que se prometieron.

## Errores habituales

- **Encargar solo una evaluación de impacto.** Un resultado nulo o débil no puede entonces
  interpretarse como fallo de teoría o fallo de implementación, que es precisamente la distinción que
  importa para decidir qué hacer a continuación.
- **Tratar la evaluación de proceso como un añadido menor.** Necesita el mismo rigor y los mismos
  criterios de fidelidad predefinidos que el diseño de impacto, o colapsa en anécdota cuando llegan los
  resultados.
- **Confundir "a tiempo y dentro del presupuesto" con "entregado según lo diseñado".** La evaluación
  de proceso comprueba la fidelidad al modelo —dosis, grupo objetivo, contenido—, no el estado de
  semáforo (RAG) de la gestión del proyecto.
- **No preregistrar los umbrales de fidelidad.** Decidir después de los hechos qué cuenta como "dosis
  suficiente" hace que cualquier explicación de un resultado de impacto decepcionante parezca una
  excusa a posteriori.

## Fuentes

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
