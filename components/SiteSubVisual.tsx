interface SiteSubVisualProps {
  title: string
  subtitle?: string
  site: 'law' | 'accident' | 'center' | 'work'
}

const SITE_CONFIG = {
  law:      { bg: '/law/images/sub_visual.jpg',      accent: '#465669', label: '더드림 교통형사센터' },
  accident: { bg: '/accident/images/sub_visual.jpg', accent: '#2c3e50', label: '더드림 중대재해센터' },
  center:   { bg: '/center/images/sub_visual.jpg',   accent: '#1a5276', label: '더드림 보험분쟁센터' },
  work:     { bg: '/work/images/sub_visual.jpg',      accent: '#145a32', label: '더드림 직업병연구원' },
}

export default function SiteSubVisual({ title, subtitle, site }: SiteSubVisualProps) {
  const cfg = SITE_CONFIG[site]
  return (
    <div id="sub_visual" style={{ position: 'relative', backgroundColor: cfg.accent, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${cfg.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }} role="presentation" />
      <div style={{ position: 'relative', zIndex: 1, padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8, letterSpacing: 2 }}>{cfg.label}</p>
        <h2 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700 }}>{title}</h2>
        {subtitle && <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 10 }}>{subtitle}</p>}
      </div>
    </div>
  )
}
