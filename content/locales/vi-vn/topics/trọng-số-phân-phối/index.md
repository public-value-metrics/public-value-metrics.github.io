# Trọng số phân phối

Trọng số phân phối điều chỉnh giá trị tiền tệ của một chi phí hoặc lợi ích theo người nhận nó, trên nguyên tắc rằng một đồng tiền thêm có giá trị hơn đối với một hộ gia đình nghèo so với một hộ gia đình giàu. Green Book của HM Treasury cung cấp một phương pháp rõ ràng để áp dụng trọng số này, được xây dựng trên tiện ích biên giảm dần của thu nhập, để các đánh giá không âm thầm coi một đồng tiền thu được bởi nhóm thập phân vị giàu nhất là bằng giá trị với một đồng tiền thu được bởi nhóm nghèo nhất.

## Tại sao điều này quan trọng

Phân tích chi phí-lợi ích chuẩn tổng hợp các đồng tiền mà không hỏi đó là tiền của ai, điều này ngầm giả định rằng một đồng tiền có giá trị như nhau đối với mọi người — một giả định mà các nhà kinh tế học từ lâu đã biết là sai. Một hộ gia đình kiếm được £15.000/năm trải nghiệm một khoản thu £1.000 rất khác với một hộ gia đình kiếm được £150.000/năm, vì tiện ích biên của thu nhập giảm khi thu nhập tăng. Nếu không được tính trọng số, đánh giá chuẩn có hệ thống ưu ái các can thiệp mang lại lợi ích cho các nhóm giàu hơn, đã khá giả hơn, vì khả năng chi tiêu cao hơn của họ thổi phồng việc định giá tiền tệ của các lợi ích đến với họ (một bản nâng cấp công viên gần nhà ở đắt đỏ "cho thấy" một lợi ích giá trị tài sản lớn hơn so với bản nâng cấp tương tự gần nhà ở rẻ, hoàn toàn vì giá cao hơn, không phải vì lợi ích phúc lợi lớn hơn).

Hướng dẫn bổ sung của Green Book về phân tích phân phối, được củng cố sau khi đánh giá năm 2020 của Treasury phản hồi lại sự chỉ trích rằng phương pháp đánh giá có hệ thống ưu ái London và Đông Nam, đặt ra một phương pháp tính trọng số chính thức dựa trên một độ đàn hồi giả định của tiện ích biên thu nhập khoảng 1,3 — có nghĩa là việc gấp đôi thu nhập giảm khoảng một nửa (cụ thể, 2^-1,3 ≈ 0,41 lần) giá trị biên của một đồng tiền bổ sung. Đây không phải là một điều chỉnh làm tròn: việc áp dụng nó có thể thay đổi chương trình nào trong hai chương trình cạnh tranh cho thấy giá trị hiện tại thuần cao hơn, đặc biệt khi so sánh một can thiệp tập trung ở một khu vực nghèo với một can thiệp trải rộng trên dân số nói chung.

## Cách tính toán

Trọng số phân phối của Green Book cho một đồng lợi ích tích lũy cho một hộ gia đình ở mức thu nhập y, so với một đồng ở mức thu nhập trung bình quốc gia ȳ:

```
Trọng số(y) = (ȳ / y)^e

trong đó:
  y  = thu nhập hộ gia đình (hoặc thu nhập của nhóm bị ảnh hưởng)
  ȳ  = thu nhập hộ gia đình trung bình (tham chiếu)
  e  = độ đàn hồi của tiện ích biên thu nhập (Green Book: khoảng
       1,3)
```

Áp dụng trọng số cho lợi ích thuần:

```
Lợi ích có trọng số = Σ [lợi ích không trọng số cho nhóm i ×
                       Trọng số(y_i)]
```

