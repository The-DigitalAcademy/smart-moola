import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { LoginResponse } from '../interface/users';

const q1 = 'q1';
const activeQ = 'activeQ';

const a1 = 'a1';
const activeA = 'activeA';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  getLoggedUser: any;
  saveLoggedUser(data: LoginResponse) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router, private usersServices: UsersService) {}



  // constructor() { }

//Quiz
  public saveActiveQuestion(q: string){
    window.sessionStorage.setItem(activeQ, JSON.stringify(q))
  }
  //Answer
  public saveActiveAnswer(a: string) {
    window.sessionStorage.setItem(activeQ, JSON.stringify(a));
  }
  /////////////

  //quiz
  public saveQ1(quiz: boolean) {
    window.sessionStorage.setItem(q1, JSON.stringify(quiz));
  }

  //answer

  public saveAns1(ans: boolean) {
    window.sessionStorage.setItem(a1, JSON.stringify(ans));
  }

  ///quiz
  public getActiveQuestion() {
    const question1 = window.sessionStorage.getItem(activeQ);
    if (question1) {
      return JSON.parse(question1);
    }
  }

  ///answer

  public getActiveAnswer() {
    const answer1 = window.sessionStorage.getItem(activeA);
    if (answer1) {
      return JSON.parse(answer1);
    }
  }

  ////quiz
  public getQ1() {
    const question1 = window.sessionStorage.getItem(q1);
    if (question1) {
      return JSON.parse(question1);
    }
  }

  ///answer

  public getA1() {
    const answer1 = window.sessionStorage.getItem(a1);
    if (answer1) {
      return JSON.parse(answer1);
    }
  }
}
