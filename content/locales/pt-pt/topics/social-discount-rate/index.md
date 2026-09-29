# Taxa de Desconto Social

A taxa de desconto social converte custos e benefícios futuros em valores atuais, para que programas
com retornos distribuídos ao longo de décadas possam ser comparados numa base comum. O Green Book do
HM Treasury exige um calendário decrescente ancorado em 3,5% para os primeiros 30 anos, baseado na
fórmula de Ramsey — um número específico e citável que se tornou um argumento político e ético vivo
sempre que aplicado a compromissos de longo horizonte, como a política climática ou a infraestrutura.

## Por que isso importa

Uma libra de benefício recebida daqui a 30 anos não vale uma libra de benefício recebida hoje, por
razões que são em parte sobre preferência temporal pura (as pessoas e sociedades preferem coisas boas
mais cedo) e em parte sobre crescimento (espera-se que uma sociedade futura seja mais rica, pelo que
uma libra lhe importa menos na margem). O Anexo 6 do Green Book deriva a taxa de desconto padrão do
Reino Unido a partir da fórmula de Ramsey, combinando uma taxa de preferência temporal pura com a
taxa de crescimento esperada do consumo e a elasticidade da utilidade marginal do consumo, produzindo
a taxa publicada de 3,5% ao ano para os anos 0–30, decrescendo num calendário publicado para os anos
31 em diante (até 1% para os anos 301+). Este calendário existe precisamente porque um 3,5% constante
composto ao longo de um século tornaria praticamente qualquer benefício de longo horizonte — uma
defesa contra inundações a salvar vidas daqui a 80 anos, uma redução de carbono a evitar danos daqui a
100 anos — negligenciável em termos de valor presente, o que o Tesouro julgou ser uma conclusão ética
implausível para decisões de infraestrutura e ambientais genuinamente de longa duração.

A taxa de desconto é contestada precisamente porque a escolha não é um parâmetro técnico neutro:
codifica um julgamento sobre quanto uma sociedade deve sacrificar hoje por pessoas ainda não
nascidas. O Stern Review on the Economics of Climate Change (2006) usou uma taxa de desconto próxima
de zero (uma preferência temporal pura próxima de 0,1%), argumentando que descontar o bem-estar das
gerações futuras a algo próximo das taxas de mercado é eticamente indefensável quando o dano
(alterações climáticas catastróficas) é irreversível. Os críticos — nomeadamente William Nordhaus —
argumentaram que a taxa quase-zero de Stern exagerava o caso para despesa climática imediata ao fazer
com que quase qualquer custo presente parecesse justificado face a um benefício futuro mal descontado.
O desacordo não era sobre a matemática; era sobre qual enquadramento ético deveria fixar a taxa, e
continua a ser a ilustração padrão de porque a taxa de desconto é uma escolha de política, não apenas
um dado de entrada atuarial.

## A matemática

A fórmula de Ramsey subjacente à taxa do Green Book:

```
r = ρ + η·g

onde:
  r = taxa de desconto social
  ρ = taxa de preferência temporal pura (impaciência + risco de
      catástrofe)
  η = elasticidade da utilidade marginal do consumo
  g = taxa de crescimento anual esperada do consumo per capita
```

O calendário decrescente do Green Book (Anexo 6, ilustrativo — verifique a edição atual para a tabela
publicada exata):

```
Anos 0–30:    3,5%
Anos 31–75:   3,0%
Anos 76–125:  2,5%
Anos 126–200: 2,0%
Anos 201–300: 1,5%
Anos 301+:    1,0%
```

Valor presente de uma soma futura:

```
VP = VF / (1 + r)^t
```

## Exemplo prático

**Esquema de defesa contra inundações**: um projeto entrega £10 milhões de danos por inundação
evitados no ano 40.

Usando uma taxa fixa de 3,5%: VP = 10.000.000 / (1,035)^40 ≈ £2,52 milhões — o benefício parece
pequeno.