Một nhóm kiếm được một nửa mức trung bình quốc gia (y = 0,5ȳ) có trọng số (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — mỗi đồng lợi ích cho nhóm đó được tính là có giá trị khoảng 2,46 lần một đồng cho một hộ gia đình thu nhập trung bình.

## Ví dụ minh họa

**Hai chương trình địa phương cạnh tranh**, mỗi chương trình có lợi ích thuần không trọng số £2 triệu/năm, cạnh tranh cho cùng quỹ tăng trưởng khu vực:

- *Chương trình A*: một kế hoạch hỗ trợ doanh nghiệp ở một thị trấn thịnh vượng, thu nhập hộ gia đình trung bình £45.000 (khoảng 1,3× mức trung bình quốc gia giả định £35.000).
- *Chương trình B*: một chương trình kỹ năng ở một khu vực nghèo, thu nhập hộ gia đình trung bình £18.000 (khoảng 0,51× mức trung bình quốc gia).

```
Trọng số(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Trọng số(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Lợi ích có trọng số A = £2.000.000 × 0,72 = £1,44 triệu
Lợi ích có trọng số B = £2.000.000 × 2,53 = £5,06 triệu
```

Không trọng số, hai chương trình ngang nhau. Có trọng số cho tác động phân phối, lợi ích của Chương trình B lớn hơn gấp ba lần — một kết quả đảo ngược đề xuất tài trợ và phản ánh mục đích rõ ràng của Green Book trong việc yêu cầu trọng số phải được hiển thị, không chỉ là tỷ lệ lợi ích-chi phí không trọng số.

**Phân bổ tài trợ từ thiện**: một nhà tài trợ so sánh một khoản tài trợ £500.000 đến với 1.000 hộ gia đình thu nhập thấp (trọng số ≈ 2,0, giá trị có trọng số tương đương £1 triệu) so với cùng £500.000 đến với 1.000 hộ gia đình thu nhập trung bình (trọng số ≈ 1,0, giá trị có trọng số tương đương £500.000) nên hiển thị trường hợp phân phối một cách rõ ràng trong tài liệu hội đồng của mình, không để nó phải được suy ra.

## Liên hệ với phát triển phần mềm

Trọng số phân phối hiếm khi xuất hiện trực tiếp trong các chỉ số cung cấp phần mềm, nhưng nó nên định hình cách các nhóm kỹ thuật và dữ liệu thiết kế đo lường và nhắm mục tiêu:

- Khi xây dựng một bảng điều khiển tác động hoặc công cụ tính lợi ích, hãy phơi bày hồ sơ thu nhập hoặc nghèo đói của những người bị ảnh hưởng, không chỉ tổng lợi ích tổng hợp — các số liệu tổng hợp không có phân tích phân phối sẽ che giấu chính xác sự đảo ngược được thể hiện trên.
- Liên kết logic nhắm mục tiêu trong thiết kế dịch vụ với cùng dữ liệu nghèo đói mà Green Book sử dụng — xem [Chỉ số Nghèo đói Đa chiều](../chỉ-số-nghèo-đói-đa-dạng/) — để phạm vi tiếp cận của một dịch vụ số có thể được đánh giá về sự công bằng, không chỉ hiệu quả (E thứ tư gây tranh cãi trong [giá trị đồng tiền](../giá-trị-đồng-tiền/)).
- Khi một thuật toán phân bổ một nguồn lực khan hiếm (các khe hẹn, thời gian nhân viên xử lý trường hợp, một khoản trợ cấp), một hàm mục tiêu "tối đa hóa tổng lợi ích" không trọng số sẽ, theo cấu trúc, tái tạo chính xác sự thiên vị mà trọng số của Green Book tồn tại để sửa chữa — hãy gắn cờ điều này một cách rõ ràng cho các chủ sở hữu chính sách trước khi tối ưu hóa.

## Những cạm bẫy

- **Áp dụng trọng số phân phối không nhất quán trên một danh mục đầu tư.** Tính trọng số lợi ích của một chương trình nhưng không phải chương trình so sánh của nó tạo ra một sự so sánh thiên vị, không công bằng hơn; Green Book yêu cầu xử lý giống-với-giống.
- **Sử dụng giá trị tài sản hoặc thị trường làm proxy cho phúc lợi mà không điều chỉnh.** Giá thị trường bản thân đã bị bóp méo bởi sự bất bình đẳng thu nhập hiện có, chính xác là điều mà trọng số phân phối nhằm sửa chữa — sử dụng giá trị thị trường không điều chỉnh có thể đếm hai lần sự thiên vị.
- **Bỏ qua sự biến đổi trong nhóm.** Tính trọng số theo thu nhập trung bình khu vực (ví dụ: một thập phân vị của Chỉ số Nghèo đói Đa chiều) có thể trình bày sai các cá nhân không khớp với mức trung bình khu vực của họ; sử dụng dữ liệu thu nhập chi tiết nhất có sẵn một cách hợp lý.
- **Coi độ đàn hồi 1,3 là một hằng số phổ quát.** Green Book tự ghi nhận đây là một ước tính với một phạm vi hợp lý; kiểm tra độ nhạy các quyết định lớn với các độ đàn hồi thay thế thay vì coi 1,3 là chính xác.

## Nguồn tham khảo

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
