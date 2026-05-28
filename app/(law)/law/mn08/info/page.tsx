import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import ConsultForm from '@/components/ConsultForm'

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

        {/* 방문 안내 + 지도 */}
        <section style={{ marginBottom: 60 }}>
          <h3 className="con_tit">방문 상담 안내</h3>
          <table className="tbl_style01" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 30 }}>
            <tbody>
              <tr>
                <th style={{ background: '#375b73', color: '#fff', padding: '14px 20px', width: 140, fontWeight: 600, fontSize: 15 }}>주소</th>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e5e5e5', fontSize: 15 }}>서울시 서초구 사임당로 87, 1층·3층</td>
              </tr>
              <tr>
                <th style={{ background: '#375b73', color: '#fff', padding: '14px 20px', fontWeight: 600, fontSize: 15 }}>전화</th>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e5e5e5', fontSize: 15 }}>
                  <a href="tel:02-6959-5053" style={{ color: '#375b73', fontWeight: 700 }}>02-6959-5053</a>
                </td>
              </tr>
              <tr>
                <th style={{ background: '#375b73', color: '#fff', padding: '14px 20px', fontWeight: 600, fontSize: 15 }}>지하철</th>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e5e5e5', fontSize: 15 }}>2호선·3호선 <strong>교대역</strong> 하차 → 도보 10분 또는 버스 이용</td>
              </tr>
              <tr>
                <th style={{ background: '#375b73', color: '#fff', padding: '14px 20px', fontWeight: 600, fontSize: 15 }}>버스</th>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e5e5e5', fontSize: 15 }}>144, 541, 740, N61, 742, 1006번 → 서초1동 주민센터 또는 서울교대정문 하차</td>
              </tr>
              <tr>
                <th style={{ background: '#375b73', color: '#fff', padding: '14px 20px', fontWeight: 600, fontSize: 15 }}>상담시간</th>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e5e5e5', fontSize: 15 }}>평일 09:00 – 18:00 (사전 예약 시 대기 없이 바로 상담 가능)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 상담 신청 폼 */}
        <section id="map_counsel" style={{ marginBottom: 60 }}>
          <h3 className="con_tit">방문 상담 예약</h3>
          <div className="counsel_wrap">
            <ConsultForm gubun="방문상담예약" />
          </div>
        </section>

      </div>
    </>
  )
}
