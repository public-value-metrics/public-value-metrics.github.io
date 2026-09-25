# Métricas de flujo en la entrega gubernamental

Las métricas de flujo —la Ley de Little, los límites de trabajo en curso (WIP) y la eficiencia de
flujo— describen la rapidez con la que el trabajo se mueve por un sistema de capacidad limitada. Un
tablero de sprint es uno de esos sistemas; una cola de solicitudes de prestaciones, un registro de
solicitudes urbanísticas o un atraso de casos de visado son exactamente las mismas matemáticas con
otro uniforme.

## Por qué es importante

Las cargas de casos del gobierno son sistemas de colas, y los sistemas de colas obedecen las leyes de
colas se midan o no. Los plazos estatutarios de determinación lo dejan explícito: bajo el régimen de
Town and Country Planning, la mayoría de las solicitudes urbanísticas menores llevan un objetivo
estatutario de determinación de 8 semanas y las solicitudes mayores de 13 semanas: un compromiso de
tiempo de ciclo incorporado directamente en la ley. El atraso de casos de asilo del Home Office,
examinado repetidamente por la National Audit Office y el Home Affairs Select Committee, es un caso
bien documentado de un sistema público en el que el trabajo en curso creció más rápido que el
rendimiento durante un periodo sostenido, empujando los tiempos de ciclo mucho más allá de cualquier
expectativa estatutaria o de servicio. Las métricas de flujo dan tanto a la ingeniería como a los
gestores de casos un vocabulario compartido y cuantitativo para exactamente este modo de fallo, en
lugar de dejarlo como un "problema de atraso" cualitativo.

## Las matemáticas

```
Ley de Little:  WIP = Rendimiento × Tiempo de ciclo
           →   Tiempo de ciclo = WIP / Rendimiento

Eficiencia de flujo = tiempo activo (de contacto) / tiempo total de ciclo   (Vacanti)

Efecto del límite de WIP: con rendimiento fijo, reducir a la mitad el WIP
reduce aproximadamente a la mitad el tiempo de ciclo medio (Ley de
Little reordenada) — la palanca disponible sin añadir personal.
```

Véase [las métricas DORA para el valor público](../dora-metrics-for-public-value/) para las mismas
matemáticas aplicadas a los procesos de despliegue de software en lugar de a la gestión de casos.

## Ejemplo práctico

**Departamento de urbanismo de un ayuntamiento**: 400 solicitudes abiertas en cada momento (WIP), el
equipo resuelve 50 solicitudes/semana (rendimiento).

```
Tiempo de ciclo = WIP / Rendimiento = 400 / 50 = 8 semanas
```

Eso cae exactamente en el objetivo estatutario de 8 semanas para las solicitudes menores, sin ningún
margen, lo que significa que cualquier variabilidad en la demanda entrante o en el tiempo de respuesta
de los consultados empuja las determinaciones más allá del plazo legal.

**Eficiencia de flujo**: de esas 8 semanas (56 días naturales), una solicitud tiene habitualmente
alrededor de 6 horas de tiempo real de procesamiento por parte del personal técnico.

```
Eficiencia de flujo = 6 horas / (56 días × 8 horas laborables/día)
                = 6 / 448 ≈ 1,3%
```

La referencia de Vacanti para equipos de software sitúa la eficiencia de flujo típica en el 15-20%;
la gestión de casos gubernamental, con múltiples traspasos a consultados estatutarios y ventanas de
consulta pública, a menudo funciona un orden de magnitud por debajo. El 98,7% del tiempo de "espera"
es a donde realmente van las ocho semanas, no a la capacidad del personal técnico.

**Intervención de límite de WIP**: limitar las solicitudes abiertas por gestor de casos a 15 en lugar
de un ilimitado 25 (manteniendo constante el rendimiento) desplaza el WIP de 400 a aproximadamente 240
en un equipo de 16 personas:

```
Nuevo tiempo de ciclo = 240 / 50 = 4,8 semanas
```

Una reducción de casi la mitad del tiempo de ciclo a partir de un cambio de política, no de un aumento
de personal: la misma palanca que accionan los equipos de entrega al estilo DORA cuando limitan el WIP
de sprint.

## Conexión con la ingeniería de software

Las métricas de flujo son el lenguaje compartido entre el tablero Kanban de un equipo de entrega y la
planta de gestión de casos para la que construye software: la cola de un gestor de casos y la cola de
una solicitud de extracción (pull request) están ambas gobernadas por la Ley de Little, y ambas
incumplen sus objetivos de tiempo de ciclo de la misma manera: demasiado WIP en relación con el
rendimiento. Esto importa directamente para [el coste del retraso en programas públicos](../cost-of-delay-in-public-programmes/):
el tiempo de ciclo × el CoD es las libras que están sentadas en la cola en cada momento, y también
importa para [los estándares de servicio y métricas de transacción](../service-standards-and-transaction-metrics/),
donde un objetivo de plazo publicado es un compromiso de tiempo de ciclo que solo las métricas de flujo
pueden diagnosticar cuando se incumple. El software de un sistema de gestión de casos debería exponer
el WIP y el tiempo de ciclo como métricas operativas de primera clase, no enterrarlas dentro de un
sistema de gestión de casos que nadie consulta.

## Errores habituales

- **Añadir límites de WIP sin corregir el cuello de botella real**: si la restricción es el tiempo de
  respuesta de un consultado estatutario externo, limitar el WIP del gestor de casos solo desplaza la
  cola aguas arriba en lugar de acortarla.
- **Tratar la eficiencia de flujo como un objetivo que manipular**: apresurar el 1,3% de tiempo activo
  apenas mueve el tiempo de ciclo; la palanca está casi siempre en los estados de espera, lo que
  habitualmente significa rediseño de procesos, no velocidad del personal técnico.
- **Ignorar la variabilidad**: la Ley de Little describe promedios; una carga de casos con alta
  varianza de demanda necesita capacidad de reserva, no solo un límite de WIP más ajustado, o los
  plazos estatutarios se seguirán incumpliendo en la cola volátil aunque el promedio mejore.
- **Medir el WIP de forma inconsistente**: un caso "abierto" en el sistema de registro pero en
  realidad estancado esperando a un tercero sigue siendo WIP; excluirlo favorece las cifras sin
  cambiar la realidad de cara a la ciudadanía.

## Fuentes

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
