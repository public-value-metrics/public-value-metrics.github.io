# Análisis social de coste-beneficio (ASCB)

El análisis social de coste-beneficio convierte cada coste y beneficio de una política o programa
—de mercado y no de mercado— en una unidad monetaria común, descuenta los flujos futuros a valor
actual y los compensa entre sí para producir una única cifra: ¿esta propuesta deja mejor a la
sociedad, y en cuánto?

## Por qué es importante

El ASCB es el método cuantitativo por defecto en el caso económico de [la valoración del Green
Book](../green-book-appraisal/): la guía de HM Treasury exige que las propuestas demuestren un valor
social actual neto (VSAN) positivo siempre que los beneficios puedan monetizarse de forma creíble,
usando la disposición a pagar como principio de valoración básico para los bienes no de mercado
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
capítulo 5). La disciplina que impone es que el análisis de coste-beneficio "social" no es el mismo
ejercicio que una valoración de inversión del sector privado: debe incluir costes y beneficios que
recaen sobre terceros que no son parte de la transacción (externalidades), debe usar [la tasa de
descuento social](../social-discount-rate/) en lugar de un coste de capital comercial, y debería
aplicar [la ponderación distributiva](../distributional-weighting/) cuando una libra importa más a un
hogar pobre que a uno rico.

Donde el ASCB falla es exactamente donde sus críticos lo esperan: los bienes sin análogo de mercado
—aire limpio, cohesión social, el valor de una vida salvada— tienen que monetizarse usando métodos de
[preferencia declarada](../stated-preference-valuation/) o [preferencia revelada](../revealed-preference-valuation/),
o hay que construir un [precio sombra](../shadow-pricing/). Cuando la monetización es controvertida en
lugar de simplemente difícil, el propio Green Book recomienda recurrir a [el análisis de
coste-efectividad](../cost-effectiveness-analysis-in-government/) o [el análisis de decisión
multicriterio](../multi-criteria-decision-analysis/) en lugar de forzar una cifra en la que nadie cree.

## Las matemáticas

```
VSAN = Σ [t=0 a T] (Beneficio_t − Coste_t) / (1 + r)^t

donde:
  Beneficio_t = todos los beneficios monetizados en el año t,
                incluidos los bienes no de mercado valorados mediante
                preferencia declarada/revelada o precio sombra
  Coste_t    = todos los costes monetizados en el año t, incluido el
                coste de oportunidad de los recursos (véase
                ../opportunity-cost-in-public-spending/)
  r         = tasa de descuento social (HM Treasury fija el 3,5%
              disminuyendo a tasas menores más allá del año 30, según
              el Anexo A del Green Book)
  T         = periodo de valoración

Ratio beneficio-coste (BCR) = Σ VA(Beneficios) / Σ VA(Costes)
```

Un BCR por encima de 1 (o un VSAN por encima de cero) indica valor social neto. Las categorías de
relación calidad-precio del Green Book (usadas en la valoración de transporte e infraestructura)
etiquetan los rangos de BCR: por debajo de 1,0 es mala relación calidad-precio, 1,0-1,5 es baja,
1,5-2,0 es media, 2,0-4,0 es alta, y por encima de 4,0 es muy alta. El análisis de sensibilidad
—repetir el VSAN bajo supuestos pesimistas y optimistas— es obligatorio, no opcional, porque los
beneficios no de mercado monetizados llevan bandas de incertidumbre amplias.

## Ejemplo práctico

**Ayuntamiento**: un ayuntamiento valora una inversión de 3 millones de libras en una nueva red
ciclista y peatonal a lo largo de un periodo de valoración de 20 años a una tasa de descuento del
3,5%.

