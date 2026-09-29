# Métodos de evaluación de impacto

Los métodos de evaluación de impacto son los diseños estadísticos y experimentales usados para
estimar lo que una política o programa realmente causó, a diferencia de lo que habría ocurrido de
todos modos: los ensayos controlados aleatorizados (RCT), las diferencias en diferencias, el
emparejamiento por puntuación de propensión y el diseño de discontinuidad de regresión son los cuatro
más usados en la política pública del Reino Unido. Existen porque la mayoría de las intervenciones
gubernamentales no pueden probarse en un laboratorio: no se puede aleatorizar qué ciudad recibe una
nueva línea de autobús del mismo modo que se puede aleatorizar qué paciente recibe un medicamento, así
que estos métodos toman prestada la misma lógica causal sin requerir siempre una asignación aleatoria.

## Por qué es importante

El Anexo A del Magenta Book de HM Treasury, sobre métodos cuasiexperimentales, es la guía canónica del
gobierno del Reino Unido para elegir entre estos diseños, y organismos como la Education Endowment
Foundation y el What Works Centre for Local Economic Growth institucionalizan una jerarquía de
evidencia construida en torno a ellos: RCT donde la aleatorización es factible y ética, diseños
cuasiexperimentales donde no lo es. La elección del método no es un detalle técnico secundario:
determina si una evaluación puede responder "¿causó el programa esto?" o solo "¿ocurrió esto después
de que empezara el programa?", que es la misma pregunta que [el análisis contrafactual](../counterfactual-analysis/)
está construido para obligar a plantear a los profesionales antes de encargar cualquier evaluación.

## Las matemáticas

```
RCT:
  Impacto = media(resultado | grupo de tratamiento) − media(resultado |
            grupo de control)
  (válido porque la asignación al tratamiento es aleatoria)

Diferencias en diferencias (DiD):
  Impacto = [resultado_después(tratado) − resultado_antes(tratado)]
         − [resultado_después(control) − resultado_antes(control)]
  (requiere un supuesto de "tendencias paralelas": el grupo tratado y
   el de control se habrían movido juntos en ausencia de la
   intervención)

Emparejamiento por puntuación de propensión (PSM):
  1. Estimar P(tratamiento = 1 | covariables X) para cada unidad →
     puntuación de propensión
  2. Emparejar unidades tratadas con unidades no tratadas de
     puntuación de propensión similar
  3. Impacto = media(resultado | tratado) − media(resultado | control
     emparejado)

Diseño de discontinuidad de regresión (RDD):
  Impacto = salto en el resultado observado en el umbral de
            elegibilidad, comparando unidades justo por encima frente
            a justo por debajo del corte
```

## Ejemplo práctico

**Ayuntamiento (diferencias en diferencias para un programa de familias con dificultades)**: el
resultado es la asistencia escolar. El área tratada pasa del 84% al 89% de asistencia (+5 puntos
porcentuales) durante el periodo del programa; un área comparable pero no tratada pasa del 85% al 87%
(+2 puntos porcentuales) en el mismo periodo. Estimación de impacto DiD: 5 − 2 = +3 puntos
porcentuales atribuibles al programa. Aplicado a una cohorte de 2000 alumnos en el área tratada, esto
es coherente con aproximadamente 60 alumnos adicionales (3% × 2000) que alcanzan la categoría de mayor
asistencia, una extrapolación que debería reportarse con su advertencia de tendencias paralelas, no
como un recuento preciso.

**Organización benéfica (emparejamiento por puntuación de propensión para una organización benéfica de
empleabilidad)**: 300 participantes del programa se emparejan con 300 individuos de un conjunto de
datos administrativos más amplio usando puntuaciones de propensión construidas a partir de la edad, el
historial de empleo previo y el nivel de cualificación. Tasa de empleo a doce meses: grupo tratado
emparejado 46%, grupo de comparación emparejado 33%. Estimación de impacto PSM: 46% − 33% = +13 puntos
porcentuales atribuibles al programa, condicionado a que ningún factor de confusión no observado (como
la motivación) impulse tanto la participación como el resultado.

## Conexión con la ingeniería de software

Que cualquiera de estos diseños sea factible más adelante depende en gran medida de decisiones de
ingeniería de datos tomadas desde el principio. El RDD necesita una variable de referencia registrada
con precisión y un corte de elegibilidad genuinamente limpio; el DiD necesita datos de panel
comparables a lo largo del tiempo tanto para las áreas tratadas como para las de comparación, lo que
significa uniones consistentes entre sistemas y años; el PSM necesita datos ricos de covariables de
línea base capturados antes del tratamiento, no reconstruidos después. Un modelo de datos diseñado
junto a [una teoría del cambio](../theory-of-change/) y [un modelo lógico](../logic-model/) desde el
principio —capturando covariables de línea base, fechas y registros elegibles para grupo de
comparación— es lo que hace posible más adelante una evaluación de impacto rigurosa, en lugar de una
carrera costosa a posteriori. Véase [la evaluación de impacto frente a la evaluación de
proceso](../impact-evaluation-vs-process-evaluation/) para la pregunta complementaria que estos métodos
no responden por sí solos.

## Errores habituales

- **Forzar un RCT donde es inviable o poco ético**, o, a la inversa, no considerar nunca un diseño
  cuasiexperimental cuando existía una oportunidad genuina para uno —un corte de política, una
  implantación por fases— y no se aprovechó.
- **Ignorar el supuesto de tendencias paralelas en el DiD.** Si el área de comparación ya divergía del
  área tratada antes de la intervención, la comparación de dos puntos está contaminada; compruebe las
  tendencias previas, no solo el antes/después.
- **Emparejar solo por covariables observadas en el PSM.** La selección no observada, como la
  motivación del participante, puede sesgar la estimación incluso cuando las covariables observadas
  están bien equilibradas.
- **Manipulación de la variable de referencia en el RDD.** Si las personas pueden influir en su
  puntuación para caer justo dentro de un umbral de elegibilidad, la discontinuidad ya no aísla un
  efecto causal.

## Fuentes

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
