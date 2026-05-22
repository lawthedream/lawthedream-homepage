import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '재산범죄 | 더드림교통형사센터',
  description: '절도, 강도, 사기, 횡령 등 재산범죄 전문 변호사.',
  keywords: '재산범죄,절도,사기,횡령,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/property' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="재산범죄" site="law" />
      <LawNavTabs current="/law/mn05/property" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">재산범죄 유형</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>절도죄: 6년 이하 징역 또는 1000만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>강도죄: 3년 이상 유기징역</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사기죄: 10년 이하 징역 또는 2000만 원 이하 벌금</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
