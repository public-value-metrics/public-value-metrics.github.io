# Giá trị AI trong chính phủ

Giá trị AI trong chính phủ là yêu cầu rằng một hệ thống AI được sử dụng trong một dịch vụ công đạt cùng lát value-for-money và public-value như bất kỳ quyết định chi tiêu khác — không phải một lát thấp hơn vì nó mới, và không phải một lát cao hơn vì nó bị sợ hãi. Đó là câu hỏi mà một nhóm cung cấp phải có thể trả lời trước, không phải sau, một tính năng AI ra mắt: điều này sản xuất nhiều giá trị hơn nó tốn, khi sự đảm bảo, giám sát, và rủi ro được định giá trung thực?

## Tại sao điều này quan trọng

UK Central Digital and Data Office (CDDO) công bố Generative AI Framework for Government của nó năm 2024, xây dựng trên hướng dẫn tạm thời trước đó từ tháng 6 năm 2023, và cấu trúc nó xung quanh mười nguyên tắc bao gồm AI tạo sinh là gì, các ngụ ý đạo đức của nó, an ninh công cụ, các kiểm soát đảm bảo chất lượng, quản lý toàn chu kỳ sống AI tạo sinh, xác định các trường hợp sử dụng thực sự, hợp tác liên-chính-phủ, minh bạch, kỹ năng, và quản trị. Sự khẳng định của khung về "kiểm soát con người có ý nghĩa" và quản lý toàn chu kỳ sống tồn tại vì các trường hợp kinh doanh dự án AI có một chế độ thất bại cụ thể mà chi tiêu CNTT khác không có: con số năng suất tiêu đề của một thử nghiệm dễ sản xuất và dễ thổi phồng, vì nó được đo trước khi gánh nặng xác minh, sửa lỗi, và giám sát mà công cụ tạo ra được tính đến. Cùng với khung, Algorithmic Transparency Recording Standard (ATRS) yêu cầu các cơ quan công công bố một hồ sơ tiêu chuẩn hóa — mục đích, dữ liệu được sử dụng, hiệu suất, kiểm tra công bằng, các sắp xếp giám sát con người — cho các công cụ thuật toán có ảnh hưởng đáng kể đến các quyết định về các cá nhân, điều này làm cho chi phí đảm bảo của một hệ thống AI trở thành một vấn đề của hồ sơ công, không phải một ước tính nội bộ một nhóm có thể âm thầm bỏ qua.

## Cách tính toán

Việc áp dụng AI được đánh giá như một sự bổ sung vào, không phải một thay thế cho, đánh giá [value-for-money](../value-for-money/) tiêu chuẩn, với các thuật ngữ cụ thể-AI được làm rõ ràng thay vì được gộp vào một con số "lợi ích năng suất" đơn lẻ:

```
Giá trị thuần của một hệ thống AI =
    lợi ích năng suất (thời gian tiết kiệm × chi phí nhân
    viên được nạp)
  − chi phí giấy phép/compute
  − chi phí xác minh và giám sát con người (kiểm tra đầu ra
    AI trước khi hành động dựa trên nó — điều này không co
    lại thành không ngay cả với các công cụ trưởng thành)
  − chi phí ghi chép ATRS và giám sát đang diễn ra
  − chi phí điều chỉnh rủi ro của thiệt hại từ lỗi, thiên vị,
    hoặc hallucination, được cân theo ai chịu thiệt hại đó
    (trọng-số-phân-phối)

Một con số năng suất thử nghiệm bỏ qua thuật ngữ giám sát
không thể so sánh với một đường cơ sở chi phí kinh-doanh-như-
thường đã bao gồm xem lại con người tương đương — xem AI-
năng-suất-trong-khu-vực-công cho kỷ luật đo lường năng suất
đầy đủ hơn mà điều này mượn từ.
```

## Ví dụ minh họa

**Chính quyền địa phương sử dụng một công cụ AI tạo sinh để dự thảo các phản hồi đầu tiên cho các yêu cầu thuế hội đồng thông thường**: 25.000 yêu cầu/năm, trước đây được xử lý hoàn toàn bởi nhân viên xử lý trường hợp ở trung bình 14 phút/yêu cầu, chi phí nhân viên được nạp £34/giờ.

