import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '기타 성범죄 | 더드림 교통형사센터' }

export default function OtherSexCrimePage() {
  const current = '/law/mn03/other'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn03/img/sub_vs03.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>기타 성범죄</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        {/* 성매매 */}
        <h3 className="con_tit">성매매</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div style={{ overflow: 'hidden', background: '#fff' }}>
            <div className="wd1300">
              <div style={{ display: 'flex', marginBottom: 80 }}>
                <div style={{ width: '51%', height: 386, background: 'url(/law/mn03/img/mn03_04_img1.jpg) no-repeat center', backgroundSize: 'cover', flexShrink: 0 }} />
                <div style={{ padding: '40px 50px', textAlign: 'left' }}>
                  <p style={{ fontSize: 25, fontWeight: 400, color: '#222', marginBottom: 20 }}>성매매</p>
                  <p style={{ fontSize: 17, lineHeight: '28px', color: '#222' }}>불특정인을 상대로 금품이나 그 밖의 재산상의 이익을 주고받거나 주고받기로 약속하고 성교 행위 또는 유사 성교 행위를 하는 것, 또는 그 상대방이 되는 것입니다. 절대적으로 성매매를 금지하고 있는 사회적 분위기 속에서도 성매매사건은 줄어들지 않고 있습니다. 오히려 인터넷 기술이 발전하면서 어플 등 매체를 통해 성매매를 행하는 은밀한 방법이 급증하고 있습니다.</p>
                </div>
              </div>
              <div style={{ background: '#f4f3f2', padding: '40px 0', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)', minWidth: 280 }}>
                  <p className="big_txt"><b>성매매 혐의 대응요령</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">한 순간의 실수, 호기심으로 성매매를 했지만 대처에 대한 안일한 생각은 사건을 더욱 키우는 지름길이 될 수 있습니다. 성매매는 기소의 여부가 정해지는 검찰 수사로 넘어가기 전 단계인 경찰수사초기부터 도움을 받아 확실한 대처를 하는 것이 좋습니다. 성매매 초범인 경우 충분한 반성태도와 재범 발생의 가능성이 없음을 적극적으로 표현해야 합니다.</p>
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)', minWidth: 280 }}>
                  <p className="big_txt"><b>성매매 성립요건</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">성매매는 메시지, 업소의 CCTV, 결제내역 등 상대적으로 객관적인 증거를 많이 남기게 되므로 신중한 대처가 요구됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 아청법 위반 */}
        <h3 className="con_tit">아청법 위반</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div style={{ overflow: 'hidden', background: '#fff' }}>
            <div className="wd1300">
              <div style={{ display: 'flex', marginBottom: 40 }}>
                <div style={{ padding: '40px 50px', textAlign: 'left', flex: 1 }}>
                  <p style={{ fontSize: 25, fontWeight: 400, color: '#222', marginBottom: 20 }}>아청법 위반</p>
                  <p style={{ fontSize: 17, lineHeight: '28px', color: '#222' }}>아청법위반 사건을 두고 법원의 판결은 엄격합니다. 아청법은 아동과 청소년을 성범죄로부터 보호하기 위한 목적으로 제정됐습니다. 아동과 청소년이 건강한 사회 구성원으로 성장할 수 있는 환경을 만들고자 특별히 제정된 만큼 일반 형법보다 우선하여 위 법조가 적용됩니다.</p>
                </div>
                <div style={{ width: '51%', height: 386, background: 'url(/law/mn03/img/mn03_04_img2.jpg) no-repeat center', backgroundSize: 'cover', flexShrink: 0 }} />
              </div>
              <div style={{ background: '#f4f3f2', padding: '40px 0' }}>
                <div style={{ background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}>
                  <p className="big_txt"><b>아청법위반 혐의 대응요령</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">아동과 청소년을 대상으로 한 범죄라는 점에서 상황에 맞는 법적대응이 중요합니다. 사회적 약자인 아청법에 대한 대응방법에는 결백하는 무죄만을 주장하는 것보다 피해자와의 합의, 반성을 통해서 사건을 더욱 악화시키지 않는 방법도 존재합니다. 아청법위반의 경우 구속수사가 원칙인 만큼, 짧은 기간 안에 진행되는 구속영장실질심사를 보다 확실하게 대응하려면 지식과 풍부한 경험이 바탕이 되는 전담변호사의 도움이 필요합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 카메라등 이용 촬영죄 */}
        <h3 className="con_tit">카메라등 이용 촬영죄</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div style={{ overflow: 'hidden', background: '#fff' }}>
            <div className="wd1300">
              <div style={{ display: 'flex', marginBottom: 40 }}>
                <div style={{ width: '51%', height: 386, background: 'url(/law/mn03/img/mn03_04_img3.jpg) no-repeat center', backgroundSize: 'cover', flexShrink: 0 }} />
                <div style={{ padding: '40px 50px', textAlign: 'left', flex: 1 }}>
                  <p style={{ fontSize: 25, fontWeight: 400, color: '#222', marginBottom: 20 }}>카메라등 이용 촬영죄</p>
                  <p style={{ fontSize: 17, lineHeight: '28px', color: '#222' }}>카메라등 이용 촬영죄는 지하철, 버스와 같은 대중교통에서 가장 많이 발생되는 범죄 중 하나입니다. 성적 수치심 또는 욕망을 유발할 수 있는 신체를 촬영했는가가 주요한 쟁점입니다. 촬영당시에는 의사에 반하지 않았다고 하더라도 추후에 그 의사에 반하여 반포·판매·임대·제공 또는 공공연하게 전시·상영할 경우에도 본 죄는 성립하게 됩니다.</p>
                </div>
              </div>
              <div style={{ background: '#f4f3f2', padding: '40px 0', display: 'flex', gap: 20 }}>
                <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}>
                  <p className="big_txt"><b>카메라등 이용 촬영죄 혐의 대응요령</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">카메라등 이용 촬영죄는 명백한 증거가 존재합니다. 또한 디지털포렌식으로 인해 여죄까지 밝혀져 유죄 판결로 이어질 가능성도 있습니다. 따라서 관련 혐의를 받았다면 사건 초기에 전담변호사를 선임하여 일관적인 진술 및 법적 대응을 펼치는 것이 현명합니다.</p>
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}>
                  <p className="big_txt"><b>카메라등이용촬영죄 성립요건</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">'성적 욕망 또는 수치심'을 유발시키는 타인의 신체를 촬영했는지가 주요한 쟁점입니다. 따라서 피해자의 옷차림, 노출의 정도, 촬영자의 의도, 촬영에 이르게 된 경위 등을 종합적으로 고려하여 판단하고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 통신매체 이용 음란죄 */}
        <h3 className="con_tit">통신매체 이용 음란죄</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div style={{ overflow: 'hidden', background: '#fff' }}>
            <div className="wd1300">
              <div style={{ display: 'flex', marginBottom: 40 }}>
                <div style={{ width: '51%', height: 386, background: 'url(/law/mn03/img/mn03_04_img5.jpg) no-repeat center', backgroundSize: 'cover', flexShrink: 0 }} />
                <div style={{ padding: '40px 50px', textAlign: 'left', flex: 1 }}>
                  <p style={{ fontSize: 25, fontWeight: 400, color: '#222', marginBottom: 20 }}>통신매체 이용 음란죄</p>
                  <p style={{ fontSize: 17, lineHeight: '28px', color: '#222' }}>정보 및 통신수단이 첨단화 되면서 이를 악용한 디지털 성범죄가 지속적으로 증가하고있습니다. 점점 늘어가는 관련 범죄에 경찰과 사법당국은 수사강도와 법률 처벌강화 등 노력을 기울이고 있는 상황입니다.</p>
                </div>
              </div>
              <div style={{ background: '#f4f3f2', padding: '40px 0', display: 'flex', gap: 20 }}>
                <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}>
                  <p className="big_txt"><b>통신매체 이용 음란죄 혐의 대응요령</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">통신매체이용음란죄는 성립의 범위가 매우 넓기에 억울함을 토로하는 피의자들이 많습니다. 성적 욕망 유발이라는 주관적인 정립여부에 대하여 객관적인 법리해석을 적용하기 위해선 법률가의 조력은 필수라 할 수 있습니다.</p>
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '30px 40px', boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}>
                  <p className="big_txt"><b>통신매체 이용 음란죄 성립요건 및 양형기준</b></p>
                  <hr style={{ border: 'none', borderTop: '1px solid #becad2', margin: '10px 0' }} />
                  <p className="s_txt">통신매체를 이용한 음란행위 죄는 자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적으로 전화, 우편, 컴퓨터, 그 밖의 통신매체를 통하여 성적 수치심이나 혐오감을 일으키는 말, 음향, 글, 그림, 영상 또는 물건을 상대방에게 도달하게 함으로써 성립합니다.<br /><br /><strong>양형기준: 2년 이하의 징역 또는 2천만원 이하의 벌금</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
