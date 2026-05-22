import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '사고 대응 | 더드림중대재해센터',
  description: '중대재해 사고 발생 시 즉각 대응. 초기 대응이 결과를 좌우합니다.',
  keywords: '중대재해,사고대응,형사',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn03/response' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="사고 대응" site="accident" />
      <AccidentNavTabs current="/accident/mn03/response" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">사고 발생 시 초기 대응</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>현장 보전 및 증거 확보</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>관계 기관(경찰·고용노동부·산업안전공단) 신고 및 조사 대응</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>즉시 전문 변호사에게 연락 — 02-6959-5053</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
