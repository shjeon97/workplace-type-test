// Personality Types - EXACTLY 4 types as requested
export enum PersonalityType {
  LEADER = 'LEADER',
  COLLABORATOR = 'COLLABORATOR', 
  ANALYST = 'ANALYST',
  CREATIVE = 'CREATIVE'
}

// Question and Answer interfaces
export interface Answer {
  id: string;
  text: string;
  scores: Record<PersonalityType, number>;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

// Test Result interfaces
export interface TestResult {
  primaryType: PersonalityType;
  scores: Record<PersonalityType, number>;
  description: string;
  strengths: string[];
  workStyle: string[];
  idealRole: string[];
  developmentAreas: string[];
}

// User Response interface
export interface UserResponse {
  questionId: string;
  answerId: string;
  timestamp: Date;
}

// Test State interface
export interface TestState {
  currentQuestion: number;
  responses: UserResponse[];
  isCompleted: boolean;
  result: TestResult | null;
}

// Personality Type Info interface
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