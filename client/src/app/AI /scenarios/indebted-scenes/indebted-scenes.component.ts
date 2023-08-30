import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
// import { radioService} from 'src/app/services/radio.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { QuestionService } from 'src/app/services/question.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-indebted-scenes',
  templateUrl: './indebted-scenes.component.html',
  styleUrls: ['./indebted-scenes.component.scss'],
})
export class indebtedScenesComponent implements OnInit, AfterViewInit {
  indebtedForm = new FormGroup({
    selection1: new FormControl(),
    selection2: new FormControl(),
    selection3: new FormControl(),
  });

  // Provide a default value // Use MdbModalRef<any> if you don't have a specific modal component
  // Provide the correct type argument
  constructor(
    private cdRef: ChangeDetectorRef,
    private questionService: QuestionService
  ) // private RadioService: radioService
  {}

  statements = [
    'Mbali overspent on his credit card, resulting in a large debt with added interest charges from the credit card company.',
    'Mbali asked for debt management help for medical bills and job loss, with a counselor creating a new repayment plan after negotiating with creditors.',
    'Meet Nandi, who has multiple debts from student loans, credit cards, and a car loan. It is hard for her to keep track of payments and interest rates.',
    'what helps people in debt by creating a manageable repayment plan through a formal program with the assistance of a debt counselor?The goal is to negotiate with creditors and protect them from legal action.',
  ];

  questions = [
    'What will be affected below based on Mbali’s scenario? Select One answer',
    'Which debt management program helped Mbali? Select One answer',
    'Which debt management do you think Nandi needs? Select One answer',
    'what helps people in debt by creating a manageable repayment plan',
  ];

  correctAnswers = [
    'Credit Score', // Answer for the first statement
    'Debt Counselling', // Answer for the second statement
    'Debt Consolidation',
    'Debt Review', // Add correct answers for other statements
  ];

  labels = [
    {
      for: 'first Answers',
      text: 'Credit limits',
      text2: 'Credit Score',
      text3: 'Debtor status',
    },
    {
      for: 'second Answers',
      text: 'Debt Review',
      text2: 'Debt Counselling',
      text3: 'Debt Consolidation',
    },
  ];

  currentStatementIndex = 0;
  currentStepIndex = 0;
  currentStatement: string = ''; // Declare the property here
  currentQuestion: string = '';
  // currentSelectedRadio = '';
  progressPercentage = 0; // Initialize the progress percentage
  isRadioSelected: boolean = false; // initially setting the radio boxes to false(not selected)
  showIncorrectMessage: boolean = false;

  // isFirstIteration = true; // Flag to track the first iteration

  ngOnInit(): void {
    this.updateTextScene();
    // this.RadioService.radioSelection.subscribe((counterValue) => {
    //   this.currentSelectedRadio = counterValue;
    // });
  }

  ngAfterViewInit(): void {
    this.initializeVanillaJSLogic();
  }

  updateTextScene() {
    this.currentStatement = this.statements[this.currentStatementIndex];
    this.currentQuestion = this.questions[this.currentStepIndex];
    this.progressPercentage = (this.currentStatementIndex + 1) * 25; // Update progress
  }

  previousStatement() {
    if (this.currentStatementIndex > 0) {
      this.currentStatementIndex--;
      this.currentStepIndex--;
      this.updateTextScene();
    }
  }

  getCorrectAnswer(): string {
    // Implement this function to return the correct answer for the current statement
    console.log(
      this.correctAnswers[this.currentStatementIndex],
      'correct ans here'
    );

    return this.correctAnswers[this.currentStatementIndex];
  }

  getSelectedAnswer(): string {
    const selectedRadio = Array.from(
      document.getElementsByName('debt-manage')
    ).find(
      (option) => option instanceof HTMLInputElement && option.checked
    ) as HTMLInputElement;
    console.log(selectedRadio.value, 'selected value in func ');
    return selectedRadio.value;
    // return selectedRadio ? selectedRadio.value : '';
  }

  nextStatement() {
    if (this.currentStatementIndex < this.statements.length - 1) {
      const correctAnswer = this.getCorrectAnswer(); // Implement this function to get the correct answer
      const selectedAnswer = this.getSelectedAnswer(); // Get the selected answer
      console.log(this.getSelectedAnswer(), 'selected answer');
      console.log(correctAnswer, 'correct ans');

      if (this.getSelectedAnswer() == correctAnswer) {
        console.log('ans is correct');
        console.log(this.getSelectedAnswer(), 'selected answer');
        console.log(correctAnswer, 'correct ans');
      } else {
        console.log('ans is incorrect');
      }

      if (this.isRadioSelected) {
        this.showIncorrectMessage = selectedAnswer !== correctAnswer; // Set incorrect message condition
      } else {
        this.showIncorrectMessage = true; // Show the message for not selecting an answer
      }

      setTimeout(() => {
        this.showIncorrectMessage = false; // Reset the message after a timeout
        this.isRadioSelected = false; // Reset radio selection
        this.currentStatementIndex++;
        this.currentStepIndex++;
        this.updateTextScene();
        this.cdRef.detectChanges(); // Trigger change detection
      }, 2000); // Adjust the timeout duration as needed
    }
  }

  // This method is added to handle the vanilla JavaScript logic
  initializeVanillaJSLogic() {
    const textSceneElement = document.querySelector(
      '.textScene'
    ) as HTMLParagraphElement;
    const previousBtn = document.getElementById(
      'previousBtn'
    ) as HTMLButtonElement;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;

    const statements = [
      'Mbali overspent on his credit card, resulting in a large debt with added interest charges from the credit card company.',
      'Another  goes here.',
      'Yet another statement goes here.',
    ];

    let currentStatementIndex = 0;

    const updateTextScene = () => {
      textSceneElement.textContent = statements[currentStatementIndex];
    };

    updateTextScene();

    previousBtn.addEventListener('click', () => {
      if (currentStatementIndex > 0) {
        currentStatementIndex--;
        updateTextScene();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentStatementIndex < statements.length - 1) {
        currentStatementIndex++;
        updateTextScene();
      }
    });
  }

  checkRadioSelection() {
    const radioOptions = Array.from(
      document.getElementsByName('debt-manage')
    ) as HTMLInputElement[];
    // this.isRadioSelected = radioOptions.some(option => option.checked);
    // Use forEach to iterate through the array
    radioOptions.forEach((option) => {
      if (option.checked) {
        this.isRadioSelected = true;
        return;
      }
    });
  }

  onSubmit() {
    console.log(this.indebtedForm.value);
  }
}
