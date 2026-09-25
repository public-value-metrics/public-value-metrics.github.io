# حکومت میں بنانا بمقابلہ خریدنا (Build vs Buy in Government)

بنانا-بمقابلہ-خریدنا ایک منظم، خطرے سے موافق شدہ موازنہ ہے جو حسب ضرورت ڈیولپمنٹ کا تجارتی یا عام
حصولی کے مقابلے میں [ملکیت کی کل لاگت](../total-cost-of-ownership-in-government-it/)، قدر تک پہنچنے
کے وقت، اور خطرے کی بنیاد پر موازنہ کرتا ہے۔ حکومت ڈھانچے کے اعتبار سے ایک خریدنے والا شعبہ ہے —
Technology Code of Practice عام اور کلاؤڈ حل کی طرف ایک تصور قائم کرتی ہے — پھر بھی محکموں کے اندر
انجینئرنگ ٹیمیں اب بھی بنانے کی طرف مائل رہتی ہیں، انہی وجوہات کی بنا پر جن کی بنا پر ہر جگہ بنانے
والے مائل رہتے ہیں۔

## یہ کیوں اہم ہے

Government Digital Service کا Technology Code of Practice
(<https://www.gov.uk/guidance/the-technology-code-of-practice>) اور بنانے یا خریدنے کے فیصلے سے
متعلق Service Manual کی ساتھ والی رہنمائی محکموں کو مجبور کرتی ہے کہ وہ حسب ضرورت ڈیولپمنٹ کا جواز
اس تصور کے خلاف پیش کریں کہ عام صلاحیت خریدی جانی چاہیے، بنائی نہیں، اور صرف حقیقی معنوں میں نئی،
مشن کو ممتاز کرنے والی صلاحیت ہی حسب ضرورت کوڈ کا جواز رکھتی ہے۔ HM Treasury کی Green Book سے متعلق
پرامیدی تعصب کی ضمنی رہنمائی، جو بڑے عوامی حصولوں کے 2002 کے Mott MacDonald جائزے سے اخذ کی گئی ہے،
IT پروجیکٹس کو جانچے گئے کسی بھی زمرے میں سب سے وسیع اضافے کی رینج دیتی ہے — سرمائی لاگت کے تخمینوں
کو جانچ میں استعمال ہونے سے پہلے کم از کم 10 فیصد اور زیادہ سے زیادہ 200 فیصد تک بڑھانے کی سفارش کی
جاتی ہے، جو یہ ظاہر کرتا ہے کہ تاریخی طور پر عوامی حصولی میں سافٹ ویئر بنانے کا کتنا برا تخمینہ لگایا
گیا ہے۔ بنانا-بمقابلہ-خریدنا کا تجزیہ بالکل اسی لیے موجود ہے کہ اس خطرے کی موافقت کو منظوری سے پہلے
میز پر لایا جائے، بجائے اس کے کہ یہ سال کے دوران زائد خرچ کی درخواست کے طور پر سامنے آئے۔

## ریاضیاتی بنیاد

```
Compare over the same 3–5 year horizon, discounted at the Green Book
social discount rate (see social-discount-rate.md):

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book optimism bias pattern):
  build cost × 1.1–3.0        (IT project uplift range, Mott MacDonald)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and contract exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability the mission, or plumbing?
  2. time-to-value × cost of delay (see cost-of-delay-in-public-programmes.md)
  3. risk-adjusted total cost of ownership
```

## عملی مثال

ایک مقامی اتھارٹی کو بالغوں کی سماجی نگہداشت کے لیے ایک کیس مینجمنٹ نظام درکار ہے۔ خریدنا: SaaS
£180,000/سال پر، 4 ماہ میں لائیو۔ بنانا: تخمینہ £900,000 کے علاوہ £150,000/سال دیکھ بھال، 14 ماہ
میں لائیو۔

```
Risk-adjusted build cost = 900,000 × 1.4 = £1,260,000
5-year TCO:
  buy  = 180,000 × 5 = £900,000
  build = 1,260,000 + 150,000 × 5 = £2,010,000

Delay term: the system avoids £40,000/month in duplicated assessments;
build arrives 10 months later than buy.
CoD = 10 × 40,000 = £400,000

Effective comparison: £900,000 (buy) vs £2,010,000 + £400,000 = £2,410,000 (build)
```

خریدنا پانچ سالوں میں تقریباً £1.5 ملین سے جیت جاتا ہے، اور تعمیر کے تخمینے کے بعد سب سے بڑی واحد
لائن تاخیر کی لاگت ہے جسے ایک خالص سرمائی موازنہ کبھی سامنے نہ لاتا۔

## سافٹ ویئر انجینئرنگ سے تعلق

وہ ضوابط جو اس تجزیے سے براہِ راست ڈیلیوری کے عمل میں منتقل ہوتے ہیں: **سابقہ بنیاد پر خطرے کی
موافقت** — Mott MacDonald کا اضافہ Green Book کے پرامیدی تعصب کا سافٹ ویئر کے میدان میں مساوی، میکانکی
طور پر لاگو کیا گیا ورژن ہے، لہٰذا ٹیموں کو اپنے تخمینے کو استثنیٰ سمجھنے کے بجائے اس سے استثنیٰ کی
دلیل دینی چاہیے؛ **موازنہ کی دیانت داری** — بنانے کا متبادل بہترین دستیاب خریدنے کا اختیار ہے، "کچھ
نہیں" نہیں، جو براہِ راست [سرکاری اخراجات میں مواقع کی لاگت](../opportunity-cost-in-public-spending/)
سے جڑتا ہے؛ اور **ایماندارانہ TCO موازنہ** — ہر تعمیراتی تجویز کا موازنہ خریدنے کے اختیار کی مکمل
[ملکیت کی کل لاگت](../total-cost-of-ownership-in-government-it/) سے کرنا چاہیے، نہ کہ اس کی فہرست
قیمت سے۔ جہاں بنانا واقعی جیت جاتا ہے، وہاں اضافی تعمیراتی وقت کی
[تاخیر کی لاگت](../cost-of-delay-in-public-programmes/) کو کاروباری معاملے میں واضح طور پر قیمت دی
جانی چاہیے، نہ کہ اسے ایک غیر بیان کردہ مفروضے کے طور پر چھوڑ دیا جائے کہ وقت اہم نہیں۔

## ممکنہ خامیاں

- **وینڈر کی فہرست قیمت کا موازنہ غیر خطرے-موافق شدہ تعمیراتی تخمینے سے کرنا**: یہ تعمیر کو دوہرا
  فائدہ دیتا ہے، ایک بار لاگت پر اور ایک بار شیڈول پر۔
- **صفر قیمت والی اندرونی محنت**: سول سروس انجینئرنگ کے وقت کو "مفت" سمجھا جاتا ہے کیونکہ یہ پہلے
  ہی محکماتی افرادی قوت کے بجٹ میں شامل ہے، جو اس کی اصل مواقع کی لاگت کو اس دوسرے کام کے خلاف چھپا
  دیتا ہے جو وہ ٹیم کر سکتی تھی۔
- **دونوں سمتوں میں غیر قیمت شدہ لاک-اِن**: وینڈر سے نکلنے اور ڈیٹا کی منتقلی کی لاگتیں حقیقی ہیں،
  مگر حسب ضرورت تعمیر کا بس-فیکٹر اور اس کی زندگی بھر ایک چھوٹی، مشکل سے بدلی جانے والی اندرونی ٹیم
  پر انحصار بھی حقیقی ہے۔
- **پلمبنگ کے لیے مشن-امتیاز کا دعویٰ**: "یہ ہمارے لیے بنیادی ہے" کا دعویٰ انضمام کے مڈل ویئر یا
  دستاویز اسٹور کے بارے میں کیا جانا — اسے اس بات کے خلاف جانچیں کہ کیا کوئی شہری یا کیس ورکر کبھی
  محسوس کرے گا کہ نیچے کون سا نظام چل رہا ہے۔

## ماخذ

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
