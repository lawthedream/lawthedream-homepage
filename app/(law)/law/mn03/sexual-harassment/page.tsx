import LawNavTabs from '@/components/LawNavTabs'

export const metadata = { title: '성희롱 | 더드림 교통형사센터' }

export default function SexualHarassmentPage() {
  const current = '/law/mn03/sexual-harassment'
  return (
    <div id="content_wrap">
      <div id="sub_visual">
        <img src="/law/mn03/img/sub_vs03.jpg" alt="" style={{ width: '100%' }} />
        <div className="visual_text" style={{ top: '47%' }}>
          <h2>성희롱</h2>
        </div>
      </div>

      <LawNavTabs current={current} />

      <div id="contents">
        <h3 className="con_tit">성희롱 key point</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>

        <div className="cntbox wd2000">
          <div className="bg_grey bottom" style={{ paddingTop: 260, paddingBottom: 80, background: '#f4f3f2', position: 'relative' }}>
            <div className="wd1300">
              <p className="big_txt">성희롱은 성범죄 사건 중 가장 정도가 약한 성적 언동입니다.<br />직장 내에서 발생한 경우에는 해당 행위에 대한 신고, 징계, 처벌(해고) 또는 당사자간 합의 등의 해결책으로 이끌어낼 수 있습니다.</p>
              <p className="s_txt">이와 달리, 직장 밖의 사회에서 발생하는 성희롱 사건에서는 일반인들이 적극적으로 대처하기에 다소 애매한 부분들이 많습니다. 성폭행과 달리 성희롱의 처벌에 있어서도 그 기준이 현행법상 다소 모호하기에 의도하지 않은 가해자 또는 피해자가 발생할 수 있습니다.<br /><br />본인이 성희롱의 피해자가 되었거나, 또는 억울하게도 성희롱의 가해자로 신고를 당했다면 적극적으로 대처를 해야 합니다. 성범죄의 경우 씻을 수 없는 상처를 받은 피해자는 물론이고, 의도치 않은 상황으로 억울하게 가해자로 신고를 당한 경우에도 많은 어려움이 있게됩니다.<br /><br />더드림은 의뢰인의 어렵고 힘든 상황에서 하루 빨리 벗어날 수 있도록 경찰조사의 참여, 당사자간의 합의, 기소시 변론에 이르기 까지 모든 절차에 함께 합니다.</p>
            </div>
          </div>
        </div>

        <h3 className="con_tit">성희롱</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="wd1300">
            <div style={{ overflow: 'hidden' }}>
              <ul style={{ overflow: 'hidden' }}>
                <li style={{ float: 'left', width: 596 }}>
                  <img src="/law/mn03/img/mn03_01_img2.jpg" alt="" />
                </li>
                <li style={{ float: 'left', width: 640, padding: '46px 30px', backgroundColor: '#f7f7f7', textAlign: 'left' }}>
                  <p className="big_txt">성희롱이란 상대방이 원하지 않는 성적(性的)인 말이나 행동을 하여, 상대방에게 성적 굴욕감이나 수치심(또는 혐오감)을 느끼게 하는 행위로 사회 일반의 통념상 성적인 굴욕감을 유발하는 말이나 행동이 모두 성희롱에 포함됩니다.</p>
                  <p className="s_txt">정확히 어떤 경우가 성희롱에 해당되는지 사전에 명확히 규정하기 모호한 점으로 인해 합리적인 차원에서 사례별로 판단되어야 합니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="con_tit">대법원 판례</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey" style={{ background: '#fff' }}>
            <div className="wd1300">
              <div style={{ padding: '80px 0', overflow: 'hidden' }}>
                <ul>
                  <li style={{ width: '100%', padding: '46px 30px', backgroundColor: '#f3ece7', textAlign: 'center' }}>
                    <p className="big_txt">남녀 간의 육체적 관계나 남성 또는 여성의 신체적 특징과 관련된 육체적, 언어적, 시각적 행위로서 사회공동체의<br />건전한 상식과 관행에 비추어 볼 때 객관적으로 상대방과 같은 처지에 있는 일반적이고도 평균적인 사람에게<br />성적 굴욕감이나 혐오감을 느끼게 할 수 있는 행위를 말합니다.</p>
                    <p className="s_txt">(대법원 2008.7.10. 선고 2007두22498판결)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 className="con_tit">성희롱 종류</h3>
        <div className="tit_line"><img src="/law/images/tit_line.gif" alt="" /></div>
        <div className="cntbox wd2000">
          <div className="bg_grey" style={{ background: '#fff' }}>
            <div className="wd1300">
              <ul style={{ overflow: 'hidden', marginBottom: 80 }}>
                {[
                  {
                    num: '01', title: '육체적 성희롱',
                    items: ['입맞춤이나 포옹, 뒤에서 껴안기 등의 신체적인 접촉 행위', '가슴, 엉덩이 등 특정한 신체 부위를 만지는 행위', '안마나 애무 등을 강요하는 행위']
                  },
                  {
                    num: '02', title: '언어적 성희롱',
                    items: ['음란한 농담이나 음담패설', '옷차림·신체·외모에 대한 성적 비유나 평가', '성적인 사실관계를 집요하게 묻거나, 성적 내용의 정보를 의도적으로 유포하는 행위', '성적인 관계를 강요하거나 회유하는 행위', '음란한 내용의 전화 통화']
                  },
                  {
                    num: '03', title: '시각적 성희롱',
                    items: ['외설적인 사진, 그림, 낙서, 음란출판물 등을 게시하거나 보여주는 행위', '직접 또는 팩스나 컴퓨터 등을 통하여 음란한 편지, 사진, 그림을 보내는 행위', '성과 관련된 자신의 특정한 신체부위를 고의적으로 노출하거나 만지는 행위', '상대방의 특정한 신체부위를 유심히 쳐다보거나 훑어보는 행위']
                  }
                ].map((cat) => (
                  <li key={cat.num} style={{ float: 'left', width: '31.4%', textAlign: 'left', marginRight: '2.85%' }}>
                    <div style={{ paddingBottom: 10, borderBottom: '1px solid #3d4e5d', position: 'relative' }}>
                      <span style={{ color: '#798997', fontSize: 16, display: 'block', marginBottom: 5 }}>{cat.num}</span>
                      <strong style={{ color: '#234059', fontSize: 25, display: 'block', fontWeight: 500 }}>{cat.title}</strong>
                    </div>
                    <div style={{ paddingTop: 20 }}>
                      {cat.items.map((item, i) => (
                        <div key={i} style={{ fontSize: 17, lineHeight: '35px', color: '#222', display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
                          <span style={{ width: 5, height: 5, background: '#234059', display: 'inline-block', marginTop: 15, flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
