# El valor del tiempo voluntario

El valor del tiempo voluntario es la estimación monetaria asignada al trabajo no remunerado, usada más
a menudo para declarar la verdadera huella económica de una organización benéfica —sus cuentas más el
trabajo que no tuvo que pagar— o para argumentar que una intervención determinada es más
coste-efectiva de lo que sugiere su presupuesto en efectivo por sí solo. Dos metodologías nacionales
dominan: la estimación de Independent Sector de Estados Unidos y el enfoque de la Office for National
Statistics / NCVO del Reino Unido, y ambas ponen precio a la misma hora de trabajo de forma bastante
distinta.

## Por qué es importante

Cada año, Independent Sector, trabajando con el Do Good Institute de la Universidad de Maryland,
publica un valor por hora nacional del tiempo voluntario, construido a partir de datos salariales de la
Bureau of Labor Statistics —específicamente las ganancias medias por hora de los trabajadores de
producción y no supervisores en nóminas privadas no agrícolas, más un ajuste por prestaciones
complementarias— y desglosado por estado de EE. UU. Su publicación más reciente situó el valor en
**36,14 dólares por hora para 2025**, un 3,9% más que el año anterior, con valores a nivel estatal que
oscilan entre más de 50 dólares en Washington, D. C., y menos de 20 dólares en Puerto Rico. En el Reino
Unido, la Office for National Statistics ha estimado por separado el coste de reposición del
voluntariado formal en **14,43 £ por hora** (estimación de 2017), y el UK Civil Society Almanac 2024 de
NCVO usa datos de participación en voluntariado —unos 14,2 millones de personas hicieron voluntariado
formal en 2021-22— para estimar la contribución total de voluntariado del sector en aproximadamente
**18 000 millones de libras**, alrededor del 0,8% del PIB del Reino Unido.

La razón por la que esto importa más allá de la cosmética contable: un programa que depende en gran
medida del trabajo voluntario puede parecer drásticamente más barato en términos de [coste por
resultado](../cost-per-outcome/) puro en efectivo que uno que depende de personal remunerado, incluso
cuando el verdadero coste de recursos —lo que costaría reemplazar ese trabajo— es similar o mayor. Los
financiadores y evaluadores que ignoran el valor del tiempo voluntario subcuentan sistemáticamente el
coste real de los modelos de entrega intensivos en voluntariado, lo que distorsiona las comparaciones
de eficiencia frente a modelos de personal remunerado que entregan el mismo resultado.

## Las matemáticas

```
Valor del tiempo voluntario = Horas de voluntariado aportadas × tarifa
                              por hora

La elección de la tarifa importa y cambia la respuesta:
  - Enfoque de coste de reposición: el salario de un trabajador
    remunerado que haría la misma tarea (p. ej., una tarifa de coste de
    reposición para un trabajador juvenil cualificado, no un salario
    medio genérico) — el más defendible para la valoración específica
    de tarea
  - Enfoque de coste de oportunidad: el propio salario al que renuncia
    el voluntario — el más defendible para valorar lo que el voluntario
    dejó de ganar
  - Enfoque de media nacional: la tarifa única combinada de Independent
    Sector o de la ONS — la más defendible para la comparabilidad
    destacada entre sectores
```

Los tres enfoques pueden diferir por un múltiplo grande para la misma hora (un abogado que hace
voluntariado como administrador (trustee) de una junta tiene una tarifa de coste de oportunidad muy
distinta de una tarifa de media nacional), así que cualquier cifra reportada necesita declarar qué
método la produjo.

## Ejemplo práctico

**Organización benéfica del Reino Unido, enfoque de media nacional**: 5000 horas de voluntariado en un
año, valoradas a 14,43 £/hora (estimación de coste de reposición de la ONS):

```
Valor = 5.000 × 14,43 £ = 72.150 £
```

Si el gasto en efectivo de la organización benéfica ese año fue de 300 000 £, su verdadero coste de
recursos —efectivo más trabajo voluntario— es de 372 150 £, aproximadamente un 24% más alto de lo que
sugiere la cifra en efectivo por sí sola. Un cálculo de coste por resultado que use solo la cifra de
300 000 £ en efectivo subestima el coste real en el mismo margen.

**Organización benéfica de EE. UU., enfoque de media nacional**: 2000 horas de voluntariado valoradas a
36,14 $/hora (Independent Sector, publicación de 2025):

```
Valor = 2.000 × 36,14 $ = 72.280 $
```

**Misma organización benéfica de EE. UU., enfoque de coste de oportunidad**: si los voluntarios son
desproporcionadamente profesionales jubilados cuyas ganancias previas promediaban 60 $/hora, la
valoración de coste de oportunidad sería de 120 000 $: dos tercios más alta que la cifra de media
nacional, ilustrando por qué debe declararse el método.

## Conexión con la ingeniería de software

Los sistemas que registran horas de voluntariado (herramientas de programación de turnos, plataformas
de gestión de voluntarios) deberían capturar las horas a nivel de tarea o rol, no solo un total, para
que pueda aplicarse una tarifa de coste de reposición por rol en lugar de una única tarifa de media
nacional generalizada en una fuerza de voluntariado mixta (una hora de administrador (trustee) y una
hora de asistencia no son económicamente equivalentes). Almacenar la tarifa y la metodología usadas
junto al valor calculado —no solo la cifra final en moneda— permite que los informes posteriores
(cuentas anuales, cálculos de [retorno social de la inversión](../social-return-on-investment/),
informes a financiadores) reproduzcan o cuestionen la cifra más adelante en lugar de tratarla como una
constante opaca. Véase [coste por resultado](../cost-per-outcome/) sobre por qué omitir el valor del
tiempo voluntario subestima sistemáticamente el coste de entrega real.

## Errores habituales

- **Usar una única tarifa generalizada para roles estructuralmente distintos.** Una tarifa salarial
  media nacional aplicada a una hora profesional pro bono (legal, financiera, clínica) la infravalora
  drásticamente; iguale la tarifa al rol reemplazado siempre que la tarea sea cualificada.
- **Doble cómputo frente al coste de personal remunerado.** Si los voluntarios sustituyen un trabajo
  que de otro modo sería remunerado, asegúrese de que la valoración sea aditiva al gasto en efectivo, no
  superpuesta sobre una estimación de personal ya inflada.
- **Citar una tarifa obsoleta sin fecha.** Las tarifas de Independent Sector y de la ONS cambian
  anualmente (o solo se reestiman periódicamente, en el caso de la ONS); una cifra de tiempo voluntario
  sin fecha en un informe es prácticamente inútil para la comparación.
- **Tratar el valor del tiempo voluntario como un activo de captación de fondos.** Es un ajuste de
  contabilidad de costes para comprender el coste de recursos real, no dinero nuevo que una organización
  benéfica pueda gastar; confundir ambas cosas induce a error a una junta que lea las cuentas.

## Fuentes

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
