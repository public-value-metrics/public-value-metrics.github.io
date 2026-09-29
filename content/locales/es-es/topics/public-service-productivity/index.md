# Productividad de los servicios públicos

La productividad de los servicios públicos mide con qué eficiencia el gasto público convierte insumos
(personal, capital, bienes y servicios) en productos ajustados por calidad, para servicios —salud,
educación, policía, asistencia social— que no tienen precio de mercado y por tanto ninguna cifra de
ingresos entre la que dividir los costes. La Office for National Statistics del Reino Unido publica
esta serie desde mediados de la década de 2000 y sigue siendo el intento nacional metodológicamente
más desarrollado de responder a "¿está el gobierno mejorando o empeorando en convertir dinero en
servicios públicos?".

## Por qué es importante

En un mercado, la productividad es (valor del producto) / (coste del insumo), y el valor del producto
es observable porque alguien paga por él. Una prótesis de cadera, una plaza escolar y una patrulla
policial no tienen precio de venta, así que ingenuamente solo se pueden medir los *insumos* (lo que se
gastó), lo que tienta a los comentaristas a tratar el aumento del gasto público como automáticamente
malo, ya que más insumo con una actividad destacada plana parece productividad decreciente. La
metodología de la ONS, expuesta en sus publicaciones "Sources and Methods" sobre la productividad de
los servicios públicos, resuelve esto construyendo un índice de *producto* a partir de volúmenes de
actividad (operaciones realizadas, alumnos enseñados, delitos investigados) y luego *ajustando por
calidad* ese índice de producto —para salud, incorporando tasas de supervivencia y tiempos de espera;
para educación, incorporando el rendimiento académico; para la policía, incorporando resultados como
la resolución de casos—, de modo que un servicio que realiza el mismo número de operaciones pero
alcanza mejores tasas de supervivencia se registra como más productivo, no simplemente como más caro.
El hallazgo destacado que se repite en las publicaciones de la ONS es aleccionador para el sector: la
productividad de los servicios públicos del Reino Unido cayó bruscamente durante la pandemia de
COVID-19 y, según las propias publicaciones de la ONS de mediados de la década de 2020, todavía no se
había recuperado a los niveles de 2019 en varios subsectores, incluida la sanidad, aunque el gasto
aumentaba, una brecha que replantea "más financiación" y "más productividad" como dos preguntas
completamente separadas.

## Las matemáticas

```
Índice de producto (volumen) = Σ (actividad_i × peso de coste unitario
                          relativo_i), ponderado por año base en todas
                          las actividades de servicio (p. ej.,
                          operaciones de cadera, operaciones de
                          cataratas, consultas de médico de cabecera),
                          análogo a un índice de volumen
                          Laspeyres/Paasche

Ajuste por calidad    = índice de producto × factor de ajuste por
                          calidad (p. ej., incorporando un cambio en
                          las tasas de supervivencia, los tiempos de
                          espera, el rendimiento académico o la
                          reincidencia como multiplicador del volumen
                          bruto)

Índice de insumos           = Σ (horas de trabajo × peso de coste
                          laboral) + (coste de bienes/servicios,
                          deflactado) + (consumo de capital)

Crecimiento de la productividad total de los factores = % de cambio en
                                    el índice de producto ajustado por
                                    calidad − % de cambio en el índice
                                    de insumos
```

## Ejemplo práctico

**Cálculo ilustrativo de productividad del sector agudo del NHS** (la estructura sigue la metodología
de la ONS):

```
Año 1: índice de volumen de producto = 100,0 (año base), índice de
       insumos = 100,0
        → índice de productividad = 100,0

Año 2: el volumen de actividad sube un 3,0% (más operaciones, más
        citas) pero el tiempo de espera medio empeora, aplicando un
        descuento de ajuste por calidad de −1,0%
        Índice de producto ajustado por calidad = 100 × 1,030 × 0,990
        = 101,97

        Los insumos suben: número de personal +4,0%, otros costes
        (deflactados) +1,5%, índice de insumos ponderado = 100 ×
        1,032 = 103,2

Crecimiento de la productividad = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                     = 1,97% − 3,2% = −1,23 puntos porcentuales

Interpretación: la actividad subió, pero los insumos subieron más
rápido y la calidad cayó ligeramente, así que la productividad —el
producto por unidad de insumo— disminuyó aunque "se prestó más
atención".
```

Este es exactamente el patrón que las publicaciones de la ONS han reportado repetidamente para partes
del NHS tras la pandemia: gasto creciente y actividad bruta creciente coexistiendo con una
productividad medida decreciente una vez que se contabilizan tanto el ajuste por calidad como el
crecimiento de los insumos.

## Conexión con la ingeniería de software

La productividad de los servicios públicos es el análogo a nivel poblacional de los debates de
productividad en ingeniería (puntos de historia entregados frente a [las métricas DORA](../dora-metrics-for-public-value/)
frente a [las métricas de flujo](../flow-metrics-in-government-delivery/)): el rendimiento bruto sin un
ajuste por calidad es exactamente igual de engañoso en un hospital que "líneas de código entregadas"
en un equipo de software. Los equipos que construyen procesos de datos de rendimiento para
departamentos deberían tratar el ajuste por calidad como una etapa de transformación de primera clase
y versionada, no como una nota a pie de página, porque la propia credibilidad de la ONS descansa en
que ese ajuste sea transparente, reproducible y se revise a medida que llegan mejores datos de calidad
(la ONS revisa las estimaciones de productividad de años pasados a medida que se finalizan los datos de
calidad subyacentes —p. ej., las tasas de supervivencia—, así que cualquier sistema posterior que
consuma estas estadísticas debe manejar revisiones retroactivas, no solo añadir nuevos periodos).
También se cruza directamente con [el coste total de propiedad](../total-cost-of-ownership-in-government-it/)
y [la productividad de la IA en el sector público](../ai-productivity-in-the-public-sector/): un
sistema que aumenta el volumen de actividad bruta sin mejorar o mantener la calidad no es, según la
propia definición de la ONS, una mejora de productividad.

## Errores habituales

- **Tratar el crecimiento de insumos como crecimiento de productividad**: más gasto que financia más
  personal produce más *actividad*, no más *productividad*, a menos que el producto por unidad de
  insumo también aumente; ambas cosas se confunden habitualmente en el comentario político.
- **Ignorar por completo el ajuste por calidad**: un índice de producto construido solo con recuentos
  de actividad bruta mostrará "ganancias de productividad" por hacer más de algo de menor valor o
  menor calidad; el ajuste por calidad de la ONS existe específicamente para detectar esto.
- **Comparar índices de productividad entre subsectores sin igualar la antigüedad de la metodología**:
  la productividad de salud, educación y policía se construyen cada una a partir de fuentes de datos
  de actividad y calidad distintas con ciclos de revisión distintos; una comparación ingenua entre
  sectores compara instrumentos incompatibles.
- **Leer la caída de productividad de un solo año como una tendencia permanente**: las cifras de
  productividad de la era pandémica y posterior a la pandemia han mostrado una volatilidad
  interanual significativa a medida que los propios datos de calidad (p. ej., listas de espera,
  recuperación electiva) cambiaban; la ONS advierte constantemente contra sobreinterpretar los
  movimientos de un solo año.

## Fuentes

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
