'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '센터소개', href: '/center/mn01/greeting' },
  { label: '암·뇌·심장질환 진단비', href: '/center/mn02/cancer-brain' },
  { label: '사망·후유장해', href: '/center/mn03/death-disability' },
  { label: '근재·배상책임', href: '/center/mn04/industrial' },
  { label: '교통사고', href: '/center/mn05/traffic' },
  { label: '온라인상담', href: '/center/mn06/consult' },
  { label: '오시는 길', href: '/center/mn08/lawsuit' },
]

export default function CenterHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 130)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <div id="header">
        <div id="gnb" className="fixed">
          <ul id="top_link" className={`clear${scrolled ? ' fixed bgc' : ''}`}>
            <div id="logo">
              <h1>
                <Link href="/center">더드림 보험분쟁센터</Link>
              </h1>
            </div>
            {navItems.map((item) => (
              <li key={item.label} className="sub_top">
                <Link href={item.href} className={pathname.startsWith(item.href) ? 'on' : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
            {/* 전화 버튼 */}
            <li className="sub_top" style={{ backgroundColor: '#fff558', border: '2px solid #381e1f', padding: '12px 0', borderRadius: '50px' }}>
              <a href="tel:02-6959-5053" style={{ fontSize: '17px', position: 'relative', top: '-6px', lineHeight: '130%', textAlign: 'center', color: '#381e1f' }}>
                24시 법률상담<br />
                <b style={{ fontWeight: 300, color: '#381e1f' }}>02-6959-5053</b>
              </a>
            </li>
            {/* 모바일 햄버거 */}
            <button
              className="hamburger-btn"
              aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
              onClick={() => setMobileOpen(v => !v)}
              style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', width: 40, height: 40, background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginLeft: '4px' }}
            >
              <span style={{ display: 'block', width: 24, height: 2, backgroundColor: mobileOpen ? '#26b0bf' : '#333', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform 0.25s' }} />
              <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#333', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ display: 'block', width: 24, height: 2, backgroundColor: mobileOpen ? '#26b0bf' : '#333', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform 0.25s' }} />
            </button>
          </ul>
        </div>
      </div>

      {mobileOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#fff', overflowY: 'auto', paddingTop: 70 }}>
          <button aria-label="메뉴 닫기" onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 14, right: 16, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#333' }}>✕</button>
          <a href="tel:02-6959-5053" style={{ display: 'block', margin: '0 16px 16px', backgroundColor: '#fff558', border: '2px solid #381e1f', borderRadius: 8, padding: '14px 0', textAlign: 'center', fontSize: 17, fontWeight: 700, color: '#381e1f' }}>
            ☎ 02-6959-5053 무료상담
          </a>
          <nav>
            {navItems.map((item) => (
              <div key={item.label} style={{ borderTop: '1px solid #eee' }}>
                <Link href={item.href} style={{ display: 'block', padding: '16px 20px', fontSize: 17, fontWeight: 600, color: pathname === item.href ? '#26b0bf' : '#222' }}>
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
