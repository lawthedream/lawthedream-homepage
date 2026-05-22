import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '온라인상담 | 더드림중대재해센터',
  description: '더드림 중대재해센터 무료 상담.',
  keywords: '온라인상담,중대재해,무료상담',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn05/consult' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="온라인상담" site="accident" />
      <AccidentNavTabs current="/accident/mn05/consult" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">온라인 상담</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>아래 상담 폼을 작성하시면 전문가가 빠르게 답변드립니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전화: 02-6959-5053</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
