import type { Metadata } from 'next'
import Image from 'next/image'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '구성원 | 더드림법률사무소',
  description:
    '더드림법률사무소 구성원 — 산재 16년 경력 변호사, 공인노무사, 손해사정사 등 전문가 그룹 소개',
}

const members = [
  { src: '/intro/img/man01.jpg', name: '박성훈' },
  { src: '/intro/img/man02.jpg', name: '정영재' },
  { src: '/intro/img/man18.jpg', name: '유명지' },
  { src: '/intro/img/man25.jpg', name: '목진성' },
  { src: '/intro/img/man26.jpg', name: '양희찬' },
  { src: '/intro/img/man38.jpg', name: '김철기' },
  { src: '/intro/img/man28.jpg', name: '김선우' },
  { src: '/intro/img/man29.jpg', name: '안민지' },
  { src: '/intro/img/man30.jpg', name: '임동윤' },
  { src: '/intro/img/man10.jpg', name: '마정환' },
  { src: '/intro/img/man11.jpg', name: '이선민' },
  { src: '/intro/img/man12.jpg', name: '이수정' },
  { src: '/intro/img/man13.jpg', name: '정승화' },
  { src: '/intro/img/man15.jpg', name: '김다운' },
  { src: '/intro/img/man17.jpg', name: '전찬일' },
  { src: '/intro/img/man24.jpg', name: '권혜인' },
  { src: '/intro/img/man31.jpg', name: '박현성' },
  { src: '/intro/img/man32.jpg', name: '김지민' },
]

export default function MembersPage() {
  return (
    <>
      <SubVisual title="구성원" variant="numbered" id={1} />

      <section aria-label="구성원 소개">
        {/* 헤더 텍스트 — 이미지 텍스트를 HTML로 변환 */}
        <h2
          style={{
            color: '#333',
            fontSize: '35px',
            fontWeight: 600,
            padding: '110px 0 70px',
            backgroundColor: '#fff',
            textAlign: 'center',
          }}
        >
          구성원
        </h2>

        <div
          id="main_man"
          style={{ width: '1290px', margin: '50px auto', overflow: 'hidden', paddingBottom: '50px' }}
        >
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              listStyle: 'none',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            {members.map((m) => (
              <li key={m.name} style={{ float: 'left' }}>
                <img
                  src={m.src}
                  alt={m.name}
                  style={{ display: 'block', transition: 'filter 1s' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLImageElement).style.filter = 'brightness(130%)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLImageElement).style.filter = 'none')
                  }
                />
                {/* 이름 텍스트를 이미지 alt 외에도 HTML로 노출 — SEO를 위해 */}
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '8px',
                    fontSize: '14px',
                    color: '#555',
                  }}
                >
                  {m.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
