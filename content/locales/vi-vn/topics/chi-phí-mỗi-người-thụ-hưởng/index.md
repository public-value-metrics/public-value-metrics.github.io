# Chi phí mỗi người thụ hưởng

Chi phí mỗi người thụ hưởng là tổng chi phí chương trình chia cho số người duy nhất đã nhận một dịch vụ — bất kỳ ai được tiếp cận, bất kể hoàn cảnh của họ có thực sự thay đổi hay không. Đó là con số hiệu quả nhanh nhất mà một tổ chức có thể sản xuất, vì "chúng ta đã phục vụ ai" hầu như luôn đã có trong hệ thống quản lý trường hợp, trong khi "ai đã được giúp đỡ" thường thì không.

## Tại sao điều này quan trọng

Các nhà tài trợ liên tục yêu cầu chi phí mỗi người thụ hưởng, và vì các lý do đáng bảo vệ: nó có sẵn ngay lập tức, nó có thể so sánh được trên một danh mục đầu tư của các chương trình rất khác nhau, và nó trung thực về phạm vi tiếp cận theo một cách mà các tuyên bố kết quả — mất nhiều thời gian hơn để xác minh và dễ hơn để thổi phồng — không phải. Charities SORP (Statement of Recommended Practice) của Anh, chi phối cách các tổ chức từ thiện báo cáo theo FRS 102, yêu cầu các báo cáo hàng năm của các ủy viên quản trị mô tả các thành tích so với các mục tiêu, nhưng các tài khoản quản lý của hầu hết các tổ chức từ thiện nhỏ hơn vẫn mặc định thành chi phí đơn vị dựa-trên-phạm-vi-tiếp-cận vì chúng rẻ để sản xuất và thân thiện-kiểm-toán.

Nguy cơ là coi chi phí mỗi người thụ hưởng như thể nó trả lời câu hỏi mà nó không thể trả lời: liệu tiền có hoạt động hay không. Xem [chi phí mỗi kết quả](../chi-phí-mỗi-kết-quả/) cho chỉ số thực sự trả lời điều đó, và [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/) cho sự phân biệt nền tảng. Chi phí mỗi người thụ hưởng là một chỉ số phân loại và phạm vi tiếp cận hợp pháp — nó nói với một nhà tài trợ tiền kéo dài bao xa — nhưng một chi phí mỗi người thụ hưởng thấp có thể có nghĩa là hiệu quả thực sự hoặc một dịch vụ mỏng đến mức nó không thay đổi gì.

## Cách tính toán

```
Chi phí mỗi người thụ hưởng = Tổng chi phí chương trình / Số
                              người duy nhất được phục vụ

Đối chiếu:
Chi phí mỗi kết quả           = Tổng chi phí chương trình / Số
                              người đạt được kết quả được xác
                              định

Chi phí mỗi người thụ hưởng luôn ≤ chi phí mỗi kết quả, vì
dân số kết quả là một tập con (thường nhỏ) của dân số người
thụ hưởng.
```

## Ví dụ minh họa

**Ngân hàng thực phẩm, cùng năm như ví dụ chi-phí-mỗi-kết-quả**:

- Tổng chi phí chương trình: £450.000
- Các hộ gia đình duy nhất được phục vụ (ba-cộng gói): 1.800

```
Chi phí mỗi người thụ hưởng = £450.000 / 1.800 = £250 mỗi hộ
gia đình được phục vụ
```

So sánh hai chỉ số cạnh nhau:

| Chỉ số | Mẫu số | Kết quả |
|---|---|---|
| Chi phí mỗi người thụ hưởng | 1.800 hộ gia đình được phục vụ | £250 |
| Chi phí mỗi kết quả | 630 hộ gia đình đạt được an ninh thực phẩm | £714 |

Một nhà tài trợ chỉ thấy £250 có thể kết luận đây là một tổ chức từ thiện rất hiệu quả. Một nhà tài trợ thấy cả hai con số có thể hỏi câu hỏi hữu ích hơn: khoảng cách giữa phạm vi tiếp cận (1.800) và kết quả (630) là một khoảng trống thu thập dữ liệu, một khoảng trống thiết kế, hay một sự phản ánh trung thực về việc an ninh thực phẩm khó đạt được như thế nào chỉ với viện trợ thực phẩm?

**Tổ chức từ thiện đào tạo việc làm, minh họa**: chi phí mỗi người thụ hưởng (đăng ký) = £2.000; chi phí mỗi kết quả (việc làm bền vững sau 6 tháng) = £11.000, vì chỉ 18% người đăng ký hoàn thành chương trình và tìm được việc bền vững. Hai con số khác nhau với một hệ số năm là phổ biến ở bất cứ đâu tỷ lệ hoàn thành hoặc độ bền thấp — một tổ chức từ thiện đào tạo và một ngân hàng thực phẩm giống nhau về cấu trúc ở đây.

## Liên hệ với phát triển phần mềm

Chi phí mỗi người thụ hưởng là chỉ số mặc định trong phần mềm phi lợi nhuận vì nó là chỉ số rơi ra từ một hồ sơ người thụ hưởng mà không cần công việc thêm: tạo một trường hợp, ghi một dịch vụ, đếm các dòng. Xây dựng một hệ thống cũng hỗ trợ chi phí mỗi kết quả có nghĩa là có chủ ý thêm một thực thể hàng đầu thứ hai — một sự kiện kết quả, có ngày và được xác định độc lập với việc cung cấp dịch vụ — và chống lại sự cám dỗ để "trường hợp đóng" đứng cho "kết quả đạt được." Khi xác định phạm vi của một nền tảng quản lý tài trợ hoặc CRM, hỏi chỉ số nào trong hai chỉ số mà mỗi bảng điều khiển thực sự đang hiển thị, và gắn nhãn tương ứng; trộn lẫn chúng trong một ô "tác động" đơn lẻ là một trong những nguyên nhân cấp-phần-mềm phổ biến nhất của các cạm bẫy dưới đây. Xem [cơ sở dữ liệu chi phí đơn vị](../cơ-sở-dữ-liệu-chi-phí-đơn-vị/) để benchmark cho cả hai chỉ số một khi chúng được gắn nhãn đúng.

## Những cạm bẫy

- **Trình bày chi phí mỗi người thụ hưởng như tác động.** Nó đo phạm vi tiếp cận, không phải thay đổi. Gắn nhãn các bảng điều khiển và báo cáo "chi phí mỗi người được phục vụ," không phải "chi phí mỗi người được giúp đỡ."
- **Đếm hai lần qua các chương trình.** Một người nhận cả gói thực phẩm và tư vấn nợ từ cùng tổ chức từ thiện là một người thụ hưởng, không phải hai, nếu mẫu số được dùng để mô tả phạm vi tiếp cận duy nhất; quyết định và ghi lại quy ước nào được sử dụng.
- **Coi một số thấp hơn luôn tốt hơn.** Một câu lạc bộ ăn trưa ghé qua sẽ luôn thắng một dịch vụ quản lý trường hợp chuyên sâu trên chi phí mỗi người thụ hưởng, vì nó tốn ít hơn để chạm nhẹ vào ai đó. Điều đó không nói gì về cái nào sản xuất thay đổi bền vững hơn mỗi đồng tiền.
- **Âm thầm trao đổi mẫu số giữa các báo cáo.** Một con số chi phí-mỗi-người-thụ-hưởng được trích dẫn trong một báo cáo hàng năm so với "đăng ký" và trong báo cáo tiếp theo so với "hoàn thành" không thể so sánh năm qua năm; nêu rõ mẫu số mỗi lần.

## Nguồn tham khảo

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
