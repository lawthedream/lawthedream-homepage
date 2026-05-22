import SubTabs from '@/components/SubTabs'

const mn02Tabs = [
  { label: '직업성 암/폐질환',  href: '/new2019/mn02/occupational-cancer' },
  { label: '과로사',           href: '/new2019/mn02/overwork-death' },
  { label: '소음성난청',        href: '/new2019/mn02/noise-hearing-loss' },
  { label: '정신질병/자살',     href: '/new2019/mn02/mental-disease' },
  { label: '근골격계질환',      href: '/new2019/mn02/musculoskeletal' },
  { label: '출퇴근 중 재해',    href: '/new2019/mn02/commute-accident' },
  { label: '장해등급',          href: '/new2019/mn02/disability-grade' },
  { label: '평균임금',          href: '/new2019/mn02/average-wage' },
  { label: '자동차보험',        href: '/new2019/mn02/auto-insurance' },
  { label: '근재/단체보험',     href: '/new2019/mn02/group-insurance' },
  { label: '손해/질병보험',     href: '/new2019/mn02/damage-insurance' },
  { label: '어선원/공무원',     href: '/new2019/mn02/fisherman-official' },
]

export default function Mn02Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubTabs tabs={mn02Tabs} />
      <div id="contents">{children}</div>
    </>
  )
}
