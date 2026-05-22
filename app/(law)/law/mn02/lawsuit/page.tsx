import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '보험소송/합의 | 더드림교통형사센터',
  description: '교통사고 합의·소외합의·보험소송 전문 변호사. 최대 보상 실현. 02-6959-5053.',
  keywords: '교통사고합의,소외합의,보험소송,손해배상,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/lawsuit' },
}

const badge = (text: string, color = '#bf8553'): object => ({
  display: 'inline-block', background: color, color: '#fff',
  padding: '7px 22px', borderRadius: 30, fontSize: 16, fontWeight: 500, marginBottom: 18,
})
const cardStyle: object = {
  border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px',
  marginBottom: 24, background: '#fff',
}
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  const conTit = (text: string) => (
    <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{text}</h3>
  )
  const titLine = <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
  return (
    <>
      <SiteSubVisual title="보험소송 / 합의" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/lawsuit" />

      <div id="contents">
        {/* ── Section 1: 합의 Key Point ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('합의 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              {/* 회의 사진 */}
              <div style={{ flexShrink: 0, width: 360, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img
                  src="/law/mn02/img/mn02_04_img1.jpg"
                  alt="합의 상담"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('합의')}>합의</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  교통사고 발생 시 가해자와 피해자 간의 합의는 형사처벌 및 민사 손해배상 모두에 영향을 미치는 중요한 절차입니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  합의는 피해자의 피해를 금전으로 보상하고 가해자의 형사처벌을 감경받거나 면하는 방식으로 진행됩니다. 그러나 무리한 합의 요구나 불합리한 조건을 강요받는 경우 전문가의 도움이 필요합니다.
                </p>
                <p style={sTxt}>
                  특히 12대 중과실 사고의 경우 합의 여부와 관계없이 형사처벌을 받을 수 있으므로, 합의를 통해 처벌을 면할 수 있다는 잘못된 인식에서 벗어나 전문 변호사의 조언을 구하는 것이 중요합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: 소외합의 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 80px' }}>
          {conTit('소외합의')}
          {titLine}

          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 16 }}>
            <tbody>
              <tr>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 60, fontSize: 18, fontWeight: 500, width: '50%', borderRight: '1px solid #4a6080' }}>
                  단순합의
                </td>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 60, fontSize: 18, fontWeight: 500, width: '50%' }}>
                  특인제도 활용
                </td>
              </tr>
              {[
                [
                  '가해자와 피해자가 직접 합의하는 방식으로
합의서 작성 및 합의금 지급으로 진행됩니다.',
                  '보험회사의 특별인수 제도를 활용하여
합의를 진행하는 방식입니다.',
                ],
                [
                  '합의 후에도 추가 치료비 발생 시 청구가 어려울 수 있으므로
합의 전 충분한 치료를 받는 것이 중요합니다.',
                  '보험회사가 관여하여 합의를 중재하므로
분쟁 발생 시 보다 체계적인 해결이 가능합니다.',
                ],
                [
                  '합의서에는 향후 추가 청구를 포기한다는 내용이 포함되는 경우가 많으므로
신중하게 검토 후 서명해야 합니다.',
                  '특인제도는 모든 사고에 적용되는 것이 아니므로
사전에 해당 여부를 확인해야 합니다.',
                ],
              ].map(([left, right], i) => (
                <tr key={i}>
                  <td style={{ width: '50%', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f7f7f7', color: '#333', padding: '20px', whiteSpace: 'pre-line', lineHeight: 1.8 }}>{left}</td>
                  <td style={{ width: '50%', borderBottom: '1px solid #ddd', textAlign: 'center', color: '#333', padding: '20px', whiteSpace: 'pre-line', lineHeight: 1.8 }}>{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 3: 합의절차 ── */}
        <div style={{ background: '#f4f3f2', padding: '80px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            {conTit('합의절차')}
            {titLine}

            {/* 플로우차트 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 0 }}>
              {[
                { step: 'step01', label: '사고 발생', sub: '교통사고 접수 및
경위 파악' },
                { step: 'step02', label: '피해 파악', sub: '부상 정도 확인
및 치료 진행' },
                { step: 'step03', label: '합의 시도', sub: '가해자 측 또는
보험사 접촉' },
                { step: 'step04', label: '협상 진행', sub: '손해액 산정
및 협상' },
                { step: 'step05', label: '합의 결정', sub: '합의서 검토
및 서명' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', width: 140 }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: i % 2 === 0 ? '#bf8553' : '#253d5f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                      <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{item.step}</span>
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#222', marginBottom: 6 }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: '#666', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.sub}</p>
                  </div>
                  {i < 4 && (
                    <div style={{ width: 30, textAlign: 'center', color: '#aaa', fontSize: 20, flexShrink: 0, marginBottom: 30 }}>▶</div>
                  )}
                </div>
              ))}
            </div>

            {/* 분기 */}
            <div style={{ textAlign: 'center', margin: '40px 0 20px' }}>
              <div style={{ width: 1, height: 40, background: '#aaa', margin: '0 auto' }} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: 60 }}>
                <div style={{ width: 1, height: 30, background: '#aaa', transform: 'rotate(-30deg)', transformOrigin: 'bottom' }} />
                <div style={{ width: 1, height: 30, background: '#aaa', transform: 'rotate(30deg)', transformOrigin: 'bottom' }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
              <div style={{ background: '#bf8553', borderRadius: 8, padding: '24px 40px', textAlign: 'center', minWidth: 200 }}>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>합의 성사</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>합의서 작성 및<br />합의금 수령 후 사건 종결</p>
              </div>
              <div style={{ background: '#253d5f', borderRadius: 8, padding: '24px 40px', textAlign: 'center', minWidth: 200 }}>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>합의 결렬</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>민사소송 진행으로<br />법원을 통한 손해배상 청구</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
