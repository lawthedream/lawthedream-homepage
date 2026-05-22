import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '폭행상해 | 더드림교통형사센터',
  description: '폭행·상해 사건 전문 변호사. 합의 및 형사 대응.',
  keywords: '폭행,상해,형사변호사,합의',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/violence' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="폭행상해" site="law" />
      <LawNavTabs current="/law/mn05/violence" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">폭행·상해 처벌 기준</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>폭행죄: 2년 이하 징역, 500만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>상해죄: 7년 이하 징역, 10년 이하 자격정지 또는 1000만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>피해자와의 합의를 통해 형사처벌을 최소화할 수 있습니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
