# وفورات تحويل القنوات

وفورات تحويل القنوات هي الانخفاض المتوقَّع في التكلفة الناتج عن نقل حجم المعاملات من قنوات
مكلفة — الهاتف، والمكاتب المباشرة، والبريد الورقي — إلى خدمة ذاتية رقمية رخيصة. وهي المحرك
المالي وراء شعار "رقمي بوصفه الخيار الافتراضي"، وهي أيضاً البند في الحالة التجارية الأكثر
عرضة للخطأ، لأن الافتراض الذي يقوم عليه — أن القنوات غير الرقمية تتقلص مع ارتفاع الإقبال
الرقمي — لا يصح إلا أحياناً.

## لماذا يهم الأمر

تبدو الحسابات لا جدال فيها باستخدام أرقام [تكلفة المعاملة](../cost-per-transaction/) من
تقرير الكفاءة الرقمية (Digital Efficiency Report): تحويل مليون معاملة من زيارة مباشرة تكلف
8.62 جنيهاً إسترلينياً إلى معاملة رقمية تكلف 0.15 جنيه إسترليني يعني وفراً يتجاوز 8 ملايين
جنيه إسترليني. لكن الوفر لا يتحول إلى نقد متاح لإعادة التوزيع إلا إذا تم فعلياً إلغاء *الطاقة
الاستيعابية الثابتة* للقناة المتقلصة — مقاعد مركز الاتصال، وموظفي المكتب المباشر، ودقائق عقد
الهاتف — وقد وجدت برامج التحول الرقمي في الحكومة المحلية مراراً أن إجمالي حجم التواصل لا
ينخفض بما يتناسب مع الإقبال الرقمي. ووثّقت أبحاث من برامج التحول الرقمي في السلطات المحلية
وهيئات مثل Socitm والرابطة الحكومية المحلية (Local Government Association) نمطاً متكرراً:
فالقنوات الرقمية تجتذب تواصلاً جديداً فعلياً (مواطنون لم يكونوا ليتصلوا أو يزوروا سابقاً
باتوا يفعلون ذلك الآن، لأن الأمر أصبح أسهل)، وحصة معتبرة من المعاملات "الرقمية" تفشل في منتصف
الطريق وتولّد مكالمة هاتفية على أي حال — فينخفض حجم المكالمات الهاتفية بأقل كثيراً مما توحي
به نسبة الإقبال الرقمي، بل قد لا ينخفض إطلاقاً بالقيمة المطلقة حتى مع تراجع *حصته* من إجمالي
التواصل.

## الحسابات

```
Gross channel-shift saving = shifted volume × (cost_old_channel − cost_digital)

Net (realized) saving = gross saving
                       − new/shadow demand created by the easier channel
                       − failure-demand cost (digital failures that
                         still generate a phone call or counter visit)
                       − cost of unretired fixed capacity (a call
                         centre can only shed staff in discrete units;
                         a 15% volume drop rarely lets you cut 15% of
                         headcount)

Realization threshold: savings are only bankable once volume drops
below the level the old channel can staff at its next-smaller discrete
capacity step (e.g. losing one full shift, one full desk, one
contracted headcount band)
```

## مثال توضيحي

**خدمة تجديد بطاقة "الشارة الزرقاء" (blue badge) في مجلس مقاطعة**: 60,000 عملية تجديد سنوياً،
كانت سابقاً 100% عبر الهاتف/الورق بتكلفة 6.40 جنيه إسترليني لكل معاملة. تُطلَق خدمة رقمية
جديدة وتصل إلى إقبال رقمي بنسبة 65% خلال عام، بتكلفة 0.30 جنيه إسترليني لكل معاملة رقمية.

```
Naive (gross) saving calculation:
  39,000 shifted × (£6.40 − £0.30) = £237,900/year

What actually happened, per the council's contact-centre data:
  Phone volume fell from 60,000/year to 46,000/year (−23%, not −65%)
  because: 9,000 digital journeys failed and generated a follow-up call
           (failure-demand leakage), and 4,000 people who previously
           didn't renew at all now do, having found it easy online
           (shadow demand — a genuine access improvement, but not a
           saving)

  Phone contact centre is staffed in bands of 8,000 calls/FTE;
  a 14,000-call drop (60,000 → 46,000) releases 1.75 FTE, rounded
  down in practice to 1 FTE actually redeployed = £34,000/year

Realized saving = £34,000/year plus the digital-channel build/run
  cost avoided on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost already counted) — a fraction of the £237,900 headline,
  though the service is still unambiguously better for users.
```

## الصلة بهندسة البرمجيات

الدرس الهندسي هو أن وفورات تحويل القنوات تتحقق بقرارات *تشغيلية* (جدولة النوبات، إلغاء
التشغيل، إعادة التفاوض على العقود)، لا بإطلاق البرمجية نفسها — فقد يحقق فريق كل نقطة من
[معيار الخدمة الرقمية](../digital-service-standard/) ومع ذلك لا يحقق أي وفر صافٍ إذا لم يُلغِ
أحد الطاقة الاستيعابية الثابتة للقناة القديمة. وقياس طلب الفشل (أين في الرحلة الرقمية يتخلى
المستخدمون وماذا يفعلون بعد ذلك) مسألة تحليل قمعي (funnel) قابلة للحل، وهي أعلى نقطة نفوذ
يمكن لفريق هندسي أن يفعلها لحماية حالة الوفورات؛ وهي أيضاً الرابط المباشر بـ
[تكلفة المعاملة](../cost-per-transaction/)، التي يضخّمها طلب الفشل بهدوء. انظر
[تحقيق المنافع](../benefits-realization/) للانضباط الأوسع الخاص بالتحقق من أن وفورات الحالة
التجارية تتحقق فعلياً، و[الإدماج الرقمي](../digital-inclusion/) لسبب أن القناة غير الرقمية
عادةً لا يمكن، بل لا ينبغي، إلغاؤها كلياً.

## المزالق

- **افتراض إحلال القنوات بنسبة 1:1**: نمذجة الإقبال الرقمي بوصفه طرحاً مباشراً من حجم
  الهاتف/المكتب، مع تجاهل الطلب الظلّي وتسرّب طلب الفشل الموثَّقَين في أبحاث تحويل القنوات
  بالحكومة المحلية.
- **احتساب الوفورات الإجمالية قبل إلغاء التشغيل**: احتساب الوفر في الحالة التجارية في السنة
  التي يرتفع فيها الإقبال، لا السنة (إن حدثت أصلاً) التي تُقتَطع فيها فعلياً طاقة القناة
  القديمة.
- **تجاهل الطبيعة التدريجية غير المستمرة لتكاليف التوظيف**: نادراً ما يتحول انخفاض الحجم
  بنسبة 20% إلى انخفاض التكلفة بنسبة 20%، لأن مراكز الاتصال والمكاتب يُوظَّف موظفوها ضمن
  فئات متقطعة لا بشكل مستمر.
- **معاملة الطلب الظلّي كهدر**: التواصل الجديد من مستخدمين كانوا مستبعدين أو رادعين سابقاً
  زيادة حقيقية في [القيمة العامة](../public-value/)، لا خطأ في النمذجة — وينبغي الإبلاغ عنه
  كنتيجة وصول لا طرحه كضوضاء.

## المصادر

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
