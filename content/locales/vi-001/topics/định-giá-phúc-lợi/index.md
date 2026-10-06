# Định giá phúc lợi (WELLBY)

Định giá phúc lợi định giá hiệu ứng của một chính sách trực tiếp theo các thuật ngữ sự hài lòng cuộc sống, sử dụng WELLBY (năm sống điều chỉnh theo phúc lợi) làm đơn vị của nó — một WELLBY bằng một thay đổi một điểm trên thang đo sự hài lòng cuộc sống 0–10, duy trì trong một năm. Đó là phương án thay thế được HM Treasury chính thức cho phép đối với việc tiền hóa mọi lợi ích qua sẵn-lòng-trả.

## Tại sao điều này quan trọng

"Hướng dẫn phúc lợi cho đánh giá: hướng dẫn bổ sung Green Book" của HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) chính thức đưa dữ liệu phúc lợi chủ quan vào đánh giá chính phủ trung ương, cho các nhà phân tích một con đường để định giá các kết quả — kết nối xã hội, sức khỏe tâm thần, an toàn, tham gia công dân — mà các phương pháp [stated preference](../định-giá-stated-preference/) và [revealed preference](../định-giá-revealed-preference/) khó định giá một cách thuyết phục, vì con người thường là những người dự báo kém về mức độ một điều tốt sẽ thực sự ảnh hưởng đến sự hài lòng của họ với cuộc sống. Hướng dẫn, được phát triển cùng với What Works Centre for Wellbeing, đặt một giá trị tiền tệ được khuyến nghị mỗi WELLBY — £13.000 (giá 2021, được sửa đổi định kỳ) — được suy ra từ quan hệ quan sát được trong các khảo sát phúc lợi lớn (chủ yếu là Annual Population Survey của ONS, đã hỏi bốn câu hỏi phúc lợi ONS4 từ năm 2011) giữa thu nhập và sự hài lòng cuộc sống, cho các nhà phân tích một tỷ giá chuyển đổi trở lại thành đồng tiền khi một so sánh tiền hóa với các đánh giá Green Book khác được cần.

Phương pháp này quan trọng vì nó đảo ngược logic định giá thông thường: thay vì hỏi những gì mọi người sẽ trả cho một kết quả (stated preference) hoặc suy ra giá trị từ một giao dịch thị trường liên quan (revealed preference), nó đo trực tiếp hiệu ứng của kết quả lên sự hài lòng cuộc sống được báo cáo, tránh né khoảng cách giữa những gì mọi người nói họ muốn và những gì thực sự làm cho họ tốt hơn. Đây cũng là hạn chế trung tâm của nó — sự hài lòng cuộc sống tự báo cáo bị ảnh hưởng bởi các hiệu ứng thích nghi và đóng khung mà một người thực hành cẩn thận phải kiểm soát.

## Cách tính toán

```
WELLBY = 1 điểm hài lòng cuộc sống (thang đo 0-10) duy trì cho
        1 người trong 1 năm

Tổng WELLBY từ một chính sách =
  Σ (thay đổi trong điểm hài lòng cuộc sống) × (số người bị
    ảnh hưởng) × (thời gian theo năm, được chiết khấu theo tỷ
    lệ chiết khấu xã hội)

Giá trị tiền hóa = Tổng WELLBY × giá trị mỗi WELLBY
  (giá trị được khuyến nghị của HM Treasury: £13.000 mỗi
   WELLBY, giá 2021, có thể được sửa đổi định kỳ — kiểm tra
   hướng dẫn hiện tại trước khi sử dụng)
```

Điều này khác với [năm sống điều chỉnh theo phúc lợi](../năm-sống-điều-chỉnh-theo-phúc-lợi/) kinh tế học y tế, thường được cố định vào các thang đo chất lượng cuộc sống liên quan đến sức khỏe (EQ-5D và tương tự) thay vì sự hài lòng cuộc sống nói chung; hai cái liên quan nhưng không thể thay thế nhau, và các đánh giá Green Book nên rõ ràng về thang đo và phương pháp khai thác nào làm nền tảng cho một con số WELLBY được báo cáo.

## Ví dụ minh họa

**Chính quyền địa phương**: một hội đồng chạy một kế hoạch làm bạn cộng đồng cho các cư dân cao tuổi bị cô lập, phục vụ 400 người. Một khảo sát phúc lợi trước/sau sử dụng câu hỏi hài lòng cuộc sống ONS4 cho thấy điểm trung bình của người tham gia tăng từ 5,8 lên 6,5 — một khoản tăng 0,7 điểm — duy trì trong thời gian tài trợ 2 năm của chương trình.

