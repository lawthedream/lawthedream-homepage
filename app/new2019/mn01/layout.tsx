import SubTabs from '@/components/SubTabs'

const mn01Tabs = [
  { label: '인사말',         href: '/new2019/mn01/greeting' },
  { label: '구성원',         href: '/new2019/mn01/members' },
  { label: '더 드림의 강점', href: '/new2019/mn01/strength' },
  { label: '오시는길',       href: '/new2019/mn01/location' },
]

export default function Mn01Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubTabs tabs={mn01Tabs} />
      <div id="contents">{children}</div>
    </>
  )
}
