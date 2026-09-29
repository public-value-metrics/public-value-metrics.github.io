# Análise Contrafactual

Um contrafactual é uma estimativa do que teria acontecido na ausência de uma intervenção. Sem um,
uma mudança observada depois de um programa ser lançado não pode ser distinguida de uma mudança que
teria acontecido de qualquer forma — sem contrafactual, não há evidência de efeito, por mais
convincentes que pareçam os números de antes e depois. O Magenta Book do HM Treasury trata a
construção de um contrafactual credível como a tarefa metodológica central da avaliação de impacto,
mais importante do que qualquer outra escolha isolada de desenho.

## Por que isso importa

"A criminalidade caiu 15% no ano seguinte à introdução do programa" não é evidência de que o programa
funcionou, a menos que se saiba o que teria acontecido à criminalidade sem ele — a criminalidade
poderia ter caído 20% de qualquer forma devido a tendências económicas ou demográficas não
relacionadas, o que significaria que o programa na verdade piorou a situação face ao contrafactual,
apesar de o número bruto ter melhorado. Este é o erro analítico mais comum em alegações de impacto do
setor público e social: confundir uma comparação antes/depois com evidência de causalidade. O
Magenta Book é explícito quanto ao facto de a avaliação de impacto existir para responder a uma
pergunta contrafactual — "que diferença fez esta intervenção?" — e que responder a isso exige
estimar, não apenas descrever, o mundo que não aconteceu.

Métodos diferentes constroem o contrafactual com graus diferentes de confiança, e as orientações de
avaliação do governo classificam-nos em conformidade. Os ensaios controlados aleatorizados (RCTs),
em que indivíduos ou áreas são aleatoriamente designados para receber ou não uma intervenção,
produzem o contrafactual mais forte porque a aleatorização garante que os grupos de tratamento e de
controlo diferem, em média, apenas na receção da intervenção. O Cabinet Office e a What Works Network
têm promovido os RCTs em toda a política pública do Reino Unido desde o relatório de 2012 "Test,
Learn, Adapt" da Behavioural Insights Team, precisamente porque os desenhos mais fracos são
vulneráveis a fatores de confusão — a diferença observada pode refletir quem escolheu participar, não
o efeito do programa. Onde a aleatorização é impraticável ou antiética (como frequentemente é para
programas com direito estatutário, ou para mudanças de política em toda a população), o Magenta Book
estabelece uma hierarquia explícita de alternativas mais fracas mas ainda úteis: grupos de comparação
emparelhados, desenhos de diferenças-em-diferenças, descontinuidade de regressão em torno de limiares
de elegibilidade e, como último recurso, a simples comparação antes/depois — claramente assinalada
como a forma mais fraca de evidência, propensa a confundir o efeito do programa com o efeito de tudo
o resto que mudou ao mesmo tempo.

## A matemática

O enquadramento contrafactual, aplicável em todos os métodos:

```
Impacto estimado = Resultado(com intervenção) − Resultado
                    (contrafactual: sem intervenção)

NÃO:
Impacto estimado ≠ Resultado(depois) − Resultado(antes)
                    [confunde o tempo com o tratamento]
```

Diferenças-em-diferenças, um dos desenhos quase-experimentais mais comuns na avaliação
governamental, isola o efeito do tratamento subtraindo a própria mudança antes/depois do grupo de
comparação:

```
Estimativa DiD = [Resultado(tratado, depois) − Resultado(tratado,
                  antes)]
             − [Resultado(comparação, depois) − Resultado
                (comparação, antes)]
```

Isto remove qualquer tendência comum a ambos os grupos (por exemplo, uma mudança económica nacional
que afeta toda a gente), deixando apenas a mudança diferencial atribuível à intervenção.

## Exemplo prático

**Programa de emprego, antes/depois (desenho fraco)**: um programa de apoio ao emprego reporta que o
emprego dos participantes subiu de 40% para 55% ao longo de um ano — uma conclusão ingénua de "+15
pontos percentuais devido ao programa".

**Mesmo programa, diferenças-em-diferenças (desenho mais forte)**: um grupo de comparação emparelhado
de não participantes semelhantes, retirado do mesmo mercado de trabalho local, mostra o emprego a
subir de 38% para 47% no mesmo ano (uma recuperação económica nacional estava em curso).

