# Tiết kiệm chuyển kênh

Tiết kiệm chuyển kênh là sự giảm chi phí được dự báo từ việc di chuyển khối lượng giao dịch khỏi các kênh đắt đỏ — điện thoại, các quầy mặt-đối-mặt, bưu chính giấy — vào tự-phục-vụ số rẻ. Đó là động cơ tài chính đằng sau "số theo mặc định", và cũng là mục trong trường hợp kinh doanh có khả năng sai nhất, vì giả định nó dựa trên — rằng các kênh offline co lại khi sự chấp nhận số tăng — chỉ đôi khi đúng.

## Tại sao điều này quan trọng

Số học trông không thể tranh luận sử dụng các con số [chi-phí-mỗi-giao-dịch](../cost-per-transaction/) từ Digital Efficiency Report: chuyển một triệu giao dịch từ một cuộc thăm mặt-đối-mặt £8,62 sang một giao dịch số £0,15 và khoản tiết kiệm là hơn £8 triệu. Nhưng một khoản tiết kiệm chỉ trở thành tiền mặt được giải phóng để tái triển khai nếu *công suất cố định* của kênh đang co lại thực sự được dừng hoạt động — các ghế trung tâm cuộc gọi, nhân viên quầy, các phút hợp đồng điện thoại — và các chương trình chuyển đổi số chính quyền địa phương đã nhiều lần thấy rằng tổng khối lượng liên hệ không giảm theo cùng sự chấp nhận số. Nghiên cứu từ các chương trình chuyển đổi số chính quyền địa phương và các cơ quan như Socitm và Local Government Association đã ghi lại một mẫu hình lặp lại: các kênh số thu hút liên hệ thực sự mới (các công dân sẽ không gọi hoặc ghé thăm bây giờ làm vậy, vì nó dễ hơn), và một phần có ý nghĩa của các giao dịch "số" thất bại giữa đường và tạo ra một cuộc gọi điện thoại dù sao — vì vậy khối lượng điện thoại giảm ít hơn nhiều so với tỷ lệ phần trăm chấp nhận số sẽ gợi ý, đôi khi không giảm chút nào theo số tuyệt đối ngay cả khi *phần* của nó trong tổng liên hệ giảm.

## Cách tính toán

```
Tiết kiệm chuyển kênh gộp = khối lượng được chuyển × (chi
                            phí_kênh_cũ − chi phí_số)

Tiết kiệm thuần (được hiện thực hóa) = tiết kiệm gộp
                       − nhu cầu mới/bóng được tạo ra bởi kênh
                         dễ hơn
                       − chi phí nhu cầu thất bại (các thất
                         bại số vẫn tạo ra một cuộc gọi điện
                         thoại hoặc cuộc thăm quầy)
                       − chi phí công suất cố định chưa dừng
                         hoạt động (một trung tâm cuộc gọi
                         chỉ có thể sa thải nhân viên theo đơn
                         vị rời rạc; một sự giảm 15% khối
                         lượng hiếm khi cho phép bạn cắt 15%
                         số lượng nhân viên)

Ngưỡng hiện thực hóa: các khoản tiết kiệm chỉ có thể gửi vào
ngân hàng khi khối lượng giảm dưới mức mà kênh cũ có thể bố
trí nhân viên ở bước công suất rời-rạc-kế-tiếp-nhỏ-hơn của nó
(ví dụ: mất một ca làm việc toàn, một bàn toàn, một băng số
lượng nhân viên theo hợp đồng)
```

## Ví dụ minh họa

**Dịch vụ gia hạn thẻ khuyết tật county council**: 60.000 gia hạn/năm, trước đây 100% điện thoại/giấy ở £6,40 mỗi giao dịch. Một dịch vụ số mới ra mắt và đạt 65% chấp nhận số trong vòng một năm, ở £0,30 mỗi giao dịch số.

