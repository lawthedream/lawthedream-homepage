import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '더드림 보호프로그램 | 더드림교통형사센터',
  description: '더드림만의 특별 보호프로그램. 형사 소송 진행부터 대응 진행까지. 02-6959-5053.',
  keywords: '더드림보호프로그램,형사소송,교통사고전략,형사변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

const conTit = (text: string) => (
  <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{text}</h3>
)
const titLine = (
  <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
)

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림 보호프로그램" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/solution" />

      <div id="contents">
        {/* ── Section 1: 더드림 보호프로그램 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('더드림 보호프로그램')}
          {titLine}

          {/* 변호사 팀 사진 */}
          <div style={{ width: '100%', height: 300, overflow: 'hidden', borderRadius: 4, marginBottom: 40 }}>
            <img src="/law/mn02/img/mn02_07_img1.jpg" alt="더드림 변호사 팀"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>

          <p style={{ textAlign: 'center', fontSize: 17, color: '#333', lineHeight: 2, marginBottom: 10 }}>
            더드림에서는 사건의 명확한 해결을 통하여 특별 보호프로그램을 운영하고 있습니다.
          </p>
          <p style={{ textAlign: 'center', fontSize: 15, color: '#666', lineHeight: 1.9, marginBottom: 60 }}>
            각 단계별로 축적된 전문화된 노하우로 명확한 해결방안을 제시합니다.
          </p>

          {/* 5단계 프로세스 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 60, flexWrap: 'wrap' }}>
            {[
              { icon: '💬', label: '상담방문 후
방문상담' },
              { icon: '📊', label: '유사 사건
성공사례 확인 및
담당변호사 배정' },
              { icon: '🚔', label: '경찰단계' },
              { icon: '⚖️', label: '검찰단계' },
              { icon: '🔨', label: '법원단계' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', width: 140 }}>
                  <div style={{ width: 90, height: 90, borderRadius: '50%', border: '2px solid #253d5f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', background: '#fff' }}>
                    <span style={{ fontSize: 30 }}>{step.icon}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#444', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{step.label}</p>
                </div>
                {i < 4 && <div style={{ width: 30, textAlign: 'center', color: '#aaa', fontSize: 18, marginBottom: 30 }}>→</div>}
              </div>
            ))}
          </div>

          {/* 형사 소송 진행 + 대응 진행 */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
            {/* 형사 소송 진행 */}
            <div style={{ flex: 1, border: '1px solid #e2e2e2', borderRadius: 4, padding: '30px', background: '#fff' }}>
              <div style={{ background: '#253d5f', color: '#fff', textAlign: 'center', padding: '10px', borderRadius: 2, marginBottom: 20, fontSize: 16, fontWeight: 600 }}>
                형사 소송 진행
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ width: '100%', height: 120, overflow: 'hidden', borderRadius: 4, marginBottom: 16 }}>
                    <img src="/law/mn02/img/mn02_07_img1.jpg" alt="형사소송" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                  </div>
                  {[
                    '01 최의선 선임 및 선임계(선임계적)',
                    '02 체포·구속 영장 발부',
                    '03 구속영장 심의여부 결정',
                    '04 사건담당자 1차 수사',
                    '05 사건담당자의 수사/관련서류 열람',
                    '06 기소/무혐의 결정',
                  ].map((t, i) => <p key={i} style={{ fontSize: 13, color: '#444', marginBottom: 6, lineHeight: 1.6 }}>{t}</p>)}
                </div>
                <div style={{ flex: 1 }}>
                  {[
                    '07 송치결정에 대한 보호소 도움',
                    '08 불기소처분에 대한 보호소 도움',
                    '09 공판',
                    '10 피고인심문',
                    '11 최후변론',
                    '12 선고',
                  ].map((t, i) => <p key={i} style={{ fontSize: 13, color: '#444', marginBottom: 6, lineHeight: 1.6 }}>{t}</p>)}
                </div>
              </div>
            </div>

            {/* 대응 진행 */}
            <div style={{ flex: 1, border: '1px solid #e2e2e2', borderRadius: 4, padding: '30px', background: '#fff' }}>
              <div style={{ background: '#253d5f', color: '#fff', textAlign: 'center', padding: '10px', borderRadius: 2, marginBottom: 20, fontSize: 16, fontWeight: 600 }}>
                대응 진행
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ flex: 1 }}>
                  {[
                    '01 상담방문·연락 사시 연락',
                    '02 증거조사 설명',
                    '03 사진촬영·목격자/전문 법원 방 준비',
                    '04 조사서 동행 및 입회',
                    '05 구속수사·관찰 조금 도 보고',
                    '06 검찰조사시 동행 및 입회',
                  ].map((t, i) => <p key={i} style={{ fontSize: 13, color: '#444', marginBottom: 6, lineHeight: 1.6 }}>{t}</p>)}
                </div>
                <div style={{ flex: 1 }}>
                  {[
                    '07 당당업무 연달',
                    '08 불구속사',
                    '09 사건인',
                    '10 보석신청',
                    '11 영장청구에 대한 구금',
                    '12 양형요인에 대한 주장',
                  ].map((t, i) => <p key={i} style={{ fontSize: 13, color: '#444', marginBottom: 6, lineHeight: 1.6 }}>{t}</p>)}
                </div>
              </div>
            </div>
          </div>

          {/* 예상 결과 */}
          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '30px', background: '#fff', marginBottom: 40 }}>
            <div style={{ background: '#253d5f', color: '#fff', textAlign: 'center', padding: '10px', borderRadius: 2, marginBottom: 20, fontSize: 16, fontWeight: 600, maxWidth: 200, margin: '0 auto 20px' }}>
              예상 결과
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[
                '01 불기소 결정', '02 기소유예조치', '03 벌금기 결정', '04 기소 유예', '05 석방', '06 선고유예',
                '07 집행유예 결정', '08 산업연행보호관기기록',
              ].map((t, i) => (
                <div key={i} style={{ background: '#f4f3f2', padding: '8px 16px', borderRadius: 2, fontSize: 14, color: '#444' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 2: 보호 프로그램 과정 ── */}
        <div style={{ background: '#f4f3f2', padding: '80px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            {conTit('보호 프로그램 과정')}
            {titLine}

            <div style={{ display: 'flex', justifyContent: 'center', gap: 0, alignItems: 'center' }}>
              {[
                { label: '변호사 전체회의', color: '#253d5f', sub: '성공사례와 판례를
기반으로 전체회의를 통해
최적의 형사 변호사 배정' },
                { label: '형사 TF팀 구성', color: '#bf8553', sub: '해당 사건에 특화된 팀을
구성 사건진행 총괄' },
                { label: 'TF팀 전략회의', color: '#253d5f', sub: '누적된 성공사례를
바탕으로 사건해결을 위한
전략수립' },
                { label: '수사기관과
커뮤니케이션', color: '#bf8553', sub: '담당변호사 외
전체변호사들간 사건공유
해당기관과 긴밀한 소통' },
              ].map(({ label, color, sub }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', maxWidth: 220 }}>
                    <div style={{ width: 180, height: 180, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}>
                      <p style={{ color: '#fff', fontSize: 17, fontWeight: 700, whiteSpace: 'pre-line', textAlign: 'center', padding: '0 16px', lineHeight: 1.5 }}>{label}</p>
                    </div>
                    <p style={{ fontSize: 13, color: '#555', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{sub}</p>
                  </div>
                  {i < 3 && (
                    <div style={{ width: 40, textAlign: 'center', color: '#aaa', fontSize: 20, marginBottom: 80 }}>●</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
