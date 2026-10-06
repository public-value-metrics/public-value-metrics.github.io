# Giá trị an ninh mạng khu vực công

Giá trị an ninh mạng khu vực công là kỷ luật của việc định giá giảm rủi ro: nó đáng giá bao nhiêu để làm cho một vi phạm dữ liệu công dân ít khả năng xảy ra hơn, cho rằng chi tiêu an ninh không sản xuất đầu ra hiển thị nào khi nó hoạt động và một đầu ra rất hiển thị khi nó thất bại? Đối với một dịch vụ giữ các hồ sơ trợ cấp, dữ liệu y tế, hoặc hồ sơ thuế, thuộc tính "vô hình khi hoạt động" đó chính xác là tại sao nó cần một luận điểm giá trị rõ ràng, không chỉ một dấu tick tuân thủ.

## Tại sao điều này quan trọng

Cyber Assessment Framework (CAF) của National Cyber Security Centre Anh cho các tổ chức khu vực công một cách có cấu trúc để làm cho an ninh một kỷ luật dựa-trên-kết-quả, có thể đánh giá hơn là một danh sách kiểm tra: nó xác định bốn mục tiêu cấp cao (quản lý rủi ro an ninh, bảo vệ chống lại tấn công mạng, phát hiện các sự kiện an ninh mạng, và giảm thiểu tác động của các sự cố) chia thành các kết quả đóng góp mà một chủ sở hữu hệ thống có thể được đánh giá so với, trong cùng tinh thần với điểm 9 của [tiêu-chuẩn-dịch-vụ-số](../tiêu-chuẩn-dịch-vụ-số/) ("tạo một dịch vụ an toàn bảo vệ quyền riêng tư của người dùng"). Những gì đánh giá CAF bảo vệ chống lại có một giá được ghi chép: Cost of a Data Breach Report của IBM theo dõi chi phí vi phạm trung bình theo ngành, và đã nhất quán thấy khu vực công hướng về đầu thấp hơn của phạm vi so với tài chính hoặc chăm sóc sức khỏe — các ấn bản gần đây đặt trung bình khu vực công khoảng $2,6–2,9 triệu mỗi vi phạm — nhưng "thấp hơn tài chính" không phải là "thấp", và các vi phạm chính phủ mang các chi phí mà các con số của báo cáo không nắm bắt đầy đủ: mất niềm tin công dân vào các kênh số, làm giảm [sự chấp nhận số](../tiết-kiệm-chuyển-kênh/) mà các trường hợp kinh doanh chuyển kênh phụ thuộc vào, và chi phí chính trị và pháp lý của việc phơi bày dữ liệu mà nhà nước đã buộc công dân phải nộp ngay từ đầu.

## Cách tính toán

Đầu tư an ninh được định giá theo cách mà bất kỳ chi tiêu giảm rủi ro được định giá: như một sự giảm tổn thất kỳ vọng, sử dụng danh tính quản lý rủi ro cổ điển.

```
Kỳ vọng tổn thất hàng năm (ALE) = Kỳ vọng tổn thất đơn (SLE)
                                 × Tỷ lệ xảy ra hàng năm (ARO)

Giá trị của một kiểm soát an ninh =
  ALE_trước_kiểm_soát − ALE_sau_kiểm_soát − chi phí hàng năm
  của kiểm soát

Một kiểm soát đáng được tài trợ khi:
  (ALE_trước − ALE_sau) > chi phí hàng năm của kiểm soát

Đánh giá CAF không trực tiếp đưa ra một xác suất, nhưng hồ
sơ kết quả CAF của một dịch vụ (kết quả đóng góp nào "đạt
được", "đạt được phần nào", hoặc "không đạt được") là một
proxy hợp lý để ước tính ARO — một hệ thống với quyền truy
cập đặc quyền không được quản lý hoặc không có kế hoạch
phản ứng sự cố được kiểm tra có một ARO thực tế cao hơn
đáng kể so với một hệ thống có cả hai.
```

## Ví dụ minh họa

**Hệ thống quản lý trường hợp county council giữ hồ sơ chăm sóc xã hội cho 40.000 cư dân**:

