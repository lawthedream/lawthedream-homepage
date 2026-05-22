import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '업무상 과실치사상 | 더드림교통형사센터',
  description: '업무상 과실치사상 형사 전문 변호사. 02-6959-5053.',
  keywords: '업무상과실,과실치사,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/negligence' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="업무상 과실치사상" site="law" bgImage="/law/mn04/img/sub_vs04.jpg" />
      <LawNavTabs current="/law/mn04/negligence" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn04/img/mn04_02_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn04/img/mn04_02_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
