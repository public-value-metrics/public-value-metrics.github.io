# Kế toán vốn tự nhiên

Kế toán vốn tự nhiên đặt môi trường trên cùng cơ sở như bất kỳ tài sản quốc gia hoặc tổ chức khác: nó đo lường trữ lượng của các nguồn lực tự nhiên (rừng, đất, sông, vùng đất ngập nước, khí quyển) và luồng dịch vụ chúng sản xuất (hấp thụ carbon, bảo vệ lũ lụt, giải trí, thực phẩm), cả về thuật ngữ vật lý và tiền tệ, để sự suy thoái môi trường xuất hiện trong việc ra quyết định theo cách làm cạn vốn tài chính sẽ làm. Anh là một trong những chính phủ tiến bộ nhất trong việc làm điều này một cách có hệ thống, được thúc đẩy bởi 25 Year Environment Plan (2018) và được thực hiện qua các tài khoản UK Natural Capital của ONS và hướng dẫn bổ sung Green Book của HM Treasury.

## Tại sao điều này quan trọng

Kế toán thông thường — doanh nghiệp và chính phủ như nhau — coi một khu rừng là vô giá trị cho đến khi nó bị đốn và bán như gỗ, tại điểm đó nó trở thành GDP. Kế toán vốn tự nhiên tồn tại để đóng khoảng trống đó: 25 Year Environment Plan của Anh cam kết chính phủ nhúng suy nghĩ vốn tự nhiên qua chính sách, rõ ràng nêu rõ tham vọng trở thành "thế hệ đầu tiên để lại môi trường ở một trạng thái tốt hơn chúng ta tìm thấy nó." ONS từ đó đã công bố các tài khoản UK Natural Capital hàng năm (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) ước tính giá trị tiền tệ của các dịch vụ hệ sinh thái — từ giải trí rừng đến các lợi ích sức khỏe của không gian xanh đô thị đến lưu trữ carbon đất ngập than bùn — sử dụng cùng khung National Accounts được sử dụng cho vốn được sản xuất, để vốn tự nhiên cuối cùng có thể nằm trong cùng sổ cân đối như đường, các tòa nhà, và thiết bị. Hướng dẫn Enabling a Natural Capital Approach (ENCA) của HM Treasury, bổ sung cho Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), đặt ra cách các người đánh giá nên định giá chi phí và lợi ích môi trường trong các trường hợp kinh doanh, để một kế hoạch đường phá hủy rừng cổ hoặc một kế hoạch lũ lụt phục hồi đất ngập nước có thể được so sánh trên các thuật ngữ tiền tệ nhất quán thay vì cái này có một con số và cái khác một đoạn văn các điều kiện.

## Cách tính toán

```
Giá trị tài sản dịch vụ hệ sinh thái = NPV của luồng các dịch
                                      vụ tài sản cung cấp

Giá trị tài sản = Σ (t = 1 đến T) [giá trị luồng dịch vụ
                 hàng năm_t / (1 + r)^t]

trong đó:
  giá trị luồng dịch vụ_t = số lượng dịch vụ trong năm t ×
                           giá trị đơn vị (ví dụ: các chuyến
                           thăm giải trí × giá trị mỗi chuyến
                           thăm; tấn carbon được hấp thụ ×
                           giá carbon)
  r = tỷ lệ chiết khấu (tỷ lệ chiết khấu xã hội Green Book —
      xem [tỷ lệ chiết khấu xã hội](../social-discount-rate/))
  T = chân trời thời gian mà tài sản được kỳ vọng cung cấp
      dịch vụ
```

Đây là cấu trúc giá-trị-hiện-tại-thuần giống hệt được sử dụng để định giá vốn được sản xuất hoặc đánh giá bất kỳ đầu tư công nào dưới [đánh giá Green Book](../green-book-appraisal/) — sự đóng góp của kế toán vốn tự nhiên là cung cấp các số lượng vật lý và giá trị đơn vị đáng tin cậy cho các dịch vụ trước đây được định giá ở không.

## Ví dụ minh họa

