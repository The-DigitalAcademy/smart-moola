// answers.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

url = "http://localhost:4545/api/qna/"

constructor(private http : HttpClient, private router : Router){}

 
getQnA() : Observable<any>{
   return this.http.get("http://localhost:4545/api/qna/qna").pipe(
    catchError((error : HttpErrorResponse)=>{
      return throwError(error.error.message);
    }))

    this.router.navigate(['/home']);
  }
}
