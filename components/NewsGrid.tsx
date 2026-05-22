'use client'

import { useState } from 'react'
import Link from 'next/link'
import { newsList, getNewsByCategory, type NewsCategory } from '@/data/news'

const CATEGORIES: NewsCategory[] = ['전체', '공중파', '칼럼', '유튜브', '라디오']

const CATEGORY_COLORS: Record<string, string> = {
  공중파: '#e67e22',
  칼럼:  '#3cb6c1',
  유튜브: '#e74c3c',
  라디오: '#8e44ad',
}

export default function NewsGrid({ initialCategory }: { initialCategory: string }) {
  const [active, setActive] = useState<NewsCategory>(
    (CATEGORIES.includes(initialCategory as NewsCategory) ? initialCategory : '전체') as NewsCategory
  )

  const items = getNewsByCategory(active)

  return (
    <>
      {/* 카테고리 탭 */}
      <div role="tablist" aria-label="소식 카테고리" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '9px 22px',
              borderRadius: 50,
              border: active === cat ? '2px solid #3cb6c1' : '2px solid #ddd',
              backgroundColor: active === cat ? '#3cb6c1' : '#fff',
              color: active === cat ? '#fff' : '#555',
              fontWeight: active === cat ? 700 : 400,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 뉴스 그리드 — 최신순, 왼쪽→오른쪽, 위→아래 */}
      {items.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#aaa', padding: '60px 0', fontSize: 16 }}>
          등록된 소식이 없습니다.
        </p>
      ) : (
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',  /* 왼→오른쪽 3열 */
            gap: 24,
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
          aria-label="더드림 소식 목록"
        >
          {items.map((item, idx) => (
            <li key={item.id} style={{ position: 'relative' }}>
              {/* 최신 배지 — 첫 번째 항목 */}
              {idx === 0 && (
                <span style={{
                  position: 'absolute', top: 10, left: 10, zIndex: 2,
                  backgroundColor: '#e74c3c', color: '#fff',
                  fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
                }}>
                  NEW
                </span>
              )}

              <article style={{ border: '1px solid #eee', borderRadius: 10, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', transition: 'box-shadow 0.2s' }}>
                {/* 썸네일 */}
                {item.youtubeId ? (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', backgroundColor: '#000' }}>
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
                    style={{
                      width: '100%', aspectRatio: '16/9',
                      backgroundImage: `url(${item.thumb || '/intro/news/news_thumb_default.jpg'})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      backgroundColor: '#f0f2f5',
                    }}
                    role="img"
                    aria-label={item.title}
                  />
                )}

                {/* 본문 */}
                <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* 카테고리 + 날짜 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{
                      backgroundColor: CATEGORY_COLORS[item.category] || '#3cb6c1',
                      color: '#fff', fontSize: 12, fontWeight: 700,
                      padding: '3px 10px', borderRadius: 4,
                    }}>
                      {item.category}
                    </span>
                    <time dateTime={item.date} style={{ fontSize: 13, color: '#aaa' }}>
                      {item.date.replace(/-/g, '.')}
                    </time>
                  </div>

                  {/* 제목 — HTML 텍스트 (SEO) */}
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#222', lineHeight: 1.5, marginBottom: 8, flex: 1 }}>
                    {item.link ? (
                      <Link href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {item.title}
                      </Link>
                    ) : item.title}
                  </h3>

                  {/* 요약 */}
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {item.summary}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @media(max-width:768px){
          ul[aria-label="더드림 소식 목록"]{ grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:480px){
          ul[aria-label="더드림 소식 목록"]{ grid-template-columns: repeat(1,1fr) !important; }
        }
        article:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.10); }
      `}</style>
    </>
  )
}
