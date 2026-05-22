import type { Metadata } from 'next'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'

export const metadata: Metadata = {
  title: '더드림 구성원 | 더드림법률사무소',
  description: '더드림법률사무소 구성원 소개. 변호사·노무사·손해사정사·행정사 등 분야별 전문가로 구성된 최강 팀을 만나보세요.',
  keywords: '더드림 구성원, 더드림 변호사, 더드림 노무사, 더드림 손해사정사, 더드림 법률사무소 팀',
  alternates: { canonical: 'https://www.lawthedream.com/members' },
}

const lawyers = [
  { img: '/intro/img/man01.jpg', name: '박성훈', role: '대표 변호사' },
  { img: '/intro/img/man02.jpg', name: '정영재', role: '변호사' },
  { img: '/intro/img/man18.jpg', name: '유명지', role: '변호사' },
  { img: '/intro/img/man25.jpg', name: '목진성', role: '변호사' },
  { img: '/intro/img/man26.jpg', name: '양희찬', role: '변호사' },
  { img: '/intro/img/man38.jpg', name: '김철기', role: '노무사' },
  { img: '/intro/img/man28.jpg', name: '김선우', role: '노무사' },
  { img: '/intro/img/man29.jpg', name: '안민지', role: '노무사' },
  { img: '/intro/img/man30.jpg', name: '임동윤', role: '손해사정사' },
  { img: '/intro/img/man10.jpg', name: '마정환', role: '손해사정사' },
  { img: '/intro/img/man35.jpg', name: '뽀띠리마웅', role: '전문위원' },
  { img: '/intro/img/man11.jpg', name: '이선민', role: '직원' },
  { img: '/intro/img/man12.jpg', name: '이수정', role: '직원' },
  { img: '/intro/img/man13.jpg', name: '정승화', role: '직원' },
  { img: '/intro/img/man15.jpg', name: '김다운', role: '직원' },
  { img: '/intro/img/man17.jpg', name: '전찬일', role: '직원' },
  { img: '/intro/img/man24.jpg', name: '권혜인', role: '직원' },
  { img: '/intro/img/man31.jpg', name: '박현성', role: '직원' },
]

export default function MembersPage() {
  return (
    <>
      <IntroSubVisual title="더드림 구성원" subtitle="분야별 전문가로 구성된 최강 팀" />
      <IntroNavTabs active="members" />

      <main id="contents" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 50 }}>
          더드림 구성원
        </h2>

        {/* 구성원 그리드 */}
        <ul className="member-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, listStyle: 'none', padding: 0 }}
          aria-label="구성원 목록">
          {lawyers.map((m) => (
            <li key={m.name} style={{ textAlign: 'center' }}>
              {/* 사진 — CSS background-image, 이름·직함 HTML */}
              <div
                style={{ width: '100%', aspectRatio: '3/4', backgroundImage: `url(${m.img})`, backgroundSize: 'cover', backgroundPosition: 'top center', borderRadius: 8, marginBottom: 12 }}
                role="img"
                aria-label={`${m.name} ${m.role} 사진`}
              />
              <strong style={{ display: 'block', fontSize: 18, color: '#222', fontWeight: 600 }}>{m.name}</strong>
              <span style={{ fontSize: 14, color: '#3cb6c1', fontWeight: 500 }}>{m.role}</span>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <a href="tel:02-6959-5053" style={{ display: 'inline-block', backgroundColor: '#3cb6c1', color: '#fff', padding: '14px 44px', borderRadius: 50, fontSize: 20, fontWeight: 700, textDecoration: 'none' }}>
            ☎ 02-6959-5053 무료상담
          </a>
        </div>
      </main>

      <style>{`
        @media(max-width:768px){ .member-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(max-width:480px){ .member-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </>
  )
}
