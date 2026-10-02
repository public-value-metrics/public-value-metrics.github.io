# Tỷ lệ chi phí chung tổ chức từ thiện

Tỷ lệ chi phí chung tổ chức từ thiện là chi tiêu hành chính và gây quỹ được diễn đạt như một tỷ lệ phần trăm của tổng chi tiêu. Đó là con số được yêu cầu nhiều nhất đơn lẻ trong việc cho từ thiện — được các nhà tài trợ, các cơ quan giám sát, và thậm chí một số nhà tài trợ sử dụng như một proxy cho hiệu quả — và nó cũng là một trong các chỉ số hiệu quả bị mất uy tín triệt để nhất trong ngành, với các tổ chức đã phổ biến nó công khai từ bỏ nó năm 2013.

## Tại sao điều này quan trọng

Vào ngày 17 tháng 6 năm 2013, GuideStar, BBB Wise Giving Alliance, và Charity Navigator — ba cơ quan đánh giá và thông tin phi lợi nhuận Mỹ lớn nhất, với các đánh giá lịch sử riêng của họ đã giúp củng cố tỷ lệ chi phí chung như một từ viết tắt cho chất lượng tổ chức từ thiện — công bố một thư ngỏ chung cho các nhà tài trợ Mỹ, "The Overhead Myth," nêu rõ rằng tỷ lệ chi phí chung là một thước đo kém về hiệu suất của một tổ chức từ thiện và khuyến khích các nhà tài trợ nhìn vào minh bạch, quản trị, và kết quả thay vào đó. Đây là một sự đảo ngược trực tiếp bởi chính các tổ chức đã xây dựng văn hóa nhà tài trợ xung quanh tỷ lệ đó trong một thập kỷ.

Vấn đề nền tảng là cấu trúc, không chỉ về bề ngoài: một tỷ lệ chi phí chung thấp có thể được đạt được bằng cách đầu tư dưới mức vào chính xác những thứ làm cho một tổ chức từ thiện hiệu quả — một hệ thống quản lý trường hợp đầy đủ, nhân viên được đào tạo, giám sát và đánh giá — vì những thứ đó thường được ghi sổ là "admin" thay vì chi phí "chương trình." Một tổ chức từ thiện bỏ đói backoffice của nó để báo cáo 5% chi phí chung có thể kém khả năng cung cấp các kết quả hơn một tổ chức chi 20% cho một hoạt động được trang bị đầy đủ. Ở England và Wales, hướng dẫn của Charity Commission cho các ủy viên quản trị tránh xa một tỷ lệ phần trăm chi phí chung đơn lẻ như một bài kiểm tra hiệu quả, thay vào đó yêu cầu các ủy viên quản trị báo cáo về những gì tổ chức từ thiện đã đạt được so với các mục tiêu của nó — xem các yêu cầu báo cáo SORP được thảo luận trong [chi phí mỗi người thụ hưởng](../cost-per-beneficiary/).

## Cách tính toán

```
Tỷ lệ chi phí chung = (Chi phí hành chính + Chi phí gây quỹ) /
                      Tổng chi tiêu

Các biến thể phổ biến:
  Tỷ lệ chương trình        = Chi tiêu chương trình (từ thiện
                             trực tiếp) / Tổng chi tiêu = 1 −
                             tỷ lệ chi phí chung
  Hiệu quả gây quỹ           = Chi phí gây quỹ / Tiền được
                             huy động
```

Không công thức nào trong số này chứa thông tin nào về các kết quả đạt được. Một tổ chức từ thiện có thể tối thiểu hóa mỗi cái trong số chúng và vẫn thất bại mọi người thụ hưởng; xem [chi phí mỗi kết quả](../cost-per-outcome/) cho chỉ số thực sự tham gia vào việc liệu tiền có hoạt động hay không.

## Ví dụ minh họa

Hai tổ chức từ thiện, cùng tổng chi tiêu:

- **Tổ chức từ thiện A**: £1.000.000 tổng chi tiêu, £80.000 admin + gây quỹ → tỷ lệ chi phí chung 8%. Nó không có chức năng giám sát và đánh giá, một nhân viên tài chính quá tải, và không có hệ thống quản lý trường hợp; luân chuyển nhân viên cao và dữ liệu kết quả không được thu thập.
- **Tổ chức từ thiện B**: £1.000.000 tổng chi tiêu, £220.000 admin + gây quỹ → tỷ lệ chi phí chung 22%. Nó tài trợ một nhóm đánh giá nhỏ, một hệ thống quản lý trường hợp nắm bắt theo dõi kết quả, và đào tạo bảo vệ đúng đắn.

Một nhà tài trợ sàng lọc chỉ trên tỷ lệ chi phí chung chọn A và từ chối B — ngược lại với những gì bằng chứng [chi phí mỗi kết quả](../cost-per-outcome/) có khả năng sẽ thể hiện, vì B là tổ chức duy nhất trong hai tổ chức được định vị để chứng minh, hoặc cải thiện, các kết quả thực tế của nó.

## Liên hệ với phát triển phần mềm

Phần mềm tài chính và báo cáo tài trợ cho ngành thường hardcode sự phân chia chi-phí-chung/chương-trình như một trường phân loại trên mỗi dòng chi phí, vì đó là những gì các cơ quan quản lý và một số nhà tài trợ vẫn yêu cầu trong các báo cáo theo luật định. Các kỹ sư xây dựng các hệ thống này nên coi yêu cầu đó là một nghĩa vụ tuân thủ, không phải một tín hiệu thiết kế rằng tỷ lệ chi phí chung là chỉ số đáng để hiển thị nổi bật trên một bảng điều khiển; kết hợp nó, ở bất cứ đâu nó được hiển thị, với một chỉ số dựa-trên-kết-quả để người xem không thể đọc tỷ lệ chi phí chung một cách cô lập. Xem [lợi tức nhà tài trợ trên đầu tư](../donor-return-on-investment/) cho chỉ số nên đứng cạnh nó, và [value for money](../value-for-money/) cho luận điểm tương đương khu-vực-công chống lại các proxy hiệu quả tỷ-lệ-đơn.

## Những cạm bẫy

- **Sử dụng tỷ lệ chi phí chung như một ngưỡng sàng lọc.** Từ chối bất kỳ tổ chức từ thiện trên một ngưỡng tùy ý (ví dụ: "không quá 15% chi phí chung") có hệ thống phạt các tổ chức được trang bị đúng đắn, được đánh giá tốt và thưởng đầu tư dưới mức.
- **Phân loại sai chi phí cung cấp trực tiếp như chi phí chung**, hoặc ngược lại — các quy ước kế toán cho những gì tính là "chương trình" so với "admin" thay đổi đủ giữa các tổ chức từ thiện mà các tỷ lệ thường không thể so sánh được ngay cả ở giá trị bề mặt.
- **Giả định chi phí chung thấp ngụ ý tác động cao.** Hai điều, tốt nhất, là không tương quan; xem tuyên bố cốt lõi của thư Overhead Myth năm 2013.
- **Bỏ qua rằng một số chiến lược hợp pháp yêu cầu chi phí chung cao hơn trong ngắn hạn.** Một giai đoạn xây dựng năng lực hoặc phát triển tổ chức có chủ ý tăng chi tiêu admin để cải thiện việc cung cấp sau đó.

## Nguồn tham khảo

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
