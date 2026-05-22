import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '변호사 선임사유 | 더드림교통형사센터',
  description: '형사 변호사가 필요한 이유와 국선변호인 제도 안내. 02-6959-5053.',
  keywords: '변호사선임,국선변호인,형사절차',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/reason' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="변호사 선임사유" site="law" bgImage="/law/mn06/img/sub_vs06.jpg" />
      <LawNavTabs current="/law/mn06/reason" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn06/img/mn06_01_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn06/img/mn06_01_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
