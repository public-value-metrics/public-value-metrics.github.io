# Năng suất AI trong khu vực công

Các chỉ số cho những gì trợ giúp mã hóa AI thực sự làm cho đầu ra kỹ thuật — các tỷ lệ chấp nhận gợi ý, các gia tốc nghiên cứu được kiểm soát, thông lượng PR, và sự giữ lại mã — mang một cơ sở bằng chứng thực sự mâu thuẫn ngay cả trước khi các ràng buộc khu-vực-công được thêm: phân loại dữ liệu hạn chế phần nào của một bất động sản legacy một công cụ AI được phép chạm vào ở tất cả, các chu kỳ mua sắm có nghĩa là công cụ đang được đánh giá thường một thế hệ mô hình sau năng lực hiện tại, và các yêu cầu giấy phép an ninh chi phối ai được sử dụng nó trên cái gì.

## Tại sao điều này quan trọng

Hai nghiên cứu được kiểm soát được trích dẫn nhiều nhất chỉ theo các hướng đối lập. RCT GitHub Copilot năm 2023 của Peng et al. thấy các nhà phát triển hoàn thành một nhiệm vụ HTTP-server greenfield 55,8% nhanh hơn với Copilot (1h11m vs 2h41m, n=95). RCT năm 2025 của METR thấy các nhà phát triển open-source kinh nghiệm làm việc trên *các repository trưởng thành riêng của họ* chậm hơn 19% với các công cụ AI đầu-2025, trong khi tin rằng họ nhanh hơn khoảng 20%. Cả hai nghiên cứu đều chặt chẽ; sự mâu thuẫn là phát hiện — hiệu quả nhiệm-vụ-greenfield không chuyển sang hiệu quả codebase-trưởng-thành, và nhiều kỹ thuật chính phủ là công việc codebase-trưởng-thành trên các bất động sản cũ hơn và đặc thù hơn repository thương mại trung vị. Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) của Central Digital and Data Office đặt ra các nguyên tắc cho việc áp dụng có trách nhiệm chính xác vì cơ sở bằng chứng này không thể đơn giản được nhập khẩu từ các demo nhà cung cấp; các bộ phận được kỳ vọng đánh giá các công cụ chống lại các yêu cầu xử lý dữ liệu và an ninh riêng của họ trước khi triển khai.

## Cách tính toán

```
Tỷ lệ chấp nhận  = các gợi ý được chấp nhận / các gợi ý được
                   hiển thị
Tỷ lệ giữ lại     = mã AI sống sót đến merge / mã AI được
                   chấp nhận
Gia tốc           = (t_đối_chứng − t_AI) / t_đối_chứng (chỉ
                   từ so sánh được kiểm soát)
Delta thông lượng  = Δ PR được merge/nhà_phát_triển/tuần

Hệ số phạm vi khu-vực-công:
  phần codebase đủ điều kiện = LOC trên các hệ thống nơi phân
    loại (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) cho phép
    công cụ ở tất cả

Mô hình giá trị = nhà_phát_triển × phạm_vi_đủ_điều_kiện ×
                 thời_gian_tiết_kiệm × tỷ_lệ_được_nạp ×
                 sử_dụng — mỗi thuật ngữ cần đo lường tại
                 chỗ, và hệ số phạm vi không có tương đương
                 khu-vực-tư
```

## Ví dụ minh họa

Một bộ phận chính phủ thử nghiệm một trợ giúp mã hóa AI trên 300 nhà phát triển, nhưng chỉ các hệ thống được phân loại OFFICIAL đủ điều kiện để sử dụng công cụ — 70% bất động sản theo phân bổ số lượng nhân viên, với 30% còn lại (các hệ thống phân-loại-cao-hơn) hoàn toàn bị loại trừ.

