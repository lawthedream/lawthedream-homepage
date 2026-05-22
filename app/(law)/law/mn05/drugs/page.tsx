import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '마약범죄 | 더드림 교통형사센터' }

export default function DrugsPage() {
  const current = '/law/mn05/drugs'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn05/img/sub_vs05.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>마약범죄</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">마약범죄 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300">
              <p className="big_txt">마약사건은 점점 더 증가추세이며 그 유통경로가 다각화되면서 더 많은 수사인력과 처벌 또한 엄중해지고 있습니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">마약 검사 결과에 따른 분류</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', margin: '40px 0' }}>
              <div style={{ flex: 1, minWidth: 280, background: '#fff', border: '1px solid #ddd', borderTop: '4px solid #234059', padding: 30 }}>
                <p style={{ fontSize: 20, fontWeight: 600, color: '#234059', marginBottom: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src="/law/mn05/img/yes.png" alt="양성" style={{ width: 30 }} />
                  마약 양성반응이 예상될 때
                </p>
                <p className="s_txt">수사기관은 크로마토그라피/질량분석법에 의한 모발검사에서 마약을 투약한 양이나 기간 등이 정확하게 검출된다고 피의자에게 잘못된 정보를 고의적으로 전달하는 경우가 많습니다. 이러한 상황에서 빠르게 전담변호사의 도움을 받아 정확한 사실 관계를 파악하는 것이 중요합니다.</p>
              </div>
              <div style={{ flex: 1, minWidth: 280, background: '#fff', border: '1px solid #ddd', borderTop: '4px solid #8f7863', padding: 30 }}>
                <p style={{ fontSize: 20, fontWeight: 600, color: '#8f7863', marginBottom: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src="/law/mn05/img/no.png" alt="음성" style={{ width: 30 }} />
                  마약 음성반응이 예상될 때
                </p>
                <p className="s_txt">마약 음성반응이 나온다고 하여 객관적인 증거가 없다고 생각한다면 추후 양형에 매우 불리할 수 있습니다. 즉, 마약 음성반응이 나왔다고 무조건 범행을 부인한다면 추후 별도의 증거(판매책이나 금융계좌, DNA)가 나왔을 경우 중형이 선고 될 수 있습니다. 변호인에게 사건 경위에 대해 상세하게 상담받거나 조력을 받는 것이 필요합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="con_tit">마약류</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn05/img/mn05_03_img1.jpg" alt="" />
                </li>
                <li style={{ float: 'left', width: 640, padding: '46px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">마약류란 일반적으로 느낌, 생각 또는 형태에 변화를 줄 목적으로 섭취하여 정신에 영향을 주는 물질을 말하며, 법률적으로는 마약류 관리에 관한 법률에 정의된 마약, 향정신성의약품 및 대마를 총칭합니다.</p>
                  <p className="s_txt">마약류는 각성, 환각 효과가 있거나 억제 효과가 있어 취급자가 아닌 자가 오남용할 경우 신체적 정신적 의존성을 강하게 일으킬 가능성이 크고 중독으로 이어지므로 법적 처벌 수위가 높으며, 사회적으로도 지탄의 대상이 됩니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="con_tit">케이스별 적용</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <img src="/law/mn05/img/mn05_03_img2.jpg" alt="케이스별 적용" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
