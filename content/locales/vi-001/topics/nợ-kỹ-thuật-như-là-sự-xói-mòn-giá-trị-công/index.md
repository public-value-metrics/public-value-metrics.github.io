# Nợ kỹ thuật như là sự xói mòn giá trị công

Nợ kỹ thuật là ẩn dụ năm 1992 của Ward Cunningham cho chi phí tương lai ngụ ý của các quyết định viết mã tiện lợi trong quá khứ: một **vốn gốc** (công việc khắc phục đang nợ) và một **lãi suất** (sự kéo đang diễn ra nó tạo ra trên việc cung cấp). Trong một bất động sản CNTT chính phủ legacy, lãi suất đó được trả trực tiếp từ public value — cung cấp thay-đổi-theo-luật-định chậm hơn, tỷ lệ thất bại cao hơn trên các dịch vụ hướng-công-dân, và một nhóm người ngày càng co lại có thể an toàn chạm vào hệ thống ở tất cả.

## Tại sao điều này quan trọng

Các hệ thống mainframe legacy và thời-đại-COBOL trên các bộ phận chính phủ Anh — HMRC và DWP trong số các bộ phận được trích dẫn nhiều nhất — mang một rủi ro được ghi chép tốt và leo thang mà National Audit Office đã gắn cờ lặp đi lặp lại, bao gồm trong báo cáo *Digital Transformation in Government* của nó (<https://www.nao.org.uk/>): các nền tảng đang già đi đắt đỏ để thay đổi, ngày càng khó để bảo mật, và phụ thuộc vào một lực lượng lao động chuyên gia đang nghỉ hưu nhanh hơn nó được thay thế. Không như một tồn đọng khu-vực-tư, nợ này nằm trực tiếp giữa các công dân và các quyền theo luật định của họ — một công cụ tính toán trợ cấp không thể được thay đổi an toàn là một hạn chế cung-cấp-chính-sách, không chỉ một sự bất tiện kỹ thuật. Việc khởi động lại năm 2013 của chương trình CNTT Universal Credit, khi National Audit Office thấy bản xây dựng ban đầu sẽ không mang lại value for money và một phần đáng kể của tài sản phần mềm phải bị xóa sổ, là một ví dụ kinh điển của nợ kỹ thuật không-được-định-giá đuổi kịp một chương trình công trực tiếp, hiển thị-bộ-trưởng.

## Cách tính toán

```
Vốn gốc SQALE = Σ trên các vi phạm (thời gian khắc phục) ×
               tỷ lệ chi phí nhà phát triển
Tỷ lệ nợ kỹ thuật (TDR) = chi phí khắc phục / chi phí phát
                         triển lại × 100
                    (các điểm SonarQube: A ≤5%, B ≤10%,
                    C ≤20%, D ≤50%)

Lãi suất (con số biện minh cho việc trả nợ):
  lãi suất/năm = Δ tốc độ cung cấp × giá trị mỗi đơn vị tốc
                độ + Δ tỷ lệ sự cố hướng-công-dân × chi phí
                mỗi sự cố + phí bảo hiểm kỹ-năng-chuyên-gia ×
                số lượng nhân viên bị ảnh hưởng
Trường hợp trả nợ = GTHT(lãi suất tránh được qua chân trời) −
                    chi phí khắc phục (được chiết khấu ở tỷ
                    lệ chiết khấu xã hội Green Book, xem
                    tỷ-lệ-chiết-khấu-xã-hội.md)
```

Vốn gốc nêu rõ nợ phải trả; lãi suất là điều tạo ra trường hợp đầu tư cho một ủy ban tài khoản công.

## Ví dụ minh họa

Một động cơ xử lý yêu cầu 250.000-dòng được viết trong một 4GL legacy. Sử dụng benchmark CAST Appmarq khoảng $3,61 vốn gốc nợ kỹ thuật mỗi dòng mã (≈£2,85 ở chuyển đổi điển hình):

```
Vốn gốc ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (hạng C)
```

Lãi suất được đo: bộ phận duy trì ba nhà thầu chuyên gia ở một phí tỷ lệ-hàng-ngày 40% trên các tỷ lệ kỹ sư cao cấp tiêu chuẩn vì các kỹ năng nội bộ đã mòn đi — một £180.000/năm bổ sung trên một nhóm sáu người. Hệ thống cũng gây ra bốn sự ngừng hoạt động xử lý chính/năm, mỗi cái đình chỉ các quyết định cho khoảng 5.000 người nộp đơn và chuyển hướng họ đến trung tâm liên hệ ở khoảng £25/cuộc gọi:

```
Lãi suất ≈ £180.000 (phí bảo hiểm kỹ năng)
         + 4 × 5.000 × £25 = £500.000 (chi phí liên hệ được
           chuyển hướng)
         ≈ £680.000/năm
```

Việc khắc phục có mục tiêu của các module hoạt-động-kém-nhất tốn £1.200.000 và được mô hình hóa để cắt lãi suất 70%:

```
Giảm lãi suất = 0,70 × 680.000 = £476.000/năm
Hoàn vốn ≈ 1.200.000 / 476.000 ≈ 2,5 năm
```

Việc nhắm mục tiêu quan trọng: khắc phục mã hiếm-khi-được-chạm mua không gì, vì lãi suất tập trung nơi tần suất thay đổi và mật độ nợ cả hai đạt đỉnh.

## Liên hệ với phát triển phần mềm

Khung public-value nâng cấp một trường hợp nợ kỹ thuật vượt ra ngoài "mã là cũ": diễn đạt bất động sản legacy như một kho dữ liệu của nơi năng lực cung cấp bị mất tập trung, và kết nối nó rõ ràng với [tổng-chi-phí-sở-hữu](../tổng-chi-phí-sở-hữu-trong-cntt-chính-phủ/), vì lãi suất là một chi phí vận hành thuộc về dòng TCO bất kể tài chính đã bao giờ yêu cầu nó hay không. Các hệ thống nặng-nợ cũng mang sự phơi bày [an-ninh-mạng](../giá-trị-an-ninh-mạng-khu-vực-công/) không tương xứng, vì tần suất vá lỗi và mật độ nợ tương quan — một hệ thống legacy không-thể-vá là nợ kỹ thuật có lãi suất được trả bằng rủi ro sự cố thay vì đồng tiền. Và mỗi sự đánh đổi khắc-phục-so-với-tính-năng bản thân nó là một quyết định [chi-phí-chậm-trễ](../chi-phí-chậm-trễ-trong-các-chương-trình-công/): trả nợ làm chậm thay đổi theo-luật-định tiếp theo, có CoD riêng của nó phải được cân với lãi suất được tiết kiệm.

## Những cạm bẫy

- **Báo cáo chỉ-vốn-gốc**: một ước tính khắc phục lớn, đáng sợ không có con số lãi suất không biện minh gì cho một người phê duyệt chi tiêu.
- **Các con số nợ được tạo bởi công cụ được coi theo nghĩa đen**: các máy quét kiểu SQALE đếm các vi phạm quy tắc; chúng bỏ sót loại nợ đắt đỏ — các quyết định kiến trúc và các quy tắc kinh doanh legacy không được ghi chép — trong khi gắn cờ các tiểu tiết.
- **"Viết lại tránh tất cả"**: các chương trình thay thế phải đạt cùng kỷ luật như bất kỳ trường hợp kinh doanh khác — chi phí đối chiếu thực tế, xác suất thành công, và chiết khấu — không phải một sự miễn trừ từ nó, như việc khởi động lại Universal Credit năm 2013 đã chứng minh.
- **Chủ nghĩa utopia nợ-bằng-không**: mức nợ tối ưu không phải là không; nợ là đòn bẩy mua cung cấp sớm hơn. Câu hỏi sống luôn là tỷ lệ lãi suất, không phải liệu nợ có tồn tại ở tất cả.

## Nguồn tham khảo

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
