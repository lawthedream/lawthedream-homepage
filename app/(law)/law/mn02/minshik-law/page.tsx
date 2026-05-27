import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '민식이법 | 더드림교통형사센터',
  description: '민식이법(스쿨존 교통사고) 전문 변호사. 어린이보호구역 사고 형사처벌 대응. 무료 상담 02-6959-5053.',
  keywords: '민식이법,스쿨존,어린이보호구역,교통사고,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/minshik-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="민식이법" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/minshik-law" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_03_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_03_img2.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_03_img3.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_03_img4.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
