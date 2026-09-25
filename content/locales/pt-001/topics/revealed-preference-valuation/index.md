# Avaliação por Preferência Revelada

Os métodos de preferência revelada inferem o valor de um bem não mercantil a partir do comportamento
observável num mercado relacionado, em vez de perguntar diretamente às pessoas. A precificação
hedónica e o método do custo de viagem são as duas técnicas de trabalho: ambas partem de uma
transação real e deduzem um preço implícito para a coisa que nunca foi diretamente vendida.

## Por que isso importa

Onde os métodos de [preferência declarada](../stated-preference-valuation/) colocam uma pergunta
hipotética, os métodos de preferência revelada observam aquilo por que as pessoas de facto pagaram,
o que o Green Book trata, tudo o resto constante, como evidência geralmente mais credível, porque não
está sujeita a enviesamento hipotético — os respondentes num estudo hedónico de preços de habitação
genuinamente pagaram o prémio ou desconto que está a ser medido
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Anexo 2). A precificação hedónica decompõe um preço de mercado — tipicamente preços de habitação —
em preços implícitos para cada atributo do bem, permitindo aos analistas isolar, por exemplo, o
prémio de preço que os agregados familiares efetivamente pagam para viver algures mais tranquilo ou
com melhor qualidade do ar, controlando estatisticamente todos os outros atributos que também afetam
o preço da habitação (dimensão, localização, área de influência escolar). O método do custo de
viagem faz o equivalente para locais recreativos sem taxa de entrada: o tempo e o dinheiro que as
pessoas gastam a viajar até um local revela um limite inferior do que o local vale para elas, porque
ninguém incorre num custo superior ao que a visita vale para si.

Ambos os métodos partilham uma limitação estrutural: só conseguem avaliar aquilo que está incorporado
numa transação de mercado existente. O ruído perto de uma pista de aterragem aparece nos preços de
habitação porque as pessoas que se importam com o ruído selecionam habitação mais tranquila; o valor
de existência de uma espécie que ninguém visita ou perto da qual ninguém vive não aparece em nenhuma
transação, que é exatamente a lacuna que os métodos de
[preferência declarada](../stated-preference-valuation/) existem para preencher.

## A matemática

```
Precificação hedónica:
  Preço da habitação = f(atributos estruturais, atributos de
                          localização, atributo ambiental de
                          interesse, ...)
  Estimar por regressão; o coeficiente do atributo ambiental
  (mantendo tudo o resto constante) é o seu preço implícito.

  Preço implícito do atributo X = ∂(Preço da habitação) / ∂X

Método do custo de viagem:
  Taxa de visita (visitas per capita da zona i) = f(custo de viagem
                   da zona i, locais substitutos, controlos
                   socioeconómicos)
  Estimar uma curva de procura para visitas em função do custo de
  viagem.
  Excedente do consumidor = área sob a curva de procura estimada
                    = valor do local para os visitantes
```

Ambos os métodos exigem um conjunto de controlo estatisticamente sólido — omitir um atributo de
confusão (hedónico) ou um local substituto próximo (custo de viagem) enviesa o preço implícito numa
direção que nem sempre é óbvia antecipadamente, razão pela qual o Anexo 2 do Green Book exige que a
especificação da regressão e os controlos sejam reportados, não apenas o coeficiente de destaque.

## Exemplo prático

**Governo central**: a própria metodologia de preço-sombra de carbono do Green Book baseia-se em
parte em evidência hedónica, mas um caso ilustrativo mais simples é o ruído de aeronaves. Um estudo
hedónico que regride os preços de venda de habitações numa área de corredor de voo face à exposição
ao ruído ponderada pela distância, controlando pela dimensão, idade e área de influência escolar,
constata que cada aumento de 1 decibel na exposição média ao ruído está associado a uma redução de
0,5% no preço da habitação. Para uma habitação típica de £280.000 na área afetada:

```
Preço implícito por decibel = £280.000 × 0,5% = £1.400 por agregado
familiar
Agregados familiares afetados por um aumento de 3dB de uma nova pista
= 18.000
Custo implícito agregado do aumento de ruído = £1.400 × 3 × 18.000 =
£75,6M
```

Este é um custo capitalizado pontual (incorporado no preço da habitação), que a avaliação deve ter o
cuidado de não contar em duplicado face a um fluxo de custo de incómodo de ruído anual estimado
separadamente.

**Instituição de solidariedade**: uma instituição ambiental usa o método do custo de viagem para
avaliar uma reserva natural de entrada gratuita. Dados de inquérito sobre os códigos postais dos
visitantes dão um custo médio de viagem de ida e volta (tempo avaliado ao valor de tempo fora do
trabalho recomendado pelo Green Book, mais combustível) de £14 por visita, com 40.000 visitas por
ano. A curva de procura estimada — as taxas de visita a caírem à medida que o custo de viagem de uma
zona sobe — implica um excedente do consumidor por visita, acima dos £14 efetivamente gastos, de
aproximadamente £9.

```
Valor anual total = 40.000 visitas × (£14 gastos + £9 excedente do
consumidor)
                    = 40.000 × £23 ≈ £920.000/ano
```

Isto ofusca a receita de taxa de entrada zero da reserva e dá aos administradores (trustees) da
instituição um valor defensável para o valor recreativo do local ao apresentar o caso a
financiadores.

## Ligação com a engenharia de software

O pensamento de preferência revelada aparece na análise de produto do setor público mais frequentemente
do que os profissionais se apercebem: os dados de uso de um serviço digital gratuito do governo são,
por si só, evidência de preferência revelada de valor (a frequência, a duração da sessão e — mais
revelador — os padrões de uso repetido versus pontual podem ser analisados da mesma forma que um
modelo de custo de viagem trata a frequência de visita face à distância). Onde um serviço tem
substitutos genuínos (um canal em papel, uma linha telefónica), o "custo" que os cidadãos incorrem
para usar o canal digital em vez disso (tempo, dados, um dispositivo) pode ser estimado e comparado
com o uso, ecoando diretamente a lógica do custo de viagem. Ver
[padrão de serviço digital](../digital-service-standard/) e
[valor dos dados abertos](../open-data-value/), que enfrenta exatamente este problema de avaliação
para um bem sem preço de mercado direto.

## Armadilhas

- **Enviesamento de variável omitida em modelos hedónicos.** Deixar de fora um atributo
  correlacionado (a qualidade da escola correlacionada tanto com o preço da habitação como com a
  variável ambiental de interesse) enviesa a estimativa de preço implícito; a especificação precisa
  de ser reportada e escrutinada, não apenas o resultado.
- **Ignorar locais substitutos em estudos de custo de viagem.** O valor revelado de um visitante para
  um local é subestimado se existir um substituto mais próximo e não for controlado — o visitante
  pode estar a visitar principalmente porque é gratuito, não porque é unicamente valioso.
- **Aplicar a preferência revelada a um bem sem eco de mercado algum.** O valor de existência, o
  valor de opção e o valor de legado não aparecem em nenhuma transação e não podem ser recuperados
  por métodos hedónicos ou de custo de viagem — essa lacuna pertence à
  [avaliação por preferência declarada](../stated-preference-valuation/).
- **Confundir valor capitalizado (pontual) com um fluxo anual.** Os efeitos hedónicos no preço da
  habitação são tipicamente valores capitalizados pontuais; tratá-los como um fluxo de benefício
  anual infla a avaliação.

## Fontes

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
