import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '일반형사 | 더드림 교통형사센터' }

export default function GeneralPage() {
  const current = '/law/mn05/general'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn05/img/sub_vs05.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>일반형사</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">일반형사 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300">
              <p className="big_txt">형사사건은 민사사건과 달리 경찰 및 검찰의 수사 및 공소제기, 재판, 형집행의 일련의 과정으로 진행이 되는데, 수사 초기부터 어떻게 방향을 잡고 대응하는지에 따라 향후 결과가 크게 달라질 수 있는바 경험 많은 형사전담변호사의 조력을 받는 것이 중요합니다.</p>
              <p className="s_txt">더드림은 고소·고발을 당하고 어떻게 대응할지 몰라 고민하고 있는 분들, 불기소처분으로 종결될 것을 예상하고 있던 사건에서 공소제기로 당황하고 있는 분들, 피해를 입고 고소·고발을 하고 싶지만 형사절차를 잘 몰라서 도움이 필요한 분들에게 형사전담변호사가 풍부한 경험을 바탕으로 신속하고 적절한 대응방안을 찾아드리고 있습니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">일반 형사사건 유형</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn05/img/mn05_01_img1.jpg" alt="일반 형사사건 유형" style={{ width: '100%' }} />
          </div>
        </div>

        <h3 className="con_tit">형사소송</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn05/img/mn05_01_img2.jpg" alt="" />
                </li>
                <li style={{ float: 'left', width: 640, padding: '46px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">형사소송은 형법의 구체적 실현을 위하여 범죄의 수사개시로부터 체포·구금·압수·수색과 공소의 제기, 변호인의 선임, 모두절차·증인신문·증거물 및 증거서류의 조사·감정, 논고·구형·최종변론·최후진술, 판결의 선고에 이르기까지 일련의 절차를 거쳐서 범인의 유죄·무죄를 정하는 국가법체계의 일부를 말합니다.</p>
                  <p className="s_txt">더드림은 다양한 경험과 창의적인 지식으로 형사소송을 진행하고 있습니다. 이미 상담하는 단계에서 의뢰인은 최상의 법률 서비스를 받는 것은 물론이고 법률비용까지 절약할 수 있습니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
