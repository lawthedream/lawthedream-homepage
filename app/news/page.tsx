import type { Metadata } from 'next'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'
import NewsGrid from '@/components/NewsGrid'

export const metadata: Metadata = {
  title: '더드림 소식 | 더드림법률사무소',
  description: '더드림법률사무소 미디어 소식 — TV 공중파 출연, 칼럼, 유튜브, 라디오 등 최신 소식을 전합니다.',
  keywords: '더드림 소식, 더드림 칼럼, 더드림 유튜브, 산재 뉴스, 더드림 언론',
  alternates: { canonical: 'https://www.lawthedream.com/news' },
}

export default function NewsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = (searchParams.category as string) || '전체'

  return (
    <>
      <IntroSubVisual title="더드림 소식" subtitle="미디어 속 더드림 — 최신 소식을 전합니다" />
      <IntroNavTabs active="news" />
      <main id="contents" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 20px 80px' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 40 }}>
          미디어 속 더드림
        </h2>
        {/* 클라이언트 컴포넌트 — 탭 + 그리드 */}
        <NewsGrid initialCategory={category} />
      </main>
    </>
  )
}
