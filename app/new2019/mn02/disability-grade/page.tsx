import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '장해등급 | 더드림법률사무소',
  description: '산재 장해등급 전문 상담. 장해등급 판정 기준, 등급별 보상금, 등급 재판정 절차를 안내합니다. 02-6959-5053',
  keywords: '장해등급,산재 장해등급,장해보상,장해급여',
}

export default function Page() {
  return (
    <>
      <SubVisual title="장해등급" />

      {/* ===== 01. 장해등급이란? ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-01">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              01
            </div>
            <h3 id="section-01" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              장해등급이란?
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                산재 치료 후 남은 신체적 결손(장해)의 정도를 1~14급으로 구분한 기준입니다. 등급이 낮을수록(1급) 중증이며, 높은 보상금을 받게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 02. 장해등급 판정 기준 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-02">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              02
            </div>
            <h3 id="section-02" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              장해등급 판정 기준
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                신체 부위별 기능 손실 정도를 기준으로 판정하며, 기관 방문 진단 및 의학적 소견서가 필요합니다. 복합 장해의 경우 병합 규정이 적용됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 03. 장해급여 수령 방법 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-03">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              03
            </div>
            <h3 id="section-03" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              장해급여 수령 방법
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                일시금 수령: 제14급~제3급
연금 수령: 제1급~제7급 (선택 가능)
더드림에서는 등급 판정부터 불복 절차까지 전 과정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: '#3cb6c1', padding: '50px 0', textAlign: 'center' }} aria-label="무료 상담 신청">
        <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
          장해등급 관련 전문 법률 상담
        </h3>
        <p style={{ color: '#fff', fontSize: 18, marginBottom: 28 }}>
          더드림 전문가 그룹이 무료로 검토해 드립니다.
        </p>
        <a
          href="tel:02-6959-5053"
          style={{ display: 'inline-block', backgroundColor: '#fff', color: '#3cb6c1', padding: '14px 44px', borderRadius: '50px', fontSize: 20, fontWeight: 700 }}
        >
          ☎ 02-6959-5053 무료상담
        </a>
      </section>
    </>
  )
}
