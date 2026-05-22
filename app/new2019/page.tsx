import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import ConsultForm from '@/components/ConsultForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '더드림법률사무소 | 산재·보험·소송 전문',
  description:
    '산재 전문 노무사·변호사가 보상신청부터 소송까지 ONE-STOP 법률서비스를 제공합니다. 15년 경력의 전문가가 결과로 보여드립니다.',
  alternates: { canonical: 'https://www.lawthedream.com' },
}

const businessItems = [
  { href: '/new2019/mn02/occupational-cancer',   icon: '/new2019/images/main/menu_ico10.png', label: '직업성 암/\n폐질환' },
  { href: '/new2019/mn02/overwork-death',        icon: '/new2019/images/main/menu_ico07.png', label: '과로사' },
  { href: '/new2019/mn02/noise-hearing-loss',    icon: '/new2019/images/main/menu_ico06.png', label: '소음성난청' },
  { href: '/new2019/mn02/mental-disease',        icon: '/new2019/images/main/menu_ico11.png', label: '정신질병/자살' },
  { href: '/new2019/mn02/musculoskeletal',       icon: '/new2019/images/main/menu_ico08.png', label: '근골격계질환' },
  { href: '/new2019/mn02/commute-accident',      icon: '/new2019/images/main/menu_ico03.png', label: '출퇴근 중 재해' },
  { href: '/new2019/mn02/disability-grade',      icon: '/new2019/images/main/menu_ico09.png', label: '장해등급' },
  { href: '/new2019/mn02/average-wage',          icon: '/new2019/images/main/menu_ico04.png', label: '평균임금' },
  { href: '/new2019/mn02/auto-insurance',        icon: '/new2019/images/main/menu_ico02.png', label: '교통사고' },
  { href: '/new2019/mn02/group-insurance',       icon: '/new2019/images/main/menu_ico12.png', label: '근재/단체보험' },
  { href: '/new2019/mn02/damage-insurance',      icon: '/new2019/images/main/menu_ico01.png', label: '손해/질병보험' },
  { href: '/new2019/mn02/fisherman-official',    icon: '/new2019/images/main/menu_ico05.png', label: '어선원/공무원' },
]

const reviewItems = [
  {
    href: '/mn03/industrial',
    bg: '#3cb6c1',
    icon: '/new2019/images/main/review_ico09.png',
    category: '산업재해',
    title: '더드림 성공스토리',
  },
  {
    href: '/mn03/insurance',
    bg: '#5bc2c8',
    icon: '/new2019/images/main/review_ico08.png',
    category: '보험보상',
    title: '더드림 성공스토리',
  },
  {
    href: '/mn03/lawsuit',
    bg: '#55b2e1',
    icon: '/new2019/images/main/review_ico07.png',
    category: '소송',
    title: '더드림 성공스토리',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== 메인 슬라이더 ===== */}
      <div className="main_vs" id="mainSlider">
        <div className="item n1">
          <div className="inner_box">
            <div className="main_vs_text style1">
              <strong className="text">
                <p className="big_tit">
                  분야별 전문가<span>들을 모으다</span>
                </p>
                <h2 className="mid_tit">
                  변호사·노무사·손해사정사<span>가 머리를 맞대다</span>
                </h2>
                <p style={{ marginBottom: '30px' }}>체계적인 법률시스템과 풍부한 실무경험</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
        <div className="item n2">
          <div className="inner_box">
            <div className="main_vs_text style2">
              <strong className="text">
                <p className="big_tit">
                  보상신청<span>부터</span> 소송<span>까지</span>
                </p>
                <h2 className="mid_tit">
                  ONE-STOP 법률서비스<span>를 제공하다</span>
                </h2>
                <p style={{ marginBottom: '30px' }}>체계적인 법률시스템과 풍부한 실무경험</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
        <div className="item n3">
          <div className="inner_box">
            <div className="main_vs_text style3">
              <strong className="text">
                <p className="big_tit">
                  압도적 성공사례<span>와</span> 경험
                </p>
                <h2 className="mid_tit">
                  <span>15년 경력의 산재 전문 노무사·변호사가</span> 결과로 보여주다
                </h2>
                <p style={{ marginBottom: '30px' }}>체계적인 법률시스템과 풍부한 실무경험</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        {/* ===== 업무분야 ===== */}
        <section id="part" aria-label="업무분야">
          <div className="cnt_1300">
            <div className="cnt_tit1">
              <h2 className="tit1">업무분야</h2>
            </div>
            <div className="main_cnt1">
              <ul className="part_menu clear">
                {businessItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div className="round">
                        <Image
                          src={item.icon}
                          alt={item.label.replace('\n', '')}
                          width={60}
                          height={60}
                        />
                      </div>
                      <p style={{ whiteSpace: 'pre-line', letterSpacing: '-0.5px' }}>
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== 성공사례 ===== */}
        <section id="review" aria-label="성공사례">
          <div className="cnt_1300">
            <div className="cnt_tit">
              <p className="eng">review</p>
              <h2 className="tit">성공사례보기</h2>
            </div>
            <div className="main_cnt">
              <ul className="review_menu">
                {reviewItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div className="re_tit" style={{ background: item.bg }}>
                        <p>
                          더드림<br />
                          <span>성공</span>사례
                        </p>
                        <p className="re_big">{item.category}</p>
                        <Image src={item.icon} alt={`${item.category} 아이콘`} width={60} height={60} />
                      </div>
                      <div className="re_txt">
                        <p className="re_rec">{item.category}</p>
                        <p style={{ fontSize: '16px', color: '#333' }}>{item.title}</p>
                        <p className="more">더보기</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== 찾아오시는 길 + 간편상담 ===== */}
        <section id="main_map" aria-label="찾아오시는 길 및 간편상담">
          <div className="bg">
            <div className="cnt_1300 map_box">
              <div className="map_left">
                <h3 className="tit">찾아오시는 길</h3>
                <div className="map_area">
                  {/* 카카오맵 - 클라이언트 사이드 렌더링 필요 */}
                  <div
                    id="daumRoughmapContainer1628736435503"
                    className="root_daum_roughmap root_daum_roughmap_landing"
                  />
                </div>
              </div>
              <div className="map_right">
                <address className="add">
                  <p>
                    주소 : <span>서울시 서초구 사임당로 87, 1층 3층</span>
                  </p>
                </address>
                <div className="call">
                  <p>
                    전화번호 :{' '}
                    <strong>
                      <a href="tel:02-6959-5053">tel : 02-6959-5053</a>
                    </strong>
                  </p>
                </div>
                <ConsultForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 슬라이더 초기화 스크립트 */}
      <Script src="/new2019/js/slick.js" strategy="afterInteractive" />
      <Script id="main-slider-init" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            if (typeof $ !== 'undefined' && $.fn.slick) {
              $('.main_vs').slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
              });
            }
          });
        `}
      </Script>
      {/* 카카오 지도 — onLoad 대신 동적 로드 방식 사용 (Server Component 호환) */}
      <Script id="daum-map-new2019" strategy="afterInteractive">{`
        (function() {
          var s = document.createElement('script');
          s.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
          s.onload = function() {
            new daum.roughmap.Lander({
              timestamp: '1628736435503',
              key: '26xxv',
              mapWidth: '560',
              mapHeight: '445',
            }).render();
          };
          document.head.appendChild(s);
        })();
      `}</Script>
    </>
  )
}
