import { UserResponse, TestResult, PersonalityType } from '../types';
import { questions } from '../data/questions';
import { personalityTypes } from '../data/personalityTypes';

export function calculateTestResult(responses: UserResponse[]): TestResult {
  // Initialize scores for 4 personality types only
  const scores: Record<PersonalityType, number> = {
    [PersonalityType.LEADER]: 0,
    [PersonalityType.COLLABORATOR]: 0,
    [PersonalityType.ANALYST]: 0,
    [PersonalityType.CREATIVE]: 0
  };

  // Calculate scores based on responses
  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (question) {
      const answer = question.answers.find(a => a.id === response.answerId);
      if (answer) {
        Object.entries(answer.scores).forEach(([type, score]) => {
          scores[type as PersonalityType] += score;
        });
      }
    }
  });

  // Find the primary personality type (highest score)
  const primaryType = Object.entries(scores).reduce((max, [type, score]) => 
    score > max.score ? { type: type as PersonalityType, score } : max,
    { type: PersonalityType.LEADER, score: 0 }
  ).type;

  const typeInfo = personalityTypes[primaryType];

  return {
    primaryType,
    scores,
    description: typeInfo.description,
    strengths: typeInfo.strengths,
    workStyle: typeInfo.workStyle,
    idealRole: typeInfo.idealRoles,
    developmentAreas: typeInfo.developmentAreas,
  };
}

export function getPersonalityTypeInfo(type: PersonalityType) {
  return personalityTypes[type];
}