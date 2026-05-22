import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '소음성난청 | 더드림법률사무소',
  description:
    '소음성 난청 산업재해 전문 상담. 85dB 이상 소음 작업장 근무 후 발생한 난청의 산재 인정기준과 성공사례를 안내합니다. 02-6959-5053',
  keywords: '소음성난청, 산재, 소음성 난청 인정기준, 청력손실 산재, 직업성 난청',
}

const cases = [
  { num: '01', color: '#3cb6c1', img: '/new2019/mn02/img/mn02_07_img4_1.jpg', desc: '공사현장에서 할석공으로 근무 중 난청이 발병한 경우' },
  { num: '02', color: '#647ecb', img: '/new2019/mn02/img/mn02_07_img4_2.jpg', desc: '시멘트 공장 생산공정에서 근무하며 양측 감각신경성 난청이 발생한 경우' },
  { num: '03', color: '#8b9cba', img: '/new2019/mn02/img/mn02_07_img4_3.jpg', desc: '광업소 근무 중 감각신경성 난청 양측이 발병한 경우' },
  { num: '04', color: '#3cb6c1', img: '/new2019/mn02/img/mn02_07_img4_4.jpg', desc: '기어가공 및 연마공으로 근무하던 중 양측 감음신경성 난청이 발생한 경우' },
]

export default function NoiseHearingLossPage() {
  return (
    <>
      <SubVisual title="소음성 난청" />

      <section className="cntbox wd2000" aria-labelledby="noise-def">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>01</div>
            <h3 id="noise-def" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>소음성 난청이란?</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8, marginBottom: 20 }}>
              85dB(A) 이상의 강한 소음이 발생하는 장소에서 장기간 작업하여 발생하는 직업성 질환입니다.
            </p>
            <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: 24 }}>
              <h4 style={{ color: '#3cb6c1', fontWeight: 700, marginBottom: 12 }}>산재 인정 주요 요건</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  '85dB(A) 이상의 소음 작업환경에서 3년 이상 근무',
                  '양측 청력 손실이 각 40dB 이상(순음청력검사 기준)',
                  '소음 노출과 청력 손실 간의 의학적 인과관계 인정',
                  '4,000Hz에서 먼저 청력 저하가 나타나는 전형적 패턴',
                ].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none', color: '#555', fontSize: 15, display: 'flex', gap: 10 }}>
                    <span style={{ color: '#3cb6c1', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cntbox wd2000" aria-labelledby="noise-cases">
        <div style={{ backgroundColor: '#fff' }}>
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>02</div>
            <h3 id="noise-cases" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>성공사례</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {cases.map((c) => (
                <div key={c.num} style={{ border: `2px solid ${c.color}`, borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{ backgroundColor: c.color, color: '#fff', padding: '10px 16px', fontWeight: 700 }}>CASE {c.num}</div>
                  <img src={c.img} alt={`성공사례 ${c.num}`} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                  <div style={{ padding: 16 }}>
                    <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cntbox wd2000" aria-labelledby="noise-cta">
        <div style={{ backgroundColor: '#1a2232', padding: '60px 20px' }}>
          <div className="wd1300" style={{ textAlign: 'center' }}>
            <h3 id="noise-cta" style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>소음성 난청 산재, 더드림이 함께합니다</h3>
            <p style={{ color: '#aab', fontSize: 16, lineHeight: 1.8, marginBottom: 30 }}>
              오랜 기간 소음에 노출되어 청력을 잃으셨다면, 산재 보상을 받을 권리가 있습니다.
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
