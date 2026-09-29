# Bases de datos de coste unitario

Una base de datos de coste unitario es una biblioteca de indicadores financieros indirectos,
previamente investigados y basados en evidencia, para resultados sociales —el valor de pasar del
desempleo al empleo, de reducir la soledad, de una tenencia estable— que permiten a un profesional
monetizar un resultado sin encargar una investigación de valoración a medida cada vez. Existen para que
una pequeña organización benéfica que redacta una solicitud de financiación pueda aplicar el mismo
rigor que una consultora bien dotada de recursos, reutilizando un indicador que otra persona ya derivó
y publicó.

## Por qué es importante

El UK Social Value Bank de HACT, desarrollado con el economista Daniel Fujiwara usando métodos de
valoración del bienestar, y Global Value Exchange, una base de datos abierta y colaborativa de
indicadores financieros, son las dos más utilizadas en el tercer sector y el sector público del Reino
Unido. Ambas existen porque el trabajo de valoración subyacente —[la valoración del
bienestar](../wellbeing-valuation/) y [la valoración por preferencia declarada](../stated-preference-valuation/)—
es caro, metodológicamente exigente y lento de ejecutar desde cero para cada proyecto. Una biblioteca
de indicadores compartida y publicada convierte lo que sería un ejercicio de investigación de varios
meses en una consulta, que es precisamente por lo que importan tanto para los cálculos de [el retorno
social de la inversión](../social-return-on-investment/) como para las evaluaciones de ofertas de [la
Ley de Valor Social](../social-value-act/): sin ellas, la monetización rigurosa solo sería asequible
para organizaciones lo bastante grandes como para encargar sus propios estudios.

## Las matemáticas

Una base de datos de coste unitario no calcula nada por sí misma; proporciona un insumo para un cálculo
que se hace en otro lugar:

```
Valor del indicador financiero = precio de mercado, O precio sombra, O
                         valoración del bienestar, O valor de
                         preferencia declarada
                         para una unidad definida de cambio de
                         resultado (p. ej., "por persona que pasa del
                         desempleo al empleo, por año")

Valor aplicado = número de resultados logrados × valor del indicador
unitario
```

Véase [precio sombra](../shadow-pricing/) sobre cómo se construye un indicador cuando no existe precio
de mercado, y [el retorno social de la inversión](../social-return-on-investment/) sobre cómo el valor
aplicado alimenta después un ratio tras los ajustes de peso muerto y atribución.

## Ejemplo práctico

**Organización benéfica (SROI de un servicio de acompañamiento)**: una entrada de base de datos de
coste unitario para "reducción de la soledad" da un indicador ilustrativo de 1100 £ por persona al
año. Aplicado a 80 beneficiarios: 80 × 1100 £ = 88 000 £ de valor bruto. Si la misma base de datos
también tiene un indicador para "mejora del bienestar mental" que se basa en un elemento de encuesta de
bienestar solapado, apilar ambos indicadores para las mismas 80 personas contaría dos veces parte del
mismo cambio subyacente; la base de datos proporciona la cifra, pero evitar este solapamiento es
responsabilidad de quien analiza.

**Ayuntamiento (SROI de un club de empleo)**: una entrada de base de datos de coste unitario para
"pasar del desempleo al empleo sostenido" se aplica a 45 participantes con un indicador ilustrativo de
8500 £ por persona al año: 45 × 8500 £ = 382 500 £ de valor bruto, antes de los ajustes de peso muerto
y atribución mostrados en [el retorno social de la inversión](../social-return-on-investment/).

## Conexión con la ingeniería de software

Los equipos que construyen herramientas de informes para organizaciones benéficas o comisionadores se
benefician de un "catálogo de resultados" interno: una tabla que asigna cada resultado que un producto
o servicio puede reclamar plausiblemente a un indicador con nombre, su base de datos de origen, su
fecha de publicación y un identificador de versión, para que distintos equipos de una organización no
elijan cada uno valores ligeramente distintos para el mismo resultado. Envolver los datos abiertos de
Global Value Exchange detrás de un servicio de consulta, con la fuente y la fecha siempre mostradas
junto a la cifra, mantiene el indicador auditable en lugar de ser un número mágico enterrado en una
hoja de cálculo. Véanse [el retorno social de la inversión](../social-return-on-investment/) y [la ley
de valor social](../social-value-act/) para los dos lugares principales donde se consumen estos
indicadores.

## Errores habituales

- **Tratar los indicadores como precisos.** La mayoría de los indicadores publicados son promedios
  modelados de estudios de valoración del bienestar con intervalos de confianza amplios; citar uno con
  precisión de la libra exagera la precisión que respalda la investigación subyacente.
- **Doble cómputo de indicadores solapados.** Combinar indicadores (p. ej., "soledad reducida" y
  "bienestar mental mejorado") que se derivan de constructos de encuesta solapados valora dos veces el
  mismo cambio subyacente.
- **Usar un indicador fuera de contexto sin ajustar.** Un indicador calibrado sobre una población y un
  año nacionales, aplicado en otro lugar sin ajuste por inflación o contexto, tergiversa silenciosamente
  el valor.
- **No comprobar la procedencia.** Global Value Exchange es abierto y colaborativo, así que la calidad
  de las entradas varía según quien contribuye; compruebe la fuente subyacente antes de citar una cifra
  en una solicitud de financiación o una presentación de contratación.

## Fuentes

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
