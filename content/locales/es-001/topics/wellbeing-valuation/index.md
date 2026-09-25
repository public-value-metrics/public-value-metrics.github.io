# Valoración del bienestar (WELLBY)

La valoración del bienestar pone precio al efecto de una política directamente en términos de
satisfacción vital, usando el WELLBY (año de vida ajustado por bienestar) como su unidad: un WELLBY
equivale a un cambio de un punto en una escala de satisfacción vital de 0 a 10, sostenido durante un
año. Es la alternativa oficialmente sancionada de HM Treasury a monetizar cada beneficio mediante la
disposición a pagar.

## Por qué es importante

La "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) de HM
Treasury introdujo formalmente los datos de bienestar subjetivo en la valoración del gobierno central,
dando a quienes analizan una vía para valorar resultados —conexión social, salud mental, seguridad,
participación cívica— que los métodos de [preferencia declarada](../stated-preference-valuation/) y
[preferencia revelada](../revealed-preference-valuation/) tienen dificultades para poner precio de
forma convincente, porque las personas a menudo son malas prediciendo cuánto afectará realmente un
bien a su satisfacción con la vida. La guía, desarrollada conjuntamente con el What Works Centre for
Wellbeing, fija un valor monetario recomendado por WELLBY —13 000 £ (precios de 2021, revisados
periódicamente)— derivado de la relación observada en grandes encuestas de bienestar (principalmente la
Annual Population Survey de la ONS, que ha preguntado las cuatro preguntas de bienestar ONS4 desde
2011) entre la renta y la satisfacción vital, dando a quienes analizan una tasa de conversión de vuelta
a libras cuando se necesita una comparación monetizada frente a otras valoraciones del Green Book.

El método importa porque invierte la lógica de valoración habitual: en lugar de preguntar cuánto
pagaría la gente por un resultado (preferencia declarada) o inferir el valor de una transacción de
mercado relacionada (preferencia revelada), mide el efecto del resultado sobre la satisfacción vital
declarada directamente, esquivando la brecha entre lo que la gente dice que quiere y lo que realmente
la deja mejor. Esta es también su limitación central: la satisfacción vital autodeclarada se ve
afectada por efectos de adaptación y de encuadre que quien la practica debe controlar cuidadosamente.

## Las matemáticas

```
WELLBY = 1 punto de satisfacción vital (escala 0-10) sostenido para 1
persona durante 1 año

Total de WELLBY de una política =
  Σ (cambio en la puntuación de satisfacción vital) × (número de
  personas afectadas)
    × (duración en años, descontada a la tasa de descuento social)

Valor monetizado = Total de WELLBY × valor por WELLBY
  (valor recomendado por HM Treasury: 13.000 £ por WELLBY, precios de
   2021, sujeto a revisión periódica — compruebe la guía actual antes
   de usarlo)
```

Esto difiere del [año de vida ajustado por bienestar](../wellbeing-adjusted-life-years/) de la
economía de la salud, que típicamente se ancla a escalas de calidad de vida relacionadas con la salud
(EQ-5D y similares) en lugar de la satisfacción vital general; ambos están relacionados pero no son
intercambiables, y las valoraciones del Green Book deberían ser explícitas sobre qué escala y método de
obtención sustenta una cifra de WELLBY reportada.

## Ejemplo práctico

**Ayuntamiento**: un ayuntamiento ejecuta un programa comunitario de acompañamiento para residentes
mayores aislados, sirviendo a 400 personas. Una encuesta de bienestar antes/después usando la pregunta
de satisfacción vital ONS4 muestra que la puntuación media de los participantes sube de 5,8 a 6,5: una
ganancia de 0,7 puntos, sostenida durante la duración financiada de 2 años del programa.

```
WELLBY generados = 400 personas × 0,7 puntos × 2 años = 560 WELLBY
Valor monetizado = 560 × 13.000 £ = 7,28m £
Coste del programa = 450.000 £ en 2 años

Ratio beneficio-coste ≈ 7,28m £ / 0,45m £ ≈ 16:1
```

Un ratio tan alto debería provocar escrutinio en lugar de celebración; la guía de bienestar del Green
Book advierte explícitamente contra tomar al pie de la letra las ganancias autodeclaradas de muestra
pequeña sin comprobar los efectos de selección (¿se unieron al programa solo los residentes más
sociables, con más probabilidades de mejorar?) y sin un grupo de comparación; una evaluación bien
diseñada compensaría un cambio contrafactual observado en los no participantes, véase [el análisis
contrafactual](../counterfactual-analysis/).

**Gobierno nacional**: comparar dos programas de empleo usando WELLBY en lugar de solo las ganancias
captura que el desempleo conlleva un coste de bienestar más allá de la pérdida de ingresos; la
investigación de bienestar del Reino Unido encuentra sistemáticamente que el desempleo reduce la
satisfacción vital más de lo que predeciría solo la pérdida de ingresos, debido a los efectos no
pecuniarios de perder estructura, propósito y contacto social. Un programa evaluado solo por la
ganancia de ingresos subestimaría su valor en relación con uno evaluado adicionalmente por WELLBY.

## Conexión con la ingeniería de software

La valoración del bienestar rara vez llega directamente a los equipos de ingeniería, pero da forma a lo
que se define como "éxito" para los productos del sector social y de servicios públicos: una
plataforma digital de acompañamiento, una herramienta de cribado de salud mental o una plataforma
comunitaria para residentes aislados deberían esperar que su impacto se mida eventualmente de esta
manera, lo que significa que la analítica de producto necesita capturar *a quién* se llega y durante
*cuánto tiempo*, no solo recuentos de uso. Incorpore la instrumentación de encuestas de bienestar
(ONS4 o equivalentes validados) en la evaluación del servicio desde el principio en lugar de añadirla
retrospectivamente; incorporar a posteriori una línea base de bienestar después de que un servicio se
haya lanzado pierde por completo la comparación antes/después. Véanse [resultados frente a
productos](../outcomes-vs-outputs/) y [los métodos de evaluación de impacto](../impact-evaluation-methods/).

## Errores habituales

- **Ningún contrafactual o grupo de comparación.** Una ganancia de bienestar antes/después sin ningún
  control de lo que habría ocurrido de todos modos exagera el efecto del programa; véanse [el análisis
  contrafactual](../counterfactual-analysis/) y [la adicionalidad y el peso
  muerto](../additionality-and-deadweight/).
- **Muestras pequeñas y autoseleccionadas.** Las encuestas de bienestar de participantes del programa
  que se apuntaron voluntariamente son propensas al sesgo de selección: las personas que se unieron y
  permanecieron plausiblemente ya estaban mejorando.
- **Tratar la conversión de £ por WELLBY como precisa.** El valor monetizado es una convención de
  política derivada de regresiones de renta-bienestar, no un precio de mercado; úselo para la
  comparabilidad entre valoraciones del Green Book, no como una afirmación sobre lo que "vale" el
  bienestar.
- **Confundir los WELLBY con los AVAC relacionados con la salud.** Ambos miden constructos distintos
  en escalas distintas; véase [años de vida ajustados por bienestar](../wellbeing-adjusted-life-years/)
  para la variante de economía de la salud y no promedie ambos juntos.

## Fuentes

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
