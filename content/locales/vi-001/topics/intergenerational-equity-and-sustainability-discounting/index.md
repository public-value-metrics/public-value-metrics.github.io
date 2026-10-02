# Công bằng liên thế hệ và chiết khấu bền vững

Chiết khấu các chi phí và lợi ích tương lai trở lại giá trị hiện tại là thực hành tiêu chuẩn trong đánh giá công — xem [tỷ lệ chiết khấu xã hội](../social-discount-rate/) — nhưng bất kỳ tỷ lệ chiết khấu dương nào, được gộp lãi qua các thập kỷ hoặc thế kỷ, co lại tương lai xa hướng về không trong các thuật ngữ hôm nay. Đối với các quyết định có các hệ quả một thế kỷ hoặc hơn ra ngoài — biến đổi khí hậu, chất thải hạt nhân, mất đa dạng sinh học, tính bền vững lương hưu — sự thực toán học đó trở thành một sự thực đạo đức: chiết khấu tiêu chuẩn có thể làm cho thiệt hại thảm khốc đối với các thế hệ tương lai xuất hiện, về thuật ngữ giá trị hiện tại, hầu như không đáng tránh.

## Tại sao điều này quan trọng

Phương trình Ramsey, được suy ra bởi Frank Ramsey năm 1928, phân rã tỷ lệ chiết khấu thành hai thành phần: ưu tiên thời gian thuần túy (δ, chúng ta ưu tiên hiện tại so với sau bao nhiêu, độc lập với sự giàu có) và hiệu ứng tăng-trưởng-giàu-có (η×g, chúng ta chiết khấu bao nhiêu vì các thế hệ tương lai được kỳ vọng giàu hơn, vì vậy một đồng tiền bổ sung ít quan trọng hơn đối với họ). Tỷ lệ chiết khấu dài-hạn tiêu chuẩn của Green Book Anh được xây dựng trên phương trình này và theo một lịch trình *giảm dần* thay vì một tỷ lệ cố định — một thiết kế bắt nguồn từ công việc của Martin Weitzman về "chiết khấu gamma," thể hiện rằng khi tỷ lệ chiết khấu tương lai bản thân nó không chắc chắn, tỷ lệ tương-đương-chắc-chắn bạn nên áp dụng về mặt toán học giảm theo thời gian, vì các kịch bản tỷ-lệ-thấp đến chi phối khi bạn nhìn xa hơn. Stern Review on the Economics of Climate Change (2006), được dẫn dắt bởi Sir Nicholas Stern, đưa cuộc tranh luận đạo đức xa hơn: Stern lập luận rằng ưu tiên thời gian thuần túy nên được đặt gần không (ông sử dụng δ ≈ 0,1%, phản ánh chỉ xác suất nhỏ của thảm họa chấm-dứt-văn-minh, không phải một ưu tiên thực sự cho hiện tại so với tương lai), sản xuất một tỷ lệ chiết khấu hiệu quả thấp hơn nhiều so với thực hành Green Book thông thường và, tương ứng, một trường hợp hiện-tại lớn hơn nhiều cho hành động khí hậu. Các nhà phê bình (đáng chú ý là William Nordhaus) lập luận rằng tỷ lệ gần-không của Stern đáng bảo vệ về đạo đức nhưng không nhất quán với hành vi tiết kiệm và đầu tư quan sát thực tế. Sự bất đồng không phải là một chú thích kỹ thuật — nó là lý do đơn lẻ lớn nhất hai nhà kinh tế học chặt chẽ bằng nhau có thể đạt đến các kết luận hoang dã khác nhau về việc thế hệ hiện tại nên hy sinh bao nhiêu cho tương lai, và nó là lý do phần mềm hỗ trợ đánh giá đầu tư công chân-trời-dài phải phơi bày các giả định chiết khấu của nó thay vì chôn chúng trong một mặc định bảng tính.

## Cách tính toán

```
Phương trình Ramsey:   r = δ + η·g

  r = tỷ lệ chiết khấu xã hội
  δ = ưu tiên thời gian thuần túy (tỷ lệ thiếu kiên nhẫn,
      độc lập với sự giàu có)
  η = độ đàn hồi của tiện ích biên của tiêu dùng (giá trị
      giảm dần của tiêu dùng bổ sung khi mọi người giàu hơn)
  g = tỷ lệ tăng trưởng tiêu dùng mỗi đầu người dự kiến

Lịch trình dài-hạn giảm dần của Green Book (khoảng, các băng
được công bố hiện tại):
  Năm 0–30:    3,5%
  Năm 31–75:   3,0%
  Năm 76–125:  2,5%
  Năm 126–200: 2,0%
  Năm 201–300: 1,5%
  Năm 301+:    1,0%

Các tham số Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3% → r ≈
1,4%
```

