# Retorno de la inversión para el donante

El retorno de la inversión para el donante es lo que realmente compra en resultados la libra de un
donante concreto, no los ratios operativos de la organización benéfica, ni el propio retorno de la
organización sobre su presupuesto total. Replantea el ROI desde la perspectiva de la organización
(con qué eficiencia funcionamos) hacia la perspectiva del donante (qué cambia mi contribución
marginal), y ambas cifras se tratan habitualmente, y de forma errónea, como si fueran lo mismo.

## Por qué es importante

El "ROI" de una organización benéfica, en la medida en que se use esa frase, suele describir algo
como [el coste por beneficiario](../cost-per-beneficiary/) o [el ratio de gastos generales de una
organización benéfica](../charity-overhead-ratio/): medidas de eficiencia organizativa. El ROI de un
donante es una pregunta completamente distinta: dado que esta organización benéfica ya tiene otros
ingresos, ¿qué añade en el margen el dinero de *este* donante en concreto? Si una organización
benéfica entregaría el mismo programa con o sin una donación particular de 10 000 £ —porque tiene
reservas amplias, o porque otro financiador habría cubierto el hueco—, el ROI para ese donante de esa
donación está cerca de cero, por bueno que parezca el ratio general de gastos generales o el coste por
resultado de la organización benéfica.

Esta es la misma pregunta de adicionalidad que sustenta la evaluación de [relación
calidad-precio](../value-for-money/) en el gasto público del Reino Unido y [la adicionalidad y el peso
muerto](../additionality-and-deadweight/) en la evaluación de programas: el valor creado solo puede
atribuirse a un financiador en la medida en que no habría ocurrido de todos modos. Las grandes
plataformas de fondos asesorados por donantes y las organizaciones de donación eficaz (Giving What We
Can, GiveWell) construyen sus recomendaciones explícitamente en torno a esta distinción, preguntando
no "¿es esta una buena organización benéfica?" sino "¿tiene esta organización benéfica margen sin
cubrir para más financiación tal que mi donación sea adicional?".

## Las matemáticas

```
ROI del donante ≠ Eficiencia operativa de la organización benéfica

ROI del donante  ≈  (Resultado logrado con la donación) − (Resultado que
                     habría ocurrido sin ella, es decir, el contrafactual)
             ─────────────────────────────────────────────────
                              Tamaño de la donación

Elementos clave:
  - Margen para más financiación (¿está la organización benéfica
    limitada por financiación en el margen?)
  - Fungibilidad (¿habría otro donante cubierto el hueco?)
  - Coste-efectividad marginal en el nivel de financiación específico
    (los costes a menudo aumentan a medida que una intervención escala
    más allá de su población de acceso más fácil)
```

Véase [la coste-efectividad del altruismo eficaz](../effective-altruism-cost-effectiveness/) para
cómo GiveWell operacionaliza la pregunta del "margen para más financiación", y [el análisis
contrafactual](../counterfactual-analysis/) para el método general.

## Ejemplo práctico

Un donante está eligiendo entre dos donaciones de 5000 £:

- **Organización benéfica C**: tiene un programa central completamente financiado con 2 millones de
  libras en reservas y una lista de espera de financiadores; las 5000 £ marginales probablemente se
  añadirían a las reservas o a una actividad de menor prioridad. Resultado adicional estimado del
  donante: mínimo; el dinero no cambia evidentemente lo que ocurre.
- **Organización benéfica D**: un programa pequeño y respaldado por evidencia que ha declarado
  públicamente que tendrá que rechazar a 200 personas el próximo trimestre sin 50 000 £ adicionales, y
  ha recaudado 42 000 £ de esa cantidad. Es muy probable que las 5000 £ marginales financien entrega
  adicional real: digamos, 20 personas más atendidas, al coste por beneficiario declarado por la
  organización benéfica de 250 £.

Misma cuantía de donación, mismo donante, ROI del donante radicalmente distinto, no porque la
Organización benéfica C sea peor organización (puede tener una cifra de coste por resultado mejor en
general), sino porque su brecha de financiación marginal ya está cerrada.

## Conexión con la ingeniería de software

Las plataformas de donantes y las herramientas de recomendación de donación con demasiada frecuencia
solo muestran métricas de eficiencia a nivel organizativo (ratio de gastos generales, coste por
beneficiario) porque eso es lo que las organizaciones benéficas publican en los informes anuales y lo
más fácil de incorporar a una tabla comparativa. Representar correctamente el ROI del donante requiere
un dato distinto y más difícil de obtener: la brecha de financiación actual declarada por una
organización benéfica, o su "margen para más financiación", que cambia a lo largo del año y rara vez
son datos estructurados. Las plataformas que quieran respaldar un razonamiento genuino de ROI para el
donante necesitan o bien una fuente directa de las divulgaciones de brecha de financiación (como
GiveWell mantiene manualmente para sus organizaciones benéficas recomendadas) o un descargo de
responsabilidad explícito de que una tabla comparativa está mostrando eficiencia organizativa, no
adicionalidad del donante. Véase [el ratio de gastos generales de una organización benéfica](../charity-overhead-ratio/)
para la métrica con la que el ROI del donante se confunde más a menudo, y erróneamente.

## Errores habituales

- **Confundir la eficiencia de la organización benéfica con la adicionalidad del donante.** Una
  organización benéfica bien gestionada y de bajos gastos generales aún puede tener un ROI marginal
  para el donante cercano a cero si no está limitada por financiación.
- **Ignorar la fungibilidad.** Si un gran financiador institucional habría cubierto el hueco de todos
  modos, la donación de un donante individual desplaza el dinero de ese financiador en lugar de añadir
  entrega nueva.
- **Suponer una coste-efectividad lineal a escala.** Los beneficiarios más baratos de alcanzar suelen
  atenderse primero; el coste marginal por resultado frecuentemente aumenta a medida que un programa se
  expande, por lo que el ROI de la siguiente libra no es el mismo que el ROI de la libra media ya
  gastada.
- **Ausencia de una brecha de financiación declarada.** Una organización benéfica o plataforma que no
  pueda decir qué financiarían las próximas X libras no puede respaldar una afirmación genuina de ROI
  para el donante, solo una de coste medio.

## Fuentes

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
