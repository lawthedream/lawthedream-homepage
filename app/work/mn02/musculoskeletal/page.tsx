import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '근골격계 질환 | 더드림직업병연구원',
  description: '근골격계 직업병 산재 전문. 요통, 손목·어깨 질환 산재 인정.',
  keywords: '근골격계,요통,직업병,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/musculoskeletal' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="근골격계 질환" site="work" />
      <WorkNavTabs current="/work/mn02/musculoskeletal" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">근골격계 직업병</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>반복적 동작, 과도한 힘, 부적절한 자세 등으로 발생하는 근골격계 질환</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>요통, 회전근개파열, 수근관증후군(손목터널증후군) 등이 대표적입니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 의학 자문, 작업환경 분석을 통해 산재 인정률을 높입니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
