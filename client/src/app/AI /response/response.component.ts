import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { NoDebtUserComponent } from '../scenarios/no-debt/no-debt-user/no-debt-user.component';

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


