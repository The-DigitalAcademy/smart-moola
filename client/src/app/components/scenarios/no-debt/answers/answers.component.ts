import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers: [] = [];
  @Input() answer: any;

  constructor(private router : Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(["/correctAnswer"])
    }, 2500);
  }
}
