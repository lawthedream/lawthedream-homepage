import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '산재보험 | 더드림보험분쟁센터',
  description: '산재보험 보험금 청구·분쟁 전문. 요양급여, 휴업급여, 장해급여 청구.',
  keywords: '산재보험,요양급여,휴업급여,장해급여',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn04/industrial' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산재보험" site="center" />
      <CenterNavTabs current="/center/mn04/industrial" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">산재보험 급여 종류</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>요양급여: 치료비 전액 지급</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>휴업급여: 평균임금의 70% 지급</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>장해급여: 장해 등급에 따라 지급</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 산재보험 청구 거절·삭감 시 이의신청 및 행정소송을 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
