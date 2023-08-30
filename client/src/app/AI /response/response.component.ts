import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})

export class responseComponent implements OnInit {
  question!: '';
  explanation: any;
  error!: string;
  word: any;
  fullName: any = '';

  constructor(private questionService: QuestionService) { }
  reloadPage(): void {
    window.location.reload()
  }

  ngOnInit(): void {
    // this.explanation = localStorage.getItem("explanation");

    this.explanation = "Credit is an agreement between two parties where one party provides money, goods, or services to another party and the other party agrees to repay the amount received in the future, usually with interest. In other words, credit is a type of loan or debt. It is a way of purchasing goods"



    this.getLoggedInUserName();
    console.log(this.getLoggedInUserName())
  }

  getMeaning() {
    this.questionService.sendQuestionAndGetExplanation(this.question).subscribe(data => {
      console.log(data.explanation)
      this.explanation = data.explanation
    })
  }

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); // Assign the value to fullName
    console.log(this.fullName);
  }
}


