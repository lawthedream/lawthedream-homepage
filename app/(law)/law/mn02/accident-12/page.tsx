import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '12대중과실 | 더드림교통형사센터',
  description: '교통사고 12대 중과실 — 신호위반, 중앙선침범, 과속, 음주운전 등 형사처벌 요건과 대처 방법을 안내합니다.',
  keywords: '12대중과실,교통사고처리특례법,신호위반,형사처벌,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/accident-12' },
}

const GRID_ITEMS = [
  { label: '제1조', title: '신호위반', desc: '신호기나 교통정리를 하는 경찰공무원 등의 신호 또는 지시를 위반한 경우', color: 'gold' },
  { label: '제2조', title: '중앙선침범', desc: '중앙선을 침범하거나 고속도로·자동차전용도로에서 횡단·유턴·후진한 경우', color: 'blue' },
  { label: '제3조', title: '과속', desc: '제한속도보다 시속 20킬로미터를 초과하여 운전한 경우', color: 'gold' },
  { label: '제4조', title: '앞지르기위반', desc: '앞지르기 방법·금지 시기·장소 또는 끼어들기 금지를 위반한 경우', color: 'blue' },
  { label: '제5조', title: '철길건널목통과위반', desc: '철길건널목 통과방법을 위반한 경우', color: 'gold' },
  { label: '제6조', title: '횡단보도사고', desc: '횡단보도에서의 보행자 보호의무를 위반하여 운전한 경우', color: 'blue' },
  { label: '제7조', title: '무면허운전', desc: '도로교통법에 따른 운전면허 없이 운전하거나 건설기계관리법에 따른 건설기계조종사 면허 없이 운전한 경우', color: 'gold' },
  { label: '제8조', title: '음주운전', desc: '술에 취한 상태에서 운전하거나 약물의 영향으로 정상적으로 운전하지 못할 우려가 있는 상태에서 운전한 경우', color: 'blue' },
  { label: '제9조', title: '보도침범', desc: '보도가 설치된 도로의 보도를 침범하거나 보도 횡단방법을 위반하여 운전한 경우', color: 'gold' },
  { label: '제10조', title: '승객추락', desc: '승객의 추락 방지의무를 위반하여 운전한 경우', color: 'blue' },
  { label: '제11조', title: '어린이보호구역', desc: '어린이보호구역에서 안전의무를 위반하여 어린이의 신체를 상해에 이르게 한 경우', color: 'gold' },
  { label: '제12조', title: '화물낙하', desc: '자동차의 화물이 도로에 떨어지지 않도록 필요한 조치를 하지 않고 운전한 경우', color: 'blue' },
]

export default function Page() {
  return (
    <>
      <SiteSubVisual title="12대 중과실사고" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — Key Point */}
        <section className="mn02-section">
          <h3 className="mn02-h3">12대 중과실사고 key point</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-keybox">
            <div className="text-col">
              <span className="mn02-badge gold">신뢰의 원칙</span>
              <div className="mn02-text">
                <p>
                  운전자는 다른 운전자 또는 보행자가 교통법규를 지킬 것이라 믿고 운전할 수 있습니다.
                  때문에 자신이 교통법규를 지켜 운전하였다면, 다른 운전자나 보행자가 교통법규를
                  지키지 않아 발생한 사고에 대해 책임을 지지 않아도 됩니다.
                </p>
                <p>
                  그러나 <strong>12대 중과실의 경우에는 신뢰의 원칙이 적용되지 않습니다.</strong> 때문에
                  잘못을 저지른 경우, 종합보험에 가입하더라도 형사처벌을 피할 수 없습니다.
                </p>
              </div>
              <span className="mn02-badge blue" style={{ marginTop: 20, display: 'inline-block' }}>형사전담변호사</span>
              <div className="mn02-text">
                <p>
                  교통사고로 인한 형사처벌을 받게 된 경우, 전문 형사 변호인의 도움을 받아 대처하는 것이
                  중요합니다. 더드림 형사 전문 변호사들은 다양한 경험을 통해 최적의 변호 전략을 제공합니다.
                </p>
              </div>
            </div>
            <div className="photo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/accident_car.jpg" alt="교통사고 현장" />
            </div>
          </div>
        </section>

        {/* Section 2 — 12대 중과실 그리드 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">교통사고처리 특례법위반 — 12대 중과실</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-gray-bg" style={{ marginBottom: 24, fontSize: 15, color: '#555', textAlign: 'center', lineHeight: 1.8 }}>
            교통사고처리 특례법 제3조 제2항 단서에 해당하는 12가지 중과실 항목은<br />
            종합보험 가입 여부와 무관하게 형사처벌 대상이 됩니다.
          </div>
          <div className="mn02-grid12">
            {GRID_ITEMS.map((item) => (
              <div className="mn02-grid12-item" key={item.label}>
                <div className={`mn02-grid12-head ${item.color}`}>{item.label} {item.title}</div>
                <div className="mn02-grid12-body">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — 특례법 위반 테이블 + 사진 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">교통사고처리 특례법 위반</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-split">
            <div className="text-side">
              <table className="mn02-tbl" style={{ marginBottom: 24 }}>
                <thead>
                  <tr><th style={{ width: 120 }}>조항</th><th>내용</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>제3조<br />처벌의 특례</td>
                    <td>
                      차의 교통으로 업무상 과실 또는 중과실로 사람을 사상한 자가 피해자를 구호하는 등
                      필요한 조치를 취하고 피해자의 명시적 의사에 반하여 공소를 제기할 수 없다.
                      <br /><strong style={{ color: '#c0392b' }}>단, 12대 중과실에 해당하거나 보험 미가입 시에는 그러하지 아니하다.</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>제4조<br />보험가입</td>
                    <td>
                      교통사고를 일으킨 차가 보험 또는 공제에 가입된 경우, 제3조 제2항 단서에
                      해당하는 경우를 제외하고는 공소를 제기할 수 없다.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mn02-text">
                <p>
                  12대 중과실에 해당하는 사고를 일으킨 경우, 합의 또는 보험 가입 여부와 관계없이
                  형사처벌 대상이 됩니다. 처벌 수위를 낮추고 선처를 받기 위해서는 반드시
                  전문 교통형사 변호사의 조력을 받으시기 바랍니다.
                </p>
              </div>
            </div>
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/accident_highway.jpg" alt="고속도로 교통" />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
