# Phân tích chi phí-lợi ích xã hội (SCBA)

Phân tích chi phí-lợi ích xã hội chuyển đổi mọi chi phí và lợi ích của một chính sách hoặc chương trình — thị trường và không-thị-trường — thành một đơn vị tiền tệ chung, chiết khấu các luồng tương lai thành giá trị hiện tại, và trừ chúng để tạo ra một con số đơn lẻ: đề xuất này có làm cho xã hội tốt hơn không, và bao nhiêu?

## Tại sao điều này quan trọng

SCBA là phương pháp định lượng mặc định trong trường hợp kinh tế của [đánh giá Green Book](../đánh-giá-green-book/): hướng dẫn của HM Treasury yêu cầu các đề xuất phải chứng minh một giá trị xã hội hiện tại thuần (NPSV) dương ở nơi nào lợi ích có thể được tiền hóa một cách đáng tin cậy, sử dụng sẵn lòng-trả làm nguyên tắc định giá cơ bản cho các hàng hóa không-thị-trường (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chương 5). Kỷ luật mà nó thực thi là phân tích chi phí-lợi ích "xã hội" không phải là bài tập giống như một đánh giá đầu tư khu vực tư: nó phải bao gồm chi phí và lợi ích rơi vào các bên thứ ba không tham gia giao dịch (ngoại tác), nó phải sử dụng [tỷ lệ chiết khấu xã hội](../tỷ-lệ-chiết-khấu-xã-hội/) thay vì một chi phí vốn thương mại, và nó nên áp dụng [trọng số phân phối](../trọng-số-phân-phối/) nơi một đồng tiền quan trọng hơn đối với một hộ gia đình nghèo hơn so với một hộ gia đình giàu hơn.

Nơi SCBA đổ vỡ chính xác là nơi các nhà phê bình của nó kỳ vọng: các hàng hóa không có tương tự thị trường — không khí sạch, sự gắn kết xã hội, giá trị của một mạng sống được cứu — phải được tiền hóa sử dụng các phương pháp [stated preference](../định-giá-stated-preference/) hoặc [revealed preference](../định-giá-revealed-preference/), hoặc một [giá bóng](../giá-bóng/) phải được xây dựng. Khi việc tiền hóa bị tranh cãi hơn là chỉ khó khăn, Green Book bản thân nó khuyến nghị quay lại [phân tích hiệu quả chi phí](../phân-tích-hiệu-quả-chi-phí-trong-chính-phủ/) hoặc [phân tích quyết định đa tiêu chí](../phân-tích-quyết-định-đa-tiêu-chí/) thay vì ép buộc một con số không ai tin.

## Cách tính toán

```
NPSV = Σ [t=0 đến T] (Lợi ích_t − Chi phí_t) / (1 + r)^t

trong đó:
  Lợi ích_t = tất cả lợi ích tiền hóa trong năm t, bao gồm hàng
              hóa không-thị-trường được định giá qua stated/
              revealed preference hoặc giá bóng
  Chi phí_t = tất cả chi phí tiền hóa trong năm t, bao gồm chi
              phí cơ hội của nguồn lực (xem ../opportunity-
              cost-in-public-spending/)
  r         = tỷ lệ chiết khấu xã hội (HM Treasury đặt 3,5%
              giảm xuống các tỷ lệ thấp hơn sau năm 30, theo
              Phụ lục A của Green Book)
  T         = kỳ đánh giá

Tỷ lệ lợi ích-chi phí (BCR) = Σ GTHT(Lợi ích) / Σ GTHT(Chi phí)
```

Một BCR trên 1 (hoặc NPSV trên không) cho thấy giá trị xã hội thuần. Các danh mục giá trị đồng tiền của Green Book (như được sử dụng trong đánh giá giao thông và hạ tầng) gán nhãn các phạm vi BCR: dưới 1,0 là giá trị đồng tiền kém, 1,0–1,5 là thấp, 1,5–2,0 là trung bình, 2,0–4,0 là cao, và trên 4,0 là rất cao. Phân tích độ nhạy — chạy lại NPSV dưới các giả định bi quan và lạc quan — là bắt buộc, không phải tùy chọn, vì các lợi ích không-thị-trường tiền hóa mang theo các dải không chắc chắn rộng.

## Ví dụ minh họa

**Chính quyền địa phương**: một hội đồng đánh giá một đầu tư £3tr vào một mạng lưới đi xe đạp và đi bộ mới trong một kỳ đánh giá 20 năm ở tỷ lệ chiết khấu 3,5%.

