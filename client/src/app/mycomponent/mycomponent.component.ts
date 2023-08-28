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
    
    this.progressPercentage =  25; // Update progress
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

  
}
