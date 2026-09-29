# Ratio de gastos generales de una organización benéfica

El ratio de gastos generales de una organización benéfica es el gasto administrativo y de captación
de fondos expresado como porcentaje del gasto total. Es la cifra más solicitada en la donación
benéfica —utilizada por donantes, organismos de vigilancia e incluso algunos financiadores como
indicador indirecto de eficiencia— y es también una de las métricas de eficiencia más profundamente
desacreditadas del sector, con las propias organizaciones que la popularizaron renegando de ella
públicamente en 2013.

## Por qué es importante

El 17 de junio de 2013, GuideStar, la BBB Wise Giving Alliance y Charity Navigator —los tres mayores
organismos de calificación e información sobre entidades sin ánimo de lucro de Estados Unidos, cuyas
propias calificaciones históricas habían ayudado a arraigar el ratio de gastos generales como
abreviatura de la calidad de una organización benéfica— publicaron una carta abierta conjunta a los
donantes estadounidenses, "The Overhead Myth", en la que declaraban explícitamente que el ratio de
gastos generales es una mala medida del desempeño de una organización benéfica e instaban a los
donantes a fijarse en cambio en la transparencia, la gobernanza y los resultados. Fue un giro de 180
grados por parte de las mismas instituciones que habían construido la cultura de donación en torno a
ese ratio durante una década.

El problema subyacente es estructural, no solo de percepción: un ratio de gastos generales bajo puede
lograrse infrainvirtiendo precisamente en aquello que hace eficaz a una organización benéfica: un
sistema decente de gestión de casos, personal formado, seguimiento y evaluación, porque a menudo eso
se contabiliza como "administración" en lugar de como coste de "programa". Una organización benéfica
que asfixia su administración para reportar un 5% de gastos generales puede ser menos capaz de
generar resultados que otra que gasta un 20% en una operación adecuadamente dotada de recursos. En
Inglaterra y Gales, la guía de la Charity Commission para los administradores (trustees) se aparta de
un único porcentaje de gastos generales como prueba de eficiencia, y en su lugar pide a los
administradores que informen sobre lo que la organización benéfica logró respecto a sus objetivos;
véanse los requisitos de información SORP tratados en [coste por beneficiario](../cost-per-beneficiary/).

## Las matemáticas

```
Ratio de gastos generales = (Coste administrativo + Coste de captación de fondos) / Gasto total

Variantes habituales:
  Ratio de programa          = Gasto de programa (benéfico directo) / Gasto total
                          = 1 − ratio de gastos generales
  Eficiencia de captación de fondos  = Coste de captación de fondos / Fondos captados
```

Ninguna de estas fórmulas contiene información alguna sobre los resultados logrados. Una organización
benéfica puede minimizar todas y cada una de ellas y aun así fallar a todos sus beneficiarios; véase
[coste por resultado](../cost-per-outcome/) para la métrica que sí se ocupa de si el dinero funcionó.

## Ejemplo práctico

Dos organizaciones benéficas, mismo gasto total:

- **Organización A**: 1 000 000 £ de gasto total, 80 000 £ de administración y captación de fondos →
  ratio de gastos generales del 8%. No tiene función de seguimiento y evaluación, un único responsable
  financiero sobrecargado de trabajo y ningún sistema de gestión de casos; la rotación de personal es
  alta y no se recopilan datos de resultados.
- **Organización B**: 1 000 000 £ de gasto total, 220 000 £ de administración y captación de fondos →
  ratio de gastos generales del 22%. Financia un pequeño equipo de evaluación, un sistema de gestión de
  casos que captura el seguimiento de resultados y una formación adecuada en salvaguarda.

Un donante que filtra solo por el ratio de gastos generales elige A y rechaza B: lo contrario de lo
que probablemente mostraría la evidencia de [coste por resultado](../cost-per-outcome/), porque B es
la única de las dos organizaciones en posición de demostrar, o mejorar, sus resultados reales.

## Conexión con la ingeniería de software

El software financiero y de informes de subvenciones del sector suele codificar de forma rígida la
división entre gastos generales y programa como un campo categórico en cada partida de coste, porque
eso es lo que los reguladores y algunos financiadores todavía exigen en las declaraciones estatutarias.
Quienes construyen estos sistemas deberían tratar ese requisito como una obligación de cumplimiento,
no como una señal de diseño de que el ratio de gastos generales es la métrica que merece destacarse en
un panel; combínenlo, allí donde se muestre, con una métrica basada en resultados para que quien lo
vea no pueda leer el ratio de gastos generales de forma aislada. Véase [el retorno de la inversión
para el donante](../donor-return-on-investment/) para la métrica que debería situarse junto a él, y
[relación calidad-precio](../value-for-money/) para el argumento equivalente del sector público contra
los indicadores indirectos de eficiencia de ratio único.

## Errores habituales

- **Usar el ratio de gastos generales como umbral de filtrado.** Rechazar a cualquier organización
  benéfica por encima de un umbral arbitrario (p. ej., "no más del 15% de gastos generales") penaliza
  sistemáticamente a las organizaciones adecuadamente dotadas de recursos y bien evaluadas, y premia la
  infrainversión.
- **Clasificar erróneamente el coste de entrega directa como gastos generales**, o viceversa: las
  convenciones contables sobre qué cuenta como "programa" frente a "administración" varían lo
  suficiente entre organizaciones benéficas como para que los ratios a menudo ni siquiera sean
  comparables a primera vista.
- **Suponer que unos gastos generales bajos implican un impacto alto.** Ambas cosas están, en el
  mejor de los casos, sin correlación; véase la afirmación central de la carta de 2013 "The Overhead
  Myth".
- **Ignorar que algunas estrategias legítimas requieren mayores gastos generales a corto plazo.** Una
  fase de desarrollo de capacidades u organizativo eleva intencionadamente el gasto administrativo
  para mejorar la entrega posterior.

## Fuentes

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
