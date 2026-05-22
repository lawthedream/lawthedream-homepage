import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '언론보도 | 더드림 교통형사센터' }

const pressItems = [
  { id: 1, title: '더드림 법률사무소 교통사고 전문 센터 운영', date: '2024-01-15', views: 320 },
  { id: 2, title: '음주운전 처벌 강화 — 더드림 변호사 인터뷰', date: '2023-12-10', views: 280 },
  { id: 3, title: '12대 중과실 교통사고 대처법', date: '2023-11-05', views: 415 },
  { id: 4, title: '면허취소 행정심판 성공 사례 소개', date: '2023-09-22', views: 190 },
  { id: 5, title: '민식이법 시행 이후 교통사고 처리 변화', date: '2023-08-18', views: 350 },
]

export default function PressPage() {
  const current = '/law/mn07/press'
  return (
    <div id="content_wrap">
      <div id="board_visual">
        <h2>언론보도</h2>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <div id="location">
          <div className="locbox">
            <span className="home">HOME</span>
            <span className="arrow">&gt;</span>
            <span className="loc1">성공사례</span>
            <span className="arrow">&gt;</span>
            <span className="loc2">언론보도</span>
          </div>
        </div>

        <div id="sub_content">
          <div className="board_list_box">
            <table style={{ width: '100%', borderTop: '2px solid #222', borderCollapse: 'collapse' }}>
              <caption>언론보도 목록</caption>
              <colgroup>
                <col width="10%" />
                <col width="60%" />
                <col width="15%" />
                <col width="15%" />
              </colgroup>
              <thead>
                <tr style={{ background: '#375b73' }}>
                  <th style={{ color: '#fff', padding: '15px 10px', fontSize: 15, textAlign: 'center', borderBottom: '1px solid #bbb' }}>번호</th>
                  <th style={{ color: '#fff', padding: '15px 10px', fontSize: 15, textAlign: 'center', borderBottom: '1px solid #bbb' }}>제목</th>
                  <th style={{ color: '#fff', padding: '15px 10px', fontSize: 15, textAlign: 'center', borderBottom: '1px solid #bbb' }}>등록일</th>
                  <th style={{ color: '#fff', padding: '15px 10px', fontSize: 15, textAlign: 'center', borderBottom: '1px solid #bbb' }}>조회수</th>
                </tr>
              </thead>
              <tbody>
                {pressItems.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px 10px', textAlign: 'center', fontSize: 15, color: '#666' }}>{item.id}</td>
                    <td style={{ padding: '15px 10px', fontSize: 15, color: '#333' }}>{item.title}</td>
                    <td style={{ padding: '15px 10px', textAlign: 'center', fontSize: 14, color: '#888' }}>{item.date}</td>
                    <td style={{ padding: '15px 10px', textAlign: 'center', fontSize: 14, color: '#888' }}>{item.views}</td>
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
