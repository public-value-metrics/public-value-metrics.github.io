# Giá bóng

Một giá bóng là một giá trị ước tính được gán cho một hàng hóa, nguồn lực, hoặc ngoại tác không có giá thị trường quan sát được, hoặc giá thị trường của nó bị bóp méo và không phản ánh giá trị xã hội thực sự của nó. Đánh giá chính phủ dựa vào một tập hợp nhỏ các giá bóng chính thức — carbon, thời gian không-làm-việc, lao động thất nghiệp — được công bố tập trung để mỗi bộ phận sử dụng cùng con số.

## Tại sao điều này quan trọng

Các giá bóng tồn tại vì [phân tích chi phí-lợi ích xã hội](../social-cost-benefit-analysis/) không thể hoạt động mà không có một giá trị tiền tệ cho mọi chi phí và lợi ích, và một số điều quan trọng nhất — một tấn carbon thải ra, một giờ thời gian của một người đi làm, một giờ lao động nếu không thì thất nghiệp — không có giá thị trường nào cả, hoặc một giá thị trường trình bày sai chi phí xã hội thực sự của chúng. HM Treasury và Department for Energy Security and Net Zero cùng công bố giá bóng carbon được sử dụng trên toàn đánh giá chính phủ Anh (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), suy ra không phải từ bất kỳ giá thị trường carbon nào mà từ một phương pháp nhất-quán-với-mục-tiêu: giá trị carbon được đặt ở chi phí giảm thiểu biên cần thiết để đạt các ngân sách carbon theo luật định của Anh, đó là một logic căn bản khác với việc quan sát những gì carbon thực sự được giao dịch trên Chương trình Giao dịch Phát thải EU hoặc Anh.

Tỷ lệ lương bóng theo một logic tương tự ở phía lao động. Thuê một người mà nếu không thì sẽ thất nghiệp không tốn xã hội toàn bộ lương của họ — một phần của lương đó là một chuyển giao từ các khoản thanh toán trợ cấp bị bỏ qua và thời gian nghỉ ngơi/tìm kiếm bị mất thay vì một khoản rút mới thuần từ nguồn lực của xã hội — vì vậy hướng dẫn Green Book đặt một giá bóng dưới lương thị trường cho lao động lấy từ thất nghiệp, phản ánh chi phí cơ hội thực sự của lao động đó (xem [chi phí cơ hội trong chi tiêu công](../opportunity-cost-in-public-spending/)) thay vì giá thị trường của nó.

## Cách tính toán

```
Giá bóng carbon (cấu trúc minh họa, các giá trị hiện tại từ
công cụ giá trị carbon BEIS/DESNZ chính thức — không sử dụng
các con số cũ):
  Giá trị khu vực giao dịch: được thông tin bởi quỹ đạo giá
    phân bổ ETS
  Giá trị khu vực không-giao-dịch (nhất-quán-với-mục-tiêu):
    được đặt ở chi phí biên của giảm thiểu cần thiết để đạt
    các ngân sách carbon theo luật định, tăng theo thời gian
    khi các tùy chọn giảm thiểu dễ hơn bị cạn kiệt
  Được áp dụng như: £/tấn CO2e × tấn thải ra hoặc giảm bởi
    tùy chọn, được chiết khấu theo tỷ lệ chiết khấu xã hội
    cho các năm tương lai

Tỷ lệ lương bóng (SWR):
  SWR = Lương thị trường − (giá trị thời gian nghỉ ngơi/tìm
                            kiếm bị bỏ qua được tiết kiệm +
                            giá trị các khoản thanh toán
                            phúc lợi không còn được trả)
  Thường được diễn đạt như một phần của lương thị trường (ví
    dụ: SWR = 0,6 × lương thị trường ở một khu vực thất
    nghiệp cao, theo hướng dẫn Phụ lục A của Green Book về
    các thị trường lao động có công suất dư)
```

Cả hai con số đều là các quy ước chính sách được đặt tập trung, không phải các quan sát thị trường thực nghiệm — toàn bộ điểm của một giá bóng là thay thế cho một thị trường thiếu hoặc bị bóp méo, vì vậy một đánh giá sử dụng một giá phải trích dẫn nguồn chính thức hiện tại thay vì suy ra con số riêng của nó, chính xác để đánh giá của mỗi bộ phận có thể so sánh được.

## Ví dụ minh họa

**Chính phủ quốc gia**: một đánh giá kế hoạch phòng chống lũ lụt ước tính nó tránh được 400 tấn phát thải CO2e mỗi năm (qua việc giảm sử dụng thiết bị khẩn cấp và giảm carbon ẩn từ việc tránh tái xây dựng) trong một tuổi thọ đánh giá 30 năm, so với một đường cơ sở "làm tối thiểu".

