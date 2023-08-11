import { Injectable } from '@angular/core';
const q1 ="q1"
const q2 ="q2"
const q3 ="q3"
const activeQ = "activeQ"
const LOGGED_USER="logged_user"

@Injectable({
  providedIn: 'root'
})
export class SessionsService {



  constructor() { }


  public saveActiveQuestion(q: string){
    window.sessionStorage.setItem(activeQ, JSON.stringify(q))
  }


  public saveLoggedUser(user: any){
    window.sessionStorage.setItem(LOGGED_USER, JSON.stringify(user))
  }

  public saveQ1(quiz:boolean){
    window.sessionStorage.setItem(q1, JSON.stringify(quiz))
  }

  public getActiveQuestion(){
    const question1 = window.sessionStorage.getItem(activeQ)
    if(question1){
      return JSON.parse(question1)
    }
  }


  public getLoggedUser(){
    const question1 = window.sessionStorage.getItem(LOGGED_USER)
    if(question1){
      return JSON.parse(question1)
    }
  }

  public getQ1(){
    const question1 = window.sessionStorage.getItem(q1)
    if(question1){
      return JSON.parse(question1)
    }
  }


  public saveQ2(quiz:boolean){
    window.sessionStorage.setItem(q2, JSON.stringify(quiz))
  }

  public getQ2(){
    const question2 = window.sessionStorage.getItem(q2)
    if(question2){
      return JSON.parse(question2)
    }
  }


  public saveQ3(quiz:boolean){
    window.sessionStorage.setItem(q3, JSON.stringify(quiz))
  }

  public getQ3(){
    const question3 = window.sessionStorage.getItem(q3)
    if(question3){
      return JSON.parse(question3)
    }
  }

}
