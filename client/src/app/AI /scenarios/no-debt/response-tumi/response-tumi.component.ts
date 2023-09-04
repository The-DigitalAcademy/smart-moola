import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';

@Component({
  selector: 'app-response-tumi',
  templateUrl: './response-tumi.component.html',
  styleUrls: ['./response-tumi.component.scss']
})
export class TumiResponseComponent implements OnInit {

  correctResponse = false;
  incorrectResponse = false;

  constructor(
    private router: Router,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.loaderService.startLoader()
      this.router.navigate(['/response'])
      this.loaderService.stopLoader();
    }, 3000);
  }

}