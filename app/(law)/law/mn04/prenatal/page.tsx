import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '산전·산후관리 | 더드림교통형사센터',
  description: '산전 산후 법적 분쟁 전문. 02-6959-5053.',
  keywords: '산전산후,법률상담',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/prenatal' },
}

const conTit = (text: string) => (
  <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{text}</h3>
)
const titLine = (
  <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
)
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="산전·산후관리" site="law" bgImage="/law/mn04/img/sub_vs04.jpg" />
      <LawNavTabs current="/law/mn04/prenatal" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('산전·산후관리 key point')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 20 }}>
              산전·산후관리는 임산부의 건강권과 태아의 권리 보호, 그리고 의료과실 등과 관련된 법적 분쟁을 다루는 분야입니다.
            </p>
            <p style={sTxt}>임신·출산 과정에서 발생하는 의료사고, 직장 내 불이익 처우, 모성보호 관련 법률 위반 등 다양한 법적 문제에 대해 전문적인 법률 서비스를 제공합니다.</p>
            <p style={sTxt}>
              <strong>모성보호 관련 주요 법률:</strong>
            </p>
            {[
              '근로기준법 제74조: 임산부 보호(출산전후휴가 90일)',
              '남녀고용평등법 제19조: 육아휴직 제도',
              '남녀고용평등법 제11조: 임신·출산을 이유로 한 해고 금지',
              '모자보건법: 임산부 및 영유아 보건의료 서비스',
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ width: 6, height: 6, background: '#bf8553', borderRadius: '50%', marginTop: 10, flexShrink: 0 }} />
                <p style={sTxt}>{t}</p>
              </div>
            ))}
            <p style={sTxt}>임신·출산과 관련된 법적 문제나 의료사고 발생 시 즉시 전문 변호사와 상담하시기 바랍니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}
