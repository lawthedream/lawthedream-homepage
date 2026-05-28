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

        {/* ─── Section 1: 더드림 보호프로그램 ─── */}
        <section className="mn02-section">
          <h3 className="mn02-h3">더드림 보호프로그램</h3>
          <span className="mn02-h3-line" />
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/law/mn02/img/mn02_07_img1.jpg"
              alt="더드림 보호프로그램"
              style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          </div>
        </section>

        {/* ─── Section 2: 사건 처리 프로세스 — 아이콘+글 카드 ─── */}
        <section className="mn02-section">
          <h3 className="mn02-h3">사건 처리 프로세스</h3>
          <span className="mn02-h3-line" />

          <div style={{
            display: 'flex', alignItems: 'stretch', justifyContent: 'center',
            gap: 0, padding: '30px 0 40px', flexWrap: 'wrap',
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {/* 아이콘 카드 */}
                <div style={{
                  width: 148,
                  background: '#fff',
                  border: '1px solid #dde4ec',
                  borderRadius: 8,
                  boxShadow: '0 2px 10px rgba(37,61,95,0.08)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '22px 10px 18px',
                  textAlign: 'center',
                }}>
                  {/* 이모티콘 아이콘 */}
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #253d5f 0%, #375b73 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, marginBottom: 12,
                    boxShadow: '0 3px 8px rgba(37,61,95,0.25)',
                  }}>
                    {step.icon}
                  </div>
                  {/* 단계 번호 */}
                  <span style={{
                    fontSize: 11, color: '#375b73', fontWeight: 700,
                    letterSpacing: 2, marginBottom: 6,
                  }}>STEP {step.num}</span>
                  {/* 제목 */}
                  <span style={{
                    fontSize: 13.5, color: '#1a2e42', fontWeight: 700,
                    lineHeight: 1.5, whiteSpace: 'pre-line',
                  }}>{step.label}</span>
                </div>
                {/* 화살표 (마지막 제외) */}
                {i < steps.length - 1 && (
                  <div style={{
                    width: 28, textAlign: 'center', flexShrink: 0,
                    fontSize: 18, color: '#90a4ae',
                  }}>›</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 3: 경찰 사진 + 형사소송진행 표 ─── */}
        <section className="mn02-section">
          <div style={{ display: 'flex', gap: 30, alignItems: 'stretch' }}>

            {/* 좌: 경찰 사진 */}
            <div style={{ flex: '0 0 340px', overflow: 'hidden', borderRadius: 4 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/law/mn02/photos/procedure_police.jpg"
                alt="경찰 수사"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* 우: 형사소송진행 표 */}
            <div style={{ flex: 1 }}>
              <div style={{
                background: '#253d5f', color: '#fff',
                padding: '10px 20px', fontSize: 16, fontWeight: 700,
                borderRadius: '4px 4px 0 0', letterSpacing: 1,
              }}>
                형사 소송 진행
              </div>
              {/* 좌열 01~06, 우열 07~12 — grid-auto-flow:column */}
              <div style={{
                border: '1px solid #dde2ea', borderTop: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'repeat(6, auto)',
                gridAutoFlow: 'column',
                borderRadius: '0 0 4px 4px', overflow: 'hidden',
              }}>
                {prosecutionItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 14px',
                    borderBottom: '1px solid #eef0f4',
                    /* 좌열(0~5) 우측 구분선 */
                    borderRight: i < 6 ? '1px solid #eef0f4' : 'none',
                    background: i % 2 === 0 ? '#fff' : '#f8f9fb',
                    fontSize: 13.5,
                  }}>
                    <span style={{
                      color: '#375b73', fontWeight: 700, fontSize: 12,
                      minWidth: 24, flexShrink: 0,
                    }}>{item.n}</span>
                    <span style={{ color: '#333', lineHeight: 1.4 }}>{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 4: 대응진행 표 + 변호사 사진 ─── */}
        <section className="mn02-section">
          <div style={{ display: 'flex', gap: 30, alignItems: 'stretch' }}>

            {/* 좌: 대응진행 표 */}
            <div style={{ flex: 1 }}>
              <div style={{
                background: '#546e7a', color: '#fff',
                padding: '10px 20px', fontSize: 16, fontWeight: 700,
                borderRadius: '4px 4px 0 0', letterSpacing: 1,
              }}>
                대응 진행
              </div>
              <div style={{
                border: '1px solid #dde2ea', borderTop: 'none',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                borderRadius: '0 0 4px 4px', overflow: 'hidden',
              }}>
                {responseItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 14px',
                    borderBottom: '1px solid #eef0f4',
                    borderRight: i % 2 === 0 ? '1px solid #eef0f4' : 'none',
                    background: i % 4 < 2 ? '#fff' : '#f8f9fb',
                    fontSize: 13.5,
                  }}>
                    <span style={{
                      color: '#546e7a', fontWeight: 700, fontSize: 12,
                      minWidth: 24, flexShrink: 0,
                    }}>{item.n}</span>
                    <span style={{ color: '#333', lineHeight: 1.4 }}>{item.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 우: 변호사/서류 사진 */}
            <div style={{ flex: '0 0 340px', overflow: 'hidden', borderRadius: 4 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/law/mn02/photos/procedure_lawyer.jpg"
                alt="변호사 상담"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
