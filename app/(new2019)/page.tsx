import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import MediaSection from '@/components/MediaSection'

export const metadata: Metadata = {
  title: '더드림법률사무소 | 산재·보험·교통사고 전문',
  description:
    '더드림법률사무소 — 산재·보험분쟁·교통형사·중대재해 분야별 전문가(변호사·노무사·손해사정사)가 ONE-STOP 법률서비스를 제공합니다. 02-6959-5053',
  keywords: '더드림법률사무소, 산재, 보험분쟁, 교통사고, 중대재해, 변호사, 노무사, 손해사정사',
  alternates: { canonical: 'https://www.lawthedream.com' },
}

const centers = [
  { href: '/new2019/', img: '/intro/img/intro_ban01.png', alt: '산재·보험분쟁센터', title: '산재·보험분쟁센터' },
  { href: '/law/', img: '/intro/img/intro_ban02.png', alt: '교통형사센터', title: '교통형사센터' },
  { href: 'http://labordream.com', img: '/intro/img/intro_ban03.png', alt: '직업병연구원', title: '직업병연구원', external: true },
  { href: '/center/', img: '/intro/img/intro_ban06.png', alt: '보험분쟁센터', title: '보험분쟁센터' },
  { href: '/accident/', img: '/intro/img/intro_ban05.png', alt: '중대재해센터', title: '중대재해센터' },
  { href: '#', img: '/intro/img/intro_ban04.png', alt: '성범죄센터(준비중)', title: '성범죄센터' },
]

export default function IntroPage() {
  return (
    <>
      {/* ===== 섹션 1: 메인 비주얼 슬라이더 ===== */}
      <section
        id="main_visual"
        aria-label="메인 비주얼"
        style={{ position: 'relative', width: '100%', height: '898px', overflow: 'hidden', backgroundColor: '#1a2a4a' }}
      >
        <div className="imgbox bd" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { src: '/intro/img/intro_img2.jpg', alt: '더드림 법률사무소 메인 이미지 1' },
              { src: '/intro/img/intro_img3.jpg', alt: '더드림 법률사무소 메인 이미지 2' },
              { src: '/intro/img/intro_img1.jpg', alt: '더드림 법률사무소 메인 이미지 3' },
            ].map((img, i) => (
              <li
                key={i}
                style={{
                  width: '100%',
                  height: '898px',
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: i === 0 ? 'block' : 'none',
                }}
                role="img"
                aria-label={img.alt}
              />
            ))}
          </ul>
        </div>
        {/* 텍스트 오버레이 — HTML로 분리 (SEO) */}
        <div style={{ position: 'absolute', left: '50%', top: '49%', zIndex: 3, transform: 'translate(-50%,-50%)', textAlign: 'center', width: '90%' }}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(26px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.3, textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
            더드림 법률사무소
          </h1>
          <p style={{ color: '#fff', fontSize: 'clamp(15px, 2vw, 26px)', marginTop: 16, textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            분야별 전문가 — 변호사 · 노무사 · 손해사정사
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 4, textAlign: 'center' }}>
          <a href="#section-centers" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, textDecoration: 'none' }}>▼ SCROLL</a>
        </div>
      </section>

      {/* ===== 섹션 2: 더드림 소개 — 6개 센터 배너 ===== */}
      <section
        id="section-centers"
        aria-label="더드림 소개"
        style={{ position: 'relative', padding: '80px 0', overflow: 'hidden', backgroundColor: '#111' }}
      >
        <video autoPlay loop muted playsInline aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.35 }}>
          <source src="/intro/movie_001.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 700, color: '#fff', marginBottom: 50, textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}>
            더드림 소개
          </h2>
          <div className="centers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {centers.map((c) => (
              <Link key={c.title} href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                aria-label={c.alt}
                style={{ display: 'block', borderRadius: 8, overflow: 'hidden', textDecoration: 'none' }}
              >
                <div style={{ width: '100%', paddingBottom: '56.25%', backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
                  role="img" aria-label={c.alt}>
                  <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 16, fontWeight: 600 }}>
                    {c.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 섹션 3: 인사말 영상 섹션 ===== */}
      <section aria-label="더드림 인사말"
        style={{ position: 'relative', minHeight: 500, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0d1b2a' }}>
        <video autoPlay loop muted playsInline aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.45 }}>
          <source src="/intro/movie_004.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 42px)', color: '#fff', fontWeight: 700, marginBottom: 20, textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            더드림 법률사무소에 오신 것을 환영합니다
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', color: 'rgba(255,255,255,0.9)', marginBottom: 36, lineHeight: 1.8, textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            변호사 · 노무사 · 손해사정사가 보상신청부터 소송까지<br />
            ONE-STOP 법률서비스를 제공합니다
          </p>
          <Link href="/new2019/"
            style={{ display: 'inline-block', backgroundColor: '#3cb6c1', color: '#fff', padding: '14px 48px', borderRadius: 50, fontSize: 18, fontWeight: 700, textDecoration: 'none' }}>
            산재·보험 전문 바로가기
          </Link>
        </div>
      </section>

      {/* ===== 미디어 속 더드림 ===== */}
      <MediaSection />

      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: '#2a3a5c', padding: '50px 20px', textAlign: 'center' }} aria-label="무료 상담 신청">
        <h2 style={{ color: '#fff', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 700, marginBottom: 14 }}>
          24시간 무료 법률상담
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, marginBottom: 28 }}>분야별 전문가가 직접 상담해 드립니다</p>
        <a href="tel:02-6959-5053"
          style={{ display: 'inline-block', backgroundColor: '#fff558', color: '#381e1f', padding: '14px 48px', borderRadius: 50, fontSize: 22, fontWeight: 700, textDecoration: 'none' }}>
          ☎ 02-6959-5053
        </a>
      </section>

      {/* 슬라이더 자동 전환 */}
      <Script id="intro-slider" strategy="afterInteractive">{`
        (function() {
          var slides = document.querySelectorAll('#main_visual .imgbox ul li');
          var cur = 0;
          if (!slides || slides.length < 2) return;
          setInterval(function() {
            slides[cur].style.display = 'none';
            cur = (cur + 1) % slides.length;
            slides[cur].style.display = 'block';
          }, 5000);
        })();
      `}</Script>

      <style>{`
        @media (max-width: 768px) {
          #main_visual { height: 65vw !important; min-height: 280px !important; }
          #main_visual .imgbox ul li { height: 65vw !important; min-height: 280px !important; }
          .centers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .centers-grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
