import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '사업영역 | 더드림직업병연구원',
  description: '더드림 직업병연구원 사업 영역.',
  keywords: '사업영역,직업병,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn01/intro' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="사업영역" site="work" />
      <WorkNavTabs current="/work/mn01/intro" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">사업 영역</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>직업병 산재 신청 대행</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>산업위생 조사 및 역학조사 지원</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>이의신청 및 행정소송</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>손해배상 청구 소송</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
