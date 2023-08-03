// question.service.ts
import { Injectable } from '@angular/core';
import { Question } from '../interface/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [
    {
      id: 1,
      text: 'Why is credit important??',
      answers: [
       { id: 1, text: 'Credit allows you to get into debt that you might fail to to repay', isCorrect: true },
        { id: 2, text: 'Credit allows you to make large purchases that otherwise you would not be able to afford if you were to pay in cash', isCorrect: false }
      ]
    },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },

    // {
    //   id: 1,
    //   text: 'What is the capital of France?',
    //   answers: [
    //     { id: 1, text: 'Paris', isCorrect: true },
    //     { id: 2, text: 'London', isCorrect: false }
    //   ]
    // },
    // Add more questions and answers here
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
