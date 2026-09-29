# Métricas de satisfacción ciudadana

Las métricas de satisfacción ciudadana miden cómo valora la ciudadanía su experiencia directa con un
servicio público, algo distinto de la confianza en las instituciones en general, y distinto también
de si el servicio realmente logró un buen resultado. Un servicio puede gustar mucho y ser ineficaz, o
ser eficaz y no gustar; la brecha entre ambas cosas es en sí misma información diagnóstica que un
equipo de entrega debería vigilar.

## Por qué es importante

La satisfacción se mide en dos niveles distintos que se confunden habitualmente. A nivel de servicio,
la ya retirada Performance Platform del Reino Unido y el actual manual de servicio de GOV.UK exigen
una encuesta de satisfacción por servicio (habitualmente una escala de cinco puntos de "muy
satisfecho" a "muy insatisfecho", administrada en el momento de la transacción) como uno de los
cuatro KPI de servicio obligatorios; véase [estándares de servicio y métricas de transacción](../service-standards-and-transaction-metrics/).
A nivel institucional, la Civil Service People Survey del Reino Unido mide anualmente el compromiso y
la experiencia de los empleados en todos los departamentos del gobierno central, y de forma separada
el programa "Trust in Government" de la OCDE encuesta la confianza pública en el gobierno nacional
entre los estados miembros, siguiendo un patrón de largo recorrido de declive y recuperación
fuertemente moldeado por las crisis (tanto la crisis financiera de 2008 como la pandemia de COVID-19
produjeron movimientos bruscos y visibles en las cifras de confianza de la OCDE). La razón por la que
quienes construyen servicios de cara a la ciudadanía necesitan mantener separadas la satisfacción y el
resultado es un modo de fallo conocido en el diseño de servicios: un formulario digital bellamente
diseñado y fácil de usar para solicitar una prestación puede obtener una satisfacción muy alta
mientras la política subyacente —reglas de elegibilidad, atrasos en la tramitación, importes
concedidos— no deja al solicitante en mejor situación. La satisfacción mide la interfaz; no mide el
valor entregado detrás de ella.

## Las matemáticas

```
Satisfacción neta = % satisfechos (o muy satisfechos) − % insatisfechos (o muy insatisfechos)
                    (las respuestas neutras/sin opinión se excluyen de ambos
                    términos, pero se cuentan en la base de respuestas para
                    calcular cada porcentaje)

Brecha satisfacción-resultado = puntuación de satisfacción − puntuación de
                    logro de resultados
                    (ambas normalizadas de 0 a 100; una brecha positiva
                    grande señala un servicio que "se siente bien" pero
                    no cumple en cuanto al fondo)

Índice de confianza (estilo OCDE) = % de encuestados que responden "sí" a
                    "¿tiene confianza en [el gobierno nacional]?"
                    seguido como serie temporal, habitualmente desglosado
                    por edad, renta y educación
```

## Ejemplo práctico

**Servicio de facturación electrónica del impuesto municipal de un ayuntamiento**: una encuesta de
satisfacción en el momento de una transacción exitosa muestra 2400 encuestados: 1650
satisfechos/muy satisfechos, 250 insatisfechos/muy insatisfechos, 500 neutros.

```
Satisfacción neta = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 satisfacción neta
```

Esto parece sólido de forma aislada. Pero la encuesta solo se muestra a los usuarios que completan
*con éxito* la transacción, un sesgo de medición conocido (véase los errores habituales más abajo).
Al combinarla con la métrica de tasa de finalización de [estándares de servicio y métricas de
transacción](../service-standards-and-transaction-metrics/) se observa que la finalización es solo
del 71%, lo que significa:

```
La satisfacción real de la población no está medida para el 29% que
abandonó el trayecto — plausiblemente la cohorte más insatisfecha, ya
que el propio abandono es una señal negativa fuerte que la encuesta
nunca captura.
```

**Ilustración a nivel nacional (estructura de una serie de confianza estilo OCDE)**: la confianza en
el gobierno nacional se reporta en un 42% en el año 1, cae al 34% en el año 2 (un año de crisis) y se
recupera al 39% en el año 3, una trayectoria típica del patrón de shock y recuperación parcial que la
OCDE documenta en los estados miembros tras las grandes crisis.

## Conexión con la ingeniería de software

Instrumente las encuestas de satisfacción en todos los puntos de salida significativos de un trayecto
de usuario, no solo al completarse con éxito: es el error de ingeniería más común en este ámbito, y
convierte silenciosamente una métrica de satisfacción en una métrica de vanidad sesgada por
supervivencia. Cuando sea posible, combine la puntuación de satisfacción con una métrica de
finalización o de resultado en el mismo panel, para que un equipo no pueda celebrar una satisfacción
creciente mientras la finalización cae silenciosamente (véanse [coste por transacción](../cost-per-transaction/)
e [inclusión digital](../digital-inclusion/) sobre quién queda excluido, para empezar, del muestreo de
satisfacción digital: los usuarios no digitales y de digital asistido están sistemáticamente
infrarrepresentados en las encuestas dentro del servicio). Los datos de satisfacción y confianza
también alimentan directamente la pata de legitimidad del [triángulo estratégico de Moore](../public-value/),
y pertenecen a las perspectivas de "cliente" y "legitimidad" de un [cuadro de mando de valor
público](../public-value-scorecard/); véase [métricas de confianza y legitimidad](../trust-and-legitimacy-metrics/)
para la contraparte a nivel institucional de esta métrica a nivel de servicio.

## Errores habituales

- **Sesgo de supervivencia en las encuestas al finalizar**: los usuarios que abandonan un trayecto
  nunca ven la encuesta, por lo que una puntuación alta de satisfacción dentro del servicio puede
  coexistir con una tasa de finalización baja y una gran población invisible de personas insatisfechas
  que no completaron el proceso.
- **Tratar la satisfacción como indicador indirecto del resultado**: una interfaz bien diseñada para
  una política mal diseñada puntúa bien en satisfacción y mal en resultado; informe siempre de ambas,
  nunca use una como sustituto de la otra.
- **Muestras pequeñas y no representativas reportadas con falsa precisión**: una puntuación de
  satisfacción de unos pocos cientos de encuestados autoseleccionados reportada con un decimal implica
  una confianza que el tamaño de la muestra no puede respaldar.
- **Ignorar el desglose demográfico**: las cifras nacionales de confianza y satisfacción que no se
  desglosan por edad, renta, discapacidad o acceso digital pueden ocultar experiencias marcadamente
  divergentes entre grupos, un patrón que las propias publicaciones de Trust in Government de la OCDE
  desglosan explícitamente.

## Fuentes

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
