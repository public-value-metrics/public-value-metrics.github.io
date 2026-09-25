# Valor da IA no Governo

O valor da IA no governo é a exigência de que um sistema de IA utilizado num serviço público supere
o mesmo patamar de valor pelo dinheiro e valor público que qualquer outra decisão de despesa — nem
um patamar mais baixo por ser novidade, nem um mais alto por ser temido. É a pergunta a que uma
equipa de entrega deve conseguir responder antes, não depois, de uma funcionalidade de IA entrar em
produção: isto produz mais valor do que custa, uma vez contabilizados com honestidade a garantia, a
supervisão e o risco?

## Por que isso importa

O Central Digital and Data Office (CDDO) do Reino Unido publicou o seu Generative AI Framework for
Government em 2024, construído sobre orientações interinas anteriores de junho de 2023, estruturado
em torno de dez princípios que cobrem o que é a IA generativa, as suas implicações éticas, a
segurança das ferramentas, os controlos de garantia de qualidade, a gestão do ciclo de vida completo
da IA generativa, a identificação de casos de uso genuínos, a colaboração intergovernamental, a
transparência, as competências e a governação. A insistência do enquadramento num "controlo humano
significativo" e na gestão do ciclo de vida completo existe porque os casos de negócio de projetos de
IA têm um modo de falha específico que outras despesas de TI não têm: o número de produtividade de
destaque de um projeto-piloto é fácil de produzir e fácil de exagerar, porque é medido antes de se
contabilizar o encargo de verificação, correção e supervisão que a ferramenta cria. Paralelamente ao
enquadramento, o Algorithmic Transparency Recording Standard (ATRS) exige que os organismos públicos
publiquem um registo padronizado — finalidade, dados utilizados, desempenho, testes de equidade,
disposições de supervisão humana — para ferramentas algorítmicas que tenham influência significativa
em decisões sobre indivíduos, o que torna o custo de garantia de um sistema de IA uma questão de
registo público, e não uma estimativa interna que uma equipa possa discretamente ignorar.

## A matemática

A adoção de IA é avaliada como um acréscimo, não um substituto, à avaliação padrão de
[valor pelo dinheiro](../value-for-money/), com os termos específicos da IA tornados explícitos em
vez de dissolvidos num único número de "ganho de produtividade":

```
Valor líquido de um sistema de IA =
    ganho de produtividade (tempo poupado × custo de pessoal carregado)
  − custo de licença/computação
  − custo de verificação e supervisão humana (verificar o resultado da
    IA antes de se agir sobre ele — isto não se reduz a zero mesmo para
    ferramentas maduras)
  − custo de documentação ATRS e monitorização contínua
  − custo ajustado ao risco de dano por erros, enviesamento ou
    alucinação, ponderado por quem suporta esse dano
    (distributional-weighting)

Um valor de produtividade de um projeto-piloto que omita o termo de
supervisão não é comparável a uma referência de custo operacional
normal que já inclua uma revisão humana equivalente — ver
ai-productivity-in-the-public-sector para a disciplina mais completa
de medição de produtividade de onde isto deriva.
```

## Exemplo prático

**Autarquia a usar uma ferramenta de IA generativa para redigir primeiras respostas a pedidos de
informação de rotina sobre o imposto municipal (council tax)**: 25.000 pedidos/ano, anteriormente
tratados inteiramente por gestores de processos a uma média de 14 minutos/pedido, custo de pessoal
carregado de £34/hora.

```
Custo de referência (sem IA):
  25.000 × (14/60) × £34 = £198.333/ano

Alegação de destaque do projeto-piloto: a IA redige uma resposta em
90 segundos, o gestor de processos "apenas revê e envia" — o novo
tempo alegado é 3 minutos
  25.000 × (3/60) × £34 = £42.500/ano
  → poupança alegada de £155.833/ano (parece transformacional)

Valor totalmente carregado, medido após 3 meses em produção em vez
dos casos de teste escolhidos a dedo do projeto-piloto:
  Tempo real de revisão + correção por resposta: 6 minutos (os
  rascunhos precisam de edição real para pedidos complexos ou
  emocionalmente sensíveis)
  25.000 × (6/60) × £34 = £85.000/ano
  Custo de licença/computação: £38.000/ano
  Documentação ATRS e monitorização trimestral de enviesamento/
  qualidade: £14.000/ano
  Custo total = 85.000 + 38.000 + 14.000 = £137.000/ano

Poupança real = 198.333 − 137.000 = £61.333/ano — genuína e que vale
a pena manter, mas bem menos de metade da alegação de destaque do
projeto-piloto, e só foi possível encontrá-la com uma medição honesta
do tempo de supervisão, não a do melhor cenário do piloto.
```

## Ligação com a engenharia de software

É aqui que [produtividade da IA no setor público](../ai-productivity-in-the-public-sector/) e este
tópico se encontram: as equipas de engenharia que constroem funcionalidades de IA em serviços
públicos são responsáveis pela instrumentação que torna possível o "valor real" no exemplo prático —
registar o tempo real de revisão, a distância de edição entre o rascunho e a resposta enviada, e a
taxa de escalonamento, em vez de confiar nas condições de demonstração do projeto-piloto. As
funcionalidades de IA devem ser avaliadas face ao ponto 9 do
[padrão de serviço digital](../digital-service-standard/) (serviço seguro, privacidade do
utilizador) e cruzadas com o [valor da cibersegurança no setor público](../public-sector-cybersecurity-value/)
onde a ferramenta toque em dados de cidadãos, e qualquer sistema de IA com influência significativa
em decisões sobre indivíduos precisa de um registo ATRS antes de poder ser considerado pronto para
avaliação, da mesma forma que um serviço precisa de passar numa avaliação do
[padrão de serviço digital](../digital-service-standard/) antes de entrar em produção.

## Armadilhas

- **Lavagem de IA (AI-washing)**: reclassificar automação baseada em regras já existente como "IA"
  para aceder a financiamento ou atenção reservados à adoção de IA, sem os riscos de precisão ou
  enviesamento que efetivamente justificam o escrutínio adicional do enquadramento.
- **Medir a produtividade do projeto-piloto, não a produtividade em produção**: os projetos-piloto
  funcionam com casos de teste selecionados e revisores empenhados e atentos; a produção funciona com
  a mistura completa e confusa de casos, com revisores que, ao longo do tempo, desenvolvem enviesamento
  de automação e verificam menos os resultados — ambos distorcem o valor honesto do custo de
  supervisão.
- **Ignorar o registo ATRS porque a ferramenta "não é realmente tomada de decisão automatizada"**: o
  limiar do padrão é a influência significativa numa decisão sobre um indivíduo, o que a maioria das
  ferramentas de redação ou triagem de IA voltadas para o cidadão cumpre, mesmo quando um humano
  tecnicamente dá a aprovação final.
- **Ignorar o impacto distributivo dos erros**: a taxa de erro de um sistema de IA, calculada em
  média para todos os utilizadores, pode esconder uma taxa de erro ou de enviesamento muito mais alta
  para grupos específicos; a [ponderação distributiva](../distributional-weighting/) deve ser
  aplicada ao termo de dano ajustado ao risco, não apenas ao valor agregado de precisão.

## Fontes

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
