import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 솔루션 | 더드림중대재해센터',
  description: '중대재해 발생 시 더드림 대응 솔루션.',
  keywords: '중대재해,솔루션,형사대응',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/solution2' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림 솔루션" site="accident" />
      <AccidentNavTabs current="/accident/mn02/solution2" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 솔루션</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 1. 사고 발생 즉시 현장 보전 및 증거 확보</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 2. 경찰·고용노동부 조사 동행</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 3. 형사 절차 전략 수립 및 의견서 제출</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>STEP 4. 재판 대응</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
