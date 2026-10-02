# Các phương pháp đánh giá tác động

Các phương pháp đánh giá tác động là các thiết kế thống kê và thực nghiệm được sử dụng để ước tính những gì một chính sách hoặc chương trình thực sự đã gây ra, khác với những gì sẽ xảy ra dù sao — các thử nghiệm đối chứng ngẫu nhiên (RCT), difference-in-differences, propensity score matching, và thiết kế gián đoạn hồi quy là bốn phương pháp được sử dụng phổ biến nhất trong chính sách công Anh. Chúng tồn tại vì hầu hết các can thiệp chính phủ không thể được kiểm tra trong một phòng thí nghiệm: bạn không thể ngẫu nhiên hóa thị trấn nào nhận được một tuyến xe buýt mới theo cách bạn có thể ngẫu nhiên hóa bệnh nhân nào nhận được một loại thuốc, vì vậy các phương pháp này mượn cùng logic nhân quả mà không luôn luôn yêu cầu phân công ngẫu nhiên.

## Tại sao điều này quan trọng

Phụ lục A của Magenta Book của HM Treasury, về các phương pháp tựa-thực-nghiệm, là hướng dẫn chuẩn của chính phủ Anh về việc chọn giữa các thiết kế này, và các cơ quan như Education Endowment Foundation và What Works Centre for Local Economic Growth thể chế hóa một hệ thống cấp bậc bằng chứng xây dựng xung quanh chúng — RCT nơi ngẫu nhiên hóa khả thi và đạo đức, các thiết kế tựa-thực-nghiệm nơi không. Việc chọn phương pháp không phải là một suy nghĩ thêm kỹ thuật: nó quyết định liệu một đánh giá có thể trả lời "chương trình này có gây ra điều này không?" hay chỉ "điều này có xảy ra sau khi chương trình bắt đầu không?", đó là cùng câu hỏi [phân tích đối chiếu thực tế](../counterfactual-analysis/) được xây dựng để buộc các người thực hành phải hỏi trước khi bất kỳ đánh giá nào được ủy quyền.

## Cách tính toán

```
RCT:
  Tác động = trung bình(kết quả | nhóm điều trị) −
            trung bình(kết quả | nhóm đối chứng)
  (hợp lệ vì phân công cho điều trị là ngẫu nhiên)

Difference-in-differences (DiD):
  Tác động = [kết quả_sau(điều trị) − kết quả_trước(điều trị)]
           − [kết quả_sau(đối chứng) − kết quả_trước(đối
             chứng)]
  (yêu cầu một giả định "xu hướng song song": điều trị và đối
   chứng sẽ di chuyển cùng nhau nếu không có can thiệp)

Propensity score matching (PSM):
 1. Ước tính P(điều trị = 1 | các đồng biến X) cho mỗi đơn vị
    → điểm propensity
 2. Khớp các đơn vị điều trị với các đơn vị không điều trị có
    điểm propensity tương tự
 3. Tác động = trung bình(kết quả | điều trị) − trung bình(kết
    quả | đối chứng khớp)

Thiết kế gián đoạn hồi quy (RDD):
  Tác động = sự nhảy trong kết quả quan sát được tại ngưỡng đủ
            điều kiện, so sánh các đơn vị ngay trên so với
            ngay dưới điểm cắt
```

## Ví dụ minh họa

**Chính quyền địa phương (difference-in-differences cho một chương trình gia đình gặp khó khăn)**: kết quả là sự tham dự trường học. Khu vực điều trị di chuyển từ 84% lên 89% sự tham dự (+5 điểm phần trăm) trong kỳ chương trình; một khu vực tương đương nhưng không điều trị di chuyển từ 85% lên 87% (+2 điểm phần trăm) trong cùng kỳ. Ước tính tác động DiD: 5 − 2 = +3 điểm phần trăm có thể quy cho chương trình. Áp dụng cho một đoàn hệ 2.000 học sinh trong khu vực điều trị, điều này nhất quán với khoảng 60 học sinh bổ sung (3% × 2.000) đạt đến danh mục tham dự cao hơn, một sự ngoại suy nên được báo cáo với cảnh báo xu-hướng-song-song của nó, không phải như một số đầu người chính xác.

**Tổ chức từ thiện (propensity score matching cho một tổ chức từ thiện khả năng lao động)**: 300 người tham gia chương trình được khớp với 300 cá nhân từ một tập dữ liệu hành chính lớn hơn sử dụng các điểm propensity được xây dựng từ tuổi, lịch sử việc làm trước, và mức độ trình độ. Tỷ lệ việc làm mười hai tháng: nhóm điều trị khớp 46%, nhóm so sánh khớp 33%. Ước tính tác động PSM: 46% − 33% = +13 điểm phần trăm có thể quy cho chương trình, có điều kiện không có yếu tố gây nhiễu không quan sát được (như động lực) thúc đẩy cả sự tham gia và kết quả.

## Liên hệ với phát triển phần mềm

Liệu bất kỳ thiết kế này có khả thi sau đó hay không phụ thuộc rất nhiều vào các quyết định kỹ thuật dữ liệu được thực hiện sớm. RDD cần một biến chạy được ghi lại chính xác và một điểm cắt đủ điều kiện thực sự sạch; DiD cần dữ liệu bảng có thể so sánh theo thời gian cho cả khu vực điều trị và so sánh, có nghĩa là các kết hợp nhất quán qua các hệ thống và năm; PSM cần dữ liệu đồng biến cơ bản phong phú được chụp trước khi điều trị, không được xây dựng lại sau đó. Một mô hình dữ liệu được thiết kế cùng với một [lý thuyết thay đổi](../theory-of-change/) và [mô hình logic](../logic-model/) từ đầu — chụp các đồng biến cơ bản, ngày, và các hồ sơ đủ điều kiện nhóm-so-sánh — là điều làm cho một đánh giá tác động chặt chẽ khả thi sau đó, thay vì một sự vội vàng hậu-kỳ đắt đỏ. Xem [đánh giá tác động so với đánh giá quy trình](../impact-evaluation-vs-process-evaluation/) cho câu hỏi bổ sung mà các phương pháp này không trả lời một mình.

## Những cạm bẫy

- **Ép buộc một RCT nơi không khả thi hoặc không đạo đức**, hoặc ngược lại không bao giờ xem xét một thiết kế tựa-thực-nghiệm khi một cơ hội thực sự cho một — một điểm cắt chính sách, một triển khai theo giai đoạn — có sẵn và không được sử dụng.
- **Bỏ qua giả định xu hướng song song trong DiD.** Nếu khu vực so sánh đã khác khu vực điều trị trước can thiệp, so sánh hai điểm bị nhiễm; kiểm tra các xu hướng trước, không chỉ trước/sau.
- **Chỉ khớp trên các đồng biến quan sát được trong PSM.** Sự lựa chọn không quan sát được, như động lực của người tham gia, có thể làm sai lệch ước tính ngay cả khi các đồng biến quan sát được cân bằng tốt.
- **Thao túng biến chạy trong RDD.** Nếu mọi người có thể ảnh hưởng đến điểm của họ để rơi ngay trong một ngưỡng đủ điều kiện, sự gián đoạn không còn cô lập một hiệu ứng nhân quả.

## Nguồn tham khảo

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
