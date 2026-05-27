import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '왜 더드림인가 | 더드림교통형사센터',
  description: '더드림 교통형사센터 강점. 원스톱 법률서비스, 전문성, 풍부한 성공사례.',
  keywords: '더드림,교통형사,장점,전문성',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/strength' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="왜 더드림인가" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn01/strength" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <div style={{ width: '100%', marginBottom: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/mn01/img/mn01_03_img1.jpg" alt="왜 더드림인가" style={{ width: '100%', height: 'auto' }} />
        </div>
        <section>
          <h3 className="con_tit">더드림을 선택하는 이유</h3>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>12대 중과실사고, 음주운전, 민식이법 등 복잡한 교통·형사사건을 풍부한 경험으로 해결합니다.</p>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>경찰 조사 단계부터 형사재판, 민사 손해배상까지 원스톱으로 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
