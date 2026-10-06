# Chỉ số Phát triển Con người (HDI)

HDI là phương án thay thế tiêu đề của UN cho việc xếp hạng các quốc gia chỉ bằng thu nhập: nó kết hợp tuổi thọ, giáo dục, và thu nhập thành một con số đơn lẻ giữa 0 và 1, trên tiền đề — được lập luận bởi nhà kinh tế học Amartya Sen và được phát triển cho UN bởi Mahbub ul Haq — rằng phát triển là về việc mở rộng những gì con người có thể làm và là, không chỉ những gì họ kiếm được. Nó đã được công bố hàng năm trong Human Development Report của UN Development Programme từ năm 1990.

## Tại sao điều này quan trọng

Trước HDI, "phát triển" được đo gần như hoàn toàn bằng GNP mỗi đầu người, không nói gì về việc liệu tăng trưởng có đến được sức khỏe hoặc giáo dục của người dân thường hay không. Phương pháp năng lực của Sen đã định hình lại phát triển như sự mở rộng của tự do thực, và ul Haq đã biến điều đó thành một chỉ số có thể công bố mà UNDP có thể xếp hạng mỗi quốc gia, buộc các chính phủ trở nên giàu chỉ bằng thu nhập nhưng bỏ bê sức khỏe hoặc giáo dục phải đối mặt với một xếp hạng tồi tệ hơn GDP của họ gợi ý (các quốc gia dầu Gulf và một số nền kinh tế khai thác là các ví dụ chuẩn). Cấu trúc ba-chiều của HDI cũng là tổ tiên phương pháp luận trực tiếp của [Chỉ số Nghèo đói Đa chiều](../chỉ-số-nghèo-đói-đa-chiều/): cả hai từ chối để một chiều mua lại một thiếu hụt trong một chiều khác, sử dụng một trung bình hình học hơn là số học. UNDP công bố các ghi chú kỹ thuật đầy đủ và dữ liệu nền tảng cho mỗi ấn bản (<https://hdr.undp.org/data-center/human-development-index>), là nguồn kinh điển cho bất kỳ ai xây dựng trên chỉ số thay vì suy ra lại nó.

## Cách tính toán

```
Chỉ số Tuổi thọ (LEI)      = (LE − 20) / (85 − 20)

Chỉ số Năm Học Trung bình  = năm học trung bình / 15
Chỉ số Năm Học Dự kiến     = năm học dự kiến / 18
Chỉ số Giáo dục (EI)       = (Chỉ số Năm Trung bình + Chỉ số
                             Năm Dự kiến) / 2

Chỉ số Thu nhập (II)       = (ln(GNI mỗi đầu người) − ln(100))
                            / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)  [trung bình hình học của ba
                                 chỉ số con]
```

Trung bình hình học là có chủ ý: vì nó nhân thay vì lấy trung bình, một điểm rất cao trong một chiều không thể hoàn toàn bù đắp một điểm rất thấp trong một chiều khác — một thiết kế UNDP áp dụng năm 2010 cụ thể để phạt sự mất cân bằng, thay thế công thức trung-bình-số-học trước đó.

## Ví dụ minh họa

**Quốc gia thu nhập trung bình**: tuổi thọ 72 năm, năm học trung bình 8, năm học dự kiến 13, GNI mỗi đầu người $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Một HDI 0,713 rơi vào băng "phát triển con người cao" của UNDP (0,700–0,799); "rất cao" bắt đầu ở 0,800. Lưu ý mức độ nhạy của kết quả với chỉ số con yếu nhất: nếu năm học trung bình là 4 thay vì 8 (MYSI = 0,267, EI = 0,494), HDI giảm xuống (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — giảm một băng đầy đủ — ngay cả khi không gì khác thay đổi.

## Liên hệ với phát triển phần mềm

- Mẫu hình trung-bình-hình-học có thể tái sử dụng trực tiếp cho bất kỳ điểm số sản phẩm hoặc dịch vụ tổng hợp nào bạn không muốn một chiều mạnh che giấu một chiều yếu quan trọng — ví dụ: kết hợp các điểm khả năng truy cập, hiệu suất, và độ tin cậy cho một dịch vụ số công theo cách nhân thay vì bằng trung bình có trọng số, để một dịch vụ nhanh nhưng không thể truy cập không thể đạt điểm "tốt".
- Biến đổi log của thu nhập của HDI (giá trị biên giảm dần của một pound bổ sung) là cùng logic đằng sau [trọng số phân phối](../trọng-số-phân-phối/) trong đánh giá: một $1.000 bổ sung có nghĩa nhiều hơn đối với một hộ gia đình nghèo so với một hộ gia đình giàu, và coi cả hai tuyến tính định giá sai tác động.
- Bất kỳ bảng điều khiển báo cáo một điểm số "tính hòa nhập số" hoặc "kết quả công dân" pha trộn đơn lẻ nên ghi chép công thức tổng hợp của nó rõ ràng như các ghi chú kỹ thuật riêng của UNDP làm — xem [các chỉ số KPI khu vực công](../các-chỉ-số-kpi-khu-vực-công/) và [thẻ điểm giá trị công](../thẻ-điểm-giá-trị-công/).

## Những cạm bẫy

- **Lấy trung bình thay vì sử dụng trung bình hình học** — một trung bình số học để thu nhập cao che giấu hoàn toàn sức khỏe hoặc giáo dục kém; toàn bộ điểm của thay đổi phương pháp luận 2010 là để dừng sự thay thế đó.
- **So sánh HDI năm-qua-năm như thể nó là GDP được điều chỉnh lạm phát** — UNDP tái cố định chỉ số định kỳ (các giới hạn tối thiểu/tối đa mới, các trần đi học được xem lại), vì vậy một thay đổi xếp hạng có thể phản ánh một cập nhật phương pháp luận, không phải một sự thay đổi thực; luôn kiểm tra ấn bản HDR nào một con số đến từ.
- **Coi HDI là một thước đo nghèo đói** — nó là một trung bình quốc gia và không nói gì về phân phối trong một quốc gia; đối với điều đó, sử dụng [Chỉ số Nghèo đói Đa chiều](../chỉ-số-nghèo-đói-đa-chiều/) hoặc HDI Được-Điều-Chỉnh-Bất-Bình-Đẳng riêng biệt của UNDP.

## Nguồn tham khảo

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
