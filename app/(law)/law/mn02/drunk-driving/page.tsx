import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '음주/뺑소니 | 더드림교통형사센터',
  description: '음주운전·뺑소니 사건 전문 변호사. 면허 취소·정지, 형사처벌 대응. 02-6959-5053.',
  keywords: '음주운전,뺑소니,면허취소,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/drunk-driving' },
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
      <SiteSubVisual title="음주 / 뺑소니" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/drunk-driving" />

      <div id="contents">
        {/* ── Section 1: Key Point ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('음주 / 뺑소니 key point')}
          {titLine}

          {/* Card 1: 음주운전 */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('음주운전')}>음주운전</span>
                <p style={bigTxt}>
                  법률지식이 부족한 당사자들이 아무런 조치를 취하지 않은 채 시간을 보낸다면 구속수사 또는 법정구속이 될 수 있고 재판에서 실형을 선고 받을 수 있습니다.
                </p>
                <p style={sTxt}>
                  아무런 조치를 취하지 않은 채 실형을 선고받게 된다면 자신의 기록에 평생 남아있기 때문에 자신에게 엄청난 불이익을 받을 수 있습니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  음주·무면허를 하였지만 음주측정에 불응하였을 경우 형사처벌을 받을 수 있습니다. 삼진아웃으로 처분을 받았으나 또 다시 음주·무면허의 범죄를 저지를 경우 구속재판을 받을 수 있습니다. 집행유예를 선고 받은 후 집행유예 기간에 범죄를 저지르면 실형을 선고받습니다.
                </p>
                <p style={sTxt}>
                  집행유예를 선고 받으면 공무원의 경우 당연 퇴직의 사유이고, 일반 직장에 다니고 있어도 퇴직을 당하거나 승진의 기회가 박탈될 수 있습니다. 그렇기에 처음부터 되도록 변호인의 도움을 받는 것이 좋습니다.
                </p>
              </div>
              {/* 와인잔 사진 - img1 우측 상단 영역 크롭 */}
              <div style={{ flexShrink: 0, width: 360, height: 280, overflow: 'hidden', borderRadius: 4 }}>
                <img
                  src="/law/mn02/img/mn02_02_img1.jpg"
                  alt="음주운전 상담"
                  style={{ width: 'auto', height: '100%', objectFit: 'cover', objectPosition: 'right 15%', transform: 'scaleX(-1) translateX(-50%)' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: 뺑소니 */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              {/* 어두운 도로 사진 - img1 좌측 하단 영역 크롭 */}
              <div style={{ flexShrink: 0, width: 360, height: 280, overflow: 'hidden', borderRadius: 4, background: '#1a1a2e' }}>
                <img
                  src="/law/mn02/img/mn02_02_img1.jpg"
                  alt="뺑소니 사건"
                  style={{ width: 'auto', height: '100%', objectFit: 'cover', objectPosition: 'left 80%' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('뺑소니')}>뺑소니</span>
                <p style={bigTxt}>
                  뺑소니(도주차량)범죄는 가중처벌을 받기 때문에 일반 교통범죄보다 엄격하게 처벌하고 있고, 피해자의 상해정도와 사망으로 구분되어 엄격하게 처벌하고 있습니다.
                </p>
                <p style={sTxt}>또한 면허결격 기간이 4년에서 5년이기 때문에 반드시 전문가의 도움을 받아야 합니다.</p>
                <div style={sep} />
                <p style={sTxt}>
                  뺑소니(도주차량)범죄가 억울한 경우라면 무죄를 주장하여 효과적인 변론으로 무혐의처분 및 무죄를 선고받을 수 있습니다. 상해가 경미한 경우, 도주차량자가 인정되어도 무죄를 받을 수 있습니다.
                </p>
                <p style={sTxt}>
                  뺑소니(도주차량)범죄에 대해서 모두 인정한 경우라면 불구속재판으로 진행하여 실형을 면하고 집행유예 또는, 벌금형을 선고 받을 수 있습니다. 항소심에서 집행유예를 벌금형으로 감형 받을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: 음주운전 처벌기준 표 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 80px' }}>
          {conTit('음주운전')}
          {titLine}
          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 16 }}>
            <tbody>
              {[
                ['음주운전 또는 음주측정거부를 2회 이상 한 사람', '2년 이상 5년 이하의 징역이나 1천만원 이상 2천만원 이하의 벌금'],
                ['혈중알코올농도가 0.2% 이상인 사람', '2년 이상 5년 이하의 징역이나 1천만원 이상 2천만원 이하의 벌금'],
                ['혈중알코올농도가 0.08% 이상 0.2% 미만인 사람', '1년 이상 2년이하의 징역이나 500만원 이상 1천만원 이하의 벌금'],
                ['혈중알코올농도가 0.03% 이상 0.08% 미만인 사람', '1년 이하의 징역이나 500만원 이하의 벌금'],
              ].map(([left, right], i) => (
                <tr key={i}>
                  <td style={{ width: '50%', height: 80, borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f7f7f7', color: '#333', padding: '0 20px' }}>{left}</td>
                  <td style={{ width: '50%', height: 80, borderBottom: '1px solid #ddd', textAlign: 'center', color: '#333', padding: '0 20px' }}>{right}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 60, fontSize: 18, fontWeight: 500 }}>
                  교통사고처리 특례법 위반
                </td>
              </tr>
              {[
                ['사람을 상해에 이르게 한 사람', '1년 이상 15년 이하의 징역 또는 1천만원 이상 3천만원 이하의 벌금'],
                ['사람을 사망에 이르게 한 사람', '무기 또는 3년 이상의 징역'],
              ].map(([left, right], i) => (
                <tr key={i}>
                  <td style={{ width: '50%', height: 80, borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f7f7f7', color: '#333', padding: '0 20px' }}>{left}</td>
                  <td style={{ width: '50%', height: 80, borderBottom: '1px solid #ddd', textAlign: 'center', color: '#333', padding: '0 20px' }}>{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 3: 뺑소니 처벌받는 경우 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 40px' }}>
          {conTit('뺑소니 - 처벌받는 경우')}
          {titLine}
          <p style={{ textAlign: 'center', fontSize: 18, color: '#333', marginBottom: 10 }}>
            법원이 &ldquo;피해자를 구호하는 등 조치를 취하지 아니하고 도주한 때&rdquo;라고 판단하는 경우는
          </p>
          <p style={{ textAlign: 'center', fontSize: 15, color: '#666', lineHeight: 1.9, marginBottom: 50 }}>
            사고운전자가 사고로 인하여 피해자가 사상을 당한 사실을 인식하였음에도 불구하고,<br />
            피해자를 구호하는 등 필요한 조치를 이행하기 이전에 사고현장을 이탈하여 사고를 낸 자가 누구인지 확정할 수 없는 상태를<br />
            초래하는 경우로 보고 있습니다.
          </p>
        </div>

        {/* Gray 섹션: 4 조건 카드 */}
        <div style={{ background: '#f4f3f2', padding: '60px 20px 80px' }}>
          <p style={{ textAlign: 'center', fontSize: 22, fontWeight: 500, color: '#253d5f', marginBottom: 40 }}>뺑소니가 성립하기 위해서는</p>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', gap: 20 }}>
            {[
              { num: '01', color: '#bf8553', text: '교통사고로 인하여 피해자에게\n사상의 결과가 발생하는 경우' },
              { num: '02', color: '#253d5f', text: '사고 운전자가 피해자의 사상의 결과를 인식하는 경우' },
              { num: '03', color: '#bf8553', text: '피해자를 구호하거나 신고하는 등\n필요한 조치를 하지 않는 경우' },
              { num: '04', color: '#253d5f', text: '피해자에게 연락처나 인적사항을 제공하지 아니하여 사고를 낸 자가 누구인지 알 수 없는 상태로 현장을 이탈한 경우' },
            ].map(({ num, color, text }) => (
              <div key={num} style={{ flex: 1, background: '#fff', borderRadius: 12, padding: '36px 24px', textAlign: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: color, color: '#fff', fontSize: 17, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>{num}</div>
                <p style={{ fontSize: 16, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 15, color: '#555', lineHeight: 1.9, maxWidth: 900, margin: '50px auto 0' }}>
            따라서 교통사고 발생에 과실이 없거나 교통사고 발생 사실을 인식하지 못한 경우, 생명·신체에 대한 단순한 위험에 그치거나 극히 하찮은 상처로서 굳이 치료할 필요가 없어 건강상태를 침해하였다고 보기 어려운 경우에는 위 죄가 성립하지 않는다는 점을 알아두어야 합니다.
          </p>
        </div>

        {/* ── Section 4: 뺑소니 처벌수위 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px' }}>
          {conTit('뺑소니 처벌수위')}
          {titLine}
          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={sTxt}>
                  (특정범죄가중법 제5조의 3). 특정범죄 가중처벌 등에 관한 법률은 법률 이름 그대로 특정범죄에 대한 가중처벌을 목적으로 제정된 법률입니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  사람을 다치게 하거나 사망하게 하는 교통사고를 내고도 즉시 정차하여 구호하는 조치를 하지 아니하면, 특정범죄가중처벌법에 따라 피해자를 사망에 이르게 한 경우 무기 또는 5년 이상의 징역에, 피해자를 상해에 이르게 한 경우 1년 이상의 징역 또는 500만원이상 또는 3,000만원 이하의 벌금에 처해지게 됩니다.
                </p>
              </div>
              {/* 수갑 사진 - img4 우측 영역 */}
              <div style={{ flexShrink: 0, width: 360, height: 240, overflow: 'hidden', borderRadius: 4 }}>
                <img
                  src="/law/mn02/img/mn02_02_img4.jpg"
                  alt="처벌 관련"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
