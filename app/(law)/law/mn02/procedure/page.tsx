import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '형사사건 절차 | 더드림교통형사센터',
  description: '수사개시부터 법원까지 형사사건 전 절차 전문 안내. 02-6959-5053.',
  keywords: '형사절차,수사개시,경찰,검찰,법원,변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/procedure' },
}

const conTit = (text: string) => (
  <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{text}</h3>
)
const titLine = (
  <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
)
const sTxt: object = { fontSize: 15, color: '#444', lineHeight: 1.9, marginBottom: 10 }

const steps = [
  { icon: '🔍', label: '수사개시' },
  { icon: '🚔', label: '경찰' },
  { icon: '⚖️', label: '검찰' },
  { icon: '📋', label: '검찰기소 전' },
  { icon: '🔨', label: '법원' },
]

export default function Page() {
  return (
    <>
      <SiteSubVisual title="형사사건 절차" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />
      <LawNavTabs current="/law/mn02/procedure" />

      <div id="contents">
        {/* ── Section 1: 형사사건 절차 Flow ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('형사사건 절차')}
          {titLine}

          {/* 5단계 흐름도 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 60 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', width: 160 }}>
                  <div style={{
                    width: 110, height: 110, borderRadius: '50%',
                    border: `2px ${i === 2 ? 'dashed' : 'solid'} #253d5f`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px', background: '#fff',
                    boxShadow: '0 2px 12px rgba(37,61,95,0.1)'
                  }}>
                    <span style={{ fontSize: 36 }}>{step.icon}</span>
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#253d5f' }}>{step.label}</p>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 40, textAlign: 'center', color: '#253d5f', fontSize: 20, marginBottom: 30, opacity: 0.6 }}>
                    {i === 1 ? '⇢' : '→'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 2: 수사개시 ── */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px 80px' }}>
          {conTit('수사개시')}
          {titLine}

          <p style={{ textAlign: 'center', fontSize: 16, color: '#555', marginBottom: 10 }}>
            더드림은 다양하고 풍부한 실무경험으로 절차별 최적의 조력을 지원합니다.
          </p>
          <p style={{ textAlign: 'center', fontSize: 16, color: '#555', marginBottom: 40 }}>
            형사절차는 수사기관이 수사를 개시함으로써 시작 합니다.
          </p>

          {/* 수사의 개시는 2가지로 분류 */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'inline-block', background: '#253d5f', color: '#fff', padding: '10px 32px', fontSize: 16, fontWeight: 600, borderRadius: 2 }}>
              수사의 개시는 2가지로 분류
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 24 }}>
              <div style={{ width: 160, height: 160, borderRadius: '50%', background: '#bf8553', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20 }}>
                <p style={{ color: '#fff', fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>수사기관 스스로<br />개시하는 경우</p>
              </div>
              <div style={{ width: 160, height: 160, borderRadius: '50%', background: '#253d5f', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20 }}>
                <p style={{ color: '#fff', fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>일반인의 고소·고발에<br />의하여 개시되는 경우</p>
              </div>
            </div>
          </div>

          {/* 3개 상세 카드 */}
          {[
            {
              num: '01',
              title: '수사개시 단계에서의 변호사 조력',
              photo: '/law/mn02/img/mn02_06_img2.jpg',
              photoPos: 'right top',
              points: [
                '① 고소, 고소대리인을 대변하기 위한 변호인 의견서 제출',
                '② 경찰, 검찰의 수사담당자의 면담, 피해자 가해자 사이의 합의를 대리',
              ],
              reverse: false,
            },
            {
              num: '02',
              title: '수사기관의 자발적 개시',
              photo: '/law/mn02/img/mn02_06_img2.jpg',
              photoPos: 'left 40%',
              points: [
                '① 수사가 개시되는 사유로 수사기관 스스로 범죄의 혐의를 포착하여 수사에 나서는 경우를 인지라고 합니다.',
                '인지에 의한 수사는 사건이 발생한 경우 현장조사 등을 통하여 수사기관 스스로 단서를 포착하여 수사를 하는 경우를 예로 들 수 있습니다.',
                '② 다른 고소나 고발에 의한 수사 도중 다른 죄가 밝혀져서 조사를 하게 되기도 하는데(특히 무고죄의 경우), 이러한 것도 인지에 포함됩니다.',
              ],
              reverse: true,
            },
            {
              num: '03',
              title: '고소, 고발에 의한 개시',
              photo: '/law/mn02/img/mn02_06_img2.jpg',
              photoPos: 'right bottom',
              points: [
                '① 수사가 개시되는 사유로 일반인들이 가장 잘 알고 있는 것이 고소나 고발에 의해서입니다.',
                '② 고소는 피해자나 법정대리인, 친족 또는 배우자 등 관계자가 가해자를 처벌해 달라는 의사를 표시하는 것을 말합니다.',
                '③ 따라서 누구나 고소를 할 수 있는 것은 아니고, 고소권자가 법정되어 있어, 그 이외의 자는 고소를 할 수 없습니다. (형사소송법 제223조 이하)',
                '④ 또한 성범죄 등을 제외한 경우 자기 또는 배우자의 직계존속은 고소하지 못합니다. (형사소송법 제224조)',
                '⑥ 가장 쉬운 예는 112에 신고하는 것을 생각하시면 됩니다.',
              ],
              reverse: false,
            },
          ].map(({ num, title, photo, photoPos, points, reverse }) => (
            <div key={num} style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
              <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexDirection: reverse ? 'row-reverse' : 'row' }}>
                {!reverse && (
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 28, fontWeight: 700, color: '#e2d9cf', marginBottom: 6 }}>{num}</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: '#222', marginBottom: 16 }}>{title}</p>
                    {points.map((p, i) => <p key={i} style={sTxt}>{p}</p>)}
                  </div>
                )}
                <div style={{ flexShrink: 0, width: 280, height: 200, overflow: 'hidden', borderRadius: 4 }}>
                  <img src={photo} alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photoPos }} />
                </div>
                {reverse && (
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 28, fontWeight: 700, color: '#e2d9cf', marginBottom: 6 }}>{num}</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: '#222', marginBottom: 16 }}>{title}</p>
                    {points.map((p, i) => <p key={i} style={sTxt}>{p}</p>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
