import type { Metadata } from 'next'
import SiteSubVisual from '@/components/SiteSubVisual'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '온라인상담 | 더드림교통형사센터',
  description: '더드림 교통형사센터 온라인 상담. 교통사고·형사사건 무료 상담 신청.',
  keywords: '온라인상담,형사상담,무료상담,교통사고',
  alternates: { canonical: 'https://www.lawthedream.com/law/mn08/consult' },
}

const PRIVACY_POLICY = `'더드림법률사무소'는(이하 '더드림법률사무소'은) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
더드림법률사무소는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

더드림법률사무소는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

ο 본 방침은 : 2018년 01월 01일 부터 시행됩니다.

■ 수집하는 개인정보 항목

더드림법률사무소는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.

ο 수집항목 : 이름, 생년월일, 성별, 로그인ID, 비밀번호, 자택 주소, 휴대전화번호, 이메일, 접속 로그, 쿠키, 접속 IP 정보, 메일수신여부, SMS수신여부
ο 개인정보 수집방법 : 홈페이지, 서면양식

■ 개인정보의 수집 및 이용목적

더드림법률사무소는 수집한 개인정보를 다음의 목적을 위해 활용합니다.

ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공
ο 회원 관리 : 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지, 가입 의사 확인, 불만처리 등 민원처리, 고지사항 전달
ο 마케팅 및 광고에 활용 : 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계

■ 개인정보의 보유 및 이용기간

더드림법률사무소는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.

■ 개인정보의 파기절차 및 방법

ο 파기절차 : 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.
ο 파기방법 : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.

■ 개인정보 제공

더드림법률사무소는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자들이 사전에 동의한 경우 또는 법령의 규정에 의거하거나 수사기관의 요구가 있는 경우에는 예외로 합니다.

■ 수집한 개인정보의 위탁

더드림법률사무소는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다.

[정보보호 책임자]
개인정보관리책임자 성명 : 박성훈
전화번호 : 02-6959-5053

■ 이용자 및 법정대리인의 권리와 그 행사방법

이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.

■ 개인정보 자동수집 장치의 설치·운영 및 그 거부에 관한 사항

더드림법률사무소는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)'를 운용합니다. 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키 저장 시 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
1. 개인분쟁조정위원회 (www.1336.or.kr)
2. 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4)
3. 대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr / 02-3480-3600)
4. 경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)`

