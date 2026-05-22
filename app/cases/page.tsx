import type { Metadata } from 'next'
import Link from 'next/link'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'

export const metadata: Metadata = {
  title: '성공사례 | 더드림법률사무소',
  description: '더드림법률사무소 성공사례 — 산재·보험보상·교통사고·소송 분야의 실제 성공 사례를 확인하세요.',
  keywords: '더드림 성공사례, 산재 성공, 보험보상 성공, 소송 성공사례',
  alternates: { canonical: 'https://www.lawthedream.com/cases' },
}

const caseLinks = [
  { href: '/new2019/mn03/industrial', label: '산업재해 성공사례', color: '#3cb6c1', desc: '산재 승인 및 보상 성공 사례' },
  { href: '/new2019/mn03/insurance',  label: '보험보상 성공사례', color: '#5bc2c8', desc: '보험금 청구 및 분쟁 해결 사례' },
  { href: '/new2019/mn03/lawsuit',    label: '소송 성공사례',     color: '#55b2e1', desc: '행정소송·민사소송 승소 사례' },
]

export default function CasesPage() {
  return (
    <>
      <IntroSubVisual title="성공사례" subtitle="더드림이 만들어낸 성공의 기록" />
      <IntroNavTabs active="cases" />
      <main id="contents" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 20px 80px' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 50 }}>
          더드림 성공사례
        </h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, listStyle: 'none', padding: 0 }}>
          {caseLinks.map((c) => (
            <li key={c.href}>
              <Link href={c.href} style={{ display: 'block', textDecoration: 'none', borderRadius: 10, overflow: 'hidden', border: '1px solid #eee', transition: 'box-shadow 0.2s' }}>
                <div style={{ backgroundColor: c.color, padding: '40px 20px', textAlign: 'center' }}>
                  <p style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>{c.label}</p>
                </div>
                <div style={{ padding: '20px', backgroundColor: '#fff', textAlign: 'center' }}>
                  <p style={{ color: '#555', fontSize: 15 }}>{c.desc}</p>
                  <p style={{ color: c.color, fontSize: 14, fontWeight: 600, marginTop: 12 }}>자세히 보기 →</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <style>{`@media(max-width:600px){ ul{ grid-template-columns:1fr !important; } }`}</style>
    </>
  )
}
