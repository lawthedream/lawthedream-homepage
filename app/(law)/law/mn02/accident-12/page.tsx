import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '12대 중과실사고 | 더드림교통형사센터',
  description: '12대 중과실사고 전문 변호사. 교통사고처리 특례법 위반, 면허취소 구제. 무료 상담 02-6959-5053.',
  keywords: '12대중과실,교통사고,교통사고처리특례법,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/accident-12' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="12대 중과실사고" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/accident-12" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_01_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_01_img2.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_01_img3.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
