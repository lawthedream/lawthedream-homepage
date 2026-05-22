import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '변호사 선임 사유 | 더드림교통형사센터',
  description: '형사사건에서 변호사 선임이 필요한 이유. 경찰 조사 단계부터 전문가와 함께하세요.',
  keywords: '변호사선임,형사사건,경찰조사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/reason' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="변호사 선임 사유" site="law" />
      <LawNavTabs current="/law/mn06/reason" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">변호사 선임이 중요한 이유</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>형사 사건은 초기 진술이 결과를 좌우합니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전문 변호사는 불리한 진술을 방지하고 유리한 증거를 확보합니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>경찰 조사 단계부터 변호사와 함께하면 무혐의·불기소 가능성이 높아집니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
