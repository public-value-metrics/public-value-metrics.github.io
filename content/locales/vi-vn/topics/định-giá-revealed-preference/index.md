# Định giá Revealed Preference

Các phương pháp revealed preference suy ra giá trị của một hàng hóa không-thị-trường từ hành vi quan sát được trong một thị trường liên quan, thay vì hỏi mọi người trực tiếp. Định giá hedonic và phương pháp chi-phí-du-lịch là hai kỹ thuật chủ lực: cả hai bắt đầu từ một giao dịch thực sự và suy ra một giá ngầm cho thứ chưa bao giờ được bán trực tiếp.

## Tại sao điều này quan trọng

Nơi các phương pháp [stated preference](../định-giá-stated-preference/) hỏi một câu hỏi giả định, các phương pháp revealed preference quan sát những gì mọi người thực sự đã trả, mà Green Book coi là bằng chứng nói chung đáng tin cậy hơn, các yếu tố khác bằng nhau, vì nó không bị thiên vị giả định — người trả lời trong một nghiên cứu giá nhà hedonic thực sự đã trả phí hoặc giảm giá đang được đo (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Phụ lục 2). Định giá hedonic phân tách một giá thị trường — thường là giá nhà — thành các giá ngầm cho mỗi thuộc tính của hàng hóa, cho các nhà phân tích cô lập, ví dụ, phí giá mà các hộ gia đình thực sự trả để sống ở đâu đó yên tĩnh hơn hoặc với chất lượng không khí tốt hơn, kiểm soát thống kê cho mọi thuộc tính khác cũng ảnh hưởng đến giá nhà (kích thước, vị trí, khu vực tuyển sinh trường học). Phương pháp chi-phí-du-lịch làm điều tương tự cho các địa điểm giải trí không có phí vào: thời gian và tiền mọi người bỏ ra để du lịch đến một địa điểm tiết lộ một giới hạn dưới về giá trị của địa điểm đối với họ, vì không ai chịu một chi phí vượt quá những gì chuyến thăm đáng giá đối với họ.

Cả hai phương pháp đều chia sẻ một hạn chế cấu trúc: chúng chỉ có thể định giá những gì được nhúng trong một giao dịch thị trường hiện có. Tiếng ồn gần một đường băng xuất hiện trong giá nhà vì những người quan tâm đến tiếng ồn sắp xếp vào nhà ở yên tĩnh hơn; giá trị tồn tại của một loài không ai ghé thăm hoặc sống gần không xuất hiện trong bất kỳ giao dịch nào cả, đó chính xác là khoảng trống mà các phương pháp [stated preference](../định-giá-stated-preference/) tồn tại để lấp đầy.

## Cách tính toán

```
Định giá hedonic:
  Giá nhà = f(thuộc tính cấu trúc, thuộc tính vị trí, thuộc
             tính môi trường quan tâm, ...)
  Ước tính qua hồi quy; hệ số trên thuộc tính môi trường (giữ
  mọi thứ khác không đổi) là giá ngầm của nó.

  Giá ngầm của thuộc tính X = ∂(Giá nhà) / ∂X

Phương pháp chi-phí-du-lịch:
  Tỷ lệ ghé thăm (chuyến thăm mỗi đầu người từ khu vực i) =
  f(chi phí du lịch từ khu vực i, các địa điểm thay thế, kiểm
    soát kinh tế xã hội)
  Ước tính một đường cầu cho các chuyến thăm như một hàm của
  chi phí du lịch.
  Thặng dư tiêu dùng = diện tích dưới đường cầu ước tính
                      = giá trị của địa điểm đối với khách
                        thăm
```

Cả hai phương pháp yêu cầu một tập hợp kiểm soát hợp lý về mặt thống kê — bỏ qua một thuộc tính gây nhiễu (hedonic) hoặc một địa điểm thay thế gần (chi-phí-du-lịch) làm sai lệch giá ngầm theo một hướng không phải luôn luôn rõ ràng trước, đó là lý do tại sao Phụ lục 2 của Green Book yêu cầu đặc tả hồi quy và các kiểm soát phải được báo cáo, không chỉ hệ số tiêu đề.

## Ví dụ minh họa

**Chính phủ quốc gia**: phương pháp giá bóng carbon riêng của Green Book dựa một phần vào bằng chứng hedonic, nhưng một trường hợp minh họa đơn giản hơn là tiếng ồn máy bay. Một nghiên cứu hedonic hồi quy giá bán nhà trong một khu vực đường bay so với phơi nhiễm tiếng ồn có trọng số khoảng cách, kiểm soát cho kích thước, tuổi, và khu vực tuyển sinh trường học, thấy mỗi 1 decibel tăng trong phơi nhiễm tiếng ồn trung bình liên quan đến một giảm 0,5% trong giá nhà. Đối với một ngôi nhà điển hình £280.000 trong khu vực bị ảnh hưởng:

