import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '기타 성범죄 | 더드림교통형사센터',
  description: '통신매체이용음란, 카메라불법촬영 등 기타 성범죄 전문 변호사. 02-6959-5053.',
  keywords: '기타성범죄,통신매체이용음란,불법촬영,성범죄변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/other' },
}

const badge = (text: string, color = '#bf8553'): object => ({
  display: 'inline-block', background: color, color: '#fff',
  padding: '7px 22px', borderRadius: 30, fontSize: 16, fontWeight: 500, marginBottom: 18,
})
const conTit = (text: string) => (
  <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{text}</h3>
)
const titLine = (
  <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
)
const cardStyle: object = { border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="기타 성범죄" site="law" bgImage="/law/mn03/img/sub_vs03.jpg" />
      <LawNavTabs current="/law/mn03/other" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('기타 성범죄 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 300, height: 300, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_04_img1.jpg" alt="통신매체이용음란"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('통신매체이용음란')}>통신매체이용음란</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  자신 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적으로 전화, 문자, 영상 등 통신매체를 통해 성적 수치심이나 혐오감을 일으키는 말, 음향, 글, 그림, 영상 등을 상대방에게 도달하게 한 경우 처벌받습니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  성폭력범죄의 처벌 등에 관한 특례법 제13조에 의해 2년 이하의 징역 또는 2,000만원 이하의 벌금에 처해지며, 신상정보 등록 및 취업제한 명령이 병과될 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <span style={badge('카메라 등 이용 촬영 (불법촬영)', '#253d5f')}>카메라 등 이용 촬영 (불법촬영)</span>
            <p style={sTxt}>
              카메라나 그 밖에 이와 유사한 기능을 갖춘 기계장치를 이용하여 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 촬영 대상자의 의사에 반하여 촬영한 경우 처벌받습니다.
            </p>
            <div style={sep} />
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginTop: 16 }}>
              <tbody>
                {[
                  ['불법촬영', '7년 이하의 징역 또는 5,000만원 이하의 벌금'],
                  ['촬영물 등 반포·판매·제공·공공전시·상영', '7년 이하의 징역 또는 5,000만원 이하의 벌금'],
                  ['영리 목적 반포·판매·제공·전시·상영', '3년 이상의 유기징역'],
                  ['촬영물 소지·구입·저장·시청', '3년 이하의 징역 또는 3,000만원 이하의 벌금'],
                ].map(([left, right], i) => (
                  <tr key={i}>
                    <td style={{ width: '40%', padding: '16px 20px', borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', backgroundColor: '#f7f7f7', color: '#333', fontWeight: 500 }}>{left}</td>
                    <td style={{ padding: '16px 20px', borderBottom: '1px solid #eee', color: '#333' }}>{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={cardStyle}>
            <span style={badge('성범죄 신상정보 등록')}>성범죄 신상정보 등록</span>
            <p style={sTxt}>
              성범죄로 유죄 판결이 확정된 경우 신상정보 등록 대상자가 되어 20년간 개인정보를 등록·관리해야 하며, 취업제한 명령으로 아동·청소년 관련 기관에 10년간 취업이 제한될 수 있습니다.
            </p>
            <div style={sep} />
            <p style={sTxt}>
              성범죄 사건에서는 신상정보 등록 및 취업제한 등 부수적 불이익을 최소화하기 위한 전략적 대응이 반드시 필요합니다. 전문 변호사의 조력을 통해 최선의 결과를 이끌어 내시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
