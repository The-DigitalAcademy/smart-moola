import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-indebted-scenes',
  templateUrl: './indebted-scenes.component.html',
  styleUrls: ['./indebted-scenes.component.scss']
})
export class indebtedScenesComponent implements OnInit, AfterViewInit {

  statements = [
    "Mbali overspent on his credit card, resulting in a large debt with added interest charges from the credit card company.",
    "Mbali asked for debt management help for medical bills and job loss, with a counselor creating a new repayment plan after negotiating with creditors.",
    "Meet Nandi, who has multiple debts from student loans, credit cards, and a car loan. It is hard for her to keep track of payments and interest rates.",
    "What helps people in debt by creating a manageable repayment plan through a formal program with the assistance of a debt counselor?The goal is to negotiate with creditors and protect them from legal action."
  ];

  questions = [
    "What will be affected below based on Mbali’s scenario? Select One answer",
    "Which debt management program helped Mbali? Select One answer",
    "Which debt management do you think Nandi needs? Select One answer"
  ];

  labels = [
    { for: 'first Answers', text: 'Credit limits', text2: 'Credit Score', text3: 'Debtor status' },
    { for: 'second Answers', text: 'Debt Review', text2: 'Debt Counselling', text3: 'Debt Consolidation' },
  ];

  currentStatementIndex = 0;
  currentStepIndex = 0;
  currentStatement: string = ''; // Declare the property here
  currentQuestion: string = '';
  progressPercentage = 0; // Initialize the progress percentage
  isRadioSelected = false; // initially setting the radio boxes to false(not selected)

  ngOnInit(): void {
    this.updateTextScene();
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

  nextStatement() {
    if (this.currentStatementIndex < this.statements.length - 1) {
      this.currentStatementIndex++;
      this.currentStepIndex++;
      this.updateTextScene();
    }
  }

  // This method is added to handle the vanilla JavaScript logic
  initializeVanillaJSLogic() {
    const textSceneElement = document.querySelector('.textScene') as HTMLParagraphElement;
    const previousBtn = document.getElementById('previousBtn') as HTMLButtonElement;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;

    const statements = [
      "Mbali overspent on his credit card, resulting in a large debt with added interest charges from the credit card company.",
      "Another  goes here.",
      "Yet another statement goes here."
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
    const radioOptions = Array.from(document.getElementsByName('debt-manage')) as HTMLInputElement[];

    // Use forEach to iterate through the array
    radioOptions.forEach(option => {
      if (option.checked) {
        this.isRadioSelected = true;
        return;
      }
    });
    }
  
}
