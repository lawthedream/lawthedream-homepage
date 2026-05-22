'use client'

/**
 * NaverTracker — Naver Smart Log SPA 페이지뷰 추적
 *
 * SPA(Single Page Application)는 링크를 클릭해도 실제 페이지가 새로고침되지 않기 때문에
 * Naver Smart Log의 기본 스크립트만으로는 페이지 이동을 인식하지 못합니다.
 * 이 컴포넌트는 usePathname()으로 URL 변경을 감지하고
 * wcs_do() 함수를 수동 호출하여 각 페이지 이동을 전송합니다.
 *
 * 사용법: app/layout.tsx의 <body> 안에 한 번만 포함시키세요.
 *   import NaverTracker from '@/components/NaverTracker'
 *   ...
 *   <NaverTracker />
 */

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Naver WCS 전역 타입 선언
declare global {
  interface Window {
    wcs?: { inflow: (domain: string) => void }
    wcs_add?: Record<string, string>
    wcs_do?: () => void
    _nasa?: Record<string, unknown>
  }
}

export default function NaverTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // wcs_do 함수가 로드됐는지 확인 후 호출
    if (window.wcs && window.wcs_do) {
      // 네이버 공식 SPA 추적 방법: wcs_add에 sa 세팅 후 wcs_do() 재호출
      if (!window.wcs_add) window.wcs_add = {}
      window.wcs_add['wa'] = 's_2e00713c810' // intro.php에서 확인된 실제 계정 ID

      window.wcs.inflow('lawthedream.com')
      window.wcs_do()
    }
  }, [pathname]) // pathname 변경(=페이지 이동)마다 실행

  // 이 컴포넌트는 UI를 렌더링하지 않습니다
  return null
}
