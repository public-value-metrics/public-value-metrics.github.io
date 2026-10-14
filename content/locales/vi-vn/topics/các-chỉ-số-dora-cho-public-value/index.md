# Các chỉ số DORA cho public value

Các chỉ số DORA (DevOps Research and Assessment) — tần suất triển khai, thời gian dẫn cho các thay đổi, tỷ lệ thất bại thay đổi, và thời gian khôi phục dịch vụ, cộng với độ tin cậy như một thứ năm — là các benchmark hiệu suất cung cấp được xác thực nhất của ngành phần mềm. Được dịch sang các thuật ngữ trách nhiệm khu-vực-công, mỗi cái là một proxy trực tiếp cho tốc độ nhanh, và an toàn như thế nào, public value đến được một công dân.

## Tại sao điều này quan trọng

Thập kỷ nghiên cứu của DORA, được công bố hàng năm như *Accelerate State of DevOps Report* (phương pháp luận của Forsgren, Humble, và Kim, hiện được điều hành bởi Google Cloud), phân nhóm các nhóm thành các người thực hiện elite, cao, trung bình, và thấp. Các nhóm elite triển khai theo yêu cầu, mất dưới một ngày từ commit đến sản xuất, thất bại khoảng 5% các thay đổi, và khôi phục trong vòng dưới một giờ; các người thực hiện thấp triển khai hàng tháng hoặc ít hơn, mất nhiều tháng, thất bại khoảng 40% các thay đổi, và khôi phục trong nhiều tuần. Trong chính phủ đây không phải là các chỉ số phô trương kỹ thuật: Service Standard của Government Digital Service yêu cầu các nhóm "lặp lại và cải thiện thường xuyên" và có thể phản ứng nhanh với nhu cầu người dùng, và các bộ phận không thể triển khai an toàn và thường xuyên về cấu trúc không thể đạt được tiêu chuẩn đó, bất kể nghiên cứu người dùng của họ nói gì. Công việc hiệu quả số riêng của Cabinet Office thấy đẩy một công dân từ một giao dịch số thất bại hoặc chậm vào một kênh điện thoại hoặc giấy là đắt đỏ — Digital Efficiency Report năm 2012 của GDS ước tính một số giao dịch số tốn ít nhất 20p chống lại các liên hệ qua điện thoại hoặc mặt-đối-mặt tốn đến £8,62 — vì vậy một thất bại thay đổi trong một dịch vụ hướng-công-dân không chỉ tốn thời gian kỹ thuật, nó đẩy đồng tiền thực vào ngân sách trung tâm liên hệ (xem [tiết-kiệm-chuyển-kênh](../tiết-kiệm-chuyển-kênh/)).

## Cách tính toán

```
Tần suất triển khai  = các triển khai sản xuất / thời gian
Thời gian dẫn cho các thay đổi = t(triển khai) − t(commit),
                                 trung vị
Tỷ lệ thất bại thay đổi = các thay đổi thất bại / tổng các
                          thay đổi × 100
Thời gian khôi phục (MTTR) = t(được khôi phục) − t(thất bại),
                            trung vị
Độ tin cậy = sự đạt được SLO (tính khả dụng, độ trễ, tính
            chính xác)
```

Các bản dịch public-value:

```
Thời gian dẫn → các tuần trong đường ống × CoD, xem chi-phí-
               chậm-trễ-trong-các-chương-trình-công
Tỷ lệ thất bại → tỷ lệ sự cố hướng-công-dân: CFR × chi phí
                mỗi cuộc gọi trung tâm liên hệ được chuyển
                hướng (hoặc mỗi giao dịch theo luật định
                thất bại)
Thời gian khôi phục → thiệt hại ngừng hoạt động dịch vụ: MTTR
                     × (các yêu cầu/đơn xin bị chặn mỗi giờ)
                     × chi phí hạ nguồn hoặc mất phúc lợi
                     mỗi đơn vị
Độ tin cậy → giảm lợi ích: một dịch vụ ở 99% khả dụng mang
            lại ≈ 0,99 lợi ích được mô hình hóa của nó —
            tương tự cung cấp của thiếu hụt sự chấp nhận
            hoặc tuân thủ
```

## Ví dụ minh họa

Nhóm cổng yêu cầu trợ cấp của một chính quyền địa phương, trước và sau một đầu tư kỹ thuật cung cấp:

