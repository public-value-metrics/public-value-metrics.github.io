# Análise de Custo-Eficácia no Governo

A análise de custo-eficácia (ACE) compara os custos de formas alternativas de alcançar o *mesmo*
resultado, expresso em unidades naturais — custo por sem-abrigo alojado, custo por aluno elevado ao
padrão esperado, custo por tonelada de CO2 reduzida — sem converter o próprio resultado em dinheiro.

## Por que isso importa

O Green Book trata a ACE como o método alternativo quando a exigência da
[análise de custo-benefício social](../social-cost-benefit-analysis/) de monetizar todos os
benefícios se torna não apenas difícil mas desonesta — onde atribuir um preço credível ao resultado
exigiria pressupostos que ninguém de facto sustenta
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Capítulo 5, sobre avaliação de opções onde os resultados não são facilmente monetizáveis). A ACE é o
método mais diretamente emprestado da economia da saúde — é estruturalmente idêntico à forma como o
NICE compara tratamentos usando o custo por Ano de Vida Ajustado pela Qualidade — mas aplicado a
programas públicos fora da saúde: intervenções educativas por ponto de resultado do aluno, programas
de habitação por agregado familiar evitado de ficar sem-abrigo, programas de emprego por resultado de
emprego sustentado.

A razão pela qual a ACE ganha o seu lugar ao lado da ACBS, em vez de ser absorvida por ela, é que
forçar um valor monetário sobre alguns resultados produz um número suficientemente preciso para
parecer autoritativo e suficientemente contestado para ser inútil num debate público — pôr um preço
em "uma criança a ler ao nível esperado" convida exatamente o tipo de contestação que faz descarrilar
um caso de negócio numa comissão parlamentar. A ACE contorna a discussão recusando-se a tê-la:
classifica as opções por custo por unidade do *próprio resultado*, deixando o julgamento político
separado sobre se vale a pena sequer perseguir o resultado ao caso estratégico.

## A matemática

```
Rácio de custo-eficácia (médio) = Custo total / Total de unidades de
                                    resultado alcançadas

Rácio incremental de custo-eficácia (ICER), comparando a opção A com
a opção B:
ICER = (Custo_A − Custo_B) / (Resultado_A − Resultado_B)

Procedimento:
1. Fixar a unidade de resultado e o método de medição em todas as
   opções a comparar.
2. Custear cada opção na mesma base (ver ../green-book-appraisal/,
   caso financeiro) ao longo do mesmo horizonte temporal.
3. Descartar opções dominadas: qualquer opção que custe mais por
   unidade do que uma alternativa mais barata que alcance o mesmo
   resultado ou melhor é eliminada.
4. Classificar as opções restantes pelo rácio de custo-eficácia
   incremental, não médio.
```

A ACE não pode, por si só, dizer se um programa vale a pena financiar de todo — apenas qual das
várias abordagens ao mesmo objetivo é mais barata por unidade. Decidir se o próprio objetivo vale a
despesa exige converter de volta para a ACBS (se existir uma avaliação credível) ou um julgamento
político/estratégico fora da matemática. Onde os resultados genuinamente não podem ser reduzidos a
uma unidade — porque um programa produz vários resultados que importam de formas diferentes — use
antes a [análise de decisão multicritério](../multi-criteria-decision-analysis/).

## Exemplo prático

**Autarquia local**: um conselho compara três abordagens para reduzir o número de sem-abrigo, cada
uma custeada ao longo de um ano face ao resultado "indivíduos realojados em alojamento estável por
6 ou mais meses":

```
Opção                            Custo      Resultados alcançados  RCE médio
Housing First (intensivo)        £900.000   60                     £15.000/resultado
Albergue + apoio de transição     £600.000   50                     £12.000/resultado
Trabalho de proximidade +
  arrendamento privado            £350.000   20                     £17.500/resultado

ICER, Albergue vs. Trabalho de proximidade:
  (600k−350k)/(50−20) = £8.333 por resultado adicional
ICER, Housing First vs. Albergue:
  (900k−600k)/(60−50) = £30.000 por resultado adicional
```

O Trabalho de proximidade é dominado em custo médio pelo Albergue, mas o passo *incremental* do
Trabalho de proximidade para o Albergue custa apenas £8.333 por pessoa adicional alojada — barato
face ao passo do Housing First, que custa £30.000 por cada pessoa adicional além do que o Albergue
alcança. Uma autarquia com restrições orçamentais que queira expandir deve preferir alargar o Albergue
antes do Housing First, mesmo que o Housing First pareça melhor no seu próprio rácio médio.

**Governo central**: um programa de recuperação de literacia é comparado entre três modelos de
entrega quanto ao "custo por aluno que atinge o padrão de leitura esperado para a idade": tutoria
individual (£1.800/aluno), tutoria em pequeno grupo (£700/aluno), e intervenção apenas digital
(£150/aluno, mas com apenas 40% da taxa de resultado da tutoria em pequeno grupo por aluno inscrito,
uma vez ajustada para a quebra de envolvimento). Uma vez ajustado para a conclusão real, o modelo
apenas digital custa £375 por aluno que atinge o padrão — ainda o mais barato, mas a ACE não pode
dizer se o número absoluto menor de alunos ajudados pelo modelo apenas digital, caso entregue com o
mesmo orçamento do pequeno grupo, é uma troca aceitável face a alcançar menos alunos com maior
profundidade; esse é um julgamento distributivo que a ACE devolve aos decisores.

## Ligação com a engenharia de software

A ACE é o enquadramento certo sempre que as equipas de engenharia avaliam abordagens de entrega para
o *mesmo* resultado de serviço — custo por identidade verificada com sucesso entre três fornecedores
de verificação de identidade, custo por caso corretamente triado entre dois desenhos de automação de
processos, custo por defeito de acessibilidade resolvido entre correção interna e contratada. A
disciplina que importa diretamente: definir a unidade de resultado antes de comparar custos (não
"tickets fechados" — um produto — mas "necessidade do utilizador efetivamente resolvida"), e calcular
sempre o rácio incremental entre o sistema em produção e um substituto proposto, não o custo médio de
cada sistema isoladamente. Ver [resultados vs. produtos](../outcomes-vs-outputs/) e
[custo por resultado](../cost-per-outcome/).

## Armadilhas

- **Comparar rácios médios, não incrementais, ao decidir sobre uma expansão.** Como mostra o exemplo
  dos sem-abrigo, a opção com o melhor rácio médio nem sempre é a próxima unidade de resultado mais
  barata a comprar.
- **Escolher uma unidade de resultado que é na verdade um produto.** "Referenciações feitas" ou
  "sessões entregues" medem atividade, não o resultado que o programa existe para produzir; a ACE
  sobre produtos produz um número de aparência confiante que responde à pergunta errada.
- **Comparar entre resultados genuinamente diferentes.** A ACE só é válida quando todas as opções
  visam o mesmo resultado medido da mesma forma; comparar "custo por sem-abrigo alojado" com "custo
  por jovem que sai do sistema de acolhimento em arrendamento estável" precisa de uma medida de
  resultado genérica ou de [análise de decisão multicritério](../multi-criteria-decision-analysis/),
  não de ACE.
- **Ignorar a durabilidade do resultado.** Uma opção mais barata que produz resultados que não
  persistem (um aluno que regride depois de a intervenção terminar) não é de facto mais custo-eficaz
  uma vez medida ao longo de um horizonte comparável; ajuste o período de acompanhamento entre as
  opções comparadas.

## Fontes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
