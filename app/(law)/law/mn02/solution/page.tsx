import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '더드림솔루션 | 더드림교통형사센터',
  description: '더드림 보호프로그램 — 형사소송·대응 진행, 단계별 변호사 조력 전략. 더드림 교통형사 전문.',
  keywords: '더드림솔루션,보호프로그램,형사소송,교통형사,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

const CRIMINAL_PROCESS = [
  '최초 단계 협의 (전형별 직무)', '자동차 대인 보호조치 요도', '사건집행 현황 파악',
  '사건에대한 1차 수사', '교통사고 추가 검토', '자동차 관련',
]
const CIVIL_PROCESS = [
  '담당변호사 및 사건 전담 팀 선발, 선거 수립', '날인경우 변덕',
  '사건진행 사무세이아이션 / 단순 발생 의견', '날인경우 변덕',
  '조서 성정 및 검토', '조사주거사가 검사 롤플레이 도도',
  '구속수사의 검증소 롤플레이 도도', '변화없던에 대한 도움',
  '검찰고사사진충 의류 확보', '날인사항', '법원변호사 대한 공문', '날인경우 의견에 대한 지원',
]
const EXPECTED_RESULTS = [
  '불기소 처분', '공소사실 축소', '벌금형 감경', '기소유예',
  '선고유예', '집행유예', '산정경 보 완', '산정영보 관련 기록부',
]

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림솔루션" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — 더드림 보호프로그램 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">더드림 보호프로그램</h3>
          <span className="mn02-h3-line" />

          {/* 팀 사진 */}
          <div style={{ marginBottom: 30 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/mn02/photos/solution_handshake.jpg" alt="더드림 법률 팀"
              style={{ width: '100%', height: 300, objectFit: 'cover' }} />
          </div>
          <div className="mn02-text" style={{ textAlign: 'center', marginBottom: 30 }}>
            <p>
              더드림에서는 사건의 명확한 해결을 통하여 특별 보호프로그램을 운영하고 있습니다.<br />
              각 단계별로 축적된 전략에 노하우로 명쾌한 해결방안을 제시합니다.
            </p>
          </div>

          {/* 절차 플로우 */}
          <div className="mn02-flow" style={{ marginBottom: 40 }}>
            {[
              { icon: '💬', label: '사건발생 후\n방문상담' },
              { icon: '📋', label: '유사 사건\n성공사례 확인 및\n담당변호사 배정' },
              { icon: '🚔', label: '경찰단계' },
              { icon: '⚖️', label: '검찰단계' },
              { icon: '🔨', label: '법원단계' },
            ].map((step, i) => (
              <div className="mn02-flow-step" key={i}>
                <div className="mn02-flow-circle">{step.icon}</div>
                <div className="mn02-flow-label" style={{ whiteSpace: 'pre-line' }}>{step.label}</div>
              </div>
            ))}
          </div>

          {/* 형사 소송 진행 */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: '#253d5f', color: '#fff', padding: '10px 16px', fontWeight: 600, fontSize: 15, marginBottom: 12 }}>
                형사 소송 진행
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, border: '1px solid #e0e0e0' }}>
                {[
                  '01 최초 단계 협의 (전형별 직무)', '07 성명서 대한 보조조치 요도',
                  '02 자동차 대인 보조조치 요도', '08 통보사항에 대한 보조사항 요도',
                  '03 구속사항 신문서 파악', '09 공판',
                  '04 사건에대한 1차 수사', '10 피고인신문',
                  '05 교통사고 추가 검토', '11 최종변론',
                  '06 자동차 관련', '12 선고',
                ].map((item, i) => (
                  <div key={i} style={{ padding: '10px 14px', borderRight: i % 2 === 0 ? '1px solid #e0e0e0' : 'none', borderBottom: i < 10 ? '1px solid #e0e0e0' : 'none', fontSize: 13, color: '#555' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: '#253d5f', color: '#fff', padding: '10px 16px', fontWeight: 600, fontSize: 15, marginBottom: 12 }}>
                대응 진행
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, border: '1px solid #e0e0e0' }}>
                {[
                  '01 담당변호사 및 사건 전담 팀 선발', '07 날인경우 변덕',
                  '02 증거조서 성정', '08 날인경우 의견 진행',
                  '03 사전진행 사무세이아이션 발생 의견', '09 날인사항',
                  '04 조서 성정 및 검토', '10 날인사항',
                  '05 구속수사의 검증소 롤플레이 도도', '11 법원변호사 대한 공문',
                  '06 검찰고사사진충 의류 확보', '12 날인경우 의견에 대한 지원',
                ].map((item, i) => (
                  <div key={i} style={{ padding: '10px 14px', borderRight: i % 2 === 0 ? '1px solid #e0e0e0' : 'none', borderBottom: i < 10 ? '1px solid #e0e0e0' : 'none', fontSize: 13, color: '#555' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 예상 결과 */}
          <div style={{ marginTop: 30 }}>
            <div style={{ background: '#253d5f', color: '#fff', padding: '10px 16px', fontWeight: 600, fontSize: 15, marginBottom: 12 }}>
              예상 결과
            </div>
            <ul className="mn02-result-grid">
              {['불기소 처분', '기소유예', '공소사실 축소', '선고유예',
                '벌금형 감경', '집행유예', '산정경 보완', '산정영보 관련 기록부'].map((item, i) => (
                <li key={i}>
                  <span className="mn02-result-num">0{i + 1}</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2 — 보호 프로그램 과정 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">보호 프로그램 과정</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-venn">
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle blue">변호사<br />전체회의</div>
              <div className="mn02-venn-desc">성공사례와 판례를 기반으로 전체회의를 통해 최적의 형사 변호사 배정</div>
            </div>
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle gold">형사 TF팀<br />구성</div>
              <div className="mn02-venn-desc">해당 사건에 특화된 팀을 구성 사건진행 총괄</div>
            </div>
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle blue">TF팀<br />전략회의</div>
              <div className="mn02-venn-desc">누적된 성공사례를 바탕으로 사건해결을 위한 전략수립</div>
            </div>
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle gold">수사기관과<br />커뮤니케이션</div>
              <div className="mn02-venn-desc">담당변호사 외 전체변호사들간 사건공유 해당기관과 긴밀한 소통</div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
