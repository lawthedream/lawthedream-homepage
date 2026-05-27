import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'

export const metadata: Metadata = {
  title: '음주/뺑소니 | 더드림교통형사센터',
  description: '음주운전·뺑소니 처벌기준과 대처방법. 혈중알코올농도별 처벌기준, 뺑소니 성립요건 안내. 더드림 교통형사 전문.',
  keywords: '음주운전,뺑소니,음주운전처벌,혈중알코올농도,뺑소니처벌,교통형사변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn02/drunk-driving' },
}

export default function Page() {
  return (
    <>
      <SiteSubVisual title="음주/뺑소니" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      <div className="mn02-wrap">

        {/* Section 1 — Key Point */}
        <section className="mn02-section">
          <h3 className="mn02-h3">음주/뺑소니 key point</h3>
          <span className="mn02-h3-line" />

          {/* 음주운전 카드 */}
          <div className="mn02-keybox" style={{ marginBottom: 30 }}>
            <div className="text-col">
              <span className="mn02-badge gold">음주운전</span>
              <div className="mn02-text">
                <p>
                  음주운전은 혈중알코올농도 0.03% 이상인 상태에서 운전하는 경우를 말합니다.
                  2019년 6월 도로교통법 개정으로 처벌 기준이 강화되어
                  <strong> 0.03% 이상이면 면허정지, 0.08% 이상이면 면허취소</strong> 처분을 받습니다.
                </p>
                <p>
                  음주운전으로 사람을 사상한 경우 특정범죄가중처벌법에 의해 가중 처벌되며,
                  2회 이상 적발 시 처벌이 대폭 강화됩니다.
                </p>
              </div>
            </div>
            <div className="photo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/drunk_wine_car.jpg" alt="음주운전" />
            </div>
          </div>

          {/* 뺑소니 카드 */}
          <div className="mn02-keybox">
            <div className="photo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/drunk_night_road.jpg" alt="야간 도로" />
            </div>
            <div className="text-col">
              <span className="mn02-badge blue">뺑소니</span>
              <div className="mn02-text">
                <p>
                  뺑소니란 교통사고를 일으킨 운전자가 피해자를 구호하는 등의 필요한 조치를 하지 않고
                  도주하는 행위를 말합니다.
                </p>
                <p>
                  <strong>특정범죄가중처벌법 제5조의3</strong>에 의해 가중 처벌 대상이 되며,
                  사망 사고의 경우 무기 또는 5년 이상의 징역에 처할 수 있습니다.
                  사고를 낸 사실 자체를 몰랐다는 항변이 받아들여지기 어렵기 때문에
                  전문 변호인의 조력이 반드시 필요합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — 음주운전 처벌기준 테이블 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">음주운전 처벌기준</h3>
          <span className="mn02-h3-line" />
          <table className="mn02-tbl">
            <thead>
              <tr>
                <th style={{ width: 200 }}>혈중알코올농도</th>
                <th>처벌 (도로교통법)</th>
                <th>면허처분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#253d5f' }}>0.03% 이상 ~ 0.08% 미만</td>
                <td>1년 이하 징역 또는 500만원 이하 벌금</td>
                <td>면허정지 (100일)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#253d5f' }}>0.08% 이상 ~ 0.2% 미만</td>
                <td>1년 이상 2년 이하 징역 또는 500만원 이상 1천만원 이하 벌금</td>
                <td>면허취소</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#253d5f' }}>0.2% 이상</td>
                <td>2년 이상 5년 이하 징역 또는 1천만원 이상 2천만원 이하 벌금</td>
                <td>면허취소</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#253d5f' }}>측정거부</td>
                <td>1년 이상 5년 이하 징역 또는 500만원 이상 2천만원 이하 벌금</td>
                <td>면허취소</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#c0392b' }}>2회 이상 위반</td>
                <td>2년 이상 5년 이하 징역 또는 1천만원 이상 2천만원 이하 벌금</td>
                <td>면허취소</td>
              </tr>
            </tbody>
          </table>
          <div className="mn02-gray-bg" style={{ marginTop: 20, fontSize: 14, color: '#666', lineHeight: 1.8 }}>
            ※ 음주운전으로 사람을 다치게 한 경우: 특정범죄가중처벌법 제5조의11 적용<br />
            ※ 음주운전으로 사람을 사망에 이르게 한 경우: 무기 또는 3년 이상의 징역
          </div>
        </section>

        {/* Section 3 — 뺑소니 처벌받는 경우 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">뺑소니 — 처벌받는 경우</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-text" style={{ textAlign: 'center', marginBottom: 30 }}>
            <p>아래 4가지 조건 중 하나라도 해당하면 뺑소니로 처벌받을 수 있습니다.</p>
          </div>
          <div className="mn02-cond-row">
            <div className="mn02-cond-item">
              <div className="mn02-cond-num">01</div>
              <div className="mn02-cond-text">교통사고를 일으킨 후 즉시 정차하지 않은 경우</div>
            </div>
            <div className="mn02-cond-item">
              <div className="mn02-cond-num">02</div>
              <div className="mn02-cond-text">피해자를 구호하는 등 필요한 조치를 취하지 않은 경우</div>
            </div>
            <div className="mn02-cond-item">
              <div className="mn02-cond-num">03</div>
              <div className="mn02-cond-text">피해자에게 인적 사항(이름·주소·연락처)을 제공하지 않은 경우</div>
            </div>
            <div className="mn02-cond-item">
              <div className="mn02-cond-num">04</div>
              <div className="mn02-cond-text">경찰공무원에게 신고하지 않고 현장을 이탈한 경우</div>
            </div>
          </div>
        </section>

        {/* Section 4 — 뺑소니 처벌수위 */}
        <section className="mn02-section">
          <h3 className="mn02-h3">뺑소니 처벌수위</h3>
          <span className="mn02-h3-line" />
          <div className="mn02-keybox">
            <div className="text-col">
              <div className="mn02-text">
                <p>
                  뺑소니는 <strong>특정범죄가중처벌법 제5조의3</strong>에 의해 일반 교통사고보다
                  훨씬 무거운 처벌을 받습니다.
                </p>
                <table className="mn02-tbl" style={{ marginTop: 16 }}>
                  <thead>
                    <tr><th>결과</th><th>처벌</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>피해자 사망</td>
                      <td>무기 또는 5년 이상의 징역</td>
                    </tr>
                    <tr>
                      <td>피해자 상해</td>
                      <td>1년 이상의 유기징역 또는 500만원 이상 3천만원 이하의 벌금</td>
                    </tr>
                    <tr>
                      <td>피해자 사망 + 음주운전</td>
                      <td>무기 또는 10년 이상의 징역 (가중처벌)</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ marginTop: 16 }}>
                  뺑소니 사건은 초기 대응이 매우 중요합니다. 사고 직후부터 전문 변호사의 조력을 받아
                  수사 단계에서부터 적극적으로 대처하는 것이 최선입니다.
                </p>
              </div>
            </div>
            <div className="photo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/mn02/photos/drunk_handcuffs.jpg" alt="체포 수갑" />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
