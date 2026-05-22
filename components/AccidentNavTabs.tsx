import Link from 'next/link'

const tabs = [
  { label: '센터소개', href: '/accident/mn01/greeting', base: '/accident/mn01' },
  { label: '중대재해', href: '/accident/mn02/accident-12', base: '/accident/mn02' },
  { label: '사업주책임', href: '/accident/mn03/employer', base: '/accident/mn03' },
  { label: '산업안전', href: '/accident/mn04/safety-law', base: '/accident/mn04' },
  { label: '상담', href: '/accident/mn05/consult', base: '/accident/mn05' },
]

export default function AccidentNavTabs({ current }: { current: string }) {
  return (
    <nav className="tab_area borad_tab" aria-label="중대재해센터 메뉴">
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
