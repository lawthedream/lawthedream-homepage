import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '형사사건 절차 | 더드림교통형사센터',
  description: '수사·기소·재판까지 형사사건 전 절차 안내. 02-6959-5053.',
  keywords: '형사절차,수사,기소,재판,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/procedure' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="형사사건 절차" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/procedure" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn02/img/mn02_06_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_06_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
