import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '인사말 | 더드림교통형사센터',
  description: '더드림 교통형사센터 인사말. 변호사·노무사로 구성된 전문팀이 교통사고·형사사건을 해결합니다.',
  keywords: '교통형사센터,변호사,노무사,인사말',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/greeting' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="인사말" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn01/greeting" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <div style={{ width: '100%', marginBottom: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/mn01/img/mn01_01_img7.jpg" alt="더드림 교통형사센터 인사말" style={{ width: '100%', height: 'auto' }} />
        </div>
        <section>
          <h3 className="con_tit">더드림 교통형사센터</h3>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림법률사무소 교통형사센터는 12대 중과실사고, 음주/뺑소니, 민식이법, 성범죄, 산업안전보건법 위반 등 형사사건 전 분야를 전문으로 다룹니다.</p>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>변호사·노무사·손해사정사가 팀을 이루어 사건 초기 단계부터 최적의 결과를 이끌어 냅니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
