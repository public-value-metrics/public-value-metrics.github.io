# Precio sombra

Un precio sombra es un valor estimado asignado a un bien, recurso o externalidad que no tiene precio
de mercado observable, o cuyo precio de mercado está distorsionado y no refleja su verdadero valor
social. La valoración gubernamental se apoya en un pequeño conjunto de precios sombra oficiales
—carbono, tiempo no laboral, trabajo desempleado— publicados de forma centralizada para que todos los
departamentos usen la misma cifra.

## Por qué es importante

Los precios sombra existen porque [el análisis social de coste-beneficio](../social-cost-benefit-analysis/)
no puede funcionar sin un valor monetario para cada coste y beneficio, y varios de los más
determinantes —una tonelada de carbono emitida, una hora del tiempo de un desplazamiento, una hora de
trabajo por lo demás desempleado— no tienen precio de mercado en absoluto, o tienen un precio de
mercado que tergiversa su verdadero coste social. HM Treasury y el Department for Energy Security and
Net Zero publican conjuntamente el precio sombra del carbono usado en toda la valoración gubernamental
del Reino Unido
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
derivado no de ningún precio de mercado del carbono sino de un enfoque coherente con el objetivo: el
valor del carbono se fija en el coste de reducción marginal necesario para cumplir los presupuestos de
carbono legislados del Reino Unido, que es una lógica fundamentalmente distinta a observar por cuánto
se comercia realmente el carbono en el Régimen de Comercio de Derechos de Emisión de la UE o del Reino
Unido.

El tipo de salario sombra sigue una lógica similar en el lado laboral. Emplear a alguien que de otro
modo habría estado desempleado no cuesta a la sociedad su salario completo: parte de ese salario es una
transferencia desde pagos de prestaciones evitados y tiempo de ocio/búsqueda perdido, en lugar de un
consumo neto nuevo de los recursos de la sociedad, así que la guía del Green Book fija un precio sombra
por debajo del salario de mercado para el trabajo extraído del desempleo, reflejando el verdadero coste
de oportunidad de ese trabajo (véase [el coste de oportunidad en el gasto público](../opportunity-cost-in-public-spending/))
en lugar de su precio de mercado.

## Las matemáticas

```
Precio sombra del carbono (estructura ilustrativa, valores actuales de
la herramienta oficial de valores de carbono de BEIS/DESNZ — no use
cifras obsoletas):
  Valor del sector comercializado: informado por las trayectorias de
    precio de los derechos de emisión del ETS
  Valor del sector no comercializado (coherente con el objetivo):
    fijado en el coste marginal de reducción necesario para cumplir
    los presupuestos de carbono legislados, aumentando con el tiempo a
    medida que se agotan las opciones de reducción más fáciles
  Aplicado como: £/tonelada CO2e × toneladas emitidas o reducidas por
    la opción, descontado a la tasa de descuento social para los años
    futuros

Tipo de salario sombra (SWR):
  SWR = Salario de mercado − (valor del tiempo de ocio/búsqueda
                        ahorrado + valor de los pagos de asistencia
                        social que ya no se pagan)
  Típicamente expresado como una fracción del salario de mercado
    (p. ej., SWR = 0,6 × salario de mercado en un área de alto
    desempleo, según la guía del Anexo A del Green Book sobre mercados
    laborales con capacidad excedente)
```

Ambas cifras son convenciones de política fijadas de forma centralizada, no observaciones empíricas de
mercado; el objetivo entero de un precio sombra es sustituir a un mercado ausente o distorsionado, así
que una valoración que use uno debe citar la fuente oficial actual en lugar de derivar su propia cifra,
precisamente para que la valoración de todos los departamentos sea comparable.

## Ejemplo práctico

**Gobierno nacional**: la valoración de un proyecto de defensa contra inundaciones estima que evita
400 toneladas de emisiones de CO2e al año (mediante un menor uso de maquinaria de emergencia y un menor
carbono incorporado por la reconstrucción evitada) a lo largo de una vida de valoración de 30 años,
comparado con una línea base de "hacer lo mínimo".

