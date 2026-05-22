import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '성폭행 | 더드림교통형사센터',
  description: '성폭행 사건 전문 변호사. 강간, 강제추행 형사 대응.',
  keywords: '성폭행,강간,형사변호사,성폭력',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/assault' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="성폭행" site="law" />
      <LawNavTabs current="/law/mn03/assault" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">성폭행 법률 지원</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>성폭력 사건은 피해자와 피의자 모두 전문 법률 지원이 필요합니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 피해자 보호 및 가해자 방어 양측에서 최상의 결과를 목표로 합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
