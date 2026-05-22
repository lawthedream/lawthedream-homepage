import Link from 'next/link'

export default function Footer() {
  return (
    <div id="f_line">
      <div id="footer_wrap" className="clear">
        <div id="footer_logo">
          <h6>더드림</h6>
        </div>
        <div id="footer">
          <nav className="f_menu">
            <ul className="clear">
              <li style={{ paddingLeft: 0 }}>
                <Link href="/mn04/consult">개인정보취급방침</Link>
              </li>
            </ul>
            <address>
              <p>
                더드림 법률사무소&nbsp;|&nbsp;&nbsp;대표 : 박성훈&nbsp;&nbsp;|&nbsp;&nbsp;서울시 서초구 사임당로 87, 1층 3층&nbsp;&nbsp;
              </p>
              <p>
                사업자등록번호 : 435-07-01602&nbsp;&nbsp;|&nbsp;&nbsp;고객상담전화 : 02-6959-5053&nbsp;&nbsp;|&nbsp;&nbsp;팩스번호: 02-6959-5052
              </p>
            </address>
            <div className="copyright">
              copyright©2020. 더드림 법률사무소 all rights reserved.
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
