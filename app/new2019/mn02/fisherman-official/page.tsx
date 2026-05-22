import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '어선원/공무원 | 더드림법률사무소',
  description: '어선원·공무원 재해 전문 상담. 어선원보험과 공무원재해보상의 인정기준과 절차를 안내합니다.',
  keywords: '어선원보험,공무원 재해,어선원 산재,공무원재해보상',
}

export default function Page() {
  return (
    <>
      <SubVisual title="어선원/공무원" />

      {/* ===== 01. 어선원보험이란? ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-01">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              01
            </div>
            <h3 id="section-01" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              어선원보험이란?
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                「어선원 및 어선 재해보상보험법」에 따라 어업인의 업무상 재해를 보상하는 제도입니다. 선원법·산재보험법과는 별도로 적용되며, 어선 승선 중 발생한 재해를 보상합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 02. 공무원재해보상이란? ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-02">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              02
            </div>
            <h3 id="section-02" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              공무원재해보상이란?
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                「공무원 재해보상법」에 따라 공무로 인한 부상·질병·장애·사망에 대해 보상하는 제도입니다. 일반 산재보험과 별도 운영되며 인사혁신처 공무원연금공단이 담당합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 03. 전문 지원이 필요한 이유 ===== */}
      <section className="cntbox wd2000" aria-labelledby="section-03">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>
              03
            </div>
            <h3 id="section-03" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              전문 지원이 필요한 이유
            </h3>
            <div style={{ backgroundColor: '#fff', padding: '40px 50px' }}>
              {/* 이미지 안에 박혀있던 텍스트를 <p> 태그로 HTML화 — 드래그 선택 및 SEO 가능 */}
              <p style={{ fontSize: 18, color: '#333', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                어선원보험과 공무원재해보상은 일반 산재보험과 절차·기준이 달라 전문 대리인 없이 진행하면 불이익을 당하는 경우가 많습니다. 더드림이 처음부터 끝까지 대리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: '#3cb6c1', padding: '50px 0', textAlign: 'center' }} aria-label="무료 상담 신청">
        <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
          어선원/공무원 관련 전문 법률 상담
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
