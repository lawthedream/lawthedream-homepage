'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    img: '/law/images/main/visual05.jpg',
    txt: '/law/images/main/visual_txt.png',
  },
  {
    img: '/law/images/main/visual02.jpg',
    txt: '/law/images/main/visual_txt02.png',
  },
]

export default function LawMainSlider() {
  const [current, setCurrent] = useState(0)
  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const t = setInterval(next, 6500)
    return () => clearInterval(t)
  }, [next])

  return (
    /* 이미지 원본 비율(2000×925 = 46.25%) 그대로 유지하면서 뷰포트에 맞게 축소 */
    <div
      id="main_visual"
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '46.25%',   /* 925/2000 = 46.25% — 비례 높이 */
        overflow: 'hidden',
        borderTop: '1px solid #c4c3c1',
      }}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 0.8s ease',
            opacity: idx === current ? 1 : 0,
            zIndex: idx === current ? 1 : 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.img}
            alt={`메인 비주얼 ${idx + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '12%',
            left: '22%',
            zIndex: 2,
            maxWidth: '50%',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.txt} alt="슬라이드 텍스트" style={{ width: '100%', maxWidth: 520, height: 'auto' }} />
          </div>
        </div>
      ))}

      {/* 좌우 화살표 */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '50%',
        transform: 'translateY(-50%)', zIndex: 10,
        display: 'flex', justifyContent: 'space-between', padding: '0 20px',
        pointerEvents: 'none',
      }}>
        <button onClick={prev} style={{ pointerEvents: 'all', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/images/main/visual_arrow_left.png" alt="이전" width={52} height={68} />
        </button>
        <button onClick={next} style={{ pointerEvents: 'all', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/images/main/visual_arrow_right.png" alt="다음" width={52} height={68} />
        </button>
      </div>

      {/* 하단 페이지 버튼 */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%',
        transform: 'translateX(-50%)', zIndex: 10,
        display: 'flex', gap: 10,
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={idx === current ? `/law/images/main/visual_btn${idx}_o.gif` : `/law/images/main/visual_btn${idx}.gif`}
              alt={`슬라이드 ${idx + 1}`}
              width={53}
              height={20}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
