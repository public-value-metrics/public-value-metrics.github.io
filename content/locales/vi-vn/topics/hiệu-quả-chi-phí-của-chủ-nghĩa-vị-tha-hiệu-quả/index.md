# Hiệu quả chi phí của chủ nghĩa vị tha hiệu quả

Lý luận hiệu quả chi phí của chủ nghĩa vị tha hiệu quả (EA) xếp hạng các can thiệp từ thiện theo lượng điều tốt — thường được diễn đạt như số mạng sống được cứu, hoặc sức khỏe được giành, mỗi đô la chi — và hướng tiền đến bất kỳ can thiệp nào mua được nhiều điều tốt nhất ở lề. GiveWell là người thực hành có ảnh hưởng nhất của lĩnh vực: nó công bố các ước tính chi-phí-mỗi-mạng-sống-được-cứu và chi-phí-mỗi-kết-quả rõ ràng, được cập nhật cho một danh sách ngắn các "tổ chức từ thiện hàng đầu," và khuyến nghị các nhà tài trợ cho tiền vào bất kỳ tổ chức nào hiện có không gian cho nhiều tài trợ hơn ở tỷ lệ tốt nhất.

## Tại sao điều này quan trọng

GiveWell nêu rõ hiệu quả chi phí như tiêu chí hàng đầu trong phương pháp luận được công bố của nó: nó tìm kiếm các can thiệp được hỗ trợ bằng bằng chứng, ước tính hiệu quả chi phí của chúng trong một đơn vị chung, và xếp hạng qua các nguyên nhân hoàn toàn không liên quan — màn chống muỗi chống sốt rét, bổ sung vitamin A, chuyển tiền mặt, các khoản thanh toán khuyến khích vắc xin — trên trục đơn lẻ đó. Đây là một nhập khẩu trực tiếp của lý luận kiểu QALY/DALY từ kinh tế học y tế vào từ thiện: giống như một hệ thống y tế hỏi "bao nhiêu QALY mỗi pound ở lề," GiveWell hỏi "bao nhiêu mạng sống, hoặc năm sống, mỗi đô la ở lề," và coi các nguyên nhân là có thể thay thế được khi được chuyển đổi thành đơn vị chung đó. Xem [phân tích hiệu quả chi phí trong chính phủ](../phân-tích-hiệu-quả-chi-phí-trong-chính-phủ/) cho người anh em khu-vực-công của khung lý luận này.

Con số GiveWell được trích dẫn nhiều nhất liên quan đến Against Malaria Foundation (AMF), phân phối màn chống muỗi đã xử lý thuốc trừ sâu. Trong ví dụ minh họa được công bố của GiveWell (rút từ dữ liệu tài trợ 2020), khoảng $4.500 tài trợ đủ màn để tránh một ca tử vong, sau khi tính đến việc sử dụng màn không hoàn hảo, tỷ lệ tử vong cơ bản không có màn, và điều chỉnh cho funging — khả năng AMF sẽ nhận được một phần tài trợ đó từ các nhà tài trợ khác dù sao. GiveWell rõ ràng rằng con số này di chuyển theo thời gian và qua các địa lý khi tỷ lệ phổ biến sốt rét, chi phí màn, và khoảng trống tài trợ thay đổi, và chi phí để cứu một mạng sống thường được kỳ vọng tăng theo thời gian khi các cơ hội rẻ nhất được tận dụng đầu tiên; đó là một minh họa làm việc của phương pháp, không phải một giá cố định.

## Cách tính toán

```
Hiệu quả chi phí = Chi phí của can thiệp / Đơn vị điều tốt
                   được sản xuất (ví dụ: $ mỗi mạng sống được
                   cứu, $ mỗi DALY tránh được, $ mỗi QALY)

Chuỗi của GiveWell cho một chương trình màn chống muỗi, minh
họa:
  $ mỗi màn được mua và giao
    ÷ phần màn thực sự được sử dụng
    ÷ người được bảo vệ mỗi màn
    × tỷ lệ tử vong hàng năm cơ bản không có màn
    × giảm tỷ lệ tử vong có thể quy cho việc sử dụng màn (từ
      bằng chứng RCT)
    × năm bảo vệ mỗi màn
    ÷ điều chỉnh cho funging (tiền thay thế tài trợ của các
      nhà tài trợ khác)
  = $ mỗi mạng sống được cứu (sau các hiệu ứng tài trợ đối
    chiếu thực tế)
```

