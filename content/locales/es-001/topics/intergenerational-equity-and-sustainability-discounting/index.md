# Equidad intergeneracional y descuento por sostenibilidad

Descontar los costes y beneficios futuros a su valor actual es práctica estándar en la valoración
pública; véase [la tasa de descuento social](../social-discount-rate/); pero cualquier tasa de
descuento positiva, compuesta durante décadas o siglos, reduce el futuro lejano hacia cero en términos
actuales. Para decisiones con consecuencias a un siglo o más vista —el cambio climático, los residuos
nucleares, la pérdida de biodiversidad, la sostenibilidad de las pensiones—, ese hecho matemático se
convierte en uno ético: el descuento estándar puede hacer que un daño catastrófico para las
generaciones futuras parezca, en términos de valor actual, apenas merecedor de evitarse.

## Por qué es importante

La ecuación de Ramsey, derivada por Frank Ramsey en 1928, descompone la tasa de descuento en dos
componentes: la preferencia temporal pura (δ, cuánto simplemente preferimos el ahora frente al
después, independientemente de la riqueza) y el efecto del crecimiento de la riqueza (η×g, cuánto
descontamos porque se espera que las generaciones futuras sean más ricas, de modo que una libra
adicional les importa menos). La tasa de descuento estándar a largo plazo del Green Book del Reino
Unido se construye sobre esta ecuación y sigue un calendario *decreciente* en lugar de una tasa plana,
un diseño arraigado en el trabajo de Martin Weitzman sobre el "descuento gamma", que muestra que
cuando la propia tasa de descuento futura es incierta, la tasa equivalente de certeza que debería
aplicarse disminuye matemáticamente con el tiempo, porque los escenarios de tasa baja llegan a dominar
cuanto más lejos se mire. El Stern Review sobre la economía del cambio climático (2006), dirigido por
Sir Nicholas Stern, llevó el debate ético más lejos: Stern argumentó que la preferencia temporal pura
debería fijarse cerca de cero (usó δ ≈ 0,1%, reflejando solo la pequeña probabilidad de una catástrofe
que acabe con la civilización, no una preferencia genuina por el presente sobre el futuro), produciendo
una tasa de descuento efectiva mucho más baja que la práctica convencional del Green Book y, en
consecuencia, un argumento presente mucho mayor a favor de la acción climática. Los críticos
(notablemente William Nordhaus) argumentaron que la tasa cercana a cero de Stern era éticamente
defendible pero incoherente con el comportamiento de ahorro e inversión realmente observado. El
desacuerdo no es una nota técnica al pie: es la razón individual más importante por la que dos
economistas igualmente rigurosos pueden llegar a conclusiones enormemente distintas sobre cuánto
debería sacrificar la generación presente por el futuro, y es la razón por la que el software que
respalda la valoración de inversión pública a largo horizonte debe exponer sus supuestos de descuento
en lugar de enterrarlos en un valor predeterminado de hoja de cálculo.

## Las matemáticas

```
Ecuación de Ramsey:   r = δ + η × g

  r = tasa de descuento social
  δ = preferencia temporal pura (tasa de impaciencia, independiente de
      la riqueza)
  η = elasticidad de la utilidad marginal del consumo (valor
      decreciente del consumo adicional a medida que la gente se
      enriquece)
  g = tasa de crecimiento esperada del consumo per cápita

Calendario decreciente a largo plazo del Green Book (aproximado,
bandas publicadas actuales):
  Años 0-30:    3,5%
  Años 31-75:   3,0%
  Años 76-125:  2,5%
  Años 126-200: 2,0%
  Años 201-300: 1,5%
  Años 301+:    1,0%

Parámetros del Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Ejemplo práctico

**Valor actual de 1 £ de daño evitado dentro de 100 años**, bajo tres regímenes de descuento:

```
Tasa plana a corto plazo del Green Book (3,5%, mantenida constante
durante 100 años):
  VA = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 peniques)

Calendario decreciente del Green Book (3,5% para los años 1-30, 3,0%
para los años 31-75, 2,5% para los años 76-100):
  factor(1-30)  = 1,035^30  ≈ 2,807
  factor(31-75) = 1,03^45   ≈ 3,782
  factor(76-100)= 1,025^25  ≈ 1,854
  factor total ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  VA = 1 / 19,68 ≈ 0,051 £   (5,1 peniques)

Preferencia temporal pura casi cero al estilo Stern (r ≈ 1,4% plana):
  VA = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 peniques)
```

La misma 1 £ de daño evitado dentro de un siglo vale 3,2, 5,1 o 25 peniques hoy dependiendo
puramente de qué convención de descuento se use: un rango de casi ocho veces que determina si un
proyecto de mitigación climática con un alto coste inicial y un retorno a un siglo vista supera
siquiera el umbral de VAN positivo. Este es el mecanismo detrás de la advertencia central del
capítulo: a cualquier tasa plana significativamente positiva, un daño futuro suficientemente lejano
queda aritméticamente borrado de la valoración, independientemente de su gravedad real.

## Conexión con la ingeniería de software

- Cualquier herramienta de valoración o análisis de viabilidad a largo horizonte (infraestructura,
  adaptación climática, modelización de pensiones) debería implementar el calendario *decreciente* del
  Green Book, no una única tasa plana; un valor predeterminado de tasa plana incorpora silenciosamente
  un sesgo mucho más fuerte contra el futuro del que especifica la guía actual del gobierno del Reino
  Unido.
- La tasa de descuento y el horizonte siempre deberían exponerse como parámetros visibles y auditables
  en el software de valoración, con la sensibilidad del cálculo a ellos mostrada explícitamente (como
  en el ejemplo práctico anterior); enterrar la tasa en un archivo de configuración invita
  precisamente a la "elección ética oculta" que advierte el debate Stern-Nordhaus; esto se combina con
  el argumento de transparencia planteado en [la contabilidad del capital natural](../natural-capital-accounting/)
  y sustenta el tema de [la tasa de descuento social](../social-discount-rate/) en general.
- Cuando los beneficios de un programa son explícitamente intergeneracionales (defensa contra
  inundaciones, restauración del capital natural, infraestructura digital a largo plazo), [un análisis
  social de coste-beneficio](../social-cost-benefit-analysis/) debería informar de los resultados bajo
  al menos dos supuestos de descuento (el estándar del Green Book y un caso de sensibilidad de tasa
  baja) en lugar de una única estimación puntual, de modo que quienes toman las decisiones vean cuánto
  mueve la respuesta solo la elección de la tasa de descuento.

## Errores habituales

- **Presentar un único VAN descontado sin un rango de sensibilidad**: dado cuánto cambia la respuesta
  solo la tasa de descuento para proyectos de largo horizonte, un VAN de tasa única exagera
  materialmente la precisión; informe siempre de un rango que abarque al menos el estándar del Green
  Book y un escenario de tasa baja.
- **Aplicar la tasa plana a corto plazo (3,5%) a una valoración multisecular**: la propia guía del
  Green Book especifica el calendario decreciente precisamente porque se juzgó que la tasa plana era
  inapropiada más allá de unos 30 años; usarla de todos modos subestima los costes a largo plazo.
- **Tratar δ (la preferencia temporal pura) como un parámetro puramente técnico**: tanto el valor
  cercano a cero de Stern como el valor implícito más alto del Green Book solo son defendibles como
  posturas éticas sobre cuánto peso debe el presente al futuro, no como cifras empíricamente
  "correctas" o "incorrectas"; el software debería hacer visible el supuesto en lugar de presentar una
  cifra como objetivamente correcta.

## Fuentes

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
