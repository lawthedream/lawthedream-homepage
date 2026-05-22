import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '더드림의 강점 | 더드림법률사무소',
  description:
    '분야별 전문자격인 구성, 풍부한 경험, 체계화된 시스템 — 더드림법률사무소의 5가지 강점을 소개합니다.',
}

const advantages = [
  {
    num: '01',
    bg: '/new2019/mn01/img/mn01_03_img1.jpg',
    side: 'right',
    title: '분야별 전문자격인들로 구성',
    subtitle: "'백짓장도 맞들면 낫다'라는 속담이 있습니다.",
    text: '하물며 분야별 전문자격을 보유한 사람들이 한 가지 목표를 위해 의기투합하여 모였습니다.\n서로의 경험과 노하우까지 공유하면 넘볼 수 없는 큰 자산이 됩니다.\n\'할 수 있는 것\'과 \'잘하는 것은\' 분명히 다릅니다.',
    color: '#fff',
    accentColor: '#3cb6c1',
  },
  {
    num: '02',
    bg: '/new2019/mn01/img/mn01_03_img2.jpg',
    side: 'left',
    title: '사람냄새가 나는 정이 있는 사람들',
    subtitle: '오랜 시간 현장에서 사람들을 만나왔습니다.',
    text: '누구보다 무엇이 필요한지 절실함도 잘 알고 있습니다.\n같이 숨쉬고 고민하고 감정을 공유하는 사람 냄새가 나는 법률사무소입니다.',
    color: '#333',
    accentColor: '#5c7fcf',
  },
  {
    num: '03',
    bg: '/new2019/mn01/img/mn01_03_img3.jpg',
    side: 'right',
    title: '풍부한 경험이 바로 무기입니다.',
    subtitle: '무슨 일이든 처음 시작하면 서투르기 마련입니다.',
    text: '하지만 같은 일을 오래 하다보면 그 분야에서 달인이 됩니다.\n많은 산업재해 보상과 신청, 소송을 다루다 보면 핵심을 잡아내는 감각도 날카로워집니다.\n바로 이것이 더드림이 가진 무기입니다.',
    color: '#fff',
    accentColor: '#edb677',
  },
  {
    num: '04',
    bg: '/new2019/mn01/img/mn01_03_img4.jpg',
    side: 'left',
    title: '체계화된 시스템에서 올바른 해법이 도출됩니다.',
    subtitle: '사건을 수임하게 되면 좋은 결과를 이끌어 내는 것이 핵심입니다.',
    text: '바로 잘 구성된 시스템을 통한 정확한 플랜이 있어야 하는 것입니다.\n더드림에는 산업재해보상 승인을 위한 각 분야의 전문가가 있습니다.\n또한 체계화된 내부 시스템을 통하여 합리적인 해결책을 만듭니다.\n이것이 결코 넘볼 수 없는 강점입니다.',
    color: '#333',
    accentColor: '#3cb6c1',
  },
  {
    num: '05',
    bg: '/new2019/mn01/img/mn01_03_img5.jpg',
    side: 'right',
    title: '낮은 문턱으로 눈높이를 맞추겠습니다.',
    subtitle: '법률사무소는 문턱이 높다고 말하는 분들이 아직도 많습니다.',
    text: '상담료나 자문료가 비싸다고 생각하십니다.\n하지만 저희 더드림의 문턱은 높지 않습니다.\n여러분을 더 이해하고 여러분의 어려움까지 함께 하겠다는 다짐으로\n언제라도 친절하고 자세하게 상담해 드리겠습니다.',
    color: '#fff',
    accentColor: '#5c7fcf',
  },
]

export default function StrengthPage() {
  return (
    <>
      <SubVisual title="더 드림의 강점" variant="numbered" id={1} />

      <h2
        style={{
          color: '#333',
          fontSize: '35px',
          fontWeight: 600,
          padding: '110px 0 70px',
          textAlign: 'center',
        }}
      >
        더 드림의 강점
      </h2>

      {advantages.map((adv) => (
        <article
          key={adv.num}
          aria-label={`Advantage ${adv.num}: ${adv.title}`}
          style={{
            backgroundImage: `url(${adv.bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            padding: '70px 0',
            minHeight: '458px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '1300px',
              margin: '0 auto',
              padding: '40px 0',
            }}
          >
            {/* 강점 번호 */}
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '28px',
                fontWeight: 300,
                color: adv.side === 'right' ? '#fff' : '#333',
                textAlign: adv.side === 'right' ? 'right' : 'left',
                marginBottom: '16px',
                letterSpacing: '-0.015rem',
              }}
            >
              Advantage {adv.num}
            </p>

            {/* 강점 텍스트 박스 — 배경 이미지 위에 HTML 텍스트로 분리 */}
            <div
              style={{
                textAlign: adv.side === 'right' ? 'right' : 'left',
                maxWidth: '575px',
                marginLeft: adv.side === 'left' ? '50px' : 'auto',
                marginRight: adv.side === 'right' ? '0' : undefined,
                marginTop: '70px',
              }}
            >
              {/* 액센트 라인 */}
              <div
                style={{
                  width: '165px',
                  height: '5px',
                  backgroundColor: adv.accentColor,
                  marginLeft: adv.side === 'left' ? 'auto' : undefined,
                  marginBottom: '30px',
                }}
                aria-hidden="true"
              />
              <h3
                style={{
                  fontSize: '35px',
                  fontWeight: 600,
                  margin: '20px 0',
                  color: adv.color,
                  letterSpacing: '-0.085rem',
                }}
              >
                {adv.title}
              </h3>
              <p
                style={{
                  fontSize: '25px',
                  fontWeight: 400,
                  margin: '20px 0',
                  color: adv.color,
                  letterSpacing: '-0.085rem',
                }}
              >
                {adv.subtitle}
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 300,
                  margin: '20px 0',
                  color: adv.side === 'right' ? '#e6e6e6' : '#666',
                  letterSpacing: '-0.085rem',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.6',
                }}
              >
                {adv.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
