import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '더드림솔루션 | 더드림교통형사센터',
  description: '더드림 보호프로그램 — 형사소송·대응 진행, 단계별 변호사 조력 전략. 더드림 교통형사 전문.',
  keywords: '더드림솔루션,보호프로그램,형사소송,교통형사,교통사고변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/solution' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="더드림솔루션" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — 더드림 보호프로그램 메인 이미지 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">더드림 보호프로그램</h3>
          <span className="mn02-h3-line" />
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/law/mn02/img/mn02_07_img1.jpg"
              alt="더드림 보호프로그램"
              style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          </div>
        </section>

        {/* Section 2 — 보호 프로그램 과정 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">보호 프로그램 과정</h3>
          <span className="mn02-h3-line" />
          {/* 벤다이어그램 — 4단계 과정 */}
          <div className="mn02-venn">
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle blue">변호사<br />전체회의</div>
              <div className="mn02-venn-desc">성공사례와 판례를 기반으로 전체회의를 통해 최적의 형사 변호사 배정</div>
            </div>
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle gold">형사 TF팀<br />구성</div>
              <div className="mn02-venn-desc">해당 사건에 특화된 팀을 구성 사건진행 총괄</div>
            </div>
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle blue">TF팀<br />전략회의</div>
              <div className="mn02-venn-desc">누적된 성공사례를 바탕으로 사건해결을 위한 전략수립</div>
            </div>
            <div className="mn02-venn-item">
              <div className="mn02-venn-circle gold">수사기관과<br />커뮤니케이션</div>
              <div className="mn02-venn-desc">담당변호사 외 전체변호사들간 사건공유 해당기관과 긴밀한 소통</div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