export default function Page() {
  return (
    <>
      <SiteSubVisual title="상담 안내" site="law" imgSrc="/law/mn02/img/sub_vs02.jpg" />

      {/* 상담 탭 네비게이션 */}
      <div className="law-mn08-tabs">
        <Link href="/law/mn08/consult" className="law-mn08-tab law-mn08-tab-active">온라인상담</Link>
        <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer" className="law-mn08-tab">카톡상담</a>
      </div>

      <div id="contents" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* 브레드크럼 */}
        <div id="location" style={{ padding: '14px 0', borderBottom: '1px solid #ddd', marginBottom: 30, fontSize: 13, color: '#888' }}>
          <span style={{ color: '#555' }}>HOME</span>
          <span style={{ margin: '0 6px' }}>&gt;</span>
          <span style={{ color: '#555' }}>상담안내</span>
          <span style={{ margin: '0 6px' }}>&gt;</span>
          <span style={{ color: '#224058', fontWeight: 600 }}>온라인 상담</span>
        </div>

        {/* 개인정보처리방침 */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 8 }}>
          <tbody>
            <tr>
              <td style={{ padding: 0 }}>
                <textarea
                  readOnly
                  rows={10}
                  style={{ width: '100%', padding: '12px', fontSize: 13, lineHeight: 1.7, color: '#555', border: '1px solid #ccc', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  defaultValue={PRIVACY_POLICY}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'right', padding: '8px 0 20px' }}>
                <label style={{ fontSize: 14, color: '#333', cursor: 'pointer' }}>
                  <input type="checkbox" name="check01" value="Y" style={{ marginRight: 6 }} />
                  위 개인정보취급방침에 동의합니다.
                </label>
              </td>
            </tr>
          </tbody>
        </table>

        {/* 상담 폼 */}
        <form method="post" action="" style={{ width: '100%' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #224058', borderBottom: '2px solid #224058', marginBottom: 20 }}>
            <colgroup>
              <col style={{ width: 110 }} />
              <col />
              <col style={{ width: 110 }} />
              <col />
            </colgroup>
            <tbody>
              {/* 제목 */}
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>제목</th>
                <td colSpan={3} style={{ padding: '10px 12px' }}>
                  <input
                    type="text"
                    name="subject"
                    required
                    style={{ width: '95%', padding: '8px 10px', border: '1px solid #ccc', fontSize: 14, outline: 'none' }}
                  />
                </td>
              </tr>
              {/* 작성자 / 비밀번호 */}
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>작성자</th>
                <td style={{ padding: '10px 12px' }}>
                  <input
                    type="text"
                    name="name"
                    required
                    style={{ width: '85%', padding: '8px 10px', border: '1px solid #ccc', fontSize: 14 }}
                  />
                </td>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>비밀번호</th>
                <td style={{ padding: '10px 12px' }}>
                  <input
                    type="password"
                    name="pw"
                    style={{ width: '85%', padding: '8px 10px', border: '1px solid #ccc', fontSize: 14 }}
                  />
                </td>
              </tr>
              {/* 휴대폰번호 / 이메일 */}
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>휴대폰번호</th>
                <td style={{ padding: '10px 12px' }}>
                  <input type="text" name="tel1" maxLength={3} style={{ width: 55, padding: '8px 6px', border: '1px solid #ccc', fontSize: 14, textAlign: 'center' }} />
                  <span style={{ margin: '0 2px' }}>-</span>
                  <input type="text" name="tel2" maxLength={4} style={{ width: 65, padding: '8px 6px', border: '1px solid #ccc', fontSize: 14, textAlign: 'center' }} />
                  <span style={{ margin: '0 2px' }}>-</span>
                  <input type="text" name="tel3" maxLength={4} style={{ width: 65, padding: '8px 6px', border: '1px solid #ccc', fontSize: 14, textAlign: 'center' }} />
                </td>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>이메일</th>
                <td style={{ padding: '10px 12px' }}>
                  <input type="text" name="email1" maxLength={30} style={{ width: 100, padding: '8px 6px', border: '1px solid #ccc', fontSize: 14 }} />
                  <span style={{ margin: '0 4px' }}>@</span>
                  <input type="text" name="email2" maxLength={30} style={{ width: 100, padding: '8px 6px', border: '1px solid #ccc', fontSize: 14 }} />
                </td>
              </tr>
              {/* 비밀글 */}
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>비밀글</th>
                <td colSpan={3} style={{ padding: '12px 16px' }}>
                  <label style={{ marginRight: 16, fontSize: 14, cursor: 'pointer' }}>
                    <input type="radio" name="secret" value="1" defaultChecked style={{ marginRight: 4 }} /> 비공개
                  </label>
                  <label style={{ fontSize: 14, cursor: 'pointer' }}>
                    <input type="radio" name="secret" value="0" style={{ marginRight: 4 }} /> 공개
                  </label>
                </td>
              </tr>
              {/* 내용 */}
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333', verticalAlign: 'top', paddingTop: 16 }}>내용</th>
                <td colSpan={3} style={{ padding: '10px 12px' }}>
                  <textarea
                    name="content"
                    rows={10}
                    required
                    style={{ width: '99%', padding: '10px', border: '1px solid #ccc', fontSize: 14, lineHeight: 1.6, resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </td>
              </tr>
              {/* 업로드 */}
              <tr>
                <th style={{ background: '#f5f7fa', padding: '12px 16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#333' }}>업로드1</th>
                <td colSpan={3} style={{ padding: '10px 12px' }}>
                  <input type="file" name="upload_file" style={{ fontSize: 14 }} />
                </td>
              </tr>
            </tbody>
          </table>

          {/* 버튼 */}
          <div style={{ textAlign: 'center', marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button
              type="submit"
              style={{ background: '#224058', color: '#fff', border: 'none', padding: '12px 40px', fontSize: 15, fontWeight: 600, cursor: 'pointer', letterSpacing: 1 }}
            >
              상담신청
            </button>
            <a
              href="/law/mn08/consult"
              style={{ display: 'inline-block', background: '#888', color: '#fff', padding: '12px 40px', fontSize: 15, fontWeight: 600, textDecoration: 'none', letterSpacing: 1 }}
            >
              목록보기
            </a>
          </div>
        </form>
      </div>
    </>
  )
}
