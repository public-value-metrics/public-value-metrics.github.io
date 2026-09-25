# Produtividade da IA no Setor Público

As métricas do que a assistência de IA para programação realmente faz ao resultado da engenharia —
taxas de aceitação de sugestões, ganhos de velocidade em estudos controlados, débito de pull
requests e retenção de código — assentam numa base de evidência genuinamente contraditória mesmo
antes de se acrescentarem as restrições do setor público: a classificação de dados limita que partes
de um património legado uma ferramenta de IA pode sequer tocar, os ciclos de contratação pública
significam que a ferramenta em avaliação está frequentemente uma geração de modelo atrás da
capacidade atual, e os requisitos de credenciação de segurança regulam quem pode usá-la e em quê.

## Por que isso importa

Os dois estudos controlados mais citados apontam em direções opostas. O ensaio controlado
aleatorizado (RCT) de Peng et al. de 2023 sobre o GitHub Copilot verificou que os programadores
concluíam uma tarefa de servidor HTTP de raiz (greenfield) 55,8% mais depressa com o Copilot (1h11m
vs. 2h41m, n=95). O RCT de 2025 da METR verificou que programadores experientes de código aberto a
trabalhar nos *seus próprios repositórios maduros* eram 19% mais lentos com as ferramentas de IA do
início de 2025, ao mesmo tempo que acreditavam ser cerca de 20% mais rápidos. Ambos os estudos são
sólidos; a contradição é o próprio resultado — a eficácia em tarefas de raiz não se transfere para a
eficácia em base de código madura, e grande parte da engenharia governamental é trabalho sobre base
de código madura em patrimónios mais antigos e idiossincráticos do que o repositório comercial
mediano. O Generative AI Framework for HMG (2024,
<https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) do Central Digital and
Data Office estabelece princípios para uma adoção responsável precisamente porque esta base de
evidência não pode simplesmente ser importada de demonstrações de fornecedores; espera-se que os
departamentos avaliem as ferramentas face aos seus próprios requisitos de tratamento de dados e
segurança antes da implementação.

## A matemática

```
Taxa de aceitação  = sugestões aceites / sugestões mostradas
Taxa de retenção   = código de IA que sobrevive até à integração / código de IA aceite
Ganho de velocidade = (t_controlo − t_IA) / t_controlo  (APENAS de comparação controlada)
Delta de débito    = Δ PRs integrados/programador/semana

Fator de cobertura no setor público:
  quota de base de código elegível = LOC em sistemas onde a
    classificação (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) permite
    sequer usar a ferramenta

Modelo de valor = programadores × cobertura-elegível × tempo poupado
             × taxa carregada × utilização
             — cada termo precisa de medição local, e o fator de
             cobertura não tem equivalente no setor privado
```

## Exemplo prático

Um departamento governamental testa um assistente de IA para programação em 300 programadores, mas
apenas os sistemas classificados como OFFICIAL são elegíveis para o uso da ferramenta — 70% do
património por alocação de efetivos, ficando os restantes 30% (sistemas de classificação mais
elevada) inteiramente excluídos.

```
Programadores elegíveis = 300 × 0,70 = 210

Resultado do piloto: tempo poupado autorreportado de 40 min/dia;
              poupança medida ao nível da tarefa de 12 min/dia (0,2h)
              — o desvio de perceção da METR, reproduzido na prática

Valorizar o valor MEDIDO:
  210 × 0,2h × 220 dias × £55/h carregado × 0,6 de utilização
  = 210 × 44 horas × £55 × 0,6
  = 9.240 horas × £55 × 0,6 ≈ £304.920/ano de capacidade

Custo: 210 licenças × £22/mês × 12 ≈ £55.440/ano

Rácio de capacidade líquida ≈ 304.920 / 55.440 ≈ 5,5:1
```

Financiável a cerca de um terço do benefício autorreportado, e só depois de aplicar o teto de
classificação — licenciar os 300 programadores com base no valor autorreportado teria exagerado
tanto a população elegível como a poupança real.

## Ligação com a engenharia de software

As disciplinas diretamente transferíveis: realizar **ensaios pragmáticos** sobre a base de código e
os tickets reais do próprio departamento, não em tarefas de demonstração do fornecedor, porque o
resultado da METR é especificamente uma conclusão sobre base de código madura; tratar a **taxa de
aceitação como um indicador indireto (proxy), não como um resultado** — aceitação elevada com
retenção baixa é o equivalente, em software, ao sobrediagnóstico; associar cada alegação de débito a
uma **verificação de estabilidade**, uma vez que o relatório de 2025 da DORA constatou que a adoção
de IA aumenta o débito mas degrada a estabilidade das alterações — exatamente a análise de benefício
líquido para a qual as [métricas DORA para o valor público](../dora-metrics-for-public-value/) foram
concebidas; e ser honesto quanto ao facto de as ferramentas de IA poderem alargar, não estreitar, o
fosso em patrimónios legados com muita
[dívida técnica](../technical-debt-as-public-value-erosion/), porque os dados de treino
sub-representam o COBOL, as linguagens de 4ª geração e o código de mainframe à medida, comuns no
governo, pelo que a qualidade das sugestões é frequentemente mais fraca exatamente nos sistemas que
mais precisam de ajuda. Isto situa-se ao lado da questão mais ampla do
[valor da IA no governo](../ai-in-government-value/) e deve ser regido pelas mesmas restrições de
[valor da cibersegurança no setor público](../public-sector-cybersecurity-value/) que limitam onde
qualquer ferramenta de terceiros pode sequer ver código ou dados.

## Armadilhas

- **Transplante de estudos de fornecedores**: aplicar ganhos de velocidade de RCTs em tarefas de raiz
  a trabalho de integração em sistemas legados é precisamente o erro que o estudo da METR expôs.
- **Autorrelato como medição**: um desvio de 20 pontos percentuais entre perceção e medição é o maior
  enviesamento conhecido nesta literatura, e infla os casos de negócio que se baseiam apenas em
  inquéritos a programadores.
- **Ignorar o teto de classificação**: modelos de licenciamento e de valor construídos sobre o total
  de efetivos, em vez do subconjunto elegível e com credenciação de classificação, exageram
  sistematicamente tanto a relação custo-eficácia como a cobertura alcançável.
- **Atraso no ciclo de contratação pública**: a contratação de ferramentas baseada em quadros de
  referência (frameworks) pode significar que um projeto-piloto avalia uma geração de modelo que
  está 12–18 meses atrás do que está publicamente disponível até à implementação total, tornando a
  suposição de ganho de velocidade do caso de negócio original desatualizada antes do lançamento.

## Fontes

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
