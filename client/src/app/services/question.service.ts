// question.service.ts
import { Injectable } from '@angular/core';
import { Question } from '../interface/questions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

url = "http://localhost:4545/api/qna/"

constructor(private http : HttpClient, private router : Router){}

 /* private questions: Question[] = [
    {
      id: 1,
      text: 'Why is credit important??',
      answers: [
      { id: 1, text: 'Credit allows you to get into debt that you might fail to to repay', isCorrect: true },
        { id: 2, text: 'Credit allows you to make large purchases that otherwise you would not be able to afford if you were to pay in cash', isCorrect: false }
      ]
    },

    // Add more questions and answers here
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
*/
  
getQnA() : Observable<any>{
   return this.http.get("http://localhost:4545/api/qna/qna").pipe(
    catchError((error : HttpErrorResponse)=>{
      return throwError(error.error.message);
    }))

    this.router.navigate(['/home']);
  }
}
