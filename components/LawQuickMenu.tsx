'use client'

export default function LawQuickMenu() {
  return (
    <div id="quick">
      <ul>
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
      </ul>
    </div>
  )
}
