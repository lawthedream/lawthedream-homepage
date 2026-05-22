import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '인사말 | 더드림보험분쟁센터',
  description: '더드림 보험분쟁센터 인사말.',
  keywords: '보험분쟁센터,인사말',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn01/greeting' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="인사말" site="center" />
      <CenterNavTabs current="/center/mn01/greeting" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 보험분쟁센터</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>보험분쟁은 전문 손해사정사·변호사와 함께해야 최적의 결과를 얻을 수 있습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 보험금 청구 거절, 삭감, 분쟁 등 모든 사안을 원스톱으로 해결합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
