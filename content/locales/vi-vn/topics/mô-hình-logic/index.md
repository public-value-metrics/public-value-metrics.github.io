# Mô hình logic

Một mô hình logic là một biểu đồ tuyến tính kết nối đầu vào, hoạt động, đầu ra, kết quả, và tác động cho một chương trình, được đọc từ trái sang phải như một chuỗi trách nhiệm: nguồn lực đi vào, hoạt động xảy ra, đầu ra được sản xuất, kết quả thay đổi cho người thụ hưởng, và tác động tích lũy ở một thang thời gian rộng hơn hoặc dài hơn. Đó là cấu trúc chuẩn mà các nhà tài trợ và kiểm toán viên kỳ vọng một chương trình phải có thể báo cáo được, và đối tác hướng-về-phía-trước của một [lý thuyết thay đổi](../lý-thuyết-thay-đổi/) được lập bản đồ ngược.

## Tại sao điều này quan trọng

Magenta Book của HM Treasury chỉ định mô hình logic là một yếu tố bắt buộc của thiết kế đánh giá chương trình, và các nhà tài trợ như National Lottery Community Fund xây dựng các mẫu đơn xin và báo cáo của họ xung quanh chính xác chuỗi năm-cột này. Giá trị của nó là nó buộc một chương trình phải nêu rõ, trong một biểu đồ, những gì nó sẽ chi tiêu, những gì nó sẽ làm với nó, những gì nó sẽ sản xuất, và — quan trọng nhất — những gì nên thay đổi như một kết quả, ở một mức độ cụ thể mà một đoạn văn xuôi có xu hướng che khuất. Một mô hình logic với một cột đầu vào và hoạt động được điền đầy nhưng một cột kết quả trống hoặc mơ hồ có thể được chẩn đoán trong một cái nhìn, chính xác là lý do tại sao các nhà tài trợ yêu cầu một mô hình.

## Cách tính toán

Mô hình logic là một chuỗi cấu trúc hơn là một công thức:

```
Đầu vào         Hoạt động         Đầu ra              Kết quả               Tác động
(nguồn lực       (những gì được    (sản phẩm trực       (thay đổi cho          (thay đổi dài
 cam kết)         làm với chúng)    tiếp, có thể          người thụ hưởng)       hạn, cấp độ
                                    đếm)                                        dân số hoặc
                                                                                 hệ thống)
```

Mỗi cột nên cụ thể hơn cột trước: đầu vào là những gì bạn chi tiêu, hoạt động là những gì bạn làm, đầu ra là những gì được cung cấp bất kể hiệu ứng, kết quả là những gì thay đổi như một kết quả — sự phân biệt được đề cập đầy đủ trong [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/) — và tác động là thay đổi dài hạn, bền vững, thường chỉ có thể quy một phần.

## Ví dụ minh họa

**Chính quyền địa phương (dịch vụ tư vấn nợ số)**:

- Đầu vào: ngân sách hàng năm £180.000, 4,0 cố vấn FTE, một hệ thống quản lý trường hợp.
- Hoạt động: các phiên tiếp cận, các cuộc hẹn tư vấn nợ một-một.
- Đầu ra: 900 cuộc hẹn được cung cấp; 750 kế hoạch nợ và trợ cấp được phát hành.
- Kết quả: của các khách hàng đạt đến một theo dõi 6 tháng, 60% (450 của 750) báo cáo giảm nợ quá hạn, trung bình giảm £1.200 mỗi khách hàng — £540.000 tổng giảm nợ quá hạn.
- Tác động: một sự giảm có thể đo được trong các đơn xin vô gia cư từ cơ sở khách hàng của dịch vụ trong hai năm, chỉ có thể quy một phần cho dịch vụ này cùng với các can thiệp khác (xem [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/)).

**Tổ chức từ thiện (đối tác giới thiệu ngân hàng thực phẩm)**:

- Đầu vào: £45.000, 1,5 điều phối viên FTE, các thỏa thuận đối tác với 12 cơ quan giới thiệu.
- Hoạt động: phân loại giới thiệu, đóng gói và phân phối gói hàng.
- Đầu ra: 5.000 gói thực phẩm được phân phối cho 1.100 hộ gia đình.
- Kết quả: 68% hộ gia đình được khảo sát (748 của 1.100) báo cáo an ninh thực phẩm được cải thiện ở một cuộc gọi theo dõi 4 tuần.
- Tác động: đóng góp vào giảm nhu cầu dịch vụ khủng hoảng địa phương, chỉ được chứng minh trong thống kê khu vực tổng hợp, không thể quy riêng cho tổ chức từ thiện này.

## Liên hệ với phát triển phần mềm

Mô hình logic gần với một mô hình dữ liệu theo nghĩa đen cho một hệ thống kết quả: đầu vào và hoạt động là dữ liệu vận hành bạn đã có (chi tiêu, nhân sự, nhật ký phiên); đầu ra dễ trang bị vì chúng được đếm tại điểm cung cấp; kết quả yêu cầu thu thập dữ liệu theo dõi được thiết kế có chủ ý (khảo sát, liên kết dữ liệu hành chính) sẽ không tồn tại trừ khi ai đó xây dựng nó; tác động thường yêu cầu dữ liệu được liên kết, theo chiều dài, hoặc cấp độ dân số vượt ra ngoài hệ thống của bất kỳ chương trình đơn lẻ nào. Các kỹ sư xây dựng các công cụ báo cáo nên thúc đẩy các người ủy nhiệm xác định các chỉ số kết quả và tác động tại thời điểm thiết kế, thay vì mặc định thành một bảng điều khiển chỉ-đầu-ra vì đó là những gì dữ liệu giao dịch đã hỗ trợ. Xem [lợi tức xã hội trên đầu tư](../lợi-tức-xã-hội-trên-đầu-tư/) cho một phương pháp định giá các cột kết quả và tác động cụ thể, và [thực hiện lợi ích](../thực-hiện-lợi-ích/) để theo dõi liệu cột tác động có thực sự được cung cấp hay không.

## Những cạm bẫy

- **Dừng ở đầu ra.** Một bảng điều khiển báo cáo các cuộc hẹn được cung cấp hoặc các gói được phân phối và ngụ ý lợi ích đang báo cáo hoạt động, không phải kết quả — xem [kết quả so với đầu ra](../kết-quả-so-với-đầu-ra/).
- **Không có liên kết nhân quả được nêu rõ giữa các cột.** Một mô hình logic nêu rõ chuỗi nhưng không nêu rõ tại sao hoạt động nên sản xuất đầu ra nên sản xuất kết quả; lý luận đó thuộc về một [lý thuyết thay đổi](../lý-thuyết-thay-đổi/), và một mô hình logic không có một lý thuyết đằng sau nó là chưa được kiểm tra.
- **Coi nó như một tài liệu đấu thầu một lần.** Các mô hình logic được sản xuất chỉ để đáp ứng một đơn xin tài trợ và không bao giờ được cập nhật dừng phản ánh những gì chương trình thực sự làm.
- **Sự lan tràn quy kết ở cột tác động.** Tuyên bố thay đổi cấp độ dân số là do chỉ một chương trình gây ra, không có một đối chiếu thực tế, thổi phồng những gì bằng chứng hỗ trợ.

## Nguồn tham khảo

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
