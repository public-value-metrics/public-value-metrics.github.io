# Đánh giá tác động so với đánh giá quy trình

Đánh giá tác động hỏi liệu một chương trình có gây ra các kết quả dự định hay không. Đánh giá quy trình hỏi liệu chương trình đã thực sự được cung cấp như được thiết kế hay không — cho ai, ở liều lượng nào, và với những trở ngại hoặc yếu tố thuận lợi nào trên đường đi. Đây là những câu hỏi khác nhau yêu cầu các phương pháp khác nhau, và Magenta Book của HM Treasury coi việc ủy quyền cả hai cùng nhau là thực hành chuẩn, vì một kết quả tác động yếu hoặc bằng không không thể giải thích được một mình: nó không thể cho bạn biết liệu lý thuyết nền tảng của chương trình có sai hay không, hoặc liệu một lý thuyết tốt chỉ đơn giản không bao giờ được cung cấp đúng cách.

## Tại sao điều này quan trọng

Các đánh giá chính phủ đã nhiều lần không tìm thấy hiệu ứng có thể đo lường được từ một chương trình mà không có đánh giá quy trình để giải thích tại sao — để lại các người ủy nhiệm không thể phân biệt "ý tưởng này không hoạt động" (thất bại lý thuyết) từ "ý tưởng này chưa bao giờ thực sự được thử đúng cách" (thất bại triển khai). Hướng dẫn của Medical Research Council về đánh giá quy trình của các can thiệp phức tạp, được xuất bản trong BMJ năm 2015 và được trích dẫn rộng rãi cùng với Magenta Book, chính thức hóa độ trung thành, liều lượng, và phạm vi tiếp cận như những điều cốt lõi mà một đánh giá quy trình phải đo. Việc ủy quyền một đánh giá tác động không có đánh giá quy trình có nguy cơ từ bỏ một thiết kế chương trình thực sự hợp lý vì nó được cung cấp cho một nửa dân số dự định ở một phần nhỏ của cường độ dự định — một lỗi mà một người xây dựng hệ thống được định vị tốt để ngăn chặn, vì độ trung thành cung cấp chính xác là những gì các hệ thống dữ liệu vận hành có thể nắm bắt trong gần-thời-gian-thực.

## Cách tính toán

```
Đánh giá quy trình hỏi:
 - Nó có được cung cấp cho dân số mục tiêu, ở liều lượng/
   cường độ đã lên kế hoạch không?
 - Việc cung cấp có khớp với thiết kế mô hình logic / lý
   thuyết thay đổi không?
 - Những trở ngại hoặc yếu tố thuận lợi nào ảnh hưởng đến
   việc cung cấp?
 Phương pháp: kiểm tra độ trung thành so với các ngưỡng được
          xác định trước, các nghiên cứu trường hợp, phỏng
          vấn, dữ liệu cung cấp hành chính.

Đánh giá tác động hỏi:
 - Điều gì đã thay đổi, và bao nhiêu phần của thay đổi đó có
   thể quy cho chương trình?
 Phương pháp: RCT, DiD, PSM, RDD — xem các-phương-pháp-đánh-
          giá-tác-động — so với một đối chiếu thực tế.

Chẩn đoán kết hợp:
 Không hiệu ứng + độ trung thành cao  → thất bại lý thuyết:
                                       mô hình bản thân không
                                       tạo ra kết quả
 Không hiệu ứng + độ trung thành thấp → thất bại triển khai:
                                       mô hình chưa bao giờ
                                       được kiểm tra đúng cách
 Hiệu ứng tìm thấy + độ trung thành cao → tái tạo với tin
                                         tưởng
 Hiệu ứng tìm thấy + độ trung thành thấp → điều tra thêm:
                                          hiệu ứng có thể mỏng
                                          manh hoặc đặc thù
                                          theo địa điểm
```

## Ví dụ minh họa

