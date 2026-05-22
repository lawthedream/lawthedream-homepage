import type { Metadata } from 'next'
import SubVisual from '@/components/SubVisual'

export const metadata: Metadata = {
  title: '소음성난청 | 더드림법률사무소',
  description:
    '소음성 난청 산업재해 전문 상담. 85dB 이상 소음 작업장 근무 후 발생한 난청의 산재 인정기준과 성공사례를 안내합니다. 02-6959-5053',
  keywords: '소음성난청, 산재, 소음성 난청 인정기준, 청력손실 산재, 직업성 난청',
}

const cases = [
  { num: '01', color: '#3cb6c1', img: '/new2019/mn02/img/mn02_07_img4_1.jpg', desc: '공사현장에서 할석공(벽체·바닥·천정·내장재 등 시멘트 콘크리트를 깨고 갈아내는 작업)으로 근무 중 난청이 발병한 경우' },
  { num: '02', color: '#647ecb', img: '/new2019/mn02/img/mn02_07_img4_2.jpg', desc: '시멘트 공장 생산공정에서 근무하며 양측 감각신경성 난청이 발생한 경우' },
  { num: '03', color: '#8b9cba', img: '/new2019/mn02/img/mn02_07_img4_3.jpg', desc: '광업소 근무 중 감각신경성 난청 양측이 발병한 경우' },
  { num: '04', color: '#3cb6c1', img: '/new2019/mn02/img/mn02_07_img4_4.jpg', desc: '기어가공 및 연마공으로 근무하던 중 양측 감음신경성 난청이 발생한 경우' },
]

export default function NoiseHearingLossPage() {
 