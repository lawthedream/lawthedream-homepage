import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '재산범죄 | 더드림 교통형사센터' }

export default function PropertyPage() {
  const current = '/law/mn05/property'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn05/img/sub_vs05.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>재산범죄</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">재산범죄 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300">
              <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', padding: '40px 0' }}>
                <div style={{ flex: 1, minWidth: 280, background: '#fff', padding: 30, borderLeft: '4px solid #234059' }}>
                  <p style={{ fontSize: 20, fontWeight: 600, color: '#234059', marginBottom: 15 }}>사기·횡령·배임의 피해자라면</p>
                  <p className="s_txt">해당 사건의 피해자로써 고소장을 작성하시는 것부터 어렵습니다. 고소인과 피소고인에 대한 인적사항부터 취지와 이유, 범죄사실, 증거자료 등에 대해서 작성해야 하기 때문에 일반인들이 하기에는 어려움이 있습니다. 그리고 고소장을 명확하게 작성하지 못하면 피의자가 혐의가 있다는 것에 대해서 수사기관에서 세밀하게 확인하지 못할 수도 있습니다.</p>
                </div>
                <div style={{ flex: 1, minWidth: 280, background: '#fff', padding: 30, borderLeft: '4px solid #8f7863' }}>
                  <p style={{ fontSize: 20, fontWeight: 600, color: '#8f7863', marginBottom: 15 }}>사기·횡령·배임의 피의자로 고소를 당한 경우라면</p>
                  <p className="s_txt">재산범죄의 경우 무혐의나 무죄를 입증하기에 매우 까다롭기 때문에 사건초기부터 사실관계를 바르게 판단해야 합니다. 특히 사건초기부터 범죄를 성립하는 요건 중 고의나 불법 영득 의사가 없다는 것을 적극적으로 증명하는 것이 좋습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="con_tit">케이스별 형량</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn05/img/mn05_04_img1.jpg" alt="케이스별 형량" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
