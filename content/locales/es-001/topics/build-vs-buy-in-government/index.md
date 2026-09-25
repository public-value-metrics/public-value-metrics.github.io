# Construir frente a comprar en el gobierno

Construir frente a comprar (build vs buy) es una comparación estructurada y ajustada por riesgo entre
el desarrollo a medida y la adquisición comercial o estándar, comparadas según [el coste total de
propiedad](../total-cost-of-ownership-in-government-it/) descontado, el tiempo hasta obtener valor y
el riesgo. El gobierno es estructuralmente un sector comprador —el Technology Code of Practice
establece una presunción a favor de las soluciones estándar y en la nube—, y sin embargo los equipos
de ingeniería dentro de los departamentos siguen inclinándose por defecto hacia la construcción, por
las mismas razones que lo hacen los constructores en cualquier lugar.

## Por qué es importante

El Technology Code of Practice del Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>)
y la guía correspondiente del Service Manual sobre cómo decidir entre construir o comprar empujan a
los departamentos a justificar el desarrollo a medida frente a una presunción de que la capacidad
estándar debe comprarse, no construirse, y de que solo la capacidad genuinamente novedosa y
diferenciadora de la misión justifica código a medida. La guía complementaria de HM Treasury sobre el
sesgo de optimismo del Green Book, extraída de la revisión de 2002 de Mott MacDonald sobre grandes
contrataciones públicas, otorga a los proyectos de TI el rango de ajuste al alza más amplio de
cualquier categoría evaluada: se recomienda ajustar al alza las estimaciones de coste de capital entre
un 10% en el extremo inferior y hasta un 200% en el extremo superior antes de usarlas en la valoración,
lo que refleja lo mal que históricamente se han subestimado los desarrollos de software en toda la
contratación pública. El análisis de construir frente a comprar existe precisamente para forzar ese
ajuste de riesgo sobre la mesa antes de la aprobación, en lugar de dejar que aflore como una solicitud
de sobrecoste durante el ejercicio.

## Las matemáticas

```
Comparar sobre el mismo horizonte de 3-5 años, descontado a la tasa de
descuento social del Green Book (véase social-discount-rate.md):

VAN_opción = VA(beneficios, desplazados por el tiempo hasta obtener valor) − VA(CTP)

Ajustes de riesgo (patrón de sesgo de optimismo del Green Book):
  coste de construcción × 1,1-3,0        (rango de ajuste de proyectos de TI, Mott MacDonald)
  tiempo hasta valor de la construcción + 40-60% (previo de retraso de despliegue)
  comprar: añadir en su lugar una comprobación realista de integración
  y los costes de salida del contrato

Factores de decisión, en el orden en que habitualmente deciden:
  1. diferenciación — ¿es esta capacidad la misión, o es fontanería?
  2. tiempo hasta valor × coste del retraso (véase cost-of-delay-in-public-programmes.md)
  3. coste total de propiedad ajustado por riesgo
```

## Ejemplo práctico

Un ayuntamiento necesita un sistema de gestión de casos para servicios sociales de adultos. Comprar:
SaaS a 180 000 £/año, en producción en 4 meses. Construir: estimado en 900 000 £ más 150 000 £/año de
mantenimiento, en producción en 14 meses.

```
Coste de construcción ajustado por riesgo = 900.000 × 1,4 = 1.260.000 £
CTP a 5 años:
  comprar  = 180.000 × 5 = 900.000 £
  construir = 1.260.000 + 150.000 × 5 = 2.010.000 £

Término de retraso: el sistema evita 40.000 £/mes en evaluaciones
duplicadas; construir llega 10 meses más tarde que comprar.
Coste del retraso = 10 × 40.000 = 400.000 £

Comparación efectiva: 900.000 £ (comprar) frente a
2.010.000 + 400.000 = 2.410.000 £ (construir)
```

Comprar gana por aproximadamente 1,5 millones de libras a lo largo de cinco años, y la partida
individual más grande después de la propia estimación de construcción es el coste del retraso, que
una comparación puramente de gasto de capital nunca habría sacado a la luz.

## Conexión con la ingeniería de software

Las disciplinas que se trasladan directamente de este análisis a la práctica de entrega: **el ajuste
de riesgo basado en previos**: el ajuste al alza de Mott MacDonald es el equivalente en software del
sesgo de optimismo del Green Book aplicado de forma mecánica, por lo que los equipos deberían
argumentar excepciones a él en lugar de asumir que su estimación es la excepción; **la honestidad del
comparador**: la alternativa a construir es la mejor opción de compra disponible, no "nada", lo que
conecta directamente con [el coste de oportunidad en el gasto público](../opportunity-cost-in-public-spending/);
y **la comparación honesta del CTP**: toda propuesta de construcción debería compararse con [el coste
total de propiedad](../total-cost-of-ownership-in-government-it/) completo de una opción de compra, no
con su precio de catálogo. Cuando construir gana genuinamente, [el coste del retraso](../cost-of-delay-in-public-programmes/)
del tiempo de construcción adicional debería valorarse explícitamente en el análisis de viabilidad, no
dejarse como una suposición implícita de que el tiempo no importa.

## Errores habituales

- **Comparar el precio de catálogo del proveedor con una estimación de construcción no ajustada por
  riesgo**: esto favorece a la construcción por partida doble, una vez en coste y otra en calendario.
- **Mano de obra interna con coste cero**: el tiempo de ingeniería de la función pública se trata como
  "gratuito" porque ya está en el presupuesto de personal del departamento, lo que oculta su verdadero
  coste de oportunidad frente a otro trabajo que ese equipo podría estar haciendo.
- **Bloqueo (lock-in) no valorado en ambas direcciones**: los costes de salida del proveedor y de
  portabilidad de datos son reales, pero también lo es el factor autobús de una construcción a medida
  y su dependencia de retener a lo largo de su vida un pequeño equipo interno difícil de reemplazar.
- **Diferenciación de misión reclamada para la fontanería**: afirmar que "esto es esencial para
  nosotros" sobre un middleware de integración o un almacén de documentos; contrástelo con si una
  persona ciudadana o un gestor de casos notaría alguna vez cuál es el que se ejecuta por debajo.

## Fuentes

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
