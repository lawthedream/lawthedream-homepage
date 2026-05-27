import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '더드림솔루션 | 더드림교통형사센터',
  description: '더드림 교통형사 보호프로그램. 형사사건 전담 변호인 선임, 단계별 맞춤 법률 서비스. 무료 상담 02-6959-5053.',
  keywords: '더드림솔루션,형사변호사,법률서비스,교통사고,형사사건',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림 보호프로그램" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/solution" />
      <div className="law-cntbox">
        <div className="wd2000">
          <ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100"><img src="/law/mn02/img/mn02_07_img1.jpg" alt="" /></li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <li className="mt100 mb100"><img src="/law/mn02/img/mn02_07_img2.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
