import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '방문상담 | 더드림교통형사센터',
  description: '더드림 교통형사센터 방문 상담 안내. 서울 서초구 방문 무료 상담.',
  keywords: '방문상담,서초구,형사상담',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn08/press' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="방문상담" site="law" />
      <LawNavTabs current="/law/mn08/press" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">방문 상담 안내</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>주소: 서울시 서초구 사임당로 87, 1층·3층</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전화: 02-6959-5053</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>지하철: 2호선 방배역 1번 출구 도보 5분</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사전 예약 시 대기 없이 바로 상담 가능합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
