import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '폭행상해 | 더드림교통형사센터',
  description: '폭행·상해 형사사건 전문 변호사. 피해자·피의자 즉시 상담. 02-6959-5053.',
  keywords: '폭행,상해,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/violence' },
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
      <SiteSubVisual title="폭행 / 상해" site="law" bgImage="/law/mn05/img/sub_vs05.jpg" />
      <LawNavTabs current="/law/mn05/violence" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('폭행 / 상해 key point')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 420, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn05/img/mn05_02_img1.jpg" alt="폭행 상해"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('폭행 / 상해')}>폭행 / 상해</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  폭행·상해 사건은 우리 주변에서 가장 빈번하게 발생하는 형사사건 중 하나입니다. 단순 폭행에서 중상해, 특수폭행까지 다양한 유형이 있으며 각각 처벌 수위가 다릅니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>폭행죄(형법 제260조)는 반의사불벌죄로 피해자가 처벌을 원하지 않으면 형사처벌이 불가능합니다. 반면 상해죄(형법 제257조)는 피해자와의 합의와 무관하게 처벌받을 수 있습니다.</p>
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <span style={badge('처벌기준', '#253d5f')}>처벌기준</span>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginTop: 16 }}>
              <thead>
                <tr>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '35%', borderRight: '1px solid #4a6080' }}>유형</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>처벌</td>
                </tr>
              </thead>
              <tbody>
                {[
                  ['단순 폭행 (반의사불벌)', '2년 이하 징역 또는 500만원 이하 벌금'],
                  ['특수 폭행 (흉기 등)', '5년 이하 징역 또는 1천만원 이하 벌금'],
                  ['단순 상해', '7년 이하 징역, 10년 이하 자격정지 또는 1천만원 이하 벌금'],
                  ['중상해', '1년 이상 10년 이하 징역'],
                  ['특수 상해', '1년 이상 10년 이하 징역'],
                  ['상해치사', '3년 이상 유기징역'],
                  ['폭행치사', '3년 이상 유기징역 또는 무기징역'],
                ].map(([left, right], i) => (
                  <tr key={i}>
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333', fontWeight: 500 }}>{left}</td>
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #eee', color: '#333' }}>{right}</td>
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
