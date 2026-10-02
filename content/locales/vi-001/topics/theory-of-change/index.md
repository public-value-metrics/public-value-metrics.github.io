# Lý thuyết thay đổi

Một lý thuyết thay đổi là một con đường nhân quả được lập bản đồ ngược, rõ ràng từ một mục tiêu dài hạn đến các điều kiện tiên quyết và hoạt động phải tồn tại để nó được đạt được, cùng với các giả định kết nối mỗi liên kết. Nó được xây dựng bằng cách bắt đầu từ kết quả bạn muốn và hỏi "điều gì phải đúng ngay trước điều này, để điều này xảy ra?", lặp đi lặp lại, cho đến khi bạn đạt đến các hoạt động bạn thực sự có thể cung cấp — đó là hướng ngược lại với một [mô hình logic](../logic-model/), và tại sao hai điều này bổ sung cho nhau thay vì có thể thay thế nhau.

## Tại sao điều này quan trọng

Phương pháp lập bản đồ ngược được chính thức hóa bởi Center for Theory of Change và ActKnowledge, xây dựng trên công việc của người đánh giá Carol Weiss về việc làm cho các giả định chương trình rõ ràng để chúng có thể được kiểm tra thay vì được tin tưởng mà không kiểm chứng. Đánh giá tài trợ của Anh đã hấp thụ điều này trực tiếp: Magenta Book của HM Treasury coi một lý thuyết thay đổi là điểm khởi đầu cho bất kỳ thiết kế đánh giá nào, và các nhà tài trợ như National Lottery Community Fund yêu cầu người xin tài trợ phải diễn đạt một lý thuyết trước khi họ tài trợ cho một đề xuất. Lý do nó quan trọng đối với một kỹ sư phần mềm là một lý thuyết thay đổi là tài liệu nên quyết định những gì hệ thống của bạn cần đo lường — nếu chuỗi nhân quả nói "việc nhận trợ cấp phụ thuộc vào người nộp đơn nhận được một phép tính cá nhân hóa", đó là một tuyên bố có thể kiểm tra được mà sản phẩm của bạn có thể được trang bị để chứng minh, hoặc bác bỏ.

## Cách tính toán

Một lý thuyết thay đổi là cấu trúc hơn là số học. Mỗi liên kết nên mang cả một giả định và một chỉ số có thể cho thấy giả định là sai:

```
Kết quả dài hạn (mục tiêu)
  ↑ điều kiện tiên quyết + giả định + chỉ số
Kết quả trung gian N
  ↑ điều kiện tiên quyết + giả định + chỉ số
  ...
Kết quả trung gian 1
  ↑ điều kiện tiên quyết + giả định + chỉ số
Hoạt động / can thiệp
  ↑ nguồn lực được cam kết
Đầu vào
```

Cấu trúc này đưa trực tiếp vào [các phương pháp đánh giá tác động](../impact-evaluation-methods/), tồn tại để kiểm tra liệu các giả định ở mỗi liên kết có thực sự đứng vững hay không, và vào [phân tích đối chiếu thực tế](../counterfactual-analysis/), kiểm tra liệu kết quả dài hạn có xảy ra dù sao không.

## Ví dụ minh họa

**Chính quyền địa phương (phòng chống vô gia cư)**: kết quả dài hạn là các hợp đồng thuê bền vững ở 12 tháng cho các hộ gia đình có nguy cơ bị đuổi.

- Điều kiện tiên quyết: các hộ gia đình có một kế hoạch trả nợ thực tế, có thể chi trả cho các khoản nợ quá hạn.
  Giả định: các kế hoạch được thương lượng bởi nhân viên xử lý trường hợp bền vững hơn các kế hoạch do tòa án ra lệnh.
  Chỉ số: % kế hoạch còn hoạt động ở 6 tháng.
