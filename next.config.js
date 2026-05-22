/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['thedreamlaw.cafe24.com', 'www.lawthedream.com'],
  },
  webpack: (config) => {
    // CSS url() 상대경로를 webpack이 모듈로 해석하지 않도록 설정
    // (구 PHP 사이트의 CSS 이미지 참조가 많아 빌드 에러 방지)
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((r) => {
          if (Array.isArray(r.use)) {
            r.use.forEach((use) => {
              if (
                use &&
                typeof use.loader === 'string' &&
                use.loader.includes('css-loader') &&
                use.options &&
                use.options.modules !== true
              ) {
                if (typeof use.options.url === 'undefined') {
                  use.options.url = false
                }
              }
            })
          }
        })
      }
    })
    return config
  },
  async redirects() {
    return [
      // PHP → Next.js 리다이렉트
      { source: '/intro/intro.php',         destination: '/',               permanent: true },
      { source: '/new2019/index.php',        destination: '/new2019/',        permanent: true },
      { source: '/new2019/mn01_01.php',      destination: '/new2019/mn01/greeting',  permanent: true },
      { source: '/new2019/mn02_01.php',      destination: '/new2019/mn02/occupational-cancer', permanent: true },
      // 구버전 mobile/ 리다이렉트 → 동일 경로 (반응형으로 통합)
      { source: '/intro/mobile/:path*',      destination: '/',               permanent: true },
      { source: '/new2019/mobile/:path*',    destination: '/new2019/',        permanent: true },
      // law PHP → Next.js
      { source: '/law/index.php',            destination: '/law',             permanent: true },
      { source: '/law/mn01/mn01_01.php',     destination: '/law/mn01/greeting',    permanent: true },
      { source: '/law/mn01/mn01_02.php',     destination: '/law/mn01/members',     permanent: true },
      { source: '/law/mn01/mn01_03.php',     destination: '/law/mn01/strength',    permanent: true },
      { source: '/law/mn01/mn01_04.php',     destination: '/law/mn01/location',    permanent: true },
      { source: '/law/mn02/mn02_01.php',     destination: '/law/mn02/accident-12', permanent: true },
      { source: '/law/mn02/mn02_02.php',     destination: '/law/mn02/drunk-driving',permanent: true },
      { source: '/law/mn02/mn02_03.php',     destination: '/law/mn02/minshik-law', permanent: true },
      { source: '/law/mn02/mn02_04.php',     destination: '/law/mn02/solution',    permanent: true },
      { source: '/law/mn02/mn02_05.php',     destination: '/law/mn02/license',     permanent: true },
      { source: '/law/mn02/mn02_06.php',     destination: '/law/mn02/procedure',   permanent: true },
      { source: '/law/mn02/mn02_07.php',     destination: '/law/mn02/lawsuit',     permanent: true },
      { source: '/law/mn03/mn03_01.php',     destination: '/law/mn03/sexual-harassment', permanent: true },
      { source: '/law/mn03/mn03_02.php',     destination: '/law/mn03/molestation', permanent: true },
      { source: '/law/mn03/mn03_03.php',     destination: '/law/mn03/assault',     permanent: true },
      { source: '/law/mn03/mn03_04.php',     destination: '/law/mn03/other',       permanent: true },
      { source: '/law/mn04/mn04_01.php',     destination: '/law/mn04/safety-law',  permanent: true },
      { source: '/law/mn04/mn04_02.php',     destination: '/law/mn04/negligence',  permanent: true },
      { source: '/law/mn05/mn05_01.php',     destination: '/law/mn05/general',     permanent: true },
      { source: '/law/mn05/mn05_02.php',     destination: '/law/mn05/violence',    permanent: true },
      { source: '/law/mn05/mn05_03.php',     destination: '/law/mn05/drugs',       permanent: true },
      { source: '/law/mn05/mn05_04.php',     destination: '/law/mn05/property',    permanent: true },
      { source: '/law/mn06/mn06_01.php',     destination: '/law/mn06/reason',      permanent: true },
      { source: '/law/mn06/mn06_02.php',     destination: '/law/mn06/defendant',   permanent: true },
      { source: '/law/mn06/mn06_03.php',     destination: '/law/mn06/victim',      permanent: true },
      { source: '/law/mn07/mn07_01.php',     destination: '/law/mn07/cases',       permanent: true },
      { source: '/law/mn07/mn07_02.php',     destination: '/law/mn07/press',       permanent: true },
      { source: '/law/mn08/mn08_01.php',     destination: '/law/mn08/consult',     permanent: true },
      { source: '/law/mn08/mn08_03.php',     destination: '/law/mn08/press',       permanent: tr