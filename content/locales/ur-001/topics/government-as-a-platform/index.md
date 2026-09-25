# حکومت بطور پلیٹ فارم (Government as a Platform, GaaP)

حکومت بطور پلیٹ فارم مشترکہ، دوبارہ استعمال ہونے والے اجزاء — ایک اطلاعاتی سروس، ایک ادائیگی کی
سروس، ایک شناختی سروس — کو ایک بار، مرکزی طور پر بنانے کی حکمتِ عملی ہے، تاکہ سینکڑوں انفرادی حکومتی
سروسز اپنے خود کے بنانے کی بجائے انہیں استعمال کریں۔ یہ عوامی ڈیجیٹل بنیادی ڈھانچے کو ایک پلیٹ فارم
معاشیات کے مسئلے کے طور پر دوبارہ فریم کرتا ہے: قدر کسی ایک انضمام میں نہیں ہے، یہ *اگلی* ٹیم کی
حاشیائی لاگت میں ہے جو اسے اپناتی ہے، جو صفر کے قریب پہنچتی ہے۔

## یہ کیوں اہم ہے

GDS نے 2015 کی اپنی "Government as a Platform" اشاعت میں اس حکمتِ عملی کو باقاعدہ طور پر بیان کیا،
دلیل دیتے ہوئے کہ حکومت ایک ہی صلاحیتوں — ادائیگی لینا، صارف کو مطلع کرنا، شناخت کی تصدیق، پتے کی
تلاش — کو الگ الگ سروس در سروس بنا رہی تھی، ہر ایک اپنی خریداری، سیکیورٹی کی تشخیص، اور جاری سپورٹ کا
بوجھ اٹھاتے ہوئے۔ متبادل مشترکہ پلیٹ فارموں کی ایک چھوٹی تعداد تھی، جو ایک بار اعلیٰ معیار پر بنائے
جائیں اور ہر جگہ دوبارہ استعمال ہوں: GOV.UK Notify ای میلز، ٹیکسٹ پیغامات اور خطوط بھیجنے کے لیے،
GOV.UK Pay آن لائن ادائیگیاں لینے کے لیے، اور GOV.UK One Login (سابقہ GOV.UK Verify شناختی پروگرام کا
جانشین) شناخت کی تصدیق کے لیے۔ ان پلیٹ فارمز نے جو پیمانہ حاصل کیا ہے وہ سب سے واضح ثبوت ہے کہ حکمتِ
عملی نے کام کیا: GOV.UK Pay نے تقریباً 1,800 انفرادی سروسز میں £10 بلین سے زیادہ کی ٹرانزیکشنز
پروسیس کی ہیں — اور جہاں اسے اپنی پہلی £1 بلین پروسیس کرنے میں تقریباً چار سال لگے، اب یہ اتنی رقم
تقریباً پانچ ماہ میں پروسیس کرتا ہے — جبکہ GOV.UK Notify نے 1,500 سے زیادہ حکومتی اداروں کی طرف سے
9 بلین سے زیادہ پیغامات بھیجے ہیں۔ ان اپنانے والی ہر سروس نے اپنا خود کا ادائیگی گیٹ وے یا میسجنگ
پائپ لائن بنانے، محفوظ کرنے، اور برقرار رکھنے سے بچا۔

## ریاضیاتی بنیاد

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## عملی مثال

**اپنا ادائیگی گیٹ وے بنانے کی بجائے GOV.UK Pay اپنانے والی مقامی اتھارٹی**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

اس £73,000 کو تقریباً 1,800 سروسز پر پیمانہ دیں جو اب GOV.UK Pay استعمال کر رہی ہیں اور حکومت بھر
میں مجموعی بچی ہوئی تعمیراتی لاگت سینکڑوں ملین میں ہے — پلیٹ فارم کی معاشیات، نہ کہ کوئی ایک انضمام،
وہ جگہ ہے جہاں حکمتِ عملی کی قدر دراصل بیٹھتی ہے۔

## سافٹ ویئر انجینئرنگ سے تعلق

