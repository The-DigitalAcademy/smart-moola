import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.scss'],
})
export class AaComponent implements OnInit {


  constructor(
    private router: Router,
    private questionsService: QuestionService,
    private session: SessionsService,
    private usersServices: UsersService
  ) { }

  question = '';
  active = 'q1';
  mandlaResponse = "";
  tumiResponse = "";

  verify() {
    this.active = this.session.getActiveQuestion();
    switch (this.active) {
      case 'q1':
        this.question = 'Why is credit important?';
        this.mandlaResponse = "Credit is when you owe money to someone else.";
        this.tumiResponse = "Credit allows you to make large purchases...";

        this.session.saveActiveQuestion('q2');

        // Send question to backend and get explanation
        this.questionsService
          .sendQuestionAndGetExplanation(this.question)
          .subscribe((data) => {
            console.log(data); // Log the response from the backend
          });

        break;
      // case 'q2':
      //   this.question =
      //     'Between Mandla and Tumi who is correct with credit definition';

      //     this.mandlaResponse = "Credit allows you to get into debt that you might fail to to repay ";
      //     this.tumiResponse = "Credit is the ability to borrow money to obtaingood or services. ";
      //   this.session.saveActiveQuestion('q3');


      //   break;
      // case 'q3':
      //   this.question = 'Lerato lets assume you want get credit, what do you think will be needed from you to get credit? ';

      //   this.mandlaResponse = "Lerato lets assume you want get credit, what do you think will be needed from you to get credit? ";
      //   this.tumiResponse = "";
      //   this.session.saveActiveQuestion('q4');
      //   break;
      // case 'q4':
      //   this.question = 'Between Mandla and Tumi is correct about credit score ';

      //   this.mandlaResponse = "Credit score is a prediction of your credit behavior, such as how likely you are to pay a loan back on time, based on information from your credit reports.";
      //   this.tumiResponse = "Credit Score is a used the is to check how do use your money.";
      //   this.session.saveActiveQuestion('q5');
      //   break;
      // case 'q5':
      //   this.question = 'Between Mandla and Tumi who is using their credit card in a good way?';

      //   this.mandlaResponse = "Mandla usually uses 75% of his credit balance on clothes, vacations and entertainment.";
      //   this.tumiResponse = "Tumi usually uses 30% of her credit balance on clothes and food.";
      //   this.session.saveActiveQuestion('q6');
      //   break;
      // case 'q6':
      //   this.question = 'Based on the previous senario who’s credit score is more likely to have a good credit score and has a better chance of qualifyingfor future credit?';

      //   this.mandlaResponse = "";
      //   this.tumiResponse = "";
      //   this.session.saveActiveQuestion('q7');
      //   break;
      // case 'q7':
      //   this.question = 'Between Mandla and Tumi who is correct with debt definition';

      //   this.mandlaResponse = "Debt is the money available for one can borrow to make purchaces they cannot afford to buy right away";
      //   this.tumiResponse = "Debt is the moneyone party owes another party, and can be paid over time ";
      //   this.session.saveActiveQuestion('q8');
      //   break;
      // case 'q8':
      //   this.question = 'qBetween Mandla and tumi who is correct about a debtor';

      //   this.mandlaResponse = "Debtor Is the creditor that loans money to anonther party ";
      //   this.tumiResponse = "Debtor is a person or one party that owes money to the other party, and can be paid over time.  ";
      //   this.session.saveActiveQuestion('q9');
      //   break;
      // case 'q9':
      //   this.question = 'Between Mandla and tumi who is correct in terms of explaining good debt';

      //   this.mandlaResponse = "Debt is good when is used for for things that gain value over time.";
      //   this.tumiResponse = "Debt is good when you able to miss few payment without affecting your score.";
      //   this.session.saveActiveQuestion('q10');
      //   break;
      // case 'q10':
      //   this.question = 'Between Mandla and tumi who is correct in terms of explaining bad debt';

      //   this.mandlaResponse = "Debt is bad when it used for for things that do not bring you money.";
      //   this.tumiResponse = "Debt is bad when you are failing to repay it, that means you don’t afford to pay back debt. ";
      //   this.session.saveActiveQuestion('10');
      //   this.router.navigate(['/']);
      //   break;
      default:
        this.active = 'q1';
        this.question = 'Why is credit important?';
        this.mandlaResponse = "Credit allows you to get into debt that you might fail to to repay ";
        this.tumiResponse = "Credit allows you to make large purchasesthat otherwise you would not be able to afford if you were to pay in cash ";

        this.session.saveActiveQuestion('q2');

        this.questionsService
          .sendQuestionAndGetExplanation(this.question)
          .subscribe((data) => {
            console.log(data); // Log the response from the backend
          });
        break;
    }
  }

  verifyAnswer() {
    this.router.navigate(['/answers']);
  }
  submitMandla() {
    // this.session.saveQ1(true)
    this.router.navigate(['/aa']);
    // if(this.session.getQ1()==true){
    //     this.session.saveQ2(true)
    // }
  }

  submitTumi() {
    this.router.navigate(['/aa']);

  }


  ngOnInit(): void {
    this.verify();
  }

  goBack(){
    this.usersServices.previousPage();
  }
}
