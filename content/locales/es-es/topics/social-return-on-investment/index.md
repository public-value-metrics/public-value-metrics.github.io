# Retorno social de la inversión (SROI)

El retorno social de la inversión es un marco para medir, monetizar y contabilizar un concepto amplio
de valor —social, ambiental y económico— y expresarlo como un ratio frente a los recursos invertidos,
por ejemplo "1,44 £ de valor social por cada 1 £ invertida". Se diseñó para extender la lógica de la
contabilidad financiera a resultados que los mercados no fijan por precio, sin perder la disciplina de
la contabilidad: cada cifra en un SROI debe poder rastrearse hasta un resultado definido por las
partes interesadas, una base de evidencia y un ajuste explícito por lo que habría ocurrido de todos
modos.

## Por qué es importante

El SROI lo mantienen Social Value UK y Social Value International, organismos sucesores de la SROI
Network, cuya "A Guide to Social Return on Investment" (2012) sigue siendo la metodología de
referencia. El marco descansa en siete principios —involucrar a las partes interesadas, comprender qué
cambia, valorar las cosas que importan, incluir solo lo material, no exagerar, ser transparente y
verificar el resultado— y es el principio cinco, "no exagerar", el que más informes de SROI incumplen
en la práctica. Un ratio producido saltándose los ajustes de peso muerto y atribución no es un SROI; es
una cifra de marketing disfrazada de SROI. Quienes construyen herramientas de informes para
organizaciones benéficas, empresas sociales o comisionadores necesitan conocer la diferencia, porque la
herramienta o bien impondrá la disciplina o facilitará saltársela.

## Las matemáticas

El SROI depende de [una teoría del cambio](../theory-of-change/) para identificar qué resultados
entran en el alcance, y los expresa usando la misma cadena de responsabilidad que [un modelo
lógico](../logic-model/):

```
Ratio SROI = Valor actual de los resultados / Valor de los insumos

Proceso:
 1. Establecer el alcance e identificar a las partes interesadas cuyos
    resultados se medirán
 2. Mapear resultados (una teoría del cambio, evidenciada con las
    partes interesadas, no asumida)
 3. Evidenciar los resultados y darles un valor usando indicadores
    financieros indirectos
 4. Establecer el impacto: valor bruto − peso muerto − atribución −
    desplazamiento, luego aplicar la caída
 5. Calcular el SROI: valor actual neto del impacto ÷ valor de los
    insumos
 6. Informar, usar e integrar — el ratio es un instrumento de
    comunicación, no el punto final
```

El peso muerto, la atribución y el desplazamiento se tratan en [la adicionalidad y el peso
muerto](../additionality-and-deadweight/) y [el desplazamiento y la atribución](../displacement-and-attribution/);
los tres existen para aislar el impacto [contrafactual](../counterfactual-analysis/) genuino del
resultado bruto.

## Ejemplo práctico

**Programa de empleo de un ayuntamiento**: coste de insumo anual de 250 000 £. Sesenta participantes
pasan a empleo sostenido; un indicador financiero indirecto para ese resultado (mejora de bienestar,
menor dependencia de prestaciones e ingresos fiscales combinados) es de 8500 £ por persona para el
primer año; véase [bases de datos de coste unitario](../unit-cost-databases/) sobre de dónde proceden
esos indicadores.

- Valor de resultado bruto: 60 × 8500 £ = 510 000 £
- Menos peso muerto (el 40% probablemente habría encontrado trabajo sin el programa): 510 000 £ × 0,60
  = 306 000 £
- Menos atribución (el 30% del cambio restante se debe al apoyo de otros organismos): 306 000 £ × 0,70
  = 214 200 £
- Resultado del año 2 con una caída del 30%: 214 200 £ × 0,70 = 149 940 £, descontado al 3,5%/año
  (véase [la tasa de descuento social](../social-discount-rate/)): 149 940 £ ÷ 1,035 = 144 870 £
- Valor actual total del impacto: 214 200 £ + 144 870 £ = 359 070 £
- **Ratio SROI: 359 070 £ ÷ 250 000 £ = 1,44**, reportado como "1,44 £ de valor social por cada 1 £
  invertida"

**Organización benéfica**: un servicio de acompañamiento de 60 000 £ reduce la soledad de 80 personas
mayores, valorado con un indicador de 1100 £/persona/año. Valor bruto de 88 000 £; tras un 35% de peso
muerto y un 15% de atribución, el impacto neto es 88 000 £ × 0,65 × 0,85 = 48 620 £, un ratio SROI de
0,81: por debajo del punto de equilibrio, que es un hallazgo legítimo y útil, no un fallo a la hora de
redactarlo.

## Conexión con la ingeniería de software

Una calculadora de SROI que permita a un usuario introducir recuentos de resultados y valores
indirectos pero no tenga ningún campo obligatorio para el peso muerto, la atribución o una teoría del
cambio vinculada producirá ratios inflados por defecto, porque omitir los ajustes es el camino de
menor resistencia. Construya la disciplina en el esquema: cada fila de resultado debería referenciar
un grupo de partes interesadas, una cantidad evidenciada, un indicador financiero con su fuente, y
campos de peso muerto/atribución no opcionales. Véase [resultados frente a productos](../outcomes-vs-outputs/)
para la distinción de la que depende el mapeo de resultados del SROI, y [el modelo lógico](../logic-model/)
para la cadena que la herramienta debería reflejar en su modelo de datos.

## Errores habituales

- **Saltarse el peso muerto y la atribución.** El ratio destacado sin estos ajustes es una cifra
  bruta, no una cifra de impacto neto, y los principios de Social Value UK exigen explícitamente
  ambos.
- **Comparar ratios entre organizaciones.** Un ratio SROI depende de decisiones de alcance e
  indicadores tomadas caso por caso; tratar un ratio de 4:1 de un informe como "mejor" que un ratio de
  2:1 de otro ignora que los supuestos no están estandarizados como un ratio contable financiero.
- **Doble cómputo de indicadores solapados.** Apilar un indicador de "soledad reducida" con uno de
  "bienestar mental mejorado" para los mismos beneficiarios puede valorar dos veces un mismo cambio
  subyacente.
- **Saltarse la participación de las partes interesadas.** El principio uno exige que los resultados se
  definan con las personas que los experimentan, no asumidos por quien analiza mientras construye el
  modelo.

## Fuentes

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
