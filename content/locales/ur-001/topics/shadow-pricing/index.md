# شیڈو قیمت گزاری (Shadow Pricing)

شیڈو قیمت کسی ایسی چیز، وسیلے، یا بیرونی اثر کو دی گئی تخمینہ شدہ قدر ہے جس کی کوئی قابلِ مشاہدہ
مارکیٹ قیمت نہیں، یا جس کی مارکیٹ قیمت مسخ شدہ ہے اور اس کی حقیقی سماجی قدر کی عکاسی نہیں کرتی۔
حکومتی جائزہ سرکاری شیڈو قیمتوں کے ایک چھوٹے سیٹ پر انحصار کرتا ہے — کاربن، غیر-کام کا وقت، بے روزگار
محنت — جو مرکزی طور پر شائع کی جاتی ہیں تاکہ ہر محکمہ ایک ہی عدد استعمال کرے۔

## یہ کیوں اہم ہے

شیڈو قیمتیں اس لیے موجود ہیں کیونکہ [سماجی لاگت-فائدہ تجزیہ](../social-cost-benefit-analysis/) ہر
لاگت اور فائدے کے لیے ایک مالیاتی قدر کے بغیر کام نہیں کر سکتا، اور سب سے اہم چیزوں میں سے کئی — ایک
ٹن خارج شدہ کاربن، کسی مسافر کے وقت کا ایک گھنٹہ، بصورتِ دیگر بے روزگار محنت کا ایک گھنٹہ — کی کوئی
مارکیٹ قیمت بالکل نہیں، یا ایسی مارکیٹ قیمت ہے جو ان کی حقیقی سماجی لاگت کی غلط نمائندگی کرتی ہے۔
HM Treasury اور Department for Energy Security and Net Zero مشترکہ طور پر کاربن کی وہ شیڈو قیمت
شائع کرتے ہیں جو تمام برطانوی حکومتی جائزے میں استعمال ہوتی ہے
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>)،
جو کسی کاربن مارکیٹ قیمت سے نہیں بلکہ ایک ہدف-مطابقتی طریقے سے اخذ کی جاتی ہے: کاربن کی قدر اس
حاشیائی تخفیف لاگت پر مقرر کی جاتی ہے جو برطانیہ کے قانونی کاربن بجٹ کو حاصل کرنے کے لیے درکار ہو،
جو EU یا UK Emissions Trading Scheme پر کاربن کی اصل تجارتی قیمت کا مشاہدہ کرنے سے بنیادی طور پر
مختلف منطق ہے۔

شیڈو اجرت کی شرح محنت کی طرف اسی طرح کی منطق پر عمل کرتی ہے۔ کسی ایسے شخص کو ملازمت دینا جو بصورتِ
دیگر بے روزگار ہوتا، معاشرے کو اس کی مکمل اجرت کی لاگت نہیں دیتا — اس اجرت کا ایک حصہ چھوڑی گئی
فوائد کی ادائیگیوں اور کھوئے گئے فرصت/تلاش کے وقت سے ایک منتقلی ہے نہ کہ معاشرے کے وسائل پر ایک
خالص نیا بوجھ — اس لیے Green Book کی رہنمائی بے روزگاری سے کھینچی گئی محنت کے لیے مارکیٹ اجرت سے
کم شیڈو قیمت مقرر کرتی ہے، جو اس محنت کی حقیقی مواقع کی لاگت کی عکاسی کرتی ہے (دیکھیں
[سرکاری اخراجات میں مواقع کی لاگت](../opportunity-cost-in-public-spending/)) نہ کہ اس کی مارکیٹ
قیمت کی۔

## ریاضیاتی بنیاد

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

دونوں اعداد مرکزی طور پر مقرر کردہ پالیسی روایات ہیں، تجرباتی مارکیٹ مشاہدات نہیں — شیڈو قیمت کا
پورا مقصد کسی غائب یا مسخ شدہ مارکیٹ کی جگہ لینا ہے، اس لیے کوئی جائزہ جو کوئی شیڈو قیمت استعمال
کرتا ہے اسے موجودہ سرکاری ماخذ کا حوالہ دینا چاہیے نہ کہ اپنا عدد اخذ کرنا، بالکل اسی لیے تاکہ ہر
محکمے کا جائزہ موازنہ کے قابل ہو۔

## عملی مثال

**مرکزی حکومت**: کسی سیلابی دفاعی منصوبے کا جائزہ تخمینہ لگاتا ہے کہ یہ 30 سالہ جائزہ عمر کے دوران
سالانہ 400 ٹن CO2e اخراج سے بچاتا ہے (ہنگامی آلات کے کم استعمال اور بچی گئی از سرِ نو تعمیر سے کم
شدہ مجسم کاربن کے ذریعے)، ایک "کم از کم کرو" بنیادی خط کے مقابلے میں۔

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

