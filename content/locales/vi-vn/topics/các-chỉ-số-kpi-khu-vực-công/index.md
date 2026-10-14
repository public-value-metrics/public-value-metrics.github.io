# Các chỉ số KPI khu vực công

Một chỉ số hiệu suất chính (KPI) là một thước đo được chọn, được theo dõi đại diện cho việc liệu một dịch vụ công đang làm tốt công việc của mình hay không. Trong chính phủ, việc chọn một KPI không bao giờ trung lập: vì KPI gắn với ngân sách, bảng xếp hạng, và sự nghiệp, hành động chọn một KPI định hình hành vi của mọi người ở hạ nguồn của nó, thường nhiều hơn chính sách đã tạo ra dịch vụ.

## Tại sao điều này quan trọng

Quan sát năm 1975 của Charles Goodhart về chính sách tiền tệ — sau đó được phổ biến bởi Marilyn Strathern như "khi một thước đo trở thành một mục tiêu, nó không còn là một thước đo tốt" — là nhãn cảnh báo quan trọng nhất đơn lẻ trong quản lý hiệu suất khu vực công. Một KPI được chọn để *mô tả* một hệ thống bắt đầu *bóp méo* hệ thống đó vào thời điểm nguồn lực, lương, hoặc sự tồn tại chính trị được gắn với nó. Minh họa kinh điển là thời gian phản hồi xe cứu thương NHS: khi mục tiêu phản hồi tám phút cho Category A trở thành ràng buộc, một số trust đã được chứng minh "xếp chồng" xe cứu thương ngay ngoài đồng hồ thời gian phản hồi, hoặc phân loại lại các cuộc gọi, để đạt con số mà không thay đổi kết quả bệnh nhân. Hướng dẫn của UK National Audit Office về việc chọn và sử dụng các chỉ số hiệu suất — được đặt ra trong các báo cáo value-for-money của nó và khung "Performance Measurement by Regulators" và "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — tồn tại chính xác vì các bộ phận tiếp tục chọn các chỉ số dễ báo cáo hơn là các chỉ số khó lợi dụng. Một kỹ sư phần mềm vận chuyển bảng điều khiển mà một bộ trưởng hoặc giám đốc sẽ bị đánh giá dựa trên, cho dù họ có ý định hay không, đang thiết kế cấu trúc khuyến khích của một tổ chức công.

## Cách tính toán

Thiết kế KPI là một chủ đề khung-hình, nhưng *đánh giá* của một KPI ứng viên là một danh sách kiểm tra có thể lặp lại, không phải một công thức:

```
Đối với mỗi KPI ứng viên, tính điểm so với:
  Fit for purpose  — nó đo kết quả, hay một proxy nhiều bước
                     bị loại bỏ?
  Appropriate      — nó thuộc về những người thực sự có thể
                     ảnh hưởng đến nó không?
  Balanced         — nó được kết hợp với một chỉ số đối trọng
                     bắt được việc lợi dụng không?
  Robust           — nó có thể sống sót qua kiểm toán, hay nó
                     là tự báo cáo và không thể xác minh?
  Integrated       — nó khớp với tập hợp rộng hơn, hay nó đẩy
                     chống lại một KPI khác?
  Cost-effective   — việc thu thập nó tốn nhiều hơn quyết định
                     nó thông tin không?

Phân chia chỉ số dẫn đầu so với chỉ số trễ:
  Chỉ số dẫn đầu → dự đoán kết quả tương lai, nhưng thường có
                   thể lợi dụng (ví dụ: các cuộc gọi được trả
                   lời <60 giây)
  Chỉ số trễ     → xác nhận kết quả đã xảy ra, nhưng đến quá
                   muộn để điều hướng (ví dụ: khảo sát hài
                   lòng hàng năm)
  Một tập hợp KPI đáng bảo vệ kết hợp ít nhất một của mỗi loại
  mỗi mục tiêu.
```

## Ví dụ minh họa

