import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { QuestionService } from 'src/app/services/question.service';
import { LoaderService } from 'src/app/services/Loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-debt-user',
  templateUrl: './no-debt-user.component.html',
  styleUrls: ['./no-debt-user.component.scss']
})
export class NoDebtUserComponent implements OnInit {
  constructor(
    private router: Router,
    private questionsService: QuestionService,
    private usersServices: UsersService,
    private session: SessionsService, public loaderService: LoaderService
  ) { }

  question = '';
  active = 'q1';

  mandlaResponse = "";
  tumiResponse = "";
  prompt = ''
  explanation= ''
  progressPercentage = 0;
  questions: any;


  verifyAnswer() {
    this.router.navigate(['/answers']);
    // this.router.navigate(['/response']);

  }

  //Method which nevigate to answers component
  submitMandla() {
    this.getMeaning();
    this.router.navigate(['/answers']);

  }

  //Method which nevigate to wrong-answers component
  submitTumi() {
    this.getMeaning();
    this.router.navigate(['/wrong-answers']);

  }
  
  getQuestions() {
    this.questionsService.getAllQuestions().subscribe((data) => {
      for (const item of data) {
        console.log(item.id)
      }
    });
  }

  //Send prompt to AI and display explaination from the AI 
  getMeaning(){
    this.questionsService.sendQuestionAndGetExplanation(this.prompt).subscribe(data => {
      console.log(data); // Check the entire response object
      console.log(data.explanation); // Check the explanation property
      this.explanation = data.explanation;
      localStorage.setItem("explanation", this.explanation);
    });
  }

  //Check if the question is read then move to the next question
  verify() {
        this.active = this.session.getActiveQuestion();
        switch (this.active) {
        case 'q1':
        this.question = 'Why is credit important?';
        this.mandlaResponse = "Credit is when you owe money to someone else.";
        this.tumiResponse = "Credit allows you to make large purchases...";
       //sending this quiz to AI
        this.prompt = 'Why is credit important?'
        this.session.saveActiveQuestion('q2');
        this.progressPercentage =  this.progressPercentage + 15;
        break;

      // case 'q2':
      //   this.question =
      //     'Between Mandla and Tumi who is correct with credit definition';
      //   this.mandlaResponse =
      //     'Credit allows you to get into debt that you might fail to to repay ';
      //   this.tumiResponse =
      //     'Credit is the ability to borrow money to obtaingood or services. ';
      //   //sending this quiz to AI
      //   this.prompt = 'Credit defination'
      //   this.session.saveActiveQuestion('q3');
      //   this.progressPercentage =  20;
      //   break;

      case 'q2':
        this.question =
        'Lerato lets assume you want get credit, what do you think will be needed from you to get credit? ';
        this.mandlaResponse =
        'Drivers License and proof of residence.';
        this.tumiResponse =
          'Tumi has proof of residence, Identity document';
        //sending this quiz to AI
        this.prompt = 'To apply for credit what documents are requiedd?'
        this.session.saveActiveQuestion('q3');
        this.progressPercentage =  30;
        break;

      case 'q3':
        this.question =
          'Between Mandla and Tumi is correct about credit score ';
        this.mandlaResponse =
          'Credit score is a prediction of your credit behavior, such as how likely you are to pay a loan back on time, based on information from your credit reports.';
        this.tumiResponse =
          'Credit Score is a used the is to check how do use your money.';
        //sending this quiz to AI
        this.prompt = 'What is credit score?'
        this.session.saveActiveQuestion('q4');
        this.progressPercentage =  45;
        break;

      // case 'q5':
      //   this.question =
      //     'Between Mandla and Tumi who is using their credit card in a good way?';
      //   this.mandlaResponse =
      //     'Mandla usually uses 75% of his credit balance on clothes, vacations and entertainment.';
      //   this.tumiResponse =
      //     'Tumi usually uses 30% of her credit balance on clothes and food.';
      //   //sending this quiz to AI
      //   this.prompt = 'How to use credit in a good way?'
      //   this.session.saveActiveQuestion('q6');
      //   this.progressPercentage =  50;
      //   break;

      case 'q4':
        this.question =
          'Between Mandla and Tumi who is correct with debt definition';
        this.mandlaResponse =
          'Debt is the money available for one can borrow to make purchaces they cannot afford to buy right away';
        this.tumiResponse =
          'Debt is the moneyone party owes another party, and can be paid over time ';
        //sending this quiz to AI
        this.prompt = 'Defination of debt?'
        this.session.saveActiveQuestion('q5');
        this.progressPercentage =  60;
        break;

        //  case 'q7':
        // this.question =
        //   'Between Mandla and tumi who is correct about a debtor';
        // this.question = 'Between Mandla and tumi who is correct in terms of explaining bad debt';
        // this.mandlaResponse =
        //   'Debtor Is the creditor that loans money to anonther party ';
        // this.tumiResponse =
        //   'Debtor is a person or one party that owes money to the other party, and can be paid over time.  ';
        // //sending this quiz to AI
        // this.prompt = 'What is a debtor?'
        // this.session.saveActiveQuestion('q8');
        // this.progressPercentage =  70;
        // break;

      case 'q5':
        this.question =
          'Between Mandla and tumi who is correct in terms of explaining good debt';
        this.mandlaResponse =
          'Debt is good when is used for for things that gain value over time.';
        this.tumiResponse =
          'Debt is good when you able to miss few payment without affecting your score.';
        //sending this quiz to AI
        this.prompt = 'What is a good debtor?'
        this.session.saveActiveQuestion('q6');
        this.progressPercentage =  75;
        break;

      case 'q6':
        this.question =
        'Between Mandla and tumi who is correct in terms of explaining bad debt';
        this.mandlaResponse =
          'Debt is bad when it used for for things that do not bring you money.';
        this.tumiResponse =
          'Debt is bad when you are failing to repay it, that means you don’t afford to pay back debt. ';
        //sending this quiz to AI
        this.prompt = 'What is a bad debtor?'
        this.session.saveActiveQuestion('7');
        this.router.navigate(['/summary']);
        this.progressPercentage =  90;
        break;

        default:
        this.active = 'q1';
        this.question = 'Why is credit important?';
        this.mandlaResponse =
        'Credit allows you to get into debt that you might fail to to repay ';
        this.tumiResponse =
        'Credit allows you to make large purchasesthat otherwise you would not be able to afford if you were to pay in cash ';
           //sending this quiz to AI
        this.prompt = 'Why is credit important?'
        this.session.saveActiveQuestion('q2');
        this.progressPercentage =  15;
      
        break;
    }
  }
  ngOnInit(): void {
    this.verify();
    this.getQuestions();
  }
  goBack() {
    this.usersServices.previousPage();
  }

}

