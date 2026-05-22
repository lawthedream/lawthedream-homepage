import SubTabs from '@/components/SubTabs'

const mn04Tabs = [
  { label: '온라인 상담', href: '/new2019/mn04/consult' },
  { label: '보도자료',    href: '/new2019/mn04/press' },
  { label: 'VOD',        href: '/new2019/mn04/vod' },
]

export default function Mn04Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubTabs tabs={mn04Tabs} />
      <div id="contents">{children}</div>
    </>
  )
}
