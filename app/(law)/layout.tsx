import '@/styles/law-layout.css'
import LawHeader from '@/components/LawHeader'
import LawFooter from '@/components/LawFooter'
import LawQuickMenu from '@/components/LawQuickMenu'

export default function LawLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="law-site">
      <LawHeader />
      <main>{children}</main>
      <LawQuickMenu />
      <LawFooter />
    </div>
  )
}
