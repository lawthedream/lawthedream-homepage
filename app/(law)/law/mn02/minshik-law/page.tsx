import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '민식이법 | 더드림교통형사센터',
  description: '민식이법(스쿨존 교통사고) 전문 변호사. 어린이보호구역 사고 형사처벌 대응. 02-6959-5053.',
  keywords: '민식이법,스쿨존사고,어린이보호구역,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/minshik-law' },
}

const badge = (text: string, color = '#bf8553'): object => ({
  display: 'inline-block', background: color, color: '#fff',
  padding: '7px 22px', borderRadius: 30, fontSize: 16, fontWeight: 500, marginBottom: 18,
})
const cardStyle: object = {
  border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px',
  marginBottom: 24, background: '#fff',
}
const bigTxt: object = { fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="민식이법" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/minshik-law" />

      <div id="contents">
        {/* ── Section 1: Key Point ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>민식이법 key point</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />

          {/* Key point card with hammer bg image */}
          <div style={{ ...cardStyle, position: 'relative', overflow: 'hidden', minHeight: 300 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/law/mn02/img/mn02_03_img1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={badge('민식이법')}>민식이법</span>
              <p style={bigTxt}>
                2019년 9월 어린이보호구역(스쿨존)에서 교통사고로 어린이가 사망하는 사건이 발생하여 큰 사회적 충격을 준 사고를 계기로 만들어진 법률입니다.
              </p>
              <p style={sTxt}>
                민식이법은 도로교통법 개정안과 특정범죄 가중처벌 등에 관한 법률 개정안 두 가지로 구성되며, 어린이보호구역 내 과속단속카메라 및 신호등 설치를 의무화하고, 어린이보호구역 내에서 어린이를 사상케 한 경우 가중처벌합니다.
              </p>
              <div style={sep} />
              <p style={sTxt}>
                민식이법으로 인해 어린이보호구역 내에서 어린이를 사망케 한 경우 무기 또는 3년 이상의 징역에 처할 수 있으며, 상해를 입힌 경우에도 1년 이상 15년 이하의 징역 또는 500만원 이상 3천만원 이하의 벌금에 처할 수 있습니다.
              </p>
              <p style={sTxt}>
                이처럼 가중된 처벌을 받을 수 있으므로 스쿨존 사고 발생 시 반드시 전문 변호사의 도움을 받으시기 바랍니다.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 2: 스쿨존사고 민식이법 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 80px' }}>
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>스쿨존사고 - 민식이법</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              {/* 사고 사진 */}
              <div style={{ flexShrink: 0, width: 360, height: 280, overflow: 'hidden', borderRadius: 4 }}>
                <img
                  src="/law/mn02/img/mn02_03_img2.jpg"
                  alt="스쿨존 교통사고"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('스쿨존사고')}>스쿨존사고</span>
                <p style={bigTxt}>
                  어린이보호구역(스쿨존)이란 초등학교 및 유치원, 어린이집, 학원 등의 시설 주변 도로 중 일정 구간을 어린이보호구역으로 지정합니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  어린이보호구역에서는 자동차 등의 통행속도를 시속 30킬로미터 이내로 제한할 수 있습니다. 어린이보호구역 내 사고는 일반 교통사고와 달리 가중처벌 규정이 적용됩니다.
                </p>
                <p style={sTxt}>
                  특히 어린이보호구역에서 어린이를 상대로 한 교통사고는 12대 중과실에 해당하는 경우가 많아 합의 여부와 관계없이 형사처벌을 받을 수 있습니다. 사고 즉시 전문가의 법률 조언을 받는 것이 중요합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: 민식이법 법안 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 80px' }}>
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>민식이법 법안</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />

          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 16, marginBottom: 32 }}>
            <tbody>
              <tr>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 60, fontSize: 18, fontWeight: 500, width: '50%', borderRight: '1px solid #4a6080' }}>
                  도로교통법 개정안
                </td>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 60, fontSize: 18, fontWeight: 500, width: '50%' }}>
                  특정범죄 가중처벌 등에 관한 법률 개정안
                </td>
              </tr>
              {[
                [
                  '어린이보호구역 내 신호등 및 과속단속카메라 설치 의무화',
                  '어린이보호구역 내 어린이 사망사고 발생 시
무기 또는 3년 이상의 징역',
                ],
                [
                  '어린이보호구역 내 안전시설 확충 및 관리 강화',
                  '어린이보호구역 내 어린이 상해사고 발생 시
1년 이상 15년 이하 징역 또는 500만원~3천만원 벌금',
                ],
              ].map(([left, right], i) => (
                <tr key={i}>
                  <td style={{ width: '50%', minHeight: 80, borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f7f7f7', color: '#333', padding: '20px', whiteSpace: 'pre-line' }}>{left}</td>
                  <td style={{ width: '50%', minHeight: 80, borderBottom: '1px solid #ddd', textAlign: 'center', color: '#333', padding: '20px', whiteSpace: 'pre-line' }}>{right}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 특정범죄 가중처벌법 신설 내용 */}
          <div style={{ background: '#f4f3f2', borderRadius: 4, padding: '36px 40px' }}>
            <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: '#253d5f', marginBottom: 20 }}>
              특정범죄 가중처벌법에 신설된 내용
            </p>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 2, textAlign: 'center' }}>
              자동차 등의 운전자가 어린이보호구역에서 어린이의 안전에 유의하면서 운전하여야 할 의무를 위반하여<br />
              어린이에게 교통사고처리특례법 제3조 제1항의 죄를 범한 경우에는<br />
              다음 각 호의 구분에 따라 가중처벌한다.
            </p>
            <div style={{ display: 'flex', gap: 20, marginTop: 30, justifyContent: 'center' }}>
              <div style={{ background: '#fff', border: '1px solid #e2e2e2', borderRadius: 4, padding: '24px 32px', textAlign: 'center', flex: 1, maxWidth: 400 }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#bf8553', marginBottom: 10 }}>어린이를 사망에 이르게 한 경우</p>
                <p style={{ fontSize: 15, color: '#333' }}>무기 또는 3년 이상의 징역</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid #e2e2e2', borderRadius: 4, padding: '24px 32px', textAlign: 'center', flex: 1, maxWidth: 400 }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#253d5f', marginBottom: 10 }}>어린이를 상해에 이르게 한 경우</p>
                <p style={{ fontSize: 15, color: '#333' }}>1년 이상 15년 이하의 징역 또는<br />500만원 이상 3천만원 이하의 벌금</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 4: 민식이법 형량 ── */}
        <div style={{ background: '#f4f3f2', padding: '80px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>민식이법 형량</h3>
            <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />

            <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* 형량 원 */}
              <div style={{ textAlign: 'center', flex: 1, maxWidth: 480 }}>
                <div style={{ width: 160, height: 160, borderRadius: '50%', background: '#bf8553', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', boxShadow: '0 6px 20px rgba(191,133,83,0.3)' }}>
                  <span style={{ color: '#fff', fontSize: 24, fontWeight: 700 }}>형량</span>
                </div>
                <p style={{ fontSize: 16, color: '#333', lineHeight: 2 }}>
                  어린이 <strong>사망</strong>: 무기 또는 <strong>3년 이상</strong>의 징역<br />
                  어린이 <strong>상해</strong>: <strong>1년 이상 15년 이하</strong>의 징역<br />
                  또는 500만원 이상 3천만원 이하의 벌금
                </p>
              </div>

              {/* 처벌 원 */}
              <div style={{ textAlign: 'center', flex: 1, maxWidth: 480 }}>
                <div style={{ width: 160, height: 160, borderRadius: '50%', background: '#253d5f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', boxShadow: '0 6px 20px rgba(37,61,95,0.3)' }}>
                  <span style={{ color: '#fff', fontSize: 24, fontWeight: 700 }}>처벌</span>
                </div>
                <p style={{ fontSize: 16, color: '#333', lineHeight: 2 }}>
                  어린이보호구역 내에서 <strong>안전의무 위반</strong>으로<br />
                  어린이를 사상케 한 경우 적용되며,<br />
                  <strong>합의와 관계없이</strong> 형사처벌을 받을 수 있습니다.
                </p>
              </div>
            </div>

            <p style={{ textAlign: 'center', fontSize: 15, color: '#555', lineHeight: 1.9, maxWidth: 900, margin: '50px auto 0' }}>
              민식이법은 운전자가 어린이보호구역에서 제한속도(30km/h)를 준수하고 안전의무를 다했음에도 사고가 발생한 경우에는 적용되지 않을 수 있습니다.
              따라서 사고 경위와 운전자의 과실 여부를 면밀히 검토하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
