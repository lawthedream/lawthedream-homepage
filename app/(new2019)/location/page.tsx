import type { Metadata } from 'next'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'

export const metadata: Metadata = {
  title: '오시는 길 | 더드림법률사무소',
  description: '더드림법률사무소 오시는 길. 서울시 서초구 사임당로 87, 1층 3층. 지하철 2호선 방배역 5분 거리. 02-6959-5053',
  keywords: '더드림법률사무소 위치, 서초구 법률사무소, 방배역 법률사무소, 사임당로 87',
  alternates: { canonical: 'https://www.lawthedream.com/location' },
}

export default function LocationPage() {
  return (
    <>
      <IntroSubVisual title="오시는 길" subtitle="서울시 서초구 사임당로 87, 1층 3층" />
      <IntroNavTabs active="location" />

      <main id="contents" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 20px 80px' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 50 }}>
          오시는 길
        </h2>

        {/* 주소 + 지도 */}
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 50 }}>
          {/* 지도 */}
          <div style={{ flex: '1 1 500px', minHeight: 400, backgroundColor: '#eee', borderRadius: 8, overflow: 'hidden' }}>
            <div id="daumRoughmapContainer" className="root_daum_roughmap root_daum_roughmap_landing"
              style={{ width: '100%', height: 400 }} />
          </div>

          {/* 주소·교통 정보 */}
          <address style={{ flex: '1 1 280px', fontStyle: 'normal', lineHeight: 2 }}>
            <dl>
              <dt style={{ fontWeight: 700, color: '#3cb6c1', fontSize: 16 }}>주소</dt>
              <dd style={{ fontSize: 17, color: '#333', marginBottom: 20 }}>서울시 서초구 사임당로 87, 1층 3층</dd>

              <dt style={{ fontWeight: 700, color: '#3cb6c1', fontSize: 16 }}>전화</dt>
              <dd style={{ marginBottom: 20 }}>
                <a href="tel:02-6959-5053" style={{ fontSize: 18, fontWeight: 700, color: '#222', textDecoration: 'none' }}>02-6959-5053</a>
              </dd>

              <dt style={{ fontWeight: 700, color: '#3cb6c1', fontSize: 16 }}>팩스</dt>
              <dd style={{ fontSize: 16, color: '#555', marginBottom: 20 }}>02-6959-5052</dd>

              <dt style={{ fontWeight: 700, color: '#3cb6c1', fontSize: 16 }}>지하철</dt>
              <dd style={{ fontSize: 15, color: '#555', marginBottom: 4 }}>2호선 방배역 5번 출구: 마을버스 서초03·서초21 (서초1동 주민센터 하차)</dd>
              <dd style={{ fontSize: 15, color: '#555', marginBottom: 20 }}>7번 출구: 마을버스 서초03 이용</dd>

              <dt style={{ fontWeight: 700, color: '#3cb6c1', fontSize: 16 }}>버스</dt>
              <dd style={{ fontSize: 15, color: '#555' }}>마을버스: 서초03, 서초21</dd>
            </dl>
          </address>
        </div>

        {/* 찾아오는 길 영상 배너 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ width: 'auto', height: 80, backgroundImage: 'url(/intro/img/banner01.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', flex: '1 1 200px' }}
            role="img" aria-label="2호선 찾아오는 길 영상 안내" />
          <div style={{ width: 'auto', height: 80, backgroundImage: 'url(/intro/img/banner02.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', flex: '1 1 200px' }}
            role="img" aria-label="찾아오는 길 영상 안내" />
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="tel:02-6959-5053" style={{ display: 'inline-block', backgroundColor: '#3cb6c1', color: '#fff', padding: '14px 44px', borderRadius: 50, fontSize: 20, fontWeight: 700, textDecoration: 'none' }}>
            ☎ 02-6959-5053 무료상담
          </a>
        </div>
      </main>

      {/* 카카오 지도 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if(typeof daum !== 'undefined' && daum.roughmap) {
              new daum.roughmap.Lander({ timestamp:'1628736435503', key:'26xxv', mapWidth:'100%', mapHeight:'400' }).render();
            }
          `,
        }}
      />
    </>
  )
}
