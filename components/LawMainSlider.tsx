'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  { img: '/law/images/main/visual05.jpg', txt: '/law/images/main/visual_txt.png' },
  { img: '/law/images/main/visual02.jpg', txt: '/law/images/main/visual_txt02.png' },
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
    /*
     * paddingBottom 46.25% = 925/2000 — 원본 이미지 비율 유지하며 뷰포트에 따라 상하좌우 동시 축소.
     * position:relative + paddingBottom 트릭: 높이를 너비의 46.25%로 자동 계산.
     * 내부 요소 전부 position:absolute + % 좌표 → 사진·글씨 동시 비례 축소.
     */
    <div
      id="main_visual"
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '46.25%',
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
          {/* 배경 사진 — 컨테이너 100% 채움 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.img}
            alt={`메인 비주얼 ${idx + 1}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
          />
          {/* 텍스트 이미지 — 컨테이너 기준 % 위치·크기 → 함께 축소됨 */}
          <div style={{
            position: 'absolute',
            bottom: '12%',
            left: '22%',
            width: '27%',   /* 520/1920 ≈ 27% — 뷰포트에 비례 */
            zIndex: 2,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.txt} alt="슬라이드 텍스트" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      ))}

      {/* 좌우 화살표 */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '50%',
        transform: 'translateY(-50%)', zIndex: 10,
        display: 'flex', justifyContent: 'space-between', padding: '0 1%',
        pointerEvents: 'none',
      }}>
        <button onClick={prev} style={{ pointerEvents: 'all', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/images/main/visual_arrow_left.png" alt="이전" style={{ width: '2.7vw', minWidth: 30, height: 'auto' }} />
        </button>
        <button onClick={next} style={{ pointerEvents: 'all', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/law/images/main/visual_arrow_right.png" alt="다음" style={{ width: '2.7vw', minWidth: 30, height: 'auto' }} />
        </button>
      </div>

      {/* 하단 페이지 버튼 */}
      <div style={{
        position: 'absolute', bottom: '4%', left: '50%',
        transform: 'translateX(-50%)', zIndex: 10,
        display: 'flex', gap: '0.5%',
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
              style={{ width: '2.76vw', minWidth: 28, height: 'auto' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
