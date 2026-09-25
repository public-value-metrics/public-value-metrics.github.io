# Preço-Sombra

Um preço-sombra é um valor estimado atribuído a um bem, recurso ou externalidade que não tem preço de
mercado observável, ou cujo preço de mercado está distorcido e não reflete o seu verdadeiro valor
social. A avaliação governamental assenta num pequeno conjunto de preços-sombra oficiais — carbono,
tempo fora do trabalho, trabalho desempregado — publicados centralmente para que todos os
departamentos usem o mesmo número.

## Por que isso importa

Os preços-sombra existem porque a
[análise de custo-benefício social](../social-cost-benefit-analysis/) não consegue funcionar sem um
valor monetário para cada custo e benefício, e vários dos mais consequentes — uma tonelada de carbono
emitida, uma hora do tempo de um passageiro pendular, uma hora de trabalho de outra forma desempregado
— não têm preço de mercado algum, ou têm um preço de mercado que deturpa o seu verdadeiro custo
social. O HM Treasury e o Department for Energy Security and Net Zero publicam conjuntamente o
preço-sombra do carbono usado em toda a avaliação do governo do Reino Unido
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
derivado não de qualquer preço de mercado de carbono mas de uma abordagem consistente com metas: o
valor do carbono é fixado ao custo marginal de mitigação necessário para cumprir os orçamentos de
carbono legislados do Reino Unido, o que é uma lógica fundamentalmente diferente de observar por
quanto o carbono de facto transaciona no Emissions Trading Scheme da UE ou do Reino Unido.

A taxa de salário-sombra segue uma lógica semelhante do lado do trabalho. Empregar alguém que de
outra forma estaria desempregado não custa à sociedade o seu salário integral — parte desse salário é
uma transferência de pagamentos de subsídios perdidos e tempo de lazer/procura perdido, em vez de um
novo consumo líquido dos recursos da sociedade — pelo que as orientações do Green Book fixam um
preço-sombra abaixo do salário de mercado para trabalho retirado do desemprego, refletindo o
verdadeiro custo de oportunidade desse trabalho (ver
[custo de oportunidade na despesa pública](../opportunity-cost-in-public-spending/)) em vez do seu
preço de mercado.

## A matemática

```
Preço-sombra do carbono (estrutura ilustrativa, valores atuais da
ferramenta oficial de valores de carbono BEIS/DESNZ — não usar
valores desatualizados):
  Valor do setor transacionado: informado pelas trajetórias de preço
    de licenças de emissão do ETS
  Valor do setor não transacionado (consistente com metas): fixado ao
    custo marginal de mitigação necessário para cumprir os orçamentos
    de carbono legislados, subindo ao longo do tempo à medida que as
    opções de mitigação mais fáceis se esgotam
  Aplicado como: £/tonelada CO2e × toneladas emitidas ou evitadas pela
    opção, descontado à taxa de desconto social para anos futuros

Taxa de salário-sombra (SWR):
  SWR = Salário de mercado − (valor do tempo de lazer/procura perdido
                               poupado + valor dos pagamentos de
                               subsídio já não pagos)
  Tipicamente expresso como uma fração do salário de mercado (por
    exemplo, SWR = 0,6 × salário de mercado numa área de elevado
    desemprego, segundo as orientações do Anexo A do Green Book sobre
    mercados de trabalho com capacidade sobrante)
```

Ambos os valores são convenções de política fixadas centralmente, não observações de mercado
empíricas — todo o propósito de um preço-sombra é substituir um mercado ausente ou distorcido, pelo
que uma avaliação que use um deve citar a fonte oficial atual em vez de derivar o seu próprio valor,
precisamente para que a avaliação de cada departamento seja comparável.

## Exemplo prático

**Governo central**: a avaliação de um esquema de defesa contra inundações estima que evita 400
toneladas de emissões de CO2e por ano (através da redução do uso de equipamento de emergência e da
redução do carbono incorporado de reconstrução evitada) ao longo de uma vida de avaliação de 30 anos,
comparada com uma referência de "fazer o mínimo".

