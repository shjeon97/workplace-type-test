import { Question, PersonalityType } from '../types';

// EXACTLY 10 questions as requested
export const questions: Question[] = [
  {
    id: '1',
    text: '새로운 프로젝트가 시작될 때, 당신의 첫 번째 행동은?',
    answers: [
      {
        id: '1a',
        text: '전체적인 목표와 비전을 설정하고 팀을 이끌어 나간다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '1b',
        text: '팀원들과 브레인스토밍을 통해 다양한 아이디어를 수집한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 3
        }
      },
      {
        id: '1c',
        text: '관련 데이터와 정보를 철저히 분석한다',
        scores: {
          [PersonalityType.LEADER]: 0,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '1d',
        text: '창의적이고 혁신적인 접근 방법을 모색한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '2',
    text: '회의에서 의견 충돌이 발생했을 때, 당신의 대응 방식은?',
    answers: [
      {
        id: '2a',
        text: '명확한 결정을 내리고 팀을 하나로 모은다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '2b',
        text: '모든 의견을 들어보고 합의점을 찾으려 노력한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '2c',
        text: '객관적인 데이터를 바탕으로 논리적 해결책을 제시한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '2d',
        text: '창의적이고 혁신적인 대안을 제안한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '3',
    text: '업무 스트레스가 높을 때, 당신의 대처 방법은?',
    answers: [
      {
        id: '3a',
        text: '우선순위를 정하고 체계적으로 문제를 해결한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '3b',
        text: '동료들과 이야기하며 감정적 지지를 구한다',
        scores: {
          [PersonalityType.LEADER]: 0,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '3c',
        text: '강력한 리더십으로 상황을 통제한다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '3d',
        text: '창의적인 활동이나 새로운 관점으로 전환한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '4',
    text: '새로운 기술이나 도구를 도입할 때, 당신의 접근 방식은?',
    answers: [
      {
        id: '4a',
        text: '빠르게 결정하고 팀 전체에 도입을 추진한다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '4b',
        text: '팀원들의 의견을 수렴한 후 단계적으로 도입한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '4c',
        text: '충분한 검증과 테스트를 거친 후 신중하게 도입한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '4d',
        text: '혁신적인 가능성을 보고 적극적으로 실험한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '5',
    text: '팀 프로젝트에서 당신이 가장 편안하게 느끼는 역할은?',
    answers: [
      {
        id: '5a',
        text: '프로젝트 리더로서 전체를 조율하고 방향을 제시한다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '5b',
        text: '팀원들 간의 소통을 돕고 협력을 촉진한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '5c',
        text: '데이터 분석과 문제 해결을 담당한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '5d',
        text: '아이디어 제안과 창의적 솔루션 개발을 주도한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '6',
    text: '업무에서 가장 중요하게 생각하는 가치는?',
    answers: [
      {
        id: '6a',
        text: '목표 달성과 성과 창출',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 2,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '6b',
        text: '팀워크와 상호 협력',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '6c',
        text: '정확성과 논리적 일관성',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '6d',
        text: '혁신과 창의적 발상',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '7',
    text: '업무 환경에서 선호하는 의사소통 방식은?',
    answers: [
      {
        id: '7a',
        text: '직접적이고 명확한 지시와 피드백',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 2,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '7b',
        text: '열린 토론과 다양한 의견 교환',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 2
        }
      },
      {
        id: '7c',
        text: '구체적인 데이터와 근거 기반 대화',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '7d',
        text: '자유로운 아이디어 공유와 브레인스토밍',
        scores: {
          [PersonalityType.LEADER]: 0,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '8',
    text: '업무 계획을 세울 때 당신의 스타일은?',
    answers: [
      {
        id: '8a',
        text: '큰 그림을 그리고 전략적으로 계획한다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 2,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '8b',
        text: '팀원들과 함께 계획을 세우고 조율한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '8c',
        text: '세부적이고 체계적인 계획을 수립한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '8d',
        text: '유연하게 상황에 맞춰 계획을 조정한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '9',
    text: '업무 성과를 평가받을 때 가장 기쁜 피드백은?',
    answers: [
      {
        id: '9a',
        text: '뛰어난 리더십과 추진력을 보여줬다',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '9b',
        text: '팀의 화합과 협력을 이끌어냈다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '9c',
        text: '정확하고 신뢰할 수 있는 분석을 제공했다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '9d',
        text: '혁신적이고 창의적인 해결책을 제시했다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  },
  {
    id: '10',
    text: '이상적인 직장 환경은?',
    answers: [
      {
        id: '10a',
        text: '명확한 목표와 권한이 주어지는 환경',
        scores: {
          [PersonalityType.LEADER]: 3,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 2,
          [PersonalityType.CREATIVE]: 1
        }
      },
      {
        id: '10b',
        text: '소통이 활발하고 협력적인 환경',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 2
        }
      },
      {
        id: '10c',
        text: '체계적이고 안정적인 환경',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0
        }
      },
      {
        id: '10d',
        text: '자유롭고 창의적인 환경',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3
        }
      }
    ]
  }
];