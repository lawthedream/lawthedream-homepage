import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '직업성 암/폐질환 | 더드림법률사무소',
  description:
    '직업성 암·폐질환 산업재해 전문 상담. 폐암, 직업성 폐암의 특징, 인정기준 및 성공사례를 안내합니다. 더드림법률사무소 02-6959-5053',
  keywords: '직업성 암, 폐질환, 산업재해, 폐암 산재, 직업성 폐암 인정기준',
}

export default function OccupationalCancerPage() {
  return (
    <>
      <SubVisual
        title="직업성 암/폐질환"
        bgImage="/new2019/mn02/img/mn02_10_vs.jpg"
      />

      {/* ===== 01. 폐암 ===== */}
      <section className="cntbox wd2000" aria-label="폐암 설명">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            {/* 번호 박스 */}
            <div
              className="cen_num"
              style={{
                width: '60px', margin: '0 auto', height: '60px',
                textAlign: 'center', lineHeight: '60px', fontSize: '25px',
                color: '#fff', backgroundColor: '#3cb6c1',
              }}
            >
              01
            </div>
            <h3 style={{ fontSize: '30px', color: '#222', fontWeight: 500, lineHeight: '80px' }}>
              폐암
            </h3>

            <div style={{ display: 'flex', gap: '26px', alignItems: 'flex-start' }}>
              <img
                src="/new2019/mn02/img/mn02_09_02_img1.jpg"
                alt="폐암 이미지"
                style={{ width: '530px', flexShrink: 0 }}
              />
              <div>
                <p style={{ color: '#333', fontWeight: 500, fontSize: '22px' }}>
                  폐암은 <strong style={{ color: '#3a517d' }}>폐에 생긴 악성 종양</strong>을 말하며,
                  크게 원발성 폐암과 전이성 폐암으로 구분합니다.
                </p>
                <p style={{ marginTop: '15px', fontSize: '20px' }}>
                  원발성 폐암은 기관지, 세기관지, 폐포 등의 폐 조직에서 발생한 암을 말합니다.
                </p>
                {/* 전이 방식 목록 — 이미지 대신 HTML 목록으로 */}
                <ul
                  style={{
                    marginTop: '20px', padding: '20px', backgroundColor: '#fff',
                    listStyle: 'none',
                  }}
                >
                  {[
                    { num: '01', label: '주위에 직접 넓게 전이', color: '#a4a4a4' },
                    { num: '02', label: '임파선으로 전이', color: '#8c9bba' },
                    { num: '03', label: '혈관 속으로 들어가는 것', color: '#89c1c6' },
                  ].map((item) => (
                    <li
                      key={item.num}
                      style={{
                        display: 'flex', alignItems: 'center',
                        marginBottom: '15px', fontSize: '20px',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: '40px', height: '40px', borderRadius: '50%',
                          backgroundColor: item.color, color: '#fff',
                          marginRight: '15px', flexShrink: 0,
                        }}
                      >
                        {item.num}
                      </span>
                      {item.label}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '22px', fontWeight: 500, color: '#333', marginTop: '15px' }}>
                  폐암은 뼈, 뇌, 간, 신장, 부신 등으로 잘 전이됩니다.
                </p>
                <p style={{ marginTop: '15px', fontSize: '20px', lineHeight: '1.6' }}>
                  뇌에 전이되면 건망증, 정신착란이 생기고 이상한 말이나 행동을 하게 되며 두통이나
                  구역질 등도 나타나게 됩니다. 간으로 전이되면 황달, 발열 등이 나타날 수 있고
                  뼈로 전이되면 통증이 매우 격렬하게 나타나는 경우가 많습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02. 직업성 폐암의 특징 ===== */}
      <section className="cntbox wd2000" aria-label="직업성 폐암의 특징">
        <div className="wd1300 tit_bg" style={{ paddingBottom: 0 }}>
          <div
            style={{
              width: '60px', margin: '0 auto', height: '60px',
              textAlign: 'center', lineHeight: '60px', fontSize: '25px',
              color: '#fff', backgroundColor: '#3cb6c1',
            }}
          >
            02
          </div>
          <h3 style={{ fontSize: '30px', color: '#222', fontWeight: 500, lineHeight: '80px' }}>
            직업성 폐암의 특징
          </h3>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', marginTop: '20px' }}>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '22px', color: '#333', fontWeight: 500, lineHeight: '1.6' }}>
                폐암의{' '}
                <strong style={{ color: '#3a517d' }}>
                  주요 유해인자로는 석면, 6가 크롬, 타르, 비소, 카드뮴 등이 있고, 폐암이 발생할
                  가능성이 높은 직종의 근로자로는 슬레이트 제조업자, 보일러 작업자, 선박관련업자,
                  고속도로 요금 징수자, 배관 및 용접공, 플라스틱 제조업자
                </strong>{' '}
                등이 있습니다.
              </p>
              <p style={{ margin: '25px 0', fontSize: '20px', lineHeight: '26px' }}>
                흡연자의 경우에도 업무와의 인과관계가 성립되면 산재로 인정될 수 있습니다.
              </p>
              <p style={{ fontSize: '22px', fontWeight: 400, color: '#333', lineHeight: '28px', marginBottom: '30px' }}>
                따라서 폐암환자를 진단할 때는 직업력을 자세하게 조사하여야 하며{' '}
                <strong>
                  특히, 발암물질에 노출된 사실, 노출량과 잠복기간, 흡연력 등의 입증이 매우 중요합니다.
                </strong>
              </p>
            </div>
            <img
              src="/new2019/mn02/img/mn02_09_02_img2.jpg"
              alt="직업성 폐암 특징 도표"
              style={{ width: '610px', flexShrink: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ===== 상담 유도 CTA ===== */}
      <section
        style={{
          backgroundColor: '#3cb6c1',
          padding: '50px 0',
          textAlign: 'center',
          marginTop: '60px',
        }}
        aria-label="무료 상담 신청"
      >
        <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>
          직업성 암·폐질환으로 어려움을 겪고 계신가요?
        </h3>
        <p style={{ color: '#fff', fontSize: '20px', marginBottom: '30px' }}>
          15년 경력의 산재 전문 노무사·변호사가 무료로 상담해 드립니다.
        </p>
        <a
          href="tel:02-6959-5053"
          style={{
            display: 'inline-block',
            backgroundColor: '#fff',
            color: '#3cb6c1',
            padding: '16px 48px',
            borderRadius: '50px',
            fontSize: '22px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          ☎ 02-6959-5053 무료상담
        </a>
      </section>
    </>
  )
}
