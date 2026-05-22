import SubVisual from '@/components/SubVisual'
import SubTabs from '@/components/SubTabs'

const mn03Tabs = [
  { label: '산업재해', href: '/new2019/mn03/industrial' },
  { label: '보험보상', href: '/new2019/mn03/insurance' },
  { label: '소송',     href: '/new2019/mn03/lawsuit' },
]

export default function Mn03Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubVisual title="성공사례" />
      <SubTabs tabs={mn03Tabs} />
      <div id="contents" style={{ paddingBottom: '40px', marginTop: 0 }}>
        {children}
      </div>
    </>
  )
}
