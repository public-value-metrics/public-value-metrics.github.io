# El valor de la ciberseguridad del sector público

El valor de la ciberseguridad del sector público es la disciplina de poner precio a la reducción de
riesgo: ¿cuánto vale hacer menos probable una brecha de datos de la ciudadanía, dado que el gasto en
seguridad no produce ningún producto visible cuando funciona y uno muy visible cuando falla? Para un
servicio que mantiene registros de prestaciones, datos de salud o registros fiscales, esa propiedad de
"invisible cuando funciona" es precisamente la razón por la que necesita un argumento de valor
explícito, no solo una casilla de cumplimiento.

## Por qué es importante

El Cyber Assessment Framework (CAF) del National Cyber Security Centre del Reino Unido da a las
organizaciones del sector público una forma estructurada de convertir la seguridad en una disciplina
evaluable y basada en resultados en lugar de una lista de comprobación: define cuatro objetivos de
alto nivel (gestionar el riesgo de seguridad, proteger frente a ciberataques, detectar eventos de
ciberseguridad y minimizar el impacto de las incidencias) desglosados en resultados contribuyentes
frente a los que puede evaluarse a quien posee un sistema, en el mismo espíritu que el punto 9 de [el
estándar de servicio digital](../digital-service-standard/) ("crear un servicio seguro que proteja la
privacidad de los usuarios"). Aquello contra lo que protege la evaluación CAF tiene un precio
documentado: el Cost of a Data Breach Report de IBM sigue el coste medio de brecha por sector, y ha
encontrado de forma consistente que el sector público está hacia el extremo inferior del rango en
comparación con las finanzas o la salud —las ediciones recientes sitúan la media del sector público en
torno a 2,6-2,9 millones de dólares por brecha—, pero "más bajo que las finanzas" no es "bajo", y las
brechas del gobierno conllevan costes que las cifras del informe no capturan por completo: la pérdida
de confianza de la ciudadanía en los canales digitales, que deprime [la adopción digital](../channel-shift-savings/)
de la que dependen los análisis de viabilidad de cambio de canal, y el coste político y legal de
exponer datos que el Estado obligó a la ciudadanía a entregar en primer lugar.

## Las matemáticas

La inversión en seguridad se valora de la misma manera que cualquier gasto en reducción de riesgo: como
una reducción de la pérdida esperada, usando la identidad clásica de gestión de riesgos.

```
Pérdida Anualizada Esperada (ALE) = Pérdida Única Esperada (SLE)
                                  × Tasa de Ocurrencia Anualizada (ARO)

Valor de un control de seguridad =
  ALE_antes_del_control − ALE_después_del_control − coste anual del
  control

Un control merece financiarse cuando:
  (ALE_antes − ALE_después) > coste anual del control

La evaluación CAF no produce directamente una probabilidad, pero el
perfil de resultados CAF de un servicio (qué resultados contribuyentes
están "logrados", "parcialmente logrados" o "no logrados") es una
entrada indirecta razonable para estimar el ARO — un sistema con
acceso privilegiado sin gestionar o sin un plan de respuesta a
incidencias probado tiene un ARO realista materialmente más alto que
uno que cuenta con ambos.
```

## Ejemplo práctico

**Sistema de gestión de casos de un condado que mantiene registros de asistencia social de 40 000
residentes**:

```
Pérdida Única Esperada (coste de brecha), usando una media del sector
público de un informe reciente de IBM Cost of a Data Breach ≈ 2,1
millones de £ (cifra convertida, de orden de magnitud — vuelva a
derivarla siempre a partir de la edición actual del informe en lugar
de reutilizar una cifra fija)

ARO actual (acceso privilegiado sin gestionar, sin respuesta a
incidencias probada, según una autoevaluación CAF interna que muestra
múltiples resultados "no logrados") ≈ estimado en 8% anual
  ALE_antes = 2,1m £ × 0,08 = 168.000 £/año

Control propuesto: gestión de acceso privilegiado + plan de respuesta
a incidencias probado, llevando los resultados CAF relevantes a
"logrado", con una estimación de reducir el ARO al 3%/año
  ALE_después = 2,1m £ × 0,03 = 63.000 £/año

Coste anual del control (herramientas + proceso + pruebas) = 45.000 £

Valor del control = (168.000 − 63.000) − 45.000 = 60.000 £/año
  neto positivo — finánciese. La aritmética también muestra que el
  control seguiría mereciendo la pena financiarse a casi el triple del
  coste, que es el tipo de comprobación de sensibilidad que debería
  acompañar a cualquier cifra de ALE construida sobre probabilidades
  estimadas.
```

## Conexión con la ingeniería de software

Quienes hacen ingeniería controlan la mayoría de las palancas de la ecuación del ALE: el diseño de
control de acceso, la higiene de dependencias y parches, la cobertura de registro y detección, y las
herramientas de respuesta a incidencias mueven todas ellas directamente el término del ARO, razón por
la cual la evaluación CAF se lee tanto como una revisión de arquitectura técnica como una auditoría de
política. Esto es [la deuda técnica como erosión del valor público](../technical-debt-as-public-value-erosion/)
en su forma más aguda: los sistemas sin parchear, sin supervisar y con un control de acceso deficiente
son deuda cuyo pago de intereses es riesgo de cola, no un lastre constante; y debería conciliarse con
[el coste total de propiedad en TI gubernamental](../total-cost-of-ownership-in-government-it/) para
que el gasto en seguridad no se trate como algo separado del coste de funcionamiento real del sistema.
También es una entrada directa a las evaluaciones de [relación calidad-precio](../value-for-money/)
bajo el Green Book: el coste ajustado por riesgo es parte del lado del "coste" de cualquier valoración
de opciones, no un añadido de última hora.

## Errores habituales

- **Tratar la autoevaluación CAF como la propia seguridad**: una evaluación completada describe una
  postura de seguridad; no la crea; el valor está en los resultados logrados, no en el documento.
- **Usar costes de brecha promedio globales como una estimación local sin ajuste**: las cifras de IBM
  son promedios entre muestras grandes y variadas; la pérdida única esperada realista de un pequeño
  ayuntamiento rara vez es la misma que la de un departamento del gobierno nacional.
- **Ignorar la psicología del riesgo de cola en las decisiones de inversión**: una baja probabilidad
  anual hace que el gasto en seguridad sea fácil de posponer indefinidamente, justo hasta el año en que
  no lo es; probar la sensibilidad del cálculo del ALE frente a un rango de ARO, como en el ejemplo
  práctico, contrarresta esto.
- **Contar solo el coste de brecha al estilo IBM, no el coste de confianza**: una brecha que deprime la
  disposición de la ciudadanía a usar los canales digitales erosiona el caso de [ahorros por cambio de
  canal](../channel-shift-savings/) durante años después, un coste rara vez incluido en las
  estimaciones de coste de brecha.

## Fuentes

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
