# El valor de los datos abiertos

El valor de los datos abiertos es el problema de estimar cuánto valen los datos gubernamentales y
públicos cuando no tienen precio: no se venden, así que no hay una línea de ingresos, y sin embargo
publicarlos (registros meteorológicos, horarios de transporte, límites de códigos postales, registros
de empresas) genera demostrablemente actividad económica y social aguas abajo. Valorarlo bien importa
porque tanto "es gratis publicarlo" como "no vale nada" son ambos erróneos, y quien hace ingeniería de
software y decide si abrir una API o un conjunto de datos necesita un argumento mejor que cualquiera de
los dos.

## Por qué es importante

La estimación de arriba abajo más citada proviene del informe de 2013 del McKinsey Global Institute
"Open data: Unlocking innovation and performance with liquid information", que situó el valor anual
potencial de los datos abiertos en siete ámbitos —educación, transporte, productos de consumo,
electricidad, petróleo y gas, salud y finanzas de consumo— entre 3 y 5 billones de dólares al año a
nivel mundial, a través de mecanismos que incluyen una mayor transparencia, un ajuste más eficiente de
la oferta a la demanda y la habilitación de nuevos productos y servicios construidos sobre los datos.
Esa cifra es una estimación de escenario, no un resultado medido, y habitualmente se cita mal como si
fuera un ingreso que el gobierno pudiera captar directamente, cuando el valor recae principalmente
sobre terceros —empresas, investigadores, ciudadanía— que usan los datos, que es precisamente el
objetivo de abrirlos en lugar de venderlos. El Open Data Institute del Reino Unido, cofundado por Sir
Tim Berners-Lee y Sir Nigel Shadbolt en 2012, ha construido desde entonces un cuerpo de estudios de
caso más granulares y de abajo arriba —sector por sector, conjunto de datos por conjunto de datos— que
son mucho más útiles para un análisis de viabilidad real que la cifra destacada de McKinsey, porque
muestran el mecanismo de creación de valor, no solo su tamaño agregado.

## Las matemáticas

Los datos abiertos no tienen precio de mercado, así que los métodos de valoración lo sustituyen; se
repiten tres enfoques, y ninguno es suficiente por sí solo:

```
1. Método de coste evitado / coste de reposición:
   valor ≈ lo que los usuarios habrían pagado por producir o licenciar
   ellos mismos los datos equivalentes — un límite inferior, ignora el
   valor creado por usos que el productor original nunca anticipó

2. Método de análogo de mercado / actividad posterior:
   valor ≈ ingresos o ahorros generados por empresas/servicios
   construidos sobre los datos (p. ej., aplicaciones de navegación
   construidas sobre datos abiertos de cartografía y tráfico) — capta
   actividad económica real pero es difícil de atribuir con limpieza a
   la propia publicación de los datos (véase additionality-and-deadweight)

3. Método contingente/de preferencia declarada:
   valor ≈ lo que los usuarios dicen que pagarían, o el tiempo que
   dicen que les ahorra — véase stated-preference-valuation para el
   método general y sus sesgos

Ninguno de estos produce una cifra tan limpia como un precio de
mercado; los análisis de viabilidad de datos abiertos creíbles
triangulan entre dos o más, y son explícitos sobre qué mecanismo está
haciendo el trabajo.
```

## Ejemplo práctico

**Publicación ilustrativa de datos nacionales de cartografía/direcciones** (metodología según estudios
de caso al estilo ODI, cifras ilustrativas de la escala que este tipo de estudios suelen encontrar):

```
Estimación de coste evitado:
  Empresas que de otro modo licenciarían comercialmente datos
  equivalentes de correspondencia de direcciones, a un coste medio de
  licencia estimado de 4.000 £/año, entre una estimación de 15.000
  PYME que ahora usan el conjunto de datos abierto gratuito
  = 15.000 × 4.000 £ = 60.000.000 £/año solo en coste de licencia
  evitado

Estimación de actividad posterior (más especulativa, necesita un
contrafactual):
  Nuevos productos de enrutamiento de entregas y logística construidos
  sobre los datos abiertos que no existirían, o serían materialmente
  peores, sin ellos — requiere una comparación frente al contrafactual
  de que los datos permanecieran cerrados o licenciados comercialmente
  (counterfactual-analysis), porque parte de esa actividad ocurriría
  de todos modos con datos de pago a un precio más alto, que es peso
  muerto en el sentido de "valor creado al abrirlos"

Un análisis de viabilidad defendible informa de la cifra de coste
evitado como el límite inferior sólido, y trata la cifra de actividad
posterior como un escenario de límite superior, no como un hecho.
```

## Conexión con la ingeniería de software

Para quienes hacen ingeniería, la pregunta práctica sobre el valor de los datos abiertos suele ser más
estrecha que las cifras destacadas nacionales: ¿abrir esta API o conjunto de datos específico (en
lugar de mantenerlo tras un acuerdo con socios) aumenta la reutilización lo suficiente como para
justificar el coste continuo de documentarlo, versionarlo y soportarlo como una interfaz pública? Ese
coste de mantenimiento es real y es la contrapartida de la economía de "construir una vez, reutilizar
a menudo" de [gobierno como plataforma](../government-as-a-platform/): los dos temas son primos
cercanos, uno sobre código e infraestructura compartidos, el otro sobre datos compartidos. Cualquier
afirmación de valor de datos abiertos debería contrastarse con [la adicionalidad y el peso
muerto](../additionality-and-deadweight/) antes de incluirse en un análisis de viabilidad: la
actividad que habría ocurrido de todos modos, con datos licenciados comercialmente, no es valor que
haya creado la *apertura*.

## Errores habituales

- **Citar la cifra de McKinsey de 3-5 billones de dólares como específica del Reino Unido o como la
  cuota de este conjunto de datos**: es una estimación de escenario global de siete sectores de 2013;
  usarla como multiplicador preciso para un único conjunto de datos nacional tergiversa lo que
  realmente es la cifra.
- **Ausencia de contrafactual**: atribuirse el mérito de toda la actividad económica posterior
  construida sobre datos abiertos, sin preguntar cuánta habría ocurrido de todos modos con datos de
  pago o licenciados a un precio más alto (véanse [la adicionalidad y el peso
  muerto](../additionality-and-deadweight/) y [el análisis contrafactual](../counterfactual-analysis/)).
- **Confundir el coste de producción con el valor creado**: un conjunto de datos que fue caro de
  recopilar no es automáticamente valioso de publicar, y uno barato no es automáticamente de bajo
  valor; el valor sigue el uso posterior, no el coste anterior.
- **Ignorar el coste continuo de mantenimiento de lo "abierto"**: publicar un extracto CSV puntual no
  es el mismo compromiso que ejecutar una API abierta documentada, versionada y con soporte;
  infrafinanciar esto último después del anuncio de lanzamiento es un modo de fallo habitual.

## Fuentes

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
