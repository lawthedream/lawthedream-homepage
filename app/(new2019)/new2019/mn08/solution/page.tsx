import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '단계별 더드림 솔루션 | 더드림법률사무소',
  description: '단계별 더드림 솔루션 — 산재부터 소송까지 단계별 전략을 안내합니다.',
}

export default function Page() {
  return (
    <>
      <SubVisual title="단계별 더드림 솔루션" />
      <section className="cntbox wd1300" style={{ padding: '60px 0' }}>
        <h3 className="con_tit">단계별 더드림 솔루션</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginTop: '20px' }}>
          해당 내용은 준비 중입니다. 더드림법률사무소에 문의하시면 전문 상담을 받으실 수 있습니다.
        </p>
        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f4f8fb', borderLeft: '5px solid #3cb6c1' }}>
          <p style={{ fontSize: '20px', fontWeight: 600, color: '#333' }}>무료 법률 상담</p>
          <p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>
            <a href="tel:02-6959-5053" style={{ color: '#278bb3', fontWeight: 700 }}>☎ 02-6959-5053</a>
            &nbsp;(24시간 상담 가능)
          </p>
        </div>
      </section>
    </>
  )
}
