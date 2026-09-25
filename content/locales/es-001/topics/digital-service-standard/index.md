# Estándar de servicio digital

El GOV.UK Service Standard es la puerta que todo servicio digital del gobierno central debe cruzar
antes de poder entrar en producción: 14 puntos publicados, evaluados por un panel independiente al
final de cada fase de entrega. Es el mecanismo que convierte "construir buenos servicios públicos" de
un eslogan en una decisión de aprobado/suspenso con un rastro documental, y el descendiente directo
del mandato de "lo digital por defecto" de la Government Digital Strategy de 2012.

## Por qué es importante

Antes de que existiera el Service Standard, el fracaso de un proyecto de TI gubernamental rara vez era
visible hasta el lanzamiento, y rara vez atribuible a una decisión que alguien pudiera señalar. La
Government Digital Strategy de 2012 comprometió a los departamentos a rediseñar los 25 servicios
transaccionales de cara al público con mayor volumen como "digitales por defecto", y respaldó ese
compromiso con un mecanismo de cumplimiento: los servicios no podían entrar en producción en GOV.UK
sin superar una evaluación de servicio frente a lo que entonces era un estándar de 26 puntos
(consolidado a 18 en 2019, y ahora el estándar de 14 puntos vigente hoy, que cubre tres grupos:
comprender las necesidades de los usuarios, proporcionar un buen servicio y usar la tecnología
adecuada). Una evaluación de servicio es un evento real: un panel de evaluadores del GDS o del
departamento revisa la evidencia, interroga al equipo y emite un veredicto de cumplido, no cumplido o
"no cumplido" para cada punto, publicado en la página de evaluación del servicio. Suspender una
evaluación bloquea el paso del servicio de beta privada a beta pública, o de beta a producción: es una
puerta real, no una revisión.

## Las matemáticas

El Service Standard es un marco, no una fórmula, pero funciona como una estructura de decisión por
etapas:

```
Descubrimiento → Evaluación alfa → Evaluación beta → Evaluación en producción
                  (no obligatoria    (obligatoria antes  (obligatoria antes de
                   para todos los     del lanzamiento en   quitar la etiqueta
                   servicios, pero    beta pública)         "beta" y cerrar el
                   recomendada)                             canal antiguo)

Cada evaluación: evidencia + entrevista al equipo → veredicto del panel
  por punto: Cumplido / Parcialmente cumplido / No cumplido
Resultado general: Aprobado / Aprobado con condiciones / Suspendido
  (requiere reevaluación)

Coste de un suspenso ≈ coste del siguiente ciclo de sprint para
subsanar + retraso en [los ahorros por cambio de canal](../channel-shift-savings/)
que el servicio estaba financiado para entregar
```

El punto 10 ("definir cómo es el éxito, y publicar datos de rendimiento") es lo que alimenta [el coste
por transacción](../cost-per-transaction/) y [los estándares de servicio y métricas de
transacción](../service-standards-and-transaction-metrics/): el estándar exige la medición, no solo el
servicio.

## Ejemplo práctico

**Servicio de solicitud de vivienda de un ayuntamiento**: un equipo municipal llega a su evaluación
beta con un servicio que cumple 11 de los 14 puntos, pero falla el punto 5 ("asegurarse de que todo el
mundo pueda usar el servicio") porque no existe una vía de digital asistido para solicitantes sin
acceso a internet, y falla el punto 9 porque los datos personales se registran en texto plano en las
trazas de error de la solicitud.

```
Coste directo del suspenso:
  Turno de reevaluación: espera de 6-8 semanas para el siguiente panel
  disponible
  Sprint de subsanación: 2 desarrolladores × 3 semanas × 550 £/día ≈
  34.650 £
  Diseño del canal de digital asistido: 1 investigador × 2 semanas ≈
  5.000 £

Coste del retraso: se preveía que el servicio desplazara el 40% de las
18.000 consultas anuales de vivienda de llamadas telefónicas de 8,50 £
a transacciones digitales de 0,20 £
  = 7.200 × (8,50 £ − 0,20 £) = 59.760 £/año no percibidos, prorrateado
    para el retraso de ~2 meses ≈ 9.960 £

Coste total de la evaluación suspendida ≈ 49.610 £
```

El objetivo de la aritmética no es la precisión: es que una evaluación suspendida tiene un precio real
y calculable, que es precisamente la razón por la que esta puerta tiene dientes.

## Conexión con la ingeniería de software

Para quienes hacen ingeniería, el estándar se lee tanto como una lista de comprobación de arquitectura
y entrega como un documento de política: el punto 11 ("elegir las herramientas y la tecnología
adecuadas") y el punto 12 ("hacer abierto el código fuente nuevo") son decisiones de ingeniería
directas, y el punto 14 ("operar un servicio fiable") exige los mismos objetivos de nivel de servicio
(SLO) y procesos de incidencias que cualquier sistema en producción necesita. Es el marco general de
este capítulo: [el coste por transacción](../cost-per-transaction/) y [los ahorros por cambio de
canal](../channel-shift-savings/) son lo que el estándar intenta proteger financieramente, [la
inclusión digital](../digital-inclusion/) es lo que el punto 5 existe para garantizar, y los
componentes de [gobierno como plataforma](../government-as-a-platform/) (GOV.UK Notify, Pay, One
Login) satisfacen el punto 13 ("usar y contribuir a estándares abiertos, componentes comunes y
patrones") en gran medida por defecto. Véase también [construir frente a comprar en el
gobierno](../build-vs-buy-in-government/) para cómo se traduce el punto de "herramientas adecuadas" en
decisiones de contratación.

## Errores habituales

- **Tratar la evaluación como una casilla de cumplimiento del día del lanzamiento**: los equipos que
  leen por primera vez los 14 puntos una semana antes de su evaluación beta suspenden de forma
  predecible; el estándar está pensado para dar forma a las decisiones desde el descubrimiento en
  adelante, no para auditarlas retrospectivamente.
- **Evaluar el prototipo, no el servicio**: una demostración pulida puede superar una revisión que la
  versión en producción, con inclusión de digital asistido y gestión de incidencias, del servicio no
  superaría; los evaluadores deben sondear esta brecha, pero los servicios menores autocertificados a
  menudo se la saltan.
- **Sin reevaluación antes de escalar**: un servicio evaluado con un despliegue del 5% no permanece
  automáticamente conforme al llegar al 100%; la carga, la demanda por fallos y los usuarios de casos
  extremos cambian todos ellos.
- **Confundir el Service Standard con un sistema de diseño**: los componentes del GOV.UK Design System
  satisfacen algunos puntos (coherencia, accesibilidad), pero el estándar también cubre la estructura
  del equipo, la práctica ágil y la ética de datos; un servicio con buen estilo aún puede fallar en los
  puntos 2, 6 o 9.

## Fuentes

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
