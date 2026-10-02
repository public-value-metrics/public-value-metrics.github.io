# Thực hiện lợi ích

Quản lý thực hiện lợi ích là kỷ luật xác định, cố định đường cơ sở, theo dõi, và *chứng minh* rằng các lợi ích được hứa trong một trường hợp kinh doanh thực sự đã thành thực sau ra mắt trực tiếp. Trong đầu tư công Anh, nó sống trong Five Case Model của Green Book của HM Treasury và hướng dẫn quản lý lợi ích chuyên dụng của Infrastructure and Projects Authority; không có nó, "hệ thống tiết kiệm cho các nhân viên xử lý trường hợp ba mươi phút mỗi yêu cầu" vẫn là một tuyên bố không-được-kiểm-toán vĩnh viễn.

## Tại sao điều này quan trọng

Các trường hợp kinh doanh là các lời hứa; thực hiện lợi ích là kiểm toán. Green Book yêu cầu mỗi trường hợp chi tiêu vượt qua năm bài kiểm tra — chiến lược, kinh tế, thương mại, tài chính, và quản lý — và trường hợp quản lý phải đặt ra cách các lợi ích sẽ được thực hiện *trước phê duyệt*: các chủ sở hữu được đặt tên, các đường cơ sở được chụp, và các ngày đo được cố định. Hướng dẫn của Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), tồn tại vì báo cáo danh mục đầu tư riêng của IPA trên Government Major Projects Portfolio đã nhiều lần thấy sự tin tưởng cung cấp và thực hiện lợi ích được trích dẫn như các điểm yếu lặp lại trên các chương trình lớn. Một dự án có thể đóng "đúng thời gian và đúng ngân sách" chống lại các mốc cung cấp của nó trong khi vẫn thất bại thực hiện các lợi ích biện minh cho việc chi tiền ngay từ đầu — một sự phân biệt mà hướng dẫn của IPA coi là toàn bộ điểm của kỷ luật.

## Cách tính toán

```
Tỷ lệ thực hiện = lợi ích được thực hiện / lợi ích được dự
                  báo (mỗi lợi ích, mỗi kỳ)

Cơ chế làm cho nó có thể tính toán được:
  đường cơ sở được chụp TRƯỚC ra mắt trực tiếp (nếu không
  delta không thể đo được)
  mỗi lợi ích: chủ sở hữu được đặt tên, chỉ số, nguồn dữ liệu,
  lịch trình đo
  dự báo được điều chỉnh cho thiên-lệch-lạc-quan tại đánh giá
  (nhiệm vụ Green Book)
  các lợi ích được phân loại giải-phóng-tiền-mặt / công-suất-
  được-giải-phóng / định tính, được theo dõi và báo cáo riêng
  biệt
```

## Ví dụ minh họa

**Chính quyền địa phương**: một trường hợp kinh doanh cổng đơn xin quy hoạch số đã hứa, mỗi năm: £300.000 giảm chi phí in ấn và bưu chính (tiền mặt), 4.500 giờ cán bộ được giải phóng (công suất), và sự hài lòng người nộp đơn được cải thiện (định tính). Mười hai tháng sau ra mắt trực tiếp:

```
Lợi ích            Dự báo     Thực hiện   Tỷ lệ   Bằng chứng
Tiết kiệm tiền mặt  £300.000   £210.000    70%     sổ cái tài
                                                   chính vs năm
                                                   cơ sở
Giờ cán bộ          4.500      3.200       71%     mẫu thời-
                                                   gian-vận-động
Hài lòng            +8pp       +11pp       138%    dữ liệu khảo
                                                   sát người
                                                   nộp đơn

Các hành động từ xem lại (điểm của thực hiện lợi ích):
thiếu hụt tiền mặt được truy tìm đến hai khu vực dịch vụ vẫn
xử lý các đơn xin giấy theo ngoại lệ → đóng tuyến ngoại lệ;
sự điều chỉnh thiên-lệch-lạc-quan của trường hợp kinh doanh
tiếp theo được nâng từ 10% lên 25% dựa trên lỗi dự báo của
trường hợp này.
```

Một tỷ lệ thực hiện 70% không phải là một thất bại — đó là kiến thức cho phép dự báo tiếp theo được calibrated tốt hơn. Một trường hợp không-được-đo sẽ đã tuyên bố 100% mãi mãi, và nhóm tài chính sẽ không có cơ sở để thách thức nó.

## Liên hệ với phát triển phần mềm

Các tổ chức kỹ thuật thường xuyên phê duyệt các đầu tư nền tảng và công cụ dựa trên lợi ích dự báo và hầu như không bao giờ kiểm toán chúng sau đó — chính xác là bệnh lý mà quản lý thực hiện lợi ích tồn tại để sửa. Cổng nhẹ: mỗi đề xuất trên một ngưỡng vật chất đặt tên một chủ sở hữu lợi ích, một chỉ số đường cơ sở, và một ngày xem lại cố định (thường sáu tháng sau ra mắt trực tiếp), và các tỷ lệ thực hiện từ các đề xuất trước đó nên chiết khấu mức độ một tổ chức tin tưởng dự báo tiếp theo của một nhóm hoặc nhà cung cấp. Điều này đóng vòng lặp trở lại [đánh giá Green Book](../green-book-appraisal/), đặt ra dự báo mà kỷ luật này kiểm toán, và đó là cùng logic đằng sau phát hiện được báo cáo rộng rãi rằng một đa số lớn các thử nghiệm AI tạo sinh không thể hiện lợi tức có thể đo được — xem [năng-suất-AI-trong-khu-vực-công](../ai-productivity-in-the-public-sector/) — vì các thử nghiệm *đã* mang lại giá trị, gần như không có ngoại lệ, là các thử nghiệm có một dòng lợi ích được đặt tên, có thể theo dõi từ đầu. Nó cũng phụ thuộc vào việc phân biệt những gì thực sự được cung cấp từ những gì thực sự được thực hiện — xem [kết quả so với đầu ra](../outcomes-vs-outputs/).

## Những cạm bẫy

- **Không có đường cơ sở trước-ra-mắt-trực-tiếp**: sự thiếu sót chết người, không-thể-sửa — không có nó, không tỷ lệ thực hiện nào có thể được tính toán, chỉ được khẳng định.
- **Mồ côi lợi ích**: một lợi ích không có chủ sở hữu được đặt tên không có ai thu thập dữ liệu, và mỗi xem lại danh mục đầu tư báo cáo nó "đại khái trên đường" theo mặc định.
- **Các lợi ích được đếm hai lần trên một danh mục đầu tư chương trình**: hai dự án đều tuyên bố cùng công suất nhân viên xử lý trường hợp được giải phóng là lợi ích của họ — giữ một sổ đăng ký lợi ích đơn lẻ trên danh mục đầu tư để bắt được điều này.
- **Nhà hát thực hiện**: đo và báo cáo nổi bật các chiến thắng định tính dễ dàng trong khi các dòng tiền mặt và công suất lặng lẽ không được kiểm tra.
- **Nhầm lẫn cung cấp với thực hiện**: một dự án đóng các mốc của nó "đúng thời gian và đúng ngân sách" không nói gì về việc liệu lợi ích dự báo có thực sự xảy ra hay không — hướng dẫn của IPA coi đây là hai câu hỏi riêng biệt với hai dấu vết bằng chứng riêng biệt.

## Nguồn tham khảo

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
