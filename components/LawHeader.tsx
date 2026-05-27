'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: '센터소개',
    href: '/law/mn01/greeting',
    sub: [
      { label: '인사말', href: '/law/mn01/greeting' },
      { label: '구성원', href: '/law/mn01/members' },
      { label: '왜 더드림인가', href: '/law/mn01/strength' },
      { label: '오시는길', href: '/law/mn01/location' },
    ],
  },
  { label: '12대 중과실', href: '/law/mn02/accident-12' },
  { label: '음주/뺑소니', href: '/law/mn02/drunk-driving' },
  { label: '민식이법', href: '/law/mn02/minshik-law' },
  { label: '교통사고소송', href: '/law/mn02/lawsuit' },
  { label: '면허취소구제', href: '/law/mn02/license' },
  { label: '형사사건절차', href: '/law/mn02/procedure' },
  { label: '더드림솔루션', href: '/law/mn02/solution' },
  {
    label: '상담 안내',
    href: '/law/mn08/consult',
    sub: [
      { label: '온라인상담', href: '/law/mn08/consult' },
      { label: '방문상담', href: '/law/mn08/info' },
    ],
  },
]

export default function LawHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => { setMobileOpen(false); setOpenIdx(null) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <div id="law-header">
        <div className="header-inner">
          <div style={{ overflow: 'hidden' }}>
            {/* Logo */}
            <div id="logo">
              <h1>
                <Link href="/law">더드림 교통형사센터</Link>
              </h1>
            </div>
            {/* Right top: tel + SNS */}
            <div id="right_top">
              <ul>
                <li className="r_tel">
                  <a href="tel:02-6959-5053">
                    24시 법률상담<br /><b>02-6959-5053</b>
                  </a>
                </li>
                <li>
                  <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/law/images/h_kakao.png" alt="카카오톡" />
                  </a>
                </li>
                <li>
                  <a href="https://blog.naver.com/thedream5053" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/law/images/h_blog.png" alt="블로그" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="hamburger-btn"
            aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span style={{ transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform 0.25s' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform 0.25s' }} />
          </button>
        </div>

        {/* GNB — header-inner 바깥으로 이동하여 전체 너비 적용 */}
        <div id="gnb">
          <div className="gnb-inner">
            <ul id="top_link">
              {navItems.map((item, idx) => (
                <li
                  key={item.label}
                  className="sub_top"
                  onMouseEnter={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.sub && hoverIdx === idx && (
                    <ul className="sub_menu tran_box1">
                      {item.sub.map(s => (
                        <li key={s.href}>
                          <Link href={s.href}>{s.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Header spacer */}
      <div className="law-header-spacer" />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div role="dialog" aria-modal="true" className="law-mobile-drawer">
          <button aria-label="메뉴 닫기" onClick={() => setMobileOpen(false)} className="law-mobile-close">✕</button>
          <a href="tel:02-6959-5053" className="law-mobile-tel">☎ 02-6959-5053 무료상담</a>
          <nav>
            {navItems.map((item, idx) => (
              <div key={item.label} className="law-mobile-item">
                <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="law-mobile-btn">
                  {item.label}
                  {item.sub && (
                    <span style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>▾</span>
                  )}
                </button>
                {openIdx === idx && item.sub && (
                  <ul className="law-mobile-sub">
                    {item.sub.map(s => (
                      <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                    ))}
                  </ul