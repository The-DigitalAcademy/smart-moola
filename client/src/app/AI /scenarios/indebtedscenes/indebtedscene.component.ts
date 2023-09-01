import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../services/counter.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indebtedscene',
  templateUrl: './indebtedscene.component.html',
  styleUrls: ['./indebtedscene.component.scss']
})

export class IndebtedScenesComponent implements OnInit {

  currentSelectionValue = '';
  statementIndex = 0;
  progressPercentage = 0;
  isResponseCorrect = false;

  //FROM NO DEBT USER
  question = '';
  selectedValue = 'selection1';
  prompt = ''
  explanation = ''

  constructor(private counterService: CounterService,
    private router: Router,
    private questionsService: QuestionService,
    private session: SessionsService) { }

  statement = [
    "Mbali asked for debt management help for medical bills and job loss, with a counselor creating a new repayment plan after negotiating with creditors.",
    "Meet Nandi, who has multiple debts from student loans, credit cards, and a car loan. It is hard for her to keep track of payments and interest rates.",
    "What helps people in debt by creating a manageable repayment plan through a formal program with the assistance of a debt counselor?The goal is to negotiate with creditors and protect them from legal action."
  ];

  questions = [
    `Which debt management program helped Mbali? <br> Select One answer:`,
    "Which debt management do you think Nandi needs? Select One answer:",
    "What helps people in debt by creating a manageable repayment plan:"
  ];

  correct = [
    "Debt Counselling",
    "Debt Consolidation",
    "Debt Review"
  ]

  // ngOnInit() {
  //   this.counterService.currentSelection.subscribe((selectionValue: any) => {
  //     this.currentSelectionValue = selectionValue;
  //   });
  // }

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

  // updateTextScene() {
  //   this.progressPercentage =  (this.progressPercentage + 1)+ 33.33; // Increase progress by one-third (33.33%) 
  //   // if (increase) {
  //   //   this.progressPercentage += 33.33; // Increase progress by one-third (33.33%)
  //   // } else {
  //   //   this.progressPercentage -= 33.33; // Decrease progress by one-third (33.33%)
  //   // }
  // }

  // updateTextScene() {
  //   // this.currentStatement = this.statements[this.currentStatementIndex];
  //   // this.currentQuestion = this.questions[this.currentStepIndex];
  //   this.progressPercentage = (this.progressPercentage + 1) * 33.33; // Update progress
  // }

  previousStatement() {
    if (this.statementIndex > 0) {
      this.statementIndex--;
      this.updateTextScene();
    }
  }

  // previousStatement() {
  //   if (this.statementIndex > 0) {
  //     this.statementIndex--;
  //     this.updateTextScene();
  //   }


  //   // if (this.statementIndex > 0) {
  //   // this.statementIndex--;
  //   // this.updateTextScene(false); // Decrease progress
  //   // }
  // }

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

    this.statementIndex++;

    if (this.statementIndex < this.statement.length) {
      // If there are more statements/questions, navigate to the next loop
      this.router.navigate(['/indebtedscene']); // Assuming your component is named "indebtedscene"
    } else {
      // If all statements/questions are done, navigate to "summary2"
      this.router.navigate(['/summary2']);
    }    // Move to the next loop

  }

  // continueModal() {
  //   this.statementIndex++; // Move to the next loop
  //   if (this.statementIndex < this.statement.length) {
  //     this.updateTextScene(true); // Increase progress
  //   } else {
  //     this.statementIndex = 0; // Reset back to the first loop
  //     this.progressPercentage = 0; // Reset progress
  //   }
  // }


  ngOnInit() {
    this.progressPercentage = 25; // Initialize progress to 0%
    console.log("Percentage", this.progressPercentage)
    this.updateTextScene();
    this.counterService.currentSelection.subscribe((selectionValue: any) => {
      this.currentSelectionValue = selectionValue;
    });
  }

  updateTextScene() {
    this.progressPercentage = ((this.statementIndex + 1) / this.statement.length) * 75;
  }
  
}
