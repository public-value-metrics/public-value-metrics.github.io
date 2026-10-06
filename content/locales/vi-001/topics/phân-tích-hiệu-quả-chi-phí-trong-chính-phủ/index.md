# Phân tích hiệu quả chi phí trong chính phủ

Phân tích hiệu quả chi phí (CEA) so sánh chi phí của các cách thay thế để đạt được *cùng* một kết quả, được diễn đạt bằng các đơn vị tự nhiên — chi phí mỗi người ngủ ngoài đường được nhà ở, chi phí mỗi học sinh đạt đến tiêu chuẩn dự kiến, chi phí mỗi tấn CO2 giảm — mà không chuyển đổi kết quả bản thân nó thành tiền.

## Tại sao điều này quan trọng

Green Book coi CEA là phương pháp dự phòng khi yêu cầu của [phân tích chi phí-lợi ích xã hội](../phân-tích-chi-phí-lợi-ích-xã-hội/) về việc tiền hóa mọi lợi ích trở nên không chỉ khó khăn mà còn không trung thực — nơi việc đặt một giá đáng tin cậy vào kết quả sẽ yêu cầu các giả định mà không ai thực sự giữ (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chương 5, về đánh giá tùy chọn nơi các kết quả không dễ tiền hóa). CEA là phương pháp được mượn trực tiếp nhất từ kinh tế học y tế — nó giống hệt về cấu trúc với cách NICE so sánh các phương pháp điều trị sử dụng chi phí mỗi Năm Sống Điều Chỉnh Theo Chất Lượng — nhưng được áp dụng cho các chương trình công không-y-tế: các can thiệp giáo dục trên mỗi điểm-kết-quả-học-sinh, các chương trình nhà ở trên mỗi hộ gia đình được ngăn chặn khỏi vô gia cư, các chương trình việc làm trên mỗi kết quả việc làm bền vững.

Lý do CEA xứng đáng có vị trí của nó bên cạnh SCBA thay vì bị nó thay thế là việc ép buộc một giá trị tiền tệ lên một số kết quả tạo ra một con số đủ chính xác để trông có vẻ có thẩm quyền và đủ gây tranh cãi để trở nên vô giá trị trong một cuộc tranh luận công khai — đặt một giá vào "một đứa trẻ đọc ở tiêu chuẩn dự kiến" mời chính xác loại thử thách làm lạc hướng một trường hợp kinh doanh ở ủy ban tuyển chọn. CEA tránh né cuộc tranh luận bằng cách từ chối có nó: nó xếp hạng các tùy chọn theo chi phí mỗi đơn vị của *kết quả bản thân nó*, để lại đánh giá chính trị riêng biệt về việc liệu kết quả có đáng theo đuổi hay không cho trường hợp chiến lược.

## Cách tính toán

```
Tỷ lệ hiệu quả chi phí (trung bình) = Tổng chi phí / Tổng đơn vị
                                      kết quả đạt được

Tỷ lệ hiệu quả chi phí gia tăng (ICER), so sánh tùy chọn A với
tùy chọn B:
ICER = (Chi phí_A − Chi phí_B) / (Kết quả_A − Kết quả_B)

Thủ tục:
1. Cố định đơn vị kết quả và phương pháp đo lường trên tất cả
   các tùy chọn được so sánh.
2. Tính chi phí mọi tùy chọn trên cùng cơ sở (xem ../green-
   book-appraisal/, trường hợp tài chính) trong cùng chân
   trời thời gian.
3. Loại bỏ các tùy chọn bị thống trị: bất kỳ tùy chọn tốn
   nhiều hơn mỗi đơn vị so với một phương án thay thế rẻ hơn
   đạt được kết quả bằng hoặc tốt hơn sẽ bị loại bỏ.
4. Xếp hạng các tùy chọn còn lại theo tỷ lệ hiệu quả chi phí
   gia tăng, không phải trung bình.
```

CEA không thể, bản thân nó, nói liệu một chương trình có đáng tài trợ hay không — chỉ nói cách nào trong số các phương pháp đối với cùng mục tiêu là rẻ nhất mỗi đơn vị. Quyết định liệu mục tiêu bản thân nó có đáng chi tiêu hay không yêu cầu hoặc chuyển đổi trở lại SCBA (nếu một định giá đáng tin cậy tồn tại) hoặc một đánh giá chính trị/chiến lược bên ngoài toán học. Nơi các kết quả thực sự không thể được giảm xuống một đơn vị — vì một chương trình tạo ra nhiều kết quả quan trọng theo các cách khác nhau — hãy sử dụng [phân tích quyết định đa tiêu chí](../phân-tích-quyết-định-đa-tiêu-chí/) thay vào đó.

## Ví dụ minh họa

**Chính quyền địa phương**: một hội đồng so sánh ba phương pháp để giảm người ngủ ngoài đường, mỗi phương pháp được tính chi phí trong một năm so với kết quả "các cá nhân chuyển vào nhà ở ổn định trong 6+ tháng":

