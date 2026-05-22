import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 직업병연구원 | 직업성 암·근골격계·소음성난청 전문',
  description: '직업성 암, 근골격계 질환, 소음성난청, 과로사, 정신질병 등 직업병 산재 전문. 무료 상담 02-6959-5053.',
  keywords: '직업병,직업성암,근골격계,소음성난청,과로사,정신질병,산재보상',
  alternates: { canonical: 'https://www.lawthedream.com/work' },
}

const menuItems = [
  { href: '/work/mn02/musculoskeletal', label: '근골격계 질환' },
  { href: '/work/mn02/overwork',        label: '과로사' },
  { href: '/work/mn02/mental',          label: '정신질병/자살' },
  { href: '/work/mn02/hearing-loss',    label: '소음성 난청' },
  { href: '/work/mn02/cancer',          label: '직업성 암' },
  { href: '/work/mn02/lung-disease',    label: '직업성 폐질환' },
  { href: '/work/mn02/other-disease',   label: '기타직업병' },
  { href: '/work/mn02/general',         label: '일반 산재' },
  { href: '/work/mn03/cases',           label: '성공사례' },
  { href: '/work/mn04/consult',         label: '온라인상담' },
]

export default function WorkHome() {
  return (
    <>
      <div className="main_vs">
        <div className="item n1">
          <div className="inner_box">
            <div className="main_vs_text style1">
              <strong className="text">
                <p className="big_tit">직업병<span> 산재 전문</span></p>
                <h1 className="mid_tit">더드림 직업병연구원<span>이 함께합니다</span></h1>
                <p style={{ marginBottom: 30 }}>직업성 암·근골격계·소음성난청·과로사 전문</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <section id="part" aria-label="직업병 업무분야">
          <div className="cnt_1300">
            <div className="cnt_tit1"><h2 className="tit1">업무분야</h2></div>
            <div className="main_cnt1">
              <ul className="part_menu clear">
                {menuItems.map(item => (
                  <li key={item.href}><Link href={item.href}><p>{item.label}</p></Link></li>
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
