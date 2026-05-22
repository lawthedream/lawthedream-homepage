import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '업무상 과실치사상 | 더드림 교통형사센터' }

export default function NegligencePage() {
  const current = '/law/mn04/negligence'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn04/img/sub_vs04.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>업무상 과실치사상</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">업무상 과실치사상 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300">
              <p className="big_txt">고의성이 없었고 객관적인 의무를 다했다고 하더라도 혐의를 받을 수 있습니다. 이럴 때는 빠르게 변호사를 선임하여 조력을 받아야합니다.<br />복잡한 사건의 경우에는 수사 초기 단계에서 수사기관은 사건을 법적으로 어떻게 정리할지 결정하며, 이 과정에서 변호인은 피의자와 수사기관의 의견을 조율함으로써 피의자의 의견이 반영되도록 하는 경우도 있습니다.</p>
              <p className="s_txt">더드림은 상담에서부터 재판과정까지 조력하고 있어 신속한 판단과 대응을 통해 의외로 쉽게 사건이 해결되는 경우도 있습니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">업무상과실치사상죄</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn04/img/mn04_02_img1.jpg" alt="" />
                </li>
                <li style={{ float: 'left', width: 640, padding: '46px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">업무상 과실치사상죄(業務上過失致死傷罪)는 업무상 과실로 인하여 사람을 사상에 이르게 하는 죄를 말합니다.</p>
                  <p className="s_txt">업무상 과실치사상은 행위자가 생명·신체에 대한 위험성 있는 업무에 종사하는 자로서 비업무자보다 고도의 주의의무가 부과되어 있기 때문에 단순한 과실치사상에 비하여 중한 형을 과하게 한것입니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="con_tit">업무상과실치사상 위반시 처벌</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300" style={{ padding: '60px 0' }}>
              <p className="big_txt">업무상과실 또는 중대한 과실로 인하여 사람의 신체를 상해에 이르게 하거나 사람을 사망에 이르게 한 경우에는 5년 이하의 금고 또는 2천만원 이하의 벌금형에 처할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
