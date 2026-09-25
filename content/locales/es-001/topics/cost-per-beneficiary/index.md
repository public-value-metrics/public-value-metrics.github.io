# Coste por beneficiario

El coste por beneficiario es el coste total de un programa dividido entre el número de personas
únicas que recibieron un servicio: cualquiera al que se llegó, independientemente de si sus
circunstancias realmente cambiaron. Es la cifra de eficiencia más rápida que una organización puede
producir, porque "a quién servimos" casi siempre ya está en el sistema de gestión de casos, mientras
que "a quién ayudamos" normalmente no lo está.

## Por qué es importante

Los financiadores piden constantemente el coste por beneficiario, y por razones defendibles: está
disponible de inmediato, es comparable entre una cartera de programas muy distintos, y es honesto
sobre el alcance de un modo en que no lo son las afirmaciones de resultado, que tardan más en
verificarse y son más fáciles de exagerar. La SORP de Charities del Reino Unido (Statement of
Recommended Practice), que rige cómo informan las organizaciones benéficas bajo la FRS 102, exige que
los informes anuales de los administradores (trustees) describan los logros frente a los objetivos,
pero las cuentas de gestión de la mayoría de las organizaciones benéficas más pequeñas siguen
recurriendo por defecto a costes unitarios basados en alcance porque son baratos de producir y
favorables para la auditoría.

El peligro está en tratar el coste por beneficiario como si respondiera a la pregunta que no puede
responder: si el dinero funcionó. Véase [coste por resultado](../cost-per-outcome/) para la métrica
que sí responde a eso, y [resultados frente a productos](../outcomes-vs-outputs/) para la distinción
subyacente. El coste por beneficiario es una métrica legítima de cribado y alcance —le dice a un
financiador hasta dónde llega el dinero—, pero un coste por beneficiario bajo puede significar tanto
eficiencia genuina como un servicio tan superficial que no cambia nada.

## Las matemáticas

```
Coste por beneficiario = Coste total del programa / Número de personas únicas atendidas

Contraste:
Coste por resultado      = Coste total del programa / Número de personas que logran
                            el resultado definido

El coste por beneficiario es siempre ≤ el coste por resultado, porque la
población de resultado es un subconjunto (a menudo pequeño) de la
población de beneficiarios.
```

## Ejemplo práctico

**Banco de alimentos, mismo año que el ejemplo de coste por resultado**:

- Coste total del programa: 450 000 £
- Hogares únicos atendidos (tres o más paquetes): 1800

```
Coste por beneficiario = 450.000 £ / 1.800 = 250 £ por hogar atendido
```

Compare ambas métricas una junto a la otra:

| Métrica | Denominador | Resultado |
|---|---|---|
| Coste por beneficiario | 1800 hogares atendidos | 250 £ |
| Coste por resultado | 630 hogares que logran seguridad alimentaria | 714 £ |

Un financiador que solo ve 250 £ podría concluir que esta es una organización benéfica muy eficiente.
Un financiador que ve ambas cifras puede hacer la pregunta más útil: ¿es la brecha entre el alcance
(1800) y el resultado (630) una brecha de recopilación de datos, una brecha de diseño, o un reflejo
honesto de lo difícil que es lograr seguridad alimentaria solo con ayuda alimentaria?

**Organización benéfica de formación laboral, ilustrativo**: coste por beneficiario (inscrito) =
2000 £; coste por resultado (empleo sostenido a 6 meses) = 11 000 £, porque solo el 18% de los
inscritos completa el programa y encuentra empleo sostenido. Que ambas cifras diverjan por un factor
de cinco es habitual siempre que las tasas de finalización o durabilidad son bajas: una organización
benéfica de formación y un banco de alimentos son estructuralmente idénticos en este aspecto.

## Conexión con la ingeniería de software

El coste por beneficiario es la métrica por defecto en el software del sector no lucrativo porque es
la métrica que se deriva de un registro de beneficiario sin trabajo adicional: crear un caso, registrar
un servicio, contar filas. Construir un sistema que también soporte el coste por resultado significa
añadir deliberadamente una segunda entidad de primera clase —un evento de resultado, fechado y
definido de forma independiente a la prestación del servicio— y resistir la tentación de dejar que
"caso cerrado" sustituya a "resultado logrado". Al definir el alcance de una plataforma de gestión de
subvenciones o CRM, pregunte cuál de las dos métricas está mostrando realmente cada panel, y etiquétela
en consecuencia; confundirlas en un único bloque de "impacto" es una de las causas más comunes a nivel
de software de los errores habituales que siguen. Véase [bases de datos de coste unitario](../unit-cost-databases/)
para comparar cualquiera de las dos métricas una vez etiquetada correctamente.

## Errores habituales

- **Presentar el coste por beneficiario como impacto.** Mide alcance, no cambio. Etiquete los paneles
  e informes como "coste por persona atendida", no "coste por persona ayudada".
- **Doble cómputo entre programas.** Una persona que recibe tanto paquetes de alimentos como
  asesoramiento sobre deudas de la misma organización benéfica es un beneficiario, no dos, si el
  denominador pretende describir el alcance único; decida y documente qué convención se utiliza.
- **Tratar una cifra más baja como siempre mejor.** Un club de comidas de acceso libre siempre
  superará a un servicio intensivo de gestión de casos en coste por beneficiario, porque cuesta menos
  llegar a alguien de forma superficial. Eso no dice nada sobre cuál produce un cambio más duradero por
  libra gastada.
- **Cambiar silenciosamente los denominadores entre informes.** Una cifra de coste por beneficiario
  citada en un informe anual frente a "inscritos" y en el siguiente frente a "completados" no es
  comparable año tras año; indique el denominador siempre.

## Fuentes

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
