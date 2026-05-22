import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '합의 | 더드림중대재해센터',
  description: '교통사고 합의 전문. 최적의 합의 조건 협상.',
  keywords: '교통사고합의,합의금',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/solution' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="합의" site="accident" />
      <AccidentNavTabs current="/accident/mn02/solution" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">합의 절차</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>피해자와의 적정 합의금 협상으로 형사 처벌을 최소화합니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 합의서 작성, 공탁 절차까지 전 과정을 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
