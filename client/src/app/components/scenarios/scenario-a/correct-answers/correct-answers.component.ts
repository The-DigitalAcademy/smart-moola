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
  active = 'a1';
  mandlaAnswer = '';
  tumiAnswer = '';
  question: any;


  verifyAns()
  {
    this.active = this.session.getActiveAnswer();

    switch(this.active)
    
    {
      case 'a1':
        break;

        case 'a2':
          this.answers = " ";
          this.session.saveActiveAnswer('a3');
          break;

        default:
          this.active = 'a1';
          this.answers = "Credit plays an important role in reaching your financials objectives. Whether you are looking to purchase a house or start a business, having access to credit makes simple than ever to secure the funding necessary. ";

          this.session.saveActiveAnswer('a2');
          break;
    }

  }

  verifyAnswer()
  {
   
    this.router.navigate(['/aa'])
    
  }
 
  verifyAnswer2()
  {
   
    this.router.navigate(['/aa'])
    
  }

  constructor(

    private router: Router,
    private session: SessionsService
  ) {}

  ngOnInit(): void {
  }
  continueToNext() {
 this.router.navigate(["/aa"]) 
   }
}
