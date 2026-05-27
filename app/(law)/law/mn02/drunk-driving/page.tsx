import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '음주/뺑소니 | 더드림교통형사센터',
  description: '음주운전·뺑소니 사건 전문 변호사. 면허 취소·정지, 형사처벌 대응. 무료 상담 02-6959-5053.',
  keywords: '음주운전,뺑소니,면허취소,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/drunk-driving' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="음주 / 뺑소니" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/drunk-driving" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_02_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_02_img2.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_02_img3.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_02_img4.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
