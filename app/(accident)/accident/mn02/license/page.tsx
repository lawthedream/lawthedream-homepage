import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '면허취소 구제 | 더드림중대재해센터',
  description: '운전면허 취소·정지 구제 이의신청·행정심판.',
  keywords: '면허취소,행정심판,구제',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/license' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="면허취소 구제" site="accident" />
      <AccidentNavTabs current="/accident/mn02/license" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">면허구제 방법</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>이의신청(60일 이내), 행정심판, 행정소송 등 다양한 구제 수단이 있습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 면허구제 전문 변호사가 최적의 전략을 제시합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
