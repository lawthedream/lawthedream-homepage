import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultForm from '@/components/ConsultForm'

export const metadata: Metadata = {
  title: '더드림 인사말 | 더드림 교통형사센터',
  description: '더드림 법률사무소 교통형사센터 인사말. 형사사건 전문 변호사 및 법률전문가 팀 소개.',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/greeting' },
}

export default function GreetingPage() {
  return (
    <div className="law-page-wrap">
      {/* 브레드크럼 */}
      <div className="law-breadcrumb">
        <Link href="/law">HOME</Link>
        <span> &gt; </span>
        <span>센터소개</span>
        <span> &gt; </span>
        <span>인사말</span>
      </div>

      {/* 페이지 타이틀 */}
      <div className="law-page-title-bar">
        <h1>인사말</h1>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="greeting-wrap">

        {/* 상단 인사 텍스트 */}
        <section className="greeting-intro">
          <h2 className="greeting-main-title">더드림 법률사무소 교통형사센터는</h2>
          <div className="greeting-team-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/law/mn01/img/mn01_01_img7.jpg" alt="더드림 법률사무소 교통형사센터 팀" />
          </div>
          <div className="greeting-body-text">
            <p>
              변호사 및 형사전문위원 등을 구성원으로 하여 온전히 형사사건만을 담당하기 위하여 설립되었습니다.
              더드림 법률사무소 교통형사센터는 형사사건이 발생하여 어려움을 겪는 의뢰인을 위하여
              묵묵히 든든한 버팀목이 되어줄 것입니다.
            </p>
            <p>
              뜬 눈으로 밤을 지새며 수 많은 고민 끝에 방문하신 의뢰인의 마음을 헤아려,
              최상의 전략으로 최고의 결과를 도출하겠습니다.
            </p>
            <p className="greeting-closing">
              <strong>믿음에 보답하겠습니다. 감사합니다.</strong>
            </p>
          </div>
        </section>

        {/* 5가지 약속 아이콘 */}
        <section className="greeting-promise">
          <div className="greeting-promise-grid">
            {[
              { num: '01', text: '당신의 원하는 바가 무엇인지 잘 알고 있습니다' },
              { num: '02', text: '당신에게 이득이 되는 것을 더 드리려 항상 노력합니다' },
              { num: '03', text: '일상의 회복을 위한 최적의 솔루션을 제공합니다' },
              { num: '04', text: '한가지라도 더 알려드리는 친절함을 가지고 있습니다' },
              { num: '05', text: '당신에게 도움이 되는 올바른 길을 찾는 안내자가 될것입니다' },
            ].map((item) => (
              <div key={item.num} className="greeting-promise-item">
                <div className="promise-num">{item.num}</div>
                <p className="promise-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 다크 배너 */}
        <section className="greeting-dark-banner">
          <p>더드림법률사무소는 우리생활에서 비일비재하게 발생하는<br/>형사사건의 법적 문제를 해결합니다.</p>
        </section>

        {/* 업무 영역 카드 */}
        <section className="greeting-practice-areas">
          <h2 className="practice-area-title">업무영역</h2>
          <div className="practice-area-grid">
            {[
              {
                title: '교통사고',
                icon: '🚗',
                items: ['12대 중과실사고', '음주·뺑소니', '민식이법', '합의', '면허취소구제'],
                href: '/law/mn02/accident-12',
                color: '#375b73',
              },
              {
                title: '성범죄',
                icon: '⚖️',
                items: ['성희롱', '성추행', '성폭행', '기타'],
                href: '/law/mn02/accident-12',
                color: '#bf8553',
              },
              {
                title: '산업안전',
                icon: '🏗️',
                items: ['산업안전보건법위반', '업무상과실치사상'],
                href: '/law/mn02/accident-12',
                color: '#375b73',
              },
              {
                title: '일반형사',
                icon: '📋',
                items: ['폭행상해', '마약범죄', '재산범죄'],
                href: '/law/mn02/accident-12',
                color: '#bf8553',
              },
            ].map((area) => (
              <Link key={area.title} href={area.href} className="practice-area-card" style={{ '--card-color': area.color } as React.CSSProperties}>
                <div className="practice-area-header" style={{ backgroundColor: area.color }}>
                  <span className="practice-area-icon">{area.icon}</span>
                  <h3>{area.title}</h3>
                </div>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </section>

        {/* 상담 폼 */}
        <section className="law-consult-section">
          <div className="law-consult-inner">
            <div className="law-call-info">
              <p>전화번호 : <strong><a href="tel:02-6959-5053" style={{ color: '#253d5f' }}>02-6959-5053</a></strong></p>
            </div>
            <ConsultForm />
          </div>
        </section>

      </div>
    </div>
  )
}
