# تحقيق المنافع

إدارة تحقيق المنافع هي انضباط تحديد المنافع الموعودة في الحالة التجارية، ووضع خط أساس لها،
وتتبّعها، و*إثبات* أنها تحققت فعلياً بعد الإطلاق. وفي الاستثمار العام البريطاني، يعيش هذا
الانضباط داخل نموذج الحالات الخمس (Five Case Model) في الكتاب الأخضر (Green Book) الصادر عن
وزارة الخزانة البريطانية، وضمن إرشادات إدارة المنافع المخصصة الصادرة عن هيئة البنية التحتية
والمشاريع (Infrastructure and Projects Authority)؛ فبدونه يظل الادّعاء بأن "النظام وفّر على
موظفي المعالجة ثلاثين دقيقة لكل طلب" تأكيداً غير مُراجَع إلى الأبد.

## لماذا يهم الأمر

الحالات التجارية وعود؛ وتحقيق المنافع هو التدقيق عليها. يشترط الكتاب الأخضر أن تجتاز كل حالة
إنفاق خمسة اختبارات — استراتيجي، واقتصادي، وتجاري، ومالي، وإداري — ويجب أن تحدد الحالة
الإدارية كيفية تحقيق المنافع *قبل الموافقة*: بتسمية أصحاب المنفعة، وتوثيق خط الأساس، وتحديد
مواعيد القياس. ويوجد دليل هيئة البنية التحتية والمشاريع، *إدارة المنافع: دليل تحقيق المنافع
للمشاريع الحكومية الكبرى*
(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>)،
لأن تقارير الهيئة نفسها عن محفظة المشاريع الحكومية الكبرى (Government Major Projects
Portfolio) وجدت مراراً أن الثقة في التنفيذ وتحقيق المنافع تُذكر كضعف متكرر عبر البرامج
الكبرى. ويمكن لمشروع أن يُغلَق "في الموعد وضمن الميزانية" مقارنةً بمعالم تنفيذه، بينما يفشل
مع ذلك في تحقيق المنافع التي بررت أصلاً إنفاق المال — وهذا تمييز تعامله إرشادات الهيئة على
أنه صميم هذا الانضباط بأكمله.

## الحسابات

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: named owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash-releasing / capacity-freed / qualitative,
  tracked and reported separately
```

## مثال توضيحي

**سلطة محلية**: وعدت الحالة التجارية لبوابة رقمية لطلبات التخطيط، سنوياً، بما يلي: 300,000
جنيه إسترليني في خفض تكاليف الطباعة والبريد (نقدي)، وتحرير 4,500 ساعة عمل من الموظفين
(طاقة استيعابية)، وتحسين رضا مقدمي الطلبات (نوعي). بعد اثني عشر شهراً من الإطلاق:

```
Benefit           Forecast   Realized   Rate   Evidence
Cash savings      £300,000   £210,000   70%    finance ledger vs baseline year
Officer hours     4,500      3,200      71%    time-motion sample
Satisfaction      +8pp       +11pp      138%   applicant survey data

Actions from the review (the point of benefits realization):
cash shortfall traced to two service areas still processing paper
applications by exception → close the exception route;
next business case's optimism-bias correction raised from 10% to 25%
based on this case's forecasting error.
```

معدل تحقيق قدره 70% ليس فشلاً — بل معرفة تتيح ضبط توقعات أدق للمستقبل. أما الحالة غير
المُقاسة فكانت لتدّعي 100% إلى الأبد، ولما كان لدى فريق المالية أي أساس للاعتراض عليها.

## الصلة بهندسة البرمجيات

تعتمد منظمات الهندسة عادةً استثمارات المنصات والأدوات بناءً على منفعة متوقَّعة، ونادراً ما
تدقق عليها بعد ذلك — وهذا بالضبط الخلل الذي وُجدت إدارة تحقيق المنافع لإصلاحه. والنقل الخفيف
لهذا المبدأ: أن يسمّي كل اقتراح يتجاوز عتبة جوهرية صاحبَ منفعة، ومؤشر خط أساس، وموعد مراجعة
ثابت (عادةً ستة أشهر بعد الإطلاق)، وأن تخصم معدلات التحقق من المقترحات السابقة مقدار الثقة
التي تمنحها المنظمة لتوقع الفريق أو المورّد التالي. وهذا يغلق الحلقة الراجعة إلى
[تقييم الكتاب الأخضر](../green-book-appraisal/)، الذي يضع التوقع الذي يدقق عليه هذا
الانضباط، وهو المنطق ذاته وراء الاكتشاف المتداول على نطاق واسع بأن الأغلبية العظمى من
التجارب الاسترشادية للذكاء الاصطناعي التوليدي لا تُظهر عائداً قابلاً للقياس — انظر
[إنتاجية الذكاء الاصطناعي في القطاع العام](../ai-productivity-in-the-public-sector/) — لأن
التجارب التي *حققت* قيمة فعلاً كانت، بلا استثناء تقريباً، تلك التي حددت بند منفعة قابل
للتتبع منذ البداية. ويعتمد أيضاً على التمييز بين ما تم تسليمه فعلياً وما تحقق فعلياً — انظر
[النتائج مقابل المخرجات](../outcomes-vs-outputs/).

## المزالق

- **غياب خط الأساس قبل الإطلاق**: هذا هو الإغفال القاتل الذي لا يمكن تداركه — فبدونه لا يمكن
  حساب أي معدل تحقيق أبداً، بل يمكن فقط ادّعاؤه.
- **يُتم المنفعة**: المنفعة التي لا صاحب مسمى لها لا يجمع أحد بياناتها، وكل مراجعة للمحفظة
  تصنّفها افتراضياً بأنها "تسير على المسار الصحيح عموماً".
- **الازدواج في احتساب المنافع عبر محفظة برنامج**: مشروعان يدّعي كلاهما تحرير نفس طاقة موظف
  المعالجة كمنفعة له — يُحتفظ بسجل منفعة واحد عبر المحفظة لضبط هذا الخلل.
- **مسرحية التحقيق**: قياس المكاسب النوعية السهلة والإبراز الملحوظ لها، بينما تُترك بنود
  الوفر النقدي والطاقة الاستيعابية دون فحص بهدوء.
- **الخلط بين التنفيذ والتحقق**: إغلاق مشروع لمعالمه "في الموعد وضمن الميزانية" لا يقول شيئاً
  عن حدوث المنفعة المتوقعة فعلياً أم لا — تعامل إرشادات الهيئة هاتين المسألتين على أنهما
  سؤالان منفصلان بمسارين منفصلين من الأدلة.

## المصادر

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
