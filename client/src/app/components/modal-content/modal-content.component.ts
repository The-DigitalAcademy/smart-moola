import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {

  // @Output() nextStatementEvent = new EventEmitter<void>();
  // showIncorrectMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  
  // nextStatement() {
  //   this.nextStatementEvent.emit(); // Emit the event to the parent component
  // }
}

