# Cơ sở dữ liệu chi phí đơn vị

Một cơ sở dữ liệu chi phí đơn vị là một thư viện các proxy tài chính đã được nghiên cứu trước, dựa trên bằng chứng cho các kết quả xã hội — giá trị của việc chuyển từ thất nghiệp sang việc làm, của sự cô đơn giảm, của một hợp đồng thuê ổn định — cho phép một người thực hành tiền hóa một kết quả mà không cần ủy quyền nghiên cứu định giá tùy chỉnh mỗi lần. Chúng tồn tại để một tổ chức từ thiện nhỏ viết một đơn xin tài trợ có thể áp dụng cùng sự chặt chẽ như một công ty tư vấn được trang bị tốt, bằng cách tái sử dụng một proxy mà người khác đã suy ra và công bố.

## Tại sao điều này quan trọng

UK Social Value Bank của HACT, được phát triển với nhà kinh tế học Daniel Fujiwara sử dụng các phương pháp định giá phúc lợi, và Global Value Exchange, một cơ sở dữ liệu mở, nguồn cộng đồng của các proxy tài chính, là hai cơ sở dữ liệu được sử dụng rộng rãi nhất trong khu vực thứ ba và khu vực công Anh. Cả hai tồn tại vì công việc định giá nền tảng — [định giá phúc lợi](../wellbeing-valuation/) và [định giá stated preference](../stated-preference-valuation/) — đắt đỏ, đòi hỏi phương pháp luận cao, và chậm để chạy từ đầu cho mỗi dự án. Một thư viện proxy chia sẻ, được công bố biến điều sẽ là một bài tập nghiên cứu nhiều tháng thành một tra cứu, chính xác là lý do tại sao chúng quan trọng cho cả các tính toán [lợi tức xã hội trên đầu tư](../social-return-on-investment/) và các đánh giá đấu thầu [Luật Giá trị Xã hội](../social-value-act/): không có chúng, việc tiền hóa chặt chẽ sẽ chỉ chi trả được cho các tổ chức đủ lớn để ủy quyền các nghiên cứu riêng của họ.

## Cách tính toán

Một cơ sở dữ liệu chi phí đơn vị bản thân nó không tính toán gì cả; nó cung cấp một đầu vào cho một tính toán được thực hiện ở nơi khác:

```
Giá trị proxy tài chính = giá thị trường, HOẶC giá bóng, HOẶC
                         định giá phúc lợi, HOẶC giá trị
                         stated-preference cho một đơn vị
                         thay đổi kết quả được xác định
                         (ví dụ: "mỗi người chuyển từ thất
                         nghiệp sang việc làm, mỗi năm")

Giá trị áp dụng = số kết quả đạt được × giá trị proxy đơn vị
```

Xem [giá bóng](../shadow-pricing/) cho cách một proxy được xây dựng khi không có giá thị trường tồn tại, và [lợi tức xã hội trên đầu tư](../social-return-on-investment/) cho cách giá trị áp dụng sau đó đưa vào một tỷ lệ sau các điều chỉnh trọng lượng chết và quy kết.

## Ví dụ minh họa

**Tổ chức từ thiện (SROI của dịch vụ làm bạn)**: một mục cơ sở dữ liệu cho "giảm cô đơn" cho một proxy minh họa £1.100 mỗi người mỗi năm. Áp dụng cho 80 người thụ hưởng: 80 × £1.100 = £88.000 giá trị gộp. Nếu cùng cơ sở dữ liệu cũng có một proxy cho "phúc lợi tâm thần cải thiện" dựa trên một mục khảo sát phúc lợi chồng chéo, việc xếp chồng cả hai proxy cho cùng 80 người sẽ đếm hai lần một phần của cùng thay đổi nền tảng — cơ sở dữ liệu cung cấp con số, nhưng tránh sự chồng chéo này là trách nhiệm của người phân tích.

**Chính quyền địa phương (SROI của câu lạc bộ việc làm)**: một mục cơ sở dữ liệu cho "chuyển từ thất nghiệp sang việc làm bền vững" được áp dụng cho 45 người tham gia ở một proxy minh họa £8.500 mỗi người mỗi năm: 45 × £8.500 = £382.500 giá trị gộp, trước các điều chỉnh trọng lượng chết và quy kết được thể hiện trong [lợi tức xã hội trên đầu tư](../social-return-on-investment/).

## Liên hệ với phát triển phần mềm

Các nhóm xây dựng công cụ báo cáo cho các tổ chức từ thiện hoặc người ủy nhiệm được lợi từ một "danh mục kết quả" nội bộ — một bảng ánh xạ mỗi kết quả một sản phẩm hoặc dịch vụ có thể tuyên bố một cách hợp lý đến một proxy được đặt tên, cơ sở dữ liệu nguồn của nó, ngày công bố của nó, và một định danh phiên bản — để các nhóm khác nhau trong một tổ chức không mỗi nhóm chọn các giá trị hơi khác nhau cho cùng kết quả. Việc bao bọc dữ liệu mở của Global Value Exchange đằng sau một dịch vụ tra cứu, với nguồn và ngày luôn được hiển thị cùng với con số, giữ proxy có thể kiểm toán được thay vì một con số kỳ diệu bị chôn trong một bảng tính. Xem [lợi tức xã hội trên đầu tư](../social-return-on-investment/) và [luật giá trị xã hội](../social-value-act/) cho hai nơi chính các proxy này được sử dụng.

## Những cạm bẫy

- **Coi các proxy là chính xác.** Hầu hết các proxy được công bố là các giá trị trung bình được mô hình hóa từ các nghiên cứu định giá phúc lợi với các khoảng tin cậy rộng; trích dẫn một proxy đến đồng tiền phóng đại độ chính xác mà nghiên cứu nền tảng hỗ trợ.
- **Đếm hai lần các proxy chồng chéo.** Kết hợp các proxy (ví dụ: "giảm cô đơn" và "phúc lợi tâm thần cải thiện") được suy ra từ các cấu trúc khảo sát chồng chéo định giá cùng thay đổi nền tảng hai lần.
- **Sử dụng một proxy ngoài ngữ cảnh không được điều chỉnh.** Một proxy được calibrated trên một dân số và năm quốc gia, được áp dụng ở nơi khác không có điều chỉnh lạm phát hoặc ngữ cảnh, âm thầm trình bày sai giá trị.
- **Không kiểm tra nguồn gốc.** Global Value Exchange là mở và nguồn cộng đồng, vì vậy chất lượng mục thay đổi theo người đóng góp; kiểm tra nguồn nền tảng trước khi trích dẫn một con số trong một đơn xin tài trợ hoặc đệ trình mua sắm.

## Nguồn tham khảo

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
