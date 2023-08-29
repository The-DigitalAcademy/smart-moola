import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

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
  fullName: any = '';

  constructor(private questionService: QuestionService) { }
  reloadPage(): void {
    window.location.reload()
  }

  ngOnInit(): void {
    this.explanation = localStorage.getItem("explanation")

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


