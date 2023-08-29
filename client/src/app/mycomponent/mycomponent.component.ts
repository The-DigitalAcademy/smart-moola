import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  currentSelectionValue = '';
  

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.currentSelection.subscribe((selectionValue) => {
      this.currentSelectionValue = selectionValue;
    });
  }

  progressPercentage = 25;

  updateTextScene() {
    this.progressPercentage = 25; // Update progress
  }

  previousStatement() {
    this.updateTextScene();
  }

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
      case 'selectionA':
        this.selectionA();
        break;
      case 'selectionB':
        this.selectionB();
        break;
      case 'selectionC':
        this.selectionC();
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
   
  selectionA() {
    this.counterService.selectionA();
  }

  selectionB() {
    this.counterService.selectionB();
  }

  selectionC() {
    this.counterService.selectionC();
  }

  // Loop statement to iterate 4 times
  i: number = 0;
  loopWithIfStatement() {
    for ( this.i ; this.i < 4; this.i++) {

      if (this.i === 0) {

        console.log(`Iteration ${this.i + 1} - Doing something for i = 0`);
        

      } else {

        console.log(`Iteration ${this.i + 1} - Doing something for i ≠ 0`);

      }

    }
  }
}
