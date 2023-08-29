import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  currentSelectionValue = '';
  statementIndex = 0;
  progressPercentage = 33.33;
  isResponseCorrect = false;

  //FROM NO DEBT USER
  question = '';
  selectedValue = 'selection1';
  prompt = ''
  explanation = ''
  


  constructor(private counterService: CounterService,
    private router: Router,
    private questionsService: QuestionService,
    private session: SessionsService) {}

  statement = [
    "Statement1",
    "Statement2",
    "Statement3"
  ];

  questions = [
    "Questioin1",
    "Questioin2",
    "Questioin3"
  ];

  correct = [
    "Debt Counselling",
    "Debt Consolidation",
    "Debt Review"
  ]

  ngOnInit() {
    this.counterService.currentSelection.subscribe((selectionValue) => {
      this.currentSelectionValue = selectionValue;
    });
  }

  //AI Method
  getMeaning() {
    this.questionsService.sendQuestionAndGetExplanation(this.prompt).subscribe(data => {
      console.log(data); // Check the entire response object
      console.log(data.explanation); // Check the explanation property
      this.explanation = data.explanation;
      localStorage.setItem("explanation", this.explanation);
    });
  }

  //Is connection to the ai
  getQuestions() {
    this.questionsService.getAllQuestions().subscribe((data) => {
      for (const item of data) {
        console.log(item.id)
      }
    });
  }



  updateTextScene() {
    this.progressPercentage += 33.33; // Increase progress by one-third (33.33%)
  }

  previousStatement() {
    if (this.statementIndex > 0) {
      this.statementIndex--;
      this.updateTextScene();
    }
  }


  //progressPercentage = 25;



  onSelectionChange(event: Event) {
    const selectedValue = (event.target as HTMLInputElement).value;
    
   
    switch (selectedValue) {
      case 'selection1':
        this.selection1();

        this.prompt = 'What is Debt Counselling?'
        this.session.saveActiveQuestion('selection2');

        break;
      case 'selection2':
        this.selection2();

        this.prompt = 'What is Debt Consolidation?'
        this.session.saveActiveQuestion('selection3');

        break;
      case 'selection3':
        this.selection3();

        this.prompt = 'What is Debt Review?'
        this.session.saveActiveQuestion('selection3');
        // this.router.navigate(['/summary2']);
        break;
      default:

       this.selection1();

        this.prompt = 'What is Debt Counselling?'
        this.session.saveActiveQuestion('selection2');
        break;
    }

  }

  selection1() {
    this.counterService.selection1();
  }

  selection2() {
    this.counterService.selection2();
  }

  selection3() {
    this.counterService.selection3();
  }
   
  

  getCurrentStatement(): string {
    return this.statement[this.statementIndex];
  }

  getCurrentQuestion(): string {
    return this.questions[this.statementIndex];
  }
 
  

  submitForm() {
    
    const selectedAnswer = this.currentSelectionValue;
    const correctAnswer = this.correct[this.statementIndex];
    this.getMeaning();
    

    if (selectedAnswer === correctAnswer) {
      this.isResponseCorrect = true; // Set response to correct
    } else {
      this.isResponseCorrect = false; // Set response to incorrect
    }

    this.statementIndex++; // Move to the next loop


  }

  

  
}
