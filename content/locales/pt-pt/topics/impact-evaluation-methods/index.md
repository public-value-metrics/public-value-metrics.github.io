# Métodos de Avaliação de Impacto

Os métodos de avaliação de impacto são os desenhos estatísticos e experimentais usados para estimar
o que uma política ou programa de facto causou, distinto do que teria acontecido de qualquer forma —
os ensaios controlados aleatorizados (RCTs), as diferenças-em-diferenças, o emparelhamento por
pontuação de propensão e o desenho de descontinuidade de regressão são os quatro mais comummente
usados na política pública do Reino Unido. Existem porque a maioria das intervenções governamentais
não pode ser testada em laboratório: não se pode aleatorizar que cidade recebe uma nova rota de
autocarro da mesma forma que se pode aleatorizar que doente recebe um medicamento, pelo que estes
métodos emprestam a mesma lógica causal sem exigir sempre designação aleatória.

## Por que isso importa

O Magenta Book do HM Treasury, Anexo A sobre métodos quase-experimentais, é a orientação canónica do
governo do Reino Unido para escolher entre estes desenhos, e organismos como a Education Endowment
Foundation e o What Works Centre for Local Economic Growth institucionalizam uma hierarquia de
evidência construída em torno deles — RCTs onde a aleatorização é viável e ética, desenhos
quase-experimentais onde não é. A escolha do método não é uma reflexão técnica tardia: determina se
uma avaliação consegue responder a "isto foi causado pelo programa?" ou apenas a "isto aconteceu
depois de o programa começar?", que é a mesma pergunta que a
[análise contrafactual](../counterfactual-analysis/) é construída para forçar os profissionais a
colocar antes de qualquer avaliação ser encomendada.

## A matemática

```
RCT:
  Impacto = média(resultado | grupo de tratamento) − média(resultado
            | grupo de controlo)
  (válido porque a atribuição ao tratamento é aleatória)

Diferenças-em-diferenças (DiD):
  Impacto = [resultado_depois(tratado) − resultado_antes(tratado)]
         − [resultado_depois(controlo) − resultado_antes(controlo)]
  (exige um pressuposto de "tendências paralelas": o tratado e o
   controlo teriam evoluído em conjunto na ausência da intervenção)

Emparelhamento por pontuação de propensão (PSM):
  1. Estimar P(tratamento = 1 | covariáveis X) para cada unidade →
     pontuação de propensão
  2. Emparelhar unidades tratadas com unidades não tratadas com
     pontuações de propensão semelhantes
  3. Impacto = média(resultado | tratado) − média(resultado |
     controlo emparelhado)

Desenho de descontinuidade de regressão (RDD):
  Impacto = salto no resultado observado no limiar de elegibilidade,
            comparando unidades mesmo acima vs. mesmo abaixo do corte
```

## Exemplo prático

**Autarquia local (diferenças-em-diferenças para um programa de famílias em dificuldade)**: o
resultado é a assiduidade escolar. A área tratada passa de 84% para 89% de assiduidade (+5 pontos
percentuais) durante o período do programa; uma área comparável mas não tratada passa de 85% para
87% (+2 pontos percentuais) no mesmo período. Estimativa de impacto DiD: 5 − 2 = +3 pontos
percentuais atribuíveis ao programa. Aplicado a uma coorte de 2.000 alunos na área tratada, isto é
consistente com aproximadamente 60 alunos adicionais (3% × 2.000) a alcançar a categoria de
assiduidade mais elevada, uma extrapolação que deve ser reportada com a sua ressalva de tendências
paralelas, não como uma contagem precisa.

**Instituição de solidariedade (emparelhamento por pontuação de propensão para uma instituição de
empregabilidade)**: 300 participantes do programa são emparelhados com 300 indivíduos de um conjunto
de dados administrativo maior, usando pontuações de propensão construídas a partir da idade, histórico
de emprego anterior e nível de qualificação. Taxa de emprego aos doze meses: grupo tratado
emparelhado 46%, grupo de comparação emparelhado 33%. Estimativa de impacto PSM: 46% − 33% = +13
pontos percentuais atribuíveis ao programa, condicional a não existir um fator de confusão não
observado (como a motivação) a impulsionar tanto a participação como o resultado.

## Ligação com a engenharia de software

Se algum destes desenhos é viável mais tarde depende fortemente de decisões de engenharia de dados
tomadas cedo. O RDD precisa de uma variável de execução registada com precisão e de um corte de
elegibilidade genuinamente limpo; o DiD precisa de dados em painel comparáveis ao longo do tempo,
tanto para áreas tratadas como de comparação, o que significa junções consistentes entre sistemas e
anos; o PSM precisa de dados ricos de covariáveis de referência captados antes do tratamento, não
reconstruídos posteriormente. Um modelo de dados desenhado a par de uma
[teoria da mudança](../theory-of-change/) e de um [modelo lógico](../logic-model/) desde o início —
captando covariáveis de referência, datas e registos elegíveis para grupo de comparação — é o que
torna possível mais tarde uma avaliação de impacto rigorosa, em vez de uma corrida dispendiosa a
posteriori. Ver
[avaliação de impacto vs. avaliação de processo](../impact-evaluation-vs-process-evaluation/) para a
pergunta complementar que estes métodos não respondem por si sós.

## Armadilhas

- **Forçar um RCT quando inviável ou antiético**, ou inversamente nunca considerar um desenho
  quase-experimental quando uma oportunidade genuína para um — um corte de política, uma
  implementação faseada — estava disponível e não foi usada.
- **Ignorar o pressuposto de tendências paralelas no DiD.** Se a área de comparação já estava a
  divergir da área tratada antes da intervenção, a comparação de dois pontos está contaminada;
  verifique as tendências pré-intervenção, não apenas o antes/depois.
- **Emparelhar apenas em covariáveis observadas no PSM.** A seleção não observada, como a motivação
  do participante, pode enviesar a estimativa mesmo quando as covariáveis observadas estão bem
  equilibradas.
- **Manipulação da variável de execução no RDD.** Se as pessoas conseguirem influenciar a sua
  pontuação para cair mesmo dentro de um limiar de elegibilidade, a descontinuidade deixa de isolar
  um efeito causal.

## Fontes

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
