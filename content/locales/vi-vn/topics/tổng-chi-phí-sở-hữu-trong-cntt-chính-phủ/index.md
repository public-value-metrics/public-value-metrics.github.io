# Tổng chi phí sở hữu (TCO) trong CNTT chính phủ

Tổng chi phí sở hữu là chi phí toàn-chu-kỳ-sống đầy đủ của một hệ thống — mua sắm cộng với mỗi năm chạy nó — được chiết khấu về một ngày chung. Trong CNTT chính phủ, lỗi dự báo đáng tin cậy nhất đơn lẻ là so sánh các nhà cung cấp hoặc các tùy chọn chỉ trên giá mua sắm, khi vận hành và duy trì thường chiếm đâu đó giữa một nửa và bốn phần năm hóa đơn tuổi thọ.

## Tại sao điều này quan trọng

Green Book của HM Treasury yêu cầu trường hợp tài chính trong bất kỳ trường hợp kinh doanh Five Case Model nào phải bao gồm các chi phí toàn-tuổi-thọ, không chỉ chi tiêu vốn — tuy nhiên National Audit Office đã nhiều lần thấy các bộ phận phê duyệt các đầu tư CNTT chống lại một dự báo chi-phí-chạy không đầy đủ hoặc lạc quan, chỉ để phát hiện chi phí vận hành thực sự khi hệ thống trực tiếp và dòng ngân sách vốn đã đóng. Technology Code of Practice của Government Digital Service và Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) đẩy các bộ phận hướng tới lưu trữ đám mây và commodity một phần vì nó làm cho chi phí đang diễn ra hiển thị và có thể so sánh, thay vì chôn trong một con số mua sắm vốn đơn lẻ trông hấp dẫn thấp tại phê duyệt và đắt sai ba năm sau.

## Cách tính toán

```
TCO = Chi phí mua sắm + Σ(t=1..N) Chi phí vận hành hàng
     năm_t / (1+r)^t − giá trị dư (được chiết khấu)

r = tỷ lệ chiết khấu xã hội chuẩn Green Book HM Treasury,
    3,5%/năm (lịch trình tỷ lệ giảm dần cho các chân trời
    vượt quá 30 năm)

Các thành phần chi phí vận hành: lưu trữ/cấp phép, hỗ trợ và
duy trì, vá lỗi an ninh và tuân thủ, thời gian nhân viên, làm
mới/di chuyển được lên kế hoạch
```

Xem [tỷ lệ chiết khấu xã hội](../tỷ-lệ-chiết-khấu-xã-hội/) cho lý do tại sao hệ số chiết khấu quan trọng trên một tuổi thọ hệ thống điển hình 5–10 năm, và [xây-dựng-so-với-mua-trong-chính-phủ](../xây-dựng-so-với-mua-trong-chính-phủ/) cho cách TCO cấp vào một quyết định xây-dựng/mua.

## Ví dụ minh họa

Một bộ phận so sánh hai hệ thống quản lý trường hợp trên một chân trời 5-năm ở tỷ lệ chiết khấu 3,5% của Green Book.

```
Hệ thống A: capex £3.500.000, opex £250.000/năm
Hệ thống B: capex £1.800.000 (trông rẻ hơn), opex
           £650.000/năm (gánh nặng hỗ trợ và tích hợp nhà
           cung cấp nặng hơn)

So sánh ngây thơ chỉ trên capex: B thắng, £1,8M < £3,5M.

Tổng hệ số chiết khấu, 5 năm ở 3,5%: 0,966+0,934+0,902+
0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 =
£4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 =
£4.734.750
```

TCO đảo quyết định ngây thơ: Hệ thống B đắt hơn một chút trong năm năm khi chi phí vận hành được chiết khấu và cộng lại, vì phần opex chi-phí-tuổi-thọ của nó là 62% (2.934.750 / 4.734.750) so với 24% của Hệ thống A — một trường hợp cụ thể của phát hiện "duy trì là đa số của hóa đơn", bị che giấu hoàn toàn bằng cách so sánh các giá nhãn.

## Liên hệ với phát triển phần mềm

TCO là con số nên kỷ luật mỗi quyết định [xây-dựng-so-với-mua](../xây-dựng-so-với-mua-trong-chính-phủ/) và mỗi trường hợp trả-nợ-[nợ-kỹ-thuật](../nợ-kỹ-thuật-như-là-sự-xói-mòn-giá-trị-công/), vì lãi suất nợ và duy trì bị trì hoãn cả hai là các dòng chi-phí-vận-hành thuộc về cùng tổng được chiết khấu, bất kể ai đã theo dõi chúng. Các kỹ sư đề xuất một lựa chọn nền tảng hoặc nhà cung cấp nên trình bày bảng TCO đầy đủ, không phải giá mua sắm, vì giá mua sắm chính xác là con số mà trường hợp tài chính Green Book được thiết kế để dừng các bộ phận chỉ dựa vào một mình. TCO cũng là mẫu số trung thực cho các đánh giá [value-for-money](../giá-trị-đồng-tiền/) — VFM so sánh lợi ích với chi phí, và một dòng chi phí được đếm thiếu thổi phồng mọi tỷ lệ VFM trong trường hợp kinh doanh.

## Những cạm bẫy

- **So sánh chỉ-capex**: lỗi mua sắm phổ biến nhất đơn lẻ — so sánh các giá danh sách nhà cung cấp không có một dự báo chi-phí-vận-hành khớp cho mỗi tùy chọn.
- **Loại trừ các chi phí thoát và di chuyển**: trích xuất dữ liệu kết-thúc-hợp-đồng, tái-nền-tảng-hóa, và các hình phạt khóa-nhà-cung-cấp là các dòng TCO thực hiếm khi xuất hiện trong trường hợp kinh doanh ban đầu.
- **Loại trừ chi phí an ninh và tuân thủ**: tần suất vá lỗi, gia hạn chứng nhận, và chi phí kiểm toán tỷ lệ với tuổi hệ thống và độ phức tạp — xem [giá-trị-an-ninh-mạng-khu-vực-công](../giá-trị-an-ninh-mạng-khu-vực-công/) — và thường xuyên bị bỏ ra khỏi dự báo opex.
- **So sánh không-chiết-khấu qua các tùy chọn với các hồ sơ chi phí khác nhau**: so sánh một tùy chọn nặng-capex với một tùy chọn nặng-opex không chiết khấu có hệ thống ưu ái bất kỳ tùy chọn nào trì hoãn nhiều chi phí hơn vào các năm sau.

## Nguồn tham khảo

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
