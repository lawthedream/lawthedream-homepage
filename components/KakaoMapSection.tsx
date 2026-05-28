// 더드림교통형사센터 위치 — 네이버 지도 (사이드바 CSS clip으로 숨김)
export default function KakaoMapSection() {
  return (
    <div style={{ overflow: 'hidden', height: 412, position: 'relative', background: '#e8e4df' }}>
      <iframe
        src="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%82%AC%EC%9E%84%EB%8B%B9%EB%A1%9C%2087%20%EB%8D%94%EB%93%9C%EB%A6%BC%EA%B5%90%ED%86%B5%ED%98%95%EC%82%AC%EC%84%BC%ED%84%B0"
        title="더드림교통형사센터 위치 (네이버 지도)"
        style={{
          border: 0,
          display: 'block',
          width: 'calc(100% + 380px)',
          height: '100%',
          marginLeft: '-380px',
        }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
