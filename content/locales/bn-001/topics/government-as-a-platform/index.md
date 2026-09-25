# সরকার একটি প্ল্যাটফর্ম হিসেবে (Government as a Platform, GaaP)

সরকার একটি প্ল্যাটফর্ম হিসেবে হলো ভাগাভাগি, পুনঃব্যবহারযোগ্য উপাদান — একটি বিজ্ঞপ্তি সেবা, একটি
পেমেন্ট সেবা, একটি পরিচয় সেবা — একবার, কেন্দ্রীয়ভাবে তৈরি করার কৌশল, যাতে শত শত পৃথক সরকারি সেবা
প্রতিটি তার নিজস্ব তৈরি করার পরিবর্তে সেগুলো গ্রহণ করে। এটি জনসাধারণের ডিজিটাল অবকাঠামোকে একটি
প্ল্যাটফর্ম অর্থনীতি সমস্যা হিসেবে পুনর্গঠন করে: মূল্যটি কোনো একটি একীকরণে নয়, এটি *পরবর্তী* দলের
প্রান্তিক খরচে যা এটি গ্রহণ করে শূন্যের কাছাকাছি পৌঁছায়।

## কেন এটি গুরুত্বপূর্ণ

GDS তার ২০১৫ সালের "গভর্নমেন্ট অ্যাজ আ প্ল্যাটফর্ম" প্রকাশনায় আনুষ্ঠানিকভাবে কৌশলটি নির্ধারণ
করেছিল, যুক্তি দিয়ে যে সরকার একই সক্ষমতা — পেমেন্ট নেওয়া, ব্যবহারকারী বিজ্ঞপ্তি, পরিচয় যাচাই,
ঠিকানা অনুসন্ধান — সেবার পর সেবায় পৃথকভাবে তৈরি করেছিল, প্রতিটি তার নিজস্ব সংগ্রহ, নিরাপত্তা
মূল্যায়ন, এবং চলমান সহায়তা বোঝা বহন করে। বিকল্পটি ছিল অল্প সংখ্যক ভাগাভাগি প্ল্যাটফর্ম, একবার
উচ্চ মানে তৈরি এবং সর্বত্র পুনঃব্যবহৃত: ইমেইল, টেক্সট মেসেজ এবং চিঠি পাঠানোর জন্য GOV.UK Notify,
অনলাইন পেমেন্ট নেওয়ার জন্য GOV.UK Pay, এবং পরিচয় যাচাইয়ের জন্য GOV.UK One Login (পূর্ববর্তী
GOV.UK Verify পরিচয় কর্মসূচির উত্তরসূরি)। এই প্ল্যাটফর্মগুলো যে মাত্রায় পৌঁছেছে তা কৌশলটি কাজ
করেছে তার সবচেয়ে স্পষ্ট প্রমাণ: GOV.UK Pay প্রায় ১,৮০০টি পৃথক সেবা জুড়ে £১,০০০ কোটিরও বেশি
লেনদেন প্রক্রিয়া করেছে — এবং যেখানে এর প্রথম £১০০ কোটি প্রক্রিয়া করতে প্রায় চার বছর লেগেছিল,
এটি এখন প্রায় পাঁচ মাসে সেই পরিমাণ প্রক্রিয়া করে — যখন GOV.UK Notify ১,৫০০-রও বেশি সরকারি সংস্থার
পক্ষে ৯০০ কোটিরও বেশি বার্তা পাঠিয়েছে। সেই গ্রহণকারী প্রতিটি সেবা নিজস্ব পেমেন্ট গেটওয়ে বা
মেসেজিং পাইপলাইন তৈরি, সুরক্ষিত ও রক্ষণাবেক্ষণ করা এড়িয়ে গেছে।

## গাণিতিক হিসাব

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

## ব্যবহারিক উদাহরণ

**একটি স্থানীয় কর্তৃপক্ষ একটি পেমেন্ট গেটওয়ে তৈরি করার পরিবর্তে GOV.UK Pay গ্রহণ করছে**:

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

এখন GOV.UK Pay ব্যবহারকারী প্রায় ১,৮০০টি সেবা জুড়ে সেই £৭৩,০০০ স্কেল করলে এবং সরকার জুড়ে সমষ্টিগত
এড়ানো-নির্মাণ খরচ কয়েকশ মিলিয়নে পৌঁছায় — প্ল্যাটফর্ম অর্থনীতিই, কোনো একক একীকরণ নয়, যেখানে কৌশলের
মূল্য প্রকৃতপক্ষে অবস্থিত।

## সফটওয়্যার ইঞ্জিনিয়ারিং সংযোগ

সরকার একটি প্ল্যাটফর্ম হিসেবে
[সরকারে তৈরি করা বনাম কেনা](../build-vs-buy-in-government/)-এর একটি সরাসরি যুক্তি: যখন একটি
ভাগাভাগি, মূল্যায়িত, ভালোভাবে-চালিত উপাদান বিদ্যমান, একটি স্বতন্ত্র সমতুল্য তৈরি করা খুব কদাচিৎ
ভালো [মূল্য প্রতি অর্থ](../value-for-money/) পছন্দ, এবং এটি প্রায় সংজ্ঞা অনুসারেই
[ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/) পয়েন্ট ১৩-এ ব্যর্থ হয় ("উন্মুক্ত মানদণ্ড,
সাধারণ উপাদান ও প্যাটার্ন ব্যবহার ও অবদান রাখুন")। এটি
[সরকারি আইটিতে মোট মালিকানা খরচ](../total-cost-of-ownership-in-government-it/)-এর আকৃতিও
পরিবর্তন করে: প্ল্যাটফর্ম গ্রহণ একটি বড় মূলধন ও রক্ষণাবেক্ষণ রেখাকে একটি ছোট, ব্যবহার-সংযুক্ত
পরিচালন খরচের সাথে বিনিময় করে, যা পূর্বাভাস দেওয়া সহজ এবং একটি সেবা বাতিল হলে তহবিল প্রত্যাহার
করা সহজ। উপাদানের উন্মুক্ত পুনঃব্যবহারের একটি জ্ঞাতি [উন্মুক্ত তথ্য মূল্য](../open-data-value/)-এ
আছে — উভয়ই সরকার একবার যা উৎপাদন করে তাকে একটি বিভাগীয় সম্পদের পরিবর্তে ভাগাভাগি অবকাঠামো হিসেবে
গণ্য করার কৌশল।

## সাধারণ ভুলত্রুটি

- **ছায়া পুনর্নির্মাণ**: দলগুলো নীরবে তাদের নিজস্ব পেমেন্ট বা বিজ্ঞপ্তি একীকরণ তৈরি করে কারণ
  প্ল্যাটফর্মের অনবোর্ডিং প্রক্রিয়া নিজে করার চেয়ে ধীর — একটি শাসন-ব্যবস্থা ঘর্ষণ সমস্যা, প্রযুক্তি
  সমস্যা নয়, এবং এটি নীরবে পুরো কৌশল যে পুনঃব্যবহার অর্থনীতির উপর নির্ভর করে তা ক্ষয় করে।
- **এটি যে মূল্য তৈরি করে তার সাপেক্ষে প্ল্যাটফর্ম দলকে অ-তহবিলপ্রাপ্ত রাখা**: মূল্য গ্রহণকারী
  বিভাগগুলোতে জমা হয় যখন খরচ প্ল্যাটফর্ম দলের সাথে থাকে, তহবিল কেন্দ্রীভূত ও সুরক্ষিত না হলে
  একটি দীর্ঘস্থায়ী অ-বিনিয়োগ ঝুঁকি তৈরি করে — সাধারণের ট্র্যাজেডির একটি সংস্করণ।
- **শুধুমাত্র ব্যবহার দ্বারা প্ল্যাটফর্ম সাফল্য পরিমাপ করা**: গ্রহণ সংখ্যা (অনবোর্ড করা সেবা,
  পাঠানো বার্তা) একটি অগ্রণী সূচক, মূল্যের প্রমাণ নয়; প্রকৃত পরীক্ষা উপরের এড়ানো-নির্মাণ-খরচ ও
  এড়ানো-ঝুঁকি গণিত।
- **"প্ল্যাটফর্ম"-কে "মনোলিথ"-এর সমার্থক হিসেবে গণ্য করা**: GaaP উপাদান সফল হয় কারণ প্রতিটি
  একটি সংকীর্ণ, স্থিতিশীল ইন্টারফেস সহ একটি জিনিস ভালোভাবে করে — অসম্পর্কিত সক্ষমতাকে একটি
  "প্ল্যাটফর্মে" একত্রিত করা একটি ভিন্ন মাত্রায় স্বতন্ত্র-নির্মাণ সমস্যা পুনরায় তৈরি করে।

## তথ্যসূত্র

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
