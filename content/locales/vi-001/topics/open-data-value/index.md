# Giá trị dữ liệu mở

Giá trị dữ liệu mở là vấn đề ước tính những gì dữ liệu chính phủ và công đáng giá khi nó không có giá: nó không được bán, vì vậy không có dòng doanh thu, nhưng việc phát hành nó (các hồ sơ thời tiết, lịch trình giao thông, biên giới mã bưu điện, các sổ đăng ký công ty) có thể chứng minh tạo ra hoạt động kinh tế và xã hội hạ nguồn. Việc định giá nó tốt quan trọng vì "nó miễn phí để phát hành" và "nó vô giá trị" đều sai, và một kỹ sư phần mềm quyết định liệu có mở một API hoặc một tập dữ liệu cần một luận điểm tốt hơn cả hai.

## Tại sao điều này quan trọng

Ước tính từ-trên-xuống được trích dẫn nhiều nhất đến từ báo cáo năm 2013 "Open data: Unlocking innovation and performance with liquid information" của McKinsey Global Institute, đặt giá trị hàng năm tiềm năng của dữ liệu mở qua bảy lĩnh vực — giáo dục, vận tải, các sản phẩm tiêu dùng, điện, dầu và khí, chăm sóc sức khỏe, và tài chính tiêu dùng — ở $3 nghìn tỷ đến $5 nghìn tỷ một năm toàn cầu, qua các cơ chế bao gồm minh bạch tăng, khớp cung với cầu hiệu quả hơn, và cho phép các sản phẩm và dịch vụ mới được xây dựng trên dữ liệu. Con số đó là một ước tính kịch bản, không phải một kết quả được đo, và nó thường xuyên bị trích dẫn sai như thể nó là doanh thu chính phủ có thể nắm bắt trực tiếp, khi giá trị chủ yếu tích lũy cho các bên thứ ba — các doanh nghiệp, các nhà nghiên cứu, các công dân — sử dụng dữ liệu, chính xác là điểm của việc mở nó thay vì bán nó. Open Data Institute của Anh, được đồng thành lập bởi Sir Tim Berners-Lee và Sir Nigel Shadbolt năm 2012, từ đó đã xây dựng một cơ thể các nghiên cứu trường hợp từ-dưới-lên, chi tiết hơn — ngành theo ngành, tập dữ liệu theo tập dữ liệu — hữu ích hơn nhiều cho một trường hợp kinh doanh thực sự so với con số tiêu đề McKinsey, vì chúng thể hiện cơ chế tạo giá trị, không chỉ quy mô tổng hợp của nó.

## Cách tính toán

Dữ liệu mở không có giá thị trường, vì vậy các phương pháp định giá thay thế cho một giá; ba phương pháp tái diễn, và không cái nào đủ một mình:

```
1. Phương pháp chi-phí-được-tránh / chi-phí-thay-thế:
   giá trị ≈ những gì người dùng sẽ trả để sản xuất hoặc cấp
   phép dữ liệu tương đương riêng của họ — một giới hạn dưới,
   bỏ qua giá trị được tạo bởi các cách sử dụng người sản
   xuất ban đầu không bao giờ dự đoán

2. Phương pháp thị-trường-tương-tự / hoạt-động-hạ-nguồn:
   giá trị ≈ doanh thu hoặc tiết kiệm được tạo ra bởi các
   doanh nghiệp/dịch vụ được xây dựng trên dữ liệu (ví dụ:
   các ứng dụng điều hướng được xây dựng trên dữ liệu bản đồ
   và giao thông mở) — nắm bắt hoạt động kinh tế thực nhưng
   khó quy cho sạch sẽ cho việc phát hành dữ liệu bản thân nó
   (xem tính-bổ-sung-và-trọng-lượng-chết)

3. Phương pháp ngẫu-nhiên/stated-preference:
   giá trị ≈ những gì người dùng nói họ sẽ trả, hoặc thời
   gian họ nói nó tiết kiệm cho họ — xem định-giá-stated-
   preference cho phương pháp chung và các thiên vị của nó

Không cái nào trong số này sản xuất một con số sạch như một
giá thị trường; các trường hợp kinh doanh dữ liệu mở đáng
tin cậy tam giác hóa qua hai hoặc nhiều, và rõ ràng về cơ
chế nào đang làm việc.
```

## Ví dụ minh họa

