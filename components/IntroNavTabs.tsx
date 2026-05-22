'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { label: '인사말',       href: '/greeting' },
  { label: '구성원',       href: '/members' },
  { label: '업무분야',     href: '/areas' },
  { label: '성공사례',     href: '/cases' },
  { label: '온라인상담',   href: '/consult' },
  { label: '더드림 소식',  href: '/news' },
  { label: '오시는 길',    href: '/location' },
]

export default function IntroNavTabs({ active }: { active?: string }) {
  const pathname = usePathname()
  return (
    <nav className="tab_area borad_tab" aria-label="더드림 서브 메뉴">
      <div className="sub_tabs">
        <ul>
          {tabs.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className={pathname === t.href || active === t.href.replace('/', '') ? 'on' : ''}
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
