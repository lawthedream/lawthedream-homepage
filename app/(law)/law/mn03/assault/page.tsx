import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '폭행/상해 | 더드림교통형사센터',
  description: '폭행·상해 형사사건 전문 변호사. 피해자·피의자 즉시 상담. 02-6959-5053.',
  keywords: '폭행,상해,폭행죄,상해죄,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/assault' },
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
const cardStyle: object = { border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="폭행 / 상해" site="law" bgImage="/law/mn03/img/sub_vs03.jpg" />
      <LawNavTabs current="/law/mn03/assault" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('폭행 / 상해 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 700, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_03_img1.jpg" alt="폭행 상해 사건"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('폭행 / 상해')}>폭행 / 상해</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  폭행죄는 사람의 신체에 대하여 유형력(물리적 힘)을 행사하는 행위이며, 상해죄는 폭행 등으로 인하여 피해자에게 신체적 상해 결과를 발생시키는 범죄입니다.
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <span style={badge('처벌기준', '#253d5f')}>처벌기준</span>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginTop: 16 }}>
              <thead>
                <tr>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '40%', borderRight: '1px solid #4a6080' }}>유형</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>처벌</td>
                </tr>
              </thead>
              <tbody>
                {[
                  ['단순 폭행', '2년 이하의 징역 또는 500만원 이하의 벌금'],
                  ['특수 폭행 (흉기 등 이용)', '5년 이하의 징역 또는 1,000만원 이하의 벌금'],
                  ['폭행치상', '7년 이하의 징역 또는 10년 이하의 자격정지'],
                  ['단순 상해', '7년 이하의 징역, 10년 이하 자격정지 또는 1,000만원 이하 벌금'],
                  ['중상해', '1년 이상 10년 이하의 징역'],
                  ['특수 상해', '1년 이상 10년 이하의 징역'],
                  ['상해치사', '3년 이상의 유기징역'],
                ].map(([type, punishment], i) => (
                  <tr key={i}>
                    <td style={{ padding: '16px 20px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333', fontWeight: 500 }}>{type}</td>
                    <td style={{ padding: '16px 20px', borderBottom: '1px solid #eee', color: '#333' }}>{punishment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={cardStyle}>
            <span style={badge('폭행·상해 대응전략')}>폭행·상해 대응전략</span>
            <p style={sTxt}>
              폭행·상해 사건에서는 피해자와의 합의가 처벌 수위에 큰 영향을 미칩니다. 특히 단순 폭행의 경우 반의사불벌죄이므로 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다.
            </p>
            <div style={sep} />
            <p style={sTxt}>
              반면 상해죄는 피해자와 합의하더라도 형사처벌이 가능합니다. 다만 합의는 양형에 있어 중요한 감경 사유로 작용하므로, 신속하게 피해자와 합의를 추진하는 것이 중요합니다.
            </p>
            <p style={sTxt}>
              정당방위·긴급피난 등의 위법성 조각 사유나 피해자의 도발이 있는 경우에는 이를 적극적으로 주장하여 처벌을 감경받을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
