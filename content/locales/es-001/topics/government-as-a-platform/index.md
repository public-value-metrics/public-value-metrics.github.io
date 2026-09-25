# Gobierno como plataforma (Government as a Platform, GaaP)

Gobierno como plataforma es la estrategia de construir componentes compartidos y reutilizables —un
servicio de notificaciones, un servicio de pagos, un servicio de identidad— una sola vez, de forma
centralizada, para que cientos de servicios gubernamentales individuales los consuman en lugar de que
cada uno construya el suyo propio. Replantea la infraestructura digital pública como un problema de
economía de plataformas: el valor no está en ninguna integración concreta, está en que el coste
marginal del *siguiente* equipo que la adopta tiende a cero.

## Por qué es importante

El GDS expuso la estrategia formalmente en su publicación de 2015 "Government as a Platform",
argumentando que el gobierno había estado construyendo las mismas capacidades —cobro de pagos,
notificación al usuario, verificación de identidad, búsqueda de direcciones— por separado, servicio
tras servicio, cada uno con su propia carga de contratación, evaluación de seguridad y soporte
continuo. La alternativa era un pequeño número de plataformas compartidas, construidas con un
estándar alto una sola vez y reutilizadas en todas partes: GOV.UK Notify para enviar correos
electrónicos, mensajes de texto y cartas, GOV.UK Pay para cobrar pagos en línea, y GOV.UK One Login
(sucesor del anterior programa de identidad GOV.UK Verify) para la verificación de identidad. La
escala que han alcanzado estas plataformas es la evidencia más clara de que la estrategia funcionó:
GOV.UK Pay ha procesado más de 10 000 millones de libras en transacciones en aproximadamente 1800
servicios individuales —y donde tardó aproximadamente cuatro años en procesar sus primeros 1000
millones de libras, ahora procesa esa misma cantidad en unos cinco meses—, mientras que GOV.UK Notify
ha enviado más de 9000 millones de mensajes en nombre de más de 1500 organizaciones gubernamentales.
Cada uno de esos servicios adoptantes evitó construir, asegurar y mantener su propia pasarela de pago
o canal de mensajería.

## Las matemáticas

```
Coste de construcción por servicio (sin plataforma) = N servicios ×
  coste de construir, evaluar en seguridad y ejecutar un sistema de
  pago/notificación/identidad

Coste de la plataforma = coste fijo de construcción de la plataforma
              + coste marginal por servicio adoptante (integración,
                configuración, soporte continuo del equipo de plataforma)

La reutilización alcanza el punto de equilibrio cuando:
  coste de construcción de la plataforma < N × (coste de construcción
  por servicio − coste marginal de integración)

Para una plataforma madura, el coste marginal por cada adoptante
adicional se aproxima solo a la tarifa de transacción/mensaje: el
coste fijo se amortiza en todo el patrimonio gubernamental, no en el
presupuesto de un departamento, razón por la cual los componentes de
GaaP normalmente se financian de forma centralizada en lugar de
cobrarse a coste de recuperación total a los primeros adoptantes.
```

## Ejemplo práctico

**Ayuntamiento que adopta GOV.UK Pay en lugar de construir una pasarela de pago**:

```
Estimación de construcción propia:
  Trabajo de cumplimiento PCI-DSS + integración + mantenimiento continuo
  ≈ 85.000 £ de construcción + 22.000 £/año de mantenimiento

Adopción de GOV.UK Pay:
  Esfuerzo de integración ≈ 12.000 £ (tiempo de desarrollo)
  Tarifas de transacción: los pagos con tarjeta de gobierno a
  ciudadanía se cobran habitualmente con un pequeño porcentaje + una
  tarifa fija por transacción, sin carga separada de PCI-DSS asumida
  por el ayuntamiento
  ≈ 12.000 £ puntuales, coste continuo variable con el volumen, no fijo

Ahorro del primer año ≈ 85.000 £ − 12.000 £ = 73.000 £, antes de contar
los 22.000 £/año de mantenimiento evitados y el riesgo de cumplimiento
evitado de mantener datos de tarjeta en un sistema gestionado por el
ayuntamiento; esta segunda categoría es el valor de seguridad tratado
en public-sector-cybersecurity-value.
```

Multiplique esas 73 000 £ por los aproximadamente 1800 servicios que ahora usan GOV.UK Pay y el coste
de construcción evitado agregado en todo el gobierno está en los cientos de millones: la economía de
plataforma, no ninguna integración individual, es donde realmente reside el valor de la estrategia.

## Conexión con la ingeniería de software

Gobierno como plataforma es un argumento directo a favor de [construir frente a comprar en el
gobierno](../build-vs-buy-in-government/): cuando existe un componente compartido, evaluado y bien
gestionado, construir un equivalente a medida rara vez es la mejor opción de [relación
calidad-precio](../value-for-money/), y falla casi por definición el punto 13 de [el estándar de
servicio digital](../digital-service-standard/) ("usar y contribuir a estándares abiertos, componentes
comunes y patrones"). También cambia la forma de [el coste total de propiedad en TI
gubernamental](../total-cost-of-ownership-in-government-it/): la adopción de la plataforma cambia una
gran partida de capital y mantenimiento por un coste operativo más pequeño y vinculado al uso, más
fácil de prever y más fácil de desfinanciar si un servicio se retira. La reutilización abierta de
componentes tiene un primo en [el valor de los datos abiertos](../open-data-value/): ambas son
estrategias para tratar algo que el gobierno produce una vez como infraestructura compartida en lugar
de un activo departamental.

## Errores habituales

- **Reconstrucción en la sombra**: los equipos construyen silenciosamente su propia integración de
  pago o notificación porque el proceso de incorporación de la plataforma es más lento que hacerlo
  ellos mismos; un problema de fricción de gobernanza, no tecnológico, y erosiona silenciosamente la
  economía de reutilización de la que depende toda la estrategia.
- **Infrafinanciar al equipo de plataforma en relación con el valor que crea**: el valor recae sobre
  los departamentos consumidores mientras el coste recae sobre el equipo de plataforma, creando un
  riesgo crónico de infrainversión a menos que la financiación esté centralizada y protegida; una
  versión de la tragedia de los comunes.
- **Medir el éxito de la plataforma solo por el uso**: las cifras de adopción (servicios incorporados,
  mensajes enviados) son un indicador adelantado, no prueba de valor; la prueba real es la aritmética
  de coste de construcción evitado y riesgo evitado mostrada arriba.
- **Tratar "plataforma" como sinónimo de "monolito"**: los componentes de GaaP tienen éxito porque cada
  uno hace bien una cosa con una interfaz estrecha y estable; agrupar capacidades no relacionadas en
  una "plataforma" recrea el problema de la construcción a medida a otra escala.

## Fuentes

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
