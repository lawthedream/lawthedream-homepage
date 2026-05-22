export default function WorkFooter() {
  return (
    <div id="f_line" style={{ background: '#262c36', paddingTop: 40, paddingBottom: 30 }}>
      <div id="footer_wrap" className="clear" style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px' }}>
        <div id="footer_logo" style={{ marginBottom: 16 }}>
          <h6 style={{ color: '#fff', fontSize: 20 }}>더드림</h6>
        </div>
        <div id="footer">
          <nav className="f_menu">
            <address style={{ fontStyle: 'normal' }}>
              <p style={{ color: '#aaa' }}>노무법인 더드림직업병연구원&nbsp;|&nbsp;대표 : 김홍상&nbsp;|&nbsp;서울시 서초구 사임당로 8길 9, 3층</p>
              <p style={{ color: '#aaa' }}>사업자등록번호 : 251-86-01881&nbsp;|&nbsp;고객상담전화 : 1833-6116&nbsp;|&nbsp;팩스번호: 02-585-5053&nbsp;|&nbsp;광고책임노무사 : 김홍상</p>
              <p style={{ color: '#aaa' }}>
                copyright (c) 2020 노무법인더드림직업병연구원. all rights reserved.
                <a href="/work/mn04/consult" style={{ marginLeft: 16, color: '#fff' }}>개인정보취급방침</a>
              </p>
            </address>
          </nav>
        </div>
      </div>
    </div>
  )
}
