# Lợi tức xã hội trên đầu tư (SROI)

Lợi tức xã hội trên đầu tư là một khung để đo lường, tiền hóa, và tính toán cho một khái niệm giá trị rộng — xã hội, môi trường, và kinh tế — và diễn đạt nó như một tỷ lệ so với các nguồn lực đầu tư, ví dụ "£1,44 giá trị xã hội cho mỗi £1 đầu tư". Nó được thiết kế để mở rộng logic kế toán tài chính đến các kết quả mà thị trường không định giá, mà không mất đi kỷ luật của kế toán: mỗi con số trong một SROI phải có thể truy xuất được đến một kết quả do bên liên quan xác định, một cơ sở bằng chứng, và một sự điều chỉnh rõ ràng cho những gì sẽ xảy ra dù sao.

## Tại sao điều này quan trọng

SROI được duy trì bởi Social Value UK và Social Value International, các cơ quan kế thừa của SROI Network, với "A Guide to Social Return on Investment" (2012) vẫn là phương pháp luận tham chiếu. Khung dựa trên bảy nguyên tắc — liên quan các bên liên quan, hiểu những gì thay đổi, định giá những điều quan trọng, chỉ bao gồm những gì có ý nghĩa, không tuyên bố quá mức, minh bạch, và xác minh kết quả — và đó là nguyên tắc năm, "không tuyên bố quá mức", mà hầu hết các báo cáo SROI trong thực tế thất bại. Một tỷ lệ được tạo ra bằng cách bỏ qua các điều chỉnh trọng lượng chết và quy kết không phải là một SROI; đó là một con số marketing mặc quần áo của một SROI. Các kỹ sư phần mềm xây dựng các công cụ báo cáo cho các tổ chức từ thiện, doanh nghiệp xã hội, hoặc các nhà ủy nhiệm cần biết sự khác biệt, vì công cụ sẽ hoặc thực thi kỷ luật hoặc làm cho việc bỏ qua nó dễ dàng.

## Cách tính toán

SROI phụ thuộc vào một [lý thuyết thay đổi](../lý-thuyết-thay-đổi/) để xác định các kết quả nào trong phạm vi, và diễn đạt chúng sử dụng cùng chuỗi trách nhiệm như một [mô hình logic](../mô-hình-logic/):

```
Tỷ lệ SROI = Giá trị hiện tại của kết quả / Giá trị của đầu
            vào

Quy trình:
 1. Thiết lập phạm vi và xác định các bên liên quan có kết
    quả sẽ được đo
 2. Lập bản đồ kết quả (một lý thuyết thay đổi, được chứng
    minh với các bên liên quan, không giả định)
 3. Chứng minh kết quả và cho chúng một giá trị sử dụng các
    proxy tài chính
 4. Thiết lập tác động: giá trị gộp − trọng lượng chết − quy
    kết − sự thay thế, sau đó áp dụng sự sụt giảm
 5. Tính SROI: giá trị hiện tại thuần của tác động ÷ giá trị
    của đầu vào
 6. Báo cáo, sử dụng, và nhúng — tỷ lệ là một công cụ giao
    tiếp, không phải điểm cuối
```

Trọng lượng chết, quy kết, và sự thay thế được đề cập trong [tính bổ sung và trọng lượng chết](../tính-bổ-sung-và-trọng-lượng-chết/) và [sự thay thế và quy kết](../sự-thay-thế-và-quy-kết/); cả ba đều tồn tại để cô lập tác động [đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/) thực sự từ kết quả gộp.

## Ví dụ minh họa

**Chương trình việc làm chính quyền địa phương**: chi phí đầu vào hàng năm £250.000. Sáu mươi người tham gia chuyển vào việc làm bền vững; một proxy tài chính cho kết quả đó (nâng cao phúc lợi, giảm phụ thuộc trợ cấp, và doanh thu thuế kết hợp) là £8.500 mỗi người cho năm đầu tiên — xem [cơ sở dữ liệu chi phí đơn vị](../cơ-sở-dữ-liệu-chi-phí-đơn-vị/) để biết các proxy như vậy đến từ đâu.

