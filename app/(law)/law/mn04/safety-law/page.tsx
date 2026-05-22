import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '산업안전보건법 위반 | 더드림 교통형사센터' }

export default function SafetyLawPage() {
  const current = '/law/mn04/safety-law'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn04/img/sub_vs04.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>산업안전보건법 위반</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">산업안전보건법 위반 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300">
              <p className="big_txt">산업재해로 근로자가 사망하거나 부상을 입게되면, 사업주에게는 손해배상 책임이 발생할 수 있습니다. 민사 손해배상 책임은 사업주에게 고의, 과실이 인정되어야만 책임을 부담하게 됩니다. 결국, 사업주가 행한 사고 예방조치가 얼마나 효과적이었는지에 따라서 판결의 결과는 달라지게 됩니다.</p>
              <p className="s_txt">산재 민사 손해배상 소송에서는 산업안전보건법 상 안전조치 및 보건조치를 사업주가 다하였는지 입증하는 것이 중요합니다. 이런 입증이 가능하도록 더드림이 도와드릴 것입니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">산업안전보건법</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn04/img/mn04_01_img1.jpg" alt="" />
                </li>
                <li style={{ float: 'left', width: 640, padding: '46px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">산업안전보건법은 산업현장에서 사업주의 물적시설을 보호하고, 불특정다수의 근로자의 건강과 재해로부터 유해성, 위험성을 제거함으로써 근로자의 안전과 보건을 증진하기 위하여 제정한 법률을 말합니다.</p>
                  <p className="s_txt">산업안전보건법은 근로자의 생명보호와 신체적 정신적 건강의 확보를 보호이익으로 하므로 산업안전에 관한 기준을 확립하고 사업주에게 안전배려의무를 부여함과 동시에 의무를 위반할 경우 여러 가지 법적 제재를 가함으로써 산업재해를 예방하고 안전한 작업환경을 조성하고자 함에 그 목적이 있습니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="con_tit">산업안전보건법 위반시 처벌</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300" style={{ padding: '60px 0' }}>
              <p className="big_txt">사업주, 원청, 도급인등이 안전, 보건 조치 의무를 위반하여 근로자가 사망하게 되면 7년이하 징역 또는 1억원이하 벌금형에 처하도록 처벌 수위를 높였으며, 안전·보건 조치 의무를 위반한 사항은 3년이하 징역에서 3000만원이하 벌금형에 처해집니다.</p>
              <p className="s_txt">또한 사업주가 안전의무를 다하지 않아 근로자가 사망하는 일이 5년이내 2회이상 발생할 경우 형량은 1/2까지 가중처벌되도록 하고 있습니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">산업안전보건법 위반시 변호인 대처</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn04/img/mn04_01_img2.jpg" alt="" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
