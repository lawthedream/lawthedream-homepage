import Link from 'next/link'

const tabs = [
  { label: '연구원소개', href: '/work/mn01/greeting', base: '/work/mn01' },
  { label: '직업병연구', href: '/work/mn02/musculoskeletal', base: '/work/mn02' },
  { label: '성공사례', href: '/work/mn03/cases', base: '/work/mn03' },
  { label: '상담', href: '/work/mn04/consult', base: '/work/mn04' },
  { label: '오시는 길', href: '/work/mn05/location', base: '/work/mn05' },
]

export default function WorkNavTabs({ current }: { current: string }) {
  return (
    <nav className="tab_area borad_tab" aria-label="직업병연구원 메뉴">
      <div className="sub_tabs">
        <ul>
          {tabs.map(t => (
            <li key={t.href}>
              <Link href={t.href} className={current.startsWith(t.base) ? 'on' : ''}>
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
