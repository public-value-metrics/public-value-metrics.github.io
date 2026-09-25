# Índice de Privación Múltiple (IMD)

El IMD es la medida oficial de privación relativa para áreas pequeñas en Inglaterra, que clasifica
cada una de las 32 844 Lower-layer Super Output Areas (LSOA, cada una con unos 1500 residentes) del
país del 1 (más desfavorecida) al 32 844 (menos desfavorecida). Lo publica lo que hoy es el Ministry
of Housing, Communities and Local Government (MHCLG, antes MHCLG/DCLG), más recientemente como los
English Indices of Deprivation 2019, y determina directamente la financiación del gobierno central, la
priorización de la salud pública y la elegibilidad para docenas de programas locales.

## Por qué es importante

La privación no es una sola cosa: un vecindario puede tener rentas bajas pero ser seguro, o tener
rentas adecuadas pero sufrir malos resultados de salud y viviendas deficientes. Los índices
predecesores del IMD (que se remontan a los indicadores de privación del Department of the Environment
de la década de 1970) evolucionaron hasta el modelo actual de siete ámbitos precisamente porque la
segmentación por un único indicador (la tasa de desempleo por sí sola, por ejemplo) pasaba por alto
habitualmente áreas desfavorecidas de otras maneras. El IMD 2019 combina renta, empleo, educación,
salud, delincuencia, barreras al acceso a la vivienda y los servicios, y entorno de vida en una única
clasificación compuesta por LSOA, cada ámbito construido a partir de su propia cesta de indicadores y
ponderado según la metodología del MHCLG. Como opera a nivel de área pequeña (LSOA) en lugar de a nivel
de ayuntamiento, expone bolsas de privación ocultas dentro de distritos por lo demás acomodados: la
razón por la que el IMD, y no la renta media del ayuntamiento, es lo que realmente usan como base el
NHS England, la prima por alumno del Department for Education y docenas de fórmulas de financiación de
los ayuntamientos. El software que determina la elegibilidad, prioriza el trabajo de acercamiento o
informa del impacto por área en Inglaterra debería tratar el decil o la clasificación del IMD como una
entrada de primera clase, no como un añadido de última hora; y cuando un programa se dirige
deliberadamente a las áreas más desfavorecidas, su valoración debería aplicar [la ponderación
distributiva](../distributional-weighting/) de forma coherente con esa segmentación, en lugar de
valorar una libra de beneficio igual sin importar dónde recaiga.

## Las matemáticas

```
7 ámbitos, ponderados:
  Renta                                    22,5%
  Empleo                                   22,5%
  Educación, Capacidades y Formación       13,5%
  Privación de Salud y Discapacidad        13,5%
  Delincuencia                              9,3%
  Barreras al Acceso a la Vivienda y los
  Servicios                                 9,3%
  Entorno de Vida                           9,3%

Puntuación de cada ámbito: indicadores estandarizados (clasificados,
luego transformados hacia una distribución normal) y combinados
mediante una transformación exponencial de modo que una alta privación
en un indicador no pueda cancelarse por completo con una baja
privación en otros dentro de ese ámbito.

Puntuación compuesta del IMD (LSOA) = Σ (puntuación del ámbito × peso
del ámbito)
Clasificar las LSOA por puntuación compuesta → 1 (más desfavorecida) a
32.844 (menos desfavorecida)
Deciles: clasificación ÷ 3.284 (aprox.), decil 1 = 10% más
desfavorecido de las LSOA
```

## Ejemplo práctico

**Puntuación compuesta de una LSOA**, usando puntuaciones de ámbito estandarizadas ilustrativas (0 =
sin señal de privación, más alto = más desfavorecida):

```
Renta                0,35 × 0,225 = 0,07875
Empleo                0,30 × 0,225 = 0,06750
Educación             0,20 × 0,135 = 0,02700
Salud                 0,15 × 0,135 = 0,02025
Delincuencia          0,10 × 0,093 = 0,00930
Barreras a la Vivienda 0,05 × 0,093 = 0,00465
Entorno de Vida        0,08 × 0,093 = 0,00744

Puntuación compuesta = 0,07875 + 0,06750 + 0,02700 + 0,02025
                + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Esa puntuación compuesta se clasifica después frente a las puntuaciones de las 32 844 LSOA. Si sitúa a
la LSOA en la posición 2950, cae en el decil 1 (2950 ÷ 3284 ≈ 0,9, es decir, dentro del 10% de
vecindarios más desfavorecidos de Inglaterra), que para muchas fórmulas de financiación es el umbral
que desbloquea la elegibilidad, independientemente de cómo puntúe de media el ayuntamiento circundante.

## Conexión con la ingeniería de software

- Cualquier servicio que geocodifique a los usuarios por código postal o LSOA puede unir la tabla de
  consulta del IMD publicada (un CSV gratuito y versionado del MHCLG) para añadir el decil de
  privación como covariable, para dirigir el trabajo de acercamiento, priorizar la carga de casos o
  informar de resultados por banda de privación sin recopilar nuevos datos personales.
- El decil del IMD es una comprobación de equidad estándar para los servicios digitales públicos:
  tabular cruzadamente la adopción, la caída o la satisfacción del servicio por decil del IMD saca a la
  luz brechas de acceso que una métrica agregada oculta; véanse [la inclusión digital](../digital-inclusion/)
  y [las métricas de satisfacción ciudadana](../citizen-satisfaction-metrics/).
- Como la clasificación del IMD es relativa (siempre suma a un conjunto fijo de clasificaciones en toda
  Inglaterra), no puede mostrar si la privación nacional está aumentando o disminuyendo con el tiempo,
  solo qué áreas se clasifican dónde en relación con las demás en esa edición; no construya paneles de
  tendencia absoluta solo con la clasificación bruta del IMD.

## Errores habituales

- **Comparar las clasificaciones del IMD entre ediciones (2015 frente a 2019) como una tendencia
  temporal**: los indicadores subyacentes, las geografías y la metodología cambian todos entre
  ediciones; el MHCLG desaconseja explícitamente usar los cambios de clasificación como evidencia de
  que un área se volvió más o menos desfavorecida.
- **Aplicar el IMD a nivel de LSOA a individuos**: una LSOA en el decil 1 todavía contiene hogares no
  desfavorecidos, y una LSOA en el decil 10 todavía contiene hogares desfavorecidos; el IMD describe
  áreas, no personas, y usarlo como indicador indirecto de elegibilidad individual clasifica mal en
  ambas direcciones.
- **Ignorar el detalle a nivel de ámbito en favor de la clasificación compuesta**: dos LSOA con
  puntuaciones compuestas idénticas pueden tener perfiles de ámbito completamente distintos (una con
  privación de salud, otra con privación de delincuencia); un programa de segmentación dirigido a un
  problema debería usar la puntuación del ámbito relevante, no la compuesta combinada.

## Fuentes

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
