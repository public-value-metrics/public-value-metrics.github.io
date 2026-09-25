# Informes de resultados de subvenciones (IRIS+)

Los informes de resultados de subvenciones son la práctica de que los beneficiarios de subvenciones
reporten a los financiadores métricas de resultado estandarizadas y comparables, en lugar de que cada
financiador invente su propia plantilla de informe a medida. IRIS+, mantenido por la Global Impact
Investing Network (GIIN), es el estándar de este tipo más ampliamente adoptado: un catálogo de
métricas de rendimiento social, ambiental y financiero predefinidas que los inversores de impacto y,
cada vez más, las fundaciones que otorgan subvenciones exigen o recomiendan que usen los beneficiarios.

## Por qué es importante

Antes de la elaboración de informes estandarizada, cada fundación pedía a los beneficiarios un
conjunto distinto de indicadores en un formato distinto, y una organización benéfica mediana con diez
financiadores podía estar ejecutando diez procesos de informe paralelos para un trabajo solapado: un
factor bien documentado de la carga de informes que la estandarización de resultados de subvenciones
existe para reducir. IRIS+ aborda esto dando a financiadores y beneficiarios un vocabulario
compartido: Conjuntos de Métricas Centrales agrupados por tema (p. ej., vivienda asequible, acceso a
energía limpia, inclusión financiera), cada métrica definida con suficiente precisión como para que
"empleos creados" o "hogares atendidos" signifique lo mismo sea quien sea quien lo reporte, y alineada
con los Objetivos de Desarrollo Sostenible de la ONU para que un financiador pueda agregar los datos a
nivel de beneficiario en una narrativa de ODS a nivel de cartera. La GIIN informa que las métricas
IRIS son usadas por aproximadamente la mitad de los inversores de impacto y la gran mayoría de los
gestores de fondos, bancos e instituciones de financiación para el desarrollo activos en el campo.

La estandarización importa más donde interactúa con [resultados frente a productos](../outcomes-vs-outputs/):
IRIS+ empuja los informes hacia métricas de resultado e impacto definidas en lugar de lo que el
sistema de gestión de casos existente de un beneficiario registre, que es exactamente la brecha que
describe [coste por resultado](../cost-per-outcome/) frente a [coste por
beneficiario](../cost-per-beneficiary/).

## Las matemáticas

Los informes de resultados de subvenciones son un marco y un proceso, no una fórmula:

```
1. El financiador selecciona un Conjunto de Métricas Centrales
   relevante para el tema de la subvención (p. ej., "Inclusión
   Financiera" o "Agricultura Sostenible" de IRIS+)
2. Cada métrica tiene una definición, unidad y método de cálculo fijos
   publicados por la GIIN, no inventados por cada financiador
3. El beneficiario reporta según las mismas definiciones de métrica
   ante todos sus financiadores que usan ese estándar, reduciendo el
   esfuerzo de informe duplicado
4. El financiador agrega las métricas a nivel de beneficiario en un
   informe a nivel de cartera, comparable año tras año y entre
   beneficiarios que usan la misma métrica
```

La ganancia de eficiencia es combinatoria: estandarizar N financiadores × M beneficiarios sobre un
vocabulario compartido convierte N×M relaciones de informe a medida en aproximadamente N+M
correspondencias frente a un estándar.

## Ejemplo práctico

**Un beneficiario con tres financiadores, antes de la estandarización**: reporta "personas atendidas"
al Financiador 1 usando una definición de recuento de personas, "beneficiarios alcanzados" al
Financiador 2 usando una definición de hogar, e "individuos impactados" al Financiador 3 usando una
definición de episodio de servicio (de modo que una persona que visita dos veces cuenta dos veces).
Tres informes, tres cifras, ninguna comparable, y ninguna comparable con las cifras de otro
beneficiario ni siquiera dentro de la cartera del mismo financiador.

**El mismo beneficiario bajo IRIS+**: reporta según una métrica definida de IRIS+ de individuos
alcanzados junto a una métrica de resultado definida del Conjunto de Métricas Centrales
correspondiente, usando la metodología de cálculo publicada por la GIIN para ambas. Los tres
financiadores ahora reciben la misma cifra, calculada de la misma manera, y pueden comparar el coste
de este beneficiario por unidad definida por IRIS+ frente a otros beneficiarios de su cartera usando
la métrica idéntica: el equivalente, a escala de infraestructura de informes, a tener una [base de
datos de coste unitario](../unit-cost-databases/) compartida.

## Conexión con la ingeniería de software

Las plataformas de gestión de subvenciones deberían tratar los identificadores de métrica de IRIS+
como una clave foránea, no como texto libre: almacenar el código de métrica publicado junto al valor
reportado por un beneficiario (en lugar de un campo inventado localmente llamado "beneficiarios") es
lo que hace posible más adelante la agregación entre financiadores y entre carteras sin un proyecto de
limpieza de datos. Cuando una plataforma debe dar soporte a financiadores que no han adoptado IRIS+, el
diseño pragmático es permitir que una métrica local se asigne a la definición de IRIS+ más cercana en
lugar de forzar a todos los financiadores hacia el estándar de inmediato; la comparabilidad mejora de
forma incremental a medida que más del grafo se corresponde con identificadores compartidos. Véase el
tema hermano [coste por resultado](../cost-per-outcome/) para qué deberían usarse las cifras
reportadas una vez recopiladas.

## Errores habituales

- **Tratar la adopción de IRIS+ como comparabilidad automática.** Dos beneficiarios pueden reportar
  según la misma métrica de IRIS+ y aun así no ser comparables si su calidad de datos subyacente o sus
  supuestos contrafactuales difieren; el estándar fija las definiciones, no el rigor de la medición.
- **Métricas "alineadas con IRIS" inventadas por el financiador.** Una métrica que solo está inspirada
  en el lenguaje de IRIS+ pero no en la definición realmente publicada reintroduce la fragmentación que
  el estándar existe para resolver.
- **Fatiga de informe por sobreselección.** Exigir a un beneficiario que reporte según un Conjunto de
  Métricas Centrales completo cuando solo dos o tres métricas son relevantes para la decisión recrea
  el problema de la carga bajo una envoltura estandarizada.
- **Ninguna métrica de resultado en absoluto.** IRIS+ incluye muchas métricas puramente de producto
  (p. ej., recuentos de personas atendidas); seleccionar solo esas, y ninguna de las métricas de nivel
  de resultado, produce informes con la forma de [coste por beneficiario](../cost-per-beneficiary/)
  bajo una etiqueta de informe de resultados.

## Fuentes

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
