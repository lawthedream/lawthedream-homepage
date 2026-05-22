import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '보험보상 사례 | 더드림직업병연구원',
  description: '더드림 보험보상 성공사례.',
  keywords: '보험보상,성공사례',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn03/insurance' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="보험보상 사례" site="work" />
      <WorkNavTabs current="/work/mn03/insurance" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">보험보상 성공사례</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>산재보험 요양급여·휴업급여·장해급여 최대화 성공사례</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>민사 손해배상 소송 승소 사례</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
