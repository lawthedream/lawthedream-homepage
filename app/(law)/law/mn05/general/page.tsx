import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '일반형사 | 더드림교통형사센터',
  description: '일반 형사사건 전문 변호사. 무죄·집행유예·감형 전략. 02-6959-5053.',
  keywords: '일반형사,형사변호사,형사사건',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn05/general' },
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
      <SiteSubVisual title="일반형사" site="law" bgImage="/law/mn05/img/sub_vs05.jpg" />
      <LawNavTabs current="/law/mn05/general" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('일반형사 key point')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 460, height: 240, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn05/img/mn05_01_img1.jpg" alt="형사 법률"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('일반형사')}>일반형사</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  형사사건은 국가가 범죄 행위에 대하여 형벌권을 행사하는 절차입니다. 수사 개시부터 기소, 공판, 선고까지 각 단계에서 전문 변호사의 조력이 필수적입니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>형사사건에서 변호인의 조력을 받을 권리는 헌법상 기본권입니다. 초기 수사 단계에서부터 변호인의 도움을 받는 것이 유리한 결과를 이끌어내는 데 매우 중요합니다.</p>
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('더드림의 형사변호 전략', '#253d5f')}>더드림의 형사변호 전략</span>
                {[
                  { t: '무죄 주장', d: '혐의 사실이 없거나 증거가 불충분한 경우 적극적으로 무죄를 다툽니다.' },
                  { t: '집행유예 획득', d: '실형을 피하고 집행유예를 받을 수 있도록 양형 전략을 수립합니다.' },
                  { t: '감형 전략', d: '피해자와의 합의, 진지한 반성, 사회적 유대관계 등을 적극 활용합니다.' },
                  { t: '구속 방지', d: '영장심사 단계에서 구속을 막아 불구속 수사·재판을 진행합니다.' },
                ].map(({ t, d }, i) => (
                  <div key={i} style={{ marginBottom: 16, padding: '16px 20px', background: '#f7f7f7', borderRadius: 4, borderLeft: '4px solid #bf8553' }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#222', marginBottom: 6 }}>{t}</p>
                    <p style={{ fontSize: 14, color: '#555' }}>{d}</p>
                  </div>
                ))}
              </div>
              <div style={{ flexShrink: 0, width: 300, height: 360, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn05/img/mn05_01_img2.jpg" alt="정의의 여신"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
