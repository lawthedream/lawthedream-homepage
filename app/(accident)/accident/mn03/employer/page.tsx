import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '사업주 책임 | 더드림중대재해센터',
  description: '중대재해처벌법 사업주 형사책임. 경영책임자 형사 대응.',
  keywords: '사업주,경영책임자,중대재해처벌법',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn03/employer' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="사업주 책임" site="accident" />
      <AccidentNavTabs current="/accident/mn03/employer" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">사업주의 법적 책임</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>중대재해처벌법 위반 시 경영책임자 1년 이상 징역 또는 10억 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>법인도 50억 원 이하 벌금 부과</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>즉각적인 변호사 선임과 사고 경위 파악이 중요합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
