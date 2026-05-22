import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '성공 사례 | 더드림교통형사센터',
  description: '더드림 교통형사센터 성공사례. 무혐의, 불기소, 집행유예, 무죄 판결 실적.',
  keywords: '성공사례,무혐의,불기소,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn07/cases' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="성공 사례" site="law" />
      <LawNavTabs current="/law/mn07/cases" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">주요 성공사례</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>성폭력범죄 처벌특례법 위반 → 경찰 조사 참여 및 변호인 의견서 제출 → 혐의없음</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>마약류관리법 위반 → 검찰 조사 참여 및 의견서 제출 → 혐의없음</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>음주운전 상해 → 피해자 합의 및 정상참작 → 집행유예</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
