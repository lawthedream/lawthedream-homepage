'use client'

export default function LawQuickMenu() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div id="quick">
      <ul>
        {/* Header banner */}
        <li className="quick_menu">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <a href="tel:02-6959-5053">
            <img src="/law/images/quick_01.png" alt="전화 무료상담" />
          </a>
        </li>
        {/* Online consult */}
        <li className="quick_menu">
          <a href="/law/mn08/consult">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/images/quick_02.png" alt="온라인상담" />
          </a>
        </li>
        {/* Kakao */}
        <li className="quick_menu">
          <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/images/quick_04.png" alt="카카오톡 상담" />
          </a>
        </li>
        {/* Top button */}
        <li className="quick_top">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTop() }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/images/quick_05.png" alt="맨 위로" />
          </a>
        </li>
      </ul>
    </div>
  )
}
