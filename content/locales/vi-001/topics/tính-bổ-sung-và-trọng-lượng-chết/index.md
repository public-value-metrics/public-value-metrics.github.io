# Tính bổ sung và trọng lượng chết

Tính bổ sung hỏi liệu một can thiệp có gây ra một kết quả mà nếu không thì sẽ không xảy ra hay không. Trọng lượng chết là hình ảnh gương của nó: tỷ lệ của một kết quả sẽ xảy ra dù sao, ngay cả không có chương trình, khoản tài trợ, hoặc trợ cấp. Gần như mọi tuyên bố tác động từ một chương trình chính phủ hoặc tổ chức từ thiện đều thổi phồng tác động của nó cho đến khi trọng lượng chết được trừ đi, đó là lý do tại sao hướng dẫn đánh giá của Anh coi đó là điều chỉnh đầu tiên và quan trọng nhất đối với bất kỳ con số tiêu đề nào.

## Tại sao điều này quan trọng

"Chúng tôi đã hỗ trợ 500 doanh nghiệp phát triển" nghe có vẻ như một thành tích, nhưng nếu 300 trong số các doanh nghiệp đó sẽ phát triển dù sao — vì kinh tế địa phương đang hồi phục, vì họ có các con đường tài trợ khác, vì họ đã đang trên một quỹ đạo tăng trưởng trước khi chương trình bắt đầu — đóng góp bổ sung thực sự của chương trình là 200, không phải 500. Magenta Book của HM Treasury và "Hướng dẫn Tính Bổ sung" lâu đời của HM Treasury/BIS (được phát triển ban đầu cho các chương trình phát triển và tái sinh khu vực, và được sử dụng rộng rãi trong đánh giá chính phủ Anh từ đó) chính thức hóa trọng lượng chết là điều chỉnh khởi đầu trong trình tự tác động thuần chuẩn: hiệu ứng gộp trừ trọng lượng chết, trừ sự thay thế, trừ sự rò rỉ, được điều chỉnh cho hiệu ứng bội số, bằng tác động bổ sung thuần. Bỏ qua bước này là cách phổ biến nhất khiến các tuyên bố tác động khu vực công và xã hội bị thổi phồng, cố ý hoặc không — một chương trình tài trợ chỉ đo kết quả tổng của người tham gia, không có nhóm so sánh, không thể phân biệt hiệu ứng của riêng nó với những gì sẽ xảy ra bất kể.

Trọng lượng chết không phải là một tỷ lệ phần trăm cố định; nó hoàn toàn phụ thuộc vào đối chiếu thực tế cho dân số và can thiệp cụ thể (xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/)). Các đánh giá phát triển khu vực của Anh dưới các Cơ quan Phát triển Khu vực trước đây thường thấy tỷ lệ trọng lượng chết trong khoảng 20–60% tùy thuộc vào loại hỗ trợ doanh nghiệp, đó là lý do tại sao các đánh giá chương trình đáng tin cậy báo cáo một phạm vi điều chỉnh-theo-trọng-lượng-chết thay vì một con số giả định đơn lẻ, và tại sao các nhà tài trợ như National Lottery Community Fund và Big Society Capital yêu cầu người nhận tài trợ phải đề cập đến trọng lượng chết một cách rõ ràng trong báo cáo kết quả thay vì báo cáo số lượng người tham gia tổng.

## Cách tính toán

Trình tự điều chỉnh tác động thuần chuẩn, như được đặt ra trong hướng dẫn đánh giá của Anh (Magenta Book; Hướng dẫn Tính Bổ sung HM Treasury/BIS; hướng dẫn đánh giá ESIF và quỹ cấu trúc):

```
Kết quả gộp
  − Trọng lượng chết  (những gì sẽ xảy ra dù sao)
  − Sự thay thế       (hoạt động/lợi ích được chuyển từ nơi khác,
                       không được tạo ra — xem sự-thay-thế-và-quy-
                       kết)
  − Sự rò rỉ          (lợi ích tích lũy bên ngoài nhóm/khu vực mục
                       tiêu)
  × Số nhân            (hoạt động kinh tế gián tiếp/cảm ứng bổ
                        sung, khi dương)
  = Tác động bổ sung thuần
```

Tỷ lệ trọng lượng chết là một tỷ lệ phần trăm:

```
Tỷ lệ trọng lượng chết = kết quả sẽ xảy ra không có can thiệp
                         / tổng kết quả gộp quan sát được

Kết quả bổ sung thuần = Kết quả gộp × (1 − Tỷ lệ trọng lượng
                        chết)
```

## Ví dụ minh họa

**Chương trình tài trợ hỗ trợ doanh nghiệp**: một kế hoạch tài trợ khu vực báo cáo 500 doanh nghiệp được hỗ trợ đã tăng việc làm trong năm tiếp theo, trung bình 3 công việc mỗi doanh nghiệp — một tuyên bố gộp 1.500 công việc.

