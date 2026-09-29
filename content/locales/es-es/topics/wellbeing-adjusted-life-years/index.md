# Años de vida ajustados por bienestar (WELLBY)

Un WELLBY es un punto adicional de satisfacción vital, en la escala de bienestar estándar de 0 a 10,
para una persona durante un año. Es el análogo estructural del AVAC usado en la economía de la salud
—una única unidad que permite comparar intervenciones cuyos resultados no tienen nada más en común—
pero construido sobre el bienestar subjetivo en lugar de estados clínicos de salud, y expuesto en la
"Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) de HM Treasury.

## Por qué es importante

La valoración de coste-beneficio necesita una unidad común para comparar una subvención a un club
juvenil frente a un programa de seguridad vial frente a un servicio de salud mental, ninguno de los
cuales comparte una medida de resultado. La economía de la salud resolvió esto para las intervenciones
clínicas con el AVAC: un año de vida ajustado por calidad, ponderado de 0 (muerto) a 1 (salud plena).
La guía de bienestar de HM Treasury extiende la misma lógica al gasto público no sanitario, usando la
pregunta armonizada de satisfacción vital de la ONS ("En general, ¿cuán satisfecho está con su vida
actualmente?", respondida de 0 a 10) como la escala de resultado en lugar de un índice de estado de
salud. Un WELLBY de 1 significa que la satisfacción vital de una persona sube un punto completo durante
un año (o, de forma equivalente, la satisfacción de diez personas sube 0,1 puntos cada una durante un
año: los WELLBY se suman entre la población del mismo modo que los AVAC). La guía de HM Treasury fija un
valor monetario ilustrativo por WELLBY (alrededor de 13 000 £, precios de 2019/20) derivado de conciliar
datos de bienestar subjetivo con otros enfoques del valor de un año de vida, dando a quienes valoran una
forma de monetizar resultados —reducción de la soledad, cohesión comunitaria, acceso a espacios
verdes— que las técnicas de [valoración del bienestar](../wellbeing-valuation/) antes solo podían
describir, no comparar sobre una base común con el gasto en salud o seguridad.

## Las matemáticas

```
WELLBY = Δ satisfacción vital (escala 0-10) × número de años que
        persiste el cambio
        (sumado entre todas las personas afectadas)

Beneficio de bienestar monetizado = WELLBY generados × valor por WELLBY
        (valor de referencia de HMT)

cf. AVAC = Δ utilidad del estado de salud (escala 0-1) × años vividos
en ese estado
```

La escala de satisfacción de 0 a 10 y la escala de utilidad del AVAC de 0 a 1 no son intercambiables sin
un paso de conversión; la guía de HM Treasury trata sobre conciliar ambas de modo que, por ejemplo, una
intervención de salud valorada en AVAC y una intervención social valorada en WELLBY no se cuenten dos
veces silenciosamente ni queden incomparables dentro del mismo [proceso de valoración del Green
Book](../green-book-appraisal/).

## Ejemplo práctico

**Servicio de soledad de un ayuntamiento**: un programa de acompañamiento sirve a 400 residentes
mayores aislados. Las encuestas de seguimiento muestran que la satisfacción vital media sube de 5,2 a
6,0 (una ganancia de 0,8 puntos), y se estima que el efecto persiste durante 2 años antes de
desvanecerse.

```
WELLBY = 400 personas × 0,8 puntos × 2 años = 640 WELLBY

Valor monetizado = 640 × 13.000 £ = 8.320.000 £
```

Frente a un coste anual del programa de 300 000 £ (600 000 £ en 2 años), el ratio beneficio-coste es de
aproximadamente 8 320 000 / 600 000 ≈ **13,9:1**: una cifra que ahora puede situarse en la misma tabla
de valoración que el coste por AVAC evitado de un programa de salud o los ahorros de tiempo de viaje de
un programa de transporte.

**Organización benéfica, escala menor**: un programa comunitario de artes llega a 50 participantes con
una ganancia de satisfacción medida de 0,3 puntos, que dura 1 año.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Valor monetizado = 15 × 13.000 £ = 195.000 £
```

## Conexión con la ingeniería de software

- Cualquier servicio de cara a la ciudadanía que ya recopile un elemento de encuesta de satisfacción
  vital o bienestar (muchas plataformas de ayuntamientos y de salud y asistencia lo hacen, siguiendo las
  cuatro preguntas estándar de bienestar de la ONS) puede calcular WELLBY directamente a partir de los
  procesos de datos existentes en lugar de encargar una evaluación económica a medida para cada cambio
  de servicio.
- Los WELLBY dan a los equipos de ingeniería que construyen para los informes de [la ley de valor
  social](../social-value-act/) o [el retorno social de la inversión](../social-return-on-investment/)
  un denominador estandarizado a nivel nacional y respaldado por HM Treasury, evitando la proliferación
  de "puntuaciones de impacto" a medida que no pueden compararse entre contratos o proveedores.
- Como los WELLBY son aditivos entre personas y tiempo, se componen limpiamente en el tipo de
  seguimiento de resultados a nivel poblacional usado en los sistemas de [responsabilidad basada en
  resultados](../outcomes-based-accountability/): el panel de un servicio puede informar de los WELLBY
  acumulados generados por trimestre del mismo modo que un sistema de salud informa de los AVAC
  ganados.

## Errores habituales

- **Suponer que las ganancias de satisfacción autodeclaradas son totalmente atribuibles a la
  intervención**: sin un contrafactual (grupo de comparación o diseño antes/después con controles), no
  se puede separar la ganancia de WELLBY de las tendencias generales; véase [el análisis
  contrafactual](../counterfactual-analysis/).
- **Mezclar WELLBY y AVAC en un solo total sin conciliación**: la guía de HM Treasury es explícita en
  que ambos usan escalas distintas y teorías de valor subyacentes distintas; sumarlos ingenuamente
  cuenta dos veces bienestar solapado.
- **Usar el valor monetario de referencia sin sentido crítico**: la cifra de £ por WELLBY es una
  estimación de media nacional con bandas de incertidumbre reales; la guía de HM Treasury recomienda un
  análisis de sensibilidad, no tratarla como un tipo de cambio fijo.

## Fuentes

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
