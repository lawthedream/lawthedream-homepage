import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '산전산후 | 더드림교통형사센터',
  description: '산전산후 관련 노동법 및 형사 사건 전문.',
  keywords: '산전산후,노동법,형사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/prenatal' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산전산후" site="law" />
      <LawNavTabs current="/law/mn04/prenatal" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">산전산후 법적 보호</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>임산부에 대한 부당한 처우는 근로기준법 위반으로 형사 처벌 대상입니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 노동 관련 법률 전문가가 적극 대응합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
