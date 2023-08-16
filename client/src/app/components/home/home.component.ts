import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  userTypes = ['debt-free-user', 'indebted'];
  selectedUserType: string = '';
  fullName: any = '';

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); // Assign the value to fullName
    console.log(this.fullName);
  }

  ngOnInit() {
    this.getLoggedInUserName();
    console.log(this.getLoggedInUserName())
  }
}
