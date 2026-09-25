# সরকারি মূল্যে কৃত্রিম বুদ্ধিমত্তা (AI in Government Value)

সরকারি মূল্যে কৃত্রিম বুদ্ধিমত্তা (AI) হলো এই শর্ত যে জনসেবায় ব্যবহৃত কোনো AI ব্যবস্থাকে
অন্য যেকোনো ব্যয় সিদ্ধান্তের মতোই একই মূল্য-প্রতি-অর্থ ও জনমূল্যের মানদণ্ড অতিক্রম করতে
হবে — নতুন বলে নিচু মানদণ্ড নয়, আর ভীতিকর বলে উঁচু মানদণ্ডও নয়। এটি সেই প্রশ্ন, যার উত্তর একটি
বিতরণ দল অবশ্যই AI ফিচার চালু হওয়ার পরে নয়, আগেই দিতে সক্ষম হতে হবে: নিশ্চয়তা, তদারকি ও
ঝুঁকিকে সততার সাথে দাম ধরার পর, এটি কি খরচের চেয়ে বেশি মূল্য উৎপাদন করে?

## কেন এটি গুরুত্বপূর্ণ

যুক্তরাজ্যের কেন্দ্রীয় ডিজিটাল ও তথ্য দপ্তর (CDDO) ২০২৪ সালে সরকারের জন্য জেনারেটিভ AI
কাঠামো প্রকাশ করে, যা জুন ২০২৩ সালের পূর্ববর্তী অন্তর্বর্তী নির্দেশিকার উপর ভিত্তি করে তৈরি,
এবং এটি দশটি নীতির চারপাশে গঠিত — জেনারেটিভ AI কী, এর নৈতিক প্রভাব, টুল নিরাপত্তা, মান
নিশ্চয়তা নিয়ন্ত্রণ, সম্পূর্ণ জেনারেটিভ AI জীবনচক্র ব্যবস্থাপনা, প্রকৃত ব্যবহারের ক্ষেত্র
চিহ্নিতকরণ, আন্তঃসরকারি সহযোগিতা, স্বচ্ছতা, দক্ষতা এবং শাসন-ব্যবস্থা। কাঠামোর "অর্থবহ মানবিক
নিয়ন্ত্রণ" এবং সম্পূর্ণ জীবনচক্র ব্যবস্থাপনার উপর জোর দেওয়ার কারণ হলো AI প্রকল্পের ব্যবসায়িক
কেসগুলোর একটি নির্দিষ্ট ব্যর্থতার ধরন আছে যা অন্য কোনো আইটি ব্যয়ে নেই: একটি পাইলটের প্রধান
উৎপাদনশীলতা সংখ্যা তৈরি করা সহজ এবং বাড়িয়ে বলা সহজ, কারণ এটি টুলটি তৈরি করা যাচাইকরণ, সংশোধন
ও তদারকির বোঝা হিসাবে নেওয়ার আগেই পরিমাপ করা হয়। এই কাঠামোর পাশাপাশি, অ্যালগরিদমিক স্বচ্ছতা
রেকর্ডিং মানদণ্ড (ATRS)-এর প্রয়োজন হলো সরকারি সংস্থাগুলো এমন অ্যালগরিদমিক টুলের জন্য একটি
প্রমিত রেকর্ড প্রকাশ করবে — উদ্দেশ্য, ব্যবহৃত তথ্য, কর্মক্ষমতা, ন্যায্যতা পরীক্ষা, মানবিক
তদারকি ব্যবস্থা — যেগুলো ব্যক্তিদের সম্পর্কে সিদ্ধান্তে উল্লেখযোগ্য প্রভাব ফেলে, যা একটি AI
ব্যবস্থার নিশ্চয়তা খরচকে একটি অভ্যন্তরীণ অনুমানের পরিবর্তে জনসাধারণের রেকর্ডের বিষয়ে পরিণত
করে, যা একটি দল চুপচাপ এড়িয়ে যেতে পারে না।

## গাণিতিক হিসাব

AI গ্রহণকে মানসম্মত [মূল্য-প্রতি-অর্থ](../value-for-money/) মূল্যায়নের প্রতিস্থাপন হিসেবে
নয়, বরং তার সংযোজন হিসেবে মূল্যায়ন করা হয়, যেখানে AI-নির্দিষ্ট পদগুলো একটি একক
"উৎপাদনশীলতা লাভ" সংখ্যায় গুটিয়ে না রেখে স্পষ্টভাবে উল্লেখ করা হয়:

```
Net value of an AI system =
    productivity gain (time saved × loaded staff cost)
  − licence/compute cost
  − human verification and oversight cost (checking AI output before
    it's acted on — this does not shrink to zero even for mature tools)
  − ATRS documentation and ongoing monitoring cost
  − risk-adjusted cost of harm from errors, bias, or hallucination,
    weighted by who bears that harm (distributional-weighting)

A pilot productivity figure that omits the oversight term is not
comparable to a business-as-usual cost baseline that already includes
equivalent human review — see ai-productivity-in-the-public-sector
for the fuller productivity-measurement discipline this borrows from.
```

## ব্যবহারিক উদাহরণ

**একটি স্থানীয় কর্তৃপক্ষ নিয়মিত কাউন্সিল ট্যাক্স জিজ্ঞাসার প্রথম উত্তর খসড়া করতে একটি
জেনারেটিভ AI টুল ব্যবহার করছে**: বছরে ২৫,০০০টি জিজ্ঞাসা, আগে সম্পূর্ণভাবে কেসওয়ার্কারদের দ্বারা
পরিচালিত, গড়ে ১৪ মিনিট/জিজ্ঞাসা, লোডেড স্টাফ খরচ ঘণ্টায় £৩৪।

