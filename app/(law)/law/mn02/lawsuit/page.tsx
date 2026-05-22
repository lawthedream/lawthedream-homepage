import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 솔루션 | 더드림교통형사센터',
  description: '더드림 교통형사센터 솔루션. 사건 분석부터 최종 판결까지 원스톱 서비스.',
  keywords: '교통형사,솔루션,원스톱,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/lawsuit' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림 솔루션" site="law" />
      <LawNavTabs current="/law/mn02/lawsuit" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 솔루션</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 1. 무료 상담 → 사건 분석 및 대응 방향 제시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 2. 수임 계약 → 담당 변호사 지정</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 3. 자료 수집 → 증거 확보 및 의견서 작성</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 4. 최종 결과 → 무혐의·불기소·집행유예·무죄 목표</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
