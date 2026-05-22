import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '12대 중과실사고 | 더드림중대재해센터',
  description: '12대 중과실 교통사고 전문 대응.',
  keywords: '12대중과실,중대재해,교통사고',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/accident-12' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="12대 중과실사고" site="accident" />
      <AccidentNavTabs current="/accident/mn02/accident-12" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">12대 중과실사고 전문 대응</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>신호위반, 중앙선침범, 음주운전 등 12대 중과실 사고는 형사처벌이 불가피합니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림 중대재해센터는 형사·민사 양 측면에서 최적의 결과를 이끌어 냅니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
