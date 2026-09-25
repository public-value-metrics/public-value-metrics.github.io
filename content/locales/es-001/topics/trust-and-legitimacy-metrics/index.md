# Métricas de confianza y legitimidad

La legitimidad y el apoyo es una de las tres patas del "triángulo estratégico" de Mark Moore en
*Creating Public Value* (1995) —junto al propio valor público y la capacidad operativa— y es la pata
que con más frecuencia queda sin medir, porque a diferencia de un presupuesto o un recuento de
producto, la legitimidad no tiene una única cifra evidente asociada. Las métricas de confianza y
legitimidad son la familia de medidas indirectas que los gobiernos usan para llenar esa brecha:
encuestas de confianza institucional, calificaciones de confianza de organismos de supervisión, datos
de quejas y apelaciones, e indicadores de apoyo político/legislativo.

## Por qué es importante

El argumento de Moore es que un gestor público que entrega valor real pero pierde legitimidad política
y pública acabará perdiendo el entorno autorizador necesario para seguir entregándolo: se recorta la
financiación, se restringen los mandatos y el servicio se asfixia sin importar lo buenos que sean sus
resultados. La legitimidad, por tanto, no es un añadido de relaciones públicas atornillado a un cuadro
de mando de entrega; es un insumo estructural para si la misión puede continuar en absoluto, razón por
la cual se sitúa como una perspectiva de igual peso en [un cuadro de mando de valor público](../public-value-scorecard/)
en lugar de como una nota a pie de página. El programa de encuestas "Trust in Government" de la OCDE es
el intento transnacional líder de cuantificar esto: sigue la proporción de la ciudadanía en los estados
miembros de la OCDE que dice tener confianza en su gobierno nacional, y sus datos de largo recorrido
muestran que la confianza es altamente sensible a los shocks: tanto la crisis financiera de 2008 como
la pandemia de COVID-19 produjeron oscilaciones bruscas a nivel nacional, a menudo seguidas de solo una
recuperación parcial, y el análisis de la OCDE encuentra sistemáticamente que la *competencia* percibida
(si el gobierno entrega lo que dice que hará) y la *equidad/integridad* percibida (si se ve al gobierno
actuando sin corrupción ni favoritismo) son los dos motores más fuertes de la cifra de confianza,
distintos de la satisfacción con cualquier transacción individual. Los gobiernos cada vez intentan
también operacionalizar la legitimidad a un nivel más granular: los reguladores e inspectorados
independientes del Reino Unido (la National Audit Office, el Parliamentary and Health Service
Ombudsman, reguladores sectoriales como Ofsted y la Care Quality Commission) funcionan como
comprobaciones de legitimidad institucionalizadas, convirtiendo "¿sigue el público confiando en este
servicio?" en calificaciones auditables.

## Las matemáticas

La confianza y la legitimidad son un tema con forma de marco cuyos indicadores cuantitativos
utilizables son:

```
Índice de confianza institucional (estilo OCDE)
  = % de encuestados que responden "sí" a una pregunta de confianza en
    el gobierno, seguido en el tiempo, desglosado por grupo demográfico

Conjunto de indicadores de legitimidad (ninguna cifra única sustituye
al constructo):
  - Quejas confirmadas por cada 1000 usuarios del servicio (datos del
    defensor del pueblo o de quejas internas)
  - Tasa de éxito de revisión judicial/apelaciones frente a las
    decisiones del organismo
  - Calificación de regulador/inspectorado independiente (p. ej.,
    bandas de "sobresaliente" a "inadecuado")
  - Votos de confianza de comités legislativos/de supervisión o
    frecuencia de informes críticos
  - Volumen de solicitudes de libertad de información y tasa de
    divulgación/rechazo, como indicador indirecto de transparencia
    percibida

La legitimidad se corrobora, no se calcula: una evaluación de
legitimidad defendible triangula varios de los indicadores anteriores
en lugar de apoyarse en uno solo.
```

