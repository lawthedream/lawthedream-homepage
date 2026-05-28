import Mn01NavTabs from '@/components/Mn01NavTabs'
import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import KakaoMapSection from '@/components/KakaoMapSection'

export const metadata: Metadata = {
  title: '오시는 길 | 더드림교통형사센터',
  description: '더드림 교통형사센터 오시는 길. 서울시 서초구 사임당로 87, 1·3층.',
  keywords: '교통형사센터,위치,오시는길,서초구',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/location' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="오시는 길" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <Mn01NavTabs />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section style={{ marginBottom: 40 }}>
          <KakaoMapSection />
        </section>
        <section>
          <h3 className="con_tit">오시는 길 안내</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>주소: 서울시 서초구 사임당로 87, 1층·3층</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전화: 02-6959-5053</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>지하철: 2호선·3호선 교대역 하차 → 도보 10분 또는 버스 이용</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>버스: 144, 541, 740, N61, 742, 1006번 → 서초1동 주민센터 또는 서울교대정문 하차</p>
        </section>
      </div>
    </>
  )
}
