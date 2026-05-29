import Image from 'next/image'
import Link from 'next/link'

export default function LawFooter() {
  return (
    <div id="footer_wrap" style={{ clear: 'both', width: '100%', background: '#121d26' }}>
      <div
        id="footer"
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          padding: '50px 20px 36px 0',
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        {/* 로고 — 좌측 */}
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/law/images/footer_logo.png"
            alt="더드림 교통사고전문센터"
            width={200}
            height={60}
            unoptimized
          />
        </div>

        {/* 구분선 */}
        <div
          style={{
            width: 1,
            height: 80,
            background: '#3a4a5a',
            flexShrink: 0,
          }}
        />

        {/* 회사 정보 — 우측 */}
        <address
          style={{
            fontStyle: 'normal',
            color: '#acafb2',
            fontSize: 15,
            lineHeight: 2,
            flex: 1,
            minWidth: 280,
          }}
        >
          더드림교통사고전문센터
          <span style={{ padding: '0 6px', color: '#556' }}>|</span>
          대표 : 박성훈
          <span style={{ padding: '0 6px', color: '#556' }}>|</span>
          서울시 서초구 사임당로 87, 1층 3층
          <br />
          사업자등록번호 : 435-07-01602
          <span style={{ padding: '0 6px', color: '#556' }}>|</span>
          고객상담전화 : 02-6959-5053
          <span style={{ padding: '0 6px', color: '#556' }}>|</span>
          팩스번호 : 02-6959-5052
          <br />
          <span style={{ color: '#7a8a9a', fontSize: 13 }}>
            copyright &copy; 2021 더드림 법률사무소. all rights reserved.
          </span>
          <Link
            href="/law/mn08/consult"
            style={{ marginLeft: 16, color: '#ccc', fontSize: 13, textDecoration: 'none' }}
          >
            개인정보취급방침
          </Link>
        </address>
      </div>
    </div>
  )
}
