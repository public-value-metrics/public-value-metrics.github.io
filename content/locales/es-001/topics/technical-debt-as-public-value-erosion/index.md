# La deuda técnica como erosión del valor público

La deuda técnica es la metáfora de 1992 de Ward Cunningham para el coste futuro implícito de
decisiones de codificación pasadas tomadas por conveniencia: un **principal** (el trabajo de
subsanación debido) y un **interés** (el lastre continuo que ejerce sobre la entrega). En un patrimonio
de TI gubernamental heredado, ese interés se paga directamente con cargo al valor público: una entrega
más lenta de cambios estatutarios, mayores tasas de fallo en los servicios de cara a la ciudadanía y un
grupo cada vez más pequeño de personas que pueden tocar el sistema con seguridad en absoluto.

## Por qué es importante

Los sistemas heredados de mainframe y de la era COBOL en los departamentos del gobierno del Reino
Unido —HMRC y DWP entre los más citados— conllevan un riesgo bien documentado y creciente que la
National Audit Office ha señalado repetidamente, incluido en su informe *Digital Transformation in
Government* (<https://www.nao.org.uk/>): plataformas envejecidas que son caras de cambiar, cada vez más
difíciles de asegurar y dependientes de una mano de obra especializada que se jubila más rápido de lo
que se la reemplaza. A diferencia de un atraso del sector privado, esta deuda se sitúa directamente
entre la ciudadanía y sus derechos estatutarios: un motor de cálculo de prestaciones que no puede
cambiarse con seguridad es una restricción de entrega de política, no solo un inconveniente de
ingeniería. El reinicio de 2013 del programa de TI de Universal Credit, cuando la National Audit Office
encontró que la construcción original no entregaría relación calidad-precio y hubo que dar de baja una
parte sustancial del activo de software, es un ejemplo canónico de deuda técnica no valorada
alcanzando a un programa público en producción y visible ministerialmente.

## Las matemáticas

```
Principal SQALE = Σ sobre las infracciones (tiempo de subsanación) ×
                   tasa de coste del desarrollador
Ratio de deuda técnica (TDR) = coste de subsanación / coste de
                   redesarrollo × 100
                    (calificaciones de SonarQube: A ≤5%, B ≤10%, C
                    ≤20%, D ≤50%)

Interés (la cifra que justifica la amortización):
  interés/año = Δ velocidad de entrega × valor por unidad de velocidad
                + Δ tasa de incidencias de cara a la ciudadanía ×
                  coste por incidencia
                + prima por capacidades especializadas × personal
                  afectado
Caso de amortización = VA(interés evitado a lo largo del horizonte) −
               coste de subsanación
               (descontado a la tasa de descuento social del Green
               Book, véase social-discount-rate.md)
```

El principal declara el pasivo; el interés es lo que hace el caso de inversión ante una comisión de
cuentas públicas.

## Ejemplo práctico

Un motor de procesamiento de solicitudes de 250 000 líneas escrito en un lenguaje de 4ª generación
heredado. Usando la referencia CAST Appmarq de aproximadamente 3,61 $ de principal de deuda técnica por
línea de código (≈2,85 £ a conversión típica):

```
Principal ≈ 250.000 × 2,85 £ ≈ 712.500 £
TDR ≈ 16% (calificación C)
```

Interés medido: el departamento mantiene a tres contratistas especializados con una prima del 40% sobre
las tarifas diarias estándar de un ingeniero sénior porque las capacidades internas se han agotado: un
extra de 180 000 £/año en un equipo de seis personas. El sistema también causa cuatro interrupciones de
procesamiento importantes al año, cada una suspendiendo decisiones para unos 5000 solicitantes y
redirigiéndolos al centro de contacto a aproximadamente 25 £/llamada:

```
Interés ≈ 180.000 £ (prima de capacidades)
         + 4 × 5.000 × 25 £ = 500.000 £ (coste de contacto redirigido)
         ≈ 680.000 £/año
```

La subsanación dirigida de los módulos con peor rendimiento cuesta 1 200 000 £ y se modela para reducir
el interés en un 70%:

```
Reducción de interés = 0,70 × 680.000 = 476.000 £/año
Retorno ≈ 1.200.000 / 476.000 ≈ 2,5 años
```

La focalización importa: subsanar código raramente tocado no compra nada, porque el interés se
concentra donde coinciden picos de frecuencia de cambio y densidad de deuda.

## Conexión con la ingeniería de software

El planteamiento de valor público que eleva un caso de deuda técnica más allá de "el código es
antiguo": exprese el patrimonio heredado como un inventario de dónde se concentra la capacidad de
entrega perdida, y conéctelo explícitamente con [el coste total de propiedad](../total-cost-of-ownership-in-government-it/),
ya que el interés es un coste operativo que pertenece a la línea de CTP, se lo haya pedido finanzas
alguna vez o no. Los sistemas cargados de deuda también conllevan una exposición de [ciberseguridad](../public-sector-cybersecurity-value/)
desproporcionada, porque la cadencia de parcheo y la densidad de deuda están correlacionadas: un
sistema heredado imparcheable es deuda técnica cuyo interés se paga en riesgo de incidencia en lugar de
en libras. Y toda compensación entre subsanación y funcionalidad es en sí misma una decisión de [coste
del retraso](../cost-of-delay-in-public-programmes/): amortizar deuda retrasa el siguiente cambio
estatutario, que tiene su propio CoD que debe sopesarse frente al interés ahorrado.

## Errores habituales

- **Informar solo del principal**: una estimación de subsanación grande y alarmante sin una cifra de
  interés no justifica nada ante quien aprueba el gasto.
- **Tomar literalmente las cifras de deuda generadas por herramientas**: los escáneres al estilo SQALE
  cuentan infracciones de reglas; se les escapa el tipo caro de deuda —decisiones arquitectónicas y
  reglas de negocio heredadas sin documentar— mientras señalan trivialidades.
- **"La reescritura lo evita todo"**: los programas de sustitución deben superar la misma disciplina
  que cualquier otro análisis de viabilidad —coste contrafactual, probabilidad de éxito y
  descuento—, no una exención de ella, como demostró el reinicio de Universal Credit de 2013.
- **Utopismo de deuda cero**: el nivel óptimo de deuda no es cero; la deuda es apalancamiento que
  compró una entrega anterior. La pregunta viva siempre es la tasa de interés, no si existe deuda en
  absoluto.

## Fuentes

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
