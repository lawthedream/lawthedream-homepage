import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '구성원소개 | 더드림직업병연구원',
  description: '더드림 직업병연구원 전문 구성원.',
  keywords: '구성원,직업병,산재전문',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn01/members' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="구성원소개" site="work" />
      <WorkNavTabs current="/work/mn01/members" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">구성원 소개</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>직업병 전문 공인노무사, 산업위생사, 변호사로 구성된 전문팀입니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
