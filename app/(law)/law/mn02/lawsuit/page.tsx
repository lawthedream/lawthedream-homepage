import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '교통사고소송 | 더드림교통형사센터',
  description: '교통사고 소외합의·소송 진행 절차와 합의 시 주의사항. 더드림 교통사고 전문 변호사 무료 상담.',
  keywords: '교통사고소송,소외합의,합의절차,교통사고합의,교통형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/lawsuit' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="교통사고소송" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — Key Point (전체 사진 + 텍스트) */}
        <section className="mn02-section">
          <h3 className="mn02-h3">합의 key point</h3>
          <span className="mn02-h3-line" />
          <div style={{ marginBottom: 30 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/mn02/photos/settlement_meeting.jpg" alt="합의 미팅"
              style={{ width: '100%', height: 320, objectFit: 'cover' }} />
          </div>
          <div className="mn02-text" style={{ textAlign: 'center', fontSize: 16, marginBottom: 16 }}>
            <p>
              교통사고 소외합의를 진행하기 위해서는 <strong>보상금청구 취지를 가지고 있어야 합니다.</strong><br />
              또한 형사기록에 대한 증거목록 제출이 있어야 합니다.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #ddd', paddingTop: 20 }}>
            <div className="mn02-text">
              <p>
                상대방의 간청으로 손해배상금을 받고 합의서를 작성하였다고 하더라도, 합의의 경위와 액수 등을
                고려하여 실제 손해액에 비교하여 극히 적은 경우라면 합의의 효력이 인정되지 않습니다.
              </p>
              <p>
                특히, 사물을 변별할 능력이 떨어지는 등의 특별한 상황이 발생한 경우라면 합의를 시도했다고
                하더라도 작성한 합의서가 무효로 인정될 가능성이 있습니다.
                그렇기에 변호인의 조력을 받아 진행하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — 소외합의 테이블 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">소외합의</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-text" style={{ textAlign: 'center', marginBottom: 20 }}>
            <p>소외합의를 진행할 경우, 비용과 시간을 줄여 효율적으로 사건진행이 가능하다는 장점이 있습니다.</p>
          </div>
          <table className="mn02-tbl">
            <thead>
              <tr>
                <th style={{ width: 140 }}>&nbsp;</th>
                <th>사고 시 보험사에서 보상을 받는 방법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>단순합의</td>
                <td>
                  교통사고 발생 시, 자동차보험 약관을 기준으로 손해배상금을 산정하여
                  보험사 담당자와 직접 합의를 진행.
                </td>
              </tr>
              <tr>
                <td>특인제도 활용</td>
                <td>
                  보험사에서 예상되는 소송가액의 약 80~90% 선에서 합의절차를 진행.<br />
                  <span style={{ color: '#777', fontSize: 13 }}>
                    (중상해를 입어 보험사와 합의에 이르지 못하거나, 소송을 진행하는 경우 상당한 시간과 비용이
                    소요되는 시간을 고려할 때 특인제도가 유리하다면 특인제도를 활용하는 것입니다.)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mn02-gray-bg" style={{ marginTop: 20, textAlign: 'center' }}>
            <div className="mn02-text">
              <p>
                사고 등이 매우 경미하거나, 피해자 과실이 많거나, 피해자가 고령인 경우라면
                소외합의를 진행하는 것이 유리합니다.
              </p>
              <p style={{ color: '#888', fontSize: 14 }}>
                (통상적으로 택시/버스/화물/렌터카 등은 소외합의가 이루어지지 않습니다.)
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — 합의절차 스텝 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">합의절차</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-steps-wrap">
            <div className="mn02-steps-row">
              <div className="mn02-steps-item">
                <div className="mn02-steps-dot" />
                <div className="mn02-steps-num">step01</div>
                <div className="mn02-steps-label">상담</div>
              </div>
              <div className="mn02-steps-item">
                <div className="mn02-steps-dot" />
                <div className="mn02-steps-num">step02</div>
                <div className="mn02-steps-label">사건선임 및<br />담당변호사 지정</div>
              </div>
              <div className="mn02-steps-item">
                <div className="mn02-steps-dot" />
                <div className="mn02-steps-num">step03</div>
                <div className="mn02-steps-label">사건 집중 검토 및<br />청구 금액 산정(2주)</div>
              </div>
              <div className="mn02-steps-item">
                <div className="mn02-steps-dot" />
                <div className="mn02-steps-num">step04</div>
                <div className="mn02-steps-label">상대방에게<br />협의안 제시</div>
              </div>
              <div className="mn02-steps-item">
                <div className="mn02-steps-dot" />
                <div className="mn02-steps-num">step05</div>
                <div className="mn02-steps-label">협의안 수정</div>
              </div>
            </div>
          </div>
          <div className="mn02-branch">
            <div className="mn02-branch-item">
              <div className="mn02-branch-box">합의 성사</div>
              <div className="mn02-branch-arrow">↓</div>
              <div className="mn02-branch-box filled">사건종결</div>
            </div>
            <div className="mn02-branch-item">
              <div className="mn02-branch-box">합의 결렬</div>
              <div className="mn02-branch-arrow">↓</div>
              <div className="mn02-branch-box filled">소송 진행</div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
