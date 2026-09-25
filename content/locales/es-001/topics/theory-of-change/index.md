# Teoría del cambio

Una teoría del cambio es una vía causal explícita, mapeada hacia atrás, desde un objetivo a largo
plazo hasta las precondiciones y actividades que deben existir para que se logre, junto con los
supuestos que conectan cada eslabón. Se construye empezando por el resultado que se quiere y
preguntando "¿qué tiene que ser cierto inmediatamente antes de esto, para que esto ocurra?",
repetidamente, hasta llegar a actividades que realmente se pueden entregar; que es la dirección
opuesta a [un modelo lógico](../logic-model/), y por qué ambos son complementarios en lugar de
intercambiables.

## Por qué es importante

El método de mapeo hacia atrás fue formalizado por el Center for Theory of Change y ActKnowledge,
basándose en el trabajo de la evaluadora Carol Weiss sobre hacer explícitos los supuestos de un
programa para que pudieran comprobarse en lugar de darse por sentados. La evaluación de subvenciones
del Reino Unido ha absorbido esto directamente: el Magenta Book de HM Treasury trata una teoría del
cambio como el punto de partida de cualquier diseño de evaluación, y financiadores como el National
Lottery Community Fund exigen a quienes solicitan que articulen una antes de financiar una propuesta.
La razón por la que esto importa a quien hace ingeniería de software es que una teoría del cambio es el
documento que debería determinar qué necesita medir su sistema: si la cadena causal dice "la adopción
de prestaciones depende de que los solicitantes reciban un cálculo personalizado", esa es una
afirmación comprobable que su producto puede instrumentarse para evidenciar, o refutar.

## Las matemáticas

Una teoría del cambio es estructural más que numérica. Cada eslabón debería llevar tanto un supuesto
como un indicador que pudiera mostrar que el supuesto es falso:

```
Resultado a largo plazo (el objetivo)
  ↑ precondición + supuesto + indicador
Resultado intermedio N
  ↑ precondición + supuesto + indicador
  ...
Resultado intermedio 1
  ↑ precondición + supuesto + indicador
Actividades / intervenciones
  ↑ recursos comprometidos
Insumos
```

Esta estructura alimenta directamente [los métodos de evaluación de impacto](../impact-evaluation-methods/),
que existen para comprobar si los supuestos de cada eslabón realmente se sostienen, y [el análisis
contrafactual](../counterfactual-analysis/), que comprueba si el resultado a largo plazo habría
ocurrido de todos modos.

## Ejemplo práctico

**Ayuntamiento (prevención de personas sin hogar)**: el resultado a largo plazo son tenencias
sostenidas a 12 meses para hogares en riesgo de desahucio.

- Precondición: los hogares tienen un plan de pago de atrasos realista y asequible.
  Supuesto: los planes negociados por gestores de casos son más sostenibles que los ordenados
  judicialmente.
  Indicador: % de planes todavía activos a los 6 meses.
- Precondición: los hogares reclaman las prestaciones a las que tienen derecho.
  Supuesto: una calculadora digital de prestaciones aumenta las reclamaciones correctas frente a los
  formularios en papel.
  Indicador: tasa de precisión de reclamación, comparada antes/después de la implantación de la
  herramienta.
- Actividades: cribado por gestores de casos, calculadora digital de prestaciones, negociación de
  atrasos.

En una cohorte piloto de 120 hogares, el supuesto de la calculadora de prestaciones se sostuvo para 102
hogares (85%) que después reclamaron correctamente, evidenciado por una evaluación de proceso
posterior, dando al equipo del programa evidencia para ese eslabón específico en lugar de una única
afirmación de extremo a extremo sobre personas sin hogar evitadas.

**Organización benéfica (tutoría juvenil)**: el resultado a largo plazo es una reducción de la
exclusión escolar. Precondiciones mapeadas hacia atrás: mejor regulación emocional → relación
individual de confianza con un tutor → contacto semanal consistente durante dos trimestres. La teoría
deja explícito que no cumplir la precondición de "contacto semanal consistente" (digamos, por rotación
de tutores) predice que el resultado no se seguirá, que es una afirmación comprobable y refutable en
lugar de una esperanza.

## Conexión con la ingeniería de software

Una teoría del cambio debería dar forma al modelo de datos de un producto antes de construir un solo
panel: identifique qué eslabones necesitan un indicador, e instrumente específicamente para esos, en
lugar de recurrir por defecto a lo que sea más fácil de registrar. También disciplina las conversaciones
de hoja de ruta: una funcionalidad que no se corresponde con ningún eslabón de la cadena no
evidentemente merece la pena construirse. Véase [el modelo lógico](../logic-model/) para la cadena de
responsabilidad orientada hacia delante construida una vez acordada la teoría, [el retorno social de la
inversión](../social-return-on-investment/) para un método que depende de una teoría del cambio para
definir el alcance de qué resultados valorar, y [resultados frente a productos](../outcomes-vs-outputs/)
para la distinción de la que dependen los eslabones de resultado intermedio.

## Errores habituales

- **Confundirla con un modelo lógico.** Una teoría del cambio es causal y explicativa (por qué creemos
  que esto funciona); un modelo lógico es secuencial y descriptivo (qué ocurre en qué orden). Producir
  solo uno deja faltando o bien el "por qué" o el rastro de responsabilidad.
- **Dejar los supuestos implícitos.** Todo el valor del mapeo hacia atrás es sacar a la luz supuestos
  comprobables; una teoría del cambio que solo enumera casillas y flechas sin nombrar qué podría hacer
  falso cada eslabón es decoración.
- **Construirla una vez y archivarla.** Una teoría del cambio escrita para una solicitud de
  financiación y nunca revisada deja de ser útil en el momento en que la evidencia empieza a contradecir
  un eslabón.
- **Saltarse la aportación de las partes interesadas.** Una teoría del cambio construida enteramente
  por comisionadores sin aportación del personal de primera línea o de los beneficiarios tiende a
  codificar supuestos en los que nadie que preste el servicio realmente cree.

## Fuentes

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
