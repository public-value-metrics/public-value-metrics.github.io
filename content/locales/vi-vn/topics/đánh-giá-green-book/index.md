# Đánh giá Green Book (Mô hình Năm Trường hợp)

Green Book là hướng dẫn bắt buộc của HM Treasury để đánh giá và thẩm định các đề xuất chi tiêu của chính phủ Anh. Công cụ trung tâm của nó, mô hình năm trường hợp, buộc một trường hợp kinh doanh phải trả lời năm câu hỏi riêng biệt — đó có phải là một ý tưởng tốt, nó có mang lại giá trị, nó có thể được mua sắm, nó có thể chi trả được, và nó có thể được cung cấp hay không — thay vì gộp mọi thứ thành một con số đơn lẻ mà một bộ trưởng có thể vẫy tay cho qua.

## Tại sao điều này quan trọng

Mọi đề xuất chi tiêu của chính phủ trung ương Anh trên các giới hạn được ủy quyền của bộ phận phải trải qua đánh giá Green Book trước khi tài trợ được giải phóng, và Green Book Review 2020 của HM Treasury (được xuất bản sau khi bị chỉ trích rằng quy trình thiên vị chống lại các khu vực nghèo hơn, xem <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) đã siết chặt yêu cầu rằng các tùy chọn phải được so sánh với một đường cơ sở "làm tối thiểu" thực sự và rằng sự phù hợp chiến lược phải được chứng minh trước khi giá trị đồng tiền thậm chí được đánh giá. Mô hình năm trường hợp bản thân nó có trước Green Book — nó bắt nguồn từ Office of Government Commerce như cấu trúc trường hợp kinh doanh chuẩn — nhưng phiên bản Green Book 2022 nhúng nó như hình dạng bắt buộc cho bất kỳ trường hợp kinh doanh nào tìm kiếm sự phê duyệt của Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Điểm của việc chia trường hợp thành năm phần là một đề xuất có thể thất bại ở bất kỳ chiều nào bất kể các chiều khác. Một nền tảng CNTT thay thế hợp lý về chiến lược, hiệu quả chi phí vẫn có thể thất bại trường hợp thương mại nếu chỉ một nhà cung cấp có thể cung cấp nó (tạo ra rủi ro đấu thầu đơn), hoặc thất bại trường hợp quản lý nếu bộ phận không có hồ sơ thành tích cung cấp các chương trình có quy mô đó. Một điểm "giá trị đồng tiền" đơn lẻ che giấu chính xác loại chế độ thất bại này.

## Cách tính toán

Mô hình năm trường hợp là một cấu trúc, không phải là một công thức, nhưng mỗi trường hợp có bài kiểm tra định lượng hoặc bằng chứng riêng của nó:

```
1. Trường hợp chiến lược
   Bằng chứng về một mục tiêu chi tiêu liên kết với chiến lược
   tổ chức.
   Kiểm tra: có một trường hợp thay đổi không? ("không làm gì"
   luôn là một tùy chọn.)

2. Trường hợp kinh tế
   Đánh giá tùy chọn so với một đường cơ sở "làm tối thiểu",
   sử dụng phân tích chi phí-lợi ích xã hội hoặc phân tích hiệu
   quả chi phí.
   Kiểm tra: tùy chọn nào tối đa hóa giá trị công thuần?
   Xem ../social-cost-benefit-analysis/ và
   ../cost-effectiveness-analysis-in-government/

3. Trường hợp thương mại
   Sự tham gia thị trường, con đường mua sắm, phân bổ rủi ro
   giữa người mua và nhà cung cấp.
   Kiểm tra: tùy chọn ưu tiên có thể mua sắm được với các điều
   khoản chấp nhận được không?

4. Trường hợp tài chính
   Khả năng chi trả trong giới hạn ngân sách bộ phận, nguồn tài
   trợ, xử lý bảng cân đối.
   Kiểm tra: chúng ta có thể chi trả nó, năm này và mọi năm sau
   không?

5. Trường hợp quản lý
   Quản trị, kế hoạch dự án, kế hoạch thực hiện lợi ích, sổ
   đăng ký rủi ro.
   Kiểm tra: tổ chức này có thực sự có thể cung cấp nó không?
   Xem ../benefits-realization/
```

Trường hợp kinh tế là nơi đánh giá định lượng cư trú: các tùy chọn được so sánh trên cơ sở giá trị hiện tại thuần được điều chỉnh theo [tỷ lệ chiết khấu xã hội](../tỷ-lệ-chiết-khấu-xã-hội/), sử dụng phương pháp [phân tích chi phí-lợi ích xã hội](../phân-tích-chi-phí-lợi-ích-xã-hội/), hoặc, nơi lợi ích không thể được tiền hóa một cách trung thực, qua [phân tích hiệu quả chi phí](../phân-tích-hiệu-quả-chi-phí-trong-chính-phủ/) hoặc [phân tích quyết định đa tiêu chí](../phân-tích-quyết-định-đa-tiêu-chí/).

## Ví dụ minh họa

