# Các chỉ số hài lòng công dân

Các chỉ số hài lòng công dân đo cách mọi người đánh giá trải nghiệm trực tiếp của họ về một dịch vụ công — khác với sự tin tưởng vào các tổ chức nói chung, và khác với việc liệu dịch vụ có thực sự đạt được một kết quả tốt hay không. Một dịch vụ có thể được yêu thích và không hiệu quả, hoặc hiệu quả và không được yêu thích; khoảng cách giữa hai điều này bản thân nó là thông tin chẩn đoán mà một nhóm cung cấp nên theo dõi.

## Tại sao điều này quan trọng

Sự hài lòng được đo ở hai độ cao khác nhau thường xuyên bị trộn lẫn. Ở cấp dịch vụ, Performance Platform hiện đã nghỉ hưu của Anh và sổ tay dịch vụ GOV.UK hiện tại yêu cầu một khảo sát hài lòng mỗi dịch vụ (thường là một thang đo năm điểm "rất hài lòng" đến "rất không hài lòng," được quản lý tại điểm giao dịch) như một trong bốn KPI dịch vụ bắt buộc — xem [các chỉ số dịch vụ và giao dịch tiêu chuẩn](../service-standards-and-transaction-metrics/). Ở cấp độ thể chế, UK Civil Service People Survey đo sự tham gia và kinh nghiệm của nhân viên trên mỗi bộ phận chính phủ trung ương hàng năm, và riêng biệt, chương trình "Trust in Government" của OECD khảo sát sự tin tưởng công khai vào chính phủ quốc gia trên các quốc gia thành viên, theo dõi một mẫu hình suy giảm và hồi phục dài hạn được hình thành mạnh mẽ bởi các khủng hoảng (cả khủng hoảng tài chính năm 2008 và đại dịch COVID-19 đều tạo ra các chuyển động sắc nét, có thể thấy được trong các con số tin tưởng OECD). Lý do các kỹ sư xây dựng các dịch vụ hướng công dân cần giữ sự hài lòng và kết quả riêng biệt là một chế độ thất bại được biết đến trong thiết kế dịch vụ: một biểu mẫu số được thiết kế đẹp, dễ sử dụng cho một yêu cầu trợ cấp có thể đạt điểm hài lòng rất cao trong khi chính sách nền tảng — các quy tắc đủ điều kiện, các tồn đọng xử lý, các số tiền trao — không làm cho người nộp đơn tốt hơn. Sự hài lòng đo giao diện; nó không đo giá trị được cung cấp đằng sau nó.

## Cách tính toán

```
Sự hài lòng thuần = % hài lòng (hoặc rất hài lòng) − % không
                    hài lòng (hoặc rất không hài lòng) (các
                    phản hồi trung lập/không-có-ý-kiến bị loại
                    trừ từ cả hai thuật ngữ, nhưng được đếm
                    trong cơ sở phản hồi để tính mỗi tỷ lệ
                    phần trăm)

Khoảng cách hài lòng-đến-kết-quả = điểm hài lòng − điểm đạt
                    kết quả (cả hai được chuẩn hóa 0–100; một
                    khoảng cách dương lớn báo hiệu một dịch vụ
                    "cảm thấy tốt" nhưng không cung cấp đủ về
                    nội dung)

Chỉ số tin tưởng (kiểu OECD) = % người trả lời khảo sát trả
                    lời "có" cho "bạn có tin tưởng vào [chính
                    phủ quốc gia] không?" được theo dõi như
                    một chuỗi thời gian, thường được phân tách
                    theo tuổi, thu nhập, và giáo dục
```

## Ví dụ minh họa

**Dịch vụ hóa đơn điện tử thuế hội đồng chính quyền địa phương**: một khảo sát hài lòng tại điểm giao dịch thành công cho thấy 2.400 người trả lời: 1.650 hài lòng/rất hài lòng, 250 không hài lòng/rất không hài lòng, 500 trung lập.

```
Sự hài lòng thuần = (1.650/2.400 × 100) − (250/2.400 × 100)
                   = 68,75% − 10,42%
                   = +58,3 sự hài lòng thuần
```

