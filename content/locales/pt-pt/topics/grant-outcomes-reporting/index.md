# Relato de Resultados de Subvenções (IRIS+)

O relato de resultados de subvenções é a prática de os beneficiários de subvenções reportarem aos
financiadores métricas de resultados padronizadas e comparáveis — em vez de cada financiador inventar
o seu próprio modelo de relatório à medida. O IRIS+, mantido pela Global Impact Investing Network
(GIIN), é o padrão mais amplamente adotado deste tipo: um catálogo de métricas de desempenho social,
ambiental e financeiro predefinidas que os investidores de impacto e, cada vez mais, as fundações
concedentes de subvenções exigem ou recomendam que os beneficiários usem.

## Por que isso importa

Antes do relato padronizado, cada fundação pedia aos beneficiários um conjunto diferente de
indicadores num formato diferente, e uma instituição de solidariedade de média dimensão com dez
financiadores podia estar a gerir dez processos de relato paralelos para trabalho sobreposto — um
motor bem documentado do encargo de relato que a padronização de resultados de subvenções existe
para reduzir. O IRIS+ aborda isto dando a financiadores e beneficiários um vocabulário partilhado:
Conjuntos de Métricas Nucleares agrupados por tema (por exemplo, habitação acessível, acesso a
energia limpa, inclusão financeira), cada métrica definida com precisão suficiente para que "empregos
criados" ou "agregados familiares servidos" signifique a mesma coisa independentemente de quem
reporta, e alinhada com os Objetivos de Desenvolvimento Sustentável da ONU, para que um financiador
possa agregar dados ao nível do beneficiário numa narrativa de ODS ao nível do portefólio. A GIIN
reporta que as métricas IRIS são usadas por cerca de metade dos investidores de impacto e pela grande
maioria dos gestores de fundos, bancos e instituições de financiamento do desenvolvimento ativos no
campo.

A padronização importa mais onde interage com [resultados vs. produtos](../outcomes-vs-outputs/): o
IRIS+ empurra o relato em direção a métricas de resultado e impacto definidas, em vez de tudo o que o
sistema de gestão de processos existente de um beneficiário registe, que é exatamente a lacuna que
[custo por resultado](../cost-per-outcome/) versus [custo por beneficiário](../cost-per-beneficiary/)
descreve.

## A matemática

O relato de resultados de subvenções é um enquadramento e processo, não uma fórmula:

```
1. O financiador seleciona um Conjunto de Métricas Nucleares
   relevante para o tema da subvenção (por exemplo, IRIS+ "Inclusão
   Financeira" ou "Agricultura Sustentável")
2. Cada métrica tem uma definição, unidade e método de cálculo fixos
   publicados pela GIIN — não inventados por financiador
3. O beneficiário reporta face às mesmas definições de métrica em
   todos os seus financiadores usando esse padrão, cortando o esforço
   de relato duplicado
4. O financiador agrega as métricas ao nível do beneficiário num
   relato ao nível do portefólio, comparável de ano para ano e entre
   beneficiários usando a mesma métrica
```

O ganho de eficiência é combinatório: padronizar N financiadores × M beneficiários num único
vocabulário partilhado transforma N×M relações de relato à medida em aproximadamente N+M
mapeamentos face a um único padrão.

## Exemplo prático

**Um beneficiário com três financiadores, antes da padronização**: reporta "pessoas servidas" ao
Financiador 1 usando uma definição de contagem de indivíduos, "beneficiários alcançados" ao
Financiador 2 usando uma definição de agregado familiar, e "indivíduos impactados" ao Financiador 3
usando uma definição de episódio de serviço (de modo que uma pessoa que visita duas vezes conta duas
vezes). Três relatórios, três números, nenhum comparável, e nenhum comparável ao número de outro
beneficiário, mesmo dentro do portefólio do mesmo financiador.

**O mesmo beneficiário ao abrigo do IRIS+**: reporta face a uma métrica de indivíduos alcançados
definida pelo IRIS+, a par de uma métrica de resultado definida do Conjunto de Métricas Nucleares
relevante, usando a metodologia de cálculo publicada pela GIIN para ambas. Os três financiadores
recebem agora o mesmo número, calculado da mesma forma, e podem comparar o custo por unidade definida
pelo IRIS+ deste beneficiário com outros beneficiários no seu portefólio usando a métrica idêntica —
o equivalente, à escala da infraestrutura de relato, a ter uma
[base de dados de custo unitário](../unit-cost-databases/) partilhada.

## Ligação com a engenharia de software

As plataformas de gestão de subvenções devem tratar os identificadores de métrica IRIS+ como uma
chave estrangeira, não como texto livre: armazenar o código de métrica publicado ao lado do valor
reportado por um beneficiário (em vez de um campo inventado localmente chamado "beneficiários") é o
que torna possível, mais tarde, a agregação entre financiadores e entre portefólios sem um projeto de
limpeza de dados. Onde uma plataforma tem de suportar financiadores que ainda não adotaram o IRIS+, o
desenho pragmático é permitir que uma métrica local seja mapeada para a definição IRIS+ mais próxima,
em vez de forçar imediatamente todos os financiadores para o padrão — a comparabilidade melhora de
forma incremental à medida que mais do grafo se mapeia para identificadores partilhados. Ver o tópico
irmão [custo por resultado](../cost-per-outcome/) para saber para que devem ser usados os números
reportados uma vez recolhidos.

## Armadilhas

- **Tratar a adoção do IRIS+ como comparabilidade automática.** Dois beneficiários podem ambos
  reportar face à mesma métrica IRIS+ e ainda assim não serem comparáveis se a qualidade dos dados
  subjacentes ou os pressupostos contrafactuais diferirem; o padrão fixa definições, não o rigor de
  medição.
- **Métricas "alinhadas com o IRIS" inventadas pelo financiador.** Uma métrica meramente inspirada na
  linguagem do IRIS+ mas não a definição efetivamente publicada reintroduz a fragmentação que o
  padrão existe para resolver.
- **Fadiga de relato por sobresseleção.** Exigir que um beneficiário reporte face a um Conjunto de
  Métricas Nucleares inteiro quando apenas duas ou três métricas são relevantes para a decisão recria
  o problema do encargo dentro de um invólucro padronizado.
- **Nenhuma métrica de resultado.** O IRIS+ inclui muitas métricas puramente de produto (por exemplo,
  contagens de pessoas servidas); selecionar apenas essas, e nenhuma das métricas de nível de
  resultado, produz um relato com a forma de
  [custo por beneficiário](../cost-per-beneficiary/) sob um rótulo de relato de resultados.

## Fontes

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
