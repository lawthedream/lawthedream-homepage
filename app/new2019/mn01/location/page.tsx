import type { Metadata } from 'next'
import Script from 'next/script'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '오시는 길 | 더드림법률사무소',
  description: '더드림법률사무소 위치 안내 — 서울시 서초구 사임당로 87, 1층 3층. 전화: 02-6959-5053',
}

export default function LocationPage() {
  return (
    <>
      <SubVisual title="오시는 길" variant="numbered" id={1} />

      <section
        style={{ padding: '60px 0' }}
        className="cntbox wd1300"
        aria-label="찾아오시는 길"
      >
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          {/* 지도 */}
          <div style={{ flex: '1 1 500px' }}>
            <div
              id="daumRoughmapContainer_location"
              className="root_daum_roughmap root_daum_roughmap_landing"
            />
          </div>

          {/* 주소 및 연락처 — 텍스트를 HTML로 */}
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '30px', color: '#333' }}>
              더드림 법률사무소
            </h3>
            <address style={{ fontStyle: 'normal', lineHeight: '2' }}>
              <dl>
                <dt style={{ fontWeight: 600, color: '#555' }}>주소</dt>
                <dd style={{ color: '#333', marginBottom: '16px' }}>
                  서울시 서초구 사임당로 87, 1층 3층
                </dd>
                <dt style={{ fontWeight: 600, color: '#555' }}>전화</dt>
                <dd style={{ marginBottom: '8px' }}>
                  <a
                    href="tel:02-6959-5053"
                    style={{ color: '#278bb3', fontWeight: 700, fontSize: '18px' }}
                  >
                    02-6959-5053
                  </a>
                </dd>
                <dt style={{ fontWeight: 600, color: '#555' }}>팩스</dt>
                <dd style={{ color: '#333', marginBottom: '16px' }}>02-6959-5052</dd>
                <dt style={{ fontWeight: 600, color: '#555' }}>사업자등록번호</dt>
                <dd style={{ color: '#333' }}>435-07-01602</dd>
              </dl>
            </address>
          </div>
        </div>
      </section>

      {/* 카카오 지도 스크립트 */}
      <Script
        src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          new daum.roughmap.Lander({
            timestamp: '1628736435504',
            key: '26xxv',
            mapWidth: '560',
            mapHeight: '445',
          }).render()
        }}
      />
    </>
  )
}
