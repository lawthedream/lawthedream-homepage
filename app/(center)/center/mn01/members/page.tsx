import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '구성원소개 | 더드림보험분쟁센터',
  description: '더드림 보험분쟁센터 전문 구성원.',
  keywords: '구성원,손해사정사,보험분쟁',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn01/members' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="구성원소개" site="center" />
      <CenterNavTabs current="/center/mn01/members" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">구성원 소개</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>공인 손해사정사, 노무사, 변호사로 구성된 전문팀이 최상의 결과를 약속합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