```
Chi phí: £3tr vốn trong năm 0, £50.000/năm duy trì (năm 1-20)
GTHT(duy trì) ≈ £50.000 × 14,2 (hệ số niên kim 20 năm ở 3,5%)
≈ £710.000
Tổng GTHT(chi phí) ≈ £3,71tr

Lợi ích (tất cả tiền hóa qua các công cụ định giá DfT/WHO
được công bố):
  Lợi ích sức khỏe từ hoạt động thể chất tăng: £180.000/năm
  Giảm vắng mặt: £40.000/năm
  Giảm tắc nghẽn (ít chuyến xe hơi): £60.000/năm
  Tổng luồng lợi ích: £280.000/năm
GTHT(lợi ích) ≈ £280.000 × 14,2 ≈ £3,98tr

NPSV = £3,98tr − £3,71tr = +£0,27tr
BCR = 3,98 / 3,71 = 1,07 → giá trị đồng tiền "thấp"
```

Kế hoạch vượt qua mức nhưng chỉ vừa đủ; một lần chạy độ nhạy ở ước tính lợi ích sức khỏe thấp hơn 20% (phản ánh sự không chắc chắn thực sự trong việc định giá hoạt động thể chất) đảo BCR xuống dưới 1,0, chính xác là lý do tại sao Green Book yêu cầu bảng độ nhạy phải được công bố cùng với con số tiêu đề, không chỉ ước tính trung tâm.

**Tổ chức từ thiện**: một chương trình phòng chống tử vong trẻ sơ sinh tốn £500.000/năm được đánh giá sử dụng giá trị của một mạng sống thống kê (VSL) — một giá bóng, không phải giá thị trường quan sát được — khoảng £2,1tr (con số được cập nhật năm 2023 của HM Treasury, bản thân nó được suy ra từ các nghiên cứu stated-preference). Tránh được một ca tử vong trẻ sơ sinh mỗi năm so với chi phí £500.000 cho một BCR 4,2, giá trị đồng tiền "rất cao" thoải mái — nhưng toàn bộ kết quả dựa trên con số VSL, đó là lý do tại sao bất kỳ SCBA nào sử dụng VSL phải tiết lộ nó như một giả định, không phải một sự thật.

## Liên hệ với phát triển phần mềm

SCBA là khung tự nhiên cho các quyết định đầu tư nền tảng và hạ tầng trong phần mềm chính phủ — so sánh một nền tảng danh tính chia sẻ với các giải pháp điểm bộ phận, ví dụ, yêu cầu tiền hóa các lợi ích như giảm chi phí đăng ký trùng lặp, giảm gian lận, và thời gian-đến-dịch-vụ nhanh hơn không có giá thị trường riêng của chúng. Các kỹ sư xây dựng dịch vụ cơ bản nên kỳ vọng các trưởng chương trình yêu cầu các đầu vào cho phân tích này: chi phí đơn vị của các giao dịch (xem [chi phí mỗi giao dịch](../chi-phí-mỗi-giao-dịch/)), khối lượng dự kiến, và chi phí suy giảm/ngừng hoạt động. Kỷ luật quan trọng nhất cần nhập: chiết khấu lợi ích tương lai, nêu rõ đường cơ sở đối chiếu thực tế một cách rõ ràng (xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/)), và không bao giờ trình bày một ước tính điểm đơn lẻ mà không có phạm vi độ nhạy của nó.

## Những cạm bẫy

- **Đếm hai lần lợi ích.** Đếm cả "thời gian tiết kiệm" và "năng suất đạt được từ thời gian đó" như các dòng lợi ích riêng biệt thổi phồng trường hợp; thời gian tiết kiệm là lợi ích, cách sử dụng hạ nguồn của nó không phải là một lợi ích bổ sung trừ khi được chứng minh độc lập.
- **Bỏ qua chi phí bị thay thế.** Một kế hoạch di chuyển tắc nghẽn từ một con đường sang con đường khác, hoặc di chuyển gian lận từ một kênh sang kênh khác, không tạo ra lợi ích thuần mà NPSV tiêu đề của nó ngụ ý — xem [sự thay thế và quy kết](../sự-thay-thế-và-quy-kết/).
- **Sử dụng một tỷ lệ chiết khấu tư nhân.** Áp dụng một chi phí vốn thương mại (giả sử 8–10%) thay vì tỷ lệ chiết khấu xã hội có hệ thống đánh giá thấp các lợi ích công dài hạn như sức khỏe và lợi ích môi trường — xem [tỷ lệ chiết khấu xã hội](../tỷ-lệ-chiết-khấu-xã-hội/).
- **Tiền hóa những gì không gây tranh cãi và vẫy tay qua những gì gây tranh cãi.** Nếu hai phần ba lợi ích của một đề xuất là một khoản tiết kiệm hiệu quả được tiền hóa một cách tự tin và một phần ba là một khoản lợi ích phúc lợi được tiền hóa một cách lung lay, NPSV tiêu đề âm thầm trộn một con số cứng với một con số mềm; báo cáo chúng riêng biệt.

## Nguồn tham khảo

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
