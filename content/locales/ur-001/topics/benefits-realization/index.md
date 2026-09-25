# فوائد کا حصول (Benefits Realization)

فوائد کے حصول کا انتظام وہ نظم و ضبط ہے جو کاروباری معاملے میں وعدہ کیے گئے فوائد کی نشاندہی، بنیاد
سازی، پیروی، اور *ثبوت* فراہم کرتا ہے کہ وہ فوائد لانچ کے بعد واقعی حاصل ہوئے۔ برطانوی عوامی سرمایہ
کاری میں یہ HM Treasury کی Green Book کے Five Case Model اور Infrastructure and Projects Authority
کی مخصوص فوائد کے انتظام کی رہنمائی کے اندر موجود ہے؛ اس کے بغیر، "اس نظام نے کیس ورکرز کے ہر دعوے
پر تیس منٹ بچائے" ہمیشہ کے لیے ایک غیر جانچا گیا دعویٰ ہی رہتا ہے۔

## یہ کیوں اہم ہے

کاروباری معاملات وعدے ہیں؛ فوائد کا حصول ان کا آڈٹ ہے۔ Green Book تقاضا کرتی ہے کہ ہر خرچ کا معاملہ
پانچ آزمائشوں سے گزرے — اسٹریٹیجک، اقتصادی، تجارتی، مالی، اور انتظامی — اور انتظامی معاملے کو
*منظوری سے پہلے* یہ بیان کرنا چاہیے کہ فوائد کیسے حاصل کیے جائیں گے: نامزد مالکان، محفوظ کردہ بنیادی
اعداد و شمار، اور مقررہ پیمائش کی تاریخیں۔ Infrastructure and Projects Authority کی رہنما کتاب،
*Benefits Management: A Guide to Realizing Benefits for Government Major Projects*
(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>)،
اس لیے موجود ہے کیونکہ Government Major Projects Portfolio پر IPA کی اپنی پورٹ فولیو رپورٹنگ نے بار
بار بڑے پروگراموں میں ڈیلیوری کے اعتماد اور فوائد کے حصول کو مسلسل کمزوریوں کے طور پر پایا ہے۔ کوئی
پروجیکٹ "وقت پر اور بجٹ کے اندر" اپنی ڈیلیوری کی منزلوں کے مطابق بند ہو سکتا ہے جبکہ اب بھی وہ فوائد
حاصل کرنے میں ناکام رہے جن کا جواز پیش کر کے رقم خرچ کی گئی تھی — یہ فرق IPA کی رہنمائی اس نظم و ضبط
کا پورا نکتہ سمجھتی ہے۔

## ریاضیاتی بنیاد

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: named owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash-releasing / capacity-freed / qualitative,
  tracked and reported separately
