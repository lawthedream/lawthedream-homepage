import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 교통형사센터 | 교통사고·형사사건 전문',
  description: '12대 중과실사고, 음주운전, 민식이법, 성범죄, 산업안전 등 형사사건 전문 변호사·노무사. 무료 상담 02-6959-5053.',
  keywords: '교통사고, 형사사건, 음주운전, 뺑소니, 민식이법, 성범죄, 산업안전보건법, 변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law' },
}

const menuItems = [
  { href: '/law/mn02/accident-12',       img: '/law/images/main/menu_ico01.png', label: '12대 중과실사고' },
  { href: '/law/mn02/drunk-driving',     img: '/law/images/main/menu_ico02.png', label: '음주/뺑소니' },
  { href: '/law/mn02/minshik-law',       img: '/law/images/main/menu_ico03.png', label: '민식이법' },
  { href: '/law/mn02/solution',          img: '/law/images/main/menu_ico04.png', label: '합의' },
  { href: '/law/mn02/license',           img: '/law/images/main/menu_ico05.png', label: '면허취소구제' },
  { href: '/law/mn03/sexual-harassment', img: '/law/images/main/menu_ico06.png', label: '성희롱' },
  { href: '/law/mn03/molestation',       img: '/law/images/main/menu_ico07.png', label: '성추행' },
  { href: '/law/mn03/assault',           img: '/law/images/main/menu_ico08.png', label: '성폭행' },
  { href: '/law/mn04/safety-law',        img: '/law/images/main/menu_ico09.png', label: '산업안전보건법' },
  { href: '/law/mn05/general',           img: '/law/images/main/menu_ico10.png', label: '일반형사' },
  { href: '/law/mn05/violence',          img: '/law/images/main/menu_ico11.png', label: '폭행상해' },
  { href: '/law/mn05/drugs',             img: '/law/images/main/menu_ico12.png', label: '마약범죄' },
]

export default function LawHome() {
  return (
    <>
      {/* 메인 비주얼 슬라이더 */}
      <div className="main_vs" id="lawSlider">
        <div className="item n1">
          <div className="inner_box">
            <div className="main_vs_text style1">
              <strong className="text">
                <p className="big_tit">교통사고<span>·형사사건</span></p>
                <h1 className="mid_tit">더드림 교통형사센터<span>가 함께합니다</span></h1>
                <p style={{ marginBottom: 30 }}>12대 중과실사고·음주운전·성범죄·산업안전 전문</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        {/* 업무분야 */}
        <section id="part" aria-label="교통형사 업무분야">
          <div className="cnt_1300">
            <div className="cnt_tit1">
              <h2 className="tit1">업무분야</h2>
            </div>
            <div className="main_cnt1">
              <ul className="part_menu clear">
                {menuItems.map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div className="round">
                        <img src={item.img} alt={item.label} width={60} height={60} />
                      </div>
                      <p>{item.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 상담 */}
        <section id="main_map" aria-label="무료 상담 신청">
          <div className="bg">
            <div className="cnt_1300 map_box">
              <div className="map_right" style={{ width: '100%' }}>
                <div className="call">
                  <p>전화번호 :{' '}
                    <strong><a href="tel:02-6959-5053">tel : 02-6959-5053</a></strong>
                  </p>
                </div>
                <ConsultForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Script src="/law/js/main_visual.js" strategy="afterInteractive" />
    </>
  )
}
