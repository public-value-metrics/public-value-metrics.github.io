# Chi phí mỗi giao dịch

Chi phí mỗi giao dịch là chỉ số kinh tế đơn vị tiêu đề cho một dịch vụ số chính phủ: tổng chi phí để cung cấp một kênh, chia cho số giao dịch hoàn thành qua nó. Nó là con số vẻ vang trên GOV.UK Performance Platform cũ, và nó là con số đã tài trợ một thập kỷ đầu tư "số theo mặc định" — chính xác là tại sao nó cũng là chỉ số dễ bị lợi dụng nhất.

## Tại sao điều này quan trọng

Digital Efficiency Report năm 2012 của Cabinet Office đặt so sánh chi phí kênh thành các thuật ngữ dính lại: các giao dịch số được tìm thấy tốn khoảng 20 lần ít hơn so với qua điện thoại và khoảng 50 lần ít hơn so với mặt-đối-mặt, với các con số minh họa chính quyền địa phương khoảng £0,15 mỗi giao dịch web so với £2,83 qua điện thoại và £8,62 mặt-đối-mặt. So sánh đơn lẻ đó trở thành sự biện minh cho việc thiết kế lại 25 dịch vụ mẫu được đặt tên trong Government Digital Strategy, và cho mỗi trường hợp kinh doanh bộ phận đã trích dẫn các khoản tiết kiệm chuyển kênh từ đó. Con số này thực sự hữu ích như một tín hiệu bậc-độ-lớn, nhưng tỷ lệ phụ thuộc hoàn toàn vào những gì được tính ở mỗi bên: một chi phí kênh điện thoại công bằng bao gồm nhân viên trung tâm cuộc gọi, hợp đồng điện thoại, đào tạo, và bất động sản; một chi phí số công bằng bao gồm lưu trữ, các lương nhóm sản phẩm đang diễn ra, thời gian bàn hỗ trợ cho các hành trình thất bại, và kênh hỗ-trợ-số được yêu cầu bởi điểm 5 của [tiêu-chuẩn-dịch-vụ-số](../tiêu-chuẩn-dịch-vụ-số/). Tước đủ những điều đó ra khỏi phía số và bất kỳ dịch vụ nào trông rẻ.

## Cách tính toán

```
Chi phí mỗi giao dịch = tổng chi phí kênh được phân bổ / giao
                        dịch hoàn thành

Tổng chi phí kênh được phân bổ nên bao gồm:
  + lưu trữ và hạ tầng
  + chi phí nhóm sản phẩm/kỹ thuật/hỗ trợ (được khấu hao)
  + chi phí nội dung và thiết kế dịch vụ (được khấu hao)
  + chi phí hỗ trợ hỗ-trợ-số / khả năng truy cập
  + chi phí nhu cầu thất bại (người dùng thất bại số và rơi
    trở lại điện thoại)
  − chi phí xây dựng một lần được khấu hao qua tuổi thọ dịch
    vụ dự kiến, không được chi hoàn toàn vào năm một

Thủ thuật kế toán phổ biến:
  "Chi phí biên mỗi giao dịch" (chỉ lưu trữ, một khi đã xây
  dựng) được trích dẫn như thể nó là "chi phí trung bình mỗi
  giao dịch" (tổng chi phí bao gồm nhóm tiếp tục xây dựng và
  chạy nó). Hai điều có thể khác nhau 10x hoặc hơn cho một
  dịch vụ với một nhóm cung cấp lớn, hoạt động.
```

## Ví dụ minh họa

**Dịch vụ gia hạn thuế xe**: 4 triệu giao dịch/năm.

