import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '언론보도 | 더드림교통형사센터',
  description: '더드림 교통형사센터 언론보도 모음.',
  keywords: '언론보도,더드림,교통형사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn07/press' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="언론보도" site="law" />
      <LawNavTabs current="/law/mn07/press" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">더드림 언론보도</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림 교통형사센터는 다수의 언론에 소개된 바 있습니다.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>전문성과 성공률을 인정받은 더드림법률사무소와 함께하세요.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
