import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '교통사고 보험금 | 더드림보험분쟁센터',
  description: '교통사고 보험금 청구·분쟁 전문. 자동차보험, 상해보험, 실손보험.',
  keywords: '교통사고,보험금,자동차보험,실손보험',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn05/traffic' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="교통사고 보험금" site="center" />
      <CenterNavTabs current="/center/mn05/traffic" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">교통사고 보험금 청구</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>자동차보험: 대인·대물·자손·무보험차 보험금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>상해보험: 교통사고 상해 등급별 보험금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>실손보험: 치료비 실손 청구</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 보험사의 부당한 지급 거절·삭감에 적극 대응합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
