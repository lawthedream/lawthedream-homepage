import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '12대 중과실사고 | 더드림교통형사센터',
  description: '신호위반·중앙선침범 등 12대 중과실 교통사고 전문 변호사. 무료 상담 02-6959-5053.',
  keywords: '12대중과실,교통사고,형사변호사,더드림',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/accident-12' },
}

const conTit = (t: string) => (
  <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{t}</h3>
)
const titLine = <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

const items12 = [
  { no: '제1조', text: '신호 또는 안전표지 위반사고', color: '#bf8553' },
  { no: '제2조', text: '중앙선침범', color: '#253d5f' },
  { no: '제3조', text: '과속', color: '#bf8553' },
  { no: '제4조', text: '앞지르기 또는 끼어들기 금지 위반', color: '#253d5f' },
  { no: '제5조', text: '철길건널목 통과방법위반', color: '#253d5f' },
  { no: '제6조', text: '횡단보도 보행자 보호의무 위반', color: '#bf8553' },
  { no: '제7조', text: '무면허운전', color: '#253d5f' },
  { no: '제8조', text: '음주운전 및 약물복용 운전', color: '#bf8553' },
  { no: '제9조', text: '보도침범사고', color: '#253d5f' },
  { no: '제10조', text: '승객 추락방지의무 위반', color: '#bf8553' },
  { no: '제11조', text: '어린이보호구역 사고', color: '#253d5f' },
  { no: '제12조', text: '자동차 화물낙하 방지의무 위반', color: '#bf8553' },
]

export default function Page() {
  return (
    <>
      <SiteSubVisual title="12대 중과실사고" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/accident-12" />
      <div id="contents">

        {/* Section 1: key point */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('12대 중과실사고 key point')}
          {titLine}
          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p style={sTxt}>
                  신뢰의 원칙에 따라 운전자에게 업무상과실이 없거나 주의 의무 위반을 충분히 하였음에도 불구하고 사람을 사상하게 하는 결과를 초래하였다면 운전자에게 사고의 책임을 물기 어렵습니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  신속하게 형사전담 변호사의 법률적인 자문을 받아야 합니다. 사건을 해결할 수 있는 &lsquo;골든타임&rsquo;을 놓치지 않아야 합니다.
                </p>
              </div>
              <div style={{ flexShrink: 0, width: 380, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn02/img/mn02_01_img1.jpg" alt="교통사고 상담"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 12대 중과실 목록 */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 60px' }}>
          {conTit('교통사고처리 특례법위반 - 12대 중과실')}
          {titLine}
          <p style={{ textAlign: 'center', fontSize: 17, color: '#333', lineHeight: 1.9, marginBottom: 8 }}>
            교통사고처리특례법의 제3조 2항에 따라 피해자의 명시적인 의사에 반하여 공소를 제기할 수 없습니다.
          </p>
          <p style={{ textAlign: 'center', fontSize: 16, color: '#666', lineHeight: 1.9, marginBottom: 50 }}>
            그러나 제3조 2항 단서의 12개 사항중 위반사항이 있을 경우<br />
            피해자가 처벌불원 의사를 표시하였다 하더라도 운전자는 처벌받게됩니다.<br />
            12대중과실에 해당하는 사항은 아래와 같습니다.
          </p>
        </div>

        <div style={{ background: '#f4f3f2', padding: '50px 20px 60px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {items12.map(({ no, text, color }) => (
              <div key={no} style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <div style={{ background: color, color: '#fff', textAlign: 'center', padding: '14px 0', fontSize: 17, fontWeight: 600 }}>{no}</div>
                <div style={{ padding: '22px 16px', textAlign: 'center', fontSize: 15, color: '#333', lineHeight: 1.7 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 교통사고처리 특례법 위반 표 */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px' }}>
          {conTit('교통사고처리 특례법 위반')}
          {titLine}
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', fontSize: 15, marginBottom: 40 }}>
            <thead>
              <tr>
                <th colSpan={2} style={{ background: '#253d5f', color: '#fff', padding: '16px 20px', textAlign: 'center', fontSize: 16 }}>
                  교통사고처리 특례법 위반
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '22%', padding: '20px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', background: '#f7f7f7', fontWeight: 500, verticalAlign: 'top' }}>
                  제3조<br /><span style={{ fontSize: 13, color: '#666', fontWeight: 400 }}>(처벌의 특례)</span>
                </td>
                <td style={{ padding: '20px', borderBottom: '1px solid #ddd', lineHeight: 1.9, color: '#444' }}>
                  ① 차의 운전자가 교통사고로 인하여 「형법」 제268조의 죄를 범한 경우에는 5년 이하의 금고 또는 2천만원 이하의 벌금에 처한다.<br /><br />
                  ② 차의 교통으로 제1항의 죄 중 업무상과실치상죄 또는 중과실치상죄와 「도로교통법」 제151조의 죄를 범한 운전자에 대하여는 피해자의 명시적인 의사에 반하여 공소(소訴)를 제기할 수 없다.
                </td>
              </tr>
              <tr>
                <td style={{ width: '22%', padding: '20px', textAlign: 'center', background: '#f7f7f7', fontWeight: 500, borderRight: '1px solid #ddd', verticalAlign: 'top' }}>
                  제4조<br /><span style={{ fontSize: 13, color: '#666', fontWeight: 400 }}>(보험 등에 가입된 경우의 특례)</span>
                </td>
                <td style={{ padding: '20px', lineHeight: 1.9, color: '#444' }}>
                  ① 교통사고를 일으킨 차가 「보험업법」 제4조, 제126조, 제127조 및 제128조, 「여객자동차 운수사업법」 제60조, 제61조 또는 「화물자동차 운수사업법」 제51조에 따른 보험 또는 공제에 가입된 경우에는 제3조제2항 본문에 규정된 죄를 범한 차의 운전자에 대하여 공소를 제기할 수 없다.
                </td>
              </tr>
            </tbody>
          </table>

          {/* 고속도로 사진 */}
          <div style={{ marginBottom: 32, borderRadius: 4, overflow: 'hidden' }}>
            <img src="/law/mn02/img/mn02_01_img3.jpg" alt="교통사고처리 특례법"
              style={{ display: 'block', width: '100%', height: 240, objectFit: 'cover', objectPosition: 'center 60%' }} />
          </div>

          <p style={{ textAlign: 'center', fontSize: 16, color: '#444', lineHeight: 1.9, marginBottom: 12 }}>
            교통사고처리특례법은 업무상과실 또는 중대한 과실로 교통사고를 일으킨 운전자에 대하여 형사처벌의 특례를 정함으로써<br />
            교통사고로 인한 피해의 신속한 회복을 촉진하고 국민생활의 편익을 증진함을 목적으로 하고 있습니다(제1조).
          </p>
          <p style={{ textAlign: 'center', fontSize: 16, color: '#444', lineHeight: 1.9 }}>
            운전자의 업무상 과실 및 중과실로 인해 교통사고가 발생하여 사람을 사상에 이르게 한 경우에<br />
            운전자는 교통사고처리특례법에 따라 저촉을 받게 됩니다.
          </p>
        </div>

      </div>
    </>
  )
}
