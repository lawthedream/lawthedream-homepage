import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '직업성 폐질환 | 더드림직업병연구원',
  description: '직업성 폐질환(진폐증, 석면폐) 산재 전문.',
  keywords: '직업성폐질환,진폐증,석면폐,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/lung-disease' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="직업성 폐질환" site="work" />
      <WorkNavTabs current="/work/mn02/lung-disease" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">직업성 폐질환</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>진폐증: 분진 흡입으로 폐 조직이 굳는 직업병, 탄광·석재·건설업 근로자</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>석면폐: 석면 흡입으로 발생, 건설·조선·제조업</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 진폐 등급 판정부터 요양급여, 합병증 요양까지 전 과정 지원</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
