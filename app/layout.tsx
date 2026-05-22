import type { Metadata } from 'next'
import Script from 'next/script'
import NaverTracker from '@/components/NaverTracker'
import FloatingButtons from '@/components/FloatingButtons'
import '@/styles/globals.css'
import '@/styles/layout.css'
import '@/styles/layout_main.css'
import '@/styles/layout_sub.css'
import '@/styles/board.css'

export const metadata: Metadata = {
  title: '더드림법률사무소',
  description:
    '민사, 형사, 가사, 산업재해, 부당해고, 보험금, 각종 재해보험 등 분야별 전문자격인들로 구성된 법률사무소. 축적된 노하우와 데이터. 서초구 위치.',
  keywords: '산업재해, 보험보상, 소송, 법률사무소, 노무사, 변호사, 손해사정사, 더드림',
  openGraph: {
    title: '더드림법률사무소',
    description:
      '민사, 형사, 가사, 산업재해, 부당해고, 보험금, 각종 재해보험 등 분야별 전문자격인들로 구성된 법률사무소.',
    images: [{ url: '/new2019/images/logo.png' }],
    url: 'https://www.lawthedream.com',
    siteName: '더드림법률사무소',
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    other: {
      'naver-site-verification': 'e58688bc37dbb8f87f04dc77193ba7a86ae76c32',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800&subset=korean"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10929685812"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10929685812');
          `}
        </Script>
        <Script
          src="//wcs.naver.net/wcslog.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <NaverTracker />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
