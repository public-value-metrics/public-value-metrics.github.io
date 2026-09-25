# Coste total de propiedad (CTP) en TI gubernamental

El coste total de propiedad es el coste de ciclo de vida completo de un sistema —adquisición más cada
año de funcionamiento— descontado a una fecha común. En la TI gubernamental, el error de previsión más
fiable e individual es comparar proveedores u opciones solo por el precio de adquisición, cuando la
operación y el mantenimiento habitualmente suponen entre la mitad y las cuatro quintas partes de la
factura a lo largo de la vida del sistema.

## Por qué es importante

El Green Book de HM Treasury exige que el caso financiero de cualquier análisis de viabilidad del
Modelo de Cinco Casos cubra los costes de toda la vida, no solo el gasto de capital; y sin embargo la
National Audit Office ha encontrado repetidamente departamentos aprobando inversiones de TI frente a
una previsión de coste de funcionamiento incompleta u optimista, solo para descubrir el verdadero
coste operativo una vez que el sistema está en producción y la partida de presupuesto de capital ya se
ha cerrado. El Technology Code of Practice del Government Digital Service y la Central Digital and
Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) empuja a los departamentos
hacia la nube y el alojamiento estándar en parte porque hace visible y comparable el coste continuo, en
lugar de enterrarlo dentro de una única cifra de contratación de capital que parece atractivamente baja
en la aprobación y caramente equivocada tres años después.

## Las matemáticas

```
CTP = Coste de adquisición + Σ(t=1..N) Coste operativo anual_t / (1+r)^t
      − valor residual (descontado)

r = tasa de descuento social estándar del Green Book de HM Treasury,
    3,5%/año (calendario de tasa decreciente para horizontes más allá
    de 30 años)

Componentes del coste operativo: alojamiento/licencias, soporte y
mantenimiento, parcheo de seguridad y cumplimiento, tiempo de
personal, actualización/migración planificada
```

Véase [la tasa de descuento social](../social-discount-rate/) sobre por qué el factor de descuento
importa a lo largo de una vida típica de sistema de 5-10 años, y [construir frente a comprar en el
gobierno](../build-vs-buy-in-government/) sobre cómo el CTP alimenta una decisión de construir/comprar.

## Ejemplo práctico

Un departamento compara dos sistemas de gestión de casos a lo largo de un horizonte de 5 años a la tasa
de descuento del 3,5% del Green Book.

```
Sistema A: capex 3.500.000 £, opex 250.000 £/año
Sistema B: capex 1.800.000 £ (parece más barato), opex 650.000 £/año
          (mayor carga de soporte de proveedor e integración)

Comparación ingenua solo por capex: gana B, 1,8M £ < 3,5M £.

Suma del factor de descuento, 5 años al 3,5%: 0,966+0,934+0,902+0,871+
0,842 ≈ 4,515

CTP_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = 4.628.750 £
CTP_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = 4.734.750 £
```

El CTP invierte la decisión ingenua: el Sistema B es marginalmente más caro a lo largo de cinco años
una vez que el coste operativo se descuenta y se suma, porque su cuota de opex del coste de por vida es
del 62% (2.934.750 / 4.734.750) frente al 24% del Sistema A: un caso concreto del hallazgo de que "el
mantenimiento es la mayoría de la factura", totalmente oculto al comparar solo los precios de etiqueta.

## Conexión con la ingeniería de software

El CTP es la cifra que debería disciplinar toda decisión de [construir frente a comprar](../build-vs-buy-in-government/)
y todo caso de amortización de [deuda técnica](../technical-debt-as-public-value-erosion/), porque
tanto el interés de la deuda como el mantenimiento diferido son partidas de coste operativo que
pertenecen al mismo total descontado, se hayan rastreado o no. Quienes proponen una elección de
plataforma o proveedor deberían presentar la tabla de CTP completa, no el precio de contratación,
porque el precio de contratación es precisamente la cifra que el caso financiero del Green Book se
diseñó para evitar que los departamentos usaran en solitario. El CTP también es el denominador honesto
para los juicios de [relación calidad-precio](../value-for-money/): el VFM compara el beneficio con el
coste, y una partida de coste infracontada infla todo ratio de VFM en el análisis de viabilidad.

## Errores habituales

- **Comparación solo por capex**: el error de contratación individual más común; comparar los precios
  de catálogo de los proveedores sin una previsión de coste operativo equiparada para cada opción.
- **Excluir los costes de salida y migración**: la extracción de datos al final del contrato, el
  cambio de plataforma y las penalizaciones por bloqueo (lock-in) del proveedor son partidas de CTP
  reales que rara vez aparecen en el análisis de viabilidad original.
- **Excluir el coste de seguridad y cumplimiento**: la cadencia de parcheo, la renovación de
  acreditación y el coste de auditoría escalan con la antigüedad y complejidad del sistema; véase [el
  valor de la ciberseguridad del sector público](../public-sector-cybersecurity-value/); y se omiten
  habitualmente de la previsión de opex.
- **Comparación sin descontar entre opciones con perfiles de coste distintos**: comparar una opción
  con mucho capex frente a una con mucho opex sin descontar favorece sistemáticamente a la opción que
  resulte diferir más coste hacia años posteriores.

## Fuentes

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
