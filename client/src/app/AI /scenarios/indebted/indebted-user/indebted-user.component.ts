import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-indebted-user',
  templateUrl: './indebted-user.component.html',
  styleUrls: ['./indebted-user.component.scss']
})
export class IndebtedUserComponent implements OnInit {
  fullName: any = '';

  constructor() { }

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); // Assign the value to fullName
    console.log(this.fullName);
  }

  ngOnInit() {
    this.getLoggedInUserName();
    console.log(this.getLoggedInUserName());
  }

}
