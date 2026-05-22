import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '기타 성범죄 | 더드림교통형사센터',
  description: '성매매 등 기타 성범죄 전문 변호사. 02-6959-5053.',
  keywords: '성매매,기타성범죄,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/other' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="기타 성범죄" site="law" bgImage="/law/mn03/img/sub_vs03.jpg" />
      <LawNavTabs current="/law/mn03/other" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn03/img/mn03_04_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_04_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_04_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_04_img4.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn03/img/mn03_04_img5.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
