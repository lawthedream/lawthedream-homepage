import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '형사사건절차 | 더드림교통형사센터',
  description: '교통·형사사건 절차 안내. 수사-기소-재판-집행 단계별 대응 전략. 무료 상담 02-6959-5053.',
  keywords: '형사사건절차,수사,기소,재판,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/procedure' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="형사사건 절차" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/procedure" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_06_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_06_img2.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
