import LawHeader from '@/components/LawHeader'
import LawFooter from '@/components/LawFooter'

export default function LawLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LawHeader />
      <main>{children}</main>
      <LawFooter />
    </>
  )
}
