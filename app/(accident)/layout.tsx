import AccidentHeader from '@/components/AccidentHeader'
import AccidentFooter from '@/components/AccidentFooter'

export default function AccidentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AccidentHeader />
      <main>{children}</main>
      <AccidentFooter />
    </>
  )
}
