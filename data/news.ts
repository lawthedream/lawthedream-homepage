/**
 * 더드림 소식 데이터
 * ─────────────────────────────────────────────
 * 새 항목 추가 방법:
 *   1. 배열 맨 앞(index 0)에 추가하면 자동으로 최신순 표시됩니다.
 *   2. date: 'YYYY-MM-DD' 형식으로 입력하세요.
 *   3. thumb 이미지는 public/intro/news/ 폴더에 넣으세요.
 * ─────────────────────────────────────────────
 */

export type NewsCategory = '공중파' | '칼럼' | '유튜브' | '라디오' | '전체'

export interface NewsItem {
  id: number
  date: string          // YYYY-MM-DD
  category: NewsCategory
  title: string
  summary: string
  thumb?: string        // 썸네일 이미지 경로 (없으면 기본 이미지)
  link?: string         // 외부 링크 또는 내부 상세 경로
  youtubeId?: string    // 유튜브 영상 ID (category='유튜브'일 때)
}

/** ★ 최신 항목을 배열 맨 앞에 추가하세요 ★ */
export const newsList: NewsItem[] = [
  {
    id: 9,
    date: '2024-11-20',
    category: '유튜브',
    title: '산재 신청, 이것만 알면 됩니다 | 더드림 유튜브',
    summary: '산재 신청 절차와 주의사항을 노무사가 직접 설명합니다.',
    youtubeId: 'YOUTUBE_ID_HERE',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 8,
    date: '2024-10-15',
    category: '칼럼',
    title: '출퇴근 중 교통사고, 산재로 인정받는 방법',
    summary: '출퇴근재해 인정 요건과 실제 사례를 통해 자세히 알아봅니다.',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 7,
    date: '2024-09-03',
    category: '공중파',
    title: 'KBS 뉴스 — 과로사 인정기준 강화 보도',
    summary: '뇌심혈관 질환 산재 인정기준 변화에 대해 전문가 인터뷰.',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 6,
    date: '2024-07-22',
    category: '라디오',
    title: 'TBS 라디오 — 소음성 난청 산재 인정 사례',
    summary: '장기간 소음에 노출된 근로자의 산재 인정 절차 소개.',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 5,
    date: '2024-05-11',
    category: '유튜브',
    title: '보험회사가 절대 알려주지 않는 보험금 청구 방법',
    summary: '손해사정사가 직접 알려주는 보험금 청구 핵심 포인트.',
    youtubeId: 'YOUTUBE_ID_HERE',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 4,
    date: '2024-03-08',
    category: '칼럼',
    title: '직업성 암, 산재 인정 어떻게 받나?',
    summary: '직업성 암 산재 신청 시 필요한 서류와 인정 기준을 정리합니다.',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 3,
    date: '2023-12-19',
    category: '공중파',
    title: 'MBC 뉴스 — 중대재해처벌법 1년, 현황과 과제',
    summary: '중대재해처벌법 시행 1년을 돌아보는 전문가 분석.',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 2,
    date: '2023-10-05',
    category: '라디오',
    title: 'CBS 라디오 — 근골격계 질환 산재 신청 가이드',
    summary: '반복 작업으로 인한 근골격계 질환의 산재 인정 기준.',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
  {
    id: 1,
    date: '2023-07-14',
    category: '유튜브',
    title: '산재 승인율 높이는 3가지 핵심 전략',
    summary: '산재 신청 전 반드시 알아야 할 준비사항과 전략.',
    youtubeId: 'YOUTUBE_ID_HERE',
    thumb: '/intro/news/news_thumb_default.jpg',
  },
]

/** 카테고리 필터링 + 날짜 최신순 정렬 (이미 최신순이지만 안전장치) */
export function getNewsByCategory(category: NewsCategory): NewsItem[] {
  const filtered = category === '전체'
    ? newsList
    : newsList.filter((n) => n.category === category)
  return [...filtered].sort((a, b) => b.date.localeCompare(a.date))
}
