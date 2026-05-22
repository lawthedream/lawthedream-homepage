import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '면허취소 구제 | 더드림교통형사센터',
  description: '운전면허 취소·정지 구제 전문. 이의신청 및 행정심판으로 면허 회복.',
  keywords: '면허취소,면허정지,이의신청,구제',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/license' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="면허취소 구제" site="law" />
      <LawNavTabs current="/law/mn02/license" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">면허 취소·정지 구제 방법</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>면허 취소 처분에 대한 이의신청은 처분일로부터 60일 이내 가능</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>행정심판 또는 행정소송을 통해 취소 처분을 다툴 수 있습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 면허구제 전문 행정사·변호사가 최적의 전략을 수립합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
