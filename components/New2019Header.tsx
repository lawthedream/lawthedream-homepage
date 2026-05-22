'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: '더 드림',
    href: '/new2019/mn01/greeting',
    sub: [
      { label: '인사말', href: '/new2019/mn01/greeting' },
      { label: '구성원', href: '/new2019/mn01/members' },
      { label: '더 드림의 강점', href: '/new2019/mn01/strength' },
      { label: '오시는 길', href: '/new2019/mn01/location' },
    ],
  },
  {
    label: '업무분야',
    href: '/new2019/mn02/occupational-cancer',
    sub: [
      { label: '직업성 암/폐질환', href: '/new2019/mn02/occupational-cancer' },
      { label: '과로사', href: '/new2019/mn02/overwork-death' },
      { label: '소음성난청', href: '/new2019/mn02/noise-hearing-loss' },
      { label: '정신질병/자살', href: '/new2019/mn02/mental-disease' },
      { label: '근골격계질환', href: '/new2019/mn02/musculoskeletal' },
      { label: '출퇴근 중 재해', href: '/new2019/mn02/commute-accident' },
      { label: '장해등급', href: '/new2019/mn02/disability-grade' },
      { label: '평균임금', href: '/new2019/mn02/average-wage' },
      { label: '자동차보험', href: '/new2019/mn02/auto-insurance' },
      { label: '근재/단체보험', href: '/new2019/mn02/group-insurance' },
      { label: '손해/질병보험', href: '/new2019/mn02/damage-insurance' },
      { label: '어선원/공무원', href: '/new2019/mn02/fisherman-official' },
    ],
  },
  {
    label: '행정·민사소송',
    href: '/new2019/mn08/admin-appeal',
    sub: [
      { label: '이의신청 및 행정소송', href: '/new2019/mn08/admin-appeal' },
      { label: '민사소송', href: '/new2019/mn08/civil-lawsuit' },
      { label: '단계별 더드림 솔루션', href: '/new2019/mn08/solution' },
    ],
  },
  {
    label: '성공사례',
    href: '/new2019/mn03/industrial',
    sub: [
      { label: '산업재해', href: '/new2019/mn03/industrial' },
      { label: '보험보상', href: '/new2019/mn03/insurance' },
      { label: '소송', href: '/new2019/mn03/lawsuit' },
    ],
  },
  {
    label: '온라인상담',
    href: '/new2019/mn04/consult',
    sub: [
      { label: '온라인 상담', href: '/new2019/mn04/consult' },
      { label: '보도자료', href: '/new2019/mn04/press' },
      { label: 'VOD', href: '/new2019/mn04/vod' },
    ],
  },
  {
    label: '오시는 길',
    href: '/new2019/mn01/location',
    sub: [{ label: '오시는 길', href: '/new2019/mn01/location' }],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 130)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileOpen(false)
    setOpenIdx(null)
  }, [pathname])

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <div id="header">
        <div id="gnb" className="fixed">
          <ul id="top_link" className={`clear${scrolled ? ' fixed bgc' : ''}`} style={{ position: 'relative' }}>
            {/* 로고 */}
            <div id="logo">
              <h1>
                <Link href="/">더드림법률사무소</Link>
              </h1>
            </div>

            {/* ── 데스크탑 네비게이션 ── */}
            {navItems.map((item) => (
              <li
                key={item.label}
                className="sub_top"
                style={item.label === '더 드림' ? { marginLeft: '36px' } : undefined}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.sub.length > 1 && (
                  <ul className="sub_menu tran_box1">
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className={pathname === s.href ? 'on' : ''}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* 24시 전화 버튼 */}
            <li
              className="sub_top"
              style={{
                backgroundColor: '#fff558',
                border: '2px solid #381e1f',
                padding: '12px 0',
                borderRadius: '50px',
              }}
            >
              <a
                href="tel:02-6959-5053"
                style={{
                  fontSize: '17px',
                  position: 'relative',
                  top: '-6px',
                  lineHeight: '130%',
                  textAlign: 'center',
                  color: '#381e1f',
                }}
              >
                24시 법률상담
                <br />
                <b style={{ fontWeight: 300, color: '#381e1f' }}>02-6959-5053</b>
              </a>
            </li>

            {/* SNS 버튼 */}
            <li className="sub_top btn">
              <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer">
                <Image src="/new2019/images/h_kakao.png" alt="카카오톡 상담" width={40} height={40} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://blog.naver.com/cpla999" target="_blank" rel="noopener noreferrer">
                <Image src="/new2019/images/h_blog.png" alt="네이버 블로그" width={40} height={40} />
              </a>
            </li>

            {/* ── 모바일: 전화 버튼 (항상 표시) ── */}
            <li
              className="mobile-call-btn"
              style={{
                display: 'none',           /* 데스크탑: 숨김 — globals.css 768px에서 flex로 전환 */
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: '8px',
              }}
            >
              <a
                href="tel:02-6959-5053"
                style={{
                  backgroundColor: '#fff558',
                  border: '1px solid #381e1f',
                  borderRadius: '50px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#381e1f',
                  whiteSpace: 'nowrap',
                }}
              >
                ☎ 무료상담
              </a>
            </li>

            {/* ── 모바일: 햄버거 버튼 ── */}
            <button
              className="hamburger-btn"
              aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                display: 'none',           /* 데스크탑: 숨김 — globals.css 768px에서 flex로 전환 */
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                width: 40,
                height: 40,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                marginLeft: '4px',
              }}
            >
              <span style={{
                display: 'block', width: 24, height: 2, backgroundColor: mobileOpen ? '#3cb6c1' : '#333',
                transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                transition: 'transform 0.25s, background-color 0.25s',
              }} />
              <span style={{
                display: 'block', width: 24, height: 2, backgroundColor: '#333',
                opacity: mobileOpen ? 0 : 1,
                transition: 'opacity 0.2s',
              }} />
              <span style={{
                display: 'block', width: 24, height: 2, backgroundColor: mobileOpen ? '#3cb6c1' : '#333',
                transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s, background-color 0.25s',
              }} />
            </button>
          </ul>
        </div>
      </div>

      {/* ── 모바일 풀스크린 메뉴 오버레이 ── */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#fff',
            overflowY: 'auto',
            paddingTop: 70,     /* 헤더 높이만큼 */
          }}
        >
          {/* 닫기 버튼 */}
          <button
            aria-label="메뉴 닫기"
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute',
              top: 14,
              right: 16,
              background: 'none',
              border: 'none',
              fontSize: 28,
              cursor: 'pointer',
              color: '#333',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* 전화 강조 */}
          <a
            href="tel:02-6959-5053"
            style={{
              display: 'block',
              margin: '0 16px 16px',
              backgroundColor: '#fff558',
              border: '2px solid #381e1f',
              borderRadius: 8,
              padding: '14px 0',
              textAlign: 'center',
              fontSize: 17,
              fontWeight: 700,
              color: '#381e1f',
            }}
          >
            ☎ 02-6959-5053 무료상담
          </a>

          {/* 메뉴 아이템 */}
          <nav>
            {navItems.map((item, idx) => (
              <div key={item.label} style={{ borderTop: '1px solid #eee' }}>
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 20px',
                    background: 'none',
                    border: 'none',
                    fontSize: 17,
                    fontWeight: 600,
                    color: '#222',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  {item.label}
                  <span style={{
                    fontSize: 14,
                    color: '#aaa',
                    transform: openIdx === idx ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}>▾</span>
                </button>

                {openIdx === idx && item.sub.length > 0 && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 8px 0', backgroundColor: '#f9f9f9' }}>
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          style={{
                            display: 'block',
                            padding: '12px 30px',
                            fontSize: 15,
                            color: pathname === s.href ? '#3cb6c1' : '#555',
                            fontWeight: pathname === s.href ? 700 : 400,
                            borderLeft: pathname === s.href ? '3px solid #3cb6c1' : '3px solid transparent',
                          }}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* SNS */}
          <div style={{ display: 'flex', gap: 16, padding: '20px 20px 40px', borderTop: '1px solid #eee', marginTop: 8 }}>
            <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer">
              <Image src="/new2019/images/h_kakao.png" alt="카카오톡 상담" width={40} height={40} />
            </a>
            <a href="https://blog.naver.com/cpla999" target="_blank" rel="noopener noreferrer">
              <Image src="/new2019/images/h_blog.png" alt="네이버 블로그" width={40} height={40} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
