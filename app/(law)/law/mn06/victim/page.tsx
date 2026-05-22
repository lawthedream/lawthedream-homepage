import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '피해자 | 더드림 교통형사센터' }

export default function VictimPage() {
  const current = '/law/mn06/victim'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn06/img/sub_vs06.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>피해자</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">더드림의 조력</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300" style={{ padding: '60px 0' }}>
              <p className="big_txt">고소장 작성에서부터 증거수집까지, 수사과정과 재판과정에서의 변호까지.</p>
              <p className="s_txt">더드림은 사건 관련자들이 수사과정에서 공판단계까지 어떻게 대처하고 무엇을 해야 하는지 체계적으로 설명드리고 과정을 진행합니다. 특히 형사 소송의 첫단계는 고소 및 고발로부터 시작하게 되는 만큼 이에 대한 법리적인 해석과 사실관계를 정확하게 분석해 드립니다. 또한 의뢰인 혼자 증거를 수집한다는 것은 현실적으로 어렵기에 이에 대해서 과학적이고 체계적인 방법으로 의뢰인에게 유리한 증거를 수집해드릴 것입니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">수사기관 조사 시</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', margin: '40px 0' }}>
              {[
                {
                  icon: '/law/mn06/img/icon01.png',
                  text: '고소사건의 경우라면 피의자와 범죄 피해자 사이에 원만한 형사 분쟁 해결이 필요하게 됩니다. 검사의 직권 또는 피의자나 피해자의 신청을 통하여 수사중인 형사사건을 형사조정에 회부할 수 있습니다. 더드림은 피해자를 대신해 적정한 합의 금액을 판단하고 제시하며 금액 조정을 통해 불이익을 최소화합니다.'
                },
                {
                  icon: '/law/mn06/img/icon02.png',
                  text: '수사기관에서는 고소장을 통해서 기본적인 사실관계를 파악한 후 진술 확보를 위하여 출석을 요구합니다. 피해자 입장에서는 상대방의 범죄를 밝혀야 하므로 불리한 진술은 최대한 피해야 합니다. 더드림의 변호인은 의뢰인과 함께 동석하여 안정된 상태에서 조언과 상담을 받아가며 진술을 할 수 있도록 도와드릴 것입니다.'
                },
              ].map((item, idx) => (
                <div key={idx} style={{ flex: 1, minWidth: 280, background: '#f7f7f7', padding: 30, textAlign: 'center' }}>
                  <img src={item.icon} alt="" style={{ marginBottom: 20 }} />
                  <p className="s_txt" style={{ textAlign: 'left' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="con_tit">재판단계 진행 시</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn06/img/mn06_03_img1.jpg" alt="재판단계" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
