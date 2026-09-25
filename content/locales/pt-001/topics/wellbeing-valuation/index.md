# Valorização do Bem-Estar (WELLBY)

A valorização do bem-estar precifica o efeito de uma política diretamente em termos de satisfação
com a vida, usando o WELLBY (ano de vida ajustado pelo bem-estar) como a sua unidade — um WELLBY
equivale a uma mudança de um ponto numa escala de satisfação com a vida de 0 a 10, sustentada durante
um ano. É a alternativa oficialmente sancionada pelo HM Treasury à monetização de todos os benefícios
através da disponibilidade para pagar.

## Por que isso importa

O "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) do HM
Treasury trouxe formalmente os dados de bem-estar subjetivo para a avaliação do governo central,
dando aos analistas uma via para valorizar resultados — ligação social, saúde mental, segurança,
participação cívica — que os métodos de [preferência declarada](../stated-preference-valuation/) e de
[preferência revelada](../revealed-preference-valuation/) têm dificuldade em precificar de forma
convincente, porque as pessoas são frequentemente más previsoras de quanto um bem afetará realmente a
sua satisfação com a vida. A orientação, desenvolvida em conjunto com o What Works Centre for
Wellbeing, define um valor monetário recomendado por WELLBY — £13.000 (preços de 2021, revistos
periodicamente) — derivado da relação observada em grandes inquéritos de bem-estar (principalmente o
Annual Population Survey do ONS, que coloca as quatro perguntas de bem-estar ONS4 desde 2011) entre
rendimento e satisfação com a vida, dando aos analistas uma taxa de conversão de volta para libras
quando é necessária uma comparação monetizada face a outras avaliações do Green Book.

O método importa porque inverte a lógica de valorização habitual: em vez de perguntar quanto as
pessoas pagariam por um resultado (preferência declarada) ou inferir o valor a partir de uma
transação de mercado relacionada (preferência revelada), mede diretamente o efeito do resultado na
satisfação com a vida reportada, contornando a lacuna entre o que as pessoas dizem que querem e o que
de facto as torna melhor. Esta é também a sua limitação central — a satisfação com a vida
autorreportada é afetada por efeitos de adaptação e de enquadramento que um profissional cuidadoso
tem de controlar.

## A matemática

```
WELLBY = 1 ponto de satisfação com a vida (escala 0–10) sustentado para
         1 pessoa durante 1 ano

Total de WELLBYs de uma política =
  Σ (mudança na pontuação de satisfação com a vida) × (número de pessoas
    afetadas) × (duração em anos, descontada à taxa de desconto social)

Valor monetizado = Total de WELLBYs × valor por WELLBY
  (valor recomendado pelo HM Treasury: £13.000 por WELLBY, preços de 2021,
   sujeito a revisão periódica — verificar a orientação atual antes de usar)
```

Isto difere do [ano de vida ajustado pelo bem-estar](../wellbeing-adjusted-life-years/) da economia
da saúde, que é tipicamente ancorado em escalas de qualidade de vida relacionadas com a saúde (EQ-5D
e semelhantes) em vez da satisfação geral com a vida; os dois estão relacionados mas não são
intercambiáveis, e as avaliações do Green Book devem ser explícitas sobre qual a escala e o método de
recolha subjacentes a um valor de WELLBY reportado.

## Exemplo prático

**Autarquia**: um município gere um esquema comunitário de acompanhamento para residentes idosos
isolados, servindo 400 pessoas. Um inquérito de bem-estar antes/depois usando a pergunta de
satisfação com a vida ONS4 mostra que a pontuação média dos participantes sobe de 5,8 para 6,5 — um
ganho de 0,7 pontos — sustentado durante a duração de 2 anos financiada do programa.

```
WELLBYs gerados = 400 pessoas × 0,7 pontos × 2 anos = 560 WELLBYs
Valor monetizado = 560 × £13.000 = £7,28M
Custo do programa = £450.000 ao longo de 2 anos

Rácio benefício-custo ≈ £7,28M / £0,45M ≈ 16:1
```

Um rácio tão alto deveria suscitar escrutínio, não celebração — a orientação sobre bem-estar do Green
Book alerta explicitamente contra tomar ganhos autorreportados de amostra pequena ao valor facial sem
verificar efeitos de seleção (só aderiram ao esquema os residentes mais sociáveis, mais propensos a
melhorar?) e sem um grupo de comparação; uma avaliação bem concebida descontaria uma mudança
contrafactual observada em não participantes, ver
[análise contrafactual](../counterfactual-analysis/).

**Governo nacional**: comparar dois programas de emprego usando WELLBYs em vez de apenas rendimentos
capta que o desemprego acarreta um custo de bem-estar para além da perda de rendimento — a
investigação de bem-estar no Reino Unido encontra consistentemente que o desemprego reduz a satisfação
com a vida mais do que a perda de rendimento por si só preveria, devido aos efeitos não pecuniários
de perder estrutura, propósito e contacto social. Um programa avaliado apenas pelo ganho de
rendimento subestimaria o seu valor face a um avaliado também por WELLBYs.

## Ligação com a engenharia de software

A valorização do bem-estar raramente chega diretamente às equipas de engenharia, mas molda o que se
define como "sucesso" para produtos do setor social e de serviços públicos — uma plataforma digital
de acompanhamento, uma ferramenta de triagem de saúde mental, ou uma plataforma comunitária para
residentes isolados deveriam esperar que o seu impacto venha eventualmente a ser medido desta forma,
o que significa que a analítica de produto precisa de captar *quem* é alcançado e *durante quanto
tempo*, não apenas contagens de utilização. Construa instrumentação de inquérito de bem-estar (ONS4
ou equivalentes validados) na avaliação de serviço desde o início, em vez de a acrescentar
retroativamente; ajustar retroativamente uma linha de base de bem-estar depois de um serviço ter sido
lançado perde inteiramente a comparação antes/depois. Ver
[resultados versus produtos](../outcomes-vs-outputs/) e
[métodos de avaliação de impacto](../impact-evaluation-methods/).

## Armadilhas

- **Nenhum contrafactual ou grupo de comparação.** Um ganho de bem-estar antes/depois sem controlo
  para o que teria acontecido de qualquer forma sobrestima o efeito do programa; ver
  [análise contrafactual](../counterfactual-analysis/) e
  [adicionalidade e peso morto](../additionality-and-deadweight/).
- **Amostras pequenas e autosselecionadas.** Os inquéritos de bem-estar a participantes de programas
  que aderiram voluntariamente são propensos a viés de seleção — as pessoas que aderiram e ficaram já
  estavam plausivelmente numa tendência ascendente.
- **Tratar a conversão de £ por WELLBY como precisa.** O valor monetizado é uma convenção de política
  derivada de regressões rendimento-bem-estar, não um preço de mercado; use-o para comparabilidade
  entre avaliações do Green Book, não como uma afirmação sobre o que o bem-estar "vale".
- **Confundir WELLBYs com QALYs relacionados com a saúde.** Os dois medem construtos diferentes em
  escalas diferentes; ver
  [anos de vida ajustados pelo bem-estar](../wellbeing-adjusted-life-years/) para a variante da
  economia da saúde, e não os faça a média um do outro.

## Fontes

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
