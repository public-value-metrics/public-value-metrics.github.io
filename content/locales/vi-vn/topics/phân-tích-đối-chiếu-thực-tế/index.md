# Phân tích đối chiếu thực tế

Một đối chiếu thực tế là một ước tính về những gì sẽ xảy ra trong trường hợp không có can thiệp. Không có nó, một sự thay đổi quan sát được sau khi một chương trình ra mắt không thể được phân biệt với một sự thay đổi sẽ xảy ra dù sao — không có đối chiếu thực tế, không có bằng chứng về hiệu ứng, cho dù các con số trước-và-sau trông thuyết phục đến đâu. Magenta Book của HM Treasury coi việc xây dựng một đối chiếu thực tế đáng tin cậy là nhiệm vụ phương pháp luận trung tâm của đánh giá tác động, quan trọng hơn bất kỳ sự lựa chọn thiết kế đơn lẻ nào khác.

## Tại sao điều này quan trọng

"Tội phạm giảm 15% trong năm sau khi chúng tôi giới thiệu chương trình" không phải là bằng chứng chương trình đã hiệu quả trừ khi bạn biết những gì sẽ xảy ra với tội phạm nếu không có nó — tội phạm có thể đã giảm 20% dù sao do các xu hướng kinh tế hoặc nhân khẩu học không liên quan, có nghĩa là chương trình thực sự làm cho mọi thứ tồi tệ hơn so với đối chiếu thực tế, mặc dù con số thô cải thiện. Đây là lỗi phân tích phổ biến nhất trong các tuyên bố tác động khu vực công và xã hội: nhầm lẫn một so sánh trước/sau với bằng chứng về nguyên nhân. Magenta Book nói rõ rằng đánh giá tác động tồn tại để trả lời một câu hỏi đối chiếu thực tế — "sự can thiệp này đã tạo ra sự khác biệt gì?" — và việc trả lời nó yêu cầu ước tính, không chỉ mô tả, thế giới không xảy ra.

Các phương pháp khác nhau xây dựng đối chiếu thực tế với các mức độ tin cậy khác nhau, và hướng dẫn đánh giá chính phủ xếp hạng chúng tương ứng. Các thử nghiệm đối chứng ngẫu nhiên (RCT), nơi các cá nhân hoặc khu vực được chỉ định ngẫu nhiên để nhận một can thiệp hoặc không, tạo ra đối chiếu thực tế mạnh nhất vì ngẫu nhiên hóa đảm bảo nhóm điều trị và nhóm đối chứng khác nhau, trung bình, chỉ ở việc nhận can thiệp. Cabinet Office và What Works Network đã thúc đẩy RCT trên toàn chính sách công Anh từ báo cáo "Test, Learn, Adapt" năm 2012 của Behavioural Insights Team, chính xác vì các thiết kế yếu hơn dễ bị gây nhiễu — sự khác biệt quan sát được có thể phản ánh ai đã chọn tham gia, không phải hiệu ứng của chương trình. Nơi ngẫu nhiên hóa không thực tế hoặc không đạo đức (như thường là trường hợp đối với các chương trình có quyền theo luật định, hoặc đối với các thay đổi chính sách toàn dân số), Magenta Book đặt ra một hệ thống cấp bậc rõ ràng của các phương án thay thế yếu hơn nhưng vẫn hữu ích: các nhóm so sánh khớp, các thiết kế difference-in-differences, sự gián đoạn hồi quy xung quanh các ngưỡng đủ điều kiện, và, như một phương án cuối cùng, so sánh trước/sau đơn giản — được đánh dấu rõ ràng là hình thức bằng chứng yếu nhất, dễ nhầm lẫn hiệu ứng của chương trình với hiệu ứng của mọi thứ khác đã thay đổi cùng lúc.

## Cách tính toán

Khung đối chiếu thực tế, áp dụng trên tất cả các phương pháp:

```
Tác động ước tính = Kết quả(có can thiệp) − Kết quả(đối chiếu
                    thực tế: không có can thiệp)

KHÔNG PHẢI:
Tác động ước tính ≠ Kết quả(sau) − Kết quả(trước)   [gây nhiễu
                    thời gian với điều trị]
```

Difference-in-differences, một trong những thiết kế tựa-thực-nghiệm phổ biến nhất trong đánh giá chính phủ, cô lập hiệu ứng điều trị bằng cách trừ đi sự thay đổi trước/sau của riêng nhóm so sánh:

```
Ước tính DiD = [Kết quả(điều trị, sau) − Kết quả(điều trị, trước)]
             − [Kết quả(so sánh, sau) − Kết quả(so sánh, trước)]
```

Điều này loại bỏ bất kỳ xu hướng chung cho cả hai nhóm (ví dụ: một sự thay đổi kinh tế quốc gia ảnh hưởng đến mọi người), chỉ còn lại sự thay đổi khác biệt có thể quy cho can thiệp.

## Ví dụ minh họa

**Chương trình việc làm, trước/sau (thiết kế yếu)**: một kế hoạch hỗ trợ việc làm báo cáo rằng việc làm của người tham gia tăng từ 40% lên 55% trong một năm — một kết luận ngây thơ "+15 điểm phần trăm do chương trình."

**Cùng chương trình, difference-in-differences (thiết kế mạnh hơn)**: một nhóm so sánh khớp những người không tham gia tương tự, lấy từ cùng thị trường lao động địa phương, cho thấy việc làm tăng từ 38% lên 47% trong cùng năm (một sự hồi phục kinh tế quốc gia đang diễn ra).

