import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-ba',
  templateUrl: './ba.component.html',
  styleUrls: ['./ba.component.scss']
})
export class BaComponent implements OnInit {

  constructor(

    private router: Router,
    private questionsService: QuestionService,
    private session: SessionsService
  ) {}

  question = '';
  active = 'q1';
  ansA = '';
  ansB = '';
  ansC = '';

  verify()
  {
    this.active = this.session.getActiveQuestion();

    switch (this.active)
    {
      case 'q1':

      this.question = 'Mbali overspent on his credit card, resulting in a large debt with added interest charges from the credit card company.';

      this.ansA = '';
      this.ansB = '';
      this.ansC = '';

      this.session.saveActiveQuestion('q2');

         // Send question to backend and get explanation
         this.questionsService
         .sendQuestionAndGetExplanation(this.question)
         .subscribe((data) => {
           console.log(data); // Log the response from the backend
         });
         break;

         case 'q2':

         this.question = 'Mbali asked for debt management help for medical bills and job loss, with a counselor creating a new repayment plan after negotiating with creditors.';
         this.question = 'Which debt management program helped Tumi?Select One answer';

         this.ansA = '';
         this.ansB = '';
         this.ansC = '';
   
         this.session.saveActiveQuestion('q3');
   
            // Send question to backend and get explanation
            this.questionsService
            .sendQuestionAndGetExplanation(this.question)
            .subscribe((data) => {
              console.log(data); // Log the response from the backend
            });
            break;

    }
  }

  ngOnInit(): void {
  }

}
