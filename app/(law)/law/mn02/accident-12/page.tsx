import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '12대 중과실사고 | 더드림교통형사센터',
  description: '12대 중과실 교통사고 전문 변호사. 신호위반, 중앙선 침범, 음주운전 등 중과실 사고 법률 상담.',
  keywords: '12대중과실,교통사고,형사처벌,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/accident-12' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="12대 중과실사고" site="law" />
      <LawNavTabs current="/law/mn02/accident-12" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">12대 중과실사고란</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>신호·지시 위반, 중앙선 침범, 과속(20km/h 초과), 앞지르기 방법 위반, 철길건널목 통과 방법 위반, 횡단보도 사고, 무면허 운전, 음주운전(0.03% 이상), 보도 침범, 승객 추락방지 의무 위반, 어린이보호구역 안전운전 의무 위반, 자동차 화물 추락 방지 위반</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>위 12가지 중과실에 해당하면 피해자와 합의해도 공소 취소가 어렵습니다. 즉각적인 변호사 선임이 중요합니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
