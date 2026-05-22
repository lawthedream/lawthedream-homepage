import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '오시는 길 | 더드림직업병연구원',
  description: '더드림 직업병연구원 오시는 길.',
  keywords: '직업병연구원,위치',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn01/location' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="오시는 길" site="work" />
      <WorkNavTabs current="/work/mn01/location" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">오시는 길</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>서울본사: 서울시 서초구 사임당로 87, 1층·3층</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>문경지사, 울산지사, 창원지사, 삼척지사, 강릉지사, 인천지사, 수원지사 운영</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
