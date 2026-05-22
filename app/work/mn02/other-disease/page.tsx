import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import WorkNavTabs from '@/components/WorkNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '기타직업병 | 더드림직업병연구원',
  description: '기타 직업병 산재 전문. 진동장해, 이상기압 등.',
  keywords: '기타직업병,진동장해,이상기압,산재',
  alternates: { canonical: 'https://www.lawthedream.com/work/mn02/other-disease' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="기타직업병" site="work" />
      <WorkNavTabs current="/work/mn02/other-disease" />
      <div id="contents" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <section>
          <h3 className="con_tit">기타 직업병 유형</h3>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>진동장해: 착암기·체인톱 등 진동 공구 사용자의 말초혈관 장해</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>이상기압: 잠수사, 케이슨 작업자의 감압병</p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 12 }}>각막염, 피부질환 등 화학물질 노출에 의한 직업병</p>
        </section>
        <section aria-label="무료 상담 신청" style={{ marginTop: 60 }}>
          <ConsultForm />
        </section>
      </div>
    </>
  )
}
