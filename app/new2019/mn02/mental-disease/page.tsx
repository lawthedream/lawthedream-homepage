import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '정신질병/자살 | 더드림법률사무소',
  description: '업무상 정신질병·자살 산업재해 전문 상담. 직장 내 괴롭힘·극심한 업무 스트레스로 인한 산재 인정기준과 자살 산재 인정 요건을 안내합니다.',
  keywords: '정신질병 산재,자살 산재,직장내 괴롭힘,업무상 자살',
}

export default function Page() {
  return (
    <>
      <SubVisual title="정신질병/자살" />

      {/* ===== 01. 업무상 정신질병 인정기준 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-01">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              01
            </div>
            <h3 id="section-01" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              업무상 정신질병 인정기준
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                ①업무와 관련한 정신적 충격을 유발할 수 있는 사건이 있을 것
②그 사건으로 정신질환이 발병 또는 악화되었을 것
③업무 관련성이 의학적으로 인정될 것
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 02. 자살의 업무상 재해 인정요건 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-02">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              02
            </div>
            <h3 id="section-02" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              자살의 업무상 재해 인정요건
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                업무상 재해 또는 업무상 질병으로 요양 중 정신적 이상 상태에서 자해행위를 한 경우, 또는 업무상의 사유로 발생한 정신질환에 의한 자해인 경우 산재로 인정될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 03. 주요 인정 사례 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-03">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              03
            </div>
            <h3 id="section-03" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              주요 인정 사례
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                · 직장 내 괴롭힘(갑질)에 의한 우울증 발병 후 자살
· 극심한 업무량·야간근무 스트레스로 인한 정신과 치료 중 자해
· 상사의 폭언·성희롱에 따른 외상 후 스트레스 장애(PTSD)
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: '#3cb6c1', padding: '50px 0', textAlign: 'center' }} aria-label="무료 상담 신청">
        <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
          정신질병/자살 관련 전문 법률 상담
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
