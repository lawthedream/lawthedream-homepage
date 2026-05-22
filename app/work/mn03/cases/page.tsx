import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '산재 성공사례 | 더드림직업병연구원',
  description: '더드림 직업병연구원 산재 성공사례.',
  keywords: '성공사례,직업병,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn03/cases' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산재 성공사례" site="work" />
      <WorkNavTabs current="/work/mn03/cases" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">주요 성공사례</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>근골격계 직업병 → 산재 불승인 후 심사청구 → 승인</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>소음성 난청 → 직업병 판정 → 요양·장해보상 수령</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>직업성 암(폐암) → 역학조사 통해 업무관련성 인정 → 산재 승인</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
