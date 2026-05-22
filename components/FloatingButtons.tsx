'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="quick">
      {/* 전화 버튼 */}
      <a href="tel:02-6959-5053" title="전화 상담">
        <Image
          src="/new2019/images/quick_02.png"
          alt="전화 상담"
          width={81}
          height={72}
          unoptimized
        />
      </a>

      {/* 카카오 상담 버튼 */}
      <Link
        href="https://pf.kakao.com/_uDksxb"
        target="_blank"
        rel="noopener noreferrer"
        title="카카오 상담"
      >
        <Image
          src="/new2019/images/quick_04.png"
          alt="카카오 상담"
          width={81}
          height={72}
          unoptimized
        />
      </Link>

      {/* TOP 버튼 */}
      {showTop && (
        <button
          onClick={scrollToTop}
          title="맨 위로"
          style={{ display: 'block', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <Image
            src="/new2019/images/quick_06.gif"
            alt="맨 위로"
            width={81}
            height={72}
            unoptimized
          />
        </button>
      )}

      <style jsx>{`
        #quick {
          position: fixed;
          right: 0;
          bottom: 120px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          width: 81px;
        }
        #quick a,
        #quick button {
          display: block;
          line-height: 0;
        }
        #quick a:hover img,
        #quick button:hover img {
          opacity: 0.85;
        }
      `}</style>
    </div>
  )
}
