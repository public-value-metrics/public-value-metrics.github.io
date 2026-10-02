# Các chỉ số dịch vụ và giao dịch tiêu chuẩn

GOV.UK Service Standard là danh sách kiểm tra 14 điểm của chính phủ Anh để xây dựng và chạy một dịch vụ số công, và nó đi kèm với một tập hợp nhỏ, bắt buộc các chỉ số giao dịch định lượng — chi phí mỗi giao dịch, tỷ lệ hoàn thành, sự chấp nhận số, và sự hài lòng người dùng — mà các nhóm phải công bố cho mỗi dịch vụ chính phủ trung ương trực tiếp. Cùng nhau, tiêu chuẩn và các chỉ số là sự chuyên biệt hóa vận hành, hàng ngày của các khung public value và KPI rộng hơn trong repository này, nhắm trực tiếp vào các nhóm cung cấp phần mềm.

## Tại sao điều này quan trọng

Service Standard, được duy trì trong sổ tay dịch vụ GOV.UK, yêu cầu mỗi đánh giá điểm-trong-thời-gian (alpha, beta, live) của một dịch vụ số chính phủ phải chứng minh — trong số 14 điểm của nó — rằng nhóm hiểu nhu cầu người dùng, làm việc trong một nhóm đa ngành, lặp lại và cải thiện thường xuyên, và *đánh giá các công cụ, hệ thống, và cách làm việc*. Trong lịch sử, điều này nằm cùng với một Performance Platform công khai nơi mỗi dịch vụ trực tiếp công bố dữ liệu giao dịch của nó một cách công khai; nền tảng đó đã nghỉ hưu, nhưng nghĩa vụ nền tảng để đo và công bố bốn chỉ số cốt lõi này vẫn tồn tại qua hướng dẫn "đo thành công" của sổ tay dịch vụ. Lý do điều này khác với một bảng điều khiển KPI phần mềm chung là các chỉ số này được thiết kế rõ ràng như một mô hình kinh tế liên kết, không phải bốn điểm độc lập: toàn bộ trường hợp tiết kiệm cho chính phủ số — Digital Efficiency Report của Government Digital Service thấy các giao dịch số rẻ hơn khoảng 20 lần so với qua điện thoại và khoảng 50 lần rẻ hơn so với mặt đối mặt cho các dịch vụ chính quyền địa phương tương đương — chỉ hiện thực hóa nếu tỷ lệ hoàn thành vẫn cao và sự chấp nhận số thực sự tăng, thay vì chỉ thêm một kênh rẻ cùng với một kênh đắt không thay đổi.

## Cách tính toán

```
Chi phí mỗi giao dịch  = tổng chi phí vận hành dịch vụ / số
                        giao dịch hoàn thành
Tỷ lệ hoàn thành        = giao dịch hoàn thành / giao dịch bắt
                        đầu × 100
Sự chấp nhận số         = giao dịch kênh-số / giao dịch tất-
                        cả-kênh × 100
Sự hài lòng người dùng  = % hài lòng + rất hài lòng, khảo sát
                        5-điểm trong-dịch-vụ

Tiết kiệm chuyển kênh = khối lượng giao dịch × sự chuyển dịch
                       chấp nhận × (chi phí mỗi giao dịch trên
                       kênh cũ − chi phí mỗi giao dịch số)

Chi phí nhu cầu thất bại = (1 − tỷ lệ hoàn thành) × giao dịch
                          thử số × chi phí của kênh dự phòng
                          mà những người dùng đó sau đó sử
                          dụng thay vào đó
```

## Ví dụ minh họa

**Dịch vụ gia hạn giấy phép chính phủ trung ương minh họa**, 2 triệu giao dịch/năm, hiện tại 65% điện thoại (£3,00/giao dịch) và 35% số (£0,30/giao dịch), tỷ lệ hoàn thành 80%. Một thiết kế lại chống lại Service Standard 14-điểm nâng sự chấp nhận số lên 60% và hoàn thành lên 92%:

