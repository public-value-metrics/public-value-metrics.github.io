# প্রতি-লেনদেন খরচ (Cost Per Transaction)

প্রতি-লেনদেন খরচ হলো একটি সরকারি ডিজিটাল সেবার প্রধান একক-অর্থনীতি মেট্রিক: একটি চ্যানেল বিতরণ
করার মোট খরচ, তার মাধ্যমে সম্পন্ন লেনদেনের সংখ্যা দিয়ে ভাগ করা। এটি পুরনো GOV.UK পারফরম্যান্স
প্ল্যাটফর্মের প্রধান সংখ্যা ছিল, এবং এটি সেই সংখ্যা যা এক দশকের "ডিজিটাল বাই ডিফল্ট" বিনিয়োগে
অর্থায়ন করেছিল — যে কারণেই এটি কারচুপি হওয়ার সবচেয়ে বেশি প্রবণ মেট্রিকও।

## কেন এটি গুরুত্বপূর্ণ

ক্যাবিনেট অফিসের ২০১২ সালের ডিজিটাল দক্ষতা প্রতিবেদন চ্যানেল-খরচ তুলনাকে এমন পরিভাষায়
স্থাপন করেছিল যা টিকে গিয়েছিল: ডিজিটাল লেনদেন ফোনের চেয়ে প্রায় ২০ গুণ কম এবং সামনাসামনির চেয়ে
প্রায় ৫০ গুণ কম খরচে পাওয়া গেছে, উদাহরণমূলক স্থানীয়-সরকার সংখ্যা সহ প্রতি ওয়েব লেনদেনে প্রায়
£০.১৫ ফোনে £২.৮৩ এবং সামনাসামনি £৮.৬২-এর বিপরীতে। সেই একক তুলনাটিই গভর্নমেন্ট ডিজিটাল
স্ট্র্যাটেজিতে নামকৃত ২৫টি দৃষ্টান্তমূলক সেবা পুনর্নকশা করার ন্যায্যতা এবং তারপর থেকে চ্যানেল-
শিফট সাশ্রয় উদ্ধৃত প্রতিটি বিভাগীয় ব্যবসায়িক কেসের ন্যায্যতা হয়ে উঠেছিল। সংখ্যাটি একটি
মাত্রা-ক্রমের সংকেত হিসেবে প্রকৃতপক্ষে উপযোগী, কিন্তু অনুপাতটি সম্পূর্ণভাবে নির্ভর করে প্রতিটি
পাশে কী গণনা করা হচ্ছে তার উপর: একটি ন্যায্য ফোন-চ্যানেল খরচে কল সেন্টারের কর্মী, টেলিফোনি
চুক্তি, প্রশিক্ষণ ও এস্টেট অন্তর্ভুক্ত; একটি ন্যায্য ডিজিটাল খরচে হোস্টিং, চলমান পণ্য-দলের
বেতন, ব্যর্থ যাত্রার জন্য সহায়তা ডেস্ক সময়, এবং
[ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/) পয়েন্ট ৫ দ্বারা প্রয়োজনীয় সহায়তাপ্রাপ্ত-
ডিজিটাল চ্যানেল অন্তর্ভুক্ত। ডিজিটাল পাশ থেকে এগুলোর যথেষ্ট বাদ দিন এবং যেকোনো সেবা সস্তা
দেখাবে।

## গাণিতিক হিসাব

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## ব্যবহারিক উদাহরণ

**যানবাহন কর নবায়ন সেবা**: বছরে ৪০ লক্ষ লেনদেন।

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## সফটওয়্যার ইঞ্জিনিয়ারিং সংযোগ

প্রতি-লেনদেন খরচ সেই জায়গা যেখানে স্থাপত্য সিদ্ধান্ত একটি অর্থ সংখ্যায় পরিণত হয়: একটি সেবা
যা পরিষ্কারভাবে স্বয়ংক্রিয়-স্কেল করে এবং সামান্য ম্যানুয়াল হস্তক্ষেপ প্রয়োজন করে সময়ের সাথে
এই সংখ্যা নিচে নামায়; একটি যা বিভ্রান্তিকর ত্রুটি অবস্থা থেকে উচ্চ সহায়তা-টিকিট পরিমাণ তৈরি
করে হোস্টিং দক্ষতা নির্বিশেষে এটি বাড়িয়ে দেয়। এটি
[ডিজিটাল সেবা মানদণ্ড](../digital-service-standard/) পয়েন্ট ১০ ("সাফল্য কেমন দেখায় তা
সংজ্ঞায়িত করুন, এবং কর্মক্ষমতা তথ্য প্রকাশ করুন")-এর প্রাকৃতিক সহচর মেট্রিক এবং
[সেবা মানদণ্ড ও লেনদেন মেট্রিক্স](../service-standards-and-transaction-metrics/)-এর, যা এই
সংখ্যা যে বৃহত্তর KPI সেটের মধ্যে বসে তা নির্ধারণ করে। এটি সরাসরি
[চ্যানেল-শিফট সাশ্রয়](../channel-shift-savings/) গণনায়ও প্রবাহিত হয় এবং
[সরকারি আইটিতে মোট মালিকানা খরচ](../total-cost-of-ownership-in-government-it/)-এর বিপরীতে
মিলিয়ে নেওয়া উচিত যাতে প্ল্যাটফর্ম ও ভাগাভাগি-সেবা ওভারহেড নীরবে বাদ না পড়ে।

## সাধারণ ভুলত্রুটি

- **গড় খরচ হিসেবে সাজানো প্রান্তিক খরচ**: একটি সেবা তৈরি হয়ে গেলে শুধু হোস্টিং খরচ উদ্ধৃত করা,
  এটি রক্ষণাবেক্ষণ, পুনরাবৃত্তি ও সহায়তা করা চলমান দলকে বাদ দিয়ে — উপরের ব্যবহারিক উদাহরণ দেখুন।
- **সহায়তাপ্রাপ্ত-ডিজিটাল খরচ বাদ দেওয়া**: একটি চ্যানেল "ডিজিটাল বাই ডিফল্ট" সম্মত নয়, এবং
  তার প্রকৃত খরচ ধরা হয় না, যদি [ডিজিটাল অন্তর্ভুক্তি](../digital-inclusion/) দ্বারা প্রয়োজনীয়
  ফোন/কাগজ ফলব্যাক পৃথকভাবে খরচ করা হয় বা উপেক্ষা করা হয়।
- **ব্যর্থতা-চাহিদা উপেক্ষা করা**: লেনদেন যা ডিজিটালভাবে শুরু হয় এবং ব্যর্থ হয়, তবুও একটি ফোন
  কল বা একটি কাগজের ফর্ম তৈরি করে, ডিজিটাল চ্যানেলের একটি খরচ, ব্যর্থতা ধরে এমন চ্যানেলের নয়।
- **চ্যানেল জুড়ে বিভিন্ন জটিলতার লেনদেন তুলনা করা**: ফোন কল অসামঞ্জস্যপূর্ণভাবে কঠিন কেসগুলো
  পরিচালনা করে (একাধিক নির্ভরশীল, ত্রুটি সংশোধন, ঝুঁকিপূর্ণ আবেদনকারী); একটি গড় ফোন খরচকে
  একটি গড় ডিজিটাল খরচের সাথে তুলনা করা লেনদেন মিশ্রণ না মিললে অনুপাত বাড়িয়ে দেখায়।

## তথ্যসূত্র

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