Điều này trông mạnh mẽ khi cô lập. Nhưng khảo sát chỉ được hiển thị cho người dùng *thành công* hoàn thành giao dịch — một thiên vị đo lường đã biết (xem các cạm bẫy dưới đây). Kết hợp nó với chỉ số tỷ lệ hoàn thành từ [các chỉ số dịch vụ và giao dịch tiêu chuẩn](../service-standards-and-transaction-metrics/) cho thấy hoàn thành chỉ 71%, có nghĩa là:

```
Sự hài lòng dân số thực sự không được đo cho 29% đã bỏ hành
trình — có thể là đoàn hệ không hài lòng nhất, vì việc bỏ dở
bản thân nó là một tín hiệu tiêu cực mạnh mà khảo sát không
bao giờ nắm bắt.
```

**Minh họa cấp quốc gia (cấu trúc của một chuỗi tin tưởng kiểu OECD)**: sự tin tưởng chính phủ quốc gia được báo cáo ở 42% trong năm 1, giảm xuống 34% trong năm 2 (một năm khủng hoảng) và hồi phục lên 39% trong năm 3 — một quỹ đạo điển hình của mẫu hình sốc-và-hồi-phục-từng-phần mà OECD ghi lại trên các quốc gia thành viên sau các khủng hoảng lớn.

## Liên hệ với phát triển phần mềm

Trang bị các khảo sát hài lòng ở mỗi điểm thoát có ý nghĩa của một hành trình người dùng, không chỉ ở hoàn thành thành công — lỗi kỹ thuật phổ biến nhất đơn lẻ trong lĩnh vực này, và một lỗi âm thầm biến một chỉ số hài lòng thành một chỉ số vanity thiên vị-sống-sót. Nơi có thể, kết hợp điểm hài lòng với một chỉ số hoàn thành hoặc kết quả trên cùng bảng điều khiển để một nhóm không thể ăn mừng sự hài lòng tăng trong khi hoàn thành âm thầm giảm (xem [chi phí mỗi giao dịch](../cost-per-transaction/) và [tính hòa nhập số](../digital-inclusion/) cho ai bị loại trừ khỏi lấy mẫu hài lòng số ngay từ đầu — các người dùng không-số và hỗ trợ-số bị đại diện không đủ một cách có hệ thống trong các khảo sát trong-dịch-vụ). Dữ liệu hài lòng và tin tưởng cũng đưa trực tiếp vào chân tính hợp pháp của [tam giác chiến lược của Moore](../public-value/), và thuộc về các góc nhìn "khách hàng" và "tính hợp pháp" của một [thẻ điểm giá trị công](../public-value-scorecard/) — xem [các chỉ số tin tưởng và tính hợp pháp](../trust-and-legitimacy-metrics/) cho đối tác cấp thể chế của chỉ số cấp dịch vụ này.

## Những cạm bẫy

- **Thiên vị sống sót trong các khảo sát tại điểm hoàn thành**: người dùng bỏ dở một hành trình không bao giờ thấy khảo sát, vì vậy một điểm hài lòng trong-dịch-vụ cao có thể cùng tồn tại với một tỷ lệ hoàn thành thấp và một dân số vô hình lớn những người không-hoàn-thành không hài lòng.
- **Coi sự hài lòng là một proxy cho kết quả**: một giao diện được thiết kế tốt cho một chính sách được thiết kế kém đạt điểm tốt về sự hài lòng và kém về kết quả — luôn báo cáo cả hai, không bao giờ một như một thay thế cho cái khác.
- **Các mẫu nhỏ, không đại diện được báo cáo với độ chính xác giả**: một điểm hài lòng từ vài trăm người trả lời tự chọn được báo cáo đến một chữ số thập phân ngụ ý một sự tin tưởng mà kích thước mẫu không thể hỗ trợ.
- **Bỏ qua phân tách nhân khẩu học**: các con số tin tưởng và hài lòng quốc gia không được chia nhỏ theo tuổi, thu nhập, khuyết tật, hoặc truy cập số có thể che giấu các trải nghiệm khác biệt mạnh mẽ qua các nhóm — một mẫu hình mà các bản phát hành Trust in Government riêng của OECD rõ ràng phân tách cho.

## Nguồn tham khảo

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
