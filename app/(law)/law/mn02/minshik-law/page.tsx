import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '민식이법 | 더드림교통형사센터',
  description: '스쿨존 사고·민식이법 전문 변호사. 02-6959-5053.',
  keywords: '민식이법,스쿨존,어린이보호구역,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/minshik-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="민식이법" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/minshik-law" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn02/img/mn02_03_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_03_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_03_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_03_img4.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
