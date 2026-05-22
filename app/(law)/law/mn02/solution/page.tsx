import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '더드림 솔루션 | 더드림교통형사센터',
  description: '더드림만의 법률 솔루션. 교통·형사 사건 맞춤 전략. 02-6959-5053.',
  keywords: '더드림솔루션,교통사고전략,형사변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림 솔루션" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/solution" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn02/img/mn02_07_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_07_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
