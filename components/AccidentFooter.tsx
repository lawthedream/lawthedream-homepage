import Image from 'next/image'

export default function AccidentFooter() {
  return (
    <div id="footer_wrap" style={{ clear: 'both', width: '100%', minHeight: 339, background: '#121d26' }}>
      <div id="footer" style={{ width: 1300, margin: '0 auto', overflow: 'hidden', position: 'relative', padding: '0 20px' }}>
        <div style={{ paddingTop: 77, paddingBottom: 30 }}>
          <Image src="/accident/images/footer_logo.png" alt="더드림 중대재해센터" width={200} height={60} unoptimized />
          <a href="#" style={{ fontSize: 18, color: '#fff', fontWeight: 400, marginLeft: 20 }}>개인정보취급방침</a>
        </div>
        <address style={{ fontSize: 18, color: '#acafb2', fontWeight: 400, fontStyle: 'normal' }}>
          더드림중대재해센터<span style={{ padding: '0 7px', color: '#acafb2' }}>|</span>
          대표 : 박성훈<span style={{ padding: '0 7px' }}>|</span>
          서울시 서초구 사임당로 87, 1층 3층<br />
          사업자등록번호 : 435-07-01602<span style={{ padding: '0 7px' }}>|</span>
          고객상담전화 : 02-6959-5053<span style={{ padding: '0 7px' }}>|</span>
          팩스번호 : 02-6959-5052
          <p style={{ paddingTop: 14, display: 'block', color: '#acafb2', fontWeight: 400, fontSize: 18, paddingBottom: 24 }}>
            copyright (c) 2023 더드림 법률사무소. all rights reserved.
          </p>
        </address>
      </div>
    </div>
  )
}
