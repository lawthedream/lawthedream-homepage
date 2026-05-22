import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '인사말 | 더드림중대재해센터',
  description: '더드림 중대재해센터 인사말. 중대재해처벌법 전문 대응.',
  keywords: '중대재해센터,인사말',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn01/greeting' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="인사말" site="accident" />
      <AccidentNavTabs current="/accident/mn01/greeting" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 중대재해센터</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>중대재해처벌법 시행 이후 사업주·경영책임자의 형사 리스크가 대폭 증가했습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림 중대재해센터는 예방 컨설팅부터 사건 발생 후 형사 대응까지 원스톱으로 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