```
Con số chỉ-biên (thủ thuật):
  Chỉ lưu trữ + xử lý thanh toán = £180.000/năm
  Chi phí mỗi giao dịch = 180.000 / 4.000.000 = £0,045
  → con số tiêu đề được trích dẫn trong một trường hợp kinh
    doanh

Con số được-nạp-đầy-đủ (con số trung thực):
  Lưu trữ + thanh toán                  £180.000
  Nhóm sản phẩm/kỹ thuật (8 FTE)        £720.000
  Bàn hỗ trợ (giao dịch thất bại/được
  hỏi)                                   £310.000
  Đường dây điện thoại hỗ-trợ-số         £140.000
  Tổng                                  £1.350.000
  Chi phí mỗi giao dịch = 1.350.000 / 4.000.000 = £0,3375

Con số được-nạp-đầy-đủ vẫn rẻ hơn khoảng 8 lần so với so
sánh kênh điện thoại £2,83 từ Digital Efficiency Report —
một khoản tiết kiệm thực và đáng bảo vệ — nhưng cao hơn 7,5
lần so với con số chỉ-biên được trích dẫn trong phiên bản tắt.
Cả hai con số đều "đúng"; chỉ một có thể so sánh với chi phí
kênh điện thoại nó đang được đặt chống lại.
```

## Liên hệ với phát triển phần mềm

Chi phí mỗi giao dịch là nơi các quyết định kiến trúc trở thành một con số tài chính: một dịch vụ tự động mở rộng gọn gàng và cần ít can thiệp thủ công đẩy con số này xuống theo thời gian; một dịch vụ tạo ra khối lượng ticket hỗ trợ cao từ các trạng thái lỗi gây nhầm lẫn đẩy nó lên bất kể hiệu quả lưu trữ. Đó là chỉ số đồng hành tự nhiên của điểm 10 của [tiêu-chuẩn-dịch-vụ-số](../tiêu-chuẩn-dịch-vụ-số/) ("xác định thành công trông như thế nào, và công bố dữ liệu hiệu suất") và của [các-chỉ-số-dịch-vụ-và-giao-dịch-tiêu-chuẩn](../các-chỉ-số-dịch-vụ-và-giao-dịch-tiêu-chuẩn/), đặt ra tập hợp KPI đầy đủ hơn mà con số này nằm trong. Nó cũng đưa trực tiếp vào các tính toán [tiết-kiệm-chuyển-kênh](../tiết-kiệm-chuyển-kênh/) và nên được hòa giải chống lại [tổng-chi-phí-sở-hữu-trong-cntt-chính-phủ](../tổng-chi-phí-sở-hữu-trong-cntt-chính-phủ/) để các phí tổng quát của nền tảng và dịch vụ chung không bị âm thầm bỏ qua.

## Những cạm bẫy

- **Chi phí biên mặc quần áo của chi phí trung bình**: trích dẫn chi phí chỉ-lưu-trữ khi một dịch vụ đã được xây dựng, bỏ qua nhóm đang diễn ra duy trì, lặp lại, và hỗ trợ nó — xem ví dụ minh họa trên.
- **Loại trừ chi phí hỗ-trợ-số**: một kênh không "số theo mặc định" tuân thủ, và chi phí thực sự của nó không được chụp, nếu dự phòng điện-thoại/giấy được yêu cầu bởi [tính-hòa-nhập-số](../tính-hòa-nhập-số/) được tính chi phí riêng biệt hoặc bị bỏ qua.
- **Bỏ qua nhu cầu thất bại**: các giao dịch bắt đầu số và thất bại, tạo ra một cuộc gọi điện thoại hoặc biểu mẫu giấy dù sao, là một chi phí của kênh số, không phải kênh bắt được thất bại.
- **So sánh các giao dịch có độ phức tạp khác nhau qua các kênh**: các cuộc gọi điện thoại xử lý không tương xứng các trường hợp khó (nhiều người phụ thuộc, sửa lỗi, người nộp đơn dễ bị tổn thương); so sánh một chi phí điện thoại trung bình với một chi phí số trung bình thổi phồng tỷ lệ trừ khi hỗn hợp giao dịch được khớp.

## Nguồn tham khảo

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
