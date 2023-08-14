import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from 'express';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class responseComponent implements OnInit {
  router: any;
Continue() {
  this.router.navigate['/aa'];
}
  question!: string;
  explanation!: string;
  error!: string;
word: any;

  constructor( private questionService: QuestionService) { }

  ngOnInit(): void {

    

  }

  // async getMeaning(): Promise<void> {
  //   try {
  //     const response = await axios.post('/api/meaning', { question: this.question });
  //     this.explanation = response.data.explanation;
  //     this.error = 'null';
  //   } catch (error) {
  //     this.error = 'Error fetching meaning.';
  //     console.error('Error fetching meaning:', error);
  //   }
  // }

  getMeaning(){
    this.questionService.sendQuestionAndGetExplanation(this.question).subscribe(data => {
      console.log(data.explanation)
      this.explanation = data.explanation
    })
  }


}
