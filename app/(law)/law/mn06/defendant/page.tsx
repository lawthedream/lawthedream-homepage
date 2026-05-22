import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '피의자/피고인 | 더드림교통형사센터',
  description: '피의자·피고인을 위한 형사 변호 안내. 즉시 상담 02-6959-5053.',
  keywords: '피의자,피고인,형사변호',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/defendant' },
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
      <SiteSubVisual title="피의자 / 피고인" site="law" bgImage="/law/mn06/img/sub_vs06.jpg" />
      <LawNavTabs current="/law/mn06/defendant" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('피의자 / 피고인 지원')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 480, height: 240, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn06/img/mn06_02_img1.jpg" alt="피의자 변호"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('피의자')}>피의자</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  피의자란 범죄의 혐의를 받아 수사기관(경찰·검찰)에서 조사를 받는 사람을 말합니다. 수사 단계에서의 진술은 이후 재판에서 중요한 증거로 사용되므로 초기 대응이 매우 중요합니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>피의자 신문 시 진술 거부권(묵비권)이 있으며, 변호인의 조력을 받을 권리가 있습니다. 특히 불리한 진술은 나중에 번복하기 매우 어려우므로 경찰 출석 전 반드시 변호사와 상담하시기 바랍니다.</p>
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', background: '#fff' }}>
            <span style={badge('피고인', '#253d5f')}>피고인</span>
            <p style={sTxt}>피고인이란 검사로부터 공소가 제기된 사람으로, 기소 이후 재판을 받는 당사자를 말합니다. 공판 절차에서는 공소사실에 대한 방어, 유리한 증거 제출, 증인 신문 등을 통해 적극적으로 방어해야 합니다.</p>
            <div style={sep} />
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[
                { title: '불구속 재판', desc: '구속 상태에서 재판을 받는 것보다 불구속으로 재판을 받는 것이 유리합니다. 보석 신청 등을 통해 석방을 추진합니다.' },
                { title: '증거 조사', desc: '검사가 제출한 증거에 대한 반박과 피고인에게 유리한 증거를 적극 수집·제출합니다.' },
                { title: '최후 진술', desc: '재판의 최후 단계에서 피고인의 반성과 선처를 구하는 진술을 효과적으로 준비합니다.' },
                { title: '항소·상고', desc: '1심 판결에 불복하는 경우 항소·상고를 통해 더 나은 결과를 도모합니다.' },
              ].map(({ title, desc }, i) => (
                <div key={i} style={{ flex: 1, minWidth: 200, padding: '20px', background: '#f7f7f7', borderRadius: 4, borderTop: `3px solid ${i % 2 === 0 ? '#bf8553' : '#253d5f'}` }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#222', marginBottom: 8 }}>{title}</p>
                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
