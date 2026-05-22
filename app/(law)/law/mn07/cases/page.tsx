import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '성공 Case 보기 | 더드림 교통형사센터' }

const cases = [
  { img: '/law/mn07/img/mn07_01_img1.jpg', title: '성공 Case 01', desc: '교통사고 형사사건 무죄 판결 사례' },
  { img: '/law/mn07/img/mn07_01_img2.jpg', title: '성공 Case 02', desc: '음주운전 면허취소 구제 성공 사례' },
  { img: '/law/mn07/img/mn07_01_img3.jpg', title: '성공 Case 03', desc: '12대 중과실 집행유예 성공 사례' },
  { img: '/law/mn07/img/mn07_01_img4.jpg', title: '성공 Case 04', desc: '뺑소니 혐의 무혐의 처분 사례' },
]

export default function CasesPage() {
  const current = '/law/mn07/cases'
  return (
    <div id="content_wrap">
      <div id="board_visual">
        <h2>성공 Case 보기</h2>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <div id="location">
          <div className="locbox">
            <span className="home">HOME</span>
            <span className="arrow">&gt;</span>
            <span className="loc1">성공사례</span>
            <span className="arrow">&gt;</span>
            <span className="loc2">성공 Case 보기</span>
          </div>
        </div>

        <div id="sub_content">
          <div className="board_list_img_box">
            <table className="board_list_img gallery" style={{ width: '100%' }}>
              <caption>성공사례 목록</caption>
              <tbody>
                {[0, 1].map((rowIdx) => (
                  <tr key={rowIdx}>
                    {cases.slice(rowIdx * 2, rowIdx * 2 + 2).map((c, i) => (
                      <td key={i} width="50%" style={{ padding: 20, textAlign: 'center', verticalAlign: 'top' }}>
                        <span className="gal_img" style={{ display: 'block', marginBottom: 10 }}>
                          <img src={c.img} alt={c.title} style={{ width: 300, height: 300, objectFit: 'cover', border: '1px solid #ddd' }} />
                        </span>
                        <span className="gal_tit" style={{ display: 'block', fontSize: 16, color: '#333' }}>{c.title}</span>
                        <span style={{ display: 'block', fontSize: 14, color: '#666', marginTop: 5 }}>{c.desc}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
