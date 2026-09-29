# Valor público

El valor público es el valor que un gobierno u organización del sector social crea para la ciudadanía
en su conjunto: no solo los productos que genera o el dinero que gasta, sino si la sociedad está mejor
porque la organización existe y actuó como lo hizo. El "triángulo estratégico" de Mark Moore de 1995
es la prueba estándar: una iniciativa pública solo se justifica cuando es *legítima y respaldada*,
*sustancialmente valiosa* y *operativamente entregable*, las tres cosas a la vez.

## Por qué es importante

El valor del sector privado es relativamente fácil de fijar: ingresos menos coste, adjudicado por
clientes que pueden marcharse. El valor público no tiene una señal de mercado equivalente. Un servicio
penitenciario, una autoridad fiscal y un equipo de protección infantil producen todos ellos cosas que
la ciudadanía no puede simplemente decidir no comprar, y el "cliente" (el contribuyente, el infractor,
el niño) a menudo no es la misma persona que el mandante político que autoriza el presupuesto.
*Creating Public Value: Strategic Management in Government* de Moore (Harvard University Press, 1995)
proporciona la disciplina que falta: un gestor debería poder declarar (1) qué valor público crea su
iniciativa, (2) de dónde proviene su legitimidad y financiación para perseguirlo —un ministro, un
ayuntamiento, un mandato, una subvención— y (3) si su organización puede realmente entregarlo con las
personas, la tecnología y los procesos disponibles. Un programa que puntúa bien en solo una o dos
patas del triángulo aún no está justificado, por bien intencionado que sea.

Esto importa en la práctica porque la mayoría de los fallos de software del sector público no son
fallos tecnológicos. Un sistema puede ser técnicamente excelente y operativamente entregable y aun así
fracasar porque nadie en el entorno legitimador —ministros, comités de supervisión, el público—
realmente quería lo que optimiza. Tanto el servicio digital de Universal Credit como el NHS National
Programme for IT se citan en la literatura de administración pública del Reino Unido como casos en los
que las patas operativa y de legitimidad del triángulo estaban desfasadas respecto a la pata de la
misión.

## Las matemáticas

El valor público es un marco, no una fórmula, pero estructura casos de inversión que de otro modo
serían vagos en tres preguntas comprobables:

```
Prueba del triángulo estratégico — proceder solo si se cumplen las
tres:

1. Legitimidad y apoyo: ¿quién ha autorizado esto, y sigue el entorno
   autorizador (legislatura, ministro, ayuntamiento, junta, opinión
   pública) respaldándolo a medida que se comprometen los recursos?

2. Valor público: ¿qué bien concreto y describible produce esto para
   la ciudadanía o la sociedad —seguridad, salud, oportunidad,
   confianza, justicia— y para quién?

3. Capacidad operativa: ¿puede la organización realmente entregarlo
   con el personal, la tecnología, los socios y la autoridad legal
   actuales, o con un plan creíble para adquirirlos?
```

Una iniciativa débil típicamente falla al menos una pata: técnicamente entregable pero sin mandato (un
piloto de intercambio de datos que nadie aprobó); popular pero no entregable (un servicio digital
prometido sin capacidad de ingeniería); o autorizada y entregable pero vacía de valor (un panel que
nadie usa).

## Ejemplo práctico

**Ayuntamiento**: el equipo digital de un ayuntamiento propone una herramienta de IA de clasificación
para solicitudes de prestación de vivienda.

- *Legitimidad*: el gabinete del ayuntamiento ha aprobado una estrategia digital primero, pero los
  miembros electos responsables de la seguridad social no han dado su visto bueno específicamente a la
  toma de decisiones automatizada: una brecha, no una luz verde.
- *Valor público*: un procesamiento más rápido (beneficio declarado: de 10 días a 2 días) solo es
  valor real si a los solicitantes no se les rechaza injustamente; la afirmación de valor debe incluir
  la precisión, no solo la velocidad.
- *Capacidad operativa*: el ayuntamiento tiene una única científica de datos y ningún proceso de
  supervisión de modelos, así que el plazo declarado de 2 días no es actualmente entregable con la
  tasa de error declarada.

Dos de las tres patas fallan. El marco de Moore dice: no proceder según el alcance actual; primero
asegure la autorización explícita para las decisiones automatizadas y construya capacidad de
supervisión, o el "valor público" reclamado en el análisis de viabilidad es ficticio.

**Gobierno central**: el servicio de presentación en línea de una autoridad fiscal tiene una
legitimidad sólida (mandato estatutario) y una capacidad operativa sólida (un equipo existente entrega
de forma fiable), pero un valor público débil si la adopción es baja porque las personas excluidas
digitalmente —véase [inclusión digital](../digital-inclusion/)— se ven empujadas hacia un canal que no
pueden usar. El triángulo expone lo que un panel centrado solo en la entrega ocultaría.

## Conexión con la ingeniería de software

El valor público es el concepto paraguas bajo el que se sitúa todo este repositorio: [relación
calidad-precio](../value-for-money/) proporciona la prueba de economía/eficiencia/eficacia para si los
recursos se usaron bien; [el coste de oportunidad en el gasto público](../opportunity-cost-in-public-spending/)
valora qué más podría haber hecho el dinero; y [la adicionalidad y el peso muerto](../additionality-and-deadweight/),
[el desplazamiento y la atribución](../displacement-and-attribution/), y [el análisis
contrafactual](../counterfactual-analysis/) juntos comprueban si el valor reclamado es real en lugar
de asumido. Para quienes hacen ingeniería, el triángulo estratégico es un útil pre-mortem para
cualquier decisión de producto del sector público:

- Antes de definir el alcance de una funcionalidad, pregunte quién la autorizó y si esa autorización
  sigue vigente: una funcionalidad construida para un ministro que ya se ha ido puede haber perdido
  silenciosamente su pata de legitimidad.
- Trate "¿podemos construirlo?" y "¿deberíamos construirlo?" como preguntas genuinamente separadas; la
  capacidad de ingeniería solo responde a la tercera pata del triángulo.
- Los documentos de requisitos de producto para servicios públicos deberían declarar explícitamente la
  afirmación de valor público, no solo la historia de usuario, porque el valor para el usuario y el
  valor público no siempre son lo mismo (véase [resultados frente a productos](../outcomes-vs-outputs/)).

## Errores habituales

- **Tratar la capacidad operativa como justificación suficiente.** "Podemos construirlo" solo responde
  a una pata del triángulo; los equipos con una fuerte capacidad de entrega habitualmente lanzan cosas
  que nadie autorizó querer y que no crean ningún bien público describible.
- **Confundir legitimidad con legalidad.** Un programa puede ser legal y aun así carecer del apoyo
  político y público necesario para sostenerlo a través de una fase de entrega difícil; la cobertura
  legal no es lo mismo que un mandato.
- **Suponer que el valor público es lo que el departamento comisionador diga que es.** El modelo de
  Moore exige que la afirmación de valor sea comprobable frente a los intereses reales de la
  ciudadanía, no simplemente afirmada por el financiador; de lo contrario, el marco colapsa en una
  autocertificación.

## Fuentes

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
