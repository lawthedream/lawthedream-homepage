import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '산업안전보건법 위반 | 더드림교통형사센터',
  description: '산업재해·산업안전보건법 위반 형사 전문. 02-6959-5053.',
  keywords: '산업안전보건법,산재,형사변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/safety-law' },
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
      <SiteSubVisual title="산업안전보건법 위반" site="law" bgImage="/law/mn04/img/sub_vs04.jpg" />
      <LawNavTabs current="/law/mn04/safety-law" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('산업안전보건법 위반 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 500, height: 220, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn04/img/mn04_01_img1.jpg" alt="산업안전보건법"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('산업안전보건법')}>산업안전보건법</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  산업안전보건법은 산업 현장에서 근로자의 안전과 보건을 확보하기 위한 법률로, 사업주에게 안전·보건 조치 의무를 부과하고 있습니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>산업안전보건법 위반으로 근로자가 사망한 경우, 사업주는 7년 이하의 징역 또는 1억원 이하의 벌금에 처해질 수 있습니다. 중대재해처벌법 시행 이후에는 더욱 강화된 처벌이 적용됩니다.</p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 360, height: 240, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn04/img/mn04_01_img2.jpg" alt="산업현장 안전"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('중대재해처벌법', '#253d5f')}>중대재해처벌법</span>
                <p style={sTxt}>2022년 1월 27일 시행된 중대재해처벌법은 사업주 또는 경영책임자가 안전·보건 확보의무를 위반하여 근로자 등이 사망하거나 부상·질병에 이환된 경우 형사처벌하는 법률입니다.</p>
                <div style={sep} />
                <p style={sTxt}>
                  <strong>사망 시:</strong> 1년 이상의 징역 또는 10억원 이하의 벌금<br />
                  <strong>부상·질병 시:</strong> 7년 이하의 징역 또는 1억원 이하의 벌금
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('사업주 안전의무')}>사업주 안전의무</span>
                <p style={sTxt}>사업주는 추락, 붕괴, 전도, 협착 등 산업재해를 예방하기 위한 안전보건 조치를 취할 의무가 있습니다. 이를 위반하여 근로자가 사상을 입은 경우 산업안전보건법 위반 및 업무상과실치사상죄로 형사처벌을 받을 수 있습니다.</p>
                <div style={sep} />
                <p style={sTxt}>산업재해 발생 시 즉각적인 증거 보전과 전문 변호사의 법률 조력이 중요합니다. 더드림은 사업주·근로자 양측 모두의 입장에서 최적의 법률 서비스를 제공합니다.</p>
              </div>
              <div style={{ flexShrink: 0, width: 360, height: 240, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn04/img/mn04_01_img3.jpg" alt="산업현장 근로자"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: '#f4f3f2', padding: '60px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <p style={{ textAlign: 'center', fontSize: 17, color: '#253d5f', fontWeight: 600, marginBottom: 16 }}>
              산업안전보건법 위반 주요 처벌 기준
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, background: '#fff' }}>
              <thead>
                <tr>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '50%', borderRight: '1px solid #4a6080' }}>위반 유형</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>처벌</td>
                </tr>
              </thead>
              <tbody>
                {[
                  ['근로자 사망 야기 (산안법 위반)', '7년 이하 징역 또는 1억원 이하 벌금'],
                  ['근로자 부상·질병 야기', '5년 이하 징역 또는 5천만원 이하 벌금'],
                  ['안전보건 조치 위반', '5년 이하 징역 또는 5천만원 이하 벌금'],
                  ['중대재해처벌법 위반 (사망)', '1년 이상 징역 또는 10억원 이하 벌금'],
                  ['중대재해처벌법 위반 (부상·질병)', '7년 이하 징역 또는 1억원 이하 벌금'],
                ].map(([left, right], i) => (
                  <tr key={i}>
                    <td style={{ padding: '16px 20px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333', fontWeight: 500 }}>{left}</td>
                    <td style={{ padding: '16px 20px', borderBottom: '1px solid #eee', color: '#333' }}>{right}</td>
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
