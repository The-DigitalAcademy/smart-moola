import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../services/counter.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { Loader } from 'ngx-ui-loader';
import { LoaderService } from 'src/app/services/Loader';

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
  selectedValue = '';

  //FROM NO DEBT USER
  question = '';
  prompt = ''
  explanation = ''
  isLoading: boolean = true;

  constructor(private counterService: CounterService,
    private router: Router,
    private questionsService: QuestionService,
    private session: SessionsService,
    private loaderService: LoaderService
  ) { }

  statement = [
    "Mbali asked for debt management help for medical bills and job loss, with a counselor creating a new repayment plan after negotiating with creditors.",
    "Meet Nandi, who has multiple debts from student loans, credit cards, and a car loan. It is hard for her to keep track of payments and interest rates.",
    "What helps people in debt by creating a manageable repayment plan through a formal program with the assistance of a debt counselor?The goal is to negotiate with creditors and protect them from legal action."
  ];

  questions = [
    `Which debt management program helped Mbali? <br> <strong>Select One answer:</strong>`,
    `Which debt management do you think Nandi needs? <br> <strong>Select One answer:</strong>`,
    `What helps people in debt by creating a manageable repayment plan:`
  ];

  correct = [
    "Debt Counselling",
    "Debt Consolidation",
    "Debt Review"
  ]

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

  previousStatement() {
    if (this.statementIndex > 0) {
      this.statementIndex--;
      this.updateTextScene();
    }
  }

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
    const selectedAnswer = this.selectedValue; // Use selectedValue to check the selected radio button
    const correctAnswer = this.correct[this.statementIndex];
    this.getMeaning();

    if (selectedAnswer === correctAnswer) {
      this.isResponseCorrect = true; // Set response to correct
    } else {
      this.isResponseCorrect = false; // Set response to incorrect
    }

    this.statementIndex++;

    // Start the loader
    this.loaderService.startLoader();

    // After a delay (for example, 3000 milliseconds), navigate to the modal
    setTimeout(() => {
      this.router.navigate(['/modal']);

      // Stop the loader and hide it
      this.isLoading = false;
      this.loaderService.stopLoader();
    }, 3000);

    if (this.statementIndex < this.statement.length) {
      // If there are more statements/questions, navigate to the next loop
      this.selectedValue = ''; // Clear the selected radio button
      this.router.navigate(['/indebtedscene']);
    } else {
      // If all statements/questions are done, navigate to "summary2"
      this.router.navigate(['/summary2']);
    }
  }

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
