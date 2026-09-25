# Adicionalidade e Perda Seca (Deadweight)

Adicionalidade pergunta se uma intervenção causou um resultado que de outro modo não teria
acontecido. Perda seca (deadweight) é o seu espelho: a parcela de um resultado que teria ocorrido de
qualquer forma, mesmo sem o programa, subvenção ou subsídio. Quase todas as alegações de impacto de
um programa governamental ou de uma instituição de solidariedade exageram o seu efeito até que a
perda seca seja subtraída, razão pela qual as orientações de avaliação do Reino Unido a tratam como
o primeiro e mais importante ajuste a qualquer número de destaque.

## Por que isso importa

"Apoiámos 500 empresas a crescer" soa como uma conquista, mas se 300 dessas empresas fossem crescer
de qualquer forma — porque a economia local estava a recuperar, porque tinham outras vias de
financiamento, porque já estavam numa trajetória de crescimento antes do programa começar — a
verdadeira contribuição adicional do programa é 200, não 500. O Magenta Book do HM Treasury e o
duradouro "Additionality Guide" do HM Treasury/BIS (desenvolvido originalmente para programas de
desenvolvimento regional e regeneração, e amplamente utilizado na avaliação governamental do Reino
Unido desde então) formalizam a perda seca como o ajuste inicial na sequência padrão de impacto
líquido: efeito bruto menos perda seca, menos deslocamento, menos fuga, ajustado por efeitos
multiplicadores, é igual ao impacto líquido adicional. Saltar este passo é a forma mais comum de as
alegações de impacto do setor público e social serem infladas, deliberadamente ou não — um programa
de subvenções que mede apenas os resultados brutos dos participantes, sem grupo de comparação, não
consegue distinguir o seu próprio efeito daquilo que teria acontecido de qualquer forma.

A perda seca não é uma percentagem fixa; depende inteiramente do contrafactual para a população e
intervenção específicas (ver [análise contrafactual](../counterfactual-analysis/)). As avaliações de
desenvolvimento regional inglesas sob as antigas Regional Development Agencies encontraram
habitualmente taxas de perda seca na faixa de 20–60%, consoante o tipo de apoio empresarial, razão
pela qual avaliações credíveis de programas reportam um intervalo ajustado à perda seca em vez de um
único valor assumido, e pela qual financiadores como o National Lottery Community Fund e a Big
Society Capital exigem que os beneficiários de subvenções abordem explicitamente a perda seca no
relatório de resultados, em vez de reportar contagens brutas de participantes.

## A matemática

A sequência padrão de ajuste de impacto líquido, tal como estabelecida nas orientações de avaliação
do Reino Unido (Magenta Book; Additionality Guide do HM Treasury/BIS; orientações de avaliação
ESIF e dos fundos estruturais):

```
Resultado bruto
  − Perda seca (deadweight)   (o que teria acontecido de qualquer forma)
  − Deslocamento (displacement) (atividade/benefício deslocado de outro
                       local, não criado — ver displacement-and-attribution)
  − Fuga (leakage)   (benefício que reverte fora do grupo/área-alvo)
  × Multiplicador     (atividade económica indireta/induzida adicional, quando positiva)
  = Impacto líquido adicional
```

Taxa de perda seca como proporção:

```
Taxa de perda seca = resultados que teriam ocorrido sem a intervenção
                   / total de resultados brutos observados

Resultados líquidos adicionais = Resultados brutos × (1 − Taxa de perda seca)
```

## Exemplo prático

**Programa de subvenções de apoio empresarial**: um regime regional de subvenções reporta que 500
empresas apoiadas aumentaram o emprego no ano seguinte, uma média de 3 empregos cada uma — uma
alegação bruta de 1.500 empregos.

Um grupo de comparação emparelhado de empresas semelhantes não apoiadas (ver
[análise contrafactual](../counterfactual-analysis/)) mostra que 40% do crescimento do emprego nas
empresas apoiadas teria acontecido de qualquer forma, com base no desempenho do grupo emparelhado no
mesmo período.

```
Taxa de perda seca = 40%
Empregos líquidos adicionais = 1.500 × (1 − 0,40) = 900 empregos
```

A conquista honestamente reportável do programa é 900 empregos, não 1.500 — uma redução de 40%
apenas devido ao ajuste da perda seca, antes sequer de considerar o deslocamento ou a fuga.

**Programa de emprego de uma instituição de solidariedade**: uma instituição coloca 200 desempregados
de longa duração em empregos a um custo de £600.000 (£3.000 por colocação, bruto). Dados nacionais do
mercado de trabalho mostram que, na ausência de qualquer intervenção, cerca de 15% de uma coorte
comparável de desempregados de longa duração encontra trabalho no mesmo período através da rotação
natural do mercado de emprego.

```
Taxa de perda seca = 15%
Colocações líquidas adicionais = 200 × (1 − 0,15) = 170
Custo real por colocação adicional = £600.000 / 170 ≈ £3.529
```

O valor bruto de custo por colocação (£3.000) subestima o custo real da contribuição adicional da
instituição em cerca de 15%.

## Ligação com a engenharia de software

Adicionalidade e perda seca importam diretamente a quem constrói software de medição de impacto ou
de gestão de subvenções para o setor público ou social:

- Os sistemas de relatório de resultados devem capturar um grupo de comparação ou de referência por
  desenho, não apenas os resultados dos participantes — adaptar um contrafactual depois de um sistema
  ser lançado sem um é muito mais difícil do que construir essa captura desde o início (ver
  [análise contrafactual](../counterfactual-analysis/)).
- Painéis que reportam apenas contagens brutas de participantes irão sistematicamente exagerar o
  impacto perante financiadores e órgãos de supervisão; onde existam estimativas de perda seca (da
  literatura de avaliação ou de um grupo de comparação), o software deve apresentar o valor líquido de
  perda seca ao lado do valor bruto, não em vez dele.
- Isto liga-se diretamente ao [retorno social sobre o investimento](../social-return-on-investment/),
  cujo rácio SROI só é credível depois de a perda seca (e o deslocamento) terem sido subtraídos dos
  resultados brutos alegados — uma calculadora de SROI que omita este passo produzirá rácios
  inflacionados que não resistem ao escrutínio.

## Armadilhas

- **Reportar resultados brutos como se fossem todos adicionais.** Este é o erro de medição de impacto
  mais comum em relatórios de subvenções e programas; pergunte sempre "isto teria acontecido de
  qualquer forma?" antes de publicar um número de destaque.
- **Presumir que uma única percentagem de perda seca se aplica a tudo.** A perda seca varia
  enormemente consoante o setor, a população e as condições económicas locais; use um grupo de
  comparação ou evidência específica do setor em vez de reutilizar um valor de uma avaliação não
  relacionada.
- **Confundir perda seca com deslocamento.** A perda seca refere-se a resultados contrafactuais para
  os mesmos participantes; o deslocamento refere-se a efeitos sobre outras pessoas ou locais — ver
  [deslocamento e atribuição](../displacement-and-attribution/). Confundir os dois conduz a uma
  contagem dupla ou insuficiente do ajuste.
- **Perda seca autorreportada pelos participantes.** Perguntar aos beneficiários "isto teria
  acontecido sem a nossa ajuda?" produz estimativas de perda seca sistematicamente baixas (os
  participantes tendem a atribuir o mérito ao programa); um grupo de comparação independente é muito
  mais fiável.

## Fontes

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3ª edição), originalmente
  desenvolvido com a English Partnerships e a Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  orientações sobre perda seca, deslocamento e fuga na avaliação de fundos estruturais.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
