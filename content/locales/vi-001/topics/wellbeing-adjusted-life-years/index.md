# Năm sống điều chỉnh theo phúc lợi (WELLBY)

Một WELLBY là một điểm bổ sung của sự hài lòng cuộc sống, trên thang đo phúc lợi tiêu chuẩn 0–10, cho một người trong một năm. Đó là tương tự cấu trúc của QALY được sử dụng trong kinh tế học y tế — một đơn vị đơn lẻ cho phép bạn so sánh các can thiệp có các kết quả không có gì khác chung — nhưng được xây dựng trên phúc lợi chủ quan thay vì các trạng thái sức khỏe lâm sàng, và được đặt ra trong "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) của HM Treasury.

## Tại sao điều này quan trọng

Đánh giá chi phí-lợi ích cần một đơn vị chung để so sánh một khoản tài trợ câu lạc bộ thanh niên chống lại một kế hoạch an toàn giao thông chống lại một dịch vụ sức khỏe tâm thần, không cái nào chia sẻ một thước đo kết quả. Kinh tế học y tế giải quyết điều này cho các can thiệp lâm sàng với QALY: một năm sống điều chỉnh theo chất lượng, có trọng số từ 0 (chết) đến 1 (sức khỏe đầy đủ). Hướng dẫn phúc lợi của HM Treasury mở rộng cùng logic đến chi tiêu công không-y-tế, sử dụng câu hỏi hài lòng cuộc sống được hài hòa của ONS ("Overall, how satisfied are you with your life nowadays?", trả lời 0–10) như thước đo kết quả thay vì một chỉ số trạng-thái-sức-khỏe. Một WELLBY bằng 1 nghĩa là sự hài lòng cuộc sống của một người tăng một điểm đầy đủ cho một năm (hoặc, tương đương, sự hài lòng của mười người tăng 0,1 điểm mỗi người cho một năm — WELLBY tổng hợp qua một dân số theo cách QALY làm). Hướng dẫn của HM Treasury đặt một giá trị tiền tệ minh họa mỗi WELLBY (khoảng £13.000, giá 2019/20) được suy ra bằng cách hòa giải dữ liệu phúc lợi chủ quan với các phương pháp khác đối với giá trị của một năm sống, cho các người đánh giá một cách để tiền hóa các kết quả — giảm cô đơn, sự gắn kết cộng đồng, truy cập không gian xanh — mà các kỹ thuật [định giá stated preference](../stated-preference-valuation/) trước đây chỉ có thể mô tả, không so sánh trên cơ sở chung với chi tiêu sức khỏe hoặc an toàn.

## Cách tính toán

```
WELLBY = Δ sự hài lòng cuộc sống (thang đo 0–10) × số năm thay
        đổi duy trì (tổng hợp qua tất cả người bị ảnh hưởng)

Lợi ích phúc lợi tiền hóa = WELLBY được tạo ra × giá trị mỗi
                           WELLBY (giá trị tham chiếu HMT)

vs. QALY = Δ tiện ích trạng thái-sức khỏe (thang đo 0–1) ×
          năm sống trong trạng thái đó
```

Thang đo hài lòng 0–10 và thang đo tiện ích QALY 0–1 không thể thay thế nhau mà không có một bước chuyển đổi; hướng dẫn của HM Treasury thảo luận việc hòa giải hai điều để, ví dụ, một can thiệp sức khỏe được đánh giá trong QALY và một can thiệp xã hội được đánh giá trong WELLBY không bị âm thầm đếm hai lần hoặc bị để lại không thể so sánh trong cùng [đánh giá Green Book](../green-book-appraisal/).

## Ví dụ minh họa

**Chính quyền địa phương**: một dịch vụ làm bạn cộng đồng cho các cư dân cao tuổi bị cô lập, phục vụ 400 người. Các khảo sát theo dõi cho thấy sự hài lòng cuộc sống trung bình tăng từ 5,2 lên 6,0 (tăng 0,8 điểm), và hiệu ứng được ước tính duy trì trong 2 năm trước khi phai nhạt.

```
WELLBY = 400 người × 0,8 điểm × 2 năm = 640 WELLBY

Giá trị tiền hóa = 640 × £13.000 = £8.320.000
```

So với một chi phí chương trình hàng năm £300.000 (£600.000 trong 2 năm), tỷ lệ lợi ích-chi phí là khoảng 8.320.000 / 600.000 ≈ **13,9:1** — một con số hiện có thể nằm trong cùng bảng đánh giá như chi-phí-mỗi-QALY-tránh-được của một kế hoạch sức khỏe hoặc các khoản tiết kiệm thời-gian-chuyến-đi của một kế hoạch giao thông.

**Tổ chức từ thiện, quy mô nhỏ hơn**: một chương trình nghệ thuật cộng đồng tiếp cận 50 người tham gia với một khoản tăng hài lòng được đo 0,3 điểm, kéo dài 1 năm.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Giá trị tiền hóa = 15 × £13.000 = £195.000
```

## Liên hệ với phát triển phần mềm

- Bất kỳ dịch vụ hướng-công-dân nào đã thu thập một mục khảo sát hài lòng cuộc sống hoặc phúc lợi (nhiều nền tảng chính quyền địa phương và y tế-và-chăm-sóc làm, theo bốn câu hỏi phúc lợi tiêu chuẩn ONS4) có thể tính toán WELLBY trực tiếp từ các đường ống dữ liệu hiện có thay vì ủy quyền đánh giá kinh tế tùy chỉnh cho mỗi thay đổi dịch vụ.
- WELLBY cho các nhóm kỹ thuật xây dựng cho báo cáo [luật giá trị xã hội](../social-value-act/) hoặc [lợi tức xã hội trên đầu tư](../social-return-on-investment/) một mẫu số được tiêu chuẩn hóa quốc gia, được HM Treasury chứng thực, tránh sự lan rộng của các "điểm tác động" tùy chỉnh không thể so sánh qua các hợp đồng hoặc nhà cung cấp.
- Vì WELLBY cộng được qua con người và thời gian, chúng kết hợp gọn gàng vào loại theo dõi kết quả cấp dân số được sử dụng trong các hệ thống [trách nhiệm dựa trên kết quả](../outcomes-based-accountability/) — một bảng điều khiển dịch vụ có thể báo cáo WELLBY tích lũy được tạo ra mỗi quý theo cách một hệ thống sức khỏe báo cáo QALY giành được.

## Những cạm bẫy

- **Giả định các khoản tăng tự báo cáo hoàn toàn có thể quy cho can thiệp** — không có một đối chiếu thực tế (nhóm so sánh hoặc thiết kế trước/sau với kiểm soát), bạn không thể phân biệt khoản tăng WELLBY từ các xu hướng chung; xem [phân tích đối chiếu thực tế](../counterfactual-analysis/).
- **Trộn WELLBY và QALY trong một tổng không có hòa giải** — hướng dẫn của HM Treasury rõ ràng rằng hai điều sử dụng các thang đo khác nhau và các lý thuyết giá trị nền tảng khác nhau; cộng chúng một cách ngây thơ đếm hai lần phúc lợi chồng chéo.
- **Sử dụng giá trị tiền tệ tham chiếu không có suy nghĩ phê bình** — con số £-mỗi-WELLBY là một ước tính trung bình quốc gia với các dải không chắc chắn thực sự; hướng dẫn của HM Treasury khuyến nghị phân tích độ nhạy, không coi nó như một tỷ giá hối đoái cố định.

## Nguồn tham khảo

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
