# Chi phí mỗi kết quả

Chi phí mỗi kết quả là tổng chi tiêu chương trình chia cho số người đạt được một thay đổi có ý nghĩa, được xác định trong hoàn cảnh của họ — không phải số người chỉ đơn giản nhận một dịch vụ. Đó là chỉ số hiệu quả sắc nét nhất mà một nhà tài trợ hoặc nhóm cung cấp có thể sử dụng, vì nó buộc một câu hỏi trước đó mà hầu hết các tổ chức từ thiện tránh: chính xác, điều gì tính là thành công?

## Tại sao điều này quan trọng

Một ngân hàng thực phẩm có thể báo cáo hai con số rất khác nhau từ cùng sổ sách tài khoản của năm. Chi phí mỗi gói thực phẩm được phân phối có thể là £15. Chi phí mỗi hộ gia đình tiếp tục đạt được an ninh thực phẩm — không còn cần viện trợ thực phẩm khẩn cấp, được xác minh tại một điểm theo dõi — có thể là £340. Cả hai đều đúng. Chỉ một trong số đó nói với một nhà tài trợ liệu tiền có đang hoạt động hay không. Khoảng cách giữa chúng là khoảng cách giữa một đầu ra và một kết quả: một gói được đưa qua là một đầu ra; một hộ gia đình không còn trong khủng hoảng là một kết quả. Xem [kết quả so với đầu ra](../outcomes-vs-outputs/).

Khu vực thứ ba của Anh đã dành hai thập kỷ xây dựng hạ tầng để buộc sự phân biệt này. "Phương pháp bốn cột" của New Philanthropy Capital về hiệu quả tổ chức từ thiện rõ ràng yêu cầu các tổ chức nêu rõ kết quả của họ trước đầu ra của họ, và Inspiring Impact — hợp tác đo lường tác động được hậu thuẫn bởi các nhà tài trợ Anh — công bố một Outcomes Matrix mà nhiều đơn xin tài trợ nay yêu cầu các tổ chức từ thiện hoàn thành. Chương trình nghiên cứu "State of Hunger" hàng năm của Trussell Trust, được chạy với Heriot-Watt University, tồn tại chính xác vì các đếm gói hàng một mình không nói gì về việc liệu mọi người có thoát khỏi mất an ninh thực phẩm hay không.

Chi phí mỗi kết quả chỉ có ý nghĩa khi bạn đã cố định đối chiếu thực tế: một kết quả đạt được "dù sao" không phải là một kết quả mà chương trình đã mua. Xem [phân tích đối chiếu thực tế](../counterfactual-analysis/) và [sự thay thế và quy kết](../displacement-and-attribution/).

## Cách tính toán

```
Chi phí mỗi kết quả = Tổng chi phí chương trình / Số người
                      thụ hưởng đạt được kết quả được xác định

trong đó:
  Tổng chi phí chương trình = chi phí cung cấp trực tiếp +
                              phần công bằng của chi phí
                              chung
  Kết quả được xác định      = một thay đổi trạng thái có thể
                              đo được, xác định trước (ví dụ:
                              "an ninh thực phẩm tại theo dõi
                              6 tháng", không phải "nhận được
                              một gói thực phẩm")
```

So sánh với [cơ sở dữ liệu chi phí đơn vị](../unit-cost-databases/) (ví dụ: các benchmark chi phí đơn vị cụ thể theo ngành) để đánh giá liệu một chi phí mỗi kết quả nhất định là tốt, trung bình, hay kém so với các can thiệp tương đương.

## Ví dụ minh họa

**Ngân hàng thực phẩm, một năm**:

- Tổng chi phí chương trình: £450.000
- Các gói được phân phối: 30.000
- Chi phí mỗi gói (một chỉ số đầu ra): £450.000 / 30.000 = **£15**

