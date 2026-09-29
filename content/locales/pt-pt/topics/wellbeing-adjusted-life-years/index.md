# Anos de Vida Ajustados pelo Bem-Estar (WELLBY)

Um WELLBY é um ponto adicional de satisfação com a vida, na escala padrão de bem-estar de 0 a 10, para
uma pessoa durante um ano. É o análogo estrutural do QALY usado na economia da saúde — uma unidade
única que permite comparar intervenções cujos resultados não têm mais nada em comum — mas construído
sobre o bem-estar subjetivo em vez de estados clínicos de saúde, e estabelecido no "Wellbeing guidance
for appraisal: supplementary Green Book guidance" (2021) do HM Treasury.

## Por que isso importa

A avaliação custo-benefício precisa de uma unidade comum para comparar uma subvenção a um clube
juvenil com um esquema de segurança rodoviária e com um serviço de saúde mental, nenhum dos quais
partilha uma medida de resultado. A economia da saúde resolveu isto para as intervenções clínicas com
o QALY: um ano de vida ajustado pela qualidade, ponderado de 0 (morto) a 1 (saúde plena). A
orientação sobre bem-estar do HM Treasury estende a mesma lógica à despesa pública fora da saúde,
usando a pergunta harmonizada de satisfação com a vida do ONS ("De um modo geral, quão satisfeito
está com a sua vida atualmente?", respondida de 0 a 10) como a escala de resultado em vez de um índice
de estado de saúde. Um WELLBY de 1 significa a satisfação com a vida de uma pessoa a subir um ponto
inteiro durante um ano (ou, de forma equivalente, a satisfação de dez pessoas a subir 0,1 pontos cada
uma durante um ano — os WELLBYs somam-se ao longo de uma população da mesma forma que os QALYs). A
orientação do HM Treasury define um valor monetário ilustrativo por WELLBY (cerca de £13.000, a preços
de 2019/20) derivado da reconciliação de dados de bem-estar subjetivo com outras abordagens ao valor
de um ano de vida, dando aos avaliadores uma forma de monetizar resultados — redução da solidão, coesão
comunitária, acesso a espaços verdes — que as técnicas de
[valorização do bem-estar](../wellbeing-valuation/) anteriormente só conseguiam descrever, e não
comparar numa base comum com a despesa em saúde ou segurança.

## A matemática

```
WELLBY = Δ satisfação com a vida (escala 0–10) × número de anos em que a
        mudança persiste (somado ao longo de todas as pessoas afetadas)

Benefício de bem-estar monetizado = WELLBYs gerados × valor por WELLBY
                                     (valor de referência do HMT)

cf. QALY = Δ utilidade do estado de saúde (escala 0–1) × anos vividos
           nesse estado
```

A escala de satisfação de 0 a 10 e a escala de utilidade do QALY de 0 a 1 não são intercambiáveis sem
um passo de conversão; a orientação do HM Treasury discute a reconciliação das duas para que, por
exemplo, uma intervenção de saúde avaliada em QALYs e uma intervenção social avaliada em WELLBYs não
sejam silenciosamente contadas em duplicado nem deixadas incomparáveis dentro da mesma
[avaliação do Green Book](../green-book-appraisal/).

## Exemplo prático

**Serviço de combate à solidão de uma autarquia**: um esquema de acompanhamento serve 400 residentes
idosos isolados. Inquéritos de seguimento mostram que a satisfação média com a vida sobe de 5,2 para
6,0 (um ganho de 0,8 pontos), e estima-se que o efeito persista durante 2 anos antes de se dissipar.

```
WELLBYs = 400 pessoas × 0,8 pontos × 2 anos = 640 WELLBYs

Valor monetizado = 640 × £13.000 = £8.320.000
```

Face a um custo anual do programa de £300.000 (£600.000 ao longo de 2 anos), o rácio benefício-custo
é aproximadamente 8.320.000 / 600.000 ≈ **13,9:1** — um valor que pode agora figurar na mesma tabela
de avaliação que o custo por QALY evitado de um esquema de saúde ou as poupanças de tempo de viagem de
um esquema de transportes.

**Instituição de solidariedade, escala menor**: um programa comunitário de artes chega a 50
participantes com um ganho de satisfação medido de 0,3 pontos, durando 1 ano.

```
WELLBYs = 50 × 0,3 × 1 = 15 WELLBYs
Valor monetizado = 15 × £13.000 = £195.000
```

## Ligação com a engenharia de software

- Qualquer serviço voltado para o cidadão que já recolha um item de inquérito de satisfação com a
  vida ou de bem-estar (muitas plataformas de autarquias e de saúde e cuidados fazem-no, seguindo as
  quatro perguntas padrão de bem-estar do ONS) pode calcular WELLBYs diretamente a partir de pipelines
  de dados existentes, em vez de encomendar avaliação económica à medida para cada alteração de
  serviço.
- Os WELLBYs dão às equipas de engenharia que constroem relatórios para o
  [social value act](../social-value-act/) ou para o
  [retorno social sobre o investimento](../social-return-on-investment/) um denominador
  nacionalmente padronizado e endossado pelo HM Treasury, evitando a proliferação de "pontuações de
  impacto" à medida que não podem ser comparadas entre contratos ou fornecedores.
- Como os WELLBYs são aditivos ao longo de pessoas e do tempo, compõem-se de forma limpa no tipo de
  acompanhamento de resultados ao nível populacional usado em sistemas de
  [responsabilização baseada em resultados](../outcomes-based-accountability/) — um painel de serviço
  pode reportar WELLBYs cumulativos gerados por trimestre da mesma forma que um sistema de saúde
  reporta QALYs ganhos.

## Armadilhas

- **Assumir que os ganhos de satisfação autorreportados são inteiramente atribuíveis à intervenção**
  — sem um contrafactual (grupo de comparação ou desenho antes/depois com controlos), não é possível
  separar o ganho de WELLBY das tendências gerais; ver
  [análise contrafactual](../counterfactual-analysis/).
- **Misturar WELLBYs e QALYs num único total sem reconciliação** — a orientação do HM Treasury é
  explícita ao afirmar que os dois usam escalas diferentes e teorias de valor subjacentes diferentes;
  somá-los de forma ingénua conta em duplicado bem-estar sobreposto.
- **Usar o valor monetário de referência sem espírito crítico** — a cifra de £ por WELLBY é uma
  estimativa média nacional com bandas de incerteza reais; a orientação do HM Treasury recomenda
  análise de sensibilidade, e não tratá-la como uma taxa de câmbio fixa.

## Fontes

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
