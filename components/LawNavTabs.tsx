import Link from 'next/link'

type Tab = { label: string; href: string }
type SectionMap = Record<string, Tab[]>

const SECTION_TABS: SectionMap = {
  '/law/mn01': [
    { label: '인사말', href: '/law/mn01/greeting' },
    { label: '구성원소개', href: '/law/mn01/members' },
    { label: '왜 더드림인가', href: '/law/mn01/strength' },
    { label: '오시는 길', href: '/law/mn01/location' },
  ],
  '/law/mn02': [
    { label: '12대 중과실', href: '/law/mn02/accident-12' },
    { label: '음주/뺑소니', href: '/law/mn02/drunk-driving' },
    { label: '민식이법', href: '/law/mn02/minshik-law' },
    { label: '합의', href: '/law/mn02/lawsuit' },
    { label: '면허취소 구제', href: '/law/mn02/license' },
    { label: '형사사건절차', href: '/law/mn02/procedure' },
    { label: '더드림 솔루션', href: '/law/mn02/solution' },
  ],
  '/law/mn08': [
    { label: '온라인상담', href: '/law/mn08/consult' },
    { label: '카톡상담', href: 'https://pf.kakao.com/_uDksxb' },
    { label: '방문상담', href: '/law/mn08/info' },
  ],
}

export default function LawNavTabs({ current }: { current: string }) {
  const match = current.match(/\/law\/(mn\d+)/)
  const sectionBase = match ? `/law/${match[1]}` : ''
  const tabs: Tab[] = SECTION_TABS[sectionBase] ?? []
  if (tabs.length === 0) return null
  return (
    <nav className="tab_area borad_tab" aria-label="교통형사센터 메뉴">
      <div className="sub_tabs">
        <ul>
          {tabs.map((t: Tab) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className={current === t.href ? 'on' : ''}
                {...(t.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
