import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-summary2',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.scss']
})
export class Summary2Component implements OnInit {
progressPercentage: any;
fullName: any = '';

  constructor( 
  private usersServices: UsersService
  ){}

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); 
    console.log(this.fullName);
  }
 ngOnInit(): void {
  }
  goBack(){
    this.usersServices.previousPage();
  }

}
