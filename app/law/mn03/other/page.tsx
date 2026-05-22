import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '기타 성범죄 | 더드림교통형사센터',
  description: '카메라 촬영, 통신매체 이용 음란, 스토킹 등 기타 성범죄 전문 대응.',
  keywords: '카메라촬영,통신매체음란,스토킹,성범죄',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/other' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="기타 성범죄" site="law" />
      <LawNavTabs current="/law/mn03/other" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">기타 성범죄 유형</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>카메라 등 이용 촬영(몰카): 5년 이하 징역 또는 3000만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>통신매체 이용 음란: 2년 이하 징역 또는 500만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>스토킹 범죄: 3년 이하 징역 또는 3000만 원 이하 벌금</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
