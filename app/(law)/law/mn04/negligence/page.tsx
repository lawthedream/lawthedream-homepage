import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '업무상 과실치사상 | 더드림교통형사센터',
  description: '업무상 과실치사상 형사 전문 변호사. 02-6959-5053.',
  keywords: '업무상과실,과실치사,형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn04/negligence' },
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
      <SiteSubVisual title="업무상 과실치사상" site="law" bgImage="/law/mn04/img/sub_vs04.jpg" />
      <LawNavTabs current="/law/mn04/negligence" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('업무상 과실치사상 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 500, height: 220, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn04/img/mn04_02_img1.jpg" alt="업무상 과실치사상"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('업무상 과실치사상')}>업무상 과실치사상</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  업무상 과실치사상이란 업무상 필요한 주의를 게을리하여 사람을 사망 또는 상해에 이르게 한 범죄를 말합니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>형법 제268조에 따라 업무상 과실 또는 중과실로 사람을 사상에 이르게 한 경우 5년 이하의 금고 또는 2천만원 이하의 벌금에 처해집니다.</p>
                <p style={sTxt}>업무상 과실치사상은 교통사고, 의료사고, 건설현장사고 등 다양한 업무 환경에서 발생할 수 있으며, 각 상황에 맞는 전문적인 법률 대응이 필요합니다.</p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('성립 요건 및 처벌', '#253d5f')}>성립 요건 및 처벌</span>
                {[
                  { title: '업무상 주의의무 존재', desc: '해당 업무에 종사하는 자로서 요구되는 주의의무가 있어야 합니다.' },
                  { title: '주의의무 위반', desc: '업무상 요구되는 주의를 게을리한 과실이 있어야 합니다.' },
                  { title: '결과 발생', desc: '과실로 인해 사람이 사망하거나 상해를 입어야 합니다.' },
                  { title: '인과관계', desc: '과실 행위와 결과 사이에 인과관계가 있어야 합니다.' },
                ].map(({ title, desc }, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 16, padding: '16px 20px', background: '#f7f7f7', borderRadius: 4 }}>
                    <div style={{ width: 28, height: 28, background: '#253d5f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{i + 1}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: '#222', marginBottom: 4 }}>{title}</p>
                      <p style={{ fontSize: 14, color: '#555' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flexShrink: 0, width: 320, height: 300, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn04/img/mn04_02_img2.jpg" alt="산업현장 근로자"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
