import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '민식이법 | 더드림중대재해센터',
  description: '민식이법 전문 대응. 스쿨존 사고 형사처벌 최소화.',
  keywords: '민식이법,스쿨존,형사대응',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/minshik-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="민식이법" site="accident" />
      <AccidentNavTabs current="/accident/mn02/minshik-law" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">민식이법 대응</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>스쿨존 내 사고 발생 시 즉시 전문 변호사를 선임하세요.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 민식이법 시행 초기부터 다수의 사건을 성공적으로 처리했습니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
