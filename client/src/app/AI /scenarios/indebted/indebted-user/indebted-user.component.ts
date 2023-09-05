import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-indebted-user',
  templateUrl: './indebted-user.component.html',
  styleUrls: ['./indebted-user.component.scss']
})
export class IndebtedUserComponent implements OnInit {
  fullName: any = '';

  constructor(
    private usersServices: UsersService
  ) { }

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); // Assign the value to fullName
    console.log(this.fullName);
  }

  ngOnInit() {
    this.getLoggedInUserName();
    console.log(this.getLoggedInUserName());
  }

  goBack() {
    this.usersServices.previousPage();
  }

}
