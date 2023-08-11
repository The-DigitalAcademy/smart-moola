import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, User, CreateUserResponse, UserLogin } from '../interface/users';
import { usersAPI } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
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

  createUser(user: User) {
    this.http.post<CreateUserResponse>(`${this.usersURL}/postUser`, user, this.options).subscribe(data => {
      console.log("data", data);

      const loggedInUserEmail = data.email;
      const id = data.id.toString();

      localStorage.setItem('Email', loggedInUserEmail);
      localStorage.setItem('id', id);
    })
    this.router.navigate(['/home']);
  }

  userLogin(userLogin: UserLogin) {
    this.http.post<LoginResponse>(`${this.usersURL}/login`, userLogin, this.options).subscribe(
      (data) => {
        console.log("userData", data.id);

        const accessToken = data.accessToken;
        const loggedInUserEmail = data.email;
        const id = data.id;

        localStorage.setItem('Token', accessToken);
        localStorage.setItem('Email', loggedInUserEmail);
        localStorage.setItem('id', id);

        // Check if accessToken is present and valid
        if (accessToken && accessToken !== 'undefined') {
          this.router.navigate(['/home']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: 'Invalid username or password',
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: 'An error occurred during login. Please try again later.',
        });
      }
    );
  }

  // Method to trigger email sending
  sendEmail(email: string) {
    // Make an HTTP POST request to the backend API to trigger the email sending
    this.http.post(`${usersAPI}/send-email`, { email }).subscribe(
      (response) => {
        console.log('Email sent:', response);
      },
      (error) => {
        console.log('Error sending email:', error);
      }
    );
  }

  updateUser(user: User): Observable<User> {
    let id = localStorage.getItem('id');

    const url = `${this.usersURL}/${id}`;
    return this.http.put<User>(url, user, this.options);
  }

  updateUserWithOtp(id: string, newPassword: string, otp: string): Observable<any> {
    const url = `${this.usersURL}/${id}`;
    console.log(url, "url")// Use the correct URL
    
    const body = { newPassword, otp }; // Include only the fields needed for updating
    console.log(body, "body")

    return this.http.put(url, body, this.options);
  }





}