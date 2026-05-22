import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 중대재해센터 | 중대재해처벌법·산업재해 전문',
  description: '중대재해처벌법, 사업주 형사책임, 산업안전보건법 위반 전문. 무료 상담 02-6959-5053.',
  keywords: '중대재해처벌법,산업재해,사업주책임,안전보건법,형사처벌',
  alternates: { canonical: 'https://www.lawthedream.com/accident' },
}

const menuItems = [
  { href: '/accident/mn02/accident-12',  label: '12대 중과실사고' },
  { href: '/accident/mn02/drunk-driving',label: '음주/뺑소니' },
  { href: '/accident/mn02/minshik-law',  label: '민식이법' },
  { href: '/accident/mn02/solution',     label: '합의' },
  { href: '/accident/mn02/license',      label: '면허취소 구제' },
  { href: '/accident/mn03/employer',     label: '사업주 책임' },
  { href: '/accident/mn04/safety-law',   label: '산업안전보건법' },
  { href: '/accident/mn05/consult',      label: '온라인상담' },
]

export default function AccidentHome() {
  return (
    <>
      <div className="main_vs">
        <div className="item n1">
          <div className="inner_box">
            <div className="main_vs_text style1">
              <strong className="text">
                <p className="big_tit">중대재해<span>처벌법 전문</span></p>
                <h1 className="mid_tit">더드림 중대재해센터<span>가 함께합니다</span></h1>
                <p style={{ marginBottom: 30 }}>사업주·경영책임자 형사 대응 전문</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <section id="part" aria-label="중대재해 업무분야">
          <div className="cnt_1300">
            <div className="cnt_tit1"><h2 className="tit1">업무분야</h2></div>
            <div className="main_cnt1">
              <ul className="part_menu clear">
                {menuItems.map(item => (
                  <li key={item.href}>
                    <Link href={item.href}><p>{item.label}</p></Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="main_map" aria-label="무료 상담 신청">
          <div className="bg">
            <div className="cnt_1300 map_box">
              <div className="map_right" style={{ width: '100%' }}>
                <div className="call">
                  <p>전화번호 : <strong><a href="tel:02-6959-5053">tel : 02-6959-5053</a></strong></p>
                </div>
                <ConsultForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
