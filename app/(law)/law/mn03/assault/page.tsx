import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '성폭행 | 더드림 교통형사센터' }

export default function AssaultPage() {
  const current = '/law/mn03/assault'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn03/img/sub_vs03.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>성폭행</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">성폭행 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div style={{ position: 'relative', width: '100%', height: 750, overflow: 'hidden' }}>
          <img src="/law/mn03/img/mn03_03_img1.jpg" alt="" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
          <div style={{ position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: '#222', width: 1300 }}>
            <p className="big_txt">성폭행 범죄는 일정 사유에 해당하면 구속수사를 원칙으로 하며,<br />고소권자, 고소기간 등에 관한 특례를 규정하고 있습니다.</p>
            <p className="s_txt">또한 존스쿨 수강명령, 피의자의 얼굴 등 신상공개, 신상정보등록 등 강력한 제재조치가 인정되고 있습니다.<br />특히, 경미한 성범죄라 할 수 있는 공중밀집장소추행, 지하철/버스 추행, 찜질방 추행, 통신매체이용음란행위, 카메라 등<br />이용촬영(몰카죄)에도 20년간 신상정보등록, 10년간 취업제한 등의 보안처분이 부과될 수 있습니다.<br />따라서, 가해자로서는 피해자와의 원만한 합의를 진행하는 것이 최선의 방안입니다.<br />피해자 또는 억울하게 가해자로 고소를 당한 경우라면 최대한 신속히 형사변호사의 법률적인 자문을 구해<br />사건을 해결할 수 있는 '골든타임'을 놓치지 않는 최선의 방법으로 변호사의 조력을 받는 것이 좋습니다.</p>
          </div>
        </div>

        <h3 className="con_tit">성폭행</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 640, padding: '70px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">성폭행은 연인, 부부사이에서도 일어날 수 있는 범죄행위 중 하나입니다.</p>
                  <p className="s_txt">성폭행사건은 고의성이 있는 경우뿐만 아니라 합의하에 맺은 관계에서도 성폭행 혐의를<br />받게 되는 경우도 적지 않습니다.</p>
                </li>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn03/img/mn03_02_img4.jpg" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="con_tit">성폭행 혐의 대응요령</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn03/img/mn03_02_img3.jpg" alt="" />
                </li>
                <li style={{ float: 'left', width: 640, padding: '58px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">피의자가 무고한 입장임에도 불구하고 당황스러운 마음에 피해자와 합의를 하면 오히려 자신의 범행을 인정해버리는 상황이 됩니다.</p>
                  <p className="s_txt">성폭행은 사건당사자들의 일관된 주장과 진술에 대한 신빙성, 정황과 일치하는 증거자료를 통해서 확실한 대응을 준비해야 합니다. 성폭행은 사건의 초기부터 전담변호사와 동행하는 것이 권고되는 사안입니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="con_tit">구성요건과 양형기준</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey">
            <div className="wd1300" style={{ padding: 80 }}>
              <table style={{ width: '80%', margin: '0 auto', borderTop: '2px solid #222', borderBottom: '2px solid #222', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ color: '#222', height: 80, borderBottom: '1px solid #bbb', borderRight: '1px solid #bbb', fontSize: 16 }}></th>
                    <th style={{ color: '#222', height: 80, borderBottom: '1px solid #bbb', borderRight: '1px solid #bbb', fontSize: 16 }}>구성요건</th>
                    <th style={{ color: '#222', height: 80, borderBottom: '1px solid #bbb', fontSize: 16 }}>양형기준</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['강간', '폭행 또는 협박으로 사람을 강간한 자', '3년 이상의 유기징역'],
                    ['유사강간', '폭행 또는 협박으로 사람에 대하여 구강, 항문 등 신체의 내부에 성기를 넣거나 성기, 항문에 손가락 등 신체의 일부 또는 도구를 넣는 행위를 한 사람', '2년 이상의 유기징역'],
                    ['준강간', '사람의 심신상실 또는 항거불능의 상태를 이용하여 간음 또는 추행을 한 자', '3년 이상의 유기징역'],
                    ['특수강간', '흉기나 그 밖의 위험한 물건을 지닌 채 또는 2명 이상이 합동하여 강간의 죄를 범한 사람', '무기징역 또는 7년 이상의 징역'],
                    ['강간상해·치상', '강간, 유사강간, 강제추행, 준강간 등을 범한 자가 사람을 상해하거나 상해에 이르게 한 때', '무기 또는 5년 이상의 징역'],
                    ['친족관계에 의한 강간', '친족관계인 사람이 폭행 또는 협박으로 사람을 강간한 경우', '7년 이상의 유기징역'],
                    ['장애인에 대한 강간', '신체적인 또는 정신적인 장애가 있는 사람에 대하여 강간의 죄를 범한 사람', '무기징역 또는 7년 이상의 징역'],
                    ['공중밀집장소추행', '대중교통수단, 공연·집회장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행한 사람', '3년 이하의 징역 또는 3천만원 이하의 벌금'],
                  ].map(([name, req, penalty]) => (
                    <tr key={name}>
                      <th style={{ height: 80, borderBottom: '1px solid #bbb', borderRight: '1px solid #bbb', padding: '0 10px', fontSize: 15 }}>{name}</th>
                      <td style={{ height: 80, borderBottom: '1px solid #bbb', borderRight: '1px solid #bbb', padding: '0 10px', fontSize: 15 }}>{req}</td>
                      <td style={{ height: 80, borderBottom: '1px solid #bbb', padding: '0 10px', fontSize: 15, textAlign: 'center' }}>{penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
