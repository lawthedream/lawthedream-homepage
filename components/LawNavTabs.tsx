import Link from 'next/link'

// 섹션별 독립 탭 구조 (원본 PHP tabs.php 기준)
const SECTION_TABS: Record<string, { label: string; href: string }[]> = {
  '/law/mn01': [
    { label: '인사말', href: '/law/mn01/greeting' },
    { label: '구성원소개', href: '/law/mn01/members' },
    { label: '왜 더드림인가', href: '/law/mn01/strength' },
    { label: '오시는 길', href: '/law/mn01/location' },
  ],
  '/law/mn02': [
    { label: '12대 중과실', href: '/law/mn02/accident-12' },
    { label: '음주/뺑소니', href: '/law/mn02/drunk-driving' },
    { label: '민식이법', href: '/law/mn02/minshik-law' },
    { label: '합의', href: '/law/mn02/lawsuit' },
    { label: '면허취소 구제', href: '/law/mn02/license' },
    { label: '형사사건절차', href: '/law/mn02/procedure' },
    { label: '더드림 솔루션', href: '/law/mn02/solution' },
  ],
  '/law/mn03': [
    { label: '성희롱', href: '/law/mn03/sexual-harassment' },
    { label: '성추행', href: '/law/mn03/molestation' },
    { label: '성폭행'