```
Precio sombra ilustrativo del carbono: 280 £/tonelada CO2e (año 1,
  aumentando durante el periodo de valoración según el calendario
  oficial de valores de carbono no comercializado)
Beneficio de carbono del año 1 = 400 × 280 £ = 112.000 £
```

Como el calendario oficial hace que el valor del carbono *aumente* durante el periodo de valoración
(reflejando el endurecimiento de los presupuestos de carbono), quien analiza debe aplicar el valor
específico correcto de cada año a lo largo del flujo de 30 años, no una tasa plana; usar el valor del
año 1 en todo el periodo subestimaría los beneficios de los años posteriores y distorsionaría la
clasificación frente a diseños alternativos de defensa contra inundaciones con perfiles de carbono
distintos.

**Ayuntamiento**: el programa de apoyo al empleo de un ayuntamiento para residentes desempleados de
larga duración coloca a 150 personas en empleos que pagan 11 £/hora. Valorar esto usando el salario de
mercado completo acreditaría al programa con 11 £ × horas trabajadas como beneficio social, pero el
enfoque del tipo de salario sombra reconoce que no se trataba de trabajadores extraídos de otros
empleos: el verdadero coste de oportunidad de su trabajo antes del programa era bajo.

```
Salario de mercado: 11,00 £/hora
Tipo de salario sombra (ilustrativo, alto desempleo local): 0,6 ×
salario de mercado = 6,60 £/hora
Beneficio social neto atribuible por hora trabajada ≈ 11,00 £ − 6,60 £
= 4,40 £/hora
  (el valor "extra" creado al pasar trabajo genuinamente ocioso a la
   producción, distinto del propio salario, que en gran medida es una
   transferencia)
```

Esto explica por qué las valoraciones de programas de empleo en áreas de alto desempleo pueden mostrar
un valor social neto positivo incluso cuando el mismo programa, ejecutado en un área de pleno empleo
donde el trabajo desplazado simplemente se extraería de otros empleos, no lo mostraría.

## Conexión con la ingeniería de software

El precio sombra rara vez toca directamente la entrega de software, pero importa siempre que un
análisis de viabilidad reclama un beneficio de carbono o social de un cambio de TI: una consolidación
de centro de datos que reclama ahorros de carbono, o un servicio sin papel que reclama carbono de
impresión y correo postal evitado, deben usar el precio sombra oficial actual del carbono en lugar de
una cifra inventada, y deben aplicar el calendario correcto año a año en lugar de una tasa plana,
exactamente como con cualquier otro insumo de valoración del Green Book. Véanse [el coste total de
propiedad en TI gubernamental](../total-cost-of-ownership-in-government-it/) y [el valor de la
ciberseguridad del sector público](../public-sector-cybersecurity-value/), ambos de los cuales a menudo
necesitan un precio sombra para un insumo difícil de monetizar (riesgo de brecha, tiempo de
inactividad) junto a partidas costeadas directamente.

## Errores habituales

- **Usar una cifra de carbono o salario obsoleta.** Ambos valores se revisan periódicamente en la guía
  central; una valoración construida sobre una cifra sustituida no resistirá el escrutinio del Tesoro.
- **Aplicar un precio sombra del carbono plano a lo largo de una valoración de varias décadas.** El
  calendario oficial aumenta con el tiempo; usar el valor del año 1 en todo el periodo tergiversa el
  perfil de beneficios o costes.
- **Confundir el salario sombra con un descuento sobre la paga real del trabajador.** El tipo de
  salario sombra ajusta la valoración *de la valoración* del insumo laboral, no el salario que
  realmente se paga al trabajador; confundir ambos invita a justificar (incorrectamente) una paga por
  debajo del mercado.
- **Derivar un precio sombra a medida en lugar de usar el oficial.** Los precios sombra son
  convenciones de política precisamente para que las valoraciones sean comparables entre departamentos;
  una cifra inventada localmente, por bien razonada que esté, rompe esa comparabilidad.

## Fuentes

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
