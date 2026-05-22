interface IntroSubVisualProps {
  title: string
  subtitle?: string
}
export default function IntroSubVisual({ title, subtitle }: IntroSubVisualProps) {
  return (
    <div id="sub_visual" style={{ position: 'relative', backgroundColor: '#2a3a5c', overflow: 'hidden' }}>
      <div className="visual_bg" style={{ height: 220, backgroundImage: 'url(/intro/img/intro_img1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45, position: 'absolute', inset: 0 }} role="presentation" />
      <div className="visual_text" style={{ position: 'relative', zIndex: 1, padding: '60px 20px', textAlign: 'center' }}>
        <h2 className="big_tit" style={{ color: '#fff', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700 }}>{title}</h2>
        {subtitle && <p className="small_tit" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 10 }}>{subtitle}</p>}
      </div>
    </div>
  )
}
