import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '피의자/피고인 | 더드림 교통형사센터' }

export default function DefendantPage() {
  const current = '/law/mn06/defendant'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn06/img/sub_vs06.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>피의자/피고인</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">더드림의 조력</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300" style={{ padding: '60px 0' }}>
              <p className="big_txt">수사 단계에서 처음으로 작성되는 피의자 신문조서는 '수사의 첫 단추'와 같습니다.</p>
              <p className="s_txt">변호인 대동 없이 불리한 진술을 한 경우 후속 절차에서 이를 번복하기가 매우 어렵습니다. 처음부터 변호사의 조력이 필요합니다. 더드림은 수사단계에서 공판단계까지 함께하며 죄가 없음을 입증하여 드릴 것입니다.</p>
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
                  text: '수사기관의 조사가 익숙하지 않은 의뢰인은 수사관의 추궁이나 고압적인 태도를 보일 때 불안, 초조감을 느껴 불리한 진술을 할 수 있습니다. 더드림은 수사기관과의 원만한 커뮤니케이션을 통하여 적극적으로 의뢰인의 입장을 피력할 수 있으며, 불필요한 진술로 수사과정을 그르치지 않도록 만들어 드립니다.'
                },
                {
                  icon: '/law/mn06/img/icon02.png',
                  text: '의뢰인은 자신에게 유리한 증거 수집이 현실적으로 어려운면이 많습니다. 실제 증거를 발견해도 의뢰인에게 유리한지 법적으로 판단하기도 쉽지 않습니다. 증거수집을 위해 팀을 운영하여 수사기관을 설득시킬 증거를 수집함으로 의뢰인을 지켜드릴 것입니다.'
                },
                {
                  icon: '/law/mn06/img/icon03.png',
                  text: '수사기관과의 원활한 커뮤니케이션은 매우 중요합니다. 더드림은 객관적인 자료와 합리적인 법리검토를 바탕으로 소통하며 사건초기부터 상황 및 변론 방향을 긴밀히 협의하여 의뢰인의 요구에 부합하는 법률서비스를 제공해드릴 것입니다.'
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

        <h3 className="con_tit">공판단계 진행 시</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn06/img/mn06_02_img1.jpg" alt="공판단계" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