```
                    Trước        Sau
Triển khai          hàng tháng   hàng tuần
Thời gian dẫn       8 tuần       5 ngày
CFR                 30%          10%
MTTR                3 ngày       4 giờ
```

Nhóm vận chuyển khoảng 25 cải tiến/năm, giá trị trung bình £8.000/tuần ([chi phí chậm trễ](../chi-phí-chậm-trễ-trong-các-chương-trình-công/)). Cắt thời gian dẫn khoảng 7,3 tuần kéo luồng lợi ích của mỗi cải tiến về phía trước: 25 × 7,3 × 8.000 ≈ **£1.460.000/năm** giá trị được cung cấp sớm hơn. Trên tỷ lệ thất bại: 25 × (0,30 − 0,10) = 5 ít thay đổi thất bại/năm; mỗi thay đổi thất bại trên một cổng công thường chuyển hướng một ước tính 2.000 công dân đến kênh điện thoại ở £8,62 so với 20p, một chi phí thuần khoảng £8,42 × 2.000 ≈ £16.840 mỗi sự cố, vì vậy tránh 5 sự cố tiết kiệm ≈ **£84.200/năm**. Đầu tư kỹ thuật cung cấp được định giá trong cùng đồng tiền như bất kỳ trường hợp public-value khác.

## Ví dụ minh họa tiếp tục: độ tin cậy

Nếu cổng chạy ở 97% khả dụng thay vì một mục tiêu 99,5%, và mỗi điểm phần trăm ngừng hoạt động được mô hình hóa như 2% yêu cầu bị mất vì bỏ dở, dịch vụ đang mang lại khoảng 0,975 lợi ích được mô hình hóa £2M/năm của nó — một giảm lợi ích £50.000/năm mà một bảng điều khiển thời-gian-hoạt-động thuần túy không bao giờ nổi lên.

## Liên hệ với phát triển phần mềm

Các chỉ số DORA là các chỉ số vận hành của một dịch vụ công mặc quần áo khác nhau: thời gian dẫn ánh xạ vào [các-chỉ-số-dịch-vụ-và-giao-dịch-tiêu-chuẩn](../các-chỉ-số-dịch-vụ-và-giao-dịch-tiêu-chuẩn/); tỷ lệ thất bại thay đổi ánh xạ vào làm lại và các tỷ lệ khiếu nại; MTTR ánh xạ vào bao lâu một dịch vụ theo luật định không có sẵn cho người nộp đơn. Các kỹ thuật cải thiện chuyển theo cả hai hướng vì cả hai là các hệ thống hàng đợi dưới các ràng buộc trách nhiệm — xem [các-chỉ-số-dòng-chảy-trong-cung-cấp-chính-phủ](../các-chỉ-số-dòng-chảy-trong-cung-cấp-chính-phủ/) cho toán học hàng đợi nền tảng. Cũng lưu ý phát hiện năm 2025 của DORA rằng việc áp dụng AI tương quan với thông lượng cao hơn nhưng ổn định *kém hơn* — một can thiệp với cả hiệu quả và tác dụng phụ, chính xác là phân tích lợi-ích-thuần mà chủ đề [năng-suất-AI](../năng-suất-ai-trong-khu-vực-công/) của chương này làm việc qua.

## Những cạm bẫy

- **Lợi dụng chỉ số**: thổi phồng các đếm triển khai với các bản phát hành không-làm-gì, hoặc loại trừ các bản sửa lỗi khẩn cấp từ đếm thất bại thay đổi. Định nghĩa các sự kiện chính xác như một tiêu chuẩn dịch vụ theo luật định định nghĩa một "giao dịch thành công".
- **Các bảng xếp hạng liên-bộ-phận**: các cụm DORA so sánh các thực hành cung cấp, không phải các dịch vụ với các hồ sơ rủi ro khác nhau; một hệ thống thanh toán thuế được đánh giá "cao" có thể là tư thế đúng nơi "elite" sẽ liều lĩnh cho các yêu cầu đảm bảo.
- **Tối ưu hóa chỉ một chỉ số**: tốc độ không có tỷ lệ thất bại thay đổi là sự đánh đổi thông-lượng-ổn-định kinh điển — báo cáo cả bốn cùng nhau, không phải một điểm đơn lẻ.

## Nguồn tham khảo

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
