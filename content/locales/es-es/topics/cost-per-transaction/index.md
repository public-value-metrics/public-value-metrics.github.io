# Coste por transacción

El coste por transacción es la métrica destacada de economía unitaria de un servicio digital
gubernamental: el coste total de prestar un canal, dividido entre el número de transacciones
completadas a través de él. Fue la cifra insignia de la antigua Performance Platform de GOV.UK, y es
el número que financió una década de inversión en "lo digital por defecto"; precisamente por eso es
también la métrica más propensa a manipularse.

## Por qué es importante

El Digital Efficiency Report de 2012 del Cabinet Office expresó la comparación de coste entre canales
en términos que calaron: se descubrió que las transacciones digitales costaban unas 20 veces menos que
por teléfono y unas 50 veces menos que presencialmente, con cifras ilustrativas de administración local
de aproximadamente 0,15 £ por transacción web frente a 2,83 £ por teléfono y 8,62 £ presencial. Esa
única comparación se convirtió en la justificación para rediseñar los 25 servicios ejemplares
nombrados en la Government Digital Strategy, y de todo análisis de viabilidad departamental que desde
entonces ha citado ahorros por cambio de canal. La cifra es genuinamente útil como señal de orden de
magnitud, pero el ratio depende por completo de qué se cuenta en cada lado: un coste justo del canal
telefónico incluye el personal del centro de llamadas, el contrato de telefonía, la formación y las
instalaciones; un coste digital justo incluye el alojamiento, los salarios continuos del equipo de
producto, el tiempo del servicio de soporte para trayectos fallidos y el canal de digital asistido
exigido por el punto 5 de [el estándar de servicio digital](../digital-service-standard/). Si se
eliminan suficientes de esos elementos del lado digital, cualquier servicio parece barato.

## Las matemáticas

```
Coste por transacción = coste total asignado del canal / transacciones completadas

El coste total asignado del canal debería incluir:
  + alojamiento e infraestructura
  + coste del equipo de producto/ingeniería/soporte (amortizado)
  + coste de contenido y diseño de servicio (amortizado)
  + coste de soporte de digital asistido / accesibilidad
  + coste de la demanda por fallos (usuarios que fallan en el canal
    digital y recurren al teléfono)
  − el coste de construcción puntual se amortiza a lo largo de la vida
    útil prevista del servicio, no se imputa por completo al primer año

El truco contable habitual:
  el "coste marginal por transacción" (solo alojamiento, una vez
  construido) se cita como si fuera el "coste medio por transacción"
  (coste total incluyendo al equipo que sigue construyéndolo y
  ejecutándolo). Ambos pueden diferir por un factor de 10 o más en un
  servicio con un equipo de entrega grande y activo.
```

## Ejemplo práctico

**Servicio de renovación del impuesto de circulación**: 4 millones de transacciones/año.

```
Cifra solo marginal (el truco):
  Solo alojamiento + procesamiento de pagos = 180.000 £/año
  Coste por transacción = 180.000 / 4.000.000 = 0,045 £
  → cifra destacada citada en un análisis de viabilidad

Cifra totalmente cargada (la honesta):
  Alojamiento + pagos                       180.000 £
  Equipo de producto/ingeniería (8 ETC)     720.000 £
  Servicio de soporte (transacciones
  fallidas/consultadas)                     310.000 £
  Línea telefónica de digital asistido      140.000 £
  Total                                    1.350.000 £
  Coste por transacción = 1.350.000 / 4.000.000 = 0,3375 £

La cifra totalmente cargada sigue siendo aproximadamente 8 veces más
barata que el comparador del canal telefónico de 2,83 £ del Digital
Efficiency Report — un ahorro real y defendible —, pero 7,5 veces
superior a la cifra solo marginal citada en la versión abreviada.
Ambas cifras son "verdaderas"; solo una es comparable al coste del
canal telefónico frente al que se está contrastando.
```

## Conexión con la ingeniería de software

El coste por transacción es donde las decisiones de arquitectura se convierten en una cifra
financiera: un servicio que escala automáticamente sin fricción y necesita poca intervención manual
reduce esta cifra con el tiempo; uno que genera un alto volumen de tickets de soporte por estados de
error confusos la eleva independientemente de la eficiencia del alojamiento. Es la métrica compañera
natural del punto 10 de [el estándar de servicio digital](../digital-service-standard/) ("definir cómo
es el éxito, y publicar datos de rendimiento") y de [estándares de servicio y métricas de
transacción](../service-standards-and-transaction-metrics/), que establece el conjunto más completo de
KPI en el que se inserta esta cifra. También alimenta directamente los cálculos de [ahorros por cambio
de canal](../channel-shift-savings/) y debería conciliarse con [el coste total de propiedad en TI
gubernamental](../total-cost-of-ownership-in-government-it/) para que los gastos generales de la
plataforma y los servicios compartidos no se omitan silenciosamente.

## Errores habituales

- **Coste marginal disfrazado de coste medio**: citar el coste de solo alojamiento una vez construido
  un servicio, omitiendo al equipo continuo que lo mantiene, itera y soporta; véase el ejemplo práctico
  anterior.
- **Excluir el coste de digital asistido**: un canal no cumple con "lo digital por defecto", y su
  coste real no queda capturado, si el respaldo telefónico/en papel exigido por [la inclusión
  digital](../digital-inclusion/) se costea por separado o se ignora.
- **Ignorar la demanda por fallos**: las transacciones que empiezan de forma digital y fallan,
  generando de todos modos una llamada telefónica o un formulario en papel, son un coste del canal
  digital, no del canal que capta el fallo.
- **Comparar transacciones de distinta complejidad entre canales**: las llamadas telefónicas gestionan
  de forma desproporcionada los casos difíciles (múltiples dependientes, corrección de errores,
  solicitantes vulnerables); comparar un coste telefónico medio con un coste digital medio exagera el
  ratio a menos que se iguale la mezcla de transacciones.

## Fuentes

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
