import Image from 'next/image'
import Link from 'next/link'

export default function LawFooter() {
  return (
    /* law-footer-wrap / law-footer 사용 — layout.css의 #footer_wrap #footer 규칙 충돌 회피 */
    <div
      id="law-footer-wrap"
      style={{ clear: 'both', width: '100%', background: '#121d26' }}
    >
      <div
        id="law-footer"
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          padding: '50px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* 로고 — 중앙 */}
        <div style={{ marginBottom: 20 }}>
          <Image
            src="/law/images/footer_logo.png"
            alt="더드림 교통사고전문센터"
            width={200}
            height={60}
            unoptimized
            style={{ display: 'block' }}
          />
        </div>

        {/* 회사 정보 — 중앙 */}
        <address
          style={{
            fontStyle: 'normal',
            color: '#acafb2',
            fontSize: 15,
            lineHeight: 2.2,
            textAlign: 'center',
          }}
        >
          더드림교통사고전문센터
          <span style={{ padding: '0 8px', color: '#556' }}>|</span>
          대표 : 박성훈
          <span style={{ padding: '0 8px', color: '#556' }}>|</span>
          서울시 서초구 사임당로 87, 1층 3층
          <br />
          사업자등록번호 : 435-07-01602
          <span style={{ padding: '0 8px', color: '#556' }}>|</span>
          고객상담전화 : 02-6959-5053
          <span style={{ padding: '0 8px', color: '#556' }}>|</span>
          팩스번호 : 02-6959-5052
          <br />
          <span style={{ color: '#7a8a9a', fontSize: 13 }}>
            copyright &copy; 2021 더드림 법률사무소. all rights reserved.
          </span>
          <br />
          <Link
            href="/law/mn08/consult"
            style={{ color: '#ccc', fontSize: 14, textDecoration: 'none', fontWeight: 600 }}
          >
            개인정보취급방침
          </Link>
        </address>
      </div>
    </div>
  )
}
