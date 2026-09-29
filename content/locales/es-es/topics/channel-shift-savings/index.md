# Ahorros por cambio de canal

Los ahorros por cambio de canal son la reducción de coste proyectada al trasladar volumen de
transacciones desde canales caros —teléfono, ventanilla presencial, correo postal— hacia el
autoservicio digital barato. Es el motor financiero que hay detrás de "lo digital por defecto", y
también la partida del análisis de viabilidad con más probabilidades de estar equivocada, porque el
supuesto en el que se apoya —que los canales presenciales se reducen a medida que aumenta la adopción
digital— solo es cierto a veces.

## Por qué es importante

La aritmética parece indiscutible usando las cifras de [coste por transacción](../cost-per-transaction/)
del Digital Efficiency Report: trasladar un millón de transacciones de una visita presencial de
8,62 £ a una digital de 0,15 £ supone un ahorro de más de 8 millones de libras. Pero un ahorro solo se
convierte en efectivo liberado para su redistribución si la *capacidad fija* del canal que se reduce
se desmantela realmente: los puestos del centro de llamadas, el personal de ventanilla, los minutos
del contrato telefónico; y los programas de transformación digital de las administraciones locales han
constatado repetidamente que el volumen total de contactos no cae en la misma proporción que la
adopción digital. La investigación de programas de transformación digital de ayuntamientos y de
organismos como Socitm y la Local Government Association ha documentado un patrón recurrente: los
canales digitales atraen contacto genuinamente nuevo (personas que no habrían llamado ni visitado
ahora lo hacen, porque es más fácil), y una proporción significativa de las transacciones "digitales"
fallan a mitad de camino y de todos modos generan una llamada telefónica; de modo que el volumen
telefónico cae mucho menos de lo que sugeriría el porcentaje de adopción digital, a veces sin caer en
absoluto en términos absolutos, aunque su *cuota* del contacto total sí disminuya.

## Las matemáticas

```
Ahorro bruto por cambio de canal = volumen desplazado × (coste_canal_antiguo − coste_digital)

Ahorro neto (realizado) = ahorro bruto
                       − demanda nueva/oculta creada por el canal más fácil
                       − coste de la demanda por fallos (fallos digitales
                         que de todos modos generan una llamada telefónica
                         o una visita a ventanilla)
                       − coste de la capacidad fija no desmantelada (un
                         centro de llamadas solo puede reducir personal en
                         unidades discretas; una caída del 15% en el
                         volumen rara vez permite recortar el 15% de la
                         plantilla)

Umbral de realización: los ahorros solo son contabilizables una vez que
el volumen cae por debajo del nivel al que el canal antiguo puede
dotarse de personal en su siguiente escalón discreto de capacidad más
pequeño (por ejemplo, perder un turno completo, un puesto completo, una
banda de plantilla contratada)
```

## Ejemplo práctico

**Servicio de renovación de tarjeta de aparcamiento para personas con discapacidad de un condado**:
60 000 renovaciones/año, previamente 100% por teléfono/papel a 6,40 £ por transacción. Se lanza un
nuevo servicio digital y alcanza una adopción digital del 65% en un año, a 0,30 £ por transacción
digital.

```
Cálculo ingenuo (bruto) del ahorro:
  39.000 desplazadas × (6,40 £ − 0,30 £) = 237.900 £/año

Lo que realmente ocurrió, según los datos del centro de contacto del
ayuntamiento:
  El volumen telefónico cayó de 60.000/año a 46.000/año (−23%, no −65%)
  porque: 9.000 trayectos digitales fallaron y generaron una llamada de
           seguimiento (fuga de demanda por fallos), y 4.000 personas
           que antes no renovaban en absoluto ahora sí lo hacen, al
           encontrarlo fácil en línea (demanda oculta — una mejora
           genuina de acceso, pero no un ahorro)

  El centro de contacto telefónico se dota de personal en bandas de
  8.000 llamadas/ETC; una caída de 14.000 llamadas (60.000 → 46.000)
  libera 1,75 ETC, redondeado a la baja en la práctica a 1 ETC
  realmente redistribuido = 34.000 £/año

Ahorro realizado = 34.000 £/año más el coste evitado de construcción y
  funcionamiento del canal digital en 39.000 transacciones ≈ 34.000 £ +
  (39.000 × 0,30 £ de coste digital ya contabilizado) — una fracción de
  la cifra destacada de 237.900 £, aunque el servicio sigue siendo
  inequívocamente mejor para los usuarios.
```

## Conexión con la ingeniería de software

La lección de ingeniería es que los ahorros por cambio de canal se realizan mediante decisiones
*operativas* (turnos, desmantelamiento, renegociación de contratos), no mediante el lanzamiento del
software: un equipo puede cumplir todos los puntos del [estándar de servicio digital](../digital-service-standard/)
y aun así generar un ahorro neto de cero si nadie desmantela la capacidad fija del canal antiguo.
Instrumentar la demanda por fallos (en qué punto del trayecto digital los usuarios abandonan y qué
hacen a continuación) es un problema de análisis de embudo resoluble, y es lo que más apalancamiento
tiene que puede hacer un equipo de ingeniería para proteger el caso de ahorro; también es el vínculo
directo con [el coste por transacción](../cost-per-transaction/), que la demanda por fallos infla
silenciosamente. Véase [realización de beneficios](../benefits-realization/) para la disciplina más
amplia de comprobar que los ahorros de un análisis de viabilidad realmente se materializan, y
[inclusión digital](../digital-inclusion/) para entender por qué el canal presencial normalmente no
puede, ni debe, retirarse por completo.

## Errores habituales

- **Suponer una sustitución de canal 1:1**: modelar la adopción digital como una resta directa del
  volumen telefónico/de ventanilla, ignorando la demanda oculta y la fuga por demanda de fallos
  documentadas en la investigación de cambio de canal de las administraciones locales.
- **Contabilizar los ahorros brutos antes del desmantelamiento**: contar el ahorro en el análisis de
  viabilidad en el año en que aumenta la adopción, no en el año (si es que llega) en que realmente se
  recorta la capacidad del canal antiguo.
- **Ignorar la naturaleza escalonada de los costes de personal**: una caída de volumen del 20% rara
  vez se traduce en una caída de coste del 20%, porque los centros de contacto y las ventanillas se
  dotan de personal en bandas discretas, no de forma continua.
- **Tratar la demanda oculta como desperdicio**: el contacto nuevo de usuarios previamente excluidos o
  previamente disuadidos es un aumento real de [valor público](../public-value/), no un error de
  modelización; debería reportarse como un resultado de acceso, no compensarse como ruido.

## Fuentes

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
