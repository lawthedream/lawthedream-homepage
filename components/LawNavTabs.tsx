import Link from 'next/link'

const tabs = [
  { label: '교통사고', href: '/law/mn02/accident-12', base: '/law/mn02' },
  { label: '성범죄', href: '/law/mn03/sexual-harassment', base: '/law/mn03' },
  { label: '산업안전', href: '/law/mn04/safety-law', base: '/law/mn04' },
  { label: '일반형사', href: '/law/mn05/general', base: '/law/mn05' },
  { label: '형사절차', href: '/law/mn06/reason', base: '/law/mn06' },
  { label: '성공사례', href: '/law/mn07/cases', base: '/law/mn07' },
  { label: '상담/안내', href: '/law/mn08/consult', base: '/law/mn08' },
]

export default function LawNavTabs({ current }: { current: string }) {
  return (
    <nav className="tab_area borad_tab" aria-label="교통형사센터 메뉴">
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
