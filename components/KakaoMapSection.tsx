'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    daum: {
      roughmap: {
        Lander: new (config: { timestamp: string; key: string; mapWidth: string; mapHeight: string }) => { render(): void }
      }
    }
  }
}

export default function KakaoMapSection() {
  useEffect(() => {
    const loadScript = () => {
      if (document.querySelector('.daum_roughmap_loader_script')) {
        if (window.daum?.roughmap?.Lander) {
          new window.daum.roughmap.Lander({
            timestamp: '1628736435503',
            key: '26xxv',
            mapWidth: '1000',
            mapHeight: '412',
          }).render()
        }
        return
      }
      const script = document.createElement('script')
      script.charset = 'UTF-8'
      script.className = 'daum_roughmap_loader_script'
      script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'
      script.onload = () => {
        if (window.daum?.roughmap?.Lander) {
          new window.daum.roughmap.Lander({
            timestamp: '1628736435503',
            key: '26xxv',
            mapWidth: '1000',
            mapHeight: '412',
          }).render()
        }
      }
      document.head.appendChild(script)
    }
    loadScript()
  }, [])

  return (
    <div
      id="daumRoughmapContainer1628736435503"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: '100%', minHeight: 412 }}
    />
  )
}
