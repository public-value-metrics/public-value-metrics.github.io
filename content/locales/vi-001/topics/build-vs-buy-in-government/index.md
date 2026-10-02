# Xây dựng so với mua trong chính phủ

Xây-dựng-so-với-mua là một so sánh được cấu trúc, điều-chỉnh-rủi-ro của phát triển tùy chỉnh chống lại mua sắm thương mại hoặc commodity, được so sánh trên [tổng chi phí sở hữu](../total-cost-of-ownership-in-government-it/) được chiết khấu, thời-gian-đến-giá-trị, và rủi ro. Chính phủ về cấu trúc là một ngành mua — Technology Code of Practice đặt một giả định hướng tới các giải pháp commodity và đám mây — tuy nhiên các nhóm kỹ thuật trong các bộ phận vẫn mặc định xây dựng, vì các lý do tương tự mà các người xây dựng ở mọi nơi làm.

## Tại sao điều này quan trọng

Technology Code of Practice của Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) và hướng dẫn Service Manual kèm theo về việc quyết định xây dựng hoặc mua đẩy các bộ phận biện minh cho phát triển tùy chỉnh chống lại một giả định rằng khả năng commodity nên được mua, không được xây dựng, và chỉ khả năng thực sự mới lạ, khác-biệt-sứ-mệnh xứng đáng mã tùy chỉnh. Hướng dẫn bổ sung thiên-lệch-lạc-quan của HM Treasury cho Green Book, được rút từ xem lại Mott MacDonald năm 2002 của các mua sắm công lớn, cho các dự án CNTT phạm vi nâng rộng nhất của bất kỳ danh mục được đánh giá — các ước tính chi phí vốn được khuyến nghị nâng 10% ở đầu thấp và lên đến 200% ở đầu cao trước khi chúng được sử dụng trong đánh giá, phản ánh bản xây dựng phần mềm đã bị đánh giá thấp tồi tệ như thế nào trong lịch sử trên toàn mua sắm công. Phân tích xây-dựng-so-với-mua tồn tại chính xác để buộc sự điều chỉnh rủi ro đó lên bàn trước phê duyệt, thay vì để nó xuất hiện như một yêu cầu chi-tiêu-vượt-mức trong-năm.

## Cách tính toán

```
So sánh trên cùng chân trời 3–5 năm, được chiết khấu ở tỷ lệ
chiết khấu xã hội Green Book (xem tỷ-lệ-chiết-khấu-xã-hội.md):

NPV_tùy_chọn = GTHT(lợi ích, được dịch chuyển bởi thời-gian-
              đến-giá-trị) − GTHT(TCO)

Các điều chỉnh rủi ro (mẫu hình thiên-lệch-lạc-quan Green
Book):
  chi phí xây dựng × 1,1–3,0  (phạm vi nâng dự án CNTT, Mott
                              MacDonald)
  thời-gian-đến-giá-trị xây dựng + 40–60% (prior chậm trễ
  triển khai)
  mua: thêm kiểm tra-thực-tế tích hợp và chi phí thoát hợp
  đồng thay vào đó

Các động lực quyết định, theo thứ tự chúng thường quyết định:
  1. sự khác biệt — khả năng này là sứ mệnh, hay đường ống?
  2. thời-gian-đến-giá-trị × chi phí chậm trễ (xem chi-phí-
     chậm-trễ-trong-các-chương-trình-công.md)
  3. tổng chi phí sở hữu điều-chỉnh-rủi-ro
```

## Ví dụ minh họa

Một chính quyền địa phương cần một hệ thống quản lý trường hợp cho chăm sóc xã hội người lớn. Mua: SaaS ở £180.000/năm, trực tiếp trong 4 tháng. Xây dựng: ước tính £900.000 cộng £150.000/năm duy trì, trực tiếp trong 14 tháng.

```
Chi phí xây dựng điều-chỉnh-rủi-ro = 900.000 × 1,4 = £1.260.000
TCO 5-năm:
  mua  = 180.000 × 5 = £900.000
  xây dựng = 1.260.000 + 150.000 × 5 = £2.010.000

Thuật ngữ chậm trễ: hệ thống tránh £40.000/tháng trong các
đánh giá trùng lặp; xây dựng đến 10 tháng muộn hơn mua.
CoD = 10 × 40.000 = £400.000

So sánh hiệu quả: £900.000 (mua) vs £2.010.000 + £400.000 =
£2.410.000 (xây dựng)
```

Mua thắng khoảng £1,5 triệu trong năm năm, và dòng đơn lẻ lớn nhất sau ước tính xây dựng bản thân nó là chi phí chậm trễ mà một so sánh capex thuần túy sẽ không bao giờ làm nổi lên.

## Liên hệ với phát triển phần mềm

Các kỷ luật chuyển trực tiếp từ phân tích này vào thực hành cung cấp: **điều chỉnh rủi ro dựa-trên-prior** — sự nâng Mott MacDonald là tương đương phần mềm của thiên-lệch-lạc-quan Green Book được áp dụng một cách cơ học, vì vậy các nhóm nên lập luận cho các trường hợp ngoại lệ với nó thay vì giả định ước tính của họ là ngoại lệ; **sự trung thực so sánh** — phương án thay thế cho việc xây dựng là tùy chọn mua tốt nhất có sẵn, không phải "không có gì", kết nối trực tiếp với [chi phí cơ hội trong chi tiêu công](../opportunity-cost-in-public-spending/); và **so sánh TCO trung thực** — mỗi đề xuất xây dựng nên được so sánh với [tổng chi phí sở hữu](../total-cost-of-ownership-in-government-it/) đầy đủ của một tùy chọn mua, không phải giá danh sách của nó. Nơi xây dựng thực sự thắng, [chi phí chậm trễ](../cost-of-delay-in-public-programmes/) của thời gian xây dựng bổ sung nên được định giá rõ ràng trong trường hợp kinh doanh, không bị để lại như một giả định không-được-nêu rằng thời gian không quan trọng.

## Những cạm bẫy

- **So sánh giá danh sách nhà cung cấp với một ước tính xây dựng không-được-điều-chỉnh-rủi-ro**: điều này vuốt ve xây dựng hai lần, một lần trên chi phí và một lần trên lịch trình.
- **Lao động nội bộ được định giá bằng-không**: thời gian kỹ thuật công vụ được coi là "miễn phí" vì nó đã nằm trên ngân sách số lượng nhân viên bộ phận, che giấu chi phí cơ hội thực sự của nó chống lại công việc khác nhóm đó có thể đang làm.
- **Sự khóa chặt không-được-định-giá ở cả hai hướng**: chi phí thoát nhà cung cấp và tính di động dữ liệu là thực, nhưng cũng là bus-factor của một bản xây dựng tùy chỉnh và sự phụ thuộc của nó vào việc giữ một nhóm nội bộ nhỏ, khó-thay-thế trong suốt tuổi thọ của nó.
- **Sự khác biệt sứ mệnh được tuyên bố cho đường ống**: "điều này là cốt lõi đối với chúng ta" được khẳng định về middleware tích hợp hoặc một document store — kiểm tra nó chống lại việc liệu một công dân hoặc nhân viên xử lý trường hợp sẽ bao giờ nhận thấy cái nào đang chạy đằng sau.

## Nguồn tham khảo

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
