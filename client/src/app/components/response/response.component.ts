import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import axios from 'axios';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class responseComponent implements OnInit {
  question!: '';
  @Input() explanation: any;
  error!: string;
  word: any;
  router: any;

  constructor(private questionService: QuestionService) { }
  reloadPage(): void {
    window.location.reload()
  }

  ngOnInit(): void {
    this.explanation = localStorage.getItem("explanation")

  }

  getMeaning() {
    this.questionService.sendQuestionAndGetExplanation(this.question).subscribe(data => {
      console.log(data.explanation)
      this.explanation = data.explanation
    })
  }
}


