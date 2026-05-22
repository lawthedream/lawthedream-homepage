import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '마약범죄 | 더드림교통형사센터',
  description: '마약 투약·소지·밀수 형사사건 전문. 신속한 대응으로 최선의 결과. 02-6959-5053.',
  keywords: '마약,마약투약,마약소지,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/drugs' },
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
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="마약범죄" site="law" bgImage="/law/mn05/img/sub_vs05.jpg" />
      <LawNavTabs current="/law/mn05/drugs" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('마약범죄 key point')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 420, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn05/img/mn05_03_img1.jpg" alt="마약 범죄"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('마약범죄')}>마약범죄</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  마약류 관련 범죄는 마약류 관리에 관한 법률에 의해 엄격하게 처벌됩니다. 마약류는 마약, 향정신성의약품, 대마로 구분되며, 각각 처벌 수위가 다릅니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>마약 범죄는 초범이라도 실형이 선고되는 경우가 많고, 전과 기록이 평생 남아 사회적·직업적으로 큰 불이익을 받을 수 있습니다. 조사 초기 단계부터 변호인의 조력을 받는 것이 중요합니다.</p>
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <span style={badge('마약류 종류별 처벌기준', '#253d5f')}>마약류 종류별 처벌기준</span>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginTop: 16 }}>
              <thead>
                <tr>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '25%', borderRight: '1px solid #4a6080' }}>마약류 종류</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '35%', borderRight: '1px solid #4a6080' }}>행위</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>처벌</td>
                </tr>
              </thead>
              <tbody>
                {[
                  ['마약 (헤로인·코카인 등)', '수출·수입·제조·매매·소지', '무기 또는 5년 이상 징역'],
                  ['마약', '투약·흡입', '10년 이하 징역 또는 1억원 이하 벌금'],
                  ['향정신성의약품 (필로폰 등)', '수출·수입·제조·매매', '무기 또는 5년 이상 징역'],
                  ['향정신성의약품', '투약·소지', '10년 이하 징역 또는 1억원 이하 벌금'],
                  ['대마', '수출·수입·제조', '5년 이상 징역'],
                  ['대마', '흡연·소지', '5년 이하 징역 또는 5천만원 이하 벌금'],
                ].map(([type, action, punishment], i) => (
                  <tr key={i}>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333', fontWeight: 500, textAlign: 'center' }}>{type}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', color: '#333', textAlign: 'center' }}>{action}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', color: '#333' }}>{punishment}</td>
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
