import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiUrls = 'http://localhost:4500/';

  // headers: any = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });
  // options = { headers: this.headers };
  constructor(private http: HttpClient) { }

  createUser(user: Users):Observable<any> {
    return this.http.post('${this.apiUrls}/signup', user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post('${this.apiUrls}/sign', credentials).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here or rethrow it to be caught by the component.
        return throwError(error.error.message);
      })
    );
  }

}