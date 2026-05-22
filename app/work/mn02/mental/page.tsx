import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '정신질병/자살 | 더드림직업병연구원',
  description: '직업 스트레스로 인한 정신질환·자살 산재 전문.',
  keywords: '정신질병,직업스트레스,자살,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/mental' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="정신질병/자살" site="work" />
      <WorkNavTabs current="/work/mn02/mental" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">정신질병·자살 산재</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>업무상 극심한 스트레스로 인한 우울증, PTSD, 자살도 산재 인정 가능</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>직장 내 괴롭힘, 폭언, 과도한 업무 부담이 원인으로 인정</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 정신과 전문의 협력 하에 산재 신청을 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
