// answers.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

url = "https://smart-moola-app-v1.onrender.com/api/qna/"

constructor(private http : HttpClient, private router : Router){}

 
getQnA() : Observable<any>{
   return this.http.get("https://smart-moola-app-v1.onrender.com/api/qna/qna").pipe(
    catchError((error : HttpErrorResponse)=>{
      return throwError(error.error.message);
    }))

    this.router.navigate(['/home']);
  }
}