```

## عملی مثال

**مقامی حکومت**: ایک ڈیجیٹل پلاننگ ایپلیکیشن پورٹل کے کاروباری معاملے نے سالانہ وعدہ کیا تھا: پرنٹنگ
اور ڈاک کے اوور ہیڈ میں £300,000 کی کمی (نقد)، 4,500 افسر گھنٹے آزاد ہونا (صلاحیت)، اور درخواست
دہندگان کی اطمینان میں بہتری (کیفیتی)۔ لانچ کے بارہ ماہ بعد:

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

70 فیصد حصول کی شرح ناکامی نہیں ہے — یہ ایسا علم ہے جو اگلی پیش گوئی کو بہتر طور پر ترتیب دینے دیتا
ہے۔ ایک غیر ناپا گیا معاملہ ہمیشہ کے لیے 100 فیصد کا دعویٰ کرتا رہتا، اور مالیاتی ٹیم کے پاس اسے
چیلنج کرنے کی کوئی بنیاد نہ ہوتی۔

## سافٹ ویئر انجینئرنگ سے تعلق

انجینئرنگ ادارے معمول کے مطابق پلیٹ فارم اور اوزار سازی کی سرمایہ کاریوں کی منظوری پیش گوئی شدہ فائدے
کی بنیاد پر دیتے ہیں اور تقریباً کبھی بعد میں ان کا آڈٹ نہیں کرتے — بالکل وہی بیماری جسے ٹھیک کرنے
کے لیے فوائد کے حصول کا انتظام موجود ہے۔ ہلکا پھلکا ورژن: مادیت کی حد سے اوپر ہر تجویز ایک فائدے کا
مالک، ایک بنیادی میٹرک، اور ایک مقررہ جائزہ تاریخ (عام طور پر لانچ کے چھ ماہ بعد) نامزد کرتی ہے، اور
ماضی کی تجاویز سے حصول کی شرحوں کو یہ طے کرنا چاہیے کہ ادارہ کسی ٹیم یا وینڈر کی اگلی پیش گوئی پر
کتنا بھروسہ کرتا ہے۔ یہ [Green Book کی جانچ](../green-book-appraisal/) سے واپس جڑتا ہے، جو وہ پیش
گوئی طے کرتی ہے جسے یہ نظم و ضبط آڈٹ کرتا ہے، اور یہ وہی منطق ہے جو اس وسیع پیمانے پر رپورٹ شدہ نتیجے
کے پیچھے ہے کہ جنریٹو AI کے اکثر پائلٹس کوئی قابلِ پیمائش منافع نہیں دکھاتے — دیکھیں
[سرکاری شعبے میں AI پیداواریت](../ai-productivity-in-the-public-sector/) — کیونکہ وہ پائلٹس جنہوں
نے *واقعی* قدر لوٹائی، تقریباً بلا استثنیٰ، وہ تھے جن کے پاس شروع سے ایک نامزد، قابلِ پیروی فائدے کی
لائن موجود تھی۔ یہ اس بات کی تفریق پر بھی منحصر ہے کہ واقعی کیا ڈیلیور کیا گیا اور واقعی کیا حاصل ہوا
— دیکھیں [نتائج بمقابلہ پیداوار](../outcomes-vs-outputs/)۔

## ممکنہ خامیاں

- **لانچ سے پہلے کوئی بنیادی اعداد و شمار نہ ہونا**: یہ مہلک، ناقابلِ اصلاح کمی ہے — اس کے بغیر، کوئی
  حصول کی شرح کبھی شمار نہیں کی جا سکتی، صرف دعویٰ کی جا سکتی ہے۔
- **بے مالک فائدے**: بغیر نامزد مالک کے فائدے کا کوئی بھی ڈیٹا جمع نہیں کرتا، اور ہر پورٹ فولیو جائزہ
  اسے ازخود "بڑی حد تک راستے پر" رپورٹ کرتا ہے۔
- **پروگرام پورٹ فولیو میں دوہری گنتی کے فوائد**: دو پروجیکٹس دونوں اسی آزاد شدہ کیس ورکر صلاحیت کو
  اپنا فائدہ قرار دیتے ہیں — اسے پکڑنے کے لیے پورٹ فولیو بھر میں ایک واحد فوائد کا رجسٹر رکھیں۔
- **حصول کا تماشا**: آسان کیفیتی کامیابیوں کو نمایاں طور پر ناپنا اور رپورٹ کرنا جبکہ نقد اور صلاحیت
  کی لائنیں خاموشی سے غیر جانچی رہ جاتی ہیں۔
- **ڈیلیوری کو حصول سے خلط ملط کرنا**: کسی پروجیکٹ کا اپنی منزلوں کو "وقت پر اور بجٹ کے اندر" بند
  کرنا اس بارے میں کچھ نہیں کہتا کہ کیا پیش گوئی شدہ فائدہ واقعی رونما ہوا — IPA کی رہنمائی انہیں دو
  الگ سوالات اور دو الگ ثبوت کے راستوں کے طور پر دیکھتی ہے۔

## ماخذ

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
