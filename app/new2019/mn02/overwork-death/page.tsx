import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '과로사 | 더드림법률사무소',
  description:
    '과로사(뇌심혈관 질환) 산업재해 전문 상담. 뇌실질내출혈·지주막하출혈·뇌경색·심근경색 등 대상질병과 인정기준을 안내합니다. 02-6959-5053',
  keywords: '과로사, 뇌심혈관질환, 산재, 과로사 산재인정, 심근경색 산재, 뇌경색 산재',
}

const diseases = [
  { num: '01', title: '뇌실질내출혈', desc: '뇌 척수액이 차 있는 뇌실질내에 출혈이 발생한 것. 가장 흔한 원인은 고혈압이며 다량 출혈 시 두통·경련·사지마비·의식불명 등의 증상이 발생합니다.' },
  { num: '02', title: '지주막(거미막)하출혈', desc: '뇌의 지주막 아래 공간에 뇌출혈이 발생하는 질환. 주로 뇌동맥류의 파열에 의하여 발생하며 갑작스럽고 극심한 두통이 특징적 증상입니다.' },
  { num: '03', title: '뇌경색', desc: '뇌혈관이 막혀 뇌에 혈액 공급이 차단되어 뇌 조직이 괴사하는 질환. 갑작스러운 언어장애, 반신마비, 시야장애 등이 나타납니다.' },
  { num: '04', title: '심근경색증', desc: '관상동맥이 막혀 심근에 혈액 공급이 중단되어 심근 조직이 괴사하는 질환. 심한 흉통, 호흡곤란, 식은땀 등의 증상이 갑자기 발생합니다.' },
  { num: '05', title: '해리성 대동맥류', desc: '대동맥 내막에 균열이 생겨 혈액이 내막과 중막 사이로 파고들어 혈관벽이 분리되는 질환. 신속한 처치가 이루어지지 않으면 사망에 이를 수 있습니다.' },
]

const colors = ['#3cb6c1', '#647ecb', '#8b9cba', '#e67e22', '#e74c3c']

export default function OverworkDeathPage() {
  return (
    <>
      <SubVisual title="과로사(뇌심혈관 질환)" />

      <section className="cntbox wd2000" aria-labelledby="overwork-diseases">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>01</div>
            <h3 id="overwork-diseases" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>대상 질병</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {diseases.map((d, i) => (
                <div key={d.num} style={{ backgroundColor: '#fff', borderRadius: 8, padding: 24, display: 'flex', gap: 20, alignItems: 'flex-start', borderLeft: `4px solid ${colors[i]}` }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: colors[i], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                    {d.num}
                  </div>
                  <div>
                    <h4 style={{ color: '#222', fontWeight: 700, marginBottom: 8, fontSize: 17 }}>{d.title}</h4>
                    <p style={{ color: '#555', lineHeight: 1.7, fontSize: 15, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cntbox wd2000" aria-labelledby="overwork-standard">
        <div style={{ backgroundColor: '#fff' }}>
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>02</div>
            <h3 id="overwork-standard" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>업무상 과로 인정기준</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {[
                { title: '단기 과로', color: '#3cb6c1', desc: '발병 전 1주일 이내에 업무량이나 업무 강도가 30% 이상 증가하거나, 발병 전 24시간 이내에 돌발적·예측 불가능한 사건이 발생한 경우' },
                { title: '만성 과로', color: '#647ecb', desc: '발병 전 3개월 동안 주 60시간, 또는 발병 전 12주 동안 주 평균 52시간을 초과하는 경우 업무와의 관련성이 강하게 인정됨' },
                { title: '특수 작업 환경', color: '#e67e22', desc: '고온·한랭·야간 작업 등 특수한 작업 환경에서의 발병도 업무 관련성 인정 대상이 됨' },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: '#f8f9fa', borderRadius: 10, padding: 24, borderTop: `4px solid ${item.color}` }}>
                  <h4 style={{ color: item.color, fontWeight: 700, marginBottom: 10, fontSize: 16 }}>{item.title}</h4>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: 15, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cntbox wd2000" aria-labelledby="overwork-cta">
        <div style={{ backgroundColor: '#1a2232', padding: '60px 20px' }}>
          <div className="wd1300" style={{ textAlign: 'center' }}>
            <h3 id="overwork-cta" style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>과로사·뇌심혈관 질환, 더드림이 함께합니다</h3>
            <p style={{ color: '#aab', fontSize: 16, lineHeight: 1.8, marginBottom: 30 }}>
              과도한 업무로 인한 뇌심혈관 질환은 산재 인정이 가능합니다.<br />
              복잡한 입증 절차를 더드림법률사무소가 도와드리겠습니다.
            </p>
            <a href="/consult" style={{ display: 'inline-block', backgroundColor: '#3cb6c1', color: '#fff', padding: '14px 36px', borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
              무료 상담 신청하기
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
