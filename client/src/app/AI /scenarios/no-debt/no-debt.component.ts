import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-no-debt',
  templateUrl: './no-debt.component.html',
  styleUrls: ['./no-debt.component.scss']
})
export class NoDebtComponent implements OnInit {

  constructor(
    private usersServices: UsersService
  ) { }

  fullName: any = '';

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName');
    console.log(this.fullName);
  }

  ngOnInit() {
    this.getLoggedInUserName();
    console.log(this.getLoggedInUserName())
  }

  goBack() {
    this.usersServices.previousPage();
  }

}
