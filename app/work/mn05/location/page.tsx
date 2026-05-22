import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '오시는 길 | 더드림직업병연구원',
  description: '더드림 직업병연구원 전국 사무소 위치 안내.',
  keywords: '오시는길,직업병연구원,지사',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn05/location' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="오시는 길" site="work" />
      <WorkNavTabs current="/work/mn05/location" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">전국 사무소 안내</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>서울본사: 서울시 서초구 사임당로 87, 1층·3층 / 02-6959-5053</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>문경지사: 경상북도 문경시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>울산지사: 울산광역시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>창원지사: 경상남도 창원시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>삼척지사: 강원도 삼척시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>강릉지사: 강원도 강릉시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>인천지사: 인천광역시</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>수원지사: 경기도 수원시</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
