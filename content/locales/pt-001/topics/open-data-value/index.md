# Valor dos Dados Abertos

O valor dos dados abertos é o problema de estimar quanto valem os dados governamentais e públicos
quando não têm preço: não são vendidos, pelo que não há linha de receita, ainda assim a sua
divulgação (registos meteorológicos, horários de transportes, limites de códigos postais, registos
de empresas) demonstravelmente gera atividade económica e social a jusante. Avaliá-lo bem importa
porque tanto "é grátis divulgar" como "não tem valor" estão errados, e um engenheiro de software a
decidir se abre uma API ou um conjunto de dados precisa de um argumento melhor do que qualquer um
dos dois.

## Por que isso importa

A estimativa descendente mais citada vem do relatório de 2013 do McKinsey Global Institute "Open
data: Unlocking innovation and performance with liquid information", que colocou o valor anual
potencial dos dados abertos em sete domínios — educação, transportes, produtos de consumo,
eletricidade, petróleo e gás, saúde e finanças de consumo — entre $3 biliões e $5 biliões por ano a
nível global, através de mecanismos que incluem maior transparência, o ajuste mais eficiente da
oferta à procura, e a possibilidade de novos produtos e serviços construídos sobre os dados. Esse
valor é uma estimativa de cenário, não um resultado medido, e é rotineiramente citado incorretamente
como se fosse receita que o governo pudesse captar diretamente, quando o valor acumula-se
sobretudo em terceiros — empresas, investigadores, cidadãos — que usam os dados, que é precisamente o
propósito de os abrir em vez de os vender. O Open Data Institute do Reino Unido, cofundado por Sir
Tim Berners-Lee e Sir Nigel Shadbolt em 2012, construiu desde então um corpo de estudos de caso mais
granulares, ascendentes — setor a setor, conjunto de dados a conjunto de dados — que são muito mais
úteis para um caso de negócio real do que o valor de destaque da McKinsey, porque mostram o mecanismo
de criação de valor, não apenas a sua dimensão agregada.

## A matemática

Os dados abertos não têm preço de mercado, pelo que os métodos de avaliação o substituem; três
abordagens recorrem, e nenhuma é suficiente isoladamente:

```
1. Método de custo evitado/custo de substituição:
   valor ≈ o que os utilizadores teriam pago para produzir ou
   licenciar os dados equivalentes eles próprios — um limite
   inferior, ignora o valor criado por usos que o produtor original
   nunca antecipou

2. Método análogo de mercado/atividade a jusante:
   valor ≈ receita ou poupanças geradas por empresas/serviços
   construídos sobre os dados (por exemplo, aplicações de navegação
   GPS construídas sobre dados abertos de mapeamento e trânsito) —
   capta atividade económica real mas é difícil de atribuir com
   limpeza à própria divulgação dos dados (ver
   additionality-and-deadweight)

3. Método contingente/de preferência declarada:
   valor ≈ o que os utilizadores dizem que pagariam, ou o tempo que
   dizem que lhes poupa — ver stated-preference-valuation para o
   método geral e os seus enviesamentos

Nenhum destes produz um valor tão limpo como um preço de mercado; os
casos de negócio de dados abertos credíveis triangulam entre dois ou
mais, e são explícitos sobre qual mecanismo está a fazer o trabalho.
```

## Exemplo prático

**Divulgação ilustrativa de dados nacionais de mapeamento/moradas** (metodologia segundo estudos de
caso ao estilo ODI, valores ilustrativos da escala que esses estudos tipicamente encontram):

```
Estimativa de custo evitado:
  Empresas que de outra forma licenciariam comercialmente dados
  equivalentes de correspondência de moradas, a um custo médio
  estimado de licença de £4.000/ano, em cerca de 15.000 PMEs que
  agora usam o conjunto de dados aberto e gratuito
  = 15.000 × £4.000 = £60.000.000/ano apenas em custo de
  licenciamento evitado

Estimativa de atividade a jusante (mais especulativa, precisa de um
contrafactual):
  Novos produtos de roteamento de entregas e logística construídos
  sobre os dados abertos que não existiriam, ou seriam materialmente
  piores, sem eles — exige uma comparação face ao contrafactual de
  os dados permanecerem fechados ou licenciados comercialmente
  (counterfactual-analysis), porque parte dessa atividade aconteceria
  de qualquer forma sobre dados pagos a um preço mais alto, o que é
  perda seca no sentido de "valor criado pela abertura"

Um caso de negócio defensável reporta o valor de custo evitado como o
limite inferior sólido, e trata o valor de atividade a jusante como um
cenário de limite superior, não um facto.
```

## Ligação com a engenharia de software

Para os engenheiros, a pergunta prática de valor dos dados abertos é geralmente mais estreita do que
os valores nacionais de destaque: abrir esta API ou conjunto de dados específico (em vez de o manter
por trás de um acordo de parceria) aumenta a reutilização o suficiente para justificar o custo
contínuo de o documentar, versionar e apoiar como uma interface pública? Esse custo de manutenção é
real e é a contraparte da economia de construir-uma-vez-reutilizar-frequentemente do
[governo como plataforma](../government-as-a-platform/) — os dois tópicos são primos próximos, um
sobre código e infraestrutura partilhados, o outro sobre dados partilhados. Qualquer alegação de
valor de dados abertos deve ser verificada face à
[adicionalidade e perda seca](../additionality-and-deadweight/) antes de entrar num caso de negócio:
atividade que teria acontecido de qualquer forma, sobre dados licenciados comercialmente, não é valor
que a *abertura* criou.

## Armadilhas

- **Citar o valor de $3–5 biliões da McKinsey como específico do Reino Unido ou como a quota deste
  conjunto de dados**: é uma estimativa de cenário global de sete setores de 2013 — usá-la como um
  multiplicador preciso para um único conjunto de dados nacional deturpa o que o número representa.
- **Nenhum contrafactual**: reivindicar o mérito por toda a atividade económica a jusante construída
  sobre dados abertos, sem perguntar quanto dela teria acontecido de qualquer forma sobre dados pagos
  ou licenciados a um preço mais alto (ver
  [adicionalidade e perda seca](../additionality-and-deadweight/) e
  [análise contrafactual](../counterfactual-analysis/)).
- **Confundir custo de produção com valor criado**: um conjunto de dados que foi caro recolher não é
  automaticamente valioso divulgar, e um barato não tem automaticamente baixo valor — o valor segue o
  uso a jusante, não o custo a montante.
- **Ignorar o custo de manutenção contínuo de "aberto"**: publicar um extrato CSV pontual não é o
  mesmo compromisso que operar uma API aberta documentada, versionada e apoiada — subfinanciar esta
  última depois do anúncio de lançamento é um modo de falha comum.

## Fontes

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
