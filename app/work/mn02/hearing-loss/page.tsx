import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '소음성 난청 | 더드림직업병연구원',
  description: '소음성 난청 직업병 산재 전문. 건설·제조업 소음 노출 인정.',
  keywords: '소음성난청,직업병,산재인정',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/hearing-loss' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="소음성 난청" site="work" />
      <WorkNavTabs current="/work/mn02/hearing-loss" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">소음성 난청 산재</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>85dB(A) 이상 소음 작업장 3년 이상 근무 시 직업병 인정 가능</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>건설업, 제조업, 광업 등 소음 노출 직종 근로자에게 주로 발생</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 작업 환경 측정 자료 확보부터 산재 신청까지 전 과정 대행</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
