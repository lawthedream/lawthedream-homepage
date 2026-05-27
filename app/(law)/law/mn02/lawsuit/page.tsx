import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '교통사고소송 | 더드림교통형사센터',
  description: '교통사고 보험소송·합의 전문 변호사. 적정 합의금 산정, 소외합의, 합의절차 안내. 무료 상담 02-6959-5053.',
  keywords: '교통사고소송,보험소송,합의,합의금,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/lawsuit' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="교통사고소송" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/lawsuit" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_04_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_04_img2.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li><img src="/law/mn02/img/mn02_04_img3.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
