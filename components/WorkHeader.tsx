'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: '연구원 소개',
    href: '/work/mn01/greeting',
    sub: [
      { label: '인사말', href: '/work/mn01/greeting' },
      { label: '구성원', href: '/work/mn01/members' },
      { label: '더드림 & 직업병', href: '/work/mn01/intro' },
    ],
  },
  {
    label: '업무분야',
    href: '/work/mn02/overwork',
    sub: [
      { label: '과로사', href: '/work/mn02/overwork' },
      { label: '정신질병/자살', href: '/work/mn02/mental' },
      { label: '소음성난청', href: '/work/mn02/hearing-loss' },
      { label: '근골격계질환', href: '/work/mn02/musculoskeletal' },
      { label: '직업성 암', href: '/work/mn02/cancer' },
      { label: '직업성 폐질환', href: '/work/mn02/lung-disease' },
      { label: '기타직업병', href: '/work/mn02/other-disease' },
      { label: '일반 산재', href: '/work/mn02/general' },
    ],
  },
  { label: '성공사례', href: '/work/mn03/cases' },
  { label: '온라인상담', href: '/work/mn04/consult' },
  { label: '오시는길', href: '/work/mn05/location' },
]

export default function WorkHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => { setMobileOpen(false); setOpenIdx(null) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <div id="header">
        <div id="header_wrap">
          <div id="gnb" className={`fixed_top${scrolled ? ' scrolled' : ''}`} style={{ background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff', borderBottom: '1px solid #ddd', padding: '0 20px' }}>
            <ul id="top_link" className="clear" style={{ listStyle: 'none', padding: 0, display: 'flex', alignItems: 'center', maxWidth: 1400, margin: '0 auto', height: 70 }}>
              <a href="/work">
                <h1 className="logo" style={{ margin: 0 }}>
                  <Image src="/work/images/logo.png" alt="더드림직업병연구소" width={180} height={50} unoptimized />
                </h1>
              </a>
              {navItems.map((item, idx) => (
                <li key={item.label} className="sub_top" style={{ position: 'relative', paddingLeft: idx === 0 ? 100 : 0, marginLeft: idx === 0 ? 0 : 0 }}>
                  <Link href={item.href} style={{ display: 'block', padding: '0 18px', color: '#222', fontSize: 17, lineHeight: '70px', fontWeight: 400 }}>{item.label}</Link>
                  {item.sub && (
                    <ul className="sub_menu tran_box1" style={{ position: 'absolute', minWidth: 155, top: 70, left: 0, border: '1px solid #ccc', overflow: 'hidden', borderTop: '3px solid #253d5f', zIndex: 999, background: '#fff', display: 'none' }}>
                      {item.sub.map(s => (
                        <li key={s.href}>
                          <Link href={s.href} style={{ lineHeight: '36px', fontSize: 15, color: '#333', paddingLeft: 15, display: 'block' }}>{s.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {/* 전화 버튼 */}
              <li style={{ marginLeft: 'auto', backgroundColor: '#253d5f', padding: '10px 20px', borderRadius: 50 }}>
                <a href="tel:1833-6116" style={{ fontSize: 17, position: 'relative', top: -6, lineHeight: '130%', textAlign: 'center', color: '#fff', display: 'block' }}>
                  24시 전국무료상담<br /><b style={{ fontWeight: 300, color: '#fff' }}>1833-6116</b>
                </a>
              </li>
              <button className="hamburger-btn" aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMobileOpen(v => !v)} style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 40, height: 40, background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginLeft: 8 }}>
                <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform 0.25s' }} />
                <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
                <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform 0.25s' }} />
              </button>
            </ul>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#fff', overflowY: 'auto', paddingTop: 70 }}>
          <button aria-label="메뉴 닫기" onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 14, right: 16, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#333' }}>✕</button>
          <a href="tel:1833-6116" style={{ display: 'block', margin: '0 16px 16px', backgroundColor: '#253d5f', borderRadius: 8, padding: '14px 0', textAlign: 'center', fontSize: 17, fontWeight: 700, color: '#fff' }}>
            ☎ 1833-6116 무료상담
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