```
WELLBY được tạo ra = 400 người × 0,7 điểm × 2 năm = 560 WELLBY
Giá trị tiền hóa = 560 × £13.000 = £7,28tr
Chi phí chương trình = £450.000 trong 2 năm

Tỷ lệ lợi ích-chi phí ≈ £7,28tr / £0,45tr ≈ 16:1
```

Một tỷ lệ cao như vậy nên khiến người ta xem xét kỹ hơn là ăn mừng — hướng dẫn phúc lợi Green Book cảnh báo rõ ràng chống lại việc chấp nhận các khoản tăng tự báo cáo mẫu-nhỏ theo giá trị bề mặt mà không kiểm tra các hiệu ứng lựa chọn (chỉ các cư dân hòa đồng nhất, có khả năng-cải-thiện-nhất tham gia kế hoạch?) và không có một nhóm so sánh; một đánh giá được thiết kế tốt sẽ trừ đi một thay đổi đối chiếu thực tế quan sát được ở những người không tham gia, xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/).

**Chính phủ quốc gia**: so sánh hai chương trình việc làm sử dụng WELLBY thay vì chỉ thu nhập nắm bắt rằng thất nghiệp mang một chi phí phúc lợi vượt quá thu nhập bị mất — nghiên cứu phúc lợi Anh nhất quán thấy rằng thất nghiệp giảm sự hài lòng cuộc sống nhiều hơn chỉ việc mất thu nhập sẽ dự đoán, vì các hiệu ứng không-tiền-bạc của việc mất cấu trúc, mục đích, và liên lạc xã hội. Một chương trình được đánh giá chỉ trên khoản tăng thu nhập sẽ đánh giá thấp giá trị của nó so với một chương trình được đánh giá bổ sung trên WELLBY.

## Liên hệ với phát triển phần mềm

Định giá phúc lợi hiếm khi đến trực tiếp với các nhóm kỹ thuật, nhưng nó định hình những gì "thành công" được định nghĩa là đối với các sản phẩm khu vực xã hội và dịch vụ công — một nền tảng làm bạn số, một công cụ phân loại sức khỏe tâm thần, hoặc một nền tảng cộng đồng cho các cư dân bị cô lập nên kỳ vọng tác động của nó cuối cùng sẽ được đo theo cách này, có nghĩa là phân tích sản phẩm cần nắm bắt *ai* được tiếp cận và trong *bao lâu*, không chỉ số lượng sử dụng. Xây dựng công cụ hóa khảo sát phúc lợi (ONS4 hoặc tương đương được xác thực) vào đánh giá dịch vụ từ đầu thay vì gắn thêm hồi tố; việc bổ sung một đường cơ sở phúc lợi sau khi một dịch vụ đã ra mắt mất hoàn toàn so sánh trước/sau. Xem [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/) và [các phương pháp đánh giá tác động](../các-phương-pháp-đánh-giá-tác-động/).

## Những cạm bẫy

- **Không có đối chiếu thực tế hoặc nhóm so sánh.** Một khoản tăng phúc lợi trước/sau không có kiểm soát cho những gì sẽ xảy ra dù sao thổi phồng hiệu ứng của chương trình; xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/) và [tính bổ sung và trọng lượng chết](../tính-bổ-sung-và-trọng-lượng-chết/).
- **Các mẫu nhỏ, tự chọn.** Các khảo sát phúc lợi của người tham gia chương trình đã chọn tham gia dễ bị thiên vị lựa chọn — những người đã tham gia và duy trì có thể đã đang có xu hướng tăng lên.
- **Coi sự chuyển đổi £-mỗi-WELLBY là chính xác.** Giá trị tiền hóa là một quy ước chính sách suy ra từ các hồi quy thu nhập-phúc lợi, không phải giá thị trường; sử dụng nó để so sánh qua các đánh giá Green Book, không phải như một tuyên bố về phúc lợi "đáng giá bao nhiêu."
- **Nhầm lẫn WELLBY với QALY liên quan đến sức khỏe.** Hai cái đo các cấu trúc khác nhau trên các thang đo khác nhau; xem [năm sống điều chỉnh theo phúc lợi](../năm-sống-điều-chỉnh-theo-phúc-lợi/) cho biến thể kinh tế học y tế và không tính trung bình hai cái lại với nhau.

## Nguồn tham khảo

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
