import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';

@Component({
  selector: 'app-response-tumi',
  templateUrl: './response-tumi.component.html',
  styleUrls: ['./response-tumi.component.scss']
})
export class TumiResponseComponent implements OnInit {

  responses = false

  userRes: any;

  constructor(
    private router: Router,
    public loaderService: LoaderService
  ) { }

  getUserResponse() {
    let responses = localStorage.getItem('userResponse');
    console.log("userb res: " + responses)
  }

  ngOnInit() {
    this.getUserResponse()
    setTimeout(() => {
      this.loaderService.startLoader()
      this.router.navigate(['/response'])
      this.loaderService.stopLoader();
    }, 3000);
  }

}