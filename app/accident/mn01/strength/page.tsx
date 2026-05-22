import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '왜 더드림인가 | 더드림중대재해센터',
  description: '더드림 중대재해센터 강점. 예방~대응 원스톱 서비스.',
  keywords: '더드림,중대재해,강점',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn01/strength' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="왜 더드림인가" site="accident" />
      <AccidentNavTabs current="/accident/mn01/strength" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림을 선택하는 이유</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>중대재해처벌법 시행 전부터 산업안전 분야를 전문으로 다뤄온 노하우</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>예방 컨설팅, 안전보건 시스템 구축, 사고 발생 시 형사 대응까지 원스톱 서비스</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
