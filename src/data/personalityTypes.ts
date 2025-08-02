import { PersonalityType, PersonalityTypeInfo } from '../types';

// EXACTLY 4 personality types as requested
export const personalityTypes: Record<PersonalityType, PersonalityTypeInfo> = {
  [PersonalityType.LEADER]: {
    name: '리더형',
    description: '목표 지향적이고 결단력이 강한 천연 리더입니다. 팀을 이끌고 비전을 제시하는 능력이 뛰어납니다.',
    characteristics: [
      '강한 결단력과 추진력',
      '명확한 목표 설정 능력',
      '팀을 동기부여하는 리더십',
      '책임감이 강함',
      '빠른 의사결정'
    ],
    strengths: [
      '팀 관리 및 조율 능력',
      '비전 제시와 방향성 설정',
      '위기 상황에서의 판단력',
      '목표 달성을 위한 추진력'
    ],
    workStyle: [
      '결과 중심적 업무 접근',
      '효율적인 의사결정',
      '팀원들에게 명확한 지시',
      '성과 달성에 집중'
    ],
    idealRoles: [
      '팀 리더/매니저',
      '프로젝트 매니저',
      '임원/경영진',
      '영업 관리자'
    ],
    developmentAreas: [
      '팀원 개별 관심과 배려',
      '세부사항에 대한 주의',
      '감정적 소통 능력',
      '유연성 향상'
    ],
    color: '#FF6B6B',
    icon: '👑'
  },
  [PersonalityType.COLLABORATOR]: {
    name: '협력형',
    description: '팀워크를 중시하고 다른 사람들과의 협력을 통해 최고의 성과를 만들어내는 조화로운 성격입니다.',
    characteristics: [
      '뛰어난 소통 능력',
      '팀워크 중시',
      '갈등 해결 능력',
      '포용력과 배려심',
      '공감 능력이 높음'
    ],
    strengths: [
      '팀 화합 조성',
      '다양한 의견 수렴',
      '갈등 중재 및 해결',
      '네트워킹 능력'
    ],
    workStyle: [
      '협업 중심의 업무 방식',
      '민주적 의사결정 선호',
      '팀원들의 의견 존중',
      '상호 지원적 업무 환경 조성'
    ],
    idealRoles: [
      'HR 담당자',
      '프로젝트 코디네이터',
      '고객 서비스 매니저',
      '팀 빌딩 전문가'
    ],
    developmentAreas: [
      '개인 의견 명확히 표현하기',
      '때로는 단호한 결정 내리기',
      '개인 성과에도 집중하기',
      '경계 설정 능력'
    ],
    color: '#4ECDC4',
    icon: '🤝'
  },
  [PersonalityType.ANALYST]: {
    name: '분석형',
    description: '논리적이고 체계적인 사고를 바탕으로 문제를 해결하는 데이터 중심의 전문가입니다.',
    characteristics: [
      '논리적이고 체계적인 사고',
      '데이터 기반 의사결정',
      '문제 해결 능력',
      '세밀한 관찰력',
      '객관적 판단력'
    ],
    strengths: [
      '복잡한 문제 분석',
      '정확한 데이터 해석',
      '리스크 평가 및 관리',
      '품질 관리 및 개선'
    ],
    workStyle: [
      '신중하고 체계적인 접근',
      '데이터와 사실 중시',
      '철저한 검증 과정',
      '장기적 관점에서 계획 수립'
    ],
    idealRoles: [
      '데이터 분석가',
      '연구원',
      '품질 관리자',
      '전략 기획자'
    ],
    developmentAreas: [
      '빠른 의사결정 능력',
      '직관적 판단 수용',
      '팀워크 및 소통 개선',
      '창의적 사고 개발'
    ],
    color: '#A8E6CF',
    icon: '📊'
  },
  [PersonalityType.CREATIVE]: {
    name: '창의형',
    description: '독창적인 아이디어와 혁신적인 솔루션으로 새로운 가능성을 열어가는 창의적 인재입니다.',
    characteristics: [
      '창의적이고 혁신적인 사고',
      '아이디어 발상 능력',
      '예술적 감각',
      '유연한 사고방식',
      '새로운 시도를 즐김'
    ],
    strengths: [
      '독창적 아이디어 제안',
      '문제에 대한 새로운 접근',
      '브랜딩 및 마케팅 감각',
      '혁신 프로젝트 리드'
    ],
    workStyle: [
      '자유로운 업무 환경 선호',
      '브레인스토밍 적극 참여',
      '실험적이고 도전적인 접근',
      '영감에 의한 업무 진행'
    ],
    idealRoles: [
      '디자이너',
      '마케팅 기획자',
      '광고 크리에이티브',
      '제품 개발자'
    ],
    developmentAreas: [
      '체계적인 실행 능력',
      '세부사항 관리',
      '일정 관리 및 계획성',
      '현실적 제약 고려'
    ],
    color: '#FFD93D',
    icon: '🎨'
  }
};