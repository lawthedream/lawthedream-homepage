import CenterHeader from '@/components/CenterHeader'
import CenterFooter from '@/components/CenterFooter'

export default function CenterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CenterHeader />
      <main>{children}</main>
      <CenterFooter />
    </>
  )
}
