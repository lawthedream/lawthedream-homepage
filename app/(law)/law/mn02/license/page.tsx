import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '면허취소 구제 | 더드림교통형사센터',
  description: '운전면허 취소·정지 이의신청, 행정심판, 행정소송 전문. 면허구제 02-6959-5053.',
  keywords: '면허취소구제,면허정지,이의신청,행정심판,행정소송',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/license' },
}

const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const tagBox = (text: string, color = '#253d5f'): object => ({
  display: 'inline-block', background: color, color: '#fff',
  padding: '6px 18px', borderRadius: 2, fontSize: 15, fontWeight: 600, marginBottom: 12, marginRight: 12,
})

export default function Page() {
  return (
    <>
      <SiteSubVisual title="면허취소 구제" site="law" bgImage="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/license" />

      <div id="contents">
        {/* ── Section 1: 면허취소구제 Key Point ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>면허취소구제 key point</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
          <p style={{ textAlign: 'center', fontSize: 17, color: '#333', lineHeight: 2, marginBottom: 10 }}>
            운전면허에 대한 취소처분 또는 정지처분이나 연습운전면허의 취소처분에 대해<br />
            이의가 있는 사람은 처분을 받은 날로부터 60일 이내에 지방경찰청장에게 이의를 신청할 수 있습니다.
          </p>
          <p style={{ textAlign: 'center', fontSize: 15, color: '#666', marginBottom: 50 }}>또한 아래 사유가 있는 경우는 행정처분이 감경이 될수 있습니다.</p>

          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: 420, height: 300, overflow: 'hidden', borderRadius: 4 }}>
              <img src="/law/mn02/img/mn02_05_img1.jpg" alt="면허취소 구제 상담"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
            </div>
            <div style={{ flex: 1 }}>
              {[
                { num: '01', text: '운전이 가족 생계 수단인 경우' },
                { num: '02', text: '모범운전자로서 3년 이상 교통봉사활동에 종사한 경우' },
                { num: '03', text: '경찰서장 이상의 표창을 받은 경우' },
              ].map(({ num, text }) => (
                <div key={num} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, padding: '20px 24px', background: '#f7f7f7', borderRadius: 4 }}>
                  <div style={{ width: 40, height: 40, background: '#bf8553', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{num}</span>
                  </div>
                  <p style={{ fontSize: 16, color: '#333', margin: 0 }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #ddd', marginTop: 8, paddingTop: 20 }}>
                <p style={sTxt}>이의를 신청한 사람은 그 이의신청 여부와 관계없이 다른 행정구제 수단인 행정심판법에 의한 행정심판청구를 청구할 수 있고, 행정심판청구에 대한 재결에 대하여 다투려는 경우에는행정소송법에 의한 행정소송을 제기할 수 있습니다.</p>
                <p style={sTxt}>이런 일련의 과정등은 전문변호사를 통하여 진행되어야 합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: 운전면허 결격기간 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 80px' }}>
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>운전면허 결격기간</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15, marginBottom: 60 }}>
            <thead>
              <tr>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 54, fontWeight: 600, fontSize: 16, width: '20%', borderRight: '1px solid #4a6080' }}>결격기간</td>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 54, fontWeight: 600, fontSize: 16 }}>사유</td>
              </tr>
            </thead>
            <tbody>
              {[
                ['5년', '사람을 사상 + 사고후미조치\n음주운전 과로운전, 공동위험행위 + 사람사상 후 사고후미조치\n음주운전, 무면허운전, 운전면허 결격자 + 사람 사망에 이르게 한 경우'],
                ['4년', '(무면허운전 음주운전·과로운전 공동위험행위) 이외의 사유 + 사고후미조치'],
                ['3년', '음주운전 또는 음주측정거부 + 2회 이상 교통사고\n자동차 등을 이용한 범죄 또는 자동차 절도 강도'],
                ['2년', '무면허운전 3회 이상\n음주운전 또는 음주측정거부 2회이상\n음주운전 또는 음주측정거부 + 교통사고\n공동위험행위 2회이상\n부정면허취득, 자동차 절도 강도, 면허시험대리응시'],
                ['1년', '무면허운전\n음주운전\n2-5년 제한 이외의 사유로 면허 취소\n공동위험행위로 원동기장치자전거면허 취득하려고 하는 경우'],
              ].map(([period, reason], i) => (
                <tr key={i}>
                  <td style={{ textAlign: 'center', fontWeight: 700, fontSize: 18, color: '#253d5f', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', padding: '20px', backgroundColor: '#f7f7f7' }}>{period}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '20px 30px', color: '#444', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 벌점 초과 취소·정지 */}
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>운전면허 결격기간</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
          <p style={{ textAlign: 'center', fontSize: 17, fontWeight: 600, color: '#333', marginBottom: 30 }}>벌점 등 초과로 인한 운전면허 취소·정지</p>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ flexShrink: 0, width: 300, height: 220, overflow: 'hidden', borderRadius: 4 }}>
              <img src="/law/mn02/img/mn02_05_img3.jpg" alt="운전 중 벌점"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }} />
            </div>
            <table style={{ flex: 1, borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 15 }}>
              <thead>
                <tr>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, borderRight: '1px solid #4a6080' }}>사유</td>
                  <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>벌점 또는 누산점수</td>
                </tr>
              </thead>
              <tbody>
                {[['1년간', '121점'], ['2년간', '271점'], ['3년간', '271점']].map(([period, score], i) => (
                  <tr key={i}>
                    <td style={{ textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', padding: '18px', backgroundColor: '#f7f7f7', fontWeight: 500 }}>{period}</td>
                    <td style={{ textAlign: 'center', borderBottom: '1px solid #ddd', padding: '18px' }}>{score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 정지처분 개별기준 */}
          <p style={{ textAlign: 'center', fontSize: 17, fontWeight: 600, color: '#333', marginBottom: 20 }}>정지처분 개별기준</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #222', borderBottom: '2px solid #222', fontSize: 14, marginBottom: 20 }}>
            <thead>
              <tr>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600, width: '60%', borderRight: '1px solid #4a6080' }}>위반사항</td>
                <td style={{ background: '#253d5f', color: '#fff', textAlign: 'center', height: 48, fontWeight: 600 }}>벌점</td>
              </tr>
            </thead>
            <tbody>
              {[
                ['음주운전(0.03%~0.08%미만)', '100점'],
                ['자동차 등 이용하여 특수상해 등 (보복운전)으로 입건', '100점'],
                ['속도위반(60km초과)', '60점'],
                ['공동위험행위', '40점'],
                ['난폭운전', '40점'],
                ['중앙선 침범', '30점'],
                ['속도위반(40km~60km 이하)', '30점'],
                ['1년간', ''],
                ['철길건널목 통과방법위반', '121점'],
                ['운전면허증 등의 제시의무위반 또는 운전자 신원확인 위한 질문에 불응', '121점'],
                ['신호·지시위반', '121점'],
                ['속도위반(20km~40km이하)', '121점'],
                ['속도위반', '121점'],
                ['속도위반(어린이보호구역에서 오전 8시부터 오후 8시까지 제한속도 20km이내에서 초과한 경우에 한함)', '121점'],
                ['앞지르기 금지시기·장소위반', '121점'],
              ].map(([violation, score], i) => (
                <tr key={i}>
                  <td style={{ borderBottom: '1px solid #eee', borderRight: '1px solid #ddd', padding: '12px 20px', backgroundColor: '#f7f7f7', color: '#333' }}>{violation}</td>
                  <td style={{ borderBottom: '1px solid #eee', textAlign: 'center', padding: '12px', color: score ? '#253d5f' : 'transparent', fontWeight: 600 }}>{score || '.'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 3: 생계형 이의신청 ── */}
        <div style={{ background: '#f4f3f2', padding: '80px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>생계형 이의신청</h3>
            <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
            <p style={{ textAlign: 'center', fontSize: 16, color: '#555', lineHeight: 2, marginBottom: 50 }}>
              생계형 이의신청이란, 음주운전이나 벌점초과 등의 사유로 운전면허 취소처분이 행해질 경우,<br />
              직업이나 생계에 지장이 발생하여, 사익침해가 중대한 경우 이의신청을 청구하는 것을 말함.
            </p>
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 360, height: 300, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn02/img/mn02_05_img4.jpg" alt="생계형 이의신청"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 20 }}>
                  <span style={tagBox('대상')}>대상</span>
                  <span style={{ fontSize: 16, color: '#bf8553', fontWeight: 600 }}>운전면허가 생계수단이 되는 운전자에 한함</span>
                  <div style={{ marginTop: 12 }}>
                    {[
                      '① 음주운전 : 혈중알코올농도 0.0100% 이상에서 운전',
                      '② 벌점누계 : 직전 1년간 121점, 2년간 201점, 3년간 271점 이상',
                      '③ 경찰의 잘못이 있거나 오해를 받아 억울하게 면허취소가 된 경우',
                    ].map((t, i) => <p key={i} style={{ ...sTxt, marginBottom: 6 }}>{t}</p>)}
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <span style={tagBox('제외 요건')}>제외 요건</span>
                  <div style={{ marginTop: 8 }}>
                    {[
                      '① 혈중 알코올농도 0.120% 초과',
                      '② 주취 운전 중 인피사고 발생',
                      '③ 음주측정 요구 불응 혹은 도주하거나, 경찰관을 폭행한 경우',
                      '④ 과거 5년 이내 음주경력이나 3회 이상 인피사고 전력이 있는 경우',
                      '⑤ 과거 5년 이내 음주면허 행정처분심의를 받아 행정처분이 감경된 경우',
                    ].map((t, i) => <p key={i} style={{ ...sTxt, marginBottom: 6 }}>{t}</p>)}
                  </div>
                </div>
                <div>
                  <span style={tagBox('기간')}>기간</span>
                  <p style={{ ...sTxt, marginTop: 8 }}>처분 날로부터 60일 이내</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 4: 행정심판 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>행정심판</h3>
          <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
          <p style={{ textAlign: 'center', fontSize: 16, color: '#555', marginBottom: 50 }}>
            음주운전구제를 위한 행정심판은 별도의 대상을 정하지 않으며 모든 처분자에게 기회를 부여
          </p>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: 360, height: 280, overflow: 'hidden', borderRadius: 4 }}>
              <img src="/law/mn02/img/mn02_05_img5.jpg" alt="행정심판"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={tagBox('대상')}>대상</span>
                <span style={{ fontSize: 16, color: '#bf8553', fontWeight: 600, marginLeft: 4 }}>제한 없음</span>
                <div style={{ marginTop: 12 }}>
                  {[
                    '① 음주운전 : 혈중알코올농도 0.05%이상 또는 0.100% 이상에서 운전',
                    '② 벌점초과 : 벌점누계가 직전 1년간 121점, 2년간 201점, 3년간 271점 이상',
                    '③ 뺑소니 : 고의적인 도주가 아니거나, 사고사실을 알지 못한 경우',
                    '④ 무면허 : 운전면허 정지기간임을 알지 못했거나, 긴급한 상황에 운전이 불가피한 경우',
                    '⑤ 음주측정 불응 : 위법한 단속이거나 운전하지 않았던 경우,',
                    '⑥ 경찰의 부당 및 위법한 행위 : 경찰관에게 잘못이 있거나, 오해를 받아 억울한 경우',
                  ].map((t, i) => <p key={i} style={{ ...sTxt, marginBottom: 6 }}>{t}</p>)}
                </div>
              </div>
              <div>
                <span style={tagBox('기간')}>기간</span>
                <p style={{ ...sTxt, marginTop: 8 }}>처분 날로부터 60일 이내</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 5: 행정소송 ── */}
        <div style={{ background: '#f4f3f2', padding: '80px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>행정소송</h3>
            <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 360, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn02/img/mn02_05_img6.jpg" alt="행정소송"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div>
                  <span style={tagBox('요점')}>요점</span>
                  <div style={{ marginTop: 12 }}>
                    {[
                      '① 음주운전 : 혈중알코올농도 0.0100% 이상에서 운전',
                      '② 벌점누계 : 직전 1년간 121점, 2년간 201점, 3년간 271점 이상',
                      '③ 경찰의 잘못이 있거나 오해를 받아 억울하게 면허취소가 된 경우',
                    ].map((t, i) => <p key={i} style={{ ...sTxt, marginBottom: 6 }}>{t}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
