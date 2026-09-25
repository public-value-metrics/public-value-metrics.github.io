# Стоимость транзакции (Cost Per Transaction)

Стоимость транзакции — это главный показатель юнит-экономики государственной цифровой услуги: общая
стоимость доставки канала, делённая на число завершённых через него транзакций. Это была флагманская
цифра старой GOV.UK Performance Platform, и именно это число финансировало десятилетие инвестиций в
принцип «цифровое по умолчанию» — именно поэтому это и самый уязвимый для манипуляций показатель.

## Почему это важно

Digital Efficiency Report кабинета министров 2012 года выразил сравнение стоимости каналов в
формулировках, которые прижились: было установлено, что цифровые транзакции стоят примерно в 20 раз
дешевле телефонных и примерно в 50 раз дешевле очных, с иллюстративными показателями местного
самоуправления около 0,15 £ за веб-транзакцию против 2,83 £ по телефону и 8,62 £ очно. Именно это
единственное сравнение стало обоснованием для редизайна 25 образцовых услуг, названных в
государственной цифровой стратегии (Government Digital Strategy), и для каждого ведомственного
бизнес-кейса, ссылающегося с тех пор на экономию от смены каналов. Эта цифра действительно полезна как
сигнал порядка величины, но само соотношение полностью зависит от того, что учтено с каждой стороны:
честная стоимость телефонного канала включает персонал колл-центра, контракт на телефонию, обучение и
инфраструктуру; честная цифровая стоимость включает хостинг, текущие зарплаты продуктовой команды,
время службы поддержки для неудавшихся обращений и канал ассистированного цифрового доступа,
требуемый пунктом 5 [стандарта цифровых услуг](../digital-service-standard/). Уберите достаточно из
этих статей на цифровой стороне — и любая услуга будет выглядеть дешёвой.

## Математика

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## Практический пример

**Услуга продления транспортного налога**: 4 миллиона транзакций в год.

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## Связь с разработкой программного обеспечения

Стоимость транзакции — это точка, где архитектурные решения превращаются в финансовую цифру: услуга,
которая аккуратно автомасштабируется и требует минимального ручного вмешательства, со временем
снижает эту цифру; услуга, порождающая большой объём обращений в поддержку из-за запутанных состояний
ошибок, повышает её независимо от эффективности хостинга. Это естественный сопутствующий показатель к
пункту 10 [стандарта цифровых услуг](../digital-service-standard/) («определите, как выглядит успех,
и публикуйте данные о производительности») и к [стандартам услуг и метрикам транзакций](../service-standards-and-transaction-metrics/),
которые задают более полный набор KPI, в который встроена эта цифра. Она также напрямую питает расчёты
[экономии от смены каналов](../channel-shift-savings/) и должна сверяться с
[совокупной стоимостью владения государственными ИТ](../total-cost-of-ownership-in-government-it/),
чтобы накладные расходы на платформу и общие услуги не выпадали незаметно из расчёта.

## Подводные камни

- **Предельная стоимость, выдаваемая за среднюю**: цитирование стоимости только хостинга после
  построения услуги, без учёта текущей команды, которая её поддерживает, дорабатывает и обслуживает —
  см. практический пример выше.
- **Исключение стоимости ассистированного цифрового доступа**: канал не соответствует принципу
  «цифровое по умолчанию», и его истинная стоимость не отражена, если резервный телефонный/бумажный
  вариант, требуемый [цифровой доступностью](../digital-inclusion/), оценивается отдельно или
  игнорируется.
- **Игнорирование спроса от сбоев**: транзакции, начатые в цифровом канале и завершившиеся сбоем,
  всё равно порождающие звонок или бумажную форму, — это стоимость цифрового канала, а не того
  канала, который подхватывает сбой.
- **Сравнение транзакций разной сложности между каналами**: телефонные звонки непропорционально часто
  относятся к сложным случаям (несколько иждивенцев, исправление ошибок, уязвимые заявители); сравнение
  средней телефонной стоимости со средней цифровой завышает соотношение, если состав транзакций не
  сопоставлен.

## Источники

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