Một nhóm so sánh khớp các doanh nghiệp không được hỗ trợ tương tự (xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/)) cho thấy 40% sự tăng trưởng việc làm của các doanh nghiệp được hỗ trợ sẽ xảy ra dù sao, dựa trên cách nhóm khớp hoạt động trong cùng thời kỳ.

```
Tỷ lệ trọng lượng chết = 40%
Công việc bổ sung thuần = 1.500 × (1 − 0,40) = 900 công việc
```

Thành tích có thể báo cáo trung thực của chương trình là 900 công việc, không phải 1.500 — một sự giảm 40% hoàn toàn từ điều chỉnh trọng lượng chết, trước khi sự thay thế hoặc rò rỉ thậm chí được xem xét.

**Chương trình việc làm từ thiện**: một tổ chức từ thiện đặt 200 người thất nghiệp dài hạn vào các công việc với chi phí £600.000 (£3.000 mỗi vị trí, gộp). Dữ liệu thị trường lao động quốc gia cho thấy, không có can thiệp nào, khoảng 15% một nhóm thất nghiệp dài hạn tương đương tìm được việc làm trong cùng thời kỳ qua sự luân chuyển tự nhiên của thị trường việc làm.

```
Tỷ lệ trọng lượng chết = 15%
Vị trí bổ sung thuần = 200 × (1 − 0,15) = 170
Chi phí thực sự mỗi vị trí bổ sung = £600.000 / 170 ≈ £3.529
```

Con số chi phí-mỗi-vị-trí gộp (£3.000) đánh giá thấp chi phí thực sự của đóng góp bổ sung của tổ chức từ thiện khoảng 15%.

## Liên hệ với phát triển phần mềm

Tính bổ sung và trọng lượng chết quan trọng trực tiếp đối với bất kỳ ai xây dựng phần mềm đo lường tác động hoặc quản lý tài trợ cho khu vực công hoặc xã hội:

- Các hệ thống báo cáo kết quả nên nắm bắt một nhóm so sánh hoặc đường cơ sở theo thiết kế, không chỉ kết quả của người tham gia — việc bổ sung một đối chiếu thực tế sau khi một hệ thống ra mắt mà không có nó khó hơn nhiều so với việc xây dựng khả năng nắm bắt từ đầu (xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/)).
- Các bảng điều khiển chỉ báo cáo số lượng người tham gia tổng sẽ có hệ thống thổi phồng tác động đối với các nhà tài trợ và cơ quan giám sát; nơi các ước tính trọng lượng chết tồn tại (từ văn học đánh giá hoặc một nhóm so sánh), phần mềm nên phơi bày con số thuần-của-trọng-lượng-chết cùng với con số gộp, không phải thay cho nó.
- Điều này kết nối trực tiếp với [lợi tức xã hội trên đầu tư](../lợi-tức-xã-hội-trên-đầu-tư/), tỷ lệ SROI của nó chỉ đáng tin cậy khi trọng lượng chết (và sự thay thế) đã được trừ đi từ các kết quả tuyên bố gộp — một máy tính SROI bỏ qua bước này sẽ tạo ra các tỷ lệ bị thổi phồng không chịu được sự giám sát.

## Những cạm bẫy

- **Báo cáo kết quả gộp như thể chúng đều là bổ sung.** Đây là lỗi đo lường tác động phổ biến nhất trong báo cáo tài trợ và chương trình; luôn hỏi "điều này sẽ xảy ra dù sao không?" trước khi công bố một con số tiêu đề.
- **Giả định một tỷ lệ phần trăm trọng lượng chết đơn lẻ áp dụng ở mọi nơi.** Trọng lượng chết thay đổi rất nhiều theo ngành, dân số, và điều kiện kinh tế địa phương; sử dụng một nhóm so sánh hoặc bằng chứng cụ thể theo ngành thay vì tái sử dụng một con số từ một đánh giá không liên quan.
- **Nhầm lẫn trọng lượng chết với sự thay thế.** Trọng lượng chết là về các kết quả đối chiếu thực tế cho cùng người tham gia; sự thay thế là về các hiệu ứng đối với những người hoặc địa điểm khác — xem [sự thay thế và quy kết](../sự-thay-thế-và-quy-kết/). Nhầm lẫn hai điều này dẫn đến việc đếm hai lần hoặc đếm thiếu điều chỉnh.
- **Trọng lượng chết tự báo cáo từ người tham gia.** Hỏi người thụ hưởng "điều này sẽ xảy ra không có sự giúp đỡ của chúng tôi không?" tạo ra các ước tính trọng lượng chết có hệ thống thấp (người tham gia có xu hướng ghi nhận công cho chương trình); một nhóm so sánh độc lập đáng tin cậy hơn nhiều.

## Nguồn tham khảo

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
