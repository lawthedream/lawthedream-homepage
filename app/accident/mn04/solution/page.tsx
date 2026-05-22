import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 솔루션 | 더드림중대재해센터',
  description: '산업안전 사건 더드림 솔루션.',
  keywords: '산업안전,솔루션,형사대응',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn04/solution' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림 솔루션" site="accident" />
      <AccidentNavTabs current="/accident/mn04/solution" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 솔루션</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사고 원인 분석 → 형사·민사 전략 수립 → 수사·재판 대응 → 손해배상 청구</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
