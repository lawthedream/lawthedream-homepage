import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '사망·장해 보험금 | 더드림보험분쟁센터',
  description: '사망·후유장해 보험금 청구 전문. 보험사 분쟁 해결.',
  keywords: '사망보험금,장해보험금,후유장해',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn03/death-disability' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="사망·장해 보험금" site="center" />
      <CenterNavTabs current="/center/mn03/death-disability" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">사망·장해 보험금 청구</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사망 보험금: 재해·질병 사망, 피보험자의 사망 원인 확인 및 청구 지원</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>후유장해 보험금: 장해 등급 산정, 보험사 이의 시 재심사 청구</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 보험금 최대화를 위한 의료 기록 분석부터 소송까지 전 과정을 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
