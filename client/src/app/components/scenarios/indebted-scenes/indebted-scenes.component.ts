import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-indebted-scenes',
  templateUrl: './indebted-scenes.component.html',
  styleUrls: ['./indebted-scenes.component.css']
})
export class indebtedScenesComponent implements OnInit, AfterViewInit{

  constructor(private cdRef: ChangeDetectorRef) {}

  statements = [
    "Mbali overspent on his credit card, resulting in a large debt with added interest charges from the credit card company.",
    "Mbali asked for debt management help for medical bills and job loss, with a counselor creating a new repayment plan after negotiating with creditors.",
    "Meet Nandi, who has multiple debts from student loans, credit cards, and a car loan. It is hard for her to keep track of payments and interest rates.",
    "what helps people in debt by creating a manageable repayment plan through a formal program with the assistance of a debt counselor?The goal is to negotiate with creditors and protect them from legal action."
  ];
  

  questions = [
    "What will be affected below based on Mbali’s scenario? Select One answer",
    "Which debt management program helped Mbali? Select One answer",
    "Which debt management do you think Nandi needs? Select One answer",
    "what helps people in debt by creating a manageable repayment plan"
  ];

  correctAnswers = [
    'Credit Score',         // Answer for the first statement
    'Debt Counselling',     // Answer for the second statement
    'Debt Consolidation',
    'Debt Review'                  // Add correct answers for other statements
  ];
  

  labels = [
    { for: 'first Answers', text: 'Credit limits', text2: 'Credit Score', text3: 'Debtor status'},
    { for: 'second Answers', text: 'Debt Review', text2: 'Debt Counselling', text3: 'Debt Consolidation' },
  ];




 
  currentStatementIndex = 0;
  currentStepIndex = 0;
  currentStatement: string = ''; // Declare the property here
  currentQuestion: string = '';
  progressPercentage = 0; // Initialize the progress percentage
  isRadioSelected: boolean = false; // initially setting the radio boxes to false(not selected)
  showIncorrectMessage = false; 

  
  // isFirstIteration = true; // Flag to track the first iteration


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

  // updateLabels() {
  //   if (this.isFirstIteration) {
  //     this.labels[0].text2 = 'Credit Score'; // Update the label text for the first iteration
  //     this.isFirstIteration = false; // Set the flag to false after the first iteration
  //   }
  // }


  previousStatement() {
    if (this.currentStatementIndex > 0) {
      this.currentStatementIndex--;
      this.currentStepIndex--;
      this.updateTextScene();
    }
  }

  getCorrectAnswer(): string {
    // Implement this function to return the correct answer for the current statement
    return this.correctAnswers[this.currentStatementIndex];

  }
  
  getSelectedAnswer(): string {
  const selectedRadio = Array.from(document.getElementsByName('debt-manage'))
    .find(option => option instanceof HTMLInputElement && option.checked) as HTMLInputElement;
  return selectedRadio ? selectedRadio.value : '';
}


  nextStatement() {
    if (this.currentStatementIndex < this.statements.length - 1) {
      const correctAnswer = this.getCorrectAnswer(); // Implement this function to get the correct answer
      
      if (this.isRadioSelected && this.getSelectedAnswer() === correctAnswer) {
        this.showIncorrectMessage = false; // Hide the message if the answer is correct
      } else {
        this.showIncorrectMessage = true; // Show the message for an incorrect answer
      }
      
      this.cdRef.detectChanges(); // Trigger change detection
      
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
    // this.isRadioSelected = radioOptions.some(option => option.checked);
    // Use forEach to iterate through the array
    radioOptions.forEach(option => {
      if (option.checked) {
        this.isRadioSelected = true;
        return;
      }
       
    });

    }

}
