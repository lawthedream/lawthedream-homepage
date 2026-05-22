import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '일반형사 | 더드림교통형사센터',
  description: '일반 형사사건 전문 변호사. 02-6959-5053.',
  keywords: '일반형사,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/general' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="일반형사" site="law" bgImage="/law/mn05/img/sub_vs05.jpg" />
      <LawNavTabs current="/law/mn05/general" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn05/img/mn05_01_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn05/img/mn05_01_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn05/img/mn05_01_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn05/img/mn05_01_img4.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