```
Tiết kiệm chuyển dịch chấp nhận = 2.000.000 × 0,25 × (3,00 −
                                  0,30) = £1.350.000/năm

Chi phí nhu cầu thất bại, trước:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/năm
  (những người bỏ dở quay lại điện thoại)

Chi phí nhu cầu thất bại, sau:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/năm

Tiết kiệm nhu cầu thất bại thuần = £420.000 − £288.000 =
£132.000/năm

Tổng tiết kiệm hàng năm ≈ £1.350.000 + £132.000 = £1.482.000/
năm
```

Số học làm rõ tại sao tỷ lệ hoàn thành không phải là một chỉ số thứ cấp: không có sự cải thiện từ 80% lên 92%, tiết kiệm chuyển dịch chấp nhận sẽ phần nào bị thu hồi bởi nhu cầu thất bại định tuyến các người dùng số thất vọng trực tiếp trở lại kênh điện thoại đắt đỏ.

## Liên hệ với phát triển phần mềm

Bốn chỉ số này là một ví dụ hoạt động của một bảng điều khiển chi-phí-hậu-quả: một chỉ số chi phí được giữ tách biệt với ba chỉ số kết quả/chất lượng, một cách có chủ ý không bao giờ gộp lại thành một điểm đơn lẻ — cùng kỷ luật được lập luận trong [các chỉ số KPI khu vực công](../public-sector-kpis/). Đối với các kỹ sư, điều này chia thành công việc cụ thể, có thể sở hữu: tỷ lệ hoàn thành là một vấn đề trang bị kênh, và mỗi điểm bỏ dở trong hành trình là, về nguyên tắc, có thể định vị và sửa được; chi phí mỗi giao dịch yêu cầu kế toán chi phí đơn vị thực sự bao gồm chi phí kênh hỗ-trợ-nhân-viên và kênh-giấy, không chỉ chi tiêu lưu trữ đám mây (xem [chi phí mỗi giao dịch](../cost-per-transaction/) và [tổng chi phí sở hữu trong CNTT chính phủ](../total-cost-of-ownership-in-government-it/)); và sự chấp nhận số là một chỉ số công bằng mặc trang phục hiệu quả — các công dân không thể hoặc không muốn chuyển kênh không tương xứng là cao tuổi hơn, khuyết tật, hoặc bị loại trừ số, vì vậy việc đóng kênh mạnh mẽ chuyển một "tiết kiệm" thành một thiệt hại truy cập (xem [tính hòa nhập số](../digital-inclusion/) và [tiết kiệm chuyển kênh](../channel-shift-savings/)). Tiêu chuẩn 14-điểm bản thân nó là đặc tả quy trình đằng sau các con số này — xem [tiêu chuẩn dịch vụ số](../digital-service-standard/) cho tiêu chuẩn đầy đủ, và [các chỉ số hài lòng công dân](../citizen-satisfaction-metrics/) cho cách số liệu hài lòng ở đây liên quan đến đo lường tin tưởng rộng hơn.

## Những cạm bẫy

- **Sự chấp nhận đạt được bằng cách đóng kênh thay thế**: đóng một đường dây điện thoại nâng tỷ lệ phần trăm chấp nhận số theo số học trong khi đổ nhu cầu thất bại vào bất kỳ kênh nào còn lại (thường là một tuyến hỗ-trợ-số hoặc mặt-đối-mặt đắt hơn); luôn đo chi phí toàn-hệ-thống, không chỉ tỷ lệ.
- **Đo tỷ lệ hoàn thành từ bước hai của kênh**: bắt đầu đếm "bắt đầu" sau điểm bỏ dở thực sự đầu tiên vuốt ve tỷ lệ hoàn thành và che giấu mất mát có thể sửa lớn nhất.
- **Chi phí mỗi giao dịch loại trừ hỗ trợ hỗ-trợ-số**: một chi phí đơn vị chỉ-số bỏ qua thời gian nhân viên dành để giúp người dùng không thể tự phục vụ đánh giá thấp chi phí thực sự của kênh.
- **Công bố các chỉ số không có định nghĩa chia sẻ qua các dịch vụ**: "giao dịch" và "hoàn thành" có nghĩa khác nhau qua các nhóm dịch vụ khác nhau trừ khi các định nghĩa được tiêu chuẩn hóa và phiên bản, làm cho so sánh liên dịch vụ không đáng tin cậy.

## Nguồn tham khảo

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
