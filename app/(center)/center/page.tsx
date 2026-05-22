import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 보험분쟁센터 | 보험금 청구·분쟁 전문',
  description: '뇌심혈관질환, 사망·장해, 산재보험, 교통사고 보험금 청구 및 분쟁 전문. 무료 상담 02-6959-5053.',
  keywords: '보험분쟁,보험금청구,뇌심혈관,사망장해,산재보험,교통사고보험',
  alternates: { canonical: 'https://www.lawthedream.com/center' },
}

export default function CenterHome() {
  return (
    <>
      <div className="main_vs">
        <div className="item n1">
          <div className="inner_box">
            <div className="main_vs_text style1">
              <strong className="text">
                <p className="big_tit">보험금 분쟁<span> 해결</span></p>
                <h1 className="mid_tit">더드림 보험분쟁센터<span>가 함께합니다</span></h1>
                <p style={{ marginBottom: 30 }}>뇌심혈관·사망·장해·산재보험·교통사고 전문</p>
                <p className="eng_tit">the dream</p>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <section id="part" aria-label="보험분쟁 업무분야">
          <div className="cnt_1300">
            <div className="cnt_tit1"><h2 className="tit1">업무분야</h2></div>
            <ul className="part_menu clear" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, listStyle: 'none', padding: 0 }}>
              {[
                ['/center/mn02/cancer-brain',    '뇌심혈관질환'],
                ['/center/mn03/death-disability','사망·장해'],
                ['/center/mn04/industrial',      '산재보험'],
                ['/center/mn05/traffic',         '교통사고'],
                ['/center/mn06/consult',         '온라인상담'],
                ['/center/mn08/lawsuit',         '소송'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href}><p>{label}</p></Link></li>
              ))}
            </ul>
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
