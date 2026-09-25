# চ্যানেল-শিফট সাশ্রয় (Channel Shift Savings)

চ্যানেল-শিফট সাশ্রয় হলো ব্যয়বহুল চ্যানেল — ফোন, সামনাসামনি কাউন্টার, কাগজের ডাক — থেকে লেনদেন
পরিমাণ সরিয়ে সস্তা ডিজিটাল স্ব-সেবায় নিয়ে যাওয়া থেকে প্রক্ষেপিত খরচ হ্রাস। এটি "ডিজিটাল বাই
ডিফল্ট"-এর পেছনের আর্থিক ইঞ্জিন, এবং একই সাথে ব্যবসায়িক কেসের এমন একটি লাইন আইটেম যা ভুল
হওয়ার সম্ভাবনা সবচেয়ে বেশি, কারণ যে অনুমানের উপর এটি নির্ভর করে — যে অফলাইন চ্যানেল ডিজিটাল
গ্রহণ বাড়ার সাথে সাথে সংকুচিত হয় — তা শুধুমাত্র কখনো কখনো সত্য।

## কেন এটি গুরুত্বপূর্ণ

ডিজিটাল দক্ষতা প্রতিবেদন থেকে [প্রতি-লেনদেন খরচ](../cost-per-transaction/) সংখ্যা ব্যবহার
করে গণিতটি অকাট্য মনে হয়: দশ লক্ষ লেনদেন £৮.৬২-এর একটি সামনাসামনি সফর থেকে £০.১৫-এর একটি
ডিজিটাল সফরে সরিয়ে নিলে সাশ্রয় হয় £৮০ লক্ষেরও বেশি। কিন্তু একটি সাশ্রয় তখনই পুনর্বিন্যাসের
জন্য মুক্ত করা নগদে পরিণত হয় যখন সংকুচিত চ্যানেলের *স্থির ক্ষমতা* প্রকৃতপক্ষে বাতিল করা হয় —
কল সেন্টারের আসন, কাউন্টার কর্মী, ফোন চুক্তির মিনিট — এবং স্থানীয় সরকারের ডিজিটাল কর্মসূচি
বারবার দেখেছে যে মোট যোগাযোগ পরিমাণ ডিজিটাল গ্রহণের সাথে তাল মিলিয়ে কমে না। স্থানীয় কর্তৃপক্ষ
ডিজিটাল রূপান্তর কর্মসূচি এবং সোসিটম ও স্থানীয় সরকার সমিতির মতো সংস্থার গবেষণা একটি পুনরাবৃত্ত
প্যাটার্ন নথিভুক্ত করেছে: ডিজিটাল চ্যানেল প্রকৃতপক্ষে নতুন যোগাযোগ আকর্ষণ করে (নাগরিক যারা
আগে ফোন করত না বা যেত না তারা এখন করে, কারণ এটি সহজ), এবং "ডিজিটাল" লেনদেনের একটি
উল্লেখযোগ্য অংশ মাঝপথে ব্যর্থ হয় এবং তবুও একটি ফোন কল তৈরি করে — তাই ফোনের পরিমাণ ডিজিটাল
গ্রহণের শতাংশ যা প্রস্তাব করবে তার চেয়ে অনেক কম কমে, কখনো কখনো নিখুঁত সংখ্যায় একেবারেই না কমে
যদিও মোট যোগাযোগের *অংশ* হিসেবে তা কমে যায়।

## গাণিতিক হিসাব

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

## ব্যবহারিক উদাহরণ

**কাউন্টি কাউন্সিল ব্লু ব্যাজ নবায়ন সেবা**: বছরে ৬০,০০০ নবায়ন, আগে ১০০% ফোন/কাগজে প্রতি
লেনদেনে £৬.৪০। একটি নতুন ডিজিটাল সেবা চালু হয় এবং এক বছরের মধ্যে ৬৫% ডিজিটাল গ্রহণে পৌঁছায়,
প্রতি ডিজিটাল লেনদেনে £০.৩০।

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

## সফটওয়্যার ইঞ্জিনিয়ারিং সংযোগ

প্রকৌশল শিক্ষাটি হলো চ্যানেল-শিফট সাশ্রয় *অপারেশনাল* সিদ্ধান্ত দ্বারা বাস্তবায়িত হয়
(রোস্টারিং, বাতিলকরণ, চুক্তি পুনঃআলোচনা), সফটওয়্যার চালু হওয়ার দ্বারা নয় — একটি দল প্রতিটি
[ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/) পয়েন্ট পূরণ করতে পারে এবং তবুও শূন্য নিট
সাশ্রয় প্রদান করতে পারে যদি কেউ পুরনো চ্যানেলের স্থির ক্ষমতা বাতিল না করে। ব্যর্থতা-চাহিদা
ইন্সট্রুমেন্ট করা (ডিজিটাল যাত্রার কোথায় ব্যবহারকারীরা পরিত্যাগ করে এবং তারপর তারা কী করে) একটি
সমাধানযোগ্য ফানেল-অ্যানালিটিক্স সমস্যা এবং একটি প্রকৌশল দল সাশ্রয়ের কেসকে রক্ষা করতে যে একক
সবচেয়ে প্রভাবশালী কাজটি করতে পারে; এটি [প্রতি-লেনদেন খরচ](../cost-per-transaction/)-এর
সাথেও সরাসরি সংযুক্ত, যা ব্যর্থতা-চাহিদা নীরবে বাড়িয়ে দেয়। একটি ব্যবসায়িক কেসের সাশ্রয়
প্রকৃতপক্ষে অর্জিত হচ্ছে কি না তা যাচাই করার বৃহত্তর অনুশাসনের জন্য দেখুন
[সুবিধা বাস্তবায়ন](../benefits-realization/), এবং কেন অফলাইন চ্যানেল সাধারণত সম্পূর্ণরূপে
বাতিল করা যায় না, এবং করা উচিত নয়, তার জন্য দেখুন [ডিজিটাল অন্তর্ভুক্তি](../digital-inclusion/)।

## সাধারণ ভুলত্রুটি

- **১:১ চ্যানেল প্রতিস্থাপন অনুমান করা**: ফোন/কাউন্টার পরিমাণ থেকে সরাসরি বিয়োগ হিসেবে
  ডিজিটাল গ্রহণকে মডেল করা, স্থানীয় সরকারের চ্যানেল-শিফট গবেষণায় নথিভুক্ত শ্যাডো-চাহিদা এবং
  ব্যর্থতা-চাহিদা লিকেজ উপেক্ষা করে।
- **বাতিলকরণের আগে মোট সাশ্রয় বুক করা**: গ্রহণ বাড়ার বছরেই ব্যবসায়িক কেসে সাশ্রয় গণনা করা,
  যে বছরে (যদি কখনো হয়) পুরনো চ্যানেলের ক্ষমতা প্রকৃতপক্ষে কাটা হয় তা নয়।
- **কর্মী খরচের ধাপ-ফাংশন প্রকৃতি উপেক্ষা করা**: একটি ২০% পরিমাণ হ্রাস কদাচিৎ একটি ২০% খরচ
  হ্রাসে রূপান্তরিত হয়, কারণ যোগাযোগ কেন্দ্র ও কাউন্টার ধারাবাহিকভাবে নয়, বিচ্ছিন্ন বন্ডে
  কর্মী নিয়োগ করা হয়।
- **শ্যাডো-চাহিদাকে অপচয় হিসেবে গণ্য করা**: পূর্বে-বাদ-পড়া বা পূর্বে-নিরুৎসাহিত ব্যবহারকারীদের
  থেকে নতুন যোগাযোগ [জনমূল্য](../public-value/)-এর একটি প্রকৃত বৃদ্ধি, একটি মডেলিং ত্রুটি নয় —
  এটি একটি প্রবেশাধিকার ফলাফল হিসেবে প্রতিবেদন করা উচিত, শব্দ হিসেবে নিট করে বাদ দেওয়া নয়।

## তথ্যসূত্র

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
