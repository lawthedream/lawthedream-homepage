import SubTabs from '@/components/SubTabs'

const mn08Tabs = [
  { label: '이의신청 및 행정소송', href: '/new2019/mn08/admin-appeal' },
  { label: '민사소송',            href: '/new2019/mn08/civil-lawsuit' },
  { label: '단계별 더드림 솔루션', href: '/new2019/mn08/solution' },
]

export default function Mn08Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubTabs tabs={mn08Tabs} />
      <div id="contents">{children}</div>
    </>
  )
}
