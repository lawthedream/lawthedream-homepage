/**
 * MediaSection — 메인 페이지 하단 "미디어 속 더드림" 섹션
 * 최신순 4개를 2×2 그리드로 표시 (왼쪽상단→오른쪽상단→왼쪽하단→오른쪽하단)
 * Server Component — 빌드 시 데이터 정적 렌더링 (SEO 최적)
 */
import Link from 'next/link'
import { getNewsByCategory } from '@/data/news'

export default function MediaSection() {
  // 전체 최신 4개 — 이미 최신순 정렬 상태
  const items = getNewsByCategory('전체').slice(0, 4)

  const CATEGORY_COLORS: Record<string, string> = {
    공중파: '#e67e22', 칼럼: '#3cb6c1', 유튜브: '#e74c3c', 라디오: '#8e44ad',
  }

  return (
    <section
      aria-label="미디어 속 더드림"
      style={{ backgroundColor: '#1a2232', padding: '70px 20px' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* 섹션 헤더 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ color: '#3cb6c1', fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6 }}>
              MEDIA
            </p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 700, margin: 0 }}>
              미디어 속 더드림
            </h2>
          </div>
          <Link href="/news" style={{ color: '#3cb6c1', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid #3cb6c1', padding: '7px 18px', borderRadius: 50 }}>
            전체보기 →
          </Link>
        </div>

        {/*
          ★ 최신순 그리드 배치 ★
          index 0(최신) = 왼쪽 상단
          index 1       = 오른쪽 상단
          index 2       = 왼쪽 하단
          index 3       = 오른쪽 하단
        */}
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, listStyle: 'none', padding: 0, margin: 0 }}
          aria-label="최신 미디어 소식 4개">
          {items.map((item, idx) => (
            <li key={item.id}>
              <article style={{ backgroundColor: '#243047', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* 썸네일 */}
                {item.youtubeId ? (
                  <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div
                    style={{ width: '100%', aspectRatio: '16/9', backgroundImage: `url(${item.thumb || '/intro/news/news_thumb_default.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#2d3a50' }}
                    role="img" aria-label={item.title}
                  />
                )}

                {/* 내용 */}
                <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ backgroundColor: CATEGORY_COLORS[item.category] || '#3cb6c1', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 4 }}>
                      {item.category}
                    </span>
                    {/* 최신 배지 */}
                    {idx === 0 && (
                      <span style={{ backgroundColor: '#e74c3c', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>NEW</span>
                    )}
                    <time dateTime={item.date} style={{ fontSize: 12, color: '#8899aa' }}>
                      {item.date.replace(/-/g, '.')}
                    </time>
                  </div>
                  <h3 style={{ color: '#e8edf4', fontSize: 15, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#8899aa', fontSize: 13, lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {item.summary}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p style={{ textAlign: 'center', marginTop: 30, color: '#8899aa', fontSize: 14 }}>
          최신 소식 순서대로 왼쪽 상단 → 오른쪽 상단 → 왼쪽 하단 → 오른쪽 하단으로 표시됩니다.
          새 소식은 <Link href="/news" style={{ color: '#3cb6c1' }}>더드림 소식</Link>에서 모두 확인하세요.
        </p>
      </div>

      <style>{`
        @media(max-width:600px){
          ul[aria-label="최신 미디어 소식 4개"]{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
