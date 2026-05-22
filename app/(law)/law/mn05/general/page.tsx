import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '일반형사 | 더드림교통형사센터',
  description: '일반 형사 사건 전문 변호사. 사기, 횡령, 배임 등 각종 형사 사건 무혐의·불기소 목표.',
  keywords: '일반형사,사기,횡령,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/general' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="일반형사" site="law" />
      <LawNavTabs current="/law/mn05/general" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">일반형사 사건</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사기죄: 10년 이하 징역 또는 2000만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>횡령·배임죄: 5년 이하 징역 또는 1500만 원 이하 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>더드림은 형사 전문 변호사가 경찰 조사 단계부터 재판까지 전 과정을 함께합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
