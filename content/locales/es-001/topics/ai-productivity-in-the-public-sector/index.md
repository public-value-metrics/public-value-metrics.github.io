# La productividad de la IA en el sector público

Las métricas de lo que la asistencia de codificación con IA realmente hace al rendimiento de la
ingeniería —tasas de aceptación de sugerencias, aceleraciones en estudios controlados, rendimiento
de PR y retención de código— presentan una base de evidencia genuinamente contradictoria incluso
antes de añadir las restricciones del sector público: la clasificación de datos limita qué partes de
un patrimonio heredado puede llegar a tocar una herramienta de IA, los ciclos de contratación pública
implican que la herramienta evaluada suele ir una generación de modelo por detrás de la capacidad
actual, y los requisitos de habilitación de seguridad determinan quién puede usarla y en qué.

## Por qué es importante

Los dos estudios controlados más citados apuntan en direcciones opuestas. El ensayo controlado
aleatorizado (RCT) de Peng et al. de 2023 sobre GitHub Copilot encontró que los desarrolladores
completaban una tarea de servidor HTTP desde cero un 55,8% más rápido con Copilot (1h11m frente a
2h41m, n=95). El RCT de METR de 2025 encontró que desarrolladores de código abierto experimentados
que trabajaban en *sus propios repositorios maduros* eran un 19% más lentos con las herramientas de
IA de principios de 2025, aun creyendo que eran aproximadamente un 20% más rápidos. Ambos estudios
son rigurosos; la contradicción es el hallazgo: la eficacia en tareas desde cero no se traslada a la
eficacia en bases de código maduras, y buena parte de la ingeniería gubernamental es trabajo sobre
bases de código maduras en patrimonios más antiguos e idiosincrásicos que el repositorio comercial
mediano. El Marco de IA Generativa para el Gobierno de la Central Digital and Data Office (2024,
<https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) establece principios
para una adopción responsable precisamente porque esta base de evidencia no puede importarse sin más
de las demostraciones de los proveedores; se espera que los departamentos evalúen las herramientas
frente a sus propios requisitos de tratamiento de datos y seguridad antes de su implantación.

## Las matemáticas

```
Tasa de aceptación  = sugerencias aceptadas / sugerencias mostradas
Tasa de retención   = código de IA que sobrevive hasta el merge / código de IA aceptado
Aceleración         = (t_control − t_IA) / t_control  (SOLO a partir de comparación controlada)
Delta de rendimiento = Δ PR fusionadas/desarrollador/semana

Factor de cobertura del sector público:
  cuota de base de código elegible = LOC en sistemas donde la clasificación
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) permite usar la herramienta

Modelo de valor = desarrolladores × cobertura elegible × tiempo ahorrado × tarifa cargada × utilización
             — cada término necesita medición local, y el factor de
             cobertura no tiene equivalente en el sector privado
```

## Ejemplo práctico

Un departamento gubernamental pilota un asistente de codificación con IA entre 300 desarrolladores,
pero solo los sistemas clasificados como OFFICIAL son elegibles para usar la herramienta: el 70% del
patrimonio según la asignación de personal, quedando excluido por completo el 30% restante (sistemas
de clasificación superior).

```
Desarrolladores elegibles = 300 × 0,70 = 210

Resultado del piloto: tiempo ahorrado autodeclarado 40 min/día;
              ahorro medido a nivel de tarea 12 min/día (0,2h)
              — la brecha de percepción de METR, reproducida en el mundo real

Valorar la cifra MEDIDA:
  210 × 0,2h × 220 días × 55 £/h cargada × 0,6 de utilización
  = 210 × 44 horas × 55 £ × 0,6
  = 9240 horas × 55 £ × 0,6 ≈ 304.920 £/año de capacidad

Coste: 210 puestos con licencia × 22 £/mes × 12 ≈ 55.440 £/año

Ratio de capacidad neta ≈ 304.920 / 55.440 ≈ 5,5:1
```

Financiable en aproximadamente un tercio del beneficio autodeclarado, y solo después de aplicar el
techo de clasificación: licenciar a los 300 desarrolladores basándose en la cifra autodeclarada
habría exagerado tanto la población elegible como el ahorro real.

## Conexión con la ingeniería de software

Las disciplinas que se trasladan directamente: realizar **ensayos pragmáticos** sobre la propia base
de código del departamento y sobre tickets reales, no sobre tareas de demostración del proveedor,
porque el resultado de METR es específicamente un hallazgo de base de código madura; tratar la
**tasa de aceptación como un indicador indirecto, no como un resultado**: una alta aceptación con
baja retención es el equivalente en software del sobrediagnóstico; acompañar toda afirmación de
rendimiento con una **comprobación de estabilidad**, ya que el informe de DORA de 2025 encontró que
la adopción de IA eleva el rendimiento pero degrada la estabilidad de los cambios, que es exactamente
el análisis de beneficio neto que [las métricas DORA para el valor público](../dora-metrics-for-public-value/)
están diseñadas para realizar; y ser honestos en que las herramientas de IA pueden ampliar, no
reducir, la brecha en patrimonios heredados con mucha [deuda técnica](../technical-debt-as-public-value-erosion/),
porque los datos de entrenamiento infrarrepresentan el COBOL, los lenguajes de 4ª generación y el
código de mainframe a medida habituales en el gobierno, por lo que la calidad de las sugerencias es a
menudo más débil precisamente en los sistemas que más ayuda necesitan. Esto se sitúa junto a la
cuestión más amplia de [el valor de la IA en el gobierno](../ai-in-government-value/) y debería
regirse por las mismas restricciones de [el valor de la ciberseguridad del sector público](../public-sector-cybersecurity-value/)
que limitan dónde puede llegar a ver código o datos cualquier herramienta de terceros.

## Errores habituales

- **Trasplante de estudios de proveedores**: aplicar las aceleraciones de RCT en tareas desde cero al
  trabajo de integración con sistemas heredados es precisamente el error que expuso el estudio de
  METR.
- **La autodeclaración como medición**: una brecha de 20 puntos porcentuales entre percepción y
  medición es el sesgo más grande conocido en esta literatura, e infla los análisis de viabilidad que
  se basan únicamente en encuestas a desarrolladores.
- **Ignorar el techo de clasificación**: los modelos de licencia y de valor construidos sobre el
  personal total en lugar del subconjunto elegible con habilitación de clasificación exageran
  sistemáticamente tanto la rentabilidad como la cobertura alcanzable.
- **Retraso del ciclo de contratación**: la contratación de herramientas basada en marcos puede
  suponer que un piloto evalúe una generación de modelo que va entre 12 y 18 meses por detrás de lo
  disponible públicamente en el momento de la implantación completa, dejando obsoleta la suposición
  de aceleración del análisis de viabilidad original antes de la puesta en marcha.

## Fuentes

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
