import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '합의 | 더드림교통형사센터',
  description: '교통사고 형사합의 전문. 최적의 합의금 책정 및 형사처벌 최소화.',
  keywords: '교통사고합의,형사합의,합의금,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="합의" site="law" />
      <LawNavTabs current="/law/mn02/solution" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">합의의 중요성</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>교통사고 형사 처벌에서 피해자와의 합의는 형량에 결정적 영향을 미칩니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 합의 금액 협상, 합의서 작성, 공탁 절차까지 전 과정을 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
