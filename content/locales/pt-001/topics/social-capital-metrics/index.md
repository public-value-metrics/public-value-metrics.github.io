# Métricas de Capital Social

As métricas de capital social quantificam as redes, a confiança e a participação cívica que
permitem que comunidades e instituições funcionem eficientemente — o "tecido conectivo" que não tem
linha em nenhum balanço mas que visivelmente reduz o custo e a fricção quando presente, e
visivelmente os eleva quando ausente. O enquadramento moderno vem de "Bowling Alone" (2000) de Robert
Putnam, que distinguiu capital de ligação (laços dentro de um grupo semelhante) de capital de
ponte (laços entre grupos diferentes); o Office for National Statistics do Reino Unido construiu
desde então um conjunto de indicadores permanente para o acompanhar nacionalmente.

## Por que isso importa

A alegação empírica central de Putnam — documentada através do declínio da adesão a associações
cívicas, frequência religiosa e participação sindical nos EUA no final do século XX — era que o
capital social prevê resultados que a economia convencional tem dificuldade em explicar: menos
criminalidade, melhor bem-estar infantil, governo local mais eficaz, recuperação económica mais
rápida após choques. O capital de ligação (laços fortes dentro de um grupo coeso) é bom para o apoio
mútuo mas pode calcificar em insularidade; o capital de ponte (laços mais fracos entre grupos
diferentes) é o que tipicamente se correlaciona com o acesso a oportunidades, o fluxo de informação e
a confiança institucional. O ONS levou isto suficientemente a sério para construir um enquadramento
de indicadores nacional — a sua série "Social Capital in the UK"
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
acompanha quatro pilares: relações pessoais, apoio de rede social, envolvimento cívico, e confiança e
normas cooperativas, cada um construído a partir de perguntas de inquérito estabelecidas (Community
Life Survey, Understanding Society). Para os serviços digitais do setor público, o capital social é
duplamente relevante: é tanto um resultado que alguns programas tentam construir (financiamento de
resiliência comunitária, prescrição social) como um dado de entrada que determina quão bem um serviço
será de facto adotado — um serviço lançado numa comunidade de alta confiança e bem interligada
espalhar-se-á por passa-palavra de uma forma que um serviço idêntico numa área de baixa confiança
não conseguirá.

## A matemática

```
Enquadramento de quatro pilares do ONS (indicadores, ilustrativos):

Relações pessoais:            % com alguém em quem confiar numa crise
Apoio de rede social:          % que poderia pedir dinheiro
                                emprestado a amigos/família se
                                necessário
Envolvimento cívico:            % que fez voluntariado ou ação cívica
                                 nos últimos 12 meses
Confiança e normas cooperativas: % que concorda "a maioria das
                                  pessoas é de confiar"

Não é publicada nenhuma pontuação composta única do ONS — os pilares
são reportados separadamente, deliberadamente, porque agregá-los num
único índice esconderia qual pilar específico está fraco.

Divisão de ligação/ponte de Putnam (enquadramento, não uma fórmula):
  capital de ligação ≈ densidade de laços dentro de um grupo
  homogéneo
  capital de ponte ≈ frequência/força de laços entre grupos distintos
```

## Exemplo prático

**Instantâneo de capital social de um bairro**: um inquérito ao estilo Community Life Survey de uma
área local constata que 78% têm alguém em quem confiar numa crise (relações pessoais), 61% poderiam
pedir dinheiro emprestado se necessário (apoio de rede), 24% fizeram voluntariado no ano anterior
(envolvimento cívico), e 41% concordam que "a maioria das pessoas é de confiar" (confiança e normas)
— face a médias nacionais de aproximadamente 85%, 70%, 30% e 45% respetivamente (ilustrativo,
calibrar face ao boletim atual do ONS). A área fica abaixo do índice em todos os pilares mas mais
acentuadamente na confiança (41% vs. 45% nacional, uma diferença de 4 pontos) e no envolvimento
cívico (24% vs. 30%, uma diferença de 6 pontos) — assinalando o envolvimento cívico, não a confiança,
como o maior défice relativo que vale a pena um investimento direcionado (um programa de subvenções
comunitárias, digamos) em vez de uma iniciativa genérica de "construir confiança".

**Ligação vs. ponte, desenho de serviço**: um programa de emprego numa comunidade coesa constata que
as referenciações viajam rapidamente dentro da comunidade (alto capital de ligação: a notícia
espalha-se em dias) mas o programa tem dificuldade em alcançar residentes fora dessa rede (baixo
capital de ponte: a adesão fora da comunidade central é quase zero ao fim de meses). A correção
implicada não é "mais marketing" mas construir deliberadamente laços de ponte — associar-se a
organizações que estão *fora* da rede existente, já que o capital de ligação isoladamente não
consegue resolver um problema de capital de ponte.

## Ligação com a engenharia de software

- As plataformas digitais que canalizam ajuda mútua, voluntariado ou subvenções comunitárias (um
  serviço de "conector local", por exemplo) estão literalmente a construir infraestrutura de capital
  de ponte; a sua métrica de sucesso deve ser a diversidade de rede das ligações feitas, não apenas a
  contagem de transações — ver [governo como plataforma](../government-as-a-platform/) para o padrão
  mais amplo de infraestrutura sobre a qual outros constroem valor.
- Onde a teoria da mudança de um programa visa explicitamente o capital social como resultado (um
  fundo de resiliência comunitária, um serviço de prescrição social), a sua
  [teoria da mudança](../theory-of-change/) e [modelo lógico](../logic-model/) devem nomear o pilar
  específico (confiança, envolvimento cívico, apoio de rede) que esperam mover, em vez de um
  resultado indiferenciado de "construir comunidade" que não pode ser medido face à referência do
  ONS.
- Os indicadores de capital social são uma lente de equidade útil a par do
  [Índice de Privação Múltipla](../index-of-multiple-deprivation/): uma área pode ser pobre em
  rendimento mas socialmente rica, ou vice-versa, e os dois apontam para intervenções muito
  diferentes.

## Armadilhas

- **Colapsar os quatro pilares do ONS numa única pontuação composta** — o ONS deliberadamente não faz
  isto; um único número esconde qual pilar específico está a impulsionar uma leitura baixa, e fazer a
  média mascara uma comunidade que é de alta confiança mas civicamente desengajada face a uma que é o
  inverso.
- **Presumir que o capital social é sempre bom** — o capital de ligação denso num grupo insular pode
  resistir ativamente a instituições externas (incluindo serviços governamentais); a própria análise
  de Putnam trata a ligação e a ponte como bens diferentes com efeitos diferentes, por vezes
  conflituantes.
- **Usar medidas de capital social baseadas em inquérito como uma métrica operacional em tempo
  real** — os inquéritos subjacentes (Community Life Survey, Understanding Society) decorrem
  anualmente ou com menos frequência; trate os dados de capital social como um indicador contextual
  de movimento lento, não algo que um painel de serviço possa atualizar semanalmente.

## Fontes

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
