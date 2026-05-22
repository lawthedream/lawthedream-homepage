import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '인사말 | 더드림법률사무소',
  description:
    '더드림법률사무소는 산재 16년 경력 노무사 출신 대표변호사를 포함하여 보험 보상 특화 법률사무소입니다.',
}

export default function GreetingPage() {
  return (
    <>
      <SubVisual title="인사말" variant="numbered" id={1} />

      {/* 상단 배너 텍스트 — 기존 이미지 텍스트를 HTML로 변환 */}
      <section
        className="cntbox wd2000"
        style={{
          background: 'url(/new2019/mn01/img/mn01_01_img1.jpg) top center no-repeat',
          padding: '70px 0',
          position: 'relative',
        }}
        aria-label="더드림 소개 배너"
      >
        {/* 반투명 배경박스 */}
        <div
          style={{
            width: '1300px',
            height: '259px',
            backgroundColor: '#f4f4f4',
            opacity: 0.75,
            margin: '0 auto',
            border: '3px solid #fff',
          }}
        />
        {/* 오버레이 텍스트 — 이미지 안에 박혀있던 텍스트를 HTML로 분리 */}
        <div
          style={{
            width: '100%',
            margin: '0 auto',
            position: 'absolute',
            top: '105px',
            letterSpacing: '-0.025rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              width: '100%',
              height: '26px',
              backgroundImage: 'url(/new2019/mn01/img/mn01_01_ico1.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
            }}
            aria-hidden="true"
          />
          <span
            style={{
              display: 'block',
              fontSize: '30px',
              color: '#373737',
              fontWeight: 600,
              padding: '15px 0',
            }}
          >
            변호사·노무사·손해사정사
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '900px',
              lineHeight: '23px',
              backgroundColor: '#5c7fcf',
              borderRadius: '26px',
              fontSize: '30px',
              color: '#fff',
              fontWeight: 500,
              padding: '20px 0',
              textAlign: 'center',
            }}
          >
            보상 신청부터 소송까지 ONE-STOP 법률서비스
          </span>
        </div>
      </section>

      {/* 인사말 본문 */}
      <h3 className="con_tit">더드림 법률사무소에 오신 것을 환영합니다.</h3>

      <div className="cntbox wd2000">
        <p>
          <img src="/new2019/mn01/img/mn01_01_img6.jpg" alt="더드림 법률사무소 대표 사진" />
        </p>
      </div>

      {/* 인사말 텍스트 — CSS 배경이미지 위에 HTML 텍스트 */}
      <div className="cntbox wd2000">
        <div
          style={{
            backgroundImage: 'url(/new2019/mn01/img/mn01_01_bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            width: '1300px',
            margin: '50px auto',
            height: '484px',
            padding: '50px 60px 0',
          }}
          role="region"
          aria-label="인사말 본문"
        >
          <p style={{ color: '#333', fontSize: '20px', marginTop: '18px', lineHeight: '130%' }}>
            저희 더드림법률사무소는
          </p>
          <p style={{ color: '#333', fontSize: '20px', marginTop: '18px', lineHeight: '130%' }}>
            산재 16년 경력 노무사 출신인 대표변호사를 포함하여
            <br />
            10년 이상 보험 보상 경력의 공인노무사, 손해사정사 및 실무진 등 전문가들로만 구성되어
          </p>
          <p
            style={{
              fontSize: '23px',
              fontWeight: 600,
              color: '#333',
              marginTop: '18px',
              lineHeight: '130%',
            }}
          >
            산재, 보험, 민사 및 형사사건 등 모든 보험 보상과 관련하여
            <br />
            신청부터 소송까지 원스탑으로 법률서비스를 제공해드리는
          </p>
          <p
            style={{
              fontSize: '23px',
              fontWeight: 600,
              color: '#333',
              marginTop: '18px',
              lineHeight: '130%',
            }}
          >
            <strong style={{ color: '#278bb3' }}>보험 보상 특화 법률사무소</strong>입니다.
          </p>
          <p style={{ color: '#333', fontSize: '20px', marginTop: '30px', lineHeight: '130%' }}>
            고객님께 갑작스런 사고나 질병이 발생한 경우,
            <br />
            든든하고 믿음직한 법률서비스를 제공해 드리겠습니다.
            <br />
            감사합니다.
          </p>
          <p style={{ color: '#333', fontSize: '20px', marginTop: '18px' }}>
            - 더드림 법률사무소 일동 -
          </p>
        </div>
      </div>
    </>
  )
}
