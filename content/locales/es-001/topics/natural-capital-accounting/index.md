# Contabilidad del capital natural

La contabilidad del capital natural sitúa al medio ambiente en el mismo plano que cualquier otro
activo nacional u organizativo: mide el stock de recursos naturales (bosques, suelos, ríos, humedales,
la atmósfera) y el flujo de servicios que producen (captura de carbono, protección frente a
inundaciones, ocio, alimentos), tanto en términos físicos como monetarios, de modo que el agotamiento
ambiental aparezca en la toma de decisiones del mismo modo que lo haría agotar el capital financiero.
El Reino Unido es uno de los gobiernos más avanzados en hacer esto de forma sistemática, impulsado por
el 25 Year Environment Plan (2018) e implementado a través de las cuentas de capital natural del Reino
Unido de la ONS y la guía complementaria del Green Book de HM Treasury.

## Por qué es importante

La contabilidad convencional —tanto corporativa como gubernamental— trata un bosque como carente de
valor hasta que se tala y se vende como madera, momento en el que se convierte en PIB. La contabilidad
del capital natural existe para cerrar esa brecha: el 25 Year Environment Plan del Reino Unido
comprometió al gobierno a integrar el pensamiento de capital natural en toda la política, declarando
explícitamente la ambición de ser "la primera generación en dejar el medio ambiente en mejor estado del
que lo encontramos". Desde entonces, la ONS ha publicado cuentas anuales de capital natural del Reino
Unido (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
que estiman el valor monetario de los servicios de los ecosistemas —desde el ocio en bosques hasta los
beneficios para la salud de los espacios verdes urbanos y el almacenamiento de carbono en turberas—
usando el mismo marco de Cuentas Nacionales que se usa para el capital producido, de modo que el
capital natural pueda eventualmente figurar en el mismo balance que las carreteras, los edificios y el
equipamiento. La guía Enabling a Natural Capital Approach (ENCA) de HM Treasury, complementaria al
Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
establece cómo quienes valoran deberían valorar los costes y beneficios ambientales en los análisis de
viabilidad, de modo que un proyecto de carretera que destruye un bosque antiguo o un proyecto contra
inundaciones que restaura un humedal puedan compararse en términos monetarios coherentes en lugar de
que uno tenga una cifra y el otro un párrafo de advertencias.

## Las matemáticas

```
Valor del activo de servicio del ecosistema = VAN del flujo de
servicios que proporciona el activo

Valor del activo = Σ (t = 1 a T) [valor del flujo de servicio anual_t
/ (1 + r)^t]

donde:
  valor del flujo de servicio_t = cantidad de servicio en el año t ×
                          valor unitario (p. ej., visitas recreativas
                          × valor por visita; toneladas de carbono
                          capturadas × precio del carbono)
  r = tasa de descuento (tasa de descuento social del Green Book;
      véase [la tasa de descuento social](../social-discount-rate/))
  T = horizonte temporal durante el cual se espera que el activo
      proporcione el servicio
```

Esta es la misma estructura de valor actual neto usada para valorar el capital producido o valorar
cualquier inversión pública bajo [la valoración del Green Book](../green-book-appraisal/): la
contribución de la contabilidad del capital natural es proporcionar cantidades físicas y valores
unitarios creíbles para servicios a los que antes se les ponía precio cero.

## Ejemplo práctico

**Bosque urbano, valor recreativo**: un bosque de 50 hectáreas recibe una estimación de 80 000
visitas recreativas al año, cada una valorada (mediante el método de coste de viaje o de preferencia
declarada; véanse [la valoración por preferencia revelada](../revealed-preference-valuation/) y [la
valoración por preferencia declarada](../stated-preference-valuation/)) en 3 £ por visita. Se espera
que el bosque siga proporcionando este servicio durante 50 años, valorado a una tasa de descuento del
3,5%.

```
Valor recreativo anual = 80.000 × 3 £ = 240.000 £/año

VAN a 50 años al 3,5% ≈ 240.000 £ × factor de anualidad(3,5%, 50 años)
factor de anualidad(3,5%, 50) ≈ 21,4

Valor del activo ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**Añadiendo el almacenamiento de carbono**: el mismo bosque captura una estimación de 400 toneladas de
CO2 al año, valoradas al precio del carbono no comercializado del gobierno de aproximadamente 75
£/tonelada (ilustrativo; use los valores de carbono publicados actuales de BEIS/DESNZ para una
valoración en producción).

```
Valor anual del carbono = 400 × 75 £ = 30.000 £/año
VAN a 50 años al 3,5% ≈ 30.000 £ × 21,4 ≈ 642.000 £

Valor total del activo bosque (ocio + carbono) ≈ 5.136.000 £ + 642.000 £
                                                   ≈ 5.778.000 £
```

Esto es antes de añadir la atenuación de inundaciones, la biodiversidad o los servicios de calidad del
aire que la guía ENCA también pide considerar a quienes valoran; el total es deliberadamente un suelo,
no un techo.

## Conexión con la ingeniería de software

- Los sistemas de gestión de activos y medioambientales para ayuntamientos y organismos (parques,
  carreteras, masas de agua) pueden adjuntar un registro de capital natural junto a su registro de
  activos físicos, usando el mismo patrón de flujo de servicio por valor unitario que cualquier otra
  [base de datos de coste unitario](../unit-cost-databases/) que mantenga la organización.
- Como el VAN del capital natural es sensible a la tasa de descuento (véase el factor de anualidad del
  ejemplo práctico), cualquier herramienta que lo calcule debería exponer la tasa y el horizonte como
  entradas visibles, no enterrarlos: el mismo principio de transparencia tratado en [la equidad
  intergeneracional y el descuento por sostenibilidad](../intergenerational-equity-and-sustainability-discounting/).
- Las cuentas de capital natural son cada vez más un insumo obligatorio para las secciones de impacto
  ambiental de un análisis de viabilidad de [la valoración del Green Book](../green-book-appraisal/);
  un equipo de entrega que construya herramientas de análisis de viabilidad debería tratar las cuentas
  de la ONS y los valores unitarios de la ENCA como datos de referencia que integrar, no algo que
  quienes valoran recalculan desde cero cada vez.

## Errores habituales

- **Contar dos veces servicios de ecosistema solapados**: el valor recreativo y el valor de
  biodiversidad de un mismo emplazamiento pueden compartir datos subyacentes de disposición a pagar; la
  guía ENCA advierte explícitamente contra sumar valoraciones derivadas de instrumentos de encuesta
  solapados.
- **Tratar el valor de un activo de capital natural como estático**: los flujos de servicio cambian
  con el clima, la gestión y la presión del uso del suelo; el valor de carbono y atenuación de
  inundaciones de un bosque en esta década no es una propiedad permanente del emplazamiento.
- **Usar valores unitarios de media nacional para una decisión muy local**: una hectárea de bosque
  urbano accesible y una hectárea de páramo remoto tienen un valor recreativo muy distinto; la guía
  ENCA recomienda valores locales o específicos del emplazamiento donde estén disponibles en lugar de
  recurrir por defecto a las medias nacionales.

## Fuentes

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
