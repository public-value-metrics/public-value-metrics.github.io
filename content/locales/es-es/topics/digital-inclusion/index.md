# Inclusión digital

La inclusión digital es la disciplina de asegurarse de que "lo digital por defecto" no se convierta
en "solo digital": que los servicios públicos diseñados en torno al canal más barato sigan funcionando
para la ciudadanía que no puede o no quiere usarlo sin ayuda. El GDS acuñó el mecanismo de entrega
específico, "digital asistido", como un requisito obligatorio para todo servicio digital
gubernamental, no como un extra opcional.

## Por qué es importante

La Government Digital Strategy de 2012 fijó la ambición con claridad: los servicios digitales debían
construirse siendo digitales por defecto, pero la propia estrategia reconocía que alrededor del 10% de
los adultos del Reino Unido no podrían usarlos sin ayuda, y comprometió a los departamentos a
proporcionar apoyo de digital asistido —una vía mediada por personas, por teléfono, en persona o a
través de un intermediario— como parte del servicio, no como un respaldo aparte añadido después. Ese
compromiso es ahora el punto 5 de [el estándar de servicio digital](../digital-service-standard/),
"asegurarse de que todo el mundo pueda usar el servicio". El alcance de la exclusión persistente lo
sigue el Consumer Digital Index anual de Lloyds Banking Group: la edición de 2024 encontró que
alrededor de 1,6 millones de personas en el Reino Unido permanecen sin conexión, y que este grupo se
inclina fuertemente hacia personas de 70 a 79 años, quienes ganan menos de 35 000 £ y quienes están
jubiladas o desempleadas, precisamente la población con más probabilidades de depender de los
servicios públicos que se están rediseñando. El mismo informe encontró que solo el 48% de la fuerza
laboral del Reino Unido podía completar las 20 tareas del marco de Competencias Digitales Esenciales,
lo que significa que la exclusión no es una conectividad binaria, sino un espectro de habilidad,
confianza y confiabilidad que una simple métrica de "tiene banda ancha" pasa por alto por completo.

## Las matemáticas

La inclusión digital es un marco y una comprobación de equidad más que una fórmula única, pero se
combina con la evaluación cuantitativa de valor a través de [la ponderación distributiva](../distributional-weighting/):

```
Valor ingenuo del cambio de canal:
  valor = volumen desplazado × (coste_antiguo − coste_digital)     [véase channel-shift-savings]

Valor ajustado por inclusión:
  valor = (volumen desplazado × ahorro sin ponderar)
        − (usuarios excluidos × coste de la provisión de digital asistido)
        − (ajuste de ponderación distributiva por el daño a los grupos
           excluidos que pierden acceso o sufren una calidad de servicio
           degradada)

El digital asistido no es el coste residual del fallo: es un canal
diseñado con su propio coste-por-transacción, habitualmente mucho más
alto por transacción que el autoservicio digital pero aun así
generalmente más barato que el canal heredado al que sustituye en
parte.
```

## Ejemplo práctico

**Servicio de prestación nacional al estilo Universal Credit**: 2,5 millones de solicitudes/año,
evaluado como necesitado de apoyo de digital asistido para un 10% estimado de los solicitantes según
el supuesto de planificación de la Government Digital Strategy.

```
Cohorte excluida/de digital asistido = 2.500.000 × 10% = 250.000 solicitudes/año

Coste del canal de digital asistido (apoyo telefónico + presencial,
dotado de personal para gestionar la vulnerabilidad y la complejidad)
≈ 9,50 £/solicitud
  = 250.000 × 9,50 £ = 2.375.000 £/año

Coste del autoservicio digital para el otro 90% ≈ 0,40 £/solicitud
  = 2.250.000 × 0,40 £ = 900.000 £/año

Coste por transacción combinado = (2.375.000 + 900.000) / 2.500.000
  = 1,31 £/solicitud

Un diseño que omite el digital asistido para alcanzar un coste por
transacción destacado más bajo (p. ej., 0,40 £ combinado, ignorando a
los 250.000 solicitantes excluidos) no elimina ese coste de 2,375
millones de libras: lo convierte en prestaciones no reclamadas,
apelaciones y demanda posterior sobre servicios de crisis que recae
sobre un presupuesto completamente distinto.
```

## Conexión con la ingeniería de software

El digital asistido es un canal diseñado, lo que significa que tiene interfaces, acuerdos de nivel de
servicio (SLA) e instrumentación como cualquier otro: una herramienta de gestión de casos basada en
teléfono, un portal intermediario para Citizens Advice o un ayuntamiento, o un flujo de quiosco
presencial. Tratarlo como una idea de última hora —un número de teléfono en letra pequeña en lugar de
un canal considerado desde el descubrimiento— es la forma más común en que los servicios fallan el
punto 5 de [el estándar de servicio digital](../digital-service-standard/) en la evaluación. La
inclusión digital es la lente de equidad sobre cualquier otro tema de este capítulo: limita hasta qué
punto pueden materializarse agresivamente [los ahorros por cambio de canal](../channel-shift-savings/),
es una partida que debe incluirse honestamente en [el coste por transacción](../cost-per-transaction/),
y es la aplicación directa de [la ponderación distributiva](../distributional-weighting/) a un contexto
de servicios digitales: un ahorro que recae desproporcionadamente sobre personas que ya están excluidas
digital y económicamente debería ponderarse a la baja, no tratarse como equivalente a un ahorro
repartido de forma uniforme entre la población.

## Errores habituales

- **Leer "digital por defecto" como "solo digital"**: cerrar la línea telefónica o la ventanilla en
  cuanto la adopción digital supera un umbral, sin verificar que la cohorte restante tenga una
  alternativa genuinamente utilizable.
- **Medir la inclusión por conectividad binaria**: "tiene banda ancha" o "posee un teléfono
  inteligente" es un indicador indirecto deficiente de la capacidad de completar una transacción
  específica; la brecha de Competencias Digitales Esenciales (solo el 48% de la fuerza laboral del
  Reino Unido completa las 20 tareas, según Lloyds 2024) muestra que las habilidades y la confianza
  importan tanto como el acceso.
- **Costear el digital asistido como un error de redondeo**: presupuestarlo como una pequeña partida de
  contingencia en lugar de como un canal propiamente dicho con su propio [coste por
  transacción](../cost-per-transaction/), para luego sorprenderse cuando esté infrafinanciado e
  infradotado de personal en el lanzamiento.
- **Encuestar solo a quienes completan con éxito el proceso digital**: la investigación de satisfacción
  y usabilidad realizada enteramente dentro del servicio pasa por alto a las personas que nunca llegaron
  tan lejos, que es exactamente la población que el trabajo de inclusión digital pretende proteger.

## Fuentes

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
