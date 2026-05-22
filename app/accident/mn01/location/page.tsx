import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '오시는 길 | 더드림중대재해센터',
  description: '더드림 중대재해센터 오시는 길. 서울시 서초구 사임당로 87.',
  keywords: '중대재해센터,위치,오시는길',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn01/location' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="오시는 길" site="accident" />
      <AccidentNavTabs current="/accident/mn01/location" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">오시는 길</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>주소: 서울시 서초구 사임당로 87, 1층·3층</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전화: 02-6959-5053</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
