# Tính hòa nhập số

Tính hòa nhập số là kỷ luật đảm bảo "số theo mặc định" không trở thành "chỉ-số" — rằng các dịch vụ công được thiết kế xung quanh kênh rẻ nhất vẫn hoạt động cho các công dân không thể hoặc không muốn sử dụng nó không có hỗ trợ. GDS đã đặt ra cơ chế cung cấp cụ thể, "hỗ-trợ-số," như một yêu cầu bắt buộc cho mỗi dịch vụ số chính phủ, không phải một tùy chọn bổ sung.

## Tại sao điều này quan trọng

Government Digital Strategy năm 2012 đặt ra tham vọng một cách rõ ràng: các dịch vụ số nên được xây dựng số theo mặc định, nhưng chiến lược bản thân nó thừa nhận rằng khoảng 10% người lớn Anh sẽ không thể sử dụng chúng không có sự giúp đỡ, và cam kết các bộ phận cung cấp hỗ trợ hỗ-trợ-số — một tuyến được trung gian bởi con người, qua điện thoại, trực tiếp, hoặc qua một trung gian — như một phần của dịch vụ, không phải một dự phòng riêng biệt được gắn vào sau. Cam kết đó hiện là điểm 5 của [tiêu-chuẩn-dịch-vụ-số](../tiêu-chuẩn-dịch-vụ-số/), "đảm bảo mọi người có thể sử dụng dịch vụ". Quy mô của sự loại trừ tiếp tục được theo dõi bởi UK Consumer Digital Index hàng năm của Lloyds Banking Group: ấn bản 2024 thấy khoảng 1,6 triệu người ở Anh vẫn offline, và nhóm này lệch mạnh về những người 70–79 tuổi, những người kiếm được dưới £35.000, và những người đã nghỉ hưu hoặc thất nghiệp — chính xác dân số có khả năng cao nhất phụ thuộc vào các dịch vụ công đang được thiết kế lại. Cùng báo cáo thấy chỉ 48% lực lượng lao động Anh có thể hoàn thành tất cả 20 nhiệm vụ trên khung Essential Digital Skills, có nghĩa là sự loại trừ không phải là kết nối nhị phân, nó là một quang phổ của kỹ năng, tự tin, và tin tưởng mà một chỉ số "có băng thông rộng" đơn giản hoàn toàn bỏ sót.

## Cách tính toán

Tính hòa nhập số là một khung và kiểm tra công bằng hơn là một công thức đơn lẻ, nhưng nó kết hợp với đánh giá giá trị định lượng qua [trọng-số-phân-phối](../trọng-số-phân-phối/):

```
Giá trị chuyển kênh ngây thơ:
  giá trị = khối lượng được chuyển × (chi phí_cũ −
           chi phí_số)  [xem tiết-kiệm-chuyển-kênh]

Giá trị được điều chỉnh hòa nhập:
  giá trị = (khối lượng được chuyển × tiết kiệm không trọng
            số)
          − (người dùng bị loại trừ × chi phí cung cấp hỗ-
            trợ-số)
          − (điều chỉnh trọng số phân phối cho thiệt hại đối
            với các nhóm bị loại trừ mất quyền truy cập hoặc
            đối mặt với chất lượng dịch vụ bị suy giảm)

Hỗ-trợ-số không phải là chi phí dư của thất bại — đó là một
kênh được thiết kế với [chi-phí-mỗi-giao-dịch](../cost-per-
transaction/) riêng của nó, thường cao hơn nhiều mỗi giao
dịch so với tự-phục-vụ số nhưng vẫn thường rẻ hơn kênh legacy
nó thay thế phần nào.
```

## Ví dụ minh họa

**Dịch vụ trợ cấp quốc gia kiểu Universal Credit**: 2,5 triệu đơn xin/năm, được đánh giá cần hỗ trợ hỗ-trợ-số cho ước tính 10% người nộp đơn theo giả định lập kế hoạch của Government Digital Strategy.

