import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '폭행상해 | 더드림 교통형사센터' }

export default function ViolencePage() {
  const current = '/law/mn05/violence'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn05/img/sub_vs05.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>폭행상해</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">폭행상해 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300">
              <div style={{ overflow: 'hidden', margin: '40px 0' }}>
                <div style={{ float: 'left', width: '48%', padding: 30, background: '#fff', borderLeft: '4px solid #234059', marginRight: '2%' }}>
                  <p style={{ fontSize: 20, fontWeight: 600, color: '#234059', marginBottom: 10 }}>폭행, 상해 등으로 고소를 당한 경우</p>
                  <p className="s_txt">첫 조사를 통해 사건의 전반적인 흐름은 정해집니다. 더드림은 변호사가 직접 경찰/검찰조사에 동행해 의뢰인의 입장을 피력해드립니다. 또한 불리한 진술로 혐의가 짙어질 리스크를 최소화해 드립니다. 아울러 수사기록의 철저한 분석을 통해 최선의 변호를 제공합니다. 특히 의뢰인에게 유리한 정황이나 증거자료, 증인신문 등을 통해 재판을 이끌어갈 것입니다.</p>
                </div>
                <div style={{ float: 'left', width: '48%', padding: 30, background: '#fff', borderLeft: '4px solid #234059' }}>
                  <p style={{ fontSize: 20, fontWeight: 600, color: '#234059', marginBottom: 10 }}>구속영장이 청구되었다면</p>
                  <p className="s_txt">영장이 발부되면 피의자는 그 즉시 구속되어 외부인과의 연락이 제한됩니다. 따라서 변호사를 선임하는 것도 어려워질 수 있습니다. 특히 구속기간에는 수시로 조사가 진행되기 때문에 자칫 방어권을 온전히 행사하지 못하는 경우가 발견됩니다. 영장실질심사를 받기 전 구속영장청구서를 확보하여 기각 사유를 파악합니다. 이후 의뢰인과 심문 예행연습을 하고, 구속사유가 없다는 내용의 변호인 의견서를 작성하여 제출합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="con_tit">케이스별 형량</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn05/img/mn05_02_img1.jpg" alt="케이스별 형량" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
