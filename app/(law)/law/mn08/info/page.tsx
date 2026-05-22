import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '카톡상담 | 더드림교통형사센터',
  description: '더드림 교통형사센터 카카오톡 상담.',
  keywords: '카카오톡상담,카톡,형사상담',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn08/info' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="카톡상담" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn08/info" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">카카오톡 상담</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>카카오톡 채널 @더드림법률사무소로 편리하게 상담하세요.</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>24시간 메시지 접수 가능, 빠른 시간 내 답변드립니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
