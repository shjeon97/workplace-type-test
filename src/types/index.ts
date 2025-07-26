export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  text: string;
  scores: Record<PersonalityType, number>;
}

export enum PersonalityType {
  LEADER = 'LEADER',
  COLLABORATOR = 'COLLABORATOR',
  ANALYST = 'ANALYST',
  CREATIVE = 'CREATIVE',
  SUPPORTER = 'SUPPORTER',
  INNOVATOR = 'INNOVATOR',
  ORGANIZER = 'ORGANIZER',
  COMMUNICATOR = 'COMMUNICATOR'
}

export interface TestResult {
  primaryType: PersonalityType;
  scores: Record<PersonalityType, number>;
  description: string;
  strengths: string[];
  workStyle: string[];
  idealRole: string[];
  developmentAreas: string[];
}

export interface UserResponse {
  questionId: string;
  answerId: string;
  timestamp: Date;
}

export interface TestState {
  currentQuestion: number;
  responses: UserResponse[];
  isCompleted: boolean;
  result: TestResult | null;
}

export interface PersonalityTypeInfo {
  name: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  workStyle: string[];
  idealRoles: string[];
  developmentAreas: string[];
  color: string;
  icon: string;
}