
export interface Answer {
  id: string;
  text: string;
  value: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Party {
  id: string;
  name: string;
  color: string;
  description: string;
}

export interface UserAnswer {
  questionId: number;
  answerId: string;
  value: number;
}

export interface Result {
  partyId: string;
  score: number;
  percentage: number;
}