```
Tùy chọn                        Chi phí    Kết quả đạt    CER TB
Housing First (chuyên sâu)      £900.000   60             £15.000/
                                                            kết quả
Nhà trọ + hỗ trợ chuyển tiếp     £600.000   50             £12.000/
                                                            kết quả
Tiếp cận + khu vực thuê tư nhân  £350.000   20             £17.500/
                                                            kết quả

ICER, Nhà trọ vs Tiếp cận: (600k−350k)/(50−20) = £8.333 mỗi
kết quả bổ sung
ICER, Housing First vs Nhà trọ: (900k−600k)/(60−50) = £30.000
mỗi kết quả bổ sung
```

Tiếp cận bị thống trị về chi phí trung bình bởi Nhà trọ, nhưng bước *gia tăng* từ Tiếp cận đến Nhà trọ chỉ tốn £8.333 mỗi người được nhà ở bổ sung — rẻ so với bước Housing First, tốn £30.000 cho mỗi người bổ sung ngoài những gì Nhà trọ đạt được. Một cơ quan bị hạn chế ngân sách đang mở rộng quy mô nên ưu tiên mở rộng Nhà trọ trước Housing First, ngay cả khi Housing First trông tốt hơn trên tỷ lệ trung bình riêng của nó.

**Chính phủ quốc gia**: một chương trình bắt kịp đọc viết được so sánh trên ba mô hình cung cấp về "chi phí mỗi học sinh đạt tiêu chuẩn đọc theo tuổi dự kiến": gia sư một-một (£1.800/học sinh), gia sư nhóm nhỏ (£700/học sinh), và can thiệp chỉ-số (£150/học sinh, nhưng chỉ 40% tỷ lệ kết quả của gia sư nhóm nhỏ mỗi học sinh đăng ký khi được điều chỉnh cho sự sụt giảm tham gia). Khi được điều chỉnh cho sự hoàn thành thực tế, chỉ-số tốn £375 mỗi học sinh đạt tiêu chuẩn — vẫn rẻ nhất, nhưng CEA không thể nói liệu số học sinh tuyệt đối nhỏ hơn được giúp đỡ bởi chỉ-số, nếu được cung cấp với cùng ngân sách như nhóm nhỏ, là một sự đánh đổi có thể chấp nhận được so với việc tiếp cận ít học sinh hơn ở độ sâu lớn hơn; đó là một đánh giá phân phối mà CEA trả lại cho các người quyết định.

## Liên hệ với phát triển phần mềm

CEA là khung đúng bất cứ khi nào các nhóm kỹ thuật đánh giá các phương pháp cung cấp cho *cùng* kết quả dịch vụ — chi phí mỗi danh tính được xác minh thành công trên ba nhà cung cấp xác minh danh tính, chi phí mỗi trường hợp được phân loại đúng trên hai thiết kế tự động hóa công việc trường hợp, chi phí mỗi lỗi khả năng truy cập được giải quyết trên nội bộ so với khắc phục hợp đồng. Kỷ luật nó nhập trực tiếp: xác định đơn vị kết quả trước khi so sánh chi phí (không phải "ticket đóng" — một đầu ra — mà "nhu cầu người dùng thực sự được giải quyết"), và luôn tính tỷ lệ gia tăng giữa hệ thống trực tiếp và một sự thay thế được đề xuất, không phải chi phí trung bình riêng của mỗi hệ thống. Xem [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/) và [chi phí mỗi kết quả](../chi-phí-mỗi-kết-quả/).

## Những cạm bẫy

- **So sánh tỷ lệ trung bình, không phải gia tăng, khi quyết định mở rộng.** Như ví dụ người ngủ ngoài đường cho thấy, tùy chọn với tỷ lệ trung bình tốt nhất không phải luôn luôn là đơn vị kết quả tiếp theo rẻ nhất để mua.
- **Chọn một đơn vị kết quả thực sự là một đầu ra.** "Các giới thiệu được thực hiện" hoặc "các phiên được cung cấp" đo lường hoạt động, không phải kết quả chương trình tồn tại để sản xuất; CEA trên các đầu ra tạo ra một con số trông tự tin trả lời câu hỏi sai.
- **So sánh trên các kết quả thực sự khác nhau.** CEA chỉ hợp lệ khi mọi tùy chọn nhắm đến cùng kết quả được đo theo cùng cách; so sánh "chi phí mỗi người ngủ ngoài đường được nhà ở" với "chi phí mỗi người rời khỏi sự chăm sóc ở nhà thuê ổn định" cần một thước đo kết quả chung hoặc [phân tích quyết định đa tiêu chí](../phân-tích-quyết-định-đa-tiêu-chí/), không phải CEA.
- **Bỏ qua độ bền của kết quả.** Một tùy chọn rẻ hơn tạo ra các kết quả không tồn tại lâu (một học sinh thoái lùi sau khi can thiệp kết thúc) không thực sự hiệu quả chi phí hơn khi được đo trên một chân trời tương đương; khớp kỳ theo dõi trên các tùy chọn được so sánh.

## Nguồn tham khảo

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
