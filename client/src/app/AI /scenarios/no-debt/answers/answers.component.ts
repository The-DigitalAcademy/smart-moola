import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers: [] = [];
  @Input() answer: any;

  constructor(private router : Router, public loaderService: LoaderService) { }

  ngOnInit(): void {
 
    setTimeout(() => {
        this.loaderService.startLoader()
        this.router.navigate(['/response'])
        this.loaderService.stopLoader();
      }, 3000)
    }
}


