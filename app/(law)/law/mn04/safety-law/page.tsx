import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '산업안전 안전보건법위반 | 더드림교통형사센터',
  description: '산업안전보건법 위반 형사 전문 변호사. 사업주·관리자 형사 대응.',
  keywords: '산업안전보건법,사업주,형사처벌,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/safety-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산업안전 안전보건법위반" site="law" />
      <LawNavTabs current="/law/mn04/safety-law" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">산업안전보건법 위반 처벌</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>중대재해처벌법 시행 후 사업주의 형사 책임이 강화되었습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>산업안전보건법 위반 시 7년 이하 징역 또는 1억 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 산업안전 분야 전문 노무사·변호사가 최적의 방어 전략을 수립합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
