import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response-tumi',
  templateUrl: './response-tumi.component.html',
  styleUrls: ['./response-tumi.component.scss']
})
export class TumiResponseComponent implements OnInit {

  responses: any = ''

  constructor(
    private router: Router,
    public loaderService: LoaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    localStorage.getItem('userResponse')
    console.log(
      localStorage.getItem('userResponse'), "the response")

    this.route.queryParams.subscribe(params => {
      this.responses = params['userResponse'];
    });

    setTimeout(() => {
      this.loaderService.startLoader()
      this.router.navigate(['/response'])
      this.loaderService.stopLoader();
    }, 3000);

  }

}