```
Thay đổi nhóm điều trị: 55% − 40% = +15 điểm phần trăm
Thay đổi nhóm so sánh:  47% − 38% = +9 điểm phần trăm

Ước tính DiD (hiệu ứng chương trình thực sự) = 15 − 9 = +6
điểm phần trăm
```

Hiệu ứng có thể quy cho trung thực là 6 điểm phần trăm, không phải 15 — hơn một nửa sự cải thiện trước/sau rõ ràng sẽ xảy ra bất kể chương trình, được thúc đẩy bởi cùng sự hồi phục kinh tế nâng nhóm so sánh lên.

**Sự gián đoạn hồi quy, ngưỡng đủ điều kiện**: một kế hoạch tài trợ chỉ có sẵn cho các doanh nghiệp có ít hơn 50 nhân viên. So sánh kết quả cho các doanh nghiệp ngay dưới ngưỡng (45–49 nhân viên, đủ điều kiện) với các doanh nghiệp ngay trên đó (50–54 nhân viên, không đủ điều kiện) cung cấp một đối chiếu thực tế đáng tin cậy vì các doanh nghiệp ở hai bên của một ngưỡng cắt hành chính tùy ý tương tự nhau ở các khía cạnh khác — ngưỡng, không phải bất kỳ đặc điểm doanh nghiệp cơ bản nào, quyết định đủ điều kiện. Một sự khác biệt kết quả trung bình £2.000 giữa hai nhóm, chỉ quan sát được ở ngưỡng, có thể quy cho khoản tài trợ với độ tin cậy cao hơn nhiều so với một so sánh đơn giản của tất cả các doanh nghiệp đủ điều kiện so với tất cả không đủ điều kiện (khác nhau một cách có hệ thống về quy mô).

## Liên hệ với phát triển phần mềm

Suy nghĩ đối chiếu thực tế nên định hình cách các hệ thống theo dõi tác động và các đường ống đánh giá cho phần mềm chính phủ và khu vực xã hội được thiết kế:

- Xây dựng khả năng nắm bắt nhóm so sánh vào một hệ thống từ đầu — ghi lại ai đủ điều kiện nhưng không đăng ký, hoặc một nhóm không-tham-gia khớp — thay vì bổ sung nó sau khi một chương trình đã chạy và chỉ có dữ liệu trước/sau tồn tại.
- Nơi ngẫu nhiên hóa có thể thực hiện được (một đợt triển khai theo giai đoạn, một dịch vụ số được kích hoạt cho một số người dùng trước những người khác), hãy trang bị hệ thống để bảo tồn sự chỉ định ngẫu nhiên như một trường có thể truy vấn; một đợt triển khai theo giai đoạn vô tình phá hủy giá trị đánh giá của riêng nó nếu thứ tự chỉ định không được ghi lại.
- Đây là phương pháp nền tảng đằng sau [các phương pháp đánh giá tác động](../các-phương-pháp-đánh-giá-tác-động/) và là điều phân biệt nó với [đánh giá tác động so với đánh giá quy trình](../đánh-giá-tác-động-so-với-đánh-giá-quy-trình/), cái sau hỏi liệu một chương trình có được cung cấp như dự định hay không thay vì liệu nó có gây ra một hiệu ứng hay không.
- [Tính bổ sung và trọng lượng chết](../tính-bổ-sung-và-trọng-lượng-chết/) và [sự thay thế và quy kết](../sự-thay-thế-và-quy-kết/) đều, về căn bản, là các câu hỏi đối chiếu thực tế — trọng lượng chết là "kết quả cụ thể này sẽ là gì nếu không có can thiệp", được áp dụng ở cấp độ điều chỉnh thay vì thiết kế đánh giá đầy đủ.

## Những cạm bẫy

- **Coi trước/sau là bằng chứng về nguyên nhân.** Đây là lỗi phổ biến nhất và có hệ quả nhất trong báo cáo tác động khu vực công và xã hội; một sự thay đổi trước/sau gây nhiễu hiệu ứng của chương trình với mọi thứ khác đã thay đổi trong cùng thời kỳ.
- **Sử dụng một nhóm so sánh khác biệt một cách có hệ thống với nhóm điều trị.** Một nhóm so sánh khớp phải thực sự tương tự về các đặc điểm liên quan (xem hệ thống cấp bậc phương pháp [phân tích đối chiếu thực tế](../phân-tích-đối-chiếu-thực-tế/) trong Magenta Book); so sánh những người tham gia chương trình (những người đã chọn tham gia, và thường có động lực hơn) với những người không tham gia (những người không chọn) có nguy cơ thiên vị lựa chọn giả dạng thành hiệu ứng chương trình.
- **Phá hủy các cơ hội ngẫu nhiên hóa qua thiết kế cung cấp kém.** Một đợt triển khai theo giai đoạn hoặc ngẫu nhiên chỉ bảo tồn giá trị đánh giá của nó nếu sự chỉ định thực sự ngẫu nhiên và được ghi lại — để các quản lý địa phương chọn ai đi trước làm mất đi mục đích.
- **Tuyên bố quá mức độ chính xác từ một thiết kế yếu.** Một ước tính trước/sau nên được trình bày như là chỉ dẫn, không phải như một kích thước hiệu ứng được đo lường; hệ thống cấp bậc bằng chứng của Magenta Book tồn tại để sức mạnh của một tuyên bố phù hợp với sức mạnh của thiết kế đã tạo ra nó.

## Nguồn tham khảo

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
