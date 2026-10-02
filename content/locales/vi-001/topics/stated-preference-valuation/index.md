# Định giá Stated Preference

Các phương pháp stated preference ước tính giá trị của một hàng hóa không-thị-trường bằng cách trực tiếp hỏi mọi người những gì họ sẽ sẵn lòng trả cho nó, hoặc sẵn lòng chấp nhận để bồi thường để từ bỏ nó, thường qua một khảo sát có cấu trúc mô tả một kịch bản giả định. Định giá contingent là kỹ thuật được biết đến nhiều nhất trong nhóm này.

## Tại sao điều này quan trọng

Phụ lục 2 của Green Book (hướng dẫn bổ sung về định giá tác động không-thị-trường) chứng thực các phương pháp stated preference cho các hàng hóa không có giao dịch thị trường quan sát được nào để suy ra giá trị — chất lượng không khí, đa dạng sinh học, bảo vệ lũ lụt, giá trị tồn tại của một cảnh quan ai đó có thể không bao giờ ghé thăm (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra đã công bố hướng dẫn stated-preference riêng của nó cho đánh giá môi trường cụ thể vì rất nhiều giá trị môi trường (bảo tồn môi trường sống, chất lượng nước) không có thị trường proxy nào cả, không như, giả sử, tiếng ồn, ít nhất tương quan với giá nhà quan sát được (xem [định giá revealed preference](../revealed-preference-valuation/)).

Sự hấp dẫn cốt lõi của stated preference — nó có thể định giá theo nghĩa đen bất cứ điều gì, bao gồm các hàng hóa không ai đã từng giao dịch — cũng là nguồn gốc của vấn đề độ tin cậy của nó. Vì người trả lời không thực sự chi tiền, các khảo sát định giá contingent dễ bị thiên vị giả định (mọi người thổi phồng sẵn-lòng-trả khi không có giới hạn ngân sách thực sự), các hiệu ứng nhúng (cùng hàng hóa được định giá khác nhau tùy thuộc vào những gì khác trong khảo sát), và thiên vị điểm-khởi-đầu trong các thiết kế trò chơi đấu giá. Hội đồng NOAA năm 1993 về định giá contingent, được triệu tập sau vụ tranh chấp tràn dầu Exxon Valdez, đặt ra các tiêu chuẩn thiết kế — một định dạng trưng cầu nhị phân "bạn sẽ trả £X, có/không" thay vì đấu giá mở, và các nhắc nhở bắt buộc về giới hạn ngân sách thực sự của người trả lời — vẫn là tiêu chuẩn tham chiếu cho các khảo sát đáng bảo vệ.

## Cách tính toán

```
Định giá contingent (định dạng trưng cầu):
  Trình bày một lựa chọn nhị phân: "bạn sẽ trả £X mỗi năm cho
  kết quả Y không? có/không"
  Thay đổi X ngẫu nhiên qua các người trả lời.
  Khớp sẵn-lòng-trả như một hàm của tỷ lệ phản hồi có/không ở
  mỗi X.

WTP trung bình = diện tích dưới đường cầu ước tính
Giá trị tổng hợp = WTP trung bình × dân số bị ảnh hưởng

Biến thể thí nghiệm lựa chọn (mô hình hóa lựa chọn rời rạc):
  Trình bày cho người trả lời các lựa chọn lặp lại giữa các
  gói thuộc tính (bao gồm một thuộc tính chi phí), ước tính
  giá ngầm cho mỗi thuộc tính không-chi-phí từ các sự đánh đổi
  người trả lời tiết lộ.
```

Biến thể thí nghiệm lựa chọn thường được ưa chuộng hơn trong thực hành Anh hiện tại so với định giá contingent câu-hỏi-đơn vì buộc người trả lời phải đánh đổi nhiều thuộc tính với chi phí nhiều lần tạo ra các ước tính nhất quán nội bộ hơn, khó lợi dụng hơn so với một câu hỏi có/không đơn lẻ.

## Ví dụ minh họa

**Chính phủ quốc gia**: Defra ủy quyền một khảo sát định giá contingent để định giá một chương trình cải thiện chất lượng nước sông. Một khảo sát định dạng trưng cầu của 2.000 hộ gia đình thấy 62% sẽ trả £40/năm qua một khoản bổ sung hóa đơn nước giả định, và đường cầu ước tính cho một sẵn-lòng-trả trung bình £28/năm mỗi hộ gia đình.

```
WTP trung bình = £28/hộ gia đình/năm
Hộ gia đình trong lưu vực = 340.000
Giá trị hàng năm tổng hợp = £28 × 340.000 = £9,52tr/năm

Trong một kỳ đánh giá 20 năm ở tỷ lệ chiết khấu 3,5% (hệ số
niên kim ≈ 14,2):
GTHT(lợi ích) ≈ £9,52tr × 14,2 ≈ £135tr
```

Con số tổng hợp này sau đó được so sánh với phía chi phí [phân tích chi phí-lợi ích xã hội](../social-cost-benefit-analysis/) của chương trình. Green Book yêu cầu loại bằng chứng stated-preference này phải được báo cáo cùng với khoảng tin cậy và phương pháp khảo sát của nó, không phải như một ước tính điểm trần, chính xác vì con số nền tảng mỏng manh hơn giá thị trường.

**Tổ chức từ thiện**: một tín thác di sản khảo sát khách ghé thăm và không ghé thăm về sẵn-lòng-trả để ngăn chặn việc đóng cửa một tòa nhà lịch sử mà không nhóm nào thực sự ghé thăm (giá trị tồn tại của nó). Vì những người không ghé thăm, những người sẽ không bao giờ thấy tòa nhà, vẫn báo cáo WTP dương, khảo sát nắm bắt giá trị tồn tại và di sản mà một đếm doanh thu phí-khách-ghé-thăm đơn giản (một proxy revealed-preference) sẽ hoàn toàn bỏ sót — thể hiện lợi thế thực sự của stated preference nơi không có giao dịch thị trường nào để tiết lộ giá trị.

## Liên hệ với phát triển phần mềm

Các phương pháp stated preference hiếm khi áp dụng trực tiếp cho công việc kỹ thuật phần mềm, nhưng các kỹ sư xây dựng các nền tảng tư vấn công dân, các công cụ tham gia ngân sách, hoặc hạ tầng khảo sát công thường đang xây dựng công cụ mà kinh tế học phụ thuộc vào. Việc làm đúng các chi tiết thiết kế khảo sát — các số tiền đấu giá ngẫu nhiên, khung trưng cầu nhị phân hơn các câu hỏi mở, các nhắc nhở giới hạn ngân sách rõ ràng — không phải là một điều tốt-nên-có về UX, đó là điều làm cho định giá kết quả đáng bảo vệ dưới sự giám sát; một khảo sát trong-ứng-dụng được thiết kế kém có thể làm vô hiệu nhiều tháng phân tích kinh tế sau đó. Xem [các chỉ số hài lòng công dân](../citizen-satisfaction-metrics/) cho kỷ luật tổng quát hơn của việc khai thác dữ liệu ý kiến công sẽ chịu được trọng lượng phân tích.

## Những cạm bẫy

- **Các câu hỏi mở "bạn sẽ trả bao nhiêu?"** Những câu này dễ bị thiên vị chiến lược và neo đậu hơn nhiều so với khung trưng cầu nhị phân; khuyến nghị của hội đồng NOAA sử dụng định dạng trưng cầu tồn tại chính xác vì khai thác mở hoạt động kém.
- **Không có nhắc nhở về giới hạn ngân sách thực sự của người trả lời.** Không có nó, WTP được nêu thường xuyên vượt quá những gì cùng người sẽ trả khi một sự đánh đổi ngân sách thực sự đang diễn ra — thiên vị giả định.
- **Các hiệu ứng nhúng bị bỏ qua.** Cùng hàng hóa được định giá riêng so với được định giá như một phần của một gói lớn hơn tạo ra các ước tính WTP khác nhau; báo cáo những gì khác, nếu có, trong khung khảo sát.
- **Coi ước tính điểm của một khảo sát đơn lẻ là đã giải quyết.** Thực hành Green Book kỳ vọng một phạm vi và một cuộc thảo luận về các thiên vị đã biết, không phải một con số trần được chuyển tiếp vào bảng chi phí-lợi ích như thể nó là một giá thị trường.

## Nguồn tham khảo

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