```
Giá ngầm mỗi decibel = £280.000 × 0,5% = £1.400 mỗi hộ gia đình
Hộ gia đình bị ảnh hưởng bởi tăng 3dB từ một đường băng mới =
18.000
Chi phí ngầm tổng hợp của sự tăng tiếng ồn = £1.400 × 3 ×
18.000 = £75,6tr
```

Đây là một chi phí vốn hóa một lần (được nhúng trong giá nhà), mà đánh giá phải cẩn thận không đếm hai lần so với một luồng chi phí phiền toái tiếng ồn hàng năm được ước tính riêng.

**Tổ chức từ thiện**: một tổ chức từ thiện môi trường sử dụng phương pháp chi-phí-du-lịch để định giá một khu bảo tồn tự nhiên vào-miễn-phí. Dữ liệu khảo sát về mã bưu điện của khách ghé thăm cho chi phí du lịch khứ hồi trung bình (thời gian được định giá theo giá trị thời gian không-làm-việc được khuyến nghị của Green Book, cộng với nhiên liệu) £14 mỗi chuyến thăm, với 40.000 chuyến thăm mỗi năm. Đường cầu ước tính — tỷ lệ ghé thăm giảm khi chi phí du lịch từ một khu vực tăng — ngụ ý một thặng dư tiêu dùng mỗi chuyến thăm, trên £14 thực sự chi, khoảng £9.

```
Tổng giá trị hàng năm = 40.000 chuyến thăm × (£14 chi + £9
                        thặng dư tiêu dùng) = 40.000 × £23 ≈
                        £920.000/năm
```

Điều này vượt xa doanh thu phí-vào bằng-không của khu bảo tồn và cho các ủy viên quản trị của tổ chức từ thiện một con số có thể bảo vệ cho giá trị giải trí của địa điểm khi trình bày trường hợp cho các nhà tài trợ.

## Liên hệ với phát triển phần mềm

Suy nghĩ revealed preference xuất hiện trong phân tích sản phẩm khu vực công thường xuyên hơn những người thực hành nhận ra: dữ liệu sử dụng từ một dịch vụ số chính phủ miễn phí bản thân nó là bằng chứng revealed-preference về giá trị (tần suất, độ dài phiên, và — nói nhiều nhất — các mẫu sử dụng lặp-lại-so-với-một-lần có thể được phân tích theo cùng cách một mô hình chi-phí-du-lịch xử lý tần suất chuyến thăm so với khoảng cách). Nơi một dịch vụ có các sự thay thế thực sự (một kênh giấy, một đường dây điện thoại), "chi phí" công dân chịu để sử dụng kênh số thay vào đó (thời gian, dữ liệu, một thiết bị) có thể được ước tính và so sánh với sử dụng, phản ánh trực tiếp logic chi-phí-du-lịch. Xem [tiêu chuẩn dịch vụ số](../tiêu-chuẩn-dịch-vụ-số/) và [giá trị dữ liệu mở](../giá-trị-dữ-liệu-mở/), đối mặt chính xác vấn đề định giá này cho một hàng hóa không có giá thị trường trực tiếp.

## Những cạm bẫy

- **Thiên vị biến bị bỏ sót trong các mô hình hedonic.** Bỏ sót một thuộc tính tương quan (chất lượng trường học tương quan với cả giá nhà và biến môi trường quan tâm) làm sai lệch ước tính giá ngầm; đặc tả cần được báo cáo và xem xét kỹ, không chỉ kết quả.
- **Bỏ qua các địa điểm thay thế trong các nghiên cứu chi-phí-du-lịch.** Giá trị tiết lộ của một khách thăm cho một địa điểm bị đánh giá thấp nếu một sự thay thế gần hơn tồn tại và không được kiểm soát — họ có thể đang ghé thăm chủ yếu vì nó miễn phí, không phải vì nó có giá trị độc đáo.
- **Áp dụng revealed preference cho một hàng hóa không có dội thị trường nào cả.** Giá trị tồn tại, giá trị lựa chọn, và giá trị di sản không xuất hiện trong bất kỳ giao dịch nào và không thể được khôi phục bởi các phương pháp hedonic hoặc chi-phí-du-lịch — khoảng trống đó thuộc về [định giá stated preference](../định-giá-stated-preference/).
- **Nhầm lẫn giá trị vốn hóa (một lần) với một luồng hàng năm.** Các hiệu ứng giá nhà hedonic thường là các giá trị vốn hóa một lần; coi chúng như một luồng lợi ích hàng năm thổi phồng đánh giá.

## Nguồn tham khảo

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
