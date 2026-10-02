# Sự thay thế và quy kết

Sự thay thế xảy ra khi lợi ích rõ ràng của một chương trình được đạt được bằng cách lấy hoạt động hoặc lợi ích từ nơi khác, thay vì tạo ra điều gì mới — chiến thắng của bạn là mất mát của người khác. Quy kết là câu hỏi liên quan về việc bao nhiêu phần của một kết quả quan sát được can thiệp của bạn có thể thực sự nhận công, khi các tác nhân và yếu tố khác cũng đóng góp. Cả hai đều là các điều chỉnh chuẩn trong hướng dẫn đánh giá khu vực công của Anh, cùng với trọng lượng chết và rò rỉ, và cả hai đều thường bị bỏ qua bởi các tuyên bố tác động trông mạnh hơn nhiều so với thực tế.

## Tại sao điều này quan trọng

Một kế hoạch tài trợ doanh nghiệp của một chính quyền địa phương giúp 50 cửa hàng di dời vào một khu tái sinh có thể báo cáo "50 doanh nghiệp được hỗ trợ, 200 công việc được tạo ra" — nhưng nếu các doanh nghiệp đó chỉ di chuyển từ một con phố chính lân cận thay vì mở rộng, các công việc đã bị thay thế, không được tạo ra, và hiệu ứng thuần toàn quận (hoặc toàn khu vực) có thể gần bằng không. Magenta Book của HM Treasury và Hướng dẫn Tính Bổ sung lâu đời coi sự thay thế là một khoản khấu trừ bắt buộc chính xác vì các câu chuyện thành công địa phương phổ biến ngay cả khi chúng không tạo ra lợi ích thuần quốc gia hoặc khu vực nào — giá trị chỉ đơn giản đã di chuyển, thường gây bất lợi cho khu vực hoặc tác nhân đã mất nó. Hướng dẫn đánh giá quỹ cấu trúc (được sử dụng cho các chương trình Quỹ Phát triển Khu vực EU trước đây và những người kế thừa trong nước, như Quỹ Thịnh vượng Chung Anh) chính thức hóa điều này ở ba quy mô không gian: sự thay thế địa phương (trong một thị trấn), sự thay thế khu vực (trong một khu vực), và sự thay thế quốc gia (trên toàn Anh), vì một can thiệp có thể là bổ sung ở một quy mô trong khi là sự thay thế thuần túy ở một quy mô rộng hơn — một chương trình việc làm thu hút công nhân từ một thị trấn lân cận là trung lập trên toàn quốc ngay cả khi nó trông như một thành công địa phương.

Quy kết là vấn đề anh em trong việc cung cấp nặng-về-đối-tác, hiện là chuẩn mực trong công việc dịch vụ công khu vực xã hội và liên cơ quan. Khi ba tổ chức cùng cung cấp một dịch vụ ngăn chặn vô gia cư, báo cáo hàng năm của mỗi tổ chức có thể độc lập nhận công cho cùng sự giảm người ngủ ngoài đường — tổng hợp qua các báo cáo, tác động được tuyên bố có thể vượt quá sự thay đổi thực tế được quan sát, đôi khi gấp nhiều lần. Hướng dẫn của Magenta Book về phân tích đóng góp tồn tại cụ thể vì quy kết ngẫu nhiên cho một tác nhân đơn lẻ thường không thể thực hiện được trong việc cung cấp đa cơ quan, và câu trả lời trung thực thường là "chúng tôi đã đóng góp cho kết quả này" thay vì "chúng tôi đã gây ra kết quả này."

## Cách tính toán

Sự thay thế như một phần của trình tự tác động thuần chuẩn (xem [tính bổ sung và trọng lượng chết](../additionality-and-deadweight/) cho chuỗi đầy đủ):

```
Tác động bổ sung thuần = Kết quả gộp − Trọng lượng chết − Sự
                         thay thế − Sự rò rỉ, × Số nhân

Tỷ lệ thay thế = lợi ích/hoạt động được chuyển hướng từ nơi khác
                / tổng lợi ích/hoạt động gộp quan sát được
```

Quy kết, nơi nhiều tác nhân đóng góp cho một kết quả, thường được diễn đạt như một phần đóng góp thay vì một tỷ lệ phần trăm chính xác, vì nó thường không thể được đo lường với sự chặt chẽ tương tự như sự thay thế:

```
Phần có thể quy kết ≈ f(sức mạnh của đóng góp nhân quả, đóng góp
                       của các tác nhân khác, các yếu tố ngoại
                       cảnh/bối cảnh)

Tác động được tuyên bố không bao giờ nên vượt quá:
  Σ (phần có thể quy kết của mỗi đối tác) ≤ 100% tổng kết quả
  quan sát được
```

## Ví dụ minh họa