Tổ chức từ thiện cũng chạy một khảo sát theo dõi sáu tháng với một mẫu các hộ gia đình, thấy rằng 35% hộ gia đình nhận ba gói hoặc nhiều hơn báo cáo không còn cần viện trợ thực phẩm khẩn cấp và đạt điểm trên ngưỡng an ninh thực phẩm trên một module khảo sát an ninh thực phẩm tiêu chuẩn. Của 1.800 hộ gia đình nhận ba-cộng gói đó năm đó, 630 đạt được kết quả đó.

```
Chi phí mỗi kết quả = £450.000 / 630 = £714 mỗi hộ gia đình
đạt được an ninh thực phẩm
```

Con số £714 đó là con số mà một nhà tài trợ so sánh tổ chức từ thiện này với một thử nghiệm chuyển tiền mặt hoặc một dịch vụ tư vấn nợ nên sử dụng — không phải £15. Nếu một chương trình chuyển tiền mặt tương đương trong cùng khu vực đạt được an ninh thực phẩm ở £500 mỗi hộ gia đình, ngân hàng thực phẩm không rõ ràng là tuyến đường hiệu quả hơn đến cùng kết quả, ngay cả khi chi phí mỗi gói của nó trông rẻ.

## Liên hệ với phát triển phần mềm

Hầu hết các hệ thống quản lý trường hợp được xây dựng để ghi đầu ra, vì đầu ra là những gì xảy ra trong giao dịch (một gói được đưa qua, một biểu mẫu được nộp). Kết quả thường xảy ra sau đó, thường ngoài cửa sổ chụp bình thường của hệ thống, và yêu cầu một quyết định thiết kế có chủ ý: xây dựng một cơ chế theo dõi (một trigger khảo sát, một luồng công việc liên hệ lại, một bài tập liên kết dữ liệu) như một tính năng hàng đầu, không phải một suy nghĩ thêm được gắn vào cho một báo cáo hàng năm. Các kỹ sư xây dựng các nền tảng quản lý tài trợ hoặc quản lý trường hợp cho ngành nên coi "sự kiện kết quả là gì, và chúng ta quan sát nó như thế nào" như một câu hỏi yêu cầu được đặt ra trước khi mô hình dữ liệu được cố định — khó hơn nhiều để lắp lại một trường kết quả so với một bộ đếm đầu ra. Xem [kết quả so với đầu ra](../outcomes-vs-outputs/) và [mô hình logic](../logic-model/) cho cách cấu trúc cuộc hội thoại yêu cầu đó, và [chi phí mỗi người thụ hưởng](../cost-per-beneficiary/) cho chỉ số nhanh hơn, thô hơn mà các nhóm tiếp cận khi theo dõi kết quả chưa được xây dựng.

## Những cạm bẫy

- **Báo cáo đầu ra mặc quần áo của kết quả.** "Người được tiếp cận" không phải là "người được giúp đỡ." Nếu chỉ số có thể được sản xuất bởi một nhật ký hệ thống không có liên hệ theo dõi, nó gần như chắc chắn là một đầu ra.
- **Lợi dụng mẫu số.** Thu nhỏ dân số kết quả thành "những người hoàn thành chương trình" âm thầm bỏ những người bỏ dở — thường là các trường hợp khó nhất — và thổi phồng tỷ lệ rõ ràng. Nêu rõ mẫu số là mọi người đã bắt đầu, không phải mọi người đã hoàn thành.
- **Không có đối chiếu thực tế.** Đếm bất kỳ ai đạt được kết quả, bao gồm những người sẽ đạt được dù sao, thổi phồng những gì chương trình đã mua. Xem [phân tích đối chiếu thực tế](../counterfactual-analysis/).
- **So sánh qua các định nghĩa kết quả không tương thích.** "An ninh thực phẩm" được đo bằng một module khảo sát được xác thực không thể so sánh với "an ninh thực phẩm" tự báo cáo trong một biểu mẫu hài lòng; một bảng xếp hạng chi-phí-mỗi-kết-quả chỉ trung thực khi các định nghĩa kết quả khớp.

## Nguồn tham khảo

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
