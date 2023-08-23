// question.service.ts
import { Injectable } from '@angular/core';
import { Question } from '../interface/questions';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

const URL = 'https://smart-moola-app-v1.onrender.com/api/qna/getqna'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // url = "http://localhost:4545/api/qna/"
  renderURL = "https://smart-moola-app-v1.onrender.com/api/qna/"

  private backendUrl = "https://smart-moola-app-v1.onrender.com/api/meaning"
  constructor(private http: HttpClient, private router: Router) { }

  getQnA(): Observable<any> {
    return this.http.get("https://smart-moola-app-v1.onrender.com/api/qna/qna").pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error.message);
      }))
  }
  sendQuestionAndGetExplanation(question: string): Observable<any> {
    const endpoint = this.backendUrl
    return this.http.post(endpoint, { question });
  }
  getAllQuestions(): Observable<any> {
    return this.http.get(URL);
  }

}