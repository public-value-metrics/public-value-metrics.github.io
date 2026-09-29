# Métricas DORA para el valor público

Las métricas DORA (DevOps Research and Assessment) —frecuencia de despliegue, tiempo de entrega de
cambios, tasa de fallo de cambios y tiempo de restauración del servicio, más la fiabilidad como una
quinta métrica— son las referencias de rendimiento de entrega más validadas de la industria del
software. Traducidas a términos de responsabilidad del sector público, cada una es un indicador
indirecto directo de la rapidez y la seguridad con que el valor público llega a la ciudadanía.

## Por qué es importante

Una década de investigación de DORA, publicada anualmente como el *Accelerate State of DevOps Report*
(la metodología de Forsgren, Humble y Kim, hoy dirigida por Google Cloud), agrupa a los equipos en
rendimiento de élite, alto, medio y bajo. Los equipos de élite despliegan bajo demanda, tardan menos de
un día desde el commit hasta producción, fallan aproximadamente el 5% de los cambios y se recuperan en
menos de una hora; los de bajo rendimiento despliegan mensualmente o con menos frecuencia, tardan
meses, fallan alrededor del 40% de los cambios y se recuperan en semanas. En el gobierno, estas no son
métricas de vanidad de ingeniería: el Service Standard del Government Digital Service exige a los
equipos "iterar y mejorar con frecuencia" y poder responder con rapidez a las necesidades del usuario,
y los departamentos que no pueden desplegar de forma segura y frecuente son estructuralmente incapaces
de cumplir ese estándar, diga lo que diga su investigación de usuarios. El propio trabajo de eficiencia
digital del Cabinet Office encontró que empujar a la ciudadanía desde una transacción digital fallida o
lenta hacia un canal telefónico o en papel es caro: el Digital Efficiency Report de 2012 del GDS
estimó que algunas transacciones digitales cuestan tan solo 20 peniques frente a contactos telefónicos
o presenciales que cuestan hasta 8,62 £, de modo que un fallo de cambio en un servicio de cara al
público no solo cuesta tiempo de ingeniería, empuja libras reales hacia el presupuesto del centro de
contacto (véase [ahorros por cambio de canal](../channel-shift-savings/)).

## Las matemáticas

```
Frecuencia de despliegue  = despliegues en producción / tiempo
Tiempo de entrega de cambios = t(despliegue) − t(commit), mediana
Tasa de fallo de cambios     = cambios fallidos / total de cambios × 100
Tiempo de restauración (MTTR) = t(restaurado) − t(fallo), mediana
Fiabilidad                   = cumplimiento de SLO (disponibilidad,
                                latencia, corrección)
```

Traducciones a valor público:

```
Tiempo de entrega  → semanas en el proceso × CoD, véase
                      cost-of-delay-in-public-programmes
Tasa de fallo      → tasa de incidencias de cara a la ciudadanía: CFR
                      × coste por llamada redirigida al centro de
                      contacto (o por transacción estatutaria fallida)
Tiempo de recuperación → daño por interrupción del servicio: MTTR ×
                      (solicitudes/aplicaciones bloqueadas por hora) ×
                      coste posterior o pérdida de bienestar por unidad
Fiabilidad         → descuento del beneficio: un servicio con 99% de
                      disponibilidad entrega ≈ 0,99 de su beneficio
                      modelado — el análogo de entrega del déficit de
                      adopción o cumplimiento
```

## Ejemplo práctico

El equipo del portal de solicitudes de prestaciones de un ayuntamiento, antes y después de una
inversión en ingeniería de entrega:

```
                    Antes       Después
Despliegues         mensual     semanal
Tiempo de entrega   8 semanas   5 días
CFR                 30%         10%
MTTR                3 días      4 horas
```

El equipo entrega unas 25 mejoras/año, con un valor medio de 8000 £/semana ([coste del
retraso](../cost-of-delay-in-public-programmes/)). Reducir el tiempo de entrega en aproximadamente 7,3
semanas adelanta el flujo de beneficio de cada mejora: 25 × 7,3 × 8000 ≈ **1.460.000 £/año** de valor
entregado antes. Sobre la tasa de fallo: 25 × (0,30 − 0,10) = 5 cambios fallidos menos/año; cada cambio
fallido en un portal público redirige habitualmente a una estimación de 2000 ciudadanos hacia el canal
telefónico a 8,62 £ frente a 20 peniques, un coste neto de aproximadamente 8,42 £ × 2000 ≈ 16.840 £ por
incidencia, por lo que evitar 5 incidencias ahorra ≈ **84.200 £/año**. La inversión en ingeniería de
entrega se valora en la misma moneda que cualquier otro caso de valor público.

## Ejemplo práctico continuado: fiabilidad

Si el portal funciona con un 97% de disponibilidad en lugar de un objetivo del 99,5%, y cada punto
porcentual de tiempo de inactividad se modela como un 2% de solicitudes perdidas por abandono, el
servicio está entregando aproximadamente 0,975 de su beneficio modelado de 2 millones de libras/año:
un descuento de beneficio de 50 000 £/año que un panel de disponibilidad puro nunca saca a la luz.

## Conexión con la ingeniería de software

Las métricas DORA son las métricas operativas de un servicio público con otra ropa: el tiempo de
entrega se corresponde con [los estándares de servicio y métricas de transacción](../service-standards-and-transaction-metrics/);
la tasa de fallo de cambios se corresponde con las tasas de retrabajo y queja; el MTTR se corresponde
con cuánto tiempo un servicio estatutario no está disponible para los solicitantes. Las técnicas de
mejora se trasladan en ambas direcciones porque ambos son sistemas de colas bajo restricciones de
responsabilidad; véase [métricas de flujo en la entrega gubernamental](../flow-metrics-in-government-delivery/)
para las matemáticas de colas subyacentes. Nótese también el hallazgo de DORA de 2025 de que la
adopción de IA se correlaciona con un mayor rendimiento pero una estabilidad *peor*: una intervención
con eficacia y efectos secundarios a la vez, que es exactamente el análisis de beneficio neto que
trabaja el tema de [la productividad de la IA](../ai-productivity-in-the-public-sector/) de este
capítulo.

## Errores habituales

- **Manipulación de métricas**: inflar los recuentos de despliegue con lanzamientos sin efecto, o
  excluir las correcciones urgentes del recuento de fallos de cambios. Defina los eventos con tanta
  precisión como un estándar de servicio estatutario define una "transacción exitosa".
- **Tablas comparativas entre departamentos**: los grupos de DORA comparan prácticas de entrega, no
  servicios con perfiles de riesgo distintos; un sistema de pago de impuestos calificado como "alto"
  puede ser la postura correcta donde "élite" sería temerario dados los requisitos de aseguramiento.
- **Optimizar una sola métrica de forma aislada**: la velocidad sin la tasa de fallo de cambios es el
  clásico compromiso entre rendimiento e inestabilidad; informe las cuatro juntas, no como una única
  puntuación.

## Fuentes

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
