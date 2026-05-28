'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { label: '인사말',      href: '/law/mn01/greeting' },
  { label: '구성원소개',  href: '/law/mn01/members' },
  { label: '왜 더드림인가', href: '/law/mn01/strength' },
  { label: '오시는길',    href: '/law/mn01/location' },
]

export default function Mn01NavTabs() {
  const pathname = usePathname()
  return (
    <nav className="mn01-nav" aria-label="센터소개 메뉴">
      <ul>
        {TABS.map(tab => (
          <li key={tab.href}>
            <Link
              href={tab.href}
              className={pathname === tab.href ? 'active' : ''}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
