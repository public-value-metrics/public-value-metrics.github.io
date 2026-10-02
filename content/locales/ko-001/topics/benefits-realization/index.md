# 편익 실현

편익 실현 관리는 비즈니스 케이스에서 약속된 편익이 가동 후 실제로 실현되었음을 식별하고, 기준선을 설정하고, 추적하고, *입증하는* 규율이다. 영국의 공공 투자에서, 이는 HM Treasury의 Green Book 5개 사례 모델과 Infrastructure and Projects Authority의 전용 편익 관리 지침 안에 자리한다; 이것 없이는, "그 시스템은 청구당 케이스워커의 30분을 절약했다"는 영원히 감사되지 않은 주장으로 남는다.

## 중요한 이유

비즈니스 케이스는 약속이며, 편익 실현은 그 감사다. Green Book은 모든 지출 사례가 다섯 가지 검증——전략적, 경제적, 상업적, 재정적, 관리적——을 통과할 것을 요구하며, 관리 사례는 *승인 전에* 편익이 어떻게 실현될지를 정해야 한다: 소유자가 지명되고, 기준선이 포착되며, 측정 날짜가 고정된다. Infrastructure and Projects Authority의 가이드 『Benefits Management: A Guide to Realizing Benefits for Government Major Projects』(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>)가 존재하는 이유는 Government Major Projects Portfolio에 대한 IPA 자체의 포트폴리오 보고가 전달 확신도와 편익 실현이 대규모 프로그램 전반에 걸쳐 반복적으로 발생하는 약점으로 인용되는 것을 반복적으로 발견해왔기 때문이다. 프로젝트는 그 전달 마일스톤에 대해 "제시간에 예산 내로" 마감되면서도, 애초에 그 돈을 쓰는 것을 정당화한 편익을 실현하는 데 실패할 수 있다——IPA의 지침은 이 구별을 그 규율 전체의 요점으로 취급한다.

## 계산식

```
실현율 = 실현된 편익 / 예측된 편익   （편익별, 기간별）

그것을 계산 가능하게 만드는 메커니즘:
  가동 전에 포착된 기준선（그렇지 않으면 차이는 측정 불가능）
  각 편익: 지명된 소유자, 지표, 데이터 출처, 측정 일정
  평가 시 낙관 편향에 대해 조정된 예측（Green Book 필수
  요건）
  현금창출형/용량해제형/정성적으로 분류되고 별도로 추적,
  보고되는 편익
```

## 계산 예시

**지방자치단체**: 디지털 계획 신청 포털 비즈니스 케이스는 연간, 인쇄 및 우편 간접비 절감으로 £300,000(현금), 해제된 직원 시간 4,500시간(용량), 향상된 신청자 만족도(정성적)를 약속했다. 가동 12개월 후.

```
편익              예측      실현       율     증거
현금 절감         £300,000  £210,000   70%    재무 원장 대
                                              기준선 연도
직원 시간         4,500     3,200      71%    타임모션 표본
만족도            +8pp      +11pp      138%   신청자 설문조사
                                              데이터

검토로부터의 조치（편익 실현의 요점）:
현금 부족은 여전히 예외적으로 종이 신청을 처리하는 두 개의
서비스 영역으로 추적됨 → 그 예외 경로를 폐쇄; 이 사례의
예측 오류에 기반해 다음 비즈니스 케이스의 낙관 편향 보정을
10%에서 25%로 인상.
```

70%의 실현율은 실패가 아니다——이는 다음 예측을 더 잘 보정할 수 있게 하는 지식이다. 측정되지 않은 사례는 영원히 100%를 주장했을 것이며, 재무팀은 그것에 이의를 제기할 근거가 없었을 것이다.

## 소프트웨어 개발과의 연관성

엔지니어링 조직은 일상적으로 예측된 편익에 기반해 플랫폼과 도구 투자를 승인하고 그 후에는 거의 감사하지 않는다——이는 정확히 편익 실현 관리가 해결하기 위해 존재하는 병리다. 경량 이식: 중요성 기준선을 넘는 모든 제안은 편익 소유자, 기준선 지표, 고정된 검토 날짜(전형적으로 가동 후 6개월)를 지명해야 하며, 과거 제안으로부터의 실현율은 조직이 팀이나 벤더의 다음 예측을 얼마나 신뢰하는지를 할인해야 한다. 이는 이 규율이 감사하는 예측을 설정하는 [Green Book 평가](../green-book-appraisal/)로 다시 고리를 닫는다. 그리고 이는 생성형 AI 파일럿의 대다수가 측정 가능한 수익을 보여주지 못한다는 널리 보고된 발견의 배후에 있는 것과 같은 논리다——[공공 부문의 AI 생산성](../ai-productivity-in-the-public-sector/) 참조——왜냐하면 실제로 가치를 *반환한* 파일럿은, 거의 예외 없이, 처음부터 지명되고 추적 가능한 편익 라인을 가진 파일럿이었기 때문이다. 이는 또한 실제로 전달된 것과 실제로 실현된 것을 구별하는 것에도 의존한다——[성과와 산출물](../outcomes-vs-outputs/) 참조.

## 함정

- **가동 전 기준선이 없는 것**: 치명적이고 수정 불가능한 누락이다——그것 없이는 실현율이 결코 계산될 수 없고, 주장될 수만 있다.
- **편익의 고아화**: 지명된 소유자가 없는 편익은 그 데이터를 수집하는 사람이 아무도 없으며, 모든 포트폴리오 검토는 기본적으로 그것을 "대체로 순조로움"이라고 보고한다.
- **프로그램 포트폴리오 전반에 걸친 이중 계산된 편익**: 두 프로젝트가 모두 같은 해제된 케이스워커 용량을 자신의 편익으로 주장하는 것——이를 잡아내기 위해 포트폴리오 전체에 걸쳐 단일한 편익 등록부를 유지할 것.
- **실현 연극**: 현금과 용량 라인이 조용히 검토되지 않는 동안 쉬운 정성적 성공을 눈에 띄게 측정하고 보고하는 것.
- **전달을 실현과 혼동하는 것**: 마일스톤을 "제시간에 예산 내로" 마감하는 프로젝트는 예측된 편익이 실제로 일어났는지에 대해서는 아무것도 말해주지 않는다——IPA의 지침은 이를 두 개의 별도 증거 흔적을 가진 두 개의 별도 질문으로 취급한다.

## 출처

- HM Treasury, Green Book and Five Case Model guidance.
  <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for
  Government Major Projects*.
  <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio.
  <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
