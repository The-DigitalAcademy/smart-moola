import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

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
  


  constructor(private counterService: CounterService) {}

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
        break;
      case 'selection2':
        this.selection2();
        break;
      case 'selection3':
        this.selection3();
        break;
      default:
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
    // this.statementIndex++; // Move to the next loop
    // if (this.statementIndex < this.statement.length) {
    //   this.updateTextScene();
    // } else {
    //   this.statementIndex = 0; // Reset back to the first loop
    //   this.progressPercentage = 0; // Reset progress
    // } 

    

    const selectedAnswer = this.currentSelectionValue;
    const correctAnswer = this.correct[this.statementIndex];

    

    if (selectedAnswer === correctAnswer) {
      this.isResponseCorrect = true; // Set response to correct
    } else {
      this.isResponseCorrect = false; // Set response to incorrect
    }

    this.statementIndex++; // Move to the next loop

    // if (this.statementIndex < this.statement.length) {
    //   this.updateTextScene();
    // } else {
    //   this.statementIndex = 0; // Reset back to the first loop
    //   this.progressPercentage = 0; // Reset progress
    //   this.isResponseCorrect = false; // Reset response status
    // }

  }

  

  
}
