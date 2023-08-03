import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/interface/questions';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers: [] = [];
  @Input() answer: any;


  constructor() { }

  ngOnInit(): void {
  }

  hair() {
    this.answer = 'hello'
  }

}
