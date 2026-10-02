# Chỉ số Nghèo đói Đa chiều (MPI)

MPI đo nghèo đói như các thiếu hụt chồng chéo mà một người trải nghiệm cùng lúc — trong sức khỏe, giáo dục, và mức sống — thay vì chỉ thu nhập rơi dưới một đường. Nó được phát triển bởi Oxford Poverty and Human Development Initiative (OPHI) với Sabina Alkire và James Foster, và đã được công bố cùng với UNDP trong mỗi Human Development Report từ năm 2010, cùng với [Chỉ số Phát triển Con người](../human-development-index/).

## Tại sao điều này quan trọng

Các đường nghèo đói thu nhập bỏ sót những người có đủ thu nhập tiền mặt nhưng thiếu nước sạch, giáo dục, hoặc sống sót sau cái chết của một đứa trẻ — và chúng bỏ sót sự thật rằng các thiếu hụt tập trung lại: một hộ gia đình không có điện có khả năng cao không tương xứng cũng thiếu vệ sinh và có một đứa trẻ suy dinh dưỡng. Phương pháp Alkire-Foster, trên đó MPI được xây dựng, đếm các thiếu hụt của mỗi người trên mười chỉ số được nhóm thành ba chiều được cân trọng số bằng nhau — sức khỏe, giáo dục, mức sống — và chỉ phân loại ai đó là "nghèo-MPI" nếu điểm thiếu hụt có trọng số của họ vượt qua một ngưỡng cố định, nắm bắt sự chồng chéo mà một tập các thống kê chỉ-số-đơn riêng biệt không thể. OPHI công bố phương pháp luận đầy đủ và dữ liệu quốc gia tại <https://ophi.org.uk/multidimensional-poverty-index/>; MPI toàn cầu nó duy trì cùng với UNDP hiện bao phủ hơn 110 quốc gia. Đối với phần mềm được xây dựng cho các chương trình chống-nghèo-đói — các chuyển tiền mặt, phân loại chăm sóc xã hội, nhắm mục tiêu viện trợ — bộ chỉ số của MPI thường là điều gần nhất với một lược đồ thiếu hụt tiêu chuẩn hóa đã được xác thực trên hàng chục văn phòng thống kê quốc gia.

## Cách tính toán

```
10 chỉ số, 3 chiều, mỗi chiều có trọng số 1/3:

Sức khỏe (1/3):          dinh dưỡng (1/6), tỷ lệ tử vong trẻ
                         em (1/6)
Giáo dục (1/3):           năm học (1/6), tham dự trường học
                         (1/6)
Mức sống (1/3):           nhiên liệu nấu ăn, vệ sinh, nước
                         uống, điện, nhà ở, tài sản (1/18
                         mỗi cái)

điểm thiếu hụt (c) = tổng trọng số của các chỉ số một người
                     thiếu hụt

người là "nghèo-MPI" nếu c ≥ 1/3 (ngưỡng nghèo đói, k = 33%)

H (tỷ lệ đếm đầu người) = số nghèo-MPI / tổng dân số
A (cường độ)             = điểm thiếu hụt trung bình chỉ
                          trong số nghèo-MPI

MPI = H × A
```

Vì MPI nhân *phần* nghèo với *mức độ* nghèo, hai khu vực với cùng tỷ lệ đếm đầu người có thể có các điểm MPI rất khác nhau nếu các thiếu hụt nghiêm trọng hơn ở một — cùng logic "không thay thế qua các chiều" đằng sau trung bình hình học của HDI.

## Ví dụ minh họa

**Khảo sát quốc gia của 1.000 người**: 350 được xác định là nghèo đa chiều (điểm thiếu hụt ≥ 33%). Trong chỉ 350 người nghèo đó, điểm thiếu hụt trung bình là 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**So sánh hai quận với tỷ lệ đếm đầu người bằng nhau**: Quận A có H = 0,30 và A = 0,40 (nhiều người nghèo, thiếu hụt vừa phải); Quận B có H = 0,30 và A = 0,60 (cùng số người nghèo, nhưng thiếu hụt nghiêm trọng hơn — không có điện *và* không có vệ sinh *và* không tham dự trường học cùng lúc).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Cùng tỷ lệ đếm đầu người, MPI cao hơn 50% ở Quận B — một hệ thống nhắm mục tiêu dựa trên nghèo đói đếm-đầu-người một mình sẽ xếp hạng hai quận giống nhau và bỏ sót rằng Quận B cần can thiệp sâu hơn.

## Liên hệ với phát triển phần mềm

- Các hệ thống quản lý trường hợp và đủ điều kiện cho các chương trình xã hội thường đã lưu trữ một số trong mười chỉ số (nhà ở, tham dự trường học, các dấu hiệu sức khỏe) trong các silo riêng biệt; phương pháp đếm Alkire-Foster là một lược đồ sẵn-có để kết hợp chúng thành một điểm thiếu hụt duy nhất thay vì xây dựng một mô hình tính điểm tùy chỉnh từ đầu.
- Sự phân chia đếm-đầu-người/cường-độ (H × A) là một mẫu hình nói chung hữu ích cho bất kỳ bảng điều khiển báo cáo "bao nhiêu người bị ảnh hưởng" cùng với "nghiêm trọng như thế nào" — gộp cả hai vào một con số, như các thống kê tỷ lệ phổ biến thô làm, che giấu chính xác trường hợp cần nhiều nguồn lực nhất.
- Các bảng điều khiển chỉ số kiểu MPI kết hợp tự nhiên với báo cáo [chi phí mỗi người thụ hưởng](../cost-per-beneficiary/) cho các chương trình chống-nghèo-đói: chi phí mỗi điểm giảm MPI là một đơn vị đáng bảo vệ để so sánh các can thiệp rất khác nhau (chuyển tiền mặt so với hạ tầng vệ sinh).

## Những cạm bẫy

- **Coi mười chỉ số là phổ quát** — các chỉ số MPI toàn cầu của OPHI được calibrated cho khả năng so sánh liên-quốc-gia; các MPI quốc gia (nhiều quốc gia, bao gồm một số ở Nam Á và Châu Phi, công bố MPI riêng của họ) điều chỉnh các chỉ số và trọng số cho bối cảnh địa phương, và hai cái không thể so sánh trực tiếp.
- **Chỉ báo cáo H** — tỷ lệ đếm đầu người bỏ qua cường độ hoàn toàn; luôn báo cáo hoặc tính A cùng với nó, hoặc MPI bản thân nó.
- **Giả định nghèo-MPI và nghèo-thu-nhập là cùng dân số** — các tóm tắt quốc gia riêng của OPHI thường chỉ thể hiện sự chồng chéo từng phần giữa hai cái; một chương trình chỉ nhắm mục tiêu nghèo-thu-nhập sẽ có hệ thống bỏ sót một phần có ý nghĩa của nhóm nghèo đa chiều.

## Nguồn tham khảo

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
