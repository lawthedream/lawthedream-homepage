import type { Metadata } from 'next'
import Link from 'next/link'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'

export const metadata: Metadata = {
  title: '업무분야 | 더드림법률사무소',
  description: '더드림법률사무소 업무분야 — 산재·직업병·과로사·소음성난청·교통사고·보험분쟁·중대재해 등 분야별 전문 법률서비스를 제공합니다.',
  keywords: '산재 업무분야, 직업병, 과로사, 소음성난청, 교통사고, 보험분쟁, 중대재해, 더드림',
  alternates: { canonical: 'https://www.lawthedream.com/areas' },
}

const workAreas = [
  { num: '01', img: '/intro/img/work01.png', title: '직업성 암·폐질환', href: '/new2019/mn02/occupational-cancer' },
  { num: '02', img: '/intro/img/work02.png', title: '과로사', href: '/new2019/mn02/overwork-death' },
  { num: '03', img: '/intro/img/work03.png', title: '소음성 난청', href: '/new2019/mn02/noise-hearing-loss' },
  { num: '04', img: '/intro/img/work04.png', title: '정신질병·자살', href: '/new2019/mn02/mental-disease' },
  { num: '05', img: '/intro/img/work05.png', title: '근골격계 질환', href: '/new2019/mn02/musculoskeletal' },
  { num: '06', img: '/intro/img/work06.png', title: '출퇴근 중 재해', href: '/new2019/mn02/commute-accident' },
  { num: '07', img: '/intro/img/work07.png', title: '장해등급', href: '/new2019/mn02/disability-grade' },
  { num: '08', img: '/intro/img/work08.png', title: '평균임금', href: '/new2019/mn02/average-wage' },
  { num: '09', img: '/intro/img/work09.png', title: '교통사고', href: '/new2019/mn02/auto-insurance' },
  { num: '10', img: '/intro/img/work10.png', title: '근재·단체보험', href: '/new2019/mn02/group-insurance' },
  { num: '11', img: '/intro/img/work11.png', title: '손해·질병보험', href: '/new2019/mn02/damage-insurance' },
  { num: '12', img: '/intro/img/work12.png', title: '어선원·공무원', href: '/new2019/mn02/fisherman-official' },
]

export default function AreasPage() {
  return (
    <>
      <IntroSubVisual title="업무분야" subtitle="산재·보험·교통사고·중대재해 전문" />
      <IntroNavTabs active="areas" />

      <main id="contents" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 50 }}>
          더드림 업무분야
        </h2>

        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, listStyle: 'none', padding: 0 }}
          aria-label="업무분야 목록">
          {workAreas.map((a) => (
            <li key={a.num}>
              <Link href={a.href} style={{ display: 'block', textDecoration: 'none', textAlign: 'center', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', transition: 'box-shadow 0.2s' }}>
                <div
                  style={{ width: '100%', aspectRatio: '1/1', backgroundImage: `url(${a.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  role="img"
                  aria-label={`${a.title} 아이콘`}
                />
                <p style={{ padding: '14px 8px', fontSize: 16, fontWeight: 600, color: '#333', backgroundColor: '#fff' }}>{a.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        {/* 센터별 바로가기 배너 */}
        <section style={{ marginTop: 60 }} aria-label="더드림 센터 바로가기">
          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#333', marginBottom: 20, textAlign: 'center' }}>더드림 센터별 바로가기</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { href: '/new2019/', img: '/intro/img/intro_box01.jpg', label: '산재·보험보상센터' },
              { href: '/law/', img: '/intro/img/intro_box02.jpg', label: '교통형사센터' },
              { href: '/accident/', img: '/intro/img/intro_box03.jpg', label: '중대재해센터' },
            ].map((b) => (
              <Link key={b.href} href={b.href} aria-label={b.label}
                style={{ display: 'block', borderRadius: 8, overflow: 'hidden', textDecoration: 'none' }}>
                <div style={{ width: '100%', aspectRatio: '3/1', backgroundImage: `url(${b.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
                  role="img" aria-label={b.label}>
                  <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontWeight: 600, fontSize: 15 }}>
                    {b.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        @media(max-width:768px){ ul[aria-label="업무분야 목록"]{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(max-width:480px){ ul[aria-label="업무분야 목록"]{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </>
  )
}