**Khoản tài trợ tái sinh**: một kế hoạch tài trợ phố chính của một hội đồng báo cáo 200 công việc bán lẻ mới được tạo ra trong khu vực được tài trợ. Nghiên cứu khảo sát tiếp theo thấy rằng 60 trong số các công việc đó đến từ các doanh nghiệp di dời từ một con phố chính lân cận, không được tài trợ trong cùng quận, và thêm 30 đến từ các chuỗi quốc gia mở các chi nhánh sẽ mở ở đâu đó trong khu vực dù sao.

```
Công việc gộp được tuyên bố = 200
Sự thay thế địa phương = 60 (di chuyển trong quận)
Sự thay thế khu vực = 30 (sẽ mở trong khu vực dù sao)

Công việc bổ sung thuần (cấp quận) = 200 − 60 = 140
Công việc bổ sung thuần (cấp khu vực) = 200 − 60 − 30 = 110
```

Tiêu đề trung thực phụ thuộc vào quy mô địa lý mà nhà tài trợ quan tâm — một trường hợp kinh doanh của Treasury được đánh giá ở cấp quốc gia hoặc khu vực nên sử dụng 110, không phải 140 cấp quận, và chắc chắn không phải 200 thô.

**Dịch vụ vô gia cư đa cơ quan**: ba tổ chức đối tác (một hội đồng, một tổ chức từ thiện nhà ở, và một tín thác y tế) cùng cung cấp một dịch vụ giảm người ngủ ngoài đường. Số người ngủ ngoài đường trong khu vực đã giảm 30 người trong năm. Báo cáo hàng năm riêng của mỗi tổ chức tuyên bố "chúng tôi đã giảm người ngủ ngoài đường 30 người" — tổng hợp lại, ba báo cáo tuyên bố 90 người được giúp đỡ, gấp ba lần sự giảm thực tế. Một phân tích đóng góp gán cho mỗi đối tác một phần (giả sử, 40% hội đồng, 35% tổ chức từ thiện, 25% tín thác y tế, dựa trên vai trò được ghi chép và đánh giá độc lập) sẽ báo cáo tương ứng 12, 10,5, và 7,5, tổng hợp đúng thành 30 quan sát được.

## Liên hệ với phát triển phần mềm

Sự thay thế và quy kết định hình cách các hệ thống theo dõi tác động và báo cáo kết quả nên được thiết kế cho việc cung cấp đa địa điểm hoặc đa đối tác:

- Phạm vi địa lý và tổ chức nên là các trường rõ ràng, hàng đầu trong bất kỳ bảng điều khiển tác động nào — một con số được báo cáo "cho quận" và cùng con số được báo cáo "cho khu vực" là các số khác nhau, và một hệ thống nhầm lẫn chúng sẽ tạo ra các số không thể đối chiếu ở cấp danh mục đầu tư.
- Nơi nhiều đối tác cùng cung cấp, một hệ thống kết quả nên ghi lại các phần đóng góp (hoặc ít nhất đánh dấu quy kết chung) thay vì để mỗi module báo cáo của đối tác độc lập tuyên bố 100% của một kết quả chung — nếu không các tổng hợp cấp danh mục đầu tư sẽ thổi phồng tổng tác động, đôi khi rất nghiêm trọng.
- Điều này kết nối với [lợi tức xã hội trên đầu tư](../social-return-on-investment/) và [báo cáo kết quả tài trợ](../grant-outcomes-reporting/): một tính toán SROI hoặc IRIS+ bỏ qua sự thay thế hoặc quy kết quá mức các kết quả chung sẽ tạo ra một tỷ lệ bị thổi phồng không chịu được kiểm toán hoặc sao chép.

## Những cạm bẫy

- **Báo cáo thành công địa phương mà không kiểm tra sự thay thế rộng hơn.** Một chương trình có thể trông rất thành công ở quy mô báo cáo nhỏ nhất trong khi trung lập hoặc thậm chí tiêu cực ở một quy mô rộng hơn; luôn nêu rõ quy mô địa lý mà con số thuần áp dụng.
- **Để mỗi đối tác trong việc cung cấp chung nhận công đầy đủ.** Trừ khi các phần đóng góp được thỏa thuận và ghi chép, báo cáo tổng hợp qua các đối tác sẽ thổi phồng tổng tác động — kiểm tra rằng các tuyên bố cấp đối tác tổng hợp không vượt quá tổng quan sát được.
- **Coi quy kết là một tỷ lệ phần trăm chính xác khi nó thực sự là một đánh giá.** Phân tích đóng góp, không như một đối chiếu thực tế ngẫu nhiên, tạo ra một ước tính đáng bảo vệ, không phải một sự thật đo lường được; trình bày nó với sự không chắc chắn phù hợp thay vì độ chính xác giả.
- **Bỏ qua sự thay thế trong các can thiệp hướng-thị-trường.** Hỗ trợ doanh nghiệp, các kế hoạch việc làm, và tái sinh dựa-trên-địa-điểm là các loại thay thế-cao kinh điển; coi việc kiểm tra sự thay thế là bắt buộc cho những điều này, không phải tùy chọn.

## Nguồn tham khảo

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
