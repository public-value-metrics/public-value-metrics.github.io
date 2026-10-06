# Tỷ lệ chiết khấu xã hội

Tỷ lệ chiết khấu xã hội chuyển đổi chi phí và lợi ích tương lai thành giá trị hiện tại để các chương trình có lợi tức trải rộng qua nhiều thập kỷ có thể được so sánh trên cùng một cơ sở. Green Book của HM Treasury bắt buộc một lịch trình giảm dần được cố định ở 3,5% cho 30 năm đầu tiên, dựa trên công thức Ramsey — một con số cụ thể, có thể trích dẫn đã trở thành một cuộc tranh luận chính trị và đạo đức sống động bất cứ khi nào nó được áp dụng cho các cam kết dài hạn như chính sách khí hậu hoặc hạ tầng.

## Tại sao điều này quan trọng

Một đồng lợi ích nhận được trong 30 năm không đáng giá bằng một đồng lợi ích nhận được ngày hôm nay, vì những lý do một phần liên quan đến ưu tiên thời gian thuần túy (con người và xã hội ưu tiên những điều tốt sớm hơn) và một phần liên quan đến tăng trưởng (một xã hội tương lai được kỳ vọng sẽ giàu hơn, vì vậy một đồng tiền ít quan trọng hơn đối với nó ở mức biên). Phụ lục 6 của Green Book suy ra tỷ lệ chiết khấu chuẩn của Anh từ công thức Ramsey, kết hợp một tỷ lệ ưu tiên thời gian thuần túy với tỷ lệ tăng trưởng tiêu dùng dự kiến và độ đàn hồi của tiện ích biên của tiêu dùng, tạo ra tỷ lệ công bố 3,5% mỗi năm cho các năm 0–30, giảm dần theo một lịch trình công bố cho các năm 31 trở đi (xuống tới 1% cho các năm 301+). Lịch trình này tồn tại chính xác vì một tỷ lệ 3,5% không đổi gộp lãi qua một thế kỷ sẽ làm cho gần như mọi lợi ích dài hạn — một công trình phòng chống lũ lụt cứu mạng người trong 80 năm, một sự giảm carbon tránh được thiệt hại trong 100 năm — có vẻ không đáng kể về giá trị hiện tại, điều mà Treasury đánh giá là một kết luận đạo đức không hợp lý cho các quyết định hạ tầng và môi trường thực sự có tuổi thọ dài.

Tỷ lệ chiết khấu gây tranh cãi chính xác vì sự lựa chọn không phải là một tham số kỹ thuật trung lập: nó mã hóa một đánh giá về việc một xã hội nên hy sinh bao nhiêu ngày nay cho những người chưa được sinh ra. Stern Review về Kinh tế của Biến đổi Khí hậu (2006) đã sử dụng một tỷ lệ chiết khấu gần bằng không (một ưu tiên thời gian thuần túy gần 0,1%), lập luận rằng chiết khấu phúc lợi của các thế hệ tương lai ở bất cứ điều gì gần với tỷ lệ thị trường là không thể bảo vệ về đạo đức khi tác hại (biến đổi khí hậu thảm khốc) là không thể đảo ngược. Các nhà phê bình — đáng chú ý là William Nordhaus — đã lập luận rằng tỷ lệ gần bằng không của Stern đã thổi phồng trường hợp cho chi tiêu khí hậu ngay lập tức bằng cách làm cho gần như bất kỳ chi phí hiện tại nào trông có vẻ chính đáng so với một lợi ích tương lai hầu như không bị chiết khấu. Sự bất đồng không phải là về toán học; đó là về khung đạo đức của ai nên đặt ra tỷ lệ, và nó vẫn là minh họa chuẩn cho việc tại sao tỷ lệ chiết khấu là một sự lựa chọn chính sách, không chỉ là một đầu vào bảo hiểm.

## Cách tính toán

Công thức Ramsey làm nền tảng cho tỷ lệ của Green Book:

```
r = ρ + η·g

trong đó:
  r = tỷ lệ chiết khấu xã hội
  ρ = tỷ lệ ưu tiên thời gian thuần túy (sự thiếu kiên nhẫn + rủi
      ro thảm họa)
  η = độ đàn hồi của tiện ích biên của tiêu dùng
  g = tỷ lệ tăng trưởng tiêu dùng bình quân đầu người dự kiến hàng
      năm
```

Lịch trình giảm dần của Green Book (Phụ lục 6, minh họa — kiểm tra phiên bản hiện tại để biết bảng công bố chính xác):

```
Các năm 0–30:    3,5%
Các năm 31–75:   3,0%
Các năm 76–125:  2,5%
Các năm 126–200: 2,0%
Các năm 201–300: 1,5%
Các năm 301+:    1,0%
```

Giá trị hiện tại của một tổng số tiền tương lai:

```
GTHT = GTTL / (1 + r)^t
```

## Ví dụ minh họa

**Công trình phòng chống lũ lụt**: một dự án mang lại £10 triệu thiệt hại lũ lụt tránh được trong năm thứ 40.

Sử dụng tỷ lệ cố định 3,5%: GTHT = 10.000.000 / (1,035)^40 ≈ £2,52 triệu — lợi ích có vẻ nhỏ.

