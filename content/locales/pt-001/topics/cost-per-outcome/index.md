# Custo por Resultado

Custo por resultado é a despesa total do programa dividida pelo número de pessoas que alcançam uma
mudança definida e significativa na sua situação — não o número de pessoas que meramente receberam
um serviço. É a métrica de eficiência mais afiada que um financiador ou equipa de entrega pode usar,
porque força uma pergunta prévia que a maioria das instituições de solidariedade evita: o que,
precisamente, conta como sucesso?

## Por que isso importa

Um banco alimentar pode reportar dois números muito diferentes a partir das contas do mesmo ano. O
custo por cabaz alimentar distribuído pode ser £15. O custo por agregado familiar que passa a
alcançar segurança alimentar — deixando de precisar de ajuda alimentar de emergência, verificado num
ponto de acompanhamento — pode ser £340. Ambos são verdadeiros. Só um diz a um financiador se o
dinheiro está a funcionar. A diferença entre eles é a diferença entre um produto e um resultado: um
cabaz entregue é um produto; um agregado familiar que já não está em crise é um resultado. Ver
[resultados vs. produtos](../outcomes-vs-outputs/).

O terceiro setor do Reino Unido passou duas décadas a construir infraestrutura para forçar esta
distinção. A "abordagem dos quatro pilares" da New Philanthropy Capital para a eficácia das
instituições de solidariedade pede explicitamente às organizações que declarem os seus resultados
antes dos seus produtos, e a Inspiring Impact — a colaboração de medição de impacto apoiada por
financiadores do Reino Unido — publica uma Matriz de Resultados que muitas candidaturas a subvenções
agora exigem que as instituições preencham. O programa anual de investigação "State of Hunger" da
Trussell Trust, realizado com a Heriot-Watt University, existe precisamente porque a contagem de
cabazes por si só nada diz sobre se as pessoas escapam à insegurança alimentar.

O custo por resultado só significa algo depois de se fixar o contrafactual: um resultado alcançado
"de qualquer forma" não é um resultado que o programa comprou. Ver
[análise contrafactual](../counterfactual-analysis/) e
[deslocamento e atribuição](../displacement-and-attribution/).

## A matemática

```
Custo por resultado = Custo total do programa / Número de
                       beneficiários que alcançam o resultado
                       definido

onde:
  Custo total do programa = custo de entrega direta + quota
                             proporcional de custos indiretos
  Resultado definido       = uma mudança de estado predefinida e
                             mensurável
                             (por exemplo, "com segurança alimentar
                             ao acompanhamento aos 6 meses", não
                             "recebeu um cabaz alimentar")
```

Compare com [bases de dados de custo unitário](../unit-cost-databases/) (por exemplo, referências de
custo unitário específicas do setor) para avaliar se um dado custo por resultado é bom, médio ou
fraco face a intervenções comparáveis.

## Exemplo prático

**Banco alimentar, um ano**:

- Custo total do programa: £450.000
- Cabazes distribuídos: 30.000
- Custo por cabaz (uma métrica de produto): £450.000 / 30.000 = **£15**

A instituição também realiza um inquérito de acompanhamento aos seis meses com uma amostra de
agregados familiares, constatando que 35% dos agregados familiares que receberam três ou mais
cabazes reportam já não precisar de ajuda alimentar de emergência e pontuam acima do limiar de
segurança alimentar num módulo de inquérito padrão de segurança alimentar. Dos 1.800 agregados
familiares que receberam três ou mais cabazes nesse ano, 630 alcançam esse resultado.

```
Custo por resultado = £450.000 / 630 = £714 por agregado familiar
que alcança segurança alimentar
```

Esse valor de £714 é o que um financiador que compare esta instituição com um projeto-piloto de
transferência monetária ou um serviço de aconselhamento sobre dívidas deve usar — não £15. Se um
programa comparável de transferência monetária na mesma região alcança a segurança alimentar a £500
por agregado familiar, o banco alimentar não é obviamente a via mais eficiente para o mesmo
resultado, mesmo que o seu custo por cabaz pareça barato.

## Ligação com a engenharia de software

A maioria dos sistemas de gestão de processos é construída para registar produtos, porque os
produtos são o que acontece dentro da transação (um cabaz é entregue, um formulário é submetido). Os
resultados normalmente acontecem mais tarde, muitas vezes fora da janela normal de captura do
sistema, e exigem uma decisão de desenho deliberada: construir um mecanismo de acompanhamento (um
gatilho de inquérito, um fluxo de recontacto, um exercício de ligação de dados) como uma
funcionalidade de primeira classe, não um extra acrescentado à posteriori para um relatório anual.
Os engenheiros que constroem plataformas de gestão de subvenções ou de processos para o setor devem
tratar "qual é o evento de resultado, e como o observamos" como uma pergunta de requisitos colocada
antes de o modelo de dados ser fixado — é muito mais difícil adaptar um campo de resultado
posteriormente do que um contador de produtos. Ver [resultados vs. produtos](../outcomes-vs-outputs/)
e [modelo lógico](../logic-model/) para saber como estruturar essa conversa de requisitos, e
[custo por beneficiário](../cost-per-beneficiary/) para a métrica mais rápida e rudimentar a que as
equipas recorrem quando o acompanhamento de resultados ainda não está construído.

## Armadilhas

- **Reportar produtos disfarçados de resultados.** "Pessoas alcançadas" não é "pessoas ajudadas". Se
  a métrica pode ser produzida por um registo de sistema sem contacto de acompanhamento, é quase
  certamente um produto.
- **Manipulação do denominador.** Restringir a população de resultado a "aqueles que completaram o
  programa" descarta discretamente as pessoas que desistiram — muitas vezes os casos mais difíceis —
  e infla a taxa aparente. Declare o denominador como todos os que começaram, não todos os que
  terminaram.
- **Ausência de contrafactual.** Contar qualquer pessoa que alcançou o resultado, incluindo aquelas
  que o teriam alcançado de qualquer forma, exagera o que o programa comprou. Ver
  [análise contrafactual](../counterfactual-analysis/).
- **Comparar entre definições de resultado incompatíveis.** "Segurança alimentar" medida por um
  módulo de inquérito validado não é comparável a "segurança alimentar" autorreportada num formulário
  de satisfação; uma tabela classificativa de custo por resultado só é honesta quando as definições
  de resultado coincidem.

## Fontes

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
