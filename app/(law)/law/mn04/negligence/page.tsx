import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '업무상 과실치사상 | 더드림교통형사센터',
  description: '업무상 과실치사상 형사 전문 변호사. 산업재해 형사 처벌 대응.',
  keywords: '업무상과실치사상,산업재해,형사처벌,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/negligence' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="업무상 과실치사상" site="law" />
      <LawNavTabs current="/law/mn04/negligence" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">업무상 과실치사상</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>업무 중 부주의로 타인을 사상한 경우 업무상 과실치사상죄 적용</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>5년 이하 금고 또는 2000만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>초기 조사 단계부터 변호사와 함께 대응하는 것이 중요합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
