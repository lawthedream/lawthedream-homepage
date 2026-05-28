import type { Metadata } from 'next'
import Link from 'next/link'
import Mn01NavTabs from '@/components/Mn01NavTabs'

export const metadata: Metadata = {
  title: '왜 더드림인가 | 더드림 교통형사센터',
  description: '더드림이 특별한 5가지 이유: 대표 변호사 직접 상담, 전문가 팀, 빠른 해결, 수사 동행, 프라이버시 보호.',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn01/strength' },
}

const sections = [
  {
    num: '01',
    title: '대표 변호사가 직접 상담을 진행합니다.',
    img: '/law/mn01/img/mn01_03_img1.jpg',
    alt: '법률 상담 - LAW 책',
    text: '상담은 사건의 전략을 방향을 결정하는 중요한 절차중에 하나입니다. 이런 중요한 부분을 소위 사무장이라고 불리는 직원에게 맡길수는 없습니다. 당신의 입장이 직접적으로 전달이 되고 최선의 결과를 만들어낼수 있도록 대표변호사가 직접 만나서 상담을 진행할 것입니다.',
    imgRight: false,
  },
  {
    num: '02',
    title: '각 분야의 전담가가 함께 대처방안을 모색합니다.',
    img: '/law/mn01/img/mn01_03_img2.jpg',
    alt: '전문가 팀 회의',
    text: '같은 죄라고 해서 같은 처벌을 받는 것이 아닙니다. 변호사의 역량에 따라 지식을 어떻게 모으는가에 따라 사건의 결과는 완전히 달라질 수 있습니다. 전담 변호사는 각 분야의 경험과 역량이 검증된 변호사입니다. 더드림에는 이런 형사사건의 전담 변호사가 있으며 사건에 대한 자문의원들이 구성되어 가장 합리적인 해결방안을 모색합니다.',
    imgRight: true,
  },
  {
    num: '03',
    title: '빠르게 최선의 해결책을 찾아냅니다.',
    img: '/law/mn01/img/mn01_03_img3.jpg',
    alt: '시간 - 빠른 해결',
    text: '더드림은 시간적 여유를 많이 갖지 않습니다. 의뢰인의 마음을 알기에 빠르게 움직일것입니다. 형사소송이라도 민사적인 쟁점은 없는지 혹은 민사소송이라도 형사적인 해결방법은 없는지 꼼꼼하게 검토합니다. 그리고 다양한 관점으로 사건을 검토하여 최대한 빠르게 해결하면서 의뢰인의 이익을 극대화 할 것입니다.',
    imgRight: false,
  },
  {
    num: '04',
    title: '수사기관의 조사에 항상 변호사가 동행합니다.',
    img: '/law/mn01/img/mn01_03_img4.jpg',
    alt: '수사기관 동행',
    text: '더드림의 변호사는 항상 수사기관의 조사에 동참할 것입니다. 불리한 진술을 방어하고, 사건이 유리한 진술을 기재하지 않거나 불리한 진술을 기재한다면 이에 직접 수정 요청을 합니다. 수사단계에서 의뢰인이 어려움을 느끼지 않도록 옆에서 도울 것입니다. 수사단계는 사건의 흐름을 결정하는 매우 중요한 단계입니다. 우리는 이렇게 초기부터 사건을 유리하게 이끌어갈 것입니다.',
    imgRight: true,
  },
  {
    num: '05',
    title: '철저하게 프라이버시를 지키겠습니다.',
    img: '/law/mn01/img/mn01_03_img5.jpg',
    alt: '개인정보 보호 - 자물쇠',
    text: '사건이 주변에 알려지면 곤란한 상황에 처하는 경우가 많이 있습니다. 더드림은 철저하게 개인이나 법인의 프라이버시를 지켜드립니다. 수사기관의 서면이나 연락이 집이나 직장으로 가지 않도록 도울 것입니다. 선임된 변호인이 수령하여 의뢰인의 사생활이 보호받을수 있도록 항상 옆에서 지켜드리겠습니다.',
    imgRight: false,
  },
]

export default function StrengthPage() {
  return (
    <div className="law-page-wrap">
      {/* 브레드크럼 */}
      <div className="law-breadcrumb">
        <Link href="/law">HOME</Link>
        <span> &gt; </span>
        <span>센터소개</span>
        <span> &gt; </span>
        <span>왜 더드림인가?</span>
      </div>

      {/* 페이지 타이틀 */}
      <div className="law-page-title-bar">
        <h1>왜 더드림인가?</h1>
      </div>

      <Mn01NavTabs />

      <div className="strength-wrap">

        {sections.map((sec) => (
          <section
            key={sec.num}
            className={`strength-section ${sec.imgRight ? 'strength-section-reverse' : ''}`}
          >
            <div className="strength-img-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={sec.img} alt={sec.alt} />
              <div className="strength-num-badge">{sec.num}</div>
            </div>
            <div className="strength-text-box">
              <h2 className="strength-title">{sec.title}</h2>
              <p className="strength-body">{sec.text}</p>
            </div>
          </section>
        ))}

      </div>
    </div>
  )
}