```
Preço-sombra ilustrativo do carbono: £280/tonelada CO2e (ano 1,
subindo ao longo do período de avaliação segundo o calendário oficial
de valores de carbono não transacionado)
Benefício de carbono do ano 1 = 400 × £280 = £112.000
```

Porque o calendário oficial faz o valor do carbono *subir* ao longo do período de avaliação
(refletindo orçamentos de carbono cada vez mais apertados), o analista deve aplicar o valor correto
específico do ano para cada ano do fluxo de 30 anos, não uma taxa fixa — usar o valor do ano 1 ao
longo de todo o período subestimaria os benefícios dos anos posteriores e distorceria a classificação
face a desenhos alternativos de defesa contra inundações com perfis de carbono diferentes.

**Autarquia local**: o programa de apoio ao emprego de um conselho para residentes desempregados de
longa duração coloca 150 pessoas em empregos pagando £11/hora. Avaliar isto usando o salário de
mercado integral creditaria ao programa £11 × horas trabalhadas como benefício social, mas a
abordagem da taxa de salário-sombra reconhece que estes não eram trabalhadores retirados de outros
empregos — o verdadeiro custo de oportunidade do seu trabalho antes do programa era baixo.

```
Salário de mercado: £11,00/hora
Taxa de salário-sombra (ilustrativo, elevado desemprego local): 0,6 ×
salário de mercado = £6,60/hora
Benefício social líquido atribuível por hora trabalhada ≈ £11,00 −
£6,60 = £4,40/hora
  (o valor "extra" criado ao mover trabalho genuinamente ocioso para
   a produção, distinto do próprio salário, que é em grande parte
   uma transferência)
```

É por isso que as avaliações de programas de emprego em áreas de elevado desemprego podem mostrar um
valor social líquido positivo mesmo quando o mesmo programa, realizado numa área de pleno emprego
onde o trabalho deslocado seria simplesmente retirado de outros empregos, não o mostraria.

## Ligação com a engenharia de software

O preço-sombra raramente toca diretamente a entrega de software, mas importa sempre que um caso de
negócio alega um benefício de carbono ou social a partir de uma mudança de TI — uma consolidação de
centro de dados que alega poupanças de carbono, ou um serviço sem papel que alega carbono de
impressão e envio postal evitado, deve usar o preço-sombra oficial atual do carbono em vez de um
valor inventado, e deve aplicar o calendário ano a ano correto em vez de uma taxa fixa, exatamente
como qualquer outro dado de entrada de avaliação do Green Book. Ver
[custo total de propriedade em TI governamental](../total-cost-of-ownership-in-government-it/) e
[valor da cibersegurança no setor público](../public-sector-cybersecurity-value/), ambos os quais
frequentemente precisam de um preço-sombra para um dado de entrada difícil de monetizar (risco de
violação, tempo de inatividade) a par de itens diretamente custeados.

## Armadilhas

- **Usar um valor desatualizado de carbono ou salário.** Ambos os valores são revistos periodicamente
  por orientação central; uma avaliação construída sobre um valor substituído não sobreviverá ao
  escrutínio do Tesouro.
- **Aplicar um preço-sombra de carbono fixo ao longo de uma avaliação plurissecular.** O calendário
  oficial sobe ao longo do tempo; usar o valor do ano 1 ao longo de todo o período deturpa o perfil
  de benefícios ou custos.
- **Confundir o salário-sombra com um desconto no pagamento real do trabalhador.** A taxa de
  salário-sombra ajusta a avaliação *da avaliação* do dado de entrada de trabalho, não o salário que
  o trabalhador de facto recebe — confundir os dois convida a justificar (incorretamente) pagamento
  abaixo do mercado.
- **Derivar um preço-sombra à medida em vez de usar o oficial.** Os preços-sombra são convenções de
  política precisamente para que as avaliações sejam comparáveis entre departamentos; um valor
  inventado localmente, por bem fundamentado que seja, quebra essa comparabilidade.

## Fontes

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
