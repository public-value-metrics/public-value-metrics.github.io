# Teoria da Mudança

Uma teoria da mudança é um percurso causal explícito, mapeado de trás para a frente, desde um
objetivo de longo prazo até às pré-condições e atividades que têm de existir para que seja
alcançado, juntamente com os pressupostos que ligam cada elo. Constrói-se partindo do resultado que
se quer e perguntando "o que tem de ser verdade imediatamente antes disto, para que isto aconteça?",
repetidamente, até se chegar a atividades que se conseguem realmente entregar — o que é a direção
oposta à de um [modelo lógico](../logic-model/), e é por isso que os dois são complementares em vez
de intercambiáveis.

## Por que isso importa

O método de mapeamento retroativo foi formalizado pelo Center for Theory of Change e pela
ActKnowledge, com base no trabalho da avaliadora Carol Weiss sobre tornar explícitos os pressupostos
dos programas para que pudessem ser testados em vez de aceites por fé. A avaliação de subvenções no
Reino Unido absorveu isto diretamente: o Magenta Book do HM Treasury trata uma teoria da mudança
como o ponto de partida para qualquer desenho de avaliação, e financiadores como o National Lottery
Community Fund exigem que os candidatos articulem uma antes de financiarem uma proposta. A razão
pela qual isto importa a um engenheiro de software é que uma teoria da mudança é o documento que
deveria determinar o que o sistema precisa de medir — se a cadeia causal diz "a adesão a benefícios
depende de os requerentes receberem um cálculo personalizado", essa é uma afirmação testável que o
produto pode ser instrumentado para comprovar, ou refutar.

## A matemática

Uma teoria da mudança é estrutural, não numérica. Cada elo deve trazer consigo tanto um pressuposto
como um indicador que possa mostrar que o pressuposto é falso:

```
Resultado de longo prazo (o objetivo)
  ↑ pré-condição + pressuposto + indicador
Resultado intermédio N
  ↑ pré-condição + pressuposto + indicador
  ...
Resultado intermédio 1
  ↑ pré-condição + pressuposto + indicador
Atividades / intervenções
  ↑ recursos comprometidos
Inputs
```

Esta estrutura alimenta diretamente os [métodos de avaliação de impacto](../impact-evaluation-methods/),
que existem para testar se os pressupostos em cada elo se sustentam de facto, e a
[análise contrafactual](../counterfactual-analysis/), que testa se o resultado de longo prazo teria
acontecido de qualquer forma.

## Exemplo prático

**Autarquia (prevenção de sem-abrigo)**: o resultado de longo prazo é a manutenção de arrendamentos
aos 12 meses para agregados em risco de despejo.

- Pré-condição: os agregados têm um plano de reembolso de atrasos realista e comportável.
  Pressuposto: os planos negociados por um gestor de caso são mais sustentáveis do que os ordenados
  por tribunal. Indicador: % de planos ainda ativos aos 6 meses.
- Pré-condição: os agregados reclamam os benefícios a que têm direito.
  Pressuposto: uma calculadora digital de benefícios aumenta as reclamações corretas face a
  formulários em papel. Indicador: taxa de exatidão das reclamações, comparada antes/depois do
  lançamento da ferramenta.
- Atividades: triagem por gestor de caso, calculadora digital de benefícios, negociação de atrasos.

Numa coorte piloto de 120 agregados, o pressuposto da calculadora de benefícios confirmou-se para
102 agregados (85%) que passaram a reclamar corretamente, comprovado por uma avaliação de processo
subsequente — dando à equipa do programa evidência para esse elo específico, em vez de uma única
afirmação de ponta a ponta sobre a prevenção de sem-abrigo.

**Instituição de solidariedade (mentoria de jovens)**: o resultado de longo prazo é a redução da
exclusão escolar. Pré-condições mapeadas de trás para a frente: regulação emocional melhorada →
relação de confiança um-para-um com um mentor → contacto semanal consistente ao longo de dois
períodos letivos. A teoria torna explícito que falhar a pré-condição de "contacto semanal
consistente" (por exemplo, devido à rotatividade de mentores) prevê que o resultado não se seguirá,
o que é uma afirmação testável e refutável, e não uma esperança.

## Ligação com a engenharia de software

Uma teoria da mudança deveria moldar o modelo de dados de um produto antes de se construir um único
painel: identificar quais os elos que precisam de um indicador, e instrumentar especificamente para
esses, em vez de assumir por defeito o que for mais fácil de registar. Também disciplina as
conversas sobre o roteiro — uma funcionalidade que não corresponde a nenhum elo da cadeia não é
claramente digna de ser construída. Ver [modelo lógico](../logic-model/) para a cadeia de
responsabilização orientada para a frente construída assim que a teoria é acordada,
[retorno social sobre o investimento](../social-return-on-investment/) para um método que depende de
uma teoria da mudança para definir o âmbito dos resultados a valorizar, e
[resultados versus produtos](../outcomes-vs-outputs/) para a distinção de que dependem os elos de
resultado intermédio.

## Armadilhas

- **Confundi-la com um modelo lógico.** Uma teoria da mudança é causal e explicativa (por que
  acreditamos que isto funciona); um modelo lógico é sequencial e descritivo (o que acontece por que
  ordem). Produzir apenas um deixa em falta ou o "porquê" ou o rasto de responsabilização.
- **Deixar os pressupostos implícitos.** Todo o valor do mapeamento retroativo está em trazer à
  superfície pressupostos testáveis; uma teoria da mudança que apenas lista caixas e setas sem nomear
  o que poderia tornar cada elo falso é decoração.
- **Construí-la uma vez e arquivá-la.** Uma teoria da mudança escrita para uma candidatura a
  financiamento e nunca revisitada deixa de ser útil no momento em que a evidência começa a
  contradizer um elo.
- **Saltar o contributo das partes interessadas.** Uma teoria da mudança construída inteiramente por
  quem encomenda o serviço, sem contributo do pessoal de primeira linha ou dos beneficiários, tende a
  codificar pressupostos em que ninguém que presta o serviço realmente acredita.

## Fontes

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
