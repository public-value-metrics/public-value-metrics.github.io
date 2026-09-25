# Realización de beneficios

La gestión de la realización de beneficios es la disciplina de identificar, establecer una línea
base, hacer seguimiento y *evidenciar* que los beneficios prometidos en un análisis de viabilidad se
materializaron realmente tras la puesta en marcha. En la inversión pública del Reino Unido, esta
disciplina reside dentro del Modelo de Cinco Casos del Green Book de HM Treasury y en la guía
específica de gestión de beneficios de la Infrastructure and Projects Authority (IPA); sin ella, "el
sistema ahorró treinta minutos por solicitud a los gestores de casos" sigue siendo para siempre una
afirmación sin auditar.

## Por qué es importante

Los análisis de viabilidad son promesas; la realización de beneficios es la auditoría. El Green Book
exige que todo caso de gasto supere cinco pruebas —estratégica, económica, comercial, financiera y
de gestión— y el caso de gestión debe establecer cómo se realizarán los beneficios *antes de la
aprobación*: responsables designados, líneas base capturadas y fechas de medición fijadas. La guía
de la Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for
Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>),
existe porque los propios informes de cartera de la IPA sobre la Government Major Projects Portfolio
han identificado repetidamente la confianza en la entrega y la realización de beneficios como
debilidades recurrentes en los grandes programas. Un proyecto puede cerrarse "a tiempo y dentro del
presupuesto" respecto a sus hitos de entrega y, aun así, no lograr realizar los beneficios que
justificaron el gasto en primer lugar; una distinción que la guía de la IPA trata como el objetivo
central de toda la disciplina.

## Las matemáticas

```
Tasa de realización = beneficios realizados / beneficios previstos   (por beneficio, por periodo)

Mecánica que la hace computable:
  línea base capturada ANTES de la puesta en marcha (si no, la diferencia
  no es medible)
  cada beneficio: responsable designado, métrica, fuente de datos,
  calendario de medición
  previsión ajustada por sesgo de optimismo en la valoración (mandato
  del Green Book)
  beneficios clasificados como liberadores de efectivo / liberadores de
  capacidad / cualitativos, con seguimiento e informe separados
```

## Ejemplo práctico

**Ayuntamiento**: el análisis de viabilidad de un portal digital de solicitudes urbanísticas prometía,
por año: 300 000 £ de reducción en gastos de impresión y correo postal (efectivo), 4500 horas de
personal técnico liberadas (capacidad), y una mejora en la satisfacción de los solicitantes
(cualitativo). Doce meses después de la puesta en marcha:

```
Beneficio          Previsto    Realizado   Tasa   Evidencia
Ahorro en efectivo  300.000 £   210.000 £   70%    libro contable frente al año base
Horas de personal   4.500       3.200       71%    muestra de estudio de tiempos y movimientos
Satisfacción        +8pp        +11pp       138%   datos de encuesta a solicitantes

Acciones derivadas de la revisión (el objetivo de la realización de
beneficios): el déficit en efectivo se rastreó hasta dos áreas de
servicio que aún procesaban solicitudes en papel por excepción →
cerrar la vía de excepción; la corrección por sesgo de optimismo del
siguiente análisis de viabilidad se elevó del 10% al 25% en base al
error de previsión de este caso.
```

Una tasa de realización del 70% no es un fracaso: es conocimiento que permite calibrar mejor la
siguiente previsión. Un caso no medido habría reclamado un 100% para siempre, y el equipo financiero
no habría tenido base alguna para cuestionarlo.

## Conexión con la ingeniería de software

Las organizaciones de ingeniería aprueban habitualmente inversiones en plataformas y herramientas
sobre la base de un beneficio previsto y casi nunca las auditan después: exactamente la patología que
la gestión de la realización de beneficios existe para corregir. La versión ligera: toda propuesta
que supere un umbral de materialidad designa un responsable del beneficio, una métrica de línea base
y una fecha de revisión fija (habitualmente seis meses después de la puesta en marcha), y las tasas
de realización de propuestas anteriores deberían moderar cuánto confía la organización en la próxima
previsión de un equipo o proveedor. Esto cierra el círculo con [la valoración del Green Book](../green-book-appraisal/),
que establece la previsión que esta disciplina audita, y es la misma lógica que subyace al hallazgo
ampliamente difundido de que una gran mayoría de los pilotos de IA generativa no muestra retorno
medible; véase [la productividad de la IA en el sector público](../ai-productivity-in-the-public-sector/),
porque los pilotos que *sí* generaron valor fueron, casi sin excepción, los que tenían una línea de
beneficio designada y rastreable desde el principio. También depende de distinguir lo que realmente
se entregó de lo que realmente se realizó; véase [resultados frente a productos](../outcomes-vs-outputs/).

## Errores habituales

- **Ausencia de línea base previa a la puesta en marcha**: la omisión fatal e irreparable; sin ella,
  nunca se puede calcular ninguna tasa de realización, solo afirmarla.
- **Orfandad del beneficio**: un beneficio sin responsable designado no tiene a nadie que recopile los
  datos, y toda revisión de cartera lo informa por defecto como "en general en marcha".
- **Beneficios contados por duplicado en una cartera de programas**: dos proyectos que reclaman ambos
  la misma capacidad liberada de personal técnico como su beneficio; mantenga un único registro de
  beneficios en toda la cartera para detectar esto.
- **Teatro de la realización**: medir y reportar de forma destacada las victorias cualitativas fáciles
  mientras las líneas de efectivo y capacidad quedan silenciosamente sin examinar.
- **Confundir entrega con realización**: que un proyecto cierre sus hitos "a tiempo y dentro del
  presupuesto" no dice nada sobre si el beneficio previsto llegó realmente a producirse; la guía de la
  IPA trata esto como dos preguntas separadas con dos vías de evidencia separadas.

## Fuentes

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
