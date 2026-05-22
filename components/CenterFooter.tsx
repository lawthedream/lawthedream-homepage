export default function CenterFooter() {
  return (
    <div id="f_line" style={{ background: '#262c36', paddingTop: 50, paddingBottom: 30 }}>
      <div id="footer_wrap" className="clear" style={{ width: 1300, margin: '0 auto' }}>
        <div id="footer_logo" style={{ width: 220, height: 50, float: 'left', textIndent: -9999 }}>
          <h6 style={{ color: '#fff' }}>더드림</h6>
        </div>
        <div id="footer">
          <nav className="f_menu">
            <address>
              <p style={{ color: '#aaa' }}>더드림 법률사무소&nbsp;|&nbsp;대표 : 박성훈&nbsp;|&nbsp;서울시 서초구 사임당로 87, 1층 3층</p>
              <p style={{ color: '#aaa' }}>사업자등록번호 : 435-07-01602&nbsp;|&nbsp;고객상담전화 : 02-6959-5053&nbsp;|&nbsp;팩스번호: 02-6959-5052</p>
              <p style={{ color: '#aaa' }}>
                copyright (c) 2021 더드림 법률사무소. all rights reserved.
                <a href="/center/mn06/consult" style={{ marginLeft: 16, color: '#fff' }}>개인정보취급방침</a>
              </p>
            </address>
          </nav>
        </div>
      </div>
    </div>
  )
}
