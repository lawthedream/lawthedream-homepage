import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '피해자 | 더드림교통형사센터',
  description: '형사 피해자 법적 권리 보호. 더드림의 조력. 02-6959-5053.',
  keywords: '형사피해자,고소,피해자변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/victim' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="피해자" site="law" bgImage="/law/mn06/img/sub_vs06.jpg" />
      <LawNavTabs current="/law/mn06/victim" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn06/img/mn06_03_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
