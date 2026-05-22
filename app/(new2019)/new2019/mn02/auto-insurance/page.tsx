import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '자동차보험 | 더드림법률사무소',
  description: '자동차보험·교통사고 보상 전문 상담. 대인배상, 대물배상, 자기신체손해 등 보험 보상 기준과 청구 방법을 안내합니다.',
  keywords: '자동차보험,교통사고,대인배상,보험금 청구',
}

export default function Page() {
  return (
    <>
      <SubVisual title="자동차보험" />

      {/* ===== 01. 자동차보험 주요 담보 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-01">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              01
            </div>
            <h3 id="section-01" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              자동차보험 주요 담보
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                ·대인배상 I·II: 타인의 신체 상해·사망 보상
·대물배상: 타인의 재물 손괴 보상
·자기신체손해(자손): 피보험자 본인 상해 보상
·무보험자동차 상해: 무보험 차량 사고 보상
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 02. 교통사고 보험금 분쟁 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-02">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              02
            </div>
            <h3 id="section-02" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              교통사고 보험금 분쟁
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                보험사의 과실비율 적용·치료비 삭감·후유장해 부인 등으로 인한 분쟁이 빈번합니다. 보험금 산정 오류, 손해사정 결과 불복 시 전문가 검토가 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 03. 더드림의 교통사고 지원 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-03">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              03
            </div>
            <h3 id="section-03" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              더드림의 교통사고 지원
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                손해사정사·노무사·변호사가 협력하여 최대한의 보험금 수령을 목표로 합니다. 후유장해 산정부터 소송까지 원스탑 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: '#3cb6c1', padding: '50px 0', textAlign: 'center' }} aria-label="무료 상담 신청">
        <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
          자동차보험 관련 전문 법률 상담
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
