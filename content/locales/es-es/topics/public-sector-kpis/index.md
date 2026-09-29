# KPI del sector público

Un indicador clave de rendimiento (KPI) es una medida elegida y seguida que representa si un servicio
público está haciendo bien su trabajo. En el gobierno, la elección de un KPI nunca es neutral: como
los KPI se vinculan a presupuestos, tablas comparativas y carreras profesionales, el acto de
seleccionar uno da forma al comportamiento de todos los que están más abajo en la cadena, a menudo más
que la propia política que creó el servicio.

## Por qué es importante

La observación de Charles Goodhart de 1975 sobre la política monetaria —popularizada después por
Marilyn Strathern como "cuando una medida se convierte en un objetivo, deja de ser una buena medida"—
es la advertencia individual más importante en la gestión del rendimiento del sector público. Un KPI
elegido para *describir* un sistema empieza a *distorsionar* ese sistema en el momento en que se
vincula a él la financiación, el salario o la supervivencia política. La ilustración canónica son los
tiempos de respuesta de las ambulancias del NHS: cuando el objetivo de respuesta de Categoría A de
ocho minutos se volvió vinculante, se demostró que algunas fideicomisos "apilaban" ambulancias justo
fuera del reloj de tiempo de respuesta, o reclasificaban llamadas, para alcanzar la cifra sin cambiar
los resultados de los pacientes. La guía de la National Audit Office del Reino Unido sobre cómo elegir
y usar indicadores de rendimiento —expuesta a lo largo de sus informes de relación calidad-precio y su
marco "Performance Measurement by Regulators" y "Choosing the Right FABRIC" (Adecuado al propósito,
Apropiado, Equilibrado, Robusto, Integrado, Coste-efectivo)— existe precisamente porque los
departamentos seguían eligiendo indicadores fáciles de reportar en lugar de indicadores difíciles de
manipular. Quien hace ingeniería de software y lanza el panel frente al que se juzgará a un ministro o
director está, lo pretenda o no, diseñando la estructura de incentivos de una institución pública.

## Las matemáticas

El diseño de KPI es un tema con forma de marco, pero la *evaluación* de un KPI candidato es una lista
de comprobación repetible, no una fórmula:

```
Para cada KPI candidato, puntúe frente a:
  Adecuado al propósito  — ¿mide el resultado, o un indicador
                            indirecto a varios pasos de distancia?
  Apropiado      — ¿pertenece a las personas que realmente pueden
                    influir en él?
  Equilibrado    — ¿está emparejado con una contramétrica que detecte
                    la manipulación?
  Robusto        — ¿puede sobrevivir a una auditoría, o es
                    autodeclarado y no verificable?
  Integrado      — ¿encaja con el conjunto más amplio, o empuja contra
                    otro KPI?
  Coste-efectivo — ¿recopilarlo cuesta más que la decisión que informa?

División entre adelantado y rezagado:
  Indicador adelantado  → predice el resultado futuro, pero a menudo
                           es manipulable (p. ej., llamadas
                           respondidas en <60 s)
  Indicador rezagado  → confirma que el resultado ocurrió, pero llega
                         demasiado tarde para orientar (p. ej.,
                         encuesta de satisfacción anual)
  Un conjunto de KPI defendible empareja al menos uno de cada tipo por
  objetivo.
```

## Ejemplo práctico

**Fideicomiso de ambulancias**: un fideicomiso informa de un KPI de tiempo de respuesta de Categoría A
(peligro de muerte) de "el 75% de las llamadas se responden en 8 minutos". En un trimestre, llegan 6000
llamadas de Categoría A; 4500 se atienden en 8 minutos, dando un 75,0%: aparentemente dentro del
objetivo.

```
KPI destacado = 4.500 / 6.000 × 100 = 75,0%  (cumple el umbral del 75%)
```

Pero una auditoría de Goodhart añade una contramétrica: el tiempo de respuesta medio para el decil más
lento de llamadas.

```
Tiempo de respuesta medio del decil más lento = 34 minutos (subido
desde 19 minutos dos años antes)
```

El fideicomiso está alcanzando el objetivo mientras la cola —las llamadas con más probabilidades de
ser genuinamente de peligro de muerte una vez que el triaje es imperfecto— ha empeorado mucho, porque
las tripulaciones se priorizan hacia las llamadas cercanas al límite de los 8 minutos en lugar de hacia
la urgencia clínica. El KPI único contaba una historia falsa; el KPI emparejado contaba la verdadera.

## Conexión con la ingeniería de software

Quienes construyen paneles de rendimiento para el gobierno están, funcionalmente, diseñando la API de
incentivos de la organización. Implicaciones prácticas: instrumente el *denominador* con el mismo
rigor que el numerador (un KPI reportado como un porcentaje desnudo invita a la manipulación del
denominador; véase [coste por transacción](../cost-per-transaction/) para la misma trampa en los
servicios digitales); construya contramétricas en el mismo panel en lugar de en un informe separado
que nadie lee, para que la manipulación sea visible en el punto de decisión; y versione la definición
del KPI, porque una redefinición silenciosa (cambiar qué cuenta como una "llamada", un "caso" o una
"finalización") es funcionalmente equivalente a cambiar el objetivo sin anunciarlo. [Un cuadro de
mando de valor público](../public-value-scorecard/) es una forma estructurada de evitar que un único
KPI se lea de forma aislada, y [la responsabilidad basada en resultados](../outcomes-based-accountability/)
es la disciplina de elegir KPI a nivel poblacional que un único equipo no puede distorsionar
unilateralmente.

## Errores habituales

- **Elegir la métrica fácil de recopilar en lugar de la significativa**: el tiempo de respuesta a la
  llamada es trivial de registrar; si la llamada resolvió el problema de la ciudadanía no lo es, pero
  solo la segunda es el resultado. Resista la tendencia por defecto hacia lo que el sistema ya emite.
- **Sin contramétrica**: cualquier KPI vinculado a dinero o reputación se manipulará en el margen;
  lánzelo con una métrica emparejada que detecte el vector de manipulación probable antes de
  publicarlo.
- **Redefinir la métrica sin un registro de cambios**: sustituir "llamadas recibidas" por "llamadas
  atendidas" para favorecer una tendencia destruye la credibilidad de la serie temporal en el momento
  en que se descubre; publique siempre un registro de cambios de definiciones junto a las cifras.
- **Confundir actividad con resultado**: contar las inspecciones completadas es un producto; contar
  los locales que alcanzan el cumplimiento se acerca más al resultado (véase [resultados frente a
  productos](../outcomes-vs-outputs/)).

## Fuentes

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
