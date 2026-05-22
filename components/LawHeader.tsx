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
      { label: '보도자료', href: '/law/mn08/press' },
    ],
  },
]

export default function LawHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => { setMobileOpen(false); setOpenIdx(null) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <div id="header" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: '#fff', borderBottom: '1px solid #c4c3c1', borderTop: '1px solid #c4c3c1' }}>
        <div style={{ width: 1400, margin: '0 auto', paddingTop: 10 }}>
          <div style={{ overflow: 'hidden' }}>
            <div id="logo" style={{ float: 'left', width: 434, height: 90 }}>
              <h1>
                <Link href="/law" style={{ display: 'block', width: '100%', height: 80, background: 'url(/law/images/logo.png) no-repeat center center', textIndent: -3000, fontSize: 0 }}>더드림 교통사고전문센터</Link>
              </h1>
            </div>
            <div style={{ float: 'right', textAlign: 'right', marginTop: 21 }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ float: 'left', marginRight: 10, backgroundColor: '#253d5f', padding: '10px 25px', borderRadius: 50 }}>
                  <a href="tel:02-6959-5053" style={{ display: 'block', fontSize: 18, color: '#fff', lineHeight: '130%', fontWeight: 700 }}>
                    24시 법률상담<br /><b style={{ fontWeight: 300 }}>02-6959-5053</b>
                  </a>
                </li>
                <li style={{ float: 'left', marginRight: 10 }}>
                  <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer">
                    <img src="/law/images/h_kakao.png" alt="카카오톡" style={{ verticalAlign: 'middle' }} />
                  </a>
                </li>
                <li style={{ float: 'left' }}>
                  <a href="https://blog.naver.com/thedream5053" target="_blank" rel="noopener noreferrer">
                    <img src="/law/images/h_blog.png" alt="블로그" style={{ verticalAlign: 'middle' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="gnb" style={{ width: '100%', float: 'left', textAlign: 'center', height: 82 }}>
            <ul id="top_link" style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {navItems.map((item, idx) => (
                <li key={item.label} className="sub_top" style={{ position: 'relative', display: 'inline-block', width: 115, textAlign: 'center', height: 57, lineHeight: '57px' }}>
                  <Link href={item.href} style={{ display: 'block', color: '#222', fontSize: 17, lineHeight: '57px', fontWeight: 400 }}>{item.label}</Link>
                  {item.sub && (
                    <ul className="sub_menu tran_box1" style={{ position: 'absolute', width: 155, top: 57, left: -1, border: '1px solid #ccc', overflow: 'hidden', borderTop: '3px solid #555', zIndex: 999, background: 'rgba(21,21,21,0.85)', display: 'none' }}>
                      {item.sub.map(s => (
                        <li key={s.href}>
                          <Link href={s.href} style={{ lineHeight: '30px', fontSize: 15, color: '#fff', paddingLeft: 15, display: 'block' }}>{s.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button className="hamburger-btn" aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMobileOpen(v => !v)} style={{ display: 'none', position: 'absolute', top: 14, right: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 40, height: 40, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform 0.25s' }} />
            <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform 0.25s' }} />
          </button>
        </div>
      </div>
      <div style={{ height: 100 }} />

      {mobileOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#fff', overflowY: 'auto', paddingTop: 70 }}>
          <button aria-label="메뉴 닫기" onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 14, right: 16, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#333' }}>✕</button>
          <a href="tel:02-6959-5053" style={{ display: 'block', margin: '0 16px 16px', backgroundColor: '#253d5f', borderRadius: 8, padding: '14px 0', textAlign: 'center', fontSize: 17, fontWeight: 700, color: '#fff' }}>
            ☎ 02-6959-5053 무료상담
          </a>
          <nav>
            {navItems.map((item, idx) => (
              <div key={item.label} style={{ borderTop: '1px solid #eee' }}>
                <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'none', border: 'none', fontSize: 17, fontWeight: 600, color: '#222', cursor: 'pointer', textAlign: 'left' }}>
                  {item.label}
                  {item.sub && <span style={{ fontSize: 14, color: '#aaa', transform: openIdx === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>▾</span>}
                </button>
                {openIdx === idx && item.sub && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 8px 0', backgroundColor: '#f9f9f9' }}>
                    {item.sub.map(s => (
                      <li key={s.href}><Link href={s.href} style={{ display: 'block', padding: '12px 30px', fontSize: 15, color: '#555' }}>{s.label}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
