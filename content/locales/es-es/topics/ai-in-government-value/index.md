# El valor de la IA en el gobierno

El valor de la IA en el gobierno es la exigencia de que un sistema de IA utilizado en un servicio
público supere el mismo umbral de relación calidad-precio y valor público que cualquier otra
decisión de gasto: ni uno más bajo por ser novedoso, ni uno más alto por ser temido. Es la pregunta
que un equipo de entrega debe poder responder antes, no después, de que se lance una funcionalidad
de IA: ¿esto produce más valor del que cuesta, una vez que se contabilizan honestamente el
aseguramiento, la supervisión y el riesgo?

## Por qué es importante

La Oficina Central de Datos y Digital del Reino Unido (CDDO) publicó en 2024 su Marco de IA
Generativa para el Gobierno, sobre la base de la guía provisional anterior de junio de 2023,
estructurado en torno a diez principios que cubren qué es la IA generativa, sus implicaciones
éticas, la seguridad de las herramientas, los controles de garantía de calidad, la gestión del ciclo
de vida completo de la IA generativa, la identificación de casos de uso genuinos, la colaboración
entre departamentos, la transparencia, las capacidades y la gobernanza. La insistencia del marco en
un "control humano significativo" y en la gestión del ciclo de vida completo existe porque los
análisis de viabilidad de proyectos de IA tienen un modo de fallo específico que otros gastos de TI
no tienen: la cifra destacada de productividad de un piloto es fácil de producir y fácil de exagerar,
porque se mide antes de contabilizar la carga de verificación, corrección y supervisión que crea la
herramienta. Junto al marco, el Estándar de Registro de Transparencia Algorítmica (ATRS) exige a los
organismos públicos publicar un registro estandarizado —propósito, datos utilizados, rendimiento,
pruebas de equidad, disposiciones de supervisión humana— para las herramientas algorítmicas que
tienen una influencia significativa en las decisiones sobre personas, lo que convierte el coste de
aseguramiento de un sistema de IA en un asunto de registro público, no en una estimación interna que
un equipo pueda omitir discretamente.

## Las matemáticas

La adopción de la IA se evalúa como un añadido a, no como un sustituto de, la evaluación estándar de
[relación calidad-precio](../value-for-money/), con los términos específicos de la IA hechos
explícitos en lugar de integrados en una única cifra de "ganancia de productividad":

```
Valor neto de un sistema de IA =
    ganancia de productividad (tiempo ahorrado × coste de personal cargado)
  − coste de licencia/computación
  − coste de verificación y supervisión humana (comprobar la salida de la IA antes
    de actuar sobre ella — esto no se reduce a cero ni siquiera con herramientas maduras)
  − coste de documentación ATRS y supervisión continua
  − coste ajustado por riesgo del daño derivado de errores, sesgos o alucinaciones,
    ponderado según quién soporta ese daño (distributional-weighting)

Una cifra de productividad de un piloto que omite el término de
supervisión no es comparable a una línea base de coste habitual que
ya incluye una revisión humana equivalente — véase
ai-productivity-in-the-public-sector para la disciplina más completa
de medición de productividad de la que esto se toma prestado.
```

## Ejemplo práctico

**Ayuntamiento que usa una herramienta de IA generativa para redactar primeras respuestas a
consultas rutinarias sobre el impuesto municipal**: 25 000 consultas/año, gestionadas previamente en
su totalidad por gestores de casos a una media de 14 minutos/consulta, coste de personal cargado de
34 £/hora.

```
Coste de referencia (sin IA):
  25.000 × (14/60) × 34 £ = 198.333 £/año

Afirmación destacada del piloto: la IA redacta una respuesta en 90
segundos, el gestor de casos "solo revisa y envía" — el nuevo tiempo
declarado es de 3 minutos
  25.000 × (3/60) × 34 £ = 42.500 £/año
  → ahorro declarado de 155.833 £/año (parece transformador)

Cifra totalmente cargada, medida tras 3 meses en producción y no en
los casos de prueba cuidadosamente seleccionados del piloto:
  Tiempo real de revisión y corrección por respuesta: 6 minutos (los
  borradores necesitan una edición real para consultas complejas o
  emocionalmente delicadas)
  25.000 × (6/60) × 34 £ = 85.000 £/año
  Coste de licencia/computación: 38.000 £/año
  Documentación ATRS y supervisión trimestral de sesgo/calidad: 14.000 £/año
  Coste total = 85.000 + 38.000 + 14.000 = 137.000 £/año

Ahorro real = 198.333 − 137.000 = 61.333 £/año — genuino y merece la
pena mantenerlo, pero muy por debajo de la mitad de la afirmación
destacada del piloto, y hizo falta una medición honesta del tiempo de
supervisión, no la del mejor de los casos del piloto, para
encontrarlo.
```

## Conexión con la ingeniería de software

Aquí es donde se encuentran [la productividad de la IA en el sector público](../ai-productivity-in-the-public-sector/)
y este tema: los equipos de ingeniería que integran funcionalidades de IA en los servicios públicos
son responsables de la instrumentación que hace posible la cifra "real" del ejemplo práctico:
registrar el tiempo real de revisión, la distancia de edición entre el borrador y la respuesta
enviada, y la tasa de escalado, en lugar de confiar en las condiciones de demostración del piloto.
Las funcionalidades de IA deben evaluarse frente al punto 9 del [estándar de servicio digital](../digital-service-standard/)
(servicio seguro, privacidad del usuario) y contrastarse con [el valor de la ciberseguridad del
sector público](../public-sector-cybersecurity-value/) cuando la herramienta trate datos de la
ciudadanía, y cualquier sistema de IA con influencia significativa en decisiones sobre personas
necesita un registro ATRS antes de poder considerarse listo para su evaluación, del mismo modo que
un servicio necesita superar una evaluación del [estándar de servicio digital](../digital-service-standard/)
antes de salir a producción.

## Errores habituales

- **Lavado de IA (AI-washing)**: reetiquetar la automatización basada en reglas existente como "IA"
  para acceder a financiación o atención destinada a la adopción de IA, sin los riesgos de precisión
  o sesgo que en realidad justifican el escrutinio adicional del marco.
- **Medir la productividad del piloto, no la productividad de producción**: los pilotos se ejecutan
  sobre casos de prueba seleccionados con revisores comprometidos y atentos; la producción se ejecuta
  sobre la mezcla completa y desordenada de casos, con revisores que, con el tiempo, desarrollan
  sesgo de automatización y revisan menos las salidas; ambos factores distorsionan la cifra honesta
  de coste de supervisión.
- **Omitir el registro ATRS porque la herramienta "no es realmente una toma de decisiones
  automatizada"**: el umbral del estándar es la influencia significativa en una decisión sobre una
  persona, lo que cumplen la mayoría de las herramientas de IA de redacción o clasificación de cara
  a la ciudadanía, incluso cuando técnicamente una persona da el visto bueno.
- **Ignorar el impacto distributivo de los errores**: la tasa de error de un sistema de IA promediada
  entre todos los usuarios puede ocultar una tasa de error o sesgo mucho mayor para grupos
  específicos; debería aplicarse [la ponderación distributiva](../distributional-weighting/) al
  término de daño ajustado por riesgo, no solo a la cifra de precisión agregada.

## Fuentes

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
