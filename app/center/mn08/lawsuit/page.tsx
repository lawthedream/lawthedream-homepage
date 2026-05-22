import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import CenterNavTabs from '@/components/CenterNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '이의신청·소송 | 더드림보험분쟁센터',
  description: '보험금 분쟁 이의신청 및 행정소송·민사소송 전문.',
  keywords: '이의신청,행정소송,민사소송,보험분쟁',
  alternates: { canonical: 'https://www.lawthedream.com/center/mn08/lawsuit' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="이의신청·소송" site="center" />
      <CenterNavTabs current="/center/mn08/lawsuit" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">보험금 분쟁 소송</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>이의신청: 보험급여 결정에 불복 시 90일 이내 신청</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>행정소송: 이의신청 결과에 불복 시 행정소송 제기</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>민사소송: 보험사 상대 손해배상 청구</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 소송 전 단계부터 최종 판결까지 전담 변호사가 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
