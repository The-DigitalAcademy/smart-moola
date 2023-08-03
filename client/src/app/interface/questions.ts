// question.model.ts
export interface Question {
    id: number;
    text: string;
    answers: Answer[];
  }
  
  // answer.model.ts
  export interface Answer {
    id: number;
    text: string;
    isCorrect: boolean;
  }
  