```
Mudança do grupo tratado:    55% − 40% = +15 pontos percentuais
Mudança do grupo de
  comparação:                47% − 38% = +9 pontos percentuais

Estimativa DiD (efeito verdadeiro do programa) = 15 − 9 = +6 pontos
percentuais
```

O efeito honestamente atribuível é de 6 pontos percentuais, não 15 — mais de metade da melhoria
aparente antes/depois teria acontecido de qualquer forma, impulsionada pela mesma recuperação
económica que elevou o grupo de comparação.

**Descontinuidade de regressão, limiar de elegibilidade**: um regime de subvenções está disponível
apenas para empresas com menos de 50 funcionários. Comparar os resultados de empresas mesmo abaixo do
limiar (45–49 funcionários, elegíveis) com empresas mesmo acima dele (50–54 funcionários, não
elegíveis) fornece um contrafactual credível porque as empresas de ambos os lados de um corte
administrativo arbitrário são, de resto, semelhantes — o limiar, e não qualquer característica
empresarial subjacente, determina a elegibilidade. Uma diferença média de resultado de £2.000 entre
os dois grupos, observada apenas no limiar, é atribuível à subvenção com muito mais confiança do que
uma simples comparação entre todas as empresas elegíveis e todas as não elegíveis (que diferem
sistematicamente em dimensão).

## Ligação com a engenharia de software

O pensamento contrafactual deve moldar a forma como os sistemas de acompanhamento de impacto e os
pipelines de avaliação para software do governo e do setor social são desenhados:

- Construa a captura de grupo de comparação num sistema desde o início — registando quem era
  elegível mas não se inscreveu, ou uma coorte de não participantes emparelhada — em vez de a
  adaptar depois de um programa já ter decorrido e apenas existirem dados de antes/depois.
- Onde a aleatorização for viável (uma implementação faseada, um serviço digital ativado para alguns
  utilizadores antes de outros), instrumente o sistema para preservar a designação aleatória como um
  campo consultável; uma implementação faseada destrói acidentalmente o seu próprio valor de
  avaliação se a ordem de designação não for registada.
- Este é o método fundacional por trás dos
  [métodos de avaliação de impacto](../impact-evaluation-methods/) e é o que o separa da
  [avaliação de impacto vs. avaliação de processo](../impact-evaluation-vs-process-evaluation/), que
  pergunta se um programa foi entregue como pretendido, em vez de se causou um efeito.
- A [adicionalidade e perda seca](../additionality-and-deadweight/) e o
  [deslocamento e atribuição](../displacement-and-attribution/) são ambos, na raiz, perguntas
  contrafactuais — a perda seca é "qual teria sido este resultado específico sem a intervenção",
  aplicada ao nível do ajuste em vez de ao desenho de avaliação completo.

## Armadilhas

- **Tratar antes/depois como evidência de causalidade.** Este é o erro mais comum e de maiores
  consequências no relato de impacto do setor público e social; uma mudança antes/depois confunde o
  efeito do programa com tudo o resto que mudou no mesmo período.
- **Usar um grupo de comparação que difere sistematicamente do grupo tratado.** Um grupo de
  comparação emparelhado deve ser genuinamente semelhante nas características relevantes (ver a
  hierarquia de métodos de [análise contrafactual](../counterfactual-analysis/) do Magenta Book);
  comparar participantes do programa (que aderiram voluntariamente, e são muitas vezes mais
  motivados) com não participantes (que não aderiram) arrisca um enviesamento de seleção disfarçado
  de efeito do programa.
- **Destruir oportunidades de aleatorização através de um desenho de entrega deficiente.** Uma
  implementação faseada ou aleatorizada só preserva o seu valor de avaliação se a designação for
  genuinamente aleatória e registada — deixar os gestores locais escolherem quem vai primeiro frustra
  o objetivo.
- **Reivindicar precisão excessiva a partir de um desenho fraco.** Uma estimativa antes/depois deve
  ser apresentada como indicativa, não como uma dimensão de efeito medida; a hierarquia de evidência
  do Magenta Book existe para que a força de uma alegação corresponda à força do desenho que a
  produziu.

## Fontes

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
