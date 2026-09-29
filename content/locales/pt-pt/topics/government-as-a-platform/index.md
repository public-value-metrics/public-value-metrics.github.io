# Governo como Plataforma (GaaP)

Governo como Plataforma é a estratégia de construir componentes partilhados e reutilizáveis — um
serviço de notificações, um serviço de pagamentos, um serviço de identidade — uma vez, de forma
centralizada, para que centenas de serviços governamentais individuais os consumam em vez de cada um
construir o seu próprio. Reenquadra a infraestrutura digital pública como um problema de economia de
plataforma: o valor não está em nenhuma integração isolada, está no custo marginal da *próxima*
equipa que a adota tender para zero.

## Por que isso importa

O GDS estabeleceu formalmente a estratégia na sua publicação de 2015 "Government as a Platform",
argumentando que o governo tinha estado a construir as mesmas capacidades — receção de pagamentos,
notificação de utilizadores, verificação de identidade, procura de moradas — separadamente serviço
após serviço, cada um a carregar a sua própria contratação pública, avaliação de segurança e encargo
de apoio contínuo. A alternativa era um pequeno número de plataformas partilhadas, construídas a um
padrão elevado uma vez e reutilizadas em todo o lado: o GOV.UK Notify para enviar e-mails, mensagens
de texto e cartas, o GOV.UK Pay para receber pagamentos online, e o GOV.UK One Login (sucessor do
anterior programa de identidade GOV.UK Verify) para verificação de identidade. A escala que estas
plataformas alcançaram é a evidência mais clara de que a estratégia funcionou: o GOV.UK Pay já
processou mais de £10 mil milhões em transações em cerca de 1.800 serviços individuais — e onde
demorou aproximadamente quatro anos a processar o seu primeiro £1 mil milhão, agora processa esse
valor em cerca de cinco meses — enquanto o GOV.UK Notify enviou mais de 9 mil milhões de mensagens em
nome de mais de 1.500 organizações governamentais. Cada um desses serviços adotantes evitou construir,
proteger e manter a sua própria porta de pagamento ou pipeline de mensagens.

## A matemática

```
Custo de construção por serviço (sem plataforma) = N serviços ×
  custo de construir, avaliar a segurança e operar um sistema de
  pagamento/notificação/identidade

Custo da plataforma = custo fixo de construção da plataforma
              + custo marginal por serviço adotante (integração,
                configuração, apoio contínuo da equipa de plataforma)

A reutilização atinge o ponto de equilíbrio quando:
  custo de construção da plataforma < N × (custo de construção por
  serviço − custo marginal de integração)

Para uma plataforma madura, o custo marginal por adotante adicional
aproxima-se apenas da taxa de transação/mensagem — o custo fixo é
amortizado por todo o património governamental, não pelo orçamento
de um único departamento, razão pela qual os componentes GaaP são
geralmente financiados centralmente em vez de cobrados a custo total
aos primeiros adotantes.
```

## Exemplo prático

**Autarquia local a adotar o GOV.UK Pay em vez de construir uma porta de pagamento**:

```
Estimativa de construção própria:
  Trabalho de conformidade PCI-DSS + integração + manutenção contínua
  ≈ £85.000 de construção + £22.000/ano de manutenção

Adoção do GOV.UK Pay:
  Esforço de integração ≈ £12.000 (tempo de programador)
  Taxas de transação: os pagamentos por cartão de governo para
  cidadão são tipicamente cobrados a uma pequena percentagem + taxa
  fixa por transação, sem encargo separado de PCI-DSS suportado pelo
  conselho
  ≈ £12.000 pontuais, custo contínuo variável com o volume, não fixo

Poupança no primeiro ano ≈ £85.000 − £12.000 = £73.000, antes de
contar a manutenção evitada de £22.000/ano e o risco de conformidade
evitado de sequer manter dados de cartão num sistema gerido pelo
conselho — esta segunda categoria é o valor de segurança abordado em
public-sector-cybersecurity-value.
```

Multiplicar essa poupança de £73.000 pelos cerca de 1.800 serviços que agora usam o GOV.UK Pay, e o
custo de construção agregado evitado em todo o governo situa-se nas centenas de milhões — é a
economia de plataforma, não qualquer integração isolada, onde o valor da estratégia efetivamente
reside.

## Ligação com a engenharia de software

Governo como Plataforma é um argumento direto para
[construir vs. comprar no governo](../build-vs-buy-in-government/): quando existe um componente
partilhado, avaliado e bem gerido, construir um equivalente à medida raramente é a melhor escolha de
[valor pelo dinheiro](../value-for-money/), e falha o ponto 13 do
[padrão de serviço digital](../digital-service-standard/) ("usar e contribuir para normas abertas,
componentes e padrões comuns") quase por definição. Também muda a forma do
[custo total de propriedade em TI governamental](../total-cost-of-ownership-in-government-it/): a
adoção de plataforma troca uma grande linha de capital e manutenção por um custo operacional menor,
ligado ao uso, que é mais fácil de prever e mais fácil de desfinanciar se um serviço for
descontinuado. A reutilização aberta de componentes tem um primo no
[valor dos dados abertos](../open-data-value/) — ambas são estratégias para tratar algo que o governo
produz uma vez como infraestrutura partilhada em vez de ativo departamental.

## Armadilhas

- **Reconstrução à sombra**: as equipas constroem discretamente a sua própria integração de pagamento
  ou notificação porque o processo de integração da plataforma é mais lento do que fazê-lo elas
  próprias — um problema de atrito de governação, não de tecnologia, e que corrói silenciosamente a
  economia de reutilização de que toda a estratégia depende.
- **Subfinanciar a equipa de plataforma face ao valor que cria**: o valor acumula-se nos departamentos
  consumidores enquanto o custo fica com a equipa de plataforma, criando um risco crónico de
  subinvestimento a menos que o financiamento seja centralizado e protegido — uma versão da tragédia
  dos comuns.
- **Medir o sucesso da plataforma apenas pelo uso**: os números de adoção (serviços integrados,
  mensagens enviadas) são um indicador avançado, não prova de valor; o teste real é a aritmética de
  custo de construção evitado e risco evitado acima.
- **Tratar "plataforma" como sinónimo de "monólito"**: os componentes GaaP têm sucesso porque cada um
  faz bem uma coisa, com uma interface estreita e estável — agrupar capacidades não relacionadas numa
  "plataforma" recria o problema da construção à medida a uma escala diferente.

## Fontes

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
