import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import LawNavTabs from '@/components/LawNavTabs'

export const metadata: Metadata = {
  title: '직장 내 성희롱 | 더드림교통형사센터',
  description: '직장 내 성희롱 형사·민사 대응 전문 변호사. 피해자·피의자 모두 상담 가능. 02-6959-5053.',
  keywords: '직장내성희롱,성희롱변호사,성희롱처벌,직장성범죄',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn03/sexual-harassment' },
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
const cardStyle: object = { border: '1px solid #e2e2e2', borderRadius: 4, padding: '36px 40px', marginBottom: 24, background: '#fff' }
const sTxt: object = { fontSize: 16, fontWeight: 300, color: '#444', lineHeight: 1.9, marginBottom: 14 }
const sep: object = { borderTop: '1px solid #ddd', margin: '18px 0' }

export default function Page() {
  return (
    <>
      <SiteSubVisual title="직장 내 성희롱" site="law" bgImage="/law/mn03/img/sub_vs03.jpg" />
      <LawNavTabs current="/law/mn03/sexual-harassment" />

      <div id="contents">
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '80px 20px 60px' }}>
          {conTit('직장 내 성희롱 key point')}
          {titLine}

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 420, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_01_img1.jpg" alt="직장 내 성희롱"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('직장 내 성희롱')}>직장 내 성희롱</span>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#222', lineHeight: 1.8, marginBottom: 12 }}>
                  직장 내 성희롱이란 사업주·상급자 또는 근로자가 직장 내의 지위를 이용하거나 업무와 관련하여 다른 근로자에게 성적 언동 등으로 성적 굴욕감 또는 혐오감을 느끼게 하거나 성적 언동 등을 이유로 고용에서 불이익을 주는 행위를 말합니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  직장 내 성희롱은 남녀고용평등법에 의해 금지되며, 사업주가 직장 내 성희롱을 한 경우 1천만원 이하의 과태료에 처하며, 피해 근로자에게 불이익 조치를 한 사업주는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처합니다.
                </p>
                <p style={sTxt}>
                  성희롱 피해를 당했거나 성희롱으로 신고를 받은 경우 모두 전문 변호사의 도움을 받아 적절한 대응을 해야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('직장 내 성희롱 유형', '#253d5f')}>직장 내 성희롱 유형</span>
                <p style={sTxt}>
                  <strong>신체적 성희롱:</strong> 입맞춤이나 포옹, 뒤에서 껴안는 행위, 가슴·엉덩이 등 특정 신체 부위를 만지는 행위, 안마나 애무를 강요하는 행위 등
                </p>
                <p style={sTxt}>
                  <strong>언어적 성희롱:</strong> 음란한 농담이나 음담패설, 외모에 대한 성적 비유나 평가, 성적 관계를 암시하는 언동이나 추근거림 등
                </p>
                <p style={sTxt}>
                  <strong>시각적 성희롱:</strong> 외설적인 사진·그림·낙서·출판물 등을 게시하거나 보여주는 행위, 직접 또는 통신매체를 이용한 음란한 내용의 전화통화, 성과 관련된 자신의 특정 신체부위를 고의로 노출하거나 만지는 행위 등
                </p>
              </div>
              <div style={{ flexShrink: 0, width: 380, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_01_img2.jpg" alt="직장 내 성희롱 유형"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 320, height: 260, overflow: 'hidden', borderRadius: 4 }}>
                <img src="/law/mn03/img/mn03_01_img3.jpg" alt="직장 내 괴롭힘"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={badge('직장 내 괴롭힘')}>직장 내 괴롭힘</span>
                <p style={sTxt}>
                  직장 내 괴롭힘이란 사용자 또는 근로자가 직장에서의 지위 또는 관계 등의 우위를 이용하여 업무상 적정범위를 넘어 다른 근로자에게 신체적·정신적 고통을 주거나 근무환경을 악화시키는 행위를 말합니다.
                </p>
                <div style={sep} />
                <p style={sTxt}>
                  직장 내 괴롭힘 금지 규정은 근로기준법에 신설되어 2019년 7월 16일부터 시행되고 있습니다. 직장 내 괴롭힘을 한 사용자는 1천만원 이하의 과태료에 처하며, 피해 근로자에 대한 불이익 조치를 한 경우 3년 이하의 징역 또는 3천만원 이하의 벌금에 처합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: '#f4f3f2', padding: '60px 20px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 18, color: '#253d5f', fontWeight: 600, marginBottom: 20 }}>
              직장 내 성희롱·괴롭힘 피해를 입으셨다면 즉시 증거를 확보하고 전문가의 도움을 받으세요.
            </p>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 2 }}>
              문자·카톡 메시지, 이메일, 목격자 진술 등 증거를 보존하고<br />
              회사 내 신고 절차 또는 경찰 신고를 통해 적극적으로 대응하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
