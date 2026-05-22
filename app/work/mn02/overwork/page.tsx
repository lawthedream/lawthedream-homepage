import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '과로사 | 더드림직업병연구원',
  description: '과로사·뇌심혈관질환 산재 전문. 업무상 과로로 인한 사망·질병 인정.',
  keywords: '과로사,뇌심혈관,업무상질병,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/overwork' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="과로사" site="work" />
      <WorkNavTabs current="/work/mn02/overwork" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">과로사 산재 인정</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>뇌출혈, 뇌경색, 심근경색 등 뇌심혈관질환이 업무상 과로와 관련 있으면 산재 인정</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>발병 전 12주간 1주 평균 60시간 이상 근무 시 업무관련성 강하게 추정</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 근로시간 증거 수집부터 역학조사 의뢰까지 전 과정 지원</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
