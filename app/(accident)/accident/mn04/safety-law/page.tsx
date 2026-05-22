import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '산업안전 안전보건법위반 | 더드림중대재해센터',
  description: '산업안전보건법 위반 형사 대응.',
  keywords: '산업안전보건법,위반,형사',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn04/safety-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산업안전 안전보건법위반" site="accident" />
      <AccidentNavTabs current="/accident/mn04/safety-law" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">산업안전보건법 위반</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>안전조치·보건조치 미이행으로 근로자가 사망 시 7년 이하 징역</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 산업안전 전문 노무사·변호사가 사건을 맡습니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
