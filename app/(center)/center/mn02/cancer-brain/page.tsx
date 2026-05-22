import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '뇌심혈관질환 보험금 | 더드림보험분쟁센터',
  description: '뇌경색, 심근경색, 뇌출혈 등 뇌심혈관 질환 보험금 청구 전문.',
  keywords: '뇌심혈관,뇌경색,심근경색,보험금청구',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn02/cancer-brain' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="뇌심혈관질환 보험금" site="center" />
      <CenterNavTabs current="/center/mn02/cancer-brain" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">뇌심혈관질환 보험금 청구</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>뇌경색, 뇌출혈, 심근경색, 협심증 등 뇌심혈관 질환은 주요 보험 보장 대상입니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>보험사의 지급 거절·삭감에 대응하여 정당한 보험금을 받을 수 있도록 지원합니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림 손해사정사가 직접 의료 기록을 분석하고 최적의 청구 전략을 수립합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
