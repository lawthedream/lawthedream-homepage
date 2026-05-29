import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '더드림솔루션 | 더드림교통형사센터',
  description: '더드림 보호프로그램 — 형사소송·대응 진행, 단계별 변호사 조력 전략. 더드림 교통형사 전문.',
  keywords: '더드림솔루션,보호프로그램,형사소송,교통형사,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

/* 5단계 플로우 데이터 */
const steps = [
  { num: '01', icon: '📞', label: '사건발생 후\n방문상담' },
  { num: '02', icon: '🔍', label: '유사 사건 성공사례\n확인 및 변호사 배정' },
  { num: '03', icon: '👮', label: '경찰단계' },
  { num: '04', icon: '⚖️', label: '검찰단계' },
  { num: '05', icon: '🏛️', label: '법원단계' },
]

/* 형사 소송 진행 12항목 */
const prosecutionItems = [
  { n: '01', t: '피의자 신병 확보 (현행범 체포)' },
  { n: '02', t: '피의자, 피해자, 가해자, 증거 조사' },
  { n: '03', t: '구속영장 신청 여부 결정' },
  { n: '04', t: '사건에 대한 1차 수사' },
  { n: '05', t: '피의자 조사 및 구속영장 청구' },
  { n: '06', t: '기소여부 결정' },
  { n: '07', t: '송치사건에 대한 보완수사 요구' },
  { n: '08', t: '불송치결정에 대한 재수사 요청' },
  { n: '09', t: '공판' },
  { n: '10', t: '피고인심문' },
  { n: '11', t: '최종변론' },
  { n: '12', t: '선고' },
]

/* 예상 결과 8항목 */
const resultItems = [
  { n: '01', t: '불송치 결정' },
  { n: '02', t: '기소의견 숨치' },
  { n: '03', t: '불기소 처분' },
  { n: '04', t: '기소 유예 등' },
  { n: '05', t: '무죄' },
  { n: '06', t: '선고유예' },
  { n: '07', t: '집행유예' },
  { n: '08', t: '신상정보공개 기각 등' },
]

/* 대응 진행 12항목 */
const responseItems = [
  { n: '01', t: '담당형사변호사 및 사건 TF팀 면담, 전략 수립' },
  { n: '02', t: '증거조사 및 정리' },
  { n: '03', t: '사건진행 시뮬레이션 / 진술 방향 정리' },
  { n: '04', t: '조사시 동행 및 입회' },
  { n: '05', t: '구속수사시 접견 & 불구속 유도' },
  { n: '06', t: '검찰수사시 동행 및 입회' },
  { n: '07', t: '담당검사 면담' },
  { n: '08', t: '불구속수사' },
  { n: '09', t: '구속시 접견' },
  { n: '10', t: '보석신청' },
  { n: '11', t: '법원에서 진실 규명' },
  { n: '12', t: '정식절차에 대한 주장' },
]

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림솔루션" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* ─── Section 2: 사건 처리 프로세스 — 아이콘+글 카드 ─── */}
        <section className="mn02-section">
          <h3 className="mn02-h3">사건 처리 프로세스</h3>
          <span className="mn02-h3-line" />

          <div className="sol-steps-row">
            {steps.map((step, i) => (
              <div key={i} className="sol-step-unit">
                <div className="sol-step-card">
                  <div className="sol-step-icon">{step.icon}</div>
                  <span className="sol-step-num">STEP {step.num}</span>
                  <span className="sol-step-label">{step.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="sol-step-arrow">›</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 3: 경찰 사진 + 형사소송진행 표 ─── */}
        <section className="mn02-section">
          <div className="sol-photo-table-row">
            {/* 좌: 경찰 사진 */}
            <div className="sol-photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/procedure_police.jpg" alt="경찰 수사"
                />
            </div>
            {/* 우: 형사소송진행 표 */}
            <div className="sol-table-side">
              <div className="sol-tbl-head sol-tbl-head-blue">형사 소송 진행</div>
              <div className="sol-tbl-grid sol-tbl-grid-12">
                {prosecutionItems.map((item, i) => (
                  <div key={i} className={`sol-tbl-item${i % 2 === 0 ? '' : ' sol-tbl-item-alt'}`}
                    style={{ borderRight: i < 6 ? '1px solid #eef0f4' : 'none' }}>
                    <span className="sol-tbl-num sol-tbl-num-blue">{item.n}</span>
                    <span className="sol-tbl-txt">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 4: 대응진행 표 + 변호사 사진 ─── */}
        <section className="mn02-section">
          <div className="sol-photo-table-row sol-photo-table-row-rev">
            {/* 좌: 대응진행 표 */}
            <div className="sol-table-side">
              <div className="sol-tbl-head sol-tbl-head-gray">대응 진행</div>
              <div className="sol-tbl-grid sol-tbl-grid-2col">
                {responseItems.map((item, i) => (
                  <div key={i} className={`sol-tbl-item${Math.floor(i/2) % 2 !== 0 ? ' sol-tbl-item-alt' : ''}`}
                    style={{ borderRight: i % 2 === 0 ? '1px solid #eef0f4' : 'none' }}>
                    <span className="sol-tbl-num sol-tbl-num-gray">{item.n}</span>
                    <span className="sol-tbl-txt">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* 우: 노트에 펜 든 전문가 손 사진 */}
            <div className="sol-photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/solution_pen.jpg" alt="전문가 노트 작성"
                />
            </div>
          </div>
        </section>

        {/* ─── Section 5: 예상 결과 ─── */}
        <section className="mn02-section">
          <div className="sol-photo-table-row">
            {/* 좌: 법전/망치 사진 */}
            <div className="sol-photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/solution_gavel.jpg" alt="법원 판결"
                />
            </div>
            {/* 우: 예상 결과 표 */}
            <div className="sol-table-side">
              <div className="sol-tbl-head sol-tbl-head-teal">예상 결과</div>
              <div className="sol-tbl-grid sol-tbl-grid-8">
                {resultItems.map((item, i) => (
                  <div key={i} className={`sol-tbl-item${i % 2 === 0 ? '' : ' sol-tbl-item-alt'}`}
                    style={{ borderRight: i < 4 ? '1px solid #eef0f4' : 'none' }}>
                    <span className="sol-tbl-num sol-tbl-num-teal">{item.n}</span>
                    <span className="sol-tbl-txt">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
