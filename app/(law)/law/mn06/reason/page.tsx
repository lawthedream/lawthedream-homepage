import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '변호사 선임사유 | 더드림교통형사센터',
  description: '형사 변호사가 필요한 이유와 국선변호인 제도 안내. 02-6959-5053.',
  keywords: '변호사선임,국선변호인,형사절차',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/reason' },
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
      <SiteSubVisual title="변호사 선임사유" site="law" bgImage="/law/mn06/img/sub_vs06.jpg" />
      <LawNavTabs current="/law/mn06/reason" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('변호사가 필요한 이유')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 300, height: 360, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn06/img/mn06_01_img1.jpg" alt="정의"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('변호인의 조력을 받을 권리')}>변호인의 조력을 받을 권리</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  대한민국 헌법 제12조 제4항은 "누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다"고 규정하고 있습니다.
                </p>
                <div style={sep} />
                {[
                  { num: '01', title: '초기 수사 단계 대응', desc: '수사기관의 조사에서 불리한 진술을 하지 않도록 조언하고 적법한 절차가 진행되도록 감시합니다.' },
                  { num: '02', title: '증거 수집 및 분석', desc: '유리한 증거를 발굴하고 불리한 증거에 대한 반박 논리를 개발합니다.' },
                  { num: '03', title: '양형 전략 수립', desc: '피해자와의 합의, 반성문, 사회봉사 등 최적의 양형 전략을 세웁니다.' },
                  { num: '04', title: '구속 방지', desc: '구속 전 피의자심문(구속영장실질심사)에서 불구속 의견을 강력히 주장합니다.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 36, height: 36, background: '#bf8553', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{num}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: '#222', marginBottom: 4 }}>{title}</p>
                      <p style={{ fontSize: 14, color: '#555' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('국선변호인 vs 사선변호인', '#253d5f')}>국선변호인 vs 사선변호인</span>
                <p style={sTxt}>국선변호인은 피고인이 변호인을 선임하지 못하는 경우 법원이 직권으로 선정하는 변호인입니다. 그러나 국선변호인은 담당 사건이 많아 개별 사건에 충분한 시간을 투자하기 어려운 경우가 있습니다.</p>
                <div style={sep} />
                <p style={sTxt}>사선변호인은 당사자가 직접 선임한 변호인으로, 사건 초기부터 수사·재판 전 단계에 걸쳐 밀착 서비스를 제공합니다. 특히 복잡한 사건이나 중형이 예상되는 사건에서는 사선변호인의 역할이 결과에 큰 차이를 만들 수 있습니다.</p>
              </div>
              <div style={{ flexShrink: 0, width: 300, height: 280, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn06/img/mn06_01_img2.jpg" alt="변호사"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
