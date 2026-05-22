import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '성추행 | 더드림교통형사센터',
  description: '성추행 사건 전문 변호사. 성폭력처벌법 대응, 무혐의·불기소 목표.',
  keywords: '성추행,형사변호사,성폭력처벌법',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/molestation' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="성추행" site="law" />
      <LawNavTabs current="/law/mn03/molestation" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">성추행 처벌 기준</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>강제추행: 10년 이하 징역 또는 1500만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>준강제추행(심신 미약 이용): 10년 이하 징역</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>즉시 변호사를 선임해 초기 조사 단계부터 대응해야 합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