- Giá trị kết quả gộp: 60 × £8.500 = £510.000
- Trừ trọng lượng chết (40% có thể đã tìm được việc mà không có chương trình): £510.000 × 0,60 = £306.000
- Trừ quy kết (30% của thay đổi còn lại là do sự hỗ trợ của các cơ quan khác): £306.000 × 0,70 = £214.200
- Kết quả năm 2 ở sụt giảm 30%: £214.200 × 0,70 = £149.940, được chiết khấu ở 3,5%/năm (xem [tỷ lệ chiết khấu xã hội](../tỷ-lệ-chiết-khấu-xã-hội/)): £149.940 ÷ 1,035 = £144.870
- Tổng giá trị hiện tại của tác động: £214.200 + £144.870 = £359.070
- **Tỷ lệ SROI: £359.070 ÷ £250.000 = 1,44**, được báo cáo như "£1,44 giá trị xã hội cho mỗi £1 đầu tư"

**Tổ chức từ thiện**: một dịch vụ làm bạn £60.000 giảm sự cô đơn cho 80 người cao tuổi, được định giá ở một proxy £1.100/người/năm. Giá trị gộp £88.000; sau 35% trọng lượng chết và 15% quy kết, tác động thuần là £88.000 × 0,65 × 0,85 = £48.620, một tỷ lệ SROI 0,81 — dưới điểm hòa vốn, đó là một phát hiện hợp pháp và hữu ích, không phải một thất bại để viết lên.

## Liên hệ với phát triển phần mềm

Một máy tính SROI để người dùng nhập số lượng kết quả và giá trị proxy nhưng không có trường bắt buộc cho trọng lượng chết, quy kết, hoặc một lý thuyết thay đổi được liên kết sẽ tạo ra các tỷ lệ bị thổi phồng theo mặc định, vì bỏ qua các điều chỉnh là con đường ít kháng cự nhất. Xây dựng kỷ luật vào schema: mỗi dòng kết quả nên tham chiếu một nhóm bên liên quan, một số lượng được chứng minh, một proxy tài chính với nguồn của nó, và các trường trọng lượng chết/quy kết không-tùy-chọn. Xem [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/) cho sự phân biệt mà việc lập bản đồ kết quả SROI phụ thuộc vào, và [mô hình logic](../mô-hình-logic/) cho chuỗi mà công cụ nên phản ánh trong mô hình dữ liệu của nó.

## Những cạm bẫy

- **Bỏ qua trọng lượng chết và quy kết.** Tỷ lệ tiêu đề không có các điều chỉnh này là một con số gộp, không phải một con số tác động thuần, và các nguyên tắc của Social Value UK yêu cầu rõ ràng cả hai.
- **So sánh các tỷ lệ qua các tổ chức.** Một tỷ lệ SROI phụ thuộc vào các lựa chọn phạm vi và proxy được thực hiện theo từng trường hợp; coi một tỷ lệ 4:1 từ một báo cáo là "tốt hơn" so với một tỷ lệ 2:1 từ một báo cáo khác bỏ qua rằng các giả định không được tiêu chuẩn hóa như một tỷ lệ kế toán tài chính.
- **Đếm hai lần các proxy chồng chéo.** Xếp chồng một proxy "giảm cô đơn" với một proxy "cải thiện phúc lợi tâm thần" cho cùng người thụ hưởng có thể định giá hai lần một thay đổi nền tảng.
- **Bỏ qua sự tham gia của các bên liên quan.** Nguyên tắc một yêu cầu các kết quả phải được xác định với những người trải nghiệm chúng, không được giả định bởi người phân tích xây dựng mô hình.

## Nguồn tham khảo

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
