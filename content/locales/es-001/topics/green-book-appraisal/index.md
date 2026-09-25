# Valoración del Green Book (Modelo de Cinco Casos)

El Green Book es la guía obligatoria de HM Treasury para valorar y evaluar las propuestas de gasto
del gobierno del Reino Unido. Su herramienta central, el modelo de cinco casos, obliga a un análisis
de viabilidad a responder cinco preguntas separadas —¿es una buena idea, aporta valor, puede
contratarse, es asequible y puede entregarse?— en lugar de colapsarlo todo en una única cifra que un
ministro pueda aprobar sin más.

## Por qué es importante

Toda propuesta de gasto del gobierno central del Reino Unido que supere los límites delegados
departamentales debe pasar por la valoración del Green Book antes de liberar la financiación, y la
revisión de 2020 del Green Book de HM Treasury (publicada tras las críticas de que el proceso estaba
sesgado contra las regiones más pobres, véase
<https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) reforzó el
requisito de que las opciones se comparen frente a una línea base genuina de "hacer lo mínimo" y de
que se demuestre el ajuste estratégico antes incluso de evaluar la relación calidad-precio. El propio
modelo de cinco casos es anterior al Green Book —se originó en la Office of Government Commerce como
la estructura estándar de análisis de viabilidad—, pero la edición de 2022 del Green Book lo integra
como la forma obligatoria para cualquier análisis de viabilidad que busque la aprobación del Tesoro:
<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

El objetivo de dividir el caso en cinco es que una propuesta puede fallar en cualquiera de las
dimensiones independientemente de las demás. Una migración de TI estratégicamente sólida y
coste-efectiva aún puede fallar el caso comercial si solo un proveedor puede entregarla (creando un
riesgo de licitación única), o fallar el caso de gestión si el departamento no tiene experiencia
demostrada en entregar programas de ese tamaño. Una única puntuación de "relación calidad-precio"
oculta exactamente este tipo de modo de fallo.

## Las matemáticas

El modelo de cinco casos es una estructura, no una fórmula, pero cada caso tiene su propia prueba
cuantitativa o evidencial:

```
1. Caso estratégico
   Evidencia de un objetivo de gasto vinculado a la estrategia
   organizativa.
   Prueba: ¿existe siquiera un caso para el cambio? ("no hacer nada"
   siempre es una opción.)

2. Caso económico
   Valoración de opciones frente a una línea base de "hacer lo
   mínimo", usando el análisis social de coste-beneficio o el análisis
   de coste-efectividad.
   Prueba: ¿qué opción maximiza el valor público neto?
   Véase ../social-cost-benefit-analysis/ y ../cost-effectiveness-analysis-in-government/

3. Caso comercial
   Participación del mercado, vía de contratación, asignación de
   riesgo entre comprador y proveedor.
   Prueba: ¿puede contratarse la opción preferida en condiciones
   aceptables?

4. Caso financiero
   Asequibilidad dentro de los límites del presupuesto departamental,
   fuente de financiación, tratamiento del balance.
   Prueba: ¿podemos permitírnoslo, este año y todos los siguientes?

5. Caso de gestión
   Gobernanza, plan del proyecto, plan de realización de beneficios,
   registro de riesgos.
   Prueba: ¿puede esta organización realmente entregarlo?
   Véase ../benefits-realization/
```

El caso económico es donde reside la valoración cuantitativa: las opciones se comparan sobre la base
de un valor actual neto ajustado por [la tasa de descuento social](../social-discount-rate/), usando el
método de [análisis social de coste-beneficio](../social-cost-benefit-analysis/), o, cuando los
beneficios no pueden monetizarse honestamente, mediante el [análisis de
coste-efectividad](../cost-effectiveness-analysis-in-government/) o [el análisis de decisión
multicriterio](../multi-criteria-decision-analysis/).

## Ejemplo práctico

