import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '방문상담 | 더드림교통형사센터',
  description: '더드림 교통형사센터 방문 상담 안내. 서울 서초구 방문 무료 상담.',
  keywords: '방문상담,서초구,형사상담,교통사고상담',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn08/info' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="방문상담" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">방문 상담 안내</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>주소: 서울시 서초구 사임당로 87, 1층·3층</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전화: 02-6959-5053</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>지하철: 2호선·3호선 교대역 하차 → 도보 10분 또는 버스 이용</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>버스: 144, 541, 740, N61, 742, 1006번 → 서초1동 주민센터 또는 서울교대정문 하차</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사전 예약 시 대기 없이 바로 상담 가능합니다.</p>
        </section>
      </div>
    </>
  )
}