Chuỗi này quan trọng vì mỗi bước là một nơi các ước tính hiệu quả chi phí thường đi sai — xem các cạm bẫy dưới đây — và vì nó làm rõ rằng "chi phí mỗi mạng sống được cứu" không bao giờ là một giá quan sát thô; đó là một ước tính được mô hình hóa xây dựng từ nhiều đầu vào không chắc chắn riêng biệt.

## Ví dụ minh họa

Hai can thiệp giả định, cả hai được hỗ trợ bằng bằng chứng, cạnh tranh cho cùng £100.000 ở lề:

- **Màn chống muỗi (kiểu AMF)**: khoảng $4.500 mỗi mạng sống được cứu trên ví dụ minh họa được công bố của GiveWell rút từ dữ liệu 2020, tức là rất khoảng 20 mạng sống được cứu mỗi £100.000 tùy thuộc vào tỷ giá hối đoái và năm được sử dụng.
- **Chương trình tẩy giun**: không có lợi ích tử vong hợp lý nào cả, nhưng bằng chứng mạnh về các khoản tăng thu nhập dài hạn từ tẩy giun thời thơ ấu; GiveWell định giá nó theo các thuật ngữ tăng-thu-nhập, không phải mạng-sống-được-cứu, điều này làm cho việc so sánh trực tiếp với màn chống muỗi khó khăn mà không có một đơn vị chung. GiveWell sử dụng một khung "trọng số đạo đức" rõ ràng để chuyển đổi cả hai thành một đơn vị nội bộ cho xếp hạng.

Kỷ luật của phương pháp EA là buộc sự so sánh này ra công khai thay vì tài trợ cho cả hai vì cả hai "nghe tốt." Xem [lợi tức xã hội trên đầu tư](../lợi-tức-xã-hội-trên-đầu-tư/) cho hàm buộc tương đương được sử dụng bởi các doanh nghiệp xã hội và các người ủy nhiệm địa phương Anh, hỏi cùng câu hỏi — lợi tức tốt nhất mỗi pound là gì — trong một ngôn ngữ giá-trị-tiền-hóa thay vì một ngôn ngữ mạng-sống/DALY.

## Liên hệ với phát triển phần mềm

Các kỹ sư xây dựng các nền tảng nhà tài trợ, các công cụ khớp tài trợ, hoặc các bảng điều khiển tác động cho các nhà tài trợ được căn chỉnh EA (Open Philanthropy, GiveWell bản thân nó, các nền tảng cho-hiệu-quả như Giving What We Can) cần trình bày các ước tính hiệu quả chi phí như các phạm vi với các giả định được nêu rõ, không phải các con số đơn lẻ — mô hình nền tảng có nhiều đầu vào nhân-tử không chắc chắn, và việc gộp điều đó thành một con số trên một bảng điều khiển trình bày sai sự tin tưởng mà GiveWell bản thân nó nêu rõ. Phiên bản mỗi ước tính theo ngày công bố; GiveWell xem lại các con số của nó, đôi khi đáng kể, khi bằng chứng RCT mới hoặc dữ liệu khoảng trống tài trợ đến, và một nền tảng cache một con số cũ âm thầm trở nên sai.

## Những cạm bẫy

- **Coi một ước tính hiệu quả chi phí là một giá cố định.** Đó là một đầu ra mô hình với nhiều đầu vào nhân-tử không chắc chắn (tỷ lệ sử dụng, tỷ lệ tử vong cơ bản, điều chỉnh funging); nêu rõ ngày và phiên bản.
- **Bỏ qua funging/sự thay thế.** Tài trợ cho một tổ chức sẽ nhận được tiền từ một nhà tài trợ khác dù sao mua ít điều tốt đối chiếu thực tế hơn tiêu đề gợi ý — xem [tính bổ sung và trọng lượng chết](../tính-bổ-sung-và-trọng-lượng-chết/) và [sự thay thế và quy kết](../sự-thay-thế-và-quy-kết/).
- **So sánh qua các đơn vị không tương thích không chuyển đổi.** "Mạng sống được cứu" và "thu nhập được giành" không thể so sánh trực tiếp mà không có một khung trọng số đạo đức rõ ràng; trình bày chúng cạnh nhau như thể chúng là một lỗi phân loại.
- **Tầm nhìn hầm khu-vực-nguyên-nhân.** Chỉ xếp hạng trong một khu vực nguyên nhân (ví dụ: chỉ các tổ chức từ thiện y tế toàn cầu) và gọi người thắng "tổ chức từ thiện hiệu quả chi phí nhất" thổi phồng tuyên bố; xếp hạng liên-nguyên-nhân của GiveWell có chủ ý hẹp (y tế và phúc lợi toàn cầu), không phải phổ quát.

## Nguồn tham khảo

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
