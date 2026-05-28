import type { Metadata } from 'next'
import Link from 'next/link'
import Mn01NavTabs from '@/components/Mn01NavTabs'

export const metadata: Metadata = {
  title: '더드림 구성원 | 더드림 교통형사센터',
  description: '더드림 교통형사센터 전문 구성원 소개. 교통형사 전문변호사, 보험보상 전문위원, 사건조사 전문위원.',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/members' },
}

interface Member {
  img: string
  name: string
  role?: string
}

const lawyers: Member[] = [
  { img: 'man01', name: '박성훈', role: '대표변호사' },
  { img: 'man02', name: '정영재', role: '변호사' },
  { img: 'man04', name: '목진성', role: '변호사' },
  { img: 'man05', name: '양희찬', role: '변호사' },
]

const insuranceExperts: Member[] = [
  { img: 'man40', name: '김철기' },
  { img: 'man30', name: '김선우' },
  { img: 'man31', name: '안민지' },
  { img: 'man32', name: '임동윤' },
]

const investigators: Member[] = [
  { img: 'man08', name: '마정환' },
  { img: 'man09', name: '이선민' },
  { img: 'man10', name: '이수정' },
  { img: 'man14', name: '정승화' },
  { img: 'man16', name: '김다운' },
  { img: 'man21', name: '전찬일' },
  { img: 'man27', name: '권혜인' },
  { img: 'man33', name: '박현성' },
  { img: 'man34', name: '김지민' },
  { img: 'man36', name: '박안나' },
  { img: 'man37', name: '뽀띠리마웅' },
  { img: 'man38', name: '전현정' },
  { img: 'man39', name: '이재용' },
]

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="member-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/law/mn01/img/${member.img}.jpg`}
        alt={member.name}
        loading="lazy"
      />
      <p className="member-name">{member.name}</p>
      {member.role && <p className="member-role">{member.role}</p>}
    </div>
  )
}

export default function MembersPage() {
  return (
    <div className="law-page-wrap">
      <div className="law-breadcrumb">
        <Link href="/law">HOME</Link>
        <span> &gt; </span>
        <span>센터소개</span>
        <span> &gt; </span>
        <span>더드림 구성원</span>
      </div>

      <div className="law-page-title-bar">
        <h1>더드림 구성원</h1>
      </div>

      <Mn01NavTabs />

      <div className="members-wrap">

        <section className="members-section">
          <div className="members-section-header" style={{ background: '#375b73' }}>
            <h2>교통형사 전문변호사</h2>
          </div>
          <div className="members-grid members-grid-4">
            {lawyers.map((m) => <MemberCard key={m.img} member={m} />)}
          </div>
        </section>

        <section className="members-section">
          <div className="members-section-header" style={{ background: '#bf8553' }}>
            <h2>보험보상 전문위원</h2>
          </div>
          <div className="members-grid members-grid-4">
            {insuranceExperts.map((m) => <MemberCard key={m.img} member={m} />)}
          </div>
        </section>

        <section className="members-section">
          <div className="members-section-header" style={{ background: '#375b73' }}>
            <h2>사건조사 전문위원</h2>
          </div>
          <div className="members-grid members-grid-7">
            {investigators.map((m) => <MemberCard key={m.img} member={m} />)}
          </div>
        </section>

      </div>
    </div>
  )
}