Usando o calendário decrescente do Green Book (3,5% para os anos 0–30, 3,0% depois), o cálculo
compõe a 3,5% nos primeiros 30 anos e a 3,0% nos anos 31–40:

```
VP = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 milhões
```

O calendário decrescente eleva modestamente o valor presente de benefícios de longo horizonte face a
uma taxa alta fixa — o propósito explícito do calendário, já que um 3,5% fixo durante um século
descontaria um benefício de £100 milhões no ano 100 para menos de £3,3 milhões.

**Infraestrutura digital**: uma migração para a nuvem governamental que custa £4 milhões agora espera-
se que evite £500.000/ano em custos de manutenção de sistemas legados durante 15 anos. A 3,5%, o
valor presente dessa anuidade é aproximadamente £500.000 × 11,52 (o fator de anuidade de 15 anos a
3,5%) ≈ £5,76 milhões — excedendo confortavelmente o custo de £4 milhões, um caso de valor atual
líquido positivo que pareceria marcadamente mais fraco a uma taxa mais alta escolhida ingenuamente (a
7%, o mesmo fator de anuidade cai para cerca de 9,11, dando £4,56 milhões, ainda positivo mas com uma
margem muito mais fina).

## Ligação com a engenharia de software

A maioria dos casos de negócio de software decorre ao longo de 3–5 anos, bem dentro da faixa fixa de
3,5%, pelo que o calendário decrescente raramente se aplica diretamente — mas a disciplina subjacente
importa para qualquer investimento tecnológico governamental com uma vida útil longa (uma plataforma
nacional, um programa de infraestrutura de dados, um contrato plurissecular):

- Use a taxa publicada do Green Book em vez de uma "taxa mínima" interna emprestada das finanças
  privadas; os auditores e revisores do Tesouro esperarão o calendário padrão.
- Para benefícios realizados muitos anos depois (as poupanças de manutenção de longo prazo de uma
  plataforma, o valor composto de um ecossistema de dados abertos — ver
  [valor dos dados abertos](../open-data-value/)), a escolha de desconto pode virar um caso de
  negócio de positivo para negativo; torne a taxa e o horizonte pressupostos explícitos, não valores
  padrão enterrados.
- Isto alimenta diretamente a [avaliação do Green Book](../green-book-appraisal/), o modelo dos
  cinco casos que formalmente exige um fluxo de caixa descontado, e a
  [avaliação de bem-estar](../wellbeing-valuation/), onde a mesma questão de desconto surge para
  benefícios de bem-estar não monetários.
- Ver também [equidade intergeracional e desconto de sustentabilidade](../intergenerational-equity-and-sustainability-discounting/)
  para o debate Stern versus Nordhaus aplicado especificamente ao investimento em tecnologia
  ambiental e climática.

## Armadilhas

- **Usar uma taxa fixa para horizontes muito longos.** O calendário decrescente do Green Book existe
  especificamente porque uma taxa constante subestima benefícios genuinamente de longa duração;
  verifique que faixa se aplica em vez de recorrer por defeito a 3,5% em todo o período.
- **Tratar a taxa de desconto como eticamente neutra.** A disputa Stern-Nordhaus mostra que a taxa
  codifica um julgamento de valor sobre as gerações futuras; mudá-la muda que programas parecem
  justificados, pelo que deve ser declarada e defendida, não escondida num valor padrão de folha de
  cálculo.
- **Confundir a taxa de desconto social com um custo de capital privado.** Os custos de empréstimo do
  governo e as taxas mínimas do setor privado são conceitos diferentes da taxa social derivada de
  Ramsey, e substituir uma pela outra numa avaliação pública tipicamente distorce o resultado na
  direção de favorecer retornos de curto prazo.
- **Descontar fluxos de caixa reais e nominais de forma inconsistente.** A taxa do Green Book é uma
  taxa real (ajustada pela inflação); descontar fluxos de caixa nominais com ela subestima
  materialmente os valores presentes.

## Fontes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
