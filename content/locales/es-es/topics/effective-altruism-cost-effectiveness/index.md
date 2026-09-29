# Coste-efectividad del altruismo eficaz

El razonamiento de coste-efectividad del altruismo eficaz (effective altruism, EA) clasifica las
intervenciones benéficas por la cantidad de bien —expresada más a menudo como vidas salvadas, o salud
ganada, por dólar gastado— y dirige el dinero hacia la intervención que compra más bien en el margen.
GiveWell es el actor más influyente del campo: publica estimaciones explícitas y actualizadas de coste
por vida salvada y coste por resultado para una lista reducida de "organizaciones benéficas
principales", y recomienda a los donantes dar a la que actualmente tenga margen para más financiación
al mejor precio.

## Por qué es importante

GiveWell establece la coste-efectividad como el criterio principal en su metodología publicada: busca
intervenciones respaldadas por evidencia, estima su coste-efectividad en una unidad común y las
clasifica entre causas completamente distintas —mosquiteras contra la malaria, suplementación con
vitamina A, transferencias de efectivo, pagos de incentivo para vacunación— sobre ese único eje. Es
una importación directa a la filantropía del razonamiento al estilo AVAC/AVAD de la economía de la
salud: del mismo modo que un sistema de salud pregunta "cuántos AVAC por libra en el margen",
GiveWell pregunta "cuántas vidas, o años de vida, por dólar en el margen", y trata las causas como
sustituibles una vez convertidas a esa unidad común. Véase [el análisis de coste-efectividad en el
gobierno](../cost-effectiveness-analysis-in-government/) para el primo del sector público de este marco
de razonamiento.

La cifra de GiveWell más citada se refiere a la Against Malaria Foundation (AMF), que distribuye
mosquiteras tratadas con insecticida. En el ejemplo práctico publicado por GiveWell (extraído de datos
de financiación de 2020), aproximadamente 4500 dólares financiaron suficientes mosquiteras para evitar
una muerte, tras contabilizar el uso imperfecto de las mosquiteras, la mortalidad de referencia sin
mosquiteras y el ajuste por fungibilidad: la posibilidad de que la AMF hubiera recibido parte de esa
financiación de otros donantes de todos modos. GiveWell es explícito en que esta cifra se mueve con el
tiempo y entre geografías a medida que cambian la prevalencia de la malaria, el coste de las mosquiteras
y las brechas de financiación, y que en general se espera que el coste de salvar una vida aumente con
el tiempo, a medida que se van aprovechando primero las oportunidades más baratas; es una ilustración
práctica del método, no un precio fijo.

## Las matemáticas

```
Coste-efectividad = Coste de la intervención / Unidades de bien producidas
                    (p. ej., $ por vida salvada, $ por AVAD evitado,
                    $ por AVAC)

Cadena de GiveWell para un programa de mosquiteras, de forma ilustrativa:
  $ por mosquitera comprada y entregada
    ÷ proporción de mosquiteras realmente usadas
    ÷ personas protegidas por mosquitera
    × mortalidad anual de referencia sin mosquiteras
    × reducción de mortalidad atribuible al uso de mosquiteras (a
      partir de evidencia de RCT)
    × años de protección por mosquitera
    ÷ ajuste por fungibilidad (dinero que desplaza la financiación de
      otros donantes)
  = $ por vida salvada (neto de los efectos de financiación contrafactual)
```

Esta cadena importa porque cada paso es un lugar donde las estimaciones de coste-efectividad
habitualmente se equivocan (véase los errores habituales más abajo), y porque deja explícito que el
"coste por vida salvada" nunca es un precio observado en bruto; es una estimación modelada construida a
partir de varios insumos separadamente inciertos.

## Ejemplo práctico

Dos intervenciones hipotéticas, ambas respaldadas por evidencia, compitiendo por las mismas 100 000 £
marginales:

- **Mosquiteras (estilo AMF)**: aproximadamente 4500 dólares por vida salvada según el ejemplo
  práctico publicado por GiveWell extraído de datos de 2020, es decir, muy aproximadamente 20 vidas
  salvadas por cada 100 000 £, dependiendo del tipo de cambio y el año usados.
- **Programa de desparasitación**: sin beneficio de mortalidad plausible en absoluto, pero con fuerte
  evidencia de ganancias de renta a largo plazo por la desparasitación infantil; GiveWell lo valora en
  términos de ganancia de renta, no de vidas salvadas, lo que dificulta compararlo directamente con las
  mosquiteras sin una unidad compartida. GiveWell usa un marco explícito de "pesos morales" para
  convertir ambas cosas en una unidad interna única para su clasificación.

La disciplina del método del EA consiste en forzar esta comparación a la luz en lugar de financiar
ambas cosas solo porque las dos "suenan bien". Véase [el retorno social de la inversión](../social-return-on-investment/)
para la función forzosa equivalente que usan las empresas sociales y los comisionadores locales del
Reino Unido, que plantea la misma pregunta —cuál es el mejor retorno por libra— en un idioma de valor
monetizado en lugar de un idioma de vidas/AVAD.

## Conexión con la ingeniería de software

Quienes construyen plataformas de donantes, herramientas de emparejamiento de subvenciones o paneles
de impacto para financiadores alineados con el EA (Open Philanthropy, la propia GiveWell, plataformas
de donación eficaz como Giving What We Can) necesitan representar las estimaciones de
coste-efectividad como rangos con supuestos declarados, no como cifras únicas: el modelo subyacente
tiene varios insumos multiplicativos inciertos, y colapsar eso a una sola cifra en un panel tergiversa
la confianza que la propia GiveWell declara. Versione cada estimación por fecha de publicación;
GiveWell revisa sus números, a veces de forma sustancial, a medida que llega nueva evidencia de RCT o
datos de brecha de financiación, y una plataforma que almacena en caché una cifra antigua se vuelve
incorrecta silenciosamente.

## Errores habituales

- **Tratar una estimación de coste-efectividad como un precio fijo.** Es el resultado de un modelo con
  varios insumos multiplicativos inciertos (tasas de uso, mortalidad de referencia, ajuste por
  fungibilidad); indique la fecha y la versión.
- **Ignorar la fungibilidad/el desplazamiento.** Financiar a una organización que de todos modos habría
  recibido el dinero de otro donante compra menos bien contrafactual del que sugiere la cifra
  destacada; véanse [la adicionalidad y el peso muerto](../additionality-and-deadweight/) y [el
  desplazamiento y la atribución](../displacement-and-attribution/).
- **Comparar entre unidades incompatibles sin conversión.** "Vidas salvadas" y "renta ganada" no son
  directamente comparables sin un marco explícito de pesos morales; presentarlas una junto a la otra
  como si lo fueran es un error de categoría.
- **Visión de túnel del área de causa.** Clasificar solo dentro de un área de causa (p. ej., solo
  organizaciones benéficas de salud global) y llamar a la ganadora "la organización benéfica más
  coste-efectiva" exagera la afirmación; la clasificación entre causas de GiveWell es deliberadamente
  estrecha (salud y bienestar globales), no universal.

## Fuentes

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
