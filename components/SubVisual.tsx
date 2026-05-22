interface SubVisualProps {
  title: string
  subtitle?: string
  /** public/ 하위 경로 (예: '/new2019/mn01/img/sub_visual.jpg') */
  bgImage?: string
  /** 메인 비주얼 번호 (sub_visual_1, sub_visual 등) */
  variant?: 'numbered' | 'default'
  id?: number
}

export default function SubVisual({
  title,
  subtitle = '변호사·노무사·손해사정사\n보상 신청부터 소송까지 ONE-STOP 법률서비스',
  bgImage,
  variant = 'default',
  id,
}: SubVisualProps) {
  if (variant === 'numbered' && id) {
    return (
      <div id={`sub_visual_${id}`} style={{ textAlign: 'center', padding: '0 16px' }}>
        <h2>{title}</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{subtitle}</p>
      </div>
    )
  }

  return (
    <div id="sub_visual">
      {bgImage ? (
        <div
          className="visual_bg"
          style={{ backgroundImage: `url(${bgImage})` }}
          role="img"
          aria-label={title}
        />
      ) : (
        // bgImage가 없으면 기본 배경색으로 높이 확보
        <div
          className="visual_bg"
          style={{ backgroundColor: '#2a3a5c' }}
          role="presentation"
        />
      )}
      <div className="visual_text">
        <h2 className="big_tit">{title}</h2>
        {subtitle && (
          <p className="small_tit" style={{ whiteSpace: 'pre-line' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
