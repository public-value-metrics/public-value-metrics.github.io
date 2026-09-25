# بطاقة القيمة العامة

تُكيِّف بطاقة القيمة العامة بطاقة الأداء المتوازن (balanced scorecard) لروبرت كابلان وديفيد
نورتون لعام 1992 — المبنية للشركات التي تُحسِّن الربح عبر مناظير مالية، وعملاء، وعمليات
داخلية، وتعلّم ونمو — لتلائم المنظمات التي خطها الأخير مهمة، لا هامش ربح. وهي تُجبر جهة عامة
على الإبلاغ عن الأداء عبر عدة أبعاد لا يمكن اختزالها في آن واحد، بدلاً من طي كل شيء في رقم
واحد يُخفي المقايضات.

## لماذا يهم الأمر

كانت حجة كابلان ونورتون الأصلية، في Harvard Business Review، أن المقياس المالي الواحد مؤشر
متأخر لا يخبرك شيئاً عن *سبب* تغيّر الأداء في الربع القادم. وفي القطاع الخاص كان الإصلاح أربعة
مناظير مترابطة. وفي الحكومة، يوفر "المثلث الاستراتيجي" لمارك مور (من *Creating Public Value*،
1995) البنية المكافئة: يجب أن تُسلِّم الخدمة في آن واحد **قيمة عامة** (نتيجة المهمة)، وتحافظ
على **المشروعية والدعم** (الدعم السياسي والجماهيري)، وأن تكون **ممكنة تشغيلياً** (قابلة
للتسليم بالموارد والقدرات المتاحة فعلياً). وكتاب بول نيفن *Balanced Scorecard: Step-by-Step
for Government and Nonprofit Agencies* (2003) هو دليل الممارس لترجمة صناديق كابلان ونورتون
الأربعة إلى هذا المثلث — بإعادة تسمية "المالي" عادةً إلى "إدارة الموارد"، ووضع "المهمة" في
الأعلى بدلاً من "قيمة المساهمين" في الأسفل، ومعاملة منظوري العميل وأصحاب المصلحة كمتساويين
بدلاً من تابعين للربح. والسبب في أهمية هذا لفريق تسليم هو أن خدمة رقمية عامة يُحكَم عليها فقط
بمقياس مالي أو كفاءة (تكلفة المعاملة، مثلاً) ستُقصِّر بشكل منهجي في الاستثمار في أبعاد
المشروعية والنتائج التي لا يستطيع المقياس المالي رؤيتها.

## الحسابات

بطاقة القيمة العامة إطار عمل لا معادلة، لكن بنيتها ثابتة وتستحق إعادة إنتاجها بدقة:

```
Perspective          Public-sector question                    Example indicator
--------------------------------------------------------------------------------
Mission / outcomes    Are we achieving the public value we      Population outcome measure
                       exist to create?                         (see outcomes-vs-outputs)
Stewardship of        Are we using public money efficiently     Cost per outcome, budget
  resources            and within authorized limits?             variance
Customer / user        Are users and citizens able to access    Completion rate, satisfaction
                        and benefit from the service?
Legitimacy / support    Do political principals, oversight       Trust metrics, audit findings,
                        bodies, and the public still back us?    complaints upheld
Internal process /      Do we have the capability and process   Staff turnover, cycle time,
  learning              to keep improving?                       backlog age

A defensible scorecard reports 3–5 indicators per perspective, chosen so that
no single perspective can be gamed without the damage showing up in another.
```

## مثال توضيحي

**قسم رعاية اجتماعية للبالغين في سلطة محلية**: تُبلغ بطاقة أداء لخدمة إعادة التأهيل (دعم قصير
الأمد لمساعدة الناس على استعادة استقلاليتهم بعد إقامة في المستشفى) عمّا يلي:

```
Mission:       68% of service users no longer need ongoing care after 6 weeks (target 65%)
Stewardship:   cost per completed reablement episode = £1,850 (budget assumption £2,000)
Customer:      user satisfaction 82%, average wait for service start 4.1 days
Legitimacy:    3 upheld complaints per 1,000 episodes; adult safeguarding board rates
               service "good"
Process:       staff vacancy rate 14%, average caseload 23 (safe caseload ceiling: 25)
```

عند القراءة بمعزل، تبدو أرقام المهمة وإدارة الموارد قصة نجاح واضحة: دون الميزانية وفوق هدف
النتيجة. وعند القراءة مع صف العملية، يُظهر معدل الشواغر البالغ 14% مقابل سقف حِمل حالات يبلغ
25 أن النتيجة الجيدة تُشترى بالعمل قريباً من مستويات توظيف غير آمنة — تحذير لن يُظهره رقم
المهمة وحده أبداً، وهو بالضبط نمط الفشل الذي يدعو إليه مؤشر أداء رئيسي أحادي المنظور (انظر
[مؤشرات الأداء الرئيسية للقطاع العام](../public-sector-kpis/)).

## الصلة بهندسة البرمجيات

بالنسبة لفريق يبني لوحة معلومات داخلية أو عامة، البطاقة حجة مباشرة ضد أداة "درجة صحة" واحدة:
ابنِ لوحة واحدة لكل منظور، وقاوم ضغط المنتج لتجميعها في إشارة مرورية، لأن خطوة التجميع هي
بالضبط حيث تُدمَّر معلومات المقايضة. وتتطابق أيضاً بدقة مع بنى OKR لفرق المنتج: فهدف مهمة
(OKR) دون هدف إدارة موارد أو عملية مقترن يُعيد إنتاج نمط فشل المقياس الواحد الذي كان كابلان
ونورتون يكتبان ضده عام 1992. انظر [القيمة العامة](../public-value/) لنظرية مور الأساسية بشأن
ما ينبغي أن يحتويه صندوق "المهمة" فعلياً، و[مقاييس الثقة والمشروعية](../trust-and-legitimacy-metrics/)
لكيفية ملء منظور المشروعية بمؤشرات حقيقية موثَّقة المصدر بدلاً من مؤشر بديل لا يستطيع أحد
الدفاع عنه.

## المزالق

- **طيّ البطاقة إلى درجة واحدة**: متوسط أربعة مناظير في رقم واحد يُعيد إدخال المشكلة نفسها
  بالضبط — درجة مشروعية سيئة مُقنَّعة بدرجة إدارة موارد جيدة — التي وُجدت البطاقة لمنعها.
- **نسخ منظور "المالي" الخاص بالقطاع الخاص دون تغيير**: منظور إدارة الموارد لجهة عامة يتعلق
  بالبقاء ضمن ميزانيات مُفوَّضة، غالباً مُسيَّجة، لا بتعظيم الإيراد — إعادة تسمية نيفن ليست
  تجميلية.
- **اختيار مؤشرات يستطيع الفريق المالك للبطاقة تحريكها منفرداً**: مؤشر مشروعية مصدره الفريق
  نفسه الذي يُحكَم عليه (معالجة شكاوى مُبلَّغ عنها ذاتياً، مثلاً) ليس دليلاً مستقلاً.
- **بناء البطاقة مرة واحدة وعدم مراجعة الأوزان أو المؤشرات أبداً**: قصد كابلان ونورتون مراجعة
  استراتيجية سنوية؛ فبطاقة مُجمَّدة لسنوات تنجرف عن المهمة التي بُنيت لتتبّعها.

## المصادر

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
