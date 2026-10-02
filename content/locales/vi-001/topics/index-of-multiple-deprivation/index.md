# Chỉ số Nghèo đói Đa dạng (IMD)

IMD là thước đo chính thức về nghèo đói tương đối cho các khu vực nhỏ ở England, xếp hạng mỗi một trong 32.844 Lower-layer Super Output Areas (LSOA, mỗi cái khoảng 1.500 cư dân) của quốc gia từ 1 (nghèo nhất) đến 32.844 (nghèo ít nhất). Nó được công bố bởi hiện là Ministry of Housing, Communities and Local Government (MHCLG, trước đây MHCLG/DCLG), gần đây nhất là English Indices of Deprivation 2019, và nó trực tiếp định tuyến tài trợ chính phủ trung ương, ưu tiên hóa y tế công, và sự đủ điều kiện cho hàng chục kế hoạch địa phương.

## Tại sao điều này quan trọng

Nghèo đói không phải là một thứ — một khu phố có thể nghèo-thu-nhập nhưng an toàn, hoặc thu-nhập-đủ nhưng chịu các kết quả sức khỏe kém và nhà ở xấu. Các chỉ số tiền thân của IMD (có từ các chỉ số nghèo đói Department of the Environment những năm 1970) phát triển thành mô hình bảy-lĩnh-vực hôm nay chính xác vì nhắm mục tiêu chỉ-số-đơn (tỷ lệ thất nghiệp một mình, giả sử) thường xuyên bỏ sót các khu vực nghèo theo các cách khác. IMD 2019 kết hợp thu nhập, việc làm, giáo dục, sức khỏe, tội phạm, các rào cản đối với nhà ở và dịch vụ, và môi trường sống thành một xếp hạng tổng hợp đơn lẻ mỗi LSOA, mỗi lĩnh vực được xây dựng từ giỏ chỉ số riêng của nó và được cân trọng số bởi phương pháp luận của MHCLG. Vì nó hoạt động ở cấp khu-vực-nhỏ (LSOA) hơn là cấp chính quyền địa phương, nó phơi bày các túi nghèo đói ẩn trong các khu vực giàu có khác — lý do IMD, không phải thu nhập chính quyền địa phương trung bình, là điều mà NHS England, phụ cấp học sinh của Department for Education, và hàng chục công thức tài trợ chính quyền địa phương thực sự khóa vào. Phần mềm xác định đủ điều kiện, ưu tiên hóa tiếp cận, hoặc báo cáo tác động theo khu vực ở England nên coi thập phân vị hoặc xếp hạng IMD như một đầu vào hàng đầu, không phải một suy nghĩ thêm — và nơi một chương trình có chủ ý nhắm mục tiêu các khu vực nghèo nhất, đánh giá của nó nên áp dụng [trọng số phân phối](../distributional-weighting/) nhất quán với nhắm mục tiêu đó, thay vì định giá một pound lợi ích giống nhau bất kể nó đổ bộ ở đâu.

## Cách tính toán

```
7 lĩnh vực, có trọng số:
  Thu nhập                            22,5%
  Việc làm                            22,5%
  Giáo dục, Kỹ năng, và Đào tạo        13,5%
  Nghèo đói Sức khỏe và Khuyết tật     13,5%
  Tội phạm                             9,3%
  Các rào cản đối với Nhà ở và Dịch vụ  9,3%
  Môi trường Sống                      9,3%

Mỗi điểm lĩnh vực: các chỉ số được chuẩn hóa (được xếp hạng,
sau đó được biến đổi hướng tới một phân phối chuẩn) và được
kết hợp bằng biến đổi hàm mũ để nghèo đói cao trên bất kỳ
chỉ số đơn lẻ nào không thể hoàn toàn được bù trừ bởi nghèo
đói thấp trên các chỉ số khác trong lĩnh vực đó.

Điểm tổng hợp IMD (LSOA) = Σ (điểm lĩnh vực × trọng số lĩnh
                          vực)
Xếp hạng các LSOA theo điểm tổng hợp → 1 (nghèo nhất) đến
32.844 (nghèo ít nhất)
Thập phân vị: xếp hạng ÷ 3.284 (khoảng), thập phân vị 1 =
10% LSOA nghèo nhất
```

