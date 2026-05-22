import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '온라인상담 | 더드림교통형사센터',
  description: '더드림 교통형사센터 온라인 상담. 교통사고·형사사건 무료 상담.',
  keywords: '온라인상담,형사상담,무료상담',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn08/consult' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="온라인상담" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn08/consult" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">온라인 상담 안내</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>아래 상담 폼을 작성하시면 담당 변호사가 빠르게 연락드립니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전화 상담: 02-6959-5053 (평일 09:00~18:00)</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
