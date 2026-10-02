# Năng suất dịch vụ công

Năng suất dịch vụ công đo mức độ hiệu quả của chi tiêu công trong việc chuyển đổi đầu vào (nhân viên, vốn, hàng hóa và dịch vụ) thành đầu ra điều chỉnh theo chất lượng, đối với các dịch vụ — y tế, giáo dục, cảnh sát, chăm sóc xã hội — không có giá thị trường và do đó không có con số doanh thu để chia chi phí vào. UK Office for National Statistics đã công bố chuỗi này từ giữa những năm 2000 và nó vẫn là nỗ lực quốc gia phát triển nhất về phương pháp luận để trả lời "chính phủ có đang trở nên tốt hơn hay xấu hơn trong việc chuyển đổi tiền thành dịch vụ công không?"

## Tại sao điều này quan trọng

Trên một thị trường, năng suất là (giá trị đầu ra) / (chi phí đầu vào), và giá trị đầu ra có thể quan sát được vì ai đó trả cho nó. Một ca thay khớp hông, một chỗ trường học, và một cuộc tuần tra của cảnh sát không có giá bán, vì vậy ngây thơ bạn chỉ có thể đo *đầu vào* (những gì đã chi) — điều này cám dỗ các nhà bình luận coi chi tiêu công tăng tự động là xấu, vì nhiều đầu vào hơn với hoạt động tiêu đề phẳng trông như năng suất giảm. Phương pháp luận ONS, được đặt ra trong các ấn phẩm "Sources and Methods" của nó cho năng suất dịch vụ công, giải quyết điều này bằng cách xây dựng một chỉ số *đầu ra* từ các khối lượng hoạt động (các ca hoạt động được thực hiện, học sinh được dạy, các tội phạm được điều tra) và sau đó *điều chỉnh chất lượng* chỉ số đầu ra đó — đối với y tế, kết hợp tỷ lệ sống sót và thời gian chờ; đối với giáo dục, kết hợp thành tích; đối với cảnh sát, kết hợp các kết quả như giải quyết vụ việc — để một dịch vụ thực hiện cùng số lượng ca hoạt động nhưng đạt tỷ lệ sống sót tốt hơn được đăng ký như năng suất hơn, không chỉ đơn giản là đắt hơn. Phát hiện tiêu đề tái diễn trên các bản phát hành ONS là nghiêm túc đối với ngành: năng suất dịch vụ công Anh giảm mạnh trong đại dịch COVID-19 và theo các bản phát hành giữa những năm 2020 của chính ONS vẫn chưa hồi phục lại mức năm 2019 trong một số phân ngành bao gồm chăm sóc sức khỏe, ngay cả khi chi tiêu tăng — một khoảng trống tái khung "tài trợ nhiều hơn" và "năng suất nhiều hơn" như hai câu hỏi hoàn toàn riêng biệt.

## Cách tính toán

```
Chỉ số đầu ra (khối lượng) = Σ (hoạt động_i × trọng số chi phí
                            đơn vị tương đối_i), được cân trọng
                            năm cơ sở trên tất cả các hoạt động
                            dịch vụ (ví dụ: ca thay khớp hông,
                            ca đục thủy tinh thể, các cuộc hẹn
                            bác sĩ gia đình), tương tự với một
                            chỉ số khối lượng Laspeyres/Paasche

Điều chỉnh chất lượng    = chỉ số đầu ra × hệ số điều chỉnh
                          chất lượng (ví dụ: kết hợp một thay
                          đổi trong tỷ lệ sống sót, thời gian
                          chờ, thành tích, hoặc tái phạm như
                          một nhân tử trên khối lượng thô)

Chỉ số đầu vào            = Σ (giờ lao động × trọng số chi phí
                          lao động) + (chi phí hàng hóa/dịch
                          vụ, đã giảm phát) + (tiêu thụ vốn)

Tăng trưởng năng suất     = % thay đổi trong chỉ số đầu ra
yếu tố tổng hợp           điều chỉnh chất lượng − % thay đổi
                          trong chỉ số đầu vào
```

## Ví dụ minh họa

**Tính toán năng suất khu vực cấp tính NHS minh họa** (cấu trúc theo phương pháp luận ONS):

