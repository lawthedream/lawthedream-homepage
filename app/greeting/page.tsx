import type { Metadata } from 'next'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'

export const metadata: Metadata = {
  title: '더드림 인사말 | 더드림법률사무소',
  description: '더드림법률사무소 대표 인사말. 변호사·노무사·손해사정사로 구성된 전문가 집단이 최선의 법률서비스를 제공하겠습니다. 서울 서초구 02-6959-5053',
  keywords: '더드림법률사무소 인사말, 더드림 소개, 산재 법률사무소, 서초구 법률사무소',
  alternates: { canonical: 'https://www.lawthedream.com/greeting' },
  openGraph: { title: '더드림 인사말 | 더드림법률사무소', description: '변호사·노무사·손해사정사 전문가 집단의 인사말을 확인하세요.', url: 'https://www.lawthedream.com/greeting' },
}

export default function GreetingPage() {
  return (
    <>
      <IntroSubVisual title="더드림 인사말" subtitle="변호사·노무사·손해사정사 ONE-STOP 법률서비스" />
      <IntroNavTabs active="greeting" />

      <main id="contents" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 50, lineHeight: 1.4 }}>
          더드림 법률사무소에 오신 것을 환영합니다.
        </h2>

        {/* 인사말 이미지 — CSS background + HTML 텍스트 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
          <div
            style={{ width: '100%', maxWidth: 800, aspectRatio: '4/3', backgroundImage: 'url(/intro/img/greetings_img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 8 }}
            role="img"
            aria-label="더드림 법률사무소 인사말 이미지"
          />
          <article style={{ maxWidth: 800, lineHeight: 2, fontSize: 17, color: '#444' }}>
            <p>
              더드림법률사무소는 <strong>변호사·노무사·손해사정사</strong>로 구성된 전문가 집단으로,
              산업재해·보험분쟁·교통사고·중대재해 등 다양한 분야에서 의뢰인의 권익을 최우선으로 생각합니다.
            </p>
            <p style={{ marginTop: 20 }}>
              보상신청부터 행정소송·민사소송까지 <strong>ONE-STOP 법률서비스</strong>를 제공하여
              의뢰인이 최대한의 보상을 받을 수 있도록 최선을 다하겠습니다.
            </p>
            <p style={{ marginTop: 20 }}>
              <strong>더드림법률사무소 대표 박성훈</strong> 드림
            </p>
          </article>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 60, padding: '40px 20px', backgroundColor: '#f7f8fc', borderRadius: 12 }}>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 20 }}>궁금하신 사항은 언제든지 문의해 주세요</p>
          <a href="tel:02-6959-5053" style={{ display: 'inline-block', backgroundColor: '#3cb6c1', color: '#fff', padding: '14px 44px', borderRadius: 50, fontSize: 20, fontWeight: 700, textDecoration: 'none' }}>
            ☎ 02-6959-5053 무료상담
          </a>
        </div>
      </main>
    </>
  )
}
