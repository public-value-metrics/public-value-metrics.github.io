# सार्वजनिक क्षेत्र साइबर सुरक्षा मूल्य (Public Sector Cybersecurity Value)

सार्वजनिक क्षेत्र साइबर सुरक्षा मूल्य जोख़िम-कमी की क़ीमत लगाने का अनुशासन है: नागरिक-डेटा की सेंध को कम संभावित बनाना कितना मूल्यवान है, यह देखते हुए कि सुरक्षा-व्यय जब काम करता है तो कोई दृश्यमान आउटपुट नहीं देता और जब विफल होता है तो बहुत दृश्यमान एक देता है? लाभ-रिकॉर्ड, स्वास्थ्य-डेटा, या कर-रिकॉर्ड रखने वाली किसी सेवा के लिए, वह "काम करते समय अदृश्य" गुण ठीक इसीलिए है कि इसे केवल अनुपालन-चेक की नहीं, एक स्पष्ट मूल्य-तर्क की आवश्यकता है।

## यह क्यों महत्वपूर्ण है

यूके National Cyber Security Centre का Cyber Assessment Framework (CAF) सार्वजनिक-क्षेत्र संगठनों को सुरक्षा को एक चेकलिस्ट के बजाय एक आकलन-योग्य, परिणाम-आधारित अनुशासन बनाने का एक संरचित तरीक़ा देता है: यह चार उच्च-स्तरीय उद्देश्यों (सुरक्षा-जोख़िम का प्रबंधन, साइबर हमले से सुरक्षा, साइबर सुरक्षा घटनाओं की पहचान, और घटनाओं के प्रभाव को न्यूनतम करना) को योगदानकारी परिणामों में विभाजित करता है जिनके विरुद्ध किसी प्रणाली-स्वामी को आँका जा सकता है, उसी भावना में जो [डिजिटल सेवा मानक](../digital-service-standard/) के बिंदु 9 ("एक सुरक्षित सेवा बनाएँ जो उपयोगकर्ताओं की गोपनीयता की रक्षा करे") में है। CAF आकलन जिससे रक्षा करता है उसका एक दर्ज मूल्य-टैग है: IBM की Cost of a Data Breach Report क्षेत्र के अनुसार औसत सेंध-लागत को ट्रैक करती है, और लगातार पाया है कि सार्वजनिक क्षेत्र वित्त या स्वास्थ्य-सेवा की तुलना में सीमा के निचले छोर की ओर है — हाल के संस्करण सार्वजनिक क्षेत्र का औसत प्रति सेंध लगभग $2.6–2.9 मिलियन पर रखते हैं — लेकिन "वित्त से कम" "कम" नहीं है, और सरकारी सेंधों में ऐसी लागतें होती हैं जिन्हें रिपोर्ट के आँकड़े पूरी तरह नहीं पकड़ते: डिजिटल चैनलों में नागरिक-विश्वास की हानि, जो [चैनल-शिफ़्ट बचत](../channel-shift-savings/) बिज़नेस केस निर्भर करने वाले डिजिटल-अपनाने को दबा देती है, और ऐसा डेटा उजागर करने की राजनीतिक और क़ानूनी लागत जिसे राज्य ने शुरुआत में नागरिकों को सौंपने के लिए बाध्य किया था।

## गणितीय आधार

सुरक्षा-निवेश का मूल्यांकन उसी तरह किया जाता है जैसे किसी भी जोख़िम-कमी व्यय का किया जाता है: एक अपेक्षित-हानि-कमी के रूप में, क्लासिक जोख़िम-प्रबंधन पहचान का उपयोग करते हुए।

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

## व्यावहारिक उदाहरण

**40,000 निवासियों के सामाजिक देखभाल रिकॉर्ड रखने वाली एक काउंटी काउंसिल केस-प्रबंधन प्रणाली**:

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

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

ALE समीकरण के अधिकांश लीवर इंजीनियरों के पास होते हैं: पहुँच-नियंत्रण डिज़ाइन, निर्भरता और पैच-स्वच्छता, लॉगिंग और पहचान-कवरेज, और घटना-प्रतिक्रिया टूलिंग सभी सीधे ARO पद को हिलाते हैं, यही कारण है कि CAF आकलन एक नीति-ऑडिट जितना ही एक तकनीकी आर्किटेक्चर समीक्षा जैसा पढ़ा जाता है। यह [तकनीकी क़र्ज़ को सार्वजनिक मूल्य के क्षरण के रूप में](../technical-debt-as-public-value-erosion/) का सबसे तीव्र रूप है — बिना-पैच, बिना-निगरानी, ख़राब-पहुँच-नियंत्रित प्रणालियाँ ऐसा क़र्ज़ हैं जिनका ब्याज-भुगतान एक स्थिर खिंचाव नहीं, बल्कि पुच्छ-जोख़िम (tail risk) है — और इसे [सरकारी आईटी में स्वामित्व की कुल लागत](../total-cost-of-ownership-in-government-it/) से मिलाया जाना चाहिए ताकि सुरक्षा-व्यय को प्रणाली की वास्तविक चालू-लागत से अलग न माना जाए। यह ग्रीन बुक के तहत [धन का सर्वोत्तम मूल्य](../value-for-money/) आकलनों में भी एक सीधा इनपुट है: जोख़िम-समायोजित लागत किसी भी विकल्प-आकलन के "लागत" पक्ष का हिस्सा है, अंत में जोड़ा गया बाद का विचार नहीं।

## सामान्य त्रुटियाँ

- **CAF स्व-आकलन को स्वयं सुरक्षा मानना**: एक पूर्ण आकलन एक सुरक्षा-स्थिति का वर्णन करता है; यह उसे बनाता नहीं — मूल्य प्राप्त परिणामों में है, दस्तावेज़ में नहीं।
- **बिना समायोजन के वैश्विक औसत सेंध-लागतों को स्थानीय अनुमान के रूप में उपयोग करना**: IBM के आँकड़े बड़े, विविध नमूनों में औसत हैं; एक छोटे स्थानीय प्राधिकरण की यथार्थवादी एकल-हानि-अपेक्षा शायद ही कभी किसी राष्ट्रीय सरकारी विभाग जैसी होती है।
- **निवेश-निर्णयों में पुच्छ-जोख़िम मनोविज्ञान को नज़रअंदाज़ करना**: एक कम वार्षिक संभावना सुरक्षा-व्यय को अनिश्चित काल के लिए टालना आसान बना देती है, ठीक उस वर्ष तक जब ऐसा नहीं होता — व्यावहारिक उदाहरण की तरह, AROs की एक सीमा के विरुद्ध ALE गणना का संवेदनशीलता-परीक्षण इसका मुक़ाबला करता है।
- **केवल IBM-शैली की सेंध-लागत गिनना, विश्वास-लागत नहीं**: एक सेंध जो डिजिटल चैनलों के उपयोग की नागरिक-इच्छा को दबा देती है, बाद के वर्षों तक [चैनल-शिफ़्ट बचत](../channel-shift-savings/) केस को क्षीण करती है, एक ऐसी लागत जिसे सेंध-लागत अनुमानों में शायद ही कभी शामिल किया जाता है।

## स्रोत

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
