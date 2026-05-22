import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '근재/단체보험 | 더드림법률사무소',
  description: '근재보험·단체보험 보상 전문 상담. 근로자재해보상보험과 단체상해보험의 보상 기준, 청구 절차를 안내합니다.',
  keywords: '근재보험,단체보험,근로자재해보상보험,단체상해보험',
}

export default function Page() {
  return (
    <>
      <SubVisual title="근재/단체보험" />

      {/* ===== 01. 근재보험이란? ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-01">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              01
            </div>
            <h3 id="section-01" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              근재보험이란?
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                근로자재해보상보험(근재보험)은 산재보험 보상 외에 사용자의 법적 배상책임을 담보하는 보험입니다. 산재 인정 이후에도 추가 손해배상이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 02. 단체상해보험이란? ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-02">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              02
            </div>
            <h3 id="section-02" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              단체상해보험이란?
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                사업주가 임직원 전체를 피보험자로 가입하는 단체 보험으로, 업무 중 상해·사망 시 별도 보험금을 수령할 수 있습니다. 산재보험과 별개로 청구 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 03. 보상 청구 포인트 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-03">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              03
            </div>
            <h3 id="section-03" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              보상 청구 포인트
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                보험금 지급 거절·삭감 시 이의 제기 가능. 더드림에서는 보험사 분쟁 대리부터 소송까지 전 과정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: '#3cb6c1', padding: '50px 0', textAlign: 'center' }} aria-label="무료 상담 신청">
        <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
          근재/단체보험 관련 전문 법률 상담
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
