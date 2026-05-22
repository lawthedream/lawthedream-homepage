import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '산업안전보건법 위반 | 더드림교통형사센터',
  description: '산업재해·산업안전보건법 위반 형사 전문. 02-6959-5053.',
  keywords: '산업안전보건법,산재,형사변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/safety-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산업안전보건법 위반" site="law" bgImage="/law/mn04/img/sub_vs04.jpg" />
      <LawNavTabs current="/law/mn04/safety-law" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn04/img/mn04_01_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn04/img/mn04_01_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn04/img/mn04_01_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
