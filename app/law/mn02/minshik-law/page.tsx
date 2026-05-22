import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '민식이법 | 더드림교통형사센터',
  description: '민식이법(어린이보호구역 사고) 전문 변호사. 스쿨존 교통사고 법률 대응.',
  keywords: '민식이법,스쿨존,어린이보호구역,교통사고',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/minshik-law' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="민식이법" site="law" />
      <LawNavTabs current="/law/mn02/minshik-law" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">민식이법이란</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>어린이보호구역(스쿨존) 내 교통사고로 어린이를 사상한 경우 가중처벌하는 법률</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>사망 시 무기 또는 3년 이상 징역, 상해 시 1년 이상 15년 이하 징역 또는 500만~3000만 원 벌금</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>즉시 전문 변호사를 선임해 사건 초기부터 적극 대응해야 합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
