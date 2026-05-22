import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '교통사고소송 | 더드림교통형사센터',
  description: '교통사고 합의·소송 전문. 손해배상 극대화. 02-6959-5053.',
  keywords: '교통사고소송,손해배상,합의,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/lawsuit' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="교통사고소송" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/lawsuit" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn02/img/mn02_04_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_04_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_04_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
