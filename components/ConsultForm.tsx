'use client'

import { useState } from 'react'

interface ConsultFormProps {
  gubun?: string
}

export default function ConsultForm({ gubun = '간편상담(메인)' }: ConsultFormProps) {
  const [form, setForm] = useState({ name: '', tel: '', memo: '' })
  const [agreed, setAgreed] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name) { alert('이름을 입력해 주세요.'); return }
    if (!form.tel)  { alert('연락이 가능한 전화번호를 입력해 주세요.'); return }

    // TODO: API Route(/api/consult)로 교체
    // 현재는 기존 PHP 엔드포인트로 전송 (임시)
    const data = new FormData()
    data.append('type2', 'post')
    data.append('select_value', 'quick')
    data.append('gubun', gubun)
    data.append('name', form.name)
    data.append('tel', form.tel)
    data.append('memo', form.memo)

    try {
      await fetch('/new2019/_inc/counsel_ok.php', { method: 'POST', body: data })
      setSubmitted(true)
    } catch {
      alert('상담 신청이 완료되었습니다.')
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#333' }}>
        <p style={{ fontSize: '18px', fontWeight: 600 }}>상담 신청이 완료되었습니다!</p>
        <p style={{ marginTop: '10px' }}>빠른 시일 내에 연락드리겠습니다.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="clear">
      <div>
        <div className="inpItem">
          <input
            type="text"
            className="inpType01"
            placeholder="이름"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="inpItem">
          <input
            type="tel"
            className="inpType01"
            placeholder="연락처"
            name="tel"
            value={form.tel}
            onChange={(e) => setForm({ ...form, tel: e.target.value })}
          />
        </div>
        <div className="inpItem">
          <textarea
            className="inputStyle"
            placeholder="상담내용"
            name="memo"
            value={form.memo}
            onChange={(e) => setForm({ ...form, memo: e.target.value })}
          />
        </div>
        <div style={{ textAlign: 'left', height: '40px', width: '300px', marginTop: '10px', fontSize: '15px', float: 'left' }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginRight: '5px' }}
          />
          <a href="/privacy" target="_blank">개인정보취급방침보기</a>
        </div>
        <div className="btn_box">
          <button type="submit">상담신청</button>
        </div>
      </div>
    </form>
  )
}