```
Costes: 3m £ de capital en el año 0, 50.000 £/año de mantenimiento
(años 1-20)
VA(mantenimiento) ≈ 50.000 £ × 14,2 (factor de anualidad a 20 años al
3,5%) ≈ 710.000 £
VA total(costes) ≈ 3,71m £

Beneficios (todos monetizados mediante herramientas de valoración
publicadas por DfT/OMS):
  Beneficio de salud por mayor actividad física: 180.000 £/año
  Reducción del absentismo: 40.000 £/año
  Descongestión (menos viajes en coche): 60.000 £/año
  Flujo de beneficio total: 280.000 £/año
VA(beneficios) ≈ 280.000 £ × 14,2 ≈ 3,98m £

VSAN = 3,98m £ − 3,71m £ = +0,27m £
BCR = 3,98 / 3,71 = 1,07 → relación calidad-precio "baja"
```

El proyecto supera el listón, pero por poco; una prueba de sensibilidad con una estimación de
beneficio de salud un 20% menor (reflejando la incertidumbre genuina en la valoración de la actividad
física) hace que el BCR caiga por debajo de 1,0, que es exactamente por lo que el Green Book exige que
la tabla de sensibilidad se publique junto a la cifra destacada, no solo la estimación central.

**Organización benéfica**: un programa de prevención de mortalidad infantil que cuesta 500 000 £/año
se evalúa usando el valor de una vida estadística (VSL) —un precio sombra, no un precio de mercado
observado— de aproximadamente 2,1 millones de libras (la cifra actualizada de 2023 de HM Treasury, a
su vez derivada de estudios de preferencia declarada). Evitar una muerte infantil al año frente a un
coste de 500 000 £ da un BCR de 4,2, cómodamente de relación calidad-precio "muy alta", pero todo el
resultado descansa en la cifra del VSL, razón por la cual cualquier ASCB que use el VSL debe declararlo
como un supuesto, no como un hecho.

## Conexión con la ingeniería de software

El ASCB es el marco natural para las decisiones de inversión en plataformas e infraestructura en el
software gubernamental: comparar una plataforma de identidad compartida frente a soluciones puntuales
departamentales, por ejemplo, requiere monetizar beneficios como la reducción del coste de
incorporación duplicada, la reducción del fraude y un tiempo hasta el servicio más rápido que no
tienen precio de mercado por sí solos. Quienes construyen el servicio subyacente deberían esperar que
los responsables del programa pidan insumos para este análisis: costes unitarios de transacciones
(véase [coste por transacción](../cost-per-transaction/)), volúmenes esperados y costes de
degradación/tiempo de inactividad. La disciplina que más importa importar: descontar los beneficios
futuros, nombrar explícitamente la línea base contrafactual (véase [análisis
contrafactual](../counterfactual-analysis/)), y nunca presentar una única estimación puntual sin su
rango de sensibilidad.

## Errores habituales

- **Contar dos veces los beneficios.** Contar tanto "tiempo ahorrado" como "productividad ganada de
  ese tiempo" como líneas de beneficio separadas exagera el caso; el tiempo ahorrado es el beneficio,
  su uso posterior no es uno adicional a menos que se evidencie de forma independiente.
- **Omitir los costes desplazados.** Un proyecto que traslada la congestión de una carretera a otra, o
  traslada el fraude de un canal a otro, no ha creado el beneficio neto que su VSAN destacado implica;
  véase [el desplazamiento y la atribución](../displacement-and-attribution/).
- **Usar una tasa de descuento privada.** Aplicar un coste de capital comercial (digamos, 8-10%) en
  lugar de la tasa de descuento social infravalora sistemáticamente los beneficios públicos de largo
  horizonte como las ganancias de salud y ambientales; véase [la tasa de descuento social](../social-discount-rate/).
- **Monetizar lo indiscutido y despachar de forma superficial lo controvertido.** Si dos tercios del
  beneficio de una propuesta es un ahorro de eficiencia monetizado con confianza y un tercio es una
  ganancia de bienestar monetizada de forma poco firme, el VSAN destacado combina silenciosamente una
  cifra dura con una blanda; infórmelas por separado.

## Fuentes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
