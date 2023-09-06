import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';
@Component({
  selector: 'app-response-mandla',
  templateUrl: './response-mandla.component.html',
  styleUrls: ['./response-mandla.component.scss']
})
export class MandlaResponseComponent implements OnInit {

  responses: any = ''

  constructor(
    private router: Router,
    public loaderService: LoaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
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


