import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '산전·산후관리 | 더드림교통형사센터',
  description: '산전 산후 법적 분쟁 전문. 02-6959-5053.',
  keywords: '산전산후,법률상담',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/prenatal' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산전·산후관리" site="law" bgImage="/law/mn04/img/sub_vs04.jpg" />
      <LawNavTabs current="/law/mn04/prenatal" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>

          </ul>
        </div>
      </div>
    </>
  )
}
