# Lợi tức nhà tài trợ trên đầu tư

Lợi tức nhà tài trợ trên đầu tư là những gì đồng tiền của một nhà tài trợ cụ thể thực sự mua trong kết quả — không phải các tỷ lệ vận hành của tổ chức từ thiện, và không phải lợi tức riêng của tổ chức từ thiện trên tổng ngân sách của nó. Nó định hình lại ROI từ góc nhìn của tổ chức (chúng ta vận hành hiệu quả như thế nào) sang góc nhìn của nhà tài trợ (đóng góp biên của tôi thay đổi gì), và hai con số này thường xuyên, và sai, được coi là cùng một thứ.

## Tại sao điều này quan trọng

"ROI" riêng của một tổ chức từ thiện, trong mức độ cụm từ được sử dụng ở tất cả, thường mô tả điều gì đó như [chi phí mỗi người thụ hưởng](../chi-phí-mỗi-người-thụ-hưởng/) hoặc [tỷ lệ chi phí chung tổ chức từ thiện](../tỷ-lệ-chi-phí-chung-tổ-chức-từ-thiện/) — các thước đo hiệu quả tổ chức. ROI của một nhà tài trợ là một câu hỏi hoàn toàn khác: cho rằng tổ chức từ thiện này đã có thu nhập khác, tiền của *nhà tài trợ này* thêm gì ở lề? Nếu một tổ chức từ thiện sẽ cung cấp cùng chương trình với hoặc không có một khoản tặng £10.000 cụ thể — vì nó có đủ dự trữ, hoặc vì một nhà tài trợ khác sẽ đã lấp khoảng trống — ROI nhà tài trợ của khoản tặng đó gần bằng không, cho dù tỷ lệ chi phí chung hoặc chi phí mỗi kết quả tổng thể của tổ chức từ thiện trông như thế nào.

Đây là cùng câu hỏi bổ sung làm nền tảng cho đánh giá [value for money](../giá-trị-đồng-tiền/) trong chi tiêu công Anh và [tính bổ sung và trọng lượng chết](../tính-bổ-sung-và-trọng-lượng-chết/) trong đánh giá chương trình: giá trị được tạo ra chỉ có thể ghi công cho một nhà tài trợ trong mức độ nó sẽ không xảy ra dù sao. Các nền tảng được khuyến nghị nhà tài trợ lớn và các tổ chức cho-hiệu-quả (Giving What We Can, GiveWell) xây dựng các khuyến nghị của họ rõ ràng xung quanh sự phân biệt này, hỏi không "đây có phải là một tổ chức từ thiện tốt" mà "tổ chức từ thiện này có không gian chưa được lấp đầy cho nhiều tài trợ hơn sao cho khoản tặng của tôi là bổ sung."

## Cách tính toán

```
ROI nhà tài trợ ≠ Hiệu quả vận hành của tổ chức từ thiện

ROI nhà tài trợ ≈ (Kết quả đạt được với khoản tặng) − (Kết
                   quả sẽ xảy ra không có nó, tức là đối
                   chiếu thực tế)
                 ─────────────────────────────────────────
                            Quy mô của khoản tặng

Các đầu vào chính:
  - Không gian cho nhiều tài trợ hơn (tổ chức từ thiện có bị
    hạn chế tài trợ ở lề không?)
  - Funging (một nhà tài trợ khác sẽ đã lấp khoảng trống
    không?)
  - Hiệu quả chi phí biên ở mức tài trợ cụ thể (chi phí
    thường tăng khi một can thiệp mở rộng vượt qua dân số
    dễ-tiếp-cận-nhất của nó)
```

Xem [hiệu quả chi phí của chủ nghĩa vị tha hiệu quả](../hiệu-quả-chi-phí-của-chủ-nghĩa-vị-tha-hiệu-quả/) cho cách GiveWell vận hành hóa câu hỏi "không gian cho nhiều tài trợ hơn," và [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/) cho phương pháp chung.

## Ví dụ minh họa

Một nhà tài trợ đang chọn giữa hai khoản tặng £5.000:

