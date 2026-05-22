import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '중대재해 예방 | 더드림중대재해센터',
  description: '중대재해처벌법 예방 컨설팅. 안전보건 시스템 구축.',
  keywords: '중대재해예방,안전보건,컨설팅',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn02/prevention' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="중대재해 예방" site="accident" />
      <AccidentNavTabs current="/accident/mn02/prevention" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">중대재해 예방 컨설팅</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>중대재해처벌법 의무 이행 현황 점검</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>안전보건 관리체계 구축 및 문서화 지원</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>위험성 평가, 안전보건 교육 자료 작성</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
