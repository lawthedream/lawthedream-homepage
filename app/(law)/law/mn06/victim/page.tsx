import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '피해자 | 더드림교통형사센터',
  description: '형사 사건 피해자 법률 지원. 고소 대리, 합의금 협상, 손해배상 청구.',
  keywords: '피해자,고소,손해배상,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/victim' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="피해자" site="law" />
      <LawNavTabs current="/law/mn06/victim" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">피해자 법률 지원</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>고소장 작성 및 접수 대리</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>피해자 진술 동행 및 증거 수집 지원</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>가해자와의 합의 협상 및 손해배상 청구 소송</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
