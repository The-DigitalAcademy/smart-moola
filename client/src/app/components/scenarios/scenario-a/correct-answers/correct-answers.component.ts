import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-correct-answers',
  templateUrl: './correct-answers.component.html',
  styleUrls: ['./correct-answers.component.css']
})
export class CorrectAnswersComponent implements OnInit {

  answers = '';
  active = 'a1'
  mandlaAnswer = '';
  tumiAnswer = '';

  verifyAns(){}
  
  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  continueToNext() {
 this.router.navigate(["/aa"]) 
   }
}
