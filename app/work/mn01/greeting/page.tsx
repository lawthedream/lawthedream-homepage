import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '인사말 | 더드림직업병연구원',
  description: '더드림 직업병연구원 인사말. 직업병 산재 전문기관.',
  keywords: '직업병연구원,인사말,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn01/greeting' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="인사말" site="work" />
      <WorkNavTabs current="/work/mn01/greeting" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 직업병연구원</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>직업병은 일반 산재보다 인정 요건이 복잡하고 까다롭습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림 직업병연구원은 직업성 암, 근골격계, 소음성 난청, 과로사 등 모든 직업병 유형을 전문으로 다룹니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
