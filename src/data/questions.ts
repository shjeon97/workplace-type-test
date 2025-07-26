import { Question, PersonalityType } from '../types';

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
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 0,
          [PersonalityType.INNOVATOR]: 2,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 1
        }
      },
      {
        id: '1b',
        text: '팀원들과 브레인스토밍을 통해 다양한 아이디어를 수집한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 3,
          [PersonalityType.SUPPORTER]: 2,
          [PersonalityType.INNOVATOR]: 2,
          [PersonalityType.ORGANIZER]: 0,
          [PersonalityType.COMMUNICATOR]: 3
        }
      },
      {
        id: '1c',
        text: '관련 데이터와 정보를 철저히 분석한다',
        scores: {
          [PersonalityType.LEADER]: 0,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 0
        }
      },
      {
        id: '1d',
        text: '세부적인 계획과 일정을 수립한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 2,
          [PersonalityType.CREATIVE]: 0,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 0,
          [PersonalityType.ORGANIZER]: 3,
          [PersonalityType.COMMUNICATOR]: 1
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
          [PersonalityType.CREATIVE]: 0,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 2
        }
      },
      {
        id: '2b',
        text: '모든 의견을 들어보고 합의점을 찾으려 노력한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 3,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 1,
          [PersonalityType.COMMUNICATOR]: 3
        }
      },
      {
        id: '2c',
        text: '객관적인 데이터를 바탕으로 논리적 해결책을 제시한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0,
          [PersonalityType.SUPPORTER]: 0,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 1
        }
      },
      {
        id: '2d',
        text: '창의적이고 혁신적인 대안을 제안한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 3,
          [PersonalityType.ORGANIZER]: 0,
          [PersonalityType.COMMUNICATOR]: 2
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
        text: '우선순위를 정하고 체계적으로 해결해 나간다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 2,
          [PersonalityType.CREATIVE]: 0,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 3,
          [PersonalityType.COMMUNICATOR]: 1
        }
      },
      {
        id: '3b',
        text: '동료들과 이야기하며 감정적 지지를 구한다',
        scores: {
          [PersonalityType.LEADER]: 0,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 3,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 0,
          [PersonalityType.COMMUNICATOR]: 3
        }
      },
      {
        id: '3c',
        text: '문제의 근본 원인을 분석하고 해결책을 찾는다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 0,
          [PersonalityType.INNOVATOR]: 2,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 0
        }
      },
      {
        id: '3d',
        text: '창의적인 활동이나 새로운 관점으로 전환한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 3,
          [PersonalityType.ORGANIZER]: 0,
          [PersonalityType.COMMUNICATOR]: 2
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
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 0,
          [PersonalityType.INNOVATOR]: 2,
          [PersonalityType.ORGANIZER]: 1,
          [PersonalityType.COMMUNICATOR]: 1
        }
      },
      {
        id: '4b',
        text: '팀원들의 의견을 수렴한 후 단계적으로 도입한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 3,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 2
        }
      },
      {
        id: '4c',
        text: '충분한 검증과 테스트를 거친 후 신중하게 도입한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 0,
          [PersonalityType.SUPPORTER]: 2,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 3,
          [PersonalityType.COMMUNICATOR]: 0
        }
      },
      {
        id: '4d',
        text: '혁신적인 가능성을 보고 적극적으로 실험한다',
        scores: {
          [PersonalityType.LEADER]: 2,
          [PersonalityType.COLLABORATOR]: 1,
          [PersonalityType.ANALYST]: 1,
          [PersonalityType.CREATIVE]: 3,
          [PersonalityType.SUPPORTER]: 0,
          [PersonalityType.INNOVATOR]: 3,
          [PersonalityType.ORGANIZER]: 0,
          [PersonalityType.COMMUNICATOR]: 1
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
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 0,
          [PersonalityType.INNOVATOR]: 2,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 2
        }
      },
      {
        id: '5b',
        text: '팀원들 간의 소통을 돕고 협력을 촉진한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 3,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 3,
          [PersonalityType.INNOVATOR]: 1,
          [PersonalityType.ORGANIZER]: 1,
          [PersonalityType.COMMUNICATOR]: 3
        }
      },
      {
        id: '5c',
        text: '데이터 분석과 문제 해결을 담당한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 0,
          [PersonalityType.ANALYST]: 3,
          [PersonalityType.CREATIVE]: 1,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 2,
          [PersonalityType.ORGANIZER]: 2,
          [PersonalityType.COMMUNICATOR]: 0
        }
      },
      {
        id: '5d',
        text: '아이디어 제안과 창의적 솔루션 개발을 주도한다',
        scores: {
          [PersonalityType.LEADER]: 1,
          [PersonalityType.COLLABORATOR]: 2,
          [PersonalityType.ANALYST]: 0,
          [PersonalityType.CREATIVE]: 3,
          [PersonalityType.SUPPORTER]: 1,
          [PersonalityType.INNOVATOR]: 3,
          [PersonalityType.ORGANIZER]: 0,
          [PersonalityType.COMMUNICATOR]: 2
        }
      }
    ]
  }
];