- Điều kiện tiên quyết: các hộ gia đình nhận các trợ cấp họ có quyền.
  Giả định: một máy tính trợ cấp số tăng các khiếu nại đúng so với các mẫu giấy.
  Chỉ số: tỷ lệ chính xác khiếu nại, được so sánh trước/sau triển khai công cụ.
- Hoạt động: phân loại nhân viên xử lý trường hợp, máy tính trợ cấp số, đàm phán nợ quá hạn.

Trong một đoàn hệ thử nghiệm 120 hộ gia đình, giả định máy tính trợ cấp đứng vững cho 102 hộ gia đình (85%) tiếp tục khiếu nại đúng, được chứng minh bởi một đánh giá quy trình tiếp theo — cho nhóm chương trình bằng chứng cho liên kết cụ thể đó thay vì một tuyên bố đầu-đến-cuối đơn lẻ về vô gia cư được ngăn chặn.

**Tổ chức từ thiện (cố vấn thanh niên)**: kết quả dài hạn là giảm loại trừ trường học. Các điều kiện tiên quyết được lập bản đồ ngược: điều chỉnh cảm xúc được cải thiện ← quan hệ một-một đáng tin cậy với một cố vấn ← liên hệ hàng tuần nhất quán trong hai kỳ học. Lý thuyết làm rõ rằng việc thiếu điều kiện tiên quyết "liên hệ hàng tuần nhất quán" (giả sử, do sự luân chuyển cố vấn) dự đoán kết quả sẽ không theo sau, đó là một tuyên bố có thể kiểm tra, có thể bác bỏ thay vì một hy vọng.

## Liên hệ với phát triển phần mềm

Một lý thuyết thay đổi nên định hình mô hình dữ liệu của một sản phẩm trước khi một bảng điều khiển đơn lẻ được xây dựng: xác định các liên kết nào cần một chỉ số, và trang bị cụ thể cho những điều đó, thay vì mặc định thành bất cứ điều gì dễ nhất để ghi lại. Nó cũng kỷ luật các cuộc trò chuyện về lộ trình — một tính năng không ánh xạ đến bất kỳ liên kết nào trong chuỗi không rõ ràng đáng để xây dựng. Xem [mô hình logic](../logic-model/) cho chuỗi trách nhiệm hướng-về-phía-trước được xây dựng khi lý thuyết được thỏa thuận, [lợi tức xã hội trên đầu tư](../social-return-on-investment/) cho một phương pháp phụ thuộc vào một lý thuyết thay đổi để xác định phạm vi các kết quả cần định giá, và [kết quả so với đầu ra](../outcomes-vs-outputs/) cho sự phân biệt mà các liên kết kết quả trung gian phụ thuộc vào.

## Những cạm bẫy

- **Nhầm lẫn nó với một mô hình logic.** Một lý thuyết thay đổi là nhân quả và giải thích (tại sao chúng tôi tin điều này hoạt động); một mô hình logic là tuần tự và mô tả (điều gì xảy ra theo thứ tự nào). Chỉ sản xuất một trong hai bỏ lại hoặc "tại sao" hoặc dấu vết trách nhiệm bị thiếu.
- **Để các giả định ngầm.** Toàn bộ giá trị của lập bản đồ ngược là làm nổi lên các giả định có thể kiểm tra được; một lý thuyết thay đổi chỉ liệt kê các ô và mũi tên mà không nêu rõ điều gì có thể làm cho mỗi liên kết sai là trang trí.
- **Xây dựng nó một lần và bỏ đi.** Một lý thuyết thay đổi được viết cho một đơn xin tài trợ và không bao giờ được xem lại dừng hữu ích vào thời điểm bằng chứng bắt đầu mâu thuẫn một liên kết.
- **Bỏ qua đầu vào từ các bên liên quan.** Một lý thuyết thay đổi được xây dựng hoàn toàn bởi các người ủy nhiệm mà không có đầu vào từ nhân viên tiền tuyến hoặc người thụ hưởng có xu hướng mã hóa các giả định mà không ai cung cấp dịch vụ thực sự tin tưởng.

## Nguồn tham khảo

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
