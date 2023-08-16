// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, User, CreateUserResponse, UserLogin } from '../interface/users';
import { usersAPI } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//  import { usersAPI } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //usersURL: any = usersAPI;
  usersURL = 'https://smart-9qg3.onrender.com/api/users';
  headers: any = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  options = { headers: this.headers };

  user: any = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.usersURL}/postUser`, user, this.options);
  }

  userLogin(userLogin: UserLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.usersURL}/login`, userLogin, this.options);
  }

  updateUser(user: User): Observable<any> {
    let id = localStorage.getItem('id');

    console.log('For an ID, Service', id);

    const url = `${this.usersURL}/${id}`;
    return this.http.put<any>(url, user, this.options);
  }

  // Method to trigger email sending
  sendEmail(email: string) {
    // Make an HTTP POST request to the backend API to trigger the email sending
    this.http.post(`${usersAPI}/send-email`, { email }).subscribe(
      (response) => {
        console.log('Email sent:', response);
        this.http.post<CreateUserResponse>(`${this.usersURL}/postUser`, this.user, this.options).subscribe(data => {
          console.log("data", data);

          const loggedInUserEmail = data.email;
          const id = data.id.toString();

          localStorage.setItem('Email', loggedInUserEmail);
          localStorage.setItem('id', id);
        })
        this.router.navigate(['/home']);
      })
  }

  discardProfileEdit() {
    return this.router.navigate(['/profile']);
  }

  updateUserWithOtp(id: string, newPassword: string, otp: string): Observable<any> {
    const url = `${this.usersURL}/${id}`;
    console.log(url, "url")// Use the correct URL

    const body = { newPassword, otp }; // Include only the fields needed for updating
    console.log(body, "body")

    return this.http.put(url, body, this.options);
  }

  userLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  previousPage() {
    this.location.back();
  }
}