**Chính quyền địa phương**: một hội đồng đánh giá một hệ thống CNTT sửa chữa nhà ở £12 triệu chạy năm trường hợp như sau. Trường hợp chiến lược: tồn đọng sửa chữa vi phạm tiêu chuẩn nhà-đủ-điều-kiện theo luật định trong vòng 18 tháng nếu không có can thiệp. Trường hợp kinh tế: ba tùy chọn được tính chi phí trong một kỳ đánh giá 10 năm ở tỷ lệ chiết khấu 3,5% (theo tỷ lệ ưu tiên thời gian xã hội chuẩn của Green Book 2022) — "làm tối thiểu" (sửa hệ thống legacy, NPV −£4,1tr), "mua" (nền tảng COTS, NPV +£2,3tr), "xây dựng" (nền tảng tùy chỉnh, NPV +£0,6tr sau khi áp dụng thiên lệch lạc quan 40% cho phát triển phần mềm so với chi phí vốn không chiết khấu, theo Phụ lục A của Green Book). Mua thắng trường hợp kinh tế. Trường hợp thương mại: tồn tại hai nhà cung cấp khả thi, đấu thầu cạnh tranh là khả thi — đạt. Trường hợp tài chính: vốn có sẵn từ Public Works Loan Board, chi phí doanh thu phù hợp trong kế hoạch tài chính trung hạn — đạt. Trường hợp quản lý: hội đồng đã cung cấp hai hệ thống tương đương trong năm năm qua — đạt. Đề xuất tiến hành với "mua."

**Bộ phận chính phủ trung ương**: một đề xuất với trường hợp kinh tế mạnh (NPV +£40tr) nhưng chỉ một nhà cung cấp giữ chứng nhận liên quan thất bại bài kiểm tra trường hợp thương mại cho sự căng cạnh tranh, buộc phải hoặc một miễn trừ đấu thầu đơn (với gánh nặng giám sát riêng của nó) hoặc thiết kế lại đặc tả để mở thị trường — trường hợp kinh tế đơn thuần sẽ không bao giờ làm nổi lên điều này.

## Liên hệ với phát triển phần mềm

Các nhóm kỹ thuật trong chính phủ hoặc các tổ chức được tài trợ bằng tài trợ thường chỉ thấy trường hợp kinh tế, vì đó là phần mà lãnh đạo sản phẩm và kỹ thuật được yêu cầu biện minh ("ROI của sự di chuyển này là gì?"). Nhưng một trường hợp kinh doanh vượt qua Treasury hoặc một ủy ban tài trợ cần tất cả năm trường hợp, và các kỹ sư thường là những người được định vị tốt nhất để trả lời trường hợp thương mại (điều này có thực sự có thể được mua sắm không, hay nó khóa chúng ta vào định dạng độc quyền của một nhà cung cấp?) và trường hợp quản lý (chúng ta có năng lực cung cấp không, hay điều này phụ thuộc vào ba người cụ thể không rời đi?). Coi một yêu cầu "chỉ các con số trường hợp kinh doanh" là một yêu cầu cho một phần năm của quyết định thực tế. Xem [giá trị đồng tiền](../giá-trị-đồng-tiền/) cho cách đầu ra của trường hợp kinh tế thường được tóm tắt, và [tổng chi phí sở hữu](../tổng-chi-phí-sở-hữu-trong-cntt-chính-phủ/) cho lõi định lượng thông thường của trường hợp tài chính.

## Những cạm bẫy

- **Viết trường hợp kinh tế trước và trường hợp chiến lược để khớp với nó.** Green Book Review 2020 phát hiện chính xác chế độ thất bại này đang thúc đẩy thiên vị đánh giá đối với các địa điểm và ngành đã có nhiều bằng chứng, củng cố sự bất bình đẳng khu vực; trường hợp chiến lược nên thiết lập mục tiêu trước khi các tùy chọn được so sánh.
- **Coi "làm tối thiểu" như "không làm gì".** Đường cơ sở đúng là tùy chọn chi phí thấp nhất vẫn đáp ứng các nghĩa vụ pháp lý hoặc an toàn tối thiểu, không phải một tưởng tượng chi tiêu bằng không — so sánh với số không theo nghĩa đen thổi phồng giá trị rõ ràng của mọi tùy chọn.
- **Bỏ qua các trường hợp thương mại và quản lý vì trường hợp kinh tế mạnh.** Một đề xuất NPV cao không thể được mua sắm cạnh tranh hoặc được cung cấp bởi tổ chức bảo trợ không phải là một đề xuất có thể tài trợ; các người đánh giá Treasury thường xuyên từ chối trên những căn cứ này ngay cả với một trường hợp kinh tế thuyết phục.
- **Áp dụng mô hình năm trường hợp một lần, ở đầu.** Green Book yêu cầu trường hợp phải được xem lại ở mỗi cổng phê duyệt tiếp theo (trường hợp phác thảo chiến lược, trường hợp kinh doanh phác thảo, trường hợp kinh doanh đầy đủ) khi chi phí và bằng chứng vững chắc hơn — một trường hợp đóng băng ở giai đoạn phác thảo bỏ lỡ sự leo thang chi phí mà một cổng sau sẽ bắt được.

## Nguồn tham khảo

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
