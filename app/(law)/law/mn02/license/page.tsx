import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '면허취소구제 | 더드림교통형사센터',
  description: '운전면허 취소·정지 구제 절차. 결격기간, 생계형 이의신청, 행정심판, 행정소송 전문 안내. 더드림 교통형사센터.',
  keywords: '면허취소구제,운전면허취소,면허정지,이의신청,행정심판,면허구제변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/license' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="면허취소구제" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/license" />

      <div className="mn02-wrap">

        {/* Section 1 — Key Point */}
        <section className="mn02-section">
          <h3 className="mn02-h3">면허취소구제 key point</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-split">
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/license_gavel.jpg" alt="법원 판사 망치" />
            </div>
            <div className="text-side">
              <div className="mn02-text">
                <p>
                  운전면허에 대한 취소처분 또는 정지처분이나 연습운전면허의 취소처분에 대해 이의가 있는
                  사람은 처분을 받은 날로부터 <strong>60일 이내에 지방경찰청장에게 이의를 신청</strong>할 수 있습니다.
                </p>
                <p>또한 아래 사유가 있는 경우는 행정처분이 감경될 수 있습니다.</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ minWidth: 32, height: 32, background: '#bf8553', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>01</span>
                  <span className="mn02-text" style={{ margin: 0 }}>운전이 가족 생계 수단인 경우</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ minWidth: 32, height: 32, background: '#bf8553', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>02</span>
                  <span className="mn02-text" style={{ margin: 0 }}>모범운전자로서 3년 이상 교통봉사활동에 종사한 경우</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{ minWidth: 32, height: 32, background: '#bf8553', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>03</span>
                  <span className="mn02-text" style={{ margin: 0 }}>경찰서장 이상의 표창을 받은 경우</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid #ddd', paddingTop: 16 }}>
                <div className="mn02-text">
                  <p>
                    이의를 신청한 사람은 그 이의신청 여부와 관계없이 다른 행정구제 수단인
                    행정심판법에 의한 행정심판청구를 청구할 수 있고, 행정심판청구에 대한 재결에
                    대하여 다투려는 경우에는 행정소송법에 의한 행정소송을 제기할 수 있습니다.
                  </p>
                  <p>이런 일련의 과정들은 전문변호사를 통하여 진행되어야 합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — 결격기간 테이블 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">운전면허 결격기간</h3>
          <span className="mn02-h3-line" />
          <table className="mn02-tbl" style={{ marginBottom: 30 }}>
            <thead>
              <tr><th style={{ width: 100 }}>결격기간</th><th>사유</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>5년</td>
                <td>
                  사람을 사상 + 사고후미조치<br />
                  음주운전 과로운전, 공동위험행위 + 사람사상 후 사고후미조치<br />
                  음주운전, 무면허운전, 운전면허 결격자 + 사람 사망에 이르게 한 경우
                </td>
              </tr>
              <tr>
                <td>4년</td>
                <td>(무면허운전 음주운전·과로운전 공동위험행위) 이외의 사유 + 사고후미조치</td>
              </tr>
              <tr>
                <td>3년</td>
                <td>
                  음주운전 또는 음주측정거부 + 2회 이상 교통사고<br />
                  자동차 등을 이용한 범죄 또는 자동차 절도 강도
                </td>
              </tr>
              <tr>
                <td>2년</td>
                <td>
                  무면허운전 3회 이상<br />
                  음주운전 또는 음주측정거부 2회이상<br />
                  음주운전 또는 음주측정거부 + 교통사고<br />
                  공동위험행위 2회이상<br />
                  부정면허취득, 자동차 절도 강도, 면허시험대리응시
                </td>
              </tr>
              <tr>
                <td>1년</td>
                <td>
                  무면허운전<br />
                  음주운전<br />
                  2~5년 제한 이외의 사유로 면허 취소<br />
                  공동위험행위로 원동기장치자전거면허 취득하려고 하는 경우
                </td>
              </tr>
            </tbody>
          </table>

          {/* 벌점 취소·정지 기준 */}
          <h4 style={{ fontSize: 16, fontWeight: 700, color: '#253d5f', marginBottom: 16 }}>벌점 등 초과로 인한 운전면허 취소·정지</h4>
          <div className="mn02-split">
            <div className="photo-side" style={{ flex: '0 0 38%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/license_driving.jpg" alt="운전 중" />
            </div>
            <div className="text-side">
              <table className="mn02-tbl">
                <thead>
                  <tr><th>사유</th><th>벌점 또는 누산점수</th></tr>
                </thead>
                <tbody>
                  <tr><td>1년간</td><td>121점</td></tr>
                  <tr><td>2년간</td><td>271점</td></tr>
                  <tr><td>3년간</td><td>271점</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 — 생계형 이의신청 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">생계형 이의신청</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-text" style={{ textAlign: 'center', marginBottom: 24 }}>
            <p>
              생계형 이의신청이란, 음주운전이나 벌점초과 등의 사유로 운전면허 취소처분이 행해질 경우,
              직업이나 생계에 지장이 발생하여, 사익침해가 중대한 경우 이의신청을 청구하는 것을 말함.
            </p>
          </div>
          <div className="mn02-split">
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/license_lawyer.jpg" alt="변호사 상담" />
            </div>
            <div className="text-side">
              <div className="mn02-info-label">
                <span className="mn02-info-tag">대상</span>
                <span className="mn02-info-tagval">운전면허가 생계수단이 되는 운전자에 한함</span>
              </div>
              <ul className="mn02-info-list">
                <li>① 음주운전 : 혈중알코올농도 0.0100% 이상에서 운전</li>
                <li>② 벌점누계 : 직전 1년간 121점, 2년간 201점, 3년간 271점 이상</li>
                <li>③ 경찰의 잘못이 있거나 오해를 받아 억울하게 면허취소가 된 경우</li>
              </ul>
              <div className="mn02-info-label" style={{ marginTop: 12 }}>
                <span className="mn02-info-tag">제외 요건</span>
              </div>
              <ul className="mn02-info-list">
                <li>① 혈중 알코올농도 0.120% 초과</li>
                <li>② 주취 운전 중 인피사고 발생</li>
                <li>③ 음주측정 요구 불응 혹은 도주하거나, 경찰관을 폭행한 경우</li>
                <li>④ 과거 5년 이내 음주경력이나 3회 이상 인피사고 전력이 있는 경우</li>
                <li>⑤ 과거 5년 이내 음주면허 행정처분심의를 받아 행정처분이 감경된 경우</li>
              </ul>
              <div className="mn02-info-label" style={{ marginTop: 12 }}>
                <span className="mn02-info-tag">기간</span>
              </div>
              <div className="mn02-text"><p>처분 날로부터 60일 이내</p></div>
            </div>
          </div>
        </section>

        {/* Section 5 — 행정심판 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">행정심판</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-text" style={{ textAlign: 'center', marginBottom: 24 }}>
            <p>음주운전구제를 위한 행정심판은 별도의 대상을 정하지 않으며 모든 처분자에게 기회를 부여</p>
          </div>
          <div className="mn02-split">
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/license_police.jpg" alt="경찰관" />
            </div>
            <div className="text-side">
              <div className="mn02-info-label">
                <span className="mn02-info-tag">대상</span>
                <span className="mn02-info-tagval">제한 없음</span>
              </div>
              <ul className="mn02-info-list">
                <li>① 음주운전 : 혈중알코올농도 0.05%이상 또는 0.100% 이상에서 운전</li>
                <li>② 벌점초과 : 벌점누계가 직전 1년간 121점, 2년간 201점, 3년간 271점 이상</li>
                <li>③ 뺑소니 : 고의적인 도주가 아니거나, 사고사실을 알지 못한 경우</li>
                <li>④ 무면허 : 운전면허 정지기간임을 알지 못했거나, 긴급한 상황에 운전이 불가피한 경우</li>
                <li>⑤ 음주측정 불응 : 위법한 단속이거나 운전하지 않았던 경우</li>
                <li>⑥ 경찰의 부당 및 위법한 행위 : 경찰관에게 잘못이 있거나, 오해를 받아 억울한 경우</li>
              </ul>
              <div className="mn02-info-label" style={{ marginTop: 12 }}>
                <span className="mn02-info-tag">기간</span>
              </div>
              <div className="mn02-text"><p>처분 날로부터 60일 이내</p></div>
            </div>
          </div>
        </section>

        {/* Section 6 — 행정소송 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">행정소송</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-split">
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/license_scales.jpg" alt="정의의 저울" />
            </div>
            <div className="text-side">
              <div className="mn02-info-label">
                <span className="mn02-info-tag">요점</span>
              </div>
              <ul className="mn02-info-list">
                <li>① 음주운전 : 혈중알코올농도 0.0100% 이상에서 운전</li>
                <li>② 벌점누계 : 직전 1년간 121점, 2년간 201점, 3년간 271점 이상</li>
                <li>③ 경찰의 잘못이 있거나 오해를 받아 억울하게 면허취소가 된 경우</li>
              </ul>
              <div className="mn02-text" style={{ marginTop: 16 }}>
                <p>
                  행정심판에서 기각된 경우라도 행정소송을 통해 다시 한번 구제를 받을 수 있습니다.
                  전문 변호사의 체계적인 소송 전략으로 면허 구제 가능성을 높이시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
