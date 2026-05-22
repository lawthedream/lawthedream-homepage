import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '피의자/피고인 | 더드림교통형사센터',
  description: '피의자·피고인을 위한 형사 변호 안내. 02-6959-5053.',
  keywords: '피의자,피고인,형사변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/defendant' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="피의자 / 피고인" site="law" bgImage="/law/mn06/img/sub_vs06.jpg" />
      <LawNavTabs current="/law/mn06/defendant" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn06/img/mn06_02_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
