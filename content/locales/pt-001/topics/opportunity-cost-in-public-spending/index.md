# Custo de Oportunidade na Despesa Pública

O custo de oportunidade é o valor da melhor alternativa perdida quando um organismo público
compromete dinheiro, tempo de pessoal ou capital político numa opção em vez de outra. Num
departamento com orçamento fixo, cada libra gasta num programa é uma libra que não pode ser gasta no
próximo melhor programa — o verdadeiro custo de uma decisão não é o que gasta, mas o que desloca.

## Por que isso importa

Os orçamentos públicos são limitados em tesouraria dentro de um período de revisão de despesa, pelo
que — ao contrário de uma empresa privada em crescimento — um departamento governamental não pode
simplesmente "encontrar mais dinheiro" para uma boa ideia; financiá-la significa desfinanciar outra
coisa. O Green Book do HM Treasury trata isto como fundacional: toda a avaliação é obrigada a
comparar uma intervenção com uma referência de "fazer o mínimo" *e* com usos alternativos realistas
do mesmo recurso, precisamente porque a verdadeira pergunta que uma equipa de despesa do Tesouro
coloca nunca é "isto é bom?" mas "isto é melhor do que aquilo que este dinheiro poderia comprar de
outra forma?" O princípio de avaliação central do Green Book — que os recursos públicos devem fluir
para a intervenção com o maior valor social líquido por libra — é o custo de oportunidade declarado
como política.

Isto é fácil de declarar e difícil de aplicar porque a "próxima melhor alternativa" raramente é
visível num único caso de negócio. Um programa de subvenções de £2 milhões para o emprego jovem é
comparado, no caso de negócio, com não fazer nada — mas o comparador honesto é a próxima melhor
intervenção de emprego jovem, ou de facto o próximo melhor uso de £2 milhões em qualquer parte do
portefólio, incluindo despesa não relacionada com emprego. O Magenta Book (HM Treasury, 2020) alerta
explicitamente que as avaliações que comparam "com intervenção" a "sem intervenção" subestimam a
fasquia que uma intervenção deve ultrapassar, porque "sem esta intervenção" não é o mesmo que "sem
nada de todo" — o dinheiro libertado financia outra coisa.

## A matemática

```
Custo de oportunidade de escolher A = valor da melhor alternativa
                                       perdida B

Valor público líquido de A = valor(A) − valor(B), não valor(A) − 0
```

Não existe uma fórmula universal porque a alternativa perdida é específica do contexto, mas a
disciplina generaliza-se: identificar o próximo melhor uso realista da mesma linha orçamental (não um
"não fazer nada" idealizado), avaliá-lo na mesma base (monetizado onde possível, segundo a
[análise de custo-benefício social](../social-cost-benefit-analysis/)), e subtrair.

## Exemplo prático

**Linha orçamental departamental**: um fundo de transformação digital de £5 milhões pode financiar
exatamente uma de duas propostas neste ano financeiro.

- *Opção A*: uma nova plataforma de gestão de processos, benefício monetizado de £7,2 milhões ao
  longo de 5 anos (poupanças de eficiência mais resolução mais rápida de processos).
- *Opção B*: um serviço de verificação de identidade partilhado entre três departamentos, benefício
  monetizado de £6,4 milhões ao longo de 5 anos.

Um caso de negócio ingénuo para A compara £7,2 milhões de benefício com £5 milhões de custo e reporta
um rácio benefício-custo de 1,44:1 — aparentemente forte. Mas porque A e B competem pelos mesmos £5
milhões, o custo de oportunidade de escolher A é o benefício de £6,4 milhões perdido de B. O caso
*líquido* para A face à alternativa realista é apenas £7,2M − £6,4M = £0,8 milhões, não o valor
integral de destaque de £7,2 milhões. Se uma terceira opção, C, oferecesse £7,5 milhões de benefício
pelos mesmos £5 milhões, financiar A em vez de C destruiria £0,3 milhões de valor público, mesmo que
o próprio caso de negócio de A pareça totalmente justificado isoladamente.

**Tempo de pessoal de uma autarquia local**: a equipa de dados de três pessoas de um conselho pode
construir ou um painel de lista de espera de habitação (estimado poupar 400 horas de funcionário/ano,
avaliadas a £28/hora = £11.200/ano) ou uma ferramenta de triagem de fraude de subsídios (estimada
prevenir £85.000/ano em pagamentos incorretos). Construir o painel tem um custo de oportunidade de
£85.000/ano perdidos, não apenas o custo salarial da equipa de dados — o verdadeiro custo da
construção interna "gratuita" é o benefício muito maior que a equipa poderia ter produzido noutro
lugar.

## Ligação com a engenharia de software

A capacidade de engenharia dentro de um organismo público é, ela própria, um orçamento restrito —
capacidade de sprint, não libras — e a mesma disciplina aplica-se diretamente:

- Nomeie sempre o comparador: o caso de negócio de uma funcionalidade deve declarar o que mais as
  mesmas semanas-equipa poderiam entregar, não apenas o seu próprio retorno.
- Trate "temos capacidade de engenharia disponível" como o início de uma análise de custo de
  oportunidade, não o fim — a capacidade disponível ainda tem um melhor uso alternativo, mesmo que
  esse uso seja o pagamento de dívida técnica (ver
  [dívida técnica como erosão de valor público](../technical-debt-as-public-value-erosion/)).
- Ligue isto diretamente ao [valor pelo dinheiro](../value-for-money/): o teste de "economia" do VFM
  não tem sentido sem um comparador honesto de custo de oportunidade, e ao
  [custo do atraso em programas públicos](../cost-of-delay-in-public-programmes/), que precifica a
  dimensão temporal da mesma lógica de alternativa perdida.

## Armadilhas

- **Comparar com "não fazer nada" em vez da próxima melhor alternativa.** O Green Book exige uma
  referência de "fazer o mínimo" precisamente porque o verdadeiro custo de oportunidade raramente é
  zero; um caso de negócio que só ultrapassa a fasquia de "não fazer nada" não mostrou que vence a
  alternativa realista.
- **Ignorar a competição interdepartamental pelo mesmo fundo.** As linhas orçamentais que parecem
  reservadas dentro de uma direção muitas vezes competem a um nível mais alto (uma revisão de
  despesa, um programa de capital) onde o verdadeiro custo de oportunidade se realiza.
- **Presumir que o tempo de pessoal libertado tem valor adicional zero.** O tempo "poupado" só cria
  valor se redistribuído para algo valioso; se o uso alternativo não existe, a poupança é nocional.

## Fontes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
