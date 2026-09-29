# Valor Público

Valor público é o valor que um governo ou uma organização do setor social cria para os cidadãos
coletivamente — não apenas os produtos que gera ou o dinheiro que gasta, mas se a sociedade está
melhor porque a organização existe e agiu como agiu. O "triângulo estratégico" de Mark Moore, de
1995, é o teste padrão: uma iniciativa pública só se justifica quando é *legítima e apoiada*,
*substancialmente valiosa* e *operacionalmente executável*, as três condições ao mesmo tempo.

## Por que isso importa

O valor no setor privado é relativamente fácil de precificar: receita menos custo, arbitrado por
clientes que podem simplesmente ir embora. O valor público não tem um sinal de mercado equivalente.
Um serviço prisional, uma autoridade fiscal e uma equipa de proteção de crianças produzem coisas que
os cidadãos não podem simplesmente recusar comprar, e o "cliente" (o contribuinte, o infrator, a
criança) muitas vezes não é a mesma pessoa que o mandante político que autoriza o orçamento. A obra
de Moore, *Creating Public Value: Strategic Management in Government* (Harvard University Press,
1995), fornece a disciplina que falta: um gestor deve ser capaz de afirmar (1) que valor público a
sua iniciativa cria, (2) de onde vem a sua legitimidade e o financiamento para a prosseguir — um
ministro, uma câmara municipal, um mandato, uma subvenção — e (3) se a sua organização consegue de
facto entregá-la com as pessoas, a tecnologia e os processos disponíveis. Um programa que pontua bem
em apenas uma ou duas das três vertentes do triângulo ainda não está justificado, por bem-intencionado
que seja.

Isto importa na prática porque a maioria das falhas de software no setor público não são falhas
tecnológicas. Um sistema pode ser tecnicamente excelente e operacionalmente executável e, ainda
assim, falhar porque ninguém no ambiente legitimador — ministros, comités de supervisão, o público —
realmente queria aquilo que o sistema otimiza. O serviço digital Universal Credit e o National
Programme for IT do NHS são ambos citados na literatura de administração pública do Reino Unido como
casos em que as vertentes operacional e de legitimidade do triângulo estavam desalinhadas com a
vertente da missão.

## A matemática

Valor público é um enquadramento, não uma fórmula, mas estrutura casos de investimento de outro modo
vagos em três perguntas testáveis:

```
Teste do triângulo estratégico — avançar apenas se as três condições se verificarem:

1. Legitimidade e apoio: Quem autorizou isto, e o ambiente autorizador
   (legislatura, ministro, câmara municipal, conselho, opinião pública) continua
   a apoiá-lo à medida que os recursos são comprometidos?

2. Valor público: Que bem específico e descritível isto produz para os
   cidadãos ou a sociedade — segurança, saúde, oportunidade, confiança,
   justiça — e para quem?

3. Capacidade operacional: A organização consegue efetivamente entregá-lo com
   o pessoal, a tecnologia, os parceiros e a autoridade legal atuais — ou
   um plano credível para os obter?
```

Uma iniciativa fraca tipicamente falha em pelo menos uma vertente: tecnicamente executável mas sem
mandato (um projeto-piloto de partilha de dados que ninguém aprovou); popular mas não executável (um
serviço digital prometido sem capacidade de engenharia); ou autorizada e executável mas vazia de
valor (um painel que ninguém usa).

## Exemplo prático

**Autarquia local**: uma equipa digital de uma câmara municipal propõe uma ferramenta de triagem por
IA para pedidos de subsídio de habitação.

- *Legitimidade*: o executivo da câmara aprovou uma estratégia "digital primeiro", mas os membros
  eleitos responsáveis pela segurança social não aprovaram especificamente a tomada de decisão
  automatizada — uma lacuna, não uma autorização.
- *Valor público*: o processamento mais rápido (benefício alegado: de 10 dias para 2 dias) só é valor
  real se os requerentes não forem indevidamente recusados; a afirmação de valor deve incluir a
  precisão, não apenas a velocidade.
- *Capacidade operacional*: a câmara tem apenas um cientista de dados e nenhum processo de
  monitorização de modelos, pelo que o prazo de 2 dias alegado não é atualmente executável com a
  taxa de erro declarada.

Duas das três vertentes falham. O enquadramento de Moore diz: não avançar tal como definido —
primeiro garantir autorização explícita para decisões automatizadas e construir capacidade de
monitorização, ou o "valor público" alegado no caso de negócio é fictício.

**Governo central**: o serviço de declaração online de uma autoridade fiscal tem forte legitimidade
(mandato estatutário) e forte capacidade operacional (uma equipa existente entrega com fiabilidade)
mas valor público fraco se a adesão for baixa porque os excluídos digitalmente — ver
[inclusão digital](../digital-inclusion/) — são empurrados para um canal que não conseguem usar. O
triângulo expõe aquilo que um painel focado apenas na entrega esconderia.

## Ligação com a engenharia de software

Valor público é o conceito guarda-chuva sob o qual todo este repositório se situa:
[valor pelo dinheiro](../value-for-money/) fornece o teste de economia/eficiência/eficácia para saber
se os recursos foram bem utilizados; [custo de oportunidade na despesa pública](../opportunity-cost-in-public-spending/)
precifica o que mais o dinheiro poderia ter feito; e
[adicionalidade e perda seca](../additionality-and-deadweight/),
[deslocamento e atribuição](../displacement-and-attribution/) e
[análise contrafactual](../counterfactual-analysis/) testam em conjunto se o valor alegado é real e
não presumido. Para engenheiros, o triângulo estratégico é um pré-mortem útil para qualquer decisão
de produto no setor público:

- Antes de definir o âmbito de uma funcionalidade, pergunte quem a autorizou e se essa autorização
  ainda se mantém — uma funcionalidade construída para um ministro que entretanto saiu pode ter
  perdido silenciosamente a sua vertente de legitimidade.
- Trate "conseguimos construí-lo" e "devemos construí-lo" como perguntas genuinamente separadas; a
  capacidade de engenharia responde apenas à terceira vertente do triângulo.
- Os documentos de requisitos de produto para serviços públicos devem declarar explicitamente a
  afirmação de valor público, não apenas a história de utilizador, porque valor para o utilizador e
  valor público nem sempre são a mesma coisa (ver
  [resultados vs. produtos](../outcomes-vs-outputs/)).

## Armadilhas

- **Tratar a capacidade operacional como justificação suficiente.** "Conseguimos construí-lo" responde
  apenas a uma vertente do triângulo; equipas com forte capacidade de entrega frequentemente lançam
  coisas que ninguém autorizou querer e que não criam nenhum bem público descritível.
- **Confundir legitimidade com legalidade.** Um programa pode ser lícito e, ainda assim, não ter o
  apoio político e público necessário para o sustentar durante uma fase de entrega difícil; a
  cobertura legal não é o mesmo que um mandato.
- **Presumir que o valor público é o que o departamento comissionador diz que é.** O modelo de Moore
  exige que a afirmação de valor seja testável face aos interesses reais dos cidadãos, não apenas
  afirmada pelo financiador — caso contrário, o enquadramento resume-se a uma autocertificação.

## Fontes

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