Sử dụng lịch trình giảm dần của Green Book (3,5% cho các năm 0–30, 3,0% sau đó), phép tính gộp lãi ở 3,5% cho 30 năm đầu tiên và 3,0% cho các năm 31–40:

```
GTHT = 10.000.000 / [(1,035)^30 × (1,03)^10]
     = 10.000.000 / [2,807 × 1,344]
     ≈ 10.000.000 / 3,773
     ≈ £2,65 triệu
```

Lịch trình giảm dần tăng vừa phải giá trị hiện tại của các lợi ích dài hạn so với một tỷ lệ cao cố định — mục đích rõ ràng của lịch trình, vì một tỷ lệ cố định 3,5% cho một thế kỷ sẽ chiết khấu một lợi ích £100 triệu trong năm thứ 100 xuống dưới £3,3 triệu.

**Hạ tầng số**: một cuộc di chuyển đám mây chính phủ tốn £4 triệu bây giờ được kỳ vọng sẽ tránh được £500.000/năm chi phí duy trì legacy trong 15 năm. Ở 3,5%, giá trị hiện tại của khoản niên kim đó xấp xỉ £500.000 × 11,52 (hệ số niên kim 15 năm ở 3,5%) ≈ £5,76 triệu — vượt qua một cách thoải mái chi phí £4 triệu, một trường hợp giá trị hiện tại thuần dương trông sẽ yếu hơn đáng kể ở một tỷ lệ cao hơn được chọn một cách ngây thơ (ở 7%, cùng hệ số niên kim giảm xuống khoảng 9,11, cho £4,56 triệu, vẫn dương nhưng với biên lợi nhuận mỏng hơn nhiều).

## Liên hệ với phát triển phần mềm

Hầu hết các trường hợp kinh doanh phần mềm chạy trong 3–5 năm, hoàn toàn trong dải 3,5% cố định, vì vậy lịch trình giảm dần hiếm khi ảnh hưởng trực tiếp — nhưng kỷ luật nền tảng quan trọng đối với bất kỳ đầu tư công nghệ chính phủ nào có tuổi thọ tài sản dài (một nền tảng quốc gia, một chương trình hạ tầng dữ liệu, một hợp đồng nhiều thập kỷ):

- Sử dụng tỷ lệ công bố của Green Book thay vì một "tỷ lệ ngưỡng" nội bộ mượn từ tài chính tư nhân; các kiểm toán viên và người đánh giá Treasury sẽ kỳ vọng lịch trình chuẩn.
- Đối với các lợi ích được thực hiện nhiều năm sau (tiết kiệm duy trì dài hạn của một nền tảng, giá trị gộp của một hệ sinh thái dữ liệu mở — xem [giá trị dữ liệu mở](../giá-trị-dữ-liệu-mở/)), sự lựa chọn chiết khấu có thể chuyển một trường hợp kinh doanh từ dương sang âm; hãy làm cho tỷ lệ và chân trời thành các giả định rõ ràng, không bị chôn giấu làm mặc định.
- Điều này đưa trực tiếp vào [đánh giá Green Book](../đánh-giá-green-book/), mô hình năm trường hợp chính thức yêu cầu một luồng tiền chiết khấu, và vào [định giá phúc lợi](../định-giá-phúc-lợi/), nơi câu hỏi chiết khấu tương tự nảy ra cho các lợi ích phúc lợi không bằng tiền.
- Xem thêm [công bằng liên thế hệ và chiết khấu bền vững](../công-bằng-liên-thế-hệ-và-chiết-khấu-bền-vững/) cho cuộc tranh luận Stern-đối-Nordhaus được áp dụng cụ thể cho đầu tư công nghệ môi trường và khí hậu.

## Những cạm bẫy

- **Sử dụng một tỷ lệ cố định cho các chân trời rất dài.** Lịch trình giảm dần của Green Book tồn tại cụ thể vì một tỷ lệ không đổi đánh giá thấp các lợi ích thực sự có tuổi thọ dài; kiểm tra băng nào áp dụng thay vì mặc định 3,5% xuyên suốt.
- **Coi tỷ lệ chiết khấu là trung lập về đạo đức.** Tranh chấp Stern-Nordhaus cho thấy tỷ lệ mã hóa một đánh giá giá trị về các thế hệ tương lai; thay đổi nó sẽ thay đổi chương trình nào trông có vẻ chính đáng, vì vậy nó nên được nêu rõ và bảo vệ, không bị giấu trong một mặc định bảng tính.
- **Nhầm lẫn tỷ lệ chiết khấu xã hội với chi phí vốn tư nhân.** Chi phí vay mượn của chính phủ và các tỷ lệ ngưỡng khu vực tư là các khái niệm khác với tỷ lệ xã hội suy ra từ Ramsey, và việc thay thế một cái bằng cái khác trong một đánh giá công thường sẽ làm sai lệch kết quả theo hướng ưu ái lợi tức ngắn hạn.
- **Chiết khấu luồng tiền thực và danh nghĩa không nhất quán.** Tỷ lệ Green Book là một tỷ lệ thực (được điều chỉnh theo lạm phát); chiết khấu luồng tiền danh nghĩa với nó đánh giá thấp đáng kể giá trị hiện tại.

## Nguồn tham khảo

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
