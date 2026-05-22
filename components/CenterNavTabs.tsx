import Link from 'next/link'

const tabs = [
  { label: '센터소개', href: '/center/mn01/greeting', base: '/center/mn01' },
  { label: '뇌심혈관', href: '/center/mn02/cancer-brain', base: '/center/mn02' },
  { label: '사망·장해', href: '/center/mn03/death-disability', base: '/center/mn03' },
  { label: '산재보험', href: '/center/mn04/industrial', base: '/center/mn04' },
  { label: '교통사고', href: '/center/mn05/traffic', base: '/center/mn05' },
  { label: '상담', href: '/center/mn06/consult', base: '/center/mn06' },
  { label: '소송', href: '/center/mn08/lawsuit', base: '/center/mn08' },
]

export default function CenterNavTabs({ current }: { current: string }) {
  return (
    <nav className="tab_area borad_tab" aria-label="보험분쟁센터 메뉴">
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
