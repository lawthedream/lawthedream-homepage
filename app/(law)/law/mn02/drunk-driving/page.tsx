import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '음주/뺑소니 | 더드림교통형사센터',
  description: '음주운전·뺑소니 사건 전문 변호사. 면허 취소·정지, 형사처벌 대응.',
  keywords: '음주운전,뺑소니,면허취소,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/drunk-driving' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="음주/뺑소니" site="law" />
      <LawNavTabs current="/law/mn02/drunk-driving" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">음주운전·뺑소니 처벌 기준</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>혈중알코올농도 0.03% 이상 → 면허 정지 또는 취소, 형사처벌</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사고 후 도주(뺑소니) → 특가법 적용, 최대 무기징역</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>2회 이상 적발 시 가중처벌 — 즉시 전문 변호사와 상담하세요.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
