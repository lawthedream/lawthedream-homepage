import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '직업성 암 | 더드림직업병연구원',
  description: '직업성 암 산재 전문. 폐암, 방광암, 혈액암 등 발암물질 노출 인정.',
  keywords: '직업성암,폐암,발암물질,직업병',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/cancer' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="직업성 암" site="work" />
      <WorkNavTabs current="/work/mn02/cancer" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">직업성 암 산재</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>석면, 벤젠, 크롬, 니켈, 라돈 등 발암물질 노출로 발생한 암은 직업병 인정</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>폐암, 방광암, 중피종, 백혈병 등이 대표적인 직업성 암</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 직업성 암 전문 역학조사 전문가와 협력하여 산재 인정을 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