```
Năm 1: chỉ số khối lượng đầu ra = 100,0 (năm cơ sở), chỉ số
       đầu vào = 100,0 → chỉ số năng suất = 100,0

Năm 2: khối lượng hoạt động tăng 3,0% (nhiều ca hoạt động
       hơn, nhiều cuộc hẹn hơn) nhưng thời gian chờ trung
       bình xấu đi, áp dụng một khoản giảm điều chỉnh chất
       lượng −1,0%
       Chỉ số đầu ra điều chỉnh chất lượng = 100 × 1,030 ×
       0,990 = 101,97

       Đầu vào tăng: số lượng nhân viên +4,0%, các chi phí
       khác (đã giảm phát) +1,5%, chỉ số đầu vào có trọng số
       = 100 × 1,032 = 103,2

Tăng trưởng năng suất = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                      = 1,97% − 3,2% = −1,23 điểm phần trăm

Diễn giải: hoạt động tăng, nhưng đầu vào tăng nhanh hơn và
chất lượng giảm nhẹ, vì vậy năng suất — đầu ra mỗi đơn vị đầu
vào — giảm ngay cả khi "nhiều chăm sóc hơn được cung cấp."
```

Đây chính xác là mẫu hình mà các bản phát hành ONS đã nhiều lần báo cáo cho các phần của NHS sau đại dịch: chi tiêu tăng và hoạt động thô tăng cùng tồn tại với năng suất đo được giảm khi cả điều chỉnh chất lượng và tăng trưởng đầu vào được tính đến.

## Liên hệ với phát triển phần mềm

Năng suất dịch vụ công là tương tự cấp dân số của các cuộc tranh luận về năng suất kỹ thuật (storypoints được vận chuyển so với [các chỉ số DORA cho public value](../dora-metrics-for-public-value/) so với [các chỉ số dòng chảy](../flow-metrics-in-government-delivery/)): thông lượng thô không có điều chỉnh chất lượng gây hiểu lầm chính xác trong một bệnh viện như "các dòng mã được vận chuyển" làm với một nhóm phần mềm. Các nhóm xây dựng đường ống dữ liệu hiệu suất cho các bộ phận nên coi điều chỉnh chất lượng là một giai đoạn chuyển đổi hàng đầu, có phiên bản, không phải một chú thích — vì độ tin cậy riêng của ONS dựa trên điều chỉnh đó minh bạch, có thể tái tạo, và được xem lại khi dữ liệu chất lượng tốt hơn đến (ONS xem lại các ước tính năng suất của các năm trước khi dữ liệu chất lượng nền tảng — ví dụ: tỷ lệ sống sót — được hoàn thiện, vì vậy bất kỳ hệ thống hạ nguồn tiêu thụ các thống kê này phải xử lý các sửa đổi hồi tố, không chỉ thêm các kỳ mới). Nó cũng giao nhau trực tiếp với [tổng chi phí sở hữu trong CNTT chính phủ](../total-cost-of-ownership-in-government-it/) và [năng suất AI trong khu vực công](../ai-productivity-in-the-public-sector/): một hệ thống tăng khối lượng hoạt động thô mà không cải thiện hoặc duy trì chất lượng không phải, theo định nghĩa riêng của ONS, một sự cải thiện năng suất.

## Những cạm bẫy

- **Coi tăng trưởng đầu vào là tăng trưởng năng suất**: nhiều chi tiêu tài trợ nhiều nhân viên hơn sản xuất nhiều *hoạt động* hơn, không phải nhiều *năng suất* hơn, trừ khi đầu ra mỗi đơn vị đầu vào cũng tăng — hai điều này thường xuyên bị trộn lẫn trong bình luận chính trị.
- **Bỏ qua điều chỉnh chất lượng hoàn toàn**: một chỉ số đầu ra được xây dựng chỉ từ các đếm hoạt động thô sẽ thể hiện "lợi ích năng suất" từ việc làm nhiều hơn thứ gì đó có giá trị thấp hơn hoặc chất lượng thấp hơn; điều chỉnh chất lượng của ONS tồn tại cụ thể để bắt được điều này.
- **So sánh các chỉ số năng suất qua các phân ngành không có phiên bản phương pháp luận khớp**: năng suất y tế, giáo dục, và cảnh sát mỗi cái được xây dựng từ các nguồn dữ liệu hoạt động và chất lượng khác nhau trên các chu kỳ xem lại khác nhau — một so sánh liên ngành ngây thơ so sánh các công cụ không tương thích.
- **Đọc sự giảm năng suất của một năm như một xu hướng vĩnh viễn**: các con số năng suất thời kỳ đại dịch và sau đại dịch đã thể hiện sự biến động năm-qua-năm đáng kể khi dữ liệu chất lượng (ví dụ: danh sách chờ, phục hồi tự chọn) bản thân nó thay đổi; ONS luôn cảnh báo chống lại việc diễn giải quá mức các chuyển động một năm.

## Nguồn tham khảo

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
