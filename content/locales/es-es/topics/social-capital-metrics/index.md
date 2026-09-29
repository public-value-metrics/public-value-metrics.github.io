# Métricas de capital social

Las métricas de capital social cuantifican las redes, la confianza y la participación cívica que
permiten a las comunidades e instituciones funcionar con eficiencia: el "tejido conectivo" que no
tiene una línea en ningún balance pero que reduce visiblemente el coste y la fricción cuando está
presente, y los eleva visiblemente cuando está ausente. El planteamiento moderno proviene de "Bowling
Alone" (2000) de Robert Putnam, que distinguió el capital de vinculación (bonding capital, lazos dentro
de un grupo similar) del capital de puente (bridging capital, lazos entre grupos distintos); la Office
for National Statistics del Reino Unido ha construido desde entonces un conjunto de indicadores
permanente para seguirlo a nivel nacional.

## Por qué es importante

La afirmación empírica central de Putnam —documentada a través del declive de la afiliación a
asociaciones cívicas, la asistencia a la iglesia y la participación sindical en Estados Unidos a lo
largo de finales del siglo XX— era que el capital social predice resultados que la economía
convencional tiene dificultades para explicar: menos delincuencia, mejor bienestar infantil, un
gobierno local más eficaz, una recuperación económica más rápida tras los shocks. El capital de
vinculación (lazos fuertes dentro de un grupo muy unido) es bueno para el apoyo mutuo pero puede
calcificarse en insularidad; el capital de puente (lazos más débiles entre grupos distintos) es lo que
típicamente se correlaciona con el acceso a oportunidades, el flujo de información y la confianza
institucional. La ONS se tomó esto lo bastante en serio como para construir un marco de indicadores
nacional: su serie "Social Capital in the UK"
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
sigue cuatro pilares: relaciones personales, apoyo de la red social, compromiso cívico, y confianza y
normas de cooperación, cada uno construido a partir de preguntas de encuesta establecidas (Community
Life Survey, Understanding Society). Para los servicios digitales del sector público, el capital
social es doblemente relevante: es tanto un resultado que algunos programas intentan construir
(financiación de resiliencia comunitaria, prescripción social) como un insumo que determina cuán bien
se adoptará realmente un servicio: un servicio implantado en una comunidad de alta confianza y bien
conectada se difundirá de boca en boca de una manera en que un servicio idéntico en un área de baja
confianza no lo hará.

## Las matemáticas

```
Marco de cuatro pilares de la ONS (indicadores, ilustrativos):

Relaciones personales:       % con alguien en quien confiar en una crisis
Apoyo de la red social:      % que podría pedir dinero prestado a
                              amigos/familia si lo necesitara
Compromiso cívico:           % que hizo voluntariado o acción cívica en
                              los últimos 12 meses
Confianza y normas de cooperación: % que está de acuerdo en que "se
                              puede confiar en la mayoría de la gente"

No se publica ninguna puntuación compuesta única de la ONS — los
pilares se informan por separado, deliberadamente, porque agregarlos
en un único índice ocultaría cuál pilar específico es débil.

División de vinculación/puente de Putnam (marco, no una fórmula):
  capital de vinculación ≈ densidad de lazos dentro de un grupo
  homogéneo
  capital de puente ≈ frecuencia/fuerza de los lazos entre grupos
  distintos
```

## Ejemplo práctico

**Instantánea de capital social de un vecindario**: una encuesta al estilo Community Life Survey de un
área local encuentra que el 78% tiene a alguien en quien confiar en una crisis (relaciones
personales), el 61% podría pedir dinero prestado si lo necesitara (apoyo de la red), el 24% hizo
voluntariado el año pasado (compromiso cívico) y el 41% está de acuerdo en que "se puede confiar en la
mayoría de la gente" (confianza y normas), frente a medias nacionales de aproximadamente 85%, 70%, 30%
y 45% respectivamente (ilustrativo, calibre frente al boletín actual de la ONS). El área está por
debajo de la media en todos los pilares, pero más agudamente en confianza (41% frente al 45% nacional,
una brecha de 4 puntos) y compromiso cívico (24% frente al 30%, una brecha de 6 puntos), señalando el
compromiso cívico, no la confianza, como el mayor déficit relativo que merece una inversión dirigida
(un programa de subvenciones comunitarias, digamos) en lugar de una iniciativa genérica de "construir
confianza".

**Vinculación frente a puente, diseño de servicios**: un programa de empleo en una comunidad muy unida
encuentra que las derivaciones viajan rápido dentro de la comunidad (alto capital de vinculación: la
noticia se difunde en días) pero el programa tiene dificultades para llegar a residentes fuera de esa
red (bajo capital de puente: la adopción fuera de la comunidad central es casi nula después de meses).
La solución implicada no es "más marketing" sino construir deliberadamente lazos de puente:
asociándose con organizaciones que están *fuera* de la red existente, ya que el capital de vinculación
por sí solo no puede resolver un problema de capital de puente.

## Conexión con la ingeniería de software

- Las plataformas digitales que canalizan ayuda mutua, voluntariado o subvenciones comunitarias (un
  servicio de "conector local", por ejemplo) están literalmente construyendo infraestructura de capital
  de puente; su métrica de éxito debería ser la diversidad de la red de conexiones creadas, no solo el
  recuento de transacciones; véase [gobierno como plataforma](../government-as-a-platform/) para el
  patrón más amplio de infraestructura sobre la que otros construyen valor.
- Cuando la teoría del cambio de un programa se dirige explícitamente al capital social como
  resultado (un fondo de resiliencia comunitaria, un servicio de prescripción social), [su teoría del
  cambio](../theory-of-change/) y [modelo lógico](../logic-model/) deberían nombrar el pilar específico
  (confianza, compromiso cívico, apoyo de la red) que espera mover, en lugar de un resultado
  indiferenciado de "construir comunidad" que no puede medirse frente a la línea base de la ONS.
- Los indicadores de capital social son una lente de equidad útil junto al [índice de privación
  múltiple](../index-of-multiple-deprivation/): un área puede tener privación de renta pero ser
  socialmente rica, o viceversa, y ambas cosas apuntan a intervenciones muy distintas.

## Errores habituales

- **Colapsar los cuatro pilares de la ONS en una única puntuación compuesta**: la ONS deliberadamente
  no hace esto; una única cifra oculta qué pilar específico está impulsando una lectura baja, y
  promediar enmascara una comunidad de alta confianza pero cívicamente desconectada frente a una que es
  lo contrario.
- **Suponer que el capital social siempre es bueno**: un capital de vinculación denso en un grupo
  insular puede resistir activamente a las instituciones externas (incluidos los servicios
  gubernamentales); el propio análisis de Putnam trata la vinculación y el puente como bienes distintos
  con efectos distintos, a veces contrapuestos.
- **Usar medidas de capital social basadas en encuestas como una métrica operativa en tiempo real**:
  las encuestas subyacentes (Community Life Survey, Understanding Society) se realizan anualmente o con
  menor frecuencia; trate los datos de capital social como un indicador contextual de movimiento lento,
  no algo que el panel de un servicio pueda actualizar semanalmente.

## Fuentes

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