```
Nhà phát triển đủ điều kiện = 300 × 0,70 = 210

Kết quả thử nghiệm: thời gian tiết kiệm tự báo cáo 40
              phút/ngày; tiết kiệm cấp-nhiệm-vụ được đo 12
              phút/ngày (0,2h)
              — khoảng cách nhận thức METR, được tái tạo
              trong thực tế

Định giá con số ĐƯỢC ĐO:
  210 × 0,2h × 220 ngày × £55/giờ được nạp × 0,6 sử dụng
  = 210 × 44 giờ × £55 × 0,6
  = 9.240 giờ × £55 × 0,6 ≈ £304.920/năm công suất

Chi phí: 210 chỗ được cấp phép × £22/tháng × 12 ≈ £55.440/
năm

Tỷ lệ công suất thuần ≈ 304.920 / 55.440 ≈ 5,5:1
```

Có thể tài trợ ở khoảng một phần ba lợi ích tự báo cáo, và chỉ sau khi trần phân loại được áp dụng — cấp phép cho toàn bộ 300 nhà phát triển trên sức mạnh của con số tự báo cáo sẽ đã thổi phồng cả dân số đủ điều kiện và khoản tiết kiệm thực sự.

## Liên hệ với phát triển phần mềm

Các kỷ luật chuyển trực tiếp: chạy **các thử nghiệm thực tế** trên codebase riêng của bộ phận và các ticket thực, không phải các nhiệm vụ demo nhà cung cấp, vì kết quả METR cụ thể là một phát hiện codebase-trưởng-thành; coi **tỷ lệ chấp nhận là một proxy, không phải một kết quả** — chấp nhận cao với giữ lại thấp là tương đương phần mềm của chẩn-đoán-quá-mức; kết hợp mỗi tuyên bố thông lượng với một **kiểm tra ổn định**, vì báo cáo 2025 của DORA thấy việc áp dụng AI nâng thông lượng nhưng làm suy giảm ổn định thay đổi, chính xác là phân tích lợi-ích-thuần mà [các-chỉ-số-dora-cho-public-value](../các-chỉ-số-dora-cho-public-value/) được xây dựng để chạy; và trung thực rằng công cụ AI có thể mở rộng, không hẹp lại, khoảng cách trên các bất động sản legacy nặng-[nợ-kỹ-thuật](../nợ-kỹ-thuật-như-là-sự-xói-mòn-giá-trị-công/), vì dữ liệu huấn luyện đại diện không đủ COBOL, 4GL, và mã mainframe tùy chỉnh phổ biến trong chính phủ, vì vậy chất lượng gợi ý trên chính xác các hệ thống cần nhiều trợ giúp nhất thường yếu nhất. Điều này nằm cùng với câu hỏi [giá-trị-AI-trong-chính-phủ](../giá-trị-ai-trong-chính-phủ/) rộng hơn và nên được quản lý bởi cùng các ràng buộc [giá-trị-an-ninh-mạng-khu-vực-công](../giá-trị-an-ninh-mạng-khu-vực-công/) hạn chế nơi bất kỳ công cụ bên-thứ-ba có thể thấy mã hoặc dữ liệu ở tất cả.

## Những cạm bẫy

- **Cấy ghép nghiên cứu nhà cung cấp**: áp dụng các gia tốc RCT greenfield cho công việc tích hợp legacy chính xác là lỗi mà nghiên cứu METR đã phơi bày.
- **Tự báo cáo như đo lường**: một khoảng cách nhận thức-so-với-đo 20-điểm-phần-trăm là thiên vị đã biết lớn nhất trong văn học này, và nó thổi phồng các trường hợp kinh doanh chỉ dựa vào các khảo sát nhà phát triển.
- **Bỏ qua trần phân loại**: các mô hình cấp phép và giá trị được xây dựng trên tổng số lượng nhân viên thay vì tập con đủ-điều-kiện, được-phân-loại-cho-phép có hệ thống thổi phồng cả hiệu quả chi phí và phạm vi có thể đạt được.
- **Sự trễ chu kỳ mua sắm**: mua sắm công cụ dựa-trên-khung có thể nghĩa là một thử nghiệm đánh giá một thế hệ mô hình 12–18 tháng sau điều công khai có sẵn vào thời điểm triển khai đầy đủ, làm cho giả định gia tốc của trường hợp kinh doanh ban đầu cũ trước ra mắt trực tiếp.

## Nguồn tham khảo

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