```
Chi phí cơ sở (không AI):
  25.000 × (14/60) × £34 = £198.333/năm

Tuyên bố tiêu đề thử nghiệm: AI dự thảo một phản hồi trong
90 giây, nhân viên xử lý trường hợp "chỉ xem lại và gửi" —
thời gian mới được tuyên bố là 3 phút
  25.000 × (3/60) × £34 = £42.500/năm
  → khoản tiết kiệm được tuyên bố £155.833/năm (trông mang
    tính chuyển đổi)

Con số được-nạp-đầy-đủ, được đo sau 3 tháng trực tiếp thay
vì trong các trường hợp thử nghiệm được chọn tay:
  Thời gian xem lại + sửa lỗi thực tế mỗi phản hồi: 6 phút
  (các dự thảo cần sửa đổi thực sự cho các yêu cầu phức tạp
  hoặc nhạy cảm về cảm xúc)
  25.000 × (6/60) × £34 = £85.000/năm
  Chi phí giấy phép/compute: £38.000/năm
  Ghi chép ATRS và giám sát chất lượng/thiên vị hàng quý:
  £14.000/năm
  Tổng chi phí = 85.000 + 38.000 + 14.000 = £137.000/năm

Tiết kiệm thực = 198.333 − 137.000 = £61.333/năm — thực sự
và đáng giữ, nhưng dưới một nửa tuyên bố tiêu đề của thử
nghiệm, và nó yêu cầu một phép đo thời-gian-giám-sát trung
thực, không phải phép đo trường-hợp-tốt-nhất của thử nghiệm,
để tìm ra.
```

## Liên hệ với phát triển phần mềm

Đây là nơi [AI-năng-suất-trong-khu-vực-công](../ai-productivity-in-the-public-sector/) và chủ đề này gặp nhau: các nhóm kỹ thuật xây dựng các tính năng AI vào các dịch vụ công sở hữu trang bị làm cho con số "thực" trong ví dụ minh họa có thể — ghi thời gian xem lại thực tế, khoảng cách sửa đổi giữa dự thảo và phản hồi được gửi, và tỷ lệ leo thang, thay vì tin tưởng các điều kiện demo của thử nghiệm. Các tính năng AI nên được đánh giá chống lại điểm 9 của [tiêu-chuẩn-dịch-vụ-số](../digital-service-standard/) (dịch vụ an toàn, quyền riêng tư người dùng) và được kiểm tra chéo với [giá-trị-an-ninh-mạng-khu-vực-công](../public-sector-cybersecurity-value/) nơi công cụ chạm vào dữ liệu công dân, và bất kỳ hệ thống AI với ảnh hưởng đáng kể đến các quyết định về các cá nhân cần một hồ sơ ATRS trước khi nó có thể được coi là sẵn-sàng-đánh-giá, theo cùng cách mà một dịch vụ cần một đánh giá [tiêu-chuẩn-dịch-vụ-số](../digital-service-standard/) đã vượt qua trước khi trực tiếp.

## Những cạm bẫy

- **Rửa AI**: gắn nhãn lại tự động hóa dựa-trên-quy-tắc hiện có như "AI" để truy cập tài trợ hoặc sự chú ý được dành riêng cho việc áp dụng AI, không có các rủi ro chính xác hoặc thiên vị thực sự biện minh cho sự giám sát bổ sung của khung.
- **Đo năng suất thử nghiệm, không phải năng suất sản xuất**: các thử nghiệm chạy trên các trường hợp thử nghiệm được tuyển chọn với các người xem lại tham gia, chú ý; sản xuất chạy trên hỗn hợp trường hợp lộn xộn đầy đủ với các người xem lại, theo thời gian, phát triển thiên vị tự động hóa và dưới-kiểm-tra đầu ra — cả hai làm sai lệch con số chi phí giám sát trung thực.
- **Bỏ qua đăng ký ATRS vì công cụ "không thực sự là quyết định tự động"**: ngưỡng của tiêu chuẩn là ảnh hưởng đáng kể đến một quyết định về một cá nhân, mà hầu hết các công cụ dự thảo hoặc phân loại AI hướng-công-dân đạt được ngay cả khi một con người kỹ thuật ký duyệt.
- **Bỏ qua tác động phân phối của các lỗi**: tỷ lệ lỗi trung bình của một hệ thống AI trên tất cả người dùng có thể che giấu một tỷ lệ lỗi hoặc thiên vị cao hơn nhiều cho các nhóm cụ thể; [trọng-số-phân-phối](../distributional-weighting/) nên được áp dụng cho thuật ngữ thiệt hại điều-chỉnh-rủi-ro, không chỉ con số chính xác tổng hợp.

## Nguồn tham khảo

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
