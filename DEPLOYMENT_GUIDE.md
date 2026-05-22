# 더드림 법률사무소 — Next.js 배포 가이드

## 1단계: 이미지·에셋 복사

PHP FTP에서 이미지 파일들을 `public/` 폴더로 복사해야 합니다.

```bash
# FTP에서 이미지 폴더 전체를 public/ 아래에 동일한 경로로 복사
public/
  new2019/
    images/        ← FTP의 /new2019/images/ 전체
    mn01/img/      ← FTP의 /new2019/mn01/img/ 전체
    mn02/img/      ← FTP의 /new2019/mn02/img/ 전체
    mn03/img/
    mn04/img/
    mn08/img/
  intro/
    img/           ← FTP의 /intro/img/ 전체 (구성원 사진)
```

> **팁**: FileZilla 등 FTP 클라이언트로 이미지 폴더를 통째로 다운로드 후
> `public/` 아래에 붙여넣기 하세요.

---

## 2단계: Naver Analytics 계정 ID 입력

`components/NaverTracker.tsx` 파일을 열어 아래 줄의 값을 실제 계정 ID로 교체하세요.

```ts
// 변경 전
window.wcs_add['wa'] = 's_4xxxxxxxx'

// 변경 후 (네이버 애널리틱스 > 사이트 관리 > 스크립트 확인)
window.wcs_add['wa'] = 's_실제ID값'
```

---

## 3단계: GitHub에 올리기

```bash
# 프로젝트 폴더에서
git init
git add .
git commit -m "first: PHP → Next.js 변환 (반응형 통합)"

# GitHub에서 새 저장소 생성 후
git remote add origin https://github.com/YOUR_ID/thedream-law.git
git push -u origin main
```

---

## 4단계: Vercel 배포

1. [vercel.com](https://vercel.com) 접속 → GitHub 계정으로 로그인
2. **"Add New Project"** 클릭
3. 위에서 만든 GitHub 저장소 선택
4. **Framework Preset**: Next.js (자동 감지됨)
5. **"Deploy"** 클릭 → 약 2~3분 후 완료

### 환경 변수 설정 (선택)
Vercel 프로젝트 설정 → Environment Variables에 추가:
```
RESEND_API_KEY=your_key_here      # 상담 이메일 발송용
SLACK_WEBHOOK_URL=your_url_here   # 슬랙 알림용
```

---

## 5단계: 도메인 DNS 변경 (www.lawthedream.com → Vercel)

> **이 작업은 필수입니다.** Vercel로 서버를 이전하면 기존 cafe24 IP가 아닌
> Vercel 서버를 가리키도록 DNS를 변경해야 합니다.

### Vercel에서 도메인 추가
1. Vercel 프로젝트 → **Settings → Domains**
2. `www.lawthedream.com` 입력 → Add

### cafe24(또는 도메인 등록 업체)에서 DNS 변경
| 레코드 유형 | 호스트 | 값 |
|---|---|---|
| CNAME | www | `cname.vercel-dns.com` |
| A (루트 도메인) | @ | Vercel이 안내하는 IP (예: 76.76.21.21) |

> DNS 반영 시간: 보통 수분~최대 48시간. 전환 중 다운타임은 거의 없습니다.

---

## 6단계: 남은 작업 목록

### 필수
- [ ] `public/` 폴더에 이미지 파일 복사 (1단계)
- [ ] `components/NaverTracker.tsx`에서 Naver Analytics ID 교체 (2단계)
- [ ] `app/api/consult/route.ts`에서 이메일/슬랙 발송 로직 활성화
- [ ] mn03/mn04 게시판: PHP BBS 유지 or API Route로 전환 결정

### 권장
- [ ] `law/`, `accident/`, `work/`, `center/`, `intro/` 사이트도 같은 방식으로 변환
- [ ] phpMyAdmin 외부 접근 차단 (보안 ⚠️)

---

## 반응형 통합 완료 사항

기존 `mobile/` 폴더의 별도 PHP 사이트(User-Agent 감지 후 리다이렉트)를 **CSS 미디어 쿼리**로 완전 대체했습니다.

| 구분 | 기존 PHP 방식 | Next.js 방식 |
|---|---|---|
| 모바일 감지 | PHP User-Agent 감지 후 `/mobile/` 리다이렉트 | CSS `@media` 미디어 쿼리 |
| 별도 파일 | `/mobile/` 폴더 유지 필요 | 불필요 (CSS 하나로 통합) |
| 메뉴 | 별도 모바일 메뉴 PHP 파일 | `Header.tsx` 햄버거 메뉴 |
| SEO | 모바일/PC URL 분리 → 중복 콘텐츠 불이익 | 단일 URL → SEO 최적 |

**적용된 breakpoints:**
- `1200px` 이하 → 태블릿 (그리드 4열, 높이 축소)
- `768px` 이하 → 모바일 L (햄버거 메뉴, 세로 스택)
- `480px` 이하 → 모바일 S (2열 그리드, 텍스트 축소)

---

## 파일 구조 요약

```
nextjs-thedream/
├── app/
│   ├── layout.tsx          ← 루트 레이아웃 (Header + NaverTracker + Footer)
│   ├── page.tsx            ← 메인 홈 (index.php 변환)
│   ├── page.module.css
│   ├── api/
│   │   └── consult/route.ts ← 상담 신청 API
│   ├── mn01/               ← 더 드림 소개
│   ├── mn02/               ← 업무분야 (12개 페이지)
│   ├── mn03/               ← 성공사례
│   ├── mn04/               ← 온라인상담/보도자료/VOD
│   └── mn08/               ← 행정·민사소송
├── components/
│   ├── Header.tsx          ← 데스크탑 + 모바일 햄버거 메뉴
│   ├── Footer.tsx          ← 푸터
│   ├── SubVisual.tsx       ← 서브페이지 배너 (반응형)
│   ├── SubTabs.tsx         ← 섹션별 탭 메뉴
│   ├── ConsultForm.tsx     ← 간편 상담 폼
│   └── NaverTracker.tsx    ← Naver Smart Log SPA 추적
├── styles/
│   ├── globals.css         ← 전역 CSS + 반응형 미디어 쿼리
│   ├── layout.css          ← 기존 PHP CSS
│   ├── layout_main.css
│   ├── layout_sub.css
│   └── board.css
├── public/                 ← 이미지 파일 여기에 복사
├── next.config.js
├── package.json
└── tsconfig.json
```
