import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import AccidentNavTabs from '@/components/AccidentNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '구성원소개 | 더드림중대재해센터',
  description: '더드림 중대재해센터 구성원. 산업안전 전문 변호사·노무사.',
  keywords: '구성원,산업안전,중대재해',
  alternates: { canonical: 'https://www.lawthedream.com/accident/mn01/members' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="구성원소개" site="accident" />
      <AccidentNavTabs current="/accident/mn01/members" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">구성원 소개</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>산업안전보건법 및 중대재해처벌법 전문 변호사와 공인노무사로 구성되어 있습니다.</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