```
Baseline (no AI) cost:
  25,000 × (14/60) × £34 = £198,333/year

Pilot headline claim: AI drafts a response in 90 seconds,
caseworker "just reviews and sends" — claimed new time is 3 minutes
  25,000 × (3/60) × £34 = £42,500/year
  → claimed saving £155,833/year (looks transformational)

Fully-loaded figure, measured after 3 months live rather than in the
pilot's hand-picked test cases:
  Actual review + correction time per response: 6 minutes (drafts
  need real editing for complex or emotionally sensitive enquiries)
  25,000 × (6/60) × £34 = £85,000/year
  Licence/compute cost: £38,000/year
  ATRS documentation and quarterly bias/quality monitoring: £14,000/year
  Total cost = 85,000 + 38,000 + 14,000 = £137,000/year

Real saving = 198,333 − 137,000 = £61,333/year — genuine and worth
keeping, but well under half the pilot's headline claim, and it
required an honest oversight-time measurement, not the pilot's
best-case one, to find.
```

## সফটওয়্যার ইঞ্জিনিয়ারিং সংযোগ

এখানেই [সরকারি খাতে AI উৎপাদনশীলতা](../ai-productivity-in-the-public-sector/) ও এই বিষয়টি
মিলিত হয়: জনসেবায় AI ফিচার তৈরি করা প্রকৌশল দলগুলোর হাতেই সেই ইন্সট্রুমেন্টেশন থাকে যা
ব্যবহারিক উদাহরণের "প্রকৃত" সংখ্যাটি সম্ভব করে তোলে — প্রকৃত পর্যালোচনার সময়, খসড়া ও প্রেরিত
উত্তরের মধ্যে সম্পাদনা-দূরত্ব, এবং উর্ধ্বতনে প্রেরণের হার লগ করা, পাইলটের প্রদর্শন-শর্তে বিশ্বাস
না করে। AI ফিচারগুলোকে [ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/)-এর পয়েন্ট ৯
(নিরাপদ সেবা, ব্যবহারকারীর গোপনীয়তা)-এর বিপরীতে মূল্যায়ন করা উচিত এবং টুলটি নাগরিক তথ্য
স্পর্শ করলে [সরকারি খাতে সাইবার নিরাপত্তার মূল্য](../public-sector-cybersecurity-value/)-এর
সাথে ক্রস-রেফারেন্স করা উচিত, এবং ব্যক্তিদের সম্পর্কে সিদ্ধান্তে উল্লেখযোগ্য প্রভাব ফেলে এমন
যেকোনো AI ব্যবস্থার মূল্যায়ন-প্রস্তুত বিবেচিত হওয়ার আগে একটি ATRS রেকর্ড প্রয়োজন, ঠিক যেমন
একটি সেবার লাইভ হওয়ার আগে একটি পাস করা
[ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/) মূল্যায়ন প্রয়োজন হয়।

## সাধারণ ভুলত্রুটি

- **AI-ওয়াশিং**: বিদ্যমান নিয়ম-ভিত্তিক স্বয়ংক্রিয়করণকে "AI" হিসেবে পুনর্লেবেল করে AI
  গ্রহণের জন্য নির্ধারিত তহবিল বা মনোযোগ পাওয়া, অথচ যে নির্ভুলতা বা পক্ষপাত ঝুঁকি প্রকৃতপক্ষে
  কাঠামোর অতিরিক্ত যাচাই-বাছাইকে ন্যায্যতা দেয়, তা ছাড়াই।
- **পাইলট উৎপাদনশীলতা মাপা, উৎপাদন উৎপাদনশীলতা নয়**: পাইলট চলে বাছাইকৃত পরীক্ষার কেস এবং
  মনোযোগী, সম্পৃক্ত পর্যালোচকদের উপর; উৎপাদন চলে পুরো বিশৃঙ্খল কেস-মিশ্রণে এমন পর্যালোচকদের
  সাথে যারা সময়ের সাথে স্বয়ংক্রিয়করণ-পক্ষপাত গড়ে তোলে এবং আউটপুট কম-যাচাই করে — উভয়ই সৎ
  তদারকি-খরচ সংখ্যাকে বিকৃত করে।
- **ATRS নিবন্ধন এড়িয়ে যাওয়া কারণ টুলটি "প্রকৃতপক্ষে স্বয়ংক্রিয় সিদ্ধান্তগ্রহণ নয়"**:
  মানদণ্ডের সীমা হলো কোনো ব্যক্তি সম্পর্কে সিদ্ধান্তে উল্লেখযোগ্য প্রভাব, যা বেশিরভাগ
  নাগরিক-মুখী AI খসড়া বা ট্রায়াজ টুল পূরণ করে, এমনকি যখন কোনো মানুষ প্রযুক্তিগতভাবে
  অনুমোদন দেয়।
- **ত্রুটির বণ্টনমূলক প্রভাব উপেক্ষা করা**: সব ব্যবহারকারী জুড়ে গড় করা একটি AI ব্যবস্থার
  ত্রুটির হার নির্দিষ্ট গোষ্ঠীর জন্য অনেক বেশি ত্রুটি বা পক্ষপাত হার লুকিয়ে রাখতে পারে;
  [বণ্টনমূলক ওজন](../distributional-weighting/) ঝুঁকি-সমন্বিত ক্ষতির পদে প্রয়োগ করা উচিত,
  শুধু সমষ্টিগত নির্ভুলতা সংখ্যায় নয়।

## তথ্যসূত্র

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
