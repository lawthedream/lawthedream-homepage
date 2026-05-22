import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '변호사 선임사유 | 더드림 교통형사센터' }

export default function ReasonPage() {
  const current = '/law/mn06/reason'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn06/img/sub_vs06.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>변호사 선임사유</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">국선변호인 선임</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn06/img/mn06_01_img1.jpg" alt="국선변호인 선임" style={{ width: '100%' }} />
          </div>
        </div>

        <h3 className="con_tit">사선변호인 선임</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300" style={{ padding: '60px 0' }}>
              <p className="big_txt" style={{ textAlign: 'center' }}>억울한 누명을 벗기 위하여는 사건이 발생한 직후부터 변호인의 도움을 받아 증거를 수집하고,<br />피해자와 적절한 거리를 유지하여야 하고 수사단계에 역시 유리한 증거를 제출하고<br />적절한 진술을 하는 것이 가장 중요합니다.</p>
              <p className="s_txt" style={{ textAlign: 'center' }}>만약 사건 발생 시부터 변호인의 도움을 받지 못할 경우에는 피해자의 진술만으로 억울하게 처벌을 받게 되는 경우가 발생하므로 사건의 초기부터 상담을 받고 변호인의 조력을 받는 것이 필요합니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">변호사 선임시 유의사항</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn06/img/mn06_01_img2.jpg" alt="변호사 선임시 유의사항" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
