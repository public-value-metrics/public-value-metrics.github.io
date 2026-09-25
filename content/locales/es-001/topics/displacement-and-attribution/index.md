# Desplazamiento y atribución

El desplazamiento ocurre cuando el beneficio aparente de un programa se logra quitando actividad o
beneficio de otro lugar, en lugar de crear algo nuevo: lo que uno gana, otro lo pierde. La atribución
es la pregunta relacionada de cuánto de un resultado observado puede atribuirse genuinamente al mérito
de una intervención, cuando también contribuyeron otros actores y factores. Ambos son ajustes
estándar en la guía de evaluación del sector público del Reino Unido, junto al peso muerto y la fuga,
y ambos se omiten habitualmente en afirmaciones de impacto que parecen mucho más sólidas de lo que en
realidad son.

## Por qué es importante

El programa de subvenciones empresariales de un ayuntamiento que ayuda a 50 comercios a reubicarse en
una zona de regeneración puede informar "50 empresas apoyadas, 200 empleos creados", pero si esas
empresas simplemente se trasladaron desde una calle comercial vecina en lugar de expandirse, los
empleos fueron desplazados, no creados, y el efecto neto a nivel de distrito (o de región) podría
estar cerca de cero. El Magenta Book de HM Treasury y la histórica Additionality Guide tratan el
desplazamiento como una deducción obligatoria precisamente porque las historias de éxito local son
habituales incluso cuando no producen ningún beneficio neto nacional o regional: el valor
simplemente se ha desplazado, a menudo en detrimento del área o los actores que lo perdieron. La guía
de evaluación de los fondos estructurales (utilizada para los antiguos programas del Fondo Europeo de
Desarrollo Regional y sus sucesores nacionales, como el UK Shared Prosperity Fund) formaliza esto en
tres escalas espaciales: desplazamiento local (dentro de una ciudad), desplazamiento regional (dentro
de una región) y desplazamiento nacional (en todo el Reino Unido), porque una intervención puede ser
adicional a una escala mientras es puro desplazamiento a una escala más amplia: un programa de empleo
que atrae a trabajadores de una ciudad vecina es neutro a nivel nacional aunque parezca un éxito local.

La atribución es el problema hermano en la entrega intensiva en asociaciones, que ahora es la norma en
el trabajo del sector social y entre agencias del sector público. Cuando tres organizaciones prestan
conjuntamente un servicio de prevención de personas sin hogar, el informe anual de cada organización
puede reclamar de forma independiente el mérito por la misma reducción de personas que duermen a la
intemperie; sumado entre informes, el impacto reclamado puede superar el cambio real observado, a
veces por varios múltiplos. La guía del Magenta Book sobre el análisis de contribución existe
específicamente porque la atribución aleatorizada a un único actor a menudo es imposible en la entrega
multiagencia, y la respuesta honesta suele ser "contribuimos a este resultado" en lugar de "causamos
este resultado".

## Las matemáticas

El desplazamiento como parte de la secuencia estándar de impacto neto (véase [adicionalidad y peso
muerto](../additionality-and-deadweight/) para la cadena completa):

```
Impacto neto adicional = Resultado bruto − Peso muerto − Desplazamiento − Fuga, × Multiplicador

Tasa de desplazamiento = beneficio/actividad desviado de otro lugar
                     / total de beneficio/actividad bruto observado
```

La atribución, cuando varios actores contribuyen a un resultado, se expresa habitualmente como una
cuota de contribución más que como un porcentaje preciso, porque normalmente no puede medirse con el
mismo rigor que el desplazamiento:

```
Cuota atribuible ≈ f(fuerza de la contribución causal, contribuciones de
                      otros actores, factores externos/contextuales)

El impacto reclamado nunca debería superar:
  Σ (cuota atribuible de cada socio) ≤ 100% del resultado total observado
```

## Ejemplo práctico