```
Đoàn hệ bị-loại-trừ/hỗ-trợ-số = 2.500.000 × 10% = 250.000 đơn
xin/năm

Chi phí kênh hỗ-trợ-số (điện thoại + hỗ trợ mặt-đối-mặt, được
bố trí nhân viên để xử lý tính dễ bị tổn thương và độ phức
tạp) ≈ £9,50/đơn = 250.000 × £9,50 = £2.375.000/năm

Chi phí tự-phục-vụ số cho 90% còn lại ≈ £0,40/đơn =
2.250.000 × £0,40 = £900.000/năm

Chi phí mỗi giao dịch pha trộn = (2.375.000 + 900.000) /
2.500.000 = £1,31/đơn

Một thiết kế bỏ qua hỗ-trợ-số để đạt một chi phí-mỗi-giao-dịch
tiêu đề thấp hơn (ví dụ: £0,40 pha trộn, bỏ qua 250.000
người nộp đơn bị loại trừ) không loại bỏ chi phí £2,375tr đó
— nó chuyển đổi nó thành các quyền chưa-được-nhận, các khiếu
nại, và nhu cầu dịch vụ-khủng-hoảng hạ nguồn đổ bộ vào một
ngân sách hoàn toàn khác.
```

## Liên hệ với phát triển phần mềm

Hỗ-trợ-số là một kênh được thiết kế, có nghĩa là nó có các giao diện, SLA, và trang bị như bất kỳ kênh khác: một công cụ nhân viên xử lý trường hợp dựa-trên-điện-thoại, một cổng trung gian cho Citizens Advice hoặc một chính quyền địa phương, hoặc một luồng kiosk trực tiếp. Coi nó như một suy nghĩ thêm — một số điện thoại ở in nhỏ thay vì một kênh được xem xét từ discovery — là cách phổ biến nhất đơn lẻ mà các dịch vụ thất bại điểm 5 của [tiêu-chuẩn-dịch-vụ-số](../tiêu-chuẩn-dịch-vụ-số/) tại đánh giá. Tính hòa nhập số là lăng kính công bằng trên mỗi chủ đề khác trong chương này: nó giới hạn mức độ tích cực mà [tiết-kiệm-chuyển-kênh](../tiết-kiệm-chuyển-kênh/) có thể được hiện thực hóa, nó là một mục phải được bao gồm trung thực trong [chi-phí-mỗi-giao-dịch](../chi-phí-mỗi-giao-dịch/), và nó là áp dụng trực tiếp của [trọng-số-phân-phối](../trọng-số-phân-phối/) cho một bối cảnh dịch vụ số — một khoản tiết kiệm đổ bộ không tương xứng lên những người đã bị loại trừ về số và kinh tế nên được cân nhẹ xuống, không được coi là tương đương với một khoản tiết kiệm trải rộng đều trên dân số.

## Những cạm bẫy

- **"Số theo mặc định" được đọc là "chỉ-số"**: đóng đường dây điện thoại hoặc quầy khi sự chấp nhận số vượt một ngưỡng, không xác minh rằng đoàn hệ còn lại có một phương án thay thế thực sự có thể sử dụng được.
- **Đo tính hòa nhập bằng kết nối nhị phân**: "có băng thông rộng" hoặc "sở hữu một smartphone" là một proxy kém cho khả năng hoàn thành một giao dịch cụ thể — khoảng trống Essential Digital Skills (chỉ 48% lực lượng lao động Anh hoàn thành tất cả 20 nhiệm vụ, theo Lloyds 2024) cho thấy kỹ năng và tự tin quan trọng như truy cập.
- **Tính chi phí hỗ-trợ-số như một lỗi làm tròn**: lập ngân sách nó như một dòng dự phòng nhỏ thay vì một kênh thực sự với [chi-phí-mỗi-giao-dịch](../chi-phí-mỗi-giao-dịch/) riêng của nó, sau đó bị bất ngờ khi nó được tài trợ thiếu và thiếu nhân viên tại ra mắt.
- **Khảo sát chỉ những người hoàn thành số thành công**: nghiên cứu sự hài lòng và khả năng sử dụng được chạy hoàn toàn trong-dịch-vụ bỏ sót những người không bao giờ đến được xa đó, chính xác là dân số mà công việc hòa nhập số có nghĩa là để bảo vệ.

## Nguồn tham khảo

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
