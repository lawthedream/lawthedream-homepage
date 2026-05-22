import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '마약범죄 | 더드림교통형사센터',
  description: '마약범죄 전문 변호사. 대마, 필로폰, 합성마약 형사 대응.',
  keywords: '마약범죄,대마,필로폰,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/drugs' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="마약범죄" site="law" />
      <LawNavTabs current="/law/mn05/drugs" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">마약범죄 처벌 기준</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>필로폰(메스암페타민) 투약·소지: 10년 이하 징역</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>대마 흡연·소지: 5년 이하 징역 또는 5000만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>초범이라도 즉시 전문 변호사를 선임해 적극 대응해야 합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
