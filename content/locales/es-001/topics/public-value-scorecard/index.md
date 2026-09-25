# Cuadro de mando de valor público

El cuadro de mando de valor público adapta el cuadro de mando integral (balanced scorecard) de 1992
de Robert Kaplan y David Norton —construido para empresas que optimizan el beneficio a través de las
perspectivas financiera, de cliente, de proceso interno y de aprendizaje y crecimiento— a
organizaciones cuyo resultado final es una misión, no un margen. Obliga a un organismo público a
informar del rendimiento a través de varias dimensiones irreducibles a la vez, en lugar de colapsarlo
todo en una única cifra que oculta las compensaciones.

## Por qué es importante

El argumento original de Kaplan y Norton, en la Harvard Business Review, era que una única métrica
financiera es un indicador rezagado que no dice nada sobre *por qué* el rendimiento cambiará el
próximo trimestre. En el sector privado, la solución fueron cuatro perspectivas vinculadas. En el
gobierno, el "triángulo estratégico" de Mark Moore (de *Creating Public Value*, 1995) proporciona la
estructura equivalente: un servicio debe entregar simultáneamente **valor público** (el resultado de
la misión), mantener **legitimidad y apoyo** (respaldo político y público) y ser **operativamente
viable** (entregable con los recursos y la capacidad realmente disponibles). *Balanced Scorecard:
Step-by-Step for Government and Nonprofit Agencies* (2003) de Paul Niven es el manual del profesional
para traducir las cuatro casillas de Kaplan y Norton a este triángulo, típicamente reetiquetando
"financiero" como "gestión responsable de recursos", situando la "misión" arriba en lugar del "valor
para el accionista" abajo, y tratando las perspectivas de cliente y de parte interesada como iguales
en lugar de subordinadas al beneficio. La razón por la que esto importa a un equipo de entrega es que
un servicio digital público juzgado solo por una métrica financiera o de eficiencia (el coste por
transacción, digamos) infrainvertirá sistemáticamente en las dimensiones de legitimidad y resultado
que esa métrica financiera no puede ver.

## Las matemáticas

El cuadro de mando de valor público es un marco, no una fórmula, pero su estructura es fija y merece
reproducirse exactamente:

```
Perspectiva            Pregunta del sector público                Indicador de ejemplo
--------------------------------------------------------------------------------
Misión / resultados    ¿Estamos logrando el valor público para    Medida de resultado
                        el que existimos?                         poblacional (véase
                                                                    outcomes-vs-outputs)
Gestión responsable     ¿Estamos usando el dinero público de       Coste por resultado,
  de recursos           forma eficiente y dentro de los límites    desviación presupuestaria
                        autorizados?
Cliente / usuario       ¿Pueden los usuarios y la ciudadanía        Tasa de finalización,
                        acceder al servicio y beneficiarse de él?  satisfacción
Legitimidad / apoyo     ¿Siguen respaldándonos los mandantes        Métricas de confianza,
                        políticos, los organismos de supervisión   hallazgos de auditoría,
                        y el público?                              quejas confirmadas
Proceso interno /       ¿Tenemos la capacidad y el proceso para     Rotación de personal,
  aprendizaje           seguir mejorando?                          tiempo de ciclo, antigüedad
                                                                    del atraso

Un cuadro de mando defendible informa de 3-5 indicadores por
perspectiva, elegidos de modo que ninguna perspectiva individual pueda
manipularse sin que el daño aparezca en otra.
```

## Ejemplo práctico

**Departamento de asistencia social de adultos de un ayuntamiento**: un cuadro de mando para un
servicio de reautonomía (apoyo a corto plazo para ayudar a las personas a recuperar la independencia
tras una estancia hospitalaria) informa de lo siguiente:

```
Misión:        el 68% de los usuarios del servicio ya no necesitan
                atención continua tras 6 semanas (objetivo 65%)
Gestión de recursos: coste por episodio de reautonomía completado =
                1850 £ (supuesto presupuestario 2000 £)
Cliente:       satisfacción del usuario 82%, espera media para el
                inicio del servicio 4,1 días
Legitimidad:   3 quejas confirmadas por cada 1000 episodios; el
                consejo de salvaguarda de adultos califica el
                servicio como "bueno"
Proceso:       tasa de vacantes de personal 14%, carga de casos media
                23 (límite seguro de carga de casos: 25)
```

Leídas de forma aislada, las cifras de misión y gestión de recursos parecen una historia de éxito
sencilla: por debajo del presupuesto y por encima del objetivo de resultado. Leídas junto a la fila de
proceso, la tasa de vacantes del 14% frente a un límite de carga de casos de 25 muestra que el buen
resultado se está comprando funcionando cerca de niveles de personal inseguros; una advertencia que la
cifra de misión por sí sola nunca sacaría a la luz, y exactamente el modo de fallo al que invita un KPI
de una sola perspectiva (véase [los KPI del sector público](../public-sector-kpis/)).

## Conexión con la ingeniería de software

Para un equipo que construye un panel interno o de cara al público, el cuadro de mando es un argumento
directo contra un único widget de "puntuación de salud": construya un panel por perspectiva, y resista
la presión de producto para sintetizarlos en un semáforo, porque el paso de síntesis es precisamente
donde se destruye la información de compensación. También se corresponde claramente con las
estructuras de OKR de los equipos de producto: un OKR de misión sin un OKR de gestión de recursos o de
proceso emparejado reproduce el modo de fallo de métrica única contra el que escribían Kaplan y Norton
en 1992. Véase [valor público](../public-value/) para la teoría subyacente de Moore sobre lo que la
casilla de "misión" debería realmente contener, y [las métricas de confianza y
legitimidad](../trust-and-legitimacy-metrics/) para cómo poblar la perspectiva de legitimidad con
indicadores reales y con fuente en lugar de un indicador indirecto que nadie puede defender.

## Errores habituales

- **Colapsar el cuadro de mando en una sola puntuación**: promediar cuatro perspectivas en una única
  cifra reintroduce exactamente el problema —una mala puntuación de legitimidad enmascarada por una
  buena puntuación de gestión de recursos— que el cuadro de mando existe para prevenir.
- **Copiar la perspectiva "financiera" del sector privado sin cambios**: la perspectiva de gestión de
  recursos de un organismo público trata sobre mantenerse dentro de presupuestos autorizados, a menudo
  protegidos, no sobre maximizar ingresos; la reetiquetación de Niven no es cosmética.
- **Elegir indicadores que el equipo que posee el cuadro de mando puede mover unilateralmente**: un
  indicador de legitimidad obtenido del mismo equipo al que juzga (la gestión autodeclarada de quejas,
  por ejemplo) no es evidencia independiente.
- **Construir el cuadro de mando una vez y no revisar nunca los pesos o los indicadores**: Kaplan y
  Norton pretendían una revisión estratégica anual; un cuadro de mando congelado durante años se aleja
  de la misión para la que se construyó seguirlo.

## Fuentes

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
