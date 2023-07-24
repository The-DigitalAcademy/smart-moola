import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/users';



@Injectable({
  providedIn: 'root'
})

export class UsersService {

 
  headers: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient) { }

  createUser(user: User) {
    this.http.post(`${this.url}`, user, this.options).subscribe(data => {
      console.log(data)
    })

  }

}