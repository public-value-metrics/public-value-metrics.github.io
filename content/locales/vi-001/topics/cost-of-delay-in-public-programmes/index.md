# Chi phí chậm trễ trong các chương trình công (CoD)

Chi phí chậm trễ là public value bị mất mỗi đơn vị thời gian mà một chương trình, dịch vụ, hoặc thay đổi hệ thống *chưa* được cung cấp. Đó là chỉ số cầu nối chính của chương này: nó chuyển đổi "ngày ra mắt trực tiếp đã trượt sáu tháng" thành đồng tiền mỗi tuần, hoặc thành WELLBY mỗi tuần, để sự chậm trễ có thể được tranh luận trong cùng đồng tiền như trường hợp kinh doanh bản thân nó.

## Tại sao điều này quan trọng

Quy tắc của Reinertsen — "nếu bạn chỉ định lượng một thứ, định lượng Chi phí Chậm trễ" — đi vào chính phủ gần như không thay đổi, vì các chương trình công bất thường phơi bày với nó: các trường hợp kinh doanh được phê duyệt chống lại một luồng lợi ích dự báo, nhưng luồng chỉ bắt đầu chảy ở lần ra mắt trực tiếp, và mỗi tuần trượt là một tuần giá trị bị mất không ai định giá trên sổ đăng ký rủi ro. Sự xem xét kỹ lưỡng lặp lại của National Audit Office về việc triển khai Universal Credit (xem các báo cáo "Rolling Out Universal Credit" của nó, <https://www.nao.org.uk/>) minh họa mẫu hình: trượt lịch trình được theo dõi và báo cáo, nhưng chi phí đồng-tiền-mỗi-tuần của việc *chưa* cung cấp hệ thống được cải cách cho nhóm tiếp theo của người nộp đơn hiếm khi được nêu như một con số tiêu đề, ngay cả khi nó là con số nên đã thúc đẩy ưu tiên hóa và leo thang. Không có một con số CoD, một chương trình bị chậm trễ trông như một vấn đề lịch trình cho hội đồng cung cấp; với một, nó là một vấn đề xói mòn giá trị cho cán bộ kế toán.

## Cách tính toán

```
CoD = lợi ích mỗi đơn vị thời gian bị mất khi chưa được cung
     cấp (£/tuần hoặc WELLBY/tuần)

Tổng mất chậm trễ = CoD × thời gian chậm trễ

Các luồng lợi ích để cộng cho các chương trình công:
  các khoản tiết kiệm giải-phóng-tiền-mặt (giảm gian lận/lỗi,
  các chi phí tạm thời được tránh)
+ công suất không-tiền-mặt được giải phóng (giờ nhân viên xử
  lý trường hợp/cán bộ × chi phí được nạp)
+ lợi ích phúc lợi (WELLBY × £13.000/WELLBY, hướng dẫn bổ
  sung phúc lợi Green Book HMT, giá 2019)
```

Đối với các dịch vụ hướng-công-dân, định danh trong phúc lợi cũng như tiền — xem [năm sống điều chỉnh theo phúc lợi](../wellbeing-adjusted-life-years/) cho đơn vị nền tảng, và [chi phí cơ hội trong chi tiêu công](../opportunity-cost-in-public-spending/) cho những gì đồng tiền chậm trễ có thể đã tài trợ cho thay thế.

## Ví dụ minh họa

**Chính quyền địa phương**: một nâng cấp hệ thống trợ cấp nhà ở cắt lỗi thanh toán quá mức £150/yêu cầu/năm trên 20.000 yêu cầu trực tiếp.

```
Lợi ích hàng năm = 150 × 20.000 = £3.000.000/năm
CoD = 3.000.000 / 52 ≈ £57.700/tuần
Một sự chậm trễ triển khai 12-tháng tốn 52 × 57.700 ≈
£3.000.000 lỗi có thể tránh được.
```

**Cơ quan chính phủ trung ương**: một dịch vụ đánh giá trợ cấp khuyết tật, được cung cấp sáu tháng (26 tuần) trễ hơn kế hoạch, có nghĩa là 200.000 người nộp đơn/năm chờ trung bình ba tuần dài hơn cho một quyết định. Mỗi tuần không chắc chắn tài chính bổ sung được mô hình hóa như một hiệu ứng −0,0018 WELLBY (điểm hài lòng cuộc sống):

```
Mất WELLBY mỗi người nộp đơn = 3 × 0,0018 = 0,0054
Mất WELLBY hàng năm = 200.000 × 0,0054 = 1.080 WELLBY/năm
CoD_phúc_lợi = 1.080 / 52 ≈ 20,8 WELLBY/tuần
CoD_tiền = 20,8 × £13.000 ≈ £270.000/tuần giá trị phúc lợi
```

Một sự chậm trễ 26-tuần do đó "tốn" khoảng 540 WELLBY — đáng giá khoảng £7 triệu theo định giá phúc lợi của Green Book — định hình lại một ngày ra mắt bị bỏ lỡ như một sự kiện phúc lợi công dân, không phải một chú thích quản lý dự án.

## Liên hệ với phát triển phần mềm

CoD là điều làm cho [các chỉ số DORA cho public value](../dora-metrics-for-public-value/) và [các chỉ số dòng chảy](../flow-metrics-in-government-delivery/) có thể đọc được về tài chính: thời gian dẫn trong đường ống × CoD là tiền (hoặc phúc lợi) bị đốt trong các hàng đợi trước khi nó bao giờ đến được một công dân. Cụ thể:

- **Ưu tiên hóa**: xếp hạng một tồn đọng theo CoD ÷ thời gian thay vì theo cấp cao bên liên quan — tương tự kỹ thuật phần mềm của yêu cầu Green Book đánh giá các tùy chọn trên giá trị, không phải ai đang hỏi.
- **Mua sắm**: một chu kỳ mua sắm khung 12–18 tháng có một CoD; định giá nó thay đổi trường hợp khẩn cấp cho các tuyến nhanh, và đưa trực tiếp vào các quyết định [xây-dựng-so-với-mua](../build-vs-buy-in-government/) nơi thời-gian-đến-giá-trị là một động lực quyết định.
- **Trường hợp lợi ích**: mỗi con số CoD được trích dẫn tại phê duyệt nên xuất hiện lại tại [thực hiện lợi ích](../benefits-realization/) — nếu chi phí chậm trễ là thực, lợi ích được tăng tốc nên có thể đo được sau lần ra mắt trực tiếp.

## Những cạm bẫy

- **Giả định CoD tuyến tính**: một số dịch vụ công có giá trị được-hình-thành-theo-thời-hạn (một ngày tuân thủ theo luật định — CoD nhảy lên các mức rủi ro-thực-thi sau ngày đó, gần không trước đó) thay vì một tỷ lệ hàng tuần mượt. Phân loại hồ sơ khẩn cấp trước khi nhân.
- **CoD trên các đầu ra không ai cần**: sự chậm trễ chỉ có một chi phí nếu thứ chưa được cung cấp có giá trị; một hệ thống không ai sẽ sử dụng có CoD bằng không bất kể nó trễ như thế nào.
- **Đếm hai lần chậm trễ và chiết khấu**: [tỷ lệ chiết khấu xã hội](../social-discount-rate/) đã định giá thời gian trên các chân trời đánh giá nhiều-năm; CoD là phiên bản trong-chân-trời, vận hành cho các tuần và tháng. Sử dụng CoD cho trượt lịch trình, dịch chuyển NPV cho tái-giai-đoạn-hóa nhiều-năm.

## Nguồn tham khảo

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
