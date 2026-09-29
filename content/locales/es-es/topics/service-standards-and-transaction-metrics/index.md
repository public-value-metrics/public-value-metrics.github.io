# Estándares de servicio y métricas de transacción

El GOV.UK Service Standard es la lista de comprobación de 14 puntos del gobierno del Reino Unido para
construir y operar un servicio digital público, y viene emparejada con un pequeño conjunto obligatorio
de métricas de transacción cuantitativas —coste por transacción, tasa de finalización, adopción
digital y satisfacción del usuario— que los equipos deben publicar para todo servicio en producción del
gobierno central. Juntos, el estándar y las métricas son la especialización operativa del día a día de
los marcos más amplios de valor público y KPI de este repositorio, dirigida directamente a los equipos
de entrega de software.

## Por qué es importante

El Service Standard, mantenido en el manual de servicio de GOV.UK, exige que toda evaluación puntual
(alfa, beta, producción) de un servicio digital gubernamental demuestre —entre sus 14 puntos— que el
equipo comprende las necesidades de los usuarios, trabaja en un equipo multidisciplinar, itera y mejora
con frecuencia, y *evalúa herramientas, sistemas y formas de trabajar*. Históricamente esto convivía
con una Performance Platform pública donde cada servicio en producción publicaba sus datos de
transacción abiertamente; esa plataforma se ha retirado desde entonces, pero la obligación subyacente
de medir y publicar estas cuatro métricas centrales persiste a través de la guía de "medición del
éxito" del manual de servicio. La razón por la que esto difiere de un panel de KPI de software genérico
es que estas métricas se diseñaron explícitamente como un único modelo económico vinculado, no como
cuatro puntuaciones independientes: todo el caso de ahorro del gobierno digital —el Digital Efficiency
Report del Government Digital Service encontró que las transacciones digitales eran aproximadamente 20
veces más baratas que por teléfono y unas 50 veces más baratas que presencialmente para servicios
comparables de administración local— solo se materializa si la tasa de finalización se mantiene alta y
la adopción digital realmente aumenta, en lugar de simplemente añadir un canal barato junto a uno caro
sin cambios.

## Las matemáticas

```
Coste por transacción = coste total de funcionamiento del servicio /
                         número de transacciones completadas
Tasa de finalización   = transacciones completadas / transacciones
                         iniciadas × 100
Adopción digital       = transacciones del canal digital / transacciones
                         de todos los canales × 100
Satisfacción del usuario = % satisfechos + muy satisfechos, encuesta
                         de 5 puntos dentro del servicio

Ahorro por cambio de canal = volumen de transacciones × cambio de
                        adopción × (coste por transacción en el canal
                        antiguo − coste por transacción digital)

Coste de la demanda por fallos = (1 − tasa de finalización) ×
                        transacciones intentadas digitalmente × coste
                        del canal de respaldo que esos usuarios usan
                        en su lugar
```

## Ejemplo práctico

**Servicio ilustrativo de renovación de licencia del gobierno central**, 2 millones de
transacciones/año, actualmente 65% por teléfono (3,00 £/transacción) y 35% digital
(0,30 £/transacción), tasa de finalización del 80%. Un rediseño frente al Service Standard de 14
puntos eleva la adopción digital al 60% y la finalización al 92%:

```
Ahorro por cambio de adopción = 2.000.000 × 0,25 × (3,00 − 0,30) =
1.350.000 £/año

Coste de la demanda por fallos, antes:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = 420.000 £/año (quienes
  abandonan recurren al teléfono)

Coste de la demanda por fallos, después:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = 288.000 £/año

Ahorro neto por demanda de fallos = 420.000 − 288.000 = 132.000 £/año

Ahorro anual total ≈ 1.350.000 + 132.000 = 1.482.000 £/año
```

La aritmética deja explícito por qué la tasa de finalización no es una métrica secundaria: sin la
mejora del 80% al 92%, el ahorro por cambio de adopción se recuperaría parcialmente por la demanda de
fallos que devuelve directamente a los usuarios digitales frustrados al costoso canal telefónico.

## Conexión con la ingeniería de software

Estas cuatro métricas son un ejemplo práctico de panel de coste-consecuencia: una métrica de coste
mantenida separada de tres métricas de resultado/calidad, deliberadamente nunca colapsadas en una
única puntuación; la misma disciplina que se defiende en [los KPI del sector público](../public-sector-kpis/).
Para quienes hacen ingeniería, esto se descompone en trabajo concreto y asignable: la tasa de
finalización es un problema de instrumentación de embudo, y cada punto de abandono en el trayecto es,
en principio, localizable y corregible; el coste por transacción requiere una contabilidad de coste
unitario genuina que incluya los costes de asistencia por personal y del canal en papel, no solo el
gasto de alojamiento en la nube (véanse [el coste por transacción](../cost-per-transaction/) y [el
coste total de propiedad en TI gubernamental](../total-cost-of-ownership-in-government-it/)); y la
adopción digital es una métrica de equidad disfrazada de eficiencia: la ciudadanía que no puede o no
quiere cambiar de canal es desproporcionadamente mayor, discapacitada o digitalmente excluida, así que
el cierre agresivo de canales convierte un "ahorro" en un daño de acceso (véanse [la inclusión
digital](../digital-inclusion/) y [los ahorros por cambio de canal](../channel-shift-savings/)). El
propio estándar de 14 puntos es la especificación de proceso detrás de estas cifras; véase [el estándar
de servicio digital](../digital-service-standard/) para el estándar completo, y [las métricas de
satisfacción ciudadana](../citizen-satisfaction-metrics/) para cómo se relaciona la cifra de
satisfacción aquí con la medición de confianza más amplia.

## Errores habituales

- **Adopción ganada cerrando el canal alternativo**: cerrar una línea telefónica eleva
  aritméticamente el porcentaje de adopción digital mientras vuelca la demanda por fallos sobre
  cualquier canal que quede (a menudo una vía de digital asistido o presencial más cara); mida siempre
  el coste de todo el sistema, no solo el ratio.
- **Medir la tasa de finalización desde el paso dos del embudo**: empezar el recuento de "iniciados"
  después del primer punto genuino de abandono favorece la tasa de finalización y oculta la mayor
  pérdida corregible.
- **Coste por transacción que excluye el soporte de digital asistido**: un coste unitario solo digital
  que ignora el tiempo de personal dedicado a ayudar a los usuarios que no pueden autoservirse
  subestima el coste real del canal.
- **Publicar métricas sin una definición compartida entre servicios**: "transacción" y "completada"
  significan cosas distintas entre diferentes equipos de servicio a menos que las definiciones estén
  estandarizadas y versionadas, haciendo poco fiable la comparación entre servicios.

## Fuentes

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
