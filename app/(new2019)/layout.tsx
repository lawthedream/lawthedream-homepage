import New2019Header from '@/components/New2019Header'
import New2019Footer from '@/components/New2019Footer'

export default function New2019Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <New2019Header />
      <main>{children}</main>
      <New2019Footer />
    </>
  )
}
