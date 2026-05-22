import WorkHeader from '@/components/WorkHeader'
import WorkFooter from '@/components/WorkFooter'

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WorkHeader />
      <main>{children}</main>
      <WorkFooter />
    </>
  )
}
