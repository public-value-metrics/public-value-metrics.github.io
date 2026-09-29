# Coste de oportunidad en el gasto público

El coste de oportunidad es el valor de la mejor alternativa a la que se renuncia cuando un organismo
público compromete dinero, tiempo de personal o capital político en una opción en lugar de en otra. En
un departamento con un presupuesto fijo, cada libra gastada en un programa es una libra que no puede
gastarse en el siguiente mejor programa: el coste real de una decisión no es lo que gasta, sino lo que
desplaza.

## Por qué es importante

Los presupuestos públicos están limitados en efectivo dentro de un periodo de revisión del gasto, así
que, a diferencia de una empresa privada en crecimiento, un departamento gubernamental no puede
simplemente "encontrar más dinero" para una buena idea; financiarla significa desfinanciar otra cosa.
El Green Book de HM Treasury trata esto como algo fundacional: toda valoración debe comparar una
intervención frente a una línea base de "hacer lo mínimo" *y* frente a usos alternativos realistas del
mismo recurso, precisamente porque la pregunta real que se hace un equipo de gasto del Tesoro nunca es
"¿es esto bueno?" sino "¿es esto mejor que lo que este dinero podría comprar de otro modo?". El
principio de valoración central del Green Book —que los recursos públicos deberían fluir hacia la
intervención con el mayor valor social neto por libra— es el coste de oportunidad expresado como
política.

Esto es fácil de enunciar y difícil de aplicar porque la "siguiente mejor alternativa" rara vez es
visible en un único análisis de viabilidad. Un programa de subvenciones de 2 millones de libras para
el empleo juvenil se compara, en el análisis de viabilidad, con no hacer nada, pero el comparador
honesto es la siguiente mejor intervención de empleo juvenil, o de hecho el mejor uso siguiente de 2
millones de libras en cualquier lugar de la cartera, incluido el gasto no relacionado con el empleo.
El Magenta Book (HM Treasury, 2020) advierte explícitamente que las evaluaciones que comparan "con
intervención" frente a "sin intervención" subestiman el listón que una intervención debe superar,
porque "sin esta intervención" no es lo mismo que "sin nada en absoluto": el dinero liberado financia
otra cosa.

## Las matemáticas

```
Coste de oportunidad de elegir A = valor de la mejor alternativa B a
la que se renuncia

Valor público neto de A = valor(A) − valor(B), no valor(A) − 0
```

No existe una fórmula universal porque la alternativa a la que se renuncia depende del contexto, pero
la disciplina se generaliza: identifique el siguiente mejor uso realista de la misma línea
presupuestaria (no un idealizado "no hacer nada"), valórelo sobre la misma base (monetizado cuando sea
posible, según [el análisis social de coste-beneficio](../social-cost-benefit-analysis/)), y reste.

## Ejemplo práctico

**Línea presupuestaria de un departamento**: un fondo de transformación digital de 5 millones de
libras puede financiar exactamente una de dos propuestas este ejercicio fiscal.

- *Opción A*: una nueva plataforma de gestión de casos, con un beneficio monetizado de 7,2 millones de
  libras a lo largo de 5 años (ahorros de eficiencia más resolución de casos más rápida).
- *Opción B*: un servicio de verificación de identidad compartido entre tres departamentos, con un
  beneficio monetizado de 6,4 millones de libras a lo largo de 5 años.

Un análisis de viabilidad ingenuo para A compara 7,2 millones de libras de beneficio con 5 millones de
libras de coste y reporta un ratio beneficio-coste de 1,44:1, aparentemente sólido. Pero como A y B
compiten por los mismos 5 millones de libras, el coste de oportunidad de elegir A es el beneficio de
6,4 millones de libras de B al que se renuncia. El caso *neto* de A frente a la alternativa realista es
solo 7,2m − 6,4m = 0,8 millones de libras, no la cifra destacada completa de 7,2 millones. Si una
tercera opción, C, ofreciera 7,5 millones de libras de beneficio por los mismos 5 millones de libras,
financiar A en lugar de C destruiría 0,3 millones de libras de valor público aunque el propio análisis
de viabilidad de A parezca plenamente justificado de forma aislada.

**Tiempo del personal de un ayuntamiento**: el equipo de datos de tres personas de un ayuntamiento
puede construir o bien un panel de listas de espera de vivienda (con un ahorro estimado de 400
horas-personal/año, valorado a 28 £/hora = 11 200 £/año) o una herramienta de cribado de fraude de
prestaciones (con una prevención estimada de 85 000 £/año en pagos incorrectos). Construir el panel
tiene un coste de oportunidad de 85 000 £/año a los que se renuncia, no simplemente el coste salarial
del equipo de datos: el coste real de la construcción interna "gratuita" es el beneficio mucho mayor
que el equipo podría haber producido en otro lugar.

## Conexión con la ingeniería de software

La capacidad de ingeniería dentro de un organismo público es en sí misma un presupuesto limitado
—capacidad de sprint, no libras— y la misma disciplina se aplica directamente:

- Nombre siempre el comparador: el análisis de viabilidad de una funcionalidad debería declarar qué
  más podrían entregar esas mismas semanas-equipo, no solo su propio retorno.
- Trate "tenemos capacidad de ingeniería de sobra" como el principio de un análisis de coste de
  oportunidad, no como el final: la capacidad sobrante sigue teniendo un mejor uso alternativo, incluso
  si ese uso es amortizar [deuda técnica](../technical-debt-as-public-value-erosion/).
- Conecte esto directamente con [relación calidad-precio](../value-for-money/): la prueba de "economía"
  del VFM carece de sentido sin un comparador honesto de coste de oportunidad, y con [el coste del
  retraso en programas públicos](../cost-of-delay-in-public-programmes/), que valora la dimensión
  temporal de esa misma lógica de alternativa a la que se renuncia.

## Errores habituales

- **Comparar frente a "no hacer nada" en lugar de la siguiente mejor alternativa.** El Green Book
  exige una línea base de "hacer lo mínimo" precisamente porque el verdadero coste de oportunidad rara
  vez es cero; un análisis de viabilidad que solo supera el listón de "no hacer nada" no ha demostrado
  que supere la alternativa realista.
- **Ignorar la competencia entre departamentos por el mismo fondo.** Las líneas presupuestarias que
  parecen protegidas dentro de una dirección a menudo compiten a un nivel superior (una revisión del
  gasto, un programa de capital) donde se realiza el verdadero coste de oportunidad.
- **Suponer que el tiempo de personal liberado no tiene ningún valor adicional.** El tiempo "ahorrado"
  solo crea valor si se redespliega hacia algo valioso; si el uso alternativo no existe, el ahorro es
  nominal.

## Fuentes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
