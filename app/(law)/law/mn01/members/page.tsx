import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '구성원소개 | 더드림교통형사센터',
  description: '더드림 교통형사센터 구성원. 경력 10년 이상의 변호사·노무사로 구성된 전문팀.',
  keywords: '구성원,변호사,노무사,교통형사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/members' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="구성원소개" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn01/members" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <div style={{ width: '100%', marginBottom: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/mn01/mn01_02_img.jpg" alt="더드림 교통형사센터 구성원" style={{ width: '100%', height: 'auto' }} />
        </div>
        <section>
          <h3 className="con_tit">구성원 소개</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림 교통형사센터는 형사 전문 변호사, 공인노무사, 손해사정사 등 각 분야 전문가로 구성되어 있습니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
