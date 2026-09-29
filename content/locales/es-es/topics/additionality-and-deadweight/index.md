# Adicionalidad y peso muerto

La adicionalidad pregunta si una intervención causó un resultado que, de otro modo, no habría
ocurrido. El peso muerto (deadweight) es su reflejo: la proporción de un resultado que se habría
producido de todos modos, incluso sin el programa, la subvención o el subsidio. Casi toda afirmación
de impacto de un programa gubernamental o benéfico exagera su efecto hasta que se resta el peso
muerto, razón por la cual la guía de evaluación del Reino Unido lo trata como el primer y más
importante ajuste de cualquier cifra destacada.

## Por qué es importante

"Apoyamos a 500 empresas a crecer" suena como un logro, pero si 300 de esas empresas hubieran
crecido de todos modos —porque la economía local se estaba recuperando, porque tenían otras vías de
financiación, porque ya estaban en una trayectoria de crecimiento antes de que comenzara el
programa—, la verdadera contribución adicional del programa es de 200, no de 500. El Magenta Book de
HM Treasury y la histórica "Additionality Guide" de HM Treasury/BIS (desarrollada originalmente para
programas de desarrollo regional y regeneración, y ampliamente utilizada en toda la evaluación
gubernamental del Reino Unido desde entonces) formalizan el peso muerto como el ajuste inicial en la
secuencia estándar de impacto neto: efecto bruto menos peso muerto, menos desplazamiento, menos fuga,
ajustado por efectos multiplicadores, es igual al impacto neto adicional. Omitir este paso es la
forma más habitual, deliberada o no, en que se inflan las afirmaciones de impacto en el sector
público y social: un programa de subvenciones que solo mide los resultados brutos de los
participantes, sin grupo de comparación, no puede distinguir su propio efecto de lo que habría
ocurrido de todos modos.

El peso muerto no es un porcentaje fijo; depende por completo del contrapuesto (contrafactual) para
la población y la intervención concretas (véase [análisis contrafactual](../counterfactual-analysis/)).
Las evaluaciones de desarrollo regional inglesas realizadas bajo las antiguas Agencias de Desarrollo
Regional encontraron habitualmente tasas de peso muerto en el rango del 20-60%, según el tipo de
apoyo empresarial, razón por la cual las evaluaciones de programas creíbles informan un rango
ajustado por peso muerto en lugar de una única cifra asumida, y por la que financiadores como el
National Lottery Community Fund y Big Society Capital exigen a los beneficiarios abordar el peso
muerto explícitamente en los informes de resultados, en lugar de reportar recuentos brutos de
participantes.

## Las matemáticas

La secuencia estándar de ajuste de impacto neto, tal como se establece en la guía de evaluación del
Reino Unido (Magenta Book; Additionality Guide de HM Treasury/BIS; guía de evaluación de los fondos
estructurales ESIF):

```
Resultado bruto
  − Peso muerto       (lo que habría ocurrido de todos modos)
  − Desplazamiento    (actividad/beneficio desplazado desde otro lugar, no creado — véase
                       displacement-and-attribution)
  − Fuga              (beneficio que recae fuera del grupo/área objetivo)
  × Multiplicador      (actividad económica indirecta/inducida adicional, cuando es positiva)
  = Impacto neto adicional
```

Tasa de peso muerto como proporción:

```
Tasa de peso muerto = resultados que se habrían producido sin la intervención
                   / total de resultados brutos observados

Resultados netos adicionales = Resultados brutos × (1 − Tasa de peso muerto)
```

## Ejemplo práctico

**Programa de subvenciones de apoyo empresarial**: un plan regional de subvenciones informa que 500
empresas apoyadas aumentaron el empleo al año siguiente, una media de 3 puestos cada una: una
afirmación bruta de 1500 empleos.

Un grupo de comparación emparejado de empresas similares no apoyadas (véase
[análisis contrafactual](../counterfactual-analysis/)) muestra que el 40% del crecimiento del empleo
de las empresas apoyadas se habría producido de todos modos, según el desempeño del grupo emparejado
durante el mismo periodo.

```
Tasa de peso muerto = 40%
Empleos netos adicionales = 1500 × (1 − 0,40) = 900 empleos
```

El logro que el programa puede reportar honestamente es de 900 empleos, no 1500: una reducción del
40% únicamente por el ajuste de peso muerto, antes incluso de considerar el desplazamiento o la fuga.

**Programa de empleo benéfico**: una organización benéfica coloca a 200 personas desempleadas de
larga duración en puestos de trabajo por un coste de 600 000 £ (3000 £ por colocación, en bruto). Los
datos nacionales del mercado laboral muestran que, sin ninguna intervención, aproximadamente el 15%
de una cohorte comparable de desempleados de larga duración encuentra trabajo en el mismo periodo
mediante la rotación natural del mercado laboral.

```
Tasa de peso muerto = 15%
Colocaciones netas adicionales = 200 × (1 − 0,15) = 170
Coste real por colocación adicional = 600 000 £ / 170 ≈ 3529 £
```

La cifra bruta de coste por colocación (3000 £) subestima el coste real de la contribución adicional
de la organización benéfica en aproximadamente un 15%.

## Conexión con la ingeniería de software

La adicionalidad y el peso muerto importan directamente a quien construya software de medición de
impacto o gestión de subvenciones para el sector público o social:

- Los sistemas de informes de resultados deben capturar un grupo de comparación o línea base por
  diseño, no solo los resultados de los participantes; incorporar un contrafactual después de que un
  sistema se haya lanzado sin uno es mucho más difícil que integrar esa captura desde el principio
  (véase [análisis contrafactual](../counterfactual-analysis/)).
- Los paneles que solo informan recuentos brutos de participantes exagerarán sistemáticamente el
  impacto ante financiadores y organismos de supervisión; cuando existan estimaciones de peso muerto
  (a partir de la literatura de evaluación o de un grupo de comparación), el software debería mostrar
  la cifra neta de peso muerto junto a la bruta, no en su lugar.
- Esto conecta directamente con el [retorno social de la inversión](../social-return-on-investment/),
  cuyo ratio SROI solo es creíble una vez que se han restado el peso muerto (y el desplazamiento) de
  los resultados brutos reclamados: una calculadora de SROI que omita este paso producirá ratios
  inflados que no resisten el escrutinio.

## Errores habituales

- **Informar los resultados brutos como si todos fueran adicionales.** Este es el error de medición
  de impacto más común en los informes de subvenciones y programas; pregunte siempre "¿habría ocurrido
  esto de todos modos?" antes de publicar una cifra destacada.
- **Suponer que un único porcentaje de peso muerto se aplica en todas partes.** El peso muerto varía
  enormemente según el sector, la población y las condiciones económicas locales; utilice un grupo de
  comparación o evidencia específica del sector en lugar de reutilizar una cifra de una evaluación no
  relacionada.
- **Confundir el peso muerto con el desplazamiento.** El peso muerto trata sobre los resultados
  contrafactuales para los mismos participantes; el desplazamiento trata sobre los efectos en otras
  personas o lugares; véase [desplazamiento y atribución](../displacement-and-attribution/). Confundir
  ambos conduce a un doble cómputo o a un cómputo insuficiente del ajuste.
- **Peso muerto autodeclarado por los participantes.** Preguntar a los beneficiarios "¿habría ocurrido
  esto sin nuestra ayuda?" produce sistemáticamente estimaciones bajas de peso muerto (los
  participantes tienden a atribuir el mérito al programa); un grupo de comparación independiente es
  mucho más fiable.

## Fuentes

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
