import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, Users, UserLogin } from '../interface/users';
import { usersAPI } from 'src/environments/environment';
import { Router } from '@angular/router';
// import { usersAPI } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})

export class UsersService {

  usersURL: any = usersAPI;

  headers: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = { headers: this.headers };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUser(user: Users) {
    this.http.post(`${this.usersURL}/postUser`, user, this.options).subscribe(data => {
      console.log(data)
    })
  }

  userLogin(userLogin: UserLogin) {
    this.http.post<LoginResponse>(`${this.usersURL}/login`, userLogin, this.options).subscribe((data) => {
      console.log("userData", data.id);

      const accessToken = data.accessToken;
      const loggedInUserEmail = data.email;
      const id = data.id;

      localStorage.setItem('Token', accessToken);
      localStorage.setItem('Email', loggedInUserEmail);
      localStorage.setItem('id', id);

      if (accessToken) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/landing']);
      }

    });
  }

}