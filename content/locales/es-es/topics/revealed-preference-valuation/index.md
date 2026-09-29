# Valoración por preferencia revelada

Los métodos de preferencia revelada infieren el valor de un bien no de mercado a partir del
comportamiento observable en un mercado relacionado, en lugar de preguntar directamente a las
personas. La fijación de precios hedónicos y el método del coste de viaje son las dos técnicas de
referencia: ambas parten de una transacción real y extraen un precio implícito para algo que nunca se
vendió directamente.

## Por qué es importante

Donde los métodos de [preferencia declarada](../stated-preference-valuation/) plantean una pregunta
hipotética, los métodos de preferencia revelada observan por qué pagó realmente la gente, lo que el
Green Book trata como evidencia generalmente más creíble, en igualdad de condiciones, porque no está
sujeta al sesgo hipotético: quienes responden en un estudio de precios hedónicos de viviendas pagaron
genuinamente la prima o el descuento que se está midiendo
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Anexo 2). La fijación de precios hedónicos descompone un precio de mercado —habitualmente el precio de
la vivienda— en precios implícitos para cada atributo del bien, permitiendo a quienes analizan aislar,
por ejemplo, la prima de precio que los hogares realmente pagan por vivir en un lugar más tranquilo o
con mejor calidad del aire, controlando estadísticamente por cualquier otro atributo que también afecte
al precio de la vivienda (tamaño, ubicación, zona escolar). El método del coste de viaje hace lo
análogo para emplazamientos recreativos sin tarifa de entrada: el tiempo y el dinero que la gente gasta
viajando hasta un emplazamiento revela un límite inferior de lo que vale para ellos, porque nadie
incurre en un coste que supere lo que vale para ellos la visita.

Ambos métodos comparten una limitación estructural: solo pueden valorar lo que está incorporado en una
transacción de mercado existente. El ruido cerca de una pista de aterrizaje aparece en los precios de
la vivienda porque las personas a las que les importa el ruido se distribuyen hacia viviendas más
tranquilas; el valor de existencia de una especie que nadie visita ni cerca de la que nadie vive no
aparece en ninguna transacción en absoluto, que es precisamente la brecha que los métodos de
[preferencia declarada](../stated-preference-valuation/) existen para llenar.

## Las matemáticas

```
Fijación de precios hedónicos:
  Precio de la vivienda = f(atributos estructurales, atributos de
                   ubicación, atributo ambiental de interés, ...)
  Se estima mediante regresión; el coeficiente del atributo ambiental
  (manteniendo todo lo demás constante) es su precio implícito.

  Precio implícito del atributo X = ∂(Precio de la vivienda) / ∂X

Método del coste de viaje:
  Tasa de visitas (visitas per cápita desde la zona i) = f(coste de
                   viaje desde la zona i, emplazamientos sustitutivos,
                   controles socioeconómicos)
  Se estima una curva de demanda de visitas en función del coste de
  viaje.
  Excedente del consumidor = área bajo la curva de demanda estimada
                    = valor del emplazamiento para los visitantes
```

Ambos métodos requieren un conjunto de controles estadísticamente sólido: omitir un atributo de
confusión (hedónico) o un emplazamiento sustitutivo cercano (coste de viaje) sesga el precio implícito
en una dirección que no siempre es evidente de antemano, razón por la cual el Anexo 2 del Green Book
exige que se informe de la especificación de regresión y los controles, no solo del coeficiente
destacado.

## Ejemplo práctico

**Gobierno nacional**: la propia metodología de precio sombra del carbono del Green Book se basa en
parte en evidencia hedónica, pero un caso ilustrativo más sencillo es el ruido de aeronaves. Un estudio
hedónico que regresiona los precios de venta de viviendas en un área bajo una ruta de vuelo frente a la
exposición al ruido ponderada por distancia, controlando por tamaño, antigüedad y zona escolar,
encuentra que cada aumento de 1 decibelio en la exposición media al ruido se asocia con una reducción
del 0,5% en el precio de la vivienda. Para una vivienda típica de 280 000 £ en el área afectada:

```
Precio implícito por decibelio = 280.000 £ × 0,5% = 1.400 £ por hogar
Hogares afectados por un aumento de 3dB por una nueva pista = 18.000
Coste implícito agregado del aumento de ruido = 1.400 £ × 3 × 18.000 =
75,6m £
```

Este es un coste capitalizado puntual (incorporado en el precio de la vivienda), que la valoración debe
tener cuidado de no contar dos veces frente a un flujo de coste anual de molestia por ruido estimado
por separado.

**Organización benéfica**: una organización benéfica ambiental usa el método del coste de viaje para
valorar una reserva natural de entrada gratuita. Los datos de encuesta sobre los códigos postales de
los visitantes dan un coste de viaje medio de ida y vuelta (tiempo valorado a la tasa de valor del
tiempo no laboral recomendada por el Green Book, más combustible) de 14 £ por visita, con 40 000
visitas al año. La curva de demanda estimada —las tasas de visita caen a medida que aumenta el coste de
viaje desde una zona— implica un excedente del consumidor por visita, por encima de las 14 £ realmente
gastadas, de aproximadamente 9 £.

```
Valor anual total = 40.000 visitas × (14 £ gastadas + 9 £ de excedente
del consumidor)
                    = 40.000 × 23 £ ≈ 920.000 £/año
```

Esto eclipsa los ingresos de entrada gratuita de la reserva y da a los administradores (trustees) de
la organización benéfica una cifra defendible del valor recreativo del emplazamiento a la hora de
presentar el caso ante los financiadores.

## Conexión con la ingeniería de software

El pensamiento de preferencia revelada aparece en la analítica de producto del sector público más a
menudo de lo que quienes lo practican se dan cuenta: los datos de uso de un servicio digital
gubernamental gratuito son en sí mismos evidencia de preferencia revelada de valor (la frecuencia, la
duración de la sesión y —lo más revelador— los patrones de uso repetido frente a puntual pueden
analizarse de la misma manera que un modelo de coste de viaje trata la frecuencia de visita frente a la
distancia). Cuando un servicio tiene sustitutos genuinos (un canal en papel, una línea telefónica), el
"coste" que la ciudadanía incurre al usar el canal digital en su lugar (tiempo, datos, un dispositivo)
puede estimarse y compararse con el uso, haciendo eco directamente de la lógica del coste de viaje.
Véanse [el estándar de servicio digital](../digital-service-standard/) y [el valor de los datos
abiertos](../open-data-value/), que se enfrenta exactamente a este problema de valoración para un bien
sin precio de mercado directo.

## Errores habituales

- **Sesgo de variable omitida en los modelos hedónicos.** Omitir un atributo correlacionado (la
  calidad escolar correlacionada tanto con el precio de la vivienda como con la variable ambiental de
  interés) sesga la estimación del precio implícito; la especificación debe reportarse y examinarse,
  no solo el resultado.
- **Ignorar emplazamientos sustitutivos en los estudios de coste de viaje.** El valor revelado de un
  visitante por un emplazamiento se subestima si existe un sustituto más cercano y no se controla por
  él; puede que estén visitando principalmente porque es gratis, no porque sea único en valor.
- **Aplicar la preferencia revelada a un bien sin ningún eco de mercado en absoluto.** El valor de
  existencia, el valor de opción y el valor de legado no aparecen en ninguna transacción y no pueden
  recuperarse mediante métodos hedónicos o de coste de viaje; esa brecha pertenece a [la valoración por
  preferencia declarada](../stated-preference-valuation/).
- **Confundir el valor capitalizado (puntual) con un flujo anual.** Los efectos hedónicos del precio de
  la vivienda son habitualmente valores capitalizados puntuales; tratarlos como un flujo de beneficio
  anual infla la valoración.

## Fuentes

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
