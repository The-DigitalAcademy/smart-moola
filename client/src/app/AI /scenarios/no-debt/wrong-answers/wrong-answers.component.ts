import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';

@Component({
  selector: 'app-wrong-answers',
  templateUrl: './wrong-answers.component.html',
  styleUrls: ['./wrong-answers.component.scss']
})
export class WrongAnswersComponent implements OnInit {

  constructor(private router : Router, public loaderService: LoaderService) { }

  ngOnInit() {

    
  setTimeout(() => {
      this.loaderService.startLoader()
      this.router.navigate(['/response'])
      this.loaderService.stopLoader();
    }, 3000)  

  }

}
