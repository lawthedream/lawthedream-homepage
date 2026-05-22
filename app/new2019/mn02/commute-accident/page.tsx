import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '출퇴근 중 재해 | 더드림법률사무소',
  description:
    '출퇴근 중 재해 산업재해 전문 상담. 사업주 지배관리하 출퇴근 재해와 통상의 출퇴근 재해 인정기준을 상세히 안내합니다. 02-6959-5053',
  keywords: '출퇴근 재해, 출퇴근 산재, 통상의 출퇴근, 출퇴근 사고 산재인정',
}

export default function CommuteAccidentPage() {
  return (
    <>
      <SubVisual title="출퇴근 중 재해" />

      {/* ===== 01. 정의 ===== */}
      <section className="cntbox wd2000" aria-labelledby="commute-def">
        <div className="bg_grey">
          <div className="wd1300 tit_bg">
            <div style={{ width: 60, margin: '0 auto', height: 60, textAlign: 'center', lineHeight: '60px', fontSize: 25, color: '#fff', backgroundColor: '#3cb6c1' }}>01</div>
            <h3 id="commute-def" style={{ fontSize: 30, color: '#222', fontWeight: 500, lineHeight: '80px' }}>정의</h3>

            <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start' }}>
              <img src="/new2019/mn02/img/mn02_03_01_img1.jpg" alt="출퇴근 중 재해 설명 이미지" style={{ width: 560, flexShrink: 0 }} />
              <div>
                {/* PHP에서 텍