## Ejemplo práctico

**Autoridad fiscal nacional**: triangulación de legitimidad para un informe anual de valor público.

```
Indicador de confianza estilo OCDE (encuesta de confianza específica
del departamento):
  El 58% de los encuestados dice confiar en que la autoridad "me trate
  de forma justa" (bajado desde el 64% dos años antes)

Datos de quejas:
  Quejas confirmadas: 4,2 por cada 1000 interacciones con
  contribuyentes (subido desde 3,1 por cada 1000)

Derivaciones al defensor del pueblo:
  Derivaciones a la Adjudicator's Office independiente: 1850 en el
  año, de las cuales el 61% se confirmaron total o parcialmente contra
  la autoridad (subido desde el 48% el año anterior)

Leyendo los tres juntos: la confianza cae, las quejas confirmadas
suben, y los hallazgos del defensor del pueblo independiente cada vez
más se posicionan contra la autoridad — tres señales independientes
que convergen en la misma dirección, que es lo que convierte esto en
un hallazgo de legitimidad creíble en lugar de ruido en una sola serie.
```

Que una sola de estas cifras se moviera sería evidencia débil; que tres medidas independientes se
muevan juntas durante el mismo periodo es el patrón que hace defendible una afirmación de legitimidad.

## Conexión con la ingeniería de software

Las métricas de legitimidad rara vez las produce el panel de un único equipo, que es en sí misma la
lección de diseño: construya procesos de informes que puedan ingerir y conciliar datos de fuentes
externas independientes (sistemas de casos del defensor del pueblo, canales de calificación de
reguladores, proveedores de encuestas) en lugar de arquitecturar los informes de legitimidad como una
métrica solo interna, porque las afirmaciones de legitimidad de fuente interna ("nos calificamos a
nosotros mismos como fiables") tienen poco peso probatorio: el mismo problema de independencia señalado
para la perspectiva de legitimidad en [un cuadro de mando de valor público](../public-value-scorecard/).
Los procesos de datos de quejas y apelaciones merecen el mismo rigor de calidad de datos que cualquier
proceso de resultados que alimente contratos de [pago por resultados](../payment-by-results-and-social-impact-bonds/),
ya que un conjunto de datos de quejas infrarregistrado o mal categorizado subestima silenciosamente un
problema de legitimidad antes de que se haga visible en una encuesta de confianza un año después. Véase
[las métricas de satisfacción ciudadana](../citizen-satisfaction-metrics/) para la contraparte a nivel
de transacción de esta medida a nivel institucional, y [valor público](../public-value/) para el marco
completo del triángulo estratégico de Moore al que pertenece esta pata.

## Errores habituales

- **Tratar la satisfacción como un indicador indirecto de legitimidad**: una persona ciudadana puede
  estar satisfecha con la interfaz de una única transacción mientras desconfía de la institución en
  general (o viceversa); véanse [las métricas de satisfacción ciudadana](../citizen-satisfaction-metrics/)
  sobre por qué ambas deben informarse por separado.
- **Depender de una única métrica autodeclarada**: una encuesta de confianza gestionada internamente
  sin corroboración independiente (datos del defensor del pueblo, calificaciones de reguladores) es
  fácil de descartar como autoevaluación; triangule.
- **Ignorar el desglose demográfico**: las cifras agregadas nacionales de confianza pueden ocultar una
  legitimidad marcadamente divergente entre grupos específicos (por edad, etnia, renta o región); las
  propias publicaciones de Trust in Government de la OCDE desglosan precisamente por esta razón.
- **Leer una caída impulsada por un único shock como una tendencia permanente**: las cifras de
  confianza se mueven bruscamente en torno a crisis (colapsos financieros, pandemias, escándalos de
  alto perfil) y se recuperan parcialmente; un único dato posterior a un shock no debería extrapolarse
  a un declive de largo recorrido sin más datos.

## Fuentes

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
