import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '일반 산재 | 더드림직업병연구원',
  description: '일반 산업재해 산재 신청·불승인 이의신청 전문.',
  keywords: '일반산재,산재신청,산재불승인,이의신청',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/general' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="일반 산재" site="work" />
      <WorkNavTabs current="/work/mn02/general" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">일반 산재 신청</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>업무상 사고, 출퇴근 사고, 업무상 질병 모두 산재 신청 가능</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>근로복지공단 불승인 시 심사청구 → 재심사청구 → 행정소송</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 산재 신청부터 이의신청, 소송까지 원스톱으로 지원합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
