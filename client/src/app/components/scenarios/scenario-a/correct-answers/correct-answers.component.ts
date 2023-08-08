import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correct-answers',
  templateUrl: './correct-answers.component.html',
  styleUrls: ['./correct-answers.component.css']
})
export class CorrectAnswersComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  continueToNext() {
 this.router.navigate(["/aa"]) 
   }
}
