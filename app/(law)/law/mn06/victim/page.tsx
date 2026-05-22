import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '피해자 | 더드림교통형사센터',
  description: '형사 피해자 법적 권리 보호. 고소·손해배상 전문 지원. 02-6959-5053.',
  keywords: '형사피해자,고소,피해자변호,손해배상',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn06/victim' },
}

const badge = (text: string, color = '#bf8553'): object => ({
  display: 'inline-block', background: color, color: '#fff',
  padding: '7px 22px', borderRadius: 30, fontSize: 16, fontWeight: 500, marginBottom: 18,
})
const conTit = (text: string) => (
  <h3 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#222', marginBottom: 20 }}>{text}</h3>
)
const titLine = (
  <div style={{ width: 1, height: 40, background: '#bbb', margin: '0 auto 40px' }} />
)
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="피해자 지원" site="law" bgImage="/law/mn06/img/sub_vs06.jpg" />
      <LawNavTabs current="/law/mn06/victim" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('피해자 지원')}
          {titLine}

          <div style={{ border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 500, height: 200, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn06/img/mn06_03_img1.jpg" alt="피해자 지원"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('피해자의 권리')}>피해자의 권리</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  범죄 피해자는 단순히 피해를 입은 사람이 아니라 형사 절차에서 중요한 역할을 하는 당사자입니다. 피해자의 권리를 적극 행사하여 정당한 보상과 처벌을 이끌어낼 수 있습니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>피해자는 고소권, 수사 진행상황 통보 요청권, 공판 열람·등사권, 의견 진술권, 배상명령 신청권 등 다양한 권리를 가집니다.</p>
              </div>
            </div>
          </div>

          <div style={{ background: '#f4f3f2', padding: '40px', borderRadius: 4 }}>
            <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: '#253d5f', marginBottom: 30 }}>더드림의 피해자 지원 서비스</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { num: '01', title: '고소장 작성', desc: '철저한 사실 조사와 법적 분석을 바탕으로 강력한 고소장을 작성합니다.' },
                { num: '02', title: '수사 지원', desc: '수사기관 조사 동행, 증거 수집, 유리한 진술 준비를 지원합니다.' },
                { num: '03', title: '손해배상 청구', desc: '형사 절차와 병행하여 민사상 손해배상 청구를 진행합니다.' },
                { num: '04', title: '2차 피해 방지', desc: '피해자의 개인정보 보호와 2차 피해 방지를 위한 법적 조치를 취합니다.' },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ flex: 1, minWidth: 220, background: '#fff', borderRadius: 8, padding: '28px 24px', textAlign: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#bf8553', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <span style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>{num}</span>
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#222', marginBottom: 10 }}>{title}</p>
                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