**Chính quyền địa phương (chương trình làm cha mẹ)**: một đánh giá tác động sử dụng difference-in-differences tìm thấy một thay đổi +2 điểm phần trăm trong một thước đo phúc lợi trẻ em — không có ý nghĩa thống kê. Đánh giá quy trình, được chạy cùng với nó, thấy chương trình chỉ tiếp cận 210 trong số 500 gia đình mục tiêu (42% phạm vi tiếp cận), và trong số đó, chỉ 95 hoàn thành ngưỡng độ trung thành được xác định trước 75%+ phiên tham dự — 19% phạm vi tiếp cận dự kiến ban đầu. Kết luận: kết quả tác động yếu nhất quán với một thất bại triển khai, không phải bằng chứng mô hình chương trình không hoạt động; phản ứng phù hợp là sửa con đường giới thiệu đã gây ra sự sụt giảm 58%, không phải từ bỏ thiết kế chương trình.

**Tổ chức từ thiện (chương trình hiểu biết số)**: một đánh giá tác động tìm thấy một hiệu ứng mạnh (+18 điểm phần trăm trên một điểm tự tin số), và một đánh giá quy trình song song xác nhận 92% độ trung thành với chương trình học đã lên kế hoạch trên tất cả 12 địa điểm cung cấp. Kết hợp, nhà tài trợ có thể mở rộng quy mô chương trình với sự tự tin, vì hiệu ứng được thể hiện đứng vững nhất quán hơn là sản phẩm của một địa điểm bất thường tốt.

## Liên hệ với phát triển phần mềm

Dữ liệu đánh giá quy trình chính xác là những gì các hệ thống cung cấp được định vị tốt để nắm bắt: sự tham dự so với kế hoạch, liều lượng phiên, và sự sụt giảm ở mỗi giai đoạn của một kênh giới thiệu hoặc đăng ký — cùng phân tích kênh mà các kỹ sư đã xây dựng cho các tính năng sản phẩm, được áp dụng cho đường ống cung cấp của một chương trình xã hội thay vào đó. Cung cấp các chỉ số độ trung thành và phạm vi tiếp cận cho các quản lý chương trình trong gần-thời-gian-thực, thay vì chờ đợi một đánh giá cuối-tài-trợ, để một con đường giới thiệu bị hỏng được sửa giữa-chương-trình thay vì chỉ được phát hiện khi kỳ tài trợ đã kết thúc. Xem [các phương pháp đánh giá tác động](../các-phương-pháp-đánh-giá-tác-động/) cho các thiết kế nhân quả mà đánh giá quy trình được kết hợp với, [lý thuyết thay đổi](../lý-thuyết-thay-đổi/) và [mô hình logic](../mô-hình-logic/) cho thiết kế mà đánh giá quy trình kiểm tra độ trung thành so với, và [thực hiện lợi ích](../thực-hiện-lợi-ích/) để theo dõi việc cung cấp đến các kết quả đã được hứa.

## Những cạm bẫy

- **Chỉ ủy quyền đánh giá tác động.** Một kết quả bằng không hoặc yếu sau đó không thể được diễn giải là thất bại lý thuyết hoặc thất bại triển khai, đó chính xác là sự phân biệt quan trọng để quyết định làm gì tiếp theo.
- **Coi đánh giá quy trình là một bổ sung mềm.** Nó cần cùng sự chặt chẽ và các tiêu chí độ trung thành được xác định trước như thiết kế tác động, nếu không nó sụp đổ thành giai thoại khi kết quả đến.
- **Nhầm lẫn "đúng thời gian và đúng ngân sách" với "được cung cấp như được thiết kế".** Đánh giá quy trình kiểm tra độ trung thành với mô hình — liều lượng, nhóm mục tiêu, nội dung — không phải trạng thái RAG quản lý dự án.
- **Không đăng ký trước các ngưỡng độ trung thành.** Quyết định sau khi thực tế những gì đếm là "liều lượng đủ" làm cho bất kỳ giải thích nào về một kết quả tác động đáng thất vọng trông như sự bào chữa hậu-kỳ.

## Nguồn tham khảo

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
