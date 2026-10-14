# Chi phí cơ hội trong chi tiêu công

Chi phí cơ hội là giá trị của phương án thay thế tốt nhất bị bỏ qua khi một cơ quan công cam kết tiền, thời gian nhân viên, hoặc vốn chính trị cho một tùy chọn thay vì một tùy chọn khác. Trong một bộ phận có ngân sách cố định, mỗi đồng tiền chi cho một chương trình là một đồng tiền không thể chi cho chương trình tốt nhất tiếp theo — chi phí thực sự của một quyết định không phải là nó chi tiêu gì, mà là nó thay thế gì.

## Tại sao điều này quan trọng

Ngân sách công bị giới hạn tiền mặt trong một kỳ xét duyệt chi tiêu, vì vậy — không như một công ty tư nhân đang phát triển — một bộ phận chính phủ không thể đơn giản "tìm thêm tiền" cho một ý tưởng tốt; việc tài trợ cho nó có nghĩa là bỏ tài trợ cho thứ khác. Green Book của HM Treasury coi đây là nền tảng: mọi đánh giá được yêu cầu phải so sánh một can thiệp với một đường cơ sở "làm tối thiểu" *và* với các cách sử dụng thay thế thực tế của cùng nguồn lực, chính xác vì câu hỏi thực sự mà một nhóm chi tiêu Treasury đặt ra không bao giờ là "điều này có tốt không?" mà là "điều này có tốt hơn những gì khác số tiền này có thể mua không?" Nguyên tắc đánh giá cốt lõi của Green Book — rằng các nguồn lực công nên chảy đến can thiệp có giá trị xã hội thuần cao nhất trên mỗi đồng — là chi phí cơ hội được nêu thành chính sách.

Điều này dễ nói nhưng khó áp dụng vì "phương án thay thế tốt nhất tiếp theo" hiếm khi hiển thị trong một trường hợp kinh doanh đơn lẻ. Một chương trình tài trợ £2 triệu cho việc làm thanh niên được so sánh, trong trường hợp kinh doanh, với việc không làm gì — nhưng người so sánh trung thực là can thiệp việc làm thanh niên tốt nhất tiếp theo, hoặc thực sự là cách sử dụng tốt nhất tiếp theo của £2 triệu ở bất kỳ đâu trong danh mục đầu tư, bao gồm cả chi tiêu không liên quan đến việc làm. Magenta Book (HM Treasury, 2020) cảnh báo rõ ràng rằng các đánh giá so sánh "có can thiệp" với "không có can thiệp" đánh giá thấp mức mà một can thiệp phải vượt qua, vì "không có can thiệp này" không giống với "không có gì cả" — tiền được giải phóng sẽ tài trợ cho thứ khác.

## Cách tính toán

```
Chi phí cơ hội của việc chọn A = giá trị của phương án thay thế
                                 B bị bỏ qua tốt nhất

Giá trị công thuần của A = giá trị(A) − giá trị(B), không phải
                           giá trị(A) − 0
```

Không có công thức phổ quát vì phương án thay thế bị bỏ qua là đặc thù theo ngữ cảnh, nhưng kỷ luật này có thể tổng quát hóa: xác định cách sử dụng tốt nhất tiếp theo thực tế của cùng dòng ngân sách (không phải một "không làm gì" lý tưởng hóa), định giá nó trên cùng cơ sở (tiền hóa khi có thể, theo [phân tích chi phí-lợi ích xã hội](../phân-tích-chi-phí-lợi-ích-xã-hội/)), và trừ đi.

## Ví dụ minh họa

**Dòng ngân sách bộ phận**: một quỹ chuyển đổi số £5 triệu có thể tài trợ chính xác một trong hai đề xuất trong năm tài chính này.

- *Tùy chọn A*: một nền tảng quản lý trường hợp mới, lợi ích tiền hóa £7,2 triệu trong 5 năm (tiết kiệm hiệu quả cộng với giải quyết trường hợp nhanh hơn).
- *Tùy chọn B*: một dịch vụ xác minh danh tính được chia sẻ giữa ba bộ phận, lợi ích tiền hóa £6,4 triệu trong 5 năm.

