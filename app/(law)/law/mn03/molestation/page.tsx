import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '강제추행 | 더드림교통형사센터',
  description: '강제추행 형사사건 전문 변호사. 피해자·피의자 즉시 상담. 02-6959-5053.',
  keywords: '강제추행,성추행,강제추행변호사,성범죄변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/molestation' },
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
      <SiteSubVisual title="강제추행" site="law" bgImage="/law/mn03/img/sub_vs03.jpg" />
      <LawNavTabs current="/law/mn03/molestation" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('강제추행 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 320, height: 320, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_02_img1.jpg" alt="강제추행"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('강제추행')}>강제추행</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  강제추행이란 폭행 또는 협박으로 사람에 대하여 추행을 한 행위를 말하며, 형법 제298조에 의해 10년 이하의 징역 또는 1,500만원 이하의 벌금에 처해집니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  강제추행죄는 친고죄가 폐지된 이후 피해자의 고소 없이도 수사기관이 직권으로 수사를 개시할 수 있게 되었습니다. 따라서 신고 즉시 수사가 진행될 수 있습니다.
                </p>
                <p style={sTxt}>
                  강제추행 사건은 처음 대응이 매우 중요합니다. 경찰 조사를 받기 전에 반드시 변호사와 상담하여 불필요한 자백이나 불리한 진술을 하지 않도록 해야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('강제추행 처벌기준', '#253d5f')}>강제추행 처벌기준</span>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginTop: 16 }}>
                  <tbody>
                    {[
                      ['일반 강제추행', '10년 이하 징역 또는 1,500만원 이하 벌금'],
                      ['13세 미만 미성년자 강제추행', '5년 이상의 유기징역 또는 3,000만원 이상 5,000만원 이하 벌금'],
                      ['위계·위력에 의한 미성년자 강제추행', '5년 이상의 유기징역'],
                      ['특수강제추행 (흉기 등 위험한 물건 이용)', '3년 이상의 유기징역'],
                      ['장애인에 대한 강제추행', '10년 이하 징역 또는 1,500만원 이하 벌금'],
                    ].map(([left, right], i) => (
                      <tr key={i}>
                        <td style={{ width: '45%', padding: '16px 20px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333' }}>{left}</td>
                        <td style={{ padding: '16px 20px', borderBottom: '1px solid #eee', color: '#333' }}>{right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('강제추행 대응전략')}>강제추행 대응전략</span>
                <p style={sTxt}>
                  강제추행 혐의를 받고 있는 경우, 초기 수사단계에서의 전략적 대응이 사건의 결과를 크게 좌우합니다. 진술 방향 설정, 증거 수집 및 분석, 피해자와의 합의 교섭 등 전문적인 법률 서비스가 필요합니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  무죄 주장이 가능한 경우: 피해자의 진술 불일치, CCTV 등 객관적 증거로 혐의가 부정되는 경우, 상호 동의에 의한 행위임을 입증할 수 있는 경우 등에서는 적극적으로 무죄를 다툴 수 있습니다.
                </p>
              </div>
              <div style={{ flexShrink: 0, width: 320, height: 220, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_02_img4.jpg" alt="법원 판결"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
