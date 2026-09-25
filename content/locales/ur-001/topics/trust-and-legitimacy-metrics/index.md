# اعتماد اور قانونی حیثیت کے میٹرکس (Trust and Legitimacy Metrics)

قانونی حیثیت اور حمایت مارک مور کے *Creating Public Value* (1995) کے "اسٹریٹیجک مثلث" کی تین
ٹانگوں میں سے ایک ہے — خود عوامی قدر اور عملی صلاحیت کے ساتھ — اور یہ وہ ٹانگ ہے جسے سب سے زیادہ
غیر ناپا ہوا چھوڑ دیا جاتا ہے، کیونکہ کسی بجٹ یا پیداوار کی گنتی کے برعکس، قانونی حیثیت کے ساتھ
کوئی واضح واحد عدد جڑا نہیں ہوتا۔ اعتماد اور قانونی حیثیت کے میٹرکس متبادل پیمانوں کا وہ خاندان ہیں
جسے حکومتیں اس خلا کو پُر کرنے کے لیے استعمال کرتی ہیں: ادارہ جاتی اعتماد کے سروے، نگران ادارے کے
اعتماد کی درجہ بندیاں، شکایات اور اپیل کا ڈیٹا، اور سیاسی/قانون سازی کی حمایت کے اشاریے۔

## یہ کیوں اہم ہے

مور کی دلیل یہ ہے کہ کوئی سرکاری منتظم جو حقیقی قدر ڈیلیور کرتا ہے مگر سیاسی اور عوامی قانونی
حیثیت کھو دیتا ہے، بالآخر وہ مجاز کرنے والا ماحول کھو دے گا جو اسے ڈیلیور کرتے رہنے کے لیے درکار ہے
— فنڈنگ کاٹی جاتی ہے، مینڈیٹ محدود کیے جاتے ہیں، اور سروس کو بھوکا رکھا جاتا ہے چاہے اس کے نتائج
کتنے ہی اچھے کیوں نہ ہوں۔ قانونی حیثیت اس لیے کوئی عوامی-تعلقات کا بعد کا خیال نہیں جو ڈیلیوری
اسکور کارڈ سے جوڑ دیا جائے؛ یہ ایک بوجھ اٹھانے والا ان پٹ ہے کہ کیا مشن بالکل جاری رہ سکتا ہے، یہی
وجہ ہے کہ یہ [عوامی قدر کے اسکور کارڈ](../public-value-scorecard/) میں ایک برابر کا تناظر ہے، کوئی
فٹ نوٹ نہیں۔ OECD کا "Trust in Government" سروے پروگرام اسے مقدار میں ناپنے کی سب سے آگے کی
بین-قومی کوشش ہے: یہ OECD رکن ریاستوں میں ان شہریوں کے حصے کو ٹریک کرتا ہے جو کہتے ہیں کہ انہیں
اپنی قومی حکومت پر اعتماد ہے، اور اس کا طویل مدتی ڈیٹا دکھاتا ہے کہ اعتماد جھٹکوں کے لیے بہت حساس
ہے — 2008 کے مالیاتی بحران اور COVID-19 وبا دونوں نے قومی سطح پر تیز اتار چڑھاؤ پیدا کیا، جس کے
بعد اکثر صرف جزوی بحالی ہوئی، جس میں OECD کا تجزیہ مسلسل یہ پاتا ہے کہ سمجھی گئی *صلاحیت* (کیا
حکومت وہ ڈیلیور کرتی ہے جو وہ کہتی ہے) اور سمجھی گئی *انصاف پسندی/دیانتداری* (کیا حکومت بغیر
بدعنوانی یا تعصب کے کام کرتی نظر آتی ہے) اعتماد کے عدد کے دو مضبوط ترین محرک ہیں، کسی ایک لین دین
سے اطمینان سے الگ۔ حکومتیں تیزی سے زیادہ باریک سطح پر بھی قانونی حیثیت کو عملی شکل دینے کی کوشش
کرتی ہیں — برطانیہ کے آزاد ریگولیٹرز اور انسپکٹوریٹس (National Audit Office، Parliamentary and
Health Service Ombudsman، شعبہ جاتی ریگولیٹرز جیسے Ofsted اور Care Quality Commission) ادارہ جاتی
قانونی حیثیت کی جانچ کے طور پر کام کرتے ہیں، "کیا عوام اب بھی اس سروس پر اعتماد کرتے ہیں" کو
قابلِ آڈٹ درجہ بندیوں میں بدلتے ہوئے۔

## ریاضیاتی بنیاد

اعتماد اور قانونی حیثیت ایک فریم ورک کی شکل کا موضوع ہے جس کے قابلِ استعمال مقداری متبادل یہ ہیں:

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## عملی مثال

**قومی ٹیکس ادارہ**: سالانہ عوامی قدر کی رپورٹ کے لیے قانونی حیثیت کی تکون بندی۔

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