```
Giá bóng carbon minh họa: £280/tấn CO2e (năm 1, tăng trong kỳ
  đánh giá theo lịch trình giá trị carbon không-giao-dịch
  chính thức)
Lợi ích carbon năm 1 = 400 × £280 = £112.000
```

Vì lịch trình chính thức có giá trị carbon *tăng* trong kỳ đánh giá (phản ánh các ngân sách carbon siết chặt), người phân tích phải áp dụng giá trị đúng theo năm cụ thể cho mỗi năm của luồng 30 năm, không phải một tỷ lệ cố định — sử dụng giá trị năm 1 xuyên suốt sẽ đánh giá thấp các lợi ích năm sau và làm sai lệch xếp hạng so với các thiết kế phòng chống lũ lụt thay thế có hồ sơ carbon khác nhau.

**Chính quyền địa phương**: một chương trình hỗ trợ việc làm của một hội đồng cho các cư dân thất nghiệp dài hạn đặt 150 người vào các công việc trả £11/giờ. Định giá điều này sử dụng lương thị trường đầy đủ sẽ ghi công cho chương trình với £11 × giờ làm việc như một lợi ích xã hội, nhưng phương pháp tỷ lệ lương bóng nhận ra rằng đây không phải là các công nhân được lấy từ các công việc khác — chi phí cơ hội thực sự của lao động của họ trước chương trình là thấp.

```
Lương thị trường: £11,00/giờ
Tỷ lệ lương bóng (minh họa, thất nghiệp địa phương cao): 0,6
  × lương thị trường = £6,60/giờ
Lợi ích xã hội thuần có thể quy cho mỗi giờ làm việc ≈ £11,00
  − £6,60 = £4,40/giờ
  (giá trị "thêm" được tạo ra bởi việc chuyển lao động thực sự
   nhàn rỗi vào sản xuất, khác với lương bản thân nó, chủ yếu
   là một chuyển giao)
```

Đây là lý do tại sao các đánh giá của các chương trình việc làm ở các khu vực thất nghiệp cao có thể cho thấy một giá trị xã hội thuần dương ngay cả khi cùng chương trình, được chạy ở một khu vực toàn-dụng-lao-động nơi lao động bị thay thế sẽ chỉ đơn giản được lấy từ các công việc khác, sẽ không.

## Liên hệ với phát triển phần mềm

Giá bóng hiếm khi chạm trực tiếp vào cung cấp phần mềm, nhưng nó quan trọng bất cứ khi nào một trường hợp kinh doanh tuyên bố một lợi ích carbon hoặc xã hội từ một thay đổi CNTT — một sự hợp nhất trung tâm dữ liệu tuyên bố tiết kiệm carbon, hoặc một dịch vụ không-giấy tuyên bố carbon in ấn và bưu chính tránh được, phải sử dụng giá bóng carbon chính thức hiện tại thay vì một con số được phát minh, và phải áp dụng lịch trình đúng theo năm thay vì một tỷ lệ cố định, chính xác như với bất kỳ đầu vào đánh giá Green Book khác. Xem [tổng chi phí sở hữu trong CNTT chính phủ](../total-cost-of-ownership-in-government-it/) và [giá trị an ninh mạng khu vực công](../public-sector-cybersecurity-value/), cả hai thường cần một giá bóng cho một đầu vào khó-tiền-hóa (rủi ro vi phạm, ngừng hoạt động) cùng với các mục được tính chi phí trực tiếp.

## Những cạm bẫy

- **Sử dụng một con số carbon hoặc lương cũ.** Cả hai giá trị được sửa đổi định kỳ bởi hướng dẫn trung tâm; một đánh giá được xây dựng trên một con số đã lỗi thời sẽ không sống sót qua sự giám sát của Treasury.
- **Áp dụng một giá carbon bóng cố định trên một đánh giá nhiều thập kỷ.** Lịch trình chính thức tăng theo thời gian; sử dụng giá trị năm 1 xuyên suốt trình bày sai hồ sơ của lợi ích hoặc chi phí.
- **Nhầm lẫn lương bóng với một khoản giảm trên lương thực tế của công nhân.** Tỷ lệ lương bóng điều chỉnh định giá *của đánh giá* về đầu vào lao động, không phải lương mà công nhân thực sự được trả — nhầm lẫn hai điều này mời (sai) việc biện minh cho lương dưới-thị-trường.
- **Suy ra một giá bóng tùy chỉnh thay vì sử dụng giá chính thức.** Các giá bóng là các quy ước chính sách chính xác để các đánh giá có thể so sánh được qua các bộ phận; một con số được phát minh tại địa phương, dù được lý luận tốt đến đâu, phá vỡ sự so sánh đó.

## Nguồn tham khảo

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
