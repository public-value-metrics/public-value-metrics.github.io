# Custo por Transação

Custo por transação é a métrica de destaque de economia unitária para um serviço digital do governo:
o custo total de entregar um canal, dividido pelo número de transações concluídas através dele. Foi o
valor emblemático da antiga GOV.UK Performance Platform, e é o número que financiou uma década de
investimento em "digital por defeito" — razão exata pela qual é também a métrica mais propensa a ser
manipulada.

## Por que isso importa

O Digital Efficiency Report de 2012 do Cabinet Office colocou a comparação de custo por canal em
termos que perduraram: constatou-se que as transações digitais custavam cerca de 20 vezes menos do
que por telefone e cerca de 50 vezes menos do que presencialmente, com valores ilustrativos de
governo local de aproximadamente £0,15 por transação na web contra £2,83 por telefone e £8,62
presencialmente. Essa única comparação tornou-se a justificação para redesenhar os 25 serviços
exemplares nomeados na Government Digital Strategy, e para todos os casos de negócio departamentais
que desde então citaram poupanças de mudança de canal. O valor é genuinamente útil como sinal de
ordem de grandeza, mas o rácio depende inteiramente do que é contado em cada lado: um custo justo do
canal telefónico inclui o pessoal do centro de contacto, o contrato de telefonia, a formação e as
instalações; um custo digital justo inclui alojamento, salários contínuos da equipa de produto,
tempo do serviço de apoio para percursos falhados, e o canal de digital assistido exigido pelo ponto
5 do [padrão de serviço digital](../digital-service-standard/). Retirar o suficiente destes do lado
digital faz qualquer serviço parecer barato.

## A matemática

```
Custo por transação = custo total alocado ao canal / transações
                       concluídas

O custo total alocado ao canal deve incluir:
  + alojamento e infraestrutura
  + custo da equipa de produto/engenharia/apoio (amortizado)
  + custo de conteúdo e desenho de serviço (amortizado)
  + custo de apoio de digital assistido/acessibilidade
  + custo da procura por falha (utilizadores que falham no digital e
    recorrem ao telefone)
  − o custo de construção pontual é amortizado ao longo da vida útil
    esperada do serviço, não totalmente contabilizado no primeiro ano

O truque contabilístico comum:
  o "custo marginal por transação" (apenas alojamento, uma vez
  construído) é citado como se fosse o "custo médio por transação"
  (custo total, incluindo a equipa que continua a construir e a
  operar). Os dois podem diferir em 10x ou mais para um serviço com
  uma equipa de entrega grande e ativa.
```

## Exemplo prático

**Serviço de renovação de imposto sobre veículos**: 4 milhões de transações/ano.

```
Valor apenas marginal (o truque):
  Apenas alojamento + processamento de pagamentos = £180.000/ano
  Custo por transação = 180.000 / 4.000.000 = £0,045
  → valor de destaque citado num caso de negócio

Valor totalmente carregado (o honesto):
  Alojamento + pagamento                  £180.000
  Equipa de produto/engenharia (8 ETI)    £720.000
  Serviço de apoio (transações falhadas/
    com dúvidas)                          £310.000
  Linha telefónica de digital assistido   £140.000
  Total                                   £1.350.000
  Custo por transação = 1.350.000 / 4.000.000 = £0,3375

O valor totalmente carregado ainda é cerca de 8 vezes mais barato do
que o comparador do canal telefónico de £2,83 do Digital Efficiency
Report — uma poupança real e defensável — mas 7,5 vezes superior ao
valor apenas marginal citado na versão simplificada. Ambos os números
são "verdadeiros"; apenas um é comparável ao custo do canal
telefónico com que está a ser comparado.
```

## Ligação com a engenharia de software

O custo por transação é onde as decisões de arquitetura se tornam um número financeiro: um serviço
que escala automaticamente sem atritos e precisa de pouca intervenção manual reduz este valor ao
longo do tempo; um que gera um elevado volume de tickets de apoio a partir de estados de erro
confusos aumenta-o independentemente da eficiência do alojamento. É a métrica companheira natural do
ponto 10 do [padrão de serviço digital](../digital-service-standard/) ("definir o que é o sucesso, e
publicar dados de desempenho") e de
[padrões de serviço e métricas de transação](../service-standards-and-transaction-metrics/), que
estabelece o conjunto mais completo de KPIs em que este valor se insere. Também alimenta diretamente
os cálculos de [poupanças da mudança de canal](../channel-shift-savings/) e deve ser reconciliado com
o [custo total de propriedade em TI governamental](../total-cost-of-ownership-in-government-it/) para
que os custos indiretos de plataforma e serviços partilhados não sejam silenciosamente omitidos.

## Armadilhas

- **Custo marginal disfarçado de custo médio**: citar o custo apenas de alojamento depois de um
  serviço estar construído, omitindo a equipa contínua que o mantém, itera e apoia — ver o exemplo
  prático acima.
- **Excluir o custo de digital assistido**: um canal não está em conformidade com "digital por
  defeito", e o seu custo real não é captado, se o recurso alternativo por telefone/papel exigido
  pela [inclusão digital](../digital-inclusion/) for custeado separadamente ou ignorado.
- **Ignorar a procura por falha**: transações que começam digitais e falham, gerando de qualquer
  forma uma chamada telefónica ou um formulário em papel, são um custo do canal digital, não do canal
  que apanha a falha.
- **Comparar transações de complexidade diferente entre canais**: as chamadas telefónicas tratam
  desproporcionadamente os casos difíceis (múltiplos dependentes, correção de erros, requerentes
  vulneráveis); comparar um custo médio telefónico com um custo médio digital exagera o rácio, a
  menos que a mistura de transações seja equiparada.

## Fontes

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
