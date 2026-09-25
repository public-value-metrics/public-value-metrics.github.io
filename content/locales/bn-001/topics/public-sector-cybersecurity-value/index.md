# সরকারি খাতে সাইবার নিরাপত্তার মূল্য (Public Sector Cybersecurity Value)

সরকারি খাতে সাইবার নিরাপত্তার মূল্য হলো ঝুঁকি হ্রাসের দাম ধরার অনুশাসন: নাগরিক তথ্যের একটি লঙ্ঘন
কম সম্ভাব্য করা কতটা মূল্যবান, যেহেতু নিরাপত্তা ব্যয় যখন কাজ করে তখন কোনো দৃশ্যমান আউটপুট তৈরি
করে না এবং যখন ব্যর্থ হয় তখন একটি খুব দৃশ্যমান আউটপুট তৈরি করে? সুবিধা রেকর্ড, স্বাস্থ্য তথ্য, বা
কর রেকর্ড ধারণকারী একটি সেবার জন্য, সেই "কাজ করার সময় অদৃশ্য" বৈশিষ্ট্যটিই ঠিক কেন এর একটি স্পষ্ট
মূল্য যুক্তি প্রয়োজন, শুধু একটি সম্মতি টিক নয়।

## কেন এটি গুরুত্বপূর্ণ

