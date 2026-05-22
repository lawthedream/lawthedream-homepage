import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '피의자/피고인 | 더드림교통형사센터',
  description: '피의자·피고인 권리와 형사 절차 안내.',
  keywords: '피의자,피고인,형사절차,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/defendant' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="피의자/피고인" site="law" />
      <LawNavTabs current="/law/mn06/defendant" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">피의자·피고인의 권리</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>진술 거부권: 본인에게 불리한 진술은 거부할 수 있습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>변호인 조력권: 언제든지 변호사의 도움을 받을 권리가 있습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>구속적부심 청구권: 불법·부당한 구속에 이의를 제기할 수 있습니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
