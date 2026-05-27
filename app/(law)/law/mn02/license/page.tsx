import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '면허취소구제 | 더드림교통형사센터',
  description: '운전면허 취소·정지 구제 전문 변호사. 행정심판, 행정소송, 이의신청. 무료 상담 02-6959-5053.',
  keywords: '면허취소,면허정지,면허구제,행정심판,행정소송',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/license' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="면허취소 구제" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/license" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_05_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_05_img2.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_05_img3.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_05_img4.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_05_img5.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_05_img6.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
