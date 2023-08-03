import { Component, OnInit, Input } from '@angular/core';
import { AnswersComponent } from '../answers/answers.component';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
questions: any;
@Input() answers: any;  

  constructor() { }

  ngOnInit(): void {
  }

}