**Trust xe cứu thương**: một trust báo cáo một KPI thời gian phản hồi Category A (đe dọa mạng sống) "75% các cuộc gọi được phản hồi trong 8 phút." Trong một quý, 6.000 cuộc gọi Category A đến; 4.500 được đáp ứng trong 8 phút, cho 75,0% — rõ ràng đạt mục tiêu.

```
KPI tiêu đề = 4.500 / 6.000 × 100 = 75,0%  (đáp ứng ngưỡng 75%)
```

Nhưng một kiểm toán Goodhart thêm một chỉ số đối trọng: thời gian phản hồi trung bình cho decile chậm nhất 10% các cuộc gọi.

```
Thời gian phản hồi trung bình decile chậm nhất = 34 phút (tăng
từ 19 phút hai năm trước)
```

Trust đang đạt mục tiêu trong khi phần đuôi — các cuộc gọi khả năng cao nhất là thực sự đe dọa mạng sống khi phân loại không hoàn hảo — đã trở nên tồi tệ hơn nhiều, vì các đội được ưu tiên đến các cuộc gọi gần vách đá 8 phút hơn là mức độ cấp bách lâm sàng. KPI đơn lẻ kể một câu chuyện sai; KPI kết hợp kể câu chuyện thực.

## Liên hệ với phát triển phần mềm

Các kỹ sư xây dựng bảng điều khiển hiệu suất cho chính phủ đang, về mặt chức năng, thiết kế API khuyến khích của tổ chức. Các ngụ ý thực tế: trang bị *mẫu số* một cách chặt chẽ như *tử số* (một KPI được báo cáo như một tỷ lệ phần trăm trần mời sự lợi dụng mẫu số — xem [chi phí mỗi giao dịch](../chi-phí-mỗi-giao-dịch/) cho cùng cạm bẫy trong các dịch vụ số); xây dựng các chỉ số đối trọng vào cùng bảng điều khiển thay vì một báo cáo riêng không ai đọc, để việc lợi dụng có thể thấy được tại điểm quyết định; và phiên bản định nghĩa KPI, vì một sự tái định nghĩa âm thầm (thay đổi những gì tính là một "cuộc gọi," một "trường hợp," hoặc một "hoàn thành") tương đương về mặt chức năng với việc thay đổi mục tiêu mà không công bố nó. Một [thẻ điểm giá trị công](../thẻ-điểm-giá-trị-công/) là một cách có cấu trúc để ngăn một KPI đơn lẻ được đọc một cách cô lập, và [trách nhiệm dựa trên kết quả](../trách-nhiệm-dựa-trên-kết-quả/) là kỷ luật của việc chọn các KPI cấp dân số mà một nhóm đơn lẻ không thể đơn phương bóp méo.

## Những cạm bẫy

- **Chọn chỉ số dễ-thu-thập hơn chỉ số có ý nghĩa**: thời gian trả lời cuộc gọi tầm thường để ghi; liệu cuộc gọi có giải quyết vấn đề của công dân hay không thì không — nhưng chỉ cái thứ hai là kết quả. Chống lại mặc định thành những gì hệ thống đã phát ra.
- **Không có chỉ số đối trọng**: bất kỳ KPI gắn với tiền hoặc danh tiếng sẽ bị lợi dụng ở lề; vận chuyển nó với một chỉ số kết hợp bắt được vector lợi dụng khả năng trước khi công bố nó.
- **Tái định nghĩa chỉ số không có bản ghi thay đổi**: trao đổi "các cuộc gọi nhận được" cho "các cuộc gọi được trả lời" để vuốt ve một xu hướng phá hủy độ tin cậy của chuỗi thời gian vào thời điểm nó được phát hiện — luôn công bố một bản ghi thay đổi định nghĩa cùng với các con số.
- **Nhầm lẫn hoạt động với kết quả**: đếm các cuộc kiểm tra hoàn thành là một đầu ra; đếm các cơ sở được đưa vào tuân thủ gần hơn với kết quả (xem [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/)).

## Nguồn tham khảo

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