**Rừng đô thị, giá trị giải trí**: một khu rừng 50-hecta nhận một ước tính 80.000 chuyến thăm giải trí mỗi năm, mỗi chuyến được định giá (qua phương pháp chi-phí-du-lịch hoặc stated-preference — xem [định giá revealed preference](../revealed-preference-valuation/) và [định giá stated preference](../stated-preference-valuation/)) ở £3 mỗi chuyến thăm. Khu rừng được kỳ vọng tiếp tục cung cấp dịch vụ này cho 50 năm, được đánh giá ở một tỷ lệ chiết khấu 3,5%.

```
Giá trị giải trí hàng năm = 80.000 × £3 = £240.000/năm

NPV qua 50 năm ở 3,5% ≈ £240.000 × hệ số niên kim(3,5%, 50
năm)
hệ số niên kim(3,5%, 50) ≈ 21,4

Giá trị tài sản ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Thêm lưu trữ carbon**: cùng khu rừng hấp thụ ước tính 400 tấn CO2 mỗi năm, được định giá ở giá carbon không-giao-dịch của chính phủ khoảng £75/tấn (minh họa — sử dụng các giá trị carbon BEIS/DESNZ được công bố hiện tại cho một đánh giá trực tiếp).

```
Giá trị carbon hàng năm = 400 × £75 = £30.000/năm
NPV qua 50 năm ở 3,5% ≈ £30.000 × 21,4 ≈ £642.000

Tổng giá trị tài sản rừng (giải trí + carbon) ≈ £5.136.000 +
£642.000 ≈ £5.778.000
```

Đây là trước khi thêm sự giảm bớt lũ lụt, đa dạng sinh học, hoặc các dịch vụ chất-lượng-không-khí mà hướng dẫn ENCA cũng yêu cầu các người đánh giá xem xét — tổng cộng có chủ ý là một sàn, không phải một trần.

## Liên hệ với phát triển phần mềm

- Các hệ thống quản lý môi trường và tài sản cho các chính quyền địa phương và các cơ quan (công viên, đường cao tốc, các vùng nước) có thể gắn một sổ đăng ký vốn tự nhiên cùng với sổ đăng ký tài sản vật lý của họ, sử dụng cùng mẫu hình luồng-dịch-vụ-nhân-giá-trị-đơn-vị như bất kỳ [cơ sở dữ liệu chi phí đơn vị](../unit-cost-databases/) khác mà tổ chức duy trì.
- Vì NPV vốn tự nhiên nhạy với tỷ lệ chiết khấu (xem hệ số niên kim của ví dụ minh họa), bất kỳ công cụ tính toán nó nên phơi bày tỷ lệ và chân trời như các đầu vào hiển thị — cùng nguyên tắc minh bạch được bao gồm dưới [công bằng liên thế hệ và chiết khấu bền vững](../intergenerational-equity-and-sustainability-discounting/).
- Các tài khoản vốn tự nhiên ngày càng là một đầu vào bắt buộc cho các phần tác động môi trường của một trường hợp kinh doanh [đánh giá Green Book](../green-book-appraisal/); một nhóm cung cấp xây dựng công cụ trường hợp kinh doanh nên coi các tài khoản ONS và các giá trị đơn vị ENCA như dữ liệu tham chiếu để tích hợp, không phải điều gì các người đánh giá tính lại từ đầu mỗi lần.

## Những cạm bẫy

- **Đếm hai lần các dịch vụ hệ sinh thái chồng chéo** — giá trị giải trí và giá trị đa dạng sinh học cho cùng một địa điểm có thể chia sẻ dữ liệu sẵn-lòng-trả nền tảng; hướng dẫn ENCA cảnh báo rõ ràng chống lại việc cộng các định giá được suy ra từ các công cụ khảo sát chồng chéo.
- **Coi một giá trị tài sản vốn tự nhiên là tĩnh** — các luồng dịch vụ thay đổi với khí hậu, quản lý, và áp lực sử dụng đất; giá trị carbon và giảm-bớt-lũ-lụt của một khu rừng trong thập kỷ này không phải là một tính chất vĩnh viễn của địa điểm.
- **Sử dụng các giá trị đơn vị trung bình quốc gia cho một quyết định rất địa phương** — một hecta rừng đô thị có thể tiếp cận và một hecta vùng cao xa xôi có các giá trị giải trí rất khác nhau; hướng dẫn ENCA khuyến nghị các giá trị địa phương hoặc cụ thể-theo-địa-điểm nơi có sẵn thay vì mặc định thành các trung bình quốc gia.

## Nguồn tham khảo

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
