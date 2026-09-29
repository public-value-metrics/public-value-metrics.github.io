# Coste del retraso en programas públicos (Cost of Delay, CoD)

El coste del retraso (Cost of Delay, CoD) es el valor público perdido por unidad de tiempo mientras un
programa, servicio o cambio de sistema *aún no* se ha entregado. Es la métrica puente maestra de este
capítulo: convierte "la puesta en marcha se retrasó seis meses" en libras por semana, o en WELLBY por
semana, de modo que el retraso pueda debatirse en la misma moneda que el propio análisis de viabilidad.

## Por qué es importante

La regla de Reinertsen —"si solo vas a cuantificar una cosa, cuantifica el coste del retraso"— se
traslada al gobierno casi sin cambios, porque los programas públicos están inusualmente expuestos a
ella: los análisis de viabilidad se aprueban frente a un flujo de beneficio previsto, pero ese flujo
solo empieza a fluir en la puesta en marcha, y cada semana de retraso es una semana de valor perdido
que nadie incluye en el registro de riesgos. El escrutinio repetido de la National Audit Office sobre
la implantación de Universal Credit (véanse sus informes "Rolling Out Universal Credit",
<https://www.nao.org.uk/>) ilustra el patrón: el retraso del calendario se rastreaba y reportaba, pero
el coste en libras por semana de *no haber entregado todavía* el sistema reformado al siguiente tramo
de solicitantes rara vez se expresaba como cifra destacada, aunque es el número que debería haber
guiado la priorización y la escalada. Sin una cifra de CoD, un programa retrasado parece un problema de
calendario para el consejo de entrega; con ella, es un problema de erosión de valor para el
responsable contable (accounting officer).

## Las matemáticas

```
CoD = beneficio por unidad de tiempo perdido mientras no se entrega   (£/semana o WELLBY/semana)

Pérdida total por retraso = CoD × duración del retraso

Flujos de beneficio a sumar para programas públicos:
  ahorros que liberan efectivo   (reducción de fraude/error, costes
                                   temporales evitados)
+ capacidad no monetaria liberada  (horas de personal técnico × coste cargado)
+ beneficio de bienestar        (WELLBY × 13.000 £/WELLBY, guía
                                   complementaria de bienestar del Green
                                   Book de HM Treasury, precios de 2019)
```

Para los servicios de cara a la ciudadanía, denomine tanto en bienestar como en dinero; véase
[años de vida ajustados por bienestar](../wellbeing-adjusted-life-years/) para la unidad subyacente, y
[el coste de oportunidad en el gasto público](../opportunity-cost-in-public-spending/) para lo que esa
libra retrasada podría haber financiado en su lugar.

## Ejemplo práctico

**Ayuntamiento**: la actualización de un sistema de prestaciones de vivienda reduce el error de pago
excesivo en 150 £/solicitud/año en 20 000 solicitudes activas.

```
Beneficio anual = 150 × 20.000 = 3.000.000 £/año
CoD = 3.000.000 / 52 ≈ 57.700 £/semana
Un retraso de implementación de 12 meses cuesta 52 × 57.700 ≈ 3.000.000 £
en error evitable.
```

**Organismo del gobierno central**: un servicio de evaluación de prestaciones por discapacidad,
entregado seis meses (26 semanas) más tarde de lo previsto, supone que 200 000 solicitantes/año
esperan una media de tres semanas más para una decisión. Cada semana adicional de incertidumbre
financiera se modela con un efecto de −0,0018 WELLBY (punto de satisfacción vital):

```
Pérdida de WELLBY por solicitante = 3 × 0,0018 = 0,0054
Pérdida anual de WELLBY = 200.000 × 0,0054 = 1.080 WELLBY/año
CoD_bienestar = 1.080 / 52 ≈ 20,8 WELLBY/semana
CoD_dinero = 20,8 × 13.000 £ ≈ 270.000 £/semana de valor de bienestar
```

Un retraso de 26 semanas "cuesta" por tanto aproximadamente 540 WELLBY, con un valor de unos 7
millones de libras según la valoración de bienestar del Green Book, lo que replantea una fecha de
puesta en marcha incumplida como un suceso de bienestar ciudadano, no como una nota a pie de página de
gestión de proyectos.

## Conexión con la ingeniería de software

El CoD es lo que hace legibles financieramente a [las métricas DORA](../dora-metrics-for-public-value/)
y a [las métricas de flujo](../flow-metrics-in-government-delivery/): el tiempo de espera en el
proceso × el CoD es dinero (o bienestar) quemado en colas antes de que llegue nunca a la ciudadanía.
En concreto:

- **Priorización**: clasifique una cartera de trabajo por CoD ÷ duración en lugar de por antigüedad de
  quien lo solicita: el equivalente en ingeniería de software del requisito del Green Book de valorar
  las opciones por su valor, no por quién las pide.
- **Contratación**: un ciclo de contratación por marco de 12-18 meses tiene un CoD; valorarlo cambia el
  argumento de urgencia para las vías aceleradas, y alimenta directamente las decisiones de
  [construir frente a comprar](../build-vs-buy-in-government/) en las que el tiempo hasta obtener valor
  es un factor de decisión.
- **Caso de beneficios**: toda cifra de CoD citada en la aprobación debería reaparecer en
  [la realización de beneficios](../benefits-realization/): si el coste del retraso era real, el
  beneficio acelerado debería ser medible tras la puesta en marcha.

## Errores habituales

- **Suponer un CoD lineal**: algunos servicios públicos tienen un valor con forma de plazo límite (una
  fecha de cumplimiento estatutario: el CoD salta a niveles de riesgo de sanción después de la fecha,
  cercano a cero antes) en lugar de una tasa semanal uniforme. Clasifique el perfil de urgencia antes
  de multiplicar.
- **CoD sobre productos que nadie necesita**: el retraso solo tiene un coste si lo no entregado tiene
  valor; un sistema que nadie va a usar tiene un CoD de cero sin importar lo tarde que llegue.
- **Contar dos veces el retraso y el descuento**: [la tasa de descuento social](../social-discount-rate/)
  ya valora el tiempo en horizontes de valoración plurianuales; el CoD es la versión operativa, dentro
  del horizonte, para semanas y meses. Use el CoD para el retraso de calendario, y el cambio en el VAN
  para la refasificación plurianual.

## Fuentes

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