```
Kỳ vọng tổn thất đơn (chi phí vi phạm), sử dụng một trung
bình khu-vực-công từ một IBM Cost of a Data Breach Report
gần đây ≈ £2,1tr (được chuyển đổi, con số bậc-độ-lớn — luôn
suy lại từ ấn bản báo cáo hiện tại thay vì tái sử dụng một
số cố định)

ARO hiện tại (quyền truy cập đặc quyền không được quản lý,
không có phản ứng sự cố được kiểm tra, theo một tự-đánh-giá
CAF nội bộ thể hiện nhiều kết quả "không đạt được") ≈ ước
tính 8% mỗi năm
  ALE_trước = £2,1tr × 0,08 = £168.000/năm

Kiểm soát được đề xuất: quản lý truy cập đặc quyền + kế
hoạch phản ứng sự cố được kiểm tra, di chuyển các kết quả
CAF liên quan thành "đạt được", ước tính cắt ARO xuống 3%/năm
  ALE_sau = £2,1tr × 0,03 = £63.000/năm

Chi phí hàng năm của kiểm soát (công cụ + quy trình + kiểm
tra) = £45.000

Giá trị của kiểm soát = (168.000 − 63.000) − 45.000 =
£60.000/năm dương thuần — tài trợ nó. Số học cũng thể hiện
kiểm soát sẽ vẫn đáng tài trợ ở gần ba lần chi phí, đó là
loại kiểm tra độ nhạy nên đồng hành với bất kỳ con số ALE
được xây dựng trên các xác suất ước tính.
```

## Liên hệ với phát triển phần mềm

Các kỹ sư sở hữu hầu hết các cầu ảnh hưởng trong phương trình ALE: thiết kế kiểm soát truy cập, vệ sinh phụ thuộc và bản sửa lỗi, phạm vi ghi log và phát hiện, và các công cụ phản ứng sự cố đều di chuyển trực tiếp thuật ngữ ARO, đó là lý do đánh giá CAF đọc như một xem lại kiến trúc kỹ thuật nhiều như một kiểm toán chính sách. Đây là [nợ-kỹ-thuật-như-sự-xói-mòn-giá-trị-công](../nợ-kỹ-thuật-như-là-sự-xói-mòn-giá-trị-công/) ở dạng cấp tính nhất của nó — các hệ thống không được vá, không được giám sát, kiểm soát truy cập kém là nợ mà khoản thanh toán lãi là rủi ro đuôi, không phải một sự kéo ổn định — và nó nên được hòa giải chống lại [tổng-chi-phí-sở-hữu-trong-cntt-chính-phủ](../tổng-chi-phí-sở-hữu-trong-cntt-chính-phủ/) để chi tiêu an ninh không được coi là riêng biệt từ chi phí chạy thực sự của hệ thống. Nó cũng là một đầu vào trực tiếp cho các đánh giá [value-for-money](../giá-trị-đồng-tiền/) dưới Green Book: chi phí được điều chỉnh rủi ro là một phần của bên "chi phí" của bất kỳ đánh giá tùy chọn, không phải một suy nghĩ thêm được gắn vào ở cuối.

## Những cạm bẫy

- **Coi tự-đánh-giá CAF là an ninh bản thân nó**: một đánh giá hoàn thành mô tả một vị trí an ninh; nó không tạo ra một vị trí — giá trị nằm ở các kết quả đạt được, không phải tài liệu.
- **Sử dụng chi phí vi phạm trung bình toàn cầu như một ước tính địa phương không có điều chỉnh**: các con số của IBM là trung bình trên các mẫu lớn, đa dạng; kỳ vọng tổn thất đơn thực tế của một chính quyền địa phương nhỏ hiếm khi giống với một bộ phận chính phủ quốc gia.
- **Bỏ qua tâm lý rủi ro đuôi trong các quyết định đầu tư**: một xác suất hàng năm thấp làm cho chi tiêu an ninh dễ trì hoãn vô hạn, cho đến đúng năm nó không — kiểm tra độ nhạy tính toán ALE chống lại một phạm vi ARO, như trong ví dụ minh họa, chống lại điều này.
- **Chỉ đếm chi phí vi phạm kiểu IBM, không phải chi phí tin tưởng**: một vi phạm làm giảm sự sẵn lòng của công dân sử dụng các kênh số làm xói mòn trường hợp [tiết-kiệm-chuyển-kênh](../tiết-kiệm-chuyển-kênh/) trong nhiều năm sau đó, một chi phí hiếm khi được bao gồm trong các ước tính chi phí vi phạm.

## Nguồn tham khảo

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
