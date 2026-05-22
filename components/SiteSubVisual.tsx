interface SiteSubVisualProps {
  title: string
  subtitle?: string
  site: 'law' | 'accident' | 'center' | 'work'
  bgImage?: string  // 페이지별 커스텀 배너 이미지
}

const SITE_CONFIG = {
  law:      { accent: '#253d5f', label: '더드림 교통형사센터' },
  accident: { accent: '#2c3e50', label: '더드림 중대재해센터' },
  center:   { accent: '#1a5276', label: '더드림 보험분쟁센터' },
  work:     { accent: '#145a32', label: '더드림 직업병연구원' },
}

export default function SiteSubVisual({ title, subtitle, site, bgImage }: SiteSubVisualProps) {
  const cfg = SITE_CONFIG[site]
  return (
    <div id="sub_visual" style={{ position: 'relative', overflow: 'hidden', minHeight: 220, backgroundColor: cfg.accent }}>
      {bgImage && (
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="presentation"
        />
      )}
      <div style={{ position: 'relative', zIndex: 1, padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8, letterSpacing: 2 }}>{cfg.label}</p>
        <h2 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,40px)', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{title}</h2>
        {subtitle && <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 10 }}>{subtitle}</p>}
      </div>
    </div>
  )
}
