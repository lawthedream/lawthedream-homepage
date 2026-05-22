'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TabItem {
  label: string
  href: string
}

interface SubTabsProps {
  tabs: TabItem[]
}

export default function SubTabs({ tabs }: SubTabsProps) {
  const pathname = usePathname()

  return (
    <div className="tab_area borad_tab">
      <div id="mn4" className="sub_tabs">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.href}>
              <Link href={tab.href} className={pathname === tab.href ? 'on' : ''}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