```
Tính toán tiết kiệm (gộp) ngây thơ:
  39.000 được chuyển × (£6,40 − £0,30) = £237.900/năm

Những gì thực sự xảy ra, theo dữ liệu trung tâm liên hệ của
hội đồng:
  Khối lượng điện thoại giảm từ 60.000/năm xuống 46.000/năm
  (−23%, không −65%) vì: 9.000 hành trình số thất bại và tạo
  ra một cuộc gọi theo dõi (rò rỉ nhu cầu thất bại), và 4.000
  người trước đây không gia hạn chút nào hiện làm vậy, đã
  thấy nó dễ trực tuyến (nhu cầu bóng — một cải thiện truy
  cập thực sự, nhưng không phải một khoản tiết kiệm)

  Trung tâm liên hệ điện thoại được bố trí nhân viên theo các
  băng 8.000 cuộc gọi/FTE; một sự giảm 14.000 cuộc gọi
  (60.000 → 46.000) giải phóng 1,75 FTE, được làm tròn xuống
  trong thực tế thành 1 FTE thực sự được tái triển khai =
  £34.000/năm

Tiết kiệm được hiện thực hóa = £34.000/năm cộng với chi phí
  xây dựng/chạy kênh-số được tránh trên 39.000 giao dịch ≈
  £34.000 + (39.000 × £0,30 chi phí số đã được đếm) — một
  phần nhỏ của tiêu đề £237.900, dù dịch vụ vẫn không thể
  chối cãi tốt hơn cho người dùng.
```

## Liên hệ với phát triển phần mềm

Bài học kỹ thuật là tiết kiệm chuyển kênh được hiện thực hóa bởi các quyết định *vận hành* (lập danh sách, dừng hoạt động, đàm phán lại hợp đồng), không phải bởi phần mềm được vận chuyển — một nhóm có thể đạt mỗi điểm của [tiêu-chuẩn-dịch-vụ-số](../digital-service-standard/) và vẫn mang lại không tiết kiệm thuần nào nếu không ai dừng hoạt động công suất cố định của kênh cũ. Trang bị nhu cầu thất bại (nơi trong hành trình số người dùng bỏ dở và họ làm gì tiếp theo) là một vấn đề phân tích kênh có thể giải quyết và điều có đòn bẩy cao nhất đơn lẻ mà một nhóm kỹ thuật có thể làm để bảo vệ trường hợp tiết kiệm; nó cũng là liên kết trực tiếp đến [chi-phí-mỗi-giao-dịch](../cost-per-transaction/), mà nhu cầu thất bại âm thầm thổi phồng. Xem [thực-hiện-lợi-ích](../benefits-realization/) cho kỷ luật rộng hơn của việc kiểm tra các khoản tiết kiệm của một trường hợp kinh doanh thực sự đổ bộ, và [tính-hòa-nhập-số](../digital-inclusion/) cho lý do tại sao kênh offline thường không thể, và không nên, được dừng hoạt động hoàn toàn.

## Những cạm bẫy

- **Giả định sự thay thế kênh 1:1**: mô hình hóa sự chấp nhận số như một phép trừ trực tiếp từ khối lượng điện thoại/quầy, bỏ qua nhu cầu bóng và rò rỉ nhu cầu thất bại được ghi lại trong nghiên cứu chuyển kênh chính quyền địa phương.
- **Ghi sổ tiết kiệm gộp trước khi dừng hoạt động**: đếm khoản tiết kiệm trong trường hợp kinh doanh năm mà sự chấp nhận tăng, không phải năm (nếu có) mà công suất của kênh cũ thực sự được cắt.
- **Bỏ qua bản chất hàm-bước của chi phí nhân sự**: một sự giảm 20% khối lượng hiếm khi chuyển đổi thành một sự giảm 20% chi phí, vì các trung tâm liên hệ và quầy được bố trí nhân viên theo các băng rời rạc, không liên tục.
- **Coi nhu cầu bóng là lãng phí**: liên hệ mới từ các người dùng bị loại trừ trước đây hoặc bị cản trở trước đây là một sự tăng thực trong [giá trị công](../public-value/), không phải một lỗi mô hình hóa — nó nên được báo cáo như một kết quả truy cập, không được bù trừ như nhiễu.

## Nguồn tham khảo

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
