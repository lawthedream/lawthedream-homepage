import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '형사사건절차 | 더드림교통형사센터',
  description: '교통·형사사건 절차 안내. 경찰 조사 → 검찰 송치 → 재판까지 전 과정 지원.',
  keywords: '형사사건절차,경찰조사,검찰,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/procedure' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="형사사건절차" site="law" />
      <LawNavTabs current="/law/mn02/procedure" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">형사사건 처리 절차</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>1단계: 경찰 조사 (피의자 조사, 현장 감식)</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>2단계: 검찰 송치 및 기소 여부 결정</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>3단계: 형사 재판 (1심 → 2심 → 대법원)</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 각 단계마다 최적의 변호 전략을 제공합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
