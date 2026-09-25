# 效益实现（Benefits Realization）

效益实现管理是一门纪律，用于识别、设定基线、跟踪并*举证*商业论证中承诺的效益，在系统上线后是否真正兑现。在英国公共投资体系中，它存在于财政部《绿皮书》五个论证案例模型（Five Case Model）以及基础设施与项目管理局（Infrastructure and Projects Authority）专门的效益管理指南之中；没有它，"该系统为个案工作人员每笔申请节省了三十分钟"就将永远只是一句未经审计的断言。

## 为何重要

商业论证是承诺；效益实现是审计。《绿皮书》要求每一份支出论证都必须通过五项检验——战略性、经济性、商业性、财务性与管理性——而管理性论证必须在*获批之前*说明效益将如何实现：指定负责人、采集基线、确定测量日期。基础设施与项目管理局的指南《效益管理：政府重大项目效益实现指南》（*Benefits Management: A Guide to Realizing Benefits for Government Major Projects*，<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>）之所以存在，是因为该局自身对政府重大项目组合（Government Major Projects Portfolio）的报告中反复发现，交付信心与效益实现是各重大项目中反复出现的薄弱环节。一个项目可以在交付里程碑上"按时、按预算"结项，却仍然未能实现最初证明这笔支出正当性的那些效益——基础设施与项目管理局的指南将这一区分视为这门纪律的全部要义所在。

## 数学原理

```
实现率 = 已实现效益 / 预测效益   （按每项效益、每个周期分别计算）

使其可计算的机制：
  在上线*之前*采集基线（否则差值将无法测量）
  每项效益：指定负责人、指标、数据来源、测量时间表
  在评估阶段针对乐观偏差对预测值进行调整（《绿皮书》强制要求）
  效益分为可释放现金型 / 释放产能型 / 定性型三类，
  分别跟踪与报告
```

## 实例演算

**地方政府**：某数字化规划申请门户的商业论证承诺，每年可实现：印刷与邮寄开支减少 30 万英镑（现金型）、释放官员工时 4,500 小时（产能型），以及申请人满意度提升（定性型）。上线十二个月后：

```
效益类别        预测值      实现值      实现率    证据来源
现金节省        30万英镑    21万英镑    70%      财务账簿对比基线年度
官员工时        4,500       3,200       71%      时间-动作抽样调查
满意度          +8个百分点  +11个百分点 138%     申请人调查数据

复核后采取的行动（这正是效益实现管理的意义所在）：
现金缺口被追溯到仍有两个服务领域以"例外情况"
方式处理纸质申请 → 关闭该例外通道；
基于本案例的预测误差，下一份商业论证的
乐观偏差修正系数从 10% 提高到 25%。
```

70% 的实现率不是失败——它是一种能让下一次预测校准得更好的知识。一个未经测量的案例本会永远声称 100%，财务团队也就无从质疑。

## 与软件工程的关联

工程组织通常会基于预测效益批准平台与工具投资，事后却几乎从不进行审计——这正是效益实现管理旨在纠正的病症。可以采用的轻量级做法是：任何超过重要性门槛的提案都要指定一位效益负责人、一项基线指标，以及一个固定的复核日期（通常为上线后六个月），并且应根据以往提案的实现率来折算组织对某个团队或供应商下一次预测的信任程度。这与[绿皮书评估](../green-book-appraisal/)首尾相连——后者设定了这门纪律所要审计的预测值——其背后的逻辑，与广为报道的一个发现相同：绝大多数生成式 AI 试点项目并未显示出可衡量的回报（参见[公共部门中的 AI 生产力](../ai-productivity-in-the-public-sector/)），因为*确实*带来价值的那些试点，几乎无一例外都是从一开始就拥有一条可指定、可跟踪的效益线的项目。这还依赖于将实际交付的内容与实际实现的效益区分开来——参见[成果与产出](../outcomes-vs-outputs/)。

## 常见陷阱

- **没有上线前基线**：这是致命且无法弥补的遗漏——没有它，实现率永远无法计算，只能被断言。
- **效益孤儿化**：一项没有指定负责人的效益，就没有人去收集数据，每一次组合复核都会默认将其报告为"总体符合预期"。
- **在项目组合中重复计算效益**：两个项目都把同一批被释放的个案工作人员产能算作自己的效益——在整个项目组合中维护一份单一的效益登记册来发现这一问题。
- **效益实现的表演**：高调测量和报告容易取得的定性成果，而现金和产能这两条线却被悄悄地不加审视。
- **将交付与实现相混淆**：一个项目"按时、按预算"完成里程碑，并不能说明预测的效益是否真正发生——基础设施与项目管理局的指南将这两者视为具有各自独立证据链的两个独立问题。

## 参考资料

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
