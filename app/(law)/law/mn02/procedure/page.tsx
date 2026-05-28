import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '형사사건절차 | 더드림교통형사센터',
  description: '형사사건 수사개시부터 법원까지의 절차. 수사개시·경찰·검찰·기소전·법원 단계별 변호사 조력 안내.',
  keywords: '형사사건절차,수사개시,고소고발,검찰,교통형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/procedure' },
}

const FLOW_STEPS = [
  { icon: '🔍', label: '수사개시' },
  { icon: '🚔', label: '경찰' },
  { icon: '⚖️', label: '검찰' },
  { icon: '📋', label: '검찰기소 전' },
  { icon: '🔨', label: '법원' },
]

export default function Page() {
  return (
    <>
      <SiteSubVisual title="형사사건절차" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — 절차 플로우 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">형사사건 절차</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-flow">
            {FLOW_STEPS.map((step, i) => (
              <div className="mn02-flow-step" key={i}>
                <div className="mn02-flow-circle">{step.icon}</div>
                <div className="mn02-flow-label">{step.label}</div>
              </div>
            ))}
          </div>
          <div className="mn02-gray-bg" style={{ textAlign: 'center' }}>
            <div className="mn02-text">
              <p>
                더드림은 다양하고 풍부한 실무경험으로 절차별 최적의 조력을 지원합니다.<br />
                형사절차는 수사기관이 수사를 개시함으로써 시작 합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — 수사개시 상세 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">수사개시</h3>
          <span className="mn02-h3-line" />

          {/* 수사개시 2가지 분류 */}
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div style={{ display: 'inline-block', background: '#253d5f', color: '#fff', padding: '10px 30px', fontWeight: 600, fontSize: 15, marginBottom: 20 }}>
              수사의 개시는 2가지로 분류
            </div>
            <div style={{ display: 'flex', gap: 30, justifyContent: 'center' }}>
              <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#bf8553', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, textAlign: 'center', lineHeight: 1.5, padding: 16 }}>
                수사기관 스스로<br />개시하는 경우
              </div>
              <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#253d5f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, textAlign: 'center', lineHeight: 1.5, padding: 16 }}>
                일반인의 고소·고발에<br />의하여 개시되는 경우
              </div>
            </div>
          </div>

          {/* 01 수사개시 단계 변호사 조력 */}
          <div className="mn02-detail-box">
            <div className="text-side">
              <div className="mn02-detail-num">01</div>
              <div className="mn02-detail-title">수사개시 단계에서의 변호사 조력</div>
              <div className="mn02-text">
                <p>① 고소, 고소대리인을 대변하기 위한 변호인 의견서 제출</p>
                <p>② 경찰, 검찰의 수사담당자의 면담, 피해자 가해자 사이의 합의를 대리</p>
              </div>
            </div>
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/procedure_docs.jpg" alt="서류 작업" />
            </div>
          </div>

          {/* 02 수사기관의 자발적 개시 */}
          <div className="mn02-detail-box">
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/procedure_police.jpg" alt="경찰 수사" />
            </div>
            <div className="text-side">
              <div className="mn02-detail-num">02</div>
              <div className="mn02-detail-title">수사기관의 자발적 개시</div>
              <div className="mn02-text">
                <p>
                  ① 수사가 개시되는 사유로 수사기관이 범죄의 혐의를 포착하여 수사에 나서는 경우를 인지라고 합니다.
                  인지에 의한 수사는 사건이 발생한 경우 현장조사 등을 통하여 수사기관 스스로 단서를
                  포착하여 수사를 하는 경우를 예로 들 수 있습니다.
                </p>
                <p>
                  ② 더러는 고소나 고발에 의한 수사 도중 다른 죄가 밝혀져서 조사를 하게 되기도 하는데
                  (특히 무고죄의 경우), 이러한 것도 인지에 포함됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* 03 고소, 고발에 의한 개시 */}
          <div className="mn02-detail-box">
            <div className="text-side">
              <div className="mn02-detail-num">03</div>
              <div className="mn02-detail-title">고소, 고발에 의한 개시</div>
              <div className="mn02-text">
                <p>
                  ① 수가 개시되는 사유로 일반인들이 가장 잘 알고 있는 것이 고소나 고발에 의해서입니다.
                </p>
                <p>
                  ② 고소는 피해자나 법정대리인, 친족 또는 배우자 등 관계자가 가해자를 처벌해 달라는
                  의사를 표시하는 것을 말합니다.
                </p>
                <p>
                  ③ 따라서 누구나 고소를 할 수 있는 것이 아니고, 고소권자가 법정되어 있어,
                  그 이외의 자는 고소를 할 수 없습니다. (형사소송법 제223조 이하)
                </p>
                <p>
                  ④ 또한 성범죄 등을 제외한 경우 자기 또는 배우자의 직계존속은 고소하지 못합니다.
                  (형사소송법 제224조)
                </p>
                <p>
                  ⑤ 고소는 대리인에 의해서도 가능한데, 이 부분에서 특히 변호사의 대리가 필요합니다.
                  잘못 고소를 하였다간 무고죄의 죄책을 질 수 있기 때문입니다.
                </p>
                <p>⑥ 가장 쉬운 예는 112에 신고하는 것을 생각하시면 됩니다.</p>
              </div>
            </div>
            <div className="photo-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/procedure_justice.jpg" alt="법원 정의 저울" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
