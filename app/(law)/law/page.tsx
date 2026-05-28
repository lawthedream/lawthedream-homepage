import type { Metadata } from 'next'
import Link from 'next/link'
import LawMainSlider from '@/components/LawMainSlider'
import KakaoMapSection from '@/components/KakaoMapSection'

export const metadata: Metadata = {
  title: '더드림 교통형사센터 | 교통사고·형사사건 전문',
  description: '12대 중과실사고, 음주운전, 민식이법, 성범죄, 산업안전 등 형사사건 전문 변호사·노무사. 무료 상담 02-6959-5053.',
  keywords: '교통사고, 형사사건, 음주운전, 뺑소니, 민식이법, 성범죄, 산업안전보건법, 변호사',
  alternates: { canonical: 'https://www.lawthedream.com/law' },
}

const categories = [
  {
    listClass: 'list01',
    icon: '/law/images/main/accident.png',
    color: '#375b73',
    title: '12대 중과실 사고',
    items: [
      { label: '12대 중과실사고 key point', href: '/law/mn02/accident-12' },
      { label: '교통사고처리 특례법위반',   href: '/law/mn02/accident-12' },
      { label: '면허취소 구제',           href: '/law/mn02/license' },
    ],
  },
  {
    listClass: 'list02',
    icon: '/law/images/main/gender.png',
    color: '#bf8553',
    title: '음주/뺑소니',
    items: [
      { label: '음주 / 뺑소니 key point', href: '/law/mn02/drunk-driving' },
      { label: '뺑소니 - 처벌받는 경우',  href: '/law/mn02/drunk-driving' },
      { label: '뺑소니 처벌수위',         href: '/law/mn02/drunk-driving' },
    ],
  },
  {
    listClass: 'list03',
    icon: '/law/images/main/safe.png',
    color: '#375b73',
    title: '민식이법',
    items: [
      { label: '민식이법 key point',    href: '/law/mn02/minshik-law' },
      { label: '스쿨존사고 - 민식이법', href: '/law/mn02/minshik-law' },
      { label: '민식이법 법안',         href: '/law/mn02/minshik-law' },
      { label: '민식이법 형량',         href: '/law/mn02/minshik-law' },
    ],
  },
  {
    listClass: 'list04',
    icon: '/law/images/main/crime.png',
    color: '#bf8553',
    title: '보험소송',
    items: [
      { label: '합의 key point', href: '/law/mn02/solution' },
      { label: '소외합의',       href: '/law/mn02/solution' },
      { label: '합의절차',       href: '/law/mn02/solution' },
    ],
  },
]

export default function LawHome() {
  return (
    <>
      <LawMainSlider />

      <div id="content_wrap">
        {/* OUR CASE */}
        <div
          id="category"
          style={{
            width: '100%',
            minHeight: 953,
            position: 'relative',
            backgroundImage: 'url(/law/images/main/category_img.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="category_tit" style={{ width: '100%', textAlign: 'center', paddingTop: 100 }}>
            <h2 style={{ fontSize: 45, fontWeight: 700, color: '#f2bd79', paddingBottom: 38 }}>OUR CASE</h2>
            <div style={{ width: 1, height: 38, background: '#fff', margin: '0 auto 38px' }} />
            <p style={{ fontSize: 26, color: '#fff', fontWeight: 400, lineHeight: '1.3' }}>
              더드림은 각 분야별로<br />특화된 법률전문가들로 구성되어 있습니다.
            </p>
          </div>

          <div style={{ width: 1300, margin: '0 auto', paddingTop: 60, overflow: 'hidden', display: 'flex', gap: 20 }}>
            {categories.map((cat) => (
              <div
                key={cat.listClass}
                style={{ width: 309, background: '#fff', flexShrink: 0 }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {/* 상단 컬러 헤더 */}
                  <li style={{ width: '100%', height: 187, backgroundColor: cat.color, backgroundImage: `url(${cat.icon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center 40px' }}>
                    <Link href={cat.items[0].href}>
                      <p style={{ fontSize: 23, fontWeight: 500, color: '#fff', textAlign: 'center', paddingTop: 131, paddingBottom: 30 }}>
                        {cat.title}
                      </p>
                    </Link>
                  </li>
                  {/* 서브 아이템 */}
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ width: '100%', height: i === 0 ? 76 : 60, borderBottom: '1px solid #e5e6e8' }}>
                      <Link href={item.href}>
                        <p style={{ fontSize: 20, fontWeight: 400, color: '#222', textAlign: 'center', paddingTop: i === 0 ? 30 : 15 }}>
                          {item.label}
                        </p>
                      </Link>
                    </li>
                  ))}
                  <li style={{ height: 60 }} />
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* 커뮤니티 */}
        <div id="community">
          <div className="community_tit">
            <h2 className="cnt_tit">커뮤니티</h2>
            <div className="line" />
          </div>
          <div className="news" style={{ overflow: 'hidden' }}>
            <div className="news_tit">더드림 <span>온라인상담</span></div>
            <Link href="/law/mn08/consult" className="news_btn"><span>더보기+</span></Link>
            <div className="news_img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/images/main/news.jpg" alt="온라인상담" />
            </div>
            <div className="news_list">
              <ul>
                <li>중앙선 침범 사건 문의</li>
                <li>비보호좌회전 오토바이 교통사고</li>
                <li>뺑소니 사고 관련 문의드립니다.</li>
                <li>비오는 저녁 무단횡단 사고 입니다</li>
                <li>문의</li>
              </ul>
            </div>
          </div>
          <div className="law" style={{ overflow: 'hidden' }}>
            <div className="law_tit">더드림 <span>법률정보</span></div>
            <Link href="/law/mn08/consult" className="law_btn"><span>더보기+</span></Link>
            <div className="law_img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/law/images/main/law.jpg" alt="법률정보" />
            </div>
            <div className="law_list">
              <ul>
                <li>중대재해사고 관련 문의드립니다.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* THE DREAM INFORMATION */}
        <div id="advice">
          <div className="advice_tit">
            <h2 className="cnt_tit">THE DREAM INFORMATION</h2>
            <div className="line" />
          </div>
          <div className="advice_list">
            <ul>
              <li>
                <Link href="/law/mn01/greeting">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/law/images/main/adv01.jpg" alt="더드림 인사말" />
                </Link>
              </li>
              <li>
                <Link href="/law/mn01/members">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/law/images/main/adv02.jpg" alt="더드림 구성원" />
                </Link>
              </li>
              <li>
                <Link href="/law/mn01/strength">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/law/images/main/adv03.jpg" alt="왜 더드림인가" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 지도 + 연락처 */}
        <div id="info">
          <ul>
            <li className="info_map">
              <KakaoMapSection />
            </li>
            <li className="info_time">
              <div className="info-contact-row">
                <span className="info-icon">📞</span>
                <div>
                  <p className="info-label">상담전화</p>
                  <a href="tel:02-6959-5053" className="info-value">02.6959.5053</a>
                </div>
              </div>
              <div className="info-contact-row">
                <span className="info-icon">💬</span>
                <div>
                  <p className="info-label">카톡상담</p>
                  <span className="info-value">@더드림 교통전문센터</span>
                </div>
              </div>
              <div className="info-contact-row">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">주소</p>
                  <span className="info-value">서울시 서초구 사임당로 87, 1층 3층</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