چونکہ سرکاری شیڈول میں کاربن کی قدر جائزے کی مدت کے دوران *بڑھتی* ہے (سخت ہوتے کاربن بجٹ کی عکاسی
کرتے ہوئے)، تجزیہ کار کو 30 سالہ سلسلے کے ہر سال کے لیے درست سال-مخصوص قدر لاگو کرنی چاہیے، کوئی
یکساں شرح نہیں — پورے دوران سال 1 کی قدر استعمال کرنا بعد کے سالوں کے فوائد کو کم بتائے گا اور مختلف
کاربن پروفائل والے متبادل سیلابی دفاعی ڈیزائنوں کے خلاف درجہ بندی کو مسخ کر دے گا۔

**مقامی حکومت**: کسی کونسل کا طویل مدتی بے روزگار رہائشیوں کے لیے روزگار سپورٹ پروگرام 150 لوگوں کو
£11/گھنٹہ ادا کرنے والی ملازمتوں میں رکھتا ہے۔ اسے مکمل مارکیٹ اجرت سے قدر دینا پروگرام کو £11 ×
کام کیے گئے گھنٹوں کے برابر ایک سماجی فائدے کا کریڈٹ دے گا، مگر شیڈو اجرت کی شرح کا طریقہ یہ تسلیم
کرتا ہے کہ یہ لوگ دوسری ملازمتوں سے کھینچے گئے کارکن نہیں تھے — پروگرام سے پہلے ان کی محنت کی حقیقی
مواقع کی لاگت کم تھی۔

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

یہی وجہ ہے کہ زیادہ بے روزگاری والے علاقوں میں روزگار پروگراموں کے جائزے ایک مثبت خالص سماجی قدر
دکھا سکتے ہیں حالانکہ وہی پروگرام، مکمل روزگار والے علاقے میں چلایا جائے جہاں ہٹائی گئی محنت محض
دوسری ملازمتوں سے کھینچی جاتی، ایسا نہیں دکھائے گا۔

## سافٹ ویئر انجینئرنگ سے تعلق

شیڈو قیمت گزاری شاذ و نادر ہی سافٹ ویئر ڈیلیوری کو براہِ راست چھوتی ہے، مگر یہ ہر اس وقت اہم ہو جاتی
ہے جب کوئی کاروباری معاملہ کسی آئی ٹی تبدیلی سے کاربن یا سماجی فائدے کا دعویٰ کرتا ہے — کسی ڈیٹا-سینٹر
انضمام کا کاربن بچت کا دعویٰ، یا کسی کاغذ-پاک سروس کا بچائی گئی پرنٹنگ اور ڈاک کے کاربن کا دعویٰ،
اسے موجودہ سرکاری کاربن کی شیڈو قیمت استعمال کرنی چاہیے نہ کہ کوئی ایجاد کردہ عدد، اور اسے صحیح
سال-بہ-سال شیڈول لاگو کرنا چاہیے نہ کہ کوئی یکساں شرح، بالکل جیسے کسی بھی دوسرے Green Book جائزے
کے ان پٹ کے ساتھ۔ دیکھیں
[سرکاری آئی ٹی میں کل ملکیتی لاگت](../total-cost-of-ownership-in-government-it/) اور
[سرکاری شعبے کی سائبر سیکیورٹی کی قدر](../public-sector-cybersecurity-value/)، جو دونوں اکثر کسی
مشکل-سے-مالیت والے ان پٹ (خلاف ورزی کا خطرہ، ڈاؤن ٹائم) کے لیے کسی شیڈو قیمت کی ضرورت رکھتے ہیں
براہِ راست شمار کی گئی اشیاء کے ساتھ۔

## ممکنہ خامیاں

- **پرانا کاربن یا اجرت کا عدد استعمال کرنا۔** دونوں قدروں پر مرکزی رہنمائی کی طرف سے وقتاً فوقتاً
  نظر ثانی کی جاتی ہے؛ کوئی جائزہ جو منسوخ شدہ عدد پر بنایا گیا ہو Treasury کی جانچ سے نہیں بچے گا۔
- **کئی دہائیوں کے جائزے میں یکساں شیڈو کاربن قیمت لاگو کرنا۔** سرکاری شیڈول وقت کے ساتھ بڑھتا ہے؛
  پورے دوران سال 1 کی قدر استعمال کرنا فوائد یا لاگتوں کی پروفائل کو غلط بیان کرتا ہے۔
- **شیڈو اجرت کو کارکن کی اصل تنخواہ پر رعایت سے گڈمڈ کرنا۔** شیڈو اجرت کی شرح *جائزے* کی محنت کے
  ان پٹ کی قدر گزاری کو ایڈجسٹ کرتی ہے، وہ اجرت نہیں جو کارکن کو واقعی ادا کی جاتی ہے — دونوں کو
  گڈمڈ کرنا (غلطی سے) مارکیٹ سے کم تنخواہ کا جواز پیش کرنے کی دعوت دیتا ہے۔
- **سرکاری قیمت کی بجائے اپنی مرضی کی شیڈو قیمت اخذ کرنا۔** شیڈو قیمتیں بالکل اس لیے پالیسی روایات
  ہیں تاکہ جائزے محکموں میں موازنہ کے قابل ہوں؛ کوئی مقامی طور پر ایجاد کردہ عدد، خواہ کتنی ہی
  اچھی دلیل سے کیوں نہ ہو، اس موازنہ پذیری کو توڑ دیتا ہے۔

## ماخذ

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
