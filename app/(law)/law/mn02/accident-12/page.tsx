import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '12대 중과실사고 | 더드림교통형사센터',
  description: '신호위반·중앙선침범 등 12대 중과실 교통사고 전문 변호사. 무료 상담 02-6959-5053.',
  keywords: '12대중과실,교통사고,형사변호사,더드림',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/accident-12' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="12대 중과실사고" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/accident-12" />
      <div id="contents">
        <div className="cntbox wd2000" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginTop: 0 }}>
          <img src="/law/mn02/img/mn02_01_img1.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_01_img2.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
        <li style={{ marginTop: 80 }}>
          <img src="/law/mn02/img/mn02_01_img3.jpg" alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </li>
          </ul>
        </div>
      </div>
    </>
  )
}
