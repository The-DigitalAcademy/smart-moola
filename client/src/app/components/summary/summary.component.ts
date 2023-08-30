import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(
    private usersServices: UsersService
  ) { }

  ngOnInit(): void {
  }

  goBack(){
    this.usersServices.previousPage
  }
  fullName: any = '';

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); // Assign the value to fullName
    console.log(this.fullName);
  }
}
