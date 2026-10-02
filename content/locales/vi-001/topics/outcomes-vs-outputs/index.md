# Kết quả so với đầu ra

Một đầu ra là sản phẩm trực tiếp, có thể đếm được của một hoạt động — nó tồn tại ngay khi việc cung cấp xảy ra, bất kể hiệu ứng nó có. Một kết quả là sự thay đổi theo sau cho con người, nơi, hoặc hệ thống liên quan. "500 người tham dự một hội thảo tìm việc" là một đầu ra: nó đúng ngay cả khi không ai trong số họ tìm được việc. "Cơ hội việc làm của 500 người được cải thiện" là một tuyên bố kết quả, và nó yêu cầu bằng chứng về sự thay đổi, không chỉ bằng chứng về sự tham dự — sự nhầm lẫn tạo ra nhiều báo cáo tài trợ gây hiểu lầm hơn gần như bất kỳ lỗi đo lường khác trong ngành.

## Tại sao điều này quan trọng

Magenta Book của HM Treasury và các nhà tài trợ như National Lottery Community Fund cả hai yêu cầu báo cáo kết quả cụ thể vì đầu ra là những gì các chương trình báo cáo theo mặc định: chúng rẻ để đếm, luôn có sẵn, và luôn trông tích cực. Một số đầu ra theo nghĩa đen không thể giảm xuống như một kết quả của chương trình thất bại — nhiều phiên được cung cấp hơn luôn là "nhiều hơn", trong khi một kết quả có thể tiết lộ một chương trình không hoạt động. National Audit Office đã nhiều lần phê bình các chương trình chính phủ vì báo cáo mức độ hoạt động như thể chúng là bằng chứng thành công; một hệ thống phần mềm chỉ làm cho đầu ra dễ báo cáo củng cố điều này theo mặc định, vì đầu ra không yêu cầu thu thập dữ liệu theo dõi và kết quả thì có.

## Cách tính toán

Không có công thức, nhưng có một kiểm tra đáng tin cậy để phân loại một chỉ số:

```
Kiểm tra đầu ra:  nó có thể đếm được tại điểm cung cấp, đúng
                 ngay cả khi người nhận không bị ảnh hưởng
                 không?
Kiểm tra kết quả: nó có yêu cầu một so sánh trước/sau hoặc
                 với/không-có để có ý nghĩa không?

Nếu một con số có thể đúng với lợi ích bằng không cho bất kỳ
ai, đó là một đầu ra.
```

Điều này nằm trong chuỗi [mô hình logic](../logic-model/) rộng hơn và phụ thuộc vào các liên kết kết quả được xác định trong một [lý thuyết thay đổi](../theory-of-change/); việc chuyển một kết quả thành tiền sử dụng các phương pháp trong [lợi tức xã hội trên đầu tư](../social-return-on-investment/).

## Ví dụ minh họa

**Chính quyền địa phương (hỗ trợ việc làm)**: đầu ra — 500 người tham dự các hội thảo tìm việc. Kết quả — ở theo dõi 12 tháng, 140 của 500 người đó (28%) có việc làm bền vững (6+ tháng). Một nhóm so sánh với các đặc điểm tương tự nhưng không có quyền truy cập chương trình có tỷ lệ việc làm cơ bản 15% trong cùng thời kỳ. Sự tăng kết quả thuần: 28% − 15% = 13 điểm phần trăm, vì vậy một ước tính 500 × 0,13 = 65 người bổ sung có việc mà nếu không thì sẽ không có — kết quả có thể quy, khác với cả con số tham dự 500 hoặc số lượng việc làm thô 140.

**Tổ chức từ thiện (tổ chức từ thiện đọc viết)**: đầu ra — 1.200 phiên đọc được cung cấp cho 300 trẻ em. Kết quả — tuổi đọc trung bình được cải thiện 8 tháng trong một kỳ 6 tháng, so với một đường cơ sở tiến triển tự nhiên dự kiến 6 tháng là 6 tháng. Khoản tăng kết quả thuần: 8 − 6 = 2 tháng cải thiện tuổi đọc bổ sung mỗi trẻ em có thể quy cho chương trình, không phải con số 8 tháng đầy đủ.

## Liên hệ với phát triển phần mềm

Các nhật ký sự kiện và các hệ thống giao dịch trang bị đầu ra gần như tự động — lượt xem trang, phiên, ticket đóng, cuộc hẹn được đặt — vì chúng được tạo ra bởi hệ thống đang làm công việc của nó. Kết quả yêu cầu một mô hình dữ liệu nắm bắt cùng cá nhân tại một thời điểm sau so với một đường cơ sở hoặc so sánh, phải được thiết kế có chủ ý: các khảo sát theo dõi, các hồ sơ hành chính được liên kết, hoặc một đoàn hệ so sánh. Một công cụ báo cáo chỉ hỗ trợ cái trước sẽ âm thầm chỉ đạo một tổ chức hướng tới báo cáo chỉ-đầu-ra bất kể nhà tài trợ yêu cầu gì. Xem [mô hình logic](../logic-model/) cho nơi kết quả nằm trong chuỗi trách nhiệm, [chi phí mỗi kết quả](../cost-per-outcome/) để chuyển sự phân biệt này thành một chỉ số chi phí đơn vị, và [các chỉ số KPI khu vực công](../public-sector-kpis/) cho mẫu rộng hơn của việc chọn chỉ số.

## Những cạm bẫy

- **Báo cáo đầu ra như thể chúng là kết quả.** "500 người tham dự" ngụ ý lợi ích mà không chứng minh nó; gắn nhãn sự tham dự như một đầu ra một cách rõ ràng.
- **Không có đường cơ sở hoặc nhóm so sánh.** Một con số kết quả không có đối chiếu thực tế — xem [phân tích đối chiếu thực tế](../counterfactual-analysis/) — không thể phân biệt hiệu ứng chương trình với những gì sẽ xảy ra dù sao.
- **Tối ưu hóa cho chỉ số được tài trợ.** Khi tài trợ gắn với khối lượng đầu ra, các nhóm cung cấp hợp lý tối đa hóa sự tham dự hơn thay đổi bền vững, một chế độ thất bại của luật Goodhart.
- **Rửa kết quả.** Gắn nhãn lại một chỉ số đầu ra bằng ngôn ngữ nghe-như-kết-quả ("kết quả tham gia: 500 người tham dự") mà không có đo lường theo dõi nào đằng sau nó.

## Nguồn tham khảo

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
