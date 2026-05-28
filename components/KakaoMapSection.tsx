// 더드림교통형사센터 위치 — Google Maps iframe (API 키 불필요)
export default function KakaoMapSection() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC+%EC%82%AC%EC%9E%84%EB%8B%B9%EB%A1%9C+87&t=m&z=16&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="412"
      style={{ border: 0, display: 'block' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="더드림교통형사센터 위치"
    />
  )
}
