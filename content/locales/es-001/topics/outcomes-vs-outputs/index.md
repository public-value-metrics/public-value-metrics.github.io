# Resultados frente a productos

Un producto es el resultado directo y contable de una actividad: existe en el momento en que ocurre la
entrega, independientemente del efecto que tenga. Un resultado es el cambio que sigue para las
personas, el lugar o el sistema implicados. "500 personas asistieron a un taller de búsqueda de
empleo" es un producto: es cierto aunque ninguna de ellas encuentre trabajo. "Las perspectivas de
empleo de 500 personas mejoraron" es una afirmación de resultado, y requiere evidencia de cambio, no
solo evidencia de asistencia; la confusión que produce más informes de subvención engañosos que casi
cualquier otro error de medición en el sector.

## Por qué es importante

El Magenta Book de HM Treasury y financiadores como el National Lottery Community Fund exigen ambos
informes de resultado específicamente porque los productos son lo que los programas informan por
defecto: son baratos de contar, siempre están disponibles y siempre parecen positivos. Un recuento de
producto literalmente nunca puede bajar como consecuencia de que el programa falle: más sesiones
impartidas siempre es "más", mientras que un resultado puede revelar que un programa no está
funcionando. La National Audit Office ha criticado repetidamente a los programas gubernamentales por
informar de niveles de actividad como si fueran evidencia de éxito; un sistema de software que solo
facilita informar de productos refuerza esto por defecto, porque los productos no requieren
recopilación de datos de seguimiento y los resultados sí.

## Las matemáticas

No hay una fórmula, pero hay una prueba fiable para clasificar una métrica:

```
Prueba de producto: ¿es contable en el punto de entrega, cierto
                     incluso si el destinatario no se ve afectado?
Prueba de resultado: ¿requiere una comparación antes/después o
                      con/sin para ser significativo?

Si una cifra puede ser cierta con cero beneficio para nadie, es un
producto.
```

Esto se sitúa dentro de la cadena más amplia del [modelo lógico](../logic-model/) y depende de los
vínculos de resultado definidos en [una teoría del cambio](../theory-of-change/); convertir un
resultado en dinero usa los métodos de [el retorno social de la inversión](../social-return-on-investment/).

## Ejemplo práctico

**Ayuntamiento (apoyo al empleo)**: producto: 500 personas asistieron a talleres de búsqueda de
empleo. Resultado: en el seguimiento a 12 meses, 140 de esas 500 (28%) están en empleo sostenido (6
meses o más). Un grupo de comparación con características similares pero sin acceso al programa tiene
una tasa de empleo de línea base del 15% en el mismo periodo. Mejora neta del resultado: 28% − 15% =
13 puntos porcentuales, por lo que una estimación de 500 × 0,13 = 65 personas adicionales están
trabajando que de otro modo no lo estarían: el resultado atribuible, distinto tanto de la cifra de
asistencia de 500 como del recuento bruto de empleo de 140.

**Organización benéfica (organización benéfica de alfabetización)**: producto: 1200 sesiones de
lectura impartidas a 300 niños. Resultado: la edad de lectura media mejoró 8 meses en un periodo de 6
meses, frente a una línea base de progresión natural esperada de 6 meses en 6 meses. Ganancia neta del
resultado: 8 − 6 = 2 meses de mejora adicional en la edad de lectura por niño atribuible al programa,
no la cifra completa de 8 meses.

## Conexión con la ingeniería de software

Los registros de eventos y los sistemas transaccionales instrumentan los productos casi
automáticamente —vistas de página, sesiones, tickets cerrados, citas reservadas— porque los genera el
sistema al hacer su trabajo. Los resultados requieren un modelo de datos que capture al mismo
individuo en un momento posterior frente a una línea base o comparación, que hay que diseñar
deliberadamente: encuestas de seguimiento, registros administrativos vinculados o una cohorte de
comparación. Una herramienta de informes que solo soporte lo primero empujará silenciosamente a una
organización hacia informes de solo productos, sin importar lo que pidiera el financiador. Véase [el
modelo lógico](../logic-model/) para dónde se sitúan los resultados en la cadena de responsabilidad,
[coste por resultado](../cost-per-outcome/) para convertir esta distinción en una métrica de coste
unitario, y [los KPI del sector público](../public-sector-kpis/) para el patrón más amplio de
selección de métricas.

## Errores habituales

- **Informar de productos como si fueran resultados.** "500 personas asistieron" implica beneficio sin
  demostrarlo; etiquete la asistencia explícitamente como un producto.
- **Ausencia de línea base o grupo de comparación.** Una cifra de resultado sin contrafactual —véase
  [análisis contrafactual](../counterfactual-analysis/)— no puede separar el efecto del programa de lo
  que habría ocurrido de todos modos.
- **Optimizar para la métrica financiada.** Cuando la financiación está vinculada al volumen de
  producto, los equipos de entrega maximizan racionalmente la asistencia sobre el cambio duradero, un
  modo de fallo de la ley de Goodhart.
- **Lavado de resultados.** Reetiquetar una métrica de producto con lenguaje que suena a resultado
  ("resultados de compromiso: 500 asistentes") sin ninguna medición de seguimiento detrás.

## Fuentes

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
