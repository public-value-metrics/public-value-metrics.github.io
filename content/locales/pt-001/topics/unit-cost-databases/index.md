# Bases de Dados de Custo Unitário

Uma base de dados de custo unitário é uma biblioteca de proxies financeiras pré-pesquisadas e
baseadas em evidência para resultados sociais — o valor de passar do desemprego para o emprego, de
uma redução da solidão, de um arrendamento estável — que permitem a um profissional monetizar um
resultado sem encomendar investigação de valorização à medida de cada vez. Existem para que uma
pequena instituição de solidariedade a escrever uma candidatura a financiamento possa aplicar o mesmo
rigor que uma consultora bem-recursada, reutilizando uma proxy que outra pessoa já derivou e
publicou.

## Por que isso importa

O UK Social Value Bank da HACT, desenvolvido com o economista Daniel Fujiwara usando métodos de
[valorização do bem-estar](../wellbeing-valuation/), e a Global Value Exchange, uma base de dados
aberta e de fonte colaborativa de proxies financeiras, são as duas mais usadas nos setores terceiro e
público do Reino Unido. Ambas existem porque o trabalho de valorização subjacente — a
[valorização do bem-estar](../wellbeing-valuation/) e a
[avaliação por preferência declarada](../stated-preference-valuation/) — é dispendioso,
metodologicamente exigente e lento de executar de raiz para cada projeto. Uma biblioteca de proxies
partilhada e publicada transforma o que seria um exercício de investigação de vários meses numa
simples consulta, o que é precisamente por que importam tanto para os cálculos de
[retorno social sobre o investimento](../social-return-on-investment/) como para as avaliações de
candidaturas ao abrigo do [Social Value Act](../social-value-act/): sem elas, a monetização rigorosa
só seria acessível a organizações suficientemente grandes para encomendarem os seus próprios estudos.

## A matemática

Uma base de dados de custo unitário não calcula nada em si mesma; fornece um input para um cálculo
feito noutro lugar:

```
Valor da proxy financeira = preço de mercado, OU preço sombra, OU valorização do
                             bem-estar, OU valor de preferência declarada
                             para uma unidade definida de mudança de resultado
                             (ex.: "por pessoa que passa do desemprego para o
                             emprego, por ano")

Valor aplicado = número de resultados alcançados × valor da proxy unitária
```

Ver [precificação sombra](../shadow-pricing/) para perceber como se constrói uma proxy quando não
existe preço de mercado, e [retorno social sobre o investimento](../social-return-on-investment/)
para perceber como o valor aplicado depois alimenta um rácio após os ajustamentos de peso morto e de
atribuição.

## Exemplo prático

**Instituição de solidariedade (SROI de serviço de acompanhamento)**: uma entrada da base de dados de
custo unitário para "redução da solidão" dá uma proxy ilustrativa de £1.100 por pessoa por ano.
Aplicada a 80 beneficiários: 80 × £1.100 = £88.000 de valor bruto. Se a mesma base de dados também
tiver uma proxy para "bem-estar mental melhorado" que se baseia num item de inquérito de bem-estar
sobreposto, empilhar ambas as proxies para as mesmas 80 pessoas contaria em duplicado parte da mesma
mudança subjacente — a base de dados fornece o número, mas evitar esta sobreposição é
responsabilidade do analista.

**Autarquia (SROI de clube de emprego)**: uma entrada da base de dados de custo unitário para "passar
do desemprego para emprego sustentado" é aplicada a 45 participantes a uma proxy ilustrativa de
£8.500 por pessoa por ano: 45 × £8.500 = £382.500 de valor bruto, antes dos ajustamentos de peso
morto e de atribuição mostrados em
[retorno social sobre o investimento](../social-return-on-investment/).

## Ligação com a engenharia de software

As equipas que constroem ferramentas de relato para instituições de solidariedade ou entidades
contratantes beneficiam de um "catálogo de resultados" interno — uma tabela que associa cada
resultado que um produto ou serviço pode plausivelmente reclamar a uma proxy nomeada, à sua base de
dados de origem, à sua data de publicação e a um identificador de versão — para que diferentes
equipas dentro de uma organização não escolham cada uma valores ligeiramente diferentes para o mesmo
resultado. Envolver os dados abertos da Global Value Exchange num serviço de consulta, com a fonte e
a data sempre apresentadas junto ao valor, mantém a proxy auditável em vez de um número mágico
enterrado numa folha de cálculo. Ver
[retorno social sobre o investimento](../social-return-on-investment/) e
[social value act](../social-value-act/) para os dois lugares principais onde estas proxies são
consumidas.

## Armadilhas

- **Tratar as proxies como precisas.** A maioria das proxies publicadas são médias modeladas a partir
  de estudos de valorização do bem-estar com intervalos de confiança amplos; citar uma até à libra
  exagera a precisão que a investigação subjacente suporta.
- **Contar em duplicado proxies sobrepostas.** Combinar proxies (por exemplo, "solidão reduzida" e
  "bem-estar mental melhorado") derivadas de construtos de inquérito sobrepostos valoriza duas vezes
  a mesma mudança subjacente.
- **Usar uma proxy fora de contexto sem ajuste.** Uma proxy calibrada numa população nacional e num
  ano específicos, aplicada noutro lugar sem ajuste de inflação ou de contexto, deturpa
  silenciosamente o valor.
- **Não verificar a proveniência.** A Global Value Exchange é aberta e de fonte colaborativa, pelo
  que a qualidade das entradas varia consoante o contribuidor; verifique a fonte subjacente antes de
  citar um valor numa candidatura a financiamento ou numa submissão de contratação.

## Fontes

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
