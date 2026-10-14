# Phân tích quyết định đa tiêu chí (MCDA)

MCDA tính điểm và cân nhắc các tùy chọn so với nhiều tiêu chí riêng biệt, có trọng số cùng một lúc, tạo ra một so sánh được xếp hạng mà không ép mọi tiêu chí vào một thang đo tiền tệ hoặc đơn vị tự nhiên. Đó là phương pháp đánh giá cho các quyết định nơi các kết quả quan trọng thực sự không thể được giảm xuống một con số đơn lẻ.

## Tại sao điều này quan trọng

Green Book rõ ràng cho phép MCDA (phụ lục nghiên cứu trường hợp Box 2 và Phụ lục A của nó đều thảo luận trực tiếp về nó) cho các đánh giá nơi lợi ích "thực sự không thể so sánh được" — nơi chuyển đổi mọi thứ thành tiền qua [phân tích chi phí-lợi ích xã hội](../phân-tích-chi-phí-lợi-ích-xã-hội/), hoặc thành một kết quả qua [phân tích hiệu quả chi phí](../phân-tích-hiệu-quả-chi-phí-trong-chính-phủ/), sẽ trình bày sai quyết định thay vì làm rõ nó (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Việc chọn địa điểm cho một nhà tù mới, ví dụ, đánh đổi chi phí vốn với tác động cộng đồng, kết nối giao thông, hiệu ứng môi trường, và khả năng tuyển dụng nhân viên — các tiêu chí không chia sẻ một đơn vị chung và nơi việc ép buộc một đơn vị chung (thường là tiền) sẽ lén lút đưa vào một đánh giá giá trị về tầm quan trọng tương đối của, giả sử, tác động môi trường so với chi phí, được ngụy trang thành số học khách quan.

Sự trung thực của MCDA cũng là điểm yếu chính của nó: vì trọng số được gán bởi bất cứ ai chạy đánh giá (hoặc bởi một hội đồng), phương pháp chỉ hợp pháp như quy trình tính trọng số. Hướng dẫn Green Book rõ ràng rằng các tiêu chí và trọng số phải được thỏa thuận và công bố *trước khi* các tùy chọn được tính điểm, chính xác để ngăn chặn một người đánh giá làm việc ngược từ một tùy chọn ưu tiên đến các trọng số biện minh cho nó.

## Cách tính toán

```
Đối với mỗi tùy chọn i và tiêu chí j:
  Điểm_ij   = hiệu suất của tùy chọn so với tiêu chí đó (thường
              0-100 hoặc 1-10, từ bằng chứng, đánh giá chuyên
              gia, hoặc tính điểm của các bên liên quan)
  Trọng số_j = tầm quan trọng tương đối của tiêu chí j, trọng
              số tổng bằng 1 (hoặc 100)

Điểm có trọng số của tùy chọn i = Σ_j (Điểm_ij × Trọng số_j)

Thủ tục:
1. Thỏa thuận tập hợp tiêu chí và trọng số TRƯỚC KHI tính
   điểm bất kỳ tùy chọn nào (trọng số swing hoặc so sánh theo
   cặp, ví dụ: AHP, là các phương pháp khai thác phổ biến).
2. Tính điểm mọi tùy chọn so với mọi tiêu chí trên một thang
   đo chung, từ bằng chứng khi có thể.
3. Tính tổng có trọng số; xếp hạng các tùy chọn.
4. Kiểm tra độ nhạy các trọng số: xếp hạng có sống sót qua sự
   bất đồng hợp lý về việc mỗi tiêu chí nên quan trọng đến
   mức nào không?
```

MCDA không tạo ra một giá trị tuyệt đối có thể bảo vệ được theo cách giá trị hiện tại thuần của SCBA làm — nó chỉ tạo ra một xếp hạng có điều kiện dựa trên các trọng số đã thỏa thuận. Đây là một đặc điểm khi quyết định thực sự là về việc đánh đổi các hàng hóa không thể so sánh, và là một trách nhiệm nếu được sử dụng để tránh công việc khó khăn hơn của việc tiền hóa khi tiền hóa thực sự có thể.

## Ví dụ minh họa

**Chính quyền địa phương**: một hội đồng chọn một địa điểm cho một trung tâm tái chế rác thải hộ gia đình mới tính điểm ba địa điểm so với bốn tiêu chí, có trọng số bởi một hội đồng liên bộ phận trước khi thăm bất kỳ địa điểm nào:

```
Tiêu chí (trọng số):      Chi phí vốn (30%)  Khả năng tiếp cận
                           giao thông (25%)
                           Tác động cộng đồng (25%)  Tác động
                           môi trường (20%)

Điểm địa điểm (0-100, cao hơn = tốt hơn):
Địa điểm A: chi phí 80, tiếp cận 60, cộng đồng 40, môi trường
            70
Địa điểm B: chi phí 60, tiếp cận 90, cộng đồng 70, môi trường
            50
Địa điểm C: chi phí 90, tiếp cận 50, cộng đồng 80, môi trường
            60

Tổng có trọng số:
Địa điểm A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14
           = 63
Địa điểm B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+
           17,5+10 = 68
Địa điểm C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+
           12 = 71,5
```

Địa điểm C xếp hạng cao nhất. Một lần chạy độ nhạy chuyển trọng số tác động cộng đồng từ 25% lên 35% (lấy 10 điểm từ chi phí vốn) thay đổi tổng của Địa điểm C thành 71,5 − 3 + 8 = 76,5 và của Địa điểm B thành 68 − 6 + 7 = 69 — Địa điểm C vẫn dẫn đầu, vì vậy xếp hạng mạnh mẽ đối với sự bất đồng hợp lý đó về trọng số, chính xác là kiểm tra mà Green Book kỳ vọng được báo cáo.

**Tổ chức từ thiện**: một quỹ cấp tài trợ chọn giữa tài trợ một dịch vụ tư vấn nợ, một mạng lưới ngân hàng thực phẩm, và một chương trình hiểu biết tài chính sử dụng MCDA thay vì SROI (xem [lợi tức xã hội trên đầu tư](../lợi-tức-xã-hội-trên-đầu-tư/)) chính xác vì các ủy viên quản trị không đồng ý, với thiện ý, về việc liệu cứu trợ khủng hoảng hay phòng ngừa nên được cân nhắc nặng hơn — MCDA để họ thỏa thuận về *hình dạng* của sự bất đồng (một phạm vi trọng số) thay vì giả vờ một tỷ lệ SROI đơn lẻ giải quyết nó.

## Liên hệ với phát triển phần mềm

MCDA là công cụ tự nhiên cho việc chọn nhà cung cấp và kiến trúc khi các tiêu chí thực sự mâu thuẫn — chọn giữa một hệ thống quản lý trường hợp được lưu trữ trên đám mây và tại chỗ đánh đổi chi phí, rủi ro chủ quyền dữ liệu, khả năng truy cập, và tốc độ cung cấp theo những cách không giảm xuống một con số. Các trưởng kỹ thuật nên khẳng định việc tính trọng số xảy ra trước khi các tùy chọn được tính điểm, chính xác như Green Book yêu cầu, vì một bài tập tính trọng số được chạy sau khi thấy danh sách rút gọn một cách đáng tin cậy trôi về bất cứ tùy chọn nào mà phòng đã ưu ái. Xem [xây dựng so với mua trong chính phủ](../xây-dựng-so-với-mua-trong-chính-phủ/) cho một ứng dụng MCDA phổ biến, và [thẻ điểm giá trị công](../thẻ-điểm-giá-trị-công/) cho một công cụ tính điểm có cấu trúc liên quan được sử dụng sau-quyết-định thay vì trước-quyết-định.

## Những cạm bẫy

- **Đặt trọng số sau khi thấy các tùy chọn.** Đây là cách phổ biến nhất mà MCDA bị lợi dụng, cố ý hoặc không; công bố trọng số trước khi tính điểm, và ghi lại ai đã đặt chúng.
- **Coi tổng có trọng số là một con số cứng.** Một điểm 71,5 so với 68 không phải là một khoảng cách có ý nghĩa thống kê trừ khi phân tích độ nhạy xác nhận xếp hạng ổn định; báo cáo các phạm vi, không phải độ chính xác giả.
- **Sử dụng MCDA để tránh tiền hóa thực sự khả thi.** Nếu hầu hết các tiêu chí có thể được định giá một cách đáng tin cậy, mặc định sang MCDA thay vì [SCBA](../phân-tích-chi-phí-lợi-ích-xã-hội/) loại bỏ thông tin mà đánh giá có thể đã sử dụng.
- **Để một bên liên quan chiếm ưu thế đặt tất cả các trọng số một mình.** Thực hành tốt của Green Book kỳ vọng các trọng số được khai thác từ một hội đồng đại diện, không phải giám đốc bảo trợ, để tránh đánh giá chỉ đơn giản là tái suy ra những gì người đó đã muốn.

## Nguồn tham khảo

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
