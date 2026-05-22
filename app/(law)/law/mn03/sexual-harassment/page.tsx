import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '성희롱 | 더드림교통형사센터',
  description: '성희롱 사건 전문 변호사. 직장 내 성희롱, 피해자·피의자 양측 대응.',
  keywords: '성희롱,형사변호사,직장내성희롱',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/sexual-harassment' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="성희롱" site="law" />
      <LawNavTabs current="/law/mn03/sexual-harassment" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">성희롱 법적 대응</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>직장 내 성희롱은 남녀고용평등법 위반으로 형사 처벌 가능</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>피해자의 경우 즉시 증거를 확보하고 전문 변호사의 도움을 받으세요.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>피의자의 경우 초기 대응이 결과를 좌우합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
