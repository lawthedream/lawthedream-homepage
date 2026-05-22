import { NextRequest, NextResponse } from 'next/server'

/**
 * 간편상담 API Route
 * POST /api/consult
 *
 * 기존 PHP(/new2019/_inc/counsel_ok.php)를 대체합니다.
 * 실제 운영 시 아래 중 하나를 선택하여 구현하세요:
 *   1. 이메일 발송: nodemailer 또는 SendGrid/Resend 사용
 *   2. DB 저장: MySQL/PostgreSQL 연결 후 INSERT
 *   3. 슬랙/카카오 알림 연동
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name    = formData.get('name')?.toString() || ''
    const tel     = formData.get('tel')?.toString()  || ''
    const memo    = formData.get('memo')?.toString()  || ''
    const gubun   = formData.get('gubun')?.toString() || '간편상담'

    if (!name || !tel) {
      return NextResponse.json({ ok: false, message: '이름과 연락처는 필수입니다.' }, { status: 400 })
    }

    // ✅ TODO: 아래 중 하나로 교체하세요

    // --- 방법 1: 이메일 발송 (Resend 예시) ---
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'lawthedream1101@gmail.com',
    //   subject: `[더드림] 새 상담 신청: ${gubun}`,
    //   html: `<p>이름: ${name}</p><p>연락처: ${tel}</p><p>내용: ${memo}</p>`,
    // })

    // --- 방법 2: 슬랙 Webhook ---
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: 'POST',
    //   body: JSON.stringify({ text: `새 상담: ${name} / ${tel} / ${memo}` }),
    // })

    console.log('[상담 접수]', { gubun, name, tel, memo })

    return NextResponse.json({ ok: true, message: '상담 신청이 접수되었습니다.' })
  } catch (error) {
    console.error('[상담 API 오류]', error)
    return NextResponse.json({ ok: false, message: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}