**Subvención de regeneración**: el programa de subvenciones para calles comerciales de un ayuntamiento
informa de 200 nuevos empleos minoristas creados en la zona financiada. La investigación de encuesta de
seguimiento encuentra que 60 de esos empleos provinieron de empresas que se reubicaron desde una calle
comercial vecina no financiada dentro del mismo distrito, y otros 30 provinieron de cadenas nacionales
que abrieron sucursales que habrían abierto en algún lugar de la región de todos modos.

```
Empleos brutos reclamados = 200
Desplazamiento local = 60 (trasladados dentro del distrito)
Desplazamiento regional = 30 (habrían abierto regionalmente de todos modos)

Empleos netos adicionales (nivel distrito) = 200 − 60 = 140
Empleos netos adicionales (nivel regional) = 200 − 60 − 30 = 110
```

La cifra destacada honesta depende de la escala geográfica que le importe al financiador: un análisis
de viabilidad del Tesoro evaluado a nivel nacional o regional debería usar 110, no el 140 a nivel de
distrito, y desde luego no el 200 en bruto.

**Servicio multiagencia de personas sin hogar**: tres organizaciones asociadas (un ayuntamiento, una
organización benéfica de vivienda y un fideicomiso de salud) prestan conjuntamente un servicio de
reducción de personas que duermen a la intemperie. El número de personas sin hogar en la zona cayó en
30 a lo largo del año. El informe anual individual de cada organización reclama "redujimos las personas
sin hogar en 30"; sumados, los tres informes reclaman 90 personas ayudadas, tres veces la reducción
real. Un análisis de contribución que asigne a cada socio una cuota (digamos, 40% ayuntamiento, 35%
organización benéfica, 25% fideicomiso de salud, basado en el rol documentado y una evaluación
independiente) reportaría 12, 10,5 y 7,5 respectivamente, sumando correctamente los 30 observados.

## Conexión con la ingeniería de software

El desplazamiento y la atribución dan forma a cómo deberían diseñarse los sistemas de seguimiento de
impacto e informes de resultados para la entrega multisitio o multisocio:

- El alcance geográfico y organizativo debería ser un campo explícito y de primera clase en cualquier
  panel de impacto; una cifra reportada "para el distrito" y la misma cifra reportada "para la región"
  son números distintos, y un sistema que los confunde producirá cifras que no pueden conciliarse a
  nivel de cartera.
- Cuando varios socios prestan servicio conjuntamente, un sistema de resultados debería registrar las
  cuotas de contribución (o al menos señalar la atribución conjunta) en lugar de dejar que el módulo de
  informes de cada socio reclame de forma independiente el 100% de un resultado compartido; de lo
  contrario, las agregaciones a nivel de cartera exagerarán el impacto total, a veces de forma
  considerable.
- Esto conecta con [el retorno social de la inversión](../social-return-on-investment/) y [los
  informes de resultados de subvenciones](../grant-outcomes-reporting/): un cálculo de SROI o IRIS+
  que ignore el desplazamiento o sobreatribuya resultados compartidos producirá un ratio inflado que no
  resiste la auditoría ni la replicación.

## Errores habituales

- **Informar de un éxito local sin comprobar el desplazamiento más amplio.** Un programa puede parecer
  muy exitoso en la escala de informe más pequeña mientras es neutro o incluso negativo en una escala
  más amplia; indique siempre a qué escala geográfica se aplica la cifra neta.
- **Dejar que cada socio en una entrega conjunta reclame el mérito completo.** A menos que se acuerden
  y documenten las cuotas de contribución, el informe agregado entre socios exagerará el impacto total;
  compruebe que las reclamaciones a nivel de socio sumen como máximo el total observado.
- **Tratar la atribución como un porcentaje preciso cuando en realidad es un juicio.** El análisis de
  contribución, a diferencia de un contrafactual aleatorizado, produce una estimación defendible, no un
  hecho medido; preséntela con la incertidumbre apropiada en lugar de con falsa precisión.
- **Ignorar el desplazamiento en intervenciones orientadas al mercado.** El apoyo empresarial, los
  programas de empleo y la regeneración de lugares son las categorías clásicas de alto desplazamiento;
  trate las comprobaciones de desplazamiento como obligatorias para estas, no opcionales.

## Fuentes

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
