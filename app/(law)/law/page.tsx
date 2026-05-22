import type { Metadata } from 'next'
import Link from 'next/link'
import LawMainSlider from '@/components/LawMainSlider'
import ConsultForm from '@/components/ConsultForm'

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

        {/* 상담 신청 */}
        <section id="main_map" aria-label="무료 상담 신청" style={{ padding: '60px 0', background: '#f8f8f8' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px' }}>
            <div className="call" style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 20 }}>
                전화번호 :{' '}
                <strong><a href="tel:02-6959-5053" style={{ color: '#253d5f' }}>tel : 02-6959-5053</a></strong>
              </p>
            </div>
            <ConsultForm />
          </div>
        </section>
      </div>
    </>
  )
}