## Ví dụ minh họa

**Giá trị hôm nay của £1 thiệt hại tránh được trong 100 năm**, dưới ba chế độ chiết khấu:

```
Tỷ lệ cố định ngắn-hạn Green Book (3,5%, giữ không đổi cho
100 năm):
  GTHT = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Lịch trình giảm dần Green Book (3,5% cho năm 1–30, 3,0% cho
năm 31–75, 2,5% cho năm 76–100):
  hệ số(1–30)  = 1,035^30  ≈ 2,807
  hệ số(31–75) = 1,03^45   ≈ 3,782
  hệ số(76–100)= 1,025^25  ≈ 1,854
  tổng hệ số ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  GTHT = 1 / 19,68 ≈ £0,051   (5,1 pence)

Ưu tiên thời gian thuần túy gần-không kiểu Stern (r ≈ 1,4%
cố định):
  GTHT = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Cùng £1 thiệt hại được tránh một thế kỷ từ hiện tại đáng giá 3,2p, 5,1p, hoặc 25p hôm nay hoàn toàn phụ thuộc vào quy ước chiết khấu nào được sử dụng — một phạm vi gần-tám-lần quyết định liệu một dự án giảm thiểu khí hậu với chi phí trả-trước cao và lợi tức một thế kỷ ra ngoài vượt qua một lát NPV-dương hay không. Đây là cơ chế đằng sau cảnh báo trung tâm của chương: ở bất kỳ tỷ lệ cố định có-ý-nghĩa-dương nào, thiệt hại tương lai đủ xa bị xóa bằng số học từ đánh giá, bất kể mức độ nghiêm trọng thực sự của nó.

## Liên hệ với phát triển phần mềm

- Bất kỳ công cụ đánh giá hoặc trường hợp kinh doanh chân-trời-dài (hạ tầng, thích ứng khí hậu, mô hình hóa lương hưu) nên triển khai lịch trình *giảm dần* của Green Book, không phải một tỷ lệ cố định đơn lẻ — một mặc định tỷ-lệ-cố-định âm thầm nhúng một thiên vị anti-tương-lai mạnh hơn nhiều so với hướng dẫn chính phủ Anh hiện tại chỉ định.
- Tỷ lệ chiết khấu và chân trời luôn nên được phơi bày như các tham số hiển thị, có thể kiểm toán trong phần mềm đánh giá, với độ nhạy của phép tính đối với chúng được thể hiện rõ ràng (như trong ví dụ minh họa trên) — chôn tỷ lệ trong một tệp cấu hình mời chính xác "sự lựa chọn đạo đức ẩn" mà cuộc tranh luận Stern-Nordhaus cảnh báo về.
- Nơi các lợi ích của một chương trình rõ ràng là liên thế hệ (bảo vệ lũ lụt, phục hồi vốn tự nhiên, hạ tầng số dài-hạn), một [phân tích chi phí-lợi ích xã hội](../social-cost-benefit-analysis/) nên báo cáo các kết quả dưới ít nhất hai giả định chiết khấu (chuẩn Green Book và một trường hợp độ-nhạy tỷ-lệ-thấp) thay vì một ước tính điểm đơn lẻ.

## Những cạm bẫy

- **Trình bày một NPV được chiết khấu đơn lẻ không có phạm vi độ nhạy** — cho rằng tỷ lệ chiết khấu một mình thay đổi câu trả lời nhiều cho các dự án chân-trời-dài, một NPV tỷ-lệ-đơn thổi phồng độ chính xác đáng kể; luôn báo cáo một phạm vi bao gồm ít nhất chuẩn Green Book và một kịch bản tỷ-lệ-thấp.
- **Áp dụng tỷ lệ cố định ngắn-hạn (3,5%) cho một đánh giá đa-thế-kỷ** — hướng dẫn riêng của Green Book chỉ định lịch trình giảm dần chính xác vì tỷ lệ cố định được đánh giá là không phù hợp sau khoảng 30 năm; sử dụng nó dù sao trình bày sai chi phí dài-hạn.
- **Coi δ (ưu tiên thời gian thuần túy) là một tham số hoàn toàn kỹ thuật** — giá trị gần-không của Stern và giá trị ngầm cao hơn của Green Book cả hai chỉ đáng bảo vệ như các vị trí đạo đức về việc hiện tại nợ tương lai bao nhiêu trọng lượng, không phải các con số thực nghiệm "đúng" hoặc "sai"; phần mềm nên làm cho giả định hiển thị thay vì trình bày một con số như khách quan đúng.

## Nguồn tham khảo

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