حکومت بطور پلیٹ فارم [حکومت میں بنانا بمقابلہ خریدنا](../build-vs-buy-in-government/) کے لیے ایک
براہِ راست دلیل ہے: جب کوئی مشترکہ، جانچا گیا، اچھی طرح چلایا گیا جزو موجود ہو، تو حسب ضرورت مساوی
بنانا شاذ و نادر ہی بہتر [پیسے کے عوض قدر](../value-for-money/) کا انتخاب ہوتا ہے، اور یہ تقریباً
تعریف کے مطابق [ڈیجیٹل سروس معیار](../digital-service-standard/) کے نکتہ 13 ("کھلے معیارات، مشترکہ
اجزاء اور نمونوں کا استعمال اور حصہ ڈالیں") میں ناکام ہوتا ہے۔ یہ
[حکومتی IT میں ملکیت کی کل لاگت](../total-cost-of-ownership-in-government-it/) کی شکل کو بھی بدلتا
ہے: پلیٹ فارم اپنانا ایک بڑی سرمائی اور دیکھ بھال کی لائن کو ایک چھوٹی، استعمال سے منسلک آپریٹنگ لاگت
سے بدل دیتا ہے، جس کی پیش گوئی کرنا آسان ہے اور اگر کوئی سروس بند کر دی جائے تو فنڈنگ روکنا آسان ہے۔
اجزاء کے کھلے دوبارہ استعمال کا ایک کزن [کھلے ڈیٹا کی قدر](../open-data-value/) میں ہے — دونوں وہ
حکمتِ عملیاں ہیں جو کسی چیز کو جو حکومت ایک بار پیدا کرتی ہے مشترکہ بنیادی ڈھانچے کے طور پر سمجھتی
ہیں، محکماتی اثاثے کے طور پر نہیں۔

## ممکنہ خامیاں

- **پرچھائیں دوبارہ تعمیر**: ٹیمیں خاموشی سے اپنا خود کا ادائیگی یا اطلاعاتی انضمام بناتی ہیں کیونکہ
  پلیٹ فارم کا آن بورڈنگ عمل خود کرنے سے سست ہے — یہ گورننس کی رگڑ کا مسئلہ ہے، ٹیکنالوجی کا نہیں،
  اور یہ خاموشی سے پوری حکمتِ عملی کے انحصار کردہ دوبارہ استعمال کی معاشیات کو ختم کر دیتا ہے۔
- **پلیٹ فارم ٹیم کو اس کی پیدا کردہ قدر کے مقابلے میں کم فنڈ کرنا**: قدر استعمال کرنے والے محکموں کو
  ملتی ہے جبکہ لاگت پلیٹ فارم ٹیم کے پاس بیٹھتی ہے، جو مسلسل کم سرمایہ کاری کا خطرہ پیدا کرتا ہے جب
  تک فنڈنگ مرکزیت اور محفوظ نہ ہو — commons کے المیے کا ایک ورژن۔
- **پلیٹ فارم کی کامیابی کو صرف استعمال سے ناپنا**: اپنانے کے اعداد (شامل شدہ سروسز، بھیجے گئے
  پیغامات) ایک قائدانہ اشارہ ہیں، قدر کا ثبوت نہیں؛ اصل امتحان اوپر دی گئی بچی ہوئی تعمیراتی لاگت اور
  بچے ہوئے خطرے کا حساب کتاب ہے۔
- **"پلیٹ فارم" کو "مونولتھ" کا مترادف سمجھنا**: GaaP کے اجزاء کامیاب ہوتے ہیں کیونکہ ہر ایک تنگ،
  مستحکم انٹرفیس کے ساتھ ایک کام اچھی طرح کرتا ہے — غیر متعلقہ صلاحیتوں کو ایک "پلیٹ فارم" میں بنڈل
  کرنا ایک مختلف پیمانے پر حسب ضرورت تعمیر کا مسئلہ دوبارہ پیدا کرتا ہے۔

## ماخذ

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