## Ví dụ minh họa

**Điểm tổng hợp LSOA**, sử dụng các điểm lĩnh vực chuẩn hóa minh họa (0 = không có tín hiệu nghèo đói, cao hơn = nghèo hơn):

```
Thu nhập                 0,35 × 0,225 = 0,07875
Việc làm                 0,30 × 0,225 = 0,06750
Giáo dục                 0,20 × 0,135 = 0,02700
Sức khỏe                 0,15 × 0,135 = 0,02025
Tội phạm                 0,10 × 0,093 = 0,00930
Rào cản Nhà ở            0,05 × 0,093 = 0,00465
Môi trường Sống          0,08 × 0,093 = 0,00744

Điểm tổng hợp = 0,07875 + 0,06750 + 0,02700 + 0,02025 +
                0,00930 + 0,00465 + 0,00744 = 0,21489
```

Điểm tổng hợp đó sau đó được xếp hạng chống lại các điểm của tất cả 32.844 LSOA. Nếu nó đặt LSOA ở xếp hạng 2.950, nó rơi vào thập phân vị 1 (2.950 ÷ 3.284 ≈ 0,9, tức là trong 10% các khu phố nghèo nhất ở England) — mà đối với nhiều công thức tài trợ là ngưỡng mở khóa sự đủ điều kiện, bất kể chính quyền địa phương xung quanh ghi điểm trung bình như thế nào.

## Liên hệ với phát triển phần mềm

- Bất kỳ dịch vụ geocode người dùng đến mã bưu điện hoặc LSOA có thể kết hợp bảng tra cứu IMD được công bố (một CSV miễn phí, có phiên bản từ MHCLG) để thêm thập phân vị nghèo đói như một đồng biến — cho việc nhắm mục tiêu tiếp cận, ưu tiên hóa caseload, hoặc báo cáo kết quả theo băng nghèo đói mà không thu thập dữ liệu cá nhân mới.
- Thập phân vị IMD là một kiểm tra công bằng tiêu chuẩn cho các dịch vụ số công: cross-tabulating sự chấp nhận dịch vụ, sự bỏ dở, hoặc sự hài lòng theo thập phân vị IMD làm nổi lên các khoảng trống truy cập mà một chỉ số tổng hợp che giấu.
- Vì xếp hạng IMD là tương đối (nó luôn tổng thành một tập cố định các xếp hạng trên England), nó không thể thể hiện liệu nghèo đói quốc gia có đang tăng hay giảm theo thời gian — chỉ khu vực nào xếp hạng ở đâu tương đối với nhau trong ấn bản đó; không xây dựng các bảng điều khiển xu-hướng-tuyệt-đối chỉ trên xếp hạng IMD thô.

## Những cạm bẫy

- **So sánh các xếp hạng IMD qua các ấn bản (2015 so với 2019) như một xu hướng thời gian** — các chỉ số, địa lý, và phương pháp luận nền tảng đều thay đổi giữa các ấn bản; MHCLG rõ ràng khuyên không nên sử dụng các thay đổi xếp hạng như bằng chứng một khu vực trở nên nghèo hơn hoặc ít nghèo hơn.
- **Áp dụng IMD cấp-LSOA cho các cá nhân** — một LSOA ở thập phân vị 1 vẫn chứa các hộ gia đình không-nghèo-đói, và một LSOA thập phân vị 10 vẫn chứa các hộ gia đình nghèo đói; IMD mô tả các khu vực, không phải con người, và sử dụng nó như một proxy đủ điều kiện cá nhân phân loại sai cả hai hướng.
- **Bỏ qua chi tiết cấp lĩnh vực ủng hộ xếp hạng tổng hợp** — hai LSOA với các điểm tổng hợp giống hệt có thể có các hồ sơ lĩnh vực hoàn toàn khác nhau (một nghèo-sức-khỏe, một nghèo-tội-phạm); một kế hoạch nhắm mục tiêu một vấn đề nên sử dụng điểm lĩnh vực liên quan, không phải điểm tổng hợp pha trộn.

## Nguồn tham khảo

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
