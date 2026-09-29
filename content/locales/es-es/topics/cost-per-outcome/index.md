# Coste por resultado

El coste por resultado es el gasto total de un programa dividido entre el número de personas que
logran un cambio definido y significativo en sus circunstancias, no el número de quienes simplemente
recibieron un servicio. Es la métrica de eficiencia más afilada que un financiador o un equipo de
entrega puede usar, porque obliga a plantear una pregunta previa que la mayoría de las organizaciones
benéficas evitan: ¿qué cuenta exactamente como éxito?

## Por qué es importante

Un banco de alimentos puede reportar dos cifras muy distintas a partir de las cuentas del mismo año.
El coste por paquete de alimentos distribuido podría ser de 15 £. El coste por hogar que llega a
lograr seguridad alimentaria —que ya no necesita ayuda alimentaria de emergencia, verificado en un
punto de seguimiento— podría ser de 340 £. Ambas son ciertas. Solo una le dice a un financiador si el
dinero está funcionando. La brecha entre ambas es la brecha entre un producto y un resultado: un
paquete entregado es un producto; un hogar que ya no está en crisis es un resultado. Véase
[resultados frente a productos](../outcomes-vs-outputs/).

El tercer sector del Reino Unido lleva dos décadas construyendo infraestructura para forzar esta
distinción. El "enfoque de cuatro pilares" de New Philanthropy Capital para la eficacia de las
organizaciones benéficas pide explícitamente a las organizaciones que declaren sus resultados antes
que sus productos, e Inspiring Impact —la colaboración de medición de impacto respaldada por
financiadores del Reino Unido— publica una Matriz de Resultados que muchas solicitudes de subvención
ahora exigen que las organizaciones benéficas completen. El programa anual de investigación "State of
Hunger" del Trussell Trust, realizado con la Universidad Heriot-Watt, existe precisamente porque los
recuentos de paquetes por sí solos no dicen nada sobre si las personas escapan de la inseguridad
alimentaria.

El coste por resultado solo significa algo una vez que se ha fijado el contrafactual: un resultado
logrado "de todos modos" no es un resultado que el programa compró. Véanse [análisis
contrafactual](../counterfactual-analysis/) y [desplazamiento y atribución](../displacement-and-attribution/).

## Las matemáticas

```
Coste por resultado = Coste total del programa / Número de beneficiarios
                       que logran el resultado definido

donde:
  Coste total del programa   = coste de entrega directa + parte proporcional
                                de gastos generales
  Resultado definido         = un cambio de estado predefinido y medible
                                (p. ej., "con seguridad alimentaria en el
                                seguimiento a 6 meses", no "recibió un
                                paquete de alimentos")
```

Compárelo con [bases de datos de coste unitario](../unit-cost-databases/) (p. ej., referencias de
coste unitario específicas del sector) para juzgar si un coste por resultado dado es bueno, medio o
deficiente en relación con intervenciones comparables.

## Ejemplo práctico

**Banco de alimentos, un año**:

- Coste total del programa: 450 000 £
- Paquetes distribuidos: 30 000
- Coste por paquete (una métrica de producto): 450 000 £ / 30 000 = **15 £**

La organización benéfica también realiza una encuesta de seguimiento a seis meses con una muestra de
hogares, y encuentra que el 35% de los hogares que recibieron tres o más paquetes declaran ya no
necesitar ayuda alimentaria de emergencia y puntúan por encima del umbral de seguridad alimentaria en
un módulo de encuesta estándar sobre seguridad alimentaria. De los 1800 hogares que recibieron tres o
más paquetes ese año, 630 logran ese resultado.

```
Coste por resultado = 450.000 £ / 630 = 714 £ por hogar que logra
                       seguridad alimentaria
```

Esa cifra de 714 £ es la que debería usar un financiador que compare esta organización benéfica con un
piloto de transferencias de efectivo o un servicio de asesoramiento sobre deudas, no 15 £. Si un
programa comparable de transferencias de efectivo en la misma región logra seguridad alimentaria a
500 £ por hogar, el banco de alimentos no es evidentemente la vía más eficiente hacia el mismo
resultado, aunque su coste por paquete parezca barato.

## Conexión con la ingeniería de software

La mayoría de los sistemas de gestión de casos están construidos para registrar productos, porque los
productos son lo que ocurre dentro de la transacción (se entrega un paquete, se presenta un
formulario). Los resultados normalmente ocurren más tarde, a menudo fuera de la ventana de captura
habitual del sistema, y requieren una decisión de diseño deliberada: construir un mecanismo de
seguimiento (un disparador de encuesta, un flujo de recontacto, un ejercicio de vinculación de datos)
como una funcionalidad de primera clase, no como un añadido de última hora para un informe anual.
Quienes construyen plataformas de gestión de subvenciones o de gestión de casos para el sector
deberían tratar "cuál es el evento de resultado, y cómo lo observamos" como una pregunta de requisitos
planteada antes de fijar el modelo de datos; es mucho más difícil incorporar a posteriori un campo de
resultado que un contador de productos. Véanse [resultados frente a productos](../outcomes-vs-outputs/)
y [modelo lógico](../logic-model/) para estructurar esa conversación de requisitos, y [coste por
beneficiario](../cost-per-beneficiary/) para la métrica más rápida y burda a la que recurren los
equipos cuando el seguimiento de resultados aún no está construido.

## Errores habituales

- **Reportar productos disfrazados de resultados.** "Personas alcanzadas" no es "personas ayudadas".
  Si la métrica puede producirse con un registro del sistema sin contacto de seguimiento, es casi con
  toda seguridad un producto.
- **Manipulación del denominador.** Reducir la población de resultado a "quienes completaron el
  programa" descarta silenciosamente a quienes abandonaron, a menudo los casos más difíciles, e infla
  la tasa aparente. Declare el denominador como todos los que empezaron, no todos los que terminaron.
- **Ausencia de contrafactual.** Contar a cualquiera que lograra el resultado, incluidos quienes lo
  habrían logrado de todos modos, exagera lo que el programa compró. Véase [análisis
  contrafactual](../counterfactual-analysis/).
- **Comparar entre definiciones de resultado incompatibles.** "Con seguridad alimentaria" medido por
  un módulo de encuesta validado no es comparable a "con seguridad alimentaria" autodeclarado en un
  formulario de satisfacción; una tabla comparativa de coste por resultado solo es honesta cuando las
  definiciones de resultado coinciden.

## Fuentes

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
