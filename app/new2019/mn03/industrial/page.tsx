import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '산업재해 성공사례 | 더드림법률사무소',
  description: '산업재해 성공사례 — 더드림법률사무소의 산재 보상 성공 케이스를 확인하세요.',
}

export default function Page() {
  return (
    <section>
      <h3 className="con_tit">산업재해 성공사례</h3>
      {/* 
        ℹ️ 이 페이지는 기존 PHP BBS 게시판(bbs_107)과 연동됩니다.
        Next.js에서 게시판 기능을 사용하려면 아래 두 가지 방법 중 선택:
        
        1. API Route 방식 (권장):
           - app/api/board/route.ts 에서 MySQL DB 직접 연결
           - fetch('/api/board?type=산업재해') 로 데이터 가져오기
        
        2. 기존 PHP BBS 유지 방식:
           - 이 페이지를 PHP URL(/new2019/mn03/mn03_01.php)로 리다이렉트
           - next.config.js의 redirects에 추가
      */}
      <div
        style={{
          padding: '40px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#555',
          marginTop: '30px',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          게시판 데이터는 DB 연동 후 표시됩니다.
        </p>
        <p style={{ fontSize: '15px', color: '#888' }}>
          (기존 PHP 게시판 데이터를 API Route로 연결하거나,<br />
          별도 헤드리스 CMS 도입을 권장합니다.)
        </p>
      </div>
    </section>
  )
}