ان میں سے صرف ایک عدد کی حرکت کمزور شہادت ہوگی؛ اسی مدت میں ایک ساتھ حرکت کرنے والے تین آزاد پیمانے
وہ نمونہ ہے جو قانونی حیثیت کے دعوے کو قابلِ دفاع بناتا ہے۔

## سافٹ ویئر انجینئرنگ سے تعلق

قانونی حیثیت کے میٹرکس شاذ و نادر ہی کسی ایک ٹیم کے ڈیش بورڈ سے پیدا ہوتے ہیں، جو خود ڈیزائن کا سبق
ہے: ایسی رپورٹنگ پائپ لائنز بنائیں جو آزاد بیرونی ذرائع (اومبڈزمین کیس ورک نظام، ریگولیٹر ریٹنگ
فیڈز، سروے وینڈرز) سے ڈیٹا لے کر اسے ملا سکیں، بجائے قانونی حیثیت کی رپورٹنگ کو صرف-اندرونی میٹرک
کے طور پر ڈیزائن کرنے کے، کیونکہ اندرونی طور پر ماخوذ قانونی حیثیت کے دعوے ("ہم اپنے آپ کو قابلِ
بھروسہ درجہ دیتے ہیں") بہت کم شہادتی وزن رکھتے ہیں — وہی آزادی کا مسئلہ جو
[عوامی قدر کے اسکور کارڈ](../public-value-scorecard/) میں قانونی حیثیت کے تناظر کے لیے نوٹ کیا گیا
ہے۔ شکایات اور اپیل کے ڈیٹا پائپ لائنز کو اتنی ہی ڈیٹا-معیار کی سختی کی ضرورت ہے جتنی کہ کوئی نتیجے
کی پائپ لائن جو
[نتائج کی بنیاد پر ادائیگی](../payment-by-results-and-social-impact-bonds/) کے معاہدوں کو فیڈ کرتی
ہے، کیونکہ کم-رپورٹ شدہ یا خراب طور پر درجہ بند شکایات کا ڈیٹاسیٹ خاموشی سے قانونی حیثیت کے مسئلے کو
اس سے پہلے کم بتاتا ہے کہ وہ ایک سال بعد اعتماد کے سروے میں نظر آئے۔ دیکھیں
[شہری اطمینان کے میٹرکس](../citizen-satisfaction-metrics/) اس ادارے-سطح کے پیمانے کے لین دین-سطح
کے ہم پلہ کے لیے، اور [عوامی قدر](../public-value/) مور کے مکمل اسٹریٹیجک-مثلث فریم ورک کے لیے جس
سے یہ ٹانگ تعلق رکھتی ہے۔

## ممکنہ خامیاں

- **اطمینان کو قانونی حیثیت کا متبادل سمجھنا**: کوئی شہری کسی ایک لین دین کے انٹرفیس سے مطمئن ہو
  سکتا ہے جبکہ ادارے پر مجموعی طور پر اعتماد نہ رکھتا ہو (یا اس کے برعکس) — دیکھیں
  [شہری اطمینان کے میٹرکس](../citizen-satisfaction-metrics/) یہ جاننے کے لیے کہ دونوں کو الگ
  رپورٹ کیوں کیا جانا چاہیے۔
- **ایک واحد خود-رپورٹ شدہ میٹرک پر انحصار کرنا**: کوئی اندرونی طور پر چلایا گیا اعتماد سروے بغیر
  کسی آزاد تصدیق کے (اومبڈزمین ڈیٹا، ریگولیٹر ریٹنگز) خود-نمبر دینے کے طور پر آسانی سے رد کیا جا
  سکتا ہے؛ تکون بندی کریں۔
- **آبادیاتی تفصیل کو نظر انداز کرنا**: مجموعی قومی اعتماد کے اعداد و شمار مخصوص گروہوں (عمر، نسل،
  آمدنی، یا خطے کے حساب سے) کے درمیان تیزی سے مختلف قانونی حیثیت کو چھپا سکتے ہیں — OECD کی اپنی
  Trust in Government اشاعتیں بالکل اسی وجہ سے تفصیل دیتی ہیں۔
- **کسی ایک جھٹکے سے چلنے والی کمی کو مستقل رجحان سمجھنا**: اعتماد کے اعداد و شمار بحرانوں (مالیاتی
  گراوٹ، وباؤں، نمایاں اسکینڈلز) کے ارد گرد تیزی سے حرکت کرتے ہیں اور جزوی طور پر بحال ہوتے ہیں؛
  کسی ایک جھٹکے کے بعد کے ڈیٹا پوائنٹ کو بغیر مزید ڈیٹا کے طویل مدتی گراوٹ میں نہیں بڑھایا جانا
  چاہیے۔

## ماخذ

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