- **Tổ chức từ thiện C**: có một chương trình cốt lõi được tài trợ đầy đủ với £2 triệu dự trữ và một danh sách chờ các nhà tài trợ; £5.000 biên có khả năng được thêm vào dự trữ hoặc một hoạt động ưu tiên thấp hơn. Kết quả bổ sung nhà tài trợ ước tính: tối thiểu — tiền rõ ràng không thay đổi những gì xảy ra.
- **Tổ chức từ thiện D**: một chương trình nhỏ, được hỗ trợ bằng bằng chứng đã công khai nêu rõ nó sẽ phải quay lưng với 200 người vào quý tới không có thêm £50.000, và đã huy động được £42.000 của khoản đó. £5.000 biên rất có khả năng tài trợ cho việc cung cấp bổ sung thực sự — giả sử, 20 người bổ sung được phục vụ, ở chi phí mỗi người thụ hưởng được nêu riêng của tổ chức từ thiện là £250.

Cùng quy mô khoản tặng, cùng nhà tài trợ, ROI nhà tài trợ hoàn toàn khác nhau — không phải vì Tổ chức từ thiện C là một tổ chức kém hơn (nó có thể có một con số chi phí-mỗi-kết-quả tổng thể tốt hơn) mà vì khoảng trống tài trợ biên của nó đã được đóng.

## Liên hệ với phát triển phần mềm

Các nền tảng nhà tài trợ và các công cụ khuyến nghị cho quá thường chỉ hiển thị các chỉ số hiệu quả cấp tổ chức (tỷ lệ chi phí chung, chi phí mỗi người thụ hưởng) vì đó là những gì các tổ chức từ thiện công bố trong các báo cáo hàng năm và những gì dễ nhất để kéo vào một bảng so sánh. Trình bày ROI nhà tài trợ đúng cách yêu cầu một điểm dữ liệu khác, khó-nguồn-hơn: khoảng trống tài trợ hiện tại được nêu rõ của một tổ chức từ thiện hoặc "không gian cho nhiều tài trợ hơn," thay đổi suốt năm và hiếm khi là dữ liệu có cấu trúc. Các nền tảng muốn hỗ trợ lý luận ROI nhà tài trợ thực sự cần hoặc một luồng trực tiếp từ các công bố khoảng trống tài trợ (như GiveWell duy trì thủ công cho các tổ chức từ thiện được khuyến nghị của nó) hoặc một tuyên bố miễn trừ rõ ràng rằng một bảng so sánh đang hiển thị hiệu quả tổ chức, không phải tính bổ sung nhà tài trợ. Xem [tỷ lệ chi phí chung tổ chức từ thiện](../tỷ-lệ-chi-phí-chung-tổ-chức-từ-thiện/) cho chỉ số mà ROI nhà tài trợ thường nhất, và sai, bị trộn lẫn.

## Những cạm bẫy

- **Trộn lẫn hiệu quả tổ chức từ thiện với tính bổ sung nhà tài trợ.** Một tổ chức từ thiện được quản lý tốt, chi phí chung thấp vẫn có thể có ROI nhà tài trợ biên gần-bằng-không nếu nó không bị hạn chế tài trợ.
- **Bỏ qua funging.** Nếu một nhà tài trợ thể chế lớn sẽ đã bao gồm khoảng trống dù sao, khoản tặng của một nhà tài trợ cá nhân thay thế tiền của nhà tài trợ đó thay vì thêm việc cung cấp mới.
- **Giả định hiệu quả chi phí tuyến tính ở quy mô.** Các người thụ hưởng dễ-tiếp-cận-nhất thường được phục vụ trước; chi phí biên mỗi kết quả thường xuyên tăng khi một chương trình mở rộng, vì vậy ROI trên đồng tiền tiếp theo không giống với ROI trên đồng tiền trung bình đã chi.
- **Không có khoảng trống tài trợ được nêu rõ.** Một tổ chức từ thiện hoặc nền tảng không thể nói £X tiếp theo sẽ tài trợ gì không thể hỗ trợ một tuyên bố ROI nhà tài trợ thực sự, chỉ một tuyên bố chi-phí-trung-bình.

## Nguồn tham khảo

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
