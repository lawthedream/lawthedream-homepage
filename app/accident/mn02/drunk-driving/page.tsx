import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '음주/뺑소니 | 더드림중대재해센터',
  description: '음주운전·뺑소니 전문 형사 대응.',
  keywords: '음주운전,뺑소니,형사대응',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/drunk-driving' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="음주/뺑소니" site="accident" />
      <AccidentNavTabs current="/accident/mn02/drunk-driving" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">음주운전·뺑소니</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>혈중알코올 0.03% 이상 → 면허 정지·취소, 형사처벌</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>즉각적인 변호사 선임으로 처벌을 최소화하세요.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
