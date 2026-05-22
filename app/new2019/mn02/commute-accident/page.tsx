import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '출퇴근 중 재해 | 더드림법률사무소',
  description:
    '출퇴근 중 재해 산업재해 전문 상담. 사업주 지배관리하 출퇴근 재해와 통상의 출퇴근 재해 인정기준을 안내합니다. 02-6959-5053',
  keywords: '출퇴근 재해, 출퇴근 산재, 통상의 출퇴근, 출퇴근 사고 산재인정',
}

export default function CommuteAccidentPage() {
  return (
    <>
      <SubVisual title="출퇴근 중 재해" />

      <section className="cntbox wd2000" aria-labelledby="commute-def">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>01</div>
            <h3 id="commute-def" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>정의</h3>
            <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <img src="/new2019/mn02/img/mn02_03_01_img1.jpg" alt="출퇴근 중 재해" style={{ width: 560, maxWidth: '100%', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8, marginBottom: 20 }}>
                  출퇴근 재해란 취업과 관련하여 주거와 취업 장소 사이의 이동 또는 한 취업 장소에서 다른 취업 장소로의 이동 중 발생한 사고를 말합니다.
                </p>
                <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8, marginBottom: 20 }}>
                  2018년 1월 1일부터 산재보험법이 개정되어 통상의 출퇴근 재해도 산재로 인정받을 수 있게 되었습니다.
                </p>
                <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20 }}>
                  <h4 style={{ color: '#3cb6c1', fontWeight: 700, marginBottom: 10, fontSize: 16 }}>출퇴근 재해의 두 가지 유형</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee', color: '#444', fontSize: 15 }}>
                      <strong>① 사업주 지배·관리하의 출퇴근 재해</strong> — 사업주가 제공한 교통수단 이용 중 발생한 재해
                    </li>
                    <li style={{ padding: '8px 0', color: '#444', fontSize: 15 }}>
                      <strong>② 통상의 출퇴근 재해</strong> — 일반적인 출퇴근 경로 및 방법으로 이동 중 발생한 재해
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cntbox wd2000" aria-labelledby="commute-standard">
        <div style={{ backgroundColor: '#fff' }}>
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>02</div>
            <h3 id="commute-standard" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>인정기준</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 20 }}>
              {[
                { title: '통상적인 경로', color: '#3cb6c1', desc: '주거에서 취업 장소로, 또는 취업 장소에서 주거로 향하는 통상적인 경로와 방법으로 이동하는 중 발생한 사고여야 합니다.' },
                { title: '이탈·중단 예외', color: '#647ecb', desc: '일상생활에 필요한 행위(식사, 진료, 교육 등)를 위한 경로 이탈·중단 후 복귀 중 발생한 재해도 인정됩니다.' },
                { title: '사고 유형', color: '#8b9cba', desc: '교통사고, 보행 중 낙상, 계단 추락 등 출퇴근 이동 중 발생한 다양한 사고가 해당됩니다.' },
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

      <section className="cntbox wd2000" aria-labelledby="commute-cta">
        <div style={{ backgroundColor: '#1a2232', padding: '60px 20px' }}>
          <div className="wd1300" style={{ textAlign: 'center' }}>
            <h3 id="commute-cta" style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>출퇴근 재해, 더드림이 함께합니다</h3>
            <p style={{ color: '#aab', fontSize: 16, lineHeight: 1.8, marginBottom: 30 }}>
              2018년 법 개정 이후 출퇴근 재해 산재 인정이 확대되었지만, 여전히 복잡한 입증 절차가 남아 있습니다.<br />
              더드림법률사무소의 전문가가 신속하고 정확하게 도와드립니다.
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
