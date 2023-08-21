import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';

@Component({
  selector: 'app-wrong-answers',
  templateUrl: './wrong-answers.component.html',
  styleUrls: ['./wrong-answers.component.css']
})
export class WrongAnswersComponent implements OnInit {

  constructor(private router : Router, public loaderService: LoaderService) { }

  ngOnInit() {

    this.loaderService.startLoader()

    setTimeout(() => {
      this.loaderService.stopLoader();
      this.router.navigate(['/response'])
    }, 3000)

  }

}
