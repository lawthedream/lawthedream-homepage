import type { Metadata } from 'next'
import IntroSubVisual from '@/components/IntroSubVisual'
import IntroNavTabs from '@/components/IntroNavTabs'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '온라인상담 | 더드림법률사무소',
  description: '더드림법률사무소 온라인 무료상담 신청. 산재·보험·교통사고·중대재해 전문가가 24시간 신속하게 답변드립니다. 02-6959-5053',
  keywords: '더드림 온라인상담, 산재 무료상담, 보험 무료상담, 법률 온라인상담',
  alternates: { canonical: 'https://www.lawthedream.com/consult' },
}

export default function ConsultPage() {
  return (
    <>
      <IntroSubVisual title="온라인상담" subtitle="24시간 무료 법률상담 신청" />
      <IntroNavTabs active="consult" />

      <main id="contents" style={{ maxWidth: 800, margin: '60px auto', padding: '0 20px 80px' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 300, color: '#222', textAlign: 'center', marginBottom: 14 }}>
          온라인 무료상담 신청
        </h2>
        <p style={{ textAlign: 'center', color: '#666', fontSize: 16, marginBottom: 40 }}>
          접수 후 전문가가 신속히 연락드립니다. 비밀이 철저히 보장됩니다.
        </p>

        {/* 개인정보 안내 */}
        <div style={{ backgroundColor: '#f7f8fc', border: '1px solid #e0e4ef', borderRadius: 8, padding: '20px 24px', marginBottom: 30, fontSize: 14, color: '#555', lineHeight: 1.8 }}>
          <strong style={{ display: 'block', marginBottom: 8, color: '#333' }}>개인정보 수집·이용 안내</strong>
          수집 항목: 이름, 연락처, 상담 내용 / 수집 목적: 상담 답변 제공 / 보유 기간: 상담 완료 후 즉시 파기<br />
          위 내용에 동의하셔야 상담 신청이 가능합니다.
        </div>

        <ConsultForm gubun="온라인상담" />

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ color: '#888', fontSize: 15 }}>전화 상담을 원하시면</p>
          <a href="tel:02-6959-5053" style={{ display: 'inline-block', marginTop: 10, backgroundColor: '#2a3a5c', color: '#fff', padding: '13px 40px', borderRadius: 50, fontSize: 19, fontWeight: 700, textDecoration: 'none' }}>
            ☎ 02-6959-5053
          </a>
        </div>
      </main>
    </>
  )
}