যুক্তরাজ্যের ন্যাশনাল সাইবার সিকিউরিটি সেন্টারের সাইবার অ্যাসেসমেন্ট ফ্রেমওয়ার্ক (CAF) সরকারি
সংস্থাগুলোকে নিরাপত্তাকে একটি চেকলিস্টের পরিবর্তে একটি মূল্যায়নযোগ্য, ফলাফল-ভিত্তিক অনুশাসন করার
একটি কাঠামোগত উপায় দেয়: এটি চারটি উচ্চ-স্তরের উদ্দেশ্য সংজ্ঞায়িত করে (নিরাপত্তা ঝুঁকি পরিচালনা,
সাইবার আক্রমণের বিরুদ্ধে সুরক্ষা, সাইবার নিরাপত্তা ঘটনা সনাক্তকরণ, এবং ঘটনার প্রভাব ন্যূনতম করা)
অবদানকারী ফলাফলে বিভক্ত যার বিপরীতে একটি ব্যবস্থার মালিক মূল্যায়িত হতে পারে,
[ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/)-এর পয়েন্ট ৯ ("একটি নিরাপদ সেবা তৈরি করুন
যা ব্যবহারকারীদের গোপনীয়তা রক্ষা করে")-এর একই চেতনায়। CAF মূল্যায়ন যা থেকে রক্ষা করে তার একটি
নথিভুক্ত মূল্য ট্যাগ আছে: IBM-এর Cost of a Data Breach Report খাত অনুযায়ী গড় লঙ্ঘন খরচ ট্র্যাক
করে, এবং ধারাবাহিকভাবে দেখেছে যে সরকারি খাত অর্থ বা স্বাস্থ্যসেবার তুলনায় পরিসরের নিম্ন প্রান্তের
দিকে — সাম্প্রতিক সংস্করণ সরকারি খাতের গড় প্রতি লঙ্ঘনে প্রায় $২৬-২৯ লক্ষ নির্ধারণ করে — কিন্তু
"অর্থের চেয়ে কম" "কম" নয়, এবং সরকারি লঙ্ঘন এমন খরচ বহন করে যা প্রতিবেদনের সংখ্যা সম্পূর্ণভাবে ধরে
না: ডিজিটাল চ্যানেলে নাগরিক আস্থার ক্ষতি, যা
[ডিজিটাল গ্রহণ](../channel-shift-savings/) হ্রাস করে যার উপর চ্যানেল-শিফট ব্যবসায়িক কেস নির্ভর
করে, এবং রাষ্ট্র প্রথম স্থানে নাগরিকদের যে তথ্য হস্তান্তর করতে বাধ্য করেছিল তা প্রকাশ করার
রাজনৈতিক ও আইনি খরচ।

## গাণিতিক হিসাব

নিরাপত্তা বিনিয়োগ যেভাবে যেকোনো ঝুঁকি-হ্রাস ব্যয় মূল্যায়িত হয় সেভাবে মূল্যায়িত হয়: একটি
প্রত্যাশিত-ক্ষতি হ্রাস হিসেবে, ধ্রুপদী ঝুঁকি-ব্যবস্থাপনা পরিচয় ব্যবহার করে।

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## ব্যবহারিক উদাহরণ

**৪০,০০০ বাসিন্দার সামাজিক পরিচর্যা রেকর্ড ধারণকারী একটি কাউন্টি কাউন্সিল কেস-ব্যবস্থাপনা
ব্যবস্থা**:

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## সফটওয়্যার ইঞ্জিনিয়ারিং সংযোগ

প্রকৌশলীরা ALE সমীকরণের বেশিরভাগ লিভারের মালিক: প্রবেশাধিকার নিয়ন্ত্রণ নকশা, নির্ভরতা ও প্যাচ
স্বাস্থ্যবিধি, লগিং ও সনাক্তকরণ কভারেজ, এবং ঘটনা প্রতিক্রিয়া টুলিং সবই সরাসরি ARO পদকে সরায়,
যে কারণে CAF মূল্যায়ন একটি নীতি নিরীক্ষার পাশাপাশি একটি প্রযুক্তিগত স্থাপত্য পর্যালোচনার মতো পড়া
যায়। এটি [প্রযুক্তিগত ঋণ জনমূল্য ক্ষয় হিসেবে](../technical-debt-as-public-value-erosion/)-এর
সবচেয়ে তীব্র রূপ — অ-প্যাচকৃত, অ-নিরীক্ষিত, দুর্বলভাবে-প্রবেশাধিকার-নিয়ন্ত্রিত ব্যবস্থা এমন ঋণ
যার সুদ প্রদান লেজ-ঝুঁকি, একটি স্থির টান নয় — এবং এটি
[সরকারি আইটিতে মোট মালিকানা খরচ](../total-cost-of-ownership-in-government-it/)-এর বিপরীতে
মিলিয়ে নেওয়া উচিত যাতে নিরাপত্তা ব্যয় ব্যবস্থার প্রকৃত চলমান খরচ থেকে পৃথক হিসেবে গণ্য না হয়।
এটি গ্রিন বুকের অধীনে [মূল্য প্রতি অর্থ](../value-for-money/) মূল্যায়নের একটি সরাসরি ইনপুটও: ঝুঁকি-
সমন্বিত খরচ যেকোনো বিকল্প মূল্যায়নের "খরচ" দিকের অংশ, শেষে জোড়া লাগানো একটি পশ্চাৎচিন্তা নয়।

## সাধারণ ভুলত্রুটি

- **CAF স্ব-মূল্যায়নকে নিরাপত্তা নিজেই হিসেবে গণ্য করা**: একটি সম্পূর্ণ মূল্যায়ন একটি নিরাপত্তা
  অবস্থান বর্ণনা করে; এটি একটি তৈরি করে না — মূল্যটি অর্জিত ফলাফলে, নথিতে নয়।
- **সমন্বয় ছাড়া বৈশ্বিক গড় লঙ্ঘন খরচকে একটি স্থানীয় অনুমান হিসেবে ব্যবহার করা**: IBM-এর সংখ্যা
  বড়, বৈচিত্র্যময় নমুনা জুড়ে গড়; একটি ছোট স্থানীয় কর্তৃপক্ষের বাস্তবসম্মত একক ক্ষতি প্রত্যাশা
  কদাচিৎ একটি জাতীয় সরকারি বিভাগের মতো।
- **বিনিয়োগ সিদ্ধান্তে লেজ-ঝুঁকি মনস্তত্ত্ব উপেক্ষা করা**: একটি নিম্ন বার্ষিক সম্ভাবনা নিরাপত্তা
  ব্যয়কে অনির্দিষ্টকালের জন্য পিছিয়ে দেওয়া সহজ করে তোলে, ঠিক সেই বছর পর্যন্ত যখন তা হয় না —
  ব্যবহারিক উদাহরণের মতো একাধিক ARO-এর বিপরীতে ALE গণনার সংবেদনশীলতা-পরীক্ষা এটি মোকাবিলা করে।
- **শুধু IBM-ধাঁচের লঙ্ঘন খরচ গণনা করা, আস্থা খরচ নয়**: একটি লঙ্ঘন যা ডিজিটাল চ্যানেল ব্যবহারে
  নাগরিকের ইচ্ছুকতা হ্রাস করে তা বছরের পর বছর ধরে
  [চ্যানেল-শিফট সাশ্রয়](../channel-shift-savings/) কেসকে ক্ষয় করে, একটি খরচ যা কদাচিৎ লঙ্ঘন-
  খরচ অনুমানে অন্তর্ভুক্ত।

## তথ্যসূত্র

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
