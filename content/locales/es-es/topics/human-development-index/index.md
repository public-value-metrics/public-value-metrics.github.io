# Índice de Desarrollo Humano (IDH)

El IDH es la alternativa insignia de la ONU a clasificar los países solo por su renta: combina la
esperanza de vida, la educación y la renta en una única cifra entre 0 y 1, sobre la premisa
—argumentada por el economista Amartya Sen y desarrollada para la ONU por Mahbub ul Haq— de que el
desarrollo trata sobre ampliar lo que las personas pueden hacer y ser, no solo lo que ganan. Se
publica anualmente en el Informe sobre Desarrollo Humano del Programa de las Naciones Unidas para el
Desarrollo (PNUD) desde 1990.

## Por qué es importante

Antes del IDH, el "desarrollo" se medía casi por completo por el PNB per cápita, que no dice nada
sobre si el crecimiento llega a la salud o la educación de la gente corriente. El enfoque de
capacidades de Sen replanteó el desarrollo como la expansión de las libertades reales, y ul Haq lo
convirtió en un índice publicable con el que el PNUD podía clasificar a todos los países, obligando a
los gobiernos que se enriquecieron solo por la renta pero descuidaron la salud o la escolarización a
enfrentarse a una clasificación peor de lo que sugería su PIB (los estados petroleros del Golfo y
algunas economías extractivas son los ejemplos habituales). La estructura tripartita del IDH es también
el antecesor metodológico directo de [el índice de privación múltiple](../multidimensional-poverty-index/):
ambos se niegan a dejar que una dimensión compense un déficit en otra, usando una media geométrica en
lugar de aritmética. El PNUD publica notas técnicas completas y los datos subyacentes de cada edición
(<https://hdr.undp.org/data-center/human-development-index>), que es la fuente canónica para cualquiera
que construya sobre el índice en lugar de reproducirlo.

## Las matemáticas

```
Índice de Esperanza de Vida (IEV)     = (EV − 20) / (85 − 20)

Índice de Años Medios de Escolarización = años medios de escolarización / 15
Índice de Años Esperados de Escolarización = años esperados de escolarización / 18
Índice de Educación (IE)              = (Índice de Años Medios + Índice de Años Esperados) / 2

Índice de Renta (IR)               = (ln(INB per cápita) − ln(100)) / (ln(75000) − ln(100))

IDH = (IEV × IE × IR) ^ (1/3)     [media geométrica de los tres subíndices]
```

La media geométrica es deliberada: como multiplica en lugar de promediar, una puntuación muy alta en
una dimensión no puede compensar por completo una puntuación muy baja en otra; un diseño que el PNUD
adoptó en 2010 específicamente para penalizar el desequilibrio, sustituyendo la fórmula anterior de
media aritmética.

## Ejemplo práctico

**País de renta media**: esperanza de vida de 72 años, años medios de escolarización de 8, años
esperados de escolarización de 13, INB per cápita de 12 000 $.

```
IEV = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
IAME = 8 / 15                                        = 0,533
IAEE = 13 / 18                                       = 0,722
IE = (0,533 + 0,722) / 2                             = 0,628
IR = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

IDH = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Un IDH de 0,713 cae en la banda de "desarrollo humano alto" del PNUD (0,700-0,799); "muy alto" empieza
en 0,800. Nótese lo sensible que es el resultado al subíndice más débil: si los años medios de
escolarización fueran 4 en lugar de 8 (IAME = 0,267, IE = 0,494), el IDH cae a (0,800 × 0,494 ×
0,723)^(1/3) ≈ 0,639, bajando una banda completa, aunque nada más cambiara.

## Conexión con la ingeniería de software

- El patrón de media geométrica es directamente reutilizable para cualquier puntuación compuesta de
  servicio o producto en la que no se quiera que una dimensión fuerte enmascare otra crítica y débil;
  por ejemplo, combinar las puntuaciones de accesibilidad, rendimiento y fiabilidad de un servicio
  digital público de forma multiplicativa en lugar de mediante un promedio ponderado, de modo que un
  servicio rápido pero inaccesible no pueda puntuar "bueno".
- La transformación logarítmica de la renta del IDH (valor marginal decreciente de una libra
  adicional) es la misma lógica que hay detrás de [la ponderación distributiva](../distributional-weighting/)
  en la valoración: 1000 £ adicionales significan mucho más para un hogar pobre que para uno rico, y
  tratar ambos de forma lineal valora mal el impacto.
- Cualquier panel que informe de una única puntuación combinada de "inclusión digital" o "resultados
  ciudadanos" debería documentar su fórmula de agregación con la misma explicitud que las notas
  técnicas del PNUD; véanse [los KPI del sector público](../public-sector-kpis/) y [el cuadro de mando
  de valor público](../public-value-scorecard/).

## Errores habituales

- **Promediar en lugar de usar la media geométrica**: una media aritmética permite que una renta alta
  enmascare por completo una mala salud o educación; el objetivo entero del cambio de metodología de
  2010 fue detener esa sustitución.
- **Comparar el IDH año tras año como si fuera un PIB ajustado por inflación**: el PNUD reajusta
  periódicamente la base del índice (nuevos límites mínimo/máximo, topes de escolarización revisados),
  por lo que un cambio de clasificación puede reflejar una actualización de metodología, no un cambio
  real; compruebe siempre de qué edición del Informe sobre Desarrollo Humano proviene una cifra.
- **Tratar el IDH como una medida de pobreza**: es un promedio nacional y no dice nada sobre la
  distribución dentro de un país; para eso, use [el índice de privación múltiple](../multidimensional-poverty-index/)
  o el IDH ajustado por desigualdad, separado, del PNUD.

## Fuentes

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
