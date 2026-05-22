import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '성추행 | 더드림교통형사센터',
  description: '성추행 사건 전문 변호사. 02-6959-5053.',
  keywords: '성추행,성범죄변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/molestation' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="성추행" site="law" bgImage="/law/mn03/img/sub_vs03.jpg" />
      <LawNavTabs current="/law/mn03/molestation" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn03/img/mn03_02_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_02_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_02_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_02_img4.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