**Ayuntamiento**: un ayuntamiento que valora un sistema de TI de reparaciones de vivienda de 12
millones de libras ejecuta los cinco casos de la siguiente manera. Caso estratégico: el atraso de
reparaciones incumplirá el estándar estatutario de vivienda decente en 18 meses sin intervención. Caso
económico: tres opciones costeadas a lo largo de un periodo de valoración de 10 años a una tasa de
descuento del 3,5% (según la tasa estándar de preferencia temporal social del Green Book de 2022):
"hacer lo mínimo" (parchear el sistema heredado, VAN −4,1 millones £), "comprar" (plataforma
comercial estándar, VAN +2,3 millones £), "construir" (plataforma a medida, VAN +0,6 millones £ una
vez aplicado un sesgo de optimismo del 40% para el desarrollo de software frente al coste de capital
sin descontar, según el Anexo A del Green Book). Comprar gana el caso económico. Caso comercial:
existen dos proveedores viables, una licitación competitiva es factible: aprobado. Caso financiero:
hay capital disponible de la Public Works Loan Board, los costes de ingresos encajan en el plan
financiero a medio plazo: aprobado. Caso de gestión: el ayuntamiento ha entregado dos sistemas
comparables en los últimos cinco años: aprobado. La propuesta avanza con "comprar".

**Departamento del gobierno central**: una propuesta con un caso económico sólido (VAN +40 millones £)
pero en la que solo un proveedor tiene la acreditación pertinente falla la prueba del caso comercial
de tensión competitiva, obligando a una exención de licitación única (con su propia carga de
escrutinio) o a un rediseño de la especificación para abrir el mercado; el caso económico por sí solo
nunca habría sacado esto a la luz.

## Conexión con la ingeniería de software

Los equipos de ingeniería dentro del gobierno o de organizaciones financiadas por subvenciones
habitualmente solo ven el caso económico, porque esa es la parte que se pide justificar al liderazgo
de producto e ingeniería ("¿cuál es el ROI de esta migración?"). Pero un análisis de viabilidad que
supera al Tesoro o a un comité de subvenciones necesita los cinco, y quienes hacen ingeniería a menudo
son las personas mejor situadas para responder al caso comercial (¿puede realmente contratarse esto, o
nos encierra en el formato propietario de un proveedor?) y al caso de gestión (¿tenemos la capacidad de
entrega, o esto depende de que tres personas concretas no se vayan?). Trate una solicitud de "solo las
cifras del análisis de viabilidad" como una solicitud de una quinta parte de la decisión real. Véase
[relación calidad-precio](../value-for-money/) para cómo se resume habitualmente el resultado del caso
económico, y [coste total de propiedad](../total-cost-of-ownership-in-government-it/) para el núcleo
cuantitativo habitual del caso financiero.

## Errores habituales

- **Escribir primero el caso económico y ajustar el caso estratégico para que encaje.** La revisión de
  2020 del Green Book encontró que exactamente este modo de fallo impulsaba un sesgo de valoración
  hacia lugares y sectores que ya contaban con buena evidencia, afianzando la desigualdad regional; el
  caso estratégico debería establecer el objetivo antes de comparar opciones.
- **Tratar "hacer lo mínimo" como "no hacer nada".** La línea base correcta es la opción de menor coste
  que todavía cumple las obligaciones legales o de seguridad mínimas, no una fantasía de gasto cero;
  comparar frente a un cero literal infla el valor aparente de todas las opciones.
- **Saltarse los casos comercial y de gestión porque el caso económico es sólido.** Una propuesta con
  un VAN alto que no puede contratarse de forma competitiva ni entregarse por la organización
  patrocinadora no es una propuesta financiable; los revisores del Tesoro la rechazan habitualmente por
  estos motivos incluso con un caso económico convincente.
- **Aplicar el modelo de cinco casos una sola vez, al principio.** El Green Book exige que el caso se
  revise en cada puerta de aprobación posterior (esbozo de caso estratégico, análisis de viabilidad
  preliminar, análisis de viabilidad completo) a medida que se afinan costes y evidencia; un caso
  congelado en la etapa de esbozo pasa por alto la escalada de costes que una puerta posterior habría
  detectado.

## Fuentes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