**Việc phát hành dữ liệu bản đồ/địa chỉ quốc gia minh họa** (phương pháp theo các nghiên cứu trường hợp kiểu ODI, các con số minh họa quy mô các nghiên cứu như vậy thường thấy):

```
Ước tính chi-phí-được-tránh:
  Các doanh nghiệp nếu không thì sẽ cấp phép dữ liệu khớp
  địa chỉ tương đương về mặt thương mại, ở chi phí cấp phép
  trung bình ước tính £4.000/năm, trên ước tính 15.000 SME
  hiện sử dụng tập dữ liệu mở miễn phí
  = 15.000 × £4.000 = £60.000.000/năm chỉ riêng chi phí
    cấp phép được tránh

Ước tính hoạt-động-hạ-nguồn (mang tính suy đoán hơn, cần một
đối chiếu thực tế):
  Các sản phẩm định tuyến giao hàng và logistics mới được
  xây dựng trên dữ liệu mở sẽ không tồn tại, hoặc sẽ tồi tệ
  hơn đáng kể, không có nó — yêu cầu một so sánh với đối
  chiếu thực tế của dữ liệu giữ đóng hoặc cấp phép thương mại
  (phân-tích-đối-chiếu-thực-tế), vì một số hoạt động đó sẽ
  xảy ra dù sao trên dữ liệu được trả tiền ở một giá cao hơn,
  là trọng lượng chết theo nghĩa "giá trị được tạo ra bằng
  cách mở nó"

Một trường hợp kinh doanh đáng bảo vệ báo cáo con số chi-phí-
được-tránh như giới hạn dưới vững chắc, và coi con số hoạt-
động-hạ-nguồn như một kịch bản giới-hạn-trên, không phải một
sự thật.
```

## Liên hệ với phát triển phần mềm

Đối với các kỹ sư, câu hỏi giá-trị-dữ-liệu-mở thực tế thường hẹp hơn các con số tiêu đề quốc gia: việc mở API hoặc tập dữ liệu cụ thể này (thay vì giữ nó đằng sau một thỏa thuận đối tác) có tăng tái sử dụng đủ để biện minh cho chi phí đang diễn ra của việc ghi chép, phiên bản, và hỗ trợ nó như một giao diện công không? Chi phí duy trì đó là thực và là đối tác của kinh tế xây-dựng-một-lần-tái-sử-dụng-thường của [chính-phủ-như-nền-tảng](../government-as-a-platform/) — hai chủ đề là anh em gần, một về mã và hạ tầng được chia sẻ, cái khác về dữ liệu được chia sẻ. Bất kỳ tuyên bố giá trị dữ liệu mở nên được kiểm tra chống lại [tính-bổ-sung-và-trọng-lượng-chết](../additionality-and-deadweight/) trước khi nó vào một trường hợp kinh doanh: hoạt động sẽ xảy ra dù sao, trên dữ liệu được cấp phép thương mại, không phải là giá trị mà việc *mở* đã tạo ra.

## Những cạm bẫy

- **Trích dẫn con số $3–5 nghìn tỷ của McKinsey như cụ thể-Anh hoặc như phần của tập dữ liệu này**: đó là một ước tính kịch bản toàn cầu, bảy-ngành từ 2013 — sử dụng nó như một số nhân chính xác cho một tập dữ liệu quốc gia đơn lẻ trình bày sai con số là gì.
- **Không có đối chiếu thực tế**: nhận công cho toàn bộ hoạt động kinh tế hạ nguồn được xây dựng trên dữ liệu mở, không hỏi bao nhiêu phần của nó sẽ xảy ra dù sao trên dữ liệu được trả tiền hoặc cấp phép ở một giá cao hơn (xem [tính-bổ-sung-và-trọng-lượng-chết](../additionality-and-deadweight/) và [phân-tích-đối-chiếu-thực-tế](../counterfactual-analysis/)).
- **Nhầm lẫn chi phí sản xuất với giá trị được tạo ra**: một tập dữ liệu đắt để thu thập không tự động có giá trị để phát hành, và một tập rẻ không tự động giá-trị-thấp — giá trị theo dõi sử dụng hạ nguồn, không phải chi phí thượng nguồn.
- **Bỏ qua chi phí duy trì đang diễn ra của "mở"**: xuất bản một trích xuất CSV một lần không phải là cùng cam kết với việc chạy một API mở được ghi chép, phiên bản, hỗ trợ — tài trợ dưới mức cho cái thứ hai sau thông báo ra mắt là một chế độ thất bại phổ biến.

## Nguồn tham khảo

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
