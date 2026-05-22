import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '재산범죄 | 더드림교통형사센터',
  description: '사기·횡령·배임 등 재산범죄 전문 변호사. 즉시 상담. 02-6959-5053.',
  keywords: '사기,횡령,배임,재산범죄,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/property' },
}

const badge = (text: string, color = '#bf8553'): object => ({
  display: 'inline-block', background: color, color: '#fff',
  padding: '7px 22px', borderRadius: 30, fontSize: 16, fontWeight: 500, marginBottom: 18,
})
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
      <SiteSubVisual title="재산범죄" site="law" bgImage="/law/mn05/img/sub_vs05.jpg" />
      <LawNavTabs current="/law/mn05/property" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('재산범죄 key point')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 420, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn05/img/mn05_04_img1.jpg" alt="재산범죄"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('재산범죄')}>재산범죄</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  재산범죄는 타인의 재산에 대한 범죄로 사기, 횡령, 배임, 절도, 강도 등이 이에 해당합니다. 특히 사기죄는 우리 사회에서 가장 빈번하게 발생하는 재산범죄입니다.
                </p>
                <p style={sTxt}>재산범죄는 피해 금액에 따라 형사처벌 수위가 달라지며, 특정경제범죄가중처벌법이 적용되는 경우 훨씬 무거운 처벌을 받을 수 있습니다.</p>
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <span style={badge('주요 재산범죄 처벌기준', '#253d5f')}>주요 재산범죄 처벌기준</span>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginTop: 16 }}>
              <thead>
                <tr>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '20%', borderRight: '1px solid #4a6080' }}>범죄 유형</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '40%', borderRight: '1px solid #4a6080' }}>기본 처벌</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>특경법 적용 (50억 이상)</td>
                </tr>
              </thead>
              <tbody>
                {[
                  ['사기', '10년 이하 징역 또는 2천만원 이하 벌금', '3년 이상 유기징역 (무기 가능)'],
                  ['횡령', '5년 이하 징역 또는 1,500만원 이하 벌금', '3년 이상 유기징역 (무기 가능)'],
                  ['배임', '5년 이하 징역 또는 1,500만원 이하 벌금', '3년 이상 유기징역 (무기 가능)'],
                  ['절도', '6년 이하 징역 또는 1천만원 이하 벌금', '특경법 미적용'],
                  ['강도', '3년 이상 유기징역', '특경법 미적용'],
                ].map(([type, basic, special], i) => (
                  <tr key={i}>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333', fontWeight: 600, textAlign: 'center' }}>{type}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', color: '#333' }}>{basic}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', color: '#333' }}>{special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
