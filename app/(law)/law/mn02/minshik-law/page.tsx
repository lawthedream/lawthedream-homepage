import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '민식이법 | 더드림교통형사센터',
  description: '민식이법(스쿨존 교통사고) 처벌기준과 대처방법. 특정범죄가중처벌법 개정안 상세 안내. 더드림 교통형사 전문.',
  keywords: '민식이법,스쿨존,어린이보호구역,민식이법처벌,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/minshik-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="민식이법" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — Key Point (히어로 배경 + 카드) */}
        <section className="mn02-section">
          <h3 className="mn02-h3">민식이법 key point</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/mn02/photos/minshik_schoolzone.jpg" alt="법원 망치" />
            <div className="mn02-hero-overlay">
              <div className="mn02-hero-card">
                <span className="mn02-badge gold" style={{ marginBottom: 16 }}>민식이법</span>
                <div className="mn02-text">
                  <p>
                    2019년 9월 충남 아산의 어린이보호구역에서 발생한 교통사고로 김민식 군이 사망하였고,
                    이를 계기로 관련 법안이 입법·시행되었습니다.
                  </p>
                  <p>
                    어린이보호구역(스쿨존)에서의 교통사고는 일반 교통사고보다
                    <strong> 훨씬 무거운 형사처벌</strong>을 받으므로 전문 변호인의 도움이 반드시 필요합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — 스쿨존사고 설명 + 사진 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">스쿨존사고 — 민식이법</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-split">
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/school_bicycle.jpg" alt="어린이보호구역 자전거" />
            </div>
            <div className="text-side">
              <span className="mn02-badge blue">스쿨존사고</span>
              <div className="mn02-text">
                <p>
                  어린이보호구역(스쿨존)이란 학교, 유치원, 어린이집, 학원 등의 주변 도로 중에서
                  일정 구간을 어린이 보호를 위해 지정한 구역입니다.
                </p>
                <p>
                  민식이법에 의해 스쿨존 내 어린이 교통사고는 <strong>운전자의 주의의무가 대폭 강화</strong>되었습니다.
                  제한속도 준수, 전방 주시 등의 의무를 다했음을 입증하지 못하면
                  가중처벌을 피하기 어렵습니다.
                </p>
                <p>
                  사고 직후부터 블랙박스 영상 확보, 목격자 진술 등 증거 수집이 중요하며,
                  전문 변호사의 조력 아래 사건을 진행하시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — 민식이법 법안 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">민식이법 법안</h3>
          <span className="mn02-h3-line" />
          <table className="mn02-tbl" style={{ marginBottom: 24 }}>
            <thead>
              <tr><th style={{ width: 220 }}>법안</th><th>주요 내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>도로교통법 개정안</td>
                <td>
                  어린이보호구역 내 과속단속카메라, 신호등 등 안전시설 설치 의무화.
                  지방자치단체의 안전시설 설치·관리 책임 강화.
                </td>
              </tr>
              <tr>
                <td>특정범죄가중처벌법 개정안</td>
                <td>
                  어린이보호구역에서 어린이를 사상하게 한 경우 가중 처벌.
                  안전운전의무 위반 여부와 무관하게 사고 발생 시 처벌 적용.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mn02-gray-bg">
            <div style={{ background: '#253d5f', color: '#fff', padding: '10px 16px', fontWeight: 600, fontSize: 15, marginBottom: 12 }}>
              특정범죄 가중처벌법에 신설된 내용 (제5조의13)
            </div>
            <div className="mn02-text">
              <p>
                자동차 등의 운전자가 <strong>어린이보호구역</strong>에서 어린이의 안전에 유의하면서 운전하여야 할 의무를 위반하여
                어린이(13세 미만)에게 교통사고처리특례법 제3조 제1항의 죄를 범한 경우에는 다음과 같이 가중처벌한다.
              </p>
              <p>
                • 피해어린이를 <strong>사망</strong>에 이르게 한 경우: 무기 또는 3년 이상의 징역<br />
                • 피해어린이를 <strong>상해</strong>에 이르게 한 경우: 1년 이상 15년 이하의 징역 또는 500만원 이상 3천만원 이하의 벌금
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — 민식이법 형량 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">민식이법 형량</h3>
          <span className="mn02-h3-line" />
          <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
            <div style={{ flex: 1, background: '#f4f3f2', padding: 36, textAlign: 'center' }}>
              <div style={{
                width: 90, height: 90, borderRadius: '50%', background: '#bf8553',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', color: '#fff', fontSize: 17, fontWeight: 700
              }}>형량</div>
              <div className="mn02-text">
                <p>어린이를 <strong>사망</strong>에 이르게 한 경우에는<br /><strong>무기 또는 3년 이상의 징역</strong>에 처한다.</p>
                <p>어린이를 <strong>상해</strong>에 이르게 한 경우에는<br />1년 이상 15년 이하의 징역 또는<br />500만원 이상 3천만원 이하의 벌금에 처한다.</p>
              </div>
            </div>
            <div style={{ flex: 1, background: '#f4f3f2', padding: 36, textAlign: 'center' }}>
              <div style={{
                width: 90, height: 90, borderRadius: '50%', background: '#253d5f',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', color: '#fff', fontSize: 17, fontWeight: 700
              }}>처벌</div>
              <div className="mn02-text">
                <p><strong>사망시</strong> 무기 또는 3년 이상의 징역</p>
                <p><strong>상해시</strong> 1년 이상 15년 이하의 징역<br />또는 500만원 이상 3천만원 이하의 벌금</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
