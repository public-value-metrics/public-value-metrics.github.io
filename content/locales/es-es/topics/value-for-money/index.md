# Relación calidad-precio (Value for Money, VFM)

La relación calidad-precio es la prueba formal del sector público del Reino Unido sobre si el gasto
logra el mejor equilibrio disponible entre coste y beneficio. El Green Book de HM Treasury la enmarca
a través de tres "E": economía, eficiencia y eficacia, con la equidad cada vez más defendida como una
cuarta E controvertida. Todo análisis de viabilidad del sector público que sobrevive al escrutinio
tiene que responder a las tres explícitamente, no solo afirmar que el gasto "merece la pena".

## Por qué es importante

El VFM no es sinónimo de "barato". El Green Book (edición de HM Treasury de 2022) es explícito en que
comprar la opción de menor coste (economía) sin comprobar que produce los resultados previstos
(eficacia) es un error común y caro: una contratación que ahorra un 10% en coste unitario pero entrega
un 40% menos de impacto es peor relación calidad-precio, no mejor. El marco de las tres E obliga a un
análisis de viabilidad a separar tres modos de fallo genuinamente distintos: pagar demasiado por los
insumos, desperdiciar insumos al convertirlos en productos, y producir productos que no se traducen en
resultados que alguien quisiera. Los controles de gasto del gobierno del Reino Unido —puntos de
aprobación del Tesoro, estudios de relación calidad-precio de la National Audit Office (NAO) y
evaluaciones de los responsables contables departamentales— se construyen en torno a esta prueba de
tres partes, así que un análisis de viabilidad de ingeniería que solo aborde el coste (economía)
fallará el escrutinio aunque la tecnología sea sólida.

La "cuarta E", la equidad, es controvertida precisamente porque puede entrar en conflicto con las
otras tres: la forma más eficiente de prestar un servicio a nivel nacional rara vez es la más
equitativa, ya que concentrar la entrega donde es más barato llegar a la ciudadanía a menudo significa
desatender a quienes son más difíciles de alcanzar. La revisión de 2020 del Green Book respondió a las
críticas (incluidas las del Treasury Select Committee de 2020 y del IPPR North) de que los ratios
puros de coste-beneficio favorecían sistemáticamente a las regiones ya prósperas, exigiendo que las
valoraciones aborden el impacto distributivo explícitamente; véase [la ponderación
distributiva](../distributional-weighting/).

## Las matemáticas

El VFM no es un único ratio sino un diagnóstico de tres (o cuatro) partes, aplicado en secuencia:

```
Economía:       ¿Se compran los insumos al menor coste razonable para
                la calidad requerida?  (£ por unidad de insumo)

Eficiencia:     ¿Cuán bien se convierten los insumos en productos?
                (productos / insumos, p. ej., casos procesados por
                hora de personal técnico)

Eficacia:       ¿Producen realmente los productos los resultados
                previstos?
                (resultados logrados / resultados previstos)

[Equidad]:      ¿Se distribuyen los costes y beneficios de forma justa
                entre la población, o se concentran en quienes menos
                lo necesitan?
```

Un fallo de VFM puede ocurrir en cualquier etapa de forma independiente: contratación económica con
entrega ineficiente; entrega eficiente del producto equivocado; resultados eficaces comprados a un
coste excesivo. Véanse [los KPI del sector público](../public-sector-kpis/) sobre cómo se traducen
estos en indicadores medibles, y [el análisis de coste-efectividad en el gobierno](../cost-effectiveness-analysis-in-government/)
para el método de comparación formal.

## Ejemplo práctico

**Centro de contacto de un ayuntamiento**: un ayuntamiento compara dos opciones para un nuevo sistema
de gestión de casos.

- *Opción A*: licencia de 600 000 £ (la más barata disponible), pero los agentes siguen tardando una
  media de 22 minutos por caso porque el flujo de trabajo requiere reintroducir datos manualmente entre
  sistemas: la eficiencia es pobre.
- *Opción B*: licencia de 900 000 £, flujo de trabajo integrado, los agentes tardan una media de 9
  minutos por caso.

La economía por sí sola favorece a A (300 000 £ más barata). Pero con 40 000 casos/año, A cuesta
40 000 × 22/60 = 14 667 horas-personal; B cuesta 40 000 × 9/60 = 6000 horas-personal. A un coste de
personal totalmente cargado de 28 £/hora, A cuesta 410 667 £/año en tiempo de personal frente a los
168 000 £/año de B: una brecha de eficiencia de 242 667 £/año que supera la diferencia de economía
inicial de 300 000 £ en 14 meses. El VFM favorece a B una vez que se cuenta la eficiencia, no a A.

**Subvención de entrega de una organización benéfica**: un financiador compara una subvención de
50 000 £ que logra 200 colocaciones laborales exitosas (250 £/colocación, aparentemente excelente
economía) frente a una subvención de 120 000 £ que logra 350 colocaciones que persisten durante más de
12 meses, frente a las colocaciones de la primera subvención, de las que la mitad caduca en 3 meses. La
eficacia —resultados duraderos— invierte la clasificación aparente de VFM: el coste real por colocación
*duradera* es 250 £ ÷ 0,5 = 500 £ para la primera subvención, frente a 120 000 £/350 ≈ 343 £ para la
segunda.

## Conexión con la ingeniería de software

El VFM da a los equipos de ingeniería una disciplina para plantear los análisis de viabilidad
tecnológicos de la forma en que realmente los leerán las funciones de finanzas y auditoría:

- Declare la economía, la eficiencia y la eficacia como partidas separadas en un análisis de
  viabilidad, no como una única cifra de "valor" combinada; un revisor formado en el Green Book pedirá
  exactamente este desglose.
- Cuidado con optimizar el coste de contratación (economía) a expensas de la eficiencia de integración
  y flujo de trabajo, un falso ahorro muy común en la TI gubernamental (véanse [el coste total de
  propiedad en TI gubernamental](../total-cost-of-ownership-in-government-it/) y [construir frente a
  comprar en el gobierno](../build-vs-buy-in-government/)).
- La eficacia requiere datos de resultado, no solo recuentos de producto; conecte las métricas de
  entrega con [resultados frente a productos](../outcomes-vs-outputs/) y con una evaluación real
  mediante [el análisis contrafactual](../counterfactual-analysis/) en lugar de suponer que los
  productos implican resultados.
- Cuando un sistema sirve de forma desigual entre regiones o grupos demográficos, la cuestión de
  equidad es una objeción legítima de VFM, no un "extra deseable" separado; véase [la inclusión
  digital](../digital-inclusion/).

## Errores habituales

- **Equiparar el VFM con el precio más bajo.** La economía es un tercio (o un cuarto) de la prueba; el
  Green Book advierte explícitamente contra las reglas de contratación de "coste más bajo" que ignoran
  la eficiencia y la eficacia.
- **Medir productos y llamarlos resultados.** El rendimiento de casos (eficiencia) no es lo mismo que
  los casos resueltos bien (eficacia); véase [resultados frente a productos](../outcomes-vs-outputs/).
- **Tratar la equidad como opcional.** Desde la actualización de 2020 del Green Book, el impacto
  distributivo debe evaluarse junto a las tres E tradicionales, no añadirse después; incorporarlo a
  posteriori tras la aprobación de un análisis de viabilidad es mucho más difícil que incluirlo desde el
  principio.
- **Comparar opciones a volúmenes distintos sin normalizar.** Una comparación de VFM por unidad entre
  opciones que sirven a poblaciones distintas debe controlar por escala, o la comparación de eficiencia
  carece de sentido.

## Fuentes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
