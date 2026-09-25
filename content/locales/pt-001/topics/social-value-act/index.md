# Lei do Valor Social

O Public Services (Social Value) Act 2012 é um dever estatutário do Reino Unido que exige que as
autoridades públicas em Inglaterra e no País de Gales considerem como aquilo que está a ser
contratado poderia melhorar o bem-estar económico, social e ambiental da área relevante, e considerem
consultar sobre isto, antes de iniciar um processo de contratação para contratos de serviços
públicos. Entrou em vigor em janeiro de 2013 como um dever relativamente leve de "ter em conta", e foi
substancialmente reforçado pela Procurement Policy Note (PPN) 06/20 em janeiro de 2021, que exige que
os contratos do governo central avaliem explicitamente — não apenas considerem — o valor social, com
uma ponderação mínima nos critérios de adjudicação.

## Por que isso importa

Antes da PPN 06/20, "considerar" o valor social podia ser satisfeito por um encomendante que
registasse ter pensado no assunto, sem qualquer exigência de que afetasse a decisão de adjudicação —
um dever fácil de cumprir no papel e ignorar na prática. A PPN 06/20 fechou essa lacuna para a
contratação do governo central: exige que o valor social seja pontuado como parte da avaliação do
concurso, organizado em torno de cinco temas prioritários nacionais — recuperação da COVID-19,
combate à desigualdade económica, luta contra as alterações climáticas, igualdade de oportunidades e
bem-estar — e comummente medido usando o enquadramento National TOMs (Temas, Resultados, Medidas)
mantido pelo Social Value Portal. Para um engenheiro de software que constrói ferramentas de
contratação, gestão de contratos ou apoio a propostas para o setor público, esta é a base legal
face à qual o seu cliente é obrigado a construir, não um extra opcional bem-vindo.

## A matemática

O valor social é um tópico com forma de enquadramento; a sua "matemática" é a estrutura de pontuação
que a maioria das autoridades usa:

```
Pontuação total do concurso = Ponderação de preço/custo + Ponderação
                                de qualidade + Ponderação de valor
                                social

PPN 06/20 (governo central): ponderação de valor social ≥ 10% da
pontuação total

Temas de valor social (PPN 06/20):
 1. Recuperação da COVID-19
 2. Combate à desigualdade económica
 3. Luta contra as alterações climáticas
 4. Igualdade de oportunidades
 5. Bem-estar
```

Os proponentes tipicamente monetizam os seus compromissos face a estes temas usando
[bases de dados de custo unitário](../unit-cost-databases/), e a mesma lógica de monetização usada no
[retorno social sobre o investimento](../social-return-on-investment/) aplica-se: um compromisso deve
ser evidenciado, atribuível ao contrato, e não contado em duplicado face a outro financiamento.

## Exemplo prático

**Contrato de TI de uma autarquia local**: um contrato de £2 milhões, 3 anos, é pontuado 60%
qualidade, 30% preço, 10% valor social. O Proponente A compromete-se a 2 estágios de aprendizagem,
£150.000 de despesa de subcontratação local, e 200 horas de formação pro bono em competências
digitais para uma escola local, monetizado usando indicadores indiretos de uma base de dados de custo
unitário num total combinado de £90.000 de valor social adicional. O Proponente B compromete-se a um
pacote menor monetizado em £40.000. Se a autoridade pontuar o valor social proporcionalmente face à
proposta mais forte, o Proponente A recebe os 10 pontos completos; o Proponente B recebe 10 ×
(£40.000 ÷ £90.000) = 4,4 pontos — uma diferença de 5,6 pontos que pode decidir o contrato mesmo
quando a qualidade e o preço estão próximos.

**Proponente do setor voluntário**: uma pequena VCSE (empresa voluntária, comunitária e social) que
concorre a um contrato de manutenção de terrenos contra um concorrente comercial não consegue competir
apenas em preço unitário, mas usa indicadores indiretos do Global Value Exchange para monetizar os
seus compromissos existentes de emprego comunitário e voluntariado, construindo um caso de valor
social evidenciado que vale a pena pontuar a par do preço e da qualidade.

## Ligação com a engenharia de software

Ganhar uma proposta com compromissos de valor social monetizados cria uma obrigação de evidenciar a
entrega face a eles através da gestão de contrato — ferramentas que registam o início de estágios de
aprendizagem, a despesa local e as horas de formação face aos compromissos específicos pontuados no
concurso, alimentando reuniões de revisão de contrato em vez de serem esquecidas assim que o contrato
é assinado. As listagens do G-Cloud e do Digital Marketplace exigem cada vez mais declarações de
valor social no momento da listagem. Ver
[retorno social sobre o investimento](../social-return-on-investment/) para o método de avaliação por
trás dos compromissos, [bases de dados de custo unitário](../unit-cost-databases/) para os
indicadores indiretos usados pelos proponentes, e
[resultados vs. produtos](../outcomes-vs-outputs/) para garantir que os compromissos entregues são
resultados, não apenas contagens de atividade.

## Armadilhas

- **Propostas de "lavagem social".** Compromissos vagos ("apoiamos a comunidade local") que não
  podem ser medidos ou exigidos durante a gestão do contrato pontuam bem mas não entregam nada
  verificável.
- **Tratar o valor social como um desempate.** A PPN 06/20 exige que o valor social seja avaliado
  explicitamente dentro dos critérios de adjudicação, não usado informalmente para desempatar entre
  propostas de resto iguais.
- **Nenhum acompanhamento na gestão de contrato.** Os compromissos pontuados no concurso
  frequentemente nunca são acompanhados durante a entrega — ver
  [realização de benefícios](../benefits-realization/).
- **Enquadramentos de medição inconsistentes entre contratos.** Usar fontes de indicador indireto
  diferentes para compromissos semelhantes em contratos diferentes torna a comparação ao nível do
  portefólio sem sentido, razão pela qual existem enquadramentos comuns como o National TOMs e bases
  de dados de custo unitário partilhadas.

## Fontes

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
