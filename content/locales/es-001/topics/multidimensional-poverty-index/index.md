# Índice de Pobreza Multidimensional (MPI)

El MPI mide la pobreza como privaciones superpuestas que una persona experimenta al mismo tiempo —en
salud, educación y nivel de vida— en lugar de como la mera renta cayendo por debajo de un umbral. Fue
desarrollado por la Oxford Poverty and Human Development Initiative (OPHI) junto con Sabina Alkire y
James Foster, y se ha publicado conjuntamente con el PNUD en todos los Informes sobre Desarrollo
Humano desde 2010, junto al [Índice de Desarrollo Humano](../human-development-index/).

## Por qué es importante

Los umbrales de pobreza por renta pasan por alto a las personas que tienen suficiente ingreso en
efectivo pero carecen de agua potable, escolarización, o sobreviven a la muerte de un hijo; y pasan
por alto el hecho de que las privaciones se agrupan: un hogar sin electricidad tiene una probabilidad
desproporcionadamente alta de carecer también de saneamiento y de tener un niño desnutrido. El método
Alkire-Foster, sobre el que se construye el MPI, cuenta las privaciones de cada persona a través de
diez indicadores agrupados en tres dimensiones ponderadas por igual —salud, educación, nivel de
vida— y solo clasifica a alguien como "pobre según el MPI" si su puntuación de privación ponderada
supera un umbral fijo, capturando el solapamiento que un conjunto de estadísticas de indicador único
independientes no puede. La OPHI publica la metodología completa y los datos por país en
<https://ophi.org.uk/multidimensional-poverty-index/>; el MPI global que mantiene conjuntamente con el
PNUD cubre ahora más de 110 países. Para el software construido para programas contra la pobreza
—transferencias de efectivo, cribado de asistencia social, focalización de ayuda—, el conjunto de
indicadores del MPI es a menudo lo más parecido a un esquema de privación estandarizado ya validado en
decenas de oficinas estadísticas nacionales.

## Las matemáticas

```
10 indicadores, 3 dimensiones, cada dimensión ponderada 1/3:

Salud (1/3):            nutrición (1/6), mortalidad infantil (1/6)
Educación (1/3):        años de escolarización (1/6), asistencia
                         escolar (1/6)
Nivel de vida (1/3):    combustible para cocinar, saneamiento, agua
                         potable, electricidad, vivienda, bienes (1/18
                         cada uno)

puntuación de privación (c) = suma de los pesos de los indicadores en
los que una persona está privada

la persona es "pobre según el MPI" si c ≥ 1/3 (el umbral de pobreza, k
= 33%)

H (ratio de recuento) = número de pobres según el MPI / población total
A (intensidad)        = puntuación de privación media solo entre los
                         pobres según el MPI

MPI = H × A
```

Como el MPI multiplica la *proporción* que es pobre por *cuán* pobre es, dos regiones con el mismo
ratio de recuento pueden tener puntuaciones de MPI muy distintas si las privaciones son más severas en
una de ellas: la misma lógica de "sin sustitución entre dimensiones" que hay detrás de la media
geométrica del IDH.

## Ejemplo práctico

**Encuesta nacional de 1000 personas**: 350 se identifican como pobres multidimensionalmente
(puntuación de privación ≥ 33%). Entre esas 350 personas pobres, la puntuación de privación media es
del 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Comparando dos distritos con igual ratio de recuento**: el Distrito A tiene H = 0,30 y A = 0,40
(muchos pobres, moderadamente privados); el Distrito B tiene H = 0,30 y A = 0,60 (mismo número de
pobres, pero más severamente privados: sin electricidad *y* sin saneamiento *y* sin asistencia escolar
simultáneamente).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Mismo ratio de recuento, un MPI un 50% más alto en el Distrito B: un sistema de focalización basado
solo en la pobreza por ratio de recuento clasificaría a ambos distritos de forma idéntica y pasaría
por alto que el Distrito B necesita una intervención más profunda.

## Conexión con la ingeniería de software

- Los sistemas de gestión de casos y elegibilidad para programas sociales a menudo ya almacenan varios
  de los diez indicadores (vivienda, asistencia escolar, marcadores de salud) en silos separados; el
  método de recuento de Alkire-Foster es un esquema ya preparado para combinarlos en una única
  puntuación de privación en lugar de construir un modelo de puntuación a medida desde cero.
- La división recuento/intensidad (H × A) es un patrón generalmente útil para cualquier panel que
  informe de "a cuántos afecta" junto a "cuán gravemente"; colapsar ambos en una sola cifra, como hacen
  las estadísticas de prevalencia bruta, oculta precisamente el caso que necesita más recursos.
- Los paneles de indicadores al estilo MPI se combinan de forma natural con los informes de [coste por
  beneficiario](../cost-per-beneficiary/) para programas contra la pobreza: el coste por punto de
  reducción del MPI es una unidad defendible para comparar intervenciones muy distintas (transferencia
  de efectivo frente a infraestructura de saneamiento).

## Errores habituales

- **Tratar los diez indicadores como universales**: los indicadores del MPI global de la OPHI están
  calibrados para la comparabilidad entre países; los MPI nacionales (muchos países, incluidos varios
  del sur de Asia y África, publican los suyos propios) adaptan indicadores y pesos al contexto local,
  y ambos no son directamente comparables.
- **Informar solo de H**: el ratio de recuento ignora por completo la intensidad; informe o calcule
  siempre A junto a él, o el propio MPI.
- **Suponer que pobres según el MPI y pobres por renta son la misma población**: los propios informes
  por país de la OPHI típicamente muestran solo un solapamiento parcial entre ambos; un programa que
  se dirija solo a los pobres por renta pasará por alto sistemáticamente una proporción significativa
  de los pobres multidimensionales.

## Fuentes

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
