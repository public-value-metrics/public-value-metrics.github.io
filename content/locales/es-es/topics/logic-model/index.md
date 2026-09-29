# Modelo lógico

Un modelo lógico es un diagrama lineal que conecta insumos, actividades, productos, resultados e
impacto de un programa, leído de izquierda a derecha como una cadena de responsabilidad: entran
recursos, ocurren actividades, se producen productos, cambian los resultados para los beneficiarios, y
el impacto se acumula en una escala temporal más amplia o más larga. Es la estructura estándar frente
a la que los financiadores y auditores esperan que un programa pueda reportarse, y la contraparte
orientada hacia delante de [una teoría del cambio](../theory-of-change/) mapeada hacia atrás.

## Por qué es importante

El Magenta Book de HM Treasury especifica el modelo lógico como un elemento obligatorio del diseño de
evaluación de programas, y financiadores como el National Lottery Community Fund construyen sus
plantillas de solicitud e informe exactamente en torno a esta cadena de cinco columnas. Su valor está
en que obliga a un programa a declarar, en un único diagrama, qué gastará, qué hará con ello, qué
producirá y —de forma crucial— qué debería cambiar como resultado, con un nivel de especificidad que
un párrafo de prosa tiende a oscurecer. Un modelo lógico con una columna de insumos y actividades
rellena pero una columna de resultados vacía o vaga es diagnosticable de un vistazo, que es
precisamente por lo que los financiadores piden uno.

## Las matemáticas

El modelo lógico es una cadena estructural más que una fórmula:

```
Insumos         Actividades       Productos           Resultados            Impacto
(recursos       (qué se hace      (productos          (cambio para          (cambio a largo
 comprometidos)  con ellos)        directos,           los beneficiarios)    plazo, a nivel
                                   contables)                                de población o
                                                                              sistémico)
```

Cada columna debería ser más específica que la anterior: los insumos son lo que gasta, las actividades
son lo que hace, los productos son lo que se entrega independientemente del efecto, los resultados son
lo que cambia como consecuencia —la distinción tratada en detalle en [resultados frente a
productos](../outcomes-vs-outputs/)— y el impacto es el cambio duradero a largo plazo, a menudo
atribuible solo en parte.

## Ejemplo práctico

**Ayuntamiento (servicio digital de asesoramiento sobre deudas)**:

- Insumos: presupuesto anual de 180 000 £, 4,0 ETC de asesores, un sistema de gestión de casos.
- Actividades: sesiones de acercamiento, citas individuales de asesoramiento sobre deudas.
- Productos: 900 citas realizadas; 750 planes de deuda y prestaciones emitidos.
- Resultados: de los clientes que llegan a un seguimiento a 6 meses, el 60% (450 de 750) informa de
  una reducción de los atrasos, con una media de reducción de 1200 £ por cliente: 540 000 £ de
  reducción de atrasos en conjunto.
- Impacto: una caída medible en las solicitudes de personas sin hogar procedentes de la base de
  clientes del servicio a lo largo de dos años, solo parcialmente atribuible a este servicio junto a
  otras intervenciones (véase [análisis contrafactual](../counterfactual-analysis/)).

**Organización benéfica (asociación de derivación a banco de alimentos)**:

- Insumos: 45 000 £, 1,5 ETC de coordinador, acuerdos de asociación con 12 organismos de derivación.
- Actividades: cribado de derivaciones, empaquetado y distribución de paquetes.
- Productos: 5000 paquetes de alimentos distribuidos a 1100 hogares.
- Resultados: el 68% de los hogares encuestados (748 de 1100) informa de una mejora en la seguridad
  alimentaria en una llamada de seguimiento a las 4 semanas.
- Impacto: contribución a una reducción de la demanda local de servicios de crisis, evidenciada solo
  en estadísticas agregadas del área, no atribuible únicamente a esta organización benéfica.

## Conexión con la ingeniería de software

El modelo lógico se acerca a un modelo de datos literal para un sistema de resultados: los insumos y
las actividades son datos operativos que ya se poseen (gasto, personal, registros de sesión); los
productos son fáciles de instrumentar porque se cuentan en el punto de entrega; los resultados
requieren una recopilación de datos de seguimiento deliberadamente diseñada (encuestas, vinculación de
datos administrativos) que no existirá a menos que alguien la construya; el impacto normalmente
requiere datos vinculados, longitudinales o a nivel de población que van más allá de los sistemas de
cualquier programa individual. Quienes construyen herramientas de informes deberían empujar a los
comisionadores a definir los indicadores de resultado e impacto en el momento del diseño, en lugar de
recurrir por defecto a un panel de solo productos porque eso es lo que ya soportan los datos
transaccionales. Véase [el retorno social de la inversión](../social-return-on-investment/) para un
método que valora específicamente las columnas de resultados e impacto, y [la realización de
beneficios](../benefits-realization/) para hacer seguimiento de si la columna de impacto realmente se
entregó.

## Errores habituales

- **Detenerse en los productos.** Un panel que informa de citas realizadas o paquetes distribuidos e
  implica beneficio está informando de actividad, no de resultados; véase [resultados frente a
  productos](../outcomes-vs-outputs/).
- **Ausencia de un vínculo causal declarado entre columnas.** Un modelo lógico declara la cadena pero
  no por qué las actividades deberían producir productos que deberían producir resultados; ese
  razonamiento pertenece a [una teoría del cambio](../theory-of-change/), y un modelo lógico sin una
  detrás no está probado.
- **Tratarlo como un documento de solicitud puntual.** Los modelos lógicos producidos solo para
  satisfacer una solicitud de financiación y nunca actualizados dejan de reflejar lo que el programa
  realmente hace.
- **Deslizamiento de la atribución en la columna de impacto.** Reclamar un cambio a nivel de población
  como causado únicamente por un programa, sin un contrafactual, exagera lo que respalda la evidencia.

## Fuentes

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
