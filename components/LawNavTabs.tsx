import Link from 'next/link'

type Tab = { label: string; href: string }
type SectionMap = Record<string, Tab[]>

// mn03 pages use mn05's tab group (일반형사 + 성범죄 통합)
// This matches the original PHP: mn03 pages include ../mn05/tabs.php
const MN05_TABS: Tab[] = [
  { label: '일반형사', href: '/law/mn05/general' },
  { label: '폭행상해', href: '/law/mn05/violence' },
  { label: '마약범죄', href: '/law/mn05/drugs' },
  { label: '재산범죄', href: '/law/mn05/property' },
  { label: '성희롱', href: '/law/mn03/sexual-harassment' },
  { label: '성추행', href: '/law/mn03/molestation' },
  { label: '성폭행', href: '/law/mn03/assault' },
  { label: '기타 성범죄', href: '/law/mn03/other' },
]

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
  // mn03 pages share mn05 tabs (same as PHP original)
  '/law/mn03': MN05_TABS,
  '/law/mn04': [
    { label: '산업안전보건법위반', href: '/law/mn04/safety-law' },
    { label: '업무상 과실치사상', href: '/law/mn04/negligence' },
  ],
  '/law/mn05': MN05_TABS,
  '/law/mn06': [
    { label: '변호사선임사유', href: '/law/mn06/reason' },
    { label: '피의자/피고인', href: '/law/mn06/defendant' },
    { label: '피해자', href: '/law/mn06/victim' },
  ],
  '/law/mn07': [
    { label: '성공 Case 보기', href: '/law/mn07/cases' },
    { label: '언론보도', href: '/law/mn07/press' },
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
