# Equidade Intergeracional e Desconto de Sustentabilidade

Descontar custos e benefícios futuros para o valor presente é prática padrão na avaliação pública —
ver a [taxa de desconto social](../social-discount-rate/) — mas qualquer taxa de desconto positiva,
composta ao longo de décadas ou séculos, encolhe o futuro distante para perto de zero em termos de
hoje. Para decisões com consequências a um século ou mais de distância — alterações climáticas,
resíduos nucleares, perda de biodiversidade, sustentabilidade das pensões — esse facto matemático
torna-se um facto ético: o desconto padrão pode fazer com que um dano catastrófico às gerações
futuras pareça, em termos de valor presente, mal valer a pena evitar.

## Por que isso importa

A equação de Ramsey, derivada por Frank Ramsey em 1928, decompõe a taxa de desconto em dois
componentes: a preferência temporal pura (δ, quanto simplesmente preferimos o agora ao depois,
independentemente da riqueza) e o efeito de crescimento da riqueza (η×g, quanto descontamos porque se
espera que as gerações futuras sejam mais ricas, pelo que uma libra extra lhes importa menos. A taxa
de desconto de longo prazo padrão do Green Book do Reino Unido é construída sobre esta equação e
segue um calendário *decrescente* em vez de uma taxa fixa — um desenho enraizado no trabalho de
Martin Weitzman sobre o "desconto gama", que mostra que quando a própria taxa de desconto futura é
incerta, a taxa equivalente-certa que se deve aplicar decresce matematicamente ao longo do tempo,
porque os cenários de taxa baixa passam a dominar quanto mais longe se olha. O Stern Review on the
Economics of Climate Change (2006), liderado por Sir Nicholas Stern, levou o debate ético mais longe:
Stern argumentou que a preferência temporal pura deveria ser fixada perto de zero (usou δ ≈ 0,1%,
refletindo apenas a pequena probabilidade de uma catástrofe que acabe com a civilização, não uma
preferência genuína pelo presente face ao futuro), produzindo uma taxa de desconto efetiva muito mais
baixa do que a prática convencional do Green Book e, correspondentemente, um caso muito maior, nos
dias de hoje, para a ação climática. Os críticos (nomeadamente William Nordhaus) argumentaram que a
taxa quase-zero de Stern era eticamente defensável mas inconsistente com o comportamento real
observado de poupança e investimento. O desacordo não é uma nota de rodapé técnica — é a maior razão
isolada pela qual dois economistas igualmente rigorosos podem chegar a conclusões radicalmente
diferentes sobre quanto a geração presente deve sacrificar pelo futuro, e é a razão pela qual o
software que suporta a avaliação de investimento público de longo horizonte deve expor os seus
pressupostos de desconto em vez de os enterrar num valor padrão de folha de cálculo.

## A matemática

```
Equação de Ramsey:   r = δ + η × g

  r = taxa de desconto social
  δ = preferência temporal pura (taxa de impaciência,
      independentemente da riqueza)
  η = elasticidade da utilidade marginal do consumo (valor
      decrescente do consumo extra à medida que as pessoas
      enriquecem)
  g = taxa de crescimento esperada do consumo per capita

Calendário decrescente de longo prazo do Green Book (aproximado,
faixas atualmente publicadas):
  Anos 0–30:    3,5%
  Anos 31–75:   3,0%
  Anos 76–125:  2,5%
  Anos 126–200: 2,0%
  Anos 201–300: 1,5%
  Anos 301+:    1,0%

Parâmetros do Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Exemplo prático

**Valor hoje de £1 de dano evitado daqui a 100 anos**, sob três regimes de desconto:

```
Taxa curto prazo fixa do Green Book (3,5%, mantida constante durante
100 anos):
  VA = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Calendário decrescente do Green Book (3,5% para os anos 1–30, 3,0%
para os anos 31–75, 2,5% para os anos 76–100):
  fator(1–30)  = 1,035^30  ≈ 2,807
  fator(31–75) = 1,03^45   ≈ 3,782
  fator(76–100)= 1,025^25  ≈ 1,854
  fator total ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  VA = 1 / 19,68 ≈ £0,051   (5,1 pence)

Preferência temporal pura quase-zero ao estilo Stern (r ≈ 1,4% fixa):
  VA = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

O mesmo £1 de dano evitado daqui a um século vale 3,2p, 5,1p ou 25p hoje, dependendo puramente de
qual convenção de desconto é usada — um intervalo de quase oito vezes que determina se um projeto de
mitigação climática com custo inicial elevado e retorno a um século de distância sequer ultrapassa a
barreira de um VAL positivo. Este é o mecanismo por trás do alerta central do capítulo: a qualquer
taxa fixa significativamente positiva, o dano futuro suficientemente distante é aritmeticamente
apagado da avaliação, independentemente da sua gravidade real.

## Ligação com a engenharia de software

- Qualquer ferramenta de avaliação ou caso de negócio de longo horizonte (infraestrutura, adaptação
  climática, modelação de pensões) deve implementar o calendário *decrescente* do Green Book, não uma
  única taxa fixa — um valor padrão de taxa fixa incorpora silenciosamente um enviesamento
  anti-futuro muito mais forte do que a orientação atual do governo do Reino Unido especifica.
- A taxa de desconto e o horizonte devem ser sempre expostos como parâmetros visíveis e auditáveis no
  software de avaliação, com a sensibilidade do cálculo a eles mostrada explicitamente (como no
  exemplo prático acima) — enterrar a taxa num ficheiro de configuração convida exatamente à "escolha
  ética escondida" contra a qual o debate Stern-Nordhaus alerta; isto emparelha com o ponto de
  transparência feito na
  [contabilidade de capital natural](../natural-capital-accounting/) e sustenta o tópico da
  [taxa de desconto social](../social-discount-rate/) em geral.
- Onde os benefícios de um programa são explicitamente intergeracionais (defesa contra inundações,
  restauração de capital natural, infraestrutura digital de longo prazo), uma
  [análise de custo-benefício social](../social-cost-benefit-analysis/) deve reportar resultados sob
  pelo menos dois pressupostos de desconto (o padrão do Green Book e um caso de sensibilidade de taxa
  baixa) em vez de uma única estimativa pontual, para que os decisores vejam como a escolha da taxa
  de desconto, por si só, move a resposta.

## Armadilhas

- **Apresentar um único VAL descontado sem um intervalo de sensibilidade** — dado quanto a taxa de
  desconto, por si só, muda a resposta para projetos de longo horizonte, um VAL de taxa única exagera
  materialmente a precisão; reporte sempre um intervalo que abranja pelo menos o padrão do Green Book
  e um cenário de taxa baixa.
- **Aplicar a taxa fixa de curto prazo (3,5%) a uma avaliação multissecular** — a própria orientação
  do Green Book especifica o calendário decrescente precisamente porque a taxa fixa foi julgada
  inadequada além de cerca de 30 anos; usá-la mesmo assim subestima os custos de longo prazo.
- **Tratar δ (preferência temporal pura) como um parâmetro puramente técnico** — tanto o valor
  quase-zero de Stern como o valor implícito mais alto do Green Book só são defensáveis como posições
  éticas sobre quanto peso o presente deve ao futuro, não como números empiricamente "corretos" ou
  "incorretos"; o software deve tornar o pressuposto visível, em vez de apresentar um valor como
  objetivamente certo.

## Fontes

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