Một trường hợp kinh doanh ngây thơ cho A so sánh £7,2 triệu lợi ích với £5 triệu chi phí và báo cáo tỷ lệ lợi ích-chi phí 1,44:1 — có vẻ mạnh mẽ. Nhưng vì A và B cạnh tranh cho cùng £5 triệu, chi phí cơ hội của việc chọn A là lợi ích £6,4 triệu bị bỏ qua của B. Trường hợp *thuần* cho A so với phương án thay thế thực tế chỉ là £7,2tr − £6,4tr = £0,8 triệu, không phải toàn bộ tiêu đề £7,2 triệu. Nếu một tùy chọn thứ ba, C, đưa ra £7,5 triệu lợi ích cho cùng £5 triệu, tài trợ A hơn C sẽ phá hủy £0,3 triệu giá trị công ngay cả khi trường hợp kinh doanh riêng của A trông hoàn toàn chính đáng khi xem riêng lẻ.

**Thời gian nhân viên chính quyền địa phương**: nhóm dữ liệu ba người của một hội đồng có thể xây dựng hoặc bảng điều khiển danh sách chờ nhà ở (ước tính tiết kiệm 400 giờ-nhân-viên/năm, định giá £28/giờ = £11.200/năm) hoặc một công cụ phân loại gian lận trợ cấp (ước tính ngăn chặn £85.000/năm trong các khoản thanh toán không chính xác). Việc xây dựng bảng điều khiển có chi phí cơ hội £85.000/năm bị bỏ qua, không chỉ là chi phí lương của nhóm dữ liệu — chi phí thực sự của việc xây dựng nội bộ "miễn phí" là lợi ích lớn hơn nhiều mà nhóm có thể đã sản xuất ở nơi khác.

## Liên hệ với phát triển phần mềm

Năng lực kỹ thuật trong một cơ quan công chính là một ngân sách bị hạn chế — năng lực sprint, không phải đồng tiền — và kỷ luật tương tự áp dụng trực tiếp:

- Luôn nêu rõ người so sánh: trường hợp kinh doanh của một tính năng nên nêu rõ những gì khác mà cùng số tuần-nhóm có thể mang lại, không chỉ lợi tức của riêng nó.
- Coi "chúng ta có năng lực kỹ thuật dư thừa" là điểm khởi đầu của một phân tích chi phí cơ hội, không phải điểm kết thúc — năng lực dư thừa vẫn có cách sử dụng thay thế tốt nhất, ngay cả khi cách sử dụng đó là trả nợ kỹ thuật (xem [nợ kỹ thuật như là sự xói mòn giá trị công](../nợ-kỹ-thuật-như-là-sự-xói-mòn-giá-trị-công/)).
- Kết nối điều này trực tiếp với [giá trị đồng tiền](../giá-trị-đồng-tiền/): bài kiểm tra "kinh tế" của VFM vô nghĩa nếu không có một người so sánh chi phí cơ hội trung thực, và với [chi phí chậm trễ trong các chương trình công](../chi-phí-chậm-trễ-trong-các-chương-trình-công/), định giá khía cạnh thời gian của logic phương-án-thay-thế-bị-bỏ-qua tương tự.

## Những cạm bẫy

- **So sánh với "không làm gì" thay vì phương án thay thế tốt nhất tiếp theo.** Green Book yêu cầu một đường cơ sở "làm tối thiểu" chính xác vì chi phí cơ hội thực sự hiếm khi bằng không; một trường hợp kinh doanh chỉ vượt qua mức "không làm gì" chưa chứng minh nó vượt qua phương án thay thế thực tế.
- **Bỏ qua sự cạnh tranh liên bộ phận cho cùng một nguồn quỹ.** Các dòng ngân sách có vẻ được bảo vệ trong một tổng cục thường cạnh tranh ở cấp cao hơn (một đánh giá chi tiêu, một chương trình vốn) nơi chi phí cơ hội thực sự được thực hiện.
- **Giả định thời gian nhân viên được giải phóng có giá trị bằng không thêm.** Thời gian "tiết kiệm" chỉ tạo ra giá trị nếu được tái triển khai cho thứ có giá trị; nếu cách sử dụng thay thế không tồn tại, khoản tiết kiệm chỉ là danh nghĩa.

## Nguồn tham